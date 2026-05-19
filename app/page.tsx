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
// Thẻ <header> và <nav> giúp Google biết đây là khu vực điều hướng của trang
function Header() {
  return (
    <header>
      <h1>Logo Công Ty</h1>
      <nav>
        <a href="/home">Trang chủ</a> | <a href="/about">Giới thiệu</a>
      </nav>
    </header>
  );
}

// Thẻ <main> bảo với máy tính: "Nội dung chính tôi muốn người ta đọc nằm ở đây!"
function MainContent() {
  return (
    <main>
      <section>
        <h2>Dịch vụ của chúng tôi</h2>
        <p>Chúng tôi cung cấp giải pháp làm web siêu nhanh...</p>
      </section>

      <section>
        <h2>Đánh giá từ khách hàng</h2>
        <article>
          <h4>Anh Nam (CEO)</h4>
          <p>Web dùng rất mượt, tôi rất hài lòng!</p>
        </article>
      </section>
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