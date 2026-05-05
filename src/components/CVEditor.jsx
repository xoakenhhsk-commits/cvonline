import React from 'react'
import { Plus, Trash2, Image as ImageIcon } from 'lucide-react'

export default function CVEditor({ cvData, setCvData }) {
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

  const handleHobbiesChange = (e) => {
    const hobbiesArray = e.target.value.split(',').map(s => s.trim())
    setCvData({ ...cvData, hobbies: hobbiesArray })
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

  return (
    <div className="editor-pane">
      <div className="editor-section">
        <h3 className="section-title">Thông tin cá nhân</h3>
        
        <div className="form-group" style={{ marginBottom: '1rem' }}>
          <label>Ảnh đại diện</label>
          <div className="avatar-upload">
            <img src={cvData.personal.avatar} alt="Avatar Preview" className="avatar-preview" />
            <label className="btn-upload">
              <input type="file" accept="image/*" onChange={handleAvatarUpload} style={{ display: 'none' }} />
              <ImageIcon size={16} style={{ verticalAlign: 'middle', marginRight: '5px' }} />
              Thay ảnh
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>Họ và Tên</label>
          <input type="text" className="form-control" value={cvData.personal.name} onChange={(e) => handleChange('personal', 'name', e.target.value)} />
        </div>
        <div className="form-group">
          <label>Vị trí ứng tuyển</label>
          <input type="text" className="form-control" value={cvData.personal.title} onChange={(e) => handleChange('personal', 'title', e.target.value)} />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Ngày sinh</label>
            <input type="text" className="form-control" value={cvData.personal.dob} onChange={(e) => handleChange('personal', 'dob', e.target.value)} />
          </div>
          <div className="form-group">
            <label>Số điện thoại</label>
            <input type="text" className="form-control" value={cvData.personal.phone} onChange={(e) => handleChange('personal', 'phone', e.target.value)} />
          </div>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" value={cvData.personal.email} onChange={(e) => handleChange('personal', 'email', e.target.value)} />
        </div>
        <div className="form-group">
          <label>Địa chỉ</label>
          <input type="text" className="form-control" value={cvData.personal.address} onChange={(e) => handleChange('personal', 'address', e.target.value)} />
        </div>
      </div>

      <div className="editor-section">
        <h3 className="section-title">Mục tiêu nghề nghiệp</h3>
        <div className="form-group">
          <textarea className="form-control" value={cvData.summary} onChange={(e) => handleChange('summary', null, e.target.value)} />
        </div>
      </div>

      <div className="editor-section">
        <h3 className="section-title">Học vấn</h3>
        {cvData.education.map(edu => (
          <div key={edu.id} className="item-group">
            <button className="remove-btn" onClick={() => removeItem('education', edu.id)}><Trash2 size={14} /></button>
            <div className="form-group">
              <label>Chuyên ngành / Bằng cấp</label>
              <input type="text" className="form-control" value={edu.degree} onChange={(e) => handleArrayChange('education', edu.id, 'degree', e.target.value)} />
            </div>
            <div className="form-group">
              <label>Trường / Mô tả</label>
              <textarea className="form-control" value={edu.school} onChange={(e) => handleArrayChange('education', edu.id, 'school', e.target.value)} />
            </div>
            <div className="form-group">
              <label>Thời gian</label>
              <input type="text" className="form-control" value={edu.date} onChange={(e) => handleArrayChange('education', edu.id, 'date', e.target.value)} />
            </div>
          </div>
        ))}
        <button className="add-btn" onClick={() => addItem('education', { school: '', degree: '', date: '' })}>
          <Plus size={14} style={{ verticalAlign: 'middle' }} /> Thêm Học vấn
        </button>
      </div>

      <div className="editor-section">
        <h3 className="section-title">Kinh nghiệm làm việc</h3>
        {cvData.experience.map(exp => (
          <div key={exp.id} className="item-group">
            <button className="remove-btn" onClick={() => removeItem('experience', exp.id)}><Trash2 size={14} /></button>
            <div className="form-group">
              <label>Công ty / Tổ chức</label>
              <input type="text" className="form-control" value={exp.company} onChange={(e) => handleArrayChange('experience', exp.id, 'company', e.target.value)} />
            </div>
            <div className="form-group">
              <label>Vị trí</label>
              <input type="text" className="form-control" value={exp.position} onChange={(e) => handleArrayChange('experience', exp.id, 'position', e.target.value)} />
            </div>
            <div className="form-group">
              <label>Thời gian</label>
              <input type="text" className="form-control" value={exp.date} onChange={(e) => handleArrayChange('experience', exp.id, 'date', e.target.value)} />
            </div>
            <div className="form-group">
              <label>Mô tả công việc</label>
              <textarea className="form-control" value={exp.description} onChange={(e) => handleArrayChange('experience', exp.id, 'description', e.target.value)} />
            </div>
          </div>
        ))}
        <button className="add-btn" onClick={() => addItem('experience', { company: '', position: '', date: '', description: '' })}>
          <Plus size={14} style={{ verticalAlign: 'middle' }} /> Thêm Kinh nghiệm
        </button>
      </div>

      <div className="editor-section">
        <h3 className="section-title">Kỹ năng</h3>
        {cvData.skills.map(skill => (
          <div key={skill.id} className="item-group" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <div style={{ flex: 1 }}>
              <input type="text" className="form-control" value={skill.name} placeholder="Tên kỹ năng" onChange={(e) => handleArrayChange('skills', skill.id, 'name', e.target.value)} style={{ marginBottom: '0.5rem' }} />
              <input type="range" min="0" max="100" value={skill.level} onChange={(e) => handleArrayChange('skills', skill.id, 'level', e.target.value)} style={{ width: '100%' }} />
            </div>
            <button className="remove-btn" style={{ position: 'relative', top: 0, right: 0 }} onClick={() => removeItem('skills', skill.id)}><Trash2 size={14} /></button>
          </div>
        ))}
        <button className="add-btn" onClick={() => addItem('skills', { name: 'Kỹ năng mới', level: 50 })}>
          <Plus size={14} style={{ verticalAlign: 'middle' }} /> Thêm Kỹ năng
        </button>
      </div>

      <div className="editor-section">
        <h3 className="section-title">Sở thích</h3>
        <div className="form-group">
          <label>Nhập các sở thích, cách nhau bởi dấu phẩy</label>
          <input type="text" className="form-control" value={cvData.hobbies.join(', ')} onChange={handleHobbiesChange} />
        </div>
      </div>

      <div className="editor-section">
        <h3 className="section-title">Giải thưởng</h3>
        {cvData.awards.map(award => (
          <div key={award.id} className="item-group">
            <button className="remove-btn" onClick={() => removeItem('awards', award.id)}><Trash2 size={14} /></button>
            <div className="form-row">
              <div className="form-group" style={{ flex: '0 0 80px' }}>
                <label>Năm</label>
                <input type="text" className="form-control" value={award.year} onChange={(e) => handleArrayChange('awards', award.id, 'year', e.target.value)} />
              </div>
              <div className="form-group">
                <label>Tên giải thưởng</label>
                <input type="text" className="form-control" value={award.title} onChange={(e) => handleArrayChange('awards', award.id, 'title', e.target.value)} />
              </div>
            </div>
          </div>
        ))}
        <button className="add-btn" onClick={() => addItem('awards', { year: '2023', title: '' })}>
          <Plus size={14} style={{ verticalAlign: 'middle' }} /> Thêm Giải thưởng
        </button>
      </div>

      <div className="editor-section">
        <h3 className="section-title">Chứng chỉ</h3>
        {cvData.certificates.map(cert => (
          <div key={cert.id} className="item-group">
            <button className="remove-btn" onClick={() => removeItem('certificates', cert.id)}><Trash2 size={14} /></button>
            <div className="form-row">
              <div className="form-group" style={{ flex: '0 0 80px' }}>
                <label>Năm</label>
                <input type="text" className="form-control" value={cert.year} onChange={(e) => handleArrayChange('certificates', cert.id, 'year', e.target.value)} />
              </div>
              <div className="form-group">
                <label>Tên chứng chỉ</label>
                <input type="text" className="form-control" value={cert.title} onChange={(e) => handleArrayChange('certificates', cert.id, 'title', e.target.value)} />
              </div>
            </div>
          </div>
        ))}
        <button className="add-btn" onClick={() => addItem('certificates', { year: '2023', title: '' })}>
          <Plus size={14} style={{ verticalAlign: 'middle' }} /> Thêm Chứng chỉ
        </button>
      </div>

    </div>
  )
}
