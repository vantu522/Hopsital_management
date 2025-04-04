import React, { useState } from "react";
import { Lock, UserPlus, Mail, Eye, EyeOff, CheckCircle, AlertCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    // Validate name
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Họ tên không được để trống";
    }
    
    // Validate email
    if (!formData.email) {
      newErrors.email = "Email không được để trống";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email không hợp lệ";
    }
    
    // Validate password
    if (!formData.password) {
      newErrors.password = "Mật khẩu không được để trống";
    } else if (formData.password.length < 8) {
      newErrors.password = "Mật khẩu phải có ít nhất 8 ký tự";
    }
    
    // Validate confirm password
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Mật khẩu không khớp";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      // Giả lập đăng ký với độ trễ
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log("Đăng ký thành công:", formData);
      // Thực hiện đăng ký thực tế ở đây
      
      // Reset form sau khi đăng ký thành công
      setFormData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      
      // Hiển thị thông báo thành công hoặc chuyển hướng đến trang đăng nhập
      alert("Đăng ký thành công! Vui lòng đăng nhập.");
    } catch (error) {
      console.error("Lỗi khi đăng ký:", error);
      alert("Đăng ký thất bại. Vui lòng thử lại sau.");
    } finally {
      setIsLoading(false);
    }
  };

  const getPasswordStrength = (password: string) => {
    if (!password) return { strength: 0, text: "", color: "" };
    
    const hasLower = /[a-z]/.test(password);
    const hasUpper = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const length = password.length;
    
    let strength = 0;
    if (hasLower) strength += 1;
    if (hasUpper) strength += 1;
    if (hasNumber) strength += 1;
    if (hasSpecial) strength += 1;
    if (length >= 8) strength += 1;
    
    const strengthMap = [
      { text: "", color: "" },
      { text: "Rất yếu", color: "bg-red-500" },
      { text: "Yếu", color: "bg-orange-500" },
      { text: "Trung bình", color: "bg-yellow-500" },
      { text: "Mạnh", color: "bg-blue-500" },
      { text: "Rất mạnh", color: "bg-green-500" }
    ];
    
    return { strength, ...strengthMap[strength] };
  };

  const passwordStrength = getPasswordStrength(formData.password);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Left panel with background image */}
      <div className="hidden lg:flex lg:w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('https://via.placeholder.com/1000x1600?text=Hospital+Management')" }}>
        <div className="w-full flex flex-col items-center justify-center px-12 bg-blue-900/40">
          <div className="max-w-md text-white text-center">
            <h1 className="text-4xl font-bold mb-6">Chào mừng đến với Hệ thống Quản lý Bệnh viện</h1>
            <p className="text-lg mb-8">Tạo tài khoản để trải nghiệm hệ thống quản lý bệnh viện thông minh và hiệu quả.</p>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <blockquote className="text-lg italic">
                "Chăm sóc sức khỏe thông minh, quản lý dễ dàng"
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right panel - Registration form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8">
          <div className="mb-6">
            <Link to="/" className="flex items-center text-blue-600 mb-3">
              <ArrowLeft size={18} className="mr-1" />
              <span className="text-sm">Quay lại trang chủ</span>
            </Link>
            <h2 className="text-2xl font-bold text-gray-800">Tạo tài khoản mới</h2>
            <p className="text-gray-600 mt-2">Điền thông tin bên dưới để đăng ký tài khoản</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                Họ và tên
              </label>
              <div className={`flex items-center border rounded-lg overflow-hidden ${errors.fullName ? 'border-red-500' : 'border-gray-300 focus-within:border-blue-500'}`}>
                <div className="px-3 py-2 bg-gray-50">
                  <UserPlus size={20} className="text-gray-500" />
                </div>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="flex-1 px-3 py-2 outline-none"
                  placeholder="Họ và tên của bạn"
                />
              </div>
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-500 flex items-center">
                  <AlertCircle size={14} className="mr-1" />
                  {errors.fullName}
                </p>
              )}
            </div>
            
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <div className={`flex items-center border rounded-lg overflow-hidden ${errors.email ? 'border-red-500' : 'border-gray-300 focus-within:border-blue-500'}`}>
                <div className="px-3 py-2 bg-gray-50">
                  <Mail size={20} className="text-gray-500" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="flex-1 px-3 py-2 outline-none"
                  placeholder="Email của bạn"
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-500 flex items-center">
                  <AlertCircle size={14} className="mr-1" />
                  {errors.email}
                </p>
              )}
            </div>
            
            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Mật khẩu
              </label>
              <div className={`flex items-center border rounded-lg overflow-hidden ${errors.password ? 'border-red-500' : 'border-gray-300 focus-within:border-blue-500'}`}>
                <div className="px-3 py-2 bg-gray-50">
                  <Lock size={20} className="text-gray-500" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="flex-1 px-3 py-2 outline-none"
                  placeholder="Tạo mật khẩu"
                />
                <button 
                  type="button" 
                  className="px-3 py-2 text-gray-500 hover:text-gray-700"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-500 flex items-center">
                  <AlertCircle size={14} className="mr-1" />
                  {errors.password}
                </p>
              )}
              
              {/* Password strength meter */}
              {formData.password && (
                <div className="mt-2">
                  <div className="flex h-1 rounded-full bg-gray-200 overflow-hidden">
                    <div 
                      className={`${passwordStrength.color}`}
                      style={{ width: `${(passwordStrength.strength / 5) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-xs mt-1 text-gray-600 flex items-center">
                    {passwordStrength.text && (
                      <>
                        <span className="font-medium">Độ mạnh: </span>
                        <span className="ml-1">{passwordStrength.text}</span>
                      </>
                    )}
                  </p>
                </div>
              )}
            </div>
            
            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Xác nhận mật khẩu
              </label>
              <div className={`flex items-center border rounded-lg overflow-hidden ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300 focus-within:border-blue-500'}`}>
                <div className="px-3 py-2 bg-gray-50">
                  <Lock size={20} className="text-gray-500" />
                </div>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="flex-1 px-3 py-2 outline-none"
                  placeholder="Nhập lại mật khẩu"
                />
                <button 
                  type="button" 
                  className="px-3 py-2 text-gray-500 hover:text-gray-700"
                  onClick={toggleConfirmPasswordVisibility}
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.confirmPassword ? (
                <p className="mt-1 text-sm text-red-500 flex items-center">
                  <AlertCircle size={14} className="mr-1" />
                  {errors.confirmPassword}
                </p>
              ) : (
                formData.confirmPassword && formData.password === formData.confirmPassword && (
                  <p className="mt-1 text-sm text-green-500 flex items-center">
                    <CheckCircle size={14} className="mr-1" />
                    Mật khẩu khớp
                  </p>
                )
              )}
            </div>
            
            {/* Submit button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors ${
                isLoading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Đang xử lý...
                </span>
              ) : (
                "Đăng ký"
              )}
            </button>
            
            {/* Login link */}
            <div className="text-center pt-2">
              <p className="text-sm text-gray-600">
                Đã có tài khoản?{" "}
                <Link to="/login" className="text-blue-600 hover:text-blue-800 font-medium">
                  Đăng nhập
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;