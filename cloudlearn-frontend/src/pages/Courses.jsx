import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  SlidersHorizontal,
  ChevronDown,
  ArrowRight,
  Star,
  Clock,
  Users,
  CheckCircle2,
  X,
} from "lucide-react";

import Navbar from "../components/Navbar";
import CourseCard from "../components/CourseCard";

const courses = [
  {
    id: "aws-cloud-foundations",
    title: "AWS Cloud Foundations",
    description:
      "Build a strong foundation in AWS services, cloud concepts, security and core infrastructure.",
    category: "AWS",
    level: "Beginner",
    duration: "8h 20m",
    rating: "4.9",
    students: "12.4K",
    price: "Free",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "aws-networking",
    title: "AWS Networking & VPC",
    description:
      "Master VPCs, subnets, route tables, internet gateways, NAT gateways and security groups.",
    category: "Networking",
    level: "Intermediate",
    duration: "6h 45m",
    rating: "4.8",
    students: "8.7K",
    price: "$29",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "cloud-architecture",
    title: "Designing Highly Available AWS Architectures",
    description:
      "Learn how to design scalable, reliable and highly available applications on AWS.",
    category: "Architecture",
    level: "Intermediate",
    duration: "10h 10m",
    rating: "4.9",
    students: "6.2K",
    price: "$39",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "aws-iam-security",
    title: "AWS IAM & Cloud Security",
    description:
      "Understand IAM users, roles, policies, permissions and fundamental AWS security practices.",
    category: "Security",
    level: "Beginner",
    duration: "5h 30m",
    rating: "4.8",
    students: "9.1K",
    price: "$19",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "linux-cloud",
    title: "Linux for Cloud Engineers",
    description:
      "Learn the Linux commands, processes, networking and administration skills used in cloud environments.",
    category: "Cloud",
    level: "Beginner",
    duration: "7h 15m",
    rating: "4.9",
    students: "15.8K",
    price: "Free",
    image:
      "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "terraform-aws",
    title: "Infrastructure as Code with Terraform",
    description:
      "Provision and manage AWS infrastructure using Terraform and Infrastructure as Code principles.",
    category: "DevOps",
    level: "Intermediate",
    duration: "9h 40m",
    rating: "4.9",
    students: "7.5K",
    price: "$35",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "aws-ec2",
    title: "AWS EC2 Deep Dive",
    description:
      "Understand EC2 instances, AMIs, security groups, storage, scaling and production workloads.",
    category: "AWS",
    level: "Intermediate",
    duration: "6h 10m",
    rating: "4.8",
    students: "10.3K",
    price: "$25",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "cloud-databases",
    title: "Cloud Databases with Amazon RDS",
    description:
      "Learn relational databases in the cloud with Amazon RDS, backups, security and availability.",
    category: "Databases",
    level: "Intermediate",
    duration: "5h 50m",
    rating: "4.7",
    students: "5.9K",
    price: "$24",
    image:
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1000&q=80",
  },
];

const categories = [
  "All",
  "AWS",
  "Cloud",
  "Networking",
  "Architecture",
  "Security",
  "Databases",
  "DevOps",
];

const levels = [
  "All levels",
  "Beginner",
  "Intermediate",
  "Advanced",
];

export default function Courses() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [level, setLevel] = useState("All levels");
  const [sort, setSort] = useState("Popular");
  const [mobileFilters, setMobileFilters] = useState(false);

  const filteredCourses = useMemo(() => {
    let result = [...courses];

    // Search
    if (search.trim()) {
      const query = search.toLowerCase();

      result = result.filter(
        (course) =>
          course.title.toLowerCase().includes(query) ||
          course.description.toLowerCase().includes(query) ||
          course.category.toLowerCase().includes(query)
      );
    }

    // Category
    if (category !== "All") {
      result = result.filter(
        (course) => course.category === category
      );
    }

    // Level
    if (level !== "All levels") {
      result = result.filter(
        (course) => course.level === level
      );
    }

    // Sort
    if (sort === "Rating") {
      result.sort(
        (a, b) => Number(b.rating) - Number(a.rating)
      );
    }

    if (sort === "Students") {
      result.sort(
        (a, b) =>
          parseFloat(b.students) - parseFloat(a.students)
      );
    }

    return result;
  }, [search, category, level, sort]);

  const clearFilters = () => {
    setSearch("");
    setCategory("All");
    setLevel("All levels");
    setSort("Popular");
  };

  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 pb-24 pt-32">

        {/* =========================================
            HEADER
        ========================================= */}

        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/[0.12] via-indigo-500/[0.05] to-transparent px-7 py-12 sm:px-12 sm:py-16">

          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-violet-600/20 blur-[100px]" />

          <div className="relative max-w-3xl">

            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
              Learning library
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Build skills that
              <span className="block bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                move your career forward.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              Explore practical courses in AWS, cloud infrastructure,
              networking, security and modern cloud architecture.
            </p>

          </div>

          {/* Search */}
          <div className="relative mt-9 max-w-3xl">

            <div className="flex items-center rounded-2xl border border-white/10 bg-black/30 px-4 shadow-xl backdrop-blur-xl">

              <Search
                size={21}
                className="shrink-0 text-slate-500"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search AWS, networking, security..."
                className="w-full bg-transparent px-4 py-4 text-sm text-white outline-none placeholder:text-slate-600 sm:text-base"
              />

              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="rounded-lg p-1.5 text-slate-500 hover:text-white"
                >
                  <X size={18} />
                </button>
              )}

            </div>

          </div>

        </section>


        {/* =========================================
            FEATURED COURSE
        ========================================= */}

        <section className="mt-14">

          <div className="mb-6 flex items-center justify-between">

            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-violet-400">
                Featured
              </p>

              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                Start with the essentials
              </h2>
            </div>

          </div>

          <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035]">

            <div className="grid lg:grid-cols-[1.1fr_.9fr]">

              {/* Image */}
              <div className="relative min-h-[280px] overflow-hidden lg:min-h-[360px]">

                <img
                  src={courses[0].image}
                  alt={courses[0].title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#070a18] via-black/20 to-transparent" />

                <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs font-semibold backdrop-blur-md">
                  ⭐ Most popular
                </div>

              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-7 sm:p-10">

                <div className="text-xs font-semibold uppercase tracking-widest text-violet-400">
                  AWS • Beginner
                </div>

                <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                  AWS Cloud Foundations
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  Build the foundation you need to understand cloud
                  computing and start working with AWS infrastructure.
                </p>

                <div className="mt-6 flex flex-wrap gap-5 text-sm text-slate-400">

                  <span className="flex items-center gap-2">
                    <Clock size={16} />
                    8h 20m
                  </span>

                  <span className="flex items-center gap-2">
                    <Star
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />
                    <span className="text-white">
                      4.9
                    </span>
                  </span>

                  <span className="flex items-center gap-2">
                    <Users size={16} />
                    12.4K learners
                  </span>

                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">

                  <Link
                    to="/courses/aws-cloud-foundations"
                    className="group/button flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-slate-950 transition hover:bg-slate-200"
                  >
                    View course
                    <ArrowRight
                      size={17}
                      className="transition group-hover/button:translate-x-1"
                    />
                  </Link>

                  <span className="text-lg font-bold text-white">
                    Free
                  </span>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =========================================
            COURSE LIBRARY
        ========================================= */}

        <section className="mt-16">

          {/* Top */}
          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">

            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-violet-400">
                All courses
              </p>

              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                Explore the library
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                {filteredCourses.length}{" "}
                {filteredCourses.length === 1
                  ? "course"
                  : "courses"}{" "}
                available
              </p>
            </div>


            {/* Sort */}
            <div className="relative flex items-center gap-3">

              <span className="hidden text-sm text-slate-500 sm:block">
                Sort by
              </span>

              <div className="relative">

                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none rounded-xl border border-white/10 bg-white/[0.04] py-3 pl-4 pr-10 text-sm text-white outline-none hover:bg-white/[0.07]"
                >
                  <option
                    value="Popular"
                    className="bg-[#0b1020]"
                  >
                    Popular
                  </option>

                  <option
                    value="Rating"
                    className="bg-[#0b1020]"
                  >
                    Highest rated
                  </option>

                  <option
                    value="Students"
                    className="bg-[#0b1020]"
                  >
                    Most students
                  </option>
                </select>

                <ChevronDown
                  size={16}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
                />

              </div>

            </div>

          </div>


          {/* Mobile filter button */}
          <button
            onClick={() => setMobileFilters(!mobileFilters)}
            className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium lg:hidden"
          >
            <SlidersHorizontal size={17} />
            {mobileFilters ? "Hide filters" : "Show filters"}
          </button>


          <div className="mt-8 grid gap-10 lg:grid-cols-[220px_1fr]">

            {/* =========================================
                SIDEBAR
            ========================================= */}

            <aside
              className={`${
                mobileFilters ? "block" : "hidden"
              } lg:block`}
            >

              <div className="sticky top-28">

                <div className="mb-5 text-sm font-semibold text-white">
                  Categories
                </div>

                <div className="space-y-1">

                  {categories.map((item) => (

                    <button
                      key={item}
                      onClick={() => setCategory(item)}
                      className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition ${
                        category === item
                          ? "bg-violet-500/10 font-medium text-violet-300"
                          : "text-slate-400 hover:bg-white/[0.04] hover:text-white"
                      }`}
                    >
                      <span>{item}</span>

                      {category === item && (
                        <CheckCircle2 size={15} />
                      )}

                    </button>

                  ))}

                </div>


                <div className="my-7 h-px bg-white/10" />


                <div className="mb-5 text-sm font-semibold text-white">
                  Difficulty
                </div>

                <div className="space-y-1">

                  {levels.map((item) => (

                    <button
                      key={item}
                      onClick={() => setLevel(item)}
                      className={`flex w-full rounded-lg px-3 py-2.5 text-left text-sm transition ${
                        level === item
                          ? "bg-violet-500/10 font-medium text-violet-300"
                          : "text-slate-400 hover:bg-white/[0.04] hover:text-white"
                      }`}
                    >
                      {item}
                    </button>

                  ))}

                </div>


                <button
                  onClick={clearFilters}
                  className="mt-7 text-sm text-slate-500 transition hover:text-white"
                >
                  Clear all filters
                </button>

              </div>

            </aside>


            {/* =========================================
                RESULTS
            ========================================= */}

            <div>

              {filteredCourses.length > 0 ? (

                <div className="grid gap-6 md:grid-cols-2">

                  {filteredCourses.map((course) => (
                    <CourseCard
                      key={course.id}
                      course={course}
                    />
                  ))}

                </div>

              ) : (

                <div className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-white/[0.02] px-6 text-center">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5">
                    <Search
                      size={24}
                      className="text-slate-500"
                    />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold">
                    No courses found
                  </h3>

                  <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
                    Try changing your search or removing one of
                    the filters.
                  </p>

                  <button
                    onClick={clearFilters}
                    className="mt-6 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-slate-950"
                  >
                    Clear filters
                  </button>

                </div>

              )}

            </div>

          </div>

        </section>


        {/* =========================================
            BOTTOM CTA
        ========================================= */}

        <section className="mt-24">

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-violet-600/15 via-indigo-500/10 to-cyan-500/10 p-8 text-center sm:p-12">

            <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-64 -translate-x-1/2 rounded-full bg-violet-500/20 blur-[100px]" />

            <div className="relative">

              <h2 className="text-2xl font-bold sm:text-3xl">
                Don't know where to start?
              </h2>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
                Start with AWS Cloud Foundations and build your
                knowledge step by step.
              </p>

              <Link
                to="/courses/aws-cloud-foundations"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-slate-950"
              >
                Start learning
                <ArrowRight size={17} />
              </Link>

            </div>

          </div>

        </section>

      </main>
    </div>
  );
}