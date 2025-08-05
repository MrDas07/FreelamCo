import React, { useState } from "react";
import {
  User,
  Briefcase,
  DollarSign,
  IndianRupee,
  Clock,
  MapPin,
  Star,
  Upload,
  Send,
  X,
} from "lucide-react";

export default function GigSubmissionForm() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    price: "",
    deliveryTime: "",
    location: "",
    skills: "",
    experience: "",
    portfolio: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState("");
  const [close, setclose] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      portfolio: e.target.files[0],
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    alert("Gig submitted successfully! 🎉");
    setIsSubmitting(false);

    // Reset form
    setFormData({
      title: "",
      category: "",
      description: "",
      price: "",
      deliveryTime: "",
      location: "",
      skills: "",
      experience: "",
      portfolio: null,
    });
  };

  const categories = [
    "Web Development",
    "Mobile Development",
    "UI/UX Design",
    "Digital Marketing",
    "Content Writing",
    "Video Editing",
    "Photography",
    "Data Analysis",
    "Consulting",
    "Other",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-600 via-white-600 to-cyan-500 p-4 relative overflow-hidden py-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white opacity-10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white opacity-5 rounded-full animate-spin"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold  mb-4 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            Create Your Gig
          </h1>
          <p className="text-xl text-white/80 font-light">
            Showcase your skills and connect with clients worldwide
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20">
          <div className="space-y-8">
            {/* Basic Info Section */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <button
                  onClick={() => setclose(true)}
                  className="absolute top-4 right-4 "
                >
                  <X size={20} className="text-teal-700 hover:text-grey-500 transition cursor-pointer" />
                </button>
                <label className="flex items-center text-gray-700 font-semibold mb-2">
                  <Briefcase className="w-5 h-5 mr-2 text-teal-600" />
                  Gig Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("title")}
                  onBlur={() => setFocusedField("")}
                  placeholder="I will create an amazing website for you"
                  className={`w-full px-6 py-4 rounded-xl border-2 transition-all duration-300 ${
                    focusedField === "title"
                      ? "border-teal-500 shadow-lg shadow-grey-200"
                      : "border-gray-200 hover:border-teal-300"
                  } focus:outline-none bg-white/70`}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center text-gray-700 font-semibold mb-2">
                  <Star className="w-5 h-5 mr-2 text-teal-600" />
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("category")}
                  onBlur={() => setFocusedField("")}
                  className={`w-full px-6 py-4 rounded-xl border-2 transition-all duration-300 ${
                    focusedField === "category"
                      ? "border-teal-500 shadow-lg shadow-grey-200"
                      : "border-gray-200 hover:teal-purple-300"
                  } focus:outline-none bg-white/70`}
                  required
                >
                  <option value="">Select a category</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label className="flex items-center text-gray-700 font-semibold mb-2">
                <User className="w-5 h-5 mr-2 text-teal-600" />
                Gig Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                onFocus={() => setFocusedField("description")}
                onBlur={() => setFocusedField("")}
                placeholder="Describe your service in detail. What will you deliver? What makes you unique?"
                rows="4"
                className={`w-full px-6 py-4 rounded-xl border-2 transition-all duration-300 ${
                  focusedField === "description"
                    ? "border-teal-500 shadow-lg shadow-teal-200"
                    : "border-gray-200 hover:border-teal-300"
                } focus:outline-none bg-white/70 resize-none`}
                required
              />
            </div>

            {/* Price and Delivery Time */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="flex items-center text-gray-700 font-semibold mb-2">
                  <IndianRupee className="w-5 h-5 mr-2 text-green-600" />
                  Starting Price
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("price")}
                  onBlur={() => setFocusedField("")}
                  placeholder="50"
                  min="5"
                  className={`w-full px-6 py-4 rounded-xl border-2 transition-all duration-300 ${
                    focusedField === "price"
                      ? "border-green-500 shadow-lg shadow-grey-200"
                      : "border-gray-200 hover:border-green-300"
                  } focus:outline-none bg-white/70`}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center text-gray-700 font-semibold mb-2">
                  <Clock className="w-5 h-5 mr-2 text-blue-600" />
                  Delivery Time
                </label>
                <select
                  name="deliveryTime"
                  value={formData.deliveryTime}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("deliveryTime")}
                  onBlur={() => setFocusedField("")}
                  className={`w-full px-6 py-4 rounded-xl border-2 transition-all duration-300 ${
                    focusedField === "deliveryTime"
                      ? "border-blue-500 shadow-lg shadow-grey-200"
                      : "border-gray-200 hover:border-blue-300"
                  } focus:outline-none bg-white/70`}
                  required
                >
                  <option value="">Select delivery time</option>
                  <option value="1">1 day</option>
                  <option value="3">3 days</option>
                  <option value="7">1 week</option>
                  <option value="14">2 weeks</option>
                  <option value="30">1 month</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="flex items-center text-gray-700 font-semibold mb-2">
                  <MapPin className="w-5 h-5 mr-2 text-red-600" />
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("location")}
                  onBlur={() => setFocusedField("")}
                  placeholder="Guwhati, Assam, India"
                  className={`w-full px-6 py-4 rounded-xl border-2 transition-all duration-300 ${
                    focusedField === "location"
                      ? "border-red-500 shadow-lg shadow-grey-200"
                      : "border-gray-200 hover:border-red-300"
                  } focus:outline-none bg-white/70`}
                  required
                />
              </div>
            </div>

            {/* Skills and Experience */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-gray-700 font-semibold mb-2 block">
                  Skills & Technologies
                </label>
                <input
                  type="text"
                  name="skills"
                  value={formData.skills}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("skills")}
                  onBlur={() => setFocusedField("")}
                  placeholder="React, Node.js, MongoDB, etc."
                  className={`w-full px-6 py-4 rounded-xl border-2 transition-all duration-300 ${
                    focusedField === "skills"
                      ? "border-teal-500 shadow-lg shadow-grey-200"
                      : "border-gray-200 hover:border-purple-300"
                  } focus:outline-none bg-white/70`}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-gray-700 font-semibold mb-2 block">
                  Experience Level
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("experience")}
                  onBlur={() => setFocusedField("")}
                  className={`w-full px-6 py-4 rounded-xl border-2 transition-all duration-300 ${
                    focusedField === "experience"
                      ? "border-teal-500 shadow-lg shadow-gery-200"
                      : "border-gray-200 hover:border-teal-300"
                  } focus:outline-none bg-white/70`}
                  required
                >
                  <option value="">Select experience level</option>
                  <option value="beginner">Beginner (0-1 years)</option>
                  <option value="intermediate">Intermediate (2-4 years)</option>
                  <option value="expert">Expert (5+ years)</option>
                </select>
              </div>
            </div>

            {/* Portfolio Upload */}
            <div className="space-y-2">
              <label className="flex items-center text-gray-700 font-semibold mb-2">
                <Upload className="w-5 h-5 mr-2 text-indigo-600" />
                Portfolio/Sample Work
              </label>
              <div className="relative">
                <input
                  type="file"
                  name="portfolio"
                  onChange={handleFileChange}
                  accept="image/*,.pdf,.doc,.docx"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="w-full px-6 py-8 rounded-xl border-2 border-dashed border-gray-300 hover:border-indigo-400 transition-all duration-300 text-center bg-white/50">
                  <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                  <p className="text-gray-600">
                    {formData.portfolio
                      ? formData.portfolio.name
                      : "Click to upload portfolio files"}
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    PNG, JPG, PDF, DOC up to 10MB
                  </p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-teal-600 to-teal-400 hover:from-teal-400 hover:to-teal-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-600 ease-in delay-75 cursor-pointer"
                } text-white flex items-center justify-center space-x-2`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                    <span>Creating Your Gig...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-6 h-6" />
                    <span>Create Gig</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
