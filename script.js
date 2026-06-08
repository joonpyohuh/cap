const fallbackProducts = [
  { id: "meta-quest-3", name: "Meta Quest 3", type: "VR 기기", category: "VR 기기", price: "1일 8,000원", kit: "본체, 컨트롤러 2개, 충전 케이블", description: "몰입감 있는 VR 경험을 즐길 수 있는 대표 기기입니다. 가벼운 착용감과 선명한 화면으로 체험형 게임에 적합합니다.", image: "assets/meta-quest.png" },
  { id: "pico-4", name: "PICO 4", type: "VR 기기", category: "VR 기기", price: "1일 7,000원", kit: "본체, 컨트롤러 2개, 안면 패드, 충전 케이블", description: "간단한 설정으로 VR 콘텐츠를 즐길 수 있는 실속형 VR 기기입니다.", image: "assets/meta-quest.png" },
  { id: "valve-index", name: "Valve Index", type: "VR 기기", category: "VR 기기", price: "1일 12,000원", kit: "헤드셋, 컨트롤러, 베이스 스테이션", description: "정밀한 트래킹과 높은 몰입감을 원하는 사용자에게 적합한 프리미엄 VR 기기입니다.", image: "assets/valve-index.png" },
  { id: "nintendo-switch", name: "스위치 본체", type: "스위치/플스", category: "콘솔", price: "1일 6,000원", kit: "본체, 조이콘, 독, HDMI 케이블, 충전기", description: "가족, 친구와 함께 즐기기 좋은 콘솔입니다. TV 연결과 휴대 모드를 모두 지원합니다.", image: "assets/nintendo-switch.png" },
  { id: "ps5-game-set", name: "PS5 게임 세트", type: "스위치/플스", category: "콘솔", price: "1일 3,000원", kit: "게임 타이틀, 보관 케이스", description: "플레이스테이션 인기 타이틀을 필요한 기간만 골라 이용할 수 있습니다.", image: "assets/ps5-game.png" },
  { id: "mario-kart", name: "마리오 카트", type: "게임 칩", category: "게임 칩", price: "1일 2,000원", kit: "게임 칩, 케이스", description: "여럿이 함께 즐기기 좋은 대표 레이싱 게임입니다.", image: "assets/mario-kart.png" },
  { id: "animal-crossing", name: "동물의 숲", type: "게임 칩", category: "게임 칩", price: "1일 2,000원", kit: "게임 칩, 케이스", description: "편안한 분위기의 섬 생활을 즐길 수 있는 인기 타이틀입니다.", image: "assets/animal-crossing.png" },
  { id: "zelda", name: "젤다의 전설", type: "게임 칩", category: "게임 칩", price: "1일 2,500원", kit: "게임 칩, 케이스", description: "모험과 퍼즐을 좋아하는 사용자에게 추천하는 액션 어드벤처 게임입니다.", image: "assets/animal-crossing.png" }
];

const products = Array.isArray(window.PLAYPICK_PRODUCTS) && window.PLAYPICK_PRODUCTS.length
  ? window.PLAYPICK_PRODUCTS
  : fallbackProducts;

const rentalSteps = [
  ["상품 선택", "대여할 상품을 선택합니다.", "icon-vr"],
  ["기간 선택", "대여 기간을 선택합니다.", "icon-calendar"],
  ["결제", "결제를 진행합니다.", "icon-card"],
  ["본점 픽업", "본점에서 상품을 픽업합니다.", "icon-store"],
  ["이용", "선택한 기간 동안 상품을 이용합니다.", "icon-gamepad"],
  ["반납", "반납 기한 내에 상품을 반납합니다.", "icon-return"]
];

const serviceSteps = [
  ["대여 신청", "이용 가이드를 확인 후 신청", "icon-list"],
  ["대여 가능 여부 조회", "기간 및 수량 확인", "icon-check"],
  ["대여 기간 선택", "1일 / 7일 / 15일 / 30일", "icon-calendar"],
  ["상품 선택", "옵션 및 구성품 선택", "icon-chip"],
  ["신청 정보 입력", "픽업 일정, 연락처 등", "icon-user"],
  ["결제 진행", "결제 방법 및 결제 수단", "icon-card"]
];

let adminUsers = [
  { userId: "U-1001", name: "김민지", email: "minji@playpick.kr", phone: "010-3482-1900", birth: "1998.04.12", createdAt: "2026.05.18" },
  { userId: "U-1002", name: "박도윤", email: "doyun@playpick.kr", phone: "010-7744-2201", birth: "2001.09.07", createdAt: "2026.05.22" },
  { userId: "U-1003", name: "이서연", email: "seoyeon@playpick.kr", phone: "010-9013-4472", birth: "1997.12.03", createdAt: "2026.05.28" },
  { userId: "U-1004", name: "최준호", email: "junho@playpick.kr", phone: "010-5520-1188", birth: "1999.02.19", createdAt: "2026.06.01" }
];

let adminRentals = [
  { rentalId: "R-202606-001", userId: "U-1001", productNumber: "MQ-03-2312-001", productName: "Meta Quest 3", orderState: "대여중", startDate: "2026.06.06", returnDate: "2026.06.15", paymentId: "PAY-202606-001", methodType: "카드", amount: "110,000원", damagedFee: "0원", overdueFee: "0원" },
  { rentalId: "R-202606-002", userId: "U-1002", productNumber: "PS-SP2-2310-001", productName: "마블 스파이더맨 2", orderState: "반납완료", startDate: "2026.06.01", returnDate: "2026.06.02", paymentId: "PAY-202606-002", methodType: "간편결제", amount: "3,000원", damagedFee: "0원", overdueFee: "0원" },
  { rentalId: "R-202606-003", userId: "U-1003", productNumber: "HAC-P-AXN7A", productName: "젤다의 전설: 티어스 오브 더 킹덤", orderState: "파손", startDate: "2026.06.03", returnDate: "2026.06.08", paymentId: "PAY-202606-003", methodType: "카드", amount: "17,500원", damagedFee: "35,000원", overdueFee: "0원" },
  { rentalId: "R-202606-004", userId: "U-1004", productNumber: "HEG-001-01", productName: "닌텐도 스위치 OLED 모델", orderState: "결제완료", startDate: "2026.06.10", returnDate: "2026.06.25", paymentId: "PAY-202606-004", methodType: "카드", amount: "72,000원", damagedFee: "0원", overdueFee: "0원" },
  { rentalId: "R-202606-005", userId: "U-1001", productNumber: "SN-P2-2305-001", productName: "Sony PSVR 2", orderState: "연체", startDate: "2026.05.27", returnDate: "2026.06.05", paymentId: "PAY-202606-005", methodType: "간편결제", amount: "110,000원", damagedFee: "0원", overdueFee: "12,000원" }
];

let adminInquiries = [
  { inquiryId: "INQ-202606-001", userId: "U-1001", rentalId: "R-202606-001", text: "Meta Quest 3 컨트롤러 배터리가 빨리 닳는 것 같습니다.", answer: "예비 배터리와 교체 컨트롤러를 준비해두겠습니다.", status: "답변완료" },
  { inquiryId: "INQ-202606-002", userId: "U-1003", rentalId: "R-202606-003", text: "게임 칩 케이스 모서리가 깨져 있었는데 확인 부탁드립니다.", answer: "파손 접수 후 사진 확인 중입니다.", status: "처리중" },
  { inquiryId: "INQ-202606-003", userId: "U-1004", rentalId: "R-202606-004", text: "픽업 시간을 오후 7시로 변경할 수 있을까요?", answer: "", status: "답변대기" }
];

const adminEntities = [
  ["User", "User id (PK)", "email, password, name, phone, birth, created_at"],
  ["Product", "Product number (PK)", "category, brand, model, platform, features, inventory quantity"],
  ["Rental Order", "Rental id (PK)", "user id (FK), order state, start date, return date"],
  ["Rental Detail", "Rental id + Product number", "product number (FK), damaged fee, overdue fee"],
  ["Payment", "Payment id (PK)", "method id, method type, amount"],
  ["Inquiry", "Inquiry id (PK)", "user id, rental id, text, answer, status"]
];

const supabaseConfig = window.PLAYPICK_SUPABASE || {};
const hasSupabaseConfig = Boolean(supabaseConfig.url && supabaseConfig.anonKey && window.supabase);
const supabaseClient = hasSupabaseConfig
  ? window.supabase.createClient(supabaseConfig.url, supabaseConfig.anonKey)
  : null;
const currentUserId = supabaseConfig.currentUserId || "U-1001";

const pages = [...document.querySelectorAll("[data-page]")];
const routeLinks = [...document.querySelectorAll("[data-route]")];
const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const toast = document.querySelector(".toast");
let selectedProduct = products[0];
let toastTimer;

function icon(id) {
  return `<svg aria-hidden="true"><use href="#${id}"></use></svg>`;
}

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function compactProductText(product) {
  return [
    product.name,
    product.type,
    product.category,
    product.platform,
    product.genre,
    product.brand,
    product.model,
    product.code,
    product.feature,
  ].filter(Boolean).join(" ");
}

function productSpecItems(product) {
  const priceRows = product.prices
    ? [
        ["1일 요금", product.prices.day],
        ["15일 요금", product.prices.fifteen],
        ["30일 요금", product.prices.thirty],
      ]
    : [];

  return [
    ["상품 코드", product.code],
    ["브랜드", product.brand],
    ["모델명", product.model],
    ["보유 수량", product.stock],
    ["특징", product.feature],
    ["플랫폼", product.platform],
    ["장르", product.genre],
    ["이용가", product.age],
    ["인원수", product.players],
    ["메인 스토리", product.timeMain ? `${product.timeMain}시간` : ""],
    ["완벽 클리어", product.timeClear ? `${product.timeClear}시간` : ""],
    ["출시일", product.releaseDate],
    ["메타스코어", product.metascore],
    ...priceRows,
    ["제품 번호", product.codes],
  ].filter(([, value]) => value);
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("show");
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2400);
}

function productCard(product) {
  return `
    <article class="product-card" data-product="${escapeHtml(compactProductText(product))}">
      <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)} 상품 사진">
      <div class="product-card-body">
        <span class="type">${escapeHtml(product.type)}</span>
        <strong>${escapeHtml(product.name)}</strong>
        <span class="price">${escapeHtml(product.price)}</span>
        <button type="button" data-detail-product="${escapeHtml(product.id)}">상세보기</button>
      </div>
    </article>
  `;
}

function renderProducts() {
  const popular = products.slice(0, 4).map(productCard).join("");
  document.querySelectorAll(".popular-products").forEach((target) => target.innerHTML = popular);
  document.querySelectorAll(".all-products, .search-products").forEach((target) => target.innerHTML = products.map(productCard).join(""));
  document.querySelectorAll(".category-products").forEach((target) => {
    const categories = target.dataset.category.split(",").map((category) => category.trim());
    target.innerHTML = products.filter((product) => categories.includes(product.category)).map(productCard).join("");
  });
}

function processStep([title, description, iconId], index) {
  return `
    <article class="process-step">
      <span class="process-num">${String(index + 1).padStart(2, "0")}</span>
      ${icon(iconId)}
      <strong>${title}</strong>
      <span>${description}</span>
    </article>
  `;
}

function renderSteps() {
  document.querySelector(".six-steps").innerHTML = rentalSteps.map(processStep).join("");
  document.querySelector(".service-steps").innerHTML = serviceSteps.map(processStep).join("");
}

function adminUser(userId) {
  return adminUsers.find((user) => user.userId === userId) || { userId, name: "미확인 사용자", email: "-", phone: "-" };
}

function statusClass(status) {
  if (["대여중", "처리중", "연체"].includes(status)) return "is-active";
  if (["반납완료", "답변완료"].includes(status)) return "is-done";
  if (["파손"].includes(status)) return "is-danger";
  if (["답변대기", "결제완료"].includes(status)) return "is-waiting";
  return "";
}

function moneyNumber(value = "0") {
  return Number(String(value).replace(/[^0-9]/g, "")) || 0;
}

function todayText() {
  return new Date().toISOString().slice(0, 10);
}

function userRentals(userId = currentUserId) {
  return adminRentals.filter((rental) => rental.userId === userId);
}

function normalizeProfile(row) {
  return {
    userId: row.user_id,
    name: row.name,
    email: row.email,
    phone: row.phone,
    birth: row.birth || "-",
    createdAt: row.created_at ? row.created_at.slice(0, 10) : "-"
  };
}

function normalizeRental(row, detail, payment) {
  return {
    rentalId: row.rental_id,
    userId: row.user_id,
    productNumber: detail?.product_number || "-",
    productName: detail?.product_name || "-",
    orderState: row.order_state,
    startDate: row.start_date,
    returnDate: row.return_date,
    paymentId: row.payment_id || payment?.payment_id || "-",
    methodType: payment?.method_type || "-",
    amount: payment ? `${Number(payment.amount || 0).toLocaleString()}원` : "0원",
    damagedFee: `${Number(detail?.damaged_fee || 0).toLocaleString()}원`,
    overdueFee: `${Number(detail?.overdue_fee || 0).toLocaleString()}원`
  };
}

function normalizeInquiry(row) {
  return {
    inquiryId: row.inquiry_id,
    userId: row.user_id,
    rentalId: row.rental_id,
    text: row.text,
    answer: row.answer || "",
    status: row.status
  };
}

async function loadDatabaseData() {
  if (!supabaseClient) return;

  try {
    const [{ data: profiles }, { data: orders }, { data: details }, { data: payments }, { data: inquiries }] = await Promise.all([
      supabaseClient.from("profiles").select("*"),
      supabaseClient.from("rental_orders").select("*").order("created_at", { ascending: false }),
      supabaseClient.from("rental_details").select("*"),
      supabaseClient.from("payments").select("*"),
      supabaseClient.from("inquiries").select("*").order("created_at", { ascending: false })
    ]);

    if (profiles?.length) adminUsers = profiles.map(normalizeProfile);
    if (orders?.length) {
      adminRentals = orders.map((order) => normalizeRental(
        order,
        details?.find((detail) => detail.rental_id === order.rental_id),
        payments?.find((payment) => payment.payment_id === order.payment_id)
      ));
    }
    if (inquiries?.length) adminInquiries = inquiries.map(normalizeInquiry);

    renderAdminDashboard();
    renderMyPage();
    showToast("Supabase 데이터가 연결되었습니다.");
  } catch (error) {
    console.error(error);
    showToast("Supabase 연결 전 샘플 데이터로 표시 중입니다.");
  }
}

async function saveRentalToDatabase(form) {
  if (!supabaseClient) return false;

  const formData = new FormData(form);
  const now = Date.now();
  const rentalId = `R-${now}`;
  const paymentId = `PAY-${now}`;
  const userName = formData.get("name") || "PlayPICK 사용자";
  const phone = formData.get("phone") || "";
  const startDate = formData.get("pickupDate") || todayText();
  const returnDate = startDate;
  const amount = moneyNumber(selectedProduct.prices?.day || selectedProduct.price);
  const productNumber = selectedProduct.code || selectedProduct.id;

  const { error: profileError } = await supabaseClient.from("profiles").upsert({
    user_id: currentUserId,
    email: `${currentUserId.toLowerCase()}@playpick.local`,
    name: userName,
    phone,
    birth: null
  });
  if (profileError) throw profileError;

  const { error: orderError } = await supabaseClient.from("rental_orders").insert({
    rental_id: rentalId,
    user_id: currentUserId,
    payment_id: null,
    order_state: "결제완료",
    start_date: startDate,
    return_date: returnDate
  });
  if (orderError) throw orderError;

  const { error: paymentError } = await supabaseClient.from("payments").insert({
    payment_id: paymentId,
    rental_id: rentalId,
    method_id: "manual-demo",
    method_type: "현장결제",
    amount
  });
  if (paymentError) throw paymentError;

  const { error: orderPaymentError } = await supabaseClient.from("rental_orders").update({
    payment_id: paymentId
  }).eq("rental_id", rentalId);
  if (orderPaymentError) throw orderPaymentError;

  const { error: detailError } = await supabaseClient.from("rental_details").insert({
    rental_id: rentalId,
    product_number: productNumber,
    product_name: selectedProduct.name,
    damaged_fee: 0,
    overdue_fee: 0
  });
  if (detailError) throw detailError;

  await loadDatabaseData();
  return true;
}

function renderAdminDashboard() {
  const statTarget = document.querySelector(".admin-stat-grid");
  if (!statTarget) return;

  const activeCount = adminRentals.filter((rental) => rental.orderState === "대여중").length;
  const returnedCount = adminRentals.filter((rental) => rental.orderState === "반납완료").length;
  const damagedCount = adminRentals.filter((rental) => rental.orderState === "파손").length;
  const pendingInquiryCount = adminInquiries.filter((inquiry) => inquiry.status !== "답변완료").length;
  const productCount = products.length;

  statTarget.innerHTML = [
    ["전체 상품", productCount, "Product"],
    ["대여중", activeCount, "Rental Order"],
    ["반납완료", returnedCount, "Rental Detail"],
    ["파손 접수", damagedCount, "Damaged fee"],
    ["문의 대기", pendingInquiryCount, "Inquiry"]
  ].map(([label, value, entity]) => `
    <article class="admin-stat-card">
      <span>${escapeHtml(entity)}</span>
      <strong>${escapeHtml(value)}</strong>
      <em>${escapeHtml(label)}</em>
    </article>
  `).join("");

  document.querySelector(".admin-entity-grid").innerHTML = adminEntities.map(([name, key, attrs]) => `
    <article class="admin-entity-card">
      <span>${escapeHtml(key)}</span>
      <strong>${escapeHtml(name)}</strong>
      <p>${escapeHtml(attrs)}</p>
    </article>
  `).join("");

  document.querySelector(".admin-rental-rows").innerHTML = adminRentals.map((rental) => {
    const user = adminUser(rental.userId);
    return `
      <tr>
        <td><strong>${escapeHtml(rental.rentalId)}</strong><span>${escapeHtml(rental.paymentId)}</span></td>
        <td><strong>${escapeHtml(user.name)}</strong><span>${escapeHtml(user.userId)} · ${escapeHtml(user.phone)}</span></td>
        <td><strong>${escapeHtml(rental.productName)}</strong><span>${escapeHtml(rental.productNumber)}</span></td>
        <td><span class="status-badge ${statusClass(rental.orderState)}">${escapeHtml(rental.orderState)}</span></td>
        <td><strong>${escapeHtml(rental.startDate)}</strong><span>반납 예정 ${escapeHtml(rental.returnDate)}</span></td>
        <td><strong>${escapeHtml(rental.amount)}</strong><span>${escapeHtml(rental.methodType)}</span></td>
        <td><strong>파손 ${escapeHtml(rental.damagedFee)}</strong><span>연체 ${escapeHtml(rental.overdueFee)}</span></td>
      </tr>
    `;
  }).join("");

  document.querySelector(".admin-inquiry-rows").innerHTML = adminInquiries.map((inquiry) => {
    const user = adminUser(inquiry.userId);
    return `
      <tr>
        <td><strong>${escapeHtml(inquiry.inquiryId)}</strong></td>
        <td><strong>${escapeHtml(user.name)}</strong><span>${escapeHtml(inquiry.rentalId)}</span></td>
        <td>${escapeHtml(inquiry.text)}</td>
        <td>${escapeHtml(inquiry.answer || "아직 답변이 등록되지 않았습니다.")}</td>
        <td><span class="status-badge ${statusClass(inquiry.status)}">${escapeHtml(inquiry.status)}</span></td>
      </tr>
    `;
  }).join("");
}

function emptyRow(message, columns) {
  return `<tr><td colspan="${columns}" class="empty-table-cell">${escapeHtml(message)}</td></tr>`;
}

function rentalRow(rental, mode) {
  if (mode === "returned") {
    return `
      <tr>
        <td><strong>${escapeHtml(rental.productName)}</strong><span>${escapeHtml(rental.productNumber)}</span></td>
        <td><strong>${escapeHtml(rental.returnDate)}</strong><span>${escapeHtml(rental.rentalId)}</span></td>
        <td><strong>${escapeHtml(rental.amount)}</strong><span>${escapeHtml(rental.methodType)}</span></td>
        <td><span class="status-badge ${statusClass(rental.orderState)}">${escapeHtml(rental.orderState)}</span></td>
      </tr>
    `;
  }

  if (mode === "issue") {
    const issueType = rental.orderState === "파손" ? "파손" : "연체";
    return `
      <tr>
        <td><strong>${escapeHtml(rental.productName)}</strong><span>${escapeHtml(rental.productNumber)}</span></td>
        <td><span class="status-badge ${statusClass(rental.orderState)}">${escapeHtml(issueType)}</span></td>
        <td><strong>${escapeHtml(rental.returnDate)}</strong><span>${escapeHtml(rental.rentalId)}</span></td>
        <td><strong>${escapeHtml(rental.overdueFee)}</strong></td>
        <td><strong>${escapeHtml(rental.damagedFee)}</strong></td>
      </tr>
    `;
  }

  return `
    <tr>
      <td><strong>${escapeHtml(rental.productName)}</strong><span>${escapeHtml(rental.productNumber)}</span></td>
      <td><span class="status-badge ${statusClass(rental.orderState)}">${escapeHtml(rental.orderState)}</span></td>
      <td><strong>${escapeHtml(rental.startDate)}</strong><span>반납 예정 ${escapeHtml(rental.returnDate)}</span></td>
      <td><strong>${escapeHtml(rental.amount)}</strong><span>${escapeHtml(rental.methodType)}</span></td>
      <td><strong>연체 ${escapeHtml(rental.overdueFee)}</strong><span>파손 ${escapeHtml(rental.damagedFee)}</span></td>
    </tr>
  `;
}

function renderMyPage() {
  const profileTarget = document.querySelector(".mypage-profile-card");
  if (!profileTarget) return;

  const user = adminUser(currentUserId);
  const rentals = userRentals(currentUserId);
  const currentRentals = rentals.filter((rental) => ["대여중", "결제완료", "연체"].includes(rental.orderState));
  const returnedRentals = rentals.filter((rental) => rental.orderState === "반납완료");
  const issueRentals = rentals.filter((rental) => rental.orderState === "연체" || rental.orderState === "파손" || moneyNumber(rental.overdueFee) > 0 || moneyNumber(rental.damagedFee) > 0);
  const inquiries = adminInquiries.filter((inquiry) => inquiry.userId === currentUserId);

  document.querySelector(".mypage-user-id").textContent = user.userId;
  profileTarget.innerHTML = `
    <article>
      <span>이름</span>
      <strong>${escapeHtml(user.name)}</strong>
    </article>
    <article>
      <span>연락처</span>
      <strong>${escapeHtml(user.phone)}</strong>
    </article>
    <article>
      <span>이메일</span>
      <strong>${escapeHtml(user.email)}</strong>
    </article>
    <article>
      <span>가입일</span>
      <strong>${escapeHtml(user.createdAt)}</strong>
    </article>
  `;

  document.querySelector(".mypage-stat-grid").innerHTML = [
    ["현재 대여", currentRentals.length],
    ["반납 완료", returnedRentals.length],
    ["연체/파손", issueRentals.length],
    ["문의", inquiries.length]
  ].map(([label, value]) => `
    <article class="admin-stat-card">
      <span>My Page</span>
      <strong>${escapeHtml(value)}</strong>
      <em>${escapeHtml(label)}</em>
    </article>
  `).join("");

  document.querySelector(".mypage-current-rows").innerHTML = currentRentals.length
    ? currentRentals.map((rental) => rentalRow(rental, "current")).join("")
    : emptyRow("현재 빌리고 있는 상품이 없습니다.", 5);
  document.querySelector(".mypage-returned-rows").innerHTML = returnedRentals.length
    ? returnedRentals.map((rental) => rentalRow(rental, "returned")).join("")
    : emptyRow("반납 완료 내역이 없습니다.", 4);
  document.querySelector(".mypage-issue-rows").innerHTML = issueRentals.length
    ? issueRentals.map((rental) => rentalRow(rental, "issue")).join("")
    : emptyRow("연체/파손 내역이 없습니다.", 5);
  document.querySelector(".mypage-inquiry-rows").innerHTML = inquiries.length
    ? inquiries.map((inquiry) => `
      <tr>
        <td><strong>${escapeHtml(inquiry.inquiryId)}</strong></td>
        <td><strong>${escapeHtml(inquiry.rentalId)}</strong></td>
        <td>${escapeHtml(inquiry.text)}</td>
        <td>${escapeHtml(inquiry.answer || "아직 답변이 등록되지 않았습니다.")}</td>
        <td><span class="status-badge ${statusClass(inquiry.status)}">${escapeHtml(inquiry.status)}</span></td>
      </tr>
    `).join("")
    : emptyRow("등록된 문의사항이 없습니다.", 5);
}

function renderDetail(product = selectedProduct) {
  selectedProduct = product;
  document.querySelector(".detail-image").src = product.image;
  document.querySelector(".detail-image").alt = `${product.name} 상세 이미지`;
  document.querySelector(".detail-type").textContent = product.type;
  document.querySelector(".detail-name").textContent = product.name;
  document.querySelector(".detail-description").textContent = product.description;
  document.querySelector(".detail-price").textContent = product.prices?.day || product.price.replace("1일 ", "");
  document.querySelector(".detail-kit").textContent = product.kit;
  const detailSpecs = document.querySelector(".detail-specs");
  if (detailSpecs) {
    detailSpecs.innerHTML = productSpecItems(product).map(([label, value]) => `
      <div>
        <strong>${escapeHtml(label)}</strong>
        <span>${escapeHtml(value)}</span>
      </div>
    `).join("");
  }
  document.querySelector(".form-product-label").textContent = product.name;
  document.querySelector(".rental-form")?.reset();
}

function setRoute(route, shouldScroll = true) {
  const safeRoute = document.querySelector(`[data-page="${route}"]`) ? route : "home";
  pages.forEach((page) => page.classList.toggle("active", page.dataset.page === safeRoute));
  routeLinks.forEach((link) => link.classList.toggle("active", link.dataset.route === safeRoute));
  document.body.dataset.route = safeRoute;
  header.classList.remove("open");
  if (location.hash.slice(1) !== safeRoute) {
    history.replaceState(null, "", `#${safeRoute}`);
  }
  if (shouldScroll) window.scrollTo({ top: 0, behavior: "smooth" });
}

function filterSearch() {
  const input = document.querySelector("#product-search");
  if (!input) return;
  const query = input.value.trim().toLowerCase();
  const cards = [...document.querySelectorAll(".search-products .product-card")];
  let count = 0;
  cards.forEach((card) => {
    const visible = !query || card.dataset.product.toLowerCase().includes(query);
    card.hidden = !visible;
    if (visible) count += 1;
  });
  document.querySelector(".search-result-label").textContent = query
    ? `${count}개 상품이 검색되었습니다.`
    : "전체 상품을 표시 중입니다.";
}

function showRentalComplete() {
  const completion = document.querySelector(".completion-panel");
  completion.querySelector(".complete-summary").textContent = `${selectedProduct.name} 대여 신청이 접수되었습니다. 담당자가 대여 가능 여부를 확인한 뒤 안내드릴 예정입니다.`;
  setRoute("complete");
  showToast("신청되었습니다!");
}

async function submitRentalForm(form) {
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  try {
    await saveRentalToDatabase(form);
  } catch (error) {
    console.error(error);
    showToast("DB 저장 실패: Supabase 설정을 확인해주세요.");
    return;
  }
  showRentalComplete();
}

document.addEventListener("click", (event) => {
  const detailButton = event.target.closest("[data-detail-product]");
  if (detailButton) {
    const product = products.find((item) => item.id === detailButton.dataset.detailProduct) || products[0];
    renderDetail(product);
    setRoute("detail");
  }

  const rentStartButton = event.target.closest(".rent-start-button");
  if (rentStartButton) {
    document.querySelector(".form-product-label").textContent = selectedProduct.name;
    setRoute("rental");
  }

  const submitButton = event.target.closest(".submit-rental-button");
  if (submitButton) {
    event.preventDefault();
    submitRentalForm(submitButton.closest("form"));
  }

  const routeLink = event.target.closest("[data-route]");
  if (routeLink) {
    event.preventDefault();
    setRoute(routeLink.dataset.route);
  }
});

menuToggle.addEventListener("click", () => {
  header.classList.toggle("open");
});

window.addEventListener("hashchange", () => {
  setRoute(location.hash.slice(1), false);
});

renderProducts();
renderSteps();
renderAdminDashboard();
renderMyPage();
renderDetail(selectedProduct);
setRoute(location.hash.slice(1) || "home", false);
loadDatabaseData();

document.querySelector("#product-search")?.addEventListener("input", filterSearch);

document.querySelector(".rental-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  submitRentalForm(event.currentTarget);
});
