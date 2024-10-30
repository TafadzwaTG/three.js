import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Get the canvas element
const canvas = document.getElementById('canvas');

// Set up the scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#101010'); // Darker background for contrast

// Set up the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 6;

// Create a Dodecahedron geometry with Phong material for shading
const dodecaGeometry = new THREE.DodecahedronGeometry();
const dodecaMaterial = new THREE.MeshPhongMaterial({
  color: '#84a5b4',      // Soft blue color
  shininess: 100,        // Adds a reflective shine
  specular: '#ffffff',   // Makes it reflect light
});
const dodecahedron = new THREE.Mesh(dodecaGeometry, dodecaMaterial);
dodecahedron.position.set(0, 1, 0);  // Position it slightly higher for balance

// Create a Box geometry with a standard material and emissive lighting
const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshStandardMaterial({
  color: '#468585',
  metalness: 0.5,       // Gives it a metallic appearance
  roughness: 0.3,       // Adds texture to the surface
  emissive: '#204a50',  // Slight glow effect
});
const cube = new THREE.Mesh(boxGeometry, boxMaterial);
cube.position.set(0, -1.5, 0);  // Position it slightly lower on the Y-axis

// Add geometries to the scene
scene.add(dodecahedron, cube);

// Set up the lighting with additional light sources
const ambientLight = new THREE.AmbientLight(0x404040, 1.5);  // Soft ambient light for overall brightness
scene.add(ambientLight);

const spotLight = new THREE.SpotLight(0x9CDBA6, 1.5);  // Spotlight for dramatic effect
spotLight.position.set(5, 5, 5);
spotLight.castShadow = true;
scene.add(spotLight);

const pointLight = new THREE.PointLight(0xffffff, 0.5);  // Soft point light for subtle highlights
pointLight.position.set(-5, -5, 5);
scene.add(pointLight);

// Set up the renderer
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true; // Enable shadow mapping

// Add orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.1;
controls.enableZoom = true;
controls.enablePan = true;  

// Animation function with dynamic rotation for added interest
function animate() {
  requestAnimationFrame(animate);
  
  dodecahedron.rotation.x += 0.01;
  dodecahedron.rotation.y += 0.01;
  cube.rotation.x += 0.02;  // Slightly faster rotation for variety
  cube.rotation.y += 0.01;
  
  controls.update();
  renderer.render(scene, camera);
}

// Start the animation
animate();
