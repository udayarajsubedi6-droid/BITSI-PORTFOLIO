import { ArrowRight, Code, TrendingUp, Shield, CheckCircle, Users, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

interface HeroProps {
  onNavigate: (page: 'contact') => void;
}

const testimonials = [
  {
    name: "Udaya Subedi",
    company: "Tech Innovations Inc.",
    role: "CEO",
    content: "BITSI transformed our digital infrastructure completely. Their cloud solutions reduced our operational costs by 40% while improving performance dramatically.",
    image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    name: "Udaya Subedi",
    company: "Global Retail Solutions",
    role: "CTO",
    content: "The custom development team at BITSI delivered our e-commerce platform ahead of schedule. Their attention to detail and technical expertise is unmatched.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    name: "Udaya Subedi",
    company: "FinanceFirst Group",
    role: "Managing Director",
    content: "Their investment advisory services have been exceptional. BITSI's strategic insights helped us achieve a 25% portfolio growth in just one year.",
    image: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    name: "Udaya Subedi",
    company: "Healthcare Systems Ltd.",
    role: "Operations Manager",
    content: "BITSI's cybersecurity solutions gave us peace of mind. Their proactive approach prevented multiple security threats and kept our patient data safe.",
    image: "https://images.pexels.com/photos/2128807/pexels-photo-2128807.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    name: "Udaya Subedi",
    company: "EduTech Solutions",
    role: "Founder",
    content: "The mobile app they developed for us has over 100K downloads. BITSI turned our vision into reality with their exceptional development skills.",
    image: "https://images.pexels.com/photos/3756523/pexels-photo-3756523.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  }
];

export default function Hero({ onNavigate }: HeroProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse 2s ease-in-out infinite;
        }

        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }
        .delay-4 { animation-delay: 0.4s; }
        .delay-5 { animation-delay: 0.5s; }
      `}</style>

      <section id="home" className="pt-24 pb-32 bg-gradient-to-b from-slate-50 via-green-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">
            <div className="space-y-8">
              <div className={`space-y-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1 h-8 bg-gradient-to-b from-green-600 to-emerald-500 rounded-full"></div>
                  <span className="text-sm font-semibold text-green-600">Welcome to BITSI</span>
                </div>
                <h1 className="text-6xl md:text-7xl font-bold text-gray-900 leading-tight">
                  Empowering Your
                  <span className="block bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">Digital Future</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Transform your business with cutting-edge IT solutions and strategic investment opportunities. We deliver innovation that drives growth and creates lasting impact.
                </p>
              </div>

              <div className={`flex flex-col sm:flex-row gap-4 ${isVisible ? 'animate-fade-in-up delay-2' : 'opacity-0'}`}>
                <button
                  onClick={() => onNavigate('contact')}
                  className="group bg-gradient-to-r from-green-600 to-emerald-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>
                <button
                  onClick={scrollToServices}
                  className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300 hover:scale-105"
                >
                  Explore Services
                </button>
              </div>

              <div className={`grid grid-cols-3 gap-4 pt-8 ${isVisible ? 'animate-fade-in-up delay-3' : 'opacity-0'}`}>
                <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex justify-center mb-3">
                    <Code className="text-green-600" size={28} />
                  </div>
                  <p className="text-sm text-gray-600 font-medium text-center">IT Solutions</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex justify-center mb-3">
                    <TrendingUp className="text-green-600" size={28} />
                  </div>
                  <p className="text-sm text-gray-600 font-medium text-center">Investment</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex justify-center mb-3">
                    <Shield className="text-green-600" size={28} />
                  </div>
                  <p className="text-sm text-gray-600 font-medium text-center">Secure & Trusted</p>
                </div>
              </div>
            </div>

            <div className={`relative hidden md:block ${isVisible ? 'animate-slide-in-right delay-4' : 'opacity-0'}`}>
              <div className="absolute -inset-4 bg-gradient-to-br from-green-600 to-emerald-500 rounded-3xl blur-2xl opacity-25 transition duration-1000 animate-pulse-slow"></div>

              <div className="relative bg-gradient-to-br from-white to-green-50 p-8 rounded-3xl shadow-2xl backdrop-blur-sm border border-white/80">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-green-200 to-emerald-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30"></div>

                <div className="relative space-y-6">
                  <div className="group bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100 hover:border-green-300 transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Zap className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">Innovation Driven</h3>
                        <p className="text-gray-600 text-sm">Leveraging latest technologies to deliver exceptional results</p>
                      </div>
                    </div>
                  </div>

                  <div className="group bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded-xl border border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Users className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">Client Focused</h3>
                        <p className="text-gray-600 text-sm">Tailored solutions that align with your business goals</p>
                      </div>
                    </div>
                  </div>

                  <div className="group bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100 hover:border-green-300 transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">Results Oriented</h3>
                        <p className="text-gray-600 text-sm">Measurable outcomes that drive growth and success</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`container mx-auto px-6 mt-20 ${isVisible ? 'animate-fade-in-up delay-5' : 'opacity-0'}`}>
          <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-lg mb-16">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent mb-2">500+</div>
                <p className="text-gray-600 font-medium">Projects Delivered</p>
              </div>
              <div className="text-center border-l border-r border-gray-200">
                <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent mb-2">200+</div>
                <p className="text-gray-600 font-medium">Satisfied Clients</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent mb-2">15+</div>
                <p className="text-gray-600 font-medium">Years Expertise</p>
              </div>
            </div>
          </div>

          {/* <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12 shadow-xl border border-green-100">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Happy Customers</h2>
              <p className="text-gray-600">See what our clients say about their experience with BITSI</p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg">
                <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-green-200"
                  />
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold text-gray-900">{testimonials[currentTestimonial].name}</h3>
                    <p className="text-green-600 font-medium">{testimonials[currentTestimonial].role}</p>
                    <p className="text-gray-600 text-sm">{testimonials[currentTestimonial].company}</p>
                  </div>
                </div>

                <p className="text-gray-700 text-lg leading-relaxed italic">
                  "{testimonials[currentTestimonial].content}"
                </p>

                <div className="flex justify-center gap-2 mt-8">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentTestimonial
                          ? 'bg-green-600 w-8'
                          : 'bg-gray-300 hover:bg-green-400'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-green-50 transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="text-green-600" size={24} />
              </button>

              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-green-50 transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="text-green-600" size={24} />
              </button>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}
