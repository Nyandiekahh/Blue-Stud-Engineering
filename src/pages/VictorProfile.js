import React from 'react';

const VictorProfile = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg className="w-16 h-16 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h1 className="text-5xl font-bold mb-4">Victor Odhiambo Omondi</h1>
            <h2 className="text-2xl text-blue-100 mb-6">Electrical Engineer</h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              Results-oriented Electrical Engineer with over ten years of experience in design, supervision, 
              installation, testing, troubleshooting, and commissioning medium to high-voltage power generating 
              and distribution systems.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Personal Information</h2>
              <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Full Name</p>
                    <p className="text-gray-900">Victor Odhiambo Omondi</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Date of Birth</p>
                    <p className="text-gray-900">August 6, 1989</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Nationality</p>
                    <p className="text-gray-900">Kenyan</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Gender</p>
                    <p className="text-gray-900">Male</p>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Email</p>
                      <p className="text-blue-600">odhiamboomondi07@gmail.com</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Phone</p>
                      <p className="text-gray-900">+254 727 824 266</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Address</p>
                      <p className="text-gray-900">13468 – 00100 Nairobi, KENYA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Professional Profile</h2>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  Results-oriented Electrical Engineer with over ten years of experience in design, supervision, 
                  installation, testing, troubleshooting, and commissioning medium to high-voltage power generating 
                  and distribution systems. Skilled in facilities management, people management, and project management. 
                  Seeking a challenging environment to leverage expertise in leadership, people management and mentorship, 
                  organization operations, renewable energy, and emerging opportunities in sustainable energy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Education</h2>
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">Bachelor of Science in Electrical and Electronics Engineering</h3>
                  <p className="text-blue-600 font-medium">Jomo Kenyatta University of Agriculture and Technology, Nairobi, KENYA</p>
                  <p className="text-gray-600">August 2009 – November 2014</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">Secondary School Certification</h3>
                  <p className="text-green-600 font-medium">Aquinas High School, Nairobi, KENYA</p>
                  <p className="text-gray-600">February 2004 – November 2007</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Qualifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Professional Qualifications & Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-blue-600">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Engineers Board of Kenya (E.B.K)</h3>
              <p className="text-blue-600 font-medium">Graduate Member</p>
              <p className="text-gray-600">2015</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-green-600">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Institute of Engineers of Kenya (I.E.K)</h3>
              <p className="text-green-600 font-medium">Graduate Member</p>
              <p className="text-gray-600">2023</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-purple-600">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Project Management Institute (PMI)</h3>
              <p className="text-purple-600 font-medium">Member</p>
              <p className="text-gray-600">2022</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-indigo-600">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Project Management Professional (PMP®)</h3>
              <p className="text-indigo-600 font-medium">Certified</p>
              <p className="text-gray-600">2022</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-red-600">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Licensed Electrician, Class C1</h3>
              <p className="text-red-600 font-medium">Energy and Petroleum Regulatory Authority (E.P.R.A)</p>
              <p className="text-gray-600">2017</p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Professional Work Experience</h2>
          
          <div className="space-y-12">
            {/* Current Position */}
            <div className="bg-blue-50 rounded-lg p-8 border-l-4 border-blue-600">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Project Engineer – Part time</h3>
                  <p className="text-blue-600 text-xl font-semibold">Marcus Miles Consult Limited, Nairobi, KENYA</p>
                </div>
                <span className="text-gray-600 font-medium bg-white px-3 py-1 rounded-full">September 2023 – Current</span>
              </div>
              
              <div className="space-y-3">
                <p className="text-gray-700">• Assessment and auditing of various energy systems and hybrid installations (solar power systems, grid power, and diesel generator systems)</p>
                <p className="text-gray-700">• Design and impact analysis on reducing greenhouse gas (GHG) emissions for solar PV system installations</p>
                <p className="text-gray-700">• Prepare financial proposals, ROI calculations, and payback period analysis for solar projects</p>
                <p className="text-gray-700">• Design solar PV systems based on client needs and power requirements</p>
                <p className="text-gray-700">• Generate project documents, work plans, CAD drawings, cable schedules, project reports, and budget estimates</p>
                <p className="text-gray-700">• Train, mentor, and supervise field staff on installation, testing, and commissioning works</p>
              </div>
            </div>

            {/* MONUSCO Position */}
            <div className="bg-green-50 rounded-lg p-8 border-l-4 border-green-600">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Electrical Engineer, Supervisor: Electrical-Mechanical Unit</h3>
                  <p className="text-green-600 text-xl font-semibold">United Nations Organization Stabilization Mission in the DR Congo (MONUSCO), Entebbe, UGANDA</p>
                </div>
                <span className="text-gray-600 font-medium bg-white px-3 py-1 rounded-full">June 2019 – June 2023</span>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Responsibilities:</h4>
                <div className="space-y-2">
                  <p className="text-gray-700">• Directed, planned, coordinated, and supervised a multidisciplinary team of 23 specialists</p>
                  <p className="text-gray-700">• Managed generator, electrical, and HVAC maintenance services at Entebbe Support Base facility</p>
                  <p className="text-gray-700">• Oversaw 11kV medium voltage line and low voltage power system serving over 500 clients</p>
                  <p className="text-gray-700">• Managed 50,000 square meters of built-up area including office blocks, banking facilities, training facilities, data & I.C.T. server center</p>
                  <p className="text-gray-700">• Supervised centralized power distribution and generator backup system with 4,500 kVA synchronized capacity</p>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-gray-700">• Achieved 30% savings in facility energy consumption</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-gray-700">• Realized zero injuries and zero downtime</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-gray-700">• Completed projects valued US$ 5,000 – US$ 450,000</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-gray-700">• Reduced equipment downtime by 50% with IoT technology</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ABB Position */}
            <div className="bg-yellow-50 rounded-lg p-8 border-l-4 border-yellow-600">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Service Engineer</h3>
                  <p className="text-yellow-600 text-xl font-semibold">ABB Kenya Limited, Nairobi, KENYA</p>
                </div>
                <span className="text-gray-600 font-medium bg-white px-3 py-1 rounded-full">September 2014 – May 2019</span>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Responsibilities:</h4>
                <div className="space-y-2">
                  <p className="text-gray-700">• Coordinated service department works with supervision of implementation teams</p>
                  <p className="text-gray-700">• Managed quality control processes using standard documents and KPIs</p>
                  <p className="text-gray-700">• Prepared work plans, CAD drawings, cable schedules, project budgets, and test schedules</p>
                  <p className="text-gray-700">• Conducted installation, testing, commissioning, and maintenance of various electrical systems</p>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Major Projects:</h4>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg">
                    <h5 className="font-semibold">10MVA, 66kV/33kV Magadi substation (2014)</h5>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h5 className="font-semibold">23MVA, 132kV/33kV Awendo substation (2015)</h5>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h5 className="font-semibold">23MVA, 132kV/33kV Kitale substation (2016)</h5>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h5 className="font-semibold">Juja 132kV/66kV/11kV Substation upgrade to G.I.S. system</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills and Software */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical & Soft Skills</h2>
              <div className="space-y-4">
                {[
                  'Electrical design', 'Renewable energy', 'Facilities management',
                  'Project management', 'People management', 'Planning and organizing',
                  'Communication', 'Presentation and report writing', 'Root cause analysis',
                  'Diagnosis', 'Quality control', 'Testing and commissioning',
                  'Supervisory and Mentorship', 'Budgeting', 'Problem solving'
                ].map((skill, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Software Proficiency</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'AutoCAD (Electrical & MEP)', 'ArchiCAD', 'ETAP', 'ReluxCAD',
                  'HOMER', 'RETScreen', 'PVSyst', 'UpKeep CMMS',
                  'FRIM', 'AcuCloud', 'Microsoft Office Suite', 'Microsoft Power BI'
                ].map((software, index) => (
                  <div key={index} className="bg-white p-3 rounded-lg border border-gray-200 text-center">
                    <span className="text-gray-700 font-medium">{software}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications and Languages */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Publications & Presentations</h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Publication</h3>
                  <p className="text-gray-700">
                    <strong>Saulo, M. J. and Omondi, V. O. (2015).</strong> "Design and Analysis of Solar Energy Mini-Grid for Rural Electrification." 
                    <em> Open Access Library Journal</em>
                  </p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Conference Presentation</h3>
                  <p className="text-gray-700">
                    <strong>Kenya Society of Electrical and Electronics Engineers (K.S.E.E.E) annual conference – 2014.</strong> 
                    Presented publication on "Design and Analysis of Solar Energy Mini-Grid for Rural Electrification"
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Languages</h2>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">English</h3>
                    <span className="text-blue-600 font-medium">C1</span>
                  </div>
                  <p className="text-gray-600">Professional Proficiency</p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">Swahili/Kiswahili</h3>
                    <span className="text-green-600 font-medium">C1</span>
                  </div>
                  <p className="text-gray-600">Native Proficiency</p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '100%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VictorProfile;