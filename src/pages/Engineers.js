import React from 'react';
import { Link } from 'react-router-dom';

const Engineers = () => {
  return (
    <div className="min-h-screen bg-white">


      {/* Team Expertise Section */}
      <section className="relative py-12 bg-gray-50 overflow-hidden">
        {/* Engineering Symbols Background */}
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
          <div className="absolute top-8 left-8 text-8xl font-light text-gray-300">∫</div>
          <div className="absolute top-16 right-16 text-6xl font-light text-gray-300 rotate-12">ΔV</div>
          <div className="absolute top-32 left-1/4 text-4xl font-light text-gray-300">η = P_out/P_in</div>
          <div className="absolute top-48 right-1/3 text-7xl font-light text-gray-300">∑</div>
          <div className="absolute bottom-40 left-16 text-5xl font-light text-gray-300 -rotate-6">I = V/Z</div>
          <div className="absolute bottom-24 right-20 text-4xl font-light text-gray-300">S = P + jQ</div>
          <div className="absolute top-24 right-1/2 text-3xl font-light text-gray-300 rotate-45">Pf = cos(θ)</div>
          <div className="absolute bottom-16 left-1/3 text-6xl font-light text-gray-300">≈</div>
          <div className="absolute top-64 left-1/2 text-4xl font-light text-gray-300 -rotate-12">X_L = 2πfL</div>
          <div className="absolute bottom-48 right-1/4 text-5xl font-light text-gray-300 rotate-6">kW</div>
          <div className="absolute top-4 left-1/3 text-3xl font-light text-gray-300 rotate-12">∇·D = ρ</div>
          <div className="absolute top-20 left-12 text-2xl font-light text-gray-300 -rotate-6">G = 1/R</div>
          <div className="absolute top-56 right-12 text-4xl font-light text-gray-300 rotate-30">∮</div>
          <div className="absolute bottom-8 left-8 text-3xl font-light text-gray-300">X_C = 1/2πfC</div>
          <div className="absolute top-72 right-1/4 text-2xl font-light text-gray-300 -rotate-45">Y = G + jB</div>
          <div className="absolute bottom-32 left-1/4 text-5xl font-light text-gray-300 rotate-15">∿</div>
          <div className="absolute top-40 right-8 text-3xl font-light text-gray-300">≡</div>
          <div className="absolute bottom-60 right-1/3 text-4xl font-light text-gray-300 -rotate-30">Ψ</div>
          <div className="absolute top-12 right-20 text-2xl font-light text-gray-300 rotate-60">∂/∂t</div>
          <div className="absolute bottom-4 right-8 text-3xl font-light text-gray-300">∞</div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              10+ Years of Engineering Excellence
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our team of certified engineers brings decades of experience in delivering world-class 
              electrical engineering solutions across Kenya and East Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Expertise Areas */}
            {[
              {
                title: "Power Systems Engineering",
                experience: "10+ Years Experience",
                description: "Expert design and implementation of LV, MV, and HV power distribution systems with advanced protection schemes.",
                icon: "⚡",
                color: "from-blue-500 to-blue-600"
              },
              {
                title: "Substation Design & Construction",
                experience: "Proven Track Record",
                description: "Comprehensive substation engineering from concept design through commissioning and maintenance.",
                icon: "🏗️",
                color: "from-blue-600 to-blue-700"
              },
              {
                title: "Testing & Commissioning",
                experience: "Certified Specialists",
                description: "Professional testing and commissioning services ensuring optimal system performance and safety.",
                icon: "🔧",
                color: "from-blue-400 to-blue-500"
              },
              {
                title: "Renewable Energy Systems",
                experience: "Future-Ready Solutions",
                description: "Integration of solar, wind, and hybrid renewable energy systems with grid infrastructure.",
                icon: "🌞",
                color: "from-blue-500 to-blue-600"
              },
              {
                title: "Industrial Automation",
                experience: "Advanced Technology",
                description: "SCADA systems, PLC programming, and industrial control solutions for enhanced efficiency.",
                icon: "🤖",
                color: "from-blue-600 to-blue-700"
              },
              {
                title: "Project Management",
                experience: "End-to-End Delivery",
                description: "Professional project management ensuring on-time, on-budget delivery of complex engineering projects.",
                icon: "📊",
                color: "from-blue-400 to-blue-500"
              }
            ].map((expertise, index) => (
              <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${expertise.color} flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {expertise.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{expertise.title}</h3>
                <p className="text-blue-600 font-semibold mb-3">{expertise.experience}</p>
                <p className="text-gray-600 leading-relaxed text-sm">{expertise.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Qualifications */}
      <section className="relative py-12 bg-white overflow-hidden">
        {/* Circuit Diagram Background */}
        <div className="absolute inset-0 opacity-[0.012] pointer-events-none">
          <div className="absolute top-12 left-12 text-5xl font-light text-gray-300">≡</div>
          <div className="absolute top-20 right-24 text-4xl font-light text-gray-300 rotate-6">ω = 2πf</div>
          <div className="absolute top-40 left-1/4 text-6xl font-light text-gray-300">⟲</div>
          <div className="absolute top-56 right-1/3 text-3xl font-light text-gray-300 -rotate-12">Q = CΔV</div>
          <div className="absolute bottom-32 left-20 text-7xl font-light text-gray-300">∇</div>
          <div className="absolute bottom-16 right-16 text-4xl font-light text-gray-300 rotate-12">THD</div>
          <div className="absolute top-28 right-1/2 text-5xl font-light text-gray-300">⚡</div>
          <div className="absolute bottom-44 left-1/3 text-3xl font-light text-gray-300">kVAR</div>
          <div className="absolute top-72 left-1/2 text-4xl font-light text-gray-300 rotate-45">λ = c/f</div>
          <div className="absolute bottom-28 right-1/4 text-6xl font-light text-gray-300">∞</div>
          <div className="absolute top-8 left-1/3 text-2xl font-light text-gray-300 -rotate-15">∂E/∂x</div>
          <div className="absolute top-36 right-12 text-3xl font-light text-gray-300 rotate-30">∮B·dl</div>
          <div className="absolute bottom-8 left-8 text-4xl font-light text-gray-300">⟶</div>
          <div className="absolute top-60 left-8 text-2xl font-light text-gray-300 rotate-45">σ = J/E</div>
          <div className="absolute bottom-52 right-8 text-3xl font-light text-gray-300 -rotate-30">⊥</div>
          <div className="absolute top-16 left-1/2 text-2xl font-light text-gray-300">P = I²R</div>
          <div className="absolute bottom-36 left-1/2 text-4xl font-light text-gray-300 rotate-60">≈</div>
          <div className="absolute top-44 left-16 text-2xl font-light text-gray-300 -rotate-45">Δ</div>
          <div className="absolute bottom-12 right-1/3 text-3xl font-light text-gray-300">∠</div>
          <div className="absolute top-4 right-8 text-2xl font-light text-gray-300 rotate-12">ε₀</div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Professional Certifications
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our engineers hold industry-recognized certifications and maintain continuous professional development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "EBK/IEK Certified",
                description: "Engineers Board of Kenya certification",
                icon: "🏆"
              },
              {
                title: "NCA Licensed",
                description: "National Construction Authority",
                icon: "📋"
              },
              {
                title: "EPRA Authorized",
                description: "Energy & Petroleum Regulatory Authority",
                icon: "⚡"
              },
              {
                title: "Professional Engineers",
                description: "Chartered Engineering Status",
                icon: "🎓"
              }
            ].map((cert, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-colors duration-300">
                <div className="text-3xl mb-3">{cert.icon}</div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-gray-50 to-blue-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v2c0 .656.126 1.283.356 1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Ready to Work with Expert Engineers?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Partner with our experienced engineering team for your next electrical infrastructure project. 
                From concept to commissioning, we deliver excellence every step of the way.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  to="/contact" 
                  className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <span className="flex items-center">
                    Start Your Project
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
                <Link 
                  to="/services" 
                  className="group border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200"
                >
                  <span className="flex items-center">
                    View Our Services
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">Certified Team</h4>
                    <p className="text-sm text-gray-600">EBK & IEK registered professional engineers</p>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">Proven Excellence</h4>
                    <p className="text-sm text-gray-600">Decade of successful project delivery</p>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">Complete Solutions</h4>
                    <p className="text-sm text-gray-600">End-to-end engineering project delivery</p>
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

export default Engineers;