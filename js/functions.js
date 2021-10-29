const ghost = document.querySelector(".ghost");
console.log(ghost);
let x = Math.random() * 1000;
let y = Math.random() * 1000;

// const moveGhost = () => {
//   console.log(ghost.style.left);
//   ghost.style.left = `${x}px`;
//   x++;
// };

setInterval(() => {
  // console.log(ghost.style.left);
  ghost.style.left = `${x}px`;
  ghost.style.top = `${y}px`;
  if (window.screen.width < x || x < 0) {
    x = 0;
  };
  if (window.screen.height < y || y < 0) {
    y = 0;
  };
  var rand1 = Math.random() < 0.5 ? -30 : 30;
  var rand2 = Math.random() < 0.5 ? -30 : 30;
  x += rand1;
  y += rand2;
}, 3);

// console.log("Nothing is working!");
// window.requestAnimationFrame(moveGhost);
