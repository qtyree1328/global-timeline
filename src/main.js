import { events, categoryColors, categoryLabels, conflictGroups } from './events.js';
import { initGlobe, rotateGlobeTo, highlightLocation } from './globe.js';
import gsap from 'gsap';

// ===== CATEGORY SVG SYMBOLS =====
const categorySymbols = {
  war: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 4L16 12L24 4" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><path d="M16 12V28" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><path d="M10 20H22" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><path d="M4 28L16 20L28 28" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
  politics: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 28V14" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><path d="M16 28V14" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><path d="M26 28V14" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><path d="M4 14H28" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><path d="M16 4L4 14H28L16 4Z" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/><path d="M2 28H30" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>`,
  genocide: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 4C16 4 10 10 10 16C10 19.3 12.7 22 16 22C19.3 22 22 19.3 22 16C22 10 16 4 16 4Z" stroke="currentColor" stroke-width="2.5" fill="currentColor" fill-opacity="0.15"/><path d="M16 22V28" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><path d="M12 28H20" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>`,
  nuclear: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="3" stroke="currentColor" stroke-width="2"/><path d="M16 5A11 11 0 0 1 24.5 10L16 16Z" stroke="currentColor" stroke-width="2" fill="currentColor" fill-opacity="0.15"/><path d="M24.5 22A11 11 0 0 1 7.5 22L16 16Z" stroke="currentColor" stroke-width="2" fill="currentColor" fill-opacity="0.15"/><path d="M7.5 10A11 11 0 0 1 16 5L16 16Z" stroke="currentColor" stroke-width="2" fill="currentColor" fill-opacity="0.15"/></svg>`,
  'civil-rights': `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 4V8" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><path d="M8 12L16 8L24 12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 12V20L4 28" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 12V20L28 28" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="16" cy="22" r="4" stroke="currentColor" stroke-width="2"/></svg>`,
  economic: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 28L10 18L16 22L22 10L28 6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 6H28V12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  'space-tech': `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 4C16 4 20 10 20 20L16 28L12 20C12 10 16 4 16 4Z" stroke="currentColor" stroke-width="2.5" fill="currentColor" fill-opacity="0.1" stroke-linejoin="round"/><path d="M12 20L6 24" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M20 20L26 24" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
  pandemic: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 4V10" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><path d="M16 22V28" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><path d="M4 16H10" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><path d="M22 16H28" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><rect x="10" y="10" width="12" height="12" rx="2" stroke="currentColor" stroke-width="2.5"/><path d="M14 14H18V18H14Z" fill="currentColor"/></svg>`,
  terrorism: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 6L18 12L24 10L20 16L26 18L20 20L24 26L18 22L16 28L14 22L8 26L12 20L6 18L12 16L8 10L14 12Z" stroke="currentColor" stroke-width="2" fill="currentColor" fill-opacity="0.1" stroke-linejoin="round"/></svg>`,
  decolonization: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="14" r="10" stroke="currentColor" stroke-width="2.5"/><path d="M6 14C6 14 10 18 16 18C22 18 26 14 26 14" stroke="currentColor" stroke-width="1.5"/><path d="M6 14C6 14 10 10 16 10C22 10 26 14 26 14" stroke="currentColor" stroke-width="1.5"/><path d="M16 4V24" stroke="currentColor" stroke-width="1.5"/><path d="M16 24V28" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>`
};

// ===== CONSTANTS =====
const BASE_PX_PER_YEAR = 400; // Much wider for inline content
const MIN_YEAR = 1900;
const MAX_YEAR = 2026;
const YEAR_RANGE = MAX_YEAR - MIN_YEAR;
const PADDING = 300;

// ===== STATE =====
let zoomLevel = 1;
let currentEventIndex = -1;
let activeCategories = new Set(Object.keys(categoryColors));
let isDragging = false;
let dragStartX = 0;
let scrollStartX = 0;
let activeConflict = null; // null = full timeline, string = conflict key

// Sort events chronologically
const sortedEvents = [...events].sort((a, b) => new Date(a.date) - new Date(b.date));

// ===== INIT =====
function init() {
  initGlobe(document.getElementById('globe-canvas'));
  buildCategoryFilters();
  buildTimeline();
  setupControls();
  setupDragScroll();
  setupKeyboard();
  setupProgressBar();
  updateZoomDisplay();
  updateProgressBar();
}

// ===== CATEGORY FILTERS =====
function buildCategoryFilters() {
  const container = document.getElementById('category-filters');
  Object.entries(categoryColors).forEach(([cat, color]) => {
    const btn = document.createElement('div');
    btn.className = 'cat-btn active';
    btn.style.background = color;
    btn.dataset.category = cat;
    btn.dataset.label = categoryLabels[cat] || cat;
    btn.addEventListener('click', () => {
      if (activeCategories.has(cat)) {
        activeCategories.delete(cat);
        btn.classList.remove('active');
      } else {
        activeCategories.add(cat);
        btn.classList.add('active');
      }
      updateVisibility();
    });
    container.appendChild(btn);
  });
}

// ===== TIMELINE BUILDING =====
function yearToX(year) {
  return PADDING + (year - MIN_YEAR) * BASE_PX_PER_YEAR * zoomLevel;
}

function dateToX(dateStr) {
  const d = new Date(dateStr);
  const year = d.getFullYear() + d.getMonth() / 12 + d.getDate() / 365;
  return yearToX(year);
}

function getTrackWidth() {
  return PADDING * 2 + YEAR_RANGE * BASE_PX_PER_YEAR * zoomLevel;
}

function getVisibleEvents() {
  return sortedEvents.filter(e => {
    if (!activeCategories.has(e.category)) return false;
    if (activeConflict && e.parentConflict !== activeConflict) return false;
    return true;
  });
}

function isCompactMode() {
  // In compact mode when zoomed out enough or many events visible
  return zoomLevel < 0.6;
}

function buildTimeline() {
  const track = document.getElementById('timeline-track');
  const eventsContainer = document.getElementById('events-container');
  const svg = document.getElementById('connections-svg');

  track.style.width = getTrackWidth() + 'px';
  svg.setAttribute('width', getTrackWidth());
  svg.setAttribute('height', '100%');
  eventsContainer.innerHTML = '';
  svg.innerHTML = '';

  // Add year markers along the timeline
  for (let year = 1900; year <= 2025; year += 5) {
    const x = yearToX(year);
    const marker = document.createElement('div');
    marker.className = 'year-marker';
    marker.style.left = x + 'px';
    if (year % 10 === 0) {
      marker.classList.add('decade');
      marker.innerHTML = `<span>${year}</span>`;
    }
    eventsContainer.appendChild(marker);
  }

  const compact = isCompactMode();
  const visibleEvents = getVisibleEvents();

  visibleEvents.forEach((event, i) => {
    const x = dateToX(event.date);
    const isAbove = i % 2 === 0;
    const color = categoryColors[event.category] || '#666';
    const significance = event.significance || 3;

    const marker = document.createElement('div');
    marker.className = `event-marker ${compact ? 'compact' : 'expanded'}`;
    marker.dataset.eventId = event.id;
    marker.dataset.index = sortedEvents.indexOf(event);
    marker.style.left = x + 'px';

    if (compact) {
      // COMPACT MODE: sideways text, significance-based sizing
      const fontSize = 10 + significance * 3; // 13px to 25px
      marker.classList.add(isAbove ? 'above' : 'below');
      
      const symbolSVG = categorySymbols[event.category] || categorySymbols['politics'];
      marker.innerHTML = `
        <div class="event-symbol" style="color: ${color}; width: ${16 + significance * 4}px; height: ${16 + significance * 4}px">${symbolSVG}</div>
        <div class="event-sideways-label ${isAbove ? 'above' : 'below'}" style="font-size: ${fontSize}px; color: ${color}">${event.title}</div>
      `;
      
      marker.addEventListener('click', () => selectEvent(event));
    } else {
      // EXPANDED MODE: inline content with image and text
      const symbolSVG = categorySymbols[event.category] || categorySymbols['politics'];
      const hasConflict = event.parentConflict && conflictGroups[event.parentConflict];
      const isParentEvent = hasConflict && sortedEvents.filter(e => e.parentConflict === event.parentConflict)[0]?.id === event.id;
      const showFocusBtn = hasConflict && (event.endDate || significance >= 4);
      
      const imgSrc = event.image || '';
      const imgHtml = imgSrc
        ? `<div class="inline-image"><img src="${imgSrc}" alt="${event.title}" loading="lazy" onerror="this.parentElement.classList.add('failed')" /></div>`
        : `<div class="inline-image failed"><span class="fallback-symbol" style="color:${color}">${symbolSVG}</span></div>`;
      
      const focusBtnHtml = showFocusBtn
        ? `<button class="focus-conflict-btn" data-conflict="${event.parentConflict}" style="border-color: ${color}; color: ${color}">Focus: ${conflictGroups[event.parentConflict].label}</button>`
        : '';

      const descFirstPara = event.description.split('\n\n')[0];
      const truncatedDesc = descFirstPara.length > 200 ? descFirstPara.substring(0, 200) + '…' : descFirstPara;

      marker.classList.add(isAbove ? 'above' : 'below');
      marker.innerHTML = `
        <div class="event-stem" style="background: ${color}"></div>
        <div class="event-symbol" style="color: ${color}">${symbolSVG}</div>
        <div class="inline-content ${isAbove ? 'above' : 'below'}">
          <div class="inline-layout ${isAbove ? '' : 'reverse'}">
            ${imgHtml}
            <div class="inline-text">
              <div class="inline-category" style="color: ${color}">${categoryLabels[event.category] || event.category}</div>
              <h3 class="inline-title">${event.title}</h3>
              <div class="inline-date">${formatDateFull(event.date)}${event.endDate ? ' — ' + formatDateFull(event.endDate) : ''}</div>
              <p class="inline-desc">${truncatedDesc}</p>
              ${focusBtnHtml}
            </div>
          </div>
        </div>
      `;
      
      marker.addEventListener('click', () => selectEvent(event));
      
      // Conflict focus button
      const focusBtn = marker.querySelector('.focus-conflict-btn');
      if (focusBtn) {
        focusBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          setConflictView(focusBtn.dataset.conflict);
        });
      }
    }

    eventsContainer.appendChild(marker);
  });

  // Draw connections
  drawConnections(svg);
}

function drawConnections(svg) {
  const visibleIds = new Set(getVisibleEvents().map(e => e.id));
  
  sortedEvents.forEach(event => {
    if (!event.connections || !visibleIds.has(event.id)) return;
    const fromX = dateToX(event.date);

    event.connections.forEach(targetId => {
      if (!visibleIds.has(targetId)) return;
      const target = sortedEvents.find(e => e.id === targetId);
      if (!target) return;
      const toX = dateToX(target.date);
      const fromColor = categoryColors[event.category] || '#666';

      const midX = (fromX + toX) / 2;
      const arcHeight = Math.min(Math.abs(toX - fromX) * 0.3, 150);
      const containerHeight = 600;
      const yPx = containerHeight / 2;
      const arcPx = arcHeight * 2;

      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', `M ${fromX} ${yPx} Q ${midX} ${yPx - arcPx} ${toX} ${yPx}`);
      path.setAttribute('stroke', fromColor);
      path.setAttribute('data-from', event.id);
      path.setAttribute('data-to', targetId);
      svg.appendChild(path);
    });
  });
}

// ===== CONFLICT VIEW =====
function setConflictView(conflictKey) {
  if (conflictKey && conflictGroups[conflictKey]) {
    activeConflict = conflictKey;
    const group = conflictGroups[conflictKey];
    document.getElementById('conflict-back').classList.remove('hidden');
    document.getElementById('conflict-back-label').textContent = `Back — viewing ${group.label}`;
    document.body.classList.add('conflict-mode');
    
    // Rebuild and scroll to conflict range
    buildTimeline();
    
    const startX = yearToX(group.dateRange[0]);
    const container = document.getElementById('timeline-container');
    gsap.to(container, { scrollLeft: Math.max(0, startX - 200), duration: 0.8, ease: 'power2.inOut' });
  } else {
    activeConflict = null;
    document.getElementById('conflict-back').classList.add('hidden');
    document.body.classList.remove('conflict-mode');
    buildTimeline();
  }
  updateProgressBar();
}

// ===== EVENT SELECTION =====
function selectEvent(event) {
  // Update globe
  rotateGlobeTo(event.lat, event.lng);
  highlightLocation(event.lat, event.lng, categoryColors[event.category]);

  // Highlight active marker
  document.querySelectorAll('.event-marker.active').forEach(m => m.classList.remove('active'));
  const marker = document.querySelector(`[data-event-id="${event.id}"]`);
  if (marker) marker.classList.add('active');

  // Highlight connections
  document.querySelectorAll('#connections-svg path').forEach(p => {
    const isRelated = p.getAttribute('data-from') === event.id || p.getAttribute('data-to') === event.id;
    p.style.opacity = isRelated ? '0.8' : '0.08';
    p.style.strokeWidth = isRelated ? '4' : '2';
  });

  currentEventIndex = sortedEvents.indexOf(event);
  
  // Scroll to center event
  scrollToEvent(event);
}

function scrollToEvent(event) {
  const container = document.getElementById('timeline-container');
  const x = dateToX(event.date);
  gsap.to(container, {
    scrollLeft: x - container.clientWidth / 3,
    duration: 0.8,
    ease: 'power2.inOut'
  });
}

// ===== ZOOM =====
function setZoom(newZoom) {
  const container = document.getElementById('timeline-container');
  const oldWidth = getTrackWidth();
  const scrollCenter = container.scrollLeft + container.clientWidth / 2;
  const scrollRatio = scrollCenter / oldWidth;

  zoomLevel = Math.max(0.15, Math.min(3, newZoom));

  buildTimeline();

  const newWidth = getTrackWidth();
  container.scrollLeft = scrollRatio * newWidth - container.clientWidth / 2;

  updateZoomDisplay();
  updateProgressBar();
}

function updateZoomDisplay() {
  document.getElementById('zoom-level').textContent = Math.round(zoomLevel * 100) + '%';
}

function updateVisibility() {
  buildTimeline();
  updateProgressBar();
}

// ===== PROGRESS BAR / SCRUBBER =====
function setupProgressBar() {
  const progressTrack = document.getElementById('progress-track');
  const container = document.getElementById('timeline-container');
  
  // Build decade markers
  const decadesEl = document.getElementById('progress-decades');
  for (let year = 1900; year <= 2020; year += 10) {
    const pct = ((year - MIN_YEAR) / YEAR_RANGE) * 100;
    const marker = document.createElement('div');
    marker.className = 'progress-decade-marker';
    marker.style.left = pct + '%';
    marker.innerHTML = `<span>${year}s</span>`;
    decadesEl.appendChild(marker);
  }

  // Drag to scrub
  let scrubbing = false;
  
  const scrubTo = (e) => {
    const rect = progressTrack.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const targetYear = MIN_YEAR + pct * YEAR_RANGE;
    const x = yearToX(targetYear) - container.clientWidth / 2;
    container.scrollLeft = Math.max(0, x);
    updateProgressBar();
  };

  progressTrack.addEventListener('mousedown', (e) => {
    scrubbing = true;
    scrubTo(e);
  });
  window.addEventListener('mousemove', (e) => {
    if (scrubbing) scrubTo(e);
  });
  window.addEventListener('mouseup', () => { scrubbing = false; });

  // Update on scroll
  container.addEventListener('scroll', () => {
    updateProgressBar();
  });
}

function updateProgressBar() {
  const container = document.getElementById('timeline-container');
  const trackWidth = getTrackWidth();
  const viewport = document.getElementById('progress-viewport');
  const label = document.getElementById('progress-year-label');
  
  const scrollLeft = container.scrollLeft;
  const viewWidth = container.clientWidth;
  
  // Map scroll position to progress bar
  const startPct = Math.max(0, (scrollLeft / trackWidth) * 100);
  const widthPct = Math.min(100, (viewWidth / trackWidth) * 100);
  
  viewport.style.left = startPct + '%';
  viewport.style.width = widthPct + '%';
  
  // Calculate visible year range
  const startYear = MIN_YEAR + (scrollLeft / trackWidth) * YEAR_RANGE;
  const endYear = MIN_YEAR + ((scrollLeft + viewWidth) / trackWidth) * YEAR_RANGE;
  
  const sy = Math.max(1900, Math.round(startYear));
  const ey = Math.min(2025, Math.round(endYear));
  label.textContent = sy === ey ? `${sy}` : `${sy} — ${ey}`;
}

// ===== CONTROLS =====
function setupControls() {
  document.getElementById('zoom-in').addEventListener('click', () => setZoom(zoomLevel * 1.3));
  document.getElementById('zoom-out').addEventListener('click', () => setZoom(zoomLevel / 1.3));

  document.getElementById('prev-btn').addEventListener('click', () => navigateEvent(-1));
  document.getElementById('next-btn').addEventListener('click', () => navigateEvent(1));

  document.getElementById('conflict-back').addEventListener('click', () => setConflictView(null));

  // Mouse wheel zoom
  document.getElementById('timeline-container').addEventListener('wheel', (e) => {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
      const delta = e.deltaY > 0 ? 0.9 : 1.1;
      setZoom(zoomLevel * delta);
    }
  }, { passive: false });
}

function navigateEvent(dir) {
  const visibleEvents = getVisibleEvents();
  if (visibleEvents.length === 0) return;

  let newIndex;
  if (currentEventIndex === -1) {
    newIndex = dir > 0 ? 0 : visibleEvents.length - 1;
  } else {
    const currentEvent = sortedEvents[currentEventIndex];
    const visibleIndex = visibleEvents.indexOf(currentEvent);
    newIndex = Math.max(0, Math.min(visibleEvents.length - 1,
      visibleIndex === -1 ? 0 : visibleIndex + dir));
  }

  const event = visibleEvents[newIndex];
  selectEvent(event);
}

// ===== DRAG SCROLL =====
function setupDragScroll() {
  const container = document.getElementById('timeline-container');

  container.addEventListener('mousedown', (e) => {
    if (e.target.closest('.event-marker') || e.target.closest('.focus-conflict-btn')) return;
    isDragging = true;
    dragStartX = e.clientX;
    scrollStartX = container.scrollLeft;
    container.style.cursor = 'grabbing';
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStartX;
    container.scrollLeft = scrollStartX - dx;
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
    document.getElementById('timeline-container').style.cursor = 'grab';
  });
}

// ===== KEYBOARD =====
function setupKeyboard() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') navigateEvent(1);
    else if (e.key === 'ArrowLeft') navigateEvent(-1);
    else if (e.key === 'Escape') setConflictView(null);
    else if (e.key === '=' || e.key === '+') setZoom(zoomLevel * 1.2);
    else if (e.key === '-') setZoom(zoomLevel / 1.2);
  });
}

// ===== HELPERS =====
function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
}

function formatDateFull(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

// ===== START =====
document.addEventListener('DOMContentLoaded', init);
