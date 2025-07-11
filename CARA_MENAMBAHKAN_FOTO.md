# 📸 Cara Menambahkan Foto ke Profil GitHub

## 🎯 Metode 1: Upload ke Repository (Recommended)

### Langkah-langkah:

1. **Buat folder `assets` di repository Anda:**
   ```
   yubiwangak19/
   ├── README.md
   ├── assets/
   │   └── profile-photo.jpg
   ```

2. **Upload foto JPEG Anda ke folder `assets`:**
   - Nama file: `profile-photo.jpeg` atau `profile-photo.jpg`
   - Ukuran recommended: 400x400 pixels
   - Format: **JPEG/JPG** (recommended untuk foto profil)

3. **Ganti URL di README.md:**
   ```markdown
   <!-- Sudah diupdate untuk menggunakan JPEG: -->
   <img width="200" height="200" src="./assets/profile-photo.jpeg" alt="Foto Profil Yubi Bala" style="border-radius: 50%; border: 4px solid #00D9FF; box-shadow: 0 4px 8px rgba(0, 217, 255, 0.3);" />
   ```

---

## 🎯 Metode 2: Menggunakan GitHub Issues (Paling Mudah)

### Langkah-langkah:

1. **Buka repository GitHub Anda**
2. **Klik tab "Issues"**
3. **Klik "New Issue"**
4. **Drag & drop foto Anda ke text area**
5. **GitHub akan generate URL otomatis seperti:**
   ```
   https://user-images.githubusercontent.com/username/12345678-abcd-1234-efgh-567890abcdef.jpg
   ```
6. **Copy URL tersebut dan paste ke README.md**
7. **Batalkan issue (tidak perlu di-submit)**

---

## 🎯 Metode 3: Menggunakan Service External

### Imgur:
1. Upload foto ke [imgur.com](https://imgur.com)
2. Copy direct link
3. Paste ke README.md

### Cloudinary:
1. Upload ke [cloudinary.com](https://cloudinary.com)
2. Copy URL
3. Paste ke README.md

---

## 🎨 Contoh Implementasi Foto

### Foto Profil Bulat dengan Border:
```markdown
<img width="200" height="200" src="URL_FOTO_ANDA" alt="Foto Profil" style="border-radius: 50%; border: 4px solid #00D9FF; box-shadow: 0 4px 8px rgba(0, 217, 255, 0.3);" />
```

### Foto dengan Animasi Hover:
```markdown
<img width="200" height="200" src="URL_FOTO_ANDA" alt="Foto Profil" style="border-radius: 50%; border: 4px solid #00D9FF; transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'" />
```

### Banner Header dengan Foto:
```markdown
<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=200&section=header&text=Yubi%20Bala&fontSize=50&fontColor=fff&animation=twinkling&fontAlignY=35" />
  
  <img width="150" height="150" src="URL_FOTO_ANDA" alt="Foto Profil" style="border-radius: 50%; border: 4px solid #fff; margin-top: -75px; position: relative; z-index: 1;" />
</div>
```

---

## 📝 Tips untuk Foto Profil yang Bagus:

1. **Ukuran:** 400x400 pixels (square/persegi)
2. **Format:** PNG untuk transparansi, JPG untuk file size kecil
3. **Background:** Solid color atau transparan
4. **Lighting:** Pencahayaan yang baik
5. **Professional:** Terlihat profesional tapi tetap friendly
6. **File Size:** Maksimal 1MB untuk loading yang cepat

---

## 🔧 Troubleshooting:

### Foto tidak muncul?
- Pastikan URL benar
- Cek apakah file sudah ter-commit ke repository
- Pastikan file tidak terlalu besar (>10MB)

### Foto pecah/blur?
- Upload foto dengan resolusi tinggi
- Gunakan format PNG untuk kualitas terbaik

### Border tidak muncul?
- Pastikan style CSS ditulis dengan benar
- Cek apakah ada konflik dengan tema GitHub

---

## 🎉 Setelah Upload Foto:

Ganti baris ini di README.md:
```markdown
<img width="200" height="200" src="https://via.placeholder.com/200x200/00D9FF/FFFFFF?text=FOTO+ANDA" alt="Foto Profil Yubi Bala" style="border-radius: 50%; border: 4px solid #00D9FF; box-shadow: 0 4px 8px rgba(0, 217, 255, 0.3);" />
```

Dengan:
```markdown
<img width="200" height="200" src="URL_FOTO_ANDA_YANG_SEBENARNYA" alt="Foto Profil Yubi Bala" style="border-radius: 50%; border: 4px solid #00D9FF; box-shadow: 0 4px 8px rgba(0, 217, 255, 0.3);" />
```