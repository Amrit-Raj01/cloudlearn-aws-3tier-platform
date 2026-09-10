import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  LockKeyhole,
  Mail,
  User,
} from "lucide-react";
import { useState } from "react";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Temporary frontend-only registration
    console.log("Registration data:", formData);

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <div className="grid min-h-screen lg:grid-cols-2">

        {/* LEFT */}
        <div className="relative hidden overflow-hidden lg:flex">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-indigo-600/10 to-cyan-500/10" />

          <div className="relative z-10 flex w-full flex-col justify-between p-12 xl:p-16">

            <Link to="/" className="flex items-center gap-2 text-xl font-bold">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600">
                <BookOpen size={21} />
              </div>
              CloudLearn
            </Link>

            <div className="max-w-xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-purple-400">
                Start your journey
              </p>

              <h1 className="text-5xl font-bold leading-tight xl:text-6xl">
                Learn cloud.
                <span className="block bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                  Build your future.
                </span>
              </h1>

              <p className="mt-6 max-w-lg text-lg leading-8 text-slate-400">
                Create your CloudLearn account and start building practical
                skills in AWS, networking, infrastructure and cloud
                architecture.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-2xl font-bold">120+</p>
                  <p className="mt-1 text-sm text-slate-500">
                    Cloud courses
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-2xl font-bold">50K+</p>
                  <p className="mt-1 text-sm text-slate-500">
                    Learners
                  </p>
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-600">
              © 2026 CloudLearn. Learn cloud engineering.
            </p>
          </div>
        </div>

        {/* RIGHT */}
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
              <p className="mb-2 text-sm font-medium text-purple-400">
                Get started
              </p>

              <h2 className="text-3xl font-bold">
                Create your account
              </h2>

              <p className="mt-2 text-slate-400">
                Start learning cloud engineering today.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* NAME */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Full name
                </label>

                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                  />

                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3.5 pl-11 pr-4 text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-500 focus:bg-white/[0.06]"
                  />
                </div>
              </div>

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
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Password
                </label>

                <div className="relative">
                  <LockKeyhole
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                  />

                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    required
                    minLength={6}
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a password"
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

              {/* CONFIRM PASSWORD */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Confirm password
                </label>

                <div className="relative">
                  <CheckCircle2
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                  />

                  <input
                    type="password"
                    name="confirmPassword"
                    required
                    minLength={6}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3.5 pl-11 pr-4 text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-500 focus:bg-white/[0.06]"
                  />
                </div>
              </div>

              {/* TERMS */}
              <label className="flex cursor-pointer items-start gap-2 pt-2 text-xs leading-5 text-slate-500">
                <input
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 rounded border-white/20 bg-white/5 accent-indigo-500"
                />

                <span>
                  I agree to the CloudLearn terms and privacy policy.
                </span>
              </label>

              {/* BUTTON */}
              <button
                type="submit"
                className="group mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 py-3.5 font-semibold shadow-lg shadow-indigo-500/20 transition hover:scale-[1.01]"
              >
                Create account
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </form>

            <p className="mt-8 text-center text-sm text-slate-400">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-indigo-400 hover:text-indigo-300"
              >
                Sign in
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