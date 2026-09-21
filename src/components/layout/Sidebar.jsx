import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  House,
  CloudUpload,
  Files,
  Plus,
  Webhook,
  Sparkles,
  LifeBuoy,
  MessagesSquare,
  Users,
  ChevronLeft,
  ChevronRight,
  LogOut,
} from "lucide-react";
import { useAuth } from "../../auth/useAuth";

const navGroups = [
  [
    {
      to: "/",
      label: "Home Page",
      icon: House,
    },
    {
      to: "/professional-training",
      label: "Professional Training",
      icon: CloudUpload,
    },
    {
      to: "/documents",
      label: "Documents",
      icon: Files,
    },
  ],
  [
    {
      to: "/new",
      label: "New Mailbox",
      icon: Plus,
    },
    {
      to: "/integration",
      label: "Integration",
      icon: Webhook,
    },
    {
      to: "/whats-new",
      label: "What's new?",
      icon: Sparkles,
    },
  ],
  [
    {
      to: "/support",
      label: "Support Center",
      icon: LifeBuoy,
    },
    {
      to: "/contact",
      label: "Contact us",
      icon: MessagesSquare,
    },
    {
      to: "/account",
      label: "Account",
      icon: Users,
    },
  ],
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const { user, signOut } = useAuth();
  const name = user?.name || user?.full_name || user?.email || "Account";
  const email = user?.email || "Signed in";
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="relative z-20 flex shrink-0 overflow-visible">
      <aside
        className={`
          relative flex h-screen flex-col
          border-r border-slate-200/80
          bg-white
          transition-all duration-300
          ${collapsed ? "w-16" : "w-60"}
        `}
      >
        {/* Logo */}
        <div className="flex h-[73px] shrink-0 items-center border-b border-slate-100 px-4">
          <div
            className={`
              flex items-center
              ${collapsed ? "justify-center w-full" : ""}
            `}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-bold">
              0
            </div>

            {!collapsed && (
              <span className="ml-3 text-lg font-bold text-slate-800">ORC</span>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto px-2 py-2">
          <nav>
            {navGroups.map((group, groupIndex) => (
              <div
                key={groupIndex}
                className="border-b border-slate-200/80 py-2"
              >
                {group.map((item) => (
                  <SidebarItem
                    key={item.label}
                    item={item}
                    collapsed={collapsed}
                  />
                ))}
              </div>
            ))}
          </nav>
        </div>

        {/* Bottom account */}
        <div className="border-t border-slate-200 p-3">
          <div
            className={`
              flex items-center gap-3 rounded-xl
              p-2
              hover:bg-indigo-50
              cursor-pointer
              ${collapsed ? "justify-center" : ""}
            `}
          >
            <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-xs font-bold text-white">
              {initials}
              <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white bg-emerald-400" />
            </div>

            {!collapsed && (
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-bold text-slate-900">
                  {name}
                </p>

                <p className="truncate text-[10px] text-slate-500">
                  {email}
                </p>

              </div>
            )}
          </div>
          <button
            type="button"
            onClick={signOut}
            title="Sign out"
            className={`mt-2 flex w-full items-center rounded-xl px-2 py-2 text-xs font-semibold text-slate-500 transition hover:bg-slate-100 hover:text-slate-800 ${
              collapsed ? "justify-center" : "gap-2"
            }`}
          >
            <LogOut size={16} />
            {!collapsed && "Sign out"}
          </button>
        </div>
      </aside>

      {/* Collapse button */}
      <button
        onClick={() => setCollapsed((value) => !value)}
        className="
          absolute -right-3.5 top-1/2 z-40
          flex h-7 w-7 -translate-y-1/2
          items-center justify-center
          rounded-full
          border border-slate-200
          bg-white
          text-slate-500
          shadow-sm
          hover:bg-slate-100
        "
      >
        {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>
    </div>
  );
}

function SidebarItem({ item, collapsed }) {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.to}
      title={collapsed ? item.label : undefined}
      className={({ isActive }) => `
        group relative flex w-full items-center
        gap-3 rounded-xl py-2.5
        text-sm font-semibold
        transition-all duration-200
        ${collapsed ? "justify-center px-0" : "px-3"}

        ${
          isActive
            ? "bg-gradient-to-r from-blue-50 via-indigo-50 to-violet-50 text-indigo-700 shadow-sm ring-1 ring-indigo-200/60"
            : "text-slate-600 hover:bg-indigo-50/40 hover:text-indigo-700"
        }
      `}
    >
      {({ isActive }) => (
        <>
          {isActive && (
            <span
              className="
                absolute left-0 top-1/2
                h-6 w-1
                -translate-y-1/2
                rounded-r-full
                bg-gradient-to-b
                from-blue-500 to-indigo-600
              "
            />
          )}

          <Icon
            size={18}
            className={`
              shrink-0
              ${
                isActive
                  ? "scale-105 text-indigo-600"
                  : "text-slate-400 group-hover:scale-105 group-hover:text-indigo-500"
              }
            `}
          />

          {!collapsed && (
            <span className="whitespace-nowrap">{item.label}</span>
          )}
        </>
      )}
    </NavLink>
  );
}
