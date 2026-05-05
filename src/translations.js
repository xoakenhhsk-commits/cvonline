// Section label translations
export const translations = {
  vi: {
    skills: 'Kỹ năng',
    hobbies: 'Sở thích',
    objective: 'Mục tiêu nghề nghiệp',
    education: 'Học vấn',
    experience: 'Kinh nghiệm làm việc',
    awards: 'Giải thưởng',
    certificates: 'Chứng chỉ',
    contact: 'Thông tin liên hệ',
    aboutMe: 'Về tôi',
    references: 'Người tham chiếu',
    language: 'Ngôn ngữ',
  },
  en: {
    skills: 'Skills',
    hobbies: 'Hobbies',
    objective: 'Career Objective',
    education: 'Education',
    experience: 'Work Experience',
    awards: 'Awards',
    certificates: 'Certifications',
    contact: 'Contact Info',
    aboutMe: 'About Me',
    references: 'References',
    language: 'Language',
  },
  ja: {
    skills: 'スキル',
    hobbies: '趣味',
    objective: '職務目標',
    education: '学歴',
    experience: '職歴',
    awards: '受賞歴',
    certificates: '資格',
    contact: '連絡先',
    aboutMe: '自己紹介',
    references: '参照',
    language: '言語',
  },
  zh: {
    skills: '技能',
    hobbies: '兴趣爱好',
    objective: '职业目标',
    education: '教育背景',
    experience: '工作经历',
    awards: '荣誉奖项',
    certificates: '资格证书',
    contact: '联系方式',
    aboutMe: '关于我',
    references: '推荐人',
    language: '语言',
  },
  km: {
    skills: 'ជំនាញ',
    hobbies: 'ចំណង់ចំណូលចិត្ត',
    objective: 'គោលបំណងការងារ',
    education: 'ការអប់រំ',
    experience: 'បទពិសោធន៍ការងារ',
    awards: 'រង្វាន់',
    certificates: 'វិញ្ញាបនបត្រ',
    contact: 'ព័ត៌មានទំនាក់ទំនង',
    aboutMe: 'អំពីខ្ញុំ',
    references: 'ឯកសារយោង',
    language: 'ភាសា',
  }
};

// Full CV content data per language
export const cvDataByLanguage = {
  vi: {
    personal: {
      name: 'NGUYỄN HƯƠNG LÊ',
      title: 'Điều dưỡng viên',
      phone: '(024) 6680 5588',
      email: 'hotro@topcv.vn',
      address: 'Ba Đình, Hà Nội',
      dob: '11/10/1997',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80'
    },
    summary: 'Là một điều dưỡng viên với 03 năm kinh nghiệm trong chăm sóc trẻ em, tôi luôn muốn đóng góp một phần sức lực nhỏ bé vào công tác chăm sóc và hỗ trợ bệnh nhi, giúp các em nhanh chóng hồi phục cả về mặt thể chất lẫn tinh thần.',
    experience: [
      {
        id: 1,
        company: 'Trung tâm Y tế Cộng đồng SVT TopCV',
        position: 'ĐIỀU DƯỠNG NHI KHOA',
        date: '04/2020 - Nay',
        description: '- Theo dõi tình trạng sức khỏe của mỗi bệnh nhi, lập kế hoạch chăm sóc trong ngắn hạn và dài hạn.\n- Thực hiện các nhiệm vụ: Tiêm thuốc, truyền dịch, phát thuốc.\n- Đào tạo và hướng dẫn công việc cho thực tập sinh và điều dưỡng viên mới.'
      },
      {
        id: 2,
        company: 'Trung tâm Y tế Cộng đồng SVT TopCV',
        position: 'THỰC TẬP SINH ĐIỀU DƯỠNG',
        date: '08/2019 - 03/2020',
        description: '- Đánh giá nhu cầu chăm sóc của từng bệnh nhi.\n- Theo dõi, ghi chép đầy đủ tình trạng sức khỏe.\n- Tham gia các hoạt động sinh hoạt tập thể cùng các em nhỏ.'
      }
    ],
    education: [
      {
        id: 1,
        school: 'Đại học TopCV\nTốt nghiệp Cử nhân loại Giỏi',
        degree: 'CHUYÊN NGÀNH DINH DƯỠNG',
        date: '10/2016 - 01/2020'
      }
    ],
    skills: [
      { id: 1, name: 'Kỹ năng giao tiếp', level: 80 },
      { id: 2, name: 'Giải quyết vấn đề', level: 75 },
      { id: 3, name: 'Ngoại ngữ', level: 90 },
      { id: 4, name: 'Làm việc dưới áp lực', level: 85 }
    ],
    hobbies: ['Đọc sách', 'Du lịch', 'Thể thao', 'Nấu ăn'],
    awards: [
      { id: 1, year: '2022', title: 'Top 10 Nhân viên xuất sắc nhất' },
      { id: 2, year: '2021', title: '5 Nhân viên tiêu biểu của năm' }
    ],
    certificates: [
      { id: 1, year: '2021', title: 'Chứng chỉ hành nghề điều dưỡng' },
      { id: 2, year: '2022', title: 'Chứng chỉ chăm sóc cấp cứu' },
      { id: 3, year: '2023', title: 'Chứng chỉ Sơ cứu CPR trẻ em' }
    ]
  },
  en: {
    personal: {
      name: 'SARAH JOHNSON',
      title: 'Pediatric Nurse',
      phone: '+1 (555) 123-4567',
      email: 'sarah.johnson@email.com',
      address: 'New York, NY, USA',
      dob: '10/11/1997',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80'
    },
    summary: 'A dedicated pediatric nurse with 3 years of experience in child care. I am passionate about contributing to the well-being and recovery of pediatric patients, helping them heal both physically and mentally with compassion and expertise.',
    experience: [
      {
        id: 1,
        company: 'City Community Health Center',
        position: 'PEDIATRIC NURSE',
        date: '04/2020 - Present',
        description: '- Monitored the health status of each pediatric patient, developing short-term and long-term care plans.\n- Administered medications, IV fluids, and provided emergency care as needed.\n- Trained and mentored new interns and nursing staff.'
      },
      {
        id: 2,
        company: 'City Community Health Center',
        position: 'NURSING INTERN',
        date: '08/2019 - 03/2020',
        description: '- Assessed patient care needs based on clinical results.\n- Documented and reported patient health conditions.\n- Participated in community activities for young patients.'
      }
    ],
    education: [
      {
        id: 1,
        school: 'TopCV University\nGraduated with Honors',
        degree: 'BACHELOR OF NUTRITION SCIENCE',
        date: '10/2016 - 01/2020'
      }
    ],
    skills: [
      { id: 1, name: 'Communication', level: 80 },
      { id: 2, name: 'Problem Solving', level: 75 },
      { id: 3, name: 'Foreign Languages', level: 90 },
      { id: 4, name: 'Working Under Pressure', level: 85 }
    ],
    hobbies: ['Reading', 'Traveling', 'Sports', 'Cooking'],
    awards: [
      { id: 1, year: '2022', title: 'Top 10 Outstanding Employees' },
      { id: 2, year: '2021', title: '5 Best Employees of the Year' }
    ],
    certificates: [
      { id: 1, year: '2021', title: 'Nursing Practice Certificate' },
      { id: 2, year: '2022', title: 'Emergency Care Certificate' },
      { id: 3, year: '2023', title: 'CPR for Infants & Children' }
    ]
  },
  ja: {
    personal: {
      name: '田中 美咲',
      title: '小児科看護師',
      phone: '+81 03-1234-5678',
      email: 'tanaka.misaki@email.co.jp',
      address: '東京都新宿区',
      dob: '1997/10/11',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80'
    },
    summary: '小児ケアにおいて3年の経験を持つ看護師です。小児患者のケアとサポートに貢献し、身体的・精神的な回復を支援することに情熱を持っています。専門知識と実践経験を活かし、チーム医療に貢献いたします。',
    experience: [
      {
        id: 1,
        company: 'SVT地域医療センター',
        position: '小児科看護師',
        date: '2020/04 - 現在',
        description: '- 各小児患者の健康状態を監視し、短期・長期のケアプランを策定。\n- 投薬、点滴、緊急処置の実施。\n- 新人看護師およびインターンの教育・指導。'
      },
      {
        id: 2,
        company: 'SVT地域医療センター',
        position: '看護インターン',
        date: '2019/08 - 2020/03',
        description: '- 臨床結果に基づく患者ケアニーズの評価。\n- 患者の健康状態の記録と報告。\n- 小児患者との集団活動への参加。'
      }
    ],
    education: [
      {
        id: 1,
        school: 'TopCV大学\n優等で卒業',
        degree: '栄養学学士',
        date: '2016/10 - 2020/01'
      }
    ],
    skills: [
      { id: 1, name: 'コミュニケーション', level: 80 },
      { id: 2, name: '問題解決能力', level: 75 },
      { id: 3, name: '外国語', level: 90 },
      { id: 4, name: 'プレッシャー下の業務', level: 85 }
    ],
    hobbies: ['読書', '旅行', 'スポーツ', '料理'],
    awards: [
      { id: 1, year: '2022', title: '優秀社員トップ10' },
      { id: 2, year: '2021', title: '年間ベスト社員5名' }
    ],
    certificates: [
      { id: 1, year: '2021', title: '看護師免許' },
      { id: 2, year: '2022', title: '救急看護認定資格' },
      { id: 3, year: '2023', title: '小児CPR認定資格' }
    ]
  },
  zh: {
    personal: {
      name: '李雪梅',
      title: '儿科护士',
      phone: '+86 138-1234-5678',
      email: 'li.xuemei@email.cn',
      address: '北京市朝阳区',
      dob: '1997/10/11',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80'
    },
    summary: '拥有3年儿童护理经验的儿科护士。致力于为儿童患者提供优质的医疗护理服务，帮助他们在身体和心理上尽快恢复健康。凭借专业知识和实践经验，为团队医疗贡献力量。',
    experience: [
      {
        id: 1,
        company: 'SVT社区卫生服务中心',
        position: '儿科护士',
        date: '2020/04 - 至今',
        description: '- 监测每位患儿的健康状况，制定短期和长期护理计划。\n- 执行注射、输液、发药等护理任务。\n- 培训和指导实习生及新入职护士。'
      },
      {
        id: 2,
        company: 'SVT社区卫生服务中心',
        position: '护理实习生',
        date: '2019/08 - 2020/03',
        description: '- 根据临床结果评估患儿护理需求。\n- 详细记录并报告患者健康状况。\n- 参与儿童集体活动和社区服务。'
      }
    ],
    education: [
      {
        id: 1,
        school: 'TopCV大学\n以优异成绩毕业',
        degree: '营养学学士',
        date: '2016/10 - 2020/01'
      }
    ],
    skills: [
      { id: 1, name: '沟通能力', level: 80 },
      { id: 2, name: '解决问题', level: 75 },
      { id: 3, name: '外语能力', level: 90 },
      { id: 4, name: '抗压能力', level: 85 }
    ],
    hobbies: ['阅读', '旅行', '运动', '烹饪'],
    awards: [
      { id: 1, year: '2022', title: '十佳优秀员工' },
      { id: 2, year: '2021', title: '年度最佳员工前5名' }
    ],
    certificates: [
      { id: 1, year: '2021', title: '护士执业资格证' },
      { id: 2, year: '2022', title: '急救护理证书' },
      { id: 3, year: '2023', title: '儿童心肺复苏CPR认证' }
    ]
  },
  km: {
    personal: {
      name: 'សុខ ចន្ទា',
      title: 'គិលានុបដ្ឋាកកុមារ',
      phone: '+855 12 345 678',
      email: 'sok.chantha@email.kh',
      address: 'រាជធានីភ្នំពេញ',
      dob: '១១/១០/១៩៩៧',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80'
    },
    summary: 'ជាគិលានុបដ្ឋាកមានបទពិសោធន៍ ០៣ ឆ្នាំ ក្នុងការថែទាំកុមារ។ ខ្ញុំមានបំណងចង់រួមចំណែកក្នុងការថែទាំ និងជួយគាំទ្រអ្នកជំងឺកុមារ ដើម្បីជួយពួកគេស្តារឡើងវិញទាំងផ្នែករាងកាយ និងផ្នែកស្មារតី។',
    experience: [
      {
        id: 1,
        company: 'មណ្ឌលសុខភាពសហគមន៍ SVT',
        position: 'គិលានុបដ្ឋាកកុមារ',
        date: '០៤/២០២០ - បច្ចុប្បន្ន',
        description: '- តាមដានស្ថានភាពសុខភាពអ្នកជំងឺកុមារ និងរៀបចំផែនការថែទាំ។\n- អនុវត្តការចាក់ថ្នាំ ចាក់សេរ៉ូម និងការថែទាំបន្ទាន់។\n- បណ្ដុះបណ្ដាលនិស្សិតកម្មសិក្សា និងគិលានុបដ្ឋាកថ្មី។'
      },
      {
        id: 2,
        company: 'មណ្ឌលសុខភាពសហគមន៍ SVT',
        position: 'និស្សិតកម្មសិក្សាគិលានុបដ្ឋាក',
        date: '០៨/២០១៩ - ០៣/២០២០',
        description: '- វាយតម្លៃតម្រូវការថែទាំអ្នកជំងឺកុមារ។\n- កត់ត្រា និងរាយការណ៍ស្ថានភាពសុខភាព។\n- ចូលរួមសកម្មភាពជាមួយកុមារ។'
      }
    ],
    education: [
      {
        id: 1,
        school: 'សាកលវិទ្យាល័យ TopCV\nបញ្ចប់ការសិក្សាដោយជោគជ័យ',
        degree: 'បរិញ្ញាបត្រអាហារូបត្ថម្ភ',
        date: '១០/២០១៦ - ០១/២០២០'
      }
    ],
    skills: [
      { id: 1, name: 'ជំនាញទំនាក់ទំនង', level: 80 },
      { id: 2, name: 'ដោះស្រាយបញ្ហា', level: 75 },
      { id: 3, name: 'ភាសាបរទេស', level: 90 },
      { id: 4, name: 'ធ្វើការក្រោមសម្ពាធ', level: 85 }
    ],
    hobbies: ['អានសៀវភៅ', 'ធ្វើដំណើរ', 'កីឡា', 'ចម្អិនម្ហូប'],
    awards: [
      { id: 1, year: '២០២២', title: 'បុគ្គលិកឆ្នើមទាំង១០' },
      { id: 2, year: '២០២១', title: 'បុគ្គលិកល្អបំផុតទាំង៥' }
    ],
    certificates: [
      { id: 1, year: '២០២១', title: 'វិញ្ញាបនបត្រប្រកបវិជ្ជាជីវៈ' },
      { id: 2, year: '២០២២', title: 'វិញ្ញាបនបត្រថែទាំបន្ទាន់' },
      { id: 3, year: '២០២៣', title: 'វិញ្ញាបនបត្រ CPR កុមារ' }
    ]
  }
};
