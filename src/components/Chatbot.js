import React, { useState, useRef, useEffect } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: 'Hello! I\'m the Blue Stud Engineering assistant. How can I help you with our electrical engineering services today?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Comprehensive knowledge base from the website
  const knowledgeBase = {
    company: {
      name: 'Blue Stud Engineering Limited',
      specialization: 'Electrical power systems and renewables',
      experience: '10+ years of engineering excellence since 2015',
      certifications: ['NCA Licensed', 'EPRA Certified', 'EBK/IEK Certified'],
      serviceAreas: ['Kenya (Nationwide)', 'East Africa Region', 'International Projects'],
      businessHours: 'Monday - Friday: 8:00 AM - 4:30 PM',
      phone: '+254 768 967 878',
      email: 'info@bluestudengineering.com',
      location: 'Nairobi, Kenya'
    },
    services: {
      'power systems design': {
        description: 'Services in LV, MV, and HV engineering and design of power systems and renewables',
        features: [
          'Engineering, installation, testing, commissioning, protection and automation of electrical power systems',
          'Substation design and layout optimization',
          'Renewable energy systems integration',
          'Load flow analysis and fault studies'
        ]
      },
      'installation construction': {
        description: 'Execute turnkey substation projects and distribution lines installation',
        features: [
          'LV, MV & HV Switchgears installation',
          'Power and distribution transformer installation',
          'Air Insulated Switchgears (AIS) for outdoor applications',
          'Gas Insulated Switchgears (GIS) 132KV/66KV/11KV installations',
          'Ring Main Units (RMUs)',
          'Motor Control Centers (MCC)',
          'Distribution lines installation'
        ]
      },
      'testing commissioning': {
        description: 'Comprehensive testing and commissioning services ensuring optimal system performance',
        features: [
          'Power systems protection commissioning',
          'Automation systems integration',
          'Distributed generation systems',
          'IEC61850 integration'
        ]
      },
      'maintenance repair': {
        description: 'Comprehensive maintenance, rehabilitation and repair services',
        projects: [
          'Vipingo Ridge 132KV/11KV Substation (2024) - Maintenance, rehabilitation and protection relay retrofit works',
          'Equator Energy - Transformer repair works and system optimization',
          'Kenya Ports Authority (KPA) - Mombasa substation inspection and maintenance works'
        ],
        capabilities: [
          'Preventive maintenance programs',
          'Emergency repair services',
          'System upgrades and modernization',
          'Performance optimization',
          'Equipment testing and diagnostics'
        ]
      },
      'training': {
        description: 'Power systems training programs for electrical engineering professionals',
        features: [
          'Power systems fundamentals and advanced concepts',
          'Protection and automation systems training',
          'Renewable energy integration workshops',
          'Professional development and certification programs',
          'Hands-on practical sessions and simulations',
          'Expert instructors with 10+ years experience',
          'Industry-recognized certifications',
          'Customized corporate training programs'
        ]
      },
      'facility management': {
        description: 'Comprehensive facility management services focusing on key components and strategic approaches',
        components: [
          'Building Operations - electrical, HVAC, lighting, mechanical systems',
          'Green Environment & Energy Saving - renewable energy, LED lighting, waste management',
          'Country Offices Support - standardized FM practices using CMMS',
          'Premises Reliability - technology monitoring and safety inspections',
          'Premises Security - emergency response, access control, CCTV systems',
          'Enabling Work Environment - collaborative workspaces and inclusivity'
        ]
      }
    },
    team: {
      qualifications: 'BSc Degrees in Electrical Engineering, EBK and IEK members',
      experience: 'More than 10 years field experience with industry giants like ABB and Schneider Electric',
      expertise: [
        'Power Systems Engineering - LV, MV, HV design and implementation',
        'Substation Design & Construction - comprehensive engineering from concept to commissioning',
        'Testing & Commissioning - certified specialists ensuring optimal performance',
        'Renewable Energy Systems - solar, wind, and hybrid systems integration',
        'Industrial Automation - SCADA systems, PLC programming',
        'Project Management - end-to-end delivery of complex engineering projects'
      ]
    },
    projects: {
      completed: '50+ projects',
      industries: '4 Tier 1 Industries',
      clients: ['Devki Group', 'Equator Energy', 'Mehta Electricals', 'Mombasa Cement', 'Vipingo Ridge', 'Kenya Ports Authority']
    }
  };

  const generateResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    // Greeting responses
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! I'm here to help you with Blue Stud Engineering services. We specialize in electrical power systems, renewable energy, and facility management. What would you like to know?";
    }
    
    // Company information
    if (message.includes('company') || message.includes('about') || message.includes('who are you')) {
      return `Blue Stud Engineering Limited is a leading EPC company with 10+ years of experience specializing in electrical power systems and renewables. We're NCA & EPRA certified, serving Kenya nationwide and the East Africa region. Our team of qualified engineers holds BSc degrees and are EBK/IEK certified members.`;
    }
    
    // Services inquiries
    if (message.includes('service') || message.includes('what do you do')) {
      return `We offer comprehensive electrical engineering services:

🔹 **Power Systems Design** - LV, MV, HV engineering and renewable energy integration
🔹 **Installation & Construction** - Turnkey substation projects and distribution lines
🔹 **Testing & Commissioning** - Professional testing with IEC61850 integration
🔹 **Maintenance & Repair** - Preventive maintenance and emergency repair services
🔹 **Power Systems Training** - Professional development programs
🔹 **Facility Management** - Complete building operations and energy-saving solutions

Which service interests you most?`;
    }
    
    // Power systems specific
    if (message.includes('power system') || message.includes('substation') || message.includes('electrical')) {
      return `Our power systems expertise includes:

⚡ **LV, MV & HV Systems** - Complete design and implementation
⚡ **Substation Projects** - From concept design through commissioning
⚡ **Protection & Automation** - Advanced control systems
⚡ **Renewable Integration** - Solar, wind, and hybrid systems
⚡ **Load Flow Analysis** - Comprehensive system studies

We've completed major projects like Vipingo Ridge 132KV/11KV Substation and work with clients like Kenya Ports Authority.`;
    }
    
    // Training inquiries
    if (message.includes('training') || message.includes('course') || message.includes('learn')) {
      return `Our Power Systems Training programs include:

📚 Power systems fundamentals and advanced concepts
📚 Protection and automation systems training  
📚 Renewable energy integration workshops
📚 IEC61850 integration training
📚 Professional development & certification programs
📚 Hands-on practical sessions and simulations

All training is delivered by expert instructors with 10+ years experience and provides industry-recognized certifications.`;
    }
    
    // Contact information
    if (message.includes('contact') || message.includes('phone') || message.includes('email') || message.includes('reach')) {
      return `📞 **Contact Blue Stud Engineering:**

📱 Phone: +254 768 967 878
✉️ Email: info@bluestudengineering.com
📍 Location: Nairobi, Kenya
🕒 Business Hours: Monday - Friday, 8:00 AM - 4:30 PM

We serve Kenya nationwide, East Africa region, and handle international projects. Would you like to schedule a consultation?`;
    }
    
    // Project inquiries
    if (message.includes('project') || message.includes('consultation') || message.includes('quote')) {
      return `Ready to start your electrical engineering project? Here's how we can help:

🎯 **Free Consultation** - Discuss your project requirements
🎯 **Custom Solutions** - Tailored to your specific needs  
🎯 **Professional Team** - EBK certified engineers with 10+ years experience
🎯 **Proven Track Record** - 50+ completed projects across 4 Tier 1 industries
🎯 **End-to-End Service** - From concept design to commissioning

Contact us at +254 768 967 878 or click the WhatsApp button below to get started!`;
    }
    
    // Facility management
    if (message.includes('facility') || message.includes('building') || message.includes('maintenance')) {
      return `Our Facility Management services ensure optimal infrastructure performance:

🏢 **Building Operations** - Electrical, HVAC, lighting, mechanical systems
🌿 **Energy Saving Solutions** - Renewable energy, LED lighting, waste management
🔧 **Reliability Systems** - Technology monitoring and safety inspections
🔒 **Security Solutions** - Emergency response, access control, CCTV systems
👥 **Work Environment** - Collaborative spaces and inclusive design

We apply best practices like those used in the WHO Headquarters Geneva modernization project.`;
    }
    
    // Certifications and qualifications
    if (message.includes('certified') || message.includes('qualified') || message.includes('license')) {
      return `Blue Stud Engineering holds all major certifications:

✅ **EBK/IEK Certified** - Engineers Board of Kenya certification
✅ **NCA Licensed** - National Construction Authority  
✅ **EPRA Authorized** - Energy & Petroleum Regulatory Authority
✅ **Professional Engineers** - Chartered Engineering Status

Our engineers have BSc degrees in Electrical Engineering and extensive experience with industry leaders like ABB and Schneider Electric.`;
    }
    
    // Clients and projects
    if (message.includes('client') || message.includes('customer') || message.includes('reference')) {
      return `We're proud to serve leading industry clients:

🏭 **Devki Group** - Industrial electrical solutions
⚡ **Equator Energy** - Transformer repair and optimization
🏭 **Mehta Electricals** - Electrical systems projects
🏭 **Mombasa Cement** - Industrial power systems
🏖️ **Vipingo Ridge** - 132KV/11KV substation maintenance and retrofit
🚢 **Kenya Ports Authority** - Mombasa substation inspection and maintenance

With 50+ completed projects across 4 Tier 1 industries, we deliver proven excellence.`;
    }
    
    // Default response for unmatched queries
    return `I'd be happy to help you with information about Blue Stud Engineering! We specialize in:

• Electrical power systems (LV, MV, HV)
• Renewable energy solutions  
• Substation design & construction
• Testing & commissioning services
• Facility management
• Power systems training

Could you please be more specific about what you'd like to know? Or contact us directly at +254 768 967 878 for immediate assistance.`;
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = {
        type: 'bot',
        content: generateResponse(inputMessage),
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const quickQuestions = [
    "What services do you offer?",
    "Tell me about your company",
    "How can I contact you?",
    "Do you handle power system design?",
    "What are your certifications?"
  ];

  return (
    <>
      {/* Chat Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-20 right-4 z-40 bg-blue-600 hover:bg-blue-700 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200"
        title="Chat with Blue Stud Engineering AI Assistant"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-36 right-4 z-40 w-80 sm:w-96 h-96 bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-sm">Blue Stud AI Assistant</h3>
                <p className="text-xs text-blue-100">Online now</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-blue-100 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                  message.type === 'user' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  <div className="whitespace-pre-line">{message.content}</div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 px-3 py-2 rounded-lg text-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse animation-delay-200"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse animation-delay-400"></div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Quick Questions */}
            {messages.length === 1 && (
              <div className="space-y-2">
                <p className="text-xs text-gray-500 text-center">Quick questions:</p>
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setInputMessage(question);
                      setTimeout(handleSendMessage, 100);
                    }}
                    className="w-full text-left text-xs bg-blue-50 hover:bg-blue-100 text-blue-700 px-2 py-1 rounded border transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about our services..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                onClick={handleSendMessage}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;