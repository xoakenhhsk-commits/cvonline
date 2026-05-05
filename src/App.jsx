import { useState, useRef, useEffect } from 'react'
import { Download, FileText, LogIn, LogOut, Save, Eye } from 'lucide-react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import CVEditor from './components/CVEditor'
import CVPreview from './components/CVPreview'
import CVPreview2 from './components/CVPreview2'
import CVPreview3 from './components/CVPreview3'
import CVPreview4 from './components/CVPreview4'
import CVPreview5 from './components/CVPreview5'
import CVPreview6 from './components/CVPreview6'
import { auth, loginWithGoogle, logout, saveCVData, getCVData } from './firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { cvDataByLanguage } from './translations'
import DeviceSelection from './components/DeviceSelection'
import MobileWizard from './components/MobileWizard'
import LandingPage from './components/LandingPage'
import CVHistory from './components/CVHistory'
import MobileMenu from './components/MobileMenu'

function App() {
  const cvRef = useRef(null)
  const [cvData, setCvData] = useState(cvDataByLanguage['vi'])
  const [template, setTemplate] = useState('template1')
  const [user, setUser] = useState(null)
  const [isSaving, setIsSaving] = useState(false)
  const [showLanding, setShowLanding] = useState(true)
  const [deviceType, setDeviceType] = useState(null) // null, 'laptop', 'phone'
  const [showHistory, setShowHistory] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mobileTab, setMobileTab] = useState('edit')
  const [language, setLanguage] = useState('vi')

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser)
      if (currentUser) {
        const savedData = await getCVData(currentUser.uid)
        if (savedData) {
          setCvData(savedData)
        }
      } else {
        setCvData(cvDataByLanguage[language] || cvDataByLanguage['vi'])
      }
    })
    return () => unsubscribe()
  }, [])

  // Auto-switch CV content when language changes
  useEffect(() => {
    if (!user) {
      setCvData(cvDataByLanguage[language] || cvDataByLanguage['vi'])
    }
  }, [language, user])

  // Save CV automatically when cvData changes (optional, or on specific actions)
  useEffect(() => {
    if (user && !showLanding && !showHistory) {
      const timer = setTimeout(() => {
        handleSaveCV();
      }, 5000); // Auto-save every 5 seconds if changed
      return () => clearTimeout(timer);
    }
  }, [cvData, user, showLanding, showHistory]);

  const handleLogin = async () => {
    try {
      await loginWithGoogle()
    } catch {
      alert("Đăng nhập thất bại. Vui lòng kiểm tra cấu hình Firebase.")
    }
  }

  const handleSaveCV = async () => {
    if (!user) return;
    try {
      const saved = await saveCVData(user.uid, cvData);
      if (saved && saved.id) {
        setCvData(prev => ({ ...prev, id: saved.id }));
      }
    } catch (err) {
      console.error("Auto-save failed", err);
    }
  }

  const handleSaveToCloud = async () => {
    if (!user) {
      alert('Vui lòng đăng nhập để lưu CV')
      return
    }
    setIsSaving(true)
    try {
      await handleSaveCV();
      alert('Đã lưu CV thành công!')
    } catch {
      alert('Có lỗi khi lưu CV. Vui lòng thử lại.')
    } finally {
      setIsSaving(false)
    }
  }

  const handleGoHome = () => {
    setShowLanding(true);
    setDeviceType(null);
    setShowHistory(false);
  }

  const handleDownload = async () => {
    if (!cvRef.current) return
    
    try {
      const canvas = await html2canvas(cvRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: template === 'template2' ? '#f7ede2' : '#ffffff'
      })
      
      const imgData = canvas.toDataURL('image/jpeg', 1.0)
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      })
      
      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width
      
      pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight)
      pdf.save(`${cvData.personal.name.replace(/\s+/g, '_')}_CV.pdf`)
      handleSaveCV(); // Save to history when downloaded
    } catch (err) {
      console.error('Error generating PDF', err)
      alert('Could not generate PDF. Please try again.')
    }
  }

  const renderPreview = () => {
    const props = { cvData, language, ref: cvRef }
    switch (template) {
      case 'template1': return <CVPreview {...props} />
      case 'template2': return <CVPreview2 {...props} />
      case 'template3': return <CVPreview3 {...props} />
      case 'template4': return <CVPreview4 {...props} />
      case 'template5': return <CVPreview5 {...props} />
      case 'template6': return <CVPreview6 {...props} />
      default: return <CVPreview {...props} />
    }
  }

  // --- RENDERING LOGIC ---

  return (
    <div className="app-main-wrapper">
      <MobileMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        user={user} 
        onLogin={handleLogin}
        onLogout={logout}
        onShowHistory={() => {
          setShowHistory(true);
          setShowLanding(false);
          setDeviceType(null);
        }}
        onGoHome={handleGoHome}
      />

      {showLanding ? (
        <LandingPage 
          onStart={() => setShowLanding(false)} 
          onLogin={handleLogin} 
          user={user} 
          onShowHistory={() => {
            if (!user) {
              handleLogin()
            } else {
              setShowHistory(true)
              setShowLanding(false)
            }
          }}
          onOpenMenu={() => setIsMenuOpen(true)}
        />
      ) : showHistory && user ? (
        <CVHistory 
          userId={user.uid} 
          onBack={handleGoHome} 
          onNew={() => {
            setShowHistory(false)
            setCvData(cvDataByLanguage[language] || cvDataByLanguage['vi'])
            setDeviceType(null)
          }}
          onEdit={(cv) => {
            setCvData(cv)
            setShowHistory(false)
            setDeviceType(window.innerWidth < 768 ? 'phone' : 'laptop')
          }}
        />
      ) : !deviceType ? (
        <DeviceSelection onSelect={(type) => setDeviceType(type)} />
      ) : deviceType === 'phone' ? (
        <>
          <MobileWizard 
            cvData={cvData} 
            setCvData={setCvData} 
            template={template} 
            setTemplate={setTemplate}
            language={language}
            setLanguage={setLanguage}
            renderPreview={renderPreview}
            onDownload={handleDownload}
            onFinish={handleGoHome}
          />
          <div style={{ position: 'absolute', left: '-9999px', top: 0 }}>
            <div ref={cvRef} style={{ width: '210mm' }}>
              {renderPreview()}
            </div>
          </div>
        </>
      ) : (
        <div className="app-container">
          <header className="header">
            <div className="header-left">
              <button 
                onClick={handleGoHome}
                style={{
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  marginRight: '15px',
                  padding: '5px',
                  color: 'var(--text-main)'
                }}
                title="Về Trang Chủ"
              >
                <FileText className="text-primary-color" />
              </button>
              <h1> CV Maker</h1>
              
              <div className="template-selector" style={{ display: 'flex', gap: '10px', marginLeft: '20px', flexWrap: 'wrap' }}>
                <select 
                  value={template} 
                  onChange={(e) => setTemplate(e.target.value)}
                  className="form-control"
                  style={{ width: 'auto', padding: '0.4rem 0.8rem' }}
                >
                  <option value="template1">🎯 Tiêu Chuẩn</option>
                  <option value="template2">🌸 Thanh Lịch</option>
                  <option value="template3">⬛ Đen Trắng</option>
                  <option value="template4">🏛️ Hình Vòm</option>
                  <option value="template5">🌊 Gradient Hiện Đại</option>
                  <option value="template6">💎 Tối Giản Sang Trọng</option>
                </select>
                <select 
                  value={language} 
                  onChange={(e) => setLanguage(e.target.value)}
                  className="form-control"
                  style={{ width: 'auto', padding: '0.4rem 0.8rem' }}
                >
                  <option value="vi">🇻🇳 Tiếng Việt</option>
                  <option value="en">🇺🇸 English</option>
                  <option value="ja">🇯🇵 日本語</option>
                  <option value="zh">🇨🇳 中文</option>
                  <option value="km">🇰🇭 ភាសាខ្មែរ</option>
                </select>
              </div>
            </div>

            <div className="header-actions" style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              {user ? (
                <>
                  <span className="user-email" style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>
                    {user.email}
                  </span>
                  <button className="btn-upload" onClick={handleSaveToCloud} disabled={isSaving}>
                    {isSaving ? 'Đang lưu...' : <><Save size={16} style={{display:'inline', marginRight: '5px'}}/> Lưu</>}
                  </button>
                  <button className="btn-upload" onClick={logout}>
                    <LogOut size={16} style={{display:'inline', marginRight: '5px'}}/> Đăng xuất
                  </button>
                </>
              ) : (
                <button className="btn-upload" onClick={handleLogin}>
                  <LogIn size={16} style={{display:'inline', marginRight: '5px'}}/> Đăng nhập
                </button>
              )}

              <button className="btn-download" onClick={handleDownload}>
                <Download size={18} />
                Xuất PDF
              </button>
            </div>
          </header>
          
          <main className="main-content">
            <div className={`editor-container ${mobileTab === 'edit' ? 'active' : 'inactive'}`}>
              <CVEditor cvData={cvData} setCvData={setCvData} />
            </div>
            <div className={`preview-container ${mobileTab === 'preview' ? 'active' : 'inactive'}`}>
              <div className="preview-pane">
                {renderPreview()}
              </div>
            </div>
          </main>

          <div className="mobile-bottom-tabs">
            <button 
              className={`tab-btn ${mobileTab === 'edit' ? 'active' : ''}`}
              onClick={() => setMobileTab('edit')}
            >
              <FileText size={20} />
              <span>Chỉnh sửa</span>
            </button>
            <button 
              className={`tab-btn ${mobileTab === 'preview' ? 'active' : ''}`}
              onClick={() => setMobileTab('preview')}
            >
              <Eye size={20} />
              <span>Xem trước</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
