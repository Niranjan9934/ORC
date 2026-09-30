import { Bell, ChevronDown, Search, Settings } from "lucide-react";
import ThemeSelector from "./ThemeSelector";

export default function Header() {
  return (
    <header
      className="sticky top-0 z-40 flex h-16 items-center justify-between border-b px-5 md:px-7"
      style={{
        background: "var(--color-surface)",
        borderColor: "var(--color-border)",
      }}
    >
      {/* Left */}
      <div className="flex min-w-0 items-center gap-4">
        <div>
          <h1
            className="text-base font-semibold"
            style={{
              color: "var(--color-text)",
            }}
          >
            Home
          </h1>

          <p
            className="hidden text-[11px] sm:block"
            style={{
              color: "var(--color-text-muted)",
            }}
          >
            Overview of your workspace
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2">
        {/* Search */}
        <button
          type="button"
          className="hidden h-9 items-center gap-2 rounded-xl border px-3 transition-all sm:flex md:w-52"
          style={{
            background: "var(--color-background)",
            borderColor: "var(--color-border)",
            color: "var(--color-text-muted)",
          }}
        >
          <Search size={15} />

          <span className="text-xs">Search...</span>

          <span
            className="ml-auto rounded-md border px-1.5 py-0.5 text-[9px]"
            style={{
              borderColor: "var(--color-border)",
              background: "var(--color-surface)",
            }}
          >
            ⌘ K
          </span>
        </button>

        {/* Mobile search */}
        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-xl transition sm:hidden"
          style={{
            color: "var(--color-text-muted)",
          }}
        >
          <Search size={17} />
        </button>

        {/* Notifications */}
        <button
          type="button"
          className="relative flex h-9 w-9 items-center justify-center rounded-xl transition"
          style={{
            color: "var(--color-text-muted)",
          }}
        >
          <Bell size={17} />

          <span
            className="absolute right-2 top-1.5 h-1.5 w-1.5 rounded-full"
            style={{
              background: "var(--color-accent)",
            }}
          />
        </button>

        {/* Settings */}
        <button
          type="button"
          className="hidden h-9 w-9 items-center justify-center rounded-xl transition md:flex"
          style={{
            color: "var(--color-text-muted)",
          }}
        >
          <Settings size={17} />
        </button>

        {/* Divider */}
        <div
          className="mx-1 hidden h-7 w-px md:block"
          style={{
            background: "var(--color-border)",
          }}
        />

        {/* Profile */}
        <button
          type="button"
          className="flex items-center gap-2 rounded-xl px-1.5 py-1.5 transition"
        >
          {/* Avatar */}
          <div
            className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold text-white"
            style={{
              background:
                "linear-gradient(135deg, var(--color-primary), var(--color-accent))",
            }}
          >
            AT
          </div>

          {/* User info */}
          <div className="hidden text-left lg:block">
            <p
              className="text-xs font-semibold"
              style={{
                color: "var(--color-text)",
              }}
            >
              Abigail Turner
            </p>

            <p
              className="text-[10px]"
              style={{
                color: "var(--color-text-muted)",
              }}
            >
              Administrator
            </p>
          </div>

          <ChevronDown
            size={14}
            className="hidden lg:block"
            style={{
              color: "var(--color-text-muted)",
            }}
          />
        </button>

        <ThemeSelector />
      </div>
    </header>
  );
}
