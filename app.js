/**
 * Portal Internal - Frontend Application Logic
 * Implements in-memory database, SPA hash router, dynamic views, filters, and interactivity.
 */

// ==========================================================================
// MOCK DATABASE STATE
// ==========================================================================
const STATE = {
  news: [
    {
      id: 'transformasi-digital-2024',
      title: 'Transformasi Digital 2024: Langkah Menuju Efisiensi Operasional Menyeluruh',
      author: 'Adinda Putri',
      authorRole: 'Corporate Communications',
      authorAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100',
      date: '14 Oktober 2024',
      category: 'Transformasi',
      readTime: '6 Menit',
      image: 'assets/server_racks.png',
      content: `
        <p>Perusahaan secara resmi mengumumkan peta jalan (roadmap) transformasi digital untuk tahun 2024. Inisiatif ini bukan sekadar pembaruan sistem, melainkan perubahan mendasar pada bagaimana kita bekerja dan berkolaborasi secara berkelanjutan.</p>
        <p>Dalam rapat pimpinan yang diadakan awal pekan ini, CEO menekankan pentingnya adopsi teknologi berbasis cloud dan kecerdasan buatan (AI) untuk mempercepat proses pengambilan keputusan. Dengan data yang lebih terintegrasi, setiap departemen diharapkan dapat bekerja lebih lincah dan responsif terhadap tantangan pasar yang semakin dinamis.</p>
        <h3>Tiga Pilar Utama Transformasi</h3>
        <p>Rencana strategis ini berfokus pada tiga pilar utama yang akan menjadi fondasi operasional perusahaan di masa depan:</p>
        <ul>
          <li><strong>Modernisasi Infrastruktur:</strong> Migrasi penuh ke sistem komputasi awan yang lebih aman, fleksibel, dan skalabel guna mendukung integrasi multidepartemen.</li>
          <li><strong>Budaya Data:</strong> Memberikan akses analitik data yang andal kepada seluruh manajer untuk mendukung pengambilan keputusan strategis berbasis bukti (evidence-based).</li>
          <li><strong>Peningkatan Kapasitas SDM:</strong> Program pelatihan berkelanjutan bagi karyawan untuk menguasai alat digital terbaru dan meningkatkan literasi teknologi informasi.</li>
        </ul>
        <div class="content-decor-img">
          <span>[ Visualisasi Infrastruktur Cloud & Dashboard Keamanan Terintegrasi ]</span>
        </div>
        <p>Implementasi tahap pertama akan dimulai pada kuartal keempat tahun ini, diawali dengan integrasi sistem manajemen proyek di seluruh unit bisnis. Manajemen berkomitmen untuk menjaga transparansi selama proses transisi ini berlangsung dan membuka ruang umpan balik bagi seluruh karyawan.</p>
      `,
      blocks: [
        { id: 'b-1', type: 'heading', content: 'Inisiatif Strategis Transformasi Digital 2024', settings: { size: 'jumbo', align: 'left' } },
        { id: 'b-2', type: 'callout', content: 'Transformasi digital ini bertujuan meningkatkan efisiensi operasional sebesar 35% dan mempercepat integrasi layanan multidepartemen.', settings: { theme: 'blue', icon: '📢' } },
        { id: 'b-3', type: 'paragraph', content: 'Perusahaan secara resmi mengumumkan peta jalan (roadmap) transformasi digital untuk tahun 2024. Inisiatif ini bukan sekadar pembaruan sistem, melainkan perubahan mendasar pada bagaimana kita bekerja dan berkolaborasi secara berkelanjutan.', settings: {} },
        { id: 'b-4', type: 'image', content: 'assets/server_racks.png', settings: { imageWidth: '75', align: 'center', caption: 'Visualisasi Infrastruktur Cloud & Dashboard Keamanan Terintegrasi', borderRadius: 'radius-lg' } },
        { id: 'b-5', type: 'heading', content: 'Pilar Utama Transformasi Operasional', settings: { size: 'large', align: 'left' } },
        { id: 'b-6', type: 'columns', content: '', settings: { col1: 'Modernisasi Infrastruktur Cloud:\nMigrasi penuh ke sistem komputasi awan yang lebih aman, fleksibel, dan skalabel guna mendukung integrasi multidepartemen.', col2: 'Budaya Data & Pelatihan SDM:\nMemberikan akses analitik data yang andal kepada seluruh manajer dan program pelatihan berkelanjutan bagi karyawan.' } },
        { id: 'b-7', type: 'quote', content: 'Teknologi adalah pemenang ketika manusia dan budaya organisasi bergerak beriringan menuju inovasi.', settings: { author: 'CEO & Board of Directors' } },
        { id: 'b-8', type: 'divider', content: '', settings: { style: 'gradient' } }
      ],
      attachments: [
        { name: 'Presentasi Roadmap Digital 2024.pptx', size: '12.4 MB', type: 'ppt' },
        { name: 'Panduan Teknis Sistem Baru.pdf', size: '4.8 MB', type: 'pdf' }
      ],
      comments: [
        { name: 'Budi Santoso', role: 'HR Specialist', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100', date: '14 Okt 2024', text: 'Sangat menyambut baik integrasi ini! Semoga ada sesi khusus pengenalan tool barunya.' },
        { name: 'Adinda Putri', role: 'Corporate Communications', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100', date: '15 Okt 2024', text: '@Budi Tentu, tim IT dan Training sedang menyusun jadwal workshop berseri untuk setiap divisi.' }
      ],
      relatedNewsIds: ['inovasi-tanpa-batas', 'kebijakan-wfa-baru']
    },
    {
      id: 'csr-hijaukan-bumi',
      title: 'Program CSR Hijaukan Bumi: Penanaman 1000 Pohon di Hutan Lindung',
      author: 'Rian Prasetya',
      authorRole: 'CSR Specialist',
      authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
      date: '28 Mei 2024',
      category: 'CSR',
      readTime: '4 Menit',
      image: 'assets/tree_planting.png',
      content: `
        <p>Sebagai bagian dari komitmen tanggung jawab sosial perusahaan (CSR), Portal Internal bangga membagikan keberhasilan pelaksanaan program "Hijaukan Bumi" yang diadakan akhir pekan lalu di Hutan Lindung Sentul.</p>
        <p>Lebih dari 150 relawan karyawan dari berbagai departemen ikut ambil bagian dalam menanam bibit pohon mahoni, sengon, dan buah-buahan lokal. Kolaborasi ini tidak hanya bertujuan memperbaiki ekosistem setempat tetapi juga mempererat hubungan antarkaryawan di luar lingkungan kantor formal.</p>
        <h3>Kontribusi Terhadap Keberlanjutan Lingkungan</h3>
        <p>Melalui inisiatif ini, perusahaan berkomitmen untuk memantau pertumbuhan pohon secara berkala bersama LSM Lingkungan setempat guna memastikan persentase hidup tanaman di atas 90%. Program ini diharapkan berkontribusi terhadap penurunan emisi karbon jangka panjang perusahaan.</p>
      `,
      attachments: [
        { name: 'Laporan Dampak Lingkungan CSR 2024.pdf', size: '2.1 MB', type: 'pdf' }
      ],
      comments: [
        { name: 'Dewi Citra', role: 'HR Director', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100', date: '29 Mei 2024', text: 'Salut untuk seluruh relawan yang telah menyisihkan waktu akhir pekannya untuk bumi yang lebih hijau!' }
      ],
      relatedNewsIds: ['transformasi-digital-2024', 'penghargaan-best-place-to-work']
    },
    {
      id: 'inovasi-tanpa-batas',
      title: 'Inovasi Tanpa Batas: Tim Tech Meluncurkan Framework Internal Baru',
      author: 'Andi Wijaya',
      authorRole: 'Tech Lead',
      authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100',
      date: '22 Mei 2024',
      category: 'Kegiatan',
      readTime: '5 Menit',
      image: 'assets/hero_banner.png',
      content: `
        <p>Kabar gembira datang dari divisi engineering! Tim Core Tech resmi meluncurkan framework pengembangan aplikasi versi 1.0 yang didesain khusus untuk kebutuhan produk internal perusahaan.</p>
        <p>Framework baru ini mengintegrasikan standar keamanan terbaru, sistem caching pintar, dan modul UI yang siap pakai. Dalam uji coba terbatas, platform ini mampu memangkas waktu coding dasar (boilerplate) hingga 40%, memungkinkan developer fokus pada logika bisnis utama.</p>
        <h3>Jadwal Migrasi dan Sesi Pembelajaran</h3>
        <p>Sosialisasi penggunaan framework akan dimulai minggu depan melalui serangkaian sesi tech-talk dan hands-on lab. Semua developer diharapkan dapat bertransisi secara bertahap pada kuartal ini.</p>
      `,
      attachments: [
        { name: 'Dokumentasi Framework Core v1.0.pdf', size: '6.2 MB', type: 'pdf' }
      ],
      comments: [],
      relatedNewsIds: ['transformasi-digital-2024']
    },
    {
      id: 'penghargaan-best-place-to-work',
      title: 'Perusahaan Meraih Penghargaan "Best Place to Work 2024"',
      author: 'Dewi Citra',
      authorRole: 'HR Director',
      authorAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100',
      date: '18 April 2024',
      category: 'Penghargaan',
      readTime: '4 Menit',
      image: 'assets/office_collaboration.png',
      content: `
        <p>Kerja keras seluruh karyawan dalam membangun budaya kerja yang inklusif, suportif, dan inovatif membuahkan hasil manis. Perusahaan resmi dianugerahi gelar bergengsi "Best Place to Work 2024" tingkat nasional oleh lembaga survei HR terkemuka.</p>
        <p>Penghargaan ini dinilai berdasarkan parameter kepuasan karyawan, program pengembangan karir, fasilitas kesehatan mental, serta inisiatif keseimbangan hidup-kerja (work-life balance) yang berjalan konsisten.</p>
        <p>Direktur Utama menyampaikan apresiasi mendalam kepada seluruh jajaran manajemen dan tim HR yang senantiasa menempatkan kebahagiaan karyawan sebagai prioritas utama operasi bisnis.</p>
      `,
      attachments: [],
      comments: [
        { name: 'Budi Santoso', role: 'HR Specialist', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100', date: '19 Apr 2024', text: 'Bangga menjadi bagian dari tim ini! Pencapaian luar biasa.' }
      ],
      relatedNewsIds: ['kebijakan-wfa-baru', 'csr-hijaukan-bumi']
    },
    {
      id: 'kebijakan-wfa-baru',
      title: 'Update Kebijakan WFA: Fleksibilitas Kerja untuk Keseimbangan Hidup',
      author: 'Dimas Wibowo',
      authorRole: 'HR Communications',
      authorAvatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=100',
      date: '12 April 2024',
      category: 'Rilis Internal',
      readTime: '3 Menit',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600',
      content: `
        <p>Menindaklanjuti hasil evaluasi survei kerja hibrida, manajemen mengumumkan pembaruan kebijakan Work From Anywhere (WFA) interaktif yang memberikan fleksibilitas tambahan bagi karyawan.</p>
        <p>Dalam aturan terbaru, karyawan diperbolehkan melakukan kerja remote penuh hingga 10 hari kerja dalam satu semester dengan persetujuan manajer terkait. Hal ini ditujukan untuk mempermudah pemenuhan keperluan personal penting tanpa mengorbankan performa kerja.</p>
        <h3>Prosedur Pengajuan</h3>
        <p>Sistem pengajuan WFA kini dapat diakses secara instan melalui sistem Portal HR terpadu pada menu "Kehadiran". Silakan merujuk pada dokumen panduan terlampir untuk kriteria persetujuan detail.</p>
      `,
      attachments: [
        { name: 'SOP Pengajuan WFA Fleksibel 2024.pdf', size: '1.2 MB', type: 'pdf' }
      ],
      comments: [],
      relatedNewsIds: ['penghargaan-best-place-to-work']
    }
  ],
  magazines: [
    {
      id: 'mag-12',
      title: 'Inovasi Tanpa Batas',
      issueNumber: 'Edisi #12',
      month: 'Desember',
      year: '2024',
      category: 'Teknologi',
      coverImage: 'assets/magazine_cover_artistic.png',
      pdfUrl: 'assets/magazine_cover_artistic.png'
    },
    {
      id: 'mag-11',
      title: 'Energi Masa Depan',
      issueNumber: 'Edisi #11',
      month: 'November',
      year: '2024',
      category: 'Keberlanjutan',
      coverImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=400',
      pdfUrl: '#'
    },
    {
      id: 'mag-10',
      title: 'Harmoni & Kolaborasi',
      issueNumber: 'Edisi #10',
      month: 'Oktober',
      year: '2024',
      category: 'Budaya Kerja',
      coverImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
      pdfUrl: '#'
    },
    {
      id: 'mag-09',
      title: 'Pilar Pertumbuhan',
      issueNumber: 'Edisi #09',
      month: 'September',
      year: '2024',
      category: 'Bisnis',
      coverImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
      pdfUrl: '#'
    },
    {
      id: 'mag-08',
      title: 'Kesehatan Mental di Kantor',
      issueNumber: 'Edisi #08',
      month: 'Agustus',
      year: '2024',
      category: 'Kesejahteraan',
      coverImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400',
      pdfUrl: '#'
    },
    {
      id: 'mag-07',
      title: 'Dunia Digital Kita',
      issueNumber: 'Edisi #07',
      month: 'Juli',
      year: '2024',
      category: 'Teknologi',
      coverImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
      pdfUrl: '#'
    }
  ],
  events: [
    {
      id: 'semarak-kemerdekaan',
      title: 'Semarak Kemerdekaan 2024',
      date: '17 Agustus 2024',
      year: '2024',
      category: 'Kegiatan Kantor',
      coverImage: 'assets/office_collaboration.png',
      description: 'Dokumentasi perayaan HUT RI ke-79 di lingkungan kantor pusat dengan berbagai perlombaan seru, pawai busana adat, dan panggung hiburan karyawan.',
      photos: [
        { id: 'sk-1', title: 'Upacara Bendera 17 Agustus', type: 'Foto', mediaUrl: 'assets/office_collaboration.png', categoryLabel: 'Kegiatan Kantor' },
        { id: 'sk-2', title: 'Lomba Tarik Tambang Antar Divisi', type: 'Foto', mediaUrl: 'assets/hero_banner.png', categoryLabel: 'Kegiatan Kantor' },
        { id: 'sk-3', title: 'Pemenang Kostum Tradisional Terbaik', type: 'Foto', mediaUrl: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=600', categoryLabel: 'Kegiatan Kantor' },
        { id: 'sk-4', title: 'Highlight Video Kemeriahan Kemerdekaan', type: 'Video', mediaUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=600', categoryLabel: 'Kegiatan Kantor' },
        { id: 'sk-5', title: 'Bazar Kuliner Nusantara Karyawan', type: 'Foto', mediaUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=600', categoryLabel: 'Kegiatan Kantor' },
        { id: 'sk-6', title: 'Penyerahan Hadiah Juara Umum Perlombaan', type: 'Foto', mediaUrl: 'assets/server_racks.png', categoryLabel: 'Kegiatan Kantor' }
      ]
    },
    {
      id: 'peresmian-surabaya',
      title: 'Peresmian Kantor Cabang Surabaya',
      date: '12 Oktober 2023',
      year: '2023',
      category: 'Fasilitas',
      coverImage: 'assets/office_collaboration.png',
      description: 'Momen pemotongan pita dan syukuran pembukaan kantor cabang baru Surabaya di lantai 12 gedung perkantoran pusat bisnis.',
      photos: [
        { id: 'ps-1', title: 'Pemotongan Pita oleh Direksi', type: 'Foto', mediaUrl: 'assets/office_collaboration.png', categoryLabel: 'Fasilitas' },
        { id: 'ps-2', title: 'Tur Fasilitas Ruang Kerja Baru', type: 'Foto', mediaUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600', categoryLabel: 'Fasilitas' },
        { id: 'ps-3', title: 'Video Profil Kantor Cabang Surabaya', type: 'Video', mediaUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600', categoryLabel: 'Fasilitas' }
      ]
    },
    {
      id: 'gathering-2023',
      title: 'Highlight Gathering Karyawan 2023',
      date: '05 September 2023',
      year: '2023',
      category: 'Sosial',
      coverImage: 'assets/hero_banner.png',
      description: 'Kegiatan tahunan team-building dan gala dinner seluruh jajaran staf dan manajemen di Kebun Raya Bogor.',
      photos: [
        { id: 'gt-1', title: 'Sesi Outbound & Team Building', type: 'Foto', mediaUrl: 'assets/hero_banner.png', categoryLabel: 'Sosial' },
        { id: 'gt-2', title: 'Gala Dinner & Malam Keakraban', type: 'Foto', mediaUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=600', categoryLabel: 'Sosial' },
        { id: 'gt-3', title: 'Video Highlight Gathering 2023', type: 'Video', mediaUrl: 'assets/tree_planting.png', categoryLabel: 'Sosial' }
      ]
    },
    {
      id: 'pelatihan-it',
      title: 'Pelatihan Sertifikasi IT & Cloud Dasar',
      date: '28 Agustus 2023',
      year: '2023',
      category: 'Pelatihan',
      coverImage: 'assets/server_racks.png',
      description: 'Workshop intensif dan ujian sertifikasi teknologi informasi untuk meningkatkan kapabilitas tim engineering & operasional.',
      photos: [
        { id: 'pt-1', title: 'Sesi Materi Arsitektur Server', type: 'Foto', mediaUrl: 'assets/server_racks.png', categoryLabel: 'Pelatihan' },
        { id: 'pt-2', title: 'Pemberian Sertifikat Kelulusan', type: 'Foto', mediaUrl: 'assets/office_collaboration.png', categoryLabel: 'Pelatihan' }
      ]
    },
    {
      id: 'csr-pohon',
      title: 'CSR: Penanaman Seribu Pohon',
      date: '15 Juli 2023',
      year: '2023',
      category: 'CSR',
      coverImage: 'assets/tree_planting.png',
      description: 'Aksi penghijauan dan konservasi lahan kritis bersama relawan karyawan dan masyarakat lokal.',
      photos: [
        { id: 'csr-1', title: 'Relawan Menanam Bibit Pohon', type: 'Foto', mediaUrl: 'assets/tree_planting.png', categoryLabel: 'CSR' },
        { id: 'csr-2', title: 'Penyerahan Bantuan Bibit ke Tokoh Masyarakat', type: 'Foto', mediaUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=600', categoryLabel: 'CSR' }
      ]
    },
    {
      id: 'futsal-turnamen',
      title: 'Tim Futsal Perusahaan - Juara 1 Turnamen Inter-Office',
      date: '20 Juni 2023',
      year: '2023',
      category: 'Olahraga',
      coverImage: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=600',
      description: 'Perjuangan sengit tim futsal perusahaan hingga meraih piala bergilir juara pertama turnamen korporat tahunan.',
      photos: [
        { id: 'ft-1', title: 'Foto Tim Bersama Trophy Juara', type: 'Foto', mediaUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=600', categoryLabel: 'Olahraga' },
        { id: 'ft-2', title: 'Momen Gol Kemenangan di Babak Final', type: 'Video', mediaUrl: 'assets/hero_banner.png', categoryLabel: 'Olahraga' }
      ]
    }
  ]
};

// ==========================================================================
// DATA PERSISTENCE & AUTHENTICATION (LOCALSTORAGE ADAPTER)
// ==========================================================================
const STORAGE_KEY = 'portal_internal_cms_state_v1';
const DEFAULT_SEED_STATE = JSON.parse(JSON.stringify(STATE));

function saveStateToStorage() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      news: STATE.news,
      events: STATE.events,
      magazines: STATE.magazines,
      currentUser: STATE.currentUser || null
    }));
  } catch (e) {
    console.error('Gagal menyimpan state ke localStorage:', e);
  }
}

function loadStateFromStorage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.news) STATE.news = parsed.news;
      if (parsed.events) STATE.events = parsed.events;
      if (parsed.magazines) STATE.magazines = parsed.magazines;
      if (parsed.currentUser !== undefined) STATE.currentUser = parsed.currentUser;
    }
  } catch (e) {
    console.error('Gagal memuat state dari localStorage:', e);
  }
}

function resetDataToDefault() {
  if (confirm('Apakah Anda yakin ingin mengembalikan seluruh data ke data bawaan demo? Data buatan Anda akan terhapus.')) {
    localStorage.removeItem(STORAGE_KEY);
    STATE.news = JSON.parse(JSON.stringify(DEFAULT_SEED_STATE.news));
    STATE.events = JSON.parse(JSON.stringify(DEFAULT_SEED_STATE.events));
    STATE.magazines = JSON.parse(JSON.stringify(DEFAULT_SEED_STATE.magazines));
    STATE.currentUser = null;
    saveStateToStorage();
    updateHeaderAuthWidget();
    showToast('Seluruh data berhasil dikembalikan ke default bawaan!');
    window.location.hash = '#home';
  }
}

function updateHeaderAuthWidget() {
  const container = document.getElementById('header-auth-container');
  if (!container) return;

  if (STATE.currentUser) {
    const isAdmin = STATE.currentUser.role === 'admin';
    container.innerHTML = `
      <div class="user-profile">
        <div class="avatar-wrapper">
          <img src="${STATE.currentUser.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100'}" alt="${STATE.currentUser.name}">
          <span class="status-indicator"></span>
        </div>
        <div class="user-info">
          <span class="user-name">${STATE.currentUser.name}</span>
          <span class="user-role">${isAdmin ? 'Administrator CMS' : 'Karyawan'}</span>
        </div>
        ${isAdmin ? `
        <a href="#admin" class="btn-action-sm" style="margin-left: 1rem; color: var(--primary); display: flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 50%; background: rgba(59, 130, 246, 0.1);" title="Panel Admin">
          <i data-lucide="settings"></i>
        </a>
        ` : ''}
        <button class="btn-action-sm delete" style="margin-left: 0.5rem; display: flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 50%;" onclick="logoutUser()" title="Keluar">
          <i data-lucide="log-out"></i>
        </button>
      </div>
    `;
  } else {
    container.innerHTML = `
      <a href="#login" class="btn-dark" style="text-decoration: none; border-radius: 999px;">
        <i data-lucide="log-in"></i>
        <span>Masuk Akun</span>
      </a>
    `;
  }
  lucide.createIcons();
}

function renderLogin() {
  const app = document.getElementById('app-viewport');
  
  const html = `
    <div class="login-page-wrapper">
      <div class="login-split-container">
        
        <!-- Left Side: Role Selection & Form -->
        <div class="login-form-side">
          <div class="login-brand" style="margin-bottom: 2rem;">
            <div class="logo-icon" style="background: var(--primary); color: white; width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
              <i data-lucide="hexagon" style="width: 28px; height: 28px;"></i>
            </div>
            <h1 style="font-size: 1.8rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.5rem;">Masuk ke Portal</h1>
            <p style="color: var(--text-secondary);">Pilih peran Anda untuk melanjutkan ke dashboard.</p>
          </div>

          <div class="role-cards" style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2rem;">
            <button type="button" class="role-card active" id="role-btn-user" onclick="window.switchLoginRole('user')">
              <i data-lucide="user" style="width: 24px; height: 24px; margin-bottom: 0.5rem; color: var(--primary);"></i>
              <span style="font-weight: 600; display: block;">Karyawan</span>
              <span style="font-size: 0.75rem; color: var(--text-secondary);">Akses Berita & Galeri</span>
            </button>
            <button type="button" class="role-card" id="role-btn-admin" onclick="window.switchLoginRole('admin')">
              <i data-lucide="shield-check" style="width: 24px; height: 24px; margin-bottom: 0.5rem; color: var(--accent-color);"></i>
              <span style="font-weight: 600; display: block;">Administrator</span>
              <span style="font-size: 0.75rem; color: var(--text-secondary);">Kelola Konten CMS</span>
            </button>
          </div>

          <form id="login-form" onsubmit="event.preventDefault(); handleRoleLogin();">
            <input type="hidden" id="login-role-input" value="user">
            
            <div style="background-color: var(--bg-body); border: 1px dashed var(--border-color); border-radius: var(--radius-sm); padding: 12px 14px; margin-bottom: 1.5rem; font-size: 0.8rem; color: var(--text-secondary);">
              <strong>Panduan Login Demo:</strong><br>
              - Karyawan: Username <code style="background: white; padding: 2px 4px; border-radius: 3px; border: 1px solid #ddd;">user</code> | Password <code style="background: white; padding: 2px 4px; border-radius: 3px; border: 1px solid #ddd;">user123</code><br>
              - Admin: Username <code style="background: white; padding: 2px 4px; border-radius: 3px; border: 1px solid #ddd;">admin</code> | Password <code style="background: white; padding: 2px 4px; border-radius: 3px; border: 1px solid #ddd;">admin123</code>
            </div>

            <div class="form-group">
              <label for="login-username">Username</label>
              <input type="text" id="login-username" class="form-input" placeholder="Ketikkan username Anda" required autocomplete="username">
            </div>

            <div class="form-group" style="margin-bottom: 2rem;">
              <label for="login-password">Kata Sandi</label>
              <input type="password" id="login-password" class="form-input" placeholder="Ketikkan kata sandi" required autocomplete="current-password">
            </div>

            <button type="submit" class="btn-dark" style="width: 100%; justify-content: center; padding: 0.875rem; font-size: 1rem;">
              Masuk Sekarang
            </button>
          </form>
        </div>

        <!-- Right Side: Decorative Banner -->
        <div class="login-banner-side">
          <div class="login-banner-content">
            <h2 style="font-size: 2.5rem; font-weight: 800; margin-bottom: 1rem; color: white;">Hubungkan, Berbagi, & Tumbuh Bersama.</h2>
            <p style="font-size: 1.1rem; opacity: 0.9; max-width: 400px; line-height: 1.6;">Portal Internal Perusahaan dirancang untuk mempererat kolaborasi antar tim di seluruh divisi.</p>
          </div>
        </div>
      </div>
    </div>
  `;

  app.innerHTML = html;
  lucide.createIcons();

  window.switchLoginRole = (role) => {
    document.getElementById('login-role-input').value = role;
    if (role === 'user') {
      document.getElementById('role-btn-user').classList.add('active');
      document.getElementById('role-btn-admin').classList.remove('active');
    } else {
      document.getElementById('role-btn-admin').classList.add('active');
      document.getElementById('role-btn-user').classList.remove('active');
    }
  };
}

window.handleRoleLogin = () => {
  const role = document.getElementById('login-role-input').value;
  const user = document.getElementById('login-username').value.trim();
  const pass = document.getElementById('login-password').value.trim();

  if (role === 'user' && user === 'user' && pass === 'user123') {
    STATE.currentUser = {
      role: 'user',
      name: 'Budi Santoso',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100'
    };
    saveStateToStorage();
    updateHeaderAuthWidget();
    showToast('Berhasil masuk sebagai Karyawan/Pengunjung!');
    window.location.hash = '#home';
  } else if (role === 'admin' && user === 'admin' && pass === 'admin123') {
    STATE.currentUser = {
      role: 'admin',
      name: 'Admin Utama',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100'
    };
    saveStateToStorage();
    updateHeaderAuthWidget();
    showToast('Login Admin berhasil! Selamat datang di Panel CMS.');
    window.location.hash = '#admin';
  } else {
    showToast('Username atau Password yang Anda masukkan salah untuk role ini!', 'danger');
  }
};

window.logoutUser = () => {
  if (confirm('Apakah Anda yakin ingin keluar dari aplikasi?')) {
    STATE.currentUser = null;
    saveStateToStorage();
    updateHeaderAuthWidget();
    showToast('Anda telah berhasil keluar.');
    window.location.hash = '#login';
  }
};

// ==========================================================================
// TOAST & MODAL HELPERS
// ==========================================================================
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast-message ${type}`;
  toast.innerHTML = `
    <i data-lucide="${type === 'success' ? 'check' : 'alert-circle'}"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  lucide.createIcons();

  // Remove toast after animation
  setTimeout(() => {
    toast.style.animation = 'slideIn 0.3s ease reverse forwards';
    toast.addEventListener('animationend', () => toast.remove());
  }, 3000);
}

function openModal(title, contentHTML) {
  const modal = document.getElementById('global-modal');
  const titleEl = document.getElementById('modal-title');
  const contentEl = document.getElementById('modal-content');

  if (!modal || !titleEl || !contentEl) return;

  titleEl.innerText = title;
  contentEl.innerHTML = contentHTML;
  modal.classList.add('open');
  lucide.createIcons();
  
  // Attach close events inside modal
  const closeBtn = document.getElementById('modal-close-btn');
  if (closeBtn) {
    closeBtn.onclick = closeModal;
  }
}

function closeModal() {
  const modal = document.getElementById('global-modal');
  if (modal) {
    modal.classList.remove('open');
  }
}

// Close modal when clicking backdrop overlay
document.getElementById('global-modal').addEventListener('click', (e) => {
  if (e.target.id === 'global-modal') closeModal();
});

// ==========================================================================
// VIEWS & TEMPLATES RENDERERS
// ==========================================================================

// Global state variables for filters
let currentNewsTab = 'Semua';
let galleryTypeFilter = 'Semua';
let galleryCategoryFilter = 'Semua Kategori';
let galleryYearFilter = '2023';
let gallerySortOrder = 'date-desc';

let magazineYearFilter = '2024';
let magazineCategoryFilter = 'Semua Kategori';

/**
 * 1. HOME VIEW (BERANDA)
 */
function renderHome() {
  const app = document.getElementById('app-viewport');
  
  // Latest News for news grid filtering
  const filteredNews = currentNewsTab === 'Semua' 
    ? STATE.news 
    : STATE.news.filter(item => item.category === currentNewsTab);

  // Latest magazine highlight is Edisi 12
  const latestMag = STATE.magazines[0];

  const html = `
    <div class="container">
      <!-- Hero Banner Section -->
      <section class="hero-banner">
        <img src="assets/hero_banner.png" alt="Hero Banner" class="hero-bg">
        <div class="hero-overlay"></div>
        <div class="hero-content">
          <span class="badge-tag">Utama</span>
          <h1 class="hero-title">Kick-off Transformasi Digital 2024: Menuju Efisiensi Global</h1>
          <p class="hero-desc">Sambut era baru operasional perusahaan dengan integrasi AI dan sistem otomasi terbaru. Bergabunglah dalam perjalanan transformasi menuju masa depan yang lebih cerdas.</p>
          <div class="hero-meta">
            <span><i data-lucide="calendar"></i> 25 Mei 2024</span>
            <span><i data-lucide="user"></i> Direksi Utama</span>
          </div>
          <a href="#news-detail/transformasi-digital-2024" class="btn-primary">
            <span>Lihat Selengkapnya</span>
            <i data-lucide="chevron-right"></i>
          </a>
        </div>
      </section>

      <!-- News Explorer Section -->
      <section class="news-explorer">
        <div class="section-header">
          <h2 class="section-title">Eksplorasi Berita Terbaru</h2>
        </div>

        <!-- Navigation Tabs -->
        <div class="tabs-scroll-container">
          <ul class="tab-pills">
            ${['Semua', 'Kegiatan', 'CSR', 'Penghargaan', 'Rilis Internal'].map(tab => `
              <li>
                <button class="tab-pill ${currentNewsTab === tab ? 'active' : ''}" data-category="${tab}">
                  ${tab}
                </button>
              </li>
            `).join('')}
          </ul>
          <span class="tab-meta-text">Menampilkan <strong>${filteredNews.length}</strong> Berita Terbaru</span>
        </div>

        <!-- News Cards Grid -->
        <div class="news-grid">
          ${filteredNews.map(item => `
            <div class="news-card">
              <div class="card-img-wrapper">
                <img src="${item.image}" alt="${item.title}" class="card-img" onerror="this.src='https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=400'">
                <span class="card-tag">${item.category}</span>
              </div>
              <div class="card-body">
                <div class="card-meta">
                  <span><i data-lucide="calendar"></i> ${item.date}</span>
                  <span><i data-lucide="clock"></i> ${item.readTime}</span>
                </div>
                <h3 class="card-title">
                  <a href="#news-detail/${item.id}">${item.title}</a>
                </h3>
                <p class="card-excerpt">${item.content.replace(/<[^>]*>/g, '').substring(0, 140)}...</p>
                <div class="card-footer">
                  <a href="#news-detail/${item.id}" class="read-more-link">
                    <span>Baca Berita</span>
                    <i data-lucide="chevron-right"></i>
                  </a>
                  <a href="#news-detail/${item.id}" class="view-btn">Lihat</a>
                </div>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- View all news trigger -->
        <div class="text-center">
          <a href="#news" class="btn-secondary">
            <span>Lihat semua berita</span>
          </a>
        </div>
      </section>

      <!-- Magazine Highlight Banner -->
      <section class="magazine-highlight">
        <div class="mag-hl-cover-wrapper">
          <img src="${latestMag.coverImage}" alt="Magazine Cover">
        </div>
        <div class="mag-hl-details">
          <span class="mag-hl-tag">Edisi Terbaru</span>
          <h2 class="mag-hl-title">Sekilas Majalah Internal: Insight Perusahaan</h2>
          <p class="mag-hl-desc">Edisi Mei 2024 - Menjelajahi budaya kolaborasi di era hybrid. Baca wawancara eksklusif dengan tim operasional dan tips produktivitas dari para ahli.</p>
          <div class="mag-hl-meta">Edisi #12 • Desember 2024</div>
          <div class="mag-hl-actions">
            <button class="btn-outline-white" id="mag-hl-dl-btn">
              <i data-lucide="download"></i>
              <span>Unduh PDF (12MB)</span>
            </button>
            <a href="#magazine" class="btn-solid-white">
              <span>Lihat Semua Edisi</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  `;

  app.innerHTML = html;
  lucide.createIcons();

  // Attach tabs change handlers
  document.querySelectorAll('.tab-pill').forEach(btn => {
    btn.onclick = (e) => {
      currentNewsTab = e.currentTarget.getAttribute('data-category');
      renderHome();
    };
  });

  // Attach direct interactive clicks
  const dlHlBtn = document.getElementById('mag-hl-dl-btn');
  if (dlHlBtn) {
    dlHlBtn.onclick = () => showToast('Mulai mengunduh berkas majalah Edisi #12 (PDF)...');
  }

}

/**
 * 2. NEWS DIRECTORY INDEX VIEW (BERITA)
 */
function renderNewsIndex() {
  const app = document.getElementById('app-viewport');
  
  const html = `
    <div class="container">
      <div class="gallery-intro">
        <h1>Indeks Berita Perusahaan</h1>
        <p>Arsip lengkap berita, rilis resmi, dan inisiatif internal perusahaan.</p>
      </div>

      <div class="news-grid">
        ${STATE.news.map(item => `
          <div class="news-card">
            <div class="card-img-wrapper">
              <img src="${item.image}" alt="${item.title}" class="card-img" onerror="this.src='https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=400'">
              <span class="card-tag">${item.category}</span>
            </div>
            <div class="card-body">
              <div class="card-meta">
                <span><i data-lucide="calendar"></i> ${item.date}</span>
                <span><i data-lucide="clock"></i> ${item.readTime}</span>
              </div>
              <h3 class="card-title">
                <a href="#news-detail/${item.id}">${item.title}</a>
              </h3>
              <p class="card-excerpt">${item.content.replace(/<[^>]*>/g, '').substring(0, 140)}...</p>
              <div class="card-footer">
                <a href="#news-detail/${item.id}" class="read-more-link">
                  <span>Baca Berita</span>
                  <i data-lucide="chevron-right"></i>
                </a>
                <a href="#news-detail/${item.id}" class="view-btn">Lihat</a>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  app.innerHTML = html;
  lucide.createIcons();
}

/**
 * RENDERER FOR VISUAL CANVAS BLOCKS TO PUBLIC HTML
 */
function renderBlocksToHTML(blocks) {
  if (!blocks || !Array.isArray(blocks) || blocks.length === 0) return '';
  
  return blocks.map(b => {
    const s = b.settings || {};
    const alignClass = s.align ? `align-${s.align}` : 'align-left';

    switch (b.type) {
      case 'heading': {
        const sizeClass = s.size ? `size-${s.size}` : 'size-medium';
        return `<h2 class="block-heading ${sizeClass} ${alignClass}" style="margin: 1.5rem 0 0.5rem 0; font-weight: 800; color: var(--text-primary);">${b.content || ''}</h2>`;
      }
      case 'paragraph': {
        const paragraphs = (b.content || '').split('\n\n').map(p => `<p class="${alignClass}" style="margin-bottom: 1rem; line-height: 1.7;">${p.replace(/\n/g, '<br>')}</p>`).join('');
        return paragraphs;
      }
      case 'image': {
        const widthClass = s.imageWidth ? `width-${s.imageWidth}` : 'width-100';
        const radiusClass = s.borderRadius || 'radius-md';
        return `
          <div class="block-image-container ${widthClass} ${alignClass}" style="margin: 1.5rem auto;">
            <img src="${b.content || 'assets/server_racks.png'}" alt="Gambar Artikel" class="block-image-preview ${radiusClass}" onerror="this.src='https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800'">
            ${s.caption ? `<div class="block-image-caption">${s.caption}</div>` : ''}
          </div>
        `;
      }
      case 'callout': {
        const theme = s.theme || 'blue';
        const icon = s.icon || '📢';
        return `
          <div class="block-callout-box theme-${theme}" style="margin: 1.5rem 0;">
            <span class="block-callout-icon">${icon}</span>
            <div style="flex: 1; font-weight: 500; line-height: 1.6;">${(b.content || '').replace(/\n/g, '<br>')}</div>
          </div>
        `;
      }
      case 'columns': {
        const col1 = (s.col1 || '').replace(/\n/g, '<br>');
        const col2 = (s.col2 || '').replace(/\n/g, '<br>');
        return `
          <div class="block-columns-grid" style="margin: 1.5rem 0;">
            <div class="block-column-box" style="background: var(--bg-card); border: 1px solid var(--border-color);">${col1}</div>
            <div class="block-column-box" style="background: var(--bg-card); border: 1px solid var(--border-color);">${col2}</div>
          </div>
        `;
      }
      case 'quote': {
        return `
          <blockquote class="block-quote-box" style="margin: 1.5rem 0;">
            <p style="font-size: 1.05rem; font-style: italic; font-weight: 500; margin: 0;">${b.content || ''}</p>
            ${s.author ? `<footer style="font-weight: 700; font-size: 0.85rem; margin-top: 0.5rem; color: var(--text-secondary);">— ${s.author}</footer>` : ''}
          </blockquote>
        `;
      }
      case 'divider': {
        const style = s.style || 'gradient';
        return `<hr class="block-divider-line style-${style}">`;
      }
      default:
        return `<p>${b.content || ''}</p>`;
    }
  }).join('');
}

/**
 * 3. NEWS DETAIL VIEW (DETAIL BERITA)
 */
function renderNewsDetail(newsId) {
  const app = document.getElementById('app-viewport');
  const newsItem = STATE.news.find(item => item.id === newsId);

  if (!newsItem) {
    app.innerHTML = `
      <div class="container text-center" style="padding: 4rem 0;">
        <i data-lucide="alert-circle" style="width: 48px; height: 48px; color: var(--danger); margin-bottom: 1rem;"></i>
        <h2>Berita Tidak Ditemukan</h2>
        <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">Berita yang Anda cari tidak tersedia atau telah dihapus.</p>
        <a href="#home" class="btn-secondary">Kembali ke Beranda</a>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  // Related News calculation
  const relatedItems = STATE.news.filter(item => newsItem.relatedNewsIds.includes(item.id));

  const html = `
    <div class="container">
      <!-- Breadcrumbs -->
      <nav aria-label="breadcrumb">
        <ul class="breadcrumbs">
          <li><a href="#home">Beranda</a></li>
          <li><a href="#news">Berita</a></li>
          <li class="active" aria-current="page">${newsItem.title}</li>
        </ul>
      </nav>

      <!-- News Title & Author Banner -->
      <header class="news-detail-header">
        <h1 class="news-detail-title">${newsItem.title}</h1>
        
        <div class="news-author-block">
          <div class="author-info-left">
            <img src="${newsItem.authorAvatar}" alt="${newsItem.author}" class="author-detail-avatar">
            <div class="author-meta-text">
              <span class="author-detail-name">${newsItem.author}</span>
              <span class="author-detail-role">${newsItem.authorRole}</span>
            </div>
          </div>

          <div class="news-meta-right">
            <span><i data-lucide="calendar"></i> ${newsItem.date}</span>
            <span class="news-category-badge">${newsItem.category}</span>
          </div>
        </div>
      </header>

      <!-- Main Visual Banner -->
      <div class="news-detail-visual">
        <img src="${newsItem.image}" alt="${newsItem.title}" onerror="this.src='https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200'">
      </div>

      <!-- Core Content Layout -->
      <div class="news-detail-layout">
        
        <!-- Left Article Content -->
        <article class="news-article-container">
          <div class="news-article-content">
            ${(newsItem.blocks && newsItem.blocks.length > 0) ? renderBlocksToHTML(newsItem.blocks) : newsItem.content}
          </div>

          <!-- Attachments Widget (In Mobile, shifts correctly) -->
          ${newsItem.attachments.length > 0 ? `
            <div class="sidebar-widget" style="margin-top: 2rem;">
              <h4 class="widget-title"><i data-lucide="paperclip"></i> Lampiran & Dokumen Pendukung</h4>
              <div class="attachments-list">
                ${newsItem.attachments.map(att => `
                  <div class="attachment-card">
                    <div class="attach-file-info">
                      <div class="attach-icon-box ${att.type}">
                        <i data-lucide="${att.type === 'pdf' ? 'file-text' : 'presentation'}"></i>
                      </div>
                      <div class="attach-meta">
                        <span class="attach-name" title="${att.name}">${att.name}</span>
                        <span class="attach-size">${att.size}</span>
                      </div>
                    </div>
                    <button class="attach-dl-btn" data-file="${att.name}">
                      <i data-lucide="download"></i>
                    </button>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <!-- Comments Feed System -->
          <section class="comments-widget">
            <h4 class="widget-title"><i data-lucide="message-square"></i> Kolom Komentar (${newsItem.comments.length})</h4>
            
            <div class="comments-list" id="comments-feed-container">
              ${newsItem.comments.length === 0 ? `
                <p style="color: var(--text-secondary); font-size: 0.875rem; font-style: italic;" id="no-comments-msg">Belum ada komentar. Jadilah yang pertama memberikan respon!</p>
              ` : newsItem.comments.map(c => `
                <div class="comment-item">
                  <img src="${c.avatar}" alt="${c.name}" class="comment-avatar">
                  <div class="comment-body">
                    <div class="comment-meta">
                      <span class="commenter-name">${c.name} <span style="font-weight: normal; color: var(--text-secondary); font-size: 0.75rem;">(${c.role})</span></span>
                      <span class="comment-date">${c.date}</span>
                    </div>
                    <p class="comment-text">${c.text}</p>
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- Comment Input Box -->
            <form class="comment-form" id="news-comment-form">
              <div class="comment-textarea-wrapper">
                <textarea id="comment-text-input" placeholder="Tulis komentar atau tanggapan Anda..." required></textarea>
              </div>
              <button type="submit" class="submit-comment-btn">Kirim Komentar</button>
            </form>
          </section>
        </article>

        <!-- Right Sidebar Widgets -->
        <aside class="news-sidebar">
          <div class="sidebar-widget">
            <h4 class="widget-title"><i data-lucide="share-2"></i> Bagikan & Tindakan</h4>
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <button class="btn-card-outline" style="justify-content: flex-start; width: 100%;" id="share-news-btn">
                <i data-lucide="share-2"></i> Bagikan Berita
              </button>
              <button class="btn-card-outline" style="justify-content: flex-start; width: 100%; color: var(--danger);" id="like-news-btn">
                <i data-lucide="heart"></i> Sukai Berita (12)
              </button>
            </div>
          </div>
          
          <div class="sidebar-widget">
            <h4 class="widget-title"><i data-lucide="info"></i> Informasi Tambahan</h4>
            <p style="font-size: 0.8125rem; color: var(--text-secondary);">
              Artikel ini dipublikasikan secara resmi di Portal Internal Perusahaan. Konten ditujukan untuk konsumsi karyawan internal.
            </p>
          </div>
        </aside>

      </div>

      <!-- Related News Section at bottom -->
      ${relatedItems.length > 0 ? `
        <section class="related-posts-section">
          <div class="section-header">
            <h3 class="section-title">Berita Terkait</h3>
          </div>
          <div class="related-grid">
            ${relatedItems.map(rel => `
              <div class="related-card">
                <div class="related-img-box">
                  <img src="${rel.image}" alt="${rel.title}" onerror="this.src='https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=400'">
                </div>
                <div class="related-body">
                  <span class="related-date">${rel.date}</span>
                  <h4 class="related-title">
                    <a href="#news-detail/${rel.id}">${rel.title}</a>
                  </h4>
                </div>
              </div>
            `).join('')}
          </div>
        </section>
      ` : ''}

      <!-- Bottom action back bar -->
      <div class="detail-action-bar">
        <a href="#home" class="back-to-list-btn">
          <i data-lucide="chevron-left"></i>
          <span>Kembali ke Beranda</span>
        </a>
      </div>
    </div>
  `;

  app.innerHTML = html;
  lucide.createIcons();

  // Attach downloads event
  document.querySelectorAll('.attach-dl-btn').forEach(btn => {
    btn.onclick = (e) => {
      const filename = e.currentTarget.getAttribute('data-file');
      showToast(`Mengunduh dokumen: ${filename}...`);
    };
  });

  // Attach comment form submit handler
  const commentForm = document.getElementById('news-comment-form');
  if (commentForm) {
    commentForm.onsubmit = (e) => {
      e.preventDefault();
      const inputEl = document.getElementById('comment-text-input');
      const commentText = inputEl.value.trim();
      if (!commentText) return;

      // Add to mock database
      const newComment = {
        name: 'Budi Santoso',
        role: 'HR Specialist',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100',
        date: 'Hari ini',
        text: commentText
      };

      newsItem.comments.push(newComment);
      inputEl.value = '';

      // Re-render detail view to show new comments properly
      showToast('Komentar Anda berhasil dipublikasikan!');
      renderNewsDetail(newsId);
    };
  }

  // Interactivity Actions
  const shareBtn = document.getElementById('share-news-btn');
  if (shareBtn) {
    shareBtn.onclick = () => {
      navigator.clipboard.writeText(window.location.href);
      showToast('Tautan berita berhasil disalin ke papan klip!');
    };
  }

  const likeBtn = document.getElementById('like-news-btn');
  if (likeBtn) {
    let liked = false;
    likeBtn.onclick = () => {
      liked = !liked;
      if (liked) {
        likeBtn.innerHTML = '<i data-lucide="heart" fill="currentColor"></i> Disukai (13)';
        likeBtn.style.backgroundColor = 'var(--danger-bg)';
        likeBtn.style.color = 'var(--danger)';
        showToast('Menyukai berita ini.');
      } else {
        likeBtn.innerHTML = '<i data-lucide="heart"></i> Sukai Berita (12)';
        likeBtn.style.backgroundColor = '';
        likeBtn.style.color = 'var(--danger)';
      }
      lucide.createIcons();
    };
  }
}

/**
 * 4. GALLERY VIEW (GALERI - ALBUM EVENT PERUSAHAAN)
 */
function renderGallery() {
  const app = document.getElementById('app-viewport');

  let filteredEvents = STATE.events;

  // 1. Filter by Category
  if (galleryCategoryFilter !== 'Semua Kategori') {
    filteredEvents = filteredEvents.filter(event => event.category === galleryCategoryFilter);
  }

  // 2. Filter by Year
  if (galleryYearFilter !== 'Semua Tahun') {
    filteredEvents = filteredEvents.filter(event => event.year === galleryYearFilter);
  }

  const uniqueCategories = ['Semua Kategori', ...new Set(STATE.events.map(event => event.category))];
  const uniqueYears = ['Semua Tahun', ...new Set(STATE.events.map(event => event.year))];

  const html = `
    <div class="container">
      <div class="gallery-intro">
        <h1>Galeri & Album Event Perusahaan</h1>
        <p>Kumpulan album dokumentasi kegiatan internal, perayaan, dan event bersejarah perusahaan. Klik pada album untuk melihat foto & video lengkap.</p>
      </div>

      <!-- Toolbar Filter Panel -->
      <div class="toolbar-panel">
        <div class="toolbar-left">
          <span style="font-weight: 700; font-size: 0.95rem; color: var(--text-primary);"><i data-lucide="folder" style="width: 18px; height: 18px; vertical-align: middle; margin-right: 6px;"></i> Daftar Album Event</span>
        </div>

        <div class="toolbar-right">
          <div class="filter-group">
            <label for="gallery-category-select">Kategori:</label>
            <select id="gallery-category-select" class="custom-select">
              ${uniqueCategories.map(cat => `
                <option value="${cat}" ${galleryCategoryFilter === cat ? 'selected' : ''}>${cat}</option>
              `).join('')}
            </select>
          </div>

          <div class="filter-group">
            <label for="gallery-year-select">Tahun:</label>
            <select id="gallery-year-select" class="custom-select">
              ${uniqueYears.map(yr => `
                <option value="${yr}" ${galleryYearFilter === yr ? 'selected' : ''}>${yr}</option>
              `).join('')}
            </select>
          </div>
        </div>
      </div>

      <!-- Event Cards Grid -->
      ${filteredEvents.length === 0 ? `
        <div class="text-center" style="padding: 4rem 0; color: var(--text-secondary);">
          <i data-lucide="folder-off" style="width: 48px; height: 48px; margin-bottom: 1rem; color: var(--text-muted);"></i>
          <h3>Album Event Tidak Ditemukan</h3>
          <p>Silakan ganti filter pencarian atau kategori Anda.</p>
        </div>
      ` : `
        <div class="events-grid">
          ${filteredEvents.map(event => `
            <div class="event-card" data-event-id="${event.id}">
              <div class="event-cover-box">
                <img src="${event.coverImage}" alt="${event.title}">
                <span class="event-media-badge">
                  <i data-lucide="image"></i> ${event.photos.length} Media
                </span>
              </div>
              <div class="event-body">
                <div class="event-date">
                  <i data-lucide="calendar"></i>
                  <span>${event.date}</span>
                </div>
                <h3 class="event-title">${event.title}</h3>
                <p class="event-desc">${event.description}</p>
                <div class="event-footer">
                  <span style="font-size: 0.7rem; text-transform: uppercase; color: var(--text-secondary); font-weight: 700;">${event.category}</span>
                  <span class="event-link-text">
                    Buka Album <i data-lucide="chevron-right"></i>
                  </span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      `}

      <!-- Gallery Pagination -->
      <div class="pagination-container">
        <span>Menampilkan <strong>${filteredEvents.length}</strong> dari <strong>${filteredEvents.length}</strong> album event</span>
        <div class="pagination-controls">
          <button class="btn-chevron" disabled><i data-lucide="chevron-left"></i></button>
          <button class="page-btn active">1</button>
          <button class="btn-chevron" disabled><i data-lucide="chevron-right"></i></button>
        </div>
      </div>
    </div>
  `;

  app.innerHTML = html;
  lucide.createIcons();

  // Attach dropdown change events
  const catSelect = document.getElementById('gallery-category-select');
  if (catSelect) {
    catSelect.onchange = (e) => {
      galleryCategoryFilter = e.target.value;
      renderGallery();
    };
  }

  const yrSelect = document.getElementById('gallery-year-select');
  if (yrSelect) {
    yrSelect.onchange = (e) => {
      galleryYearFilter = e.target.value;
      renderGallery();
    };
  }

  // Attach card click triggers to navigate to event detail
  document.querySelectorAll('.event-card').forEach(card => {
    card.onclick = (e) => {
      const eventId = e.currentTarget.getAttribute('data-event-id');
      window.location.hash = `#gallery-event/${eventId}`;
    };
  });
}

/**
 * Renders dedicated Gallery Event Page displaying all photos/videos for a single event
 */
function renderGalleryEvent(eventId) {
  const app = document.getElementById('app-viewport');
  const event = STATE.events.find(e => e.id === eventId);

  if (!event) {
    app.innerHTML = `
      <div class="container text-center" style="padding: 4rem 0;">
        <i data-lucide="alert-circle" style="width: 48px; height: 48px; color: var(--danger); margin-bottom: 1rem;"></i>
        <h2>Album Event Tidak Ditemukan</h2>
        <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">Album yang Anda cari tidak tersedia atau telah dipindahkan.</p>
        <a href="#gallery" class="btn-secondary">Kembali ke Galeri</a>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  let filteredPhotos = event.photos;
  if (galleryTypeFilter !== 'Semua') {
    filteredPhotos = filteredPhotos.filter(p => p.type === galleryTypeFilter);
  }

  const html = `
    <div class="container">
      <!-- Breadcrumbs -->
      <nav aria-label="breadcrumb">
        <ul class="breadcrumbs">
          <li><a href="#home">Beranda</a></li>
          <li><a href="#gallery">Galeri</a></li>
          <li class="active" aria-current="page">${event.title}</li>
        </ul>
      </nav>

      <!-- Event Header Banner -->
      <div class="event-banner-header">
        <span class="badge-tag" style="background-color: rgba(255,255,255,0.2); font-size: 0.75rem;">${event.category}</span>
        <h1 class="event-banner-title">${event.title}</h1>
        <p class="event-banner-desc">${event.description}</p>
        <div class="event-banner-meta">
          <span><i data-lucide="calendar"></i> ${event.date}</span>
          <span><i data-lucide="image"></i> Total ${event.photos.length} Media (Foto & Video)</span>
        </div>
      </div>

      <!-- Toolbar Filter Inside Event -->
      <div class="toolbar-panel">
        <div class="toolbar-left">
          <ul class="tab-pills">
            ${['Semua', 'Foto', 'Video'].map(type => `
              <li>
                <button class="tab-pill ${galleryTypeFilter === type ? 'active' : ''}" data-event-type-tab="${type}">
                  ${type === 'Semua' ? 'Semua Media' : type}
                </button>
              </li>
            `).join('')}
          </ul>
        </div>
        <div class="toolbar-right">
          <a href="#gallery" class="back-to-list-btn">
            <i data-lucide="chevron-left"></i>
            <span>Kembali ke Daftar Album</span>
          </a>
        </div>
      </div>

      <!-- Photos / Videos Grid -->
      ${filteredPhotos.length === 0 ? `
        <div class="text-center" style="padding: 3rem 0; color: var(--text-secondary);">
          <i data-lucide="image-off" style="width: 48px; height: 48px; margin-bottom: 1rem; color: var(--text-muted);"></i>
          <h3>Media Tidak Ditemukan</h3>
          <p>Belum ada media dengan tipe ini di dalam album.</p>
        </div>
      ` : `
        <div class="gallery-grid">
          ${filteredPhotos.map(photo => `
            <div class="gallery-card" data-photo-id="${photo.id}">
              <div class="gallery-media-box">
                <img src="${photo.mediaUrl}" alt="${photo.title}">
                ${photo.type === 'Video' ? `
                  <div class="video-overlay-play">
                    <div class="play-circle">
                      <i data-lucide="play"></i>
                    </div>
                  </div>
                ` : ''}
                <span class="gallery-media-tag">${photo.type}</span>
              </div>
              <div class="gallery-body">
                <h3 class="gallery-title">${photo.title}</h3>
                <div class="gallery-card-footer">
                  <span>${event.date}</span>
                  <span style="font-weight: 600; color: var(--text-primary); font-size: 0.7rem; text-transform: uppercase;">${photo.type}</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      `}

      <!-- Bottom action back bar -->
      <div class="detail-action-bar">
        <a href="#gallery" class="back-to-list-btn">
          <i data-lucide="chevron-left"></i>
          <span>Kembali ke Daftar Album Galeri</span>
        </a>
      </div>
    </div>
  `;

  app.innerHTML = html;
  lucide.createIcons();

  // Attach photo filter tab listeners
  document.querySelectorAll('[data-event-type-tab]').forEach(btn => {
    btn.onclick = (e) => {
      galleryTypeFilter = e.currentTarget.getAttribute('data-event-type-tab');
      renderGalleryEvent(eventId);
    };
  });

  // Attach Lightbox click on photos
  document.querySelectorAll('.gallery-card').forEach(card => {
    card.onclick = (e) => {
      const photoId = e.currentTarget.getAttribute('data-photo-id');
      const photo = event.photos.find(p => p.id === photoId);
      if (photo) {
        openGalleryLightbox({
          ...photo,
          date: event.date,
          categoryLabel: event.category
        });
      }
    };
  });
}

/**
 * Renders an interactive modal lightbox for viewing gallery photos and playing videos
 */
function openGalleryLightbox(item) {
  const content = `
    <div style="text-align: center;">
      ${item.type === 'Video' ? `
        <div style="background-color: black; border-radius: var(--radius-md); overflow: hidden; position: relative; padding-top: 56.25%;">
          <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" style="position: absolute; top:0; left:0; width:100%; height:100%; border:none;" allow="autoplay" allowfullscreen></iframe>
        </div>
      ` : `
        <img src="${item.mediaUrl}" alt="${item.title}" style="width: 100%; max-height: 400px; object-fit: contain; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
      `}
      <div style="text-align: left; margin-top: 1.25rem;">
        <span class="gallery-media-tag" style="position: static; display: inline-block; margin-bottom: 0.5rem;">${item.type}</span>
        <h4 style="font-size: 1.1rem; font-weight: 800; margin-bottom: 0.5rem;">${item.title}</h4>
        <div style="display: flex; justify-content: space-between; font-size: 0.8125rem; color: var(--text-secondary);">
          <span>Diambil pada: ${item.date}</span>
          <span>Kategori: <strong>${item.categoryLabel}</strong></span>
        </div>
      </div>
    </div>
  `;

  openModal(`Detail Media - ${item.type}`, content);
}

/**
 * 5. MAGAZINE VIEW (LIBRARY MAJALAH)
 */
function renderMagazine() {
  const app = document.getElementById('app-viewport');

  // Filter logic
  let filteredMags = STATE.magazines;
  if (magazineYearFilter !== 'Semua Tahun') {
    filteredMags = filteredMags.filter(m => m.year === magazineYearFilter);
  }
  
  if (magazineCategoryFilter !== 'Semua Kategori') {
    filteredMags = filteredMags.filter(m => m.category === magazineCategoryFilter);
  }

  const uniqueYears = ['Semua Tahun', ...new Set(STATE.magazines.map(m => m.year))];
  const uniqueCategories = ['Semua Kategori', ...new Set(STATE.magazines.map(m => m.category))];

  const html = `
    <div class="container">
      <div class="gallery-intro">
        <h1>Library Majalah</h1>
        <p>Arsip lengkap publikasi internal perusahaan. Temukan wawasan, berita terbaru, dan profil inspiratif di setiap edisinya.</p>
      </div>

      <!-- Toolbar Filter & Upload Button -->
      <div class="toolbar-panel">
        
        <!-- Left Dropdowns -->
        <div class="toolbar-left">
          <div class="filter-group">
            <label for="mag-year-select">Tahun:</label>
            <select id="mag-year-select" class="custom-select">
              ${uniqueYears.map(yr => `
                <option value="${yr}" ${magazineYearFilter === yr ? 'selected' : ''}>${yr}</option>
              `).join('')}
            </select>
          </div>

          <div class="filter-group">
            <label for="mag-cat-select">Kategori:</label>
            <select id="mag-cat-select" class="custom-select">
              ${uniqueCategories.map(cat => `
                <option value="${cat}" ${magazineCategoryFilter === cat ? 'selected' : ''}>${cat}</option>
              `).join('')}
            </select>
          </div>
        </div>

        <!-- Right Upload Button -->
        <div class="toolbar-right">
          <button class="btn-upload-new" id="open-upload-modal-btn">
            <i data-lucide="plus"></i>
            <span>Unggah Majalah Baru</span>
          </button>
        </div>

      </div>

      <!-- Magazine Cards Grid -->
      ${filteredMags.length === 0 ? `
        <div class="text-center" style="padding: 4rem 0; color: var(--text-secondary);">
          <i data-lucide="book-open" style="width: 48px; height: 48px; margin-bottom: 1rem; color: var(--text-muted);"></i>
          <h3>Edisi Tidak Ditemukan</h3>
          <p>Belum ada rilis majalah di kategori atau tahun yang dipilih.</p>
        </div>
      ` : `
        <div class="magazines-grid">
          ${filteredMags.map(mag => `
            <div class="magazine-card">
              <div class="mag-cover-box">
                <img src="${mag.coverImage}" alt="${mag.title}" onerror="this.src='https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400'">
              </div>
              <div class="mag-body">
                <div class="mag-card-meta">
                  <span class="gallery-media-tag" style="position: static; font-size: 0.65rem;">${mag.category}</span>
                  <span style="font-size: 0.75rem; color: var(--text-secondary);">${mag.month}</span>
                </div>
                <h3 class="mag-card-title">${mag.title}</h3>
                <p class="mag-card-edition">${mag.issueNumber}</p>
                
                <div class="mag-card-actions">
                  <button class="btn-card-outline view-mag-btn" data-mag-id="${mag.id}">
                    <i data-lucide="eye"></i>
                    <span>Lihat</span>
                  </button>
                  <button class="btn-card-solid dl-mag-btn" data-mag-title="${mag.title} ${mag.issueNumber}">
                    <i data-lucide="download"></i>
                    <span>Unduh PDF</span>
                  </button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      `}

      <!-- Pagination -->
      <div class="pagination-container">
        <span>Menampilkan <strong>${filteredMags.length}</strong> dari <strong>${filteredMags.length}</strong> edisi</span>
        
        <div class="pagination-controls">
          <button class="btn-chevron" disabled><i data-lucide="chevron-left"></i></button>
          <button class="page-btn active">1</button>
          <button class="btn-chevron" disabled><i data-lucide="chevron-right"></i></button>
        </div>
      </div>

    </div>
  `;

  app.innerHTML = html;
  lucide.createIcons();

  // Attach filter change listeners
  const yrSelect = document.getElementById('mag-year-select');
  if (yrSelect) {
    yrSelect.onchange = (e) => {
      magazineYearFilter = e.target.value;
      renderMagazine();
    };
  }

  const catSelect = document.getElementById('mag-cat-select');
  if (catSelect) {
    catSelect.onchange = (e) => {
      magazineCategoryFilter = e.target.value;
      renderMagazine();
    };
  }

  // Attach upload action
  const uploadBtn = document.getElementById('open-upload-modal-btn');
  if (uploadBtn) {
    uploadBtn.onclick = openUploadMagazineModal;
  }

  // Action buttons inside cards
  document.querySelectorAll('.view-mag-btn').forEach(btn => {
    btn.onclick = (e) => {
      const magId = e.currentTarget.getAttribute('data-mag-id');
      const mag = STATE.magazines.find(m => m.id === magId);
      if (mag) {
        openMagazineViewer(mag);
      }
    };
  });

  document.querySelectorAll('.dl-mag-btn').forEach(btn => {
    btn.onclick = (e) => {
      const title = e.currentTarget.getAttribute('data-mag-title');
      showToast(`Mulai mengunduh berkas ${title} (PDF)...`);
    };
  });
}

/**
 * Handles the display of the PDF e-reader inside the application modal
 */
function openMagazineViewer(mag) {
  const content = `
    <div style="text-align: center;">
      <div style="background-color: var(--bg-secondary); border-radius: var(--radius-md); padding: 3rem 1.5rem; border: 1px dashed var(--border-color); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1rem; height: 350px;">
        <i data-lucide="book-open" style="width: 48px; height: 48px; color: var(--text-secondary);"></i>
        <h3>E-Reader Majalah Portal Internal</h3>
        <p style="font-size: 0.875rem; color: var(--text-secondary); max-width: 320px;">
          Menampilkan ${mag.title} (${mag.issueNumber} - ${mag.month} ${mag.year}).
        </p>
        <div style="display: flex; gap: 8px;">
          <button class="btn-card-solid" onclick="showToast('Membuka PDF viewer interaktif...')" style="padding: 10px 20px;">
            <i data-lucide="external-link"></i> Buka Fullscreen
          </button>
        </div>
      </div>
    </div>
  `;
  openModal(`Membaca Majalah - Edisi Terbaru`, content);
}

/**
 * Form modal trigger for sending message to corporate communications
 */
function openCommsContactModal() {
  const modalHTML = `
    <form id="contact-comms-form" onsubmit="event.preventDefault(); handleCommsSubmit();">
      <div class="form-group">
        <label for="comms-subject">Subjek Konten</label>
        <input type="text" id="comms-subject" class="form-input" placeholder="Contoh: Prestasi Tim Sales / Event Gathering" required>
      </div>
      <div class="form-group">
        <label for="comms-desc">Deskripsi Singkat Cerita / Ide Anda</label>
        <textarea id="comms-desc" class="form-textarea" rows="4" placeholder="Ceritakan sedikit tentang ide tulisan atau dokumentasi yang ingin dibagikan..." required></textarea>
      </div>
      <div class="form-group">
        <label>Lampiran Pendukung (Foto / Draft Naskah)</label>
        <div class="form-file-drop" onclick="showToast('Mengunggah draf konten...')">
          <i data-lucide="upload-cloud"></i>
          <span>Pilih berkas untuk diunggah</span>
          PNG, JPG, PDF atau DOCX (Maksimal 10MB)
        </div>
      </div>
      <div class="modal-actions">
        <button type="button" class="btn-secondary" onclick="closeModal()">Batal</button>
        <button type="submit" class="btn-dark">Kirim Pengajuan</button>
      </div>
    </form>
  `;
  openModal('Hubungi Tim Komunikasi Internal', modalHTML);
}

// Window scope helper for the comms submission form
window.handleCommsSubmit = () => {
  closeModal();
  showToast('Pengajuan konten berhasil dikirim! Tim Komunikasi akan segera menghubungi Anda.', 'success');
};

/**
 * Form modal trigger for uploading a new internal magazine issue
 */
function openUploadMagazineModal() {
  const modalHTML = `
    <form id="upload-magazine-form" onsubmit="event.preventDefault(); handleMagazineUploadSubmit();">
      <div class="form-group">
        <label for="mag-form-title">Judul Majalah</label>
        <input type="text" id="mag-form-title" class="form-input" placeholder="Masukkan judul utama edisi" required>
      </div>
      
      <div class="form-row">
        <div class="form-group">
          <label for="mag-form-issue">Nomor Edisi</label>
          <input type="text" id="mag-form-issue" class="form-input" placeholder="Contoh: Edisi #13" required>
        </div>
        <div class="form-group">
          <label for="mag-form-category">Kategori</label>
          <select id="mag-form-category" class="form-select">
            <option value="Teknologi">Teknologi</option>
            <option value="Budaya Kerja">Budaya Kerja</option>
            <option value="Keberlanjutan">Keberlanjutan</option>
            <option value="Bisnis">Bisnis</option>
            <option value="Kesejahteraan">Kesejahteraan</option>
          </select>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label for="mag-form-month">Bulan Terbit</label>
          <select id="mag-form-month" class="form-select">
            ${['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'].map(m => `
              <option value="${m}">${m}</option>
            `).join('')}
          </select>
        </div>
        <div class="form-group">
          <label for="mag-form-year">Tahun Terbit</label>
          <select id="mag-form-year" class="form-select">
            <option value="2024">2024</option>
            <option value="2023">2023</option>
          </select>
        </div>
      </div>

      <div class="form-group">
        <label>Unggah Berkas PDF & Cover</label>
        <div class="form-file-drop" onclick="showToast('Memilih berkas majalah PDF & Cover...')">
          <i data-lucide="file-text"></i>
          <span>Pilih Berkas Majalah</span>
          PDF & Gambar Cover (Maksimal 25MB)
        </div>
      </div>

      <div class="modal-actions">
        <button type="button" class="btn-secondary" onclick="closeModal()">Batal</button>
        <button type="submit" class="btn-dark">Unggah Edisi</button>
      </div>
    </form>
  `;
  openModal('Unggah Edisi Majalah Baru', modalHTML);
}

// Window scope helper for the magazine upload form submission
window.handleMagazineUploadSubmit = () => {
  const title = document.getElementById('mag-form-title').value.trim();
  const issue = document.getElementById('mag-form-issue').value.trim();
  const category = document.getElementById('mag-form-category').value;
  const month = document.getElementById('mag-form-month').value;
  const year = document.getElementById('mag-form-year').value;

  if (!title || !issue) {
    showToast('Mohon lengkapi judul dan nomor edisi!', 'danger');
    return;
  }

  // Prepend new magazine into our database state list
  const newMag = {
    id: `mag-${Date.now()}`,
    title: title,
    issueNumber: issue,
    month: month,
    year: year,
    category: category,
    coverImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400',
    pdfUrl: '#'
  };

  STATE.magazines.unshift(newMag);
  closeModal();
  showToast(`Edisi "${title}" (${issue}) berhasil diunggah!`);
  
  // Refresh view if currently active on magazine page
  if (window.location.hash === '#magazine') {
    renderMagazine();
  } else {
    // Redirect to magazines page
    window.location.hash = '#magazine';
  }
};

// ==========================================================================
// ADMIN PANEL & CMS DASHBOARD RENDERERS & CRUD MODALS
// ==========================================================================
let currentAdminTab = 'overview';

function renderAdmin() {
  if (!STATE.currentUser || STATE.currentUser.role !== 'admin') {
    showToast('Akses ditolak. Silakan login sebagai Administrator.', 'danger');
    window.location.hash = '#login';
    return;
  }
  const app = document.getElementById('app-viewport');

  const totalNews = STATE.news.length;
  const totalEvents = STATE.events.length;
  const totalPhotos = STATE.events.reduce((acc, ev) => acc + ev.photos.length, 0);
  const totalMags = STATE.magazines.length;

  const html = `
    <div class="container">
      <!-- Admin Header Banner -->
      <div class="admin-header-banner">
        <div class="admin-title-area">
          <h1>
            <i data-lucide="layout-dashboard"></i> Panel Kontrol Admin CMS
          </h1>
          <p style="font-size: 0.9rem; color: var(--accent); opacity: 0.9; margin-top: 4px;">
            Sistem Manajemen Konten Resmi Portal Internal Perusahaan. (Modal Rp 0 - Storage Terintegrasi)
          </p>
        </div>
        <div style="display: flex; align-items: center; gap: 12px; z-index: 2;">
          <span class="admin-status-badge">
            <span class="admin-status-dot"></span> Sistem Aktif (LocalStorage)
          </span>
          <button class="btn-outline-white" style="font-size: 0.78rem; padding: 6px 12px;" onclick="resetDataToDefault()">
            <i data-lucide="rotate-ccw" style="width: 14px; height: 14px;"></i> Reset Data Demo
          </button>
        </div>
      </div>

      <!-- Admin Subnav Tabs -->
      <div class="admin-subnav">
        <ul class="admin-tabs">
          <li>
            <button class="admin-tab-btn ${currentAdminTab === 'overview' ? 'active' : ''}" data-admin-tab="overview">
              <i data-lucide="bar-chart-3"></i> Ringkasan
            </button>
          </li>
          <li>
            <button class="admin-tab-btn ${currentAdminTab === 'news' ? 'active' : ''}" data-admin-tab="news">
              <i data-lucide="newspaper"></i> Kelola Berita (${totalNews})
            </button>
          </li>
          <li>
            <button class="admin-tab-btn ${currentAdminTab === 'events' ? 'active' : ''}" data-admin-tab="events">
              <i data-lucide="folder"></i> Kelola Album Event (${totalEvents})
            </button>
          </li>
          <li>
            <button class="admin-tab-btn ${currentAdminTab === 'magazines' ? 'active' : ''}" data-admin-tab="magazines">
              <i data-lucide="book-open"></i> Kelola Majalah (${totalMags})
            </button>
          </li>
        </ul>
      </div>

      <!-- Tab Content Placeholder -->
      <div id="admin-tab-content"></div>
    </div>
  `;

  app.innerHTML = html;
  lucide.createIcons();

  document.querySelectorAll('[data-admin-tab]').forEach(btn => {
    btn.onclick = (e) => {
      currentAdminTab = e.currentTarget.getAttribute('data-admin-tab');
      renderAdmin();
    };
  });

  const tabContentEl = document.getElementById('admin-tab-content');
  if (currentAdminTab === 'overview') {
    renderAdminOverviewTab(tabContentEl, totalNews, totalEvents, totalPhotos, totalMags);
  } else if (currentAdminTab === 'news') {
    renderAdminNewsTab(tabContentEl);
  } else if (currentAdminTab === 'events') {
    renderAdminEventsTab(tabContentEl);
  } else if (currentAdminTab === 'magazines') {
    renderAdminMagazinesTab(tabContentEl);
  }
}

function renderAdminOverviewTab(container, totalNews, totalEvents, totalPhotos, totalMags) {
  container.innerHTML = `
    <!-- Stats Grid -->
    <div class="admin-stats-grid">
      <div class="stat-card">
        <div class="stat-icon-wrapper" style="background-color: #eff6ff; color: #2563eb;">
          <i data-lucide="newspaper"></i>
        </div>
        <div class="stat-info">
          <span class="stat-value">${totalNews}</span>
          <span class="stat-label">Total Berita Dipublikasikan</span>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon-wrapper" style="background-color: #f0fdf4; color: #16a34a;">
          <i data-lucide="folder"></i>
        </div>
        <div class="stat-info">
          <span class="stat-value">${totalEvents}</span>
          <span class="stat-label">Total Album Event</span>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon-wrapper" style="background-color: #fffbeb; color: #d97706;">
          <i data-lucide="image"></i>
        </div>
        <div class="stat-info">
          <span class="stat-value">${totalPhotos}</span>
          <span class="stat-label">Total Foto & Video</span>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon-wrapper" style="background-color: #faf5ff; color: #9333ea;">
          <i data-lucide="book-open"></i>
        </div>
        <div class="stat-info">
          <span class="stat-value">${totalMags}</span>
          <span class="stat-label">Edisi Majalah Rilis</span>
        </div>
      </div>
    </div>

    <!-- Quick Actions Panel -->
    <div style="background-color: white; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 2rem; box-shadow: var(--shadow-sm); margin-bottom: 2.5rem;">
      <h3 style="font-size: 1.15rem; font-weight: 800; margin-bottom: 1rem; color: var(--text-primary);">Aksi Cepat Pengelolaan</h3>
      <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 1.5rem;">Pilih jenis konten yang ingin Anda tambahkan atau kelola di dalam portal:</p>
      
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <button class="btn-dark" onclick="openNewsFormModal()">
          <i data-lucide="plus"></i> Tambah Berita Baru
        </button>
        <button class="btn-dark" onclick="openEventFormModal()">
          <i data-lucide="folder-plus"></i> Tambah Album Event Baru
        </button>
        <button class="btn-dark" onclick="openMagazineFormModal()">
          <i data-lucide="file-plus"></i> Tambah Edisi Majalah
        </button>
      </div>
    </div>
  `;
  lucide.createIcons();
}

/**
 * NEWS MANAGEMENT TAB
 */
function renderAdminNewsTab(container) {
  container.innerHTML = `
    <div class="table-panel-header">
      <h3 class="table-panel-title">Daftar Artikel Berita</h3>
      <a href="#admin/new-news" class="btn-dark" style="text-decoration: none;">
        <i data-lucide="plus"></i> Tambah Berita Baru
      </a>
    </div>

    <div class="admin-table-wrapper">
      <table class="admin-table">
        <thead>
          <tr>
            <th>Gambar</th>
            <th>Judul Artikel</th>
            <th>Kategori</th>
            <th>Penulis</th>
            <th>Tanggal</th>
            <th style="text-align: right;">Aksi</th>
          </tr>
        </thead>
        <tbody>
          ${STATE.news.map(item => `
            <tr>
              <td>
                <img src="${item.image}" alt="${item.title}" class="table-thumb" onerror="this.src='https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=100'">
              </td>
              <td>
                <div class="table-title-cell" title="${item.title}">${item.title}</div>
                <div style="font-size: 0.75rem; color: var(--text-secondary);">${item.readTime}</div>
              </td>
              <td><span class="gallery-media-tag" style="position: static;">${item.category}</span></td>
              <td>${item.author}</td>
              <td>${item.date}</td>
              <td style="text-align: right;">
                <div class="row-actions" style="justify-content: flex-end;">
                  <a href="#news-detail/${item.id}" target="_blank" class="btn-action-sm" title="Pratinjau Artikel">
                    <i data-lucide="eye"></i> Lihat
                  </a>
                  <a href="#admin/edit-news/${item.id}" class="btn-action-sm edit">
                    <i data-lucide="edit-3"></i> Edit
                  </a>
                  <button class="btn-action-sm delete" onclick="deleteNewsItem('${item.id}')">
                    <i data-lucide="trash-2"></i> Hapus
                  </button>
                </div>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
  lucide.createIcons();
}

/* ==========================================================================
   SHAREPOINT / CANVA VISUAL CANVAS BLOCK EDITOR MODULE
   ========================================================================== */

function createDefaultBlock(type) {
  const id = `b-${Date.now()}-${Math.floor(Math.random()*1000)}`;
  switch (type) {
    case 'heading':
      return { id, type: 'heading', content: 'Judul Bagian Sub-Artikel', settings: { size: 'medium', align: 'left' } };
    case 'paragraph':
      return { id, type: 'paragraph', content: 'Tuliskan teks paragraf di sini. Anda dapat mengubah format, alinea, dan menyusun posisinya secara bebas.', settings: { align: 'left' } };
    case 'image':
      return { id, type: 'image', content: 'assets/office_collaboration.png', settings: { imageWidth: '100', align: 'center', caption: 'Keterangan dokumentasi foto...', borderRadius: 'radius-md' } };
    case 'callout':
      return { id, type: 'callout', content: 'Pesan pengumuman atau catatan penting untuk seluruh karyawan perusahaan.', settings: { theme: 'blue', icon: '📢' } };
    case 'columns':
      return { id, type: 'columns', content: '', settings: { col1: 'Kolom Kiri: Poin utama atau pembahasan pertama...', col2: 'Kolom Kanan: Poin pendukung atau ringkasan data...' } };
    case 'quote':
      return { id, type: 'quote', content: 'Inovasi dan keberlanjutan dimungkinkan saat seluruh tim saling mendukung.', settings: { author: 'Manajemen Board' } };
    case 'divider':
      return { id, type: 'divider', content: '', settings: { style: 'gradient' } };
    default:
      return { id, type: 'paragraph', content: 'Teks paragraf baru.', settings: {} };
  }
}

let currentWorkingBlocks = [];

function openBlockPickerModal(insertIndex, onSelectCallback) {
  const blockTypes = [
    { type: 'heading', title: 'Judul (Heading)', icon: 'type', desc: 'Sub-judul H1, H2, H3 dengan opsi ukuran & alinea' },
    { type: 'paragraph', title: 'Teks Paragraf', icon: 'align-left', desc: 'Teks narasi utama dengan format paragraf' },
    { type: 'image', title: 'Gambar Media', icon: 'image', desc: 'Foto dengan opsi lebar (25%-100%) & caption' },
    { type: 'callout', title: 'Banner Highlight', icon: 'megaphone', desc: 'Kotak pengumuman berwarna (5 tema warna)' },
    { type: 'columns', title: 'Layout 2-Kolom', icon: 'columns', desc: 'Menyusun 2 kolom teks berdampingan' },
    { type: 'quote', title: 'Kutipan (Quote)', icon: 'quote', desc: 'Kotak kutipan dengan nama pengutip' },
    { type: 'divider', title: 'Garis Pemisah', icon: 'minus', desc: 'Garis pemisah (solid, dashed, gradient)' }
  ];

  const modalHTML = `
    <div style="margin-bottom: 1rem;">
      <p style="font-size: 0.875rem; color: var(--text-secondary);">Pilih jenis blok konten yang ingin ditambahkan ke canvas:</p>
    </div>
    <div class="block-picker-grid">
      ${blockTypes.map(bt => `
        <div class="block-picker-card" onclick="window.selectBlockTypeToAdd('${bt.type}', ${insertIndex})">
          <div class="block-picker-icon">
            <i data-lucide="${bt.icon}"></i>
          </div>
          <div class="block-picker-title">${bt.title}</div>
          <div class="block-picker-desc">${bt.desc}</div>
        </div>
      `).join('')}
    </div>
  `;

  const secondaryModal = document.createElement('div');
  secondaryModal.id = 'block-picker-overlay';
  secondaryModal.className = 'modal-overlay active';
  secondaryModal.style.zIndex = '2000';
  secondaryModal.innerHTML = `
    <div class="modal-card" style="max-width: 650px;">
      <div class="modal-header">
        <h3>+ Tambah Blok Konten Baru (Web-Part)</h3>
        <button class="modal-close" onclick="document.getElementById('block-picker-overlay').remove()">&times;</button>
      </div>
      <div class="modal-body">${modalHTML}</div>
    </div>
  `;
  document.body.appendChild(secondaryModal);
  lucide.createIcons();

  window.selectBlockTypeToAdd = (type, idx) => {
    const newBlock = createDefaultBlock(type);
    if (idx === -1 || idx >= currentWorkingBlocks.length) {
      currentWorkingBlocks.push(newBlock);
    } else {
      currentWorkingBlocks.splice(idx, 0, newBlock);
    }
    document.getElementById('block-picker-overlay').remove();
    if (onSelectCallback) onSelectCallback();
  };
}

function renderVisualCanvasWorkspace(containerEl) {
  if (!containerEl) return;

  const html = `
    <div class="visual-canvas-workspace">
      <div class="canvas-header-bar">
        <div class="canvas-header-title">
          <i data-lucide="layout" style="color: var(--accent-color);"></i>
          <span>SharePoint / Canva Visual Canvas Editor (${currentWorkingBlocks.length} Blok)</span>
        </div>
        <div class="canvas-header-actions">
          <button type="button" class="btn-action-sm" onclick="openBlockPickerModal(-1, () => renderVisualCanvasWorkspace(document.getElementById('canvas-workspace-container')))">
            <i data-lucide="plus-circle"></i> Tambah Blok
          </button>
          <button type="button" class="btn-action-sm delete" onclick="if(confirm('Kosongkan seluruh canvas?')) { currentWorkingBlocks = []; renderVisualCanvasWorkspace(document.getElementById('canvas-workspace-container')); }">
            <i data-lucide="trash"></i> Reset Canvas
          </button>
        </div>
      </div>

      <div class="canvas-blocks-list" id="canvas-blocks-list">
        ${currentWorkingBlocks.length === 0 ? `
          <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
            <i data-lucide="layers" style="width: 48px; height: 48px; opacity: 0.4; margin-bottom: 0.5rem;"></i>
            <p style="font-weight: 600; font-size: 0.95rem;">Canvas Konten Masih Kosong</p>
            <p style="font-size: 0.825rem; margin-bottom: 1rem;">Klik tombol di bawah untuk menambah blok pertama Anda (Judul, Teks, Gambar, Banner, dsb).</p>
            <button type="button" class="btn-dark" onclick="openBlockPickerModal(-1, () => renderVisualCanvasWorkspace(document.getElementById('canvas-workspace-container')))">
              + Tambah Blok Konten Pertama
            </button>
          </div>
        ` : currentWorkingBlocks.map((block, index) => renderSingleBlockItem(block, index)).join('')}
      </div>
    </div>
  `;

  containerEl.innerHTML = html;
  lucide.createIcons();
  attachCanvasDragAndDrop(containerEl);
}

function renderSingleBlockItem(block, index) {
  const s = block.settings || {};
  const size = s.size || 'medium';
  const align = s.align || 'left';
  const imageWidth = s.imageWidth || '100';
  const borderRadius = s.borderRadius || 'radius-md';
  const theme = s.theme || 'blue';
  const style = s.style || 'gradient';

  return `
    <div class="canvas-block-wrapper" data-block-id="${block.id}" data-index="${index}" draggable="true">
      
      <!-- Block Badge Header -->
      <span class="block-type-badge">
        <i data-lucide="${getBlockIcon(block.type)}"></i> ${getBlockTypeName(block.type)}
      </span>

      <!-- Floating Action Control Toolbar -->
      <div class="block-floating-bar">
        <span class="bar-btn drag-handle-btn" title="Seret untuk memindahkan posisi"><i data-lucide="grip-vertical"></i></span>
        <button type="button" class="bar-btn" title="Pindah Ke Atas" onclick="window.moveBlockUpDown(${index}, -1)"><i data-lucide="chevron-up"></i></button>
        <button type="button" class="bar-btn" title="Pindah Ke Bawah" onclick="window.moveBlockUpDown(${index}, 1)"><i data-lucide="chevron-down"></i></button>
        <span class="bar-divider"></span>

        ${block.type === 'heading' ? `
          <button type="button" class="bar-btn ${size === 'small' ? 'active' : ''}" title="Ukuran Kecil (H3)" onclick="window.updateBlockSetting('${block.id}', 'size', 'small')">S</button>
          <button type="button" class="bar-btn ${size === 'medium' ? 'active' : ''}" title="Ukuran Sedang (H2)" onclick="window.updateBlockSetting('${block.id}', 'size', 'medium')">M</button>
          <button type="button" class="bar-btn ${size === 'large' ? 'active' : ''}" title="Ukuran Besar (H1)" onclick="window.updateBlockSetting('${block.id}', 'size', 'large')">L</button>
          <button type="button" class="bar-btn ${size === 'jumbo' ? 'active' : ''}" title="Ukuran Jumbo" onclick="window.updateBlockSetting('${block.id}', 'size', 'jumbo')">XL</button>
          <span class="bar-divider"></span>
          <button type="button" class="bar-btn ${align === 'left' ? 'active' : ''}" onclick="window.updateBlockSetting('${block.id}', 'align', 'left')"><i data-lucide="align-left"></i></button>
          <button type="button" class="bar-btn ${align === 'center' ? 'active' : ''}" onclick="window.updateBlockSetting('${block.id}', 'align', 'center')"><i data-lucide="align-center"></i></button>
          <button type="button" class="bar-btn ${align === 'right' ? 'active' : ''}" onclick="window.updateBlockSetting('${block.id}', 'align', 'right')"><i data-lucide="align-right"></i></button>
        ` : ''}

        ${block.type === 'paragraph' ? `
          <button type="button" class="bar-btn ${align === 'left' ? 'active' : ''}" onclick="window.updateBlockSetting('${block.id}', 'align', 'left')"><i data-lucide="align-left"></i></button>
          <button type="button" class="bar-btn ${align === 'center' ? 'active' : ''}" onclick="window.updateBlockSetting('${block.id}', 'align', 'center')"><i data-lucide="align-center"></i></button>
          <button type="button" class="bar-btn ${align === 'right' ? 'active' : ''}" onclick="window.updateBlockSetting('${block.id}', 'align', 'right')"><i data-lucide="align-right"></i></button>
        ` : ''}

        ${block.type === 'image' ? `
          <button type="button" class="bar-btn ${imageWidth === '25' ? 'active' : ''}" title="25% Width" onclick="window.updateBlockSetting('${block.id}', 'imageWidth', '25')">25%</button>
          <button type="button" class="bar-btn ${imageWidth === '50' ? 'active' : ''}" title="50% Width" onclick="window.updateBlockSetting('${block.id}', 'imageWidth', '50')">50%</button>
          <button type="button" class="bar-btn ${imageWidth === '75' ? 'active' : ''}" title="75% Width" onclick="window.updateBlockSetting('${block.id}', 'imageWidth', '75')">75%</button>
          <button type="button" class="bar-btn ${imageWidth === '100' ? 'active' : ''}" title="100% Width" onclick="window.updateBlockSetting('${block.id}', 'imageWidth', '100')">100%</button>
          <span class="bar-divider"></span>
          <button type="button" class="bar-btn ${align === 'left' ? 'active' : ''}" onclick="window.updateBlockSetting('${block.id}', 'align', 'left')"><i data-lucide="align-left"></i></button>
          <button type="button" class="bar-btn ${align === 'center' ? 'active' : ''}" onclick="window.updateBlockSetting('${block.id}', 'align', 'center')"><i data-lucide="align-center"></i></button>
          <button type="button" class="bar-btn ${align === 'right' ? 'active' : ''}" onclick="window.updateBlockSetting('${block.id}', 'align', 'right')"><i data-lucide="align-right"></i></button>
        ` : ''}

        ${block.type === 'callout' ? `
          <button type="button" class="bar-btn ${theme === 'blue' ? 'active' : ''}" title="Tema Biru" onclick="window.updateBlockSetting('${block.id}', 'theme', 'blue')">🔵</button>
          <button type="button" class="bar-btn ${theme === 'emerald' ? 'active' : ''}" title="Tema Hijau" onclick="window.updateBlockSetting('${block.id}', 'theme', 'emerald')">🟢</button>
          <button type="button" class="bar-btn ${theme === 'amber' ? 'active' : ''}" title="Tema Amber" onclick="window.updateBlockSetting('${block.id}', 'theme', 'amber')">🟡</button>
          <button type="button" class="bar-btn ${theme === 'purple' ? 'active' : ''}" title="Tema Ungu" onclick="window.updateBlockSetting('${block.id}', 'theme', 'purple')">🟣</button>
          <button type="button" class="bar-btn ${theme === 'dark' ? 'active' : ''}" title="Tema Gelap" onclick="window.updateBlockSetting('${block.id}', 'theme', 'dark')">⚫</button>
        ` : ''}

        ${block.type === 'divider' ? `
          <button type="button" class="bar-btn ${style === 'solid' ? 'active' : ''}" onclick="window.updateBlockSetting('${block.id}', 'style', 'solid')">Solid</button>
          <button type="button" class="bar-btn ${style === 'dashed' ? 'active' : ''}" onclick="window.updateBlockSetting('${block.id}', 'style', 'dashed')">Dashed</button>
          <button type="button" class="bar-btn ${style === 'gradient' ? 'active' : ''}" onclick="window.updateBlockSetting('${block.id}', 'style', 'gradient')">Gradient</button>
        ` : ''}

        <span class="bar-divider"></span>
        <button type="button" class="bar-btn" title="Duplikat Blok" onclick="window.duplicateBlock('${block.id}')"><i data-lucide="copy"></i></button>
        <button type="button" class="bar-btn" title="Hapus Blok" style="color: #f87171;" onclick="window.removeBlock('${block.id}')"><i data-lucide="trash-2"></i></button>
      </div>

      <!-- Editable Block Inputs per Type -->
      <div class="block-content-editable">
        ${block.type === 'heading' ? `
          <input type="text" class="block-heading-input size-${size} align-${align}" value="${escapeAttr(block.content)}" oninput="window.updateBlockContent('${block.id}', this.value)" placeholder="Tuliskan judul sub-artikel...">
        ` : ''}

        ${block.type === 'paragraph' ? `
          <textarea class="block-paragraph-textarea align-${align}" oninput="window.updateBlockContent('${block.id}', this.value)" placeholder="Tuliskan isi paragraf teks di sini...">${escapeAttr(block.content)}</textarea>
        ` : ''}

        ${block.type === 'image' ? `
          <div class="block-image-container width-${imageWidth} align-${align}">
            <div style="display: flex; gap: 8px; margin-bottom: 6px;">
              <input type="text" class="form-input" style="flex:1; font-size: 0.8rem;" value="${escapeAttr(block.content)}" onchange="window.updateBlockContent('${block.id}', this.value)" placeholder="URL / Path Gambar">
            </div>
            <img src="${block.content}" class="block-image-preview ${borderRadius}" onerror="this.src='https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800'">
            <input type="text" class="block-image-caption" value="${escapeAttr(s.caption || '')}" oninput="window.updateBlockSetting('${block.id}', 'caption', this.value)" placeholder="Tambah caption / keterangan foto...">
          </div>
        ` : ''}

        ${block.type === 'callout' ? `
          <div class="block-callout-box theme-${theme}">
            <input type="text" style="width: 36px; text-align: center; background: transparent; border: none; font-size: 1.25rem;" value="${escapeAttr(s.icon || '📢')}" oninput="window.updateBlockSetting('${block.id}', 'icon', this.value)">
            <textarea class="block-callout-text" oninput="window.updateBlockContent('${block.id}', this.value)" placeholder="Tuliskan pesan pengumuman / catatan...">${escapeAttr(block.content)}</textarea>
          </div>
        ` : ''}

        ${block.type === 'columns' ? `
          <div class="block-columns-grid">
            <div class="block-column-box">
              <label style="font-weight: 700; font-size: 0.75rem; color: var(--text-secondary); display: block; margin-bottom: 4px;">KOLOM KIRI (1)</label>
              <textarea class="block-paragraph-textarea" style="min-height: 80px;" oninput="window.updateBlockSetting('${block.id}', 'col1', this.value)" placeholder="Isi kolom kiri...">${escapeAttr(s.col1 || '')}</textarea>
            </div>
            <div class="block-column-box">
              <label style="font-weight: 700; font-size: 0.75rem; color: var(--text-secondary); display: block; margin-bottom: 4px;">KOLOM KANAN (2)</label>
              <textarea class="block-paragraph-textarea" style="min-height: 80px;" oninput="window.updateBlockSetting('${block.id}', 'col2', this.value)" placeholder="Isi kolom kanan...">${escapeAttr(s.col2 || '')}</textarea>
            </div>
          </div>
        ` : ''}

        ${block.type === 'quote' ? `
          <div class="block-quote-box">
            <textarea class="block-quote-text" oninput="window.updateBlockContent('${block.id}', this.value)" placeholder="Tuliskan kalimat kutipan...">${escapeAttr(block.content)}</textarea>
            <input type="text" class="block-quote-author" value="${escapeAttr(s.author || '')}" oninput="window.updateBlockSetting('${block.id}', 'author', this.value)" placeholder="— Nama Tokoh / Direksi">
          </div>
        ` : ''}

        ${block.type === 'divider' ? `
          <div style="padding: 0.5rem 0;">
            <hr class="block-divider-line style-${style}">
          </div>
        ` : ''}
      </div>

    </div>

    <!-- Inter-block Add Button Separator -->
    <div class="canvas-add-separator">
      <button type="button" class="add-block-inline-btn" onclick="openBlockPickerModal(${index + 1}, () => renderVisualCanvasWorkspace(document.getElementById('canvas-workspace-container')))">
        <i data-lucide="plus" style="width: 12px; height: 12px;"></i> Tambah Blok Konten
      </button>
    </div>
  `;
}

function escapeAttr(str) {
  if (!str) return '';
  return String(str).replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function getBlockIcon(type) {
  switch (type) {
    case 'heading': return 'type';
    case 'paragraph': return 'align-left';
    case 'image': return 'image';
    case 'callout': return 'megaphone';
    case 'columns': return 'columns';
    case 'quote': return 'quote';
    case 'divider': return 'minus';
    default: return 'square';
  }
}

function getBlockTypeName(type) {
  switch (type) {
    case 'heading': return 'Judul (Heading)';
    case 'paragraph': return 'Paragraf Teks';
    case 'image': return 'Gambar Media';
    case 'callout': return 'Banner Callout';
    case 'columns': return 'Layout 2-Kolom';
    case 'quote': return 'Kutipan';
    case 'divider': return 'Garis Pemisah';
    default: return 'Blok Konten';
  }
}

window.updateBlockContent = (id, val) => {
  const b = currentWorkingBlocks.find(x => x.id === id);
  if (b) b.content = val;
};

window.updateBlockSetting = (id, key, val) => {
  const b = currentWorkingBlocks.find(x => x.id === id);
  if (b) {
    if (!b.settings) b.settings = {};
    b.settings[key] = val;
    renderVisualCanvasWorkspace(document.getElementById('canvas-workspace-container'));
  }
};

window.moveBlockUpDown = (index, delta) => {
  const newIndex = index + delta;
  if (newIndex < 0 || newIndex >= currentWorkingBlocks.length) return;
  const temp = currentWorkingBlocks[index];
  currentWorkingBlocks[index] = currentWorkingBlocks[newIndex];
  currentWorkingBlocks[newIndex] = temp;
  renderVisualCanvasWorkspace(document.getElementById('canvas-workspace-container'));
};

window.duplicateBlock = (id) => {
  const idx = currentWorkingBlocks.findIndex(x => x.id === id);
  if (idx !== -1) {
    const orig = currentWorkingBlocks[idx];
    const copy = JSON.parse(JSON.stringify(orig));
    copy.id = `b-${Date.now()}-${Math.floor(Math.random()*1000)}`;
    currentWorkingBlocks.splice(idx + 1, 0, copy);
    renderVisualCanvasWorkspace(document.getElementById('canvas-workspace-container'));
  }
};

window.removeBlock = (id) => {
  currentWorkingBlocks = currentWorkingBlocks.filter(x => x.id !== id);
  renderVisualCanvasWorkspace(document.getElementById('canvas-workspace-container'));
};

function attachCanvasDragAndDrop(containerEl) {
  const listEl = containerEl.querySelector('#canvas-blocks-list');
  if (!listEl) return;

  let dragSrcIndex = null;

  listEl.querySelectorAll('.canvas-block-wrapper').forEach(item => {
    item.addEventListener('dragstart', (e) => {
      dragSrcIndex = parseInt(item.getAttribute('data-index'), 10);
      item.classList.add('dragging');
      e.dataTransfer.effectAllowed = 'move';
    });

    item.addEventListener('dragend', () => {
      item.classList.remove('dragging');
    });

    item.addEventListener('dragover', (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
    });

    item.addEventListener('drop', (e) => {
      e.preventDefault();
      const dropTargetIndex = parseInt(item.getAttribute('data-index'), 10);
      if (dragSrcIndex !== null && dragSrcIndex !== dropTargetIndex) {
        const movedItem = currentWorkingBlocks.splice(dragSrcIndex, 1)[0];
        currentWorkingBlocks.splice(dropTargetIndex, 0, movedItem);
        renderVisualCanvasWorkspace(containerEl);
      }
    });
  });
}

function renderAdminFullPageEditor(newsId = null) {
  const app = document.getElementById('app-viewport');
  const item = newsId ? STATE.news.find(n => n.id === newsId) : null;
  const isEdit = !!item;

  if (newsId && !item) {
    app.innerHTML = `
      <div class="container text-center" style="padding: 4rem 0;">
        <h2>Berita Tidak Ditemukan</h2>
        <a href="#admin" class="btn-secondary">Kembali ke Admin</a>
      </div>
    `;
    return;
  }

  currentWorkingBlocks = item && item.blocks ? JSON.parse(JSON.stringify(item.blocks)) : [];

  let plainContent = '';
  if (item && item.content) {
    plainContent = item.content.replace(/<\/p>\s*<p>/g, '\n\n').replace(/<\/?p>/g, '').replace(/<br\s*\/?>/gi, '\n');
  }

  const editorHTML = `
    <div class="full-page-editor-container">
      <div class="fp-editor-header">
        <div class="fp-header-left">
          <a href="#admin" class="btn-secondary" style="text-decoration: none;">
            <i data-lucide="arrow-left"></i> Kembali
          </a>
          <h2 style="margin: 0;">${isEdit ? 'Edit Artikel' : 'Tulis Berita Baru'}</h2>
        </div>
        <div class="fp-header-right">
          <button type="button" class="btn-dark" onclick="document.getElementById('news-form-submit-btn').click()">
            <i data-lucide="save"></i> ${isEdit ? 'Simpan Perubahan' : 'Publikasikan'}
          </button>
        </div>
      </div>

      <div class="fp-editor-body">
        <!-- Sub-Tab Header Switcher -->
        <div class="visual-editor-tabs" style="border-bottom: 1px solid var(--border-color); padding: 0 2rem; background: var(--bg-card);">
          <button type="button" class="editor-tab-btn active" id="btn-tab-form" onclick="window.switchNewsEditorTab('form')">
            <i data-lucide="file-text"></i> 1. Metadata Artikel
          </button>
          <button type="button" class="editor-tab-btn" id="btn-tab-visual" onclick="window.switchNewsEditorTab('visual')">
            <i data-lucide="layout"></i> 2. Visual Builder Canvas (SharePoint/Canva)
          </button>
        </div>

        <form id="news-form" onsubmit="event.preventDefault(); handleNewsFormSubmit('${newsId || ''}');" style="padding: 2rem;">
          <button type="submit" id="news-form-submit-btn" style="display:none;"></button>
          
          <!-- SECTION 1: METADATA FORM -->
          <div id="section-news-form" class="fp-editor-section">
            <div class="form-group">
              <label for="news-title-input">Judul Berita Utama</label>
              <input type="text" id="news-title-input" class="form-input" value="${item ? item.title : ''}" placeholder="Masukkan judul utama berita" required>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="news-category-select">Kategori</label>
                <select id="news-category-select" class="form-select">
                  ${['Transformasi', 'Kegiatan', 'CSR', 'Penghargaan', 'Rilis Internal'].map(c => `
                    <option value="${c}" ${item && item.category === c ? 'selected' : ''}>${c}</option>
                  `).join('')}
                </select>
              </div>
              <div class="form-group">
                <label for="news-readtime-input">Waktu Baca</label>
                <input type="text" id="news-readtime-input" class="form-input" value="${item ? item.readTime : '4 Menit'}" placeholder="Contoh: 5 Menit" required>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="news-author-input">Penulis Artikel</label>
                <input type="text" id="news-author-input" class="form-input" value="${item ? item.author : 'Adinda Putri'}" placeholder="Nama penulis" required>
              </div>
              <div class="form-group">
                <label for="news-role-input">Jabatan Penulis</label>
                <input type="text" id="news-role-input" class="form-input" value="${item ? item.authorRole : 'Corporate Communications'}" placeholder="Role / Tim" required>
              </div>
            </div>

            <div class="form-group">
              <label for="news-image-input">URL Gambar Header Utama</label>
              <input type="text" id="news-image-input" class="form-input" value="${item ? item.image : 'assets/server_racks.png'}" placeholder="Path atau URL gambar" required>
            </div>

            <div class="form-group">
              <label for="news-content-input">Isi Ringkas / Fallback Content (Teks)</label>
              <textarea id="news-content-input" class="form-textarea" rows="14" placeholder="Ringkasan teks artikel...">${plainContent}</textarea>
            </div>
          </div>

          <!-- SECTION 2: VISUAL CANVAS BUILDER -->
          <div id="section-news-visual" class="fp-editor-section" style="display: none; padding-bottom: 6rem;">
            <div id="canvas-workspace-container"></div>
          </div>
        </form>
      </div>
    </div>
  `;

  app.innerHTML = editorHTML;
  lucide.createIcons();

  // Initialize Canvas Workspace
  renderVisualCanvasWorkspace(document.getElementById('canvas-workspace-container'));

  window.switchNewsEditorTab = (tab) => {
    const formSec = document.getElementById('section-news-form');
    const visSec = document.getElementById('section-news-visual');
    const btnForm = document.getElementById('btn-tab-form');
    const btnVis = document.getElementById('btn-tab-visual');

    if (tab === 'form') {
      formSec.style.display = 'block';
      visSec.style.display = 'none';
      btnForm.classList.add('active');
      btnVis.classList.remove('active');
    } else {
      formSec.style.display = 'none';
      visSec.style.display = 'block';
      btnForm.classList.remove('active');
      btnVis.classList.add('active');
      renderVisualCanvasWorkspace(document.getElementById('canvas-workspace-container'));
    }
  };
}

window.handleNewsFormSubmit = (newsId) => {
  const title = document.getElementById('news-title-input').value.trim();
  const category = document.getElementById('news-category-select').value;
  const readTime = document.getElementById('news-readtime-input').value.trim();
  const author = document.getElementById('news-author-input').value.trim();
  const authorRole = document.getElementById('news-role-input').value.trim();
  const image = document.getElementById('news-image-input').value.trim();
  let contentRaw = document.getElementById('news-content-input').value.trim();

  let contentFormatted = contentRaw;
  if (contentRaw.length > 0) {
    // Convert newlines back to paragraph blocks if not already HTML
    if (!contentRaw.startsWith('<p>')) {
      contentFormatted = contentRaw.split('\n\n').map(p => `<p>${p}</p>`).join('');
    }
  }

  // If visual blocks exist, generate content fallback from blocks
  if (currentWorkingBlocks && currentWorkingBlocks.length > 0) {
    contentFormatted = renderBlocksToHTML(currentWorkingBlocks);
  }

  if (newsId) {
    const existing = STATE.news.find(n => n.id === newsId);
    if (existing) {
      existing.title = title;
      existing.category = category;
      existing.readTime = readTime;
      existing.author = author;
      existing.authorRole = authorRole;
      existing.image = image;
      existing.content = contentFormatted;
      existing.blocks = JSON.parse(JSON.stringify(currentWorkingBlocks));
    }
    showToast('Berita berhasil diperbarui dengan susunan Visual Canvas!');
  } else {
    const newId = `news-${Date.now()}`;
    const newArticle = {
      id: newId,
      title: title,
      author: author,
      authorRole: authorRole,
      authorAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100',
      date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
      category: category,
      readTime: readTime,
      image: image,
      content: contentFormatted,
      blocks: JSON.parse(JSON.stringify(currentWorkingBlocks)),
      attachments: [],
      comments: [],
      relatedNewsIds: []
    };
    STATE.news.unshift(newArticle);
    showToast('Berita baru dengan Visual Canvas berhasil dipublikasikan!');
  }

  saveStateToStorage();
  window.location.hash = '#admin';
};

function deleteNewsItem(newsId) {
  const item = STATE.news.find(n => n.id === newsId);
  if (!item) return;

  if (confirm(`Apakah Anda yakin ingin menghapus berita "${item.title}"?`)) {
    STATE.news = STATE.news.filter(n => n.id !== newsId);
    saveStateToStorage();
    showToast('Berita berhasil dihapus!');
    renderAdmin();
  }
}

/**
 * EVENTS GALLERY MANAGEMENT TAB
 */
function renderAdminEventsTab(container) {
  container.innerHTML = `
    <div class="table-panel-header">
      <h3 class="table-panel-title">Daftar Album Event Galeri</h3>
      <button class="btn-dark" onclick="openEventFormModal()">
        <i data-lucide="folder-plus"></i> Tambah Album Event Baru
      </button>
    </div>

    <div class="admin-table-wrapper">
      <table class="admin-table">
        <thead>
          <tr>
            <th>Cover Album</th>
            <th>Nama Event</th>
            <th>Kategori</th>
            <th>Tanggal Event</th>
            <th>Jumlah Foto/Video</th>
            <th style="text-align: right;">Aksi</th>
          </tr>
        </thead>
        <tbody>
          ${STATE.events.map(ev => `
            <tr>
              <td>
                <img src="${ev.coverImage}" alt="${ev.title}" class="table-thumb">
              </td>
              <td>
                <div class="table-title-cell" title="${ev.title}">${ev.title}</div>
                <div style="font-size: 0.75rem; color: var(--text-secondary);">${ev.description.substring(0, 50)}...</div>
              </td>
              <td><span class="gallery-media-tag" style="position: static;">${ev.category}</span></td>
              <td>${ev.date}</td>
              <td><strong>${ev.photos.length}</strong> Media</td>
              <td style="text-align: right;">
                <div class="row-actions" style="justify-content: flex-end;">
                  <button class="btn-action-sm manage" onclick="openManagePhotosModal('${ev.id}')">
                    <i data-lucide="image"></i> Kelola Foto (${ev.photos.length})
                  </button>
                  <button class="btn-action-sm edit" onclick="openEventFormModal('${ev.id}')">
                    <i data-lucide="edit-3"></i> Edit
                  </button>
                  <button class="btn-action-sm delete" onclick="deleteEventItem('${ev.id}')">
                    <i data-lucide="trash-2"></i> Hapus
                  </button>
                </div>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
  lucide.createIcons();
}

function openEventFormModal(eventId = null) {
  const item = eventId ? STATE.events.find(e => e.id === eventId) : null;
  const isEdit = !!item;

  const modalHTML = `
    <form id="event-form" onsubmit="event.preventDefault(); handleEventFormSubmit('${eventId || ''}');">
      <div class="form-group">
        <label for="event-title-input">Judul Event</label>
        <input type="text" id="event-title-input" class="form-input" value="${item ? item.title : ''}" placeholder="Contoh: Semarak Kemerdekaan 2024" required>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label for="event-category-select">Kategori Event</label>
          <select id="event-category-select" class="form-select">
            ${['Kegiatan Kantor', 'Fasilitas', 'Sosial', 'Pelatihan', 'CSR', 'Olahraga'].map(c => `
              <option value="${c}" ${item && item.category === c ? 'selected' : ''}>${c}</option>
            `).join('')}
          </select>
        </div>
        <div class="form-group">
          <label for="event-date-input">Tanggal Event</label>
          <input type="text" id="event-date-input" class="form-input" value="${item ? item.date : '17 Agustus 2024'}" placeholder="Contoh: 17 Agustus 2024" required>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label for="event-year-input">Tahun</label>
          <select id="event-year-input" class="form-select">
            <option value="2024" ${item && item.year === '2024' ? 'selected' : ''}>2024</option>
            <option value="2023" ${item && item.year === '2023' ? 'selected' : ''}>2023</option>
          </select>
        </div>
        <div class="form-group">
          <label for="event-cover-input">URL Gambar Cover</label>
          <input type="text" id="event-cover-input" class="form-input" value="${item ? item.coverImage : 'assets/office_collaboration.png'}" placeholder="Path / URL Gambar Cover" required>
        </div>
      </div>

      <div class="form-group">
        <label for="event-desc-input">Deskripsi Singkat Event</label>
        <textarea id="event-desc-input" class="form-textarea" rows="3" placeholder="Deskripsi ringkas mengenai perayaan / event..." required>${item ? item.description : ''}</textarea>
      </div>

      <div class="modal-actions">
        <button type="button" class="btn-secondary" onclick="closeModal()">Batal</button>
        <button type="submit" class="btn-dark">${isEdit ? 'Simpan Album' : 'Buat Album Baru'}</button>
      </div>
    </form>
  `;

  openModal(isEdit ? 'Edit Album Event' : 'Tambah Album Event Baru', modalHTML);
}

window.handleEventFormSubmit = (eventId) => {
  const title = document.getElementById('event-title-input').value.trim();
  const category = document.getElementById('event-category-select').value;
  const date = document.getElementById('event-date-input').value.trim();
  const year = document.getElementById('event-year-input').value;
  const coverImage = document.getElementById('event-cover-input').value.trim();
  const description = document.getElementById('event-desc-input').value.trim();

  if (eventId) {
    const existing = STATE.events.find(e => e.id === eventId);
    if (existing) {
      existing.title = title;
      existing.category = category;
      existing.date = date;
      existing.year = year;
      existing.coverImage = coverImage;
      existing.description = description;
    }
    showToast('Album event berhasil diperbarui!');
  } else {
    const newId = `event-${Date.now()}`;
    const newEvent = {
      id: newId,
      title: title,
      date: date,
      year: year,
      category: category,
      coverImage: coverImage,
      description: description,
      photos: []
    };
    STATE.events.unshift(newEvent);
    showToast('Album event baru berhasil dibuat! Anda kini dapat menambahkan foto/video.');
  }

  saveStateToStorage();
  closeModal();
  renderAdmin();
};

function deleteEventItem(eventId) {
  const item = STATE.events.find(e => e.id === eventId);
  if (!item) return;

  if (confirm(`Apakah Anda yakin ingin menghapus album event "${item.title}" beserta seluruh fotonya?`)) {
    STATE.events = STATE.events.filter(e => e.id !== eventId);
    saveStateToStorage();
    showToast('Album event berhasil dihapus!');
    renderAdmin();
  }
}

/**
 * MANAGE PHOTOS INSIDE AN EVENT ALBUM
 */
function openManagePhotosModal(eventId) {
  const event = STATE.events.find(e => e.id === eventId);
  if (!event) return;

  const modalHTML = `
    <div style="margin-bottom: 1.5rem;">
      <h4 style="font-weight: 700; margin-bottom: 4px;">Kelola Foto/Video dalam Album: "${event.title}"</h4>
      <p style="font-size: 0.8125rem; color: var(--text-secondary);">Total Media: ${event.photos.length} item.</p>
    </div>

    <!-- Form Tambah Media Baru -->
    <form id="add-photo-form" onsubmit="event.preventDefault(); handleAddPhotoSubmit('${eventId}');" style="background: var(--bg-primary); padding: 1rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color); margin-bottom: 1.5rem;">
      <h5 style="font-size: 0.875rem; font-weight: 700; margin-bottom: 0.75rem;"><i data-lucide="plus-circle" style="width: 14px; height: 14px;"></i> Tambah Foto / Video Baru ke Album</h5>
      
      <div class="form-group">
        <label for="photo-title-input">Judul / Keterangan Foto</label>
        <input type="text" id="photo-title-input" class="form-input" placeholder="Contoh: Penyerahan Hadiah Juara 1" required>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label for="photo-type-select">Tipe Media</label>
          <select id="photo-type-select" class="form-select">
            <option value="Foto">Foto</option>
            <option value="Video">Video</option>
          </select>
        </div>
        <div class="form-group">
          <label for="photo-url-input">URL Gambar / Video</label>
          <input type="text" id="photo-url-input" class="form-input" placeholder="assets/office_collaboration.png" required>
        </div>
      </div>

      <button type="submit" class="btn-dark" style="padding: 8px 16px; font-size: 0.8125rem;">
        + Tambahkan ke Album
      </button>
    </form>

    <!-- Daftar Media yang sudah ada -->
    <h5 style="font-size: 0.875rem; font-weight: 700; margin-bottom: 0.75rem;">Foto & Video Terdaftar:</h5>
    <div style="max-height: 250px; overflow-y: auto; border: 1px solid var(--border-color); border-radius: var(--radius-sm);">
      ${event.photos.length === 0 ? `
        <p style="padding: 1rem; text-align: center; color: var(--text-secondary); font-size: 0.8125rem;">Belum ada foto dalam album ini.</p>
      ` : `
        <table class="admin-table">
          <tbody>
            ${event.photos.map(p => `
              <tr>
                <td style="width: 60px;">
                  <img src="${p.mediaUrl}" alt="${p.title}" class="table-thumb">
                </td>
                <td>
                  <div style="font-weight: 700; font-size: 0.85rem;">${p.title}</div>
                  <span class="gallery-media-tag" style="position: static; font-size: 0.65rem;">${p.type}</span>
                </td>
                <td style="text-align: right;">
                  <button class="btn-action-sm delete" onclick="deletePhotoFromEvent('${eventId}', '${p.id}')">
                    <i data-lucide="trash-2"></i> Hapus
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `}
    </div>

    <div class="modal-actions">
      <button type="button" class="btn-dark" onclick="closeModal()">Selesai</button>
    </div>
  `;

  openModal('Kelola Media Album Event', modalHTML);
}

window.handleAddPhotoSubmit = (eventId) => {
  const event = STATE.events.find(e => e.id === eventId);
  if (!event) return;

  const title = document.getElementById('photo-title-input').value.trim();
  const type = document.getElementById('photo-type-select').value;
  const url = document.getElementById('photo-url-input').value.trim();

  const newPhoto = {
    id: `p-${Date.now()}`,
    title: title,
    type: type,
    mediaUrl: url,
    categoryLabel: event.category
  };

  event.photos.unshift(newPhoto);
  saveStateToStorage();
  showToast('Foto/Video baru berhasil ditambahkan ke album!');
  openManagePhotosModal(eventId);
};

window.deletePhotoFromEvent = (eventId, photoId) => {
  const event = STATE.events.find(e => e.id === eventId);
  if (!event) return;

  if (confirm('Apakah Anda yakin ingin menghapus foto ini dari album?')) {
    event.photos = event.photos.filter(p => p.id !== photoId);
    saveStateToStorage();
    showToast('Foto berhasil dihapus!');
    openManagePhotosModal(eventId);
  }
};

/**
 * MAGAZINES MANAGEMENT TAB
 */
function renderAdminMagazinesTab(container) {
  container.innerHTML = `
    <div class="table-panel-header">
      <h3 class="table-panel-title">Daftar Edisi Majalah</h3>
      <button class="btn-dark" onclick="openMagazineFormModal()">
        <i data-lucide="file-plus"></i> Tambah Edisi Majalah
      </button>
    </div>

    <div class="admin-table-wrapper">
      <table class="admin-table">
        <thead>
          <tr>
            <th>Cover</th>
            <th>Judul Majalah</th>
            <th>Edisi</th>
            <th>Bulan & Tahun</th>
            <th>Kategori</th>
            <th style="text-align: right;">Aksi</th>
          </tr>
        </thead>
        <tbody>
          ${STATE.magazines.map(mag => `
            <tr>
              <td>
                <img src="${mag.coverImage}" alt="${mag.title}" class="table-thumb">
              </td>
              <td>
                <div class="table-title-cell" title="${mag.title}">${mag.title}</div>
              </td>
              <td><strong>${mag.issueNumber}</strong></td>
              <td>${mag.month} ${mag.year}</td>
              <td><span class="gallery-media-tag" style="position: static;">${mag.category}</span></td>
              <td style="text-align: right;">
                <div class="row-actions" style="justify-content: flex-end;">
                  <button class="btn-action-sm edit" onclick="openMagazineFormModal('${mag.id}')">
                    <i data-lucide="edit-3"></i> Edit
                  </button>
                  <button class="btn-action-sm delete" onclick="deleteMagazineItem('${mag.id}')">
                    <i data-lucide="trash-2"></i> Hapus
                  </button>
                </div>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
  lucide.createIcons();
}

function openMagazineFormModal(magId = null) {
  const item = magId ? STATE.magazines.find(m => m.id === magId) : null;
  const isEdit = !!item;

  const modalHTML = `
    <form id="mag-form" onsubmit="event.preventDefault(); handleMagazineFormSubmit('${magId || ''}');">
      <div class="form-group">
        <label for="mag-title-input">Judul Majalah</label>
        <input type="text" id="mag-title-input" class="form-input" value="${item ? item.title : ''}" placeholder="Contoh: Inovasi Tanpa Batas" required>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label for="mag-issue-input">Nomor Edisi</label>
          <input type="text" id="mag-issue-input" class="form-input" value="${item ? item.issueNumber : 'Edisi #13'}" placeholder="Contoh: Edisi #13" required>
        </div>
        <div class="form-group">
          <label for="mag-category-select">Kategori</label>
          <select id="mag-category-select" class="form-select">
            ${['Teknologi', 'Budaya Kerja', 'Keberlanjutan', 'Bisnis', 'Kesejahteraan'].map(c => `
              <option value="${c}" ${item && item.category === c ? 'selected' : ''}>${c}</option>
            `).join('')}
          </select>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label for="mag-month-select">Bulan Terbit</label>
          <select id="mag-month-select" class="form-select">
            ${['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'].map(m => `
              <option value="${m}" ${item && item.month === m ? 'selected' : ''}>${m}</option>
            `).join('')}
          </select>
        </div>
        <div class="form-group">
          <label for="mag-year-select">Tahun Terbit</label>
          <select id="mag-year-select" class="form-select">
            <option value="2024" ${item && item.year === '2024' ? 'selected' : ''}>2024</option>
            <option value="2023" ${item && item.year === '2023' ? 'selected' : ''}>2023</option>
          </select>
        </div>
      </div>

      <div class="form-group">
        <label for="mag-cover-input">URL Gambar Cover Majalah</label>
        <input type="text" id="mag-cover-input" class="form-input" value="${item ? item.coverImage : 'assets/magazine_cover_artistic.png'}" placeholder="Path / URL Gambar Cover" required>
      </div>

      <div class="modal-actions">
        <button type="button" class="btn-secondary" onclick="closeModal()">Batal</button>
        <button type="submit" class="btn-dark">${isEdit ? 'Simpan Majalah' : 'Unggah Edisi Majalah'}</button>
      </div>
    </form>
  `;

  openModal(isEdit ? 'Edit Edisi Majalah' : 'Tambah Edisi Majalah Baru', modalHTML);
}

window.handleMagazineFormSubmit = (magId) => {
  const title = document.getElementById('mag-title-input').value.trim();
  const issueNumber = document.getElementById('mag-issue-input').value.trim();
  const category = document.getElementById('mag-category-select').value;
  const month = document.getElementById('mag-month-select').value;
  const year = document.getElementById('mag-year-select').value;
  const coverImage = document.getElementById('mag-cover-input').value.trim();

  if (magId) {
    const existing = STATE.magazines.find(m => m.id === magId);
    if (existing) {
      existing.title = title;
      existing.issueNumber = issueNumber;
      existing.category = category;
      existing.month = month;
      existing.year = year;
      existing.coverImage = coverImage;
    }
    showToast('Edisi majalah berhasil diperbarui!');
  } else {
    const newMag = {
      id: `mag-${Date.now()}`,
      title: title,
      issueNumber: issueNumber,
      month: month,
      year: year,
      category: category,
      coverImage: coverImage,
      pdfUrl: '#'
    };
    STATE.magazines.unshift(newMag);
    showToast('Edisi majalah baru berhasil ditambahkan!');
  }

  saveStateToStorage();
  closeModal();
  renderAdmin();
};

function deleteMagazineItem(magId) {
  const item = STATE.magazines.find(m => m.id === magId);
  if (!item) return;

  if (confirm(`Apakah Anda yakin ingin menghapus majalah "${item.title} (${item.issueNumber})"?`)) {
    STATE.magazines = STATE.magazines.filter(m => m.id !== magId);
    saveStateToStorage();
    showToast('Edisi majalah berhasil dihapus!');
    renderAdmin();
  }
}

// ==========================================================================
// CENTRAL SPA HASH ROUTER
// ==========================================================================
function router() {
  const hash = window.location.hash || '#home';
  
  // Set navbar links active status
  const navIds = {
    '#home': 'nav-home',
    '#news': 'nav-news',
    '#gallery': 'nav-gallery',
    '#magazine': 'nav-magazine'
  };

  // Find exact nav item or matching prefix
  let activeNavId = null;
  for (const [key, val] of Object.entries(navIds)) {
    if (hash === key || hash.startsWith(key + '-detail') || hash.startsWith(key + '-event') || (key === '#news' && hash.startsWith('#news-detail'))) {
      activeNavId = val;
      break;
    }
  }

  // Remove active from all navigation links
  document.querySelectorAll('.main-nav a').forEach(el => el.classList.remove('active'));
  
  // Add active to current nav link
  if (activeNavId) {
    const el = document.getElementById(activeNavId);
    if (el) el.classList.add('active');
  }

  // Auth Security Interceptor
  if (!STATE.currentUser && hash !== '#login') {
    window.location.hash = '#login';
    return;
  }

  // Admin Route Security
  if (hash.startsWith('#admin') && STATE.currentUser?.role !== 'admin') {
    showToast('Akses ditolak. Anda tidak memiliki izin ke Panel CMS.', 'danger');
    window.location.hash = '#home';
    return;
  }

  // Router matching
  if (hash === '#login') {
    renderLogin();
  } else if (hash === '#home' || hash === '') {
    renderHome();
  } else if (hash === '#admin') {
    renderAdmin();
  } else if (hash === '#news') {
    renderNewsIndex();
  } else if (hash.startsWith('#news-detail/')) {
    const newsId = hash.replace('#news-detail/', '');
    renderNewsDetail(newsId);
  } else if (hash === '#gallery') {
    renderGallery();
  } else if (hash.startsWith('#gallery-event/')) {
    const eventId = hash.replace('#gallery-event/', '');
    renderGalleryEvent(eventId);
  } else if (hash === '#magazine') {
    renderMagazine();
  } else if (hash === '#admin/new-news') {
    renderAdminFullPageEditor();
  } else if (hash.startsWith('#admin/edit-news/')) {
    const newsId = hash.replace('#admin/edit-news/', '');
    renderAdminFullPageEditor(newsId);
  } else {
    // Fallback to home page
    window.location.hash = '#home';
  }

  // Scroll to top on every navigation
  window.scrollTo({ top: 0, behavior: 'instant' });
}

// Listen to hash change events
window.addEventListener('hashchange', router);

// Initialize router on document ready load
window.addEventListener('DOMContentLoaded', () => {
  loadStateFromStorage();
  updateHeaderAuthWidget();
  router();

  // Search input interactivity
  const globSearch = document.getElementById('global-search');
  if (globSearch) {
    globSearch.onkeypress = (e) => {
      if (e.key === 'Enter') {
        const query = globSearch.value.trim().toLowerCase();
        if (query) {
          globSearch.value = '';
          handleGlobalSearch(query);
        }
      }
    };
  }

  // Admin button click trigger
  const adminBtn = document.getElementById('admin-panel-trigger');
  if (adminBtn) {
    adminBtn.onclick = () => {
      openModal('Admin Portal', `
        <div style="text-align: center; padding: 1.5rem 0;">
          <i data-lucide="lock" style="width: 48px; height: 48px; color: var(--text-secondary); margin-bottom: 1rem;"></i>
          <h3>Panel Kontrol Admin Terkunci</h3>
          <p style="color: var(--text-secondary); font-size: 0.875rem; margin-bottom: 1.5rem; max-width: 320px; margin-left: auto; margin-right: auto;">
            Anda memerlukan hak akses istimewa Administrator untuk memodifikasi konfigurasi sistem portal internal ini.
          </p>
          <button class="btn-dark" onclick="closeModal()">Kembali</button>
        </div>
      `);
    };
  }

  // Footer comms click trigger
  const contactComms = document.getElementById('contact-comms');
  if (contactComms) {
    contactComms.onclick = (e) => {
      e.preventDefault();
      openCommsContactModal();
    };
  }
});

/**
 * Handles global search queries and redirects to closest matching result or views details
 */
function handleGlobalSearch(query) {
  // 1. Search News first
  const foundNews = STATE.news.find(n => 
    n.title.toLowerCase().includes(query) || 
    n.content.toLowerCase().includes(query) || 
    n.category.toLowerCase().includes(query)
  );

  if (foundNews) {
    showToast(`Ditemukan artikel berita: "${foundNews.title}"`);
    window.location.hash = `#news-detail/${foundNews.id}`;
    return;
  }

  // 2. Search magazines
  const foundMag = STATE.magazines.find(m => 
    m.title.toLowerCase().includes(query) || 
    m.category.toLowerCase().includes(query)
  );

  if (foundMag) {
    showToast(`Ditemukan majalah: "${foundMag.title} - ${foundMag.issueNumber}"`);
    window.location.hash = '#magazine';
    magazineCategoryFilter = 'Semua Kategori';
    magazineYearFilter = 'Semua Tahun';
    renderMagazine();
    return;
  }

  // 3. Search gallery events
  const foundEvent = STATE.events.find(e => 
    e.title.toLowerCase().includes(query) || 
    e.category.toLowerCase().includes(query) ||
    e.photos.some(p => p.title.toLowerCase().includes(query))
  );

  if (foundEvent) {
    showToast(`Ditemukan album event: "${foundEvent.title}"`);
    window.location.hash = `#gallery-event/${foundEvent.id}`;
    return;
  }

  showToast(`Pencarian untuk "${query}" tidak menemukan hasil cocok.`, 'danger');
}
