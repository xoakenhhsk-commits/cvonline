import React, { forwardRef } from 'react'
import { Phone, Mail, MapPin, Calendar, Award, FileBadge, Heart } from 'lucide-react'
import { translations } from '../translations'
import './CVPreview6.css'

const CVPreview6 = forwardRef(({ cvData, language = 'vi' }, ref) => {
  const t = translations[language] || translations['vi'];
  return (
    <div className="cv-document-6" ref={ref}>
      {/* Left Sidebar */}
      <div className="cv6-sidebar">
        <div className="cv6-avatar-area">
          <img src={cvData.personal.avatar} alt="Avatar" className="cv6-avatar" />
        </div>

        <div className="cv6-sidebar-name">
          <h1>{cvData.personal.name}</h1>
          <h2>{cvData.personal.title}</h2>
        </div>

        <div className="cv6-divider"></div>

        {/* Contact */}
        <div className="cv6-sidebar-section">
          <h3 className="cv6-sidebar-heading">{t.contact}</h3>
          <div className="cv6-contact-list">
            <div className="cv6-contact-item">
              <Phone size={13} />
              <span>{cvData.personal.phone}</span>
            </div>
            <div className="cv6-contact-item">
              <Mail size={13} />
              <span>{cvData.personal.email}</span>
            </div>
            <div className="cv6-contact-item">
              <MapPin size={13} />
              <span>{cvData.personal.address}</span>
            </div>
            {cvData.personal.dob && (
              <div className="cv6-contact-item">
                <Calendar size={13} />
                <span>{cvData.personal.dob}</span>
              </div>
            )}
          </div>
        </div>

        <div className="cv6-divider"></div>

        {/* Skills */}
        <div className="cv6-sidebar-section">
          <h3 className="cv6-sidebar-heading">{t.skills}</h3>
          <div className="cv6-skills">
            {cvData.skills.map(skill => (
              <div key={skill.id} className="cv6-skill">
                <div className="cv6-skill-header">
                  <span>{skill.name}</span>
                </div>
                <div className="cv6-skill-dots">
                  {[1, 2, 3, 4, 5].map(dot => (
                    <div
                      key={dot}
                      className={`cv6-dot ${dot <= Math.round(skill.level / 20) ? 'filled' : ''}`}
                    ></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="cv6-divider"></div>

        {/* Hobbies */}
        <div className="cv6-sidebar-section">
          <h3 className="cv6-sidebar-heading">{t.hobbies}</h3>
          <div className="cv6-hobby-list">
            {cvData.hobbies.map((hobby, idx) => (
              <div key={idx} className="cv6-hobby-tag">
                <Heart size={10} />
                {hobby}
              </div>
            ))}
          </div>
        </div>

        <div className="cv6-divider"></div>

        {/* Awards */}
        <div className="cv6-sidebar-section">
          <h3 className="cv6-sidebar-heading">{t.awards}</h3>
          {cvData.awards.map(award => (
            <div key={award.id} className="cv6-award-row">
              <Award size={12} className="cv6-gold-icon" />
              <div>
                <span className="cv6-award-year">{award.year}</span>
                <span className="cv6-award-title">{award.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Main Content */}
      <div className="cv6-main">
        {/* Objective */}
        <div className="cv6-main-section">
          <h3 className="cv6-main-heading">{t.objective}</h3>
          <div className="cv6-heading-line"></div>
          <p className="cv6-summary-text">{cvData.summary}</p>
        </div>

        {/* Experience */}
        <div className="cv6-main-section">
          <h3 className="cv6-main-heading">{t.experience}</h3>
          <div className="cv6-heading-line"></div>
          {cvData.experience.map(exp => (
            <div key={exp.id} className="cv6-exp-block">
              <div className="cv6-exp-header">
                <div>
                  <h4 className="cv6-exp-position">{exp.position}</h4>
                  <div className="cv6-exp-company">{exp.company}</div>
                </div>
                <div className="cv6-exp-date">{exp.date}</div>
              </div>
              <p className="cv6-exp-desc" style={{ whiteSpace: 'pre-wrap' }}>{exp.description}</p>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="cv6-main-section">
          <h3 className="cv6-main-heading">{t.education}</h3>
          <div className="cv6-heading-line"></div>
          {cvData.education.map(edu => (
            <div key={edu.id} className="cv6-exp-block">
              <div className="cv6-exp-header">
                <div>
                  <h4 className="cv6-exp-position">{edu.degree}</h4>
                  <div className="cv6-exp-company" style={{ whiteSpace: 'pre-wrap' }}>{edu.school}</div>
                </div>
                <div className="cv6-exp-date">{edu.date}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Certificates */}
        <div className="cv6-main-section">
          <h3 className="cv6-main-heading">{t.certificates}</h3>
          <div className="cv6-heading-line"></div>
          <div className="cv6-cert-grid">
            {cvData.certificates.map(cert => (
              <div key={cert.id} className="cv6-cert-card">
                <FileBadge size={16} className="cv6-cert-icon" />
                <div>
                  <div className="cv6-cert-year">{cert.year}</div>
                  <div className="cv6-cert-name">{cert.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
})

CVPreview6.displayName = 'CVPreview6'

export default CVPreview6
