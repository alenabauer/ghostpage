const ghost = document.querySelector(".ghost");
console.log(ghost);
let x = 0;

// const moveGhost = () => {
//   console.log(ghost.style.left);
//   ghost.style.left = `${x}px`;
//   x++;
// };

setInterval(() => {
  // console.log(ghost.style.left);
  ghost.style.left = `${x}px`;
  if (window.screen.width < x) {
    x = 0;
  };
  x++;
}, 7);

// console.log("Nothing is working!");
// window.requestAnimationFrame(moveGhost);
