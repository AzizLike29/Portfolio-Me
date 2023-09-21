const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

// Typed js library
let typed = new Typed(".sec-text", {
  strings: ["Fullstack Web Developer", "UI/UX Designer"],
  typeSpeed: 70,
  backSpeed: 90,
  loop: true,
});

// Membuat Event click pada button
document.getElementById("submitButton").addEventListener("click", function () {
  // Ambil nilai dari input form
  // Fungsi dari .value mengambil elemen input, textarea dll
  const name = document.getElementById("name").value;
  const number = document.getElementById("number").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Memberikan validasi ketika user klik button, belum masukin datanya akan muncul notif pesan
  // === membandingkan tipe datanya
  if (name === "" || number === "" || email === "" || message === "") {
    alert("Data yang diberikan null, silahkan isi dengan benar!");
  } else {
    // Ganti nilai dalam elemen-elemen profil dengan nilai dari form
    // Fungsi dari textContent mengambil teks dari html seperti h3, p, span
    document.getElementById("name").textContent = name;
    document.getElementById("number").textContent = number;
    document.getElementById("email").textContent = `email: ${email}`;
    document.getElementById("message").textContent = message;

    // Mengembalikan nilai input string jadi kosong ketika sudah klik button
    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

    // Menampilkan notif ketika button sudah diklik
    alert("Data anda berhasil disimpan!");
  }
});
