import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'invoicepro',
    title: 'InvoicePro',
    url: 'https://invoicepro.dovepeakdigital.com/',
    description: 'Comprehensive invoice generation and business management system designed for freelancers, small businesses, and enterprises. Features automated billing cycles, multi-currency support, tax calculations, and integrated payment processing.',
    category: 'Business Management',
    technologies: ['React', 'Node.js', 'MongoDB', 'PDF Generation', 'Stripe API', 'JWT Authentication', 'Redis Cache', 'Email Service'],
    features: [
      'Professional Invoice Templates',
      'Automated Recurring Billing',
      'Multi-Currency Support',
      'Tax Calculation Engine',
      'Client Management Portal',
      'Payment Tracking & Reminders',
      'Financial Reports & Analytics',
      'Expense Management',
      'Time Tracking Integration',
      'Mobile-Responsive Design',
      'PDF Export & Email Delivery',
      'Custom Branding Options',
      'Late Payment Notifications',
      'Inventory Management',
      'Multi-Language Support'
    ],
    status: 'live',
    launchDate: '2024-01-15',
    keyMetrics: {
      users: '500+',
      invoicesGenerated: '10,000+',
      uptime: '99.9%',
      avgResponseTime: '200ms'
    },
    technicalHighlights: [
      'Microservices Architecture',
      'Real-time Notifications',
      'Advanced Security (2FA)',
      'API-First Design',
      'Automated Backups'
    ]
  },
  {
    id: 'bagcom',
    title: 'BagCom',
    url: 'https://bagcom.dovepeakdigital.com/',
    description: 'Modern e-commerce platform specifically designed for bag and accessory retailers. Features advanced inventory management, AI-powered product recommendations, and seamless checkout experience with multiple payment gateways.',
    category: 'E-commerce',
    technologies: ['React', 'Express.js', 'PostgreSQL', 'Stripe', 'PayPal', 'Cloudinary', 'Elasticsearch', 'Redis'],
    features: [
      'Advanced Product Catalog',
      'AI-Powered Recommendations',
      'Multi-Vendor Support',
      'Inventory Management System',
      'Real-time Stock Updates',
      'Shopping Cart & Wishlist',
      'Multiple Payment Gateways',
      'Order Tracking System',
      'Customer Reviews & Ratings',
      'Discount & Coupon System',
      'Mobile-First Design',
      'SEO Optimization',
      'Analytics Dashboard',
      'Email Marketing Integration',
      'Social Media Integration'
    ],
    status: 'live',
    launchDate: '2024-02-10',
    keyMetrics: {
      users: '1,200+',
      orders: '3,500+',
      uptime: '99.8%',
      conversionRate: '3.2%'
    },
    technicalHighlights: [
      'Progressive Web App (PWA)',
      'Advanced Search & Filtering',
      'Image Optimization',
      'CDN Integration',
      'Performance Monitoring'
    ]
  },
  {
    id: 'hope-kenya',
    title: 'Hope Kenya',
    url: 'https://hope-kenya.dovepeakdigital.com/',
    description: 'Comprehensive non-profit management platform for community outreach, donation management, and volunteer coordination in Kenya. Features transparent fund tracking, impact measurement, and community engagement tools.',
    category: 'Non-Profit',
    technologies: ['React', 'Node.js', 'MySQL', 'PayPal API', 'M-Pesa Integration', 'Google Maps', 'Chart.js', 'Socket.io'],
    features: [
      'Secure Donation Portal',
      'M-Pesa Mobile Payments',
      'Volunteer Management System',
      'Event Planning & Management',
      'Impact Tracking Dashboard',
      'Transparent Fund Allocation',
      'Community Forum',
      'Newsletter Management',
      'Photo & Video Galleries',
      'Beneficiary Database',
      'Real-time Notifications',
      'Multi-Language Support',
      'Social Media Integration',
      'Grant Management',
      'Reporting & Analytics'
    ],
    status: 'live',
    launchDate: '2024-01-20',
    keyMetrics: {
      donations: '$50,000+',
      volunteers: '300+',
      uptime: '99.9%',
      beneficiaries: '1,000+'
    },
    technicalHighlights: [
      'Mobile Money Integration',
      'Blockchain Transparency',
      'Geolocation Services',
      'Multi-tenant Architecture',
      'Automated Reporting'
    ]
  },
  {
    id: 'email-hub',
    title: 'Email Hub',
    url: 'https://email-hub.dovepeakdigital.com/',
    description: 'Enterprise-grade email marketing platform with advanced automation, A/B testing, and comprehensive analytics. Designed for marketers who need powerful tools to create, send, and track email campaigns.',
    category: 'Marketing',
    technologies: ['Vue.js', 'Python', 'Redis', 'SendGrid', 'PostgreSQL', 'Celery', 'Docker', 'AWS SES'],
    features: [
      'Drag & Drop Email Builder',
      'Advanced Automation Workflows',
      'A/B Testing & Optimization',
      'Segmentation & Personalization',
      'Real-time Analytics Dashboard',
      'Deliverability Monitoring',
      'Template Library',
      'Contact Management',
      'Landing Page Builder',
      'Social Media Integration',
      'CRM Integration',
      'API Access',
      'White-label Options',
      'Compliance Management',
      'Multi-user Collaboration'
    ],
    status: 'live',
    launchDate: '2024-03-05',
    keyMetrics: {
      emailsSent: '1M+',
      clients: '150+',
      uptime: '99.95%',
      deliveryRate: '98.5%'
    },
    technicalHighlights: [
      'Machine Learning Optimization',
      'High-Volume Processing',
      'Advanced Spam Protection',
      'Real-time Processing',
      'Scalable Infrastructure'
    ]
  },
  {
    id: 'tripatite-interiors',
    title: 'Tripatite Interiors',
    url: 'https://tripatiteinteriors.dovepeakdigital.com/',
    description: 'Sophisticated interior design portfolio and client management platform featuring 3D visualization, project galleries, consultation booking, and comprehensive project management tools for interior designers.',
    category: 'Portfolio',
    technologies: ['React', 'Firebase', 'Cloudinary', 'Calendly API', 'Three.js', 'WebGL', 'Stripe', 'WebRTC'],
    features: [
      '3D Project Visualization',
      'Interactive Portfolio Gallery',
      'Online Consultation Booking',
      'Client Project Portal',
      'Design Collaboration Tools',
      'Material & Color Library',
      'Cost Estimation Calculator',
      'Project Timeline Management',
      'Before/After Comparisons',
      'Virtual Room Tours',
      'Client Feedback System',
      'Invoice & Payment Processing',
      'Mobile App Companion',
      'Social Media Integration',
      'SEO-Optimized Galleries'
    ],
    status: 'live',
    launchDate: '2024-02-28',
    keyMetrics: {
      projects: '200+',
      clients: '80+',
      uptime: '99.7%',
      bookings: '500+'
    },
    technicalHighlights: [
      '3D Rendering Engine',
      'Real-time Collaboration',
      'Cloud Storage Integration',
      'Progressive Image Loading',
      'Mobile-First Design'
    ]
  },
  {
    id: 'smart-traffic-ai',
    title: 'Smart Traffic AI',
    url: 'https://smarttrafficai.dovepeakdigital.com/',
    description: 'AI-powered traffic management system utilizing machine learning algorithms for real-time traffic monitoring, prediction, and optimization. Integrates with city infrastructure for intelligent traffic flow management.',
    category: 'AI/Technology',
    technologies: ['Python', 'TensorFlow', 'React', 'WebSocket', 'OpenCV', 'PostgreSQL', 'Redis', 'Docker'],
    features: [
      'Real-time Traffic Monitoring',
      'AI-Powered Traffic Prediction',
      'Dynamic Route Optimization',
      'Incident Detection System',
      'Traffic Light Synchronization',
      'Emergency Vehicle Priority',
      'Congestion Analytics',
      'Weather Integration',
      'Mobile Alerts & Notifications',
      'Historical Data Analysis',
      'API for Third-party Integration',
      'Dashboard for Traffic Control',
      'Automated Reporting',
      'Scalable Architecture',
      'Machine Learning Models'
    ],
    status: 'live',
    launchDate: '2024-03-15',
    keyMetrics: {
      intersections: '50+',
      dailyVehicles: '100,000+',
      uptime: '99.9%',
      efficiency: '+25%'
    },
    technicalHighlights: [
      'Computer Vision Processing',
      'Real-time ML Inference',
      'IoT Device Integration',
      'Edge Computing',
      'Distributed Architecture'
    ]
  },
  {
    id: 'payment-gateway',
    title: 'Payment Gateway',
    url: 'https://payment-gateway.dovepeakdigital.com/',
    description: 'Secure, PCI-compliant payment processing solution with multi-currency support, fraud detection, and comprehensive API for seamless integration with e-commerce platforms and business applications.',
    category: 'Fintech',
    technologies: ['Node.js', 'PostgreSQL', 'Stripe', 'JWT', 'Redis', 'Docker', 'Kubernetes', 'Vault'],
    features: [
      'Multi-Currency Processing',
      'Advanced Fraud Detection',
      'PCI DSS Compliance',
      'Real-time Transaction Monitoring',
      'Recurring Payment Support',
      'Mobile Payment Integration',
      'Cryptocurrency Support',
      'API Gateway & SDKs',
      'Merchant Dashboard',
      'Dispute Management',
      'Risk Assessment Engine',
      'Automated Reconciliation',
      'Webhook Notifications',
      'Multi-factor Authentication',
      'Comprehensive Reporting'
    ],
    status: 'live',
    launchDate: '2024-01-30',
    keyMetrics: {
      transactions: '$2M+',
      merchants: '100+',
      uptime: '99.99%',
      fraudRate: '<0.1%'
    },
    technicalHighlights: [
      'Microservices Architecture',
      'End-to-End Encryption',
      'High Availability Setup',
      'Real-time Processing',
      'Compliance Automation'
    ]
  },
  {
    id: 'university',
    title: 'University Management System',
    url: 'https://university.dovepeakdigital.com/',
    description: 'Comprehensive university management platform covering student enrollment, course management, academic tracking, faculty administration, and campus operations with integrated learning management system.',
    category: 'Education',
    technologies: ['React', 'Django', 'PostgreSQL', 'Redis', 'Celery', 'WebRTC', 'Docker', 'Elasticsearch'],
    features: [
      'Student Information System',
      'Course & Curriculum Management',
      'Online Learning Platform',
      'Grade & Assessment Tracking',
      'Faculty Management Portal',
      'Admission & Enrollment System',
      'Library Management',
      'Financial Aid Processing',
      'Campus Event Management',
      'Alumni Network Platform',
      'Mobile Student App',
      'Parent Portal Access',
      'Attendance Tracking',
      'Examination Management',
      'Certificate Generation'
    ],
    status: 'live',
    launchDate: '2024-02-15',
    keyMetrics: {
      students: '5,000+',
      faculty: '200+',
      uptime: '99.8%',
      courses: '500+'
    },
    technicalHighlights: [
      'Learning Analytics',
      'Video Conferencing',
      'Document Management',
      'Role-based Access Control',
      'Integration APIs'
    ]
  },
  {
    id: 'hospital',
    title: 'Hospital Management System',
    url: 'https://hospital.dovepeakdigital.com/',
    description: 'Complete hospital management solution with electronic health records, appointment scheduling, billing, inventory management, and telemedicine capabilities for modern healthcare facilities.',
    category: 'Healthcare',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'WebRTC', 'HL7 FHIR', 'Docker', 'Redis'],
    features: [
      'Electronic Health Records (EHR)',
      'Patient Management System',
      'Appointment Scheduling',
      'Telemedicine Platform',
      'Billing & Insurance Processing',
      'Pharmacy Management',
      'Laboratory Information System',
      'Staff Scheduling & Payroll',
      'Inventory Management',
      'Emergency Department Module',
      'Medical Imaging Integration',
      'Prescription Management',
      'Patient Portal Access',
      'Mobile Health App',
      'Compliance & Reporting'
    ],
    status: 'live',
    launchDate: '2024-03-01',
    keyMetrics: {
      patients: '10,000+',
      staff: '300+',
      uptime: '99.9%',
      appointments: '50,000+'
    },
    technicalHighlights: [
      'HIPAA Compliance',
      'HL7 Integration',
      'Real-time Monitoring',
      'Secure Messaging',
      'Backup & Recovery'
    ]
  },
  {
    id: 'invoice-generator',
    title: 'Invoice Generator',
    url: 'https://invoice-generator.dovepeakdigital.com/',
    description: 'Simple yet powerful invoice generation tool with customizable templates, automated calculations, client management, and seamless PDF export functionality for freelancers and small businesses.',
    category: 'Business Tools',
    technologies: ['React', 'jsPDF', 'LocalStorage', 'CSS Grid', 'IndexedDB', 'Service Worker', 'PWA'],
    features: [
      'Customizable Invoice Templates',
      'Automated Tax Calculations',
      'Client Database Management',
      'PDF Export & Download',
      'Email Invoice Delivery',
      'Invoice Numbering System',
      'Multi-Currency Support',
      'Payment Terms Management',
      'Logo & Branding Options',
      'Offline Functionality',
      'Data Export/Import',
      'Invoice History Tracking',
      'Quick Invoice Creation',
      'Mobile-Responsive Design',
      'Print-Friendly Layouts'
    ],
    status: 'live',
    launchDate: '2024-01-10',
    keyMetrics: {
      users: '2,000+',
      invoices: '15,000+',
      uptime: '99.5%',
      avgTime: '2 minutes'
    },
    technicalHighlights: [
      'Progressive Web App',
      'Offline Capability',
      'Local Data Storage',
      'Fast PDF Generation',
      'Responsive Design'
    ]
  },
  {
    id: 'compdock',
    title: 'CompDock',
    url: 'https://compdock.dovepeakdigital.com/',
    description: 'Comprehensive computer repair and maintenance service platform with booking system, repair tracking, inventory management, and customer communication tools for tech service businesses.',
    category: 'Service Management',
    technologies: ['React', 'Express.js', 'MySQL', 'Twilio', 'Stripe', 'Socket.io', 'QR Codes', 'PWA'],
    features: [
      'Online Service Booking',
      'Repair Status Tracking',
      'Customer Portal Access',
      'Technician Dashboard',
      'Inventory Management',
      'Parts Ordering System',
      'SMS & Email Notifications',
      'Payment Processing',
      'Service History Records',
      'Diagnostic Report Generation',
      'Warranty Management',
      'Mobile Technician App',
      'QR Code Device Tracking',
      'Customer Feedback System',
      'Analytics & Reporting'
    ],
    status: 'live',
    launchDate: '2024-02-20',
    keyMetrics: {
      repairs: '1,500+',
      customers: '800+',
      uptime: '99.7%',
      satisfaction: '4.8/5'
    },
    technicalHighlights: [
      'Real-time Tracking',
      'Mobile-First Design',
      'Automated Workflows',
      'Integration APIs',
      'Cloud Synchronization'
    ]
  },
  {
    id: 'jcrm',
    title: 'JCRM',
    url: 'https://jcrm.dovepeakdigital.com/',
    description: 'Advanced customer relationship management system with lead tracking, sales pipeline management, communication hub, and comprehensive analytics for sales teams and businesses.',
    category: 'CRM',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Chart.js', 'Socket.io', 'Redis', 'Elasticsearch', 'Docker'],
    features: [
      'Lead Management & Scoring',
      'Sales Pipeline Visualization',
      'Contact & Account Management',
      'Email Marketing Integration',
      'Task & Activity Tracking',
      'Sales Forecasting',
      'Custom Field Management',
      'Automated Workflows',
      'Mobile CRM App',
      'Integration Hub',
      'Advanced Reporting',
      'Team Collaboration Tools',
      'Document Management',
      'Call Logging & Recording',
      'Performance Analytics'
    ],
    status: 'live',
    launchDate: '2024-03-10',
    keyMetrics: {
      leads: '25,000+',
      users: '200+',
      uptime: '99.8%',
      conversion: '+35%'
    },
    technicalHighlights: [
      'AI-Powered Insights',
      'Real-time Collaboration',
      'Advanced Search',
      'Custom Integrations',
      'Scalable Architecture'
    ]
  },
  {
    id: 'connect-mtaani',
    title: 'Connect Mtaani',
    url: 'https://connectmtaani.dovepeakdigital.com/',
    description: 'Community networking platform connecting local businesses and residents in Kenyan neighborhoods with features for local commerce, community events, and neighborhood communication.',
    category: 'Social Platform',
    technologies: ['React Native', 'Firebase', 'Google Maps', 'Push Notifications', 'Stripe', 'Socket.io', 'PWA'],
    features: [
      'Local Business Directory',
      'Community Forum & Chat',
      'Event Listings & RSVP',
      'Neighborhood News Feed',
      'Local Marketplace',
      'Service Provider Network',
      'Emergency Alerts System',
      'Geolocation Services',
      'User Verification System',
      'Rating & Review System',
      'Mobile Push Notifications',
      'Multi-language Support',
      'Local Government Integration',
      'Community Polls & Surveys',
      'Safety & Security Features'
    ],
    status: 'live',
    launchDate: '2024-02-25',
    keyMetrics: {
      users: '3,000+',
      businesses: '500+',
      uptime: '99.6%',
      engagement: '75%'
    },
    technicalHighlights: [
      'Geofencing Technology',
      'Real-time Messaging',
      'Offline Functionality',
      'Location-based Services',
      'Community Moderation'
    ]
  },
  {
    id: 'autostore',
    title: 'AutoStore',
    url: 'https://autostore.dovepeakdigital.com/',
    description: 'Specialized automotive parts and accessories e-commerce platform with advanced vehicle compatibility matching, inventory management, and B2B wholesale capabilities.',
    category: 'E-commerce',
    technologies: ['React', 'Node.js', 'MongoDB', 'Elasticsearch', 'Redis', 'Stripe', 'AWS S3', 'Docker'],
    features: [
      'Vehicle Compatibility Matching',
      'Advanced Parts Catalog',
      'VIN Decoder Integration',
      'Inventory Management System',
      'B2B Wholesale Portal',
      'Order Tracking & Logistics',
      'Technical Specifications',
      'Installation Guides',
      'Warranty Management',
      'Bulk Ordering System',
      'Price Comparison Tools',
      'Mobile Shopping App',
      'Mechanic Network Integration',
      'Parts Finder Tool',
      'Customer Support Chat'
    ],
    status: 'live',
    launchDate: '2024-01-25',
    keyMetrics: {
      parts: '50,000+',
      vehicles: '10,000+',
      uptime: '99.8%',
      orders: '5,000+'
    },
    technicalHighlights: [
      'Advanced Search Engine',
      'Vehicle Database Integration',
      'Real-time Inventory',
      'API Integrations',
      'Performance Optimization'
    ]
  },
  {
    id: 'dit',
    title: 'DIT Platform',
    url: 'https://dit.dovepeakdigital.com/',
    description: 'Digital innovation and technology platform showcasing cutting-edge tech solutions, research projects, and innovation services with collaboration tools and project management capabilities.',
    category: 'Technology',
    technologies: ['React', 'GraphQL', 'PostgreSQL', 'AWS', 'Docker', 'Kubernetes', 'WebRTC', 'Blockchain'],
    features: [
      'Innovation Showcase Portal',
      'Research Project Management',
      'Collaboration Workspace',
      'Technology Assessment Tools',
      'Digital Transformation Services',
      'Innovation Metrics Dashboard',
      'Expert Network Platform',
      'Funding & Investment Tracking',
      'IP Management System',
      'Technology Roadmap Planning',
      'Virtual Innovation Labs',
      'Startup Incubation Tools',
      'Knowledge Base & Resources',
      'Event Management System',
      'Partnership Matching'
    ],
    status: 'live',
    launchDate: '2024-03-20',
    keyMetrics: {
      projects: '100+',
      innovators: '300+',
      uptime: '99.9%',
      partnerships: '50+'
    },
    technicalHighlights: [
      'Microservices Architecture',
      'GraphQL API',
      'Real-time Collaboration',
      'Cloud-Native Design',
      'Advanced Analytics'
    ]
  },
  {
    id: 'jkuat-social-robotics',
    title: 'JKUAT Social Robotics',
    url: 'https://jkuatsocialrobotics.dovepeakdigital.com/',
    description: 'Advanced research platform for JKUAT\'s social robotics department featuring project showcases, collaboration tools, simulation environments, and academic publication management.',
    category: 'Research/Academic',
    technologies: ['React', 'Python', 'TensorFlow', 'WebRTC', 'Three.js', 'ROS', 'Docker', 'MongoDB'],
    features: [
      'Research Project Showcase',
      'Robotics Simulation Environment',
      'Collaboration Tools',
      'Academic Publication Portal',
      '3D Model Visualization',
      'Video Conference Integration',
      'Data Analysis Dashboard',
      'Student Project Management',
      'Research Grant Tracking',
      'Equipment Booking System',
      'Knowledge Sharing Platform',
      'Peer Review System',
      'Conference Management',
      'Research Metrics Tracking',
      'International Collaboration Hub'
    ],
    status: 'live',
    launchDate: '2024-02-05',
    keyMetrics: {
      researchers: '50+',
      projects: '30+',
      uptime: '99.7%',
      publications: '25+'
    },
    technicalHighlights: [
      '3D Visualization Engine',
      'Real-time Simulation',
      'Machine Learning Integration',
      'Collaborative Workspace',
      'Academic Workflow'
    ]
  },
  {
    id: 'kellian-auto-garage',
    title: 'Kellian Auto Garage',
    url: 'https://kellianautogarage.dovepeakdigital.com/',
    description: 'Comprehensive auto repair shop management system with appointment booking, service tracking, inventory management, and customer communication tools for automotive service businesses.',
    category: 'Service Management',
    technologies: ['React', 'Node.js', 'MySQL', 'Calendar API', 'Stripe', 'Twilio', 'QR Codes', 'PWA'],
    features: [
      'Online Appointment Booking',
      'Service History Tracking',
      'Parts Inventory Management',
      'Customer Management Portal',
      'Mechanic Scheduling System',
      'Service Estimate Calculator',
      'Payment Processing',
      'SMS & Email Notifications',
      'Vehicle Maintenance Reminders',
      'Diagnostic Report Generation',
      'Warranty Tracking',
      'Mobile Mechanic App',
      'Customer Feedback System',
      'Financial Reporting',
      'Multi-location Support'
    ],
    status: 'live',
    launchDate: '2024-01-18',
    keyMetrics: {
      appointments: '2,000+',
      customers: '600+',
      uptime: '99.6%',
      satisfaction: '4.7/5'
    },
    technicalHighlights: [
      'Real-time Scheduling',
      'Mobile-First Design',
      'Automated Reminders',
      'Integration APIs',
      'Cloud Backup'
    ]
  },
  {
    id: 'living-spot',
    title: 'Living Spot',
    url: 'https://livingspot.dovepeakdigital.com/',
    description: 'Modern real estate platform with property listings, virtual tours, rental management, and comprehensive property search with advanced filtering and neighborhood insights.',
    category: 'Real Estate',
    technologies: ['React', 'Node.js', 'PostgreSQL', '360° Tours', 'Google Maps', 'Stripe', 'WebRTC', 'AWS S3'],
    features: [
      'Advanced Property Search',
      'Virtual 360° Tours',
      'Rental Management System',
      'Property Listing Portal',
      'Neighborhood Insights',
      'Mortgage Calculator',
      'Property Comparison Tool',
      'Tenant Screening',
      'Lease Management',
      'Maintenance Request System',
      'Payment Processing',
      'Market Analytics',
      'Mobile Property App',
      'Agent Management Portal',
      'Document Management'
    ],
    status: 'live',
    launchDate: '2024-02-12',
    keyMetrics: {
      properties: '1,000+',
      users: '2,500+',
      uptime: '99.8%',
      tours: '5,000+'
    },
    technicalHighlights: [
      'Virtual Reality Integration',
      'Geospatial Analysis',
      'Image Recognition',
      'Real-time Updates',
      'Advanced Search Engine'
    ]
  },
  {
    id: 'jkuat-findmyid',
    title: 'JKUAT FindMyID',
    url: 'https://jkuatfindmyid.dovepeakdigital.com/',
    description: 'Secure student ID recovery and management system for JKUAT with biometric verification, blockchain security, and automated replacement processes for lost or damaged student IDs.',
    category: 'Education',
    technologies: ['React', 'Node.js', 'MySQL', 'QR Codes', 'Blockchain', 'Biometric API', 'JWT', 'Redis'],
    features: [
      'Biometric ID Verification',
      'Blockchain Security',
      'Automated ID Replacement',
      'Student Portal Access',
      'QR Code Generation',
      'Lost ID Reporting System',
      'Digital ID Wallet',
      'Campus Integration',
      'Security Audit Trail',
      'Multi-factor Authentication',
      'Mobile ID App',
      'Batch ID Processing',
      'Administrative Dashboard',
      'Fraud Detection System',
      'Emergency ID Services'
    ],
    status: 'live',
    launchDate: '2024-01-22',
    keyMetrics: {
      students: '15,000+',
      recoveries: '500+',
      uptime: '99.9%',
      security: '100%'
    },
    technicalHighlights: [
      'Blockchain Integration',
      'Biometric Authentication',
      'High Security Standards',
      'Real-time Verification',
      'Scalable Architecture'
    ]
  },
  {
    id: 'jasiri',
    title: 'Jasiri',
    url: 'https://jasiri.dovepeakdigital.com/',
    description: 'Youth empowerment platform with comprehensive skill development programs, mentorship matching, career guidance, and community engagement tools for young professionals and students.',
    category: 'Education/Social',
    technologies: ['React', 'Firebase', 'Video Streaming', 'Payment Gateway', 'WebRTC', 'AI Matching', 'PWA'],
    features: [
      'Skill Development Courses',
      'AI-Powered Mentorship Matching',
      'Career Guidance Platform',
      'Progress Tracking Dashboard',
      'Community Forum & Networking',
      'Live Video Sessions',
      'Certificate Generation',
      'Job Board Integration',
      'Portfolio Builder',
      'Peer Learning Groups',
      'Achievement Badges',
      'Mobile Learning App',
      'Scholarship Opportunities',
      'Industry Partnerships',
      'Success Story Sharing'
    ],
    status: 'live',
    launchDate: '2024-03-08',
    keyMetrics: {
      youth: '2,000+',
      mentors: '150+',
      uptime: '99.7%',
      completion: '85%'
    },
    technicalHighlights: [
      'AI Matching Algorithm',
      'Video Streaming Platform',
      'Learning Analytics',
      'Social Learning Features',
      'Mobile-First Design'
    ]
  },
  {
    id: 'kids-beyond-limit',
    title: 'Kids Beyond Limit',
    url: 'https://kidsbeyondlimit.dovepeakdigital.com/',
    description: 'Specialized educational platform for children with special needs featuring adaptive learning tools, progress monitoring, therapeutic resources, and comprehensive support for parents and educators.',
    category: 'Education/Healthcare',
    technologies: ['React', 'Node.js', 'MongoDB', 'Adaptive UI', 'AI/ML', 'WebRTC', 'Speech API', 'PWA'],
    features: [
      'Adaptive Learning Interface',
      'Individualized Education Plans',
      'Progress Monitoring Tools',
      'Therapeutic Activity Library',
      'Parent Communication Portal',
      'Educator Resource Center',
      'Speech & Language Tools',
      'Behavioral Tracking',
      'Sensory-Friendly Design',
      'Multi-modal Learning',
      'Assessment & Evaluation',
      'Collaboration Tools',
      'Resource Sharing Platform',
      'Professional Development',
      'Community Support Network'
    ],
    status: 'live',
    launchDate: '2024-02-18',
    keyMetrics: {
      children: '500+',
      educators: '100+',
      uptime: '99.8%',
      improvement: '90%'
    },
    technicalHighlights: [
      'Adaptive User Interface',
      'Machine Learning Personalization',
      'Accessibility Compliance',
      'Multi-sensory Support',
      'Therapeutic Integration'
    ]
  },
  {
    id: 'highrise',
    title: 'Highrise',
    url: 'https://highrise.dovepeakdigital.com/',
    description: 'Advanced property management system for high-rise buildings with tenant management, maintenance tracking, security integration, and smart building automation features.',
    category: 'Property Management',
    technologies: ['React', 'Express.js', 'PostgreSQL', 'IoT Integration', 'WebSocket', 'Stripe', 'Security APIs'],
    features: [
      'Tenant Management Portal',
      'Maintenance Request System',
      'Automated Billing & Payments',
      'Security System Integration',
      'Visitor Management',
      'Amenity Booking System',
      'Communication Hub',
      'Document Management',
      'Emergency Response System',
      'Energy Management',
      'Parking Management',
      'Lease Administration',
      'Financial Reporting',
      'Mobile Resident App',
      'Smart Building Controls'
    ],
    status: 'live',
    launchDate: '2024-03-12',
    keyMetrics: {
      units: '500+',
      tenants: '1,200+',
      uptime: '99.9%',
      satisfaction: '4.6/5'
    },
    technicalHighlights: [
      'IoT Device Integration',
      'Real-time Monitoring',
      'Smart Building Automation',
      'Security Integration',
      'Scalable Architecture'
    ]
  },
  {
    id: 'watercent',
    title: 'WaterCent',
    url: 'https://watercent.dovepeakdigital.com/',
    description: 'Smart water utility management system with IoT sensors, consumption tracking, leak detection, automated billing, and comprehensive analytics for water utilities and municipalities.',
    category: 'Utilities',
    technologies: ['React', 'Node.js', 'TimeSeries DB', 'IoT Sensors', 'Machine Learning', 'GIS', 'Mobile APIs'],
    features: [
      'Real-time Consumption Monitoring',
      'Automated Billing System',
      'Leak Detection & Alerts',
      'Water Quality Monitoring',
      'Usage Analytics Dashboard',
      'Customer Portal Access',
      'Mobile Meter Reading',
      'Predictive Maintenance',
      'GIS Mapping Integration',
      'Emergency Response System',
      'Conservation Programs',
      'Regulatory Compliance',
      'Multi-tier Pricing',
      'Payment Processing',
      'Field Service Management'
    ],
    status: 'live',
    launchDate: '2024-01-28',
    keyMetrics: {
      meters: '10,000+',
      customers: '8,000+',
      uptime: '99.9%',
      savings: '20%'
    },
    technicalHighlights: [
      'IoT Sensor Network',
      'Time Series Analytics',
      'Machine Learning Predictions',
      'GIS Integration',
      'Real-time Processing'
    ]
  },
  {
    id: 'helpicent',
    title: 'HelpiCent',
    url: 'https://helpicent.dovepeakdigital.com/',
    description: 'Community help and support platform connecting people who need assistance with volunteers, featuring location-based matching, skill verification, and community rating systems.',
    category: 'Social Platform',
    technologies: ['React', 'Firebase', 'Geolocation', 'Push Notifications', 'WebRTC', 'Payment Gateway', 'PWA'],
    features: [
      'Help Request System',
      'Volunteer Matching Algorithm',
      'Location-based Services',
      'Skill Verification System',
      'Community Rating & Reviews',
      'Real-time Chat & Video',
      'Emergency Help Features',
      'Task Management Tools',
      'Payment & Tipping System',
      'Background Check Integration',
      'Multi-language Support',
      'Offline Capability',
      'Community Moderation',
      'Analytics Dashboard',
      'Mobile Push Notifications'
    ],
    status: 'live',
    launchDate: '2024-02-22',
    keyMetrics: {
      users: '5,000+',
      volunteers: '1,200+',
      uptime: '99.6%',
      helpRequests: '3,000+'
    },
    technicalHighlights: [
      'Geolocation Matching',
      'Real-time Communication',
      'Trust & Safety Features',
      'Mobile-First Design',
      'Community Algorithms'
    ]
  },
  {
    id: 'lapicure',
    title: 'LaPicure',
    url: 'https://lapicure.dovepeakdigital.com/',
    description: 'Comprehensive beauty salon management system with appointment booking, service management, client profiles, inventory tracking, and staff scheduling for beauty and wellness businesses.',
    category: 'Service Management',
    technologies: ['React', 'Node.js', 'MySQL', 'Image Upload', 'Stripe', 'Calendar API', 'SMS API', 'PWA'],
    features: [
      'Online Appointment Booking',
      'Service Catalog Management',
      'Client Profile & History',
      'Staff Scheduling System',
      'Inventory Management',
      'Point of Sale Integration',
      'Payment Processing',
      'Client Communication Tools',
      'Loyalty Program Management',
      'Before/After Photo Gallery',
      'Service Package Creation',
      'Financial Reporting',
      'Mobile Staff App',
      'Customer Feedback System',
      'Marketing Campaign Tools'
    ],
    status: 'live',
    launchDate: '2024-03-05',
    keyMetrics: {
      appointments: '3,000+',
      clients: '800+',
      uptime: '99.7%',
      revenue: '+40%'
    },
    technicalHighlights: [
      'Real-time Scheduling',
      'Image Management',
      'POS Integration',
      'Mobile Optimization',
      'Automated Marketing'
    ]
  },
  {
    id: 'studyroom',
    title: 'StudyRoom',
    url: 'https://studyroom.dovepeakdigital.com/',
    description: 'Advanced online learning platform with virtual classrooms, course management, collaborative tools, assessment system, and comprehensive learning analytics for educational institutions.',
    category: 'Education',
    technologies: ['React', 'WebRTC', 'Socket.io', 'MongoDB', 'Video Streaming', 'AI Proctoring', 'Docker'],
    features: [
      'Virtual Classroom Environment',
      'Interactive Whiteboard',
      'Course Content Management',
      'Live Video Streaming',
      'Collaborative Study Groups',
      'Assessment & Quiz System',
      'AI-Powered Proctoring',
      'Learning Analytics Dashboard',
      'Discussion Forums',
      'Assignment Submission',
      'Grade Management',
      'Mobile Learning App',
      'Offline Content Access',
      'Multi-language Support',
      'Integration with LMS'
    ],
    status: 'live',
    launchDate: '2024-02-08',
    keyMetrics: {
      students: '3,000+',
      instructors: '150+',
      uptime: '99.8%',
      engagement: '88%'
    },
    technicalHighlights: [
      'WebRTC Video Platform',
      'Real-time Collaboration',
      'AI Proctoring System',
      'Learning Analytics',
      'Scalable Infrastructure'
    ]
  },
  {
    id: 'consultancy',
    title: 'Consultancy Platform',
    url: 'https://consultancy.dovepeakdigital.com/',
    description: 'Professional consultancy services platform with expert matching, project management, video consultations, document sharing, and comprehensive client management tools.',
    category: 'Professional Services',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Video Calls', 'WebRTC', 'Stripe', 'Document APIs', 'PWA'],
    features: [
      'Expert Matching Algorithm',
      'Project Management Suite',
      'Video Consultation Platform',
      'Document Sharing & Collaboration',
      'Time Tracking & Billing',
      'Client Relationship Management',
      'Proposal Generation',
      'Contract Management',
      'Payment Processing',
      'Knowledge Base System',
      'Performance Analytics',
      'Mobile Consultant App',
      'Multi-language Support',
      'Integration Hub',
      'Compliance Management'
    ],
    status: 'live',
    launchDate: '2024-03-18',
    keyMetrics: {
      consultants: '200+',
      clients: '500+',
      uptime: '99.8%',
      projects: '1,000+'
    },
    technicalHighlights: [
      'AI Matching System',
      'Video Conference Platform',
      'Document Collaboration',
      'Real-time Communication',
      'Advanced Analytics'
    ]
  },
  {
    id: 'comphive',
    title: 'CompHive',
    url: 'https://comphive.dovepeakdigital.com/',
    description: 'Computer services marketplace connecting customers with certified technicians and repair services, featuring skill verification, booking system, and comprehensive service management.',
    category: 'Marketplace',
    technologies: ['React', 'Express.js', 'MongoDB', 'Geolocation', 'Stripe', 'Rating System', 'Mobile APIs'],
    features: [
      'Service Marketplace Platform',
      'Technician Certification System',
      'Skill Verification & Testing',
      'Booking & Scheduling System',
      'Real-time Service Tracking',
      'Rating & Review System',
      'Payment Processing',
      'Dispute Resolution',
      'Mobile Technician App',
      'Customer Support Chat',
      'Service History Tracking',
      'Warranty Management',
      'Multi-location Support',
      'Performance Analytics',
      'Quality Assurance Tools'
    ],
    status: 'live',
    launchDate: '2024-01-12',
    keyMetrics: {
      technicians: '300+',
      customers: '1,500+',
      uptime: '99.7%',
      satisfaction: '4.8/5'
    },
    technicalHighlights: [
      'Marketplace Architecture',
      'Geolocation Services',
      'Real-time Tracking',
      'Trust & Safety Features',
      'Mobile-First Design'
    ]
  },
  {
    id: 'carrostore',
    title: 'CarroStore',
    url: 'https://carrostore.dovepeakdigital.com/',
    description: 'Comprehensive automotive marketplace for buying and selling vehicles with detailed listings, financing options, inspection services, and dealer management tools.',
    category: 'Marketplace',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Payment Gateway', 'Image Recognition', 'ML', 'Mobile APIs'],
    features: [
      'Advanced Vehicle Listings',
      'VIN Verification System',
      'Financing Calculator & Options',
      'Vehicle History Reports',
      'Inspection Service Integration',
      'Dealer Management Portal',
      'Advanced Search & Filters',
      'Price Comparison Tools',
      'Mobile Vehicle Scanner',
      'Insurance Integration',
      'Warranty Management',
      'Trade-in Evaluation',
      'Loan Processing',
      'Document Management',
      'Market Analytics'
    ],
    status: 'live',
    launchDate: '2024-02-14',
    keyMetrics: {
      vehicles: '2,000+',
      dealers: '50+',
      uptime: '99.8%',
      sales: '$5M+'
    },
    technicalHighlights: [
      'Image Recognition AI',
      'VIN Decoding System',
      'Financial Integration',
      'Advanced Search Engine',
      'Mobile Optimization'
    ]
  },
  {
    id: 'tyna-marketing',
    title: 'Tyna Marketing',
    url: 'https://tyna-marketing.dovepeakdigital.com/',
    description: 'Comprehensive digital marketing agency platform with campaign management, social media automation, analytics dashboard, client reporting, and multi-channel marketing tools.',
    category: 'Marketing',
    technologies: ['React', 'Python', 'Analytics APIs', 'Chart.js', 'Social APIs', 'ML', 'Docker', 'Redis'],
    features: [
      'Multi-Channel Campaign Management',
      'Social Media Automation',
      'Advanced Analytics Dashboard',
      'Client Reporting Portal',
      'Content Management System',
      'SEO Optimization Tools',
      'PPC Campaign Management',
      'Email Marketing Integration',
      'Lead Generation Tools',
      'Conversion Tracking',
      'A/B Testing Platform',
      'ROI Analysis',
      'White-label Solutions',
      'API Integrations',
      'Performance Monitoring'
    ],
    status: 'live',
    launchDate: '2024-03-22',
    keyMetrics: {
      campaigns: '500+',
      clients: '100+',
      uptime: '99.9%',
      roi: '+250%'
    },
    technicalHighlights: [
      'Marketing Automation',
      'Advanced Analytics',
      'Multi-platform Integration',
      'Machine Learning Insights',
      'Real-time Reporting'
    ]
  }
];