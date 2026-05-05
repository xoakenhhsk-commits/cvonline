import React, { forwardRef } from 'react'
import { User, Phone, Mail, MapPin, Briefcase, GraduationCap, Users, PieChart, Globe, Heart } from 'lucide-react'
import { translations } from '../translations'
import './CVPreview4.css'

const SectionIconTitle = ({ icon: Icon, title, dark = false }) => (
  <div className={`cv4-section-header ${dark ? 'cv4-dark-header' : ''}`}>
    <div className="cv4-section-icon">
      <Icon size={16} />
    </div>
    <h3 className="cv4-section-title">{title}</h3>
  </div>
)

const CVPreview4 = forwardRef(({ cvData, language = 'vi' }, ref) => {
  const t = translations[language] || translations['vi'];
  return (
    <div className="cv-document-4" ref={ref}>
      <div className="cv4-wrapper">
        {/* Left Column */}
        <div className="cv4-left-col">
          
          <div className="cv4-top-shape">
            <h1 className="cv4-name">{cvData.personal.name}</h1>
            <h2 className="cv4-title">{cvData.personal.title}</h2>
            <div className="cv4-avatar-wrapper">
              <img src={cvData.personal.avatar} alt="Avatar" className="cv4-avatar" />
            </div>
          </div>

          <div className="cv4-contact-area">
            <SectionIconTitle icon={User} title={t.contact.toUpperCase()} dark={false} />
            <div className="cv4-contact-list">
              <div className="cv4-contact-item">
                <Phone size={12} className="cv4-contact-icon" />
                <span>{cvData.personal.phone}</span>
              </div>
              <div className="cv4-contact-item">
                <Mail size={12} className="cv4-contact-icon" />
                <span>{cvData.personal.email}</span>
              </div>
              <div className="cv4-contact-item">
                <MapPin size={12} className="cv4-contact-icon" />
                <span>{cvData.personal.address}</span>
              </div>
            </div>
          </div>

          <div className="cv4-arch-shape">
            <div className="cv4-section">
              <SectionIconTitle icon={GraduationCap} title={t.education.toUpperCase()} dark={true} />
              <div className="cv4-timeline-left">
                {cvData.education.map(edu => (
                  <div key={edu.id} className="cv4-timeline-item-left">
                    <h4 className="cv4-item-title-left">{edu.degree}</h4>
                    <p className="cv4-item-subtitle-left">{edu.school.split('\n')[0]}</p>
                    <span className="cv4-item-date-left">{edu.date}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="cv4-section" style={{ marginTop: '30px' }}>
              <SectionIconTitle icon={Users} title={t.certificates.toUpperCase()} dark={true} />
              <div className="cv4-timeline-left">
                {cvData.certificates && cvData.certificates.length > 0 ? cvData.certificates.slice(0, 2).map(cert => (
                  <div key={cert.id} className="cv4-timeline-item-left">
                    <h4 className="cv4-item-title-left">{cert.title}</h4>
                    <span className="cv4-item-date-left">{cert.year}</span>
                  </div>
                )) : (
                  <div className="cv4-timeline-item-left">
                    <h4 className="cv4-item-title-left">—</h4>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>

        {/* Right Column */}
        <div className="cv4-right-col">
          
          <div className="cv4-section">
            <SectionIconTitle icon={User} title={t.aboutMe.toUpperCase()} />
            <p className="cv4-summary">{cvData.summary}</p>
          </div>

          <div className="cv4-section">
            <SectionIconTitle icon={Briefcase} title={t.experience.toUpperCase()} />
            <div className="cv4-timeline-right">
              {cvData.experience.map(exp => (
                <div key={exp.id} className="cv4-timeline-item-right">
                  <div className="cv4-item-header-right">
                    <h4 className="cv4-item-title-right">{exp.position}</h4>
                    <span className="cv4-item-date-right">{exp.date}</span>
                  </div>
                  <div className="cv4-item-subtitle-right">{exp.company}</div>
                  <p className="cv4-item-desc-right">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="cv4-section">
            <SectionIconTitle icon={PieChart} title={t.skills.toUpperCase()} />
            <div className="cv4-skills-grid">
              {cvData.skills.map(skill => (
                <div key={skill.id} className="cv4-skill-item">
                  <span className="cv4-skill-name">{skill.name}</span>
                  <div className="cv4-skill-bar">
                    <div className="cv4-skill-fill" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="cv4-row">
            <div className="cv4-col-half">
              <SectionIconTitle icon={Globe} title={t.language.toUpperCase()} />
              <ul className="cv4-list">
                <li>ENGLISH</li>
                <li>SPANISH</li>
                <li>FRENCH</li>
                <li>GERMAN</li>
              </ul>
            </div>
            <div className="cv4-col-half">
              <SectionIconTitle icon={Heart} title={t.hobbies.toUpperCase()} />
              <ul className="cv4-list">
                {cvData.hobbies.map((hobby, idx) => (
                  <li key={idx}>{hobby.toUpperCase()}</li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
})

CVPreview4.displayName = 'CVPreview4'

export default CVPreview4
