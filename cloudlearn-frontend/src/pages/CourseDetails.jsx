import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Clock,
  Download,
  Globe,
  Play,
  ShieldCheck,
  Star,
  Users,
  Award,
  BookOpen,
  ChevronDown,
  Lock,
} from "lucide-react";
import { useState } from "react";

import Navbar from "../components/Navbar";

const course = {
  title: "AWS Cloud Foundations",
  subtitle:
    "Build a strong foundation in AWS and learn how modern cloud infrastructure is designed, secured and deployed.",
  category: "AWS",
  level: "Beginner",
  duration: "8h 20m",
  lessons: 42,
  rating: "4.9",
  reviews: "1,284",
  students: "12.4K",
  price: "Free",
  instructor: "Alex Morgan",
  instructorRole: "Senior Cloud Architect",
  image:
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=85",
};

const modules = [
  {
    title: "Introduction to Cloud Computing",
    lessons: [
      "What is Cloud Computing?",
      "IaaS, PaaS and SaaS",
      "Public vs Private Cloud",
      "Understanding AWS",
    ],
  },
  {
    title: "AWS Global Infrastructure",
    lessons: [
      "Regions and Availability Zones",
      "AWS Edge Locations",
      "Understanding AWS architecture",
      "Choosing the right region",
    ],
  },
  {
    title: "AWS Compute",
    lessons: [
      "Introduction to Amazon EC2",
      "EC2 Instance Types",
      "AMI and Instance Lifecycle",
      "Security Groups",
      "Connecting to EC2 with SSH",
    ],
  },
  {
    title: "AWS Storage",
    lessons: [
      "Introduction to Amazon S3",
      "Buckets and Objects",
      "S3 Storage Classes",
      "Versioning and Lifecycle Policies",
    ],
  },
  {
    title: "AWS Networking",
    lessons: [
      "Introduction to VPC",
      "Subnets and Route Tables",
      "Internet Gateway",
      "Security Groups and NACLs",
    ],
  },
  {
    title: "AWS Security & IAM",
    lessons: [
      "IAM Users and Groups",
      "IAM Policies",
      "Roles and Permissions",
      "Principle of Least Privilege",
    ],
  },
];

const outcomes = [
  "Understand the core concepts of cloud computing",
  "Navigate and work with the AWS Management Console",
  "Deploy and manage applications using Amazon EC2",
  "Store and manage objects using Amazon S3",
  "Understand VPCs, subnets and AWS networking",
  "Implement basic AWS security and IAM practices",
];

export default function CourseDetails() {
  const { courseId } = useParams();
  const [openModule, setOpenModule] = useState(0);

  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <Navbar />

      {/* =========================================
          HERO
      ========================================= */}

      <section className="relative overflow-hidden border-b border-white/10 pt-28">

        <div className="pointer-events-none absolute left-1/4 top-20 h-96 w-96 rounded-full bg-violet-600/10 blur-[130px]" />

        <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">

          {/* Breadcrumb */}

          <Link
            to="/courses"
            className="mb-8 inline-flex items-center gap-2 text-sm text-slate-500 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to courses
          </Link>

          <div className="grid gap-12 lg:grid-cols-[1fr_420px]">

            {/* LEFT */}

            <div>

              <div className="flex flex-wrap items-center gap-3">

                <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1.5 text-xs font-semibold text-violet-300">
                  {course.category}
                </span>

                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-400">
                  {course.level}
                </span>

                <span className="flex items-center gap-1.5 text-xs text-slate-400">
                  <Clock size={14} />
                  {course.duration}
                </span>

              </div>

              <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                {course.title}
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
                {course.subtitle}
              </p>

              {/* Rating */}

              <div className="mt-7 flex flex-wrap items-center gap-5">

                <div className="flex items-center gap-2">

                  <span className="text-lg font-bold text-white">
                    {course.rating}
                  </span>

                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={15}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <span className="text-sm text-slate-500">
                    ({course.reviews} reviews)
                  </span>

                </div>

                <div className="h-4 w-px bg-white/10" />

                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Users size={16} />
                  {course.students} learners
                </div>

              </div>

              {/* Instructor */}

              <div className="mt-9 flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 text-sm font-bold">
                  AM
                </div>

                <div>
                  <div className="text-sm font-semibold">
                    {course.instructor}
                  </div>

                  <div className="mt-1 text-xs text-slate-500">
                    {course.instructorRole}
                  </div>
                </div>

              </div>

            </div>


            {/* COURSE CARD */}

            <div className="lg:row-span-2">

              <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0e20] shadow-2xl shadow-black/30">

                <div className="relative aspect-video overflow-hidden">

                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-black/30" />

                  <button className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-950 shadow-2xl transition hover:scale-105">

                    <Play
                      size={23}
                      fill="currentColor"
                      className="ml-1"
                    />

                  </button>

                  <div className="absolute bottom-4 left-4 rounded-lg bg-black/60 px-3 py-1.5 text-xs backdrop-blur-md">
                    Preview course
                  </div>

                </div>

                <div className="p-6">

                  <div className="flex items-end justify-between">

                    <div>
                      <div className="text-xs text-slate-500">
                        Course price
                      </div>

                      <div className="mt-1 text-3xl font-bold">
                        {course.price}
                      </div>
                    </div>

                    <div className="text-right text-xs text-slate-500">
                      Lifetime access
                    </div>

                  </div>

                  <Link
                    to={`/learn/${courseId || "aws-cloud-foundations"}`}
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3.5 font-semibold text-slate-950 transition hover:bg-slate-200"
                  >
                    Enroll now
                    <ArrowRight size={17} />
                  </Link>

                  <p className="mt-4 text-center text-xs text-slate-600">
                    No credit card required
                  </p>

                  <div className="mt-6 space-y-3 border-t border-white/10 pt-6">

                    <Feature icon={<Play size={15} />}>
                      42 video lessons
                    </Feature>

                    <Feature icon={<Download size={15} />}>
                      Downloadable resources
                    </Feature>

                    <Feature icon={<Award size={15} />}>
                      Certificate of completion
                    </Feature>

                    <Feature icon={<Globe size={15} />}>
                      Learn at your own pace
                    </Feature>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* =========================================
          MAIN CONTENT
      ========================================= */}

      <main className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-14 lg:grid-cols-[1fr_360px]">

          <div>

            {/* WHAT YOU'LL LEARN */}

            <section>

              <h2 className="text-2xl font-bold sm:text-3xl">
                What you'll learn
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                By completing this course, you'll build a practical
                foundation for working with AWS cloud infrastructure.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">

                {outcomes.map((outcome) => (
                  <div
                    key={outcome}
                    className="flex gap-3 rounded-xl border border-white/5 bg-white/[0.025] p-4"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-emerald-400"
                    />

                    <span className="text-sm leading-6 text-slate-300">
                      {outcome}
                    </span>
                  </div>
                ))}

              </div>

            </section>


            {/* CURRICULUM */}

            <section className="mt-16">

              <div className="flex items-end justify-between">

                <div>
                  <h2 className="text-2xl font-bold sm:text-3xl">
                    Course curriculum
                  </h2>

                  <p className="mt-2 text-sm text-slate-500">
                    {modules.length} modules • {course.lessons} lessons
                  </p>
                </div>

              </div>

              <div className="mt-7 space-y-3">

                {modules.map((module, index) => {

                  const isOpen = openModule === index;

                  return (
                    <div
                      key={module.title}
                      className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.025]"
                    >

                      <button
                        onClick={() =>
                          setOpenModule(
                            isOpen ? -1 : index
                          )
                        }
                        className="flex w-full items-center gap-4 p-5 text-left"
                      >

                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 text-sm font-semibold text-violet-300">
                          {String(index + 1).padStart(2, "0")}
                        </div>

                        <div className="flex-1">

                          <div className="font-medium">
                            {module.title}
                          </div>

                          <div className="mt-1 text-xs text-slate-500">
                            {module.lessons.length} lessons
                          </div>

                        </div>

                        <ChevronDown
                          size={18}
                          className={`text-slate-500 transition ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />

                      </button>

                      {isOpen && (
                        <div className="border-t border-white/10 px-5 pb-5">

                          <div className="space-y-1 pt-3">

                            {module.lessons.map(
                              (lesson, lessonIndex) => (
                                <div
                                  key={lesson}
                                  className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-slate-400 transition hover:bg-white/[0.04] hover:text-white"
                                >

                                  <Play
                                    size={14}
                                    className="shrink-0 text-slate-600"
                                  />

                                  <span className="flex-1">
                                    {lesson}
                                  </span>

                                  {lessonIndex === 0 &&
                                    index === 0 ? (
                                    <span className="text-xs text-violet-400">
                                      Preview
                                    </span>
                                  ) : (
                                    <Lock
                                      size={13}
                                      className="text-slate-700"
                                    />
                                  )}

                                </div>
                              )
                            )}

                          </div>

                        </div>
                      )}

                    </div>
                  );
                })}

              </div>

            </section>


            {/* INSTRUCTOR */}

            <section className="mt-16">

              <h2 className="text-2xl font-bold sm:text-3xl">
                Meet your instructor
              </h2>

              <div className="mt-7 flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:flex-row sm:items-center">

                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 text-xl font-bold">
                  AM
                </div>

                <div>

                  <h3 className="text-lg font-semibold">
                    {course.instructor}
                  </h3>

                  <p className="mt-1 text-sm text-violet-400">
                    {course.instructorRole}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    Cloud architect and educator focused on helping
                    engineers understand cloud infrastructure through
                    practical, real-world examples.
                  </p>

                </div>

              </div>

            </section>

          </div>


          {/* =========================================
              RIGHT SIDEBAR
          ========================================= */}

          <aside>

            <div className="sticky top-28 space-y-5">

              {/* Requirements */}

              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">

                <h3 className="font-semibold">
                  Course requirements
                </h3>

                <ul className="mt-5 space-y-4">

                  <Requirement>
                    Basic computer knowledge
                  </Requirement>

                  <Requirement>
                    No prior AWS experience required
                  </Requirement>

                  <Requirement>
                    Internet connection
                  </Requirement>

                </ul>

              </div>


              {/* Includes */}

              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">

                <h3 className="font-semibold">
                  This course includes
                </h3>

                <div className="mt-5 space-y-4">

                  <Feature icon={<Clock size={15} />}>
                    8+ hours of content
                  </Feature>

                  <Feature icon={<BookOpen size={15} />}>
                    42 lessons
                  </Feature>

                  <Feature icon={<Download size={15} />}>
                    Downloadable resources
                  </Feature>

                  <Feature icon={<ShieldCheck size={15} />}>
                    Lifetime access
                  </Feature>

                  <Feature icon={<Award size={15} />}>
                    Completion certificate
                  </Feature>

                </div>

              </div>


              {/* Career CTA */}

              <div className="rounded-2xl border border-violet-500/20 bg-violet-500/[0.06] p-6">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                  <Award size={20} />
                </div>

                <h3 className="mt-5 font-semibold">
                  Build your cloud career
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Complete this course and continue with the
                  Cloud Engineer learning path.
                </p>

                <Link
                  to="/courses"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-violet-400 hover:text-violet-300"
                >
                  Explore learning paths
                  <ArrowRight size={15} />
                </Link>

              </div>

            </div>

          </aside>

        </div>

      </main>
    </div>
  );
}


/* =========================================
   SMALL REUSABLE COMPONENTS
========================================= */

function Feature({ icon, children }) {
  return (
    <div className="flex items-center gap-3 text-sm text-slate-400">
      <span className="text-violet-400">
        {icon}
      </span>

      <span>{children}</span>
    </div>
  );
}

function Requirement({ children }) {
  return (
    <li className="flex gap-3 text-sm leading-6 text-slate-400">
      <Check
        size={16}
        className="mt-1 shrink-0 text-emerald-400"
      />

      <span>{children}</span>
    </li>
  );
}
