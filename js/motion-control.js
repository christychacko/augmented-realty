AFRAME.registerComponent('motion-control', {
    init: function () {
      // Get references to the camera and target point
      const camera = document.querySelector('#myCamera');
      const targetPoint = new THREE.Vector3(0, 60, -250); // Change the coordinates as needed
  
      // Calculate the direction vector from camera to target
      const direction = new THREE.Vector3().subVectors(targetPoint, camera.object3D.position).normalize();
  
      // Set the camera's initial position and orientation
      camera.object3D.position.set(0, 0, 0);
      camera.object3D.lookAt(targetPoint);
  
      // Define movement speed
      const speed = 0.1; // Adjust the speed as needed
  
      // Move the camera towards the target point gradually
      this.el.addEventListener('enter-vr', () => {
        this.tick = function (time, deltaTime) {
          const delta = direction.clone().multiplyScalar(speed * deltaTime / 1000);
          camera.object3D.position.add(delta);
          camera.object3D.lookAt(targetPoint);
        };
      });
  
      this.el.addEventListener('exit-vr', () => {
        this.tick = null;
      });
    }
  });