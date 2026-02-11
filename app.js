const dot = document.getElementById("dot");
const startBtn = document.getElementById("startBtn");
const instruction = document.getElementById("instruction");

const positions = [
  {x: 20, y: 20},     // 左上
  {x: 360, y: 20},    // 右上
  {x: 360, y: 360},   // 右下
  {x: 20, y: 360}     // 左下
];

function shufflePattern() {
  let arr = [...positions];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

async function runExercise() {
  startBtn.style.display = "none";
  instruction.textContent = "赤い印を目で追ってください";
  dot.style.display = "block";

  const pattern = shufflePattern();
  const steps = 12; // 約10秒分
  const seq = [];

  for (let i = 0; i < steps; i++) {
    seq.push(pattern[i % pattern.length]);
  }

  for (const p of seq) {
    dot.style.left = p.x + "px";
    dot.style.top = p.y + "px";
    await new Promise(r => setTimeout(r, 800));
  }

  dot.style.display = "none";
  instruction.textContent = "完了しました";
  startBtn.style.display = "inline-block";
}

startBtn.addEventListener("click", runExercise);