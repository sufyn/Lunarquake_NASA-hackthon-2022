# Lunarquake_NASA-Hackathon-2022

This project visualizes seismic data from the Apollo lunar landing sites using an interactive 3D globe. The challenge was to develop an app that plots the seismic data these instruments transmitted back to Earth, specifically from the Moonquake seismic events recorded by NASA's Apollo mission. This application renders a 3D model of the Moon and presents an immersive experience of visualizing lunar quakes in real-time.

You can explore the project here: [Lunarquake App](http://moonquake.unaux.com/)

## Features

- **3D Visualization of the Moon**: A detailed 3D model of the Moon is displayed, complete with textures for realistic appearance.
- **Interactive Globe**: The 3D moon can be rotated and zoomed using mouse controls to explore seismic data from different perspectives.
- **Starry Background**: A dynamic star field surrounds the moon, creating an immersive space experience.
- **Seismic Data Visualization**: The application can plot seismic data (such as Moonquakes) on the globe, represented by visual markers on the Moon's surface.
- **Full-Screen Mode**: Double-click to enter full-screen mode for an enhanced viewing experience.

## Project Setup

To run the project locally, follow these steps:

### 1. Clone the repository:

```bash
git clone https://github.com/your-username/Lunarquake_NASA-hackathon-2022.git
```

### 2. Navigate to the project folder:

```bash
cd Lunarquake_NASA-hackathon-2022
```

### 3. Open the `index.html` file in a web browser:

Simply double-click the `index.html` file to open it in your browser. The application should load, displaying the 3D model of the Moon with interactive controls.

## Key Technologies

- **Three.js**: A JavaScript library used to render the 3D model of the Moon and interactive starry background.
- **OrbitControls.js**: Enables interactive mouse controls for rotating, zooming, and moving the camera around the 3D scene.
- **WebGL**: For rendering the 3D graphics in the browser.

## Code Overview

### `index.html`

The HTML file sets up the basic structure of the app. It links the necessary JavaScript libraries (`three.js`, `orbit_controls.js`, and `main.js`) to load the 3D model and control elements.

### `main.js`

The main JavaScript file handles the creation of the 3D scene, including:

- **Moon Model**: A sphere representing the Moon with textures for its surface and bump maps for realistic topography.
- **Stars**: A large collection of randomly placed points that simulate a starry background in space.
- **Camera and Lighting**: A perspective camera is used to view the 3D scene, with dynamic lighting that illuminates the Moon.
- **Controls**: OrbitControls allow for smooth navigation of the scene, and custom event listeners enable keyboard and fullscreen controls.
  
```javascript
const scene = new THREE.Scene();
// Moon geometry and materials
const geometry = new THREE.SphereGeometry(15, 50, 50);
const material = new THREE.MeshPhongMaterial({ 
    map: new THREE.TextureLoader().load('./img/moon_color.jpg'),
    bumpMap: new THREE.TextureLoader().load('./img/moon_dis.jpg'),
    bumpScale: 0.5
});
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

// Star background
const geometry1 = new THREE.SphereGeometry(500, 50, 50);
const material1 = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('./img/stars.jpg'),
    side: THREE.BackSide
});
const sphere1 = new THREE.Mesh(geometry1, material1);
scene.add(sphere1);

// Lighting and Camera
const light = new THREE.PointLight();
light.position.set(45, 7.5, 75);
scene.add(light);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 45;

// Event listeners for controls
addEventListener('dblclick', () => {
    const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement;
    if (!fullscreenElement) {
        if (renderer.domElement.requestFullscreen) {
            renderer.domElement.requestFullscreen();
        } else if (renderer.domElement.webkitRequestFullscreen) {
            renderer.domElement.webkitRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    }
});
```

### Controls and Camera Movement

You can move the camera using the **W**, **A**, **S**, and **D** keys to change the viewpoint. The mouse can be used to rotate and zoom the 3D Moon model. Double-clicking the screen toggles full-screen mode for better interaction.

## License

This project is open-source and available under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgments

- **Three.js** for 3D rendering.
- **OrbitControls.js** for camera controls.
- **NASA** for providing the lunar data and inspiration for this project.

For further information about the NASA Apollo mission and the seismic data, please visit the official [NASA website](https://www.nasa.gov/).
```
