import React, { forwardRef } from 'react'
import { Phone, Mail, MapPin, Globe } from 'lucide-react'
import { translations } from '../translations'
import './CVPreview2.css'

const CVPreview2 = forwardRef(({ cvData, language = 'vi' }, ref) => {
  const t = translations[language] || translations['vi'];
  return (
    <div className="cv-document-2" ref={ref}>
      <div className="cv2-top-bg"></div>
      <div className="cv2-content">
        <div className="cv2-header">
          <div className="cv2-avatar-container">
            <img src={cvData.personal.avatar} alt="Avatar" className="cv2-avatar" />
          </div>
          <div className="cv2-header-text">
            <h1 className="cv2-name">{cvData.personal.name}</h1>
            <h2 className="cv2-title">{cvData.personal.title}</h2>
            <p className="cv2-summary">{cvData.summary}</p>
          </div>
        </div>

        <div className="cv2-body">
          {/* Left Column */}
          <div className="cv2-left">
            <div className="cv2-section">
              <h3 className="cv2-section-title">• {t.contact.toUpperCase()}</h3>
              <div className="cv2-contact-list">
                <div className="cv2-contact-item">
                  <div className="cv2-icon"><Phone size={14} /></div>
                  <span>{cvData.personal.phone}</span>
                </div>
                <div className="cv2-contact-item">
                  <div className="cv2-icon"><Mail size={14} /></div>
                  <span>{cvData.personal.email}</span>
                </div>
                <div className="cv2-contact-item">
                  <div className="cv2-icon"><Globe size={14} /></div>
                  <span>{cvData.personal.address}</span>
                </div>
              </div>
            </div>

            <div className="cv2-section">
              <h3 className="cv2-section-title">• {t.skills.toUpperCase()}</h3>
              <div className="cv2-skills-list">
                {cvData.skills.map(skill => (
                  <div key={skill.id} className="cv2-skill-item">
                    <span className="cv2-skill-name">{skill.name}</span>
                    <div className="cv2-stars">
                      {[1, 2, 3, 4, 5].map(star => (
                        <span key={star} className={star <= Math.round(skill.level / 20) ? 'star filled' : 'star'}>★</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="cv2-section">
              <h3 className="cv2-section-title">• {t.hobbies.toUpperCase()}</h3>
              <div className="cv2-hobbies-list">
                {cvData.hobbies.map((hobby, index) => (
                  <div key={index} className="cv2-hobby-item">{hobby}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="cv2-right">
            <div className="cv2-section">
              <h3 className="cv2-section-title">• {t.education.toUpperCase()}</h3>
              <div className="cv2-timeline">
                {cvData.education.map(edu => (
                  <div key={edu.id} className="cv2-timeline-item">
                    <div className="cv2-timeline-date">{edu.date}</div>
                    <div className="cv2-timeline-content">
                      <h4 className="cv2-timeline-title">{edu.degree}</h4>
                      <p className="cv2-timeline-desc">{edu.school}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="cv2-section">
              <h3 className="cv2-section-title">• {t.experience.toUpperCase()}</h3>
              <div className="cv2-timeline">
                {cvData.experience.map(exp => (
                  <div key={exp.id} className="cv2-timeline-item">
                    <div className="cv2-timeline-date">{exp.date}</div>
                    <div className="cv2-timeline-content">
                      <h4 className="cv2-timeline-title">{exp.position}</h4>
                      <h5 className="cv2-timeline-subtitle">{exp.company}</h5>
                      <p className="cv2-timeline-desc">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {cvData.awards && cvData.awards.length > 0 && (
              <div className="cv2-section">
                <h3 className="cv2-section-title">• {t.awards.toUpperCase()}</h3>
                <div className="cv2-timeline">
                  {cvData.awards.map(award => (
                    <div key={award.id} className="cv2-timeline-item">
                      <div className="cv2-timeline-date">{award.year}</div>
                      <div className="cv2-timeline-content">
                        <p className="cv2-timeline-desc">{award.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
})

CVPreview2.displayName = 'CVPreview2'

export default CVPreview2
