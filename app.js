// app.js

const dot = document.getElementById("dot");
const startBtn = document.getElementById("startBtn");
const instruction = document.getElementById("instruction");

const positions = [
  {x: 10, y: 10},   // 左上
  {x: 90, y: 10},   // 右上
  {x: 90, y: 90},   // 右下
  {x: 10, y: 90},   // 左下
  {x: 50, y: 10},   // 上中央
  {x: 90, y: 50},   // 右中央
  {x: 50, y: 90},   // 下中央
  {x: 10, y: 50}    // 左中央
];

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

async function runExercise() {
  startBtn.style.display = "none";
  instruction.textContent = "赤い印を目で追ってください";

  dot.style.display = "block";

  // ランダムパターン作成（10秒間）
  const pattern = shuffleArray([...positions]);
  const totalDuration = 10000; // 10秒
  const steps = 15; // ステップ数（多めにすると滑らか）
  const delay = totalDuration / steps;

  for (let i = 0; i < steps; i++) {
    const pos = pattern[i % pattern.length];
    // %単位で指定（フィールドサイズに追従）
    dot.style.left = `${pos.x}%`;
    dot.style.top = `${pos.y}%`;
    await new Promise(r => setTimeout(r, delay));
  }

  dot.style.display = "none";
  instruction.textContent = "終了しました！\nもう一度やる？";
  startBtn.style.display = "inline-block";
}

startBtn.addEventListener("click", runExercise);