// ============================================================
// DSA Journey — app.js
// ============================================================

// ─── Icon library (line icons, no emoji) ───────────────────────
const ICONS = {
  flame: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
  checkCircle: '<circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.3 2.3L15.5 9"/>',
  checkSquare: '<rect x="4" y="4" width="16" height="16" rx="4"/><path d="m8.5 12.5 2.3 2.3L16 10"/>',
  square: '<rect x="4" y="4" width="16" height="16" rx="4"/>',
  calendar: '<rect x="3" y="4.5" width="18" height="16" rx="2.5"/><line x1="16" y1="2.5" x2="16" y2="6.5"/><line x1="8" y1="2.5" x2="8" y2="6.5"/><line x1="3" y1="10" x2="21" y2="10"/>',
  trendUp: '<polyline points="3 17 9 11 13 15 21 7"/><polyline points="14 7 21 7 21 14"/>',
  pin: '<path d="M12 21.5s7-7.2 7-12.2A7 7 0 0 0 5 9.3c0 5 7 12.2 7 12.2z"/><circle cx="12" cy="9.3" r="2.4"/>',
  pencil: '<path d="M12.8 19.5H21"/><path d="M16.4 3.6a2.1 2.1 0 0 1 3 3L7.5 18.5l-4 1 1-4Z"/>',
  x: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
  trash: '<path d="M4 7h16"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M6 7l1 13a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-13"/><path d="M9 7V4.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V7"/>',
  sparkle: '<path d="M12 2.5l1.9 5.6 5.6 1.9-5.6 1.9L12 17.5l-1.9-5.6-5.6-1.9 5.6-1.9L12 2.5z"/>',
  // topic icons
  box:      '<rect x="3" y="3" width="7.5" height="7.5" rx="1.4"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="1.4"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="1.4"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.4"/>',
  link:     '<circle cx="7" cy="12" r="4"/><circle cx="17" cy="12" r="4"/><line x1="11" y1="12" x2="13" y2="12"/>',
  layers:   '<rect x="4" y="4" width="16" height="4" rx="1.2"/><rect x="4" y="10" width="16" height="4" rx="1.2"/><rect x="4" y="16" width="16" height="4" rx="1.2"/>',
  tree:     '<circle cx="12" cy="4.3" r="2.2"/><line x1="12" y1="6.5" x2="6" y2="13.5"/><line x1="12" y1="6.5" x2="18" y2="13.5"/><circle cx="6" cy="15.5" r="2.2"/><circle cx="18" cy="15.5" r="2.2"/>',
  share:    '<circle cx="18" cy="5" r="2.6"/><circle cx="6" cy="12" r="2.6"/><circle cx="18" cy="19" r="2.6"/><line x1="8.4" y1="10.6" x2="15.6" y2="6.6"/><line x1="8.4" y1="13.4" x2="15.6" y2="17.4"/>',
  table:    '<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/>',
  barChart: '<line x1="4" y1="21" x2="4" y2="10"/><line x1="10" y1="21" x2="10" y2="4"/><line x1="16" y1="21" x2="16" y2="14"/><line x1="20" y1="21" x2="20" y2="8"/>',
  search:   '<circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
  repeat:   '<polyline points="17 1.5 21 5.5 17 9.5"/><path d="M3 12v-2a4 4 0 0 1 4-4h14"/><polyline points="7 22.5 3 18.5 7 14.5"/><path d="M21 12v2a4 4 0 0 1-4 4H3"/>',
  hash:     '<line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/>',
  mountain: '<path d="M12 3.5l9 16.5H3z"/><line x1="7.5" y1="13.5" x2="16.5" y2="13.5"/>',
  type:     '<polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/>',
  undo:     '<polyline points="9 14 4 9 9 4"/><path d="M20 20v-7a4 4 0 0 0-4-4H4"/>',
  zap:      '<polygon points="13 2 4 14 12 14 11 22 20 10 12 10 13 2"/>',
  moveH:    '<polyline points="18 8 22 12 18 16"/><polyline points="6 8 2 12 6 16"/><line x1="2" y1="12" x2="22" y2="12"/>',
  scan:     '<path d="M3 8V6a3 3 0 0 1 3-3h2"/><path d="M16 3h2a3 3 0 0 1 3 3v2"/><path d="M21 16v2a3 3 0 0 1-3 3h-2"/><path d="M8 21H6a3 3 0 0 1-3-3v-2"/><rect x="8.5" y="8.5" width="7" height="7" rx="1"/>',
  calc:     '<rect x="4" y="2" width="16" height="20" rx="2.2"/><line x1="8" y1="6.5" x2="16" y2="6.5"/><line x1="8" y1="11" x2="8.01" y2="11"/><line x1="12" y1="11" x2="12.01" y2="11"/><line x1="16" y1="11" x2="16.01" y2="11"/><line x1="8" y1="15" x2="8.01" y2="15"/><line x1="12" y1="15" x2="12.01" y2="15"/><line x1="16" y1="15" x2="16.01" y2="15"/><line x1="8" y1="19" x2="8.01" y2="19"/><line x1="12" y1="19" x2="12.01" y2="19"/>',
  map:      '<polygon points="3 6.5 9 3.5 15 6.5 21 3.5 21 17.5 15 20.5 9 17.5 3 20.5"/><line x1="9" y1="3.5" x2="9" y2="17.5"/><line x1="15" y1="6.5" x2="15" y2="20.5"/>',
  merge:    '<circle cx="6" cy="6" r="2.4"/><circle cx="6" cy="18" r="2.4"/><circle cx="18" cy="18" r="2.4"/><path d="M6 8.4v4.6"/><path d="M6 18h6a6 6 0 0 0 6-6V8.4"/>',
  target:   '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.1" fill="currentColor"/>',
  database: '<ellipse cx="12" cy="5.5" rx="8" ry="3"/><path d="M4 5.5v13c0 1.66 3.58 3 8 3s8-1.34 8-3v-13"/><path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3"/>',
  quote:    '<path d="M7 8h4v4c0 2.2-1.2 3.8-4 3.8"/><path d="M14 8h4v4c0 2.2-1.2 3.8-4 3.8"/>',
};

function svgIcon(name, extraClass) {
  return `<svg class="icon ${extraClass || ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS[name]}</svg>`;
}

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

const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ─── Motion: count-up number animation ─────────────────────────
function animateNumber(el, toValue, opts = {}) {
  if (!el) return;
  const suffix = opts.suffix || '';
  const from = parseInt(el.dataset.rawValue || '0', 10) || 0;
  const to   = toValue;
  el.dataset.rawValue = to;

  if (prefersReducedMotion || from === to) {
    el.textContent = to + suffix;
    return;
  }

  const duration = 650;
  const start = performance.now();

  function tick(t) {
    const p = Math.min((t - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
    const val = Math.round(from + (to - from) * eased);
    el.textContent = val + suffix;
    if (p < 1) requestAnimationFrame(tick);
    else el.textContent = to + suffix;
  }
  requestAnimationFrame(tick);
}

// ─── Motion: animated consistency ring ─────────────────────────
const RING_CIRCUMFERENCE = 2 * Math.PI * 25;
function initRing() {
  const ring = document.getElementById('consistencyRing');
  if (!ring) return;
  ring.style.strokeDasharray = `${RING_CIRCUMFERENCE}`;
  ring.style.strokeDashoffset = `${RING_CIRCUMFERENCE}`;
}
function updateRing(pct) {
  const ring = document.getElementById('consistencyRing');
  if (!ring) return;
  const clamped = Math.max(0, Math.min(100, pct));
  const offset = RING_CIRCUMFERENCE * (1 - clamped / 100);
  requestAnimationFrame(() => {
    ring.style.strokeDashoffset = `${offset}`;
  });
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

  animateNumber(document.getElementById('statStreak'), s.streak);
  animateNumber(document.getElementById('statTotal'), s.total);
  animateNumber(document.getElementById('statMonth'), s.monthDone);
  animateNumber(document.getElementById('statPct'), s.pct, { suffix: '%' });
  animateNumber(document.getElementById('headerStreakNum'), s.streak);
  animateNumber(document.getElementById('headerTotalNum'), s.total);
  updateRing(s.pct);

  const streakCard = document.querySelector('.stat-card-streak');
  const flame = document.getElementById('headerFlameIcon');
  if (streakCard) streakCard.classList.toggle('is-lit', s.streak > 0);
  if (flame) flame.classList.toggle('is-lit', s.streak > 0);

  updateCatMessage(s.streak);
}

// ─── Cat Messages (no emoji — mood conveyed via subtle motion) ──
const catPool = [
  "Every line of code you write today is an investment in your future. Keep grinding.",
  "Consistency is the secret weapon of top engineers. You're building it right now.",
  "Even solving one problem today keeps the momentum alive. You've got this.",
  "Don't skip today — your streak is precious. Protect it.",
  "I believe in you so much. The grind is temporary, but the skills last forever.",
  "Come solve some DSA. Every expert was once a beginner who kept showing up.",
];

function updateCatMessage(streak) {
  const catCard = document.getElementById('catCard');
  let msg;
  let mood = 'neutral';

  if (streak >= 30) {
    mood = 'legendary';
    msg = `Legendary! ${streak}-day streak. You are an absolute DSA machine — the algorithm bows to you.`;
  } else if (streak >= 14) {
    mood = 'great';
    msg = `${streak} days in a row. You're unstoppable — top coders are made exactly like this.`;
  } else if (streak >= 7) {
    mood = 'great';
    msg = `${streak}-day streak. You're on fire — one week of consistency, keep that energy going.`;
  } else if (streak === 0) {
    mood = 'low';
    msg = "Miss me? Let's start fresh today. Every day you don't code is a day you could've grown. Come back.";
  } else {
    msg = catPool[Math.floor(Math.random() * catPool.length)];
  }

  document.getElementById('catText').textContent = msg;
  if (catCard) {
    catCard.classList.remove('mood-low', 'mood-great', 'mood-legendary');
    if (mood !== 'neutral') catCard.classList.add(`mood-${mood}`);
  }
}

// ─── Calendar ─────────────────────────────────────────────────
function renderCalendar(direction) {
  document.getElementById('monthLabel').textContent = `${MONTHS[viewMonth]} ${viewYear}`;

  const grid = document.getElementById('daysGrid');

  const firstDay    = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const tk          = todayKey();

  const frag = document.createDocumentFragment();

  for (let i = 0; i < firstDay; i++) {
    const el = document.createElement('div');
    el.className = 'day-cell empty';
    frag.appendChild(el);
  }

  let dayIndex = 0;
  for (let d = 1; d <= daysInMonth; d++) {
    const k         = dateKey(viewYear, viewMonth, d);
    const entry     = data[k] || {};
    const isToday   = k === tk;
    const cellDate  = new Date(viewYear, viewMonth, d);
    const isPast    = cellDate < new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const isFuture  = !isToday && !isPast;
    const isDone    = !!entry.done;
    const isOther   = !!entry.other;
    const isBoth    = isDone && isOther;
    const hasNote   = !!(entry.note && entry.note.trim());

    const el = document.createElement('div');

    let classes = 'day-cell day-enter';
    if (isBoth)            classes += ' both';
    else if (isDone)       classes += ' done';
    else if (isOther)      classes += ' other-only';
    else if (isFuture)     classes += ' normal future';
    else if (isPast)       classes += ' missed';
    else                   classes += ' normal';
    if (isToday)          classes += ' today-cell';
    if (hasNote)          classes += ' has-note';
    el.className = classes;
    el.style.animationDelay = (dayIndex * 12) + 'ms';
    dayIndex++;

    if (isDone || isOther) {
      el.innerHTML = `<span class="day-tick">${svgIcon('checkCircle')}</span><span class="day-num">${d}</span>`;
    } else {
      el.innerHTML = `<span class="day-num">${d}</span>`;
    }

    if (!isFuture) {
      el.addEventListener('click', () => openModal(d, k));
    }

    frag.appendChild(el);
  }

  const card = document.querySelector('.calendar-card');
  if (direction && !prefersReducedMotion && card) {
    card.classList.remove('slide-left', 'slide-right');
    void card.offsetWidth; // restart animation
    card.classList.add(direction === 'next' ? 'slide-left' : 'slide-right');
  }

  grid.innerHTML = '';
  grid.appendChild(frag);
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
  // Checkin button
  const btn   = document.getElementById('checkinBtn');
  const icon  = document.getElementById('checkinIcon');
  const label = document.getElementById('checkinLabel');
  if (isDone) {
    btn.classList.add('checked');
    icon.innerHTML  = svgIcon('checkSquare');
    label.textContent = 'DSA Done! (click to undo)';
  } else {
    btn.classList.remove('checked');
    icon.innerHTML  = svgIcon('square');
    label.textContent = 'Mark DSA Done';
  }

  // Other-productive button
  const isOther   = !!entry.other;
  const otherBtn   = document.getElementById('otherBtn');
  const otherIcon  = document.getElementById('otherIcon');
  const otherLabel = document.getElementById('otherLabel');
  if (isOther) {
    otherBtn.classList.add('checked');
    otherIcon.innerHTML  = svgIcon('checkSquare');
    otherLabel.textContent = 'Other Study Done! (click to undo)';
  } else {
    otherBtn.classList.remove('checked');
    otherIcon.innerHTML  = svgIcon('square');
    otherLabel.textContent = 'Mark Other Study Done';
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

  btn.classList.add('pop');
  setTimeout(() => btn.classList.remove('pop'), 260);

  if (newVal) {
    btn.classList.add('checked');
    icon.innerHTML  = svgIcon('checkSquare');
    label.textContent = 'DSA Done! (click to undo)';
    document.getElementById('modalFooterMsg').textContent = data[selectedKey].other
      ? "Dual win today — DSA and coursework both done!"
      : 'Amazing! Keep it up.';
    shootConfetti();
  } else {
    btn.classList.remove('checked');
    icon.innerHTML  = svgIcon('square');
    label.textContent = 'Mark DSA Done';
    document.getElementById('modalFooterMsg').textContent = '';
  }

  renderCalendar();
  updateStats();
});

// Other-productive toggle (e.g. coursework, academic study — anything non-DSA)
document.getElementById('otherBtn').addEventListener('click', () => {
  if (!selectedKey) return;
  const entry  = data[selectedKey] || {};
  const isOther = !!entry.other;
  const newVal  = !isOther;

  data[selectedKey] = { ...entry, other: newVal };
  saveData(data);

  const btn   = document.getElementById('otherBtn');
  const icon  = document.getElementById('otherIcon');
  const label = document.getElementById('otherLabel');

  btn.classList.add('pop');
  setTimeout(() => btn.classList.remove('pop'), 260);

  if (newVal) {
    btn.classList.add('checked');
    icon.innerHTML  = svgIcon('checkSquare');
    label.textContent = 'Other Study Done! (click to undo)';
    document.getElementById('modalFooterMsg').textContent = data[selectedKey].done
      ? "Dual win today — DSA and coursework both done!"
      : 'Good — every bit of study counts.';
    if (data[selectedKey].done) shootConfetti();
  } else {
    btn.classList.remove('checked');
    icon.innerHTML  = svgIcon('square');
    label.textContent = 'Mark Other Study Done';
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

  document.getElementById('modalFooterMsg').textContent = note ? 'Note saved.' : 'Note cleared.';
  setTimeout(() => {
    document.getElementById('modalFooterMsg').textContent = '';
  }, 2000);

  renderCalendar();
  if (selectedKey === todayKey()) renderTodayNotePreview();
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
  renderCalendar('prev');
});
document.getElementById('nextBtn').addEventListener('click', () => {
  viewMonth++;
  if (viewMonth > 11) { viewMonth = 0; viewYear++; }
  renderCalendar('next');
});

// ─── Topics ───────────────────────────────────────────────────
const TOPICS = [
  { icon: 'box',      name: 'Arrays' },
  { icon: 'link',      name: 'Linked Lists' },
  { icon: 'layers',    name: 'Stacks & Queues' },
  { icon: 'tree',      name: 'Trees' },
  { icon: 'share',     name: 'Graphs' },
  { icon: 'table',     name: 'Dynamic Programming' },
  { icon: 'barChart',  name: 'Sorting' },
  { icon: 'search',    name: 'Binary Search' },
  { icon: 'repeat',    name: 'Recursion' },
  { icon: 'hash',      name: 'Hashing' },
  { icon: 'mountain',  name: 'Heaps / Priority Queue' },
  { icon: 'type',      name: 'Tries' },
  { icon: 'undo',      name: 'Backtracking' },
  { icon: 'zap',       name: 'Bit Manipulation' },
  { icon: 'moveH',     name: 'Two Pointers' },
  { icon: 'scan',      name: 'Sliding Window' },
  { icon: 'calc',      name: 'Math & Number Theory' },
  { icon: 'map',       name: 'Graph — BFS/DFS' },
  { icon: 'merge',     name: 'Union Find' },
  { icon: 'target',    name: 'Greedy' },
  { icon: 'database',  name: 'STL in C++' },
  { icon: 'quote',     name: 'String Algorithms' },
];

function renderTopics() {
  const grid = document.getElementById('topicsGrid');
  grid.innerHTML = '';
  TOPICS.forEach(({ icon, name }, i) => {
    const isActive = activeTopics.includes(name);
    const pill = document.createElement('div');
    pill.className = 'topic-pill' + (isActive ? ' active' : '');
    pill.style.animationDelay = (i * 25) + 'ms';
    pill.innerHTML = `${svgIcon(icon, 'topic-icon')}<span>${name}</span><span class="check-mark">${svgIcon('checkCircle')}</span>`;
    pill.addEventListener('click', () => {
      if (activeTopics.includes(name)) {
        activeTopics = activeTopics.filter(t => t !== name);
      } else {
        activeTopics.push(name);
        pill.classList.add('pop');
        setTimeout(() => pill.classList.remove('pop'), 260);
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
  const colors    = ['#CB7F76','#E3A79E','#D8A24B','#93A985','#EBE2D8'];

  for (let i = 0; i < 24; i++) {
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

// ─── Reminders (Tomorrow's Plan sidebar) ───────────────────────
const REMINDERS_KEY = 'dsa_reminders_v1';

function loadReminders() {
  try { return JSON.parse(localStorage.getItem(REMINDERS_KEY)) || []; }
  catch { return []; }
}
function saveReminders(list) {
  try { localStorage.setItem(REMINDERS_KEY, JSON.stringify(list)); } catch {}
}

let reminders = loadReminders();

function renderReminders() {
  const list  = document.getElementById('reminderList');
  const empty = document.getElementById('reminderEmpty');
  list.innerHTML = '';

  if (reminders.length === 0) {
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';

  reminders.forEach(item => {
    const li = document.createElement('li');
    li.className = 'reminder-item' + (item.done ? ' done' : '');

    const check = document.createElement('button');
    check.className = 'reminder-check';
    check.type = 'button';
    check.setAttribute('aria-label', item.done ? 'Mark as not done' : 'Mark as done');
    check.innerHTML = item.done ? svgIcon('checkCircle') : '';
    check.addEventListener('click', () => {
      item.done = !item.done;
      saveReminders(reminders);
      renderReminders();
    });

    const text = document.createElement('span');
    text.className = 'reminder-text';
    text.textContent = item.text;

    const del = document.createElement('button');
    del.className = 'reminder-delete';
    del.type = 'button';
    del.setAttribute('aria-label', 'Delete reminder');
    del.innerHTML = svgIcon('x');
    del.addEventListener('click', () => {
      li.classList.add('leaving');
      setTimeout(() => {
        reminders = reminders.filter(r => r.id !== item.id);
        saveReminders(reminders);
        renderReminders();
      }, prefersReducedMotion ? 0 : 220);
    });

    li.appendChild(check);
    li.appendChild(text);
    li.appendChild(del);
    list.appendChild(li);
  });
}

document.getElementById('reminderForm').addEventListener('submit', e => {
  e.preventDefault();
  const input = document.getElementById('reminderInput');
  const text  = input.value.trim();
  if (!text) return;

  reminders.push({ id: Date.now() + Math.random(), text, done: false });
  saveReminders(reminders);
  input.value = '';
  renderReminders();
});

// Tomorrow's date label
(function setTomorrowLabel() {
  const t = new Date(now);
  t.setDate(t.getDate() + 1);
  const label = `${DAYS[t.getDay()]}, ${MONTHS[t.getMonth()]} ${t.getDate()}`;
  document.getElementById('tomorrowDateLabel').textContent = label;
})();

// Today's note preview in sidebar
function renderTodayNotePreview() {
  const entry = data[todayKey()] || {};
  const preview = document.getElementById('todayNotePreview');
  if (entry.note && entry.note.trim()) {
    preview.textContent = entry.note;
  } else {
    preview.textContent = 'No note added for today yet. Tap today on the calendar to add one.';
  }
}

// ─── Static icon mounts ─────────────────────────────────────────
function mountStaticIcons() {
  document.getElementById('headerFlameIcon').innerHTML = svgIcon('flame');
  document.getElementById('headerCheckIcon').innerHTML = svgIcon('checkCircle');
  document.getElementById('iconStreak').innerHTML = svgIcon('flame');
  document.getElementById('iconTotal').innerHTML = svgIcon('checkCircle');
  document.getElementById('iconMonth').innerHTML = svgIcon('calendar');
  document.getElementById('iconPin').innerHTML = svgIcon('pin');
  document.getElementById('iconNoteTitle').innerHTML = svgIcon('pencil');
  document.getElementById('iconNoteLabel').innerHTML = svgIcon('pencil');
  document.getElementById('modalClose').innerHTML = svgIcon('x');
}

// ─── Corner pet mascot ──────────────────────────────────────────
const PET_HIDDEN_KEY = 'dsa_pet_hidden_v1';

function isNightTime(d = new Date()) {
  const h = d.getHours();
  return h >= 21 || h < 6; // sleeps 9pm–6am
}

function initPetMascot() {
  const mascot = document.getElementById('petMascot');
  const hideBtn = document.getElementById('petHideBtn');
  const peek = document.getElementById('petPeek');
  if (!mascot || !hideBtn || !peek) return;

  function applySleepState() {
    mascot.classList.toggle('sleeping', isNightTime());
  }
  applySleepState();
  setInterval(applySleepState, 5 * 60 * 1000); // recheck day/night every 5 min

  // Hide / show, remembered across visits
  function setHidden(hidden) {
    mascot.classList.toggle('pet-hidden', hidden);
    peek.classList.toggle('visible', hidden);
    try { localStorage.setItem(PET_HIDDEN_KEY, hidden ? '1' : '0'); } catch {}
  }
  setHidden(localStorage.getItem(PET_HIDDEN_KEY) === '1');

  hideBtn.addEventListener('click', (e) => { e.stopPropagation(); setHidden(true); });
  peek.addEventListener('click', () => setHidden(false));

  // Tap the cat for a little pounce reaction (only while awake)
  document.getElementById('petSvg').addEventListener('click', () => {
    if (mascot.classList.contains('sleeping')) return;
    mascot.classList.remove('pounce');
    void mascot.offsetWidth;
    mascot.classList.add('pounce');
  });

  // Occasional idle gestures — blink, lick a paw, or stretch
  const GESTURES = ['blink', 'licking', 'stretching'];
  function scheduleGesture() {
    const delay = 4000 + Math.random() * 6000;
    setTimeout(() => {
      if (!mascot.classList.contains('sleeping') && !mascot.classList.contains('pet-hidden')) {
        const g = GESTURES[Math.floor(Math.random() * GESTURES.length)];
        if (g === 'blink') {
          mascot.classList.add('blinking');
          setTimeout(() => mascot.classList.remove('blinking'), 160);
        } else {
          mascot.classList.add(g);
          const svg = document.getElementById('petSvg');
          const clear = () => { mascot.classList.remove(g); svg.removeEventListener('animationend', clear); };
          svg.addEventListener('animationend', clear);
        }
      }
      scheduleGesture();
    }, delay);
  }
  scheduleGesture();
}

// ─── Init ─────────────────────────────────────────────────────
mountStaticIcons();
initRing();
renderCalendar();
renderTopics();
updateStats();
renderReminders();
renderTodayNotePreview();
initPetMascot();
