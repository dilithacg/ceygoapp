import { useState } from "react";
import { User, Mail, Lock, Eye, EyeOff, Map } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import API from "../../services/api";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/register", {
        name,
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 py-12">
      <div className="flex w-full max-w-5xl bg-white rounded-[2.5rem] shadow-xl overflow-hidden border">
        {/* FORM SIDE */}
        <div className="w-full lg:w-1/2 p-8 md:p-16">
          <h2 className="text-4xl font-bold mb-2">Join Ceygo</h2>
          <p className="text-slate-500 mb-6">Start your journey</p>

          <form onSubmit={handleRegister} className="space-y-5">
            {/* NAME */}
            <div className="relative">
              <User className="absolute left-4 top-4 text-slate-400" />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full pl-12 p-4 border rounded-2xl bg-slate-50"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            {/* EMAIL */}
            <div className="relative">
              <Mail className="absolute left-4 top-4 text-slate-400" />
              <input
                type="email"
                placeholder="Email"
                className="w-full pl-12 p-4 border rounded-2xl bg-slate-50"
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
                className="w-full pl-12 p-4 border rounded-2xl bg-slate-50"
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
              Create Account
            </button>
          </form>

          <p className="text-center mt-6 text-slate-500">
            Already have account?{" "}
            <Link to="/login" className="text-blue-600 font-bold">
              Login
            </Link>
          </p>
        </div>

        {/* IMAGE SIDE */}
        <div className="hidden lg:flex lg:w-1/2 relative">
          <img
            src="https://www.scti.co.nz/-/media/project/scti/nz/images/social-media-thumbnails/reasons-to-visit-sri-lanka-thumbnail-1200x630.jpg"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-blue-900/30 flex flex-col justify-center items-center text-white">
            <Map size={50} className="text-amber-400 mb-4" />
            <h2 className="text-4xl font-bold">Explore Sri Lanka</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
