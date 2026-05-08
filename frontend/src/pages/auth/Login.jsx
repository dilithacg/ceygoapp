import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, AlertCircle, MapPin } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import API from "../../services/api";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="flex w-full max-w-5xl bg-white rounded-[2.5rem] shadow-xl overflow-hidden min-h-[650px] border border-slate-100">
        {/* LEFT SIDE */}
        <div className="hidden lg:flex lg:w-1/2 relative bg-blue-900">
          <img
            src="https://media.cntravellerme.com/photos/67d18d96d34064451a14d52e/4:3/w_6696,h_5022,c_limit/SRI%20LANKA%202025%20GettyImages-1643739335.jpg"
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-transparent to-transparent p-12 flex flex-col justify-end">
            <div className="flex items-center gap-2 mb-4 text-amber-400">
              <MapPin size={24} />
              <span className="font-bold uppercase">Ceygo Travel</span>
            </div>

            <h1 className="text-5xl font-bold text-white">
              Discover Sri Lanka
            </h1>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-1/2 p-8 md:p-16 flex flex-col justify-center">
          <h2 className="text-4xl font-extrabold mb-2">Ayubowan!</h2>
          <p className="text-slate-500 mb-6">Sign in to continue</p>

          {error && (
            <div className="flex items-center gap-2 bg-red-50 text-red-600 p-4 rounded-xl mb-4">
              <AlertCircle size={18} />
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            {/* EMAIL */}
            <div className="relative">
              <Mail className="absolute left-4 top-4 text-slate-400" />
              <input
                type="email"
                placeholder="Email"
                className="w-full pl-12 p-4 rounded-2xl bg-slate-50 border"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* PASSWORD */}
            <div className="relative">
              <Lock className="absolute left-4 top-4 text-slate-400" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full pl-12 pr-12 p-4 rounded-2xl bg-slate-50 border"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button
                type="button"
                className="absolute right-4 top-4"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>

            <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold">
              Sign In
            </button>
          </form>

          <p className="text-center mt-6 text-slate-500">
            Don't have account?{" "}
            <Link to="/register" className="text-blue-600 font-bold">
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
