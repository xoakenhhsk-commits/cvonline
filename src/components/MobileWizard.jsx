import React, { useState, useRef } from 'react'
import { 
  ChevronLeft, 
  ChevronRight, 
  Camera, 
  User, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Heart, 
  Languages, 
  Layout,
  Trash2,
  Plus,
  Download,
  Eye,
  Settings
} from 'lucide-react'
import './MobileWizard.css'

const wizardTranslations = {
  vi: {
    langStep: 'Ngôn ngữ & Mẫu',
    personalStep: 'Thông tin cá nhân',
    objectiveStep: 'Mục tiêu nghề nghiệp',
    eduStep: 'Học vấn',
    expStep: 'Kinh nghiệm',
    skillStep: 'Kỹ năng',
    otherStep: 'Sở thích & Khác',
    reviewStep: 'Xem lại & Tải về',
    chooseLang: 'Chọn ngôn ngữ',
    chooseTemplate: 'Chọn mẫu thiết kế',
    personalDetails: 'Thông tin cá nhân',
    personalSubtitle: 'Thêm tên và vị trí công việc giúp nhà tuyển dụng hiểu nhanh về bạn.',
    firstName: 'Họ và tên đệm',
    lastName: 'Tên',
    jobTitle: 'Vị trí ứng tuyển',
    addPhoto: 'Thêm ảnh',
    phone: 'Số điện thoại',
    email: 'Địa chỉ Email',
    address: 'Địa chỉ',
    objectiveSubtitle: 'Giới thiệu ngắn gọn về bản thân và định hướng sự nghiệp.',
    objectivePlaceholder: 'Ví dụ: Tôi là chuyên gia Marketing với 5 năm kinh nghiệm...',
    eduSubtitle: 'Liệt kê quá trình học tập của bạn.',
    addEdu: 'Thêm học vấn',
    expSubtitle: 'Mô tả các công việc bạn đã từng đảm nhận.',
    addExp: 'Thêm kinh nghiệm',
    skillSubtitle: 'Thể hiện thế mạnh chuyên môn của bạn.',
    addSkill: 'Thêm kỹ năng',
    otherSubtitle: 'Sở thích, giải thưởng và chứng chỉ.',
    hobbies: 'Sở thích',
    awards: 'Giải thưởng',
    certs: 'Chứng chỉ',
    reviewTitle: 'Tuyệt vời!',
    reviewSubtitle: 'Hãy xem lại CV của bạn trước khi tải về.',
    downloadBtn: 'Tải CV (PDF)',
    finishBtn: 'Về màn hình chính',
    next: 'Tiếp theo',
    back: 'Quay lại'
  },
  en: {
    langStep: 'Language & Template',
    personalStep: 'Personal Details',
    objectiveStep: 'Career Objective',
    eduStep: 'Education',
    expStep: 'Experience',
    skillStep: 'Skills',
    otherStep: 'Hobbies & Others',
    reviewStep: 'Review & Download',
    chooseLang: 'Choose Language',
    chooseTemplate: 'Choose Template',
    personalDetails: 'Personal Details',
    personalSubtitle: 'Adding your name and desired job title helps recruiters quickly understand who you are.',
    firstName: 'First Name',
    lastName: 'Last Name',
    jobTitle: 'Desired Job Title',
    addPhoto: 'Add Photo',
    phone: 'Phone Number',
    email: 'Email Address',
    address: 'Address',
    objectiveSubtitle: 'Briefly introduce yourself and your career goals.',
    objectivePlaceholder: 'Example: I am a Marketing expert with 5 years of experience...',
    eduSubtitle: 'List your educational background.',
    addEdu: 'Add Education',
    expSubtitle: 'Describe your work history.',
    addExp: 'Add Experience',
    skillSubtitle: 'Showcase your professional strengths.',
    addSkill: 'Add Skill',
    otherSubtitle: 'Hobbies, awards, and certificates.',
    hobbies: 'Hobbies',
    awards: 'Awards',
    certs: 'Certificates',
    reviewTitle: 'Excellent!',
    reviewSubtitle: 'Please review your CV before downloading.',
    downloadBtn: 'Download CV (PDF)',
    finishBtn: 'Back to Home',
    next: 'Next',
    back: 'Back'
  }
};

const MobileWizard = ({ cvData, setCvData, template, setTemplate, language, setLanguage, onDownload, onFinish, renderPreview }) => {
  const [step, setStep] = useState(0)
  const [view, setView] = useState('write') // 'write' or 'design'
  
  const t = wizardTranslations[language] || wizardTranslations['en'];

  const steps = [
    { title: t.langStep, icon: <Languages size={20} /> },
    { title: t.personalStep, icon: <User size={20} /> },
    { title: t.objectiveStep, icon: <Settings size={20} /> },
    { title: t.eduStep, icon: <GraduationCap size={20} /> },
    { title: t.expStep, icon: <Briefcase size={20} /> },
    { title: t.skillStep, icon: <Settings size={20} /> },
    { title: t.otherStep, icon: <Heart size={20} /> },
    { title: t.reviewStep, icon: <Eye size={20} /> }
  ]

  const handleChange = (section, field, value) => {
    if (section === 'personal') {
      setCvData({
        ...cvData,
        personal: { ...cvData.personal, [field]: value }
      })
    } else if (section === 'summary') {
      setCvData({ ...cvData, summary: value })
    }
  }

  const handleArrayChange = (section, id, field, value) => {
    const updatedArray = cvData[section].map(item => 
      item.id === id ? { ...item, [field]: value } : item
    )
    setCvData({ ...cvData, [section]: updatedArray })
  }

  const addItem = (section, defaultItem) => {
    const newId = cvData[section].length > 0 ? Math.max(...cvData[section].map(i => i.id)) + 1 : 1
    setCvData({
      ...cvData,
      [section]: [...cvData[section], { id: newId, ...defaultItem }]
    })
  }

  const removeItem = (section, id) => {
    setCvData({
      ...cvData,
      [section]: cvData[section].filter(item => item.id !== id)
    })
  }

  const handleAvatarUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        handleChange('personal', 'avatar', reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const nextStep = () => {
    if (step < steps.length - 1) setStep(step + 1)
  }

  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1)
    } else if (onFinish) {
      onFinish()
    }
  }

  const renderStepContent = () => {
    switch (step) {
      case 0:
        return (
          <div className="wizard-step-content">
            <h3>{t.chooseLang}</h3>
            <div className="language-grid">
              {[
                { id: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
                { id: 'en', name: 'English', flag: '🇺🇸' },
                { id: 'ja', name: '日本語', flag: '🇯🇵' },
                { id: 'zh', name: '中文', flag: '🇨🇳' },
                { id: 'km', name: 'ភាសាខ្មែរ', flag: '🇰🇭' }
              ].map(lang => (
                <button 
                  key={lang.id} 
                  className={`lang-card ${language === lang.id ? 'active' : ''}`}
                  onClick={() => setLanguage(lang.id)}
                >
                  <span className="flag">{lang.flag}</span>
                  <span className="name">{lang.name}</span>
                </button>
              ))}
            </div>

            <h3 style={{ marginTop: '24px' }}>{t.chooseTemplate}</h3>
            <div className="template-grid">
              {[
                { id: 'template1', name: 'Tiêu Chuẩn' },
                { id: 'template2', name: 'Thanh Lịch' },
                { id: 'template3', name: 'Đen Trắng' },
                { id: 'template4', name: 'Hình Vòm' },
                { id: 'template5', name: 'Gradient' },
                { id: 'template6', name: 'Tối Giản' }
              ].map(tpl => (
                <button 
                  key={tpl.id} 
                  className={`template-card ${template === tpl.id ? 'active' : ''}`}
                  onClick={() => setTemplate(tpl.id)}
                >
                  <div className={`tpl-preview ${tpl.id}`}></div>
                  <span>{tpl.name}</span>
                </button>
              ))}
            </div>
          </div>
        )
      case 1:
        return (
          <div className="wizard-step-content">
            <h2 className="step-title">{t.personalDetails}</h2>
            <p className="step-subtitle">{t.personalSubtitle}</p>
            
            <div className="wizard-form">
              <div className="input-group-modern">
                <input 
                  type="text" 
                  placeholder={t.firstName} 
                  value={cvData.personal.name.split(' ').slice(0, -1).join(' ')} 
                  onChange={(e) => {
                    const names = cvData.personal.name.split(' ')
                    const lastName = names.length > 1 ? names.pop() : ''
                    handleChange('personal', 'name', `${e.target.value} ${lastName}`)
                  }}
                />
              </div>
              <div className="input-group-modern">
                <input 
                  type="text" 
                  placeholder={t.lastName} 
                  value={cvData.personal.name.split(' ').pop()} 
                  onChange={(e) => {
                    const names = cvData.personal.name.split(' ')
                    const firstName = names.slice(0, -1).join(' ')
                    handleChange('personal', 'name', `${firstName} ${e.target.value}`)
                  }}
                />
              </div>
              <div className="input-group-modern has-icon">
                <Briefcase className="input-icon" size={20} />
                <input 
                  type="text" 
                  placeholder={t.jobTitle} 
                  value={cvData.personal.title} 
                  onChange={(e) => handleChange('personal', 'title', e.target.value)}
                />
              </div>

              <div className="photo-upload-section">
                <label className="photo-upload-card">
                  <input type="file" accept="image/*" onChange={handleAvatarUpload} hidden />
                  <div className="photo-icon-container">
                    <Camera size={24} />
                  </div>
                  <span>{t.addPhoto}</span>
                </label>
                {cvData.personal.avatar && (
                  <div className="avatar-mini-preview">
                    <img src={cvData.personal.avatar} alt="Avatar" />
                  </div>
                )}
              </div>

              <div className="input-group-modern">
                <input 
                  type="text" 
                  placeholder={t.phone} 
                  value={cvData.personal.phone} 
                  onChange={(e) => handleChange('personal', 'phone', e.target.value)}
                />
              </div>
              <div className="input-group-modern">
                <input 
                  type="email" 
                  placeholder={t.email} 
                  value={cvData.personal.email} 
                  onChange={(e) => handleChange('personal', 'email', e.target.value)}
                />
              </div>
              <div className="input-group-modern">
                <input 
                  type="text" 
                  placeholder={t.address} 
                  value={cvData.personal.address} 
                  onChange={(e) => handleChange('personal', 'address', e.target.value)}
                />
              </div>
            </div>
          </div>
        )
      case 2:
        return (
          <div className="wizard-step-content">
            <h2 className="step-title">{t.objectiveStep}</h2>
            <p className="step-subtitle">{t.objectiveSubtitle}</p>
            <textarea 
              className="textarea-modern"
              placeholder={t.objectivePlaceholder}
              value={cvData.summary}
              onChange={(e) => handleChange('summary', null, e.target.value)}
            />
          </div>
        )
      case 3:
        return (
          <div className="wizard-step-content">
            <h2 className="step-title">{t.eduStep}</h2>
            <p className="step-subtitle">{t.eduSubtitle}</p>
            {cvData.education.map((edu, index) => (
              <div key={edu.id} className="dynamic-item-card">
                <div className="item-header">
                  <span>{t.eduStep} #{index + 1}</span>
                  <button onClick={() => removeItem('education', edu.id)} className="delete-btn"><Trash2 size={16}/></button>
                </div>
                <div className="input-group-modern">
                  <input type="text" placeholder="Trường / Cơ sở đào tạo" value={edu.school} onChange={(e) => handleArrayChange('education', edu.id, 'school', e.target.value)} />
                </div>
                <div className="input-group-modern">
                  <input type="text" placeholder="Chuyên ngành / Bằng cấp" value={edu.degree} onChange={(e) => handleArrayChange('education', edu.id, 'degree', e.target.value)} />
                </div>
                <div className="input-group-modern">
                  <input type="text" placeholder="Thời gian (VD: 2018 - 2022)" value={edu.date} onChange={(e) => handleArrayChange('education', edu.id, 'date', e.target.value)} />
                </div>
              </div>
            ))}
            <button className="add-item-btn" onClick={() => addItem('education', { school: '', degree: '', date: '' })}>
              <Plus size={18} /> {t.addEdu}
            </button>
          </div>
        )
      case 4:
        return (
          <div className="wizard-step-content">
            <h2 className="step-title">{t.expStep}</h2>
            <p className="step-subtitle">{t.expSubtitle}</p>
            {cvData.experience.map((exp, index) => (
              <div key={exp.id} className="dynamic-item-card">
                <div className="item-header">
                  <span>{t.expStep} #{index + 1}</span>
                  <button onClick={() => removeItem('experience', exp.id)} className="delete-btn"><Trash2 size={16}/></button>
                </div>
                <div className="input-group-modern">
                  <input type="text" placeholder="Công ty / Tổ chức" value={exp.company} onChange={(e) => handleArrayChange('experience', exp.id, 'company', e.target.value)} />
                </div>
                <div className="input-group-modern">
                  <input type="text" placeholder="Vị trí công việc" value={exp.position} onChange={(e) => handleArrayChange('experience', exp.id, 'position', e.target.value)} />
                </div>
                <div className="input-group-modern">
                  <input type="text" placeholder="Thời gian" value={exp.date} onChange={(e) => handleArrayChange('experience', exp.id, 'date', e.target.value)} />
                </div>
                <textarea className="textarea-modern" placeholder="Mô tả công việc..." value={exp.description} onChange={(e) => handleArrayChange('experience', exp.id, 'description', e.target.value)} />
              </div>
            ))}
            <button className="add-item-btn" onClick={() => addItem('experience', { company: '', position: '', date: '', description: '' })}>
              <Plus size={18} /> {t.addExp}
            </button>
          </div>
        )
      case 5:
        return (
          <div className="wizard-step-content">
            <h2 className="step-title">{t.skillStep}</h2>
            <p className="step-subtitle">{t.skillSubtitle}</p>
            {cvData.skills.map((skill) => (
              <div key={skill.id} className="dynamic-item-card skill-item">
                <div className="input-group-modern no-margin">
                  <input type="text" placeholder="Tên kỹ năng" value={skill.name} onChange={(e) => handleArrayChange('skills', skill.id, 'name', e.target.value)} />
                </div>
                <div className="skill-level-row">
                  <input type="range" min="0" max="100" value={skill.level} onChange={(e) => handleArrayChange('skills', skill.id, 'level', e.target.value)} />
                  <span className="level-text">{skill.level}%</span>
                  <button onClick={() => removeItem('skills', skill.id)} className="delete-btn-inline"><Trash2 size={16}/></button>
                </div>
              </div>
            ))}
            <button className="add-item-btn" onClick={() => addItem('skills', { name: '', level: 50 })}>
              <Plus size={18} /> {t.addSkill}
            </button>
          </div>
        )
      case 6:
        return (
          <div className="wizard-step-content">
            <h2 className="step-title">{t.otherStep}</h2>
            
            <h3 className="sub-section-title">{t.hobbies}</h3>
            <div className="input-group-modern">
              <input 
                type="text" 
                placeholder="Nấu ăn, Đá bóng, Đọc sách..." 
                value={cvData.hobbies.join(', ')} 
                onChange={(e) => setCvData({...cvData, hobbies: e.target.value.split(',').map(s => s.trim())})} 
              />
            </div>

            <h3 className="sub-section-title">{t.awards}</h3>
            {cvData.awards.map(award => (
              <div key={award.id} className="dynamic-item-card">
                <div className="form-row-wizard">
                  <input type="text" className="small-input" placeholder="Năm" value={award.year} onChange={(e) => handleArrayChange('awards', award.id, 'year', e.target.value)} />
                  <input type="text" className="large-input" placeholder="Tên giải thưởng" value={award.title} onChange={(e) => handleArrayChange('awards', award.id, 'title', e.target.value)} />
                  <button onClick={() => removeItem('awards', award.id)} className="delete-btn-inline"><Trash2 size={16}/></button>
                </div>
              </div>
            ))}
            <button className="add-item-btn small" onClick={() => addItem('awards', { year: '', title: '' })}>
              <Plus size={16} /> Thêm giải thưởng
            </button>

            <h3 className="sub-section-title">{t.certs}</h3>
            {cvData.certificates.map(cert => (
              <div key={cert.id} className="dynamic-item-card">
                <div className="form-row-wizard">
                  <input type="text" className="small-input" placeholder="Năm" value={cert.year} onChange={(e) => handleArrayChange('certificates', cert.id, 'year', e.target.value)} />
                  <input type="text" className="large-input" placeholder="Tên chứng chỉ" value={cert.title} onChange={(e) => handleArrayChange('certificates', cert.id, 'title', e.target.value)} />
                  <button onClick={() => removeItem('certificates', cert.id)} className="delete-btn-inline"><Trash2 size={16}/></button>
                </div>
              </div>
            ))}
            <button className="add-item-btn small" onClick={() => addItem('certificates', { year: '', title: '' })}>
              <Plus size={16} /> Thêm chứng chỉ
            </button>
          </div>
        )
      case 7:
        return (
          <div className="wizard-step-content review-step">
            <h2 className="step-title">{t.reviewTitle}</h2>
            <p className="step-subtitle">{t.reviewSubtitle}</p>
            
            <div className="cv-preview-mobile-wrapper">
              <div className="cv-preview-mobile-scaled">
                {renderPreview()}
              </div>
            </div>

            <div className="review-actions">
              <button className="btn-primary-wizard" onClick={onDownload}>
                <Download size={20} /> {t.downloadBtn}
              </button>
              <button className="btn-ghost-wizard" onClick={onFinish}>
                {t.finishBtn}
              </button>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="mobile-wizard-container">
      {/* Top Navigation */}
      <div className="wizard-header">
        <button className="back-circle-btn" onClick={prevStep}>
          <ChevronLeft size={20} />
        </button>
        
        <div className="wizard-toggle">
          <button 
            className={`toggle-item ${view === 'write' ? 'active' : ''}`}
            onClick={() => setView('write')}
          >
            <Briefcase size={16} /> Write
          </button>
          <button 
            className={`toggle-item ${view === 'design' ? 'active' : ''}`}
            onClick={() => setView('design')}
          >
            <Layout size={16} /> Design
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="wizard-body">
        {renderStepContent()}
      </div>

      {/* Bottom Navigation */}
      <div className="wizard-footer">
        <button className="footer-back-btn" onClick={prevStep}>
          <ChevronLeft size={18} /> {step === 0 ? (language === 'vi' ? 'Trang chủ' : 'Home') : t.back}
        </button>

        <div className="step-dots">
          {steps.map((_, i) => (
            <div key={i} className={`dot ${i === step ? 'active' : ''} ${i < step ? 'completed' : ''}`}></div>
          ))}
        </div>

        {step < steps.length - 1 ? (
          <button className="footer-next-btn" onClick={nextStep}>
            {t.next} <ChevronRight size={18} />
          </button>
        ) : (
          <button className="footer-next-btn finish" onClick={onDownload}>
            Finish <Download size={18} />
          </button>
        )}
      </div>
    </div>
  )
}

export default MobileWizard
