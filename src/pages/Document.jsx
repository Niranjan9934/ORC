import {
  Search,
  Plus,
  Upload,
  FileText,
  FileSpreadsheet,
  FileImage,
  FileArchive,
  MoreHorizontal,
  Download,
  Share2,
  Trash2,
  Folder,
  Clock3,
  Star,
  Grid2X2,
  List,
  SlidersHorizontal,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

const documents = [
  {
    id: 1,
    name: "Website Proposal",
    type: "PDF",
    size: "2.4 MB",
    updated: "Today, 10:32 AM",
    owner: "You",
    icon: FileText,
  },
  {
    id: 2,
    name: "Client Requirements",
    type: "DOCX",
    size: "1.1 MB",
    updated: "Yesterday, 4:20 PM",
    owner: "Sarah Wilson",
    icon: FileText,
  },
  {
    id: 3,
    name: "Marketing Budget",
    type: "XLSX",
    size: "845 KB",
    updated: "Sep 21, 2026",
    owner: "You",
    icon: FileSpreadsheet,
  },
  {
    id: 4,
    name: "Brand Guidelines",
    type: "PDF",
    size: "5.8 MB",
    updated: "Sep 19, 2026",
    owner: "Mike Johnson",
    icon: FileText,
  },
  {
    id: 5,
    name: "Homepage Design",
    type: "PNG",
    size: "3.2 MB",
    updated: "Sep 18, 2026",
    owner: "You",
    icon: FileImage,
  },
  {
    id: 6,
    name: "Project Assets",
    type: "ZIP",
    size: "18.6 MB",
    updated: "Sep 15, 2026",
    owner: "Sarah Wilson",
    icon: FileArchive,
  },
];

const categories = [
  { label: "All Documents", count: 128, icon: FileText },
  { label: "Recent", count: 12, icon: Clock3 },
  { label: "Starred", count: 8, icon: Star },
];

function FileIcon({ type, icon: Icon }) {
  const styles = {
    PDF: "bg-red-50 text-red-500",
    DOCX: "bg-blue-50 text-blue-500",
    XLSX: "bg-emerald-50 text-emerald-500",
    PNG: "bg-purple-50 text-purple-500",
    ZIP: "bg-amber-50 text-amber-500",
  };

  return (
    <div
      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
        styles[type] || "bg-gray-50 text-gray-500"
      }`}
    >
      <Icon size={21} strokeWidth={1.8} />
    </div>
  );
}

export default function Documents() {
  const [view, setView] = useState("list");
  const [search, setSearch] = useState("");

  const filteredDocuments = documents.filter((doc) =>
    doc.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="h-screen overflow-y-auto bg-[#f8fafc] text-slate-900">
      {/* Header */}
      <div className="border-b border-slate-200/80 bg-white">
        <div className="px-7 py-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="mb-1 flex items-center gap-2 text-sm text-slate-500">
                <span>Workspace</span>
                <span>/</span>
                <span className="text-slate-700">Documents</span>
              </div>

              <h1 className="text-2xl font-semibold tracking-tight">
                Documents
              </h1>

              <p className="mt-1 text-sm text-slate-500">
                Manage, organize and share all your project files.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button className="flex h-10 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50">
                <Upload size={17} />
                Upload
              </button>

              <button className="flex h-10 items-center gap-2 rounded-xl bg-slate-900 px-4 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800">
                <Plus size={17} />
                New Document
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="p-7  ">
        {/* Stats */}
        <div className="mb-7 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <FileText size={19} />
              </div>
              <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-600">
                +12%
              </span>
            </div>

            <p className="text-2xl font-semibold">128</p>
            <p className="mt-1 text-sm text-slate-500">Total documents</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
              <Folder size={19} />
            </div>

            <p className="text-2xl font-semibold">24</p>
            <p className="mt-1 text-sm text-slate-500">Folders</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
              <Star size={19} />
            </div>

            <p className="text-2xl font-semibold">8</p>
            <p className="mt-1 text-sm text-slate-500">Starred documents</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[220px_1fr]">
          {/* Sidebar */}
          <aside>
            <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
              {categories.map((item, index) => {
                const Icon = item.icon;

                return (
                  <button
                    key={item.label}
                    className={`mb-1 flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-sm transition last:mb-0 ${
                      index === 0
                        ? "bg-slate-100 font-medium text-slate-900"
                        : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <Icon size={17} />
                      {item.label}
                    </span>

                    <span className="text-xs text-slate-400">{item.count}</span>
                  </button>
                );
              })}
            </div>

            <div className="mt-4 rounded-2xl border border-dashed border-slate-300 bg-white p-5 text-center">
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                <Upload size={18} className="text-slate-500" />
              </div>

              <p className="text-sm font-medium">Upload files</p>
              <p className="mt-1 text-xs leading-5 text-slate-400">
                Drag and drop your files here
              </p>

              <button className="mt-3 text-xs font-medium text-blue-600 hover:text-blue-700">
                Browse files
              </button>
            </div>
          </aside>

          {/* Documents */}
          <section className="min-w-0">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              {/* Toolbar */}
              <div className="flex flex-col gap-3 border-b border-slate-200 p-4 md:flex-row md:items-center md:justify-between">
                <div className="relative w-full md:max-w-sm">
                  <Search
                    size={17}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search documents..."
                    className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-300 focus:bg-white"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <button className="flex h-10 items-center gap-2 rounded-xl border border-slate-200 px-3 text-sm text-slate-600 hover:bg-slate-50">
                    <SlidersHorizontal size={16} />
                    Filter
                  </button>

                  <button className="flex h-10 items-center gap-2 rounded-xl border border-slate-200 px-3 text-sm text-slate-600 hover:bg-slate-50">
                    Recently updated
                    <ChevronDown size={15} />
                  </button>

                  <div className="flex rounded-xl border border-slate-200 p-1">
                    <button
                      onClick={() => setView("list")}
                      className={`rounded-lg p-1.5 ${
                        view === "list"
                          ? "bg-slate-100 text-slate-900"
                          : "text-slate-400"
                      }`}
                    >
                      <List size={17} />
                    </button>

                    <button
                      onClick={() => setView("grid")}
                      className={`rounded-lg p-1.5 ${
                        view === "grid"
                          ? "bg-slate-100 text-slate-900"
                          : "text-slate-400"
                      }`}
                    >
                      <Grid2X2 size={17} />
                    </button>
                  </div>
                </div>
              </div>

              {/* List */}
              {view === "list" ? (
                <div>
                  <div className="hidden grid-cols-[1fr_110px_150px_130px_50px] gap-4 border-b border-slate-100 px-5 py-3 text-xs font-medium uppercase tracking-wide text-slate-400 md:grid">
                    <span>Name</span>
                    <span>Type</span>
                    <span>Last updated</span>
                    <span>Owner</span>
                    <span />
                  </div>

                  {filteredDocuments.map((doc) => {
                    const Icon = doc.icon;

                    return (
                      <div
                        key={doc.id}
                        className="group grid items-center gap-4 border-b border-slate-100 px-5 py-4 transition last:border-0 hover:bg-slate-50 md:grid-cols-[1fr_110px_150px_130px_50px]"
                      >
                        <div className="flex min-w-0 items-center gap-3">
                          <FileIcon type={doc.type} icon={Icon} />

                          <div className="min-w-0">
                            <p className="truncate text-sm font-medium text-slate-800">
                              {doc.name}
                            </p>
                            <p className="mt-0.5 text-xs text-slate-400">
                              {doc.size}
                            </p>
                          </div>
                        </div>

                        <span className="text-sm text-slate-500">
                          {doc.type}
                        </span>

                        <span className="text-sm text-slate-500">
                          {doc.updated}
                        </span>

                        <span className="text-sm text-slate-500">
                          {doc.owner}
                        </span>

                        <button className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 opacity-0 transition hover:bg-white hover:text-slate-700 group-hover:opacity-100">
                          <MoreHorizontal size={18} />
                        </button>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-4 p-5 sm:grid-cols-2 xl:grid-cols-3">
                  {filteredDocuments.map((doc) => {
                    const Icon = doc.icon;

                    return (
                      <div
                        key={doc.id}
                        className="group rounded-2xl border border-slate-200 p-4 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
                      >
                        <div className="mb-5 flex items-start justify-between">
                          <FileIcon type={doc.type} icon={Icon} />

                          <button className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700">
                            <MoreHorizontal size={18} />
                          </button>
                        </div>

                        <p className="truncate text-sm font-semibold">
                          {doc.name}
                        </p>

                        <p className="mt-1 text-xs text-slate-400">
                          {doc.type} · {doc.size}
                        </p>

                        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-3">
                          <span className="text-xs text-slate-400">
                            {doc.updated}
                          </span>

                          <div className="flex gap-1">
                            <button className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700">
                              <Download size={15} />
                            </button>

                            <button className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700">
                              <Share2 size={15} />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {filteredDocuments.length === 0 && (
                <div className="px-6 py-16 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100">
                    <Search size={20} className="text-slate-400" />
                  </div>

                  <p className="mt-4 text-sm font-medium">No documents found</p>

                  <p className="mt-1 text-sm text-slate-400">
                    Try changing your search.
                  </p>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
