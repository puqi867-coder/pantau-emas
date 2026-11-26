const TROY_OZ_GRAMS = 31.1034768;
const STORAGE_PORTFOLIO = "pantau_emas_portfolio_v1";
const STORAGE_ALERTS = "pantau_emas_alerts_v1";
const STORAGE_CUSTOM_PRICES = "pantau_emas_custom_prices_v1";
const STORAGE_THEME = "pantau_emas_theme_v1";

const PROVIDERS = {
  ANTAM: {
    id: "ANTAM",
    short: "Antam",
    name: "PT Aneka Tambang Tbk (Logam Mulia)",
    sub: "Sertifikasi LBMA & CertiEye",
    buyMultiplier: 1.075,
    buybackDiscount: 0.088,
    dailyPct: 0.42,
    denoms: [0.5, 1, 2, 3, 5, 10, 25, 50, 100, 250, 500, 1000]
  },
  UBS: {
    id: "UBS",
    short: "UBS",
    name: "PT Untung Bersama Sejahtera",
    sub: "Emas Batangan Standar SNI",
    buyMultiplier: 1.045,
    buybackDiscount: 0.078,
    dailyPct: 0.35,
    denoms: [0.5, 1, 2, 3, 4, 5, 10, 25, 50, 100]
  },
  GALERI24: {
    id: "GALERI24",
    short: "Galeri 24",
    name: "PT Pegadaian Galeri Dua Empat",
    sub: "Anak Perusahaan PT Pegadaian",
    buyMultiplier: 1.052,
    buybackDiscount: 0.072,
    dailyPct: 0.38,
    denoms: [0.5, 1, 2, 5, 10, 25, 50, 100, 250, 500, 1000]
  },
  PEGADAIAN: {
    id: "PEGADAIAN",
    short: "Tabungan Emas",
    name: "Tabungan Emas Pegadaian",
    sub: "Beli & Titip Emas Mulai 0.01 gr",
    buyMultiplier: 1.032,
    buybackDiscount: 0.032,
    dailyPct: 0.29,
    denoms: [0.01, 0.1, 0.5, 1, 5, 10, 25, 50, 100]
  }
};

const TIMEFRAMES = [
  { id: "7D", label: "7 Hari", days: 7 },
  { id: "1M", label: "1 Bulan", days: 30 },
  { id: "3M", label: "3 Bulan", days: 90 },
  { id: "6M", label: "6 Bulan", days: 180 },
  { id: "1Y", label: "1 Tahun", days: 365 }
];

const TIPS_DATA = [
  {
    id: "perbedaan",
    title: "Perbedaan Emas Antam vs UBS vs Galeri 24",
    summary: "Pahami perbedaan sertifikat CertiEye, kemasan press, likuiditas pasar, dan harga beli kembali.",
    body: `1. Emas Antam (PT Aneka Tambang Tbk):
- Memiliki sertifikasi LBMA (London Bullion Market Association) yang diakui secara global.
- Kemasan CertiEye (kartu terintegrasi chip/barcode) untuk verifikasi keaslian via aplikasi smartphone.
- Likuiditas paling tinggi dan mudah dijual di seluruh toko emas serta Butik Emas Antam.

2. Emas UBS (PT Untung Bersama Sejahtera):
- Produsen emas swasta terkemuka asal Surabaya dengan standar SNI.
- Kemasan hologram dan QR code verifikasi. Harga belinya umumnya sedikit lebih murah dari Antam dengan kemurnian 99.99% yang sama.

3. Galeri 24 (Anak Perusahaan Pegadaian):
- Memiliki workshop manufaktur mandiri dengan sertifikasi SNI 8880:2020.
- Selalu tersedia di ratusan outlet Pegadaian dan Galeri 24 di seluruh Nusantara dengan biaya cetak kompetitif.`
  },
  {
    id: "pajak",
    title: "Aturan Pajak Emas Batangan (PPh 22 Terbaru)",
    summary: "Ketahui tarif pemotongan pajak PPh 22 saat membeli dan menjual kembali (buyback) emas batangan.",
    body: `Sesuai Peraturan Menteri Keuangan (PMK) No 48 Tahun 2023:

1. Pembelian Emas Batangan:
- Dikenakan PPh 22 sebesar 0.25% bagi pemegang NPWP yang menyertakan nomor NPWP/NIK saat transaksi.
- Bagi yang tidak menyertakan NPWP dikenakan tarif 2x lipat (0.50%).

2. Penjualan Kembali (Buyback):
- Transaksi buyback dengan nominal di atas Rp 10.000.000 dipotong PPh 22 sebesar 1.5% bagi pemegang NPWP, dan 3.0% untuk non-NPWP.
- Transaksi buyback di bawah Rp 10.000.000 tidak dikenakan potongan PPh 22.

Tips: Selalu lampirkan KTP / NPWP saat membeli maupun menjual emas agar mendapatkan tarif pajak terendah.`
  },
  {
    id: "dca",
    title: "Strategi Dollar Cost Averaging (DCA) Emas",
    summary: "Kunci sukses menabung emas jangka panjang tanpa pusing memprediksi fluktuasi harian.",
    body: `Dollar Cost Averaging (DCA) adalah metode membeli emas secara berkala dalam jumlah rupiah atau gram tertentu pada tanggal yang sama setiap bulan, terlepas dari apakah harga sedang naik atau turun.

1. Menghilangkan stres emosional akibat mencoba 'menebak dasar harga' (timing the market).
2. Mendapatkan harga rata-rata (average cost) yang optimal dalam jangka menengah-panjang.
3. Membentuk disiplin finansial menyisihkan gaji di awal bulan.

Emas adalah instrumen lindung nilai (hedging) terhadap inflasi dengan horizon investasi ideal minimal 3 - 5 tahun agar selisih harga jual-beli (spread) terlewati dengan margin keuntungan yang menarik.`
  },
  {
    id: "zakat",
    title: "Panduan & Nisab Zakat Emas (Zakat Maal)",
    summary: "Ketahui syarat nisab 85 gram emas, haul 1 tahun hijriyah, dan persentase kewajiban zakat 2.5%.",
    body: `Ketentuan Zakat Emas Simpanan:
1. Nisab Emas: Nisab emas yang wajib dizakati adalah setara 85 gram emas murni.
2. Syarat Haul: Telah dimiliki dan tersimpan penuh selama 1 tahun (haul).
3. Kadar Zakat: Besaran zakat yang wajib dikeluarkan adalah 2.5% dari total nilai emas simpanan pada saat mencapai haul.

Rumus: Zakat = Total Gram Emas (>= 85 gr) x Harga Emas Hari Ini x 2.5%.`
  }
];

const state = {
  screen: "prices",
  selectedProvider: "ANTAM",
  timeframe: "1M",
  calcTab: "profit",
  buyMode: "budget",
  xauUsd: 3578.8,
  usdIdr: 18341,
  lastUpdated: new Date(),
  liveSource: "Fallback Pasar",
  prices: {},
  customOverrides: loadJson(STORAGE_CUSTOM_PRICES, {}),
  portfolio: loadJson(STORAGE_PORTFOLIO, []),
  alerts: loadJson(STORAGE_ALERTS, []),
  chartData: []
};

function loadJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function saveJson(key, val) {
  localStorage.setItem(key, JSON.stringify(val));
}

function formatRupiah(num) {
  return "Rp " + Math.round(num).toLocaleString("id-ID");
}

function roundToThousand(val) {
  return Math.round(val / 1000) * 1000;
}

function computeAllPrices() {
  const spotPerGram = (state.xauUsd * state.usdIdr) / TROY_OZ_GRAMS;
  state.globalIdrPerGram = Math.round(spotPerGram);

  for (const [id, cfg] of Object.entries(PROVIDERS)) {
    const override = state.customOverrides[id];
    const buyPrice = override?.buyPrice || roundToThousand(spotPerGram * cfg.buyMultiplier);
    const buybackPrice = override?.buybackPrice || roundToThousand(buyPrice * (1 - cfg.buybackDiscount));
    const prevBuy = roundToThousand(buyPrice / (1 + cfg.dailyPct / 100));
    state.prices[id] = {
      provider: id,
      buyPrice,
      buybackPrice,
      changeAmount: buyPrice - prevBuy,
      changePct: cfg.dailyPct,
      isCustom: Boolean(override)
    };
  }
}

function generateHistory(providerId, days) {
  const current = state.prices[providerId]?.buyPrice || 2200000;
  const points = [];
  const seedBase = providerId.charCodeAt(0) * 17;
  let price = current * (1 - Math.min(days, 365) * 0.00055);
  const now = new Date();

  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(now.getDate() - i);
    const wave = Math.sin((i + seedBase) * 0.35) * 0.006 + Math.cos((i + seedBase) * 0.14) * 0.004;
    if (i === 0) {
      price = current;
    } else {
      const targetProgress = (days - i) / days;
      const drift = current * (1 - Math.min(days, 365) * 0.00055 * (1 - targetProgress));
      price = Math.round(drift * (1 + wave));
    }
    points.push({
      dateLabel: date.toLocaleDateString("id-ID", { day: "2-digit", month: "short", year: days > 90 ? "2-digit" : undefined }),
      price
    });
  }
  return points;
}

async function fetchLivePrices() {
  const refreshBtn = document.getElementById("refreshBtn");
  refreshBtn.style.opacity = "0.5";

  try {
    const [xauRes, fxRes] = await Promise.all([
      fetch("https://api.gold-api.com/price/XAU"),
      fetch("https://api.frankfurter.app/latest?from=USD&to=IDR")
    ]);
    if (xauRes.ok) {
      const xauJson = await xauRes.json();
      if (typeof xauJson.price === "number" && xauJson.price > 0) {
        state.xauUsd = xauJson.price;
      }
    }
    if (fxRes.ok) {
      const fxJson = await fxRes.json();
      if (fxJson?.rates?.IDR > 0) {
        state.usdIdr = fxJson.rates.IDR;
      }
    }
    state.liveSource = "Live Spot XAU/USD + Kurs IDR";
  } catch {
    state.liveSource = "Mode Offline (Estimasi Terakhir)";
  } finally {
    state.lastUpdated = new Date();
    computeAllPrices();
    checkAlertTriggers();
    renderAll();
    refreshBtn.style.opacity = "1";
  }
}

function checkAlertTriggers() {
  let changed = false;
  state.alerts = state.alerts.map((a) => {
    const current = state.prices[a.provider]?.buyPrice || 0;
    const hit = a.isAbove ? current >= a.targetPrice : current <= a.targetPrice;
    if (hit !== a.isTriggered) changed = true;
    return { ...a, isTriggered: hit };
  });
  if (changed) saveJson(STORAGE_ALERTS, state.alerts);
}

function switchScreen(screenId) {
  state.screen = screenId;
  document.querySelectorAll(".screen").forEach((el) => el.classList.toggle("active", el.id === `screen-${screenId}`));
  document.querySelectorAll(".nav-item, .mnav-item").forEach((btn) => {
    const active = btn.dataset.screen === screenId;
    btn.classList.toggle("active", active);
    if (btn.hasAttribute("aria-selected")) btn.setAttribute("aria-selected", String(active));
  });

  const titles = {
    prices: "Harga Terkini Logam Mulia",
    chart: "Grafik Tren Harga Emas",
    calculator: "Kalkulator Investasi Emas",
    portfolio: "Portofolio & Target Harga",
    tips: "Edukasi & Panduan Emas"
  };
  document.getElementById("pageTitle").textContent = titles[screenId] || "Pantau Emas";
  if (screenId === "chart") renderChartScreen();
}

function renderProviderChips(containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  Object.values(PROVIDERS).forEach((p) => {
    const btn = document.createElement("button");
    btn.className = `chip-btn ${state.selectedProvider === p.id ? "active" : ""}`;
    btn.textContent = p.short;
    btn.addEventListener("click", () => {
      state.selectedProvider = p.id;
      renderAll();
    });
    container.appendChild(btn);
  });
}

function renderPricesScreen() {
  renderProviderChips("pricesProviderChips");
  const cfg = PROVIDERS[state.selectedProvider];
  const priceObj = state.prices[state.selectedProvider];

  document.getElementById("spotTickerText").textContent = `XAU $${state.xauUsd.toFixed(2)} | IDR ${state.usdIdr.toLocaleString("id-ID")}`;
  document.getElementById("lastUpdatedText").textContent = `${state.liveSource} • Diperbarui ${state.lastUpdated.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" })} WIB`;

  document.getElementById("heroProviderBadge").textContent = cfg.short.toUpperCase() + (priceObj.isCustom ? " (MANUAL)" : "");
  document.getElementById("heroProviderName").textContent = cfg.name;
  document.getElementById("heroProviderSub").textContent = cfg.sub;
  document.getElementById("heroBuyPrice").textContent = formatRupiah(priceObj.buyPrice);
  document.getElementById("heroBuybackPrice").textContent = formatRupiah(priceObj.buybackPrice);
  document.getElementById("heroDeltaAmount").textContent = `Perubahan harian: +${formatRupiah(priceObj.changeAmount)}`;
  document.getElementById("heroSpreadInfo").textContent = `Spread jual-beli: ${formatRupiah(priceObj.buyPrice - priceObj.buybackPrice)}`;

  const deltaChip = document.getElementById("heroDeltaChip");
  deltaChip.textContent = `+${priceObj.changePct.toFixed(2)}%`;
  deltaChip.className = "delta-chip up";

  document.getElementById("globalXauUsd").textContent = `$${state.xauUsd.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} / oz`;
  document.getElementById("globalUsdIdr").textContent = formatRupiah(state.usdIdr);
  document.getElementById("globalIdrGram").textContent = formatRupiah(state.globalIdrPerGram);

  const triggered = state.alerts.filter((a) => a.isTriggered);
  const bannerWrap = document.getElementById("alertBannerContainer");
  bannerWrap.innerHTML = triggered.length
    ? `<div class="alert-banner"><span><strong>Target Harga Tercapai:</strong> ${triggered.map((a) => `${PROVIDERS[a.provider].short} ${a.isAbove ? ">=" : "<="} ${formatRupiah(a.targetPrice)}`).join(", ")}</span><button class="btn btn-ghost" onclick="switchScreen('portfolio')">Lihat</button></div>`
    : "";

  const query = document.getElementById("denomSearchInput").value.trim().toLowerCase();
  const tbody = document.getElementById("denominationBody");
  tbody.innerHTML = "";
  const filtered = cfg.denoms.filter((w) => String(w).includes(query));

  if (!filtered.length) {
    tbody.innerHTML = `<tr><td colspan="5" class="muted">Pecahan gram tidak ditemukan</td></tr>`;
    return;
  }

  filtered.forEach((w) => {
    const unitFactor = w < 1 ? 1.08 : w >= 25 ? 0.985 : w >= 10 ? 0.992 : 1;
    const unitRate = Math.round(priceObj.buyPrice * unitFactor);
    const totalOfficial = Math.round(unitRate * w);
    const estBuyback = Math.round(priceObj.buybackPrice * w);

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><strong>${w} gram</strong></td>
      <td class="mono">${formatRupiah(totalOfficial)}</td>
      <td class="mono">${formatRupiah(unitRate)}</td>
      <td class="mono">${formatRupiah(estBuyback)}</td>
      <td><button class="btn btn-outline">Hitung</button></td>
    `;
    tr.addEventListener("click", () => {
      document.getElementById("calcProvider").value = state.selectedProvider;
      document.getElementById("calcWeight").value = w;
      document.getElementById("calcBuyPrice").value = Math.round(unitRate * 0.94);
      switchScreen("calculator");
      setCalcTab("profit");
      updateCalculators();
    });
    tbody.appendChild(tr);
  });
}

function renderChartScreen() {
  renderProviderChips("chartProviderChips");
  const pills = document.getElementById("timeframePills");
  pills.innerHTML = "";
  TIMEFRAMES.forEach((tf) => {
    const btn = document.createElement("button");
    btn.className = `tf-btn ${state.timeframe === tf.id ? "active" : ""}`;
    btn.textContent = tf.label;
    btn.addEventListener("click", () => {
      state.timeframe = tf.id;
      renderChartScreen();
    });
    pills.appendChild(btn);
  });

  const tfObj = TIMEFRAMES.find((t) => t.id === state.timeframe) || TIMEFRAMES[1];
  state.chartData = generateHistory(state.selectedProvider, tfObj.days);
  const prices = state.chartData.map((d) => d.price);
  const high = Math.max(...prices);
  const low = Math.min(...prices);
  const avg = Math.round(prices.reduce((a, b) => a + b, 0) / prices.length);

  document.getElementById("chartTitle").textContent = `Grafik Tren Emas ${PROVIDERS[state.selectedProvider].short}`;
  document.getElementById("chartHighest").textContent = formatRupiah(high);
  document.getElementById("chartLowest").textContent = formatRupiah(low);
  document.getElementById("chartAverage").textContent = formatRupiah(avg);

  drawChartCanvas(-1);
}

function drawChartCanvas(hoverIdx) {
  const canvas = document.getElementById("goldChartCanvas");
  const rect = canvas.parentElement.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  canvas.width = Math.max(300, rect.width * dpr);
  canvas.height = Math.max(240, rect.height * dpr);
  const ctx = canvas.getContext("2d");
  ctx.scale(dpr, dpr);

  const w = rect.width || 600;
  const h = rect.height || 260;
  const pad = { top: 20, right: 18, bottom: 28, left: 18 };
  const data = state.chartData;
  if (!data.length) return;

  const vals = data.map((d) => d.price);
  const minVal = Math.min(...vals) * 0.996;
  const maxVal = Math.max(...vals) * 1.004;
  const span = Math.max(1, maxVal - minVal);

  const getX = (i) => pad.left + (i / Math.max(1, data.length - 1)) * (w - pad.left - pad.right);
  const getY = (v) => h - pad.bottom - ((v - minVal) / span) * (h - pad.top - pad.bottom);

  ctx.clearRect(0, 0, w, h);

  ctx.strokeStyle = "rgba(154,163,178,0.16)";
  ctx.lineWidth = 1;
  for (let g = 0; g < 4; g++) {
    const gy = pad.top + (g / 3) * (h - pad.top - pad.bottom);
    ctx.beginPath();
    ctx.moveTo(pad.left, gy);
    ctx.lineTo(w - pad.right, gy);
    ctx.stroke();
  }

  const grad = ctx.createLinearGradient(0, pad.top, 0, h - pad.bottom);
  grad.addColorStop(0, "rgba(234, 179, 8, 0.36)");
  grad.addColorStop(1, "rgba(234, 179, 8, 0.0)");

  ctx.beginPath();
  data.forEach((pt, i) => {
    const x = getX(i);
    const y = getY(pt.price);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.strokeStyle = "#eab308";
  ctx.lineWidth = 2.6;
  ctx.stroke();

  ctx.lineTo(getX(data.length - 1), h - pad.bottom);
  ctx.lineTo(getX(0), h - pad.bottom);
  ctx.closePath();
  ctx.fillStyle = grad;
  ctx.fill();

  const activeIdx = hoverIdx >= 0 && hoverIdx < data.length ? hoverIdx : data.length - 1;
  const pt = data[activeIdx];
  const ax = getX(activeIdx);
  const ay = getY(pt.price);

  ctx.beginPath();
  ctx.setLineDash([4, 4]);
  ctx.moveTo(ax, pad.top);
  ctx.lineTo(ax, h - pad.bottom);
  ctx.strokeStyle = "rgba(250, 204, 21, 0.55)";
  ctx.lineWidth = 1.2;
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.beginPath();
  ctx.arc(ax, ay, 5.5, 0, Math.PI * 2);
  ctx.fillStyle = "#facc15";
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.strokeStyle = "#0e1015";
  ctx.stroke();

  const first = data[0].price;
  const pct = ((pt.price - first) / first) * 100;
  document.getElementById("chartHoverDate").textContent = pt.dateLabel;
  document.getElementById("chartHoverPrice").textContent = formatRupiah(pt.price);
  const chip = document.getElementById("chartHoverChange");
  chip.textContent = `${pct >= 0 ? "+" : ""}${pct.toFixed(2)}%`;
  chip.className = `delta-chip ${pct >= 0 ? "up" : "down"}`;
}

function setupChartInteractions() {
  const canvas = document.getElementById("goldChartCanvas");
  const handleMove = (clientX) => {
    if (!state.chartData.length) return;
    const rect = canvas.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (clientX - rect.left - 18) / Math.max(1, rect.width - 36)));
    const idx = Math.round(ratio * (state.chartData.length - 1));
    drawChartCanvas(idx);
  };
  canvas.addEventListener("mousemove", (e) => handleMove(e.clientX));
  canvas.addEventListener("touchmove", (e) => {
    if (e.touches[0]) handleMove(e.touches[0].clientX);
  }, { passive: true });
  canvas.addEventListener("mouseleave", () => drawChartCanvas(-1));
}

function populateProviderSelects() {
  ["calcProvider", "buyProvider", "zakatProvider"].forEach((id) => {
    const sel = document.getElementById(id);
    const prev = sel.value || state.selectedProvider;
    sel.innerHTML = Object.values(PROVIDERS)
      .map((p) => `<option value="${p.id}">${p.short} — ${formatRupiah(state.prices[p.id].buyPrice)}/gr</option>`)
      .join("");
    sel.value = PROVIDERS[prev] ? prev : "ANTAM";
  });
  const calcBuyInput = document.getElementById("calcBuyPrice");
  if (!calcBuyInput.value) {
    calcBuyInput.value = Math.round(state.prices[state.selectedProvider].buyPrice * 0.92);
  }
}

function setCalcTab(tabId) {
  state.calcTab = tabId;
  document.querySelectorAll("#calcSubTabs .seg-btn").forEach((b) => b.classList.toggle("active", b.dataset.calctab === tabId));
  document.querySelectorAll(".calc-panel").forEach((p) => p.classList.toggle("active", p.id === `calc-panel-${tabId}`));
}

function updateCalculators() {
  const pId = document.getElementById("calcProvider").value || "ANTAM";
  const weight = Math.max(0, parseFloat(document.getElementById("calcWeight").value) || 0);
  const buyRate = Math.max(0, parseFloat(document.getElementById("calcBuyPrice").value) || 0);
  const hasNpwp = document.getElementById("calcHasNpwp").checked;
  const buybackRate = state.prices[pId]?.buybackPrice || 0;

  const totalModal = weight * buyRate;
  const grossBuyback = weight * buybackRate;
  const taxRate = grossBuyback > 10000000 ? (hasNpwp ? 0.015 : 0.03) : 0;
  const tax = grossBuyback * taxRate;
  const netReceive = grossBuyback - tax;
  const netProfit = netReceive - totalModal;
  const profitPct = totalModal > 0 ? (netProfit / totalModal) * 100 : 0;

  const profitEl = document.getElementById("profitNetValue");
  profitEl.textContent = `${netProfit >= 0 ? "+" : ""}${formatRupiah(netProfit)}`;
  profitEl.style.color = netProfit >= 0 ? "var(--green)" : "var(--red)";
  const chip = document.getElementById("profitPercentChip");
  chip.textContent = `${profitPct >= 0 ? "+" : ""}${profitPct.toFixed(2)}%`;
  chip.className = `delta-chip ${netProfit >= 0 ? "up" : "down"}`;
  document.getElementById("profitTotalModal").textContent = formatRupiah(totalModal);
  document.getElementById("profitGrossBuyback").textContent = formatRupiah(grossBuyback);
  document.getElementById("profitTax").textContent = formatRupiah(tax);
  document.getElementById("profitNetReceive").textContent = formatRupiah(netReceive);

  const buyProv = document.getElementById("buyProvider").value || "ANTAM";
  const buyUnitRate = state.prices[buyProv]?.buyPrice || 0;
  const buyNpwp = document.getElementById("buyHasNpwp").checked;
  const buyTaxPct = buyNpwp ? 0.0025 : 0.005;

  if (state.buyMode === "budget") {
    const budget = Math.max(0, parseFloat(document.getElementById("buyBudgetInput").value) || 0);
    const baseAmount = budget / (1 + buyTaxPct);
    const grams = buyUnitRate > 0 ? baseAmount / buyUnitRate : 0;
    const taxVal = budget - baseAmount;
    document.getElementById("buyResultLabel").textContent = "Total Emas Didapat:";
    document.getElementById("buyPrimaryResult").textContent = `${grams.toFixed(3)} gr`;
    document.getElementById("buyUnitRate").textContent = formatRupiah(buyUnitRate);
    document.getElementById("buyTaxValue").textContent = formatRupiah(taxVal);
    document.getElementById("buyTotalPay").textContent = formatRupiah(budget);
  } else {
    const grams = Math.max(0, parseFloat(document.getElementById("buyGramsInput").value) || 0);
    const subTotal = grams * buyUnitRate;
    const taxVal = subTotal * buyTaxPct;
    const totalPay = subTotal + taxVal;
    document.getElementById("buyResultLabel").textContent = "Estimasi Biaya Pembelian:";
    document.getElementById("buyPrimaryResult").textContent = formatRupiah(totalPay);
    document.getElementById("buyUnitRate").textContent = formatRupiah(buyUnitRate);
    document.getElementById("buyTaxValue").textContent = formatRupiah(taxVal);
    document.getElementById("buyTotalPay").textContent = formatRupiah(totalPay);
  }

  const zakatGrams = Math.max(0, parseFloat(document.getElementById("zakatGramsInput").value) || 0);
  const zakatProv = document.getElementById("zakatProvider").value || "ANTAM";
  const haulMet = document.getElementById("zakatHaulCheck").checked;
  const zakatRate = state.prices[zakatProv]?.buyPrice || 0;
  const nisabMet = zakatGrams >= 85;
  const statusEl = document.getElementById("zakatStatusBadge");
  const descEl = document.getElementById("zakatStatusDesc");

  if (!nisabMet) {
    statusEl.textContent = "BELUM MENCAPAI NISAB";
    statusEl.style.color = "var(--muted)";
    descEl.textContent = `Kurang ${(85 - zakatGrams).toFixed(2)} gram emas lagi untuk mencapai nisab wajib zakat.`;
    document.getElementById("zakatGoldGrams").textContent = "0 gr";
    document.getElementById("zakatRupiahValue").textContent = "Rp 0";
  } else if (!haulMet) {
    statusEl.textContent = "BELUM MENCAPAI HAUL";
    statusEl.style.color = "var(--gold)";
    descEl.textContent = "Nisab telah tercapai (>= 85 gr). Pastikan emas telah tersimpan selama 1 tahun (haul) untuk menunaikan kewajiban zakat.";
    document.getElementById("zakatGoldGrams").textContent = "0 gr";
    document.getElementById("zakatRupiahValue").textContent = "Rp 0";
  } else {
    const dueGrams = zakatGrams * 0.025;
    const dueRp = dueGrams * zakatRate;
    statusEl.textContent = "WAJIB ZAKAT";
    statusEl.style.color = "var(--green)";
    descEl.textContent = "Besaran zakat yang wajib dikeluarkan adalah 2.5% dari total nilai emas simpanan pada saat mencapai haul.";
    document.getElementById("zakatGoldGrams").textContent = `${dueGrams.toFixed(3)} gr`;
    document.getElementById("zakatRupiahValue").textContent = formatRupiah(dueRp);
  }
}

function renderPortfolioScreen() {
  let totalGrams = 0;
  let totalCost = 0;
  let totalBuyback = 0;

  state.portfolio.forEach((item) => {
    totalGrams += item.weightGram;
    totalCost += item.weightGram * item.buyPricePerGram;
    totalBuyback += item.weightGram * (state.prices[item.provider]?.buybackPrice || item.buyPricePerGram);
  });

  const profit = totalBuyback - totalCost;
  const pct = totalCost > 0 ? (profit / totalCost) * 100 : 0;

  document.getElementById("portfolioTotalValue").textContent = formatRupiah(totalBuyback);
  document.getElementById("portfolioTotalGrams").textContent = `${totalGrams.toFixed(2)} gr`;
  document.getElementById("portfolioTotalCost").textContent = formatRupiah(totalCost);
  document.getElementById("portfolioAlertCount").textContent = String(state.alerts.length);
  document.getElementById("portfolioCountLabel").textContent = String(state.portfolio.length);
  document.getElementById("alertsCountLabel").textContent = String(state.alerts.length);

  const chip = document.getElementById("portfolioProfitChip");
  chip.textContent = `${profit >= 0 ? "+" : ""}${formatRupiah(profit)} (${pct >= 0 ? "+" : ""}${pct.toFixed(2)}%)`;
  chip.className = `delta-chip ${profit >= 0 ? "up" : "down"}`;

  const list = document.getElementById("portfolioList");
  if (!state.portfolio.length) {
    list.innerHTML = `<div class="muted">Belum Ada Catatan Emas. Catat koleksi emas batangan Anda untuk memantau pergerakan nilai pasar dan potensi keuntungannya setiap hari.</div>`;
  } else {
    list.innerHTML = "";
    state.portfolio.forEach((item) => {
      const currentVal = item.weightGram * (state.prices[item.provider]?.buybackPrice || 0);
      const modalVal = item.weightGram * item.buyPricePerGram;
      const diff = currentVal - modalVal;
      const el = document.createElement("div");
      el.className = "list-item-card";
      el.innerHTML = `
        <div>
          <strong>${PROVIDERS[item.provider]?.short || item.provider} • ${item.weightGram} gr</strong>
          <div class="muted">Beli ${formatRupiah(item.buyPricePerGram)}/gr • ${item.purchaseDate}${item.certNumber ? ` • Cert: ${item.certNumber}` : ""}</div>
          ${item.notes ? `<div class="muted">${item.notes}</div>` : ""}
        </div>
        <div style="display:flex;align-items:center;gap:12px;">
          <div style="text-align:right;">
            <strong class="mono">${formatRupiah(currentVal)}</strong>
            <div class="mono" style="font-size:0.82rem;color:${diff >= 0 ? "var(--green)" : "var(--red)"}">${diff >= 0 ? "+" : ""}${formatRupiah(diff)}</div>
          </div>
          <button class="btn btn-danger" data-del-portfolio="${item.id}">Hapus</button>
        </div>
      `;
      el.querySelector("[data-del-portfolio]").addEventListener("click", () => {
        state.portfolio = state.portfolio.filter((x) => x.id !== item.id);
        saveJson(STORAGE_PORTFOLIO, state.portfolio);
        renderPortfolioScreen();
        showToast("Catatan emas dihapus");
      });
      list.appendChild(el);
    });
  }

  const alertsEl = document.getElementById("alertsList");
  if (!state.alerts.length) {
    alertsEl.innerHTML = `<div class="muted">Belum ada target pantau harga aktif.</div>`;
  } else {
    alertsEl.innerHTML = "";
    state.alerts.forEach((a) => {
      const el = document.createElement("div");
      el.className = "list-item-card";
      el.innerHTML = `
        <div>
          <strong>${PROVIDERS[a.provider]?.short || a.provider} ${a.isAbove ? ">=" : "<="} ${formatRupiah(a.targetPrice)}</strong>
          <div class="muted">Dibuat ${a.createdAt} • Status: ${a.isTriggered ? "TERCAPAI" : "Memantau"}</div>
        </div>
        <button class="btn btn-danger" data-del-alert="${a.id}">Hapus</button>
      `;
      el.querySelector("[data-del-alert]").addEventListener("click", () => {
        state.alerts = state.alerts.filter((x) => x.id !== a.id);
        saveJson(STORAGE_ALERTS, state.alerts);
        renderAll();
        showToast("Target harga dihapus");
      });
      alertsEl.appendChild(el);
    });
  }
}

function renderTipsScreen() {
  const container = document.getElementById("tipsAccordion");
  container.innerHTML = "";
  TIPS_DATA.forEach((tip, idx) => {
    const card = document.createElement("div");
    card.className = "tip-card";
    card.innerHTML = `
      <button class="tip-trigger" aria-expanded="${idx === 0}">
        <div>
          <strong>${tip.title}</strong>
          <span class="muted">${tip.summary}</span>
        </div>
        <span>${idx === 0 ? "−" : "+"}</span>
      </button>
      <div class="tip-body ${idx === 0 ? "" : "hidden"}">${tip.body}</div>
    `;
    const btn = card.querySelector(".tip-trigger");
    const body = card.querySelector(".tip-body");
    btn.addEventListener("click", () => {
      const open = body.classList.toggle("hidden");
      btn.querySelector("span:last-child").textContent = open ? "+" : "−";
      btn.setAttribute("aria-expanded", String(!open));
    });
    container.appendChild(card);
  });
}

function openModal(title, htmlContent, onSubmit) {
  document.getElementById("modalTitle").textContent = title;
  const body = document.getElementById("modalBody");
  body.innerHTML = htmlContent;
  document.getElementById("modalBackdrop").classList.remove("hidden");
  const form = body.querySelector("form");
  if (form && onSubmit) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      onSubmit(new FormData(form));
      closeModal();
    });
  }
}

function closeModal() {
  document.getElementById("modalBackdrop").classList.add("hidden");
}

function openAddPortfolioModal(prefill = {}) {
  const prov = prefill.provider || state.selectedProvider;
  const defaultRate = prefill.buyPricePerGram || state.prices[prov]?.buyPrice || 2200000;
  const defaultWeight = prefill.weightGram || 1;
  const today = new Date().toISOString().slice(0, 10);

  openModal(
    "Tambah Portofolio Emas",
    `<form class="modal-form">
      <label class="field"><span>Merek Emas</span>
        <select name="provider">${Object.values(PROVIDERS).map((p) => `<option value="${p.id}" ${p.id === prov ? "selected" : ""}>${p.short}</option>`).join("")}</select>
      </label>
      <label class="field"><span>Berat (Gram)</span><input name="weightGram" type="number" step="0.01" min="0.01" value="${defaultWeight}" required /></label>
      <label class="field"><span>Harga Beli / Gram (Rp)</span><input name="buyPricePerGram" type="number" step="1000" min="1000" value="${defaultRate}" required /></label>
      <label class="field"><span>Tanggal Beli</span><input name="purchaseDate" type="date" value="${today}" required /></label>
      <label class="field"><span>No. Seri / Sertifikat (Opsional)</span><input name="certNumber" type="text" placeholder="Contoh: CE123456" /></label>
      <label class="field"><span>Catatan (Opsional)</span><input name="notes" type="text" placeholder="Simpanan jangka panjang" /></label>
      <button class="btn btn-gold" type="submit">Simpan Emas</button>
    </form>`,
    (fd) => {
      state.portfolio.unshift({
        id: Date.now(),
        provider: fd.get("provider"),
        weightGram: parseFloat(fd.get("weightGram")) || 1,
        buyPricePerGram: parseInt(fd.get("buyPricePerGram"), 10) || defaultRate,
        purchaseDate: fd.get("purchaseDate"),
        certNumber: String(fd.get("certNumber") || "").trim(),
        notes: String(fd.get("notes") || "").trim()
      });
      saveJson(STORAGE_PORTFOLIO, state.portfolio);
      renderPortfolioScreen();
      showToast("Emas berhasil ditambahkan ke portofolio");
    }
  );
}

function openAddAlertModal() {
  const current = state.prices[state.selectedProvider]?.buyPrice || 2200000;
  openModal(
    "Pasang Target Pantau Harga",
    `<form class="modal-form">
      <label class="field"><span>Merek Emas</span>
        <select name="provider">${Object.values(PROVIDERS).map((p) => `<option value="${p.id}" ${p.id === state.selectedProvider ? "selected" : ""}>${p.short}</option>`).join("")}</select>
      </label>
      <label class="field"><span>Kondisi Target</span>
        <select name="isAbove">
          <option value="true">Harga Naik Mencapai (>=)</option>
          <option value="false">Harga Turun Mencapai (<=)</option>
        </select>
      </label>
      <label class="field"><span>Target Harga / Gram (Rp)</span><input name="targetPrice" type="number" step="5000" value="${current + 25000}" required /></label>
      <button class="btn btn-gold" type="submit">Aktifkan Target Harga</button>
    </form>`,
    (fd) => {
      state.alerts.unshift({
        id: Date.now(),
        provider: fd.get("provider"),
        isAbove: fd.get("isAbove") === "true",
        targetPrice: parseInt(fd.get("targetPrice"), 10) || current,
        createdAt: new Date().toLocaleDateString("id-ID"),
        isTriggered: false
      });
      checkAlertTriggers();
      saveJson(STORAGE_ALERTS, state.alerts);
      renderAll();
      showToast("Target pantau harga berhasil diset");
    }
  );
}

function openCustomPriceModal() {
  const cur = state.prices[state.selectedProvider];
  openModal(
    `Sesuaikan Harga ${PROVIDERS[state.selectedProvider].short}`,
    `<form class="modal-form">
      <label class="field"><span>Harga Jual / Gram (Rp)</span><input name="buyPrice" type="number" step="1000" value="${cur.buyPrice}" required /></label>
      <label class="field"><span>Harga Buyback / Gram (Rp)</span><input name="buybackPrice" type="number" step="1000" value="${cur.buybackPrice}" required /></label>
      <div style="display:flex;gap:10px;">
        <button class="btn btn-gold" type="submit" style="flex:1;">Terapkan</button>
        <button class="btn btn-ghost" type="button" id="resetOverrideBtn">Reset Otomatis</button>
      </div>
    </form>`,
    (fd) => {
      state.customOverrides[state.selectedProvider] = {
        buyPrice: parseInt(fd.get("buyPrice"), 10) || cur.buyPrice,
        buybackPrice: parseInt(fd.get("buybackPrice"), 10) || cur.buybackPrice
      };
      saveJson(STORAGE_CUSTOM_PRICES, state.customOverrides);
      computeAllPrices();
      checkAlertTriggers();
      renderAll();
      showToast("Harga manual diterapkan");
    }
  );
  document.getElementById("resetOverrideBtn").addEventListener("click", () => {
    delete state.customOverrides[state.selectedProvider];
    saveJson(STORAGE_CUSTOM_PRICES, state.customOverrides);
    computeAllPrices();
    renderAll();
    closeModal();
    showToast("Kembali ke harga pasar otomatis");
  });
}

function showToast(msg) {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.classList.remove("hidden");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => el.classList.add("hidden"), 2600);
}

function renderAll() {
  renderPricesScreen();
  populateProviderSelects();
  updateCalculators();
  renderPortfolioScreen();
  if (state.screen === "chart") renderChartScreen();
}

function init() {
  const savedTheme = localStorage.getItem(STORAGE_THEME) || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);

  computeAllPrices();
  renderTipsScreen();
  setupChartInteractions();
  renderAll();
  fetchLivePrices();

  document.querySelectorAll("[data-screen]").forEach((btn) => {
    btn.addEventListener("click", () => switchScreen(btn.dataset.screen));
  });

  document.getElementById("refreshBtn").addEventListener("click", () => {
    fetchLivePrices();
    showToast("Harga emas berhasil diperbarui");
  });

  document.getElementById("themeToggle").addEventListener("click", () => {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem(STORAGE_THEME, next);
  });

  document.getElementById("denomSearchInput").addEventListener("input", renderPricesScreen);

  document.querySelectorAll("#calcSubTabs .seg-btn").forEach((btn) => {
    btn.addEventListener("click", () => setCalcTab(btn.dataset.calctab));
  });

  document.querySelectorAll("#buyModeTabs .seg-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.buyMode = btn.dataset.buymode;
      document.querySelectorAll("#buyModeTabs .seg-btn").forEach((b) => b.classList.toggle("active", b.dataset.buymode === state.buyMode));
      document.getElementById("buyBudgetField").classList.toggle("hidden", state.buyMode !== "budget");
      document.getElementById("buyGramsField").classList.toggle("hidden", state.buyMode !== "grams");
      updateCalculators();
    });
  });

  ["calcProvider", "calcWeight", "calcBuyPrice", "calcHasNpwp", "buyProvider", "buyBudgetInput", "buyGramsInput", "buyHasNpwp", "zakatGramsInput", "zakatProvider", "zakatHaulCheck"].forEach((id) => {
    document.getElementById(id).addEventListener("input", updateCalculators);
    document.getElementById(id).addEventListener("change", updateCalculators);
  });

  document.getElementById("quickAddPortfolioBtn").addEventListener("click", () => openAddPortfolioModal());
  document.getElementById("portfolioAddBtn").addEventListener("click", () => openAddPortfolioModal());
  document.getElementById("quickSetAlertBtn").addEventListener("click", openAddAlertModal);
  document.getElementById("portfolioAlertBtn").addEventListener("click", openAddAlertModal);
  document.getElementById("openCustomPriceBtn").addEventListener("click", openCustomPriceModal);
  document.getElementById("modalCloseBtn").addEventListener("click", closeModal);
  document.getElementById("modalBackdrop").addEventListener("click", (e) => {
    if (e.target.id === "modalBackdrop") closeModal();
  });

  document.getElementById("calcSavePortfolioBtn").addEventListener("click", () => {
    openAddPortfolioModal({
      provider: document.getElementById("calcProvider").value,
      weightGram: parseFloat(document.getElementById("calcWeight").value) || 1,
      buyPricePerGram: parseFloat(document.getElementById("calcBuyPrice").value) || 2200000
    });
  });

  document.getElementById("shareCalcBtn").addEventListener("click", async () => {
    const text = `Simulasi Pantau Emas (${PROVIDERS[document.getElementById("calcProvider").value].short} ${document.getElementById("calcWeight").value} gr): Laba/Rugi Bersih ${document.getElementById("profitNetValue").textContent} (${document.getElementById("profitPercentChip").textContent}). Dihitung via Pantau Emas Web.`;
    try {
      await navigator.clipboard.writeText(text);
      showToast("Ringkasan simulasi disalin");
    } catch {
      showToast(text);
    }
  });

  window.addEventListener("resize", () => {
    if (state.screen === "chart") drawChartCanvas(-1);
  });
}

window.switchScreen = switchScreen;
document.addEventListener("DOMContentLoaded", init);

