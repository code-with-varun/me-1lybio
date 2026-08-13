/* 
  VARUN AKSHAY MASTER PORTFOLIO ENGINE (app.js)
  Comprehensive 17 Projects Dataset, 37 Categorized Certificates, 70+ Skills, Recruiter Hub & Modals
*/

// ==========================================
// 1. MASTER SKILLS DATASET (70+ Verified Skills)
// ==========================================
const SKILLS_DATA = [
  // MIS & BFSI Operations (Core Business)
  { name: 'MIS Reporting', category: 'mis', keyword: true },
  { name: 'BFSI Collections Reporting', category: 'mis', keyword: true },
  { name: 'Vendor Management', category: 'mis', keyword: true },
  { name: 'Vendor Payout Validation', category: 'mis', keyword: true },
  { name: 'Recovery Agency Operations', category: 'mis', keyword: true },
  { name: 'Call Center Billing QC', category: 'mis', keyword: true },
  { name: 'Credit Card Billing Process', category: 'mis', keyword: true },
  { name: 'Billing Validation', category: 'mis', keyword: true },
  { name: 'Operations Analytics', category: 'mis', keyword: true },
  { name: 'Productivity Tracking', category: 'mis', keyword: true },
  { name: 'KPI Monitoring', category: 'mis', keyword: true },
  { name: 'Root Cause Analysis (RCA)', category: 'mis', keyword: true },
  { name: 'SLA Monitoring & Compliance', category: 'mis', keyword: true },
  { name: 'Workforce Reporting', category: 'mis', keyword: true },
  { name: 'Stakeholder Reporting', category: 'mis', keyword: true },
  { name: 'Process Documentation', category: 'mis', keyword: true },
  { name: 'SPOC Leadership Readiness', category: 'mis', keyword: true },
  { name: 'IDFC Cost Data Requirements', category: 'mis', keyword: true },
  { name: 'Junior Training & KT Support', category: 'mis', keyword: true },

  // Advanced Excel (20+ Functions)
  { name: 'Advanced Excel', category: 'excel', keyword: true },
  { name: 'VLOOKUP / XLOOKUP', category: 'excel', keyword: true },
  { name: 'INDEX MATCH', category: 'excel', keyword: true },
  { name: 'Nested IF / IFS / IFERROR', category: 'excel', keyword: true },
  { name: 'COUNTIFS / SUMIFS / AVERAGEIFS', category: 'excel', keyword: true },
  { name: 'Pivot Tables & Pivot Charts', category: 'excel', keyword: true },
  { name: 'Conditional Formatting Rules', category: 'excel', keyword: true },
  { name: 'Dashboard Development', category: 'excel', keyword: true },
  { name: 'Data Validation & Dropdowns', category: 'excel', keyword: true },
  { name: 'Text Formulas (LEFT, RIGHT, MID, TRIM)', category: 'excel', keyword: true },
  { name: 'Date Formulas (DATEDIF, EDATE, EOMONTH)', category: 'excel', keyword: true },
  { name: 'Dynamic Array Formulas (UNIQUE, FILTER, SORT)', category: 'excel', keyword: true },
  { name: 'Data Cleaning & Deduplication', category: 'excel', keyword: true },
  { name: 'Variance Analysis Reports', category: 'excel', keyword: true },
  { name: 'Automated Invoice Reconciliation', category: 'excel', keyword: true },
  { name: 'Timesheet & Attendance Modeling', category: 'excel', keyword: true },
  { name: 'Financial & HR MIS Models', category: 'excel', keyword: true },

  // Databases & SQL
  { name: 'SQL Querying', category: 'db', keyword: true },
  { name: 'MS SQL Server', category: 'db', keyword: true },
  { name: 'MySQL Database', category: 'db', keyword: true },
  { name: 'MongoDB (NoSQL)', category: 'db', keyword: true },
  { name: 'MS Access Database', category: 'db', keyword: true },
  { name: 'Complex Queries & JOINs', category: 'db', keyword: true },
  { name: 'Aggregation Queries (GROUP BY, HAVING)', category: 'db', keyword: true },
  { name: 'Database Normalization', category: 'db', keyword: true },
  { name: 'Data Export & Batch Ingestion', category: 'db', keyword: true },

  // Automation & AI
  { name: 'Billing Automation', category: 'automation', keyword: true },
  { name: 'Process Automation', category: 'automation', keyword: true },
  { name: 'Reporting Automation', category: 'automation', keyword: true },
  { name: 'Generative AI Concepts', category: 'automation', keyword: true },
  { name: 'Prompt Engineering', category: 'automation', keyword: true },
  { name: 'ChatGPT / Claude / Gemini / Copilot', category: 'automation', keyword: true },
  { name: 'RAG & AI Agent Architecture', category: 'automation', keyword: true },
  { name: 'AI-Assisted Operations Workflows', category: 'automation', keyword: true },
  { name: 'Motion Comics Learning & AI Art', category: 'automation', keyword: true },

  // Full Stack Web Development
  { name: 'HTML5 & Semantic Markup', category: 'fullstack', keyword: true },
  { name: 'CSS3 / Modern Flexbox & Grid', category: 'fullstack', keyword: true },
  { name: 'JavaScript (ES6+ Modern Syntax)', category: 'fullstack', keyword: true },
  { name: 'React.js Frontend Framework', category: 'fullstack', keyword: true },
  { name: 'Node.js Backend Runtime', category: 'fullstack', keyword: true },
  { name: 'Express.js REST APIs', category: 'fullstack', keyword: true },
  { name: 'PHP Backend Development', category: 'fullstack', keyword: true },
  { name: 'Laravel Framework', category: 'fullstack', keyword: true },
  { name: 'CodeIgniter Framework', category: 'fullstack', keyword: true },
  { name: 'WordPress Custom Themes & CMS', category: 'fullstack', keyword: true },
  { name: 'HTML5 Canvas & 2D Game Physics', category: 'fullstack', keyword: true },
  { name: 'Git & GitHub Version Control', category: 'fullstack', keyword: true },

  // Retail & Operations Experience
  { name: 'Store Operations Management (Jockey)', category: 'retail', keyword: true },
  { name: 'Retail Sales Growth (+15% Metric)', category: 'retail', keyword: true },
  { name: 'Inventory Management (6+ Vendors)', category: 'retail', keyword: true },
  { name: 'Staff Training & Onboarding (8+ Staff)', category: 'retail', keyword: true },
  { name: 'Healthcare Claims Processing (500+ daily)', category: 'retail', keyword: true },
  { name: 'Customer Service & Telemarketing (200+ daily)', category: 'retail', keyword: true }
];

// ==========================================
// 2. RECRUITER TARGET KEYWORDS (35+ Tags)
// ==========================================
const RECRUITER_KEYWORDS = [
  "MIS Analyst", "Reporting Analyst", "BFSI Collections", "Collections MIS", 
  "Operations Analytics", "Vendor Management", "Vendor Payout", "Recovery Agency Operations",
  "Call Center Billing", "Credit Card Billing", "Billing QC", "Data Validation", 
  "Advanced Excel", "XLOOKUP", "Pivot Tables", "Dashboard Development", 
  "MIS Reporting", "Reporting Automation", "Process Improvement", "Stakeholder Management", 
  "SQL", "Automation", "Generative AI", "Prompt Engineering", "Business Reporting", 
  "Performance Reporting", "Productivity Dashboard", "Operations Reporting", "Workforce Analytics", 
  "Root Cause Analysis", "Process Documentation", "Cross Training", "SPOC", "Leadership Readiness", 
  "Team Management", "Full Stack Developer", "React.js", "Node.js", "Laravel"
];

// ==========================================
// 3. COMPLETE 17 PROJECTS DATASET
// ==========================================
const PROJECTS_DATA = [
  // ----------------------------------------------------
  // MIS & AUTOMATION PROJECTS (8 Projects)
  // ----------------------------------------------------
  {
    id: 'mis-billing',
    name: 'Recovery Agency Billing Automation',
    category: 'mis',
    badge: 'MIS Automation',
    badgeClass: 'mis-badge',
    image: 'assets/projects/portfolio-excel.jpg',
    shortDesc: 'Automated payout calculation and billing QC system for recovery agency vendor invoices at Datamatics.',
    description: 'Engineered an end-to-end automated invoice validation and vendor payout calculation pipeline for Datamatics BFSI recovery agency partners. Replaced manual multi-workbook reconciliations with dynamic formula logic, exception flags, and automated payout tiers.',
    highlights: [
      'Automated reconciliation of multi-vendor recovery agency claims across multiple zones.',
      'Reduced manual verification cycle time by over 60% with audit-grade accuracy.',
      'Integrated error-checking logic for Call Center & Credit Card billing QC compliance.',
      'Constructed standardized payout summary decks for CFO back office financial approval.'
    ],
    tech: ['Advanced Excel', 'XLOOKUP / VLOOKUP', 'Pivot Automation', 'Data Cleaning', 'Formula Logic', 'Variance QC']
  },
  {
    id: 'mis-callcenter-qc',
    name: 'Call Center Billing Automation QC',
    category: 'mis',
    badge: 'Billing Automation',
    badgeClass: 'mis-badge',
    image: 'assets/projects/portfolio-excel.jpg',
    shortDesc: 'Quality control automation verifying billable hours, rates, attendance logs, and vendor SLAs.',
    description: 'Developed an automated billing quality control model to audit third-party call center vendor invoices against attendance logs, shift rosters, and contractual rate cards. Features real-time variance detection and penalty computation.',
    highlights: [
      'Automated cross-referencing between agent attendance logs and vendor invoice hours.',
      'Eliminated billing overcharges through dynamic rate threshold enforcement.',
      'Produced automated weekly QC summary dashboards for senior operational leadership.',
      'Maintained 100% billing accuracy across multi-shift vendor contracts.'
    ],
    tech: ['Excel Automation', 'QC Validation', 'SQL Queries', 'Conditional Formatting', 'Timesheet Modeling']
  },
  {
    id: 'mis-creditcard',
    name: 'Credit Card Billing Automation',
    category: 'mis',
    badge: 'BFSI Automation',
    badgeClass: 'mis-badge',
    image: 'assets/projects/portfolio-excel.jpg',
    shortDesc: 'Streamlined billing automation for credit card recovery processing, dispute tracking, and exceptions.',
    description: 'Designed a high-throughput data processing template for credit card recovery settlements, chargeback validations, and exception management. Accelerated financial close times through automated categorization formulas.',
    highlights: [
      'Batch processed card recovery settlements, penalty waivers, and fee breakdowns.',
      'Reduced repetitive manual data entry by 75% using dynamic formula lookups.',
      'Implemented automated reconciliation between bank transaction feeds and agency reports.',
      'Generated standardized audit trails for financial compliance reviews.'
    ],
    tech: ['Advanced Excel', 'Data Cleaning', 'Financial MIS', 'Formula Logic', 'Batch Reconciliation']
  },
  {
    id: 'mis-payout-validation',
    name: 'Payout MIS & Vendor Validation',
    category: 'mis',
    badge: 'Financial MIS',
    badgeClass: 'mis-badge',
    image: 'assets/projects/portfolio-excel.jpg',
    shortDesc: 'Comprehensive payout MIS tracking system for vendor payouts, commission tiers, and reconciliation.',
    description: 'Built a centralized vendor payout tracking system monitoring monthly disbursements, commission tier structures, incentive models, and historical settlement trends across all recovery partners.',
    highlights: [
      'Tracked monthly agency payouts across pan-India geographic recovery zones.',
      'Automated commission tier calculation based on recovery delinquency brackets.',
      'Built executive summary dashboards showing month-over-month fee variance.',
      'Ensured seamless coordination with the CFO back-office accounting team.'
    ],
    tech: ['Financial MIS', 'Data Validation', 'Pivot Tables', 'Dashboard Reporting', 'Trend Analytics']
  },
  {
    id: 'mis-collection',
    name: 'BFSI Collection Reporting Dashboard',
    category: 'mis',
    badge: 'MIS Analytics',
    badgeClass: 'mis-badge',
    image: 'assets/projects/portfolio-idfc.jpg',
    shortDesc: 'Centralized collection dashboard tracking IDFC cost requirements, agency recovery, and KPI trends.',
    description: 'Developed an interactive executive dashboard aggregating daily, weekly, and monthly collection metrics for banking partners (including IDFC Bank consumer durables). Features portfolio delinquency analysis and agent productivity run-rates.',
    highlights: [
      'Centralized collection cost data requirements into interactive management dashboards.',
      'Real-time tracking of agency payout trends and daily recovery metrics.',
      'Automated performance visibility for management review meetings.',
      'Comprehensive SLA monitoring triggers and delinquency bucket drilldowns.'
    ],
    tech: ['Excel Dashboards', 'MS SQL Server', 'IDFC Portal Data', 'KPI Monitoring', 'Aggregation Queries']
  },
  {
    id: 'mis-perf-hr',
    name: 'Performance and HR MIS',
    category: 'mis',
    badge: 'HR MIS',
    badgeClass: 'mis-badge',
    image: 'assets/projects/portfolio-excel.jpg',
    shortDesc: 'Cross-functional dashboard linking HR productivity metrics, timesheets, and SLA outputs.',
    description: 'Architected an integrated performance and human resource MIS dashboard monitoring workforce headcount, shift adherence, billable hours, timesheets, and individual productivity scores across departments.',
    highlights: [
      'Unified team timesheets, shift adherence (95%), and productivity into a single view.',
      'Visualized resource utilization rates and individual quality score trends.',
      'Provided actionable data models for workforce capacity planning and annual appraisals.',
      'Automated weekly attendance exception reports for department supervisors.'
    ],
    tech: ['HR MIS', 'Workforce Analytics', 'Pivot Charts', 'Timesheet Modeling', 'KPI Dashboards']
  },
  {
    id: 'mis-sales',
    name: 'Sales MIS Reporting System',
    category: 'mis',
    badge: 'Sales MIS',
    badgeClass: 'mis-badge',
    image: 'assets/projects/portfolio-excel.jpg',
    shortDesc: 'Multi-store & product sales MIS developed for performance decision support and revenue trend analysis.',
    description: 'Designed a sales analytics suite during retail management tenure to analyze daily sales velocity, category margins, vendor inventory turnover, and employee sales conversion metrics.',
    highlights: [
      'Tracked product category sales, target vs. actual achievement, and inventory turnover.',
      'Identified top-selling SKUs leading to a 15% overall retail sales growth.',
      'Created automated weekly/monthly business review decks for executive management.',
      'Optimized restocking schedules from 6+ major apparel suppliers.'
    ],
    tech: ['Sales MIS', 'Trend Analysis', 'Inventory Analytics', 'Advanced Excel', 'Pivot Charts']
  },
  {
    id: 'mis-team-productivity',
    name: 'Team Productivity Tracking Dashboard',
    category: 'mis',
    badge: 'Productivity MIS',
    badgeClass: 'mis-badge',
    image: 'assets/projects/portfolio-excel.jpg',
    shortDesc: 'Operational dashboard providing clear team performance visibility, throughput rates, and quality scores.',
    description: 'Created a real-time operational dashboard for team leads and managers to monitor daily file throughput, PKT assessment scores, error feedback loops, and individual productivity benchmarks.',
    highlights: [
      'Automated daily PKT, accuracy (95%), and production score tracking.',
      'Enabled transparent performance visibility recognized by Datamatics Star Performer award.',
      'Streamlined KT and onboarding tracking for new team members.',
      'Reduced queue turnaround time by identifying operational bottlenecks.'
    ],
    tech: ['Productivity MIS', 'Operations Reporting', 'KPI Monitoring', 'Quality Scoring', 'Excel VBA']
  },

  // ----------------------------------------------------
  // TECHNICAL & WEB PROJECTS (7 Projects)
  // ----------------------------------------------------
  {
    id: 'tech-ispark',
    name: 'ISPARK Operations Web Application',
    category: 'web',
    badge: 'MERN Full Stack',
    badgeClass: 'web-badge',
    image: 'assets/projects/portfolio-ispark.jpg',
    shortDesc: 'Enterprise web application for employee productivity tracking, process task logs, and live dashboards.',
    description: 'A full-stack workflow management system designed to streamline team task distribution, employee productivity logging, and project status tracking in real time with role-based access control.',
    highlights: [
      'Built dynamic React frontend with responsive glassmorphism UI and modern CSS.',
      'Engineered RESTful backend APIs using Node.js, Express.js, and MongoDB.',
      'Implemented secure JWT authentication and role-based permissions (Admin/Manager/User).',
      'Real-time task analytics charts with automated status reporting.'
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST API', 'CSS Grid/Flexbox']
  },
  {
    id: 'tech-pondynet',
    name: 'Pondynet Community & Business Portal',
    category: 'web',
    badge: 'Web Portal',
    badgeClass: 'web-badge',
    image: 'assets/projects/portfolio-pondynet.jpg',
    shortDesc: 'Local business directory, classifieds, and community information portal for Puducherry.',
    description: 'An interactive web portal built to connect local businesses, service providers, and residents in the Puducherry region with category search, listing submissions, and responsive navigation.',
    highlights: [
      'Designed responsive mobile-first UI with search and multi-category filtering.',
      'Engineered backend database schemas for vendor profiles and consumer reviews.',
      'Integrated Google Maps location pins and direct contact gateways.',
      'Fast cold-load speed with optimized static assets and clean vanilla JavaScript.'
    ],
    tech: ['JavaScript (ES6)', 'HTML5', 'CSS3', 'PHP', 'MySQL', 'Responsive Design']
  },
  {
    id: 'tech-skyeenet',
    name: 'Skyeenet Service Monitoring Web App',
    category: 'web',
    badge: 'Web App',
    badgeClass: 'web-badge',
    image: 'assets/projects/portfolio-skyeenet.jpg',
    shortDesc: 'Service provider monitoring and customer ticket tracking platform with automated status alerts.',
    description: 'A customer support ticketing and service monitoring web application enabling network service teams to track issue lifecycles, assign field technicians, and monitor SLA compliance.',
    highlights: [
      'Real-time ticket lifecycle management from submission to resolution.',
      'Customer service SLA timer, automated escalation triggers, and priority queues.',
      'Relational database architecture supporting multi-technician assignments in MySQL.',
      'Interactive dashboard for ticket volume trends and response time KPIs.'
    ],
    tech: ['Web Application', 'REST API', 'MySQL', 'PHP', 'JavaScript', 'Bootstrap']
  },
  {
    id: 'tech-vis-hr',
    name: 'VIS HR & Billable Hours Portal',
    category: 'web',
    badge: 'PHP Full Stack',
    badgeClass: 'web-badge',
    image: 'assets/projects/portfolio-velan-hr.jpg',
    shortDesc: 'HR management portal built at Velan Info Services for attendance, billable hours, and invoicing.',
    description: 'Developed during tenure at Velan Info Services to digitize employee timesheets, track client billable hours, manage shift rosters, and generate accurate billing invoices for management.',
    highlights: [
      'Delivered 3+ custom reporting modules for management and payroll oversight.',
      'Ensured 100% accurate billable hours reconciliation against client project accounts.',
      'Built on robust CodeIgniter MVC architecture with MySQL relational database.',
      'Interactive employee dashboard with leave management and attendance tracking.'
    ],
    tech: ['PHP', 'CodeIgniter MVC', 'MySQL', 'Bootstrap', 'JavaScript', 'HTML5/CSS3']
  },
  {
    id: 'tech-powerbooks',
    name: 'PowerBooks Accounting & Invoicing App',
    category: 'web',
    badge: 'Laravel Full Stack',
    badgeClass: 'web-badge',
    image: 'assets/projects/portfolio-powerbooks.jpg',
    shortDesc: 'Financial bookkeeping application for small businesses to track sales, ledger accounts, and invoices.',
    description: 'A comprehensive double-entry accounting web application created for retail shops and small enterprises to track daily sales, purchase orders, customer ledgers, and automated PDF invoicing.',
    highlights: [
      'Double-entry ledger accounting with automated profit & loss and balance sheet generation.',
      'Dynamic invoice generator with printable and downloadable PDF receipts.',
      'Secure Laravel authentication with Eloquent ORM database relationships.',
      'Clean modern dashboard with monthly revenue charts and expense breakdown.'
    ],
    tech: ['Laravel', 'PHP', 'MySQL', 'REST API', 'Tailwind CSS', 'Blade Templates']
  },
  {
    id: 'tech-idfc-portal',
    name: 'IDFC Collection Data Portal',
    category: 'web',
    badge: 'Data Portal',
    badgeClass: 'web-badge',
    image: 'assets/projects/portfolio-idfc.jpg',
    shortDesc: 'Custom web portal for IDFC collection data requirement gathering, batch imports, and exports.',
    description: 'A dedicated web tool built to streamline data exchange between banking operations teams and field recovery agencies, featuring secure file upload, schema validation, and standardized exports.',
    highlights: [
      'Automated daily file ingestion from banking source feeds with validation checks.',
      'Secure role-based views for collection managers, supervisors, and data analysts.',
      'Export functionality converting raw data into formatted management spreadsheets.',
      'Enhanced data security and compliance with BFSI handling standards.'
    ],
    tech: ['Web Development', 'Database Reporting', 'SQL Server', 'Data Integration', 'PHP']
  },
  {
    id: 'tech-thamizhanda',
    name: 'Thamizhanda Content & Tech Portal',
    category: 'web',
    badge: 'WordPress CMS',
    badgeClass: 'web-badge',
    image: 'assets/projects/portfolio-thamizhanda.jpg',
    shortDesc: 'High-traffic technology blog and digital publication portal built on custom WordPress setup.',
    description: 'A digital content and technology blogging portal featuring custom theme development, responsive layouts, social media integrations, SEO optimization, and fast loading performance.',
    highlights: [
      'Custom responsive WordPress theme architecture and plugin configuration.',
      'Integrated social sharing, Google Analytics tracking, and structured meta tags.',
      'Optimized Core Web Vitals (LCP < 1.5s) using caching and asset optimization.',
      'Editorial workflow for article publishing, category tagging, and newsletter signups.'
    ],
    tech: ['WordPress', 'PHP', 'CSS3', 'SEO Best Practices', 'JavaScript', 'Web Hosting']
  },

  // ----------------------------------------------------
  // GAME & INTERACTIVE PROJECTS (2 Projects)
  // ----------------------------------------------------
  {
    id: 'game-tanks',
    name: 'Battle Tanks 2D Arcade Game',
    category: 'game',
    badge: 'HTML5 Canvas Game',
    badgeClass: 'game-badge',
    image: 'assets/projects/portfolio-tank-battles.jpg',
    shortDesc: 'Retro arcade-style tank combat game engineered with HTML5 Canvas and OOP JavaScript physics.',
    description: 'A fast-paced 2D arcade tank warfare game built entirely from scratch with vanilla JavaScript and the HTML5 Canvas API without external game engines. Features custom collision math, projectile physics, and enemy AI.',
    highlights: [
      'Custom 2D collision detection algorithms, bullet trajectory physics, and scoring.',
      'Autonomous enemy tank AI with pathfinding and line-of-sight targeting.',
      'Smooth 60FPS animation rendering loop with requestAnimationFrame.',
      'Sound synthesis effects and dynamic particle explosion visuals.'
    ],
    tech: ['HTML5 Canvas API', 'JavaScript (ES6 OOP)', 'Physics Engine', 'CSS Animations']
  },
  {
    id: 'game-parkalot',
    name: 'Park A Lot Interactive Puzzle Game',
    category: 'game',
    badge: 'JavaScript Game',
    badgeClass: 'game-badge',
    image: 'assets/projects/portfolio-park-a-lot.jpg',
    shortDesc: 'Vehicle parking puzzle game featuring physics boundaries, multi-level challenges, and timer scoring.',
    description: 'An interactive 2D puzzle game challenging players to steer and maneuver vehicles into designated parking slots avoiding obstacles, moving traffic, and tight wall boundaries within a countdown timer.',
    highlights: [
      'Responsive steering controls with realistic vehicle turning radiuses and acceleration.',
      'Multi-level progressive obstacle courses with collision boundary detection.',
      'Time-attack score evaluation and level completion state management.',
      'Touch-friendly mobile controls and keyboard arrow navigation support.'
    ],
    tech: ['JavaScript (ES6)', 'HTML5 Canvas', 'Interactive Logic', 'Game State Machine']
  }
];

// ==========================================
// 4. MASTER CERTIFICATES DATASET (37 Categorized Certificates)
// ==========================================
const CERTIFICATES_DATA = [
  // ----------------------------------------------------
  // PROFESSIONAL & BOOTCAMPS (3 Certificates)
  // ----------------------------------------------------
  {
    id: 'cert-upgrad-fsd',
    title: 'Full Stack JavaScript Developer Certificate',
    issuer: 'UpGrad - KnowledgeHut',
    category: 'pro',
    badge: 'Professional Bootcamp',
    badgeClass: 'web-badge',
    icon: 'code-2',
    file: 'assets/certificates/professional/Upgrad Javascript Full stack developer CERTIFICATE.pdf',
    description: 'Intensive 6-month bootcamp covering React, Node.js, Express, MongoDB, RESTful API architecture, and modern full-stack development best practices.',
    skills: ['JavaScript ES6+', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs']
  },
  {
    id: 'cert-ai-mastermind',
    title: 'AI Mastermind Certification',
    issuer: 'Outskill',
    category: 'pro',
    badge: 'AI Masterclass',
    badgeClass: 'game-badge',
    icon: 'sparkles',
    file: 'assets/certificates/professional/Varunakshay._S_Certificate Ai Mastermind  - Outskill.pdf',
    description: 'Comprehensive certification on Generative AI, Prompt Engineering, LLM applications, workflow automation, and AI productivity integration.',
    skills: ['Generative AI', 'Prompt Engineering', 'LLMs', 'Workflow Automation', 'AI Tools']
  },
  {
    id: 'cert-micans-php',
    title: 'PHP & MySQL Web Development',
    issuer: 'Micans Infotech',
    category: 'pro',
    badge: 'Backend Development',
    badgeClass: 'mis-badge',
    icon: 'server',
    file: 'assets/certificates/professional/MICANS INFOTECH PHP & MYSQL.pdf',
    description: 'Hands-on technical certification covering dynamic PHP scripting, relational MySQL database management, CRUD operations, and session handling.',
    skills: ['PHP', 'MySQL', 'Database Design', 'Backend Web Development']
  },

  // ----------------------------------------------------
  // TECHNICAL & AI CERTIFICATIONS (11 Certificates)
  // ----------------------------------------------------
  {
    id: 'cert-ai-essentials',
    title: 'AI Essentials Learning Path',
    issuer: 'Professional Training',
    category: 'tech',
    badge: 'AI Fundamentals',
    badgeClass: 'game-badge',
    icon: 'cpu',
    file: 'assets/certificates/Technicals/ai essentials learning path.pdf',
    description: 'Core foundation in artificial intelligence paradigms, machine learning concepts, and organizational AI adoption strategies.',
    skills: ['AI Concepts', 'Machine Learning Basics', 'AI Strategy']
  },
  {
    id: 'cert-ai-productivity',
    title: 'Boost Your Productivity with AI',
    issuer: 'Professional Training',
    category: 'tech',
    badge: 'AI Productivity',
    badgeClass: 'game-badge',
    icon: 'zap',
    file: 'assets/certificates/Technicals/boost your productivity with ai.pdf',
    description: 'Practical workflows integrating AI tools (ChatGPT, Copilot, Gemini) into daily business reporting, document synthesis, and task automation.',
    skills: ['AI Productivity', 'ChatGPT', 'Microsoft Copilot', 'Task Automation']
  },
  {
    id: 'cert-devops-cicd',
    title: 'Build CI-CD Pipeline in DevOps',
    issuer: 'DevOps Training',
    category: 'tech',
    badge: 'DevOps & CI/CD',
    badgeClass: 'web-badge',
    icon: 'git-merge',
    file: 'assets/certificates/Technicals/build CI-CD pipeline in Devops.pdf',
    description: 'Designing automated Continuous Integration and Continuous Deployment pipelines, containerization workflows, and version-controlled deployments.',
    skills: ['CI/CD Pipelines', 'DevOps', 'Git Workflow', 'Automated Testing']
  },
  {
    id: 'cert-mern-todo',
    title: 'Developing Applications with MERN Stack',
    issuer: 'Technical Workshop',
    category: 'tech',
    badge: 'MERN Stack',
    badgeClass: 'web-badge',
    icon: 'layers',
    file: 'assets/certificates/Technicals/Developing to do list using MERN stack.pdf',
    description: 'Full lifecycle web application development with React frontend, Express API routes, Node.js runtime, and MongoDB document database.',
    skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'State Management']
  },
  {
    id: 'cert-ai-agents',
    title: 'Introduction to AI Agents',
    issuer: 'AI Research Track',
    category: 'tech',
    badge: 'AI Agents',
    badgeClass: 'game-badge',
    icon: 'bot',
    file: 'assets/certificates/Technicals/intro to ai agents.pdf',
    description: 'Architectures for autonomous AI agents, tool calling, multi-agent communication loops, and reasoning workflows.',
    skills: ['AI Agents', 'Autonomous Systems', 'Tool Calling', 'Agentic Architecture']
  },
  {
    id: 'cert-prompt-techniques',
    title: 'Key Prompting Techniques',
    issuer: 'AI Prompt Engineering Track',
    category: 'tech',
    badge: 'Prompt Engineering',
    badgeClass: 'game-badge',
    icon: 'terminal',
    file: 'assets/certificates/Technicals/key prompting techniques.pdf',
    description: 'Structured prompting methodologies including Few-Shot prompting, Chain-of-Thought, persona definition, and system prompt constraints.',
    skills: ['Prompt Engineering', 'Few-Shot Prompting', 'Chain of Thought', 'LLM Output Formatting']
  },
  {
    id: 'cert-llm-prompt',
    title: 'LLM and Prompt Engineering',
    issuer: 'Advanced AI Training',
    category: 'tech',
    badge: 'LLM Architectures',
    badgeClass: 'game-badge',
    icon: 'sparkles',
    file: 'assets/certificates/Technicals/LLM and prompt engineering.pdf',
    description: 'Deep dive into Large Language Model tokenization, context windows, fine-tuning principles, and advanced prompt orchestration.',
    skills: ['Large Language Models', 'Context Windows', 'Fine-Tuning Concepts', 'Prompt Design']
  },
  {
    id: 'cert-excel-macros',
    title: 'MS Excel and Macros Automation',
    issuer: 'LWS Professional Learning',
    category: 'tech',
    badge: 'Excel Automation',
    badgeClass: 'mis-badge',
    icon: 'file-spreadsheet',
    file: 'assets/certificates/Technicals/MS Excel and Macros LWS.pdf',
    description: 'Advanced spreadsheet modeling, nested lookup functions, conditional matrixes, and automated macro execution for high-volume datasets.',
    skills: ['Advanced Excel', 'VBA Macros', 'Formula Modeling', 'Data Automation']
  },
  {
    id: 'cert-power-bi',
    title: 'Power BI Business Intelligence & Dashboards',
    issuer: 'Data Analytics Track',
    category: 'tech',
    badge: 'Data Analytics',
    badgeClass: 'mis-badge',
    icon: 'bar-chart-2',
    file: 'assets/certificates/Technicals/power bi.pdf',
    description: 'Building interactive visual BI dashboards, DAX queries, multi-table data modeling, and automated KPI reporting views.',
    skills: ['Power BI', 'DAX', 'Data Visualization', 'Business Intelligence', 'KPI Dashboards']
  },
  {
    id: 'cert-prompt-2',
    title: 'Prompt Engineering 2.0',
    issuer: 'Advanced AI Series',
    category: 'tech',
    badge: 'Advanced AI',
    badgeClass: 'game-badge',
    icon: 'command',
    file: 'assets/certificates/Technicals/prompt engineering 2.0.pdf',
    description: 'Next-generation prompt frameworks, iterative prompt evaluation, automated evaluation benchmarks, and RAG optimization.',
    skills: ['Advanced Prompting', 'RAG Concepts', 'AI Evaluation', 'Structured Outputs']
  },
  {
    id: 'cert-dei-principles',
    title: 'Promoting DEI Principles in Workplace',
    issuer: 'Corporate HR Training',
    category: 'tech',
    badge: 'Workplace Culture',
    badgeClass: 'mis-badge',
    icon: 'heart-handshake',
    file: 'assets/certificates/Technicals/Promoting DEI Principles in workplace.pdf',
    description: 'Fostering inclusive team environments, diverse perspectives, and equitable collaboration across multi-disciplinary operational units.',
    skills: ['Diversity & Inclusion', 'Team Culture', 'Workplace Ethics']
  },

  // ----------------------------------------------------
  // COMPLIANCE & BEHAVIOUR (11 Certificates)
  // ----------------------------------------------------
  {
    id: 'cert-gdpr',
    title: 'General Data Protection Regulation (GDPR)',
    issuer: 'Information Security & Compliance',
    category: 'compliance',
    badge: 'Data Privacy',
    badgeClass: 'mis-badge',
    icon: 'shield-check',
    file: 'assets/certificates/Complaince & Behaviour/General Data Protection Regulation (GDPR).pdf',
    description: 'International data privacy principles, data subject rights, consent management, and data handling safeguards for banking & client records.',
    skills: ['GDPR', 'Data Privacy', 'Compliance', 'Information Governance']
  },
  {
    id: 'cert-isms-mgmt',
    title: 'ISMS Information Security Management System',
    issuer: 'Datamatics InfoSec Compliance',
    category: 'compliance',
    badge: 'InfoSec Standards',
    badgeClass: 'mis-badge',
    icon: 'lock',
    file: 'assets/certificates/Complaince & Behaviour/ISMS Information security Management System.pdf',
    description: 'ISO 27001 ISMS standard implementation, access control policies, incident reporting, and data confidentiality protocols.',
    skills: ['ISMS', 'ISO 27001', 'Access Control', 'Data Security']
  },
  {
    id: 'cert-isms-hse',
    title: 'ISMS & HSE Awareness Certification',
    issuer: 'Corporate Compliance',
    category: 'compliance',
    badge: 'Health & InfoSec',
    badgeClass: 'mis-badge',
    icon: 'shield-alert',
    file: 'assets/certificates/Complaince & Behaviour/ISMS and HSE awareness.pdf',
    description: 'Workplace health, safety, environmental guidelines, and information security threat mitigation protocols.',
    skills: ['HSE Awareness', 'Information Security', 'Risk Management']
  },
  {
    id: 'cert-posh',
    title: 'POSH at Workplace 2.0 (India)',
    issuer: 'Statutory Compliance',
    category: 'compliance',
    badge: 'Statutory Compliance',
    badgeClass: 'mis-badge',
    icon: 'users',
    file: 'assets/certificates/Complaince & Behaviour/POSH at workplace 2.0 india.pdf',
    description: 'Prevention of Sexual Harassment at workplace legal frameworks, employee rights, redressal mechanisms, and professional conduct.',
    skills: ['POSH Compliance', 'Workplace Safety', 'Legal Compliance']
  },
  {
    id: 'cert-ip-rights',
    title: 'Intellectual Property & Information Rights',
    issuer: 'Legal & Corporate Compliance',
    category: 'compliance',
    badge: 'Intellectual Property',
    badgeClass: 'mis-badge',
    icon: 'award',
    file: 'assets/certificates/Complaince & Behaviour/Intellectual Property.pdf',
    description: 'Safeguarding proprietary algorithms, copyright standards, trade secrets, patents, and client confidentiality agreements.',
    skills: ['Intellectual Property', 'Confidentiality', 'Trade Secrets']
  },
  {
    id: 'cert-feedback-art',
    title: 'The Art of Giving & Receiving Feedback',
    issuer: 'Leadership Development',
    category: 'compliance',
    badge: 'Communication',
    badgeClass: 'mis-badge',
    icon: 'message-square',
    file: 'assets/certificates/Complaince & Behaviour/art of giving feedback.pdf',
    description: 'Constructive feedback methodologies, active listening frameworks, and performance coaching for operational team success.',
    skills: ['Constructive Feedback', 'Active Listening', 'Peer Coaching']
  },
  {
    id: 'cert-corp-etiquette',
    title: 'Corporate Etiquette & Professional Conduct',
    issuer: 'Professional Skills Series',
    category: 'compliance',
    badge: 'Corporate Etiquette',
    badgeClass: 'mis-badge',
    icon: 'briefcase',
    file: 'assets/certificates/Complaince & Behaviour/Corporate Etiquette.pdf',
    description: 'Executive communication, email protocols, meeting conduct, cross-cultural collaboration, and client relationship management.',
    skills: ['Corporate Communication', 'Business Etiquette', 'Stakeholder Management']
  },
  {
    id: 'cert-team-building',
    title: 'Team Building & Collaborative Dynamics',
    issuer: 'Organizational Development',
    category: 'compliance',
    badge: 'Team Building',
    badgeClass: 'mis-badge',
    icon: 'user-check',
    file: 'assets/certificates/Complaince & Behaviour/Team Building.pdf',
    description: 'Fostering high-trust team culture, conflict resolution, collaborative problem-solving, and cross-functional synergy.',
    skills: ['Team Dynamics', 'Conflict Resolution', 'Collaboration']
  },
  {
    id: 'cert-personal-swot',
    title: 'Personal SWOT Analysis & Development Plan',
    issuer: 'Executive Skills Track',
    category: 'compliance',
    badge: 'Self Assessment',
    badgeClass: 'mis-badge',
    icon: 'target',
    file: 'assets/certificates/Complaince & Behaviour/prsonal SWOT analysis.pdf',
    description: 'Strategic self-evaluation identifying professional strengths, improvement areas, career opportunities, and growth roadmaps.',
    skills: ['SWOT Analysis', 'Self Improvement', 'Goal Setting']
  },
  {
    id: 'cert-five-second-rule',
    title: 'The 5-Second Rule: Action & Execution',
    issuer: 'Personal Productivity',
    category: 'compliance',
    badge: 'Productivity Science',
    badgeClass: 'mis-badge',
    icon: 'clock',
    file: 'assets/certificates/Complaince & Behaviour/Five second Rule.pdf',
    description: 'Behavioral execution principles to overcome procrastination, accelerate decision-making, and boost task momentum.',
    skills: ['Time Management', 'Action Orientation', 'Productivity']
  },
  {
    id: 'cert-company-overview',
    title: 'Corporate Business Overview & Operations',
    issuer: 'Corporate Training',
    category: 'compliance',
    badge: 'Business Operations',
    badgeClass: 'mis-badge',
    icon: 'building',
    file: 'assets/certificates/Complaince & Behaviour/Company Overview.pdf',
    description: 'Comprehensive orientation on enterprise lines of service, CFO back-office FAS functions, and operational SLA deliverables.',
    skills: ['Business Overview', 'FAS Operations', 'SLA Standards']
  },

  // ----------------------------------------------------
  // ACADEMIC CREDENTIALS (6 Certificates)
  // ----------------------------------------------------
  {
    id: 'cert-raak-provisional',
    title: 'Bachelor of Computer Science Provisional Degree',
    issuer: 'RAAK Arts & Science College (Pondicherry University)',
    category: 'academic',
    badge: 'University Degree',
    badgeClass: 'web-badge',
    icon: 'graduation-cap',
    file: 'assets/certificates/Academic/RAAK PROVISIONAL CERTIFICATE.pdf',
    description: 'Official university provisional certificate for Bachelor of Computer Science (B.Sc CS), graduating in First Class (2011 - 2014).',
    skills: ['Computer Science', 'Data Structures', 'C/C++', 'DBMS', 'Web Technologies']
  },
  {
    id: 'cert-raak-overall-marks',
    title: 'B.Sc Computer Science Overall Marksheet',
    issuer: 'Pondicherry University',
    category: 'academic',
    badge: 'Consolidated Marksheet',
    badgeClass: 'web-badge',
    icon: 'file-text',
    file: 'assets/certificates/Academic/RAAK OVERALL MARKSHEET.pdf',
    description: 'Consolidated university transcript reflecting academic performance across all semesters in Computer Science curriculum.',
    skills: ['B.Sc CS Curriculum', 'Academic Distinction', 'Computer Science']
  },
  {
    id: 'cert-raak-marksheets',
    title: 'B.Sc CS Semester Marksheets Record',
    issuer: 'RAAK Arts & Science College',
    category: 'academic',
    badge: 'Semester Transcripts',
    badgeClass: 'web-badge',
    icon: 'files',
    file: 'assets/certificates/Academic/RAAK MARK SHEETS.pdf',
    description: 'Full semester-wise mark verification documents for all university exam cycles.',
    skills: ['Academic Records', 'Coursework Verification']
  },
  {
    id: 'cert-hsc',
    title: 'Higher Secondary School Certificate (+2)',
    issuer: 'State Board of Higher Secondary Education',
    category: 'academic',
    badge: 'Higher Secondary',
    badgeClass: 'mis-badge',
    icon: 'book-open',
    file: 'assets/certificates/Academic/HR SEC CERTIFICATE.pdf',
    description: 'Higher Secondary (+2) education completion certificate with Computer Science and Mathematics specialization.',
    skills: ['Computer Science', 'Mathematics', 'Secondary Education']
  },
  {
    id: 'cert-sslc',
    title: 'Secondary School Leaving Certificate (SSLC)',
    issuer: 'State Board of Secondary Education',
    category: 'academic',
    badge: 'SSLC Board',
    badgeClass: 'mis-badge',
    icon: 'award',
    file: 'assets/certificates/Academic/SSLC CERTIFICATE.pdf',
    description: 'Secondary School Leaving Certificate (10th Standard) with strong foundational academic records.',
    skills: ['Foundational Education', 'Secondary Certification']
  },
  {
    id: 'cert-typewriting',
    title: 'Government Technical Examination in Typewriting',
    issuer: 'Department of Technical Education',
    category: 'academic',
    badge: 'Technical Skill',
    badgeClass: 'mis-badge',
    icon: 'keyboard',
    file: 'assets/certificates/Academic/TYPEWRITING CERTIFICATE.pdf',
    description: 'Certified in English Typewriting by the Board of Technical Examinations, demonstrating high-speed and accurate keyboard proficiency.',
    skills: ['High Speed Typing', 'Data Entry Precision', 'Office Automation']
  },

  // ----------------------------------------------------
  // CULTURAL & COMPETITIONS (6 Certificates)
  // ----------------------------------------------------
  {
    id: 'cert-technofest',
    title: 'Technofest 2014 - Short Film Award',
    issuer: 'Pondicherry Engineering College / Technofest',
    category: 'cultural',
    badge: 'Filmmaking Award',
    badgeClass: 'game-badge',
    icon: 'film',
    file: 'assets/certificates/Cultural & Arts/TECHNOFEST 2014 SHORTFILM.pdf',
    description: 'Winner / Recognition for creative story writing, direction, and editing in state-level inter-college short film competition.',
    skills: ['Storyboarding', 'Direction', 'Video Editing', 'Creative Production']
  },
  {
    id: 'cert-galatias',
    title: 'Galatias Short Film Festival Recognition',
    issuer: 'Galatias Cultural Fest',
    category: 'cultural',
    badge: 'Film & Media',
    badgeClass: 'game-badge',
    icon: 'video',
    file: 'assets/certificates/Cultural & Arts/GALATIAS SHORTFILM.pdf',
    description: 'Creative short film showcase award recognizing digital media production, visual storytelling, and cinematography.',
    skills: ['Visual Storytelling', 'Cinematography', 'Digital Media']
  },
  {
    id: 'cert-cluster-2013',
    title: 'RAAK Cluster 2013 Short Film Competition',
    issuer: 'RAAK Arts & Science College',
    category: 'cultural',
    badge: 'Creative Arts',
    badgeClass: 'game-badge',
    icon: 'clapperboard',
    file: 'assets/certificates/Cultural & Arts/RAAK CLUSTER 2013 SHORTFILM.pdf',
    description: 'Inter-collegiate cultural festival short film competition certificate for outstanding scriptwriting and production execution.',
    skills: ['Scriptwriting', 'Media Production', 'Creative Thinking']
  },
  {
    id: 'cert-quest-2013',
    title: 'RAAK Quest 2013 Short Film Recognition',
    issuer: 'RAAK Arts & Science College',
    category: 'cultural',
    badge: 'Media Competition',
    badgeClass: 'game-badge',
    icon: 'tv',
    file: 'assets/certificates/Cultural & Arts/RAAK QUEST 2013 SHORTFILM.pdf',
    description: 'State-level technical symposium media event recognition for short film direction and multimedia editing.',
    skills: ['Multimedia Editing', 'Audio-Visual Sync', 'Creative Leadership']
  },
  {
    id: 'cert-elocution',
    title: 'RAAK Inter-College Elocution Competition',
    issuer: 'RAAK Cultural Committee',
    category: 'cultural',
    badge: 'Public Speaking',
    badgeClass: 'game-badge',
    icon: 'mic',
    file: 'assets/certificates/Cultural & Arts/RAAK ELOCUTION.pdf',
    description: 'Certificate of merit in public speaking, articulate debate, and structured verbal presentation.',
    skills: ['Public Speaking', 'Verbal Communication', 'Presentation Skills']
  },
  {
    id: 'cert-quiz',
    title: 'RAAK Inter-Departmental Quiz Competition',
    issuer: 'RAAK Academic Committee',
    category: 'cultural',
    badge: 'Knowledge Competition',
    badgeClass: 'game-badge',
    icon: 'help-circle',
    file: 'assets/certificates/Cultural & Arts/RAAK QUIZ.pdf',
    description: 'Inter-departmental general knowledge and technical quiz competition award for rapid problem solving.',
    skills: ['Analytical Reasoning', 'General Knowledge', 'Rapid Recall']
  }
];

// ==========================================
// 5. INITIALIZATION & EVENT DISPATCHER
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initRoleTyper();
  renderSkillPills('all');
  renderRecruiterTags();
  renderProjects('all');
  renderCertificates('all');
  initKeywordSearch();
  initCategoryTabs();
  initProjectFilters();
  initCertificateFilters();
  initRecruiterModeToggle();
  initModalBackdropListeners();
});

// ==========================================
// 6. ROLE TYPER ANIMATION
// ==========================================
function initRoleTyper() {
  const roles = [
    'MIS & Reporting Analyst',
    'Billing Automation Specialist',
    'Full Stack Web Developer',
    'Future AI Operations Specialist'
  ];
  const typerElem = document.getElementById('role-typer');
  if (!typerElem) return;

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;

  function typeStep() {
    const currentRole = roles[roleIdx];

    if (isDeleting) {
      typerElem.textContent = currentRole.substring(0, charIdx - 1);
      charIdx--;
    } else {
      typerElem.textContent = currentRole.substring(0, charIdx + 1);
      charIdx++;
    }

    let delay = isDeleting ? 40 : 80;

    if (!isDeleting && charIdx === currentRole.length) {
      delay = 2200;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      delay = 400;
    }

    setTimeout(typeStep, delay);
  }

  typeStep();
}

// ==========================================
// 7. RENDER SKILLS & RECRUITER TAGS
// ==========================================
function renderSkillPills(categoryFilter = 'all', searchQuery = '') {
  const container = document.getElementById('skills-pills-container');
  if (!container) return;

  container.innerHTML = '';

  const filtered = SKILLS_DATA.filter(item => {
    const matchesCat = (categoryFilter === 'all') || (item.category === categoryFilter);
    const matchesSearch = searchQuery === '' || item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  filtered.forEach(skill => {
    const pill = document.createElement('div');
    const isMatched = searchQuery && skill.name.toLowerCase().includes(searchQuery.toLowerCase());
    pill.className = `skill-pill ${isMatched ? 'matched-highlight' : ''}`;
    pill.innerHTML = `<i data-lucide="check-circle-2" style="width:14px; height:14px; color:var(--emerald);"></i> <span>${skill.name}</span>`;
    container.appendChild(pill);
  });

  if (window.lucide) lucide.createIcons();

  const matchCountElem = document.getElementById('search-match-count');
  if (matchCountElem) {
    matchCountElem.textContent = `Showing ${filtered.length} of ${SKILLS_DATA.length} Verified Skills`;
  }
}

function renderRecruiterTags(searchQuery = '') {
  const container = document.getElementById('recruiter-tag-cloud');
  if (!container) return;

  container.innerHTML = '';

  RECRUITER_KEYWORDS.forEach(tag => {
    const isMatch = searchQuery && tag.toLowerCase().includes(searchQuery.toLowerCase());
    const pill = document.createElement('span');
    pill.className = `tag-pill ${isMatch ? 'matched-highlight' : ''}`;
    pill.textContent = `# ${tag}`;
    container.appendChild(pill);
  });
}

// ==========================================
// 8. RENDER COMPLETE 17 PROJECTS
// ==========================================
function renderProjects(filterCategory = 'all', searchQuery = '') {
  const container = document.getElementById('projects-container');
  if (!container) return;

  container.innerHTML = '';

  const filtered = PROJECTS_DATA.filter(proj => {
    const matchesCat = (filterCategory === 'all') || (proj.category === filterCategory);
    const matchesSearch = searchQuery === '' || 
      proj.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-muted);">
        <i data-lucide="folder-x" style="width:48px; height:48px; margin-bottom:1rem; color:var(--gold);"></i>
        <h3>No matching projects found</h3>
        <p>Try clearing your search query or switching categories.</p>
      </div>
    `;
    if (window.lucide) lucide.createIcons();
    return;
  }

  filtered.forEach(proj => {
    const card = document.createElement('div');
    card.className = 'project-card glass-card';
    card.dataset.category = proj.category;
    card.dataset.id = proj.id;

    const techPillsHtml = proj.tech.slice(0, 4).map(t => `<span>${t}</span>`).join('');

    card.innerHTML = `
      <div class="project-img-wrapper">
        <img src="${proj.image}" alt="${proj.name}" class="project-img" loading="lazy" onerror="this.src='assets/projects/portfolio-excel.jpg'">
        <span class="project-badge ${proj.badgeClass}">${proj.badge}</span>
      </div>
      <div class="project-content">
        <h3>${proj.name}</h3>
        <p>${proj.shortDesc}</p>
        <div class="tech-stack-pills">
          ${techPillsHtml}
        </div>
        <button class="btn-sm btn-glass" onclick="openProjectModal('${proj.id}')">
          View Details <i data-lucide="external-link"></i>
        </button>
      </div>
    `;

    container.appendChild(card);
  });

  if (window.lucide) lucide.createIcons();
}

// ==========================================
// 9. RENDER CERTIFICATES (37 Certificates)
// ==========================================
function renderCertificates(filterCategory = 'all', searchQuery = '') {
  const container = document.getElementById('certificates-container');
  if (!container) return;

  container.innerHTML = '';

  const filtered = CERTIFICATES_DATA.filter(cert => {
    const matchesCat = (filterCategory === 'all') || (cert.category === filterCategory);
    const matchesSearch = searchQuery === '' ||
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-muted);">
        <i data-lucide="award" style="width:48px; height:48px; margin-bottom:1rem; color:var(--gold);"></i>
        <h3>No matching certificates found</h3>
        <p>Try clearing your search query or choosing another category.</p>
      </div>
    `;
    if (window.lucide) lucide.createIcons();
    return;
  }

  filtered.forEach(cert => {
    const card = document.createElement('div');
    card.className = 'project-card glass-card certificate-card';
    card.dataset.category = cert.category;
    card.dataset.id = cert.id;

    const skillsHtml = cert.skills.slice(0, 3).map(s => `<span>${s}</span>`).join('');

    card.innerHTML = `
      <div class="cert-card-header">
        <div class="cert-icon-box">
          <i data-lucide="${cert.icon}"></i>
        </div>
        <span class="project-badge ${cert.badgeClass}">${cert.badge}</span>
      </div>
      <div class="project-content" style="padding-top: 1rem;">
        <span class="cert-issuer">${cert.issuer}</span>
        <h3 class="cert-title">${cert.title}</h3>
        <p class="cert-desc">${cert.description}</p>
        <div class="tech-stack-pills">
          ${skillsHtml}
        </div>
        <div class="cert-actions">
          <a href="${encodeURI(cert.file)}" target="_blank" class="btn-sm btn-primary" style="flex:1; justify-content:center;">
            <i data-lucide="eye"></i> View PDF
          </a>
          <a href="${encodeURI(cert.file)}" download class="btn-sm btn-glass" title="Download PDF">
            <i data-lucide="download"></i>
          </a>
        </div>
      </div>
    `;

    container.appendChild(card);
  });

  if (window.lucide) lucide.createIcons();
}

// ==========================================
// 10. PROJECT & CERTIFICATE FILTER CONTROLS
// ==========================================
function initProjectFilters() {
  const filterTabs = document.querySelectorAll('.project-filter-bar .proj-tab');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.dataset.filter || 'all';
      renderProjects(filter, '');
    });
  });
}

function initCertificateFilters() {
  const certTabs = document.querySelectorAll('.cert-filter-bar .cert-tab');

  certTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      certTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.dataset.filter || 'all';
      renderCertificates(filter, '');
    });
  });
}

// ==========================================
// 11. KEYWORD SEARCH ENGINE
// ==========================================
function initKeywordSearch() {
  const searchInput = document.getElementById('keyword-search-input');
  const clearBtn = document.getElementById('clear-search-btn');

  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim();
    if (clearBtn) clearBtn.hidden = (query === '');

    const activeTab = document.querySelector('.skill-category-tabs .tab-btn.active');
    const category = activeTab ? activeTab.dataset.category : 'all';

    renderSkillPills(category, query);
    renderRecruiterTags(query);

    // Also filter active projects & certificates
    const activeProjTab = document.querySelector('.project-filter-bar .proj-tab.active');
    const projFilter = activeProjTab ? activeProjTab.dataset.filter : 'all';
    renderProjects(projFilter, query);

    const activeCertTab = document.querySelector('.cert-filter-bar .cert-tab.active');
    const certFilter = activeCertTab ? activeCertTab.dataset.filter : 'all';
    renderCertificates(certFilter, query);
  });

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      clearBtn.hidden = true;

      const activeTab = document.querySelector('.skill-category-tabs .tab-btn.active');
      const category = activeTab ? activeTab.dataset.category : 'all';
      renderSkillPills(category, '');
      renderRecruiterTags('');

      const activeProjTab = document.querySelector('.project-filter-bar .proj-tab.active');
      const projFilter = activeProjTab ? activeProjTab.dataset.filter : 'all';
      renderProjects(projFilter, '');

      const activeCertTab = document.querySelector('.cert-filter-bar .cert-tab.active');
      const certFilter = activeCertTab ? activeCertTab.dataset.filter : 'all';
      renderCertificates(certFilter, '');
    });
  }
}

// ==========================================
// 12. CATEGORY TABS (SKILLS)
// ==========================================
function initCategoryTabs() {
  const tabs = document.querySelectorAll('.skill-category-tabs .tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const category = tab.dataset.category || 'all';
      const searchInput = document.getElementById('keyword-search-input');
      const query = searchInput ? searchInput.value.trim() : '';

      renderSkillPills(category, query);
    });
  });
}

// ==========================================
// 13. RECRUITER HIGHLIGHT MODE TOGGLE
// ==========================================
function initRecruiterModeToggle() {
  const toggleBtn = document.getElementById('recruiter-toggle-btn');
  if (!toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('recruiter-mode-active');
    const isActive = document.body.classList.contains('recruiter-mode-active');
    toggleBtn.classList.toggle('active', isActive);

    if (isActive) {
      toggleBtn.querySelector('span').textContent = 'Recruiter Mode ON';
    } else {
      toggleBtn.querySelector('span').textContent = 'Recruiter Mode';
    }
  });
}

// ==========================================
// 14. PROJECT MODAL DIALOG
// ==========================================
function openProjectModal(projectId) {
  const dialog = document.getElementById('project-modal');
  const titleElem = document.getElementById('modal-proj-title');
  const bodyElem = document.getElementById('modal-proj-body');

  const proj = PROJECTS_DATA.find(p => p.id === projectId);
  if (!proj || !dialog) return;

  titleElem.innerHTML = `
    <span class="project-badge ${proj.badgeClass}">${proj.badge}</span>
    <span>${proj.name}</span>
  `;

  const highlightsHtml = proj.highlights.map(h => `
    <li style="display:flex; align-items:flex-start; gap:0.6rem; margin-bottom:0.6rem; font-size:0.92rem; color:var(--text-muted);">
      <i data-lucide="check-circle-2" style="color:var(--emerald); width:18px; height:18px; flex-shrink:0; margin-top:2px;"></i>
      <span>${h}</span>
    </li>
  `).join('');

  const techHtml = proj.tech.map(t => `<span class="tag-pill" style="font-size:0.8rem;">${t}</span>`).join('');

  bodyElem.innerHTML = `
    <div style="margin-bottom:1.5rem; max-height:220px; overflow:hidden; border-radius:var(--radius-md); border:1px solid var(--border-glass);">
      <img src="${proj.image}" alt="${proj.name}" style="width:100%; height:200px; object-fit:cover;" onerror="this.src='assets/projects/portfolio-excel.jpg'">
    </div>

    <div style="margin-bottom:1.5rem;">
      <h4 style="color:var(--cyan); margin-bottom:0.5rem; font-size:1.05rem;">Project Overview</h4>
      <p style="font-size:0.95rem; line-height:1.6; color:var(--text-main);">${proj.description}</p>
    </div>
    
    <div style="margin-bottom:1.5rem;">
      <h4 style="color:var(--cyan); margin-bottom:0.75rem; font-size:1.05rem;">Key Highlights & Measurable Impact</h4>
      <ul style="list-style:none; padding:0; margin:0;">
        ${highlightsHtml}
      </ul>
    </div>

    <div>
      <h4 style="color:var(--cyan); margin-bottom:0.75rem; font-size:1.05rem;">Technologies & Tools Deployed</h4>
      <div style="display:flex; flex-wrap:wrap; gap:0.5rem;">
        ${techHtml}
      </div>
    </div>
  `;

  if (window.lucide) lucide.createIcons();

  if (typeof dialog.showModal === 'function') {
    dialog.showModal();
  }
}

function closeProjectModal() {
  const dialog = document.getElementById('project-modal');
  if (dialog && typeof dialog.close === 'function') {
    dialog.close();
  }
}

// ==========================================
// 15. CONTACT MODAL DIALOG
// ==========================================
function openContactModal() {
  const dialog = document.getElementById('contact-dialog');
  if (dialog && typeof dialog.showModal === 'function') {
    dialog.showModal();
  }
}

function closeContactModal() {
  const dialog = document.getElementById('contact-dialog');
  if (dialog && typeof dialog.close === 'function') {
    dialog.close();
  }
}

// Close dialog on backdrop click
function initModalBackdropListeners() {
  const dialogs = document.querySelectorAll('dialog');
  dialogs.forEach(d => {
    d.addEventListener('click', (e) => {
      const rect = d.getBoundingClientRect();
      const isInDialog = (
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width
      );
      if (!isInDialog) {
        d.close();
      }
    });
  });
}

// ==========================================
// 16. CLIPBOARD HELPER
// ==========================================
function copyToClipboard(text, btnElem) {
  navigator.clipboard.writeText(text).then(() => {
    const originalHtml = btnElem.innerHTML;
    btnElem.innerHTML = '<i data-lucide="check" style="color:var(--emerald);"></i> Copied!';
    if (window.lucide) lucide.createIcons();
    setTimeout(() => {
      btnElem.innerHTML = originalHtml;
      if (window.lucide) lucide.createIcons();
    }, 2000);
  }).catch(err => {
    console.error('Copy error:', err);
  });
}

// ==========================================
// 17. AVATAR PORTRAIT SWITCHER
// ==========================================
function switchAvatar(imageSrc, elem) {
  const heroAvatar = document.getElementById('hero-avatar-img');
  if (heroAvatar) {
    heroAvatar.src = imageSrc;
  }
  document.querySelectorAll('.avatar-thumb').forEach(t => t.classList.remove('active'));
  if (elem) {
    elem.classList.add('active');
  }
}

// ==========================================
// 18. MOBILE NAV TOGGLER
// ==========================================
function toggleMobileNav() {
  const navLinks = document.getElementById('main-nav-links');
  if (navLinks) {
    navLinks.classList.toggle('mobile-open');
  }
}

// ==========================================
// 19. LIGHT / DARK THEME SYSTEM
// ==========================================
function initTheme() {
  const savedTheme = localStorage.getItem('site-theme') || 'dark';
  setTheme(savedTheme);
}

function setTheme(theme) {
  if (theme === 'light') {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('site-theme', 'light');
  } else {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('site-theme', 'dark');
  }
  if (window.lucide) lucide.createIcons();
}

function toggleTheme() {
  const current = document.body.classList.contains('light-theme') ? 'light' : 'dark';
  const newTheme = current === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
}


