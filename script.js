// ====== DATA PRODUK ======
const PRODUCTS = [
    {
    id: 14,
    name: "House of Smith Sweater Cardigan Pria - New Suls Cardigan Misty #2",
    price:176000,
    price_before: 475000,
    sold: 15000,
    image: "./images/anomali18.jpg",   // harus ada di /images
    url: "https://vt.tokopedia.com/t/ZSHnqMSqG59rU-THSVX/"       // ganti ke link Shopee produkmu
  },   
 {
    id: 15,
    name: "Convergent - Tough Kemeja Flannel Boxy Pria Wanita Lengan Pendek Workshirt",
    price:112000,
    price_before: 399400,
    sold: 100,
    image: "./images/anomali19.jpg",   // harus ada di /images
    url: "https://vt.tokopedia.com/t/ZSHnqM552jqpN-30WvD/"       // ganti ke link Shopee produkmu
  },
    {
    id: 16,
    name: "sternwood Rugby Shirt Long Sleeve Polo Shirt Polo Lengan Panjang Strepe Green White",
    price:100000,
    price_before: 228000,
    sold: 1000,
    image: "./images/anomali20.jpg",   // harus ada di /images
    url: "https://vt.tokopedia.com/t/ZSHnqMxq3TBPU-jZY1L/"       // ganti ke link Shopee produkmu
  },
    {
    id: 13,
    name: "SUFINE-CARGO CREAM CHINOS PREMIUM PRIA Shorts Distro Pendek",
    price:64000,
    price_before: 150000,
    sold: 10000,
    image: "./images/produk14.jpg",   // harus ada di /images
    url: "https://vt.tokopedia.com/t/ZSHn4vEYy9N7T-hJenb/"       // ganti ke link Shopee produkmu
  },
    {
    id: 13,
    name: "14.15.16Sneakers Aekoshoes Beat Blacwhite Lokal Made In Indonesia",
    price:132000,
    price_before: 220000,
    sold: 1400,
    image: "./images/produk15.jpg",   // harus ada di /images
    url: "https://vt.tokopedia.com/t/ZSHn4ceHo9pFt-276jp/"       // ganti ke link Shopee produkmu
  },
    {
    id: 13,
    name: "14.15.16Exhale Apparel Cool Socks",
    price:38000,
    price_before: 50000,
    sold: 2100,
    image: "./images/produk16.jpg",   // harus ada di /images
    url: "https://vt.tokopedia.com/t/ZSHn4c2bCQAp6-iAVGD/"       // ganti ke link Shopee produkmu
  },
    {
    id: 13,
    name: "14.15.16Kacamata Baca 2025 New Anti Radiasi Lensa Plus",
    price:21000,
    price_before: 99000,
    sold: 1200,
    image: "./images/produk17.jpg",   // harus ada di /images
    url: "https://vt.tokopedia.com/t/ZSHn4cBbKPACf-ykQzI/"       // ganti ke link Shopee produkmu
  },
];

// ====== ELEMENTS ======
const grid = document.getElementById("grid");
const q = document.getElementById("q");
const toast = document.getElementById("toast");

// ====== FORMAT RUPIAH ======
function formatRupiah(num) {
  return "Rp " + num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function render(list) {
  grid.innerHTML = "";
  list.forEach(p => {
    // Hitung persentase diskon
    const discount = Math.round(((p.price_before - p.price) / p.price_before) * 100);

    const el = document.createElement("div");
    el.className = "card";
    el.innerHTML = `
      <div class="image">
        <img src="${p.image}" alt="${p.name}">
      </div>
      <div class="body">
        <!-- ID produk ditampilkan -->
        <div class="name">${p.id}. ${p.name}</div>
        <div class="prices">
          <span class="price-now">${formatRupiah(p.price)}</span>
          <span class="price-old">${formatRupiah(p.price_before)}</span>
          <span class="discount">-${discount}%</span>
        </div>
        <div class="sold">Terjual ${p.sold}</div>
        <a href="${p.url}" class="btn" target="_blank">Beli Sekarang</a>
      </div>
    `;
    grid.appendChild(el);
  });
}

// ====== SEARCH ======
q.addEventListener("input", () => {
  const val = q.value.toLowerCase();
  const filtered = PRODUCTS.filter(p => (p.name + p.id).toLowerCase().includes(val));
  render(filtered);
});

// ====== TOAST ======
function showToast(text) {
  toast.textContent = text;
  toast.classList.add("show");
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => toast.classList.remove("show"), 2000);
}

document.addEventListener("click", e => {
  if (e.target.classList.contains("btn")) {
    showToast("Membuka link produk...");
  }
});

// ====== INIT ======
render(PRODUCTS);
