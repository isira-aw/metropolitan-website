-- This file will be executed on application startup
-- It will only insert data if the tables are empty

-- Clear existing data (optional - comment out if you want to preserve data)
-- TRUNCATE TABLE job_applications, jobs, testimonials, services, projects, partners, divisions, case_studies, news, inquiries CASCADE;

-- Insert Divisions
INSERT INTO divisions (id, name, slug, description, hero_image_url) VALUES
(1, 'Construction', 'construction', 'Leading construction services with over 20 years of experience in residential and commercial projects.', 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800'),
(2, 'Real Estate', 'real-estate', 'Premium real estate development and property management services across metropolitan areas.', 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800'),
(3, 'Engineering', 'engineering', 'Innovative engineering solutions for complex infrastructure and industrial projects.', 'https://images.unsplash.com/photo-1581094794329-c8112c4e5190?w=800'),
(4, 'Architecture', 'architecture', 'Award-winning architectural design and planning services for modern developments.', 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800')
ON CONFLICT (id) DO NOTHING;

-- Reset sequence for divisions
SELECT setval('divisions_id_seq', (SELECT MAX(id) FROM divisions));

-- Insert Services for each division
INSERT INTO services (division_id, title, description, icon) VALUES
-- Construction services
(1, 'Residential Construction', 'Custom home building and renovation services with attention to detail and quality craftsmanship.', 'Home'),
(1, 'Commercial Construction', 'Large-scale commercial building projects including offices, retail spaces, and industrial facilities.', 'Building2'),
(1, 'Project Management', 'Comprehensive project management services ensuring timely delivery and budget compliance.', 'ClipboardCheck'),
(1, 'Quality Assurance', 'Rigorous quality control processes to ensure the highest standards in construction.', 'ShieldCheck'),

-- Real Estate services
(2, 'Property Development', 'End-to-end property development from land acquisition to final handover.', 'Building'),
(2, 'Property Management', 'Professional property management services for residential and commercial properties.', 'Key'),
(2, 'Sales & Leasing', 'Expert real estate sales and leasing services with market-leading expertise.', 'TrendingUp'),
(2, 'Investment Consulting', 'Strategic real estate investment advice and portfolio management.', 'PieChart'),

-- Engineering services
(3, 'Structural Engineering', 'Advanced structural design and analysis for safe and efficient buildings.', 'Construction'),
(3, 'Civil Engineering', 'Comprehensive civil engineering solutions for infrastructure projects.', 'HardHat'),
(3, 'MEP Engineering', 'Mechanical, Electrical, and Plumbing engineering services.', 'Zap'),
(3, 'Sustainability Solutions', 'Green engineering and sustainable design solutions.', 'Leaf'),

-- Architecture services
(4, 'Architectural Design', 'Innovative architectural design creating functional and aesthetic spaces.', 'PenTool'),
(4, 'Interior Design', 'Complete interior design services for residential and commercial spaces.', 'Palette'),
(4, 'Urban Planning', 'Strategic urban planning and development consulting services.', 'Map'),
(4, 'Landscape Architecture', 'Beautiful and sustainable landscape design and planning.', 'TreePine')
ON CONFLICT DO NOTHING;

-- Insert Testimonials
INSERT INTO testimonials (division_id, client_name, company, content, rating) VALUES
(1, 'John Smith', 'ABC Corporation', 'Metropolitan Construction delivered our office building ahead of schedule and within budget. Their professionalism and quality of work exceeded our expectations.', 5),
(1, 'Sarah Johnson', 'Tech Innovations Ltd', 'Outstanding work on our new facility. The team was responsive, professional, and delivered exceptional results.', 5),
(2, 'Michael Chen', 'Global Investments', 'Their real estate expertise helped us identify and acquire prime properties. Highly recommended!', 5),
(2, 'Emily Davis', 'Retail Partners Inc', 'Excellent property management services. They handle everything with professionalism and care.', 4),
(3, 'Robert Wilson', 'Infrastructure Corp', 'The engineering team solved complex structural challenges with innovative solutions. Truly impressive.', 5),
(3, 'Lisa Anderson', 'Green Energy Ltd', 'Their sustainable engineering approach helped us achieve our environmental goals while staying on budget.', 5),
(4, 'David Martinez', 'Luxury Residences', 'The architectural designs transformed our vision into stunning reality. Creative and practical.', 5),
(4, 'Jennifer Lee', 'Urban Developers', 'Exceptional urban planning services that balanced aesthetics with functionality perfectly.', 5)
ON CONFLICT DO NOTHING;

-- Insert Projects
INSERT INTO projects (division_id, title, description, image_url) VALUES
(1, 'Downtown Office Complex', 'A 12-story modern office building featuring sustainable design and state-of-the-art facilities.', 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600'),
(1, 'Riverside Residential', 'Luxury residential complex with 200 units overlooking the city waterfront.', 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600'),
(1, 'Metro Shopping Center', 'Regional shopping center spanning 500,000 sq ft with retail and entertainment spaces.', 'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=600'),
(2, 'Skyline Towers', 'Twin residential towers with premium amenities and panoramic city views.', 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600'),
(2, 'Heritage Plaza', 'Mixed-use development combining retail, office, and residential spaces.', 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600'),
(3, 'City Bridge Project', 'Major infrastructure project connecting two city districts with modern bridge design.', 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600'),
(3, 'Green Technology Hub', 'Sustainable campus design for technology companies with LEED Platinum certification.', 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600'),
(4, 'Museum of Modern Art', 'Contemporary museum design featuring innovative use of space and natural light.', 'https://images.unsplash.com/photo-1554907984-15263bfd63bd?w=600'),
(4, 'Waterfront Promenade', 'Urban regeneration project creating public spaces along the waterfront.', 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=600')
ON CONFLICT DO NOTHING;

-- Insert Partners
INSERT INTO partners (division_id, name, logo_url) VALUES
(1, 'BuildTech Solutions', 'https://via.placeholder.com/150x80?text=BuildTech'),
(1, 'SafetyFirst Equipment', 'https://via.placeholder.com/150x80?text=SafetyFirst'),
(2, 'Premier Realty Group', 'https://via.placeholder.com/150x80?text=Premier'),
(2, 'Investment Partners LLC', 'https://via.placeholder.com/150x80?text=Investment'),
(3, 'Engineering Excellence', 'https://via.placeholder.com/150x80?text=Engineering'),
(3, 'SustainTech Systems', 'https://via.placeholder.com/150x80?text=SustainTech'),
(4, 'Design Studio Pro', 'https://via.placeholder.com/150x80?text=DesignStudio'),
(4, 'Urban Innovations', 'https://via.placeholder.com/150x80?text=Urban'),
(NULL, 'Global Construction Alliance', 'https://via.placeholder.com/150x80?text=GCA'),
(NULL, 'Industry Standards Board', 'https://via.placeholder.com/150x80?text=ISB')
ON CONFLICT DO NOTHING;

-- Insert News Items
INSERT INTO news (title, summary, content, category, published_at, image_url) VALUES
('Metropolitan Wins Major Construction Award',
 'Our construction division has been recognized with the prestigious Builder of the Year award for excellence in sustainable construction.',
 'We are thrilled to announce that Metropolitan Construction has been awarded the Builder of the Year award by the National Construction Association. This recognition celebrates our commitment to sustainable building practices and exceptional project delivery. The award was presented at the annual industry gala, where our Downtown Office Complex project was highlighted as a prime example of innovative green construction. This achievement reflects the hard work and dedication of our entire team.',
 'Corporate',
 NOW() - INTERVAL '2 days',
 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800'),

('New Real Estate Development Announced',
 'Metropolitan Real Estate announces ambitious new residential development project in the city center.',
 'Metropolitan Real Estate is excited to unveil plans for Skyline Heights, a groundbreaking residential development set to transform the city skyline. The project will feature two 40-story towers with 500 luxury apartments, state-of-the-art amenities, and sustainable design elements. Construction is scheduled to begin in Q2 2026, with completion expected by 2028. The development will include retail spaces, green parks, and community facilities, creating a vibrant urban living experience.',
 'Division Update',
 NOW() - INTERVAL '5 days',
 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800'),

('Engineering Excellence: Metro Bridge Project Completed',
 'Our engineering team successfully completes major infrastructure project ahead of schedule.',
 'Metropolitan Engineering has successfully delivered the Metro Bridge Project, a critical infrastructure improvement connecting two major city districts. The project was completed two months ahead of schedule and under budget, demonstrating our team''s expertise in complex engineering challenges. The bridge features innovative structural design, smart traffic management systems, and pedestrian-friendly walkways. This project enhances connectivity for over 50,000 daily commuters.',
 'Division Update',
 NOW() - INTERVAL '1 week',
 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800'),

('Metropolitan Expands to Three New Cities',
 'Company announces expansion into new markets with opening of regional offices.',
 'Metropolitan is pleased to announce its expansion into three new metropolitan areas, opening regional offices in Chicago, Houston, and Seattle. This strategic expansion reflects our continued growth and commitment to serving clients nationwide. Each new office will offer our full range of construction, real estate, engineering, and architectural services. We are actively recruiting local talent and partnering with established firms in each market to ensure we deliver the same high-quality service our clients expect.',
 'Corporate',
 NOW() - INTERVAL '10 days',
 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800'),

('Sustainability Initiative Launched',
 'Metropolitan commits to carbon-neutral operations by 2030 with new sustainability program.',
 'We are proud to launch our comprehensive sustainability initiative, committing to achieve carbon-neutral operations across all divisions by 2030. This program includes investments in renewable energy, sustainable materials, waste reduction, and green building practices. We have partnered with leading environmental organizations to ensure our goals are ambitious yet achievable. This initiative aligns with our corporate values and client demand for environmentally responsible development.',
 'Corporate',
 NOW() - INTERVAL '2 weeks',
 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800')
ON CONFLICT DO NOTHING;

-- Insert Case Studies
INSERT INTO case_studies (title, client_name, summary, content, image_url, project_manager_name, project_manager_email, created_at) VALUES
('Downtown Office Complex Transformation',
 'TechCorp Industries',
 'A comprehensive renovation of a historic downtown building into a modern tech campus while preserving architectural heritage.',
 'TechCorp Industries approached us with a unique challenge: transform a 1920s historic building into a cutting-edge technology campus while maintaining its architectural integrity. Our team developed an innovative solution that preserved the building''s facade and key historical elements while completely modernizing the interior.

 The project included: installing advanced HVAC and electrical systems, creating open-plan collaborative workspaces, implementing smart building technology, and achieving LEED Gold certification. We worked closely with historic preservation boards to ensure all modifications met strict heritage guidelines.

 The 18-month project was completed on time and within the $45 million budget. The client now enjoys a 150,000 sq ft workspace that combines historic charm with modern functionality, housing over 800 employees.',
 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
 'Sarah Mitchell',
 'sarah.mitchell@metropolitan.com',
 NOW() - INTERVAL '30 days'),

('Riverside Luxury Residences',
 'Prestige Property Developers',
 'Development of an ultra-luxury residential complex featuring 200 high-end units with premium amenities.',
 'Prestige Property Developers partnered with Metropolitan to create an exclusive residential community targeting high-net-worth individuals. The project encompassed complete design-build services across all our divisions.

 Our architecture team designed elegant residences ranging from 2,000 to 6,000 sq ft, each with private terraces and river views. The engineering team implemented advanced structural solutions to maximize natural light and views. Construction was executed to the highest standards with premium finishes throughout.

 Amenities include: infinity pool, state-of-the-art fitness center, private cinema, concierge services, and beautifully landscaped grounds. Smart home technology is integrated throughout, allowing residents to control all systems via mobile apps.

 The $120 million project was delivered over 24 months, with 95% of units sold within 6 months of completion.',
 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
 'Michael Rodriguez',
 'michael.rodriguez@metropolitan.com',
 NOW() - INTERVAL '60 days'),

('Green Technology Campus',
 'EcoTech Solutions',
 'Design and construction of a carbon-neutral corporate campus showcasing sustainable building practices.',
 'EcoTech Solutions wanted their new headquarters to embody their environmental values. We delivered a groundbreaking 200,000 sq ft campus that achieved Carbon Neutral certification.

 Sustainable features include: rooftop solar panels generating 80% of energy needs, rainwater harvesting systems, green roofs, natural ventilation, and extensive use of recycled materials. The building management system uses AI to optimize energy consumption in real-time.

 Our landscape architects created native gardens that support local biodiversity while requiring minimal water. The campus includes electric vehicle charging stations, bike facilities, and direct access to public transportation.

 This $85 million project demonstrates that sustainability and functionality can coexist beautifully. It has become a model for corporate campuses nationwide and won multiple green building awards.',
 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
 'Jennifer Chang',
 'jennifer.chang@metropolitan.com',
 NOW() - INTERVAL '90 days'),

('Metro Shopping District Revitalization',
 'City Development Authority',
 'A public-private partnership to revitalize a declining shopping district into a vibrant mixed-use destination.',
 'The City Development Authority engaged Metropolitan to lead the transformation of a deteriorating 1970s shopping area into a modern mixed-use district. This complex project required coordination with multiple stakeholders including city officials, existing tenants, and community groups.

 Our solution created a vibrant 24/7 destination combining retail, dining, entertainment, office space, and residential units. We preserved several historic facades while adding contemporary elements. The design emphasizes pedestrian-friendly spaces with wide walkways, public art, and green spaces.

 Key features: 500,000 sq ft of retail space, 300 apartments, 200,000 sq ft of office space, underground parking for 2,000 vehicles, and a central plaza for community events. Advanced infrastructure supports the district''s diverse needs.

 The 3-year, $250 million project has revitalized the entire neighborhood, increasing property values by 40% and creating 3,000 permanent jobs.',
 'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=800',
 'David Park',
 'david.park@metropolitan.com',
 NOW() - INTERVAL '120 days')
ON CONFLICT DO NOTHING;

-- Insert Job Openings
INSERT INTO jobs (title, department, location, description, requirements, posted_at) VALUES
('Senior Construction Manager',
 'Construction',
 'New York, NY',
 'We are seeking an experienced Construction Manager to oversee large-scale commercial construction projects. You will be responsible for managing project teams, coordinating with subcontractors, ensuring quality standards, and delivering projects on time and within budget.

 Responsibilities:
 - Manage all phases of construction projects from planning to completion
 - Coordinate with architects, engineers, and subcontractors
 - Monitor project budgets and schedules
 - Ensure compliance with safety regulations and building codes
 - Resolve construction challenges and conflicts
 - Maintain relationships with clients and stakeholders',
 'Requirements:
 - Bachelor''s degree in Construction Management, Civil Engineering, or related field
 - 8+ years of construction management experience
 - Experience with commercial projects over $50M
 - Strong knowledge of construction methods and materials
 - Excellent leadership and communication skills
 - PMP or CCM certification preferred
 - Proficiency in project management software (Procore, MS Project)
 - Valid driver''s license and ability to travel to job sites',
 NOW() - INTERVAL '3 days'),

('Real Estate Investment Analyst',
 'Real Estate',
 'Chicago, IL',
 'Join our real estate investment team to analyze potential property acquisitions and developments. You will conduct financial modeling, market research, and due diligence to support our investment decisions.

 Responsibilities:
 - Perform financial analysis on potential real estate investments
 - Create detailed financial models and investment memorandums
 - Conduct market research and competitive analysis
 - Coordinate due diligence processes
 - Prepare presentations for investment committees
 - Monitor portfolio performance and market trends',
 'Requirements:
 - Bachelor''s degree in Finance, Real Estate, or related field
 - 3-5 years of real estate investment or financial analysis experience
 - Strong financial modeling skills (Excel, Argus)
 - Knowledge of real estate markets and valuation methods
 - Excellent analytical and communication skills
 - CFA or MRICS designation preferred
 - Detail-oriented with strong organizational skills',
 NOW() - INTERVAL '5 days'),

('Structural Engineer',
 'Engineering',
 'San Francisco, CA',
 'We are looking for a talented Structural Engineer to join our engineering team. You will design structural systems for buildings and infrastructure projects, ensuring safety, efficiency, and innovation.

 Responsibilities:
 - Design structural systems for buildings and infrastructure
 - Perform structural analysis and calculations
 - Prepare engineering drawings and specifications
 - Coordinate with architects and other engineers
 - Review construction documents and shop drawings
 - Conduct site visits and inspections
 - Ensure designs meet building codes and standards',
 'Requirements:
 - Bachelor''s degree in Civil/Structural Engineering (Master''s preferred)
 - PE license required
 - 5+ years of structural engineering experience
 - Proficiency in structural analysis software (ETABS, SAP2000, Revit)
 - Experience with steel, concrete, and timber design
 - Strong problem-solving and technical skills
 - Excellent communication and teamwork abilities',
 NOW() - INTERVAL '1 week'),

('Architect - Commercial Projects',
 'Architecture',
 'Los Angeles, CA',
 'Seeking a creative and experienced Architect to lead design on commercial and mixed-use projects. You will be involved in all project phases from concept through construction.

 Responsibilities:
 - Develop architectural concepts and design solutions
 - Prepare design presentations and construction documents
 - Coordinate with clients, consultants, and contractors
 - Lead design team members and review their work
 - Ensure designs meet code requirements and client needs
 - Stay current with architectural trends and sustainable design',
 'Requirements:
 - Professional degree in Architecture
 - Licensed Architect (RA)
 - 7+ years of experience in commercial architecture
 - Proficiency in Revit, AutoCAD, SketchUp, Adobe Creative Suite
 - Strong design portfolio demonstrating creativity
 - Experience with LEED or sustainable design preferred
 - Excellent presentation and client communication skills
 - Leadership ability and team collaboration mindset',
 NOW() - INTERVAL '10 days'),

('Project Coordinator',
 'Construction',
 'Boston, MA',
 'Entry-level opportunity for a motivated individual to join our construction team. You will support project managers in coordinating construction activities and ensuring smooth project execution.

 Responsibilities:
 - Assist project managers with daily coordination
 - Maintain project documentation and files
 - Track project schedules and submittals
 - Coordinate meetings and site logistics
 - Communicate with subcontractors and vendors
 - Help prepare project reports and updates',
 'Requirements:
 - Bachelor''s degree in Construction Management, Engineering, or related field
 - 0-2 years of construction experience (internships count)
 - Strong organizational and multitasking abilities
 - Proficiency in MS Office (Excel, Word, PowerPoint)
 - Excellent written and verbal communication
 - Eager to learn and detail-oriented
 - Ability to work in fast-paced environment',
 NOW() - INTERVAL '2 weeks')
ON CONFLICT DO NOTHING;

-- Note: Sample inquiry and job application data is not included as these would typically
-- be user-generated content and should be empty on initial setup
