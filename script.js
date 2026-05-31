const panels = [...document.querySelectorAll(".tab-panel")];
const navButtons = [...document.querySelectorAll("[data-tab]")];
const contextLabel = document.querySelector("#page-context");
const contentArea = document.querySelector(".content");
const toast = document.querySelector("#toast");
const searchInput = document.querySelector("#product-search");
const searchStatus = document.querySelector("#search-status");
const filterButtons = [...document.querySelectorAll("[data-category-filter]")];
const rentalItems = [...document.querySelectorAll("[data-rental-item]")];
const selectedProduct = document.querySelector("#selected-product");
const selectedProductPill = document.querySelector("#selected-product-pill");
let activeCategory = "전체";
let toastTimer;

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("show");
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2400);
}

function switchTab(tabId, shouldScroll = true) {
  const panel = document.getElementById(tabId);
  if (!panel) return;

  panels.forEach((item) => item.classList.toggle("active", item.id === tabId));
  navButtons.forEach((button) => button.classList.toggle("active", button.dataset.tab === tabId));
  contextLabel.textContent = panel.dataset.title || "Home";

  if (shouldScroll) {
    contentArea.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function normalize(value) {
  return value.trim().toLowerCase();
}

function applyProductFilter() {
  const query = normalize(searchInput.value);
  let visibleCount = 0;

  rentalItems.forEach((item) => {
    const category = item.dataset.category;
    const searchableText = normalize(`${item.dataset.name} ${category} ${item.textContent}`);
    const categoryMatch = activeCategory === "전체" || category === activeCategory;
    const queryMatch = !query || searchableText.includes(query);
    const visible = categoryMatch && queryMatch;

    item.hidden = !visible;
    if (visible) visibleCount += 1;
  });

  searchStatus.textContent = query
    ? `${visibleCount}개 상품이 검색되었습니다.`
    : "카테고리별 필터로 원하는 상품을 찾아보세요.";
}

function setCategoryFilter(category) {
  activeCategory = category;
  filterButtons.forEach((button) => button.classList.toggle("active", button.dataset.categoryFilter === category));
  applyProductFilter();
}

function selectProduct(name, price) {
  selectedProduct.value = name;
  selectedProductPill.textContent = `1일 ${price}`;
  showToast(`${name} 상품이 선택되었습니다.`);
}

document.addEventListener("click", (event) => {
  const navTarget = event.target.closest("[data-nav]");
  if (navTarget) {
    event.preventDefault();
    switchTab(navTarget.dataset.nav);
  }

  const scrollTarget = event.target.closest("[data-scroll]");
  if (scrollTarget) {
    const target = document.getElementById(scrollTarget.dataset.scroll);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const categoryTile = event.target.closest("[data-filter]");
  if (categoryTile) {
    const filter = categoryTile.dataset.filter === "스위치/플스" ? "닌텐도 스위치" : categoryTile.dataset.filter;
    switchTab("rental-tab");
    setCategoryFilter(filter);
  }
});

navButtons.forEach((button) => {
  button.addEventListener("click", () => switchTab(button.dataset.tab));
});

document.querySelectorAll("[data-quick]").forEach((button) => {
  button.addEventListener("click", () => {
    const quick = button.dataset.quick;

    if (quick === "search") {
      switchTab("rental-tab");
      window.setTimeout(() => searchInput.focus(), 220);
    }

    if (quick === "mypage") {
      switchTab("more-tab");
    }

    if (quick === "cs") {
      switchTab("more-tab");
      window.setTimeout(() => document.querySelector("#support-section").scrollIntoView({ behavior: "smooth" }), 220);
    }
  });
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => setCategoryFilter(button.dataset.categoryFilter));
});

searchInput.addEventListener("input", applyProductFilter);

rentalItems.forEach((item) => {
  item.querySelector("button").addEventListener("click", () => {
    selectProduct(item.dataset.name, item.dataset.price);
    document.querySelector("#rent-form").scrollIntoView({ behavior: "smooth", block: "center" });
  });
});

document.querySelectorAll("[data-product-card]").forEach((card) => {
  card.addEventListener("click", () => {
    switchTab("rental-tab");
    setCategoryFilter(card.dataset.category);
    selectProduct(card.dataset.name, card.dataset.price);
  });
});

document.querySelector("#rent-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const product = form.get("product");
  const period = form.get("period");
  showToast(`${product} ${period} 대여 신청이 접수되었습니다.`);
});

document.querySelectorAll("[data-history-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.historyFilter;
    document.querySelectorAll("[data-history-filter]").forEach((item) => item.classList.toggle("active", item === button));
    document.querySelectorAll("[data-history-panel]").forEach((panel) => {
      panel.classList.toggle("active", panel.dataset.historyPanel === filter);
    });
  });
});

applyProductFilter();
