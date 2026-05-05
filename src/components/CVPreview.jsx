import React, { forwardRef } from 'react'
import { Phone, Mail, MapPin, Calendar, Lightbulb, Users, Award, FileBadge } from 'lucide-react'
import { translations } from '../translations'

const SectionIcon = ({ icon: Icon }) => (
  <div className="section-icon-wrapper">
    <Icon size={20} className="section-icon" />
  </div>
)

const CVPreview = forwardRef(({ cvData, language = 'vi', extraClasses = '' }, ref) => {
  const t = translations[language] || translations['vi'];
  return (
    <div className={`cv-document ${extraClasses}`} ref={ref}>
      {/* Left Column */}
      <div className="cv-left-col">
        <div className="cv-left-top">
          <div className="avatar-wrapper">
            <img src={cvData.personal.avatar} alt="Avatar" className="cv-avatar-img" />
          </div>
          <h1 className="cv-name">{cvData.personal.name}</h1>
          <h2 className="cv-title">{cvData.personal.title}</h2>
        </div>
        
        <div className="cv-left-bottom">
          <div className="contact-list">
            <div className="contact-item">
              <div className="contact-icon"><Phone size={14} /></div>
              <span>{cvData.personal.phone}</span>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><Mail size={14} /></div>
              <span>{cvData.personal.email}</span>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><MapPin size={14} /></div>
              <span>{cvData.personal.address}</span>
            </div>
            {cvData.personal.dob && (
              <div className="contact-item">
                <div className="contact-icon"><Calendar size={14} /></div>
                <span>{cvData.personal.dob}</span>
              </div>
            )}
          </div>

          <div className="sidebar-section">
            <h3 className="sidebar-title">{t.skills}</h3>
            <div className="skills-list">
              {cvData.skills.map(skill => (
                <div key={skill.id} className="skill-item">
                  <div className="skill-name">{skill.name}</div>
                  <div className="skill-bar-bg">
                    <div className="skill-bar-fill" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="sidebar-section">
            <h3 className="sidebar-title">{t.hobbies}</h3>
            <ul className="hobbies-list">
              {cvData.hobbies.map((hobby, index) => (
                <li key={index}>{hobby}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="cv-right-col">
        <div className="main-section">
          <h3 className="main-title">{t.objective}</h3>
          <p className="summary-text">{cvData.summary}</p>
        </div>

        <div className="main-section">
          <h3 className="main-title">
            <SectionIcon icon={Lightbulb} /> {t.education}
          </h3>
          {cvData.education.map(edu => (
            <div key={edu.id} className="timeline-item">
              <div className="timeline-header">
                <h4 className="item-title">{edu.degree}</h4>
                <span className="item-date">{edu.date}</span>
              </div>
              <p className="item-desc" style={{ whiteSpace: 'pre-wrap' }}>{edu.school}</p>
            </div>
          ))}
        </div>

        <div className="main-section">
          <h3 className="main-title">
            <SectionIcon icon={Users} /> {t.experience}
          </h3>
          {cvData.experience.map(exp => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-header">
                <h4 className="item-title">{exp.position}</h4>
                <span className="item-date">{exp.date}</span>
              </div>
              <div className="item-subtitle">{exp.company}</div>
              <p className="item-desc" style={{ whiteSpace: 'pre-wrap' }}>{exp.description}</p>
            </div>
          ))}
        </div>

        <div className="main-section">
          <h3 className="main-title">
            <SectionIcon icon={Award} /> {t.awards}
          </h3>
          {cvData.awards.map(award => (
            <div key={award.id} className="list-item">
              <div className="list-date">{award.year}</div>
              <div className="list-content">{award.title}</div>
            </div>
          ))}
        </div>

        <div className="main-section">
          <h3 className="main-title">
            <SectionIcon icon={FileBadge} /> {t.certificates}
          </h3>
          {cvData.certificates.map(cert => (
            <div key={cert.id} className="list-item">
              <div className="list-date">{cert.year}</div>
              <div className="list-content">{cert.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
})

CVPreview.displayName = 'CVPreview'

export default CVPreview
