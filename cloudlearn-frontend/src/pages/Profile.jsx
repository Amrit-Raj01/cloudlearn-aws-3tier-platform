import Navbar from "../components/Navbar";

export default function Profile() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen px-6 pb-20 pt-36">

        <div className="mx-auto max-w-4xl">

          <p className="text-sm text-violet-400">
            Account
          </p>

          <h1 className="mt-3 text-4xl font-bold">
            Your profile
          </h1>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.035] p-8">
            Profile settings will appear here.
          </div>

        </div>

      </main>
    </>
  );
}