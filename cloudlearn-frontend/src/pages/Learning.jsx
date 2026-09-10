import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Check,
  ChevronDown,
  ChevronRight,
  Clock3,
  Download,
  FileText,
  Lock,
  Menu,
  MessageSquare,
  Play,
  RotateCcw,
  StickyNote,
  X,
} from "lucide-react";
import { useState } from "react";

const courseData = {
  "aws-cloud-foundations": {
    title: "AWS Cloud Foundations",
    instructor: "Alex Morgan",
    progress: 72,

    modules: [
      {
        id: 1,
        title: "Introduction to Cloud Computing",
        lessons: [
          { id: 1, title: "What is Cloud Computing?", duration: "12:40", completed: true },
          { id: 2, title: "Cloud Service Models", duration: "15:20", completed: true },
          { id: 3, title: "Public vs Private Cloud", duration: "11:15", completed: true },
          { id: 4, title: "Benefits of Cloud Computing", duration: "09:35", completed: true },
        ],
      },
      {
        id: 2,
        title: "AWS Global Infrastructure",
        lessons: [
          { id: 5, title: "AWS Regions", duration: "14:20", completed: true },
          { id: 6, title: "Availability Zones", duration: "13:10", completed: true },
          { id: 7, title: "Edge Locations", duration: "10:45", completed: true },
          { id: 8, title: "Choosing an AWS Region", duration: "08:50", completed: true },
        ],
      },
      {
        id: 3,
        title: "AWS Compute",
        lessons: [
          { id: 9, title: "Introduction to EC2", duration: "16:40", completed: true },
          { id: 10, title: "EC2 Instance Types", duration: "18:25", completed: true },
          { id: 11, title: "Launching an EC2 Instance", duration: "21:10", completed: true },
          { id: 12, title: "Security Groups", duration: "15:30", completed: false },
          { id: 13, title: "Elastic Load Balancing", duration: "17:45", completed: false },
        ],
      },
      {
        id: 4,
        title: "AWS Storage",
        lessons: [
          { id: 14, title: "Introduction to S3", duration: "16:20", completed: false },
          { id: 15, title: "S3 Storage Classes", duration: "14:10", completed: false },
          { id: 16, title: "S3 Versioning", duration: "10:35", completed: false },
          { id: 17, title: "S3 Security", duration: "18:40", completed: false },
        ],
      },
      {
        id: 5,
        title: "AWS Networking",
        lessons: [
          { id: 18, title: "Introduction to VPC", duration: "20:10", completed: false },
          { id: 19, title: "Public and Private Subnets", duration: "18:35", completed: false },
          { id: 20, title: "Internet Gateway", duration: "12:20", completed: false },
          { id: 21, title: "NAT Gateway", duration: "14:45", completed: false },
        ],
      },
      {
        id: 6,
        title: "AWS Security & IAM",
        lessons: [
          { id: 22, title: "IAM Fundamentals", duration: "19:20", completed: false },
          { id: 23, title: "Users and Groups", duration: "15:40", completed: false },
          { id: 24, title: "IAM Policies", duration: "22:10", completed: false },
          { id: 25, title: "AWS Security Best Practices", duration: "17:50", completed: false },
        ],
      },
    ],
  },
};

export default function Learning() {
  const { courseId } = useParams();

  const course =
    courseData[courseId] || courseData["aws-cloud-foundations"];

  const [activeLesson, setActiveLesson] = useState(12);
  const [openModule, setOpenModule] = useState(3);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [completedLessons, setCompletedLessons] = useState(
    new Set(
      course.modules
        .flatMap((module) => module.lessons)
        .filter((lesson) => lesson.completed)
        .map((lesson) => lesson.id)
    )
  );

  const currentLesson = course.modules
    .flatMap((module) => module.lessons)
    .find((lesson) => lesson.id === activeLesson);

  const markComplete = () => {
    setCompletedLessons((previous) => {
      const updated = new Set(previous);
      updated.add(activeLesson);
      return updated;
    });
  };

  return (
    <div className="min-h-screen bg-[#050816] text-white">

      {/* TOP BAR */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#050816]/95 backdrop-blur-xl">

        <div className="flex h-16 items-center justify-between px-4 sm:px-6">

          <div className="flex min-w-0 items-center gap-3">

            <button
              onClick={() => setSidebarOpen(true)}
              className="rounded-lg p-2 text-slate-400 hover:bg-white/5 hover:text-white lg:hidden"
            >
              <Menu size={20} />
            </button>

            <Link
              to="/dashboard"
              className="hidden items-center gap-2 text-sm text-slate-400 transition hover:text-white sm:flex"
            >
              <ArrowLeft size={16} />
              Dashboard
            </Link>

            <div className="hidden h-5 w-px bg-white/10 sm:block" />

            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">
                {course.title}
              </p>

              <p className="hidden text-xs text-slate-600 sm:block">
                {course.instructor}
              </p>
            </div>

          </div>

          <div className="flex items-center gap-3">

            <div className="hidden items-center gap-2 sm:flex">
              <div className="h-1.5 w-24 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-indigo-500"
                  style={{ width: `${course.progress}%` }}
                />
              </div>

              <span className="text-xs font-medium text-slate-400">
                {course.progress}%
              </span>
            </div>

            <Link
              to="/dashboard"
              className="rounded-lg p-2 text-slate-500 transition hover:bg-white/5 hover:text-white"
            >
              <X size={19} />
            </Link>

          </div>
        </div>
      </header>

      <div className="flex pt-16">

        {/* SIDEBAR OVERLAY MOBILE */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/60 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* CURRICULUM SIDEBAR */}
        <aside
          className={`
            fixed bottom-0 left-0 top-16 z-40 w-[320px] overflow-y-auto
            border-r border-white/10 bg-[#080b19]
            transition-transform duration-300
            lg:sticky lg:top-16 lg:z-20 lg:h-[calc(100vh-4rem)]
            lg:translate-x-0
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          `}
        >

          <div className="border-b border-white/10 p-5">

            <div className="mb-3 flex items-center justify-between">

              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-600">
                  Course curriculum
                </p>

                <h2 className="mt-1 font-bold">
                  {course.title}
                </h2>
              </div>

              <button
                onClick={() => setSidebarOpen(false)}
                className="rounded-lg p-2 text-slate-500 hover:bg-white/5 hover:text-white lg:hidden"
              >
                <X size={18} />
              </button>

            </div>

            <div className="mt-4">

              <div className="mb-2 flex items-center justify-between text-xs">
                <span className="text-slate-500">
                  Course progress
                </span>

                <span className="font-semibold text-indigo-400">
                  {course.progress}%
                </span>
              </div>

              <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                  style={{ width: `${course.progress}%` }}
                />
              </div>

            </div>
          </div>

          {/* MODULES */}
          <div className="p-3">

            {course.modules.map((module) => {

              const moduleCompleted = module.lessons.filter((lesson) =>
                completedLessons.has(lesson.id)
              ).length;

              const isOpen = openModule === module.id;

              return (
                <div
                  key={module.id}
                  className="mb-2 overflow-hidden rounded-xl border border-white/5"
                >

                  <button
                    onClick={() =>
                      setOpenModule(isOpen ? null : module.id)
                    }
                    className="flex w-full items-center gap-3 px-4 py-3 text-left transition hover:bg-white/[0.04]"
                  >

                    <div className="flex-1">

                      <p className="text-sm font-semibold text-slate-300">
                        {module.id}. {module.title}
                      </p>

                      <p className="mt-1 text-xs text-slate-600">
                        {moduleCompleted}/{module.lessons.length} completed
                      </p>

                    </div>

                    {isOpen ? (
                      <ChevronDown
                        size={16}
                        className="text-slate-500"
                      />
                    ) : (
                      <ChevronRight
                        size={16}
                        className="text-slate-500"
                      />
                    )}

                  </button>

                  {isOpen && (
                    <div className="border-t border-white/5">

                      {module.lessons.map((lesson) => {

                        const isActive = activeLesson === lesson.id;
                        const isCompleted = completedLessons.has(lesson.id);

                        return (
                          <button
                            key={lesson.id}
                            onClick={() => {
                              setActiveLesson(lesson.id);
                              setSidebarOpen(false);
                            }}
                            className={`
                              flex w-full items-start gap-3 px-4 py-3 text-left transition
                              ${
                                isActive
                                  ? "bg-indigo-500/10"
                                  : "hover:bg-white/[0.025]"
                              }
                            `}
                          >

                            <div
                              className={`
                                mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full
                                ${
                                  isCompleted
                                    ? "bg-emerald-500/15 text-emerald-400"
                                    : isActive
                                    ? "bg-indigo-500/15 text-indigo-400"
                                    : "bg-white/5 text-slate-600"
                                }
                              `}
                            >
                              {isCompleted ? (
                                <Check size={13} />
                              ) : isActive ? (
                                <Play size={11} fill="currentColor" />
                              ) : (
                                <Lock size={11} />
                              )}
                            </div>

                            <div className="min-w-0 flex-1">

                              <p
                                className={`
                                  text-xs leading-5
                                  ${
                                    isActive
                                      ? "font-semibold text-indigo-300"
                                      : isCompleted
                                      ? "text-slate-400"
                                      : "text-slate-500"
                                  }
                                `}
                              >
                                {lesson.title}
                              </p>

                              <div className="mt-1 flex items-center gap-1 text-[10px] text-slate-700">
                                <Clock3 size={10} />
                                {lesson.duration}
                              </div>

                            </div>

                          </button>
                        );
                      })}

                    </div>
                  )}

                </div>
              );
            })}

          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="min-w-0 flex-1">

          <div className="mx-auto max-w-6xl">

            {/* VIDEO AREA */}
            <section className="relative aspect-video bg-black">

              <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/70 via-[#080b19] to-black" />

              {/* Fake video interface */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">

                <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-white/10 text-white shadow-2xl backdrop-blur transition hover:scale-105">
                  <Play
                    size={30}
                    fill="currentColor"
                    className="ml-1"
                  />
                </div>

                <p className="text-lg font-semibold sm:text-xl">
                  {currentLesson?.title}
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  Video lesson · {currentLesson?.duration}
                </p>

              </div>

              {/* VIDEO BOTTOM CONTROLS */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-5 pb-5 pt-12">

                <div className="mb-3 h-1 cursor-pointer rounded-full bg-white/20">
                  <div className="h-full w-[35%] rounded-full bg-indigo-500" />
                </div>

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-4">

                    <button className="text-white">
                      <Play size={18} fill="currentColor" />
                    </button>

                    <span className="text-xs text-slate-400">
                      05:12 / {currentLesson?.duration}
                    </span>

                  </div>

                  <div className="flex items-center gap-3 text-slate-400">
                    <button className="hover:text-white">
                      <RotateCcw size={17} />
                    </button>

                    <button className="hover:text-white">
                      <Settings size={17} />
                    </button>
                  </div>

                </div>

              </div>
            </section>

            {/* LESSON INFO */}
            <section className="border-b border-white/10 px-5 py-7 sm:px-8">

              <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">

                <div>

                  <p className="text-sm text-indigo-400">
                    Lesson {activeLesson}
                  </p>

                  <h1 className="mt-1 text-2xl font-bold sm:text-3xl">
                    {currentLesson?.title}
                  </h1>

                  <p className="mt-2 text-sm text-slate-500">
                    Learn the core concepts and understand how this
                    technology fits into modern AWS infrastructure.
                  </p>

                </div>

                <button
                  onClick={markComplete}
                  className={`
                    inline-flex shrink-0 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition
                    ${
                      completedLessons.has(activeLesson)
                        ? "border border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
                        : "bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/10 hover:scale-[1.01]"
                    }
                  `}
                >
                  <Check size={16} />
                  {completedLessons.has(activeLesson)
                    ? "Completed"
                    : "Mark as complete"}
                </button>

              </div>

              {/* TABS */}
              <div className="mt-7 flex gap-6 overflow-x-auto border-b border-white/5">

                <button className="border-b-2 border-indigo-500 pb-3 text-sm font-semibold text-white">
                  Overview
                </button>

                <button className="pb-3 text-sm font-medium text-slate-500 hover:text-slate-300">
                  Notes
                </button>

                <button className="pb-3 text-sm font-medium text-slate-500 hover:text-slate-300">
                  Resources
                </button>

                <button className="pb-3 text-sm font-medium text-slate-500 hover:text-slate-300">
                  Discussion
                </button>

              </div>

            </section>

            {/* LESSON DETAILS */}
            <section className="grid gap-8 px-5 py-8 sm:px-8 lg:grid-cols-[1fr_280px]">

              <div>

                <h2 className="text-xl font-bold">
                  About this lesson
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  In this lesson, you'll explore the fundamental concepts
                  behind AWS infrastructure and understand how individual
                  cloud services work together to build reliable
                  applications.
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  The goal is not just to memorize AWS services, but to
                  understand when and why you would use them when designing
                  real-world cloud architectures.
                </p>

                <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.025] p-5">

                  <div className="flex items-center gap-3">

                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400">
                      <StickyNote size={17} />
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold">
                        Key takeaway
                      </h3>

                      <p className="mt-1 text-xs text-slate-500">
                        Understanding the fundamentals makes advanced AWS
                        architecture much easier.
                      </p>
                    </div>

                  </div>

                </div>

              </div>

              {/* RESOURCES */}
              <aside>

                <h3 className="text-sm font-semibold">
                  Lesson resources
                </h3>

                <div className="mt-4 space-y-3">

                  <Resource
                    icon={FileText}
                    title="Lesson notes"
                    type="PDF"
                  />

                  <Resource
                    icon={Download}
                    title="AWS reference guide"
                    type="PDF"
                  />

                  <Resource
                    icon={MessageSquare}
                    title="Discussion"
                    type="Forum"
                  />

                </div>

              </aside>

            </section>

            {/* NEXT LESSON */}
            <section className="border-t border-white/10 px-5 py-8 sm:px-8">

              <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">

                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-600">
                    Up next
                  </p>

                  <h2 className="mt-1 text-lg font-bold">
                    {getNextLesson(course, activeLesson)?.title ||
                      "Course completed"}
                  </h2>
                </div>

                {getNextLesson(course, activeLesson) && (
                  <button
                    onClick={() =>
                      setActiveLesson(
                        getNextLesson(course, activeLesson).id
                      )
                    }
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
                  >
                    Next lesson
                    <ChevronRight size={17} />
                  </button>
                )}

              </div>

            </section>

          </div>
        </main>
      </div>
    </div>
  );
}


/* ---------------- COMPONENTS ---------------- */

function Resource({ icon: Icon, title, type }) {
  return (
    <button className="flex w-full items-center gap-3 rounded-xl border border-white/10 bg-white/[0.025] p-3 text-left transition hover:bg-white/[0.05]">

      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400">
        <Icon size={16} />
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-xs font-semibold">
          {title}
        </p>

        <p className="mt-1 text-[10px] text-slate-600">
          {type}
        </p>
      </div>

      <ChevronRight
        size={14}
        className="text-slate-600"
      />

    </button>
  );
}


function getNextLesson(course, currentId) {
  const lessons = course.modules.flatMap(
    (module) => module.lessons
  );

  const currentIndex = lessons.findIndex(
    (lesson) => lesson.id === currentId
  );

  return lessons[currentIndex + 1];
}