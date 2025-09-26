import React from 'react';
import { Link } from 'react-router-dom';

const Engineers = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-12 overflow-hidden">
        {/* Engineering Background Elements */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div className="absolute top-5 left-8 text-6xl font-light text-gray-400 rotate-12">V = IR</div>
          <div className="absolute top-20 right-20 text-4xl font-light text-gray-300">P = V²/R</div>
          <div className="absolute top-40 left-1/4 text-3xl font-light text-gray-400 -rotate-6">∮ E·dl = -dΦ/dt</div>
          <div className="absolute top-60 right-1/3 text-5xl font-light text-gray-300">⚡</div>
          <div className="absolute bottom-40 left-20 text-4xl font-light text-gray-400 rotate-6">Z = R + jX</div>
          <div className="absolute bottom-20 right-10 text-3xl font-light text-gray-300">kVA = √3 × V × I</div>
          <div className="absolute top-32 right-1/4 text-6xl font-light text-gray-400">⚙️</div>
          <div className="absolute bottom-60 left-1/3 text-4xl font-light text-gray-300 -rotate-12">cosφ</div>
          <div className="absolute top-16 left-1/2 text-3xl font-light text-gray-400">f = 1/2π√LC</div>
          <div className="absolute bottom-32 right-1/4 text-5xl font-light text-gray-300 rotate-45">🔧</div>
          <div className="absolute top-12 left-1/3 text-2xl font-light text-gray-400 rotate-6">μ₀ = 4π×10⁻⁷</div>
          <div className="absolute top-52 left-16 text-3xl font-light text-gray-300 -rotate-12">ε = Q/4πε₀r²</div>
          <div className="absolute bottom-48 right-1/3 text-2xl font-light text-gray-400 rotate-12">B = μ₀H</div>
          <div className="absolute top-72 right-12 text-4xl font-light text-gray-300">∫∫∫</div>
          <div className="absolute bottom-12 left-1/4 text-2xl font-light text-gray-400 -rotate-6">Φ = BA</div>
          <div className="absolute top-28 left-12 text-3xl font-light text-gray-300 rotate-45">∇×E</div>
          <div className="absolute bottom-56 right-20 text-2xl font-light text-gray-400">τ = RC</div>
          <div className="absolute top-48 right-1/2 text-3xl font-light text-gray-300 -rotate-45">⟲</div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-white border border-blue-200 rounded-full text-blue-600 font-medium mb-6 shadow-sm">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m3 5.197H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Expert Engineering Team
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-blue-600">Our Expert</span>
              <span className="block text-gray-900">Engineering Team</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Meet our highly skilled engineering professionals with over 10+ years of combined experience 
              in electrical power systems, renewable energy, and industrial automation solutions.
            </p>
          </div>
        </div>
      </section>

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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <span className="text-blue-600">10+ Years</span> of Engineering Excellence
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
                color: "from-blue-500 to-indigo-500"
              },
              {
                title: "Substation Design & Construction",
                experience: "Proven Track Record",
                description: "Comprehensive substation engineering from concept design through commissioning and maintenance.",
                icon: "🏗️",
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "Testing & Commissioning",
                experience: "Certified Specialists",
                description: "Professional testing and commissioning services ensuring optimal system performance and safety.",
                icon: "🔧",
                color: "from-orange-500 to-red-500"
              },
              {
                title: "Renewable Energy Systems",
                experience: "Future-Ready Solutions",
                description: "Integration of solar, wind, and hybrid renewable energy systems with grid infrastructure.",
                icon: "🌞",
                color: "from-yellow-500 to-orange-500"
              },
              {
                title: "Industrial Automation",
                experience: "Advanced Technology",
                description: "SCADA systems, PLC programming, and industrial control solutions for enhanced efficiency.",
                icon: "🤖",
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Project Management",
                experience: "End-to-End Delivery",
                description: "Professional project management ensuring on-time, on-budget delivery of complex engineering projects.",
                icon: "📊",
                color: "from-indigo-500 to-blue-500"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Professional <span className="text-blue-600">Certifications</span>
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
      <section className="relative py-12 bg-gradient-to-r from-blue-600 to-indigo-700 overflow-hidden">
        {/* Power Grid Background */}
        <div className="absolute inset-0 opacity-[0.008] pointer-events-none text-white">
          <div className="absolute top-8 left-8 text-7xl font-light rotate-12">⚡</div>
          <div className="absolute top-16 right-16 text-4xl font-light">P = 3VIcosφ</div>
          <div className="absolute top-32 left-1/4 text-5xl font-light -rotate-6">kV</div>
          <div className="absolute top-48 right-1/3 text-6xl font-light rotate-45">⟲</div>
          <div className="absolute bottom-32 left-16 text-4xl font-light">I²R</div>
          <div className="absolute bottom-16 right-20 text-5xl font-light -rotate-12">MVA</div>
          <div className="absolute top-24 right-1/2 text-3xl font-light rotate-6">H = LI²/2</div>
          <div className="absolute bottom-40 left-1/3 text-7xl font-light">∿</div>
          <div className="absolute top-64 left-1/2 text-4xl font-light rotate-12">|Z|</div>
          <div className="absolute bottom-24 right-1/4 text-6xl font-light">⚙️</div>
          <div className="absolute top-4 left-12 text-2xl font-light -rotate-15">∇²V = 0</div>
          <div className="absolute top-20 left-1/3 text-3xl font-light rotate-30">∮E·dA</div>
          <div className="absolute bottom-8 right-12 text-2xl font-light">GW</div>
          <div className="absolute top-52 left-8 text-3xl font-light -rotate-45">⊗</div>
          <div className="absolute bottom-48 right-1/3 text-2xl font-light rotate-60">∂H/∂t</div>
          <div className="absolute top-12 right-1/4 text-4xl font-light">∞</div>
          <div className="absolute bottom-4 left-1/4 text-3xl font-light -rotate-30">≈</div>
          <div className="absolute top-40 right-8 text-2xl font-light rotate-45">Φₘ</div>
          <div className="absolute bottom-56 left-1/2 text-3xl font-light">∠θ</div>
          <div className="absolute top-28 left-20 text-2xl font-light -rotate-60">μᵣ</div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Work with Expert Engineers?
          </h2>
          <p className="text-lg text-blue-100 mb-8 leading-relaxed">
            Partner with our experienced engineering team for your next electrical infrastructure project. 
            From concept to commissioning, we deliver excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-blue-600 hover:bg-blue-50 px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project
            </Link>
            <Link 
              to="/services" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Engineers;