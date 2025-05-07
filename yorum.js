document.getElementById("yeniyorumformu").addEventListener("submit", function(e) {
  e.preventDefault();

  const yazar = document.getElementById("yazar-adi").value.trim();
  const yorum = document.getElementById("yorum-metni").value.trim();
  const mesajKutusu = document.getElementById("yorum-mesaji");

  if (yazar === "" || yorum === "") {
    mesajKutusu.textContent = "Lütfen tüm alanları doldurun.";
    mesajKutusu.className = "hatali";
    mesajKutusu.style.display = "block";
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `<strong>${yazar}</strong>: ${yorum}`;
  document.getElementById("yorum-listesi").appendChild(li);

  mesajKutusu.textContent = "Yorum başarıyla eklendi!";
  mesajKutusu.className = "basarili";
  mesajKutusu.style.display = "block";

  // Formu temizle
  document.getElementById("yeniyorumformu").reset();
});
