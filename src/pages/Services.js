import React from 'react';

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Service 1: Power Systems Design */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <span className="bg-blue-600 text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center mr-4">01</span>
                <h2 className="text-4xl font-bold text-blue-900">Power Systems Design</h2>
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
              {/* Smart Electrical Infrastructure Photo */}
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative">
                  <img 
                    src="/images/services/smart-electrical-infrastructure.jpg" 
                    alt="Smart Electrical Infrastructure - Advanced power systems design and engineering"
                    className="w-full h-96 object-cover rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-lg font-semibold mb-1">Smart Electrical Infrastructure</p>
                    <p className="text-sm opacity-90">Professional design collaboration</p>
                  </div>
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
                <h2 className="text-4xl font-bold text-blue-900">Installation & Construction</h2>
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
              {/* Installation & Construction Photo Gallery */}
              <div className="space-y-6">
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-orange-100 to-blue-100 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                  <div className="relative">
                    <img 
                      src="/images/services/installation-construction-1.jpg" 
                      alt="Installation & Construction - Transformer crane installation and heavy equipment expertise"
                      className="w-full h-64 object-cover rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-lg font-semibold mb-1">Heavy Installation</p>
                      <p className="text-sm opacity-90">Transformer & crane operations</p>
                    </div>
                  </div>
                </div>
                
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-100 to-orange-100 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                  <div className="relative">
                    <img 
                      src="/images/services/installation-construction-2.jpg" 
                      alt="Installation & Construction - Electrical system installation and construction work"
                      className="w-full h-64 object-cover rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-lg font-semibold mb-1">System Construction</p>
                      <p className="text-sm opacity-90">Electrical installation work</p>
                    </div>
                  </div>
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
                <h2 className="text-4xl font-bold text-blue-900">Testing & Commissioning Services</h2>
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
              {/* Testing & Commissioning Services Photo Gallery */}
              <div className="space-y-6">
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                  <div className="relative">
                    <img 
                      src="/images/services/testing-commissioning-services-1.jpg" 
                      alt="Testing & Commissioning Services - Professional testing and commissioning by certified engineers"
                      className="w-full h-64 object-cover rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-lg font-semibold mb-1">Testing & Commissioning</p>
                      <p className="text-sm opacity-90">Professional testing procedures</p>
                    </div>
                  </div>
                </div>
                
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-100 to-green-100 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                  <div className="relative">
                    <img 
                      src="/images/services/testing-commissioning-services-2.jpg" 
                      alt="Testing & Commissioning Services - Advanced equipment testing and system validation"
                      className="w-full h-64 object-cover rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-lg font-semibold mb-1">System Validation</p>
                      <p className="text-sm opacity-90">Advanced equipment testing</p>
                    </div>
                  </div>
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
                <h2 className="text-4xl font-bold text-blue-900">Maintenance, Rehabilitation & Repair</h2>
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
              {/* Maintenance, Rehabilitation & Repair Photo */}
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative">
                  <img 
                    src="/images/services/maintenance-rehabilitation-repair.jpg" 
                    alt="Maintenance, Rehabilitation & Repair - Expert maintenance and repair services for electrical systems"
                    className="w-full h-96 object-cover rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-lg font-semibold mb-1">Maintenance & Repair</p>
                    <p className="text-sm opacity-90">Expert maintenance services</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 5: Power Systems Training */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <span className="bg-blue-600 text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center mr-4">05</span>
                <h2 className="text-4xl font-bold text-gray-900">Power Systems Training</h2>
              </div>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Comprehensive training programs for electrical engineering professionals, covering 
                modern power systems, protection schemes, and emerging technologies in the electrical industry.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Power systems fundamentals and advanced concepts</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Protection and automation systems training</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Renewable energy integration workshops</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Professional development and certification programs</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Hands-on practical sessions and simulations</span>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h4 className="font-bold text-blue-900 mb-3">Training Highlights</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-800">
                  <div>
                    <p className="text-gray-700">• Expert instructors with 10+ years experience</p>
                    <p className="text-gray-700">• Industry-recognized certifications</p>
                    <p className="text-gray-700">• Customized corporate training programs</p>
                  </div>
                  <div>
                    <p className="text-gray-700">• Modern training facilities and equipment</p>
                    <p className="text-gray-700">• Continuing professional development (CPD) points</p>
                    <p className="text-gray-700">• Post-training technical support</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              {/* Training Photo */}
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-yellow-100 to-blue-100 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative">
                  <img 
                    src="/images/services/training.jpg" 
                    alt="Power Systems Training - Comprehensive training programs for electrical engineering professionals"
                    className="w-full h-96 object-cover rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-lg font-semibold mb-1">Power Systems Training</p>
                    <p className="text-sm opacity-90">Professional development programs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-50 to-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ready to Start Your Next Project?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our team of certified electrical engineers is ready to provide expert consultation 
                and comprehensive solutions for all your electrical engineering needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="/contact" 
                  className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <span className="flex items-center">
                    Make Enquiries
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </a>
                <a 
                  href="/about" 
                  className="group border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200"
                >
                  <span className="flex items-center">
                    Learn More About Us
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </a>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">EBK Certified</h4>
                    <p className="text-sm text-gray-600">Licensed engineers with proven expertise</p>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">10+ Years Experience</h4>
                    <p className="text-sm text-gray-600">Decade of proven project delivery</p>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-3">
                      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">Turnkey Solutions</h4>
                    <p className="text-sm text-gray-600">Complete project management from start to finish</p>
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

export default Services;