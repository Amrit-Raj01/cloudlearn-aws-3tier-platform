import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, BookOpen, CheckCircle2, LockKeyhole, Mail } from "lucide-react";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Temporary frontend-only login
    console.log("Login data:", formData);

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <div className="grid min-h-screen lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="relative hidden overflow-hidden lg:flex">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/10 to-cyan-500/10" />

          <div className="relative z-10 flex w-full flex-col justify-between p-12 xl:p-16">

            <Link to="/" className="flex items-center gap-2 text-xl font-bold">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600">
                <BookOpen size={21} />
              </div>
              CloudLearn
            </Link>

            <div className="max-w-xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">
                Learn. Build. Deploy.
              </p>

              <h1 className="text-5xl font-bold leading-tight xl:text-6xl">
                Build the skills
                <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  the cloud demands.
                </span>
              </h1>

              <p className="mt-6 max-w-lg text-lg leading-8 text-slate-400">
                Learn AWS, cloud infrastructure, networking and modern
                architecture through practical, project-based learning.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Hands-on cloud projects",
                  "Real-world AWS architecture",
                  "Learn at your own pace",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 size={19} className="text-emerald-400" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <p className="text-sm text-slate-600">
              © 2026 CloudLearn. Learn cloud engineering.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center justify-center px-6 py-12 sm:px-10">
          <div className="w-full max-w-md">

            {/* Mobile logo */}
            <Link
              to="/"
              className="mb-10 flex items-center justify-center gap-2 text-xl font-bold lg:hidden"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600">
                <BookOpen size={21} />
              </div>
              CloudLearn
            </Link>

            <div className="mb-8">
              <p className="mb-2 text-sm font-medium text-indigo-400">
                Welcome back
              </p>

              <h2 className="text-3xl font-bold">
                Sign in to CloudLearn
              </h2>

              <p className="mt-2 text-slate-400">
                Continue your cloud learning journey.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* EMAIL */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Email address
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                  />

                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3.5 pl-11 pr-4 text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-500 focus:bg-white/[0.06]"
                  />
                </div>
              </div>

              {/* PASSWORD */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-medium text-slate-300">
                    Password
                  </label>

                  <button
                    type="button"
                    className="text-xs font-medium text-indigo-400 hover:text-indigo-300"
                  >
                    Forgot password?
                  </button>
                </div>

                <div className="relative">
                  <LockKeyhole
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                  />

                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3.5 pl-11 pr-20 text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-500 focus:bg-white/[0.06]"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-medium text-slate-500 hover:text-slate-300"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* REMEMBER */}
              <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-400">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-white/20 bg-white/5 accent-indigo-500"
                />
                Remember me
              </label>

              {/* BUTTON */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 py-3.5 font-semibold shadow-lg shadow-indigo-500/20 transition hover:scale-[1.01] hover:shadow-indigo-500/30"
              >
                Sign in
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </form>

            <div className="my-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-xs text-slate-600">OR</span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            <p className="text-center text-sm text-slate-400">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-semibold text-indigo-400 hover:text-indigo-300"
              >
                Create account
              </Link>
            </p>

            <Link
              to="/"
              className="mt-8 block text-center text-xs text-slate-600 transition hover:text-slate-400"
            >
              ← Back to CloudLearn
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}