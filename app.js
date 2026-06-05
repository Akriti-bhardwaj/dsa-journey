// ============================================================
// DSA Journey — app.js
// ============================================================

// ─── Storage ─────────────────────────────────────────────────
const STORAGE_KEY = 'dsa_journey_v2';
const TOPICS_KEY  = 'dsa_topics_v1';

function loadData() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
  catch { return {}; }
}
function saveData(d) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(d)); } catch {}
}
function loadTopics() {
  try { return JSON.parse(localStorage.getItem(TOPICS_KEY)) || []; }
  catch { return []; }
}
function saveTopics(t) {
  try { localStorage.setItem(TOPICS_KEY, JSON.stringify(t)); } catch {}
}

// ─── State ───────────────────────────────────────────────────
let data = loadData();
let activeTopics = loadTopics();

const now = new Date();
let viewYear  = now.getFullYear();
let viewMonth = now.getMonth();
let selectedKey = null;

// ─── Helpers ─────────────────────────────────────────────────
const MONTHS = ['January','February','March','April','May','June',
                'July','August','September','October','November','December'];
const DAYS   = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

function dateKey(y, m, d) {
  return `${y}-${String(m+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
}

function todayKey() {
  return dateKey(now.getFullYear(), now.getMonth(), now.getDate());
}

// ─── Stats ───────────────────────────────────────────────────
function computeStreak() {
  let streak = 0;
  const d = new Date(now);
  while (true) {
    const k = dateKey(d.getFullYear(), d.getMonth(), d.getDate());
    if (data[k] && data[k].done) { streak++; d.setDate(d.getDate() - 1); }
    else break;
  }
  return streak;
}

function computeStats() {
  const keys  = Object.keys(data).filter(k => data[k] && data[k].done);
  const total = keys.length;

  const monthDone = keys.filter(k => {
    const [y, m] = k.split('-').map(Number);
    return y === now.getFullYear() && (m - 1) === now.getMonth();
  }).length;

  const startOfYear = new Date(now.getFullYear(), 0, 1);
  const daysPassed  = Math.floor((now - startOfYear) / 86400000) + 1;
  const pct         = daysPassed > 0 ? Math.round((total / daysPassed) * 100) : 0;

  return { total, monthDone, streak: computeStreak(), pct };
}

function updateStats() {
  const s = computeStats();
  document.getElementById('statStreak').textContent = s.streak;
  document.getElementById('statTotal').textContent  = s.total;
  document.getElementById('statMonth').textContent  = s.monthDone;
  document.getElementById('statPct').textContent    = s.pct + '%';
  document.getElementById('headerStreak').textContent = `🔥 ${s.streak} day streak`;
  document.getElementById('headerTotal').textContent  = `✅ ${s.total} days done`;
  updateCatMessage(s.streak);
}

// ─── Cat Messages ─────────────────────────────────────────────
const catPool = [
  { e: '🐱', msg: "Meow! Every line of code you write today is an investment in your future! Keep grinding! 💜" },
  { e: '😺', msg: "Purr~ Consistency is the secret weapon of top engineers. You're building it right now! ✨" },
  { e: '😸', msg: "Hewwo! Even solving ONE problem today keeps the momentum alive. You've got this! 🌸" },
  { e: '🙀', msg: "Oh no, don't skip today! Your streak is precious — protect it like your life depends on it! 🔥" },
  { e: '😻', msg: "I believe in you SO much! The grind is temporary, but the skills last forever. Let's go! 💖" },
  { e: '🐈', msg: "Pspsps... come solve some DSA! Every expert was once a beginner who kept showing up! 💜" },
];

function updateCatMessage(streak) {
  let cat;
  if (streak >= 30) {
    cat = { e: '👑🐱', msg: `LEGENDARY! ${streak}-day streak!! You are an absolute DSA MACHINE! The algorithm bows to you! 🎉` };
  } else if (streak >= 14) {
    cat = { e: '🏆🐱', msg: `${streak} days in a ROW!! You're unstoppable! Top coders are made exactly like this! 🌟` };
  } else if (streak >= 7) {
    cat = { e: '🌟😸', msg: `${streak}-day streak! You're on FIRE! One week of consistency — keep that energy going! 🔥` };
  } else if (streak === 0) {
    cat = { e: '🥺🐱', msg: "Miss me? Let's start fresh today! Every day you don't code is a day you could've grown. Come back! 💜" };
  } else {
    cat = catPool[Math.floor(Math.random() * catPool.length)];
  }
  document.getElementById('catAvatar').textContent = cat.e;
  document.getElementById('catText').textContent   = cat.msg;
}

// ─── Calendar ─────────────────────────────────────────────────
function renderCalendar() {
  document.getElementById('monthLabel').textContent = `${MONTHS[viewMonth]} ${viewYear}`;

  const grid     = document.getElementById('daysGrid');
  grid.innerHTML = '';

  const firstDay    = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const tk          = todayKey();

  // Empty leading cells
  for (let i = 0; i < firstDay; i++) {
    const el = document.createElement('div');
    el.className = 'day-cell empty';
    grid.appendChild(el);
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const k         = dateKey(viewYear, viewMonth, d);
    const entry     = data[k] || {};
    const isToday   = k === tk;
    const cellDate  = new Date(viewYear, viewMonth, d);
    const isPast    = cellDate < new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const isFuture  = !isToday && !isPast;
    const isDone    = !!entry.done;
    const hasNote   = !!(entry.note && entry.note.trim());

    const el = document.createElement('div');

    let classes = 'day-cell';
    if (isDone)           classes += ' done';
    else if (isFuture)    classes += ' normal future';
    else if (isPast)      classes += ' missed';
    else                  classes += ' normal';
    if (isToday)          classes += ' today-cell';
    if (hasNote)          classes += ' has-note';
    el.className = classes;

    if (isDone) {
      el.innerHTML = `<span class="day-tick">✅</span><span class="day-num">${d}</span>`;
    } else {
      el.innerHTML = `<span class="day-num">${d}</span>`;
    }

    if (!isFuture) {
      el.addEventListener('click', () => openModal(d, k));
    }

    grid.appendChild(el);
  }
}

// ─── Modal ────────────────────────────────────────────────────
function openModal(day, key) {
  selectedKey = key;
  const entry  = data[key] || {};
  const isDone = !!entry.done;
  const note   = entry.note || '';

  const d       = new Date(viewYear, viewMonth, day);
  const isToday = key === todayKey();

  document.getElementById('modalDate').textContent  =
    `${DAYS[d.getDay()]}, ${MONTHS[viewMonth]} ${day}, ${viewYear}`;
  document.getElementById('modalTitle').textContent =
    isToday ? "Check in for today!" : isDone ? "Update this day" : "Log this past day";
  document.getElementById('modalCat').textContent   =
    isDone ? '😸' : isToday ? '🐱' : '😺';

  // Checkin button
  const btn   = document.getElementById('checkinBtn');
  const icon  = document.getElementById('checkinIcon');
  const label = document.getElementById('checkinLabel');
  if (isDone) {
    btn.classList.add('checked');
    icon.textContent  = '✅';
    label.textContent = 'DSA Done! (click to undo)';
  } else {
    btn.classList.remove('checked');
    icon.textContent  = '☐';
    label.textContent = 'Mark DSA Done';
  }

  // Note display
  const toggleBtn  = document.getElementById('noteToggleBtn');
  const inputWrap  = document.getElementById('noteInputWrap');
  const savedDisp  = document.getElementById('savedNoteDisplay');
  const savedText  = document.getElementById('savedNoteText');
  const textarea   = document.getElementById('noteTextarea');

  inputWrap.style.display = 'none';
  toggleBtn.textContent   = note ? 'Edit Note' : 'Add Note';

  if (note) {
    savedDisp.style.display = 'block';
    savedText.textContent   = note;
  } else {
    savedDisp.style.display = 'none';
  }

  textarea.value = note;
  document.getElementById('modalFooterMsg').textContent = '';

  document.getElementById('modal').classList.add('open');
}

function closeModal() {
  document.getElementById('modal').classList.remove('open');
  selectedKey = null;
}

// Checkin toggle
document.getElementById('checkinBtn').addEventListener('click', () => {
  if (!selectedKey) return;
  const entry  = data[selectedKey] || {};
  const isDone = !!entry.done;
  const newVal = !isDone;

  data[selectedKey] = { ...entry, done: newVal };
  saveData(data);

  const btn   = document.getElementById('checkinBtn');
  const icon  = document.getElementById('checkinIcon');
  const label = document.getElementById('checkinLabel');

  if (newVal) {
    btn.classList.add('checked');
    icon.textContent  = '✅';
    label.textContent = 'DSA Done! (click to undo)';
    document.getElementById('modalFooterMsg').textContent = '🎉 Amazing! Keep it up!';
    shootConfetti();
  } else {
    btn.classList.remove('checked');
    icon.textContent  = '☐';
    label.textContent = 'Mark DSA Done';
    document.getElementById('modalFooterMsg').textContent = '';
  }

  renderCalendar();
  updateStats();
});

// Note toggle
document.getElementById('noteToggleBtn').addEventListener('click', () => {
  const wrap = document.getElementById('noteInputWrap');
  const savedDisp = document.getElementById('savedNoteDisplay');
  const textarea  = document.getElementById('noteTextarea');

  if (wrap.style.display === 'none') {
    wrap.style.display = 'block';
    savedDisp.style.display = 'none';
    const entry = data[selectedKey] || {};
    textarea.value = entry.note || '';
    textarea.focus();
    document.getElementById('noteToggleBtn').textContent = 'Cancel';
  } else {
    wrap.style.display = 'none';
    const entry = data[selectedKey] || {};
    if (entry.note) {
      savedDisp.style.display = 'block';
      document.getElementById('savedNoteText').textContent = entry.note;
    }
    document.getElementById('noteToggleBtn').textContent = entry.note ? 'Edit Note' : 'Add Note';
  }
});

// Save note
document.getElementById('btnSaveNote').addEventListener('click', () => {
  if (!selectedKey) return;
  const textarea = document.getElementById('noteTextarea');
  const note     = textarea.value.trim();
  const entry    = data[selectedKey] || {};

  data[selectedKey] = { ...entry, note };
  saveData(data);

  const savedDisp = document.getElementById('savedNoteDisplay');
  const savedText = document.getElementById('savedNoteText');
  const inputWrap = document.getElementById('noteInputWrap');
  const toggleBtn = document.getElementById('noteToggleBtn');

  inputWrap.style.display = 'none';

  if (note) {
    savedDisp.style.display = 'block';
    savedText.textContent   = note;
    toggleBtn.textContent   = 'Edit Note';
  } else {
    savedDisp.style.display = 'none';
    toggleBtn.textContent   = 'Add Note';
  }

  document.getElementById('modalFooterMsg').textContent = note ? '📝 Note saved!' : '🗑️ Note cleared.';
  setTimeout(() => {
    document.getElementById('modalFooterMsg').textContent = '';
  }, 2000);

  renderCalendar();
});

// Cancel note
document.getElementById('btnCancelNote').addEventListener('click', () => {
  const wrap = document.getElementById('noteInputWrap');
  const entry = data[selectedKey] || {};
  wrap.style.display = 'none';
  const savedDisp = document.getElementById('savedNoteDisplay');
  if (entry.note) {
    savedDisp.style.display = 'block';
    document.getElementById('savedNoteText').textContent = entry.note;
  }
  document.getElementById('noteToggleBtn').textContent = entry.note ? 'Edit Note' : 'Add Note';
});

// Edit note button
document.getElementById('editNoteBtn').addEventListener('click', () => {
  const wrap     = document.getElementById('noteInputWrap');
  const savedDisp = document.getElementById('savedNoteDisplay');
  const textarea  = document.getElementById('noteTextarea');
  const entry     = data[selectedKey] || {};

  savedDisp.style.display = 'none';
  wrap.style.display = 'block';
  textarea.value = entry.note || '';
  textarea.focus();
  document.getElementById('noteToggleBtn').textContent = 'Cancel';
});

// Close modal
document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modal').addEventListener('click', e => {
  if (e.target === document.getElementById('modal')) closeModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// Month navigation
document.getElementById('prevBtn').addEventListener('click', () => {
  viewMonth--;
  if (viewMonth < 0) { viewMonth = 11; viewYear--; }
  renderCalendar();
});
document.getElementById('nextBtn').addEventListener('click', () => {
  viewMonth++;
  if (viewMonth > 11) { viewMonth = 0; viewYear++; }
  renderCalendar();
});

// ─── Topics ───────────────────────────────────────────────────
const TOPICS = [
  { icon: '📦', name: 'Arrays' },
  { icon: '🔗', name: 'Linked Lists' },
  { icon: '📚', name: 'Stacks & Queues' },
  { icon: '🌲', name: 'Trees' },
  { icon: '🕸️', name: 'Graphs' },
  { icon: '💡', name: 'Dynamic Programming' },
  { icon: '🔃', name: 'Sorting' },
  { icon: '🔍', name: 'Binary Search' },
  { icon: '🔄', name: 'Recursion' },
  { icon: '#️⃣', name: 'Hashing' },
  { icon: '⛰️', name: 'Heaps / Priority Queue' },
  { icon: '🔤', name: 'Tries' },
  { icon: '↩️', name: 'Backtracking' },
  { icon: '⚡', name: 'Bit Manipulation' },
  { icon: '👉', name: 'Two Pointers' },
  { icon: '🪟', name: 'Sliding Window' },
  { icon: '🧮', name: 'Math & Number Theory' },
  { icon: '🗺️', name: 'Graph — BFS/DFS' },
  { icon: '🌉', name: 'Union Find' },
  { icon: '🎯', name: 'Greedy' },
  { icon: '💾', name: 'STL in C++' },
  { icon: '🧵', name: 'String Algorithms' },
];

function renderTopics() {
  const grid = document.getElementById('topicsGrid');
  grid.innerHTML = '';
  TOPICS.forEach(({ icon, name }) => {
    const pill = document.createElement('div');
    pill.className = 'topic-pill' + (activeTopics.includes(name) ? ' active' : '');
    pill.innerHTML = `<span>${icon}</span><span>${name}</span>${activeTopics.includes(name) ? '<span class="check-mark">✓</span>' : ''}`;
    pill.addEventListener('click', () => {
      if (activeTopics.includes(name)) {
        activeTopics = activeTopics.filter(t => t !== name);
      } else {
        activeTopics.push(name);
      }
      saveTopics(activeTopics);
      renderTopics();
    });
    grid.appendChild(pill);
  });
}

// ─── Confetti ─────────────────────────────────────────────────
function shootConfetti() {
  const container = document.getElementById('confettiContainer');
  const colors    = ['#9333ea','#ec4899','#f472b6','#c084fc','#fbbf24','#34d399','#f0abfc'];

  for (let i = 0; i < 40; i++) {
    const bit = document.createElement('div');
    bit.className = 'confetti-bit';

    const size = 6 + Math.random() * 8;
    const x    = 20 + Math.random() * 60;
    const dx   = (Math.random() - 0.5) * 280;
    const dy   = 80 + Math.random() * 160;
    const dr   = (Math.random() - 0.5) * 720 + 'deg';
    const dur  = 0.7 + Math.random() * 0.8 + 's';
    const del  = Math.random() * 0.3 + 's';
    const col  = colors[Math.floor(Math.random() * colors.length)];

    bit.style.cssText = `
      left:${x}%; top:30%;
      width:${size}px; height:${size}px;
      background:${col};
      border-radius:${Math.random() > 0.5 ? '50%' : '2px'};
      --dx:${dx}px; --dy:${dy}px; --dr:${dr};
      --dur:${dur}; --del:${del};
      animation-delay:${del};
      animation-duration:${dur};
    `;
    container.appendChild(bit);
    setTimeout(() => bit.remove(), 1500);
  }
}

// ─── Custom Cursor & Glitter ──────────────────────────────────
const cursor      = document.getElementById('cursor');
const cursorTrail = document.getElementById('cursorTrail');

let cursorX = -100, cursorY = -100;
let trailX  = -100, trailY  = -100;
let lastGlitterTime = 0;

const glitterColors = [
  '#e879f9','#a855f7','#ec4899','#f9a8d4','#c084fc',
  '#f0abfc','#fbbf24','#34d399','#f472b6','#ffffff',
];

const glitterShapes = ['✦','✧','⋆','★','·','∘','◆','♦'];

function spawnGlitter(x, y) {
  const now = Date.now();
  if (now - lastGlitterTime < 25) return;
  lastGlitterTime = now;

  const count = 2 + Math.floor(Math.random() * 2);
  for (let i = 0; i < count; i++) {
    const g   = document.createElement('div');
    g.className = 'glitter';

    const isShape = Math.random() > 0.4;
    const size    = 4 + Math.random() * 9;
    const color   = glitterColors[Math.floor(Math.random() * glitterColors.length)];
    const gx      = (Math.random() - 0.5) * 50 + 'px';
    const gy      = -(20 + Math.random() * 40) + 'px';
    const delay   = i * 60;
    const dur     = 600 + Math.random() * 500;
    const ox      = (Math.random() - 0.5) * 24;
    const oy      = (Math.random() - 0.5) * 24;

    if (isShape) {
      g.textContent  = glitterShapes[Math.floor(Math.random() * glitterShapes.length)];
      g.style.cssText = `
        left:${x + ox}px; top:${y + oy}px;
        font-size:${size + 4}px; color:${color};
        --gx:${gx}; --gy:${gy};
        animation-delay:${delay}ms;
        animation-duration:${dur}ms;
        background:none; border-radius:0;
        line-height:1; display:flex; align-items:center; justify-content:center;
      `;
    } else {
      g.style.cssText = `
        left:${x + ox}px; top:${y + oy}px;
        width:${size}px; height:${size}px;
        background:${color};
        --gx:${gx}; --gy:${gy};
        animation-delay:${delay}ms;
        animation-duration:${dur}ms;
      `;
    }
    document.body.appendChild(g);
    setTimeout(() => g.remove(), dur + delay + 100);
  }
}

document.addEventListener('mousemove', e => {
  cursorX = e.clientX;
  cursorY = e.clientY;
  cursor.style.left = cursorX + 'px';
  cursor.style.top  = cursorY + 'px';
  spawnGlitter(cursorX, cursorY);
});

// Smooth trail
function animateTrail() {
  trailX += (cursorX - trailX) * 0.2;
  trailY += (cursorY - trailY) * 0.2;
  cursorTrail.style.left = trailX + 'px';
  cursorTrail.style.top  = trailY + 'px';
  requestAnimationFrame(animateTrail);
}
animateTrail();

// Hover effect on interactive elements
document.querySelectorAll('button, .day-cell, .topic-pill, a').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
});

// Dynamic hover — since day cells are re-rendered
document.getElementById('daysGrid').addEventListener('mouseover', e => {
  if (e.target.closest('.day-cell')) cursor.classList.add('hovering');
});
document.getElementById('daysGrid').addEventListener('mouseout', () => {
  cursor.classList.remove('hovering');
});
document.getElementById('topicsGrid').addEventListener('mouseover', e => {
  if (e.target.closest('.topic-pill')) cursor.classList.add('hovering');
});
document.getElementById('topicsGrid').addEventListener('mouseout', () => {
  cursor.classList.remove('hovering');
});

// ─── Init ─────────────────────────────────────────────────────
renderCalendar();
renderTopics();
updateStats();
