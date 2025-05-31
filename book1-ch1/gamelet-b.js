const ball = document.getElementById("ball");
document.addEventListener("keydown", handleKeyDown);
let position = 0;

function handleKeyDown(e) {
  if (e.code === "ArrowUp") {
    position = position + 10;
  }
  if (e.code === "ArrowDown") {
    position = position - 10;
  }
  if (position < 0) {
    position = 0; // Prevent going out of bounds
  }
  refresh();
}

function refresh() {
  ball.style.left = position + "px";
}
