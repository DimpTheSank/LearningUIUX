export default function Home() {
  return (
    <div>
      {/* Lắp ráp khối Đầu trang vào đây */}
      <Header />

      {/* Lắp ráp khối Nội dung vào giữa */}
      <MainContent />

      {/* Lắp ráp khối Chân trang xuống dưới cùng */}
      <Footer />
    </div>
  );
}
// 1. Khối lego Đầu trang
function Header() {
  return (
    <header style={{ background: '#eee', padding: '10px' }}>
      <h2>Đây là Thanh Menu (Logo, Tìm kiếm, Đăng nhập)</h2>
    </header>
  );
}

// 2. Khối lego Nội dung chính
function MainContent() {
  return (
    <main style={{ padding: '20px 0' }}>
      <h3>Chào mừng đến với trang chủ!</h3>
      <p>Đây là phần nội dung thay đổi liên tục của trang web.</p>
    </main>
  );
}

// 3. Khối lego Chân trang
function Footer() {
  return (
    <footer style={{ background: '#333', color: '#fff', padding: '10px' }}>
      <p>© 2026 Trang web của tôi. Mọi quyền được bảo lưu.</p>
    </footer>
  );
}