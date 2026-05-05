import React from 'react'
import { FileText, Wand2, Plus, History, Menu, ChevronLeft, ChevronRight, X } from 'lucide-react'
import './LandingPage.css'

const LandingPage = ({ onStart, onLogin, user, onShowHistory }) => {
  return (
    <div className="aura-landing">
      {/* Header */}
      <nav className="aura-nav">
        <div className="aura-logo">
          <div className="logo-icon">A</div>
          <span>AuraCV</span>
        </div>
        <div className="aura-nav-right">
          {user ? (
            <div className="user-profile-mini" onClick={onShowHistory}>
              <img src={user.photoURL || 'https://via.placeholder.com/40'} alt="User" />
            </div>
          ) : (
            <button className="btn-ghost-aura" onClick={onLogin}>Đăng nhập</button>
          )}
          <button className="menu-btn-aura">
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="aura-hero">
        <div className="hero-content-aura">
          <h1 className="hero-title-aura">
            Create a <span className="text-blue-aura">job-winning CV</span><br/>
            in minutes!
          </h1>
          
          <div className="hero-actions-aura">
            <button className="btn-primary-aura" onClick={onStart}>
              <Plus size={20} /> Create new CV
            </button>
            <button className="btn-outline-aura" onClick={onShowHistory}>
              <History size={20} /> My History
            </button>
          </div>
        </div>

        {/* Template Showcase - Horizontal Carousel style */}
        <div className="template-showcase-aura">
          <div className="template-scroll">
            <div className="tpl-card-aura preview-1">
              <img src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80" alt="Template 1" />
            </div>
            <div className="tpl-card-aura preview-2 active">
              <img src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400&q=80" alt="Template 2" />
              <div className="tpl-overlay-aura">
                <button className="btn-choose-aura" onClick={onStart}>Choose template</button>
              </div>
            </div>
            <div className="tpl-card-aura preview-3">
              <img src="https://images.unsplash.com/photo-1626197031507-c17099753214?w=400&q=80" alt="Template 3" />
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Banner (as requested in image style) */}
      <div className="aura-cookie-banner">
        <div className="cookie-text">
          AuraCV.com and our partners use cookies. By using this site you agree to our use of cookies as described in our 
          <a href="#"> Privacy Policy</a> and <a href="#"> Cookie Tracking Policy</a>.
        </div>
        <button className="cookie-close"><X size={16} /></button>
      </div>

      {/* Trust Badges */}
      <section className="trust-section-aura">
        <p>Trusted by over 1,000,000 job seekers worldwide</p>
        <div className="trust-logos">
          <span>Google</span>
          <span>Amazon</span>
          <span>Microsoft</span>
          <span>Meta</span>
        </div>
      </section>
    </div>
  )
}

export default LandingPage
