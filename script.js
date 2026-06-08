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

function submitRentalForm(form) {
  if (!form.checkValidity()) {
    form.reportValidity();
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
renderDetail(selectedProduct);
setRoute(location.hash.slice(1) || "home", false);

document.querySelector("#product-search")?.addEventListener("input", filterSearch);

document.querySelector(".rental-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  submitRentalForm(event.currentTarget);
});
