import React from 'react';

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Our Core Services</h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              Comprehensive electrical engineering solutions from LV to HV systems design, installation, testing, and maintenance
            </p>
          </div>
        </div>
      </section>

      {/* Service 1: Power Systems Design */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <span className="bg-blue-600 text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center mr-4">01</span>
                <h2 className="text-4xl font-bold text-gray-900">Power Systems Design</h2>
              </div>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Services in LV, MV, and HV engineering and design of power systems and renewables. 
                Our team comprises highly skilled engineers with vast experience in comprehensive 
                electrical system design from concept to completion.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Engineering, installation, testing, commissioning, protection and automation of electrical power systems</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Substation design and layout optimization</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Renewable energy systems integration</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Load flow analysis and fault studies</span>
                </div>
              </div>
            </div>
            
            <div>
              {/* Placeholder for engineers on drawing table photo */}
              <div className="bg-gray-300 h-96 rounded-lg shadow-xl flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <p className="text-lg font-semibold">Engineers on Drawing Table</p>
                  <p className="text-sm">Professional design collaboration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2: Installation and Construction */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <div className="flex items-center mb-6">
                <span className="bg-blue-600 text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center mr-4">02</span>
                <h2 className="text-4xl font-bold text-gray-900">Installation & Construction</h2>
              </div>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Execute turnkey substation projects and distribution lines installation with our team of 
                experienced technicians and site managers with more than 10 years' field experience.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">LV, MV & HV Switchgears</h4>
                  <p className="text-sm text-gray-600">Complete switchgear installation and commissioning</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Transformers</h4>
                  <p className="text-sm text-gray-600">Power and distribution transformer installation</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Air Insulated Switchgears (AIS)</h4>
                  <p className="text-sm text-gray-600">AIS systems for outdoor applications</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Gas Insulated Switchgears (GIS)</h4>
                  <p className="text-sm text-gray-600">132KV/66KV/11KV GIS installations</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <p className="text-gray-700">• Ring Main Units (RMUs)</p>
                <p className="text-gray-700">• Motor Control Centers (MCC)</p>
                <p className="text-gray-700">• Soft starters</p>
                <p className="text-gray-700">• Distribution lines installation</p>
              </div>
            </div>
            
            <div className="lg:order-1">
              {/* Placeholder for transformer crane installation photo */}
              <div className="bg-gray-300 h-96 rounded-lg shadow-xl flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                  <p className="text-lg font-semibold">Transformer Crane Installation</p>
                  <p className="text-sm">Heavy equipment installation expertise</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3: Testing and Commissioning Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <span className="bg-blue-600 text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center mr-4">03</span>
                <h2 className="text-4xl font-bold text-gray-900">Testing & Commissioning Services</h2>
              </div>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our team of five experienced engineers with more than a decade of experience ensures 
                comprehensive testing and commissioning. All engineers hold BSc Degrees in Electrical 
                Engineering and are members of the Engineers Board of Kenya (EBK) and the Institute 
                of Engineers of Kenya (IEK).
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="text-xl font-semibold text-blue-900 mb-4">Specialized Expertise</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Power systems protection commissioning</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Automation systems integration</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Distributed generation systems</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">IEC61850 integration</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600">
                <strong>Industry Experience:</strong> Our team has extensive experience working with 
                industry giants like ABB and Schneider Electric, bringing world-class expertise to every project.
              </p>
            </div>
            
            <div>
              {/* Placeholder for Edmund in green vest testing photo */}
              <div className="bg-gray-300 h-96 rounded-lg shadow-xl flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <p className="text-lg font-semibold">Edmund Green Vest Testing</p>
                  <p className="text-sm">Professional testing and commissioning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 4: Maintenance, Rehabilitation and Repair */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <div className="flex items-center mb-6">
                <span className="bg-blue-600 text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center mr-4">04</span>
                <h2 className="text-4xl font-bold text-gray-900">Maintenance, Rehabilitation & Repair</h2>
              </div>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Comprehensive maintenance, rehabilitation and repair services to ensure optimal 
                performance and extended lifespan of electrical infrastructure.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Case Examples</h4>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-600">
                      <h5 className="font-semibold text-gray-900 mb-1">Vipingo Ridge 132KV/11KV Substation (2024)</h5>
                      <p className="text-sm text-gray-600">
                        Maintenance, rehabilitation and protection relay retrofit works
                      </p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-600">
                      <h5 className="font-semibold text-gray-900 mb-1">Equator Energy</h5>
                      <p className="text-sm text-gray-600">
                        Transformer repair works and system optimization
                      </p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-600">
                      <h5 className="font-semibold text-gray-900 mb-1">Kenya Ports Authority (KPA)</h5>
                      <p className="text-sm text-gray-600">
                        Mombasa substation inspection and maintenance works
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Service Capabilities</h4>
                  <div className="space-y-2">
                    <p className="text-gray-700">• Preventive maintenance programs</p>
                    <p className="text-gray-700">• Emergency repair services</p>
                    <p className="text-gray-700">• System upgrades and modernization</p>
                    <p className="text-gray-700">• Performance optimization</p>
                    <p className="text-gray-700">• Equipment testing and diagnostics</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:order-1">
              {/* Placeholder for maintenance work photo */}
              <div className="bg-gray-300 h-96 rounded-lg shadow-xl flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-lg font-semibold">Maintenance & Repair</p>
                  <p className="text-sm">Expert maintenance services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">Need Professional Electrical Engineering Services?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact our expert team for consultation on your next project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Get Free Consultation
            </a>
            <a 
              href="/about" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;