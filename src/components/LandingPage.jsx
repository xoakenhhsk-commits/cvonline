import React from 'react'
import { FileText, Wand2, Download, LayoutTemplate, ShieldCheck, ChevronRight } from 'lucide-react'
import './LandingPage.css'

const LandingPage = ({ onStart, onLogin, user }) => {
  return (
    <div className="landing-container">
      {/* Navigation */}
      <nav className="landing-nav">
        <div className="nav-logo">
          <FileText className="text-primary-color" size={28} />
          <span>AuraCV</span>
        </div>
        <div className="nav-actions">
          {user ? (
            <button className="btn-glass" onClick={onStart}>
              Vào không gian làm việc <ChevronRight size={16} />
            </button>
          ) : (
            <>
              <button className="btn-ghost" onClick={onLogin}>Đăng nhập</button>
              <button className="btn-primary" onClick={onStart}>Tạo CV ngay</button>
            </>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <div className="badge-pill">✨ Nền tảng tạo CV Thế Hệ Mới</div>
          <h1 className="hero-title">
            Chinh Phục Nhà Tuyển Dụng <br/>
            Với Một <span className="text-gradient">CV Tuyệt Đẹp</span>
          </h1>
          <p className="hero-subtitle">
            Trở nên nổi bật với các mẫu thiết kế chuyên nghiệp, đồng bộ đám mây an toàn
            và xuất PDF nhanh chóng. Không cần bất kỳ kỹ năng thiết kế nào!
          </p>
          <div className="hero-buttons">
            <button className="btn-primary btn-large" onClick={onStart}>
              Bắt Đầu Tạo CV <Wand2 size={20} />
            </button>
          </div>
        </div>
        
        {/* Floating Mockups */}
        <div className="hero-visuals">
          <div className="mockup-card mockup-1">
            <div className="mockup-header"></div>
            <div className="mockup-body">
              <div className="mockup-line" style={{ width: '40%' }}></div>
              <div className="mockup-line" style={{ width: '80%' }}></div>
              <div className="mockup-line" style={{ width: '60%' }}></div>
            </div>
          </div>
          <div className="mockup-card mockup-2">
            <div className="mockup-avatar"></div>
            <div className="mockup-body">
              <div className="mockup-line" style={{ width: '50%' }}></div>
              <div className="mockup-line" style={{ width: '70%' }}></div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-heading">Tại sao chọn AuraCV?</h2>
        <div className="features-grid">
          <div className="feature-card glass-panel">
            <div className="feature-icon bg-blue">
              <LayoutTemplate size={24} />
            </div>
            <h3>Giao diện Cao Cấp</h3>
            <p>Chọn từ nhiều mẫu chuẩn mực, thanh lịch và hiện đại, phù hợp cho mọi ngành nghề và định hướng.</p>
          </div>
          
          <div className="feature-card glass-panel">
            <div className="feature-icon bg-purple">
              <ShieldCheck size={24} />
            </div>
            <h3>Bảo Mật & Đồng Bộ</h3>
            <p>Đăng nhập Google để lưu tiến trình an toàn trên Cloud. Dễ dàng truy cập CV của bạn từ bất kỳ đâu.</p>
          </div>
          
          <div className="feature-card glass-panel">
            <div className="feature-icon bg-pink">
              <Download size={24} />
            </div>
            <h3>Xuất File Siêu Tốc</h3>
            <p>Xuất CV với định dạng PDF chất lượng cao, giữ nguyên thiết kế chỉ bằng một cú nhấp chuột.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer glass-panel">
        <div className="footer-content">
          <div className="footer-logo">
            <FileText size={20} /> AuraCV
          </div>
          <p>© 2026 AuraCV. Chắp cánh cho sự nghiệp của bạn.</p>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
