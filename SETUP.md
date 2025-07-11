# 🚀 Setup Guide - Profil GitHub Keren

Panduan lengkap untuk mengatur dan mengkustomisasi profil GitHub Anda yang keren!

## 📋 Daftar Isi

1. [Persiapan Awal](#persiapan-awal)
2. [Setup Repository](#setup-repository)
3. [Kustomisasi Profil](#kustomisasi-profil)
4. [Mengaktifkan GitHub Actions](#mengaktifkan-github-actions)
5. [Tips dan Trik](#tips-dan-trik)
6. [Troubleshooting](#troubleshooting)

## 🎯 Persiapan Awal

### 1. Buat Repository Khusus
- Buat repository baru dengan nama yang sama dengan username GitHub Anda
- Contoh: jika username Anda `yubiwangak19`, buat repository `yubiwangak19`
- Pastikan repository bersifat **public**
- Centang opsi "Add a README file"

### 2. Clone Repository
```bash
git clone https://github.com/yubiwangak19/yubiwangak19.git
cd yubiwangak19
```

## 🛠️ Setup Repository

### 1. Upload File-file Profil
Salin semua file dari folder ini ke repository Anda:
- `README.md` - File profil utama
- `.github/workflows/snake.yml` - GitHub Actions untuk animasi snake
- `assets/style.css` - CSS kustom untuk styling
- `assets/script.js` - JavaScript untuk efek interaktif
- `.devcontainer/devcontainer.json` - Konfigurasi development container

### 2. Commit dan Push
```bash
git add .
git commit -m "✨ Add awesome GitHub profile"
git push origin main
```

## 🎨 Kustomisasi Profil

### 1. Informasi Personal
Edit bagian berikut di `README.md`:

```javascript
const yubi = {
    nama: "Nama Anda",           // Ganti dengan nama Anda
    lokasi: "Lokasi Anda 🇮🇩",    // Ganti dengan lokasi Anda
    umur: "calculateAge(birthDate)",
    status: "Available for work",
    passion: "Building amazing things",
    coffee: "☕ Unlimited cups per day",
    motto: "Code with passion! 💻✨"
};
```

### 2. Skills & Technologies
Sesuaikan badge teknologi dengan skill Anda:

```markdown
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
```

### 3. Social Media Links
Update link media sosial Anda:

```markdown
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/username-anda)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/username-anda)
```

### 4. Featured Projects
Ganti dengan repository Anda sendiri:

```markdown
[![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=username-anda&repo=nama-repo&theme=tokyonight)](https://github.com/username-anda/nama-repo)
```

## ⚙️ Mengaktifkan GitHub Actions

### 1. Enable Actions
- Pergi ke repository Settings
- Klik "Actions" di sidebar
- Pilih "Allow all actions and reusable workflows"

### 2. Set Permissions
- Di Settings > Actions > General
- Scroll ke "Workflow permissions"
- Pilih "Read and write permissions"
- Centang "Allow GitHub Actions to create and approve pull requests"

### 3. Manual Trigger (Opsional)
- Pergi ke tab "Actions"
- Klik workflow "Generate Snake"
- Klik "Run workflow"

## 🎨 Kustomisasi Lanjutan

### 1. Mengubah Tema Warna
Edit variabel CSS di `assets/style.css`:

```css
:root {
    --primary-color: #00D9FF;    /* Warna utama */
    --secondary-color: #0099CC;  /* Warna sekunder */
    --background-color: #0D1117; /* Warna background */
    --text-color: #FFFFFF;       /* Warna teks */
}
```

### 2. Menambah Animasi Baru
Tambahkan keyframe baru di `assets/style.css`:

```css
@keyframes customAnimation {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}

.custom-element {
    animation: customAnimation 2s infinite;
}
```

### 3. Efek JavaScript Kustom
Tambahkan fungsi baru di `assets/script.js`:

```javascript
function customEffect() {
    // Kode efek kustom Anda
    console.log('Custom effect activated!');
}

// Panggil fungsi di event listener
document.addEventListener('DOMContentLoaded', () => {
    customEffect();
});
```

## 📊 Statistik GitHub

### 1. GitHub Stats
Ganti `yubiwangak19` dengan username Anda:

```markdown
![GitHub Stats](https://github-readme-stats.vercel.app/api?username=username-anda&show_icons=true&theme=radical)
```

### 2. Language Stats
```markdown
![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=username-anda&layout=compact&theme=radical)
```

### 3. Streak Stats
```markdown
![GitHub Streak](https://github-readme-streak-stats.herokuapp.com/?user=username-anda&theme=radical)
```

## 🎯 Tips dan Trik

### 1. Optimasi Performa
- Gunakan CDN untuk gambar besar
- Kompres GIF dan animasi
- Batasi jumlah badge untuk loading yang lebih cepat

### 2. SEO GitHub
- Gunakan keywords yang relevan di deskripsi
- Tambahkan topics yang sesuai di repository
- Buat README yang informatif dan menarik

### 3. Konsistensi Branding
- Gunakan skema warna yang konsisten
- Pilih font yang mudah dibaca
- Pertahankan style yang sama di semua elemen

### 4. Mobile Responsiveness
- Test tampilan di berbagai ukuran layar
- Gunakan unit responsif (%, em, rem)
- Pertimbangkan touch-friendly elements

## 🔧 Troubleshooting

### 1. Snake Animation Tidak Muncul
**Solusi:**
- Pastikan GitHub Actions sudah enabled
- Check workflow permissions
- Tunggu beberapa menit setelah push pertama
- Manual trigger workflow jika perlu

### 2. Stats Tidak Loading
**Solusi:**
- Pastikan username benar
- Check apakah repository public
- Coba ganti theme jika ada error
- Tunggu beberapa saat untuk cache refresh

### 3. Badge Tidak Tampil
**Solusi:**
- Periksa URL badge
- Pastikan service badge masih aktif
- Gunakan alternatif jika service down
- Check network connectivity

### 4. CSS/JS Tidak Bekerja
**Solusi:**
- Pastikan path file benar
- Check syntax error di console
- Validate CSS dan JS
- Test di browser berbeda

## 📱 Preview Lokal

Untuk melihat preview profil secara lokal:

1. Buka `preview.html` di browser
2. Atau gunakan live server:
```bash
npx live-server .
```

## 🚀 Deploy ke GitHub Pages (Opsional)

1. Pergi ke repository Settings
2. Scroll ke "Pages"
3. Source: Deploy from a branch
4. Branch: main / (root)
5. Save

Profil akan tersedia di: `https://username-anda.github.io/username-anda`

## 📝 Checklist Setup

- [ ] Repository dibuat dengan nama username
- [ ] README.md sudah dikustomisasi
- [ ] Informasi personal sudah diupdate
- [ ] Social media links sudah benar
- [ ] GitHub Actions sudah enabled
- [ ] Snake animation berjalan
- [ ] Stats menampilkan data yang benar
- [ ] Preview lokal sudah dicek
- [ ] Mobile responsiveness sudah ditest

## 🎉 Selamat!

Profil GitHub keren Anda sudah siap! Jangan lupa untuk:
- Update secara berkala
- Tambahkan project baru
- Interaksi dengan komunitas
- Keep learning dan growing!

---

**💡 Pro Tip:** Bookmark halaman ini untuk referensi future updates!

**🤝 Need Help?** Buat issue di repository ini atau hubungi saya di social media.

**⭐ Suka dengan setup ini?** Jangan lupa star repository ini!