import { useState } from 'react';
import { ArrowRight, Bot, Database, BarChart3, Users, Headphones, TrendingUp } from 'lucide-react';

const getColorClasses = (color: string) => {
  const colors = {
    violet: {
      bg: "bg-violet-600/20",
      text: "text-violet-400",
      border: "border-violet-500/50",
      gradient: "from-violet-500 to-violet-600",
    },
    cyan: {
      bg: "bg-cyan-600/20", 
      text: "text-cyan-400",
      border: "border-cyan-500/50",
      gradient: "from-cyan-500 to-cyan-600",
    },
    purple: {
      bg: "bg-purple-600/20",
      text: "text-purple-400", 
      border: "border-purple-500/50",
      gradient: "from-purple-500 to-purple-600",
    },
    indigo: {
      bg: "bg-indigo-600/20",
      text: "text-indigo-400",
      border: "border-indigo-500/50", 
      gradient: "from-indigo-500 to-indigo-600",
    },
    emerald: {
      bg: "bg-emerald-600/20",
      text: "text-emerald-400",
      border: "border-emerald-500/50",
      gradient: "from-emerald-500 to-emerald-600",
    },
    orange: {
      bg: "bg-orange-600/20",
      text: "text-orange-400",
      border: "border-orange-500/50",
      gradient: "from-orange-500 to-orange-600",
    },
  }
  return colors[color as keyof typeof colors]
}

const ServiceCatalog = () => {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      title: "Customer Service",
      brief: "24/7 AI-powered customer support with natural language processing and real-time sentiment analysis.",
      description: "Our AI-driven customer experience platform combines natural language processing, sentiment analysis, and predictive modeling to deliver exceptional customer service. From intelligent chatbots to automated ticket routing, we ensure every customer interaction is optimized for satisfaction and efficiency.",
      features: [
        "Intelligent chatbots with 95% accuracy",
        "Real-time sentiment analysis", 
        "Automated ticket routing and prioritization",
        "Multilingual support in 15+ languages",
        "Predictive customer behavior modeling",
      ],
      kpis: [
        { label: "Customer Satisfaction", target: "95%", current: "92%" },
        { label: "First Contact Resolution", target: "85%", current: "78%" },
        { label: "Average Response Time", target: "<15s", current: "18s" },
      ],
      color: "violet",
      icon: Headphones,
    },
    {
      title: "Marketing",
      brief: "Intelligent helpdesk solutions with automated ticket routing and predictive maintenance.",
      description: "Advanced IT support automation that provides 24/7 technical assistance, proactive system monitoring, and intelligent problem resolution through machine learning algorithms.",
      features: [
        "Automated ticket routing and prioritization",
        "Predictive maintenance alerts",
        "Self-service knowledge base",
        "Real-time system monitoring",
        "Intelligent problem diagnosis",
      ],
      kpis: [
        { label: "Resolution Time", target: "2 hours", current: "3 hours" },
        { label: "First Call Resolution", target: "80%", current: "75%" },
        { label: "System Uptime", target: "99.9%", current: "99.7%" },
      ],
      color: "indigo",
      icon: Bot,
    },
    {
      title: "Sales",
      brief: "AI-driven lead generation, customer segmentation, and personalized marketing campaigns.",
      description: "Comprehensive sales and marketing automation that leverages AI to identify prospects, personalize campaigns, and optimize conversion rates through advanced analytics and machine learning.",
      features: [
        "AI-powered lead scoring and qualification",
        "Personalized marketing campaigns",
        "Customer journey optimization",
        "Sales forecasting and analytics",
        "Automated follow-up sequences",
      ],
      kpis: [
        { label: "Lead Conversion", target: "25%", current: "22%" },
        { label: "Campaign ROI", target: "400%", current: "350%" },
        { label: "Sales Cycle", target: "30 days", current: "35 days" },
      ],
      color: "orange",
      icon: TrendingUp,
    },
  ]

  return (
    <section className="flex flex-col items-center px-4 py-20 relative -z-10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-violet-400/10 to-pink-600/10 rounded-full blur-3xl"></div>
      </div>

      <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-7" data-aos="fade-down">Our Services</h1>
      <div className="w-full flex flex-col items-center space-y-10 max-w-6xl">
        <figure
          className="w-full h-auto flex flex-col md:flex-row items-start p-8 justify-center"
          data-aos="fade-up">
          <p className="md:w-2/3 text-center font-sans text-lg py-3">We provide comprehensive AI-powered BPO solutions that transform your business operations. Our intelligent automation reduces costs while enhancing efficiency and scalability across all your processes.</p>
        </figure>
        
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`group cursor-pointer transition-all duration-500 ${
                  activeService === index ? "scale-105" : "hover:scale-102"
                }`}
                onClick={() => setActiveService(index)}
              >
                <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 h-full border border-white/20">
                  <div className="space-y-6">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        activeService === index
                          ? `bg-gradient-to-br ${getColorClasses(service.color).gradient}`
                          : "bg-gray-100"
                      } transition-all duration-300`}
                    >
                      <IconComponent 
                        className={`w-6 h-6 ${
                          activeService === index ? "text-white" : getColorClasses(service.color).text
                        } transition-all duration-300`}
                      />
                    </div>

                    <div className="space-y-4">
                      <h3
                        className={`text-2xl font-bold font-sans transition-colors duration-300 ${
                          activeService === index ? getColorClasses(service.color).text : "text-brand-text"
                        }`}
                      >
                        {service.title}
                      </h3>
                      <p className="text-gray-600 font-sans leading-relaxed">{service.brief}</p>
                    </div>

                    <div className="pt-4">
                      <div className="w-full h-px bg-gray-200">
                        <div
                          className={`h-px bg-gradient-to-r ${getColorClasses(service.color).gradient} transition-all duration-500 ${
                            activeService === index ? "w-full" : "w-0"
                          }`}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/20 w-full">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className={`text-4xl font-bold font-sans mb-6 ${getColorClasses(services[activeService].color).text}`}>
                {services[activeService].title}
              </h3>
              <p className="text-lg text-gray-600 font-sans leading-relaxed max-w-2xl mx-auto">
                {services[activeService].description}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h4 className="text-2xl font-bold font-sans text-brand-text mb-8">Key Features</h4>
                <div className="space-y-4">
                  {services[activeService].features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div
                        className={`w-2 h-2 rounded-full mt-3 bg-gradient-to-r ${getColorClasses(services[activeService].color).gradient}`}
                      ></div>
                      <span className="text-gray-600 font-sans leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-2xl font-bold font-sans text-brand-text mb-8">Performance Targets</h4>
                <div className="space-y-6">
                  {services[activeService].kpis.map((kpi, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 font-sans">{kpi.label}</span>
                        <span
                          className={`text-2xl font-bold ${getColorClasses(services[activeService].color).text}`}
                        >
                          {kpi.target}
                        </span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full">
                        <div
                          className={`h-2 bg-gradient-to-r ${getColorClasses(services[activeService].color).gradient} rounded-full transition-all duration-1000`}
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Flowchart Section */}
            <div className="mt-16 text-center">
              <h4 className="text-2xl font-bold font-sans text-brand-text mb-8">Service Workflow</h4>
              <div className="bg-gray-100/50 backdrop-blur-sm p-8 rounded-lg border border-gray-200" style={{ minHeight: '300px' }}>
                <p className="text-gray-500">
                  [Placeholder for Flowchart Diagram - You can integrate an SVG, an image, or a dedicated flowchart library here.]
                </p>
              </div>
            </div>

            <div className="text-center mt-16">
              <button className="border border-brand-text text-brand-text font-bold py-3 px-8 rounded-full hover:bg-brand-text hover:text-white transition-all duration-300 flex items-center mx-auto">
                Learn More
                <ArrowRight className="ml-3 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceCatalog;