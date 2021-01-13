/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
const cameras = [];

export const registerCamera = (camera) => {
  cameras.push(camera);
  camera.addEventListener('change', (e) => {
    cameras.forEach((c) => {
      if (c !== camera) {
        const p = e.target.object.position;
        c.object.position.set(p.x, p.y, p.z);
        const r = e.target.object.rotation;
        c.object.rotation.set(r.x, r.y, r.z);
        c.object.zoom = e.target.object.zoom;
        c.object.updateProjectionMatrix();
      }
    });
  });
};
