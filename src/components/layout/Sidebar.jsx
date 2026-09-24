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
          app-sidebar border-r
          transition-all duration-300
          ${collapsed ? "w-16" : "w-60"}
        `}
      >
        {/* Logo */}
        <div className="sidebar-brand flex h-[73px] shrink-0 items-center border-b px-4">
          <div
            className={`
              flex items-center
              ${collapsed ? "justify-center w-full" : ""}
            `}
          >
            <div className="sidebar-logo flex h-9 w-9 items-center justify-center rounded-xl text-white font-bold">
              0
            </div>

            {!collapsed && (
              <span className="sidebar-brand-name ml-3 text-lg font-bold">
                ORC
              </span>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto px-2 py-2">
          <nav>
            {navGroups.map((group, groupIndex) => (
              <div key={groupIndex} className="sidebar-nav-group border-b py-2">
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
        <div className="sidebar-account border-t p-3">
          <div
            className={`
              flex items-center gap-3 rounded-xl
              p-2
              sidebar-account-card
              cursor-pointer
              ${collapsed ? "justify-center" : ""}
            `}
          >
            <div className="sidebar-avatar relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-xs font-bold text-white">
              {initials}
              <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white bg-emerald-400" />
            </div>

            {!collapsed && (
              <div className="min-w-0 flex-1">
                <p className="sidebar-account-name truncate text-sm font-bold">
                  {name}
                </p>

                <p className="sidebar-account-email truncate text-[10px]">
                  {email}
                </p>
              </div>
            )}
          </div>
          <button
            type="button"
            onClick={signOut}
            title="Sign out"
            className={`sidebar-sign-out mt-2 flex w-full items-center rounded-xl px-2 py-2 text-xs font-semibold transition ${
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
          sidebar-collapse-button border
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

        ${isActive ? "sidebar-nav-link--active shadow-sm ring-1" : "sidebar-nav-link"}
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
                sidebar-nav-indicator
              "
            />
          )}

          <Icon
            size={18}
            className={`
              shrink-0
              ${
                isActive
                  ? "sidebar-nav-icon--active scale-105"
                  : "sidebar-nav-icon group-hover:scale-105"
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
