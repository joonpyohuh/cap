const products = [
  { name: "Meta Quest 3", type: "VR 기기", category: "VR 기기", price: "1일 8,000원", image: "assets/meta-quest.png" },
  { name: "PICO 4", type: "VR 기기", category: "VR 기기", price: "1일 7,000원", image: "assets/meta-quest.png" },
  { name: "Valve Index", type: "VR 기기", category: "VR 기기", price: "1일 12,000원", image: "assets/valve-index.png" },
  { name: "스위치 본체", type: "스위치/플스", category: "콘솔", price: "1일 6,000원", image: "assets/nintendo-switch.png" },
  { name: "PS5 게임 세트", type: "스위치/플스", category: "콘솔", price: "1일 3,000원", image: "assets/ps5-game.png" },
  { name: "마리오 카트", type: "게임 칩", category: "게임 칩", price: "1일 2,000원", image: "assets/mario-kart.png" },
  { name: "동물의 숲", type: "게임 칩", category: "게임 칩", price: "1일 2,000원", image: "assets/animal-crossing.png" },
  { name: "젤다의 전설", type: "게임 칩", category: "게임 칩", price: "1일 2,500원", image: "assets/animal-crossing.png" }
];

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
let toastTimer;

function icon(id) {
  return `<svg aria-hidden="true"><use href="#${id}"></use></svg>`;
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("show");
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2400);
}

function productCard(product) {
  return `
    <article class="product-card" data-product="${product.name} ${product.type}">
      <img src="${product.image}" alt="${product.name} 상품사진">
      <div class="product-card-body">
        <span class="type">${product.type}</span>
        <strong>${product.name}</strong>
        <span class="price">${product.price}</span>
        <button type="button" data-reservation-disabled>상세보기</button>
      </div>
    </article>
  `;
}

function renderProducts() {
  const popular = products.slice(0, 4).map(productCard).join("");
  document.querySelectorAll(".popular-products").forEach((target) => target.innerHTML = popular);
  document.querySelectorAll(".all-products, .search-products").forEach((target) => target.innerHTML = products.map(productCard).join(""));
  document.querySelectorAll(".category-products").forEach((target) => {
    const category = target.dataset.category;
    target.innerHTML = products.filter((product) => product.category === category).map(productCard).join("");
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

document.addEventListener("click", (event) => {
  const routeLink = event.target.closest("[data-route]");
  if (routeLink) {
    event.preventDefault();
    setRoute(routeLink.dataset.route);
  }

  if (event.target.closest("[data-reservation-disabled]")) {
    showToast("대여예약/결제 페이지는 이번 제작 범위에서 제외되었습니다.");
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
setRoute(location.hash.slice(1) || "home", false);

document.querySelector("#product-search")?.addEventListener("input", filterSearch);
