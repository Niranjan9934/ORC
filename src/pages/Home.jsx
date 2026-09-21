export default function Home() {
  return (
    <div className="flex-1 overflow-y-auto p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Home Page</h1>

        <p className="mt-1 text-sm text-slate-500">
          Welcome back! Here's what's happening with your account.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Total Emails</p>

          <p className="mt-2 text-3xl font-bold text-slate-900">1,248</p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Documents</p>

          <p className="mt-2 text-3xl font-bold text-slate-900">324</p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Credits</p>

          <p className="mt-2 text-3xl font-bold text-slate-900">0 / 100</p>
        </div>
      </div>
    </div>
  );
}
