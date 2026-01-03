-- This file will be executed on application startup
-- It will only insert data if the tables are empty

-- Note: Divisions are now hardcoded in the frontend
-- subdivision_slug values: central-ac, elevators-travelators, fire-detection-protection, generator, solar, elv

-- Insert Services for each subdivision
INSERT INTO services (subdivision_slug, title, description, icon) VALUES
-- Central AC services
('central-ac', 'HVAC System Design', 'Custom central air conditioning system design for commercial and residential buildings with energy efficiency focus.', 'Wind'),
('central-ac', 'Installation & Commissioning', 'Professional installation and commissioning of central AC systems ensuring optimal performance.', 'Settings'),
('central-ac', 'Maintenance & Service', '24/7 maintenance and repair services for all types of central air conditioning systems.', 'Wrench'),
('central-ac', 'Energy Optimization', 'Energy-efficient upgrades and optimization services to reduce operational costs.', 'Zap'),

-- Elevators and Travelators services
('elevators-travelators', 'Elevator Installation', 'Complete elevator installation services for residential and commercial buildings.', 'ArrowUp'),
('elevators-travelators', 'Escalator Systems', 'Modern escalator systems for malls, airports, and public spaces.', 'MoveVertical'),
('elevators-travelators', 'Modernization', 'Elevator and escalator modernization to improve safety and efficiency.', 'RefreshCw'),
('elevators-travelators', 'Maintenance Contracts', 'Comprehensive maintenance programs ensuring 99.9% uptime.', 'ClipboardCheck'),

-- Fire Detection & Protection services
('fire-detection-protection', 'Fire Alarm Systems', 'Advanced fire detection and alarm systems with smart monitoring capabilities.', 'Bell'),
('fire-detection-protection', 'Sprinkler Systems', 'Automatic sprinkler system design and installation for comprehensive fire protection.', 'Droplets'),
('fire-detection-protection', 'Smoke Detection', 'State-of-the-art smoke and heat detection systems for early warning.', 'CloudDrizzle'),
('fire-detection-protection', 'Emergency Systems', 'Emergency lighting, exit signs, and evacuation systems.', 'AlertTriangle'),

-- Generator services
('generator', 'Backup Power Systems', 'Diesel and gas generator installation for uninterrupted power supply.', 'Battery'),
('generator', 'Automatic Transfer Switch', 'Seamless power transfer systems for critical operations.', 'ToggleLeft'),
('generator', 'Generator Maintenance', 'Regular maintenance and testing to ensure reliability when needed.', 'Tool'),
('generator', 'Load Management', 'Intelligent load management systems for optimal power distribution.', 'Activity'),

-- Solar services
('solar', 'Solar Panel Installation', 'High-efficiency photovoltaic panel installation for rooftop and ground-mounted systems.', 'Sun'),
('solar', 'Energy Storage', 'Battery storage solutions for 24/7 solar power availability.', 'BatteryCharging'),
('solar', 'Grid Integration', 'Seamless integration with existing electrical infrastructure and net metering.', 'Network'),
('solar', 'Solar Consulting', 'ROI analysis and solar feasibility studies for your property.', 'Calculator'),

-- ELV services
('elv', 'CCTV & Surveillance', 'Advanced IP camera systems with AI-powered analytics and remote monitoring.', 'Camera'),
('elv', 'Access Control', 'Biometric and card-based access control systems for enhanced security.', 'Lock'),
('elv', 'Building Automation', 'Smart building management systems (BMS) for integrated control.', 'Home'),
('elv', 'Structured Cabling', 'Category 6A and fiber optic cabling infrastructure for modern buildings.', 'Cable')
ON CONFLICT DO NOTHING;

-- Insert Testimonials
INSERT INTO testimonials (subdivision_slug, client_name, company, content, rating) VALUES
('central-ac', 'Ahmed Hassan', 'Pearl Towers', 'Metropolitan installed a state-of-the-art central AC system for our 30-story building. The system is incredibly efficient and quiet. Excellent work!', 5),
('central-ac', 'Fatima Al-Mansoori', 'Dubai Mall Extension', 'Outstanding HVAC solutions for our shopping complex. The team delivered on time and the system performs flawlessly.', 5),
('elevators-travelators', 'Mohammed Al-Rashid', 'Sky Heights Development', 'The elevator systems installed in our residential towers are smooth, fast, and reliable. Very satisfied with the service.', 5),
('elevators-travelators', 'Sarah Williams', 'Metro Airport Authority', 'Professional installation of travelators at our terminal. The project was completed ahead of schedule.', 5),
('fire-detection-protection', 'Ali Abdullah', 'Etihad Complex', 'Metropolitan designed and installed a comprehensive fire protection system for our facility. We feel much safer now.', 5),
('fire-detection-protection', 'Linda Chen', 'Global Hospital', 'The fire detection system has advanced features and integrates perfectly with our building management system.', 5),
('generator', 'Khalid Al-Mazrouei', 'Data Center Solutions', 'Our mission-critical operations depend on reliable backup power. Metropolitan delivered an excellent generator solution.', 5),
('generator', 'James Peterson', 'Manufacturing Corp', 'The automatic transfer switch works flawlessly. We have experienced zero downtime during power outages.', 5),
('solar', 'Noor Al-Hashemi', 'Green Residences', 'The solar installation has reduced our electricity bills by 70%. Great investment with excellent ROI.', 5),
('solar', 'Robert Kumar', 'Sustainable Industries', 'Professional solar system installation with comprehensive monitoring. Highly recommend Metropolitan.', 5),
('elv', 'Mariam Sultan', 'Corporate Headquarters', 'The integrated ELV systems have transformed our building into a smart facility. Excellent execution.', 5),
('elv', 'David Martinez', 'Retail Chain Operations', 'CCTV and access control systems work perfectly across all our locations. Great technical support.', 5)
ON CONFLICT DO NOTHING;

-- Insert Projects
INSERT INTO projects (subdivision_slug, title, description, image_url) VALUES
('central-ac', 'Burj Vista HVAC System', 'Complete central AC installation for 45-story mixed-use tower with VRF technology and smart controls.', 'https://images.unsplash.com/photo-1631545806609-c2c6c7e6de6f?w=600'),
('central-ac', 'Emirates Mall Climate Control', 'Advanced HVAC system for 2 million sq ft shopping mall with zone-based temperature management.', 'https://images.unsplash.com/photo-1604357209793-fca5dca89f97?w=600'),
('central-ac', 'Dubai Marina Residences', 'Energy-efficient central AC systems for luxury residential complex with 500 apartments.', 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600'),
('elevators-travelators', 'Downtown Business Tower', '24 high-speed elevators with destination dispatch technology for 60-story commercial building.', 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600'),
('elevators-travelators', 'Airport Terminal 4', 'Installation of 30 escalators and 12 travelators for new international terminal.', 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600'),
('elevators-travelators', 'Marina Heights Modernization', 'Complete elevator modernization for twin residential towers improving speed and efficiency.', 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600'),
('fire-detection-protection', 'City Center Fire Safety', 'Comprehensive fire detection and suppression system for mixed-use development.', 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600'),
('fire-detection-protection', 'Medical City Protection', 'Advanced fire safety systems for healthcare facility with specialized protection zones.', 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600'),
('fire-detection-protection', 'Industrial Zone Safety', 'Fire protection system for manufacturing facility with foam suppression and gas detection.', 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600'),
('generator', 'Financial District Backup Power', '5MW generator system with N+1 redundancy for banking and finance complex.', 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600'),
('generator', 'Hospital Emergency Power', 'Dual generator setup with automatic switchover for uninterrupted healthcare operations.', 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600'),
('generator', 'Telecom Hub Power Solution', 'Mission-critical backup power for telecommunications facility with 99.999% reliability.', 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600'),
('solar', 'Green Campus Solar Farm', '5MW rooftop solar installation for university campus achieving 80% energy independence.', 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600'),
('solar', 'Residential Solar Community', 'Solar panels for 200-villa community with battery storage and net metering.', 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600'),
('solar', 'Industrial Solar Power', '10MW ground-mounted solar farm powering manufacturing facility operations.', 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600'),
('elv', 'Smart Office Building', 'Integrated ELV systems including BMS, CCTV, access control, and structured cabling for 30-story office tower.', 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600'),
('elv', 'Retail Security Network', 'Comprehensive surveillance and access control for 50-location retail chain.', 'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=600'),
('elv', 'Stadium ELV Infrastructure', 'Complete low-voltage systems for sports stadium including CCTV, PA system, and fiber optics.', 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600')
ON CONFLICT DO NOTHING;

-- Insert Partners
INSERT INTO partners (subdivision_slug, name, logo_url) VALUES
('central-ac', 'Daikin Middle East', 'https://via.placeholder.com/150x80?text=Daikin'),
('central-ac', 'Carrier Solutions', 'https://via.placeholder.com/150x80?text=Carrier'),
('elevators-travelators', 'Otis Elevator Company', 'https://via.placeholder.com/150x80?text=Otis'),
('elevators-travelators', 'Schindler Group', 'https://via.placeholder.com/150x80?text=Schindler'),
('fire-detection-protection', 'Honeywell Fire Safety', 'https://via.placeholder.com/150x80?text=Honeywell'),
('fire-detection-protection', 'Siemens Fire Systems', 'https://via.placeholder.com/150x80?text=Siemens'),
('generator', 'Caterpillar Power', 'https://via.placeholder.com/150x80?text=Caterpillar'),
('generator', 'Cummins Generators', 'https://via.placeholder.com/150x80?text=Cummins'),
('solar', 'SunPower Systems', 'https://via.placeholder.com/150x80?text=SunPower'),
('solar', 'Tesla Energy', 'https://via.placeholder.com/150x80?text=Tesla'),
('elv', 'Hikvision CCTV', 'https://via.placeholder.com/150x80?text=Hikvision'),
('elv', 'Cisco Networks', 'https://via.placeholder.com/150x80?text=Cisco'),
(NULL, 'MEP Contractors Association', 'https://via.placeholder.com/150x80?text=MEPCA'),
(NULL, 'Green Building Council', 'https://via.placeholder.com/150x80?text=GBC')
ON CONFLICT DO NOTHING;

-- Insert News Items
INSERT INTO news (title, summary, content, category, published_at, image_url) VALUES
('Metropolitan Wins Major MEP Engineering Award',
 'Our engineering division has been recognized with the prestigious MEP Contractor of the Year award for excellence in mechanical and electrical installations.',
 'We are thrilled to announce that Metropolitan Engineering has been awarded the MEP Contractor of the Year award by the National Engineering Association. This recognition celebrates our commitment to quality installations and exceptional project delivery. The award was presented at the annual industry gala, where our Smart Office Building project was highlighted as a prime example of innovative ELV systems integration. This achievement reflects the hard work and dedication of our entire team.',
 'Corporate',
 NOW() - INTERVAL '2 days',
 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800'),

('New Solar Energy Development Announced',
 'Metropolitan announces ambitious solar installation project for industrial zone.',
 'Metropolitan is excited to unveil plans for a groundbreaking 50MW solar farm project set to power an entire industrial zone. The project will feature cutting-edge photovoltaic technology, battery storage systems, and smart grid integration. Construction is scheduled to begin in Q2 2026, with completion expected by Q4 2026. The development will significantly reduce carbon emissions and provide clean energy to over 100 manufacturing facilities.',
 'Division Update',
 NOW() - INTERVAL '5 days',
 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800'),

('Fire Safety Excellence: Hospital Project Completed',
 'Our fire protection team successfully completes major healthcare facility project ahead of schedule.',
 'Metropolitan has successfully delivered a comprehensive fire detection and protection system for the new Medical City complex, a critical safety infrastructure project. The project was completed one month ahead of schedule and under budget, demonstrating our team''s expertise in complex fire safety challenges. The system features advanced smoke detection, automatic sprinklers, and integration with building management systems. This project ensures the safety of over 10,000 daily patients and staff.',
 'Division Update',
 NOW() - INTERVAL '1 week',
 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800'),

('Metropolitan Expands Service Coverage',
 'Company announces expansion into new regions with opening of service centers.',
 'Metropolitan is pleased to announce its expansion into three new regions, opening service centers in Abu Dhabi, Sharjah, and Al Ain. This strategic expansion reflects our continued growth and commitment to serving clients nationwide. Each new center will offer our full range of MEP services including HVAC, elevators, fire protection, generators, solar, and ELV systems. We are actively recruiting local talent to ensure we deliver the same high-quality service our clients expect.',
 'Corporate',
 NOW() - INTERVAL '10 days',
 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800'),

('Sustainability Initiative Launched',
 'Metropolitan commits to carbon-neutral operations by 2030 with new sustainability program.',
 'We are proud to launch our comprehensive sustainability initiative, committing to achieve carbon-neutral operations across all divisions by 2030. This program includes investments in renewable energy, sustainable practices, waste reduction, and green building systems. We have partnered with leading environmental organizations to ensure our goals are ambitious yet achievable. This initiative aligns with our corporate values and client demand for environmentally responsible engineering solutions.',
 'Corporate',
 NOW() - INTERVAL '2 weeks',
 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800')
ON CONFLICT DO NOTHING;

-- Insert Case Studies
INSERT INTO case_studies (title, client_name, summary, content, image_url, project_manager_name, project_manager_email, created_at) VALUES
('Smart Office Building Transformation',
 'TechCorp Industries',
 'A comprehensive ELV and building automation project transforming a conventional office into an intelligent workplace.',
 'TechCorp Industries approached us with a vision: transform their 30-story office building into a smart, connected workplace. Our team developed an innovative solution integrating all low-voltage systems into a unified building management platform.

 The project included: installing IP-based CCTV with AI analytics covering 500+ cameras, implementing biometric access control for 5,000 employees, deploying structured cabling infrastructure with Category 6A and fiber optics, and creating a centralized building automation system controlling HVAC, lighting, and security.

 We integrated all systems with a mobile app allowing facilities management to monitor and control building operations remotely. The 12-month project was completed on time and within the $8 million budget. The client now enjoys a fully automated, secure, and energy-efficient workplace.',
 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800',
 'Sarah Mitchell',
 'sarah.mitchell@metropolitan.com',
 NOW() - INTERVAL '30 days'),

('Green Campus Solar Installation',
 'Dubai University',
 'Development of a 5MW rooftop solar system achieving 80% energy independence for university campus.',
 'Dubai University partnered with Metropolitan to reduce their carbon footprint and energy costs through solar power. The project encompassed complete design-build services for rooftop solar installations across 15 campus buildings.

 Our engineering team designed an optimal layout maximizing solar generation while considering structural constraints. We installed 12,000 high-efficiency photovoltaic panels with micro-inverter technology for superior performance. A 2MWh battery storage system ensures power availability during evening hours.

 Smart monitoring systems provide real-time generation data accessible to students and faculty, serving as an educational resource. The solar farm integrates seamlessly with the campus grid through advanced inverters and automatic transfer systems.

 The $12 million project was delivered over 8 months, and the university now generates 80% of its electricity needs from clean solar energy, saving $1.5 million annually.',
 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800',
 'Michael Rodriguez',
 'michael.rodriguez@metropolitan.com',
 NOW() - INTERVAL '60 days'),

('Hospital Emergency Power System',
 'City Medical Center',
 'Design and installation of mission-critical backup power ensuring uninterrupted healthcare operations.',
 'City Medical Center required an ultra-reliable emergency power system to protect patients during power outages. We delivered a comprehensive N+1 redundant generator solution with automatic failover.

 The system includes: three 2MW diesel generators with automatic transfer switches, uninterruptible power supply (UPS) systems for critical care areas, intelligent load shedding to prioritize life-safety systems, and 24/7 remote monitoring with instant alerts.

 Our team coordinated complex installations around operational hospital areas, completing all work without disrupting patient care. Advanced control systems ensure seamless power transfer in under 10 seconds.

 The system undergoes monthly automatic tests and includes fuel storage for 72 hours of continuous operation. This $6 million project demonstrates our expertise in mission-critical power systems and has been tested successfully during three power outages.',
 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800',
 'Jennifer Chang',
 'jennifer.chang@metropolitan.com',
 NOW() - INTERVAL '90 days'),

('Mall HVAC Modernization',
 'Emirates Shopping Center',
 'Complete central AC system upgrade reducing energy costs by 40% while improving comfort.',
 'Emirates Shopping Center engaged Metropolitan to modernize their aging HVAC system which was inefficient and causing high operating costs. This complex project required careful planning to minimize disruption to mall operations.

 Our solution replaced the old chiller plant with high-efficiency magnetic bearing chillers, installed variable frequency drives on all pumps and fans, implemented zone-based temperature control for different areas, and integrated the HVAC system with the building management system for optimal efficiency.

 Advanced controls use occupancy sensors and CO2 monitoring to adjust airflow based on real-time needs. We completed the work in phases, working during night hours to avoid impacting shoppers and tenants.

 The 6-month, $15 million project has reduced energy consumption by 40%, saving the mall $2 million annually in electricity costs. Indoor air quality has improved significantly, and tenant satisfaction scores have increased by 25%.',
 'https://images.unsplash.com/photo-1604357209793-fca5dca89f97?w=800',
 'David Park',
 'david.park@metropolitan.com',
 NOW() - INTERVAL '120 days')
ON CONFLICT DO NOTHING;

-- Insert Job Openings
INSERT INTO jobs (title, department, location, description, requirements, posted_at) VALUES
('Senior HVAC Engineer',
 'Central AC',
 'Dubai, UAE',
 'We are seeking an experienced HVAC Engineer to design and oversee central air conditioning systems for large-scale commercial projects. You will be responsible for system design, equipment selection, energy analysis, and project coordination.

 Responsibilities:
 - Design central AC systems for commercial and residential buildings
 - Perform load calculations and energy modeling
 - Select equipment and prepare specifications
 - Coordinate with architects and other engineers
 - Review shop drawings and submittals
 - Conduct site visits and inspections
 - Ensure designs meet local codes and energy standards',
 'Requirements:
 - Bachelor''s degree in Mechanical Engineering
 - 8+ years of HVAC design experience
 - Experience with large commercial projects
 - Proficiency in HAP, Revit MEP, AutoCAD
 - Knowledge of UAE building codes
 - Strong problem-solving and technical skills
 - Excellent communication abilities
 - PE or chartered engineer status preferred',
 NOW() - INTERVAL '3 days'),

('Elevator Technician',
 'Elevators and Travelators',
 'Abu Dhabi, UAE',
 'Join our elevator maintenance team to service and repair vertical transportation systems. You will perform preventive maintenance, troubleshoot issues, and ensure safe elevator operations.

 Responsibilities:
 - Perform routine maintenance on elevators and escalators
 - Diagnose and repair mechanical and electrical issues
 - Respond to emergency service calls
 - Maintain service records and documentation
 - Ensure compliance with safety regulations
 - Coordinate with building management
 - Recommend upgrades and improvements',
 'Requirements:
 - Technical diploma in Electrical/Mechanical Engineering
 - 5+ years of elevator maintenance experience
 - Knowledge of Otis, Schindler, or KONE systems
 - Electrical troubleshooting skills
 - Valid UAE driver''s license
 - Ability to work on-call rotation
 - Physical fitness for climbing and lifting
 - Safety certification preferred',
 NOW() - INTERVAL '5 days'),

('Fire Protection Engineer',
 'Fire Detection & Protection',
 'Sharjah, UAE',
 'We are looking for a Fire Protection Engineer to design fire safety systems for buildings and industrial facilities. You will ensure compliance with codes and develop effective fire protection solutions.

 Responsibilities:
 - Design fire detection and suppression systems
 - Perform hydraulic calculations for sprinkler systems
 - Prepare engineering drawings and specifications
 - Coordinate with authorities having jurisdiction
 - Review and approve shop drawings
 - Conduct system commissioning and testing
 - Provide technical support during construction',
 'Requirements:
 - Bachelor''s degree in Fire Protection or Mechanical Engineering
 - 5+ years of fire protection system design
 - Knowledge of NFPA codes and UAE Civil Defense requirements
 - Proficiency in AutoSPRINK, Revit, AutoCAD
 - Experience with various suppression systems
 - Strong analytical and calculation skills
 - Excellent report writing abilities
 - NICET or equivalent certification preferred',
 NOW() - INTERVAL '1 week'),

('Solar Project Manager',
 'Solar',
 'Dubai, UAE',
 'Seeking an experienced Project Manager to lead solar installation projects from design through commissioning. You will manage teams, budgets, and ensure successful project delivery.

 Responsibilities:
 - Manage solar installation projects end-to-end
 - Coordinate with clients, contractors, and authorities
 - Develop project schedules and monitor progress
 - Manage project budgets and resources
 - Ensure quality and safety standards
 - Resolve technical and commercial issues
 - Prepare project reports and documentation',
 'Requirements:
 - Bachelor''s degree in Engineering or related field
 - 6+ years of solar project management experience
 - Experience with utility-scale and rooftop solar projects
 - Knowledge of PV technology and electrical systems
 - Strong leadership and team management skills
 - PMP certification preferred
 - Proficiency in MS Project and Primavera
 - Understanding of UAE solar regulations',
 NOW() - INTERVAL '10 days'),

('ELV Systems Engineer',
 'ELV',
 'Dubai, UAE',
 'Join our ELV team to design and implement low-voltage systems including security, networking, and building automation. Entry to mid-level opportunity for motivated engineers.

 Responsibilities:
 - Design CCTV, access control, and BMS systems
 - Prepare system architecture and drawings
 - Coordinate structured cabling installations
 - Program and configure ELV systems
 - Conduct system testing and commissioning
 - Provide technical support and training
 - Stay current with technology trends',
 'Requirements:
 - Bachelor''s degree in Electrical/Electronics Engineering
 - 3-5 years of ELV systems experience
 - Knowledge of IP networks and protocols
 - Proficiency in AutoCAD and Visio
 - Experience with Hikvision, Honeywell, or similar systems
 - Programming skills (C++, Python) a plus
 - Strong problem-solving abilities
 - Vendor certifications preferred',
 NOW() - INTERVAL '2 weeks')
ON CONFLICT DO NOTHING;

-- Note: Sample inquiry and job application data is not included as these would typically
-- be user-generated content and should be empty on initial setup
