const menuToggle = document.getElementById('menuToggle');
const navDrawer = document.getElementById('navDrawer');
const navTabs = document.querySelectorAll('.nav-tab');
const pages = document.querySelectorAll('.page-view');
const ambientBg = document.getElementById('pageAmbientBg');

let pageTransitionTimer = null;

function syncAmbientBackground(pageEl, instant = false) {
  if (!ambientBg || !pageEl) return;
  const heroEl = pageEl.querySelector('.hero, .page-banner, .ascii-hero');
  if (!heroEl) return;

  if (instant) {
    ambientBg.classList.add('no-transition');
  }
  ambientBg.style.height = `${heroEl.offsetHeight}px`;
  ambientBg.classList.toggle('is-rounded', heroEl.classList.contains('ascii-hero'));
  if (instant) {
    void ambientBg.offsetHeight;
    ambientBg.classList.remove('no-transition');
  }
}

function clearPageTransitionClasses() {
  if (pageTransitionTimer) {
    clearTimeout(pageTransitionTimer);
    pageTransitionTimer = null;
  }
  pages.forEach((p) => {
    p.classList.remove('is-entering', 'is-entering-active', 'is-leaving', 'is-leaving-active');
    p.style.top = '';
  });
}

function showPage(pageId, updateUrl = true) {
  const validIds = Array.from(pages).map((p) => p.id.replace('page-', ''));
  const targetId = validIds.includes(pageId) ? pageId : 'home';
  const targetPage = document.getElementById(`page-${targetId}`);
  const currentPage = Array.from(pages).find((p) => p.classList.contains('active'));

  navTabs.forEach((t) => t.classList.toggle('active', t.dataset.page === targetId));
  navDrawer.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  if (updateUrl) {
    const url = new URL(window.location.href);
    url.searchParams.set('page', targetId);
    window.history.replaceState({}, '', url);
  }

  if (!currentPage || currentPage === targetPage) {
    clearPageTransitionClasses();
    pages.forEach((p) => p.classList.toggle('active', p === targetPage));
    syncAmbientBackground(targetPage, !currentPage);
    if (currentPage === targetPage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    window.dispatchEvent(new Event('roadmap-sync'));
    return;
  }

  const prevScrollY = window.scrollY || 0;
  clearPageTransitionClasses();

  currentPage.classList.remove('active');
  currentPage.classList.add('is-leaving');
  currentPage.style.top = `${-prevScrollY}px`;

  targetPage.classList.add('active', 'is-entering');
  window.scrollTo({ top: 0, behavior: 'instant' });
  syncAmbientBackground(targetPage, false);

  void targetPage.offsetWidth;
  requestAnimationFrame(() => {
    currentPage.classList.add('is-leaving-active');
    targetPage.classList.add('is-entering-active');
  });

  pageTransitionTimer = setTimeout(() => {
    currentPage.classList.remove('is-leaving', 'is-leaving-active');
    currentPage.style.top = '';
    targetPage.classList.remove('is-entering', 'is-entering-active');
    pageTransitionTimer = null;
  }, 380);

  window.dispatchEvent(new Event('roadmap-sync'));
}

// Initialize page from ?page= query param or #hash
const initialParams = new URLSearchParams(window.location.search);
const initialPage = initialParams.get('page') || window.location.hash.replace('#', '');
if (initialPage) {
  showPage(initialPage, false);
} else {
  const activePage = Array.from(pages).find((p) => p.classList.contains('active'));
  syncAmbientBackground(activePage, true);
}

window.addEventListener('resize', () => {
  const activePage = Array.from(pages).find((p) => p.classList.contains('active'));
  syncAmbientBackground(activePage, true);
});

if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(() => {
    const activePage = Array.from(pages).find((p) => p.classList.contains('active'));
    syncAmbientBackground(activePage, true);
  });
}

menuToggle.addEventListener('click', () => {
  const isOpen = navDrawer.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

navTabs.forEach((tab) => {
  tab.addEventListener('click', () => showPage(tab.dataset.page));
});

document.addEventListener('click', (e) => {
  const target = e.target.closest('[data-nav]');
  if (target) {
    e.preventDefault();
    showPage(target.dataset.nav);
  }
});

// Populate 10 Interactive Compliance Sections (AACCUP Areas I–X + Filters & Expandable Details)
const complianceSections = [
  {
    id: 'area-1',
    section: 'SECTION 01',
    title: 'Area I: Vision, Mission, Goals & Objectives',
    category: 'academic',
    status: 'ready',
    statusLabel: 'READY',
    lead: 'DCS VMGO Committee',
    summary: 'Alignment of PUP Vision & Mission with CCIS Goals and BSCS Program Educational Objectives (PEOs).',
    driveUrl: '#',
    internalNav: null,
    evidence: [
      { label: 'Approved PUP & CCIS VMGO Charter', done: true },
      { label: 'BSCS Program Educational Objectives (PEOs)', done: true },
      { label: 'Stakeholder Dissemination & Awareness Survey', done: true },
      { label: 'VMGO Review & Minutes of Consultation', done: true },
    ],
  },
  {
    id: 'area-2',
    section: 'SECTION 02',
    title: 'Area II: Faculty',
    category: 'academic',
    status: 'ready',
    statusLabel: 'READY',
    lead: 'DCS Chairperson & Faculty Dev',
    summary: 'Faculty academic qualifications, rank distribution, teaching loads, and professional development records.',
    driveUrl: '#',
    internalNav: { page: 'faculty', label: 'Faculty Directory →' },
    evidence: [
      { label: 'Faculty Profile & Academic Rank Matrix (CS/IT)', done: true },
      { label: 'Faculty Teaching Load & Schedule Assignments', done: true },
      { label: 'Graduate Degrees, Certifications & Trainings', done: true },
      { label: 'Faculty Performance Evaluation Summaries', done: true },
    ],
  },
  {
    id: 'area-3',
    section: 'SECTION 03',
    title: 'Area III: Curriculum & Instruction',
    category: 'academic',
    status: 'ready',
    statusLabel: 'READY',
    lead: 'Curriculum & OBE Committee',
    summary: '2022 Revised BSCS Curriculum (167 units, CMO No. 25 s. 2015), OBE syllabi, and Student Outcomes assessment.',
    driveUrl: '#',
    internalNav: { page: 'teaching', label: 'Teaching & Learning →' },
    evidence: [
      { label: '2022 Revised BSCS Curriculum & Course Checklist', done: true },
      { label: 'OBE Course Syllabi (Core, Electives, Thesis)', done: true },
      { label: 'Curriculum Mapping to Student Outcomes (SOs)', done: true },
      { label: 'Internship / OJT & Capstone Guidelines', done: true },
    ],
  },
  {
    id: 'area-4',
    section: 'SECTION 04',
    title: 'Area IV: Support to Students',
    category: 'student',
    status: 'review',
    statusLabel: 'IN REVIEW',
    lead: 'Student Affairs & Guidance',
    summary: 'Admission & retention policies, academic advising, scholarships, and CS student organization records.',
    driveUrl: '#',
    internalNav: null,
    evidence: [
      { label: 'BSCS Admission, Retention & Shifting Policies', done: true },
      { label: 'Academic Advising & Career Placement Records', done: true },
      { label: 'Co-curricular & Student Org Portfolio (ASCII)', done: true },
      { label: 'Updated Alumni Tracer & Graduate Employment Log', done: false },
    ],
  },
  {
    id: 'area-5',
    section: 'SECTION 05',
    title: 'Area V: Research',
    category: 'academic',
    status: 'review',
    statusLabel: 'IN REVIEW',
    lead: 'DCS Research Coordinator',
    summary: 'Faculty and student research production, indexed publications, intellectual property, and research policies.',
    driveUrl: '#',
    internalNav: { page: 'research', label: 'Research Pillar →' },
    evidence: [
      { label: 'Department Research Agenda & Policy Framework', done: true },
      { label: 'Faculty Indexed Publications (2022–2025)', done: true },
      { label: 'Student Thesis & Conference Presentation Records', done: true },
      { label: 'Research Dissemination & Citation Audit', done: false },
    ],
  },
  {
    id: 'area-6',
    section: 'SECTION 06',
    title: 'Area VI: Extension & Community Involvement',
    category: 'student',
    status: 'pending',
    statusLabel: 'PENDING',
    lead: 'Extension & Outreach Lead',
    summary: 'Community digital literacy programs, extension partnerships, needs assessments, and impact reports.',
    driveUrl: '#',
    internalNav: { page: 'community', label: 'Community Pillar →' },
    evidence: [
      { label: 'Community Needs Assessment & Partner MOAs', done: true },
      { label: 'Digital Literacy & Tech Training Modules', done: false },
      { label: 'Extension Activity Attendance & Photo Logs', done: false },
      { label: 'Post-Implementation Impact Evaluation Report', done: false },
    ],
  },
  {
    id: 'area-7',
    section: 'SECTION 07',
    title: 'Area VII: Library',
    category: 'resources',
    status: 'review',
    statusLabel: 'IN REVIEW',
    lead: 'Library Liaison Officer',
    summary: 'Computer Science print/digital holdings, IEEE/ACM/ScienceDirect subscriptions, and student utilization.',
    driveUrl: '#',
    internalNav: null,
    evidence: [
      { label: 'CS Book & Reference Holdings Inventory', done: true },
      { label: 'Online Database Subscriptions (IEEE, ACM, etc.)', done: true },
      { label: 'Library Orientation & Utilization Statistics', done: true },
      { label: 'Annual Collection Development Request Log', done: false },
    ],
  },
  {
    id: 'area-8',
    section: 'SECTION 08',
    title: 'Area VIII: Physical Plant & Facilities',
    category: 'resources',
    status: 'review',
    statusLabel: 'IN REVIEW',
    lead: 'Facilities & Safety Officer',
    summary: 'Lecture classrooms, campus accessibility, safety compliance, and preventive maintenance schedules.',
    driveUrl: '#',
    internalNav: null,
    evidence: [
      { label: 'Classroom & Faculty Room Floor Plans', done: true },
      { label: 'Fire, Safety & Accessibility Inspection Logs', done: true },
      { label: 'Campus Network & Wi-Fi Coverage Audit', done: true },
      { label: 'Preventive Maintenance & Repair Records', done: false },
    ],
  },
  {
    id: 'area-9',
    section: 'SECTION 09',
    title: 'Area IX: Laboratories',
    category: 'resources',
    status: 'ready',
    statusLabel: 'READY',
    lead: 'CS Lab Custodian & Tech Team',
    summary: 'Computing & networking laboratories, workstation specs, software licensing, and lab safety protocols.',
    driveUrl: '#',
    internalNav: null,
    evidence: [
      { label: 'CS Laboratory Equipment & Spec Inventory', done: true },
      { label: 'Software Licenses & Development Tooling List', done: true },
      { label: 'Laboratory Utilization Logs & Class Schedules', done: true },
      { label: 'Lab Safety Guidelines & Incident Protocols', done: true },
    ],
  },
  {
    id: 'area-10',
    section: 'SECTION 10',
    title: 'Area X: Administration & PICAB / Narrative Reports',
    category: 'resources',
    status: 'review',
    statusLabel: 'IN REVIEW',
    lead: 'DCS Governance & QA Team',
    summary: 'Department organizational governance, budget & resource allocation, PICAB matrix, and narrative reports.',
    driveUrl: '#',
    internalNav: { page: 'planning', label: 'Planning & QA →' },
    evidence: [
      { label: 'CCIS & DCS Organizational Chart & Mandates', done: true },
      { label: 'Annual Operational Plan & Budget Utilization', done: true },
      { label: 'PICAB Computing Accreditation Evidence Matrix', done: true },
      { label: 'Consolidated Area I–X Narrative Report Draft', done: false },
    ],
  },
];

const complianceGrid = document.getElementById('complianceGrid');
const compDomainGrid = document.getElementById('compDomainGrid');
const compDrawer = document.getElementById('compDrawer');
const compDrawerBackdrop = document.getElementById('compDrawerBackdrop');

if (complianceGrid && compDrawer) {
  const STORAGE_KEY = 'dcs_compliance_checks_v2';
  const searchInput = document.getElementById('compSearch');
  const statusPills = document.querySelectorAll('[data-comp-status]');
  const emptyEl = document.getElementById('compEmpty');
  const emptyResetBtn = document.getElementById('compEmptyResetBtn');
  const drawerCloseBtn = document.getElementById('compDrawerClose');
  const drawerEyebrow = document.getElementById('compDrawerEyebrow');
  const drawerTitle = document.getElementById('compDrawerTitle');
  const drawerBody = document.getElementById('compDrawerBody');
  const drawerFoot = document.getElementById('compDrawerFoot');

  let activeCat = 'all';
  let activeStatus = 'all';
  let searchQuery = '';
  let activeDrawerId = null;

  function loadSavedChecks() {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      complianceSections.forEach((area) => {
        if (Array.isArray(parsed[area.id]) && parsed[area.id].length === area.evidence.length) {
          area.evidence.forEach((ev, idx) => {
            ev.done = Boolean(parsed[area.id][idx]);
          });
        }
      });
    } catch {
      // Ignore storage access issues
    }
  }

  function saveChecks() {
    try {
      const payload = {};
      complianceSections.forEach((area) => {
        payload[area.id] = area.evidence.map((ev) => ev.done);
      });
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch {
      // Ignore storage access issues
    }
  }

  function getAreaStatusInfo(area) {
    const doneCount = area.evidence.filter((e) => e.done).length;
    const totalCount = area.evidence.length;
    const pct = totalCount ? Math.round((doneCount / totalCount) * 100) : 0;
    if (doneCount === totalCount) {
      return { status: 'ready', label: 'READY', badgeClass: 'badge-ready', doneCount, totalCount, pct };
    }
    if (doneCount >= 2) {
      return { status: 'review', label: 'IN REVIEW', badgeClass: 'badge-review', doneCount, totalCount, pct };
    }
    return { status: 'pending', label: 'PENDING', badgeClass: 'badge-pending', doneCount, totalCount, pct };
  }

  function updateReadinessSummary() {
    const totalItems = complianceSections.reduce((sum, a) => sum + a.evidence.length, 0);
    const doneItems = complianceSections.reduce(
      (sum, a) => sum + a.evidence.filter((e) => e.done).length,
      0
    );
    const pct = totalItems ? Math.round((doneItems / totalItems) * 100) : 0;

    const pctEl = document.getElementById('compOverallPct');
    const ratioEl = document.getElementById('compArtifactRatio');
    const heroPillEl = document.getElementById('compHeroPillText');
    const ringEl = document.getElementById('compRingCircle');

    if (pctEl) pctEl.textContent = `${pct}%`;
    if (ratioEl) ratioEl.textContent = `${doneItems} of ${totalItems} required artifacts verified`;
    if (heroPillEl) heroPillEl.textContent = `${doneItems}/${totalItems} Artifacts Verified • ${pct}% Ready`;
    if (ringEl) {
      const circumference = 2 * Math.PI * 56;
      ringEl.style.strokeDashoffset = String(circumference * (1 - pct / 100));
    }
  }

  function getFilteredAreas() {
    const q = searchQuery.trim().toLowerCase();
    return complianceSections.filter((area) => {
      const info = getAreaStatusInfo(area);
      const matchCat = activeCat === 'all' || area.category === activeCat;
      const matchStatus = activeStatus === 'all' || info.status === activeStatus;
      const matchQuery =
        !q ||
        area.title.toLowerCase().includes(q) ||
        area.summary.toLowerCase().includes(q) ||
        area.lead.toLowerCase().includes(q) ||
        area.evidence.some((ev) => ev.label.toLowerCase().includes(q));
      return matchCat && matchStatus && matchQuery;
    });
  }

  function renderBentoCards() {
    const filtered = getFilteredAreas();
    if (emptyEl) emptyEl.hidden = filtered.length > 0;

    complianceGrid.innerHTML = filtered
      .map((area) => {
        const info = getAreaStatusInfo(area);
        const romanMatch = area.title.match(/^Area\s+([IVX]+)/i);
        const areaBadge = romanMatch ? `AREA ${romanMatch[1].toUpperCase()}` : area.section;
        const segments = area.evidence
          .map((ev) => `<span class="comp-seg ${ev.done ? 'done' : ''}"></span>`)
          .join('');

        return `
          <article class="comp-area-tile" data-open-drawer="${area.id}" tabindex="0" role="button">
            <div>
              <div class="comp-tile-top">
                <span class="comp-tile-num">${areaBadge}</span>
                <span class="badge ${info.badgeClass}">${info.label}</span>
              </div>
              <h3 class="comp-tile-title">${area.title.replace(/^Area\s+[IVX]+:\s*/i, '')}</h3>
              <p class="comp-tile-desc">${area.summary}</p>
            </div>

            <div style="display:grid;gap:10px;">
              <div>
                <div class="comp-meta-row" style="margin-bottom:6px;">
                  <span>Lead: <strong>${area.lead}</strong></span>
                  <span><strong>${info.doneCount}/${info.totalCount}</strong> (${info.pct}%)</span>
                </div>
                <div class="comp-segments" aria-hidden="true">${segments}</div>
              </div>
              <div class="comp-tile-foot">
                <span class="comp-tile-cta">Inspect Evidence →</span>
                <a href="${area.driveUrl}" class="btn-drive" style="padding:5px 12px;font-size:0.78rem;" title="Open ${area.title} Google Drive">Drive ↗</a>
              </div>
            </div>
          </article>
        `;
      })
      .join('');
  }

  function renderDrawer() {
    if (!activeDrawerId) return;
    const idx = complianceSections.findIndex((a) => a.id === activeDrawerId);
    if (idx === -1) return;
    const area = complianceSections[idx];
    const info = getAreaStatusInfo(area);
    const prevArea = complianceSections[(idx - 1 + complianceSections.length) % complianceSections.length];
    const nextArea = complianceSections[(idx + 1) % complianceSections.length];

    if (drawerEyebrow) drawerEyebrow.textContent = `${area.section} • ${area.lead.toUpperCase()}`;
    if (drawerTitle) drawerTitle.textContent = area.title;

    if (drawerBody) {
      drawerBody.innerHTML = `
        <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;">
          <span class="badge ${info.badgeClass}">${info.label}</span>
          <span style="font-family:var(--font-mono);font-size:0.78rem;font-weight:700;color:var(--color-maroon);">${info.doneCount}/${info.totalCount} Verified (${info.pct}%)</span>
        </div>
        <div class="comp-progress-track">
          <div class="comp-progress-fill" style="width:${info.pct}%"></div>
        </div>
        <p class="comp-card-desc" style="font-size:0.92rem;">${area.summary}</p>
        <div>
          <div class="comp-params-label" style="margin-bottom:10px;">Required Evidence (Click to toggle)</div>
          <div class="comp-checklist">
            ${area.evidence
          .map(
            (ev, evIdx) => `
                <button type="button" class="comp-check-btn ${ev.done ? 'is-done' : ''}" data-drawer-check="${area.id}:${evIdx}" aria-pressed="${ev.done}">
                  <span class="comp-check-left">
                    <span class="comp-check-dot ${ev.done ? 'done' : 'todo'}" aria-hidden="true">${ev.done ? '✓' : '•'}</span>
                    <span>${ev.label}</span>
                  </span>
                  <span class="comp-check-state">${ev.done ? 'VERIFIED' : 'PENDING'}</span>
                </button>
              `
          )
          .join('')}
          </div>
        </div>
        ${area.internalNav
          ? `<div><button type="button" class="comp-internal-link" data-nav="${area.internalNav.page}">${area.internalNav.label}</button></div>`
          : ''
        }
      `;
    }

    if (drawerFoot) {
      drawerFoot.innerHTML = `
        <div style="display:flex;gap:8px;">
          <button type="button" class="comp-toggle-btn" data-drawer-nav="${prevArea.id}">← Prev Area</button>
          <button type="button" class="comp-toggle-btn" data-drawer-nav="${nextArea.id}">Next Area →</button>
        </div>
        <a href="${area.driveUrl}" class="btn-drive">Open Area Drive ↗</a>
      `;
    }
  }

  function openDrawer(areaId) {
    activeDrawerId = areaId;
    renderDrawer();
    compDrawer.hidden = false;
    if (compDrawerBackdrop) compDrawerBackdrop.hidden = false;
  }

  function closeDrawer() {
    activeDrawerId = null;
    compDrawer.hidden = true;
    if (compDrawerBackdrop) compDrawerBackdrop.hidden = true;
  }

  complianceGrid.addEventListener('click', (e) => {
    if (e.target.closest('a.btn-drive')) return;
    const tile = e.target.closest('[data-open-drawer]');
    if (tile) openDrawer(tile.dataset.openDrawer);
  });

  complianceGrid.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const tile = e.target.closest('[data-open-drawer]');
    if (!tile) return;
    e.preventDefault();
    openDrawer(tile.dataset.openDrawer);
  });

  if (compDomainGrid) {
    compDomainGrid.addEventListener('click', (e) => {
      const card = e.target.closest('[data-comp-cat]');
      if (!card) return;
      activeCat = card.dataset.compCat;
      compDomainGrid.querySelectorAll('[data-comp-cat]').forEach((c) => c.classList.toggle('is-active', c === card));
      renderBentoCards();
    });
  }

  statusPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      activeStatus = pill.dataset.compStatus;
      statusPills.forEach((p) => p.classList.toggle('active', p === pill));
      renderBentoCards();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderBentoCards();
    });
  }

  if (emptyResetBtn) {
    emptyResetBtn.addEventListener('click', () => {
      activeCat = 'all';
      activeStatus = 'all';
      searchQuery = '';
      if (searchInput) searchInput.value = '';
      if (compDomainGrid) {
        compDomainGrid.querySelectorAll('[data-comp-cat]').forEach((c) => c.classList.toggle('is-active', c.dataset.compCat === 'all'));
      }
      statusPills.forEach((p) => p.classList.toggle('active', p.dataset.compStatus === 'all'));
      renderBentoCards();
    });
  }

  compDrawer.addEventListener('click', (e) => {
    if (e.target.closest('[data-nav]')) {
      closeDrawer();
      return;
    }
    const navBtn = e.target.closest('[data-drawer-nav]');
    if (navBtn) {
      activeDrawerId = navBtn.dataset.drawerNav;
      renderDrawer();
      return;
    }
    const checkBtn = e.target.closest('[data-drawer-check]');
    if (checkBtn) {
      const [areaId, idxStr] = checkBtn.dataset.drawerCheck.split(':');
      const area = complianceSections.find((a) => a.id === areaId);
      const evIdx = Number(idxStr);
      if (area && area.evidence[evIdx]) {
        area.evidence[evIdx].done = !area.evidence[evIdx].done;
        saveChecks();
        updateReadinessSummary();
        renderBentoCards();
        renderDrawer();
      }
    }
  });

  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeDrawer);
  if (compDrawerBackdrop) compDrawerBackdrop.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !compDrawer.hidden) closeDrawer();
  });

  loadSavedChecks();
  updateReadinessSummary();
  renderBentoCards();
}

// Populate Portrait Placeholders for Faculty & Notable Alumni
function buildPortraitSVG(initials, darkMode = false) {
  const bg = darkMode ? 'rgba(255,255,255,0.14)' : '#E7D5D5';
  const head = darkMode ? '#FFDE00' : '#800000';
  const body = darkMode ? 'rgba(255,222,0,0.75)' : '#5C0000';
  return `
    <svg viewBox="0 0 120 130" aria-hidden="true">
      <rect width="120" height="130" fill="${bg}"/>
      <circle cx="60" cy="46" r="22" fill="${head}" opacity="0.9"/>
      <path d="M22,122 C22,92 38,78 60,78 C82,78 98,92 98,122 Z" fill="${body}" opacity="0.88"/>
    </svg>
    <span class="tl-portrait-tag">${initials}</span>
  `;
}

document.querySelectorAll('.tl-portrait-frame[data-initials]').forEach((el) => {
  el.innerHTML = buildPortraitSVG(el.dataset.initials, true);
});

document.querySelectorAll('.alumni-photo-box[data-initials]').forEach((el) => {
  const badge = el.querySelector('.alumni-photo-badge')?.outerHTML || '';
  el.innerHTML = buildPortraitSVG(el.dataset.initials, true) + badge;
});

// Interactive BSCS Curriculum Explorer
const currExplorer = document.getElementById('curriculumExplorer');
if (currExplorer) {
  const currSection = currExplorer.closest('section');
  const tableCards = Array.from(currSection.querySelectorAll('.tl-table-card'));
  const searchInput = document.getElementById('currSearch');
  const yearPills = currExplorer.querySelectorAll('[data-curr-year]');
  const catPills = currExplorer.querySelectorAll('[data-curr-cat]');
  const statusEl = document.getElementById('currStatus');
  const resetBtn = document.getElementById('currResetBtn');
  const emptyEl = document.getElementById('currEmpty');
  const inspectorEl = document.getElementById('currInspector');

  let activeYear = 'y1';
  let activeCat = 'all';
  let searchQuery = '';

  function getCardGroup(titleText) {
    const t = titleText.toUpperCase();
    if (t.includes('FIRST YEAR')) return 'y1';
    if (t.includes('SECOND YEAR')) return 'y2';
    if (t.includes('THIRD YEAR')) return 'y3';
    if (t.includes('SUMMER')) return 'summer';
    if (t.includes('FOURTH YEAR')) return 'y4';
    return 'electives';
  }

  function getCourseCategory(code, group) {
    const c = code.toUpperCase();
    if (group === 'electives' || c.startsWith('ELEC') || c.startsWith('OFAD')) return 'elec';
    if (c.startsWith('GEED')) return 'ge';
    if (c.startsWith('MATH') || c.startsWith('STAT')) return 'math';
    if (c.startsWith('PATHFIT') || c.startsWith('NSTP')) return 'pe';
    return 'cs';
  }

  const allCourseRecords = [];
  tableCards.forEach((card) => {
    const title = card.querySelector('.tl-table-title')?.textContent || '';
    const group = getCardGroup(title);
    card.dataset.currGroup = group;

    const rows = Array.from(card.querySelectorAll('tbody tr:not(.tl-total-row)'));
    rows.forEach((row) => {
      const cells = row.querySelectorAll('td');
      const code = cells[0]?.textContent.trim() || '';
      const isElectiveTable = group === 'electives';
      const prereq = isElectiveTable ? '—' : (cells[1]?.textContent.trim() || '—');
      const desc = isElectiveTable ? (cells[1]?.textContent.trim() || '') : (cells[2]?.textContent.trim() || '');
      const units = isElectiveTable ? (cells[4]?.textContent.trim() || '3') : (cells[5]?.textContent.trim() || '3');
      const cat = getCourseCategory(code, group);

      row.dataset.currCat = cat;
      row.dataset.currCode = code;
      row.dataset.currPrereq = prereq;
      row.dataset.currDesc = desc;
      row.dataset.currUnits = units;
      row.dataset.currTerm = title.replace(/\s+/g, ' ').trim();

      allCourseRecords.push({ code, prereq, desc });
    });
  });

  function applyCurriculumFilters() {
    const q = searchQuery.trim().toLowerCase();
    let visibleCourses = 0;
    let visibleUnits = 0;

    tableCards.forEach((card) => {
      const group = card.dataset.currGroup;
      const yearMatch = activeYear === 'all' || group === activeYear;
      const rows = Array.from(card.querySelectorAll('tbody tr:not(.tl-total-row)'));
      const totalRow = card.querySelector('tr.tl-total-row');
      let cardVisibleRows = 0;

      rows.forEach((row) => {
        const catMatch = activeCat === 'all' || row.dataset.currCat === activeCat;
        const text = `${row.dataset.currCode} ${row.dataset.currDesc} ${row.dataset.currPrereq}`.toLowerCase();
        const queryMatch = !q || text.includes(q);
        const show = yearMatch && catMatch && queryMatch;

        row.style.display = show ? '' : 'none';
        if (show) {
          cardVisibleRows += 1;
          visibleCourses += 1;
          visibleUnits += parseInt(row.dataset.currUnits, 10) || 0;
        }
      });

      if (totalRow) {
        totalRow.style.display = activeCat === 'all' && !q ? '' : 'none';
      }
      card.style.display = yearMatch && cardVisibleRows > 0 ? '' : 'none';
    });

    const isFiltered = activeYear !== 'y1' || activeCat !== 'all' || q.length > 0;
    resetBtn.style.display = isFiltered ? '' : 'none';
    emptyEl.style.display = visibleCourses === 0 ? '' : 'none';
    statusEl.textContent = isFiltered
      ? `Showing ${visibleCourses} matching course${visibleCourses === 1 ? '' : 's'} (${visibleUnits} units)`
      : `Showing ${visibleCourses} 1st Year courses (${visibleUnits} units) • Click any course row to inspect prerequisites & unlocks.`;
  }

  yearPills.forEach((btn) => {
    btn.addEventListener('click', () => {
      activeYear = btn.dataset.currYear;
      yearPills.forEach((b) => b.classList.toggle('active', b === btn));
      applyCurriculumFilters();
    });
  });

  catPills.forEach((btn) => {
    btn.addEventListener('click', () => {
      activeCat = btn.dataset.currCat;
      catPills.forEach((b) => b.classList.toggle('active', b === btn));
      applyCurriculumFilters();
    });
  });

  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    applyCurriculumFilters();
  });

  resetBtn.addEventListener('click', () => {
    activeYear = 'y1';
    activeCat = 'all';
    searchQuery = '';
    searchInput.value = '';
    yearPills.forEach((b) => b.classList.toggle('active', b.dataset.currYear === 'y1'));
    catPills.forEach((b) => b.classList.toggle('active', b.dataset.currCat === 'all'));
    applyCurriculumFilters();
  });

  currSection.addEventListener('click', (e) => {
    const row = e.target.closest('.tl-curr-table tbody tr:not(.tl-total-row)');
    if (!row) return;

    currSection.querySelectorAll('.tl-curr-table tbody tr.is-selected').forEach((r) => r.classList.remove('is-selected'));
    row.classList.add('is-selected');

    const code = row.dataset.currCode;
    const codeNum = code.split(' ')[1] || '';
    const unlocks = allCourseRecords
      .filter((c) => c.prereq !== '—' && (c.prereq.includes(code) || (codeNum && c.prereq.includes(codeNum))))
      .map((c) => c.code);

    inspectorEl.style.display = 'flex';
    inspectorEl.innerHTML = `
      <div>
        <div class="curr-inspector-code">${code} • ${row.dataset.currTerm}</div>
        <div class="curr-inspector-title">${row.dataset.currDesc}</div>
      </div>
      <div class="curr-inspector-meta">
        <span class="curr-tag">Units: ${row.dataset.currUnits}</span>
        <span class="curr-tag">Prereq: ${row.dataset.currPrereq}</span>
        <span class="curr-tag">Unlocks: ${unlocks.length ? unlocks.join(', ') : 'None / Terminal'}</span>
      </div>
    `;
  });

  applyCurriculumFilters();
}

// Click-to-Center Evidence Folder Cards
const evidenceFolder = document.getElementById('evidenceFolder');
const evidenceStack = document.getElementById('evidenceStack');
const evidenceHint = document.getElementById('evidenceHint');

if (evidenceFolder && evidenceStack) {
  const cards = Array.from(evidenceStack.querySelectorAll('.ascii-tilt-card'));

  function setActiveEvidence(targetCard) {
    cards.forEach((card) => {
      const active = card === targetCard;
      card.classList.toggle('is-active', active);
      card.setAttribute('aria-pressed', String(active));
    });
    evidenceStack.classList.toggle('has-active', Boolean(targetCard));
    if (evidenceHint) {
      evidenceHint.textContent = targetCard ? 'Click again to reset' : 'Click folder to center';
    }
  }

  evidenceFolder.addEventListener('click', (e) => {
    const clickedCard = e.target.closest('.ascii-tilt-card');
    if (!clickedCard) {
      setActiveEvidence(null);
      return;
    }
    const alreadyActive = clickedCard.classList.contains('is-active');
    setActiveEvidence(alreadyActive ? null : clickedCard);
  });
}

// Teaching & Learning Curriculum Progression Tabs
const tlTabButtons = document.querySelectorAll('[data-tl-tab]');
const tlTabPanels = document.querySelectorAll('[data-tl-panel]');

tlTabButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.tlTab;
    tlTabButtons.forEach((b) => {
      const active = b.dataset.tlTab === target;
      b.classList.toggle('active', active);
      b.setAttribute('aria-selected', String(active));
    });
    tlTabPanels.forEach((panel) => {
      panel.classList.toggle('active', panel.dataset.tlPanel === target);
    });
  });
});

// Scroll-Synced Shuttle for the Evolution Winding Road (#tl-evolution)
(function initScrollSyncedRoadmap() {
  const roadmap = document.querySelector('.roadmap-infographic');
  const roadPath = document.getElementById('pup-road-path');
  const shuttle = document.getElementById('pup-road-shuttle');
  if (!roadmap || !roadPath || !shuttle || typeof roadPath.getTotalLength !== 'function') return;

  const anchors = Array.from(roadmap.querySelectorAll('.road-node-anchor'));
  const stopYs = [100, 300, 500, 700];
  const totalLen = roadPath.getTotalLength();
  let rafPending = false;

  function updateShuttle() {
    rafPending = false;
    const rect = roadmap.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) return;

    const vh = window.innerHeight || document.documentElement.clientHeight;
    const startAnchor = vh * 0.85;
    const endAnchor = vh * 0.35;
    const raw = (startAnchor - rect.top) / (rect.height + (startAnchor - endAnchor));
    const progress = Math.max(0, Math.min(1, raw));

    // Start on the visible road track below the heading and travel through milestone 04
    const len = totalLen * (0.06 + progress * 0.84);
    const pt = roadPath.getPointAtLength(len);
    const nextPt = roadPath.getPointAtLength(Math.min(totalLen, len + 2));
    const angle = (Math.atan2(nextPt.y - pt.y, nextPt.x - pt.x) * 180) / Math.PI;

    shuttle.setAttribute('transform', `translate(${pt.x.toFixed(2)}, ${pt.y.toFixed(2)}) rotate(${angle.toFixed(2)})`);

    anchors.forEach((anchor, idx) => {
      anchor.classList.toggle('is-reached', pt.y >= (stopYs[idx] ?? 9999) - 12);
    });
  }

  function requestUpdate() {
    if (!rafPending) {
      rafPending = true;
      window.requestAnimationFrame(updateShuttle);
    }
  }

  window.addEventListener('scroll', requestUpdate, { passive: true });
  document.addEventListener('scroll', requestUpdate, { passive: true, capture: true });
  window.addEventListener('resize', requestUpdate, { passive: true });
  window.addEventListener('roadmap-sync', requestUpdate);
  updateShuttle();
})();

// Click-to-View Details Modal for Evolution Winding Road Milestones
(function initRoadmapMilestoneModal() {
  const modal = document.getElementById('roadmapModal');
  const slots = Array.from(document.querySelectorAll('.roadmap-infographic .roadmap-card-slot'));
  if (!modal || slots.length === 0) return;

  const dialog = modal.querySelector('.roadmap-modal-dialog');
  const yearEl = document.getElementById('roadmapModalYear');
  const codeEl = document.getElementById('roadmapModalCode');
  const iconEl = document.getElementById('roadmapModalIcon');
  const titleEl = document.getElementById('roadmapModalTitle');
  const bodyEl = document.getElementById('roadmapModalBody');
  const closeBtn = document.getElementById('roadmapModalClose');
  const prevBtn = document.getElementById('roadmapModalPrev');
  const nextBtn = document.getElementById('roadmapModalNext');

  let activeIndex = -1;
  let lastTrigger = null;

  function renderMilestone(index) {
    const slot = slots[index];
    if (!slot) return;
    activeIndex = index;

    const year = slot.querySelector('.tl-timeline-year')?.textContent.trim() || '';
    const code = slot.querySelector('.roadmap-tech-code')?.textContent.trim() || '';
    const icon = slot.querySelector('.roadmap-card-icon')?.innerHTML || '';
    const title = slot.querySelector('.roadmap-card-head h3')?.textContent.trim() || '';
    const details = slot.querySelector('.roadmap-card-details')?.innerHTML || '';

    dialog.classList.toggle('is-milestone-final', slot.classList.contains('is-milestone-final'));
    yearEl.textContent = year;
    codeEl.textContent = code;
    iconEl.innerHTML = icon;
    titleEl.textContent = title;
    bodyEl.innerHTML = details;

    prevBtn.disabled = index <= 0;
    nextBtn.disabled = index >= slots.length - 1;
  }

  function openModal(index, triggerEl) {
    lastTrigger = triggerEl || null;
    renderMilestone(index);
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closeModal() {
    if (modal.hidden) return;
    modal.hidden = true;
    document.body.style.overflow = '';
    if (lastTrigger && typeof lastTrigger.focus === 'function') {
      lastTrigger.focus();
    }
  }

  slots.forEach((slot, index) => {
    const card = slot.querySelector('.roadmap-card');
    if (!card) return;

    card.addEventListener('click', () => openModal(index, card));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(index, card);
      }
    });
  });

  closeBtn.addEventListener('click', closeModal);
  prevBtn.addEventListener('click', () => {
    if (activeIndex > 0) renderMilestone(activeIndex - 1);
  });
  nextBtn.addEventListener('click', () => {
    if (activeIndex < slots.length - 1) renderMilestone(activeIndex + 1);
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (modal.hidden) return;
    if (e.key === 'Escape') {
      closeModal();
    } else if (e.key === 'ArrowLeft' && activeIndex > 0) {
      renderMilestone(activeIndex - 1);
    } else if (e.key === 'ArrowRight' && activeIndex < slots.length - 1) {
      renderMilestone(activeIndex + 1);
    }
  });
})();

// Document Evidence Slider
document.querySelectorAll('[data-doc-slider]').forEach((slider) => {
  const track = slider.querySelector('.tl-doc-slider-track');
  const slides = Array.from(slider.querySelectorAll('.tl-doc-slide'));
  const prevBtn = slider.querySelector('.tl-doc-prev');
  const nextBtn = slider.querySelector('.tl-doc-next');
  const dotsWrap = slider.querySelector('.tl-doc-dots');
  const counterEl = slider.querySelector('.tl-doc-counter');
  if (!track || slides.length === 0) return;

  let current = 0;

  dotsWrap.innerHTML = slides
    .map(
      (_, idx) =>
        `<button type="button" class="tl-doc-dot${idx === 0 ? ' is-active' : ''}" aria-label="View slide ${idx + 1}" aria-selected="${idx === 0}"></button>`
    )
    .join('');

  const dots = Array.from(dotsWrap.querySelectorAll('.tl-doc-dot'));

  function goTo(index) {
    current = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((dot, idx) => {
      const active = idx === current;
      dot.classList.toggle('is-active', active);
      dot.setAttribute('aria-selected', String(active));
    });
    if (counterEl) {
      counterEl.textContent = `${current + 1} / ${slides.length}`;
    }
  }

  prevBtn?.addEventListener('click', () => goTo(current - 1));
  nextBtn?.addEventListener('click', () => goTo(current + 1));
  dots.forEach((dot, idx) => dot.addEventListener('click', () => goTo(idx)));
  goTo(0);
});

// Student Organizations Carousel (#tl-student-orgs)
(function initStudentOrgCarousel() {
  const carousel = document.getElementById('orgCarousel');
  const track = document.getElementById('orgCarouselTrack');
  const prevBtn = document.getElementById('orgCarouselPrev');
  const nextBtn = document.getElementById('orgCarouselNext');
  const dotsWrap = document.getElementById('orgCarouselDots');
  const counterEl = document.getElementById('orgCarouselCounter');
  if (!carousel || !track) return;

  const viewport = carousel.querySelector('.org-carousel-viewport');
  const slides = Array.from(track.querySelectorAll('.org-carousel-slide'));
  if (!viewport || slides.length === 0) return;

  let current = 0;
  let lastMaxIndex = -1;

  function getVisibleCount() {
    if (window.innerWidth <= 640) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  }

  function renderDots(maxIndex) {
    if (!dotsWrap || maxIndex === lastMaxIndex) return;
    lastMaxIndex = maxIndex;
    const count = maxIndex + 1;
    dotsWrap.innerHTML = Array.from({ length: count }, (_, idx) => {
      const active = idx === current;
      return `<button type="button" class="org-carousel-dot${active ? ' is-active' : ''}" role="tab" aria-label="View organization group ${idx + 1}" aria-selected="${active}"></button>`;
    }).join('');

    dotsWrap.querySelectorAll('.org-carousel-dot').forEach((dot, idx) => {
      dot.addEventListener('click', () => goTo(idx));
    });
  }

  function updateCarousel() {
    const visible = getVisibleCount();
    const maxIndex = Math.max(0, slides.length - visible);
    current = Math.max(0, Math.min(current, maxIndex));

    renderDots(maxIndex);

    const gap = parseFloat(window.getComputedStyle(track).gap) || 24;
    const slideWidth = slides[0].getBoundingClientRect().width;
    if (slideWidth > 0) {
      const offset = current * (slideWidth + gap);
      track.style.transform = `translateX(-${offset}px)`;
    } else {
      track.style.transform = `translateX(-${(current * 100) / visible}%)`;
    }

    if (dotsWrap) {
      dotsWrap.querySelectorAll('.org-carousel-dot').forEach((dot, idx) => {
        const active = idx === current;
        dot.classList.toggle('is-active', active);
        dot.setAttribute('aria-selected', String(active));
      });
    }

    if (counterEl) {
      const start = current + 1;
      const end = Math.min(slides.length, current + visible);
      counterEl.textContent = visible === 1 ? `${start} / ${slides.length}` : `Showing ${start}–${end} of ${slides.length}`;
    }
  }

  function goTo(index) {
    const maxIndex = Math.max(0, slides.length - getVisibleCount());
    if (maxIndex === 0) {
      current = 0;
    } else if (index < 0) {
      current = maxIndex;
    } else if (index > maxIndex) {
      current = 0;
    } else {
      current = index;
    }
    updateCarousel();
  }

  prevBtn?.addEventListener('click', () => goTo(current - 1));
  nextBtn?.addEventListener('click', () => goTo(current + 1));

  carousel.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goTo(current - 1);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      goTo(current + 1);
    }
  });

  if (typeof ResizeObserver === 'function') {
    const ro = new ResizeObserver(() => updateCarousel());
    ro.observe(viewport);
  } else {
    window.addEventListener('resize', updateCarousel, { passive: true });
  }

  updateCarousel();
})();

// Pop-Up Modal Card for Computer Science International Students
(function initInternationalStudentModal() {
  const modal = document.getElementById('intlModal');
  const cards = Array.from(document.querySelectorAll('#tl-international-students .intl-item'));
  if (!modal || cards.length === 0) return;

  const pillEl = document.getElementById('intlModalPill');
  const dateEl = document.getElementById('intlModalDate');
  const photoEl = document.getElementById('intlModalPhoto');
  const nameEl = document.getElementById('intlModalName');
  const univEl = document.getElementById('intlModalUniv');
  const modalityEl = document.getElementById('intlModalModality');
  const bodyEl = document.getElementById('intlModalBody');
  const closeBtn = document.getElementById('intlModalClose');
  const prevBtn = document.getElementById('intlModalPrev');
  const nextBtn = document.getElementById('intlModalNext');

  let activeIndex = -1;
  let lastTrigger = null;

  function renderStudent(index) {
    const card = cards[index];
    if (!card) return;
    activeIndex = index;

    const img = card.querySelector('.intl-photo');
    const name = card.querySelector('.tl-award-recipient')?.textContent.trim() || '';
    const univ = card.querySelector('.tl-award-sub')?.textContent.trim() || '';
    const pill = card.querySelector('.tl-award-pill')?.textContent.trim() || '';
    const date = card.querySelector('.tl-award-date')?.textContent.trim() || '';
    const modality = card.querySelector('.intl-modality')?.textContent.trim() || '';
    const descHtml = card.querySelector('.intl-desc')?.innerHTML || '';

    pillEl.textContent = pill;
    dateEl.textContent = date;
    photoEl.src = img?.getAttribute('src') || '';
    photoEl.alt = img?.getAttribute('alt') || name;
    nameEl.textContent = name;
    univEl.textContent = univ;
    modalityEl.textContent = modality;
    bodyEl.innerHTML = `<p>${descHtml}</p>`;

    prevBtn.disabled = index <= 0;
    nextBtn.disabled = index >= cards.length - 1;
  }

  function openModal(index, triggerEl) {
    lastTrigger = triggerEl || null;
    renderStudent(index);
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closeModal() {
    if (modal.hidden) return;
    modal.hidden = true;
    document.body.style.overflow = '';
    if (lastTrigger && typeof lastTrigger.focus === 'function') {
      lastTrigger.focus();
    }
  }

  cards.forEach((card, index) => {
    card.addEventListener('click', () => openModal(index, card));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(index, card);
      }
    });
  });

  closeBtn.addEventListener('click', closeModal);
  prevBtn.addEventListener('click', () => {
    if (activeIndex > 0) renderStudent(activeIndex - 1);
  });
  nextBtn.addEventListener('click', () => {
    if (activeIndex < cards.length - 1) renderStudent(activeIndex + 1);
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (modal.hidden) return;
    if (e.key === 'Escape') {
      closeModal();
    } else if (e.key === 'ArrowLeft' && activeIndex > 0) {
      renderStudent(activeIndex - 1);
    } else if (e.key === 'ArrowRight' && activeIndex < cards.length - 1) {
      renderStudent(activeIndex + 1);
    }
  });
})();

// Notable Alumni Roster Pop-Up Accomplishments Modal
(function initNotableAlumniModal() {
  const roster = document.getElementById('notableAlumniRoster');
  const modal = document.getElementById('alumniModal');
  if (!roster || !modal) return;

  const batchEl = document.getElementById('alumniModalBatch');
  const photoEl = document.getElementById('alumniModalPhoto');
  const nameEl = document.getElementById('alumniModalName');
  const workEl = document.getElementById('alumniModalWork');
  const bodyEl = document.getElementById('alumniModalBody');
  const closeBtn = document.getElementById('alumniModalClose');
  const prevBtn = document.getElementById('alumniModalPrev');
  const nextBtn = document.getElementById('alumniModalNext');

  let activeCards = [];
  let activeIndex = -1;
  let lastTrigger = null;

  function renderAlumnus(index) {
    const card = activeCards[index];
    if (!card) return;
    activeIndex = index;

    const img = card.querySelector('.tl-portrait-img');
    const batch = card.querySelector('.tl-portrait-tag')?.textContent.trim() || 'BSCS';
    const name = card.querySelector('.tl-faculty-name')?.textContent.trim() || '';
    const work = card.querySelector('.alumni-overview')?.textContent.trim() || '';
    const details = card.querySelector('.alumni-modal-details')?.innerHTML.trim() || '';
    const actionLink = card.querySelector('.alumni-card-actions a');

    batchEl.textContent = batch;
    photoEl.src = img?.getAttribute('src') || '';
    photoEl.alt = img?.getAttribute('alt') || name;
    nameEl.textContent = name;
    workEl.textContent = work;

    if (details) {
      bodyEl.innerHTML = details;
    } else {
      const href = actionLink?.getAttribute('href') || '';
      const label = actionLink?.textContent.trim() || 'View Profile ↗';
      bodyEl.innerHTML = `
        <p><strong>${name}</strong> is a profiled PUP CCIS Bachelor of Science in Computer Science graduate working as <strong>${work}</strong>.</p>
        ${href ? `<p style="margin-top:12px;"><a class="btn-alumni-drive" style="width:auto;display:inline-flex;" href="${href}" target="_blank" rel="noopener noreferrer">${label}</a></p>` : ''}
      `;
    }

    prevBtn.disabled = index <= 0;
    nextBtn.disabled = index >= activeCards.length - 1;
  }

  function openModal(cardsInScope, index, triggerEl) {
    activeCards = cardsInScope;
    lastTrigger = triggerEl || null;
    renderAlumnus(index);
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closeModal() {
    if (modal.hidden) return;
    modal.hidden = true;
    document.body.style.overflow = '';
    if (lastTrigger && typeof lastTrigger.focus === 'function') {
      lastTrigger.focus();
    }
  }

  const cards = Array.from(roster.querySelectorAll('.alumni-profile-card'));
  cards.forEach((card, index) => {
    const frame = card.querySelector('.tl-portrait-frame');
    if (!frame) return;
    frame.addEventListener('click', () => openModal(cards, index, frame));
    frame.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(cards, index, frame);
      }
    });
  });

  closeBtn.addEventListener('click', closeModal);
  prevBtn.addEventListener('click', () => {
    if (activeIndex > 0) renderAlumnus(activeIndex - 1);
  });
  nextBtn.addEventListener('click', () => {
    if (activeIndex < activeCards.length - 1) renderAlumnus(activeIndex + 1);
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (modal.hidden) return;
    if (e.key === 'Escape') {
      closeModal();
    } else if (e.key === 'ArrowLeft' && activeIndex > 0) {
      renderAlumnus(activeIndex - 1);
    } else if (e.key === 'ArrowRight' && activeIndex < activeCards.length - 1) {
      renderAlumnus(activeIndex + 1);
    }
  });
})();

// Pop-Up Certificates Modal for Student Achievements & Awards
(function initAchieverCertificatesModal() {
  const modal = document.getElementById('achieverModal');
  const cards = Array.from(document.querySelectorAll('#tl-student-awards .tl-achiever-card'));
  if (!modal || cards.length === 0) return;

  const pillEl = document.getElementById('achieverModalPill');
  const dateEl = document.getElementById('achieverModalDate');
  const photoEl = document.getElementById('achieverModalPhoto');
  const nameEl = document.getElementById('achieverModalName');
  const subEl = document.getElementById('achieverModalSub');
  const bodyEl = document.getElementById('achieverModalBody');
  const closeBtn = document.getElementById('achieverModalClose');
  const prevBtn = document.getElementById('achieverModalPrev');
  const nextBtn = document.getElementById('achieverModalNext');

  let activeIndex = -1;
  let lastTrigger = null;

  function renderAchiever(index) {
    const card = cards[index];
    if (!card) return;
    activeIndex = index;

    const pill = card.querySelector('.tl-award-pill')?.textContent.trim() || '';
    const date = card.querySelector('.tl-award-date')?.textContent.trim() || '';
    const img = card.querySelector('.tl-achiever-avatar');
    const name = card.querySelector('.tl-award-recipient')?.textContent.trim() || '';
    const listHtml = card.querySelector('.tl-faculty-list')?.outerHTML || '';
    const certsHtml = card.querySelector('.tl-achiever-certs')?.innerHTML || '';
    const certCount = card.querySelectorAll('.tl-achiever-certs .tl-cert-figure').length;

    pillEl.textContent = pill;
    dateEl.textContent = date;
    photoEl.src = img?.getAttribute('src') || '';
    photoEl.alt = img?.getAttribute('alt') || name;
    nameEl.textContent = name;
    subEl.textContent = certCount === 1 ? '1 Documented Certificate' : `${certCount} Documented Certificates`;
    bodyEl.innerHTML = `${listHtml}<div class="achiever-cert-grid">${certsHtml}</div>`;

    prevBtn.disabled = index <= 0;
    nextBtn.disabled = index >= cards.length - 1;
  }

  function openModal(index, triggerEl) {
    lastTrigger = triggerEl || null;
    renderAchiever(index);
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closeModal() {
    if (modal.hidden) return;
    modal.hidden = true;
    document.body.style.overflow = '';
    if (lastTrigger && typeof lastTrigger.focus === 'function') {
      lastTrigger.focus();
    }
  }

  cards.forEach((card, index) => {
    card.addEventListener('click', () => openModal(index, card));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(index, card);
      }
    });
  });

  closeBtn.addEventListener('click', closeModal);
  prevBtn.addEventListener('click', () => {
    if (activeIndex > 0) renderAchiever(activeIndex - 1);
  });
  nextBtn.addEventListener('click', () => {
    if (activeIndex < cards.length - 1) renderAchiever(activeIndex + 1);
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (modal.hidden) return;
    if (e.key === 'Escape') {
      closeModal();
    } else if (e.key === 'ArrowLeft' && activeIndex > 0) {
      renderAchiever(activeIndex - 1);
    } else if (e.key === 'ArrowRight' && activeIndex < cards.length - 1) {
      renderAchiever(activeIndex + 1);
    }
  });
})();


