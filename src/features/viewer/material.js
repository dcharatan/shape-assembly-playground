import * as THREE from 'three';

function vertexShader() {
  return `
    varying vec3 vUv;
    varying vec2 hello;

    void main() {
      vUv = position;
      hello = uv;

      vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
      gl_Position = projectionMatrix * modelViewPosition; 
    }
  `
}
function fragmentShader() {
  return `
    uniform vec3 colorA; 
    uniform vec3 colorB; 
    varying vec3 vUv;
    varying vec2 hello;

    void main() {
      if (hello.x > 0.99 || hello.x < 0.01 || hello.y > 0.99 || hello.y < 0.01) {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
      } else {
        gl_FragColor = vec4(mix(colorA, colorB, hello.x * hello.x + hello.y * hello.y), 1.0);
      }
    }
  `
}

let uniforms = {
  colorB: { type: 'vec3', value: new THREE.Color(0xACB6E5) },
  colorA: { type: 'vec3', value: new THREE.Color(0x74ebd5) }
}

const material = new THREE.ShaderMaterial({
  uniforms: uniforms,
  fragmentShader: fragmentShader(),
  vertexShader: vertexShader(),
})

export default material;