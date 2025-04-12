# SchoolApp-reacNative-Exp

Keren! Ini dia contoh lengkap `README.md` untuk project **React Native + Express + MySQL** kamu — cocok untuk diupload ke GitHub:

---

```markdown
# 📚 FullSekolah App

Aplikasi mobile untuk input dan melihat data sekolah. Dibuat dengan **React Native (Expo Router)** untuk frontend dan **Express.js + MySQL** untuk backend.

---

## 🚀 Tech Stack

### Frontend
- React Native (Expo + Expo Router)
- TypeScript
- Zustand (state management)
- Axios (API call)
- react-native-picker-select
- expo-image-picker

### Backend
- Express.js
- MySQL
- dotenv
- cors

---

## 📦 Install & Setup

### 1. Clone Repo
```bash
git clone https://github.com/username/fullsekolah-app.git
cd fullsekolah-app
```

---

### 2. Setup Backend

```bash
cd backend
npm install
```

#### 💾 `.env` konfigurasi
Buat file `.env` di folder `backend`:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=sekolah_db
PORT=3001
```

#### 🔌 Jalankan backend
```bash
npx nodemon server.js
```
> Server akan jalan di: `http://localhost:3001/api/sekolah`

---

### 3. Setup Frontend (React Native)

```bash
cd ../
npm install
```

#### 📱 Jalankan aplikasi
```bash
npx expo start
```

> Scan QR code dengan aplikasi **Expo Go** dari HP kamu

---

## ✍️ Fitur Utama

- Form input data sekolah
- Upload gambar sekolah (hanya nama file, bukan upload file ke server)
- Validasi form
- Tampilkan riwayat data sekolah
- Simpan data ke MySQL via backend Express

---

## 🗃️ Struktur Folder

```
fullsekolah-app/
│
├── backend/
│   ├── db.js
│   ├── routes/sekolah.js
│   ├── server.js
│   └── .env
│
├── app/           ← Expo Router pages (tab + form)
├── components/    ← Komponen UI (Button, Card, dsb)
├── stores/        ← Zustand store
├── types/         ← Tipe TypeScript (opsional)
└── README.md
```

---

## 🙌 Kontribusi

Pull request dan issue selalu terbuka!  
Feel free to fork dan sesuaikan untuk kebutuhanmu.

---

## 📄 Lisensi

MIT License © 2025 — [Nama Kamu]
```

---

Kalau kamu mau, aku juga bisa bantu ubah bagian `username` dan `Nama Kamu` sesuai dengan akun GitHub kamu. Mau dilanjut upload ke GitHub juga?
