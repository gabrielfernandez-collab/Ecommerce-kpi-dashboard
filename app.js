const palette = {
  blue: "#252d4b",
  teal: "#7db9b3",
  green: "#16865f",
  amber: "#e5803c",
  rose: "#d4475c",
  indigo: "#6554c0",
  cyan: "#087ea4",
  slate: "#475569",
  muted: "#667085",
  line: "#d9e1ea",
};

const skinPalettes = {
  command: {
    blue: "#252d4b",
    teal: "#7db9b3",
    green: "#16865f",
    amber: "#e5803c",
    rose: "#d4475c",
    indigo: "#6554c0",
    cyan: "#087ea4",
    slate: "#475569",
    muted: "#667085",
    line: "#d9e1ea",
  },
  powerbi: {
    blue: "#118dff",
    teal: "#00b7c3",
    green: "#107c41",
    amber: "#f2c811",
    rose: "#d13438",
    indigo: "#5c2d91",
    cyan: "#0078d4",
    slate: "#605e5c",
    muted: "#5f6368",
    line: "#d4d4d4",
  },
  tableau: {
    blue: "#4e79a7",
    teal: "#76b7b2",
    green: "#59a14f",
    amber: "#f28e2b",
    rose: "#e15759",
    indigo: "#b07aa1",
    cyan: "#9c755f",
    slate: "#79706e",
    muted: "#697586",
    line: "#d6dce5",
  },
};

const base = {
  revenue: 4820000,
  grossMargin: 42.8,
  contributionMargin: 25.1,
  conversion: 3.64,
  aov: 71.9,
  cac: 31.4,
  ltvCac: 4.8,
  ship: 94.6,
  returnRate: 6.8,
  sessions: 1840000,
  ordersTotal: 67000,
  dailyPlan: 286000,
  inventoryCash: 2700000,
  series: [
    128, 134, 146, 139, 152, 169, 174, 161, 181, 188,
    177, 192, 204, 198, 215, 226, 219, 231, 244, 236,
    251, 263, 258, 272, 286, 279, 294, 305, 318, 329,
  ],
  orders: [
    1850, 1910, 2050, 1985, 2140, 2315, 2400, 2260, 2485, 2570,
    2490, 2630, 2800, 2710, 2925, 3040, 2985, 3160, 3280, 3195,
    3370, 3520, 3445, 3610, 3780, 3695, 3880, 4010, 4190, 4320,
  ],
  channels: [
    { key: "direct", label: "Direct", share: 42, roas: 8.8, cac: 18.2, conversion: 4.2, contribution: 31.8, color: palette.blue },
    { key: "paid", label: "Paid media", share: 27, roas: 4.7, cac: 31.4, conversion: 3.1, contribution: 21.5, color: palette.teal },
    { key: "marketplace", label: "Marketplace", share: 17, roas: 5.1, cac: 24.6, conversion: 3.8, contribution: 18.4, color: palette.amber },
    { key: "email", label: "Email/SMS", share: 14, roas: 18.6, cac: 7.8, conversion: 6.4, contribution: 37.2, color: palette.rose },
  ],
  funnel: [
    { label: "Sessions", value: 1840000, percent: 100, note: "Traffic entering site" },
    { label: "Product views", value: 713000, percent: 38.8, note: "Merchandising engagement" },
    { label: "Add to carts", value: 154000, percent: 8.4, note: "Buy intent captured" },
    { label: "Checkouts", value: 92000, percent: 5.0, note: "Payment path started" },
    { label: "Orders", value: 67000, percent: 3.64, note: "Completed purchases" },
  ],
  products: [
    {
      sku: "HYD-24",
      name: "Hydra Bottle 24oz",
      family: "Hydration",
      revenue: 734000,
      margin: 48.6,
      units: 21400,
      cover: 9,
      returnRate: 3.4,
      action: "Protect stock, lift price 3%",
      status: "bad",
      color: palette.rose,
      image: "./performance-redesign/assets/product-bottle.jpg",
    },
    {
      sku: "TRP-MINI",
      name: "Trail Pack Mini",
      family: "Bags",
      revenue: 681000,
      margin: 45.1,
      units: 11740,
      cover: 16,
      returnRate: 7.2,
      action: "Reorder, keep paid caps",
      status: "warn",
      color: palette.amber,
      image: "./performance-redesign/assets/product-backpack.jpg",
    },
    {
      sku: "TEE-BLK",
      name: "Core Tee Black",
      family: "Apparel",
      revenue: 498000,
      margin: 39.4,
      units: 17800,
      cover: 74,
      returnRate: 9.8,
      action: "Bundle into AOV ladder",
      status: "warn",
      color: palette.blue,
      image: "./performance-redesign/assets/product-tee.jpg",
    },
    {
      sku: "TOTE-EVD",
      name: "Everyday Tote",
      family: "Carry",
      revenue: 447000,
      margin: 43.7,
      units: 10640,
      cover: 31,
      returnRate: 4.9,
      action: "Scale email and direct",
      status: "good",
      color: palette.green,
      image: "./performance-redesign/assets/product-tote.jpg",
    },
    {
      sku: "KIT-WKND",
      name: "Weekend Kit",
      family: "Bundles",
      revenue: 392000,
      margin: 51.3,
      units: 4260,
      cover: 28,
      returnRate: 5.6,
      action: "Make default bundle",
      status: "good",
      color: palette.indigo,
      image: "./performance-redesign/assets/operations-hero.png",
    },
  ],
  warehouses: [
    { name: "Phoenix FC", region: "na", open: 3480, risk: 7.2, pick: 96.1, shipCost: 8.42, issues: 38, status: "Healthy" },
    { name: "Columbus FC", region: "na", open: 4195, risk: 11.4, pick: 92.7, shipCost: 8.93, issues: 62, status: "Watch" },
    { name: "Reno FC", region: "na", open: 2870, risk: 5.1, pick: 97.3, shipCost: 7.88, issues: 21, status: "Healthy" },
    { name: "Rotterdam 3PL", region: "eu", open: 2410, risk: 9.8, pick: 93.6, shipCost: 10.16, issues: 44, status: "Watch" },
    { name: "Singapore 3PL", region: "apac", open: 1980, risk: 15.7, pick: 89.9, shipCost: 12.74, issues: 73, status: "Watch" },
    { name: "Newark 3PL", region: "na", open: 5120, risk: 18.9, pick: 88.4, shipCost: 9.64, issues: 117, status: "Critical" },
  ],
  customer: [
    { label: "Repeat purchase", value: 38.6, suffix: "%", delta: "+3.2 pts", color: palette.blue },
    { label: "90-day LTV", value: 151, prefix: "$", delta: "+$18", color: palette.green },
    { label: "NPS", value: 62, suffix: "", delta: "+7", color: palette.indigo },
    { label: "Support contact", value: 4.1, suffix: "%", delta: "-0.8 pts", color: palette.teal },
  ],
  diagnostics: [
    { label: "Cart abandonment", value: 63.7, suffix: "%", target: "Target under 60%", tone: "warn" },
    { label: "Payment success", value: 98.4, suffix: "%", target: "Healthy gateway mix", tone: "good" },
    { label: "Mobile speed", value: 2.1, suffix: "s", target: "Largest contentful paint", tone: "good" },
    { label: "Search zero-results", value: 7.6, suffix: "%", target: "Needs synonym rules", tone: "warn" },
  ],
  marketing: [
    { label: "Blended ROAS", value: "4.7x", percent: 78, color: palette.green, note: "Paid engine still efficient" },
    { label: "MER", value: "6.2x", percent: 72, color: palette.teal, note: "Revenue to media spend" },
    { label: "Payback", value: "23d", percent: 61, color: palette.amber, note: "Cash recovery speed" },
    { label: "Incrementality", value: "71%", percent: 66, color: palette.blue, note: "Holdout-tested lift" },
    { label: "Creative fatigue", value: "18%", percent: 44, color: palette.rose, note: "Refresh top spenders" },
  ],
  merchandising: [
    { category: "Hydration", revenue: 934000, margin: 48.6, demand: "+18%", stock: "Tight", move: "Raise price, cap promos", color: palette.rose },
    { category: "Bags", revenue: 1082000, margin: 45.1, demand: "+12%", stock: "Reorder", move: "Protect paid efficiency", color: palette.amber },
    { category: "Apparel", revenue: 794000, margin: 39.4, demand: "-4%", stock: "Heavy", move: "Bundle and threshold", color: palette.blue },
    { category: "Bundles", revenue: 623000, margin: 51.3, demand: "+21%", stock: "Balanced", move: "Make default path", color: palette.green },
  ],
  cohorts: [
    { label: "New customers", share: 54, aov: 66, payback: "31d", ltv: 118, quality: "Scale carefully" },
    { label: "Returning", share: 38, aov: 81, payback: "9d", ltv: 204, quality: "Prioritize retention" },
    { label: "VIP", share: 8, aov: 105, payback: "4d", ltv: 362, quality: "Protect experience" },
  ],
  promotions: [
    {
      date: "May 06",
      name: "Bundle lift test",
      lift: "+7.8%",
      margin: "Guard 47%+",
      readiness: "Ready",
      owner: "Growth",
      channel: "Email/SMS",
      audience: "Returning customers",
      inventory: "Balanced kits",
      revenue: 142000,
    },
    {
      date: "May 13",
      name: "Hydra restock drop",
      lift: "+11.2%",
      margin: "No blanket discount",
      readiness: "Watch inventory",
      owner: "Merch",
      channel: "Direct",
      audience: "VIP and waitlist",
      inventory: "9 days cover",
      revenue: 236000,
    },
    {
      date: "May 21",
      name: "Loyalty early access",
      lift: "+5.6%",
      margin: "High contribution",
      readiness: "Ready",
      owner: "Retention",
      channel: "Loyalty",
      audience: "VIP cohort",
      inventory: "Reserved units",
      revenue: 118000,
    },
    {
      date: "May 27",
      name: "Apparel cash release",
      lift: "+4.1%",
      margin: "Bundle only",
      readiness: "Needs creative",
      owner: "Brand",
      channel: "Paid and email",
      audience: "New customers",
      inventory: "74 days cover",
      revenue: 96000,
    },
  ],
  stateDemand: [
    { abbr: "AK", name: "Alaska", row: 1, col: 1, purchases: 28, opportunity: 42, focus: "Delivery promise" },
    { abbr: "ME", name: "Maine", row: 1, col: 12, purchases: 36, opportunity: 54, focus: "Email capture" },
    { abbr: "WA", name: "Washington", row: 2, col: 1, purchases: 91, opportunity: 64, focus: "Bundle path" },
    { abbr: "MT", name: "Montana", row: 2, col: 2, purchases: 34, opportunity: 51, focus: "Assortment depth" },
    { abbr: "ND", name: "North Dakota", row: 2, col: 3, purchases: 24, opportunity: 39, focus: "Delivery clarity" },
    { abbr: "MN", name: "Minnesota", row: 2, col: 4, purchases: 68, opportunity: 73, focus: "Retention offers" },
    { abbr: "WI", name: "Wisconsin", row: 2, col: 5, purchases: 57, opportunity: 66, focus: "AOV ladder" },
    { abbr: "MI", name: "Michigan", row: 2, col: 6, purchases: 74, opportunity: 76, focus: "Paid retargeting" },
    { abbr: "NY", name: "New York", row: 2, col: 9, purchases: 96, opportunity: 70, focus: "VIP access" },
    { abbr: "VT", name: "Vermont", row: 2, col: 10, purchases: 31, opportunity: 47, focus: "Search demand" },
    { abbr: "NH", name: "New Hampshire", row: 2, col: 11, purchases: 39, opportunity: 55, focus: "Email capture" },
    { abbr: "MA", name: "Massachusetts", row: 2, col: 12, purchases: 82, opportunity: 78, focus: "Loyalty early access" },
    { abbr: "OR", name: "Oregon", row: 3, col: 1, purchases: 64, opportunity: 71, focus: "Bundle path" },
    { abbr: "ID", name: "Idaho", row: 3, col: 2, purchases: 43, opportunity: 57, focus: "Paid efficiency" },
    { abbr: "SD", name: "South Dakota", row: 3, col: 3, purchases: 26, opportunity: 41, focus: "Shipping message" },
    { abbr: "IA", name: "Iowa", row: 3, col: 4, purchases: 49, opportunity: 62, focus: "Assortment depth" },
    { abbr: "IL", name: "Illinois", row: 3, col: 5, purchases: 88, opportunity: 74, focus: "Checkout rescue" },
    { abbr: "IN", name: "Indiana", row: 3, col: 6, purchases: 58, opportunity: 69, focus: "Bundle path" },
    { abbr: "OH", name: "Ohio", row: 3, col: 7, purchases: 76, opportunity: 77, focus: "Retention offers" },
    { abbr: "PA", name: "Pennsylvania", row: 3, col: 8, purchases: 84, opportunity: 80, focus: "Checkout rescue" },
    { abbr: "NJ", name: "New Jersey", row: 3, col: 9, purchases: 79, opportunity: 82, focus: "AOV ladder" },
    { abbr: "CT", name: "Connecticut", row: 3, col: 10, purchases: 61, opportunity: 67, focus: "VIP access" },
    { abbr: "RI", name: "Rhode Island", row: 3, col: 11, purchases: 42, opportunity: 58, focus: "Email capture" },
    { abbr: "CA", name: "California", row: 4, col: 1, purchases: 100, opportunity: 84, focus: "Inventory allocation" },
    { abbr: "NV", name: "Nevada", row: 4, col: 2, purchases: 52, opportunity: 72, focus: "Paid retargeting" },
    { abbr: "WY", name: "Wyoming", row: 4, col: 3, purchases: 22, opportunity: 36, focus: "Delivery clarity" },
    { abbr: "NE", name: "Nebraska", row: 4, col: 4, purchases: 41, opportunity: 56, focus: "Assortment depth" },
    { abbr: "MO", name: "Missouri", row: 4, col: 5, purchases: 62, opportunity: 70, focus: "Bundle path" },
    { abbr: "KY", name: "Kentucky", row: 4, col: 6, purchases: 48, opportunity: 61, focus: "Email capture" },
    { abbr: "WV", name: "West Virginia", row: 4, col: 7, purchases: 30, opportunity: 45, focus: "Shipping message" },
    { abbr: "VA", name: "Virginia", row: 4, col: 8, purchases: 71, opportunity: 81, focus: "Checkout rescue" },
    { abbr: "MD", name: "Maryland", row: 4, col: 9, purchases: 63, opportunity: 73, focus: "AOV ladder" },
    { abbr: "DE", name: "Delaware", row: 4, col: 10, purchases: 37, opportunity: 59, focus: "Email capture" },
    { abbr: "HI", name: "Hawaii", row: 5, col: 1, purchases: 46, opportunity: 65, focus: "Delivery promise" },
    { abbr: "AZ", name: "Arizona", row: 5, col: 2, purchases: 69, opportunity: 86, focus: "Hydra allocation" },
    { abbr: "UT", name: "Utah", row: 5, col: 3, purchases: 56, opportunity: 74, focus: "Bundle path" },
    { abbr: "CO", name: "Colorado", row: 5, col: 4, purchases: 78, opportunity: 88, focus: "Loyalty early access" },
    { abbr: "KS", name: "Kansas", row: 5, col: 5, purchases: 44, opportunity: 60, focus: "Paid efficiency" },
    { abbr: "AR", name: "Arkansas", row: 5, col: 6, purchases: 40, opportunity: 63, focus: "Checkout rescue" },
    { abbr: "TN", name: "Tennessee", row: 5, col: 7, purchases: 65, opportunity: 83, focus: "Bundle path" },
    { abbr: "NC", name: "North Carolina", row: 5, col: 8, purchases: 73, opportunity: 89, focus: "Checkout rescue" },
    { abbr: "SC", name: "South Carolina", row: 5, col: 9, purchases: 50, opportunity: 76, focus: "Paid retargeting" },
    { abbr: "DC", name: "District of Columbia", row: 5, col: 10, purchases: 53, opportunity: 69, focus: "VIP access" },
    { abbr: "NM", name: "New Mexico", row: 6, col: 3, purchases: 38, opportunity: 68, focus: "Delivery clarity" },
    { abbr: "OK", name: "Oklahoma", row: 6, col: 4, purchases: 45, opportunity: 64, focus: "Assortment depth" },
    { abbr: "LA", name: "Louisiana", row: 6, col: 5, purchases: 47, opportunity: 72, focus: "Payment recovery" },
    { abbr: "MS", name: "Mississippi", row: 6, col: 6, purchases: 29, opportunity: 53, focus: "Email capture" },
    { abbr: "AL", name: "Alabama", row: 6, col: 7, purchases: 43, opportunity: 67, focus: "Bundle path" },
    { abbr: "GA", name: "Georgia", row: 6, col: 8, purchases: 81, opportunity: 91, focus: "Checkout rescue" },
    { abbr: "TX", name: "Texas", row: 7, col: 4, purchases: 98, opportunity: 87, focus: "Inventory allocation" },
    { abbr: "FL", name: "Florida", row: 7, col: 9, purchases: 94, opportunity: 85, focus: "VIP access" },
  ],
  risks: [
    { level: "high", title: "Hydra stockout before reorder", owner: "Merch", exposure: "$310K", status: "Pricing and allocation live" },
    { level: "high", title: "Newark SLA breach", owner: "Ops", exposure: "1.7 NPS pts", status: "Labor and carrier reroute needed" },
    { level: "medium", title: "Paid creative fatigue", owner: "Growth", exposure: "$180K EBIT", status: "Refresh top 12 ads" },
    { level: "medium", title: "Apparel overstock cash drag", owner: "Finance", exposure: "$420K cash", status: "Bundle calendar queued" },
    { level: "low", title: "Search zero-result leakage", owner: "Product", exposure: "$64K revenue", status: "Synonym map ready" },
  ],
};

const multipliers = {
  range: { "30": 1, "14": 0.48, "7": 0.24 },
  channel: { all: 1, direct: 0.42, paid: 0.27, marketplace: 0.17, email: 0.14 },
  region: { all: 1, na: 0.58, eu: 0.26, apac: 0.16 },
  segment: { all: 1, new: 0.54, returning: 0.38, vip: 0.08 },
};

const segmentEffects = {
  all: { conversion: 0, aov: 1, cac: 1, ltv: 1, returns: 0 },
  new: { conversion: -0.18, aov: 0.93, cac: 1.18, ltv: 0.78, returns: 0.4 },
  returning: { conversion: 0.74, aov: 1.12, cac: 0.44, ltv: 1.34, returns: -0.7 },
  vip: { conversion: 1.26, aov: 1.46, cac: 0.31, ltv: 1.92, returns: -1.1 },
};

const regionEffects = {
  all: { ship: 0, returns: 0, risk: 0, cost: 1 },
  na: { ship: 0.8, returns: -0.2, risk: -0.8, cost: 0.96 },
  eu: { ship: -0.6, returns: 0.4, risk: 0.7, cost: 1.08 },
  apac: { ship: -2.1, returns: 0.9, risk: 3.4, cost: 1.2 },
};

const channelEffects = {
  all: { conversion: 0, margin: 0, cac: 1, aov: 1 },
  direct: { conversion: 0.31, margin: 1.8, cac: 0.58, aov: 1.07 },
  paid: { conversion: -0.22, margin: -1.4, cac: 1.24, aov: 0.97 },
  marketplace: { conversion: 0.14, margin: -2.6, cac: 0.78, aov: 0.9 },
  email: { conversion: 1.1, margin: 3.2, cac: 0.32, aov: 1.18 },
};

const scenarioEffects = {
  base: {
    label: "Base operating case",
    revenue: 1,
    margin: 0,
    conversion: 0,
    aov: 1,
    cac: 1,
    ship: 0,
    returns: 0,
    trust: "Stable",
    load: "Medium",
    copy: "Current plan, no extra risk.",
  },
  growth: {
    label: "Growth push",
    revenue: 1.16,
    margin: -1.1,
    conversion: 0.28,
    aov: 1.04,
    cac: 1.18,
    ship: -0.4,
    returns: 0.3,
    trust: "Watched",
    load: "High",
    copy: "More demand, higher execution pressure.",
  },
  profit: {
    label: "Profit mode",
    revenue: 0.96,
    margin: 2.4,
    conversion: -0.08,
    aov: 1.08,
    cac: 0.82,
    ship: 0.2,
    returns: -0.2,
    trust: "Stable",
    load: "Medium",
    copy: "Lower spend, better contribution.",
  },
  risk: {
    label: "Risk-off",
    revenue: 0.9,
    margin: 1.1,
    conversion: -0.18,
    aov: 0.98,
    cac: 0.74,
    ship: 1.2,
    returns: -0.6,
    trust: "Protected",
    load: "Low",
    copy: "Protect promises and cash.",
  },
};

const formatCurrency = (value) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);

const formatCompact = (value) =>
  new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1 }).format(value);

const formatKpiCurrency = (value) => {
  const absValue = Math.abs(value);

  if (absValue >= 1000000) {
    const digits = absValue >= 10000000 ? 1 : 2;
    return `$${(value / 1000000).toFixed(digits).replace(/\.0+$/, "").replace(/(\.\d)0$/, "$1")}M`;
  }

  if (absValue >= 1000) {
    const digits = absValue >= 100000 ? 0 : 1;
    return `$${(value / 1000).toFixed(digits).replace(/\.0$/, "")}K`;
  }

  return formatCurrency(value);
};

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

function alpha(hex, opacity) {
  const value = hex.replace("#", "");
  const bigint = Number.parseInt(value, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

function syncDataPalette() {
  base.channels[0].color = palette.blue;
  base.channels[1].color = palette.teal;
  base.channels[2].color = palette.amber;
  base.channels[3].color = palette.rose;

  base.products[0].color = palette.rose;
  base.products[1].color = palette.amber;
  base.products[2].color = palette.blue;
  base.products[3].color = palette.green;
  base.products[4].color = palette.indigo;

  base.customer[0].color = palette.blue;
  base.customer[1].color = palette.green;
  base.customer[2].color = palette.indigo;
  base.customer[3].color = palette.teal;

  base.marketing[0].color = palette.green;
  base.marketing[1].color = palette.teal;
  base.marketing[2].color = palette.amber;
  base.marketing[3].color = palette.blue;
  base.marketing[4].color = palette.rose;

  base.merchandising[0].color = palette.rose;
  base.merchandising[1].color = palette.amber;
  base.merchandising[2].color = palette.blue;
  base.merchandising[3].color = palette.green;
}

function applySkin() {
  const activeButton = document.querySelector(".skin-options button.active");
  const skin = activeButton?.dataset.skinOption || "command";
  Object.assign(palette, skinPalettes[skin] || skinPalettes.command);
  syncDataPalette();
  if (document.body) document.body.dataset.skin = skin;

  try {
    window.localStorage?.setItem("ecom-command-skin", skin);
  } catch {
    // Local storage can be unavailable in some embedded preview contexts.
  }
}

function restoreSkin() {
  let skin = "command";
  try {
    const storedSkin = window.localStorage?.getItem("ecom-command-skin");
    if (storedSkin && skinPalettes[storedSkin]) skin = storedSkin;
  } catch {
    // Keep the default skin when storage is unavailable.
  }
  setActiveSkinButton(skin);
  applySkin();
}

function setActiveSkinButton(skin) {
  document.querySelectorAll("[data-skin-option]").forEach((button) => {
    const isActive = button.dataset.skinOption === skin;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function applyTheme(theme) {
  const nextTheme = theme === "dark" ? "dark" : "light";
  if (document.body) document.body.dataset.theme = nextTheme;

  document.querySelectorAll("[data-theme-option]").forEach((button) => {
    const isActive = button.dataset.themeOption === nextTheme;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  try {
    window.localStorage?.setItem("ecom-command-theme", nextTheme);
  } catch {
    // Local storage can be unavailable in some embedded preview contexts.
  }
}

function restoreTheme() {
  let theme = "light";
  try {
    const storedTheme = window.localStorage?.getItem("ecom-command-theme");
    if (storedTheme === "dark") theme = "dark";
  } catch {
    // Keep light mode when storage is unavailable.
  }
  applyTheme(theme);
}

function initHeaderCarousel() {
  const slides = Array.from(document.querySelectorAll(".carousel-slide"));
  const dots = Array.from(document.querySelectorAll("[data-carousel-dot]"));
  if (!slides.length || !dots.length) return;

  let currentIndex = 0;
  const setSlide = (index) => {
    currentIndex = index;
    slides.forEach((slide, slideIndex) => slide.classList.toggle("active", slideIndex === index));
    dots.forEach((dot, dotIndex) => dot.classList.toggle("active", dotIndex === index));
  };

  dots.forEach((dot) => {
    dot.addEventListener("click", () => setSlide(Number(dot.dataset.carouselDot)));
  });

  window.setInterval(() => {
    setSlide((currentIndex + 1) % slides.length);
  }, 4600);
}

function getState() {
  const range = document.querySelector("#range-filter").value;
  const channel = document.querySelector("#channel-filter").value;
  const region = document.querySelector("#region-filter").value;
  const segment = document.querySelector("#segment-filter").value;
  const scenario = document.querySelector("#scenario-filter").value;
  const factor =
    multipliers.range[range] * multipliers.channel[channel] * multipliers.region[region] * multipliers.segment[segment];

  return {
    range,
    channel,
    region,
    segment,
    scenario,
    factor,
    channelEffect: channelEffects[channel],
    regionEffect: regionEffects[region],
    segmentEffect: segmentEffects[segment],
    scenarioEffect: scenarioEffects[scenario],
  };
}

function calculateMetrics(state) {
  const revenue = base.revenue * state.factor * state.scenarioEffect.revenue;
  const orders = Math.round(
    base.ordersTotal *
      state.factor *
      state.segmentEffect.aov *
      state.scenarioEffect.revenue *
      (1 + (state.channelEffect.conversion + state.scenarioEffect.conversion) / 100),
  );
  const aov = base.aov * state.channelEffect.aov * state.segmentEffect.aov * state.scenarioEffect.aov;
  const margin = base.grossMargin + state.channelEffect.margin + state.scenarioEffect.margin + state.factor * 1.2;
  const conversion =
    base.conversion + state.channelEffect.conversion + state.segmentEffect.conversion + state.scenarioEffect.conversion;
  const cac = base.cac * state.channelEffect.cac * state.segmentEffect.cac * state.scenarioEffect.cac;
  const ltvCac = base.ltvCac * state.segmentEffect.ltv * (state.channel === "paid" ? 0.9 : 1.06);
  const ship = base.ship + state.regionEffect.ship + state.scenarioEffect.ship;
  const returnRate = base.returnRate + state.regionEffect.returns + state.segmentEffect.returns + state.scenarioEffect.returns;
  const contributionMargin =
    base.contributionMargin +
    state.channelEffect.margin * 0.42 +
    state.segmentEffect.conversion * 0.9 +
    state.scenarioEffect.margin * 0.62;
  const contributionProfit = revenue * (contributionMargin / 100);
  const sessions = base.sessions * state.factor;

  return {
    revenue,
    orders,
    aov,
    margin,
    conversion,
    cac,
    ltvCac,
    ship,
    returnRate,
    contributionMargin,
    contributionProfit,
    sessions,
  };
}

function renderKpis(state) {
  const metrics = calculateMetrics(state);
  const projectedMonth = metrics.revenue * (30 / Number(state.range)) * 2.05;
  const planGap = projectedMonth - 8800000 * multipliers.channel[state.channel] * multipliers.region[state.region];
  const healthScore = Math.round(clamp(82 + metrics.conversion * 1.8 + (metrics.ship - 92) * 1.4 - metrics.returnRate, 61, 98));

  document.querySelector("#revenue-kpi").textContent = formatKpiCurrency(metrics.revenue);
  document.querySelector("#margin-kpi").textContent = `${metrics.margin.toFixed(1)}%`;
  document.querySelector("#conversion-kpi").textContent = `${metrics.conversion.toFixed(2)}%`;
  document.querySelector("#aov-kpi").textContent = formatCurrency(metrics.aov);
  document.querySelector("#cac-kpi").textContent = formatCurrency(metrics.cac);
  document.querySelector("#ltv-kpi").textContent = `${metrics.ltvCac.toFixed(1)}x`;
  document.querySelector("#ship-kpi").textContent = `${metrics.ship.toFixed(1)}%`;
  document.querySelector("#return-kpi").textContent = `${metrics.returnRate.toFixed(1)}%`;

  document.querySelector("#revenue-delta").textContent = state.range === "7" ? "+8.1% vs prior" : "+12.4% vs prior";
  document.querySelector("#margin-delta").textContent = metrics.margin > 43 ? "+2.1 pts" : "-0.4 pts";
  document.querySelector("#margin-delta").className = metrics.margin > 43 ? "positive" : "negative";
  document.querySelector("#conversion-delta").textContent = metrics.conversion > base.conversion ? "+0.4 pts" : "-0.3 pts";
  document.querySelector("#conversion-delta").className = metrics.conversion > base.conversion ? "positive" : "negative";
  document.querySelector("#aov-delta").textContent = metrics.aov > base.aov ? "+4.6% vs prior" : "-2.1% vs prior";
  document.querySelector("#aov-delta").className = metrics.aov > base.aov ? "positive" : "negative";
  document.querySelector("#cac-delta").textContent = metrics.cac < base.cac ? "Below target" : "Watch efficiency";
  document.querySelector("#cac-delta").className = metrics.cac < base.cac ? "positive" : "neutral";
  document.querySelector("#ltv-delta").textContent = metrics.ltvCac > 4.8 ? "+0.4x vs prior" : "Needs retention lift";
  document.querySelector("#ltv-delta").className = metrics.ltvCac > 4.8 ? "positive" : "neutral";
  document.querySelector("#ship-delta").textContent = metrics.ship < 93 ? "-1.4 pts" : "+1.8 pts";
  document.querySelector("#ship-delta").className = metrics.ship < 93 ? "negative" : "positive";
  document.querySelector("#return-delta").textContent = metrics.returnRate < base.returnRate ? "-0.9 pts vs prior" : "+0.3 pts vs prior";
  document.querySelector("#return-delta").className = metrics.returnRate < base.returnRate ? "positive" : "neutral";

  document.querySelector("#month-projection").textContent = formatCurrency(projectedMonth);
  document.querySelector("#projection-gap").textContent = `${planGap >= 0 ? "+" : ""}${formatCurrency(planGap)} vs plan`;
  document.querySelector("#projection-gap").className = planGap >= 0 ? "positive" : "negative";
  document.querySelector("#contribution-profit").textContent = formatCurrency(metrics.contributionProfit);
  document.querySelector("#profit-gap").textContent = `${metrics.contributionMargin.toFixed(1)}% of revenue`;
  document.querySelector("#cash-inventory").textContent = formatCurrency(base.inventoryCash * multipliers.region[state.region]);
  document.querySelector("#decision-count").textContent = state.region === "apac" || state.channel === "paid" ? "8" : "6";
  document.querySelector("#health-score").textContent = healthScore;
  document.querySelector("#health-fill").style.width = `${healthScore}%`;
  document.querySelector("#health-copy").textContent =
    healthScore > 90 ? "Growth strong, fulfillment pressure contained." : "Growth available, execution pressure rising.";

  renderChartMetrics(metrics);
  renderCommandBrief(state, metrics);
}

function renderCommandBrief(state, metrics) {
  const headline =
    state.scenario === "growth"
      ? "Growth push creates execution pressure."
      : state.scenario === "profit"
        ? "Profit mode improves cash quality."
        : state.region === "apac"
          ? "APAC delivery risk needs control."
          : metrics.contributionMargin > 25
            ? "Revenue velocity is above plan."
            : "Margin quality needs attention.";
  const copy =
    state.channel === "paid"
      ? "Refresh paid creative, hold CAC caps, and redirect demand into high-margin bundles."
      : state.segment === "vip"
        ? "Prioritize VIP inventory access, fast support, and loyalty-first bundle offers."
        : "Protect scarce inventory, scale bundle paths, and keep fulfillment promises conservative.";
  const opportunity = metrics.contributionProfit * (state.scenario === "growth" ? 0.14 : state.scenario === "profit" ? 0.11 : 0.085);

  document.querySelector("#brief-headline").textContent = headline;
  document.querySelector("#brief-copy").textContent = copy;
  document.querySelector("#brief-opportunity").textContent = formatCurrency(opportunity);
}

function renderOpportunityRadar(state) {
  const metrics = calculateMetrics(state);
  const revenueBase = Math.max(metrics.revenue, 1);
  const inventoryPressure = state.region === "apac" ? 1.24 : state.region === "eu" ? 1.08 : 1;
  const channelQuality = state.channel === "email" ? 1.18 : state.channel === "direct" ? 1.1 : state.channel === "paid" ? 0.92 : 1;
  const scenarioMultiplier = state.scenario === "growth" ? 1.22 : state.scenario === "profit" ? 1.08 : state.scenario === "risk" ? 0.82 : 1;
  const moves = [
    {
      title: "Bundle ladder",
      lever: "Raise AOV",
      owner: "Merch + Growth",
      upside: revenueBase * 0.046 * channelQuality * scenarioMultiplier,
      confidence: clamp(82 + (metrics.aov - base.aov) * 0.5, 64, 96),
      urgency: state.segment === "returning" || state.segment === "vip" ? "High" : "Medium",
      copy: "Push the Weekend Kit path above single-item add-to-cart for repeat-ready traffic.",
      color: palette.indigo,
    },
    {
      title: "Hydra allocation",
      lever: "Protect margin",
      owner: "Merch",
      upside: revenueBase * 0.035 * inventoryPressure,
      confidence: clamp(78 + (metrics.margin - 42) * 1.4, 60, 94),
      urgency: state.region === "apac" || state.scenario === "growth" ? "Critical" : "High",
      copy: "Reserve scarce units for high-LTV customers and replace blanket discounts with access windows.",
      color: palette.rose,
    },
    {
      title: "Checkout rescue",
      lever: "Lift conversion",
      owner: "Product + Ops",
      upside: revenueBase * clamp((base.conversion - metrics.conversion + 0.42) / 100, 0.006, 0.024) * 6.8,
      confidence: clamp(74 + metrics.ship - metrics.returnRate, 62, 95),
      urgency: metrics.conversion < base.conversion ? "Critical" : "Medium",
      copy: "Expose delivery confidence and payment recovery before checkout abandonment spikes.",
      color: palette.teal,
    },
  ];
  const rankedMoves = moves.sort((a, b) => b.upside - a.upside);
  const totalUpside = rankedMoves.reduce((sum, move) => sum + move.upside, 0);
  const radarScore = Math.round(clamp(rankedMoves.reduce((sum, move) => sum + move.confidence, 0) / rankedMoves.length, 0, 100));

  document.querySelector("#radar-upside").textContent = formatKpiCurrency(totalUpside);
  document.querySelector("#radar-copy").textContent =
    radarScore > 84
      ? "High-confidence upside is concentrated in three moves the team can sequence now."
      : "Upside is available, but execution risk should gate how aggressively the team moves.";
  document.querySelector("#radar-score-fill").style.width = `${radarScore}%`;

  document.querySelector("#radar-map").innerHTML = rankedMoves
    .map(
      (move, index) => `
        <article class="radar-card">
          <span class="radar-rank">${index + 1}</span>
          <div>
            <div class="radar-card-head">
              <strong>${move.title}</strong>
              <small>${move.lever}</small>
            </div>
            <p>${move.copy}</p>
            <div class="radar-bar" aria-label="${move.title} confidence">
              <i style="width:${move.confidence}%; background:${move.color}"></i>
            </div>
            <div class="radar-meta">
              <span>${formatCurrency(move.upside)} upside</span>
              <span>${move.confidence.toFixed(0)}% confidence</span>
              <span>${move.urgency}</span>
            </div>
          </div>
        </article>
      `,
    )
    .join("");

  document.querySelector("#radar-timeline").innerHTML = rankedMoves
    .map(
      (move, index) => `
        <article>
          <span>Step ${index + 1}</span>
          <strong>${move.owner}</strong>
          <small>${move.title}</small>
        </article>
      `,
    )
    .join("");
}

function renderStateDemandMap(state) {
  const stateCoords = {
    AK: [150, 455], AL: [620, 375], AR: [545, 350], AZ: [255, 365], CA: [165, 300], CO: [375, 305],
    CT: [770, 228], DC: [725, 292], DE: [738, 278], FL: [700, 450], GA: [655, 380], HI: [320, 475],
    IA: [520, 238], ID: [265, 190], IL: [565, 255], IN: [610, 255], KS: [465, 310], KY: [620, 305],
    LA: [535, 410], MA: [806, 205], MD: [724, 298], ME: [834, 145], MI: [625, 205], MN: [515, 175],
    MO: [535, 305], MS: [580, 390], MT: [335, 155], NC: [705, 335], ND: [455, 160], NE: [450, 260],
    NH: [808, 177], NJ: [765, 260], NM: [335, 360], NV: [220, 265], NY: [720, 210], OH: [650, 255],
    OK: [465, 350], OR: [190, 205], PA: [705, 250], RI: [816, 228], SC: [680, 365], SD: [450, 210],
    TN: [610, 335], TX: [465, 420], UT: [300, 285], VA: [700, 310], VT: [765, 180], WA: [205, 145],
    WI: [565, 205], WV: [675, 292], WY: [345, 230],
  };
  const regionModifier = state.region === "all" || state.region === "na" ? 1 : 0.34;
  const channelModifier = state.channel === "email" ? 1.14 : state.channel === "direct" ? 1.08 : state.channel === "paid" ? 0.96 : 1;
  const segmentModifier = state.segment === "vip" ? 1.18 : state.segment === "returning" ? 1.1 : state.segment === "new" ? 0.92 : 1;
  const scenarioModifier = state.scenario === "growth" ? 1.12 : state.scenario === "profit" ? 0.98 : state.scenario === "risk" ? 0.86 : 1;

  const states = base.stateDemand.map((item) => {
    const purchaseScore = clamp(item.purchases * regionModifier * channelModifier * segmentModifier * scenarioModifier, 8, 100);
    const opportunityScore = clamp(item.opportunity * regionModifier * (state.scenario === "profit" ? 1.08 : 1), 8, 100);
    const demandClass =
      purchaseScore >= 82
        ? "high"
        : purchaseScore <= 42
          ? "low"
          : opportunityScore >= 72
            ? "opportunity"
            : "steady";
    const projectedRevenue = purchaseScore * 9800 * multipliers.range[state.range];

    return {
      ...item,
      demandClass,
      opportunityScore,
      projectedRevenue,
      purchaseScore,
      x: stateCoords[item.abbr]?.[0] || 480,
      y: stateCoords[item.abbr]?.[1] || 280,
    };
  });

  const mapElement = document.querySelector("#state-geo-map");
  if (!mapElement) return;

  mapElement.innerHTML = `
    <div class="real-us-map-frame">
      <object class="real-us-map" data="./assets/us-map.svg" type="image/svg+xml" aria-label="United States map with state boundaries">
        United States map with state boundaries
      </object>
      <div class="state-marker-layer" aria-label="State demand markers">
        ${states
          .map((item) => {
            const size = clamp(20 + item.purchaseScore / 4, 24, 38);
            return `
              <button
                class="state-map-marker ${item.demandClass}"
                style="left:${((item.x / 959) * 100).toFixed(2)}%; top:${((item.y / 593) * 100).toFixed(2)}%; width:${size.toFixed(0)}px; height:${size.toFixed(0)}px"
                type="button"
                title="${item.name}: ${item.purchaseScore.toFixed(0)} purchase index, ${item.opportunityScore.toFixed(0)} opportunity"
                aria-label="${item.name}, ${item.demandClass}, ${item.purchaseScore.toFixed(0)} purchase index"
                aria-describedby="state-map-insight"
                data-state="${item.abbr}"
              >
                ${item.abbr}
              </button>
            `;
          })
          .join("")}
      </div>
      <div class="state-map-insight" id="state-map-insight" role="tooltip" hidden></div>
    </div>
  `;

  const tooltip = mapElement.querySelector("#state-map-insight");
  const stateByAbbr = new Map(states.map((item) => [item.abbr, item]));
  const demandLabels = {
    high: "Purchases more",
    low: "Purchases less",
    opportunity: "Opportunity",
    steady: "Steady demand",
  };
  const demandColors = {
    high: palette.green,
    low: palette.rose,
    opportunity: palette.amber,
    steady: "#94a3b8",
  };

  function hideInsight() {
    tooltip.hidden = true;
    tooltip.className = "state-map-insight";
    tooltip.innerHTML = "";
    mapElement.querySelectorAll(".state-map-marker.is-active").forEach((marker) => marker.classList.remove("is-active"));
  }

  function showInsightByState(item) {
    if (!item) return;

    mapElement.querySelectorAll(".state-map-marker.is-active").forEach((activeMarker) => activeMarker.classList.remove("is-active"));
    mapElement.querySelector(`.state-map-marker[data-state="${item.abbr}"]`)?.classList.add("is-active");
    tooltip.hidden = false;
    tooltip.className = `state-map-insight is-visible ${item.demandClass}`;
    tooltip.style.left = `${((item.x / 959) * 100).toFixed(2)}%`;
    tooltip.style.top = `${((item.y / 593) * 100).toFixed(2)}%`;
    tooltip.dataset.placement = item.y < 190 ? "below" : "above";
    tooltip.style.setProperty("--insight-shift-x", item.x > 720 ? "-88%" : item.x < 230 ? "-12%" : "-50%");
    tooltip.style.setProperty("--insight-shift-y", item.y < 190 ? "16px" : "calc(-100% - 16px)");
    tooltip.innerHTML = `
      <div class="state-map-insight-head">
        <span>${item.abbr}</span>
        <small>${demandLabels[item.demandClass]}</small>
      </div>
      <strong>${item.name}</strong>
      <p>${item.focus}</p>
      <div class="state-map-insight-metrics">
        <span>${item.purchaseScore.toFixed(0)} purchase index</span>
        <span>${item.opportunityScore.toFixed(0)} opportunity</span>
        <span>${formatKpiCurrency(item.projectedRevenue)} projected</span>
      </div>
    `;
  }

  function showInsight(marker) {
    showInsightByState(stateByAbbr.get(marker.dataset.state));
  }

  function hydrateSvgMap() {
    const mapGraphic = mapElement.querySelector(".real-us-map");
    const svgDocument = mapGraphic?.contentDocument;
    if (!svgDocument) return;

    states.forEach((item) => {
      const statePath = svgDocument.getElementById(item.abbr);
      if (!statePath) return;

      statePath.style.fill = demandColors[item.demandClass];
      statePath.style.fillOpacity = item.demandClass === "steady" ? "0.5" : "0.76";
      statePath.style.stroke = "#ffffff";
      statePath.style.strokeWidth = "1.15";
      statePath.style.cursor = "help";
      statePath.setAttribute("tabindex", "0");
      statePath.setAttribute("role", "button");
      statePath.setAttribute(
        "aria-label",
        `${item.name}, ${demandLabels[item.demandClass]}, ${item.purchaseScore.toFixed(0)} purchase index, ${item.opportunityScore.toFixed(0)} opportunity`,
      );
      statePath.addEventListener("mouseenter", () => showInsightByState(item));
      statePath.addEventListener("focus", () => showInsightByState(item));
      statePath.addEventListener("click", () => showInsightByState(item));
      statePath.addEventListener("mouseleave", hideInsight);
      statePath.addEventListener("blur", hideInsight);
    });
  }

  const mapGraphic = mapElement.querySelector(".real-us-map");
  mapGraphic?.addEventListener("load", hydrateSvgMap);
  window.setTimeout(hydrateSvgMap, 0);

  mapElement.querySelectorAll(".state-map-marker").forEach((marker) => {
    marker.addEventListener("pointerenter", () => showInsight(marker));
    marker.addEventListener("focus", () => showInsight(marker));
    marker.addEventListener("click", () => showInsight(marker));
    marker.addEventListener("blur", () => {
      window.setTimeout(() => {
        if (!mapElement.contains(document.activeElement)) hideInsight();
      }, 0);
    });
  });
  mapElement.onpointerleave = hideInsight;
}

function renderScenario(state) {
  const baseMetrics = calculateMetrics({ ...state, scenario: "base", scenarioEffect: scenarioEffects.base });
  const scenarioMetrics = calculateMetrics(state);
  const revenueDelta = scenarioMetrics.revenue - baseMetrics.revenue;
  const ebitDelta = scenarioMetrics.contributionProfit - baseMetrics.contributionProfit;

  document.querySelector("#scenario-revenue").textContent = formatCurrency(scenarioMetrics.revenue);
  document.querySelector("#scenario-revenue-copy").textContent =
    `${revenueDelta >= 0 ? "+" : ""}${formatCurrency(revenueDelta)} vs base`;
  document.querySelector("#scenario-revenue-copy").className = revenueDelta >= 0 ? "positive" : "neutral";
  document.querySelector("#scenario-ebit").textContent = `${ebitDelta >= 0 ? "+" : ""}${formatCurrency(ebitDelta)}`;
  document.querySelector("#scenario-ebit-copy").textContent = state.scenarioEffect.label;
  document.querySelector("#scenario-ebit-copy").className = ebitDelta >= 0 ? "positive" : "neutral";
  document.querySelector("#scenario-trust").textContent = state.scenarioEffect.trust;
  document.querySelector("#scenario-trust-copy").textContent = state.scenarioEffect.copy;
  document.querySelector("#scenario-load").textContent = state.scenarioEffect.load;
  document.querySelector("#scenario-load-copy").textContent =
    state.scenario === "growth" ? "Requires ops and creative capacity" : "Current team can absorb";
}

function renderChartMetrics(metrics) {
  const dailyRunRate = metrics.revenue / Number(document.querySelector("#range-filter").value);
  const gapToPlan = dailyRunRate - base.dailyPlan * multipliers.channel[document.querySelector("#channel-filter").value];
  const items = [
    { label: "Daily run rate", value: formatKpiCurrency(dailyRunRate), note: `${gapToPlan >= 0 ? "+" : ""}${formatKpiCurrency(gapToPlan)} vs plan` },
    { label: "Orders", value: metrics.orders.toLocaleString(), note: `${formatCompact(metrics.sessions)} sessions` },
    { label: "Blended AOV", value: formatCurrency(metrics.aov), note: `${metrics.conversion.toFixed(2)}% conversion` },
    { label: "Contribution", value: formatKpiCurrency(metrics.contributionProfit), note: `${metrics.contributionMargin.toFixed(1)}% margin` },
  ];

  document.querySelector("#chart-metrics").innerHTML = items
    .map(
      (item) => `
        <article>
          <span class="mini-label">${item.label}</span>
          <strong>${item.value}</strong>
          <small>${item.note}</small>
        </article>
      `,
    )
    .join("");
}

function drawTrend(state) {
  const canvas = document.querySelector("#revenue-chart");
  const ctx = canvas.getContext("2d");
  const rect = canvas.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  const width = rect.width;
  const height = rect.height;

  if (!width || !height) return;

  canvas.width = width * dpr;
  canvas.height = height * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  const days = Number(state.range);
  const revenue = base.series.slice(-days).map((v) => v * state.factor * 1000);
  const orders = base.orders.slice(-days).map((v) => v * state.factor);
  const plan = revenue.map((_, index) => base.dailyPlan * state.factor * (0.9 + index / revenue.length / 5));
  const pad = { top: 18, right: 22, bottom: 36, left: 62 };
  const chartW = width - pad.left - pad.right;
  const chartH = height - pad.top - pad.bottom;
  const maxRevenue = Math.max(...revenue, ...plan) * 1.14;
  const maxOrders = Math.max(...orders) * 1.2;

  ctx.clearRect(0, 0, width, height);
  ctx.font = "12px Inter, system-ui, sans-serif";
  ctx.strokeStyle = palette.line;
  ctx.lineWidth = 1;
  ctx.fillStyle = palette.muted;

  for (let i = 0; i <= 4; i += 1) {
    const y = pad.top + (chartH / 4) * i;
    ctx.beginPath();
    ctx.moveTo(pad.left, y);
    ctx.lineTo(width - pad.right, y);
    ctx.stroke();
    ctx.fillText(formatCompact(maxRevenue - (maxRevenue / 4) * i), 8, y + 4);
  }

  const barStep = chartW / revenue.length;
  const barW = Math.max(5, barStep - 7);
  revenue.forEach((value, index) => {
    const x = pad.left + index * barStep + 3;
    const barH = (value / maxRevenue) * chartH;
    const y = pad.top + chartH - barH;
    ctx.fillStyle = alpha(palette.blue, 0.18);
    ctx.fillRect(x, y, barW, barH);
    ctx.fillStyle = value >= plan[index] ? alpha(palette.green, 0.72) : alpha(palette.rose, 0.72);
    ctx.fillRect(x, y, barW, 3);
  });

  drawLine(ctx, plan, maxRevenue, pad, chartW, chartH, palette.amber, [5, 5]);
  drawLine(ctx, orders, maxOrders, pad, chartW, chartH, palette.teal);

  orders.forEach((value, index) => {
    if (index % Math.ceil(orders.length / 6) !== 0 && index !== orders.length - 1) return;
    const x = pad.left + index * (chartW / (orders.length - 1));
    const y = pad.top + chartH - (value / maxOrders) * chartH;
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = palette.teal;
    ctx.lineWidth = 2;
    ctx.stroke();
  });

  ctx.setLineDash([]);
  ctx.fillStyle = palette.muted;
  ctx.fillText("Revenue bars", pad.left, height - 10);
  ctx.fillStyle = palette.teal;
  ctx.fillText("Orders line", pad.left + 112, height - 10);
  ctx.fillStyle = palette.amber;
  ctx.fillText("Forecast plan", pad.left + 212, height - 10);

  const abovePlanDays = revenue.filter((value, index) => value >= plan[index]).length;
  canvas._trendData = {
    chartW,
    days,
    orders,
    pad,
    plan,
    revenue,
    width,
  };
  document.querySelector("#trend-status").textContent =
    abovePlanDays / revenue.length > 0.62 ? "Tracking above plan" : "Below forecast band";
  document.querySelector("#trend-status").className =
    abovePlanDays / revenue.length > 0.62 ? "status-pill" : "status-pill badge warn";
}

function initTrendTooltip() {
  const canvas = document.querySelector("#revenue-chart");
  const tooltip = document.querySelector("#revenue-chart-tooltip");
  if (!canvas || !tooltip) return;

  const hideTooltip = () => tooltip.classList.remove("visible");

  canvas.addEventListener("mouseleave", hideTooltip);
  canvas.addEventListener("mousemove", (event) => {
    const data = canvas._trendData;
    if (!data) return;

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const { chartW, days, orders, pad, plan, revenue, width } = data;

    if (x < pad.left || x > width - pad.right) {
      hideTooltip();
      return;
    }

    const index = clamp(Math.round(((x - pad.left) / chartW) * (revenue.length - 1)), 0, revenue.length - 1);
    const gap = revenue[index] - plan[index];
    const status = gap >= 0 ? "Above forecast" : "Below forecast";
    const day = 30 - days + index + 1;

    tooltip.innerHTML = `
      <strong>Day ${day}: ${status}</strong>
      <span>Revenue <b>${formatCurrency(revenue[index])}</b></span>
      <span>Orders <b>${Math.round(orders[index]).toLocaleString()}</b></span>
      <span>Forecast gap <b>${gap >= 0 ? "+" : ""}${formatCurrency(gap)}</b></span>
    `;

    const tooltipWidth = tooltip.offsetWidth || 220;
    const left = clamp(x + 14, 12, rect.width - tooltipWidth - 12);
    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${Math.max(12, pad.top + 8)}px`;
    tooltip.classList.add("visible");
  });
}

function drawLine(ctx, values, max, pad, chartW, chartH, color, dash = []) {
  ctx.beginPath();
  values.forEach((value, index) => {
    const x = pad.left + index * (chartW / (values.length - 1));
    const y = pad.top + chartH - (value / max) * chartH;
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  ctx.setLineDash(dash);
  ctx.stroke();
  ctx.setLineDash([]);
}

function renderProfitWaterfall(state) {
  const metrics = calculateMetrics(state);
  const rows = [
    { label: "Net revenue", value: metrics.revenue, kind: "positive" },
    { label: "COGS", value: -metrics.revenue * (1 - metrics.margin / 100), kind: "negative" },
    { label: "Media spend", value: -metrics.revenue * 0.132 * state.channelEffect.cac, kind: "negative" },
    { label: "Shipping and handling", value: -metrics.revenue * 0.081 * state.regionEffect.cost, kind: "negative" },
    { label: "Returns and refunds", value: -metrics.revenue * (metrics.returnRate / 100), kind: "negative" },
    { label: "Payment and platform fees", value: -metrics.revenue * 0.029, kind: "negative" },
    { label: "Contribution profit", value: metrics.contributionProfit, kind: "positive" },
  ];

  document.querySelector("#profit-waterfall").innerHTML = rows
    .map((row) => {
      const width = clamp((Math.abs(row.value) / metrics.revenue) * 100, 4, 100);
      return `
        <div class="waterfall-row">
          <div class="row-top"><strong>${row.label}</strong><span>${formatCurrency(row.value)}</span></div>
          <div class="bar-track">
            <span class="bar-fill ${row.kind === "negative" ? "negative-fill" : "positive-fill"}" style="width:${width}%"></span>
          </div>
        </div>
      `;
    })
    .join("");
}

function renderChannelEconomics(state) {
  const channels = state.channel === "all" ? base.channels : base.channels.filter((item) => item.key === state.channel);
  document.querySelector("#channel-economics").innerHTML = channels
    .map((item) => {
      const width = clamp(item.contribution * 2.2, 12, 100);
      return `
        <div class="channel-row">
          <div class="row-top"><strong>${item.label}</strong><span>${item.share}% revenue</span></div>
          <div class="bar-track"><span class="bar-fill" style="width:${width}%; background:${item.color}"></span></div>
          <div class="channel-stats">
            <span>${item.roas.toFixed(1)}x ROAS</span>
            <span>${formatCurrency(item.cac)} CAC</span>
            <span>${item.contribution.toFixed(1)}% contribution</span>
          </div>
        </div>
      `;
    })
    .join("");
}

function renderFunnel(state) {
  const conversionBoost = state.channelEffect.conversion + state.segmentEffect.conversion;
  document.querySelector("#funnel-list").innerHTML = base.funnel
    .map((item, index) => {
      const percent = index === base.funnel.length - 1 ? item.percent + conversionBoost : item.percent;
      const width = clamp(percent, 3, 100);
      const value = item.value * state.factor * (index === base.funnel.length - 1 ? 1 + conversionBoost / 100 : 1);
      return `
        <div class="funnel-row">
          <div class="row-top">
            <strong>${item.label}</strong>
            <span>${formatCompact(value)} (${percent.toFixed(index === 0 ? 0 : 1)}%)</span>
          </div>
          <div class="bar-track"><span class="bar-fill" style="width:${width}%; background:${index > 2 ? palette.teal : palette.blue}"></span></div>
          <small>${item.note}</small>
        </div>
      `;
    })
    .join("");
}

function renderCheckoutHealth(state) {
  document.querySelector("#checkout-health").innerHTML = base.diagnostics
    .map((item) => {
      const adjustment = item.label === "Cart abandonment" ? -state.segmentEffect.conversion * 1.7 : 0;
      const value = item.value + adjustment;
      const className = item.tone === "good" || value < item.value ? "positive" : "neutral";
      return `
        <article class="diagnostic-card">
          <span class="mini-label">${item.label}</span>
          <strong>${value.toFixed(item.value % 1 === 0 ? 0 : 1)}${item.suffix}</strong>
          <small class="${className}">${item.target}</small>
        </article>
      `;
    })
    .join("");
}

function renderMerchandising(state) {
  document.querySelector("#merch-grid").innerHTML = base.merchandising
    .map((item) => {
      const revenue = item.revenue * state.factor * state.scenarioEffect.revenue;
      const margin = item.margin + state.channelEffect.margin * 0.35 + state.scenarioEffect.margin;
      const postureClass = item.stock === "Tight" || item.stock === "Reorder" ? "warn" : item.stock === "Heavy" ? "bad" : "good";
      return `
        <article class="merch-card">
          <header>
            <div>
              <strong>${item.category}</strong>
              <small>${item.move}</small>
            </div>
            <span class="badge ${postureClass}">${item.stock}</span>
          </header>
          <div class="bar-track"><span class="bar-fill" style="width:${clamp(margin * 1.7, 10, 100)}%; background:${item.color}"></span></div>
          <div class="merch-stats">
            <span>Revenue <b>${formatCurrency(revenue)}</b></span>
            <span>Margin <b>${margin.toFixed(1)}%</b></span>
            <span>Demand <b>${item.demand}</b></span>
            <span>Action <b>${postureClass === "bad" ? "Clear" : "Scale"}</b></span>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderProducts(state) {
  document.querySelector("#product-table").innerHTML = base.products
    .map((product) => {
      const revenue = product.revenue * state.factor * (state.segment === "vip" ? 1.34 : 1);
      const units = Math.round(product.units * state.factor);
      const cover = Math.max(4, Math.round(product.cover / multipliers.region[state.region]));
      const statusClass = cover < 14 || product.returnRate > 9 ? "bad" : cover > 55 ? "warn" : "good";
      return `
        <tr>
          <td>
            <div class="product-cell">
              <img src="${product.image}" alt="" loading="lazy" />
              <div><strong>${product.name}</strong><span>${product.sku} · ${product.family}</span></div>
            </div>
          </td>
          <td>${formatCurrency(revenue)}</td>
          <td>${product.margin.toFixed(1)}%</td>
          <td>${units.toLocaleString()}</td>
          <td><span class="badge ${statusClass}">${cover} days</span></td>
          <td>${product.returnRate.toFixed(1)}%</td>
          <td><strong>${product.action}</strong></td>
        </tr>
      `;
    })
    .join("");
}

function renderInventory(state) {
  document.querySelector("#inventory-list").innerHTML = base.products
    .map((item) => {
      const adjustedDays = Math.max(4, Math.round(item.cover / multipliers.region[state.region]));
      const fill = clamp((adjustedDays / 90) * 100, 5, 100);
      const stateText = adjustedDays < 14 ? "Stockout risk" : adjustedDays > 60 ? "Overstock cash drag" : "Balanced cover";
      return `
        <div class="inventory-item">
          <div class="row-top"><strong>${item.name}</strong><span>${adjustedDays} days</span></div>
          <div class="bar-track"><span class="bar-fill" style="width:${fill}%; background:${item.color}"></span></div>
          <div class="row-top"><span>${stateText}</span><span>${formatCurrency(item.revenue * 0.21)} cash exposure</span></div>
        </div>
      `;
    })
    .join("");
}

function renderWarehouses(state) {
  const visible = state.region === "all" ? base.warehouses : base.warehouses.filter((row) => row.region === state.region);
  document.querySelector("#warehouse-table").innerHTML = visible
    .map((row) => {
      const open = Math.round(row.open * multipliers.range[state.range]);
      const risk = row.risk + state.regionEffect.risk;
      const shipCost = row.shipCost * state.regionEffect.cost;
      const statusClass = risk > 16 ? "bad" : risk > 10 ? "warn" : "good";
      const statusText = risk > 16 ? "Critical" : risk > 10 ? "Watch" : "Healthy";
      return `
        <tr>
          <td><strong>${row.name}</strong></td>
          <td>${open.toLocaleString()}</td>
          <td>${risk.toFixed(1)}%</td>
          <td>${row.pick.toFixed(1)}%</td>
          <td>${formatCurrency(shipCost)}</td>
          <td>${Math.round(row.issues * multipliers.range[state.range])}</td>
          <td><span class="badge ${statusClass}">${statusText}</span></td>
        </tr>
      `;
    })
    .join("");
}

function renderCustomers(state) {
  document.querySelector("#customer-grid").innerHTML = base.customer
    .map((item) => {
      const multiplier = state.segment === "vip" ? 1.22 : state.segment === "returning" ? 1.12 : state.segment === "new" ? 0.88 : 1;
      const value = typeof item.value === "number" ? item.value * multiplier : item.value;
      return `
        <article class="customer-card">
          <span class="mini-label">${item.label}</span>
          <strong>${item.prefix || ""}${value.toFixed(item.value % 1 === 0 ? 0 : 1)}${item.suffix || ""}</strong>
          <small class="positive">${item.delta}</small>
        </article>
      `;
    })
    .join("");
}

function renderCohorts(state) {
  document.querySelector("#cohort-list").innerHTML = base.cohorts
    .map((cohort) => {
      const selected =
        (state.segment === "new" && cohort.label === "New customers") ||
        (state.segment === "returning" && cohort.label === "Returning") ||
        (state.segment === "vip" && cohort.label === "VIP");
      const aov = cohort.aov * state.channelEffect.aov * state.scenarioEffect.aov;
      const ltv = cohort.ltv * (state.scenario === "profit" ? 1.08 : state.scenario === "growth" ? 0.98 : 1);
      return `
        <article class="cohort-row">
          <div>
            <h3>${cohort.label}</h3>
            <small>${cohort.quality}${selected ? " · active segment" : ""}</small>
          </div>
          <div class="cohort-metrics">
            <span>${cohort.share}% mix</span>
            <span>${formatCurrency(aov)} AOV</span>
            <span>${cohort.payback} payback</span>
            <span>${formatCurrency(ltv)} LTV</span>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderMarketing(state) {
  document.querySelector("#marketing-metrics").innerHTML = base.marketing
    .map((item) => {
      const percent = clamp(item.percent * (state.channel === "paid" ? 0.94 : 1.03), 10, 100);
      return `
        <div class="metric-row">
          <div class="row-top"><strong>${item.label}</strong><span>${item.value}</span></div>
          <div class="bar-track"><span class="bar-fill" style="width:${percent}%; background:${item.color}"></span></div>
          <small>${item.note}</small>
        </div>
      `;
    })
    .join("");
}

function renderPromotions(state) {
  document.querySelector("#promo-list").innerHTML = base.promotions
    .map((promo) => {
      const readinessClass = promo.readiness === "Ready" ? "good" : promo.readiness.includes("Watch") ? "warn" : "bad";
      const liftValue = Number(promo.lift.replace("+", "").replace("%", ""));
      const adjustedLift = liftValue * (state.scenario === "growth" ? 1.18 : state.scenario === "risk" ? 0.72 : 1);
      return `
        <article class="promo-item">
          <span class="promo-date">${promo.date}</span>
          <div>
            <h3>${promo.name}</h3>
            <small>${promo.margin}</small>
            <div class="promo-details">
              <span><b>Owner</b>${promo.owner}</span>
              <span><b>Channel</b>${promo.channel}</span>
              <span><b>Audience</b>${promo.audience}</span>
              <span><b>Inventory</b>${promo.inventory}</span>
            </div>
            <div class="promo-meta">
              <span>+${adjustedLift.toFixed(1)}% demand</span>
              <span>${formatCurrency(promo.revenue * state.factor * state.scenarioEffect.revenue)} revenue</span>
              <span class="badge ${readinessClass}">${promo.readiness}</span>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderActions(state) {
  const actions = [
    {
      title: "Shift paid spend into direct capture",
      body: "Move budget from fatigued paid creatives into email capture, landing page tests, and high-intent retargeting.",
      impact: "+$410K EBIT",
    },
    {
      title: "Protect Hydra Bottle inventory",
      body: "Throttle discounting, raise price modestly, and reserve units for high-LTV segments until reorder lands.",
      impact: "+$260K EBIT",
    },
    {
      title: "Bundle Core Tee overstock",
      body: "Attach tees to Weekend Kit and Trail Pack bundles to increase AOV while reducing aged cash exposure.",
      impact: "+$185K cash",
    },
    {
      title: "Rescue Newark SLA risk",
      body: "Reroute priority orders, add weekend pick labor, and suppress aggressive delivery promises for exposed lanes.",
      impact: "+1.7 pts NPS",
    },
  ];

  if (state.region === "apac") {
    actions.unshift({
      title: "Reset APAC delivery promises",
      body: "Show conservative delivery windows and local carrier confidence before checkout to prevent avoidable refunds.",
      impact: "-$72K refunds",
    });
  }

  if (state.segment === "vip") {
    actions.unshift({
      title: "Launch VIP concierge recovery",
      body: "Give VIP shoppers priority inventory, faster support routing, and early access bundles.",
      impact: "+$96 LTV",
    });
  }

  document.querySelector("#action-board").innerHTML = actions
    .slice(0, 5)
    .map(
      (action, index) => `
        <article class="action-item">
          <span class="impact-rank">${index + 1}</span>
          <div>
            <h3>${action.title}</h3>
            <p>${action.body}</p>
          </div>
          <span class="impact">${action.impact}</span>
        </article>
      `,
    )
    .join("");
}

function renderSignals(state) {
  const signals = [
    { title: "Conversion drag", body: `${state.channel === "paid" ? "Paid traffic is below blended conversion." : "Checkout intent is healthy but cart friction remains."}` },
    { title: "Inventory imbalance", body: "Hydra scarcity and Core Tee overstock should be solved together through price and bundles." },
    { title: "Fulfillment pressure", body: `${state.region === "apac" ? "APAC delivery promise needs tightening." : "Newark is the highest-risk node."}` },
  ];

  document.querySelector("#signal-list").innerHTML = signals
    .map((signal) => `<li><strong>${signal.title}</strong><small>${signal.body}</small></li>`)
    .join("");
}

function renderRiskLedger(state) {
  const scenarioRisk =
    state.scenario === "growth"
      ? { level: "high", title: "Growth push capacity strain", owner: "Exec", exposure: "$240K EBIT", status: "Stage spend by SLA health" }
      : state.scenario === "risk"
        ? { level: "low", title: "Demand suppression risk", owner: "Growth", exposure: "$290K revenue", status: "Monitor repeat demand" }
        : null;
  const risks = scenarioRisk ? [scenarioRisk, ...base.risks] : base.risks;

  document.querySelector("#risk-ledger").innerHTML = risks
    .slice(0, 6)
    .map((risk) => {
      const severity = risk.level === "high" ? "H" : risk.level === "medium" ? "M" : "L";
      return `
        <article class="risk-item ${risk.level}">
          <span class="risk-severity">${severity}</span>
          <div>
            <h3>${risk.title}</h3>
            <small>${risk.status}</small>
            <div class="risk-meta">
              <span>${risk.owner}</span>
              <span>${risk.exposure}</span>
              <span>${risk.level} severity</span>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function render() {
  applySkin();
  const state = getState();
  renderScenario(state);
  renderKpis(state);
  renderOpportunityRadar(state);
  renderStateDemandMap(state);
  drawTrend(state);
  renderProfitWaterfall(state);
  renderChannelEconomics(state);
  renderFunnel(state);
  renderCheckoutHealth(state);
  renderMerchandising(state);
  renderProducts(state);
  renderInventory(state);
  renderWarehouses(state);
  renderCustomers(state);
  renderCohorts(state);
  renderMarketing(state);
  renderPromotions(state);
  renderActions(state);
  renderSignals(state);
  renderRiskLedger(state);
}

restoreSkin();
restoreTheme();
initHeaderCarousel();
initTrendTooltip();
document.querySelectorAll("[data-theme-option]").forEach((button) => {
  button.addEventListener("click", () => {
    applyTheme(button.dataset.themeOption);
    drawTrend(getState());
  });
});
document.querySelectorAll("[data-skin-option]").forEach((button) => {
  button.addEventListener("click", () => {
    setActiveSkinButton(button.dataset.skinOption);
    render();
  });
});
document.querySelectorAll("select").forEach((select) => select.addEventListener("change", render));
window.addEventListener("resize", () => drawTrend(getState()));
render();
