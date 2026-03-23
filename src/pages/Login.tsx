import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, Lock, ArrowRight, Eye, EyeOff, Shield, Star, Zap } from "lucide-react";
import { useState } from "react";
import logo from "../../src/assets/logo-removebg-preview (1).png"

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="h-screen w-full flex items-center justify-center bg-black p-4 lg:p-8 overflow-hidden ">
      {/* Main Card Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-5xl h-[85vh] bg-white rounded-[32px] shadow-2xl flex overflow-hidden"
      >
        
        {/* Left Side - Visual & Branding */}
        <div className="hidden lg:flex w-1/2 relative bg-gradient-to-br from-slate-100 to-slate-200/50 items-center justify-center overflow-hidden p-12">
          
          {/* Decorative Background Blob */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          {/* Content Container */}
          <div className="relative z-10 w-full h-full flex flex-col justify-between">
            
            {/* Floating Logo Section */}
            <div className="flex-1 flex items-center justify-center relative">
              {/* Main Floating Logo */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-30 p-8 bg-white/40 backdrop-blur-xl border border-white/50 rounded-3xl shadow-xl flex items-center justify-center"
              >
                <img 
                  src={logo} 
                  alt="PV Labs" 
                  className="h-28 w-auto object-contain relative z-10 filter drop-shadow-lg" 
                />
              </motion.div>

              {/* Orbiting Elements */}
              <motion.div
                animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-10 left-10 p-3 bg-white/60 backdrop-blur-md border border-white/40 rounded-2xl shadow-lg"
              >
                <Shield className="text-primary w-6 h-6" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 12, 0], x: [0, -5, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-20 right-10 p-3 bg-white/60 backdrop-blur-md border border-white/40 rounded-2xl shadow-lg"
              >
                <Star className="text-yellow-400 w-6 h-6 fill-yellow-400" />
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-20 right-12 p-2 bg-white/60 backdrop-blur-md border border-white/40 rounded-xl shadow-md"
              >
                <Zap className="text-blue-400 w-5 h-5 fill-blue-400" />
              </motion.div>
            </div>

            {/* Bottom Text */}
            <div className="text-center mt-8">
              <h2 className="text-3xl font-heading font-bold mb-4 leading-tight text-slate-800">
                Ignite Your <span className="gradient-text">Creative Potential</span>
              </h2>
              <p className="text-slate-600 font-medium">
                Join our community of innovators and start building the future today.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center px-8 lg:px-16 py-12 overflow-y-auto">
          <div className="w-full max-w-md mx-auto h-full flex flex-col justify-center">
              
            <motion.div 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              {/* Mobile Logo (Visible only on small screens) */}
              <div className="lg:hidden flex justify-center mb-6">
                 <img src={logo} alt="PV Labs" className="h-16 w-auto" />
              </div>

              <h1 className="font-heading text-3xl font-bold text-foreground mb-2">Welcome Back</h1>
              <p className="text-muted-foreground">
                Enter your credentials to access your account.
              </p>
            </motion.div>

            <div className="space-y-6">
              <button className="w-full flex items-center justify-center gap-3 py-3 rounded-xl border border-border hover:bg-secondary/50 transition-all font-medium text-foreground group">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                <span className="group-hover:text-primary transition-colors">Sign in with Google</span>
              </button>

              <div className="relative flex items-center py-2">
                <div className="flex-grow border-t border-border"></div>
                <span className="flex-shrink-0 mx-4 text-xs text-muted-foreground uppercase tracking-wider">Or continue with</span>
                <div className="flex-grow border-t border-border"></div>
              </div>

              <form className="space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email Address</label>
                  <div className="relative group">
                    <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" />
                    <input 
                      type="email" 
                      placeholder="name@example.com" 
                      className="w-full bg-secondary/30 border border-border rounded-xl pl-12 pr-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-foreground">Password</label>
                    <a href="#" className="text-xs font-medium text-primary hover:text-primary/80 transition-colors">Forgot password?</a>
                  </div>
                  <div className="relative group">
                    <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" />
                    <input 
                      type={showPassword ? "text" : "password"} 
                      placeholder="Enter your password" 
                      className="w-full bg-secondary/30 border border-border rounded-xl pl-12 pr-12 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" 
                    />
                    <button 
                      type="button" 
                      onClick={() => setShowPassword(!showPassword)} 
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <input type="checkbox" id="remember" className="w-4 h-4 rounded border-border text-primary focus:ring-primary/20" />
                  <label htmlFor="remember" className="text-sm text-muted-foreground select-none cursor-pointer">Remember me for 30 days</label>
                </div>

                <Link to="/dashboard" className="gradient-btn w-full py-4 text-sm font-bold tracking-wide flex items-center justify-center gap-2 rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all transform hover:-translate-y-0.5">
                  Sign In <ArrowRight size={18} />
                </Link>
              </form>

              <p className="text-center text-sm text-muted-foreground">
                Don't have an account? <Link to="/signup" className="text-primary font-semibold hover:underline ml-1">Create account</Link>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;