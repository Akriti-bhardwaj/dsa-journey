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
  box: '<rect x="3" y="3" width="7.5" height="7.5" rx="1.4"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="1.4"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="1.4"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.4"/>',
  link: '<circle cx="7" cy="12" r="4"/><circle cx="17" cy="12" r="4"/><line x1="11" y1="12" x2="13" y2="12"/>',
  layers: '<rect x="4" y="4" width="16" height="4" rx="1.2"/><rect x="4" y="10" width="16" height="4" rx="1.2"/><rect x="4" y="16" width="16" height="4" rx="1.2"/>',
  tree: '<circle cx="12" cy="4.3" r="2.2"/><line x1="12" y1="6.5" x2="6" y2="13.5"/><line x1="12" y1="6.5" x2="18" y2="13.5"/><circle cx="6" cy="15.5" r="2.2"/><circle cx="18" cy="15.5" r="2.2"/>',
  share: '<circle cx="18" cy="5" r="2.6"/><circle cx="6" cy="12" r="2.6"/><circle cx="18" cy="19" r="2.6"/><line x1="8.4" y1="10.6" x2="15.6" y2="6.6"/><line x1="8.4" y1="13.4" x2="15.6" y2="17.4"/>',
  table: '<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/>',
  barChart: '<line x1="4" y1="21" x2="4" y2="10"/><line x1="10" y1="21" x2="10" y2="4"/><line x1="16" y1="21" x2="16" y2="14"/><line x1="20" y1="21" x2="20" y2="8"/>',
  search: '<circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
  repeat: '<polyline points="17 1.5 21 5.5 17 9.5"/><path d="M3 12v-2a4 4 0 0 1 4-4h14"/><polyline points="7 22.5 3 18.5 7 14.5"/><path d="M21 12v2a4 4 0 0 1-4 4H3"/>',
  hash: '<line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/>',
  mountain: '<path d="M12 3.5l9 16.5H3z"/><line x1="7.5" y1="13.5" x2="16.5" y2="13.5"/>',
  type: '<polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/>',
  undo: '<polyline points="9 14 4 9 9 4"/><path d="M20 20v-7a4 4 0 0 0-4-4H4"/>',
  zap: '<polygon points="13 2 4 14 12 14 11 22 20 10 12 10 13 2"/>',
  moveH: '<polyline points="18 8 22 12 18 16"/><polyline points="6 8 2 12 6 16"/><line x1="2" y1="12" x2="22" y2="12"/>',
  scan: '<path d="M3 8V6a3 3 0 0 1 3-3h2"/><path d="M16 3h2a3 3 0 0 1 3 3v2"/><path d="M21 16v2a3 3 0 0 1-3 3h-2"/><path d="M8 21H6a3 3 0 0 1-3-3v-2"/><rect x="8.5" y="8.5" width="7" height="7" rx="1"/>',
  calc: '<rect x="4" y="2" width="16" height="20" rx="2.2"/><line x1="8" y1="6.5" x2="16" y2="6.5"/><line x1="8" y1="11" x2="8.01" y2="11"/><line x1="12" y1="11" x2="12.01" y2="11"/><line x1="16" y1="11" x2="16.01" y2="11"/><line x1="8" y1="15" x2="8.01" y2="15"/><line x1="12" y1="15" x2="12.01" y2="15"/><line x1="16" y1="15" x2="16.01" y2="15"/><line x1="8" y1="19" x2="8.01" y2="19"/><line x1="12" y1="19" x2="12.01" y2="19"/>',
  map: '<polygon points="3 6.5 9 3.5 15 6.5 21 3.5 21 17.5 15 20.5 9 17.5 3 20.5"/><line x1="9" y1="3.5" x2="9" y2="17.5"/><line x1="15" y1="6.5" x2="15" y2="20.5"/>',
  merge: '<circle cx="6" cy="6" r="2.4"/><circle cx="6" cy="18" r="2.4"/><circle cx="18" cy="18" r="2.4"/><path d="M6 8.4v4.6"/><path d="M6 18h6a6 6 0 0 0 6-6V8.4"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.1" fill="currentColor"/>',
  database: '<ellipse cx="12" cy="5.5" rx="8" ry="3"/><path d="M4 5.5v13c0 1.66 3.58 3 8 3s8-1.34 8-3v-13"/><path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3"/>',
  quote: '<path d="M7 8h4v4c0 2.2-1.2 3.8-4 3.8"/><path d="M14 8h4v4c0 2.2-1.2 3.8-4 3.8"/>',
};

function svgIcon(name, extraClass) {
  return `<svg class="icon ${extraClass || ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS[name]}</svg>`;
}

// ─── Storage ─────────────────────────────────────────────────
const STORAGE_KEY = 'dsa_journey_v2';
const TOPICS_KEY = 'dsa_topics_v1';
const DATA_SCHEMA_VERSION = 2;
const DATA_SCHEMA_KEY = 'dsa_journey_schema_version';

function clampInt(value, min = 0, max = 999999, fallback = 0) {
  const n = Number(value);

  if (!Number.isFinite(n)) return fallback;

  return Math.min(
    max,
    Math.max(min, Math.round(n))
  );
}

function normalizeStringArray(value, maxItems = 100) {
  if (!Array.isArray(value)) return [];

  return [...new Set(
    value
      .filter(v => typeof v === 'string')
      .map(v => v.trim())
      .filter(Boolean)
  )].slice(0, maxItems);
}

function isDateKey(value) {
  return /^\d{4}-\d{2}-\d{2}$/.test(value);
}

function normalizeEntry(raw = {}) {
  const dsa = raw.dsa && typeof raw.dsa === 'object'
    ? raw.dsa
    : {};

  const otherStudy = raw.otherStudy && typeof raw.otherStudy === 'object'
    ? raw.otherStudy
    : {};

  return {
    done: !!raw.done,
    other: !!raw.other,

    note: typeof raw.note === 'string'
      ? raw.note.slice(0, 5000)
      : '',

    dsa: {
      studyMinutes: clampInt(
        dsa.studyMinutes ?? raw.studyMinutes,
        0,
        1440
      ),

      problemsSolved: clampInt(
        dsa.problemsSolved ?? raw.problemsSolved,
        0,
        999
      ),

      topics: normalizeStringArray(dsa.topics, 22)
    },

    otherStudy: {
      studyMinutes: clampInt(
        otherStudy.studyMinutes ?? raw.otherStudyMinutes,
        0,
        1440
      )
    },

    leetcodeProblems: normalizeStringArray(
      raw.leetcodeProblems,
      500
    )
  };
}

function migrateData(raw) {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) {
    return {};
  }

  const migrated = {};

  Object.entries(raw).forEach(([key, value]) => {
    if (!isDateKey(key)) return;
    if (!value || typeof value !== 'object' || Array.isArray(value)) return;

    migrated[key] = normalizeEntry(value);
  });

  return migrated;
}

function loadData() {
  try {
    const raw = JSON.parse(
      localStorage.getItem(STORAGE_KEY)
    ) || {};

    const migrated = migrateData(raw);

    try {
      localStorage.setItem(
        DATA_SCHEMA_KEY,
        String(DATA_SCHEMA_VERSION)
      );
    } catch { }

    return migrated;
  } catch {
    return {};
  }
}

function saveData(d) {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(migrateData(d))
    );

    localStorage.setItem(
      DATA_SCHEMA_KEY,
      String(DATA_SCHEMA_VERSION)
    );
  } catch (err) {
    console.error('Unable to save data:', err);
  }
}

function loadTopics() {
  try {
    const value = JSON.parse(
      localStorage.getItem(TOPICS_KEY)
    );

    return normalizeStringArray(value, 22);
  } catch {
    return [];
  }
}

function saveTopics(t) {
  try {
    localStorage.setItem(
      TOPICS_KEY,
      JSON.stringify(normalizeStringArray(t, 22))
    );
  } catch { }
}

// ─── State ───────────────────────────────────────────────────
let data = loadData();
let activeTopics = loadTopics();

function getNow() { return new Date(); }
let viewYear = getNow().getFullYear();
let viewMonth = getNow().getMonth();
let selectedKey = null;

// ─── Helpers ─────────────────────────────────────────────────
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];
const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function dateKey(y, m, d) {
  return `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
}

function todayKey() {
  const d = getNow();
  return dateKey(
    d.getFullYear(),
    d.getMonth(),
    d.getDate()
  );
}

function tomorrowKey() {
  const d = getNow();

  d.setDate(d.getDate() + 1);

  return dateKey(
    d.getFullYear(),
    d.getMonth(),
    d.getDate()
  );
}

const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ─── Motion: count-up number animation ─────────────────────────
function animateNumber(el, toValue, opts = {}) {
  if (!el) return;
  const suffix = opts.suffix || '';
  const from = parseInt(el.dataset.rawValue || '0', 10) || 0;
  const to = toValue;
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
  const today = getNow();
  let d = new Date(today);
  let k = dateKey(d.getFullYear(), d.getMonth(), d.getDate());

  // If today is not done, check if yesterday is done. If yesterday is not done, streak is 0.
  if (!data[k] || !data[k].done) {
    d.setDate(d.getDate() - 1);
    k = dateKey(d.getFullYear(), d.getMonth(), d.getDate());
    if (!data[k] || !data[k].done) return 0;
  }

  while (true) {
    const currK = dateKey(d.getFullYear(), d.getMonth(), d.getDate());
    if (data[currK] && data[currK].done) { streak++; d.setDate(d.getDate() - 1); }
    else break;
  }
  return streak;
}

function computeStats() {
  const doneKeys = Object.keys(data)
    .filter(k =>
      isDateKey(k) &&
      data[k] &&
      data[k].done
    );

  const total = doneKeys.length;

  const currentNow = getNow();

  const monthDone = doneKeys.filter(k => {
    const [y, m] = k.split('-').map(Number);

    return (
      y === currentNow.getFullYear() &&
      m - 1 === currentNow.getMonth()
    );
  }).length;

  // Consistency is measured from the first day the user
  // actually tracked something, not from January 1.
  const trackedKeys = Object.keys(data)
    .filter(k => {
      const entry = data[k];

      if (!isDateKey(k) || !entry) return false;

      return (
        entry.done ||
        entry.other ||
        entry.note ||
        Number(entry.dsa?.studyMinutes) > 0 ||
        Number(entry.dsa?.problemsSolved) > 0 ||
        Number(entry.otherStudy?.studyMinutes) > 0 ||
        (Array.isArray(entry.dsa?.topics) &&
          entry.dsa.topics.length > 0)
      );
    })
    .sort();

  let pct = 0;

  if (trackedKeys.length > 0) {
    const firstTrackedDate = new Date(
      `${trackedKeys[0]}T00:00:00`
    );

    const todayDate = new Date(
      `${todayKey()}T00:00:00`
    );

    const elapsedDays =
      Math.floor(
        (todayDate - firstTrackedDate) / 86400000
      ) + 1;

    pct = elapsedDays > 0
      ? Math.round((total / elapsedDays) * 100)
      : 0;

    pct = Math.min(100, Math.max(0, pct));
  }

  return {
    total,
    monthDone,
    streak: computeStreak(),
    pct
  };
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

  const firstDay = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const tk = todayKey();
  const currentNow = getNow();

  const frag = document.createDocumentFragment();

  for (let i = 0; i < firstDay; i++) {
    const el = document.createElement('div');
    el.className = 'day-cell empty';
    frag.appendChild(el);
  }

  let dayIndex = 0;
  for (let d = 1; d <= daysInMonth; d++) {
    const k = dateKey(viewYear, viewMonth, d);
    const entry = data[k] || {};
    const isToday = k === tk;
    const cellDate = new Date(viewYear, viewMonth, d);
    const isPast = cellDate < new Date(currentNow.getFullYear(), currentNow.getMonth(), currentNow.getDate());
    const isFuture = !isToday && !isPast;
    const isDone = !!entry.done;
    const isOther = !!entry.other;
    const isBoth = isDone && isOther;
    const hasNote = !!(entry.note && entry.note.trim());

    const el = document.createElement('div');

    let classes = 'day-cell day-enter';
    if (isBoth) classes += ' both';
    else if (isDone) classes += ' done';
    else if (isOther) classes += ' other-only';
    else if (isFuture) classes += ' normal future';
    else if (isPast) classes += ' missed';
    else classes += ' normal';
    if (isToday) classes += ' today-cell';
    if (hasNote) classes += ' has-note';
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
  const entry = data[key] || {};
  const isDone = !!entry.done;
  const note = entry.note || '';

  const dsaDetails = entry.dsa || {};
  const otherStudy = entry.otherStudy || {};

  const d = new Date(viewYear, viewMonth, day);
  const isToday = key === todayKey();

  document.getElementById('modalDate').textContent =
    `${DAYS[d.getDay()]}, ${MONTHS[viewMonth]} ${day}, ${viewYear}`;
  document.getElementById('modalTitle').textContent =
    isToday ? "Check in for today!" : isDone ? "Update this day" : "Log this past day";
  // Checkin button
  const btn = document.getElementById('checkinBtn');
  const icon = document.getElementById('checkinIcon');
  const label = document.getElementById('checkinLabel');
  if (isDone) {
    btn.classList.add('checked');
    icon.innerHTML = svgIcon('checkSquare');
    label.textContent = 'DSA Done! (click to undo)';
  } else {
    btn.classList.remove('checked');
    icon.innerHTML = svgIcon('square');
    label.textContent = 'Mark DSA Done';
  }

  // Other-productive button
  const isOther = !!entry.other;
  const otherBtn = document.getElementById('otherBtn');
  const otherIcon = document.getElementById('otherIcon');
  const otherLabel = document.getElementById('otherLabel');
  if (isOther) {
    otherBtn.classList.add('checked');
    otherIcon.innerHTML = svgIcon('checkSquare');
    otherLabel.textContent = 'Other Study Done! (click to undo)';
  } else {
    otherBtn.classList.remove('checked');
    otherIcon.innerHTML = svgIcon('square');
    otherLabel.textContent = 'Mark Other Study Done';
  }

  // Note display
  const toggleBtn = document.getElementById('noteToggleBtn');
  const inputWrap = document.getElementById('noteInputWrap');
  const savedDisp = document.getElementById('savedNoteDisplay');
  const savedText = document.getElementById('savedNoteText');
  const textarea = document.getElementById('noteTextarea');

  inputWrap.style.display = 'none';
  toggleBtn.textContent = note ? 'Edit Note' : 'Add Note';

  if (note) {
    savedDisp.style.display = 'block';
    savedText.textContent = note;
  } else {
    savedDisp.style.display = 'none';
  }

  textarea.value = note;
  
  // Daily study details
  document.getElementById('dsaMinutes').value =
    dsaDetails.studyMinutes || '';

  document.getElementById('problemsSolved').value =
    dsaDetails.problemsSolved || '';

  document.getElementById('otherMinutes').value =
    otherStudy.studyMinutes || '';

  renderDayTopicPicker(
    Array.isArray(dsaDetails.topics)
      ? dsaDetails.topics
      : []
  );

  renderLeetCodeProblems(
    Array.isArray(entry.leetcodeProblems)
      ? entry.leetcodeProblems
      : []
  );

  document.getElementById('dayDetailsMsg').textContent = '';
  document.getElementById('modalFooterMsg').textContent = '';

  document.getElementById('modal').classList.add('open');
}

// ─── Daily Study Details ──────────────────────────────────────

function renderDayTopicPicker(selectedTopics = []) {
  const picker = document.getElementById('dayTopicPicker');
  const countEl = document.getElementById('dayTopicCount');

  if (!picker) return;

  const selected = new Set(selectedTopics);

  picker.innerHTML = '';

  TOPICS.forEach(({ icon, name }) => {
    const button = document.createElement('button');

    button.type = 'button';
    button.className = 'day-topic-chip';

    if (selected.has(name)) {
      button.classList.add('selected');
    }

    button.setAttribute(
      'aria-pressed',
      selected.has(name)
        ? 'true'
        : 'false'
    );

    button.innerHTML = `
      ${svgIcon(icon, 'topic-icon')}
      <span>${name}</span>
    `;

    button.addEventListener('click', () => {
      const nowSelected =
        button.classList.toggle('selected');

      button.setAttribute(
        'aria-pressed',
        nowSelected ? 'true' : 'false'
      );

      updateDayTopicCount();
    });

    picker.appendChild(button);
  });

  updateDayTopicCount();
}

function getSelectedDayTopics() {
  return Array.from(
    document.querySelectorAll(
      '#dayTopicPicker .day-topic-chip.selected'
    )
  ).map(button =>
    button.querySelector('span:last-child')?.textContent?.trim()
  ).filter(Boolean);
}

function updateDayTopicCount() {
  const count =
    document.querySelectorAll(
      '#dayTopicPicker .day-topic-chip.selected'
    ).length;

  const countEl =
    document.getElementById('dayTopicCount');

  if (countEl) {
    countEl.textContent =
      `${count} selected`;
  }
}

function renderLeetCodeProblems(problems = []) {
  const wrapper =
    document.getElementById('leetcodeSyncedList');

  if (!wrapper) return;

  wrapper.innerHTML = '';

  const cleanProblems =
    normalizeStringArray(problems, 500);

  if (cleanProblems.length === 0) {
    wrapper.style.display = 'none';
    return;
  }

  wrapper.style.display = 'block';

  const title = document.createElement('div');
  title.className = 'leetcode-list-title';
  title.textContent =
    `LeetCode synced: ${cleanProblems.length} problem${cleanProblems.length === 1 ? '' : 's'}`;

  wrapper.appendChild(title);

  const list = document.createElement('div');
  list.className = 'leetcode-problem-tags';

  cleanProblems.forEach(problem => {
    const tag = document.createElement('span');
    tag.className = 'leetcode-problem-tag';
    tag.textContent = problem;
    list.appendChild(tag);
  });

  wrapper.appendChild(list);
}

function closeModal() {
  document.getElementById('modal').classList.remove('open');
  selectedKey = null;
}

// Checkin toggle
document.getElementById('checkinBtn').addEventListener('click', () => {
  if (!selectedKey) return;
  const entry = data[selectedKey] || {};
  const isDone = !!entry.done;
  const newVal = !isDone;

  data[selectedKey] = { ...entry, done: newVal };
  saveData(data);

  const btn = document.getElementById('checkinBtn');
  const icon = document.getElementById('checkinIcon');
  const label = document.getElementById('checkinLabel');

  btn.classList.add('pop');
  setTimeout(() => btn.classList.remove('pop'), 260);

  if (newVal) {
    btn.classList.add('checked');
    icon.innerHTML = svgIcon('checkSquare');
    label.textContent = 'DSA Done! (click to undo)';
    document.getElementById('modalFooterMsg').textContent = data[selectedKey].other
      ? "Dual win today — DSA and coursework both done!"
      : 'Amazing! Keep it up.';
    shootConfetti();
  } else {
    btn.classList.remove('checked');
    icon.innerHTML = svgIcon('square');
    label.textContent = 'Mark DSA Done';
    document.getElementById('modalFooterMsg').textContent = '';
  }

  renderCalendar();
  updateStats();
});

// Other-productive toggle (e.g. coursework, academic study — anything non-DSA)
document.getElementById('otherBtn').addEventListener('click', () => {
  if (!selectedKey) return;
  const entry = data[selectedKey] || {};
  const isOther = !!entry.other;
  const newVal = !isOther;

  data[selectedKey] = { ...entry, other: newVal };
  saveData(data);

  const btn = document.getElementById('otherBtn');
  const icon = document.getElementById('otherIcon');
  const label = document.getElementById('otherLabel');

  btn.classList.add('pop');
  setTimeout(() => btn.classList.remove('pop'), 260);

  if (newVal) {
    btn.classList.add('checked');
    icon.innerHTML = svgIcon('checkSquare');
    label.textContent = 'Other Study Done! (click to undo)';
    document.getElementById('modalFooterMsg').textContent = data[selectedKey].done
      ? "Dual win today — DSA and coursework both done!"
      : 'Good — every bit of study counts.';
    if (data[selectedKey].done) shootConfetti();
  } else {
    btn.classList.remove('checked');
    icon.innerHTML = svgIcon('square');
    label.textContent = 'Mark Other Study Done';
    document.getElementById('modalFooterMsg').textContent = '';
  }

  renderCalendar();
  updateStats();
});

// Save daily study details
document.getElementById('saveDayDetailsBtn').addEventListener('click', () => {
  if (!selectedKey) return;

  const dsaMinutes = clampInt(
    document.getElementById('dsaMinutes').value,
    0,
    1440
  );

  const problemsSolved = clampInt(
    document.getElementById('problemsSolved').value,
    0,
    999
  );

  const otherMinutes = clampInt(
    document.getElementById('otherMinutes').value,
    0,
    1440
  );

  const topics = getSelectedDayTopics();

  const entry = data[selectedKey] || {};

  data[selectedKey] = {
    ...entry,

    dsa: {
      ...(entry.dsa || {}),
      studyMinutes: dsaMinutes,
      problemsSolved,
      topics
    },

    otherStudy: {
      ...(entry.otherStudy || {}),
      studyMinutes: otherMinutes
    }
  };

  saveData(data);

  document.getElementById('dayDetailsMsg').textContent =
    'Study details saved.';

  renderCalendar();
  updateStats();

  setTimeout(() => {
    const msg = document.getElementById('dayDetailsMsg');

    if (msg) {
      msg.textContent = '';
    }
  }, 2000);
});

// Note toggle
document.getElementById('noteToggleBtn').addEventListener('click', () => {
  const wrap = document.getElementById('noteInputWrap');
  const savedDisp = document.getElementById('savedNoteDisplay');
  const textarea = document.getElementById('noteTextarea');

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
  const note = textarea.value.trim();
  const entry = data[selectedKey] || {};

  data[selectedKey] = { ...entry, note };
  saveData(data);

  const savedDisp = document.getElementById('savedNoteDisplay');
  const savedText = document.getElementById('savedNoteText');
  const inputWrap = document.getElementById('noteInputWrap');
  const toggleBtn = document.getElementById('noteToggleBtn');

  inputWrap.style.display = 'none';

  if (note) {
    savedDisp.style.display = 'block';
    savedText.textContent = note;
    toggleBtn.textContent = 'Edit Note';
  } else {
    savedDisp.style.display = 'none';
    toggleBtn.textContent = 'Add Note';
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
  const wrap = document.getElementById('noteInputWrap');
  const savedDisp = document.getElementById('savedNoteDisplay');
  const textarea = document.getElementById('noteTextarea');
  const entry = data[selectedKey] || {};

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
  if (e.key !== 'Escape') return;

  if (document.getElementById('modal').classList.contains('open')) {
    closeModal();
  }

  if (
    document
      .getElementById('settingsModal')
      .classList.contains('open')
  ) {
    document
      .getElementById('settingsModal')
      .classList.remove('open');
  }
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
  { icon: 'box', name: 'Arrays' },
  { icon: 'link', name: 'Linked Lists' },
  { icon: 'layers', name: 'Stacks & Queues' },
  { icon: 'tree', name: 'Trees' },
  { icon: 'share', name: 'Graphs' },
  { icon: 'table', name: 'Dynamic Programming' },
  { icon: 'barChart', name: 'Sorting' },
  { icon: 'search', name: 'Binary Search' },
  { icon: 'repeat', name: 'Recursion' },
  { icon: 'hash', name: 'Hashing' },
  { icon: 'mountain', name: 'Heaps / Priority Queue' },
  { icon: 'type', name: 'Tries' },
  { icon: 'undo', name: 'Backtracking' },
  { icon: 'zap', name: 'Bit Manipulation' },
  { icon: 'moveH', name: 'Two Pointers' },
  { icon: 'scan', name: 'Sliding Window' },
  { icon: 'calc', name: 'Math & Number Theory' },
  { icon: 'map', name: 'Graph — BFS/DFS' },
  { icon: 'merge', name: 'Union Find' },
  { icon: 'target', name: 'Greedy' },
  { icon: 'database', name: 'STL in C++' },
  { icon: 'quote', name: 'String Algorithms' },
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

  // Update progress header
  const total = TOPICS.length;
  const completed = activeTopics.length;
  const pct = total > 0 ? Math.round((completed / total) * 100) : 0;

  const textEl = document.getElementById('topicProgressText');
  const fillEl = document.getElementById('topicProgressFill');
  if (textEl) textEl.textContent = `${completed} / ${total} topics (${pct}%)`;
  if (fillEl) fillEl.style.width = `${pct}%`;
}

// ─── Confetti ─────────────────────────────────────────────────
function shootConfetti() {
  const container = document.getElementById('confettiContainer');
  const colors = ['#CB7F76', '#E3A79E', '#D8A24B', '#93A985', '#EBE2D8'];

  for (let i = 0; i < 24; i++) {
    const bit = document.createElement('div');
    bit.className = 'confetti-bit';

    const size = 6 + Math.random() * 8;
    const x = 20 + Math.random() * 60;
    const dx = (Math.random() - 0.5) * 280;
    const dy = 80 + Math.random() * 160;
    const dr = (Math.random() - 0.5) * 720 + 'deg';
    const dur = 0.7 + Math.random() * 0.8 + 's';
    const del = Math.random() * 0.3 + 's';
    const col = colors[Math.floor(Math.random() * colors.length)];

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

function normalizeReminders(list) {
  if (!Array.isArray(list)) return [];

  const fallbackDate = tomorrowKey();

  return list
    .filter(item =>
      item &&
      typeof item === 'object' &&
      typeof item.text === 'string'
    )
    .map((item, index) => ({
      id:
        typeof item.id === 'number'
          ? item.id
          : Date.now() + index,

      text:
        item.text
          .trim()
          .slice(0, 120),

      done: !!item.done,

      // Old reminders had no date.
      // Since they lived under "Tomorrow's Plan",
      // migrate them to tomorrow.
      targetDate:
        isDateKey(item.targetDate)
          ? item.targetDate
          : fallbackDate
    }))
    .filter(item => item.text);
}

function loadReminders() {
  try {
    const raw = JSON.parse(
      localStorage.getItem(REMINDERS_KEY)
    ) || [];

    return normalizeReminders(raw);
  } catch {
    return [];
  }
}

function saveReminders(list) {
  try {
    localStorage.setItem(
      REMINDERS_KEY,
      JSON.stringify(normalizeReminders(list))
    );
  } catch {}
}

let reminders = loadReminders();

function renderReminders() {
  const list  = document.getElementById('reminderList');
  const empty = document.getElementById('reminderEmpty');

  list.innerHTML = '';

  const targetDate = tomorrowKey();

  const visibleReminders = reminders.filter(
    item => item.targetDate === targetDate
  );

  if (visibleReminders.length === 0) {
    empty.style.display = 'block';
    return;
  }

  empty.style.display = 'none';

  visibleReminders.forEach(item => {
    const li = document.createElement('li');

    li.className =
      'reminder-item' +
      (item.done ? ' done' : '');

    const check = document.createElement('button');

    check.className = 'reminder-check';
    check.type = 'button';

    check.setAttribute(
      'aria-label',
      item.done
        ? 'Mark as not done'
        : 'Mark as done'
    );

    check.innerHTML =
      item.done
        ? svgIcon('checkCircle')
        : '';

    check.addEventListener('click', () => {
      const target = reminders.find(
        reminder => reminder.id === item.id
      );

      if (!target) return;

      target.done = !target.done;

      saveReminders(reminders);
      renderReminders();
    });

    const text = document.createElement('span');

    text.className = 'reminder-text';
    text.textContent = item.text;

    const del = document.createElement('button');

    del.className = 'reminder-delete';
    del.type = 'button';
    del.setAttribute(
      'aria-label',
      'Delete reminder'
    );

    del.innerHTML = svgIcon('x');

    del.addEventListener('click', () => {
      li.classList.add('leaving');

      setTimeout(() => {
        reminders = reminders.filter(
          reminder => reminder.id !== item.id
        );

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

  const input =
    document.getElementById('reminderInput');

  const text =
    input.value.trim().slice(0, 120);

  if (!text) return;

  reminders.push({
    id: Date.now() + Math.random(),

    text,

    done: false,

    targetDate: tomorrowKey()
  });

  saveReminders(reminders);

  input.value = '';

  renderReminders();
});

// Tomorrow's date label
function updateTomorrowLabel() {
  const t = getNow();

  t.setDate(t.getDate() + 1);

  const label =
    `${DAYS[t.getDay()]}, ${MONTHS[t.getMonth()]} ${t.getDate()}`;

  document.getElementById(
    'tomorrowDateLabel'
  ).textContent = label;
}

updateTomorrowLabel();

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
  document.getElementById('settingsModalClose').innerHTML = svgIcon('x');
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
    try { localStorage.setItem(PET_HIDDEN_KEY, hidden ? '1' : '0'); } catch { }
  }
  setHidden(localStorage.getItem(PET_HIDDEN_KEY) === '1');

  hideBtn.addEventListener('click', (e) => { e.stopPropagation(); setHidden(true); });
  peek.addEventListener('click', () => setHidden(false));

  // Tap the cat for a little content purr reaction (only while awake)
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

// ─── Settings & Data Sync ───────────────────────────────────────
const SETTINGS_KEY = 'dsa_settings_v1';
let settings = loadSettings();

function loadSettings() {
  try { return JSON.parse(localStorage.getItem(SETTINGS_KEY)) || { leetcodeUser: '' }; }
  catch { return { leetcodeUser: '' }; }
}

function saveSettings(s) {
  try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(s)); } catch { }
}

const settingsModal = document.getElementById('settingsModal');
document.getElementById('openSettingsBtn').addEventListener('click', () => {
  document.getElementById('leetcodeUsername').value = settings.leetcodeUser || '';
  document.getElementById('settingsSaveMsg').textContent = '';
  document.getElementById('importMsg').textContent = '';
  settingsModal.classList.add('open');
});

document.getElementById('settingsModalClose').addEventListener('click', () => {
  settingsModal.classList.remove('open');
});
settingsModal.addEventListener('click', e => {
  if (e.target === settingsModal) settingsModal.classList.remove('open');
});

document.getElementById('saveSettingsBtn').addEventListener('click', () => {
  settings.leetcodeUser =
    document.getElementById(
      'leetcodeUsername'
    ).value.trim();

  saveSettings(settings);

  // Reconfigure automatic LeetCode syncing
  // immediately after the username changes.
  startLeetCodeAutoSync();

  document.getElementById(
    'settingsSaveMsg'
  ).textContent =
    settings.leetcodeUser
      ? 'Settings saved. Auto-sync enabled.'
      : 'Settings saved.';

  setTimeout(() => {
    const msg =
      document.getElementById(
        'settingsSaveMsg'
      );

    if (msg) {
      msg.textContent = '';
    }
  }, 3000);
});

// ─── Data Export ──────────────────────────────────────────────

document.getElementById('exportDataBtn').addEventListener('click', () => {
  const exportObj = {
    app: 'DSA Journey',
    version: DATA_SCHEMA_VERSION,
    exportedAt: new Date().toISOString(),

    data: migrateData(data),

    activeTopics: normalizeStringArray(
      activeTopics,
      22
    ),

    reminders: normalizeReminders(
      reminders
    ),

    settings: {
      leetcodeUser:
        typeof settings.leetcodeUser === 'string'
          ? settings.leetcodeUser.trim()
          : ''
    }
  };

  const blob = new Blob(
    [JSON.stringify(exportObj, null, 2)],
    { type: 'application/json' }
  );

  const url =
    URL.createObjectURL(blob);

  const anchor =
    document.createElement('a');

  anchor.href = url;

  anchor.download =
    `dsa_journey_backup_${todayKey()}.json`;

  document.body.appendChild(anchor);

  anchor.click();

  anchor.remove();

  URL.revokeObjectURL(url);
});

// ─── Data Import ──────────────────────────────────────────────

function validateBackup(backup) {
  if (
    !backup ||
    typeof backup !== 'object' ||
    Array.isArray(backup)
  ) {
    return {
      valid: false,
      reason: 'Backup must be a JSON object.'
    };
  }

  if (
    !backup.data ||
    typeof backup.data !== 'object' ||
    Array.isArray(backup.data)
  ) {
    return {
      valid: false,
      reason: 'Backup is missing valid journey data.'
    };
  }

  const invalidDateEntry =
    Object.entries(backup.data).some(
      ([key, value]) =>
        !isDateKey(key) ||
        !value ||
        typeof value !== 'object' ||
        Array.isArray(value)
    );

  if (invalidDateEntry) {
    return {
      valid: false,
      reason: 'Backup contains an invalid date entry.'
    };
  }

  if (
    backup.activeTopics !== undefined &&
    !Array.isArray(backup.activeTopics)
  ) {
    return {
      valid: false,
      reason: 'Invalid topic data.'
    };
  }

  if (
    backup.reminders !== undefined &&
    !Array.isArray(backup.reminders)
  ) {
    return {
      valid: false,
      reason: 'Invalid reminder data.'
    };
  }

  if (
    backup.settings !== undefined &&
    (
      !backup.settings ||
      typeof backup.settings !== 'object' ||
      Array.isArray(backup.settings)
    )
  ) {
    return {
      valid: false,
      reason: 'Invalid settings data.'
    };
  }

  return {
    valid: true
  };
}

document.getElementById('importDataInput').addEventListener('change', e => {
  const file = e.target.files[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onload = event => {
    try {
      const imported =
        JSON.parse(
          event.target.result
        );

      const validation =
        validateBackup(imported);

      if (!validation.valid) {
        document.getElementById(
          'importMsg'
        ).textContent =
          validation.reason;

        return;
      }

      const confirmed =
        window.confirm(
          'Import this backup? Your current local data will be replaced.'
        );

      if (!confirmed) {
        document.getElementById(
          'importMsg'
        ).textContent =
          'Import cancelled.';

        return;
      }

      // Data
      data = migrateData(
        imported.data
      );

      saveData(data);

      // Topics
      activeTopics =
        normalizeStringArray(
          imported.activeTopics || [],
          22
        );

      saveTopics(activeTopics);

      // Reminders
      reminders =
        normalizeReminders(
          imported.reminders || []
        );

      saveReminders(reminders);

      // Settings
      settings = {
        leetcodeUser:
          typeof imported.settings?.leetcodeUser === 'string'
            ? imported.settings.leetcodeUser
                .trim()
                .slice(0, 100)
            : ''
      };

      saveSettings(settings);

      document.getElementById(
        'importMsg'
      ).textContent =
        'Backup imported successfully. Reloading...';

      setTimeout(() => {
        location.reload();
      }, 1000);

    } catch (err) {
      console.error(
        'Import error:',
        err
      );

      document.getElementById(
        'importMsg'
      ).textContent =
        'Invalid backup file.';
    } finally {
      // Allow importing the same file again
      e.target.value = '';
    }
  };

  reader.readAsText(file);
});

// ─── LeetCode Sync ────────────────────────────────────────────

const LEETCODE_API_BASE =
  'https://alfa-leetcode-api.onrender.com';

const LEETCODE_AUTO_SYNC_INTERVAL =
  15 * 60 * 1000; // 15 minutes

let leetcodeAutoSyncTimer = null;
let leetcodeSyncInFlight = false;
let lastLeetCodeSyncAt = 0;

/**
 * Fetch recent accepted LeetCode submissions.
 *
 * The API supports /acSubmission?limit=N.
 * We fetch 100 so a user doesn't have to open the
 * dashboard immediately after solving a problem.
 */
async function fetchLeetCodeAcceptedSubmissions() {
  const username =
    typeof settings.leetcodeUser === 'string'
      ? settings.leetcodeUser.trim()
      : '';

  if (!username) {
    throw new Error('LeetCode username is not configured.');
  }

  const encodedUsername =
    encodeURIComponent(username);

  const url =
    `${LEETCODE_API_BASE}/${encodedUsername}/acSubmission?limit=100`;

  const controller =
    new AbortController();

  const timeout =
    setTimeout(() => controller.abort(), 20000);

  try {
    const response = await fetch(url, {
      method: 'GET',
      signal: controller.signal,
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error(
        `LeetCode API returned HTTP ${response.status}`
      );
    }

    const json =
      await response.json();

    const submissions =
      Array.isArray(json?.submission)
        ? json.submission
        : Array.isArray(json)
          ? json
          : null;

    if (!submissions) {
      throw new Error(
        'Invalid LeetCode API response.'
      );
    }

    return submissions;

  } finally {
    clearTimeout(timeout);
  }
}


/**
 * Convert the submission response into:
 *
 * {
 *   "2026-09-24": Set(["Two Sum", "Binary Tree..."]),
 *   "2026-09-23": Set(["Valid Parentheses"])
 * }
 */
function groupLeetCodeSubmissionsByDate(submissions) {
  const grouped = {};

  submissions.forEach(submission => {
    if (
      !submission ||
      typeof submission.title !== 'string'
    ) {
      return;
    }

    const timestamp =
      Number.parseInt(
        submission.timestamp,
        10
      );

    if (!Number.isFinite(timestamp)) {
      return;
    }

    const submittedAt =
      new Date(timestamp * 1000);

    if (Number.isNaN(submittedAt.getTime())) {
      return;
    }

    const key =
      dateKey(
        submittedAt.getFullYear(),
        submittedAt.getMonth(),
        submittedAt.getDate()
      );

    const title =
      submission.title.trim();

    if (!title) return;

    if (!grouped[key]) {
      grouped[key] = new Set();
    }

    grouped[key].add(title);
  });

  return grouped;
}


/**
 * Apply LeetCode activity to local DSA Journey data.
 *
 * Important:
 * - Existing manual problem counts are preserved.
 * - LeetCode problems are stored separately.
 * - Accepted submissions automatically mark that day as DSA done.
 */
function applyLeetCodeSubmissions(grouped) {
  let changed = false;
  let affectedDays = 0;
  let addedProblems = 0;

  Object.entries(grouped).forEach(
    ([date, titleSet]) => {
      const entry =
        normalizeEntry(
          data[date] || {}
        );

      const currentProblems =
        normalizeStringArray(
          entry.leetcodeProblems,
          500
        );

      const existingProblems =
        new Set(currentProblems);

      titleSet.forEach(title => {
        if (!existingProblems.has(title)) {
          existingProblems.add(title);
          addedProblems++;
        }
      });

      const mergedProblems =
        Array.from(existingProblems);

      const previousProblems =
        normalizeStringArray(
          entry.leetcodeProblems,
          500
        );

      const problemListChanged =
        mergedProblems.length !==
          previousProblems.length ||
        mergedProblems.some(
          (problem, index) =>
            problem !== previousProblems[index]
        );

      const previousCount =
        clampInt(
          entry.dsa?.problemsSolved,
          0,
          999
        );

      const newProblemCount =
        Math.max(
          previousCount,
          mergedProblems.length
        );

      const shouldUpdate =
        !entry.done ||
        problemListChanged ||
        newProblemCount !== previousCount;

      if (!shouldUpdate) {
        return;
      }

      data[date] = {
        ...entry,

        // An accepted LeetCode submission means
        // the user completed DSA work that day.
        done: true,

        dsa: {
          ...(entry.dsa || {}),

          problemsSolved:
            newProblemCount
        },

        leetcodeProblems:
          mergedProblems
      };

      changed = true;
      affectedDays++;
    }
  );

  return {
    changed,
    affectedDays,
    addedProblems
  };
}


/**
 * Refresh controls inside an already-open day modal.
 */
function refreshOpenDayModalFromData() {
  if (!selectedKey) return;

  const entry =
    data[selectedKey] || {};

  // DSA button
  const checkinBtn =
    document.getElementById(
      'checkinBtn'
    );

  const checkinIcon =
    document.getElementById(
      'checkinIcon'
    );

  const checkinLabel =
    document.getElementById(
      'checkinLabel'
    );

  if (entry.done) {
    checkinBtn.classList.add('checked');

    checkinIcon.innerHTML =
      svgIcon('checkSquare');

    checkinLabel.textContent =
      'DSA Done! (click to undo)';
  } else {
    checkinBtn.classList.remove('checked');

    checkinIcon.innerHTML =
      svgIcon('square');

    checkinLabel.textContent =
      'Mark DSA Done';
  }

  // Problem count
  const problemsInput =
    document.getElementById(
      'problemsSolved'
    );

  if (problemsInput) {
    problemsInput.value =
      entry.dsa?.problemsSolved || '';
  }

  // LeetCode problem list
  renderLeetCodeProblems(
    Array.isArray(entry.leetcodeProblems)
      ? entry.leetcodeProblems
      : []
  );
}


/**
 * Main sync function used by BOTH automatic sync
 * and the manual "Sync LeetCode" button.
 */
async function syncLeetCodeData({
  manual = false
} = {}) {
  if (leetcodeSyncInFlight) {
    return;
  }

  if (
    !settings.leetcodeUser ||
    !settings.leetcodeUser.trim()
  ) {
    if (manual) {
      alert(
        'Please set your LeetCode username in Settings first.'
      );
    }

    return;
  }

  leetcodeSyncInFlight = true;

  if (manual) {
    const button =
      document.getElementById(
        'leetcodeSyncBtn'
      );

    if (button) {
      button.disabled = true;
      button.textContent = 'Syncing...';
    }
  }

  try {
    const submissions =
      await fetchLeetCodeAcceptedSubmissions();

    const grouped =
      groupLeetCodeSubmissionsByDate(
        submissions
      );

    const result =
      applyLeetCodeSubmissions(
        grouped
      );

    lastLeetCodeSyncAt =
      Date.now();

    if (result.changed) {
      saveData(data);

      renderCalendar();
      updateStats();

      refreshOpenDayModalFromData();

      if (selectedKey === todayKey()) {
        renderTodayNotePreview();
      }
    }

    // Manual feedback
    if (manual) {
      const message =
        result.addedProblems > 0
          ? `Synced ${result.addedProblems} new LeetCode problem${result.addedProblems === 1 ? '' : 's'}.`
          : result.affectedDays > 0
            ? 'LeetCode activity is already up to date.'
            : 'No new LeetCode activity found.';

      document.getElementById(
        'modalFooterMsg'
      ).textContent = message;

      setTimeout(() => {
        const msg =
          document.getElementById(
            'modalFooterMsg'
          );

        if (msg) {
          msg.textContent = '';
        }
      }, 3000);
    }

  } catch (error) {
    console.error(
      'LeetCode sync error:',
      error
    );

    // Automatic sync should fail silently.
    // Manual sync gives the user useful feedback.
    if (manual) {
      document.getElementById(
        'modalFooterMsg'
      ).textContent =
        'Sync failed. Check your username or try again later.';

      setTimeout(() => {
        const msg =
          document.getElementById(
            'modalFooterMsg'
          );

        if (msg) {
          msg.textContent = '';
        }
      }, 4000);
    }

  } finally {
    leetcodeSyncInFlight = false;

    if (manual) {
      const button =
        document.getElementById(
          'leetcodeSyncBtn'
        );

      if (button) {
        button.disabled = false;
        button.textContent = 'Sync now';
      }
    }
  }
}


/**
 * Start/restart automatic LeetCode syncing.
 */
function startLeetCodeAutoSync() {
  if (leetcodeAutoSyncTimer) {
    clearInterval(
      leetcodeAutoSyncTimer
    );

    leetcodeAutoSyncTimer = null;
  }

  if (
    !settings.leetcodeUser ||
    !settings.leetcodeUser.trim()
  ) {
    return;
  }

  // Sync immediately when the app starts.
  void syncLeetCodeData();

  // Continue while the tab is open.
  leetcodeAutoSyncTimer =
    setInterval(() => {
      if (
        document.visibilityState ===
        'visible'
      ) {
        void syncLeetCodeData();
      }
    }, LEETCODE_AUTO_SYNC_INTERVAL);
}


/**
 * Stop automatic syncing.
 */
function stopLeetCodeAutoSync() {
  if (leetcodeAutoSyncTimer) {
    clearInterval(
      leetcodeAutoSyncTimer
    );

    leetcodeAutoSyncTimer = null;
  }
}


/**
 * When the user returns to the tab,
 * sync once more rather than waiting for
 * the 15-minute timer.
 */
function maybeRefreshLeetCodeOnReturn() {
  if (
    !settings.leetcodeUser ||
    !settings.leetcodeUser.trim()
  ) {
    return;
  }

  // Don't hammer the API if focus/visibility events
  // happen repeatedly.
  const elapsed =
    Date.now() -
    lastLeetCodeSyncAt;

  if (elapsed < 2 * 60 * 1000) {
    return;
  }

  void syncLeetCodeData();
}


// Visibility/focus events
document.addEventListener(
  'visibilitychange',
  () => {
    if (
      document.visibilityState ===
      'visible'
    ) {
      maybeRefreshLeetCodeOnReturn();
    }
  }
);

window.addEventListener(
  'focus',
  maybeRefreshLeetCodeOnReturn
);


// Manual sync button
document.getElementById(
  'leetcodeSyncBtn'
).addEventListener(
  'click',
  () => {
    void syncLeetCodeData({
      manual: true
    });
  }
);


// ─── Init ─────────────────────────────────────────────────────
mountStaticIcons();
initRing();
renderCalendar();
renderTopics();
updateStats();
renderReminders();
renderTodayNotePreview();
initPetMascot();

// Start automatic LeetCode syncing.
startLeetCodeAutoSync();
