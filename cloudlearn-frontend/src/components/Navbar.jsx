import { Link } from "react-router-dom";
import {
  Search,
  Menu,
  X,
  BookOpen,
  User,
} from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 shadow-lg shadow-violet-500/20">
            <BookOpen size={21} />
          </div>

          <div>
            <div className="text-lg font-bold tracking-tight">
              Cloud<span className="text-violet-400">Learn</span>
            </div>

            <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
              Learn. Build. Scale.
            </div>
          </div>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            Home
          </Link>

          <Link
            to="/courses"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            Courses
          </Link>

          <a
            href="#categories"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            Categories
          </a>

          <a
            href="#about"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            About
          </a>
        </div>

        {/* Right */}
        <div className="hidden items-center gap-3 md:flex">

          <button className="rounded-xl border border-white/10 p-2.5 text-slate-400 transition hover:border-white/20 hover:text-white">
            <Search size={18} />
          </button>

          <Link
            to="/login"
            className="px-4 py-2 text-sm text-slate-300 hover:text-white"
          >
            Sign in
          </Link>

          <Link
            to="/register"
            className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg border border-white/10 p-2 md:hidden"
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#080b1a] px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">

            <Link to="/" onClick={() => setMobileOpen(false)}>
              Home
            </Link>

            <Link to="/courses" onClick={() => setMobileOpen(false)}>
              Courses
            </Link>

            <a href="#categories">
              Categories
            </a>

            <a href="#about">
              About
            </a>

            <div className="h-px bg-white/10" />

            <Link
              to="/login"
              className="text-slate-300"
            >
              Sign in
            </Link>

            <Link
              to="/register"
              className="rounded-xl bg-white px-5 py-3 text-center font-semibold text-slate-950"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}