import { useState, useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, Github } from "lucide-react";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (email === "user1@example.com" && password === "password123") {
        login({
          id: 1,
          email,
          token: "sample-jwt-token-123456",
        });

        if (remember) {
          localStorage.setItem("rememberUser", email);
        }

        navigate("/dashboard");
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center px-4">

      {/* ===== FAANG Animated Background ===== */}
      <div className="absolute inset-0 overflow-hidden">

        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-700 via-green-600 to-emerald-800 animate-gradientMove" />

        {/* Floating Light Blob 1 */}
        <div className="absolute w-[500px] h-[500px] bg-green-400/30 rounded-full blur-3xl animate-blob1 -top-32 -left-32" />

        {/* Floating Light Blob 2 */}
        <div className="absolute w-[500px] h-[500px] bg-emerald-300/30 rounded-full blur-3xl animate-blob2 bottom-[-120px] right-[-120px]" />

        {/* Soft Overlay Noise */}
        <div className="absolute inset-0 bg-noise opacity-[0.04]" />

      </div>

      {/* gradient blobs */}
      <div className="absolute w-[500px] h-[500px] bg-green-400/30 blur-3xl rounded-full -top-32 -left-32 animate-pulse" />
      <div className="absolute w-[500px] h-[500px] bg-emerald-300/30 blur-3xl rounded-full bottom-0 right-0 animate-pulse" />

      {/* Card Wrapper */}
      <div className="relative w-full max-w-[480px]">

        {/* Glow border */}
        <div className="p-[1px] rounded-3xl bg-gradient-to-br from-white/40 to-white/10">

          <form
            onSubmit={handleSubmit}
            className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-10 space-y-6"
          >
            {/* Header */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800">
                Welcome back
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                Sign in to continue
              </p>
            </div>

            {/* Error */}
            {error && (
              <div className="text-sm text-red-600 bg-red-50 border border-red-200 p-3 rounded-lg">
                {error}
              </div>
            )}

            {/* Email */}
            <div className="relative group">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-green-600 transition" size={18} />

              <input
                type="email"
                required
                placeholder=" "
                onChange={(e) => setEmail(e.target.value)}
                className="peer w-full pl-10 pr-4 py-3
                bg-transparent
                border border-gray-200
                rounded-xl
                outline-none
                transition
                focus:border-green-600
                focus:ring-4 focus:ring-green-600/10"
              />

              <label className="
                absolute left-10 top-3 text-gray-400 text-sm
                transition-all
                peer-placeholder-shown:top-3.5
                peer-focus:-top-2
                peer-focus:text-xs
                peer-focus:text-green-700
                bg-white/90 px-1 rounded">
                Email address
              </label>
            </div>

            {/* Password */}
            <div className="relative group">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-green-600 transition" size={18} />

              <input
                type={showPassword ? "text" : "password"}
                required
                placeholder=" "
                onChange={(e) => setPassword(e.target.value)}
                className="peer w-full pl-10 pr-10 py-3
                bg-transparent
                border border-gray-200
                rounded-xl
                outline-none
                transition
                focus:border-green-600
                focus:ring-4 focus:ring-green-600/10"
              />

              <label className="
                absolute left-10 top-3 text-gray-400 text-sm
                transition-all
                peer-placeholder-shown:top-3.5
                peer-focus:-top-2
                peer-focus:text-xs
                peer-focus:text-green-700
                bg-white/90 px-1 rounded">
                Password
              </label>

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* Remember */}
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={() => setRemember(!remember)}
                  className="accent-green-700"
                />
                Remember me
              </label>

              <span className="text-green-700 hover:underline cursor-pointer">
                Forgot password?
              </span>
            </div>

            {/* Sign In Button */}
            <button
              disabled={loading}
              className="
              w-full py-3 rounded-xl font-semibold text-white
              bg-gradient-to-r from-green-700 to-emerald-700
              hover:from-green-800 hover:to-emerald-800
              transition-all duration-300
              active:scale-[0.98]
              shadow-lg shadow-green-700/20
              flex justify-center items-center card-hover"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                "Sign In"
              )}
            </button>

            {/* Create Account */}
            <p className="text-center text-sm text-gray-500">
              Don’t have an account?{" "}
              <span className="text-green-700 font-medium hover:underline cursor-pointer">
                Create Account
              </span>
            </p>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-xs text-gray-400">
                OR CONTINUE WITH
              </span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-3">

              {/* Google */}
              <button
                type="button"
                className="flex items-center justify-center gap-2 border rounded-xl py-2 hover:bg-gray-50 transition card-hover"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google"
                  className="w-5 h-5"
                />
                Google
              </button>

              {/* Github */}
              <button
                type="button"
                className="flex items-center justify-center gap-2 border rounded-xl py-2 hover:bg-gray-50 transition card-hover"
              >
                <Github size={18} />
                GitHub
              </button>
            </div>

            <p className="text-xs text-center text-gray-400">
              Demo: user1@example.com / password123
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;