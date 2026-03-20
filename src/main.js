import { events, categoryColors, categoryLabels } from './events.js';
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
const BASE_PX_PER_YEAR = 180;
const MIN_YEAR = 1900;
const MAX_YEAR = 2026;
const YEAR_RANGE = MAX_YEAR - MIN_YEAR;
const PADDING = 120;

// ===== STATE =====
let zoomLevel = 1;
let currentEventIndex = -1;
let activeCategories = new Set(Object.keys(categoryColors));
let isDragging = false;
let dragStartX = 0;
let scrollStartX = 0;

// Sort events chronologically
const sortedEvents = [...events].sort((a, b) => new Date(a.date) - new Date(b.date));

// ===== INIT =====
function init() {
  initGlobe(document.getElementById('globe-canvas'));
  buildCategoryFilters();
  buildDecadeBar();
  buildTimeline();
  setupControls();
  setupDragScroll();
  setupKeyboard();
  updateZoomDisplay();
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

// ===== DECADE BAR =====
function buildDecadeBar() {
  const bar = document.getElementById('decade-bar');
  const container = document.getElementById('timeline-container');
  for (let year = 1900; year <= 2020; year += 10) {
    const marker = document.createElement('div');
    marker.className = 'decade-marker';
    marker.textContent = year + 's';
    marker.addEventListener('click', () => {
      const x = yearToX(year) - container.clientWidth / 2;
      gsap.to(container, { scrollLeft: Math.max(0, x), duration: 0.8, ease: 'power2.inOut' });
    });
    bar.appendChild(marker);
  }
  container.addEventListener('scroll', updateDecadeBar);
  updateDecadeBar();
}

function updateDecadeBar() {
  const container = document.getElementById('timeline-container');
  const bar = document.getElementById('decade-bar');
  const markers = bar.querySelectorAll('.decade-marker');
  const scrollLeft = container.scrollLeft;
  const viewWidth = container.clientWidth;
  const trackWidth = getTrackWidth();

  markers.forEach((marker, i) => {
    const year = 1900 + i * 10;
    const x = yearToX(year);
    // Map track position to bar position
    const barX = ((x - scrollLeft) / viewWidth) * viewWidth;
    marker.style.left = barX + 'px';

    // Highlight if currently in view
    const isInView = x >= scrollLeft && x <= scrollLeft + viewWidth;
    marker.classList.toggle('active', isInView);
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

function buildTimeline() {
  const track = document.getElementById('timeline-track');
  const eventsContainer = document.getElementById('events-container');
  const svg = document.getElementById('connections-svg');

  track.style.width = getTrackWidth() + 'px';
  svg.setAttribute('width', getTrackWidth());
  svg.setAttribute('height', '100%');
  eventsContainer.innerHTML = '';
  svg.innerHTML = '';

  // Place events with alternating above/below to reduce overlap
  sortedEvents.forEach((event, i) => {
    const x = dateToX(event.date);
    const isAbove = i % 2 === 0;
    const color = categoryColors[event.category] || '#666';

    const marker = document.createElement('div');
    marker.className = 'event-marker';
    marker.dataset.eventId = event.id;
    marker.dataset.index = i;
    marker.style.left = x + 'px';
    marker.style.display = activeCategories.has(event.category) ? '' : 'none';

    // Offset from center line for visual variety
    const offset = isAbove ? -20 : 20;
    marker.style.top = `calc(50% + ${offset}px)`;

    const symbolSVG = categorySymbols[event.category] || categorySymbols['politics'];
    const imgSrc = event.image || '';
    const cardImgHtml = imgSrc
      ? `<img src="${imgSrc}" alt="${event.title}" loading="lazy" onerror="this.parentElement.querySelector('.card-img-fallback').style.display='flex';this.style.display='none'" /><div class="card-img-fallback" style="display:none"><span class="fallback-symbol" style="color:${color}">${symbolSVG}</span></div>`
      : `<div class="card-img-fallback" style="display:flex"><span class="fallback-symbol" style="color:${color}">${symbolSVG}</span></div>`;

    marker.innerHTML = `
      <div class="event-symbol" style="color: ${color}">${symbolSVG}</div>
      <div class="event-label ${isAbove ? 'above' : 'below'}">${event.title}</div>
      <div class="event-date-label ${isAbove ? 'above' : 'below'}">${formatDate(event.date)}</div>
      <div class="event-card ${isAbove ? 'above' : 'below'}">
        ${cardImgHtml}
        <h3>${event.title}</h3>
        <div class="card-date">${formatDate(event.date)}</div>
        <div class="card-desc">${event.description.split('\n\n')[0]}</div>
        <div class="card-more">Read More →</div>
      </div>
    `;

    marker.addEventListener('click', () => openDetail(event));
    marker.querySelector('.card-more')?.addEventListener('click', (e) => {
      e.stopPropagation();
      openDetail(event);
    });

    eventsContainer.appendChild(marker);
  });

  // Draw connections
  drawConnections(svg);
  updateZoomDependentVisibility();
}

function drawConnections(svg) {
  sortedEvents.forEach(event => {
    if (!event.connections) return;
    const fromX = dateToX(event.date);

    event.connections.forEach(targetId => {
      const target = sortedEvents.find(e => e.id === targetId);
      if (!target) return;
      const toX = dateToX(target.date);
      const fromColor = categoryColors[event.category] || '#666';

      // Draw a curved arc
      const midX = (fromX + toX) / 2;
      const arcHeight = Math.min(Math.abs(toX - fromX) * 0.3, 150);
      const y = 50; // percentage

      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', `M ${fromX} 50% Q ${midX} ${50 - arcHeight}% ${toX} 50%`);

      // Use pixel values instead of percentages for SVG
      const containerHeight = 600;
      const yPx = containerHeight / 2;
      const arcPx = arcHeight * 2;
      path.setAttribute('d', `M ${fromX} ${yPx} Q ${midX} ${yPx - arcPx} ${toX} ${yPx}`);
      path.setAttribute('stroke', fromColor);
      path.setAttribute('data-from', event.id);
      path.setAttribute('data-to', targetId);

      svg.appendChild(path);
    });
  });
}

// ===== ZOOM =====
function setZoom(newZoom) {
  const container = document.getElementById('timeline-container');
  const oldWidth = getTrackWidth();
  const scrollCenter = container.scrollLeft + container.clientWidth / 2;
  const scrollRatio = scrollCenter / oldWidth;

  zoomLevel = Math.max(0.3, Math.min(5, newZoom));

  buildTimeline();

  const newWidth = getTrackWidth();
  container.scrollLeft = scrollRatio * newWidth - container.clientWidth / 2;

  updateZoomDisplay();
  updateDecadeBar();
}

function updateZoomDisplay() {
  document.getElementById('zoom-level').textContent = Math.round(zoomLevel * 100) + '%';
}

function updateZoomDependentVisibility() {
  const cards = document.querySelectorAll('.event-card');
  const labels = document.querySelectorAll('.event-label');
  const dateLabels = document.querySelectorAll('.event-date-label');

  cards.forEach(card => {
    card.classList.toggle('visible', zoomLevel >= 2.5);
  });

  labels.forEach(label => {
    const scaledSize = Math.max(14, Math.min(32, 16 * zoomLevel));
    label.style.fontSize = scaledSize + 'px';
    label.style.maxWidth = (160 + zoomLevel * 60) + 'px';
  });

  dateLabels.forEach(dl => {
    dl.style.opacity = zoomLevel >= 1.0 ? '0.8' : '0.5';
    dl.style.fontSize = Math.max(11, 12 * zoomLevel) + 'px';
  });

  // Scale symbols with zoom
  document.querySelectorAll('.event-symbol').forEach(sym => {
    const size = Math.max(24, Math.min(40, 28 * zoomLevel));
    sym.style.width = size + 'px';
    sym.style.height = size + 'px';
  });
}

function updateVisibility() {
  document.querySelectorAll('.event-marker').forEach(marker => {
    const event = sortedEvents[parseInt(marker.dataset.index)];
    marker.style.display = activeCategories.has(event.category) ? '' : 'none';
  });

  // Update connections
  document.querySelectorAll('#connections-svg path').forEach(path => {
    const fromId = path.getAttribute('data-from');
    const toId = path.getAttribute('data-to');
    const fromEvent = sortedEvents.find(e => e.id === fromId);
    const toEvent = sortedEvents.find(e => e.id === toId);
    const visible = fromEvent && toEvent &&
      activeCategories.has(fromEvent.category) && activeCategories.has(toEvent.category);
    path.style.display = visible ? '' : 'none';
  });
}

// ===== DETAIL PANEL =====
function openDetail(event) {
  const panel = document.getElementById('detail-panel');
  const color = categoryColors[event.category];

  document.getElementById('detail-category').textContent = categoryLabels[event.category] || event.category;
  document.getElementById('detail-category').style.background = color + '22';
  document.getElementById('detail-category').style.color = color;

  document.getElementById('detail-title').textContent = event.title;
  document.getElementById('detail-date').textContent = formatDateFull(event.date) +
    (event.endDate ? ' — ' + formatDateFull(event.endDate) : '');

  const img = document.getElementById('detail-image');
  const imgFallback = document.getElementById('detail-image-fallback');
  if (event.image) {
    img.src = event.image;
    img.alt = event.title;
    img.style.display = '';
    if (imgFallback) imgFallback.style.display = 'none';
    img.onerror = () => {
      img.style.display = 'none';
      if (imgFallback) {
        imgFallback.style.display = 'flex';
        imgFallback.textContent = 'Image unavailable';
      }
    };
    img.onload = () => {
      img.style.display = '';
      if (imgFallback) imgFallback.style.display = 'none';
    };
  } else {
    img.style.display = 'none';
    if (imgFallback) {
      imgFallback.style.display = 'flex';
      imgFallback.textContent = 'No image available';
    }
  }

  const descEl = document.getElementById('detail-description');
  descEl.innerHTML = event.description.split('\n\n').map(p => `<p>${p.trim()}</p>`).join('');

  const connEl = document.getElementById('detail-connections');
  if (event.connections && event.connections.length > 0) {
    connEl.innerHTML = '<h4>Connected Events</h4>';
    event.connections.forEach(id => {
      const linked = sortedEvents.find(e => e.id === id);
      if (!linked) return;
      const link = document.createElement('span');
      link.className = 'connection-link';
      link.textContent = linked.title;
      link.style.borderColor = categoryColors[linked.category];
      link.addEventListener('click', () => {
        openDetail(linked);
        scrollToEvent(linked);
      });
      connEl.appendChild(link);
    });
    connEl.style.display = '';
  } else {
    connEl.style.display = 'none';
  }

  panel.classList.remove('hidden');

  // Update globe
  rotateGlobeTo(event.lat, event.lng);
  highlightLocation(event.lat, event.lng, categoryColors[event.category]);

  // Update active marker
  document.querySelectorAll('.event-marker.active').forEach(m => m.classList.remove('active'));
  const marker = document.querySelector(`[data-event-id="${event.id}"]`);
  if (marker) marker.classList.add('active');

  // Highlight connections
  document.querySelectorAll('#connections-svg path').forEach(p => {
    const isRelated = p.getAttribute('data-from') === event.id || p.getAttribute('data-to') === event.id;
    p.style.opacity = isRelated ? '0.8' : '0.1';
    p.style.strokeWidth = isRelated ? '4' : '2';
  });

  currentEventIndex = sortedEvents.indexOf(event);
}

function closeDetail() {
  document.getElementById('detail-panel').classList.add('hidden');
  document.querySelectorAll('.event-marker.active').forEach(m => m.classList.remove('active'));
  document.querySelectorAll('#connections-svg path').forEach(p => {
    p.style.opacity = '';
    p.style.strokeWidth = '';
  });
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

// ===== CONTROLS =====
function setupControls() {
  document.getElementById('zoom-in').addEventListener('click', () => setZoom(zoomLevel * 1.3));
  document.getElementById('zoom-out').addEventListener('click', () => setZoom(zoomLevel / 1.3));
  document.getElementById('close-detail').addEventListener('click', closeDetail);

  document.getElementById('prev-btn').addEventListener('click', () => navigateEvent(-1));
  document.getElementById('next-btn').addEventListener('click', () => navigateEvent(1));

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
  const visibleEvents = sortedEvents.filter(e => activeCategories.has(e.category));
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
  openDetail(event);
  scrollToEvent(event);
}

// ===== DRAG SCROLL =====
function setupDragScroll() {
  const container = document.getElementById('timeline-container');

  container.addEventListener('mousedown', (e) => {
    if (e.target.closest('.event-marker')) return;
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
    else if (e.key === 'Escape') closeDetail();
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
