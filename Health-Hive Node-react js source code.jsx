import React, { useState } from 'react';
import { Brain, Guitar as Hospital, FileText, Search, ChevronRight, Menu, X, Upload, AlertCircle, Mail, Lock, UserCircle, Building2, Users, Award } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [symptoms, setSymptoms] = useState('');
  const [showLogin, setShowLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempted with:', email, password);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Navigation */}
      <nav className="bg-gray-900 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-gray-200" />
              <span className="ml-2 text-xl font-bold text-gray-200">HealthHive</span>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-200 hover:text-white"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#symptoms" className="text-gray-200 hover:text-white">Symptom Checker</a>
              <a href="#hospitals" className="text-gray-200 hover:text-white">Find Hospitals</a>
              <a href="#records" className="text-gray-200 hover:text-white">Health Records</a>
              <a href="#about" className="text-gray-200 hover:text-white">About Us</a>
              <button 
                onClick={() => setShowLogin(true)}
                className="bg-white text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-100 transition"
              >
                Login
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#symptoms" className="block px-3 py-2 text-gray-200 hover:bg-gray-700">Symptom Checker</a>
              <a href="#hospitals" className="block px-3 py-2 text-gray-200 hover:bg-gray-700">Find Hospitals</a>
              <a href="#records" className="block px-3 py-2 text-gray-200 hover:bg-gray-700">Health Records</a>
              <a href="#about" className="block px-3 py-2 text-gray-200 hover:bg-gray-700">About Us</a>
              <button 
                onClick={() => setShowLogin(true)}
                className="block w-full text-left px-3 py-2 text-gray-200 hover:bg-gray-700"
              >
                Login
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Login</h2>
              <button
                onClick={() => setShowLogin(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="mt-1 relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-gray-500 focus:border-gray-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1 relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-gray-500 focus:border-gray-500"
                    placeholder="Enter your password"
                    required
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-500">
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Sign in
              </button>
              <div className="text-center text-sm text-gray-600">
                Don't have an account?{' '}
                <a href="#" className="text-gray-600 hover:text-gray-500">
                  Sign up
                </a>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block">Your Health,</span>
                  <span className="block text-gray-300">Powered by AI</span>
                </h1>
                <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Experience healthcare reimagined with AI-driven insights, personalized recommendations, and seamless access to medical professionals.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a href="#symptoms" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10">
                      Start Health Check
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Medical professional using technology"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-gray-300 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              AI-Powered Healthcare Solutions
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {/* Feature cards */}
              <div className="relative bg-gray-800 p-6 rounded-xl">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-gray-900">
                  <Brain className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-white">AI Symptom Predictor</p>
                <p className="mt-2 ml-16 text-base text-gray-300">
                  Get instant AI-powered analysis of your symptoms and recommended next steps.
                </p>
              </div>

              <div className="relative bg-gray-800 p-6 rounded-xl">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-gray-900">
                  <Hospital className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-white">Smart Hospital Finder</p>
                <p className="mt-2 ml-16 text-base text-gray-300">
                  Find the best hospitals near you based on your specific needs and conditions.
                </p>
              </div>

              <div className="relative bg-gray-800 p-6 rounded-xl">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-gray-900">
                  <FileText className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-white">Health Records Dashboard</p>
                <p className="mt-2 ml-16 text-base text-gray-300">
                  Securely store and analyze your health records with AI-powered insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Symptom Checker Section */}
      <div id="symptoms" className="py-12 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-10">
            <h2 className="text-3xl font-extrabold text-white">AI Symptom Checker</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
              Describe your symptoms and get instant AI-powered analysis
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <textarea
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-gray-500 focus:border-gray-500"
                placeholder="Describe your symptoms here..."
              />
              <button className="mt-4 w-full bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition flex items-center justify-center">
                <AlertCircle className="h-5 w-5 mr-2" />
                Analyze Symptoms
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hospital Finder Section */}
      <div id="hospitals" className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-10">
            <h2 className="text-3xl font-extrabold text-white">Find Hospitals Near You</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
              Locate the best healthcare facilities based on your needs
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="flex gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Enter your location"
                  className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-gray-500 focus:border-gray-500"
                />
                <button className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
                  <Search className="h-5 w-5" />
                </button>
              </div>
              <div className="space-y-2">
                <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-gray-500 focus:border-gray-500">
                  <option value="">Select Specialty</option>
                  <option value="cardiology">Cardiology</option>
                  <option value="neurology">Neurology</option>
                  <option value="pediatrics">Pediatrics</option>
                </select>
                <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-gray-500 focus:border-gray-500">
                  <option value="">Urgency Level</option>
                  <option value="emergency">Emergency</option>
                  <option value="urgent">Urgent Care</option>
                  <option value="routine">Routine</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Health Records Section */}
      <div id="records" className="py-12 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-10">
            <h2 className="text-3xl font-extrabold text-white">Smart Health Records</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
              Securely manage and analyze your health records
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="h-12 w-12 mx-auto text-gray-400" />
                <p className="mt-2 text-sm text-gray-600">
                  Drag and drop your health records here, or click to select files
                </p>
                <button className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800">
                  Upload Files
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center">
                <Brain className="h-8 w-8 text-white" />
                <span className="ml-2 text-xl font-bold text-white">HealthHive</span>
              </div>
              <p className="mt-2 text-gray-400">
                AI-powered healthcare platform for a better tomorrow
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#symptoms" className="text-gray-400 hover:text-white">Symptom Checker</a></li>
                <li><a href="#hospitals" className="text-gray-400 hover:text-white">Find Hospitals</a></li>
                <li><a href="#records" className="text-gray-400 hover:text-white">Health Records</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white">About Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">support@healthhive.com</p>
              <p className="text-gray-400">1-800-HEALTH-AI</p>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">&copy; 2025 HealthHive. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;