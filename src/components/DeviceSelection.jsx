import React from 'react'
import { Monitor, Smartphone, ChevronRight } from 'lucide-react'
import './DeviceSelection.css'

const DeviceSelection = ({ onSelect }) => {
  return (
    <div className="device-selection-overlay">
      <div className="device-selection-card">
        <h2>Chào mừng bạn!</h2>
        <p>Bạn đang sử dụng thiết bị nào để tạo CV?</p>
        
        <div className="device-options">
          <button className="device-option" onClick={() => onSelect('laptop')}>
            <div className="device-icon">
              <Monitor size={48} />
            </div>
            <div className="device-info">
              <h3>Máy tính / Laptop</h3>
              <p>Giao diện đầy đủ, chỉnh sửa trực quan</p>
            </div>
            <ChevronRight size={24} className="arrow" />
          </button>
          
          <button className="device-option" onClick={() => onSelect('phone')}>
            <div className="device-icon">
              <Smartphone size={48} />
            </div>
            <div className="device-info">
              <h3>Điện thoại di động</h3>
              <p>Giao diện gọn nhẹ, từng bước đơn giản</p>
            </div>
            <ChevronRight size={24} className="arrow" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeviceSelection
