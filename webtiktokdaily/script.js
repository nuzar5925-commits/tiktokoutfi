/* ===== DATA PRODUK ===== */
const PRODUCTS = [
  {
    id: 5021,
    name: "Tote Bag Trendy",
    price: 69000,
    price_before: 109000,
    sold: 310,
    image: "images/beng.jpeg",
    url: "https://vt.tokopedia.com/t/ZSHtKmQt6FsAG-CF0ZZ/"
  },
  {
    id: 4112,
    name: "Casual Hoodie Cream",
    price: 179000,
    price_before: 259000,
    sold: 87,
    image: "images/hoodie.jpg",
    url: "#"
  },
  {
    id: 3001,
    name: "Sepatu Knit Abu",
    price: 159000,
    price_before: 229000,
    sold: 102,
    image: "images/sepatu-knit.jpg",
    url: ""
  },
  {
    id: 2131,
    name: "Asym Knit Elegant",
    price: 89000,
    price_before: 129000,
    sold: 206,
    image: "images/asym.jpg",
    url: "#"
  }
];

/* ===== UTIL ===== */
const toRp = n =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0
  }).format(n);

/* ===== RENDER PRODUK ===== */
const grid = document.getElementById("product-grid");
const search = document.getElementById("search");
const clearBtn = document.getElementById("clear");
const sort = document.getElementById("sort");

function render(list) {
  grid.innerHTML = "";
  list.forEach(p => {
    const disc = Math.round(((p.price_before - p.price) / p.price_before) * 100);
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <span class="badge">-${disc}%</span>
      <img src="${p.image}" alt="${p.name}">
      <div class="card-content">
        <h3>${p.id}. ${p.name}</h3>
        <div>
          <span class="price">${toRp(p.price)}</span>
          <span class="price-before">${toRp(p.price_before)}</span>
        </div>
        <div class="free">Gratis Ongkir</div>
        <div class="sold">Terjual ${p.sold}</div>
      </div>
      <a href="${p.url}" class="btn" target="_blank">Lihat</a>
    `;
    grid.appendChild(card);
  });
}

render(PRODUCTS);

/* ===== SEARCH ===== */
search.addEventListener("input", e => {
  const q = e.target.value.toLowerCase();
  const filtered = PRODUCTS.filter(
    p =>
      p.name.toLowerCase().includes(q) ||
      String(p.id).includes(q)
  );
  render(filtered);
});
clearBtn.addEventListener("click", () => {
  search.value = "";
  render(PRODUCTS);
});

/* ===== SORT ===== */
sort.addEventListener("change", e => {
  let sorted = [...PRODUCTS];
  if (e.target.value === "new") sorted.sort((a,b) => b.id - a.id);
  if (e.target.value === "old") sorted.sort((a,b) => a.id - b.id);
  if (e.target.value === "cheap") sorted.sort((a,b) => a.price - b.price);
  if (e.target.value === "expensive") sorted.sort((a,b) => b.price - a.price);
  if (e.target.value === "sold") sorted.sort((a,b) => b.sold - a.sold);
  render(sorted);
});