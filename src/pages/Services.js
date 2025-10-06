import React, { useState, useEffect } from 'react';
import SEOHead from '../components/SEOHead';

const Services = () => {
  const [showResponsibilityMatrix, setShowResponsibilityMatrix] = useState(false);

  const ResponsibilityMatrixModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-blue-900">Design Engineering & Responsibility Matrix</h2>
          <button
            onClick={() => setShowResponsibilityMatrix(false)}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-6 space-y-8">
          {/* Pre-Design Requirements */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-900">Pre-Design Requirements</h3>
            <div className="space-y-2">
              <p className="text-gray-700">1. Topographical survey</p>
              <p className="text-gray-700">2. Geotechnical investigations report</p>
              <p className="text-gray-700">3. Soil resistivity test report</p>
            </div>
          </section>

          {/* Civil and Mechanical */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-900">Civil and Mechanical Design</h3>
            <div className="space-y-2">
              <p className="text-gray-700">1. Perimeter wall</p>
              <p className="text-gray-700">2. General arrangements (GA) and layouts</p>
              <p className="text-gray-700">3. Structural design and specifications</p>
              <p className="text-gray-700">4. Structural drawings</p>
              <p className="text-gray-700">5. Foundation design calculations</p>
              <p className="text-gray-700">6. Foundation drawings</p>
              <p className="text-gray-700">7. Architecture and structural drawings</p>
              <p className="text-gray-700">8. Roof design calculations</p>
              <p className="text-gray-700">9. Ring beam design calculations</p>
              <p className="text-gray-700">10. Column design and calculation</p>
              <p className="text-gray-700">11. Foundation pad design and calculation</p>
              <p className="text-gray-700">12. Strip footing design and calculation</p>
              <p className="text-gray-700">13. Design for motorized crane support for GIS modules</p>
            </div>
          </section>

          {/* Electrical */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-900">Electrical Design & Engineering</h3>
            <div className="space-y-2">
              <p className="text-gray-700">1. Single line diagram</p>
              <p className="text-gray-700">2. Layouts</p>
              <p className="text-gray-700">3. Cable schedule</p>
              <p className="text-gray-700">4. Design and calculation</p>
              <p className="text-gray-700">5. Switchyard - earthing calculation</p>
              <p className="text-gray-700">6. Switchyard Direct Strike Lightning Protection (DSLP) calculation</p>
              <p className="text-gray-700">7. Lighting calculation - switchyard and control building</p>
              <p className="text-gray-700">8. 110V DC battery and charger sizing calculation - Total 110 DC load</p>
              <p className="text-gray-700">9. 48V DC battery and charger sizing calculation - Total 48DC load</p>
              <p className="text-gray-700">10. LV/MV/HV/ power and control cable sizing and voltage drop calculation - substation specification and layout</p>
              <p className="text-gray-700">11. Station transformer sizing - substation specification and layout</p>
              <p className="text-gray-700">12. Air conditioner sizing calculation - substation specification and layout</p>
            </div>
          </section>
        </div>
        
        <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 p-6">
          <button
            onClick={() => setShowResponsibilityMatrix(false)}
            className="w-full bg-blue-900 hover:bg-gray-900 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );

  const servicesSchemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://bluestudengineering.com/services#services",
    "name": "Electrical Engineering Services by Blue Stud Engineering",
    "description": "Comprehensive electrical engineering services including power systems design, substation construction, testing & commissioning, and renewable energy solutions in Kenya.",
    "provider": {
      "@id": "https://bluestudengineering.com/#organization"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Kenya"
    },
    "serviceType": [
      "Power Systems Design",
      "Substation Construction",
      "Testing & Commissioning", 
      "Renewable Energy Solutions",
      "Industrial Electrical Services",
      "Facility Management"
    ]
  };

  // Simple carousel for Installation & Construction images
  const CarouselInstallation = () => {
    const images = [
      '/images/services/installation-construction-1.jpg',
      '/images/services/installation-construction-2.jpg',
      '/images/services/installation.jpg'
    ];

    const [index, setIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
      if (isPaused) return;
      const id = setInterval(() => {
        setIndex((i) => (i + 1) % images.length);
      }, 3500);
      return () => clearInterval(id);
    }, [isPaused, images.length]);

    const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
    const next = () => setIndex((i) => (i + 1) % images.length);

    return (
      <div
        className="relative overflow-hidden rounded-2xl"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${index * 100}%)` }}>
          {images.map((src, i) => (
            <div key={i} className="w-full flex-shrink-0">
              <div className="relative">
                <img src={src} alt={`Installation ${i + 1}`} className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover rounded-2xl shadow-xl" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          aria-label="Previous"
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-blue-900 rounded-full p-2 shadow-md"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          aria-label="Next"
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-blue-900 rounded-full p-2 shadow-md"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Indicators */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-2 h-2 rounded-full ${i === index ? 'bg-white' : 'bg-white/50'} shadow`}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <SEOHead 
        title="Electrical Engineering Services Kenya | Power Systems Design & Substation Construction"
        description="Professional electrical engineering services in Kenya including power systems design, HV/MV/LV substation construction, testing & commissioning, and renewable energy solutions. Expert EPC services for industrial applications."
        keywords="electrical engineering services Kenya, power systems design Nairobi, substation construction Kenya, testing commissioning services, EPC electrical contractors, renewable energy engineering Kenya, industrial electrical services, HV MV LV systems Kenya"
        canonical="https://bluestudengineering.com/services"
        schemaData={servicesSchemaData}
      />
    <div className="min-h-screen bg-white">
      {/* Responsibility Matrix Modal */}
      {showResponsibilityMatrix && <ResponsibilityMatrixModal />}

      {/* Service 1: Power Systems Design */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <span className="bg-blue-900 text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center mr-4">01</span>
                <h2 className="text-4xl font-bold text-blue-900">Power Systems Design</h2>
              </div>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed text-justify">
                Services in LV, MV, and HV engineering and design of power systems and renewables. 
                Our team comprises highly skilled engineers with vast experience in comprehensive 
                electrical system design from concept to completion.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-blue-900 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Design, Engineering, installation, testing, commissioning, protection and automation of LV, MV and HV power systems</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-blue-900 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Substation design and layout optimization</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-blue-900 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Renewable energy systems integration</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-blue-900 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Electrical protection, grading, and coordination services</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-blue-900 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Load flow analysis and fault studies</span>
                </div>
              </div>

              {/* Click to Read More Button */}
              <button
                onClick={() => setShowResponsibilityMatrix(true)}
                className="inline-flex items-center text-blue-900 hover:text-gray-900 font-semibold text-lg group transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Click to read more about Design Engineering
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            <div>
              {/* Smart Electrical Infrastructure Photo */}
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-900 to-gray-900 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
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
                <span className="bg-blue-900 text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center mr-4">02</span>
                <h2 className="text-4xl font-bold text-blue-900">Installation & Construction</h2>
              </div>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed text-justify">
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
              {/* Installation & Construction Photo Carousel */}
              <div className="relative">
                <CarouselInstallation />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3: Power Lines Construction - NEW */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <span className="bg-blue-900 text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center mr-4">03</span>
                <h2 className="text-4xl font-bold text-blue-900">Power Lines Construction</h2>
              </div>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed text-justify">
                Installation and commissioning of Low Voltage (LV) and Medium Voltage (MV) power lines. 
                With extensive experience and a skilled team, we deliver reliable, efficient, and safe 
                solutions that meet industry standards and client requirements.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-blue-900 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">LV power line installation and construction</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-blue-900 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">MV overhead and underground line construction</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-blue-900 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Distribution line infrastructure development</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-blue-900 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Pole installation and line stringing</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-blue-900 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Line commissioning and testing services</span>
                </div>
              </div>
            </div>
            
            <div>
              {/* Power Lines Construction Photo - PLACEHOLDER */}
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-900 to-gray-900 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
                <div className="relative bg-gray-100 rounded-2xl h-96 flex items-center justify-center">
                  <div className="text-center p-8">
                    <svg className="w-24 h-24 mx-auto mb-4 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                    </svg>
                    <p className="text-xl font-semibold text-gray-700 mb-2">Power Lines Construction</p>
                    <p className="text-sm text-gray-500">Photo placeholder - Add power lines construction image</p>
                    <p className="text-xs text-gray-400 mt-4">Recommended: LV/MV power line installation work</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 4: Testing and Commissioning Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <div className="flex items-center mb-6">
                <span className="bg-blue-900 text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center mr-4">04</span>
                <h2 className="text-4xl font-bold text-blue-900">Testing & Commissioning Services</h2>
              </div>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed text-justify">
                Our team of five experienced engineers with more than a decade of experience ensures 
                comprehensive testing and commissioning. All engineers hold BSc Degrees in Electrical 
                Engineering and are members of the Engineers Board of Kenya (EBK) and the Institute 
                of Engineers of Kenya (IEK).
              </p>
              
              <div className="bg-blue-100 p-6 rounded-lg mb-6">
                <h4 className="text-xl font-semibold text-blue-900 mb-4">Specialized Expertise</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-blue-900 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Power systems protection and commissioning</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-blue-900 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">IEC61850 Substation Automation Systems (SAS) integration</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-blue-900 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Distributed generation systems</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600">
                <strong>Industry Experience:</strong> Our team has extensive experience working with 
                industry giants like ABB and Schneider Electric, bringing world-class expertise to every project.
              </p>
            </div>
            
            <div className="lg:order-1">
              {/* Testing & Commissioning Services Photo */}
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative">
                  <img 
                    src="/images/services/testing-commissioning-services-1.jpg" 
                    alt="Testing & Commissioning Services - Professional testing and commissioning by certified engineers"
                    className="w-full h-96 object-cover rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-lg font-semibold mb-1">Testing & Commissioning</p>
                    <p className="text-sm opacity-90">Professional testing and commissioning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 5: Maintenance, Rehabilitation and Repair */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <span className="bg-blue-900 text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center mr-4">05</span>
                <h2 className="text-4xl font-bold text-blue-900">Maintenance, Rehabilitation & Repair</h2>
              </div>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed text-justify">
                Comprehensive maintenance, rehabilitation and repair services to ensure optimal 
                performance and extended lifespan of electrical infrastructure.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Case Examples</h4>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-900">
                      <h5 className="font-semibold text-gray-900 mb-1">Vipingo Ridge 132KV/11KV Substation (2024)</h5>
                      <p className="text-sm text-gray-600">
                        Maintenance, rehabilitation and protection relay retrofit works
                      </p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-900">
                      <h5 className="font-semibold text-gray-900 mb-1">Equator Energy</h5>
                      <p className="text-sm text-gray-600">
                        Transformer repair works and system optimization
                      </p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-900">
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
                    <p className="text-gray-700">• <strong>Preventative maintenance programs - Oil Filtration Services</strong></p>
                    <p className="text-gray-700">• Service agreements/contracts</p>
                    <p className="text-gray-700">• Emergency repair services</p>
                    <p className="text-gray-700">• Systems upgrades and modernization</p>
                    <p className="text-gray-700">• Performance optimization</p>
                    <p className="text-gray-700">• Equipment testing and diagnostics</p>
                    <p className="text-gray-700">• Testing, retrofitting, upgrading, replacement, and commissioning of Protective relays</p>
                    <p className="text-gray-700">• Cable terminations, including the supply and installation of termination kits</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
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

      {/* Service 6: Transformer Services - NEW */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <div className="flex items-center mb-6">
                <span className="bg-blue-900 text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center mr-4">06</span>
                <h2 className="text-4xl font-bold text-blue-900">Transformer Services</h2>
              </div>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed text-justify">
                Comprehensive transformer services from supply to commissioning, maintenance, and repair. 
                Our experienced team ensures reliable transformer operations for your electrical infrastructure.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-blue-900 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Supply of transformers of all sizes and related products e.g. transformer oil</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-blue-900 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Installation of transformers and associated equipment</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-blue-900 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Testing of transformers and protection relays</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-blue-900 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Commissioning of transformers and protection systems</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-blue-900 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Repair of transformers and relay equipment</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-blue-900 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Servicing and maintenance of transformers and protection relays</span>
                </div>
              </div>
            </div>
            
            <div className="lg:order-1">
              {/* Transformer Services Photo - PLACEHOLDER */}
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-900 to-gray-900 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
                <div className="relative bg-gray-100 rounded-2xl h-96 flex items-center justify-center">
                  <div className="text-center p-8">
                    <svg className="w-24 h-24 mx-auto mb-4 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <p className="text-xl font-semibold text-gray-700 mb-2">Transformer Services</p>
                    <p className="text-sm text-gray-500">Photo placeholder - Add transformer services image</p>
                    <p className="text-xs text-gray-400 mt-4">Recommended: Transformer installation or maintenance work</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 7: Power Quality Analysis - NEW */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <span className="bg-blue-900 text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center mr-4">07</span>
                <h2 className="text-4xl font-bold text-blue-900">Power Quality Analysis</h2>
              </div>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed text-justify">
                We help identify, assess, and resolve issues affecting the stability and efficiency of your 
                electrical systems. Through advanced diagnostic tools and expert evaluation, we ensure compliance 
                with power quality standards, minimize equipment downtime, and optimize overall system performance.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">Our Analysis Covers:</h4>
                <div className="space-y-2">
                  <p className="text-gray-700">• Voltage fluctuations and harmonics assessment</p>
                  <p className="text-gray-700">• Power factor correction analysis</p>
                  <p className="text-gray-700">• Load balancing optimization</p>
                  <p className="text-gray-700">• Equipment compatibility evaluation</p>
                  <p className="text-gray-700">• Energy efficiency recommendations</p>
                </div>
              </div>
            </div>
            
            <div>
              {/* Power Quality Analysis Photo - PLACEHOLDER */}
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-900 to-gray-900 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
                <div className="relative bg-gray-100 rounded-2xl h-96 flex items-center justify-center">
                  <div className="text-center p-8">
                    <svg className="w-24 h-24 mx-auto mb-4 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <p className="text-xl font-semibold text-gray-700 mb-2">Power Quality Analysis</p>
                    <p className="text-sm text-gray-500">Photo placeholder - Add power quality analysis image</p>
                    <p className="text-xs text-gray-400 mt-4">Recommended: Power quality testing equipment in use</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 8: Hire of Test Equipment - NEW */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <div className="flex items-center mb-6">
                <span className="bg-blue-900 text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center mr-4">08</span>
                <h2 className="text-4xl font-bold text-blue-900">Hire of Test Equipment</h2>
              </div>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Access to professional-grade testing equipment for your electrical projects. 
                Our comprehensive range of test kits and equipment ensures accurate testing and commissioning.
              </p>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Available Test Kit and Equipment:</h4>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-700">• OMICRON CMC 356 universal relay test set</p>
                  <p className="text-gray-700">• SVEKER 750 relay test unit</p>
                  <p className="text-gray-700">• OMICRON CPC100 Universal primary injection test set</p>
                  <p className="text-gray-700">• OMICRON CT Analyzer Current transformer testing, calibration and assessment</p>
                  <p className="text-gray-700">• Omicron Franeo 800 Sweep Frequency Response Analyser (SFRA)</p>
                  <p className="text-gray-700">• Frida Very Low Frequency (VLF) Test set</p>
                  <p className="text-gray-700">• MEGGER DIGITAL Low Resistance Ohmmeter DLRO 200 + 95MM² heavy duty jumper cables</p>
                  <p className="text-gray-700">• MEGGER MIT520-2 5KV Insulation Resistance Tester</p>
                  <p className="text-gray-700">• MEGGER Oil Test Set OTS80PB</p>
                  <p className="text-gray-700">• MEGGER Earth Tester, DET4TCR2</p>
                  <p className="text-gray-700">• MEGGER Programma Digital Timer TM200</p>
                  <p className="text-gray-700">• CHAUVIN ARNOUX C.A6545 Megohmmeter</p>
                  <p className="text-gray-700">• FLUKE 435 SERIES II Power Quality & Energy Analyzer</p>
                  <p className="text-gray-700">• FLUKE Thermal Imager Ti400</p>
                </div>
              </div>
            </div>
            
            <div className="lg:order-1">
              {/* Hire of Test Equipment Photo - PLACEHOLDER */}
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-900 to-gray-900 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
                <div className="relative bg-gray-100 rounded-2xl h-96 flex items-center justify-center">
                  <div className="text-center p-8">
                    <svg className="w-24 h-24 mx-auto mb-4 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                    <p className="text-xl font-semibold text-gray-700 mb-2">Hire of Test Equipment</p>
                    <p className="text-sm text-gray-500">Photo placeholder - Add test equipment image</p>
                    <p className="text-xs text-gray-400 mt-4">Recommended: Professional testing equipment display</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 9: Power Systems Training */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <span className="bg-blue-900 text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center mr-4">09</span>
                <h2 className="text-4xl font-bold text-blue-900">Power Systems Training</h2>
              </div>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed text-justify">
                Comprehensive training programs for electrical engineering professionals, covering 
                modern power systems, protection schemes, and emerging technologies in the electrical industry.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-blue-900 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Power systems fundamentals and advanced concepts</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-blue-900 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Protection and automation systems training</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-blue-900 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Renewable energy integration workshops</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-blue-900 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Professional development and certification programs</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-blue-900 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Hands-on practical sessions and simulations</span>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-blue-100 rounded-lg">
                <h4 className="font-bold text-blue-900 mb-3">Training Highlights</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-900">
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
      <section className="bg-gradient-to-r from-blue-100 to-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ready to Start Your Next Project?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed text-justify">
                Our team of certified electrical engineers is ready to provide expert consultation 
                and comprehensive solutions for all your electrical engineering needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="/contact" 
                  className="group bg-blue-900 hover:bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <span className="flex items-center">
                    For Enquiries
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </a>
                <a 
                  href="/about" 
                  className="group border-2 border-gray-300 text-gray-700 hover:border-blue-900 hover:text-blue-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200"
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
                      <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">EBK Certified</h4>
                    <p className="text-sm text-gray-600">Licensed engineers with proven expertise</p>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                      <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">10+ Years Experience</h4>
                    <p className="text-sm text-gray-600">Decade of proven project delivery</p>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                      <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    </>
  );
};

export default Services;