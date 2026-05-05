import React from 'react'
import { X, User, History, LogOut, LogIn, Home } from 'lucide-react'
import './MobileMenu.css'

const MobileMenu = ({ isOpen, onClose, user, onLogin, onLogout, onShowHistory, onGoHome }) => {
  if (!isOpen) return null

  return (
    <div className="mobile-menu-overlay" onClick={onClose}>
      <div className="mobile-menu-content" onClick={e => e.stopPropagation()}>
        <div className="menu-header">
          <div className="menu-logo">AuraCV</div>
          <button className="close-menu-btn" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className="menu-body">
          {user && (
            <div className="menu-user-info">
              <img src={user.photoURL || 'https://via.placeholder.com/60'} alt="Avatar" />
              <div className="user-text">
                <span className="user-name">{user.displayName || 'Người dùng'}</span>
                <span className="user-email">{user.email}</span>
              </div>
            </div>
          )}

          <nav className="menu-nav">
            <button className="menu-nav-item" onClick={() => { onGoHome(); onClose(); }}>
              <Home size={20} /> Trang chủ
            </button>
            {user ? (
              <>
                <button className="menu-nav-item" onClick={() => { onShowHistory(); onClose(); }}>
                  <History size={20} /> Lịch sử CV
                </button>
                <div className="menu-divider"></div>
                <button className="menu-nav-item logout" onClick={() => { onLogout(); onClose(); }}>
                  <LogOut size={20} /> Đăng xuất
                </button>
              </>
            ) : (
              <button className="menu-nav-item login" onClick={() => { onLogin(); onClose(); }}>
                <LogIn size={20} /> Đăng nhập
              </button>
            )}
          </nav>
        </div>

        <div className="menu-footer">
          <p>© 2026 AuraCV v2.0</p>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
