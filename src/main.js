import { events, categoryColors, categoryLabels } from './events.js';
import { initGlobe, rotateGlobeTo, highlightLocation } from './globe.js';
import gsap from 'gsap';

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

    marker.innerHTML = `
      <div class="event-dot" style="border-color: ${color}; color: ${color}"></div>
      <div class="event-label ${isAbove ? 'above' : 'below'}">${event.title}</div>
      <div class="event-date-label ${isAbove ? 'above' : 'below'}">${formatDate(event.date)}</div>
      <div class="event-card ${isAbove ? 'above' : 'below'}">
        <img src="${event.image}" alt="${event.title}" loading="lazy" onerror="this.style.display='none'" />
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
    const scaledSize = Math.max(8, Math.min(16, 10 * zoomLevel));
    label.style.fontSize = scaledSize + 'px';
    label.style.maxWidth = (100 + zoomLevel * 40) + 'px';
  });

  dateLabels.forEach(dl => {
    dl.style.opacity = zoomLevel >= 1.2 ? '0.7' : '0.3';
    dl.style.fontSize = Math.max(8, 9 * zoomLevel) + 'px';
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
  img.src = event.image;
  img.alt = event.title;
  img.onerror = () => img.style.display = 'none';
  img.onload = () => img.style.display = '';

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
    p.style.opacity = isRelated ? '0.7' : '0.1';
    p.style.strokeWidth = isRelated ? '2' : '1';
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
