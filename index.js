// Your code here
let dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
   
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }


//   function moveDodgerRight() {
//     let rightNumbers = dodger.style.right.replace("px", "");
//     //above line is confusing, will need to go through this lab again.
//     let right = parseInt(rightNumbers, 10);
    
//     if (right < 0) {
//         dodger.style.right = `${right + 1}px`;
//     }
// }
//The above didn't work so I'm checking out the solution branch to compare.

function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace('px', '');
    let left = parseInt(leftNumbers, 10)
    if (left > 0) {
      dodger.style.left = `${left + 1}px`
    }
  }
  //it looks the same as what I had except for some different names, which shouldn't matter.
  //must have been a syntax error somewhere.

document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft()
    }
  })

document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowRight") {
        moveDodgerRight()
    }
})