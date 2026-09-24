export default function WhatsNew() {
  return (
    <div className="flex-1 overflow-y-auto p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">What's New</h1>

        <p className="mt-1 text-sm text-slate-500">
          Discover the latest updates, improvements, and new features.
        </p>
      </div>

      <div className="space-y-5">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-blue-600">New Feature</p>

          <h2 className="mt-2 text-xl font-bold text-slate-900">
            Professional Training
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-500">
            Access professional training content and improve your skills with
            our latest learning resources.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-emerald-600">Improvement</p>

          <h2 className="mt-2 text-xl font-bold text-slate-900">
            Improved User Experience
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-500">
            We've improved the dashboard experience to make navigation faster
            and easier.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-purple-600">Update</p>

          <h2 className="mt-2 text-xl font-bold text-slate-900">
            More Updates Coming
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-500">
            We're continuously improving the platform and adding new tools to
            help you get more done.
          </p>
        </div>
      </div>
    </div>
  );
}
