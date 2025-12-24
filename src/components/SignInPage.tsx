import React, { useState } from 'react';
import { Mail, Lock, User, ArrowLeft } from 'lucide-react';
import PixelSnow from './PixelSnow';

interface SignInPageProps {
  onBack: () => void;
}

const SignInPage: React.FC<SignInPageProps> = ({ onBack }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen relative bg-black flex items-center justify-center px-4">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/sample.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />

      {/* Gold PixelSnow Background */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        <PixelSnow
          color="#D4AF37"
          flakeSize={0.012}
          minFlakeSize={1.5}
          pixelResolution={150}
          speed={0.8}
          depthFade={5}
          farPlane={30}
          brightness={2.0}
          gamma={0.7}
          density={0.5}
          variant="square"
          direction={120}
        />
      </div>

      {/* Back Button */}
      <button
        onClick={onBack}
        className="absolute top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-gray-900/80 hover:bg-gray-800 text-white rounded-lg transition-all backdrop-blur-sm border border-gray-700"
      >
        <ArrowLeft size={20} />
        <span>Back to Home</span>
      </button>

      {/* Sign In Form */}
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-gradient-to-br from-gray-900/90 via-black/90 to-gray-900/90 backdrop-blur-xl p-8 rounded-2xl border-2 border-amber-600/40 shadow-2xl shadow-amber-600/20">
          {/* Header */}
          <div className="text-center mb-8">
            <img 
              src="/nallamala_house_iit_madras_logo.jpg" 
              alt="Nallamala House Logo" 
              className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-4 border-amber-500/50"
            />
            <h2 className="text-3xl font-bold text-amber-500 mb-2">
              {isLogin ? 'Welcome Back' : 'Join Nallamala House'}
            </h2>
            <p className="text-amber-200/80">
              {isLogin ? 'Sign in to access your account' : 'Create your account to get started'}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div>
                <label className="block text-amber-200 text-sm font-medium mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-500" size={20} />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 bg-black/50 border-2 border-amber-600/30 rounded-lg text-white placeholder-amber-200/40 focus:border-amber-500 focus:outline-none transition-all"
                    placeholder="Enter your name"
                    required={!isLogin}
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-amber-200 text-sm font-medium mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-500" size={20} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 bg-black/50 border-2 border-amber-600/30 rounded-lg text-white placeholder-amber-200/40 focus:border-amber-500 focus:outline-none transition-all"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-amber-200 text-sm font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-500" size={20} />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 bg-black/50 border-2 border-amber-600/30 rounded-lg text-white placeholder-amber-200/40 focus:border-amber-500 focus:outline-none transition-all"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            {isLogin && (
              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-amber-400 text-sm hover:text-amber-300 transition-colors"
                >
                  Forgot Password?
                </button>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-600 to-amber-500 text-white py-3 rounded-lg font-bold hover:from-amber-500 hover:to-amber-400 transition-all transform hover:scale-105 shadow-lg shadow-amber-600/30"
            >
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          {/* Toggle Form */}
          <div className="mt-6 text-center">
            <p className="text-amber-200/70">
              {isLogin ? "Don't have an account?" : 'Already have an account?'}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="ml-2 text-amber-400 font-semibold hover:text-amber-300 transition-colors"
              >
                {isLogin ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
