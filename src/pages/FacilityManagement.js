import React from 'react';

const FacilityManagement = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 via-blue-900 to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Facility Management Objectives</h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto mb-4">
              Focus on Key Components, Desired Approach and Practical Case Study
            </p>
            <div className="text-sm text-blue-200">
              <p>Prepared by: Victor Odhiambo Omondi</p>
              <p>Date: Sunday 28 July, 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Overview of Facility Management</h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-semibold text-blue-900 mb-3">Definition</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Collective practices that ensure maximum functionality, safety and sustainability of infrastructure.
                  </p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-semibold text-green-900 mb-3">Objectives</h3>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Ensure reliability, efficiency and safety compliance of work spaces and buildings</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Reduce downtime and operational costs</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Provide convenient environment that motivates staff productivity</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-300 h-96 rounded-lg shadow-xl flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <p className="text-lg font-semibold">Facility Management Overview</p>
                  <p className="text-sm">Modern building infrastructure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Components */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Components and Aspects</h2>
            <p className="text-xl text-gray-600">Essential elements for effective facility management</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Component 1: Building Operations */}
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Building Operations</h3>
              <p className="text-gray-600 mb-4">
                Involves electrical, HVAC, lighting, mechanical, space allocation, and safety & security systems.
              </p>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800">Key operational practices:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Predictive maintenance practices to reduce downtime</li>
                  <li>• Proper utilization of available space, considering special requirements</li>
                  <li>• Regular review of practices and feedback from clients for improvement</li>
                </ul>
              </div>
            </div>

            {/* Component 2: Green Environment */}
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Green Environment & Energy Saving</h3>
              <p className="text-gray-600 mb-4">
                Practices that encourage energy conservation and reduce environmental footprint at large.
              </p>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800">Key operational practices:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Use of renewable energy sources (Solar PV, wind)</li>
                  <li>• Energy efficient lighting (LED lights, lighting sensors)</li>
                  <li>• Waste management (recycling, waste segregation)</li>
                </ul>
              </div>
            </div>

            {/* Component 3: Country Offices Support */}
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Country Offices Support</h3>
              <p className="text-gray-600 mb-4">
                Ensuring quality and standard facility management services are applied across all country offices.
              </p>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800">Key operational practices:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Standardizing FM practices and protocols using CMMS</li>
                  <li>• Timely technical support – training and engaging expertise</li>
                  <li>• Capacity building – regular training programs</li>
                </ul>
              </div>
            </div>

            {/* Component 4: Premises Reliability */}
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Premises Reliability</h3>
              <p className="text-gray-600 mb-4">
                Critical in ensuring consistency in the quality performance of all building operations.
              </p>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800">Key operational practices:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Application of technology in infrastructure monitoring</li>
                  <li>• Regular health, safety and security inspections</li>
                  <li>• Creating awareness amongst staff on best practices</li>
                </ul>
              </div>
            </div>

            {/* Component 5: Premises Security */}
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">5</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Premises Security</h3>
              <p className="text-gray-600 mb-4">
                Ensures security protocols are duly followed by all stakeholders.
              </p>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800">Key operational practices:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Emergency response systems – scheduled security drills</li>
                  <li>• Building access control systems – key cards and biometrics</li>
                  <li>• CCTV systems – installation at all critical points</li>
                </ul>
              </div>
            </div>

            {/* Component 6: Enabling Work Environment */}
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">6</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Enabling Work Environment</h3>
              <p className="text-gray-600 mb-4">
                Helps create a conducive environment that fosters teamwork, inclusivity, and staff productivity.
              </p>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800">Key operational practices:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Considering special requirements for disabled persons</li>
                  <li>• Collaborative workspaces – encourage staff inclusivity</li>
                  <li>• Regular staff engagement for feedback</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Case Study</h2>
            <p className="text-xl text-gray-600">Modernizing the WHO Headquarters in Geneva</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Project Overview</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Significant issues identified and prioritized in line with general environmental initiatives and norms. 
                  Infrastructure aimed to be highly sustainable, energy efficient and minimal environmental impact.
                </p>
                
                <h4 className="text-xl font-semibold text-blue-900 mb-4">Best Practices Implemented:</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Fire and safety improvements</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Increased security</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Improved air quality</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Considerations for persons with disabilities</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Efficient spaces to support evolving work demands</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-green-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-green-900 mb-6">End Results</h3>
                
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center space-x-3 mb-2">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <h4 className="text-lg font-semibold text-gray-900">Increased savings in utilities</h4>
                    </div>
                    <p className="text-gray-600 text-sm">Significant reduction in energy and water consumption</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center space-x-3 mb-2">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      <h4 className="text-lg font-semibold text-gray-900">Reduced operational costs</h4>
                    </div>
                    <p className="text-gray-600 text-sm">Streamlined operations leading to cost efficiency</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center space-x-3 mb-2">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <h4 className="text-lg font-semibold text-gray-900">Lower maintenance costs</h4>
                    </div>
                    <p className="text-gray-600 text-sm">Modern systems requiring less maintenance and repairs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* References */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">References</h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-700">
                <span className="font-semibold">1. World Health Organization.</span> Modernizing the WHO Headquarters in Geneva. 2016. 
                Available at: <span className="text-blue-600">Modernizing WHO Headquarters</span>
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-700">
                <span className="font-semibold">2. United Nations Environment Programme.</span> (2023). Greening the Blue Report 2023: 
                The UN System's Environmental Footprint and Efforts to Reduce it. Geneva. 
                Available at: <span className="text-blue-600">Greening the Blue</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">Need Expert Facility Management Solutions?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact Victor Odhiambo Omondi for comprehensive facility management consulting
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Get Consultation
            </a>
            <a 
              href="/victor-profile" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              View Victor's Profile
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FacilityManagement;