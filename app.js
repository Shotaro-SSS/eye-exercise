// app.js

const dot = document.getElementById("dot");
const startBtn = document.getElementById("startBtn");
const instruction = document.getElementById("instruction");

// 4隅の座標（%単位で画面いっぱい対応）
const corners = [
  {x: 10, y: 10},  // 1: 左上
  {x: 90, y: 10},  // 2: 右上
  {x: 90, y: 90},  // 3: 右下
  {x: 10, y: 90}   // 4: 左下
];

// 動く順序（1-based → 配列は0-basedなので -1 する）
const sequence = [1,3,2,4,1,2,3,4,2,1,3];  // 指定された順番

async function runExercise() {
  startBtn.style.display = "none";
  instruction.textContent = "赤い印を目で追ってください";

  dot.style.display = "block";

  const totalDuration = 10000; // 約10秒
  const steps = sequence.length;  // 11ステップ
  const delay = totalDuration / steps;  // 約909msずつ

  for (let i = 0; i < steps; i++) {
    const posIndex = sequence[i] - 1;  // 1→0, 2→1, 3→2, 4→3
    const pos = corners[posIndex];

    dot.style.left = `${pos.x}%`;
    dot.style.top = `${pos.y}%`;

    await new Promise(r => setTimeout(r, delay));
  }

  dot.style.display = "none";
  instruction.textContent = "終了しました！\nもう一度やる？";
  startBtn.style.display = "inline-block";
}

startBtn.addEventListener("click", runExercise);