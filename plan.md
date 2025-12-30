🚀 Master Plan: Ultimate Web Dev & ML Portfolio

Project Concept: High-End Dark Glassmorphism Portfolio
Role Identity: Fullstack Developer x Machine Learning Engineer
Core Aesthetic: Futurism, Precision, Depth, & Motion.

🛠 Tech Stack (Rekomendasi)

Untuk mencapai performa 60fps dengan visual yang berat dan interaktif, berikut adalah kombinasi teknologi yang digunakan:

Komponen

Teknologi

Alasan

Framework

React

Ekosistem komponen yang luas dan fleksibel untuk UI kompleks.

Styling

Tailwind CSS

Styling cepat, sistem utility-first untuk glassmorphism.

Animation

Framer Motion

Transisi layout kompleks, scroll reveal, dan tab switching.

3D / WebGL

React Three Fiber (R3F)

Render partikel neural network & elemen 3D (ML vibe).

Smooth Scroll

Lenis

Membuat scrolling terasa "berat" dan premium (luxury feel).

State Mgmt

Zustand

(Opsional) Untuk state global yang ringan dan cepat.

🎨 Design System

1. Palet Warna (Dark Mode)

Main Background: #050505 (Obsidian) atau #0B0C10 (Deep Space). Hindari hitam pekat #000 agar depth terlihat.

Glass Surface: rgba(255, 255, 255, 0.05) (5% Opacity).

Accent 1 (Dev): #00F2EA (Cyan / Electric Blue).

Accent 2 (ML): #FF0050 (Neon Purple / Magenta).

Text: #F8FAFC (Off-white) untuk bacaan utama, #94A3B8 untuk teks sekunder.

2. Rumus Glassmorphism

Gunakan utility Tailwind berikut sebagai base class untuk semua kartu:

.glass-panel {
  @apply bg-white/5 backdrop-blur-[12px] border border-white/10 shadow-xl;
}


🗺 Struktur Halaman & Fitur

1. Hero Section

Konsep: Visualisasi data bertemu struktur web.

Background: WebGL interaktif. Partikel yang membentuk jaring saraf (neural network) yang bergerak mengikuti posisi mouse secara dinamis.

Content:

Headline besar dengan efek Glitch Text halus saat load.

Sub-headline: "Crafting Intelligence into Interfaces".

Animasi: Partikel menyebar secara dramatis saat user melakukan scroll pertama.

2. About Me

Konsep: Storytelling futuristik dan personal.

Layout: Split screen (Teks di sisi kiri, Visual di sisi kanan).

Visual: Foto profil dibungkus dalam efek 3D Tilt Card (kartu kaca yang miring secara halus mengikuti pergerakan mouse).

Text Effect: Text Scramble / Decoding. Karakter acak yang berubah menjadi teks asli saat masuk ke dalam viewport.

3. Tech Stack & Soft Skills

Konsep: Floating Elements & Digital Arsenal.

Layout: Grid responsif dengan kartu kaca transparan.

Kategori:

Web Dev: React, Next.js, TS, Tailwind.

Machine Learning: Python, PyTorch, TensorFlow, Pandas.

Interaksi:

Saat hover, icon skill "melayang" keluar dari kaca (Translate Z).

Muncul efek glow di belakang kartu sesuai warna identitas brand skill tersebut.

4. Projects & Achievements (2 Tabs)

Konsep: Interactive Showcase.

UI Component: Animated Tab Switcher berbentuk kapsul kaca minimalis.

Tab 1: Projects

Tampilan: Masonry Grid.

Interaksi: Kartu proyek berupa kaca buram (frosted). Saat di-hover, kaca menjadi jernih dan memutar video preview proyek secara otomatis (muted).

Tab 2: Achievements

Tampilan: Vertical List dengan desain HUD.

Konten: Sertifikat, kemenangan Hackathon, dan publikasi paper.

Visual: Icon piala/medali dengan efek shimmer (kilau cahaya) yang bergerak periodik.

5. Work Experience

Konsep: Connecting the dots.

Layout: Garis vertikal bercahaya (glow) di tengah sebagai timeline utama.

Animasi Scroll:

Garis timeline terisi cahaya ("energi") seiring user scroll ke bawah.

Setiap poin pengalaman muncul dengan efek slide-in dari arah berlawanan saat garis melewatinya.

6. Social Proof & Contact Form

Konsep: Trust, Connection, & Technical Excellence.

Social Proof: Infinite Marquee. Barisan logo klien atau potongan testimoni yang berjalan perlahan dalam strip kaca horizontal.

Contact Form:

Gaya: HUD (Heads-Up Display). Border tipis dengan font teknikal (monospace).

Animasi Submit: Tombol berubah menjadi animasi pesawat kertas -> Loading progresif -> Pesan sukses "Sent".

Footer: Tautan sosial media dengan efek Magnetic Button yang menarik kursor secara halus.

✨ "Wow" Factors (Detail Kecil)

Custom Cursor: Lingkaran kecil yang membesar, berubah warna, atau melakukan invert warna saat menyentuh elemen interaktif.

Noise Texture: Overlay tekstur noise statis (opacity 3%) di seluruh layar untuk memberikan kesan "film grain" premium dan organik.

Micro-Interactions: Suara klik mekanik yang sangat halus (opsional) atau getaran haptic pada perangkat mobile saat berinteraksi dengan tombol.