import React, { useEffect, useState } from 'react'
import { FileText, Trash2, Edit3, Plus, ChevronLeft, Calendar } from 'lucide-react'
import { listUserCVs, deleteUserCV } from '../firebase'
import './CVHistory.css'

const CVHistory = ({ userId, onEdit, onNew, onBack }) => {
  const [cvs, setCvs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadCVs()
  }, [userId])

  const loadCVs = async () => {
    setLoading(true)
    const data = await listUserCVs(userId)
    setCvs(data)
    setLoading(false)
  }

  const handleDelete = async (e, cvId) => {
    e.stopPropagation()
    if (window.confirm('Bạn có chắc chắn muốn xóa CV này?')) {
      await deleteUserCV(userId, cvId)
      loadCVs()
    }
  }

  return (
    <div className="history-container">
      <div className="history-header">
        <button className="back-btn" onClick={onBack}>
          <ChevronLeft size={20} /> Quay lại
        </button>
        <h2>Lịch sử CV của bạn</h2>
      </div>

      <div className="history-content">
        <button className="new-cv-card" onClick={onNew}>
          <Plus size={32} />
          <span>Tạo CV mới</span>
        </button>

        {loading ? (
          <div className="loading-spinner">Đang tải...</div>
        ) : cvs.length === 0 ? (
          <div className="empty-history">
            <p>Bạn chưa có CV nào được lưu.</p>
          </div>
        ) : (
          <div className="cv-grid">
            {cvs.map(cv => (
              <div key={cv.id} className="cv-card-history" onClick={() => onEdit(cv)}>
                <div className="cv-card-icon">
                  <FileText size={40} />
                </div>
                <div className="cv-card-info">
                  <h3>{cv.personal?.name || 'Chưa đặt tên'}</h3>
                  <p>{cv.personal?.title || 'CV mới'}</p>
                  <div className="cv-card-meta">
                    <Calendar size={14} />
                    <span>{cv.updatedAt?.toDate().toLocaleDateString() || 'Vừa xong'}</span>
                  </div>
                </div>
                <div className="cv-card-actions">
                  <button className="delete-icon" onClick={(e) => handleDelete(e, cv.id)}>
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default CVHistory
