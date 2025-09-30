import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-blue-50 to-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-32 left-20 w-72 h-72 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-full text-blue-900 text-sm font-medium mb-8 animate-bounce-slow">
                <span className="w-2 h-2 bg-blue-900 rounded-full mr-3 animate-ping"></span>
                NCA & EPRA Certified • Engineering Excellence Since 2015
              </div>
              
              {/* Company Title - Centered and Large - Smooth Mobile Responsive */}
              <div className="text-center mb-8 animate-fade-in-up">
                <h1 className="text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-bold leading-tight text-blue-900">
                  <span className="block whitespace-nowrap text-blue-900">Blue Stud Engineering</span>
                  <span className="block text-4xl md:text-6xl lg:text-8xl xl:text-9xl mt-2 font-bold whitespace-nowrap text-center lg:text-left lg:ml-[25rem] text-blue-900">
                    Limited
                  </span>
                </h1>
              </div>
              <p className="text-2xl text-gray-600 mb-12 leading-relaxed animate-fade-in-up animation-delay-300">
                A leading Engineering, Procurement and Construction (EPC) company specializing in electrical power systems 
                and renewable energy. From innovative concept design to seamless commissioning, we deliver world-class 
                solutions in LV, MV, and HV systems with unmatched expertise and professional excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up animation-delay-500">
                <Link 
                  to="/services" 
                  className="group relative overflow-hidden bg-blue-900 hover:bg-blue-800 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 text-center transform hover:scale-105 hover:shadow-2xl"
                >
                  <span className="relative z-10">Explore Our Services</span>
                  <div className="absolute inset-0 bg-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </Link>
                <Link 
                  to="/contact" 
                  className="group border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 text-center transform hover:scale-105"
                >
                  Start Your Project
                </Link>
              </div>
            </div>
            <div className="lg:text-right animate-fade-in-up animation-delay-700 mt-48 lg:mt-96">
              {/* Smart Electrical Infrastructure Photo */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative">
                  <img 
                    src="/images/services/smart-electrical-infrastructure.jpg" 
                    alt="Smart Electrical Infrastructure - Advanced power systems solutions and modern substation technology"
                    className="w-full h-96 object-cover rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-xl font-semibold mb-2 text-white drop-shadow-lg">Smart Electrical Infrastructure</p>
                    <p className="text-sm text-white/90 drop-shadow-md">Advanced Power Systems Solutions</p>
                  </div>
                  <div className="absolute top-6 right-6 bg-blue-900 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Featured Project
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-600">Numbers that speak to our excellence and reliability</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-white rounded-2xl p-8 shadow-lg group-hover:shadow-xl transition-shadow duration-300 border border-blue-100">
                <div className="text-4xl lg:text-5xl font-bold text-blue-900 mb-3">10+</div>
                <div className="text-lg font-semibold text-gray-700 mb-2">Years Experience</div>
                <div className="text-sm text-gray-500">Industry Leadership</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white rounded-2xl p-8 shadow-lg group-hover:shadow-xl transition-shadow duration-300 border border-blue-100">
                <div className="text-4xl lg:text-5xl font-bold text-blue-900 mb-3">50+</div>
                <div className="text-lg font-semibold text-gray-700 mb-2">Projects Completed</div>
                <div className="text-sm text-gray-500">Successful Deliveries</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white rounded-2xl p-8 shadow-lg group-hover:shadow-xl transition-shadow duration-300 border border-blue-100">
                <div className="text-4xl lg:text-5xl font-bold text-blue-900 mb-3">4</div>
                <div className="text-lg font-semibold text-gray-700 mb-2">Tier 1 Industries</div>
                <div className="text-sm text-gray-500">Premium Clients</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white rounded-2xl p-8 shadow-lg group-hover:shadow-xl transition-shadow duration-300 border border-blue-100">
                <div className="text-4xl lg:text-5xl font-bold text-blue-900 mb-3">23</div>
                <div className="text-lg font-semibold text-gray-700 mb-2">Team Specialists</div>
                <div className="text-sm text-gray-500">Expert Engineers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-white border border-blue-200 rounded-full text-blue-900 font-medium mb-6 shadow-sm">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              Licensed & Certified
            </div>
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Officially Licensed Engineering Company
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Blue Stud Engineering Limited operates under full regulatory compliance with Kenya's engineering authorities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* NCA Certification */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-900">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">NCA Certified</h3>
                  <p className="text-blue-900 font-medium">National Construction Authority</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Licensed by the National Construction Authority of Kenya for construction and engineering services, 
                ensuring compliance with national building standards and regulations.
              </p>
            </div>

            {/* EPRA Certification */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-900">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">EPRA Certified</h3>
                  <p className="text-blue-900 font-medium">Energy & Petroleum Regulatory Authority</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Authorized by the Energy and Petroleum Regulatory Authority for electrical installations, 
                power systems design, and energy sector projects across Kenya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Preview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-6 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-900 text-sm font-medium mb-6">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                About Our Company
              </div>
              <h2 className="text-5xl font-bold text-blue-900 mb-8 leading-tight">
                Excellence in Electrical Engineering
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Blue Stud Engineering Limited specializes in electrical power systems and renewables with extensive 
                experience in Low Voltage (LV), Medium Voltage (MV), and High Voltage (HV) systems design. 
                We take projects from initial concept through to final completion, including comprehensive 
                substation design, installation, testing, commissioning, automation and control solutions.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Professional Certification</h3>
                    <p className="text-gray-600">All engineers hold BSc Degrees in Electrical Engineering and are members of EBK and IEK</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Industry Experience</h3>
                    <p className="text-gray-600">Extensive experience working with industry giants like ABB and Schneider Electric</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Comprehensive Solutions</h3>
                    <p className="text-gray-600">From concept to completion - design, installation, testing, and commissioning</p>
                  </div>
                </div>
              </div>
              
              <Link 
                to="/about" 
                className="inline-flex items-center text-blue-900 hover:text-blue-800 font-semibold text-lg group"
              >
                Learn More About Us
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            
            <div className="relative">
              {/* Engineers on drawing table placeholder */}
              <div className="bg-gray-50 border-2 border-gray-200 h-96 rounded-2xl shadow-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <svg className="w-24 h-24 mx-auto mb-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <p className="text-xl font-semibold text-gray-700 mb-3">Engineers on Drawing Table</p>
                  <p className="text-sm text-gray-500">Professional engineering team collaboration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Overview */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 25px 25px, #2563eb 2px, transparent 0)', backgroundSize: '50px 50px'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="inline-flex items-center px-6 py-3 bg-white border border-blue-200 rounded-full text-blue-900 font-medium mb-6 shadow-sm">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Engineering Excellence
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-blue-900 mb-8 leading-tight">
              Our Core Services
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive electrical engineering solutions from innovative design concepts to seamless commissioning and beyond
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="group relative bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 animate-fade-in-up animation-delay-100">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-900 to-blue-900 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors duration-300">Power Systems Design</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Advanced LV, MV, and HV engineering solutions with cutting-edge renewable energy integration and expert team collaboration.
                </p>
                <Link to="/services" className="inline-flex items-center text-blue-900 hover:text-blue-800 font-semibold group-hover:translate-x-2 transition-all duration-300">
                  Explore Service
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="group relative bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 animate-fade-in-up animation-delay-200">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-900 to-blue-900 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors duration-300">Installation & Construction</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Turnkey substation projects and precision distribution line installations with decade-experienced technical teams.
                </p>
                <Link to="/services" className="inline-flex items-center text-blue-900 hover:text-blue-800 font-semibold group-hover:translate-x-2 transition-all duration-300">
                  Explore Service
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className="group relative bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 animate-fade-in-up animation-delay-300">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-900 to-blue-900 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors duration-300">Testing & Commissioning</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Expert certified engineers delivering comprehensive power systems protection with EBK/IEK professional standards.
                </p>
                <Link to="/services" className="inline-flex items-center text-blue-900 hover:text-blue-800 font-semibold group-hover:translate-x-2 transition-all duration-300">
                  Explore Service
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Service 4 */}
            <div className="group relative bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 animate-fade-in-up animation-delay-400">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-900 to-blue-900 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors duration-300">Maintenance & Repair</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Comprehensive rehabilitation services and strategic upgrades ensuring optimal performance and extended infrastructure lifespan.
                </p>
                <Link to="/services" className="inline-flex items-center text-blue-900 hover:text-blue-800 font-semibold group-hover:translate-x-2 transition-all duration-300">
                  Explore Service
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Markets */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 30px 30px, #2563eb 2px, transparent 0)', backgroundSize: '60px 60px'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="inline-flex items-center px-6 py-3 bg-blue-50 border border-blue-200 rounded-full text-blue-900 font-medium mb-6 shadow-sm">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Trusted Customers
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-blue-900 mb-8 leading-tight">
              Our Target Markets
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Empowering utilities, transmission operators, and commercial infrastructure with innovative engineering solutions across multiple sectors
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Utilities & Transmission */}
            <div className="group relative animate-fade-in-up animation-delay-200">
              <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-blue-200">
                <div className="flex items-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-blue-900 leading-tight">
                    Utilities & Transmission Operators
                  </h3>
                </div>
                
                <div className="space-y-5 mb-8">
                  {[
                    'Design, upgrade, and commissioning of substations',
                    'Distribution infrastructure development and modernization', 
                    'Power systems protection and automation solutions',
                    'Grid integration and smart infrastructure deployment'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 group-hover:translate-x-1 transition-transform duration-300" style={{transitionDelay: `${index * 100}ms`}}>
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-900 to-blue-900 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-6 border-t border-gray-200">
                  <p className="text-gray-500">Delivering cutting-edge solutions for power grid modernization and infrastructure resilience</p>
                </div>
              </div>
            </div>
            
            {/* Commercial Infrastructure */}
            <div className="group relative animate-fade-in-up animation-delay-400">
              <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-blue-200">
                <div className="flex items-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-blue-900 leading-tight">
                    Commercial Infrastructure
                  </h3>
                </div>
                
                <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                  Comprehensive electrical systems for commercial buildings, industrial facilities, and smart city initiatives
                </p>
                
                <div className="mb-8">
                  <p className="text-blue-900 font-semibold mb-6 text-lg">Trusted by Tier 1 Industries in Kenya:</p>
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      'Mombasa Cement Limited',
                      'Devki Steel Mills Limited', 
                      'East African Breweries Limited',
                      'Brookside Dairy Limited'
                    ].map((company, index) => (
                      <div key={index} className="flex items-center space-x-4 group-hover:translate-x-1 transition-transform duration-300" style={{transitionDelay: `${index * 100}ms`}}>
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-900 to-blue-900 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 font-medium">{company}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="pt-6 border-t border-gray-200">
                  <p className="text-gray-500">Powering Kenya's industrial growth with reliable electrical infrastructure solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Logos Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center px-6 py-3 bg-gray-50 border border-gray-200 rounded-full text-gray-600 font-medium mb-6 shadow-sm">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              Trusted Customers
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6 leading-tight">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Proud to power Kenya's most innovative companies with world-class electrical engineering solutions
            </p>
          </div>

          {/* Moving Logos Carousel */}
          <div className="relative overflow-hidden">
            {/* Gradient overlays for smooth fade effect */}
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white via-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white via-white to-transparent z-10"></div>
            
            {/* Moving logos container */}
            <div className="flex animate-scroll-left">
              {/* First set of logos */}
              <div className="flex items-center space-x-16 min-w-full">
                {/* Mombasa Cement / Nyumba Group */}
                <div className="group relative flex items-center justify-center p-8 bg-gray-50 hover:bg-white rounded-2xl transition-all duration-300 hover:shadow-lg border border-gray-100 hover:border-blue-200 min-w-[200px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 to-blue-900/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative w-full h-20 flex items-center justify-center">
                    <img 
                      src="/logos/mombasa-cement.png" 
                      alt="Mombasa Cement Limited - Nyumba Group" 
                      className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Equator Energy */}
                <div className="group relative flex items-center justify-center p-8 bg-gray-50 hover:bg-white rounded-2xl transition-all duration-300 hover:shadow-lg border border-gray-100 hover:border-blue-200 min-w-[200px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 to-blue-900/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative w-full h-20 flex items-center justify-center">
                    <img 
                      src="/logos/equator-energy.png" 
                      alt="Equator Energy" 
                      className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Devki Group */}
                <div className="group relative flex items-center justify-center p-8 bg-gray-50 hover:bg-white rounded-2xl transition-all duration-300 hover:shadow-lg border border-gray-100 hover:border-blue-200 min-w-[200px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 to-blue-900/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative w-full h-20 flex items-center justify-center">
                    <img 
                      src="/logos/devki-group.png" 
                      alt="Devki Group" 
                      className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Mehta Electricals */}
                <div className="group relative flex items-center justify-center p-8 bg-gray-50 hover:bg-white rounded-2xl transition-all duration-300 hover:shadow-lg border border-gray-100 hover:border-blue-200 min-w-[200px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 to-blue-900/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative w-full h-20 flex items-center justify-center">
                    <img 
                      src="/logos/mehta-electricals.png" 
                      alt="Mehta Electricals" 
                      className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Vipingo Ridge */}
                <div className="group relative flex items-center justify-center p-8 bg-gray-50 hover:bg-white rounded-2xl transition-all duration-300 hover:shadow-lg border border-gray-100 hover:border-blue-200 min-w-[200px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 to-blue-900/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative w-full h-20 flex items-center justify-center">
                    <img 
                      src="/logos/vipingo-ridge.png" 
                      alt="Vipingo Ridge" 
                      className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex items-center space-x-16 min-w-full ml-16">
                {/* Mombasa Cement / Nyumba Group */}
                <div className="group relative flex items-center justify-center p-8 bg-gray-50 hover:bg-white rounded-2xl transition-all duration-300 hover:shadow-lg border border-gray-100 hover:border-blue-200 min-w-[200px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 to-blue-900/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative w-full h-20 flex items-center justify-center">
                    <img 
                      src="/logos/mombasa-cement.png" 
                      alt="Mombasa Cement Limited - Nyumba Group" 
                      className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Equator Energy */}
                <div className="group relative flex items-center justify-center p-8 bg-gray-50 hover:bg-white rounded-2xl transition-all duration-300 hover:shadow-lg border border-gray-100 hover:border-blue-200 min-w-[200px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 to-blue-900/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative w-full h-20 flex items-center justify-center">
                    <img 
                      src="/logos/equator-energy.png" 
                      alt="Equator Energy" 
                      className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Devki Group */}
                <div className="group relative flex items-center justify-center p-8 bg-gray-50 hover:bg-white rounded-2xl transition-all duration-300 hover:shadow-lg border border-gray-100 hover:border-blue-200 min-w-[200px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 to-blue-900/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative w-full h-20 flex items-center justify-center">
                    <img 
                      src="/logos/devki-group.png" 
                      alt="Devki Group" 
                      className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Mehta Electricals */}
                <div className="group relative flex items-center justify-center p-8 bg-gray-50 hover:bg-white rounded-2xl transition-all duration-300 hover:shadow-lg border border-gray-100 hover:border-blue-200 min-w-[200px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 to-blue-900/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative w-full h-20 flex items-center justify-center">
                    <img 
                      src="/logos/mehta-electricals.png" 
                      alt="Mehta Electricals" 
                      className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Vipingo Ridge */}
                <div className="group relative flex items-center justify-center p-8 bg-gray-50 hover:bg-white rounded-2xl transition-all duration-300 hover:shadow-lg border border-gray-100 hover:border-blue-200 min-w-[200px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 to-blue-900/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative w-full h-20 flex items-center justify-center">
                    <img 
                      src="/logos/vipingo-ridge.png" 
                      alt="Vipingo Ridge" 
                      className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-8 px-8 py-4 bg-gradient-to-r from-gray-50 to-white rounded-full border border-gray-200 shadow-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-900 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">5+ Major Partnerships</span>
              </div>
              <div className="w-px h-4 bg-gray-300"></div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-900 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Industrial Scale Projects</span>
              </div>
              <div className="w-px h-4 bg-gray-300"></div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-900 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Proven Track Record</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 40px 40px, #2563eb 2px, transparent 0)', backgroundSize: '80px 80px'}}></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center px-8 py-4 bg-white border border-blue-200 rounded-full text-blue-900 font-medium mb-8 shadow-sm">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Ready to Innovate?
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-bold mb-8 text-blue-900 leading-tight">
              Ready to Start Your 
              Next Project?
            </h2>
            
            <p className="text-2xl lg:text-3xl text-gray-600 mb-16 max-w-5xl mx-auto leading-relaxed">
              Transform your electrical infrastructure with our expert engineering team. 
              From innovative design concepts to seamless project execution - let's build the future together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16">
              <Link 
                to="/contact" 
                className="group relative overflow-hidden bg-gradient-to-r from-blue-900 to-blue-900 text-white hover:from-blue-900 hover:to-blue-800 px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                Start Your Project Today
              </Link>
              
              <Link 
                to="/services" 
                className="group border-2 border-blue-900 text-blue-900 hover:bg-blue-50 hover:border-blue-900 px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center">
                  Explore Our Services
                  <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex flex-col items-center space-y-3 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <span className="text-lg font-semibold text-gray-900">10+ Years Experience</span>
                <span className="text-gray-600 text-center">Proven track record in electrical engineering</span>
              </div>
              
              <div className="flex flex-col items-center space-y-3 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <span className="text-lg font-semibold text-gray-900">Tier 1 Industries</span>
                <span className="text-gray-600 text-center">Trusted by Kenya's leading companies</span>
              </div>
              
              <div className="flex flex-col items-center space-y-3 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <span className="text-lg font-semibold text-gray-900">Professional Certified</span>
                <span className="text-gray-600 text-center">EBK/IEK certified engineering team</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;