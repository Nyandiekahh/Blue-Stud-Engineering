import React from 'react';
import SEOHead from '../components/SEOHead';

const About = () => {
  const aboutSchemaData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": "https://bluestudengineering.com/about#aboutpage",
    "url": "https://bluestudengineering.com/about",
    "name": "About Blue Stud Engineering - Leading Electrical Engineering Company in Kenya",
    "description": "Learn about Blue Stud Engineering, Kenya's premier electrical engineering company with 10+ years of experience in power systems, substations, and renewable energy solutions.",
    "mainEntity": {
      "@id": "https://bluestudengineering.com/#organization"
    }
  };

  return (
    <>
      <SEOHead 
        title="About Blue Stud Engineering - Leading Electrical Engineering Company in Kenya"
        description="Learn about Blue Stud Engineering, Kenya's premier electrical engineering company with 10+ years of experience in power systems design, substation construction, testing & commissioning, and renewable energy solutions. Trusted by tier-1 industries across Kenya."
        keywords="about Blue Stud Engineering, electrical engineering company Kenya, power systems expertise, engineering team Kenya, EPC contractor Nairobi, electrical engineering experience Kenya"
        canonical="https://bluestudengineering.com/about"
        schemaData={aboutSchemaData}
      />
    <div className="min-h-screen bg-white">
      {/* Company Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Company Overview</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed text-justify">
                Blue Stud Engineering Limited specializes in electrical power systems and renewables 
                with extensive experience in LV (Low Voltage), MV (Medium Voltage), and HV (High Voltage) 
                systems design, from concept to completion.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed text-justify">
                Our expertise encompasses substation design, installation, testing, commissioning, 
                automation and control solutions. We are committed to delivering high-quality engineering 
                solutions that meet international standards and exceed client expectations.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">LV Systems</h3>
                  <p className="text-sm text-gray-600 text-justify">Low Voltage electrical systems design and implementation</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">MV Systems</h3>
                  <p className="text-sm text-gray-600 text-justify">Medium Voltage distribution and control systems</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">HV Systems</h3>
                  <p className="text-sm text-gray-600 text-justify">High Voltage transmission and substation systems</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">Renewables</h3>
                  <p className="text-sm text-gray-600 text-justify">Sustainable energy solutions and integration</p>
                </div>
              </div>
            </div>
            <div>
              {/* Gallery of Company Photos */}
              <div className="grid grid-cols-2 gap-4">
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                  <div className="relative">
                    <img 
                      src="/images/gallery/tile-photo-1.jpg" 
                      alt="Blue Stud Engineering - Project showcase and company facilities"
                      className="w-full h-48 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-lg"></div>
                  </div>
                </div>
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                  <div className="relative">
                    <img 
                      src="/images/gallery/tile-photo-2.jpg" 
                      alt="Blue Stud Engineering - Team collaboration and engineering excellence"
                      className="w-full h-48 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-lg"></div>
                  </div>
                </div>
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                  <div className="relative">
                    <img 
                      src="/images/gallery/tile-photo-3.jpg" 
                      alt="Blue Stud Engineering - Advanced electrical installations and systems"
                      className="w-full h-48 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-lg"></div>
                  </div>
                </div>
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                  <div className="relative">
                    <img 
                      src="/images/gallery/tile-photo-4.jpg" 
                      alt="Blue Stud Engineering - Professional services and project delivery"
                      className="w-full h-48 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Expertise */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Expertise</h2>
            <p className="text-xl text-gray-600 text-justify">Highly skilled engineers with vast experience</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Engineers on drawing table photo */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative">
                  <img 
                    src="/images/gallery/engineers-drawing-table.jpg" 
                    alt="Blue Stud Engineering - Professional engineers collaborating at drawing table"
                    className="w-full h-96 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-lg"></div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-3xl font-bold text-blue-900 mb-6">Professional Engineering Team</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Qualified Engineers</h4>
                    <p className="text-gray-600 text-justify">
                      Our team comprises highly skilled engineers with vast experience in electrical power systems. 
                      All engineers hold BSc Degrees in Electrical Engineering and are members of the Engineers 
                      Board of Kenya (EBK) and the Institute of Engineers of Kenya (IEK).
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Industry Experience</h4>
                    <p className="text-gray-600 text-justify">
                      With more than a decade of experience, our engineers have worked with industry giants 
                      like ABB and Schneider Electric, bringing world-class expertise to every project.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Specialized Knowledge</h4>
                    <p className="text-gray-600 text-justify">
                      Expertise in power systems protection commissioning, automation, distributed 
                      generation, and IEC61850 integration ensures cutting-edge solutions for our clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EPCIC Services Breakdown */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">EPCIC Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-justify">
              Comprehensive project delivery through our integrated Design, Engineering, Procurement, 
              Installation & Commissioning approach
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Design */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Design</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center text-justify">
                Innovative electrical system design from conceptual layouts to detailed technical drawings and specifications.
              </p>
            </div>
            
            {/* Engineering */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Engineering</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center text-justify">
                Advanced engineering analysis, calculations, and technical solutions for complex electrical power systems.
              </p>
            </div>
            
            {/* Procurement */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 12H6L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Procurement</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center text-justify">
                Strategic sourcing and procurement of quality electrical equipment from certified suppliers and manufacturers.
              </p>
            </div>
            
            {/* Installation */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.78 0-2.678-2.153-1.415-3.414l5-5A2 2 0 009 9.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Installation</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center text-justify">
                Professional installation services by certified technicians with 10+ years of field experience.
              </p>
            </div>
            
            {/* Commissioning */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Commissioning</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center text-justify">
                Comprehensive testing, commissioning and system validation to ensure optimal performance and compliance.
              </p>
            </div>
          </div>
          
          {/* Process Flow */}
          <div className="mt-12 bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">Integrated Project Delivery Process</h3>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
                <div className="text-center">
                  <div className="w-3 h-3 bg-blue-900 rounded-full mx-auto mb-2"></div>
                  <span className="text-sm font-semibold text-gray-700">Project Initiation</span>
                </div>
                <div className="hidden md:block w-16 h-0.5 bg-blue-300"></div>
                <div className="text-center">
                  <div className="w-3 h-3 bg-blue-900 rounded-full mx-auto mb-2"></div>
                  <span className="text-sm font-semibold text-gray-700">Design & Engineering</span>
                </div>
                <div className="hidden md:block w-16 h-0.5 bg-blue-300"></div>
                <div className="text-center">
                  <div className="w-3 h-3 bg-blue-900 rounded-full mx-auto mb-2"></div>
                  <span className="text-sm font-semibold text-gray-700">Procurement</span>
                </div>
                <div className="hidden md:block w-16 h-0.5 bg-blue-300"></div>
                <div className="text-center">
                  <div className="w-3 h-3 bg-blue-900 rounded-full mx-auto mb-2"></div>
                  <span className="text-sm font-semibold text-gray-700">Installation</span>
                </div>
                <div className="hidden md:block w-16 h-0.5 bg-blue-300"></div>
                <div className="text-center">
                  <div className="w-3 h-3 bg-blue-900 rounded-full mx-auto mb-2"></div>
                  <span className="text-sm font-semibold text-gray-700">Commissioning & Handover</span>
                </div>
              </div>
            </div>
            <p className="text-center text-gray-600 mt-6 leading-relaxed text-justify">
              Our systematic approach ensures seamless project execution from initial concept to final delivery, 
              with quality control and client communication at every stage.
            </p>
          </div>
        </div>
      </section>

      {/* Values and Approach */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Approach</h2>
            <p className="text-xl text-gray-600 text-justify">Commitment to excellence in every project phase</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600 text-justify">
                We leverage cutting-edge technology and innovative approaches to deliver state-of-the-art 
                electrical engineering solutions that meet modern industry standards.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality</h3>
              <p className="text-gray-600 text-justify">
                Our commitment to quality is unwavering. Every project undergoes rigorous testing and 
                quality control measures to ensure reliability and safety compliance.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Collaboration</h3>
              <p className="text-gray-600 text-justify">
                We work closely with our clients from concept to completion, ensuring that every solution 
                is tailored to meet specific requirements and exceeds expectations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default About;