import React, { useState } from 'react';
import { Check, Star, Zap, Crown, ArrowRight, IndianRupee, ArrowLeft } from 'lucide-react';

const GigsPricingPage = ({ gig, onBack }) => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showPayment, setShowPayment] = useState(false);

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic',
      price: 15000,
      icon: <Star className="w-6 h-6 sm:w-8 sm:h-8" />,
      description: 'Perfect for getting started',
      features: [
        '1 Revision',
        '3-day delivery',
        'Basic design',
        'Source files included',
        'Email support'
      ],
      popular: false,
      gradient: 'from-teal-400 to-teal-500'
    },
    {
      id: 'standard',
      name: 'Standard',
      price: 25000,
      icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />,
      description: 'Most popular choice',
      features: [
        '3 Revisions',
        '2-day delivery',
        'Premium design',
        'Source files + extras',
        'Priority support',
        'Social media kit'
      ],
      popular: true,
      gradient: 'from-teal-500 to-teal-600'
    },
    {
      id: 'premium',
      name: 'Premium',
      price: 34000,
      icon: <Crown className="w-6 h-6 sm:w-8 sm:h-8" />,
      description: 'For the ultimate experience',
      features: [
        'Unlimited revisions',
        '1-day delivery',
        'Luxury design',
        'Complete package',
        '24/7 VIP support',
        'Social media kit',
        'Brand guidelines',
        'Commercial license'
      ],
      popular: false,
      gradient: 'from-teal-600 to-teal-700'
    }
  ];

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    setShowPayment(true);
  };

  const handlePayment = () => {
    alert(`Processing payment for ${selectedPlan.name} plan - ₹${selectedPlan.price}`);
    setShowPayment(false);
    setSelectedPlan(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-teal-100">
      {/* Back Button */}
      {onBack && (
        <div className="container mx-auto px-4 sm:px-6 pt-4 sm:pt-6">
          <button 
            onClick={onBack}
            className="flex items-center text-teal-600 hover:text-teal-700 transition-colors duration-200 text-sm sm:text-base cursor-pointer mt-10"
          >
            <ArrowLeft size={20} className="mr-2 hover:scale-100" />
            Back to Gigs
          </button>
        </div>
      )}

      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-teal-600 to-teal-800 bg-clip-text text-transparent mb-4 sm:mb-6 px-4">
            Professional Gigs
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-teal-700 max-w-2xl mx-auto leading-relaxed px-4">
            Choose the perfect package for your project. Quality work, delivered on time, every time.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 mx-2 sm:mx-0 ${
                plan.popular ? 'ring-2 sm:ring-4 ring-teal-500 ring-opacity-50' : ''
              }`}
              style={{
                animationDelay: `${index * 200}ms`
              }}
            >
              {plan.popular && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-3 sm:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-4 sm:p-6 lg:p-8">
                {/* Plan Header */}
                <div className="text-center mb-6 sm:mb-8">
                  <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-r ${plan.gradient} text-white mb-3 sm:mb-4 shadow-lg`}>
                    {plan.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                  <p className="text-sm sm:text-base text-teal-600 mb-3 sm:mb-4 px-2">{plan.description}</p>
                  <div className="mb-4 sm:mb-6">
                    <div className="flex items-center justify-center">
                      <IndianRupee className="w-4 h-4 sm:w-5 sm:h-5 text-gray-800" />
                      <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">{plan.price.toLocaleString()}</span>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-500">per project</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2 sm:space-y-3 lg:space-y-4 mb-6 sm:mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 bg-teal-100 rounded-full flex items-center justify-center mr-2 sm:mr-3 mt-0.5">
                        <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-teal-600" />
                      </div>
                      <span className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handleSelectPlan(plan)}
                  className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xlcursor-pointer ${
                    plan.popular
                      ? 'bg-gradient-to-r from-teal-500 to-teal-600 text-white hover:from-teal-600 hover:to-teal-700'
                      : 'bg-white border-2 border-teal-500 text-teal-600 hover:bg-teal-50'
                  }`}
                >
                  <span className="flex items-center justify-center">
                    Choose {plan.name}
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center px-4">
          <div className="inline-flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-8 bg-white rounded-2xl px-4 sm:px-6 lg:px-8 py-4 sm:py-4 shadow-lg max-w-full overflow-hidden">
            <div className="text-center">
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-teal-600">500+</div>
              <div className="text-xs sm:text-sm text-gray-600">Happy Clients</div>
            </div>
            <div className="hidden sm:block h-8 w-px bg-gray-300"></div>
            <div className="text-center">
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-teal-600">99%</div>
              <div className="text-xs sm:text-sm text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="hidden sm:block h-8 w-px bg-gray-300"></div>
            <div className="text-center">
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-teal-600">24/7</div>
              <div className="text-xs sm:text-sm text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      {showPayment && selectedPlan && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 max-w-sm sm:max-w-md w-full shadow-2xl transform animate-scale-in max-h-screen overflow-y-auto">
            <div className="text-center mb-4 sm:mb-6">
              <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-r ${selectedPlan.gradient} text-white mb-3 sm:mb-4`}>
                {selectedPlan.icon}
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-2">Confirm Your Order</h3>
              <p className="text-sm sm:text-base text-gray-600 px-2">You've selected the {selectedPlan.name} package</p>
            </div>

            <div className="bg-teal-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6">
              <div className="flex justify-between items-center mb-2 sm:mb-4">
                <span className="text-sm sm:text-base text-gray-700 font-medium">{selectedPlan.name} Package</span>
                <div className="flex items-center">
                  <IndianRupee className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600" />
                  <span className="text-lg sm:text-xl lg:text-2xl font-bold text-teal-600">{selectedPlan.price.toLocaleString()}</span>
                </div>
              </div>
              <div className="text-xs sm:text-sm text-gray-600">
                {selectedPlan.description}
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <button
                onClick={handlePayment}
                className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base lg:text-lg hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer"
              >
                <div className="flex items-center justify-center">
                  Make Payment - 
                  <IndianRupee className="w-4 h-4 ml-1" />
                  {selectedPlan.price.toLocaleString()}
                </div>
              </button>
              <button
                onClick={() => setShowPayment(false)}
                className="w-full bg-gray-100 text-gray-600 py-2 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl font-medium text-sm sm:text-base hover:bg-gray-200 transition-all duration-300 cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }

        /* Custom scrollbar for modal */
        .overflow-y-auto::-webkit-scrollbar {
          width: 4px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: #14b8a6;
          border-radius: 4px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: #0d9488;
        }
      `}</style>
    </div>
  );
};

export default GigsPricingPage;