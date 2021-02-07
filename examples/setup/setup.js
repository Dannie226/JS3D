var engine = new JS3D();
engine.init();
var world = engine.World();
var box = engine.BoxBody(new THREE.BoxBufferGeometry(),new THREE.MeshBasicMaterial(),1,engine.Vector3(0,5,0));
world.add(box);
var ground = engine.BoxBody(new THREE.BoxBufferGeometry(100,2,100),new THREE.MeshBasicMaterial,0,engine.Vector3(0,-1,0));
world.add(ground);
var animate = function(){
  requestAnimationFrame(animate);
  world.update();
}
