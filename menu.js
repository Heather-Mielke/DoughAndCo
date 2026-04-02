import { menuItems } from "./menu-items.js";

const FILTER_VALUES = [
  "all",
  "donuts",
  "pastries",
  "muffins-breads",
  "cookies",
  "drinks",
];

function renderMenuCards() {
  const grid = document.getElementById("menu-grid");
  if (!grid) return;

  grid.replaceChildren();

  for (const item of menuItems) {
    const article = document.createElement("article");
    article.className = item.wide ? "menu-card menu-card--wide" : "menu-card";
    article.setAttribute("data-menu-category", item.category);

    const media = document.createElement("div");
    media.className = "menu-card__media";

    const img = document.createElement("img");
    img.className = "menu-card__img";
    img.src = item.image;
    img.alt = `${item.title}.`;
    img.loading = "lazy";
    img.width = 600;
    img.height = 600;
    media.appendChild(img);

    if (item.badge) {
      const badge = document.createElement("span");
      badge.className = "menu-card__badge";
      badge.textContent = item.badge;
      media.appendChild(badge);
    }

    const body = document.createElement("div");
    body.className = "menu-card__body";

    const row = document.createElement("div");
    row.className = "menu-card__row";

    const title = document.createElement("h2");
    title.className = "menu-card__title";
    title.textContent = item.title;

    const price = document.createElement("span");
    price.className = "menu-card__price";
    price.textContent = item.price;

    row.append(title, price);

    const desc = document.createElement("p");
    desc.className = "menu-card__desc";
    desc.textContent = item.description;

    body.append(row, desc);
    article.append(media, body);
    grid.append(article);
  }
}

function applyFilter(selected) {
  const grid = document.getElementById("menu-grid");
  if (!grid) return;

  grid.querySelectorAll(".menu-card").forEach((card) => {
    const cat = (card.getAttribute("data-menu-category") || "").trim();
    const show = selected === "all" || cat === selected;
    card.classList.toggle("menu-card--hidden", !show);
    card.hidden = !show;
  });
}

function initFilters() {
  const root = document.querySelector("[data-menu-page]");
  if (!root) return;

  const filters = root.querySelectorAll("[data-menu-filter]");

  function setActiveFilter(value) {
    filters.forEach((b) => {
      const f = b.getAttribute("data-menu-filter");
      const isOn = f === value;
      b.classList.toggle("menu-filter--active", isOn);
      b.setAttribute("aria-selected", isOn ? "true" : "false");
    });
  }

  function syncHash(value) {
    if (!window.history.replaceState) return;
    const url = new URL(window.location.href);
    url.hash = value === "all" ? "" : value;
    window.history.replaceState(null, "", url.pathname + url.search + url.hash);
  }

  filters.forEach((btn) => {
    btn.addEventListener("click", () => {
      const selected = btn.getAttribute("data-menu-filter");
      if (!selected || !FILTER_VALUES.includes(selected)) return;

      setActiveFilter(selected);
      applyFilter(selected);
      syncHash(selected);
    });
  });

  function applyFromHash() {
    const raw = (window.location.hash || "").replace(/^#/, "").trim();
    const selected =
      raw && FILTER_VALUES.includes(raw) && raw !== "all" ? raw : "all";
    setActiveFilter(selected);
    applyFilter(selected);
  }

  window.addEventListener("hashchange", () => {
    applyFromHash();
  });

  applyFromHash();
}

renderMenuCards();
initFilters();
