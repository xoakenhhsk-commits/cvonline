import React, { forwardRef } from 'react'
import { User, Phone, Mail, MapPin, Briefcase, GraduationCap, Users, Lightbulb, Globe, Heart } from 'lucide-react'
import { translations } from '../translations'
import './CVPreview3.css'

const SectionIcon = ({ icon: Icon, title }) => (
  <div className="cv3-section-header">
    <div className="cv3-section-icon">
      <Icon size={16} />
    </div>
    <h3 className="cv3-section-title">{title}</h3>
  </div>
)

const CVPreview3 = forwardRef(({ cvData, language = 'vi', extraClasses = '' }, ref) => {
  const t = translations[language] || translations['vi'];
  return (
    <div className={`cv-document-3 ${extraClasses}`} ref={ref}>
      {/* Left Column */}
      <div className="cv3-left">
        <div className="cv3-header-left">
          <h1 className="cv3-name">{cvData.personal.name}</h1>
          <h2 className="cv3-title">{cvData.personal.title}</h2>
        </div>
        
        <div className="cv3-avatar-container">
          <div className="cv3-avatar-wrapper">
            <img src={cvData.personal.avatar} alt="Avatar" className="cv3-avatar" />
          </div>
        </div>

        <div className="cv3-section">
          <SectionIcon icon={User} title={t.contact.toUpperCase()} />
          <div className="cv3-contact-list">
            <div className="cv3-contact-item">
              <Phone size={12} className="cv3-contact-icon" />
              <span>{cvData.personal.phone}</span>
            </div>
            <div className="cv3-contact-item">
              <Mail size={12} className="cv3-contact-icon" />
              <span>{cvData.personal.email}</span>
            </div>
            <div className="cv3-contact-item">
              <MapPin size={12} className="cv3-contact-icon" />
              <span>{cvData.personal.address}</span>
            </div>
          </div>
        </div>

        <div className="cv3-section-divider"></div>

        <div className="cv3-section cv3-rounded-section">
          <SectionIcon icon={GraduationCap} title={t.education.toUpperCase()} />
          <div className="cv3-timeline-left">
            {cvData.education.map(edu => (
              <div key={edu.id} className="cv3-timeline-item-left">
                <h4 className="cv3-item-title-left">{edu.school.split('\n')[0]}</h4>
                <p className="cv3-item-subtitle-left">{edu.degree}</p>
                <span className="cv3-item-date-left">{edu.date}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="cv3-section">
          <SectionIcon icon={Users} title={t.certificates.toUpperCase()} />
          <div className="cv3-timeline-left">
            {cvData.certificates && cvData.certificates.length > 0 ? cvData.certificates.map(cert => (
              <div key={cert.id} className="cv3-timeline-item-left">
                <h4 className="cv3-item-title-left">{cert.title}</h4>
                <span className="cv3-item-date-left">{cert.year}</span>
              </div>
            )) : (
              <div className="cv3-timeline-item-left">
                <p className="cv3-item-subtitle-left">Available upon request.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="cv3-right">
        <div className="cv3-section">
          <SectionIcon icon={User} title={t.aboutMe.toUpperCase()} />
          <p className="cv3-summary">{cvData.summary}</p>
        </div>

        <div className="cv3-section">
          <SectionIcon icon={Briefcase} title={t.experience.toUpperCase()} />
          <div className="cv3-timeline-right">
            {cvData.experience.map(exp => (
              <div key={exp.id} className="cv3-timeline-item-right">
                <div className="cv3-item-header-right">
                  <h4 className="cv3-item-title-right">{exp.position}</h4>
                  <span className="cv3-item-date-right">{exp.date}</span>
                </div>
                <div className="cv3-item-subtitle-right">{exp.company}</div>
                <p className="cv3-item-desc-right">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="cv3-section">
          <SectionIcon icon={Lightbulb} title={t.skills.toUpperCase()} />
          <div className="cv3-skills-grid">
            {cvData.skills.map(skill => (
              <div key={skill.id} className="cv3-skill-item">
                <span className="cv3-skill-name">{skill.name}</span>
                <div className="cv3-skill-bar">
                  <div className="cv3-skill-fill" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="cv3-row">
          <div className="cv3-col-half">
            <SectionIcon icon={Globe} title={t.language.toUpperCase()} />
            <ul className="cv3-list">
              <li>ENGLISH</li>
              <li>SPANISH</li>
              <li>FRENCH</li>
              <li>GERMAN</li>
            </ul>
          </div>
          <div className="cv3-col-half">
            <SectionIcon icon={Heart} title={t.hobbies.toUpperCase()} />
            <ul className="cv3-list">
              {cvData.hobbies.map((hobby, idx) => (
                <li key={idx}>{hobby.toUpperCase()}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
})

CVPreview3.displayName = 'CVPreview3'

export default CVPreview3
