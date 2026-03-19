import * as THREE from 'three';

let scene, camera, renderer, globe, markerMesh, markerLight;
let targetRotation = { x: 0, y: 0 };
let currentRotation = { x: 0, y: 0 };
let autoRotate = true;

export function initGlobe(canvas) {
  if (!canvas) return;

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
  camera.position.z = 2.8;

  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x050510, 1);

  // Globe geometry
  const geometry = new THREE.SphereGeometry(1, 64, 64);

  // Custom shader material for the globe
  const material = new THREE.MeshPhongMaterial({
    color: 0x1a1a3e,
    emissive: 0x0a0a1e,
    specular: 0x333366,
    shininess: 20,
    transparent: true,
    opacity: 0.9,
    wireframe: false,
  });

  globe = new THREE.Mesh(geometry, material);
  scene.add(globe);

  // Wireframe overlay
  const wireGeo = new THREE.SphereGeometry(1.002, 36, 18);
  const wireMat = new THREE.MeshBasicMaterial({
    color: 0x3b82f6,
    wireframe: true,
    transparent: true,
    opacity: 0.08,
  });
  const wireGlobe = new THREE.Mesh(wireGeo, wireMat);
  globe.add(wireGlobe);

  // Atmosphere glow
  const atmosGeo = new THREE.SphereGeometry(1.05, 32, 32);
  const atmosMat = new THREE.MeshBasicMaterial({
    color: 0x6366f1,
    transparent: true,
    opacity: 0.06,
    side: THREE.BackSide,
  });
  scene.add(new THREE.Mesh(atmosGeo, atmosMat));

  // Lighting
  const ambientLight = new THREE.AmbientLight(0x404060, 0.5);
  scene.add(ambientLight);

  const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
  dirLight.position.set(5, 3, 5);
  scene.add(dirLight);

  const backLight = new THREE.DirectionalLight(0x6366f1, 0.3);
  backLight.position.set(-5, -3, -5);
  scene.add(backLight);

  // Marker (point on globe)
  const markerGeo = new THREE.SphereGeometry(0.03, 16, 16);
  const markerMat = new THREE.MeshBasicMaterial({ color: 0xef4444 });
  markerMesh = new THREE.Mesh(markerGeo, markerMat);
  markerMesh.visible = false;
  scene.add(markerMesh);

  // Point light at marker
  markerLight = new THREE.PointLight(0xef4444, 0, 1);
  scene.add(markerLight);

  // Stars
  const starGeo = new THREE.BufferGeometry();
  const starPositions = [];
  for (let i = 0; i < 1000; i++) {
    starPositions.push(
      (Math.random() - 0.5) * 100,
      (Math.random() - 0.5) * 100,
      (Math.random() - 0.5) * 100
    );
  }
  starGeo.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3));
  const starMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });
  scene.add(new THREE.Points(starGeo, starMat));

  // Handle resize
  const observer = new ResizeObserver(() => {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  });
  observer.observe(canvas.parentElement);

  animate();
}

function animate() {
  requestAnimationFrame(animate);

  if (autoRotate) {
    targetRotation.y += 0.002;
  }

  // Smooth rotation
  currentRotation.x += (targetRotation.x - currentRotation.x) * 0.05;
  currentRotation.y += (targetRotation.y - currentRotation.y) * 0.05;

  if (globe) {
    globe.rotation.x = currentRotation.x;
    globe.rotation.y = currentRotation.y;
  }

  if (renderer && scene && camera) {
    renderer.render(scene, camera);
  }
}

export function rotateGlobeTo(lat, lng) {
  autoRotate = false;
  // Convert lat/lng to rotation
  // Longitude maps to Y rotation, latitude to X rotation
  const lonRad = (-lng * Math.PI) / 180 + Math.PI / 2;
  const latRad = (lat * Math.PI) / 180;

  targetRotation.x = latRad * 0.5; // Dampen lat effect
  targetRotation.y = lonRad;

  // Resume auto-rotate after 10 seconds
  clearTimeout(rotateGlobeTo._timer);
  rotateGlobeTo._timer = setTimeout(() => { autoRotate = true; }, 10000);
}

export function highlightLocation(lat, lng, color) {
  if (!markerMesh || !markerLight) return;

  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  const r = 1.02;

  const x = r * Math.sin(phi) * Math.cos(theta);
  const y = r * Math.cos(phi);
  const z = r * Math.sin(phi) * Math.sin(theta);

  markerMesh.position.set(x, y, z);
  markerMesh.visible = true;

  const c = new THREE.Color(color);
  markerMesh.material.color = c;
  markerLight.color = c;
  markerLight.position.set(x * 1.2, y * 1.2, z * 1.2);
  markerLight.intensity = 2;

  // Pulse effect
  const scale = { v: 1 };
  const pulse = () => {
    scale.v = 1 + 0.3 * Math.sin(Date.now() * 0.005);
    markerMesh.scale.setScalar(scale.v);
  };
  if (highlightLocation._interval) clearInterval(highlightLocation._interval);
  highlightLocation._interval = setInterval(pulse, 16);

  // Update globe info text
  const infoEl = document.getElementById('globe-location');
  if (infoEl) {
    infoEl.textContent = `${lat.toFixed(1)}°${lat >= 0 ? 'N' : 'S'}, ${Math.abs(lng).toFixed(1)}°${lng >= 0 ? 'E' : 'W'}`;
  }
}
