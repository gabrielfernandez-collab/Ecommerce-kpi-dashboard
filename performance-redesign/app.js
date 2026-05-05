const products = [
  {
    id: "hydra",
    name: "Hydra Bottle 24oz",
    price: 34,
    summary: "High-demand hydration SKU with guarded stock messaging.",
    tag: "Stockout risk",
    mode: ["fast", "risk"],
    stockDays: 9,
    stockColor: "#d44b5f",
    image: "./assets/product-bottle.jpg",
    imageAlt: "Green reusable bottle on a bright product surface",
  },
  {
    id: "trail",
    name: "Trail Pack Mini",
    price: 58,
    summary: "Compact carry option positioned as a reorder-soon hero.",
    tag: "Reorder soon",
    mode: ["fast", "risk", "bundle"],
    stockDays: 16,
    stockColor: "#c87912",
    image: "./assets/product-backpack.jpg",
    imageAlt: "Green hiking backpack beside water",
  },
  {
    id: "tee",
    name: "Core Tee Black",
    price: 28,
    summary: "Overstock reducer for bundles, gifts, and threshold offers.",
    tag: "Bundle value",
    mode: ["bundle"],
    stockDays: 74,
    stockColor: "#246bfe",
    image: "./assets/product-tee.jpg",
    imageAlt: "Folded black crew-neck t-shirt on a wooden surface",
  },
  {
    id: "tote",
    name: "Everyday Tote",
    price: 42,
    summary: "Balanced inventory with strong repeat-purchase fit.",
    tag: "Balanced",
    mode: ["fast", "bundle"],
    stockDays: 31,
    stockColor: "#15845a",
    image: "./assets/product-tote.jpg",
    imageAlt: "Canvas tote bag hanging outdoors",
  },
];

const regionCopy = {
  na: "Ships in 1-2 business days from the closest fulfillment lane.",
  eu: "Ships in 2-4 business days with carrier exceptions shown before checkout.",
  apac: "Ships in 4-7 business days with clear delivery windows to protect conversion.",
};

const modeHeading = {
  all: "Fast movers and margin builders",
  fast: "Best sellers with the shortest path to purchase",
  bundle: "Bundles built to lift AOV and clear excess stock",
  risk: "Low-stock products with urgency and reorder control",
};

const cart = new Map();

const formatCurrency = (value) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);

function getSelectedMode() {
  return document.querySelector("#mode-select").value;
}

function productTemplate(product) {
  const stockWidth = Math.min(100, Math.max(8, (product.stockDays / 80) * 100));
  return `
    <article class="product-card">
      <div
        class="product-visual"
      >
        <img src="${product.image}" alt="${product.imageAlt}" loading="lazy" />
        <span class="product-badge">${product.tag}</span>
      </div>
      <div class="product-meta">
        <div>
          <strong>${product.name}</strong>
          <p>${product.summary}</p>
        </div>
        <span class="product-price">${formatCurrency(product.price)}</span>
      </div>
      <div class="stock-row">
        <span>${product.stockDays} days of cover</span>
        <span>${product.stockDays < 18 ? "Prioritize" : product.stockDays > 60 ? "Bundle" : "Healthy"}</span>
      </div>
      <div class="stock-meter" aria-hidden="true">
        <span style="width:${stockWidth}%; --meter:${product.stockColor};"></span>
      </div>
      <button type="button" data-add="${product.id}">Add to cart</button>
    </article>
  `;
}

function renderProducts() {
  const mode = getSelectedMode();
  const visible = mode === "all" ? products : products.filter((product) => product.mode.includes(mode));

  document.querySelector("#product-heading").textContent = modeHeading[mode];
  document.querySelector("#product-grid").innerHTML = visible.map(productTemplate).join("");

  document.querySelectorAll("[data-add]").forEach((button) => {
    button.addEventListener("click", () => addToCart(button.dataset.add));
  });
}

function renderDeliveryPromise() {
  const region = document.querySelector("#region-select").value;
  document.querySelector("#delivery-promise").textContent = regionCopy[region];
}

function addToCart(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  cart.set(productId, (cart.get(productId) || 0) + 1);
  renderCart();
  document.querySelector("#cart-drawer").classList.add("open");
}

function addRecommendedBundle() {
  ["hydra", "trail", "tee"].forEach((productId) => {
    cart.set(productId, (cart.get(productId) || 0) + 1);
  });
  renderCart();
  document.querySelector("#cart-drawer").classList.add("open");
}

function renderCart() {
  const cartItems = document.querySelector("#cart-items");
  const entries = Array.from(cart.entries());
  const count = entries.reduce((sum, [, quantity]) => sum + quantity, 0);
  const total = entries.reduce((sum, [id, quantity]) => {
    const product = products.find((item) => item.id === id);
    return sum + product.price * quantity;
  }, 0);

  document.querySelector("#cart-count").textContent = count;
  document.querySelector("#cart-total").textContent = formatCurrency(total);

  if (entries.length === 0) {
    cartItems.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  cartItems.innerHTML = entries
    .map(([id, quantity]) => {
      const product = products.find((item) => item.id === id);
      return `
        <div class="cart-line">
          <div>
            <strong>${product.name}</strong>
            <span>Qty ${quantity}</span>
          </div>
          <strong>${formatCurrency(product.price * quantity)}</strong>
        </div>
      `;
    })
    .join("");
}

document.querySelector("#mode-select").addEventListener("change", renderProducts);
document.querySelector("#region-select").addEventListener("change", renderDeliveryPromise);
document.querySelector("#cart-button").addEventListener("click", () => {
  document.querySelector("#cart-drawer").classList.toggle("open");
});
document.querySelector("#close-cart").addEventListener("click", () => {
  document.querySelector("#cart-drawer").classList.remove("open");
});
document.querySelector("#bundle-button").addEventListener("click", addRecommendedBundle);

renderProducts();
renderDeliveryPromise();
renderCart();
