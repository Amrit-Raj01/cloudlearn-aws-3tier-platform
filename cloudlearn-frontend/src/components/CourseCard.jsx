import { Link } from "react-router-dom";
import {
  Clock,
  Star,
  Users,
  ArrowUpRight,
} from "lucide-react";

export default function CourseCard({ course }) {
  return (
    <Link
      to={`/courses/${course.id}`}
      className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] transition duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:bg-white/[0.06]"
    >

      {/* Image */}
      <div className="relative h-48 overflow-hidden">

        <img
          src={course.image}
          alt={course.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#070a18] via-transparent to-transparent" />

        <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs font-medium backdrop-blur-md">
          {course.level}
        </span>

        <span className="absolute bottom-4 right-4 rounded-lg bg-black/50 px-2.5 py-1 text-xs backdrop-blur-md">
          {course.duration}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">

        <div className="mb-2 text-xs font-medium uppercase tracking-wider text-violet-400">
          {course.category}
        </div>

        <h3 className="mb-3 line-clamp-2 text-lg font-semibold leading-snug text-white">
          {course.title}
        </h3>

        <p className="mb-5 line-clamp-2 text-sm leading-6 text-slate-400">
          {course.description}
        </p>

        <div className="mb-5 flex items-center justify-between text-xs text-slate-400">

          <div className="flex items-center gap-1.5">
            <Star
              size={14}
              className="fill-yellow-400 text-yellow-400"
            />
            <span className="text-white">
              {course.rating}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <Users size={14} />
            {course.students}
          </div>

        </div>

        <div className="flex items-center justify-between border-t border-white/10 pt-4">

          <span className="text-sm font-semibold text-white">
            {course.price}
          </span>

          <span className="flex items-center gap-1 text-sm font-medium text-violet-400 transition group-hover:text-violet-300">
            View course
            <ArrowUpRight size={15} />
          </span>

        </div>

      </div>
    </Link>
  );
}