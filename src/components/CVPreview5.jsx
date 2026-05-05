import React, { forwardRef } from 'react'
import { Phone, Mail, MapPin, Calendar, Briefcase, GraduationCap, Award, FileBadge, Star, Heart } from 'lucide-react'
import { translations } from '../translations'
import './CVPreview5.css'

const CVPreview5 = forwardRef(({ cvData, language = 'vi' }, ref) => {
  const t = translations[language] || translations['vi'];
  return (
    <div className="cv-document-5" ref={ref}>
      {/* Header - Full Width Gradient */}
      <div className="cv5-header">
        <div className="cv5-header-overlay"></div>
        <div className="cv5-header-content">
          <div className="cv5-avatar-area">
            <img src={cvData.personal.avatar} alt="Avatar" className="cv5-avatar" />
          </div>
          <div className="cv5-header-text">
            <h1 className="cv5-name">{cvData.personal.name}</h1>
            <h2 className="cv5-title">{cvData.personal.title}</h2>
            <div className="cv5-contact-row">
              <div className="cv5-contact-chip">
                <Phone size={12} />
                <span>{cvData.personal.phone}</span>
              </div>
              <div className="cv5-contact-chip">
                <Mail size={12} />
                <span>{cvData.personal.email}</span>
              </div>
              <div className="cv5-contact-chip">
                <MapPin size={12} />
                <span>{cvData.personal.address}</span>
              </div>
              {cvData.personal.dob && (
                <div className="cv5-contact-chip">
                  <Calendar size={12} />
                  <span>{cvData.personal.dob}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Body - Two Columns */}
      <div className="cv5-body">
        <div className="cv5-main">
          {/* Objective */}
          <div className="cv5-section">
            <div className="cv5-section-title">
              <Star size={18} className="cv5-section-icon" />
              <h3>{t.objective}</h3>
            </div>
            <p className="cv5-summary">{cvData.summary}</p>
          </div>

          {/* Experience */}
          <div className="cv5-section">
            <div className="cv5-section-title">
              <Briefcase size={18} className="cv5-section-icon" />
              <h3>{t.experience}</h3>
            </div>
            {cvData.experience.map(exp => (
              <div key={exp.id} className="cv5-timeline-item">
                <div className="cv5-timeline-dot"></div>
                <div className="cv5-timeline-content">
                  <div className="cv5-item-header">
                    <h4>{exp.position}</h4>
                    <span className="cv5-date-badge">{exp.date}</span>
                  </div>
                  <div className="cv5-company">{exp.company}</div>
                  <p className="cv5-desc" style={{ whiteSpace: 'pre-wrap' }}>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="cv5-section">
            <div className="cv5-section-title">
              <GraduationCap size={18} className="cv5-section-icon" />
              <h3>{t.education}</h3>
            </div>
            {cvData.education.map(edu => (
              <div key={edu.id} className="cv5-timeline-item">
                <div className="cv5-timeline-dot"></div>
                <div className="cv5-timeline-content">
                  <div className="cv5-item-header">
                    <h4>{edu.degree}</h4>
                    <span className="cv5-date-badge">{edu.date}</span>
                  </div>
                  <p className="cv5-desc" style={{ whiteSpace: 'pre-wrap' }}>{edu.school}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="cv5-sidebar">
          {/* Skills */}
          <div className="cv5-section">
            <div className="cv5-section-title cv5-sidebar-title">
              <h3>{t.skills}</h3>
            </div>
            <div className="cv5-skills-list">
              {cvData.skills.map(skill => (
                <div key={skill.id} className="cv5-skill-item">
                  <div className="cv5-skill-info">
                    <span>{skill.name}</span>
                    <span className="cv5-skill-percent">{skill.level}%</span>
                  </div>
                  <div className="cv5-skill-bar">
                    <div className="cv5-skill-fill" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div className="cv5-section">
            <div className="cv5-section-title cv5-sidebar-title">
              <h3>{t.awards}</h3>
            </div>
            {cvData.awards.map(award => (
              <div key={award.id} className="cv5-award-item">
                <Award size={14} className="cv5-award-icon" />
                <div>
                  <div className="cv5-award-year">{award.year}</div>
                  <div className="cv5-award-text">{award.title}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Certificates */}
          <div className="cv5-section">
            <div className="cv5-section-title cv5-sidebar-title">
              <h3>{t.certificates}</h3>
            </div>
            {cvData.certificates.map(cert => (
              <div key={cert.id} className="cv5-cert-item">
                <FileBadge size={14} className="cv5-cert-icon" />
                <div>
                  <div className="cv5-cert-year">{cert.year}</div>
                  <div className="cv5-cert-text">{cert.title}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Hobbies */}
          <div className="cv5-section">
            <div className="cv5-section-title cv5-sidebar-title">
              <h3>{t.hobbies}</h3>
            </div>
            <div className="cv5-hobbies-grid">
              {cvData.hobbies.map((hobby, idx) => (
                <div key={idx} className="cv5-hobby-chip">
                  <Heart size={12} />
                  <span>{hobby}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

CVPreview5.displayName = 'CVPreview5'

export default CVPreview5
