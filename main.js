for(let i = 0; i < 7; i++){
  for(let j = 0; j < 7; j++){
    cubes.push([i, 10 - Math.abs(i) - Math.abs(j), j, 1, 1, 1, color(255, i * 30, j * 30), 0, 0, 0, "block", "collisionAdjust"])
  }
}
for (let i = 0; i < cubes.length; i ++) {
  Object3D.Cuboid(cubes[i][0], cubes[i][1], cubes[i][2], cubes[i][3], cubes[i][4], cubes[i][5], cubes[i][6], cubes[i][7], cubes[i][8], cubes[i][9], cubes[i][10], cubes[i][11], cubes[i][12]);
}
