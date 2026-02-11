// app.js

const dot = document.getElementById("dot");
const startBtn = document.getElementById("startBtn");
const instruction = document.getElementById("instruction");

// 移動先を%単位で定義（画面全体に広がる）
const positions = [
  {x: 10, y: 10},   // 左上
  {x: 90, y: 10},   // 右上
  {x: 90, y: 90},   // 右下
  {x: 10, y: 90},   // 左下追加で変化を増やす）
];

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

async function runExercise() {
  startBtn.style.display = "none";
  instruction.textContent = "赤い印を目で追ってください";

  dot.style.display = "block";

  const pattern = shuffleArray([...positions]);
  const totalDuration = 10000; // 10秒
  const steps = 18;            // ステップを増やして滑らかに
  const delay = totalDuration / steps;

  for (let i = 0; i < steps; i++) {
    const pos = pattern[i % pattern.length];
    dot.style.left = `${pos.x}%`;
    dot.style.top = `${pos.y}%`;
    await new Promise(r => setTimeout(r, delay));
  }

  dot.style.display = "none";
  instruction.textContent = "終了しました！\nもう一度挑戦する？";
  startBtn.style.display = "inline-block";
}

startBtn.addEventListener("click", runExercise);