// ==========================================================================
// VÒNG QUAY MAY MẮN TRI ÂN — XƯỞNG THÉP SIÊU CỨNG ÔNG 6
// Hotline / Zalo: 0934.376.614
// ==========================================================================

const ZALO_PHONE = "0934376614";
const ZALO_LINK = `https://zalo.me/${ZALO_PHONE}`;

// Bộ phần thưởng cấu hình theo 3 nhóm nghề
const CATEGORY_DATA = {
  cua_ga: {
    title: "THỢ RÈN CỰA GÀ / ĐI GIẢI",
    icon: "🐓",
    customizerType: "cua_ga",
    prizes: [
      { text: "10 Phôi Cựa Gà", fullText: "TẶNG 10 CÂY PHÔI ĐẾ CỰA GÀ (TỰ CHỌN LY)", isSteel: true, color: "#991B1B", textColor: "#FFF" },
      { text: "Voucher 30K", fullText: "VOUCHER 30.000Đ (Đơn từ 1kg phôi qua Zalo)", isSteel: false, color: "#D97706", textColor: "#FFF" },
      { text: "Thẻ Cào 10K", fullText: "THẺ NẠP ĐIỆN THOẠI 10.000Đ", isSteel: false, color: "#15803D", textColor: "#FFF" },
      { text: "10 Phôi Cựa Gà", fullText: "TẶNG 10 CÂY PHÔI ĐẾ CỰA GÀ (TỰ CHỌN LY)", isSteel: true, color: "#B45309", textColor: "#FFF" },
      { text: "Thẻ Cào 20K", fullText: "THẺ NẠP ĐIỆN THOẠI 20.000Đ", isSteel: false, color: "#047857", textColor: "#FFF" },
      { text: "Voucher 50K", fullText: "VOUCHER 50.000Đ (Đơn sỉ từ 2kg cựa)", isSteel: false, color: "#7C2D12", textColor: "#FFF" }
    ],
    lyOptions: [
      "Đế 2ly (Gà tre đi giải)",
      "Đế 2ly2 (Đế Diều Hâu)",
      "Đế 2ly4 (Cựa Báo chuyên giải)",
      "Đế 2ly6 (Đế Rồng - Bán chạy nhất)",
      "Đế 2ly8 (Huyết Long - Dòng VIP)",
      "Đế 3ly (Mãnh Hổ siêu cứng)",
      "Đế 3ly2 (Hùng Sư)",
      "Đế 3ly5 (Cáp Mỹ gập định hình)"
    ]
  },
  cau_ca: {
    title: "CẦN THỦ SĂN CÁ / LÀM LƯỠI",
    icon: "🎣",
    customizerType: "cau_ca",
    prizes: [
      { text: "5 Cây Thép Lưỡi", fullText: "TẶNG 5 CÂY THÉP CẮT SẴN (TỰ CHỌN LY & DÀI)", isSteel: true, color: "#1E3A8A", textColor: "#FFF" },
      { text: "Voucher 25K", fullText: "VOUCHER 25.000Đ (Đơn thép cuộn trên 100k)", isSteel: false, color: "#0284C7", textColor: "#FFF" },
      { text: "Thẻ Cào 10K", fullText: "THẺ NẠP ĐIỆN THOẠI 10.000Đ", isSteel: false, color: "#0D9488", textColor: "#FFF" },
      { text: "5 Cây Thép Lưỡi", fullText: "TẶNG 5 CÂY THÉP CẮT SẴN (TỰ CHỌN LY & DÀI)", isSteel: true, color: "#2563EB", textColor: "#FFF" },
      { text: "Thẻ Cào 20K", fullText: "THẺ NẠP ĐIỆN THOẠI 20.000Đ", isSteel: false, color: "#059669", textColor: "#FFF" },
      { text: "Freeship Đơn", fullText: "MIỄN PHÍ VẬN CHUYỂN TOÀN QUỐC (Đơn từ 150k)", isSteel: false, color: "#0369A1", textColor: "#FFF" }
    ],
    lyOptions: [
      "Thép 1ly6 (Dài 14cm)",
      "Thép 1ly6 (Dài 20cm)",
      "Thép 1ly8 (Dài 14cm - Câu lóc)",
      "Thép 1ly8 (Dài 20cm)",
      "Thép 2ly (Dài 14cm)",
      "Thép 2ly2 (Dài 14cm - Đàn hồi cao)",
      "Thép 2ly4 (Dài 14cm)",
      "Thép 2ly6 (Dài 20cm - Săn cá khủng)"
    ]
  },
  chia: {
    title: "THỢ ĐI SOI ĐÊM / CHĨA XIÊN",
    icon: "🔱",
    customizerType: "chia",
    prizes: [
      { text: "2 Cây Thép 30cm", fullText: "TẶNG 2 CÂY THÉP 30CM CHUYÊN CHĨA (TỰ CHỌN LY)", isSteel: true, color: "#14532D", textColor: "#FFF" },
      { text: "Voucher 30K", fullText: "VOUCHER 30.000Đ (Đơn tiếp theo trên 100k)", isSteel: false, color: "#D97706", textColor: "#FFF" },
      { text: "Thẻ Cào 10K", fullText: "THẺ NẠP ĐIỆN THOẠI 10.000Đ", isSteel: false, color: "#15803D", textColor: "#FFF" },
      { text: "2 Cây Thép 30cm", fullText: "TẶNG 2 CÂY THÉP 30CM CHUYÊN CHĨA (TỰ CHỌN LY)", isSteel: true, color: "#166534", textColor: "#FFF" },
      { text: "Thẻ Cào 20K", fullText: "THẺ NẠP ĐIỆN THOẠI 20.000Đ", isSteel: false, color: "#047857", textColor: "#FFF" },
      { text: "Voucher 50K", fullText: "VOUCHER 50.000Đ (Khi đặt cây chĩa hoàn thiện)", isSteel: false, color: "#854D0E", textColor: "#FFF" }
    ],
    lyOptions: [
      "Thép 2ly8 (Dài 30cm - Chĩa chuột, xiên cá)",
      "Thép 3ly (Dài 30cm - Bắn đá như bùn)",
      "Thép 3ly2 (Dài 30cm - Cáp tàu biển)",
      "Thép 3ly5 (Dài 30cm - VIP siêu cứng)",
      "Thép 4ly (Dài 30cm - Cực khỏe)"
    ]
  }
};

// State
let currentCategory = "cua_ga";
let verifiedCode = "";
let currentRotation = 0;
let isSpinning = false;
let currentPrize = null;
let selectedSteelOption = "";

// Audio Synthesis
let audioCtx = null;
function getAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioCtx;
}

function playTickSound() {
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(600, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.04);
    gain.gain.setValueAtTime(0.2, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.04);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.05);
  } catch (e) {}
}

function playWinFanfare() {
  try {
    const ctx = getAudioContext();
    const notes = [440, 554.37, 659.25, 880];
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0, ctx.currentTime + idx * 0.1);
      gain.gain.linearRampToValueAtTime(0.25, ctx.currentTime + idx * 0.1 + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + idx * 0.1 + 0.4);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + idx * 0.1);
      osc.stop(ctx.currentTime + idx * 0.1 + 0.45);
    });
  } catch (e) {}
}

// --------------------------------------------------------------------------
// BƯỚC 1: XÁC THỰC MÃ CÀO 8 KÝ TỰ (DẠNG ZTR4-BRDY)
// --------------------------------------------------------------------------
function verifyCode() {
  const input = document.getElementById("scratch-code-input");
  const errorMsg = document.getElementById("code-error-msg");
  let raw = (input.value || "").trim().toUpperCase();

  // Tự động thêm dấu gạch ngang nếu khách gõ liền 8 ký tự (VD: ZTR4BRDY -> ZTR4-BRDY)
  let code = raw;
  if (!code.includes("-") && code.length === 8) {
    code = code.slice(0, 4) + "-" + code.slice(4);
    input.value = code;
  }

  if (!code) {
    errorMsg.innerText = "⚠️ Vui lòng cào thẻ và nhập mã dự thưởng (8 ký tự).";
    errorMsg.classList.remove("hidden");
    return;
  }

  // Chấp nhận mã có cấu trúc XXXX-YYYY hoặc mã test
  const codeRegex = /^[A-Z0-9]{4}-[A-Z0-9]{4}$/;
  const isLegacyCode = code.startsWith("OS6-");

  if (codeRegex.test(code) || isLegacyCode || code === "TEST88") {
    // Kiểm tra xem mã đã dùng chưa
    const usedKey = `used_scratch_code_${code}`;
    if (localStorage.getItem(usedKey)) {
      errorMsg.innerText = `⚠️ Mã ${code} này đã được quay thưởng trước đó rồi anh nhé!`;
      errorMsg.classList.remove("hidden");
      return;
    }

    verifiedCode = code;
    errorMsg.classList.add("hidden");

    // Chuyển sang bước 2: Chọn phân loại nghề
    document.getElementById("step-code").classList.add("hidden");
    document.getElementById("step-select-category").classList.remove("hidden");
  } else {
    errorMsg.innerText = "⚠️ Mã cào không đúng định dạng. Mã gồm 8 ký tự in trên thẻ (Ví dụ: ZTR4-BRDY).";
    errorMsg.classList.remove("hidden");
  }
}

function fillTestCode() {
  document.getElementById("scratch-code-input").value = "ZTR4-BRDY";
}

// --------------------------------------------------------------------------
// BƯỚC 2: CHỌN NGHỀ & CHUYỂN SANG BƯỚC 3
// --------------------------------------------------------------------------
function selectCategory(categoryKey) {
  currentCategory = categoryKey;
  const cat = CATEGORY_DATA[categoryKey];

  document.getElementById("cat-icon").innerText = cat.icon;
  document.getElementById("cat-title").innerText = cat.title;

  document.getElementById("step-select-category").classList.add("hidden");
  document.getElementById("step-wheel").classList.remove("hidden");

  drawWheel();
}

function changeCategory() {
  document.getElementById("step-wheel").classList.add("hidden");
  document.getElementById("step-select-category").classList.remove("hidden");
}

// --------------------------------------------------------------------------
// BƯỚC 3: VẼ VÀ QUAY BÁNH XE
// --------------------------------------------------------------------------
function drawWheel() {
  const canvas = document.getElementById("wheel-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const prizes = CATEGORY_DATA[currentCategory].prizes;
  const numSlices = prizes.length;
  const sliceAngle = (2 * Math.PI) / numSlices;
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = centerX - 6;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  prizes.forEach((prize, i) => {
    const angle = i * sliceAngle + currentRotation;

    // Vẽ hình quạt
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, angle, angle + sliceAngle);
    ctx.closePath();
    ctx.fillStyle = prize.color;
    ctx.fill();

    // Viền kim loại giữa các nan quạt
    ctx.strokeStyle = "rgba(255, 215, 0, 0.4)";
    ctx.lineWidth = 2;
    ctx.stroke();

    // Vẽ chữ trên quạt
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(angle + sliceAngle / 2);
    ctx.textAlign = "right";
    ctx.fillStyle = prize.textColor;
    ctx.font = "bold 13px Montserrat, sans-serif";
    ctx.shadowColor = "rgba(0,0,0,0.8)";
    ctx.shadowBlur = 4;
    ctx.fillText(prize.text, radius - 18, 5);
    ctx.restore();
  });

  // Vẽ viền tròn ngoài
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  ctx.strokeStyle = "#F59E0B";
  ctx.lineWidth = 4;
  ctx.stroke();
}

function spinWheel() {
  if (isSpinning) return;
  isSpinning = true;

  const btnSpin = document.getElementById("btn-spin");
  btnSpin.disabled = true;
  btnSpin.classList.add("opacity-50", "cursor-not-allowed");

  // Dừng vào ô trúng phôi thép hoặc voucher/thẻ cào
  const prizes = CATEGORY_DATA[currentCategory].prizes;
  const targetIndices = [0, 1, 3]; // Ưu tiên tặng phôi thép hoặc voucher
  const chosenIndex = targetIndices[Math.floor(Math.random() * targetIndices.length)];
  currentPrize = prizes[chosenIndex];

  const sliceDeg = 360 / prizes.length;
  const targetAngleDeg = 270 - (chosenIndex * sliceDeg + sliceDeg / 2);
  const extraRotations = 360 * (5 + Math.floor(Math.random() * 3));
  const finalDegree = extraRotations + targetAngleDeg;

  const startRot = currentRotation * (180 / Math.PI);
  const totalChange = finalDegree - (startRot % 360);
  const duration = 4500;
  const startTime = performance.now();
  let lastTickDeg = 0;

  function animate(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const currentDeg = startRot + totalChange * easeOut;

    currentRotation = currentDeg * (Math.PI / 180);
    drawWheel();

    if (Math.abs(currentDeg - lastTickDeg) > 40) {
      playTickSound();
      lastTickDeg = currentDeg;
    }

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      isSpinning = false;
      playWinFanfare();
      localStorage.setItem(`used_scratch_code_${verifiedCode}`, JSON.stringify({
        category: currentCategory,
        prize: currentPrize.fullText,
        time: new Date().toISOString()
      }));

      setTimeout(showResultModal, 600);
    }
  }

  requestAnimationFrame(animate);
}

// --------------------------------------------------------------------------
// BƯỚC 4: HIỂN THỊ KẾT QUẢ & CHO KHÁCH TỰ CHỌN LY
// --------------------------------------------------------------------------
function showResultModal() {
  const modal = document.getElementById("modal-result");
  const prizeTitle = document.getElementById("prize-title");
  const customizer = document.getElementById("prize-customizer");
  const customizerOptions = document.getElementById("customizer-options");
  const displayCode = document.getElementById("display-verified-code");

  prizeTitle.innerText = currentPrize.fullText;
  displayCode.innerText = verifiedCode;

  const catData = CATEGORY_DATA[currentCategory];

  if (currentPrize.isSteel) {
    customizer.classList.remove("hidden");
    customizerOptions.innerHTML = "";

    const selectEl = document.createElement("select");
    selectEl.className = "w-full p-2.5 rounded-lg bg-orange-950/90 border border-amber-400 text-amber-200 font-bold text-xs focus:outline-none focus:border-amber-300";
    selectEl.onchange = (e) => {
      selectedSteelOption = e.target.value;
      updateZaloClaimLink();
    };

    catData.lyOptions.forEach((opt, idx) => {
      const optionEl = document.createElement("option");
      optionEl.value = opt;
      optionEl.innerText = opt;
      if (idx === 0) optionEl.selected = true;
      selectEl.appendChild(optionEl);
    });

    customizerOptions.appendChild(selectEl);
    selectedSteelOption = catData.lyOptions[0];
  } else {
    customizer.classList.add("hidden");
    selectedSteelOption = "";
  }

  updateZaloClaimLink();
  modal.classList.remove("hidden");
}

function updateZaloClaimLink() {
  const btnClaim = document.getElementById("btn-claim-zalo");
  const cat = CATEGORY_DATA[currentCategory];

  let message = `Chào Xưởng Thép Siêu Cứng Ông 6 (0934.376.614)!\n`;
  message += `Mình vừa cào thẻ quay may mắn trên web:\n`;
  message += `• Nhóm nghề: ${cat.title}\n`;
  message += `• Quà trúng: ${currentPrize.fullText}\n`;
  if (selectedSteelOption) {
    message += `• Quy cách tự chọn: ${selectedSteelOption}\n`;
  }
  message += `• Mã cào dự thưởng: ${verifiedCode}\n`;
  message += `(Quà tặng/voucher áp dụng kèm đơn hàng tiếp theo từ 150k)\n`;
  message += `Ông 6 xác nhận quà giúp mình nhé!`;

  btnClaim.href = `${ZALO_LINK}`;
  btnClaim.onclick = (e) => {
    navigator.clipboard.writeText(message).catch(() => {});
    alert(`✅ Đã copy thông tin nhận quà!\n\nZalo Ông 6 đang mở ra. Anh chỉ cần bấm DÁN (Paste) tin nhắn vào khung chat Zalo nhé!`);
  };
}

function closeModal() {
  document.getElementById("modal-result").classList.add("hidden");
  const btnSpin = document.getElementById("btn-spin");
  btnSpin.disabled = false;
  btnSpin.classList.remove("opacity-50", "cursor-not-allowed");
}

// --------------------------------------------------------------------------
// CHATBOX AI TỰ ĐỘNG THÔNG MINH CỦA ÔNG 6
// --------------------------------------------------------------------------
function toggleChatbox() {
  const box = document.getElementById("chatbox-modal");
  box.classList.toggle("hidden");
}

function askBot(topic) {
  let userText = "";
  let botReply = "";

  if (topic === "giá cựa") {
    userText = "Bảng giá phôi đế cựa gà của Ông 6?";
    botReply = `Dạ phôi đế cựa gà rèn từ thép cáp tàu có đủ cỡ 2ly đến 3ly5 (Đế Rồng, Huyết Long, Cáp Mỹ). 
Bán ngoài Zalo rẻ hơn sàn 10% + Áp voucher + Tặng thêm 10 cây phôi thử lửa! Anh nhắn Zalo Ông 6: 0934.376.614 để nhận bảng giá chi tiết nhé.`;
  } else if (topic === "giá lưỡi") {
    userText = "Bảng giá thép làm lưỡi câu cá?";
    botReply = `Dạ xưởng có thép cuộn 1ly6 và thép cắt sẵn 14cm/20cm từ 1ly8 đến 2ly6. Thép cáp xả sợi đàn hồi cực cao, đâm cá bự bao không oằn lưỡi. Mua ngoài sàn giảm trực tiếp + Tặng thêm phôi thử!`;
  } else if (topic === "giá chĩa") {
    userText = "Giá phôi thép làm chĩa, xiên cá?";
    botReply = `Dạ thép chĩa 2ly8, 3ly, 3ly2, 3ly5 và 4ly dài 30cm, 5 tấc, 1m đến 1m5 bắn đá không mẻ. Giá xưởng giao tận nhà rẻ hơn Shopee/TikTok từ 15k - 50k/cây ạ.`;
  } else if (topic === "tôi thép") {
    userText = "Cách tôi/ram thép cáp tàu Ông 6?";
    botReply = `Thép cáp tàu Ông 6 đã xả và xử lý nhiệt dẻo dai sẵn. Khi anh mài tạo hình xong chỉ cần tôi lại bằng dầu nhớt ở nhiệt độ đỏ hồng cánh sen là bao cứng, uốn cong 90 độ buông ra thẳng tắp!`;
  }

  appendMessage(userText, "user");
  setTimeout(() => {
    appendMessage(botReply, "bot");
  }, 400);
}

function sendChatMessage() {
  const input = document.getElementById("chat-input");
  const text = (input.value || "").trim().toLowerCase();
  if (!text) return;

  appendMessage(input.value, "user");
  input.value = "";

  setTimeout(() => {
    let reply = "";
    if (text.includes("giá") || text.includes("bao nhiêu") || text.includes("nhiêu")) {
      reply = "Dạ giá thép xưởng Ông 6 bán trực tiếp qua Zalo 0934.376.614 rẻ hơn sàn từ 10% - 20%, có đủ size từ 1.6ly đến 4ly. Anh cần quy cách nào để xưởng báo giá ngay ạ?";
    } else if (text.includes("quà") || text.includes("cào") || text.includes("thưởng")) {
      reply = "Dạ anh cào nhẹ lớp bạc trên thẻ bảo hành lấy mã 8 ký tự (như ZTR4-BRDY), nhập vào ô ở Bước 1 trên trang này là quay thưởng được ngay 100% ạ!";
    } else if (text.includes("cựa") || text.includes("gà")) {
      reply = "Dạ phôi đế cựa gà bên xưởng có từ 2ly đến 3ly5 thép cáp xịn, đàn hồi đỉnh cao bao đập bao uốn thử lửa sân lớn. Anh nhắn Zalo 0934.376.614 nhé!";
    } else if (text.includes("câu") || text.includes("lưỡi")) {
      reply = "Dạ thép làm lưỡi câu có sẵn cuộn 1ly6 và cây 14cm/20cm từ 1ly8 đến 2ly6 săn cá lóc, cá tra khủng không bao giờ oằn lưỡi.";
    } else {
      reply = `Dạ em đã ghi nhận thông tin của anh. Anh bấm gọi hoặc kết bạn Zalo Ông 6 qua số 0934.376.614 để được tư vấn tận tình và gửi hàng tận nhà nhé!`;
    }
    appendMessage(reply, "bot");
  }, 500);
}

function appendMessage(text, sender) {
  const chatMessages = document.getElementById("chat-messages");
  const msgEl = document.createElement("div");

  if (sender === "user") {
    msgEl.className = "bg-amber-600 p-2.5 rounded-xl rounded-tr-none text-white self-end max-w-[85%]";
  } else {
    msgEl.className = "bg-black/60 p-2.5 rounded-xl rounded-tl-none border border-amber-500/20 text-gray-200 self-start max-w-[85%]";
  }

  msgEl.innerText = text;
  chatMessages.appendChild(msgEl);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Khởi chạy
window.addEventListener("DOMContentLoaded", () => {
  drawWheel();
});
