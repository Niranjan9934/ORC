import { useEffect, useState } from "react";
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
  Circle,
} from "lucide-react";

import * as Icons from "lucide-react";

import { useAuth } from "../../auth/useAuth";
import { fetchSidebar } from "../../Service/SidebarService";

const groupIcons = {
  dashboard: House,
  files: Files,
  integrations: Webhook,
  ai: Sparkles,
  support: LifeBuoy,
  users: Users,
};

function getGroupIcon(groupName) {
  const key = groupName?.toLowerCase().trim();

  return groupIcons[key] || Circle;
}

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  // API sidebar state
  const [navGroups, setNavGroups] = useState([]);
  const [sidebarLoading, setSidebarLoading] = useState(true);
  const [sidebarError, setSidebarError] = useState("");
  const [openGroups, setOpenGroups] = useState({});

  const { user, signOut } = useAuth();

  const name = user?.name || user?.full_name || user?.email || "Account";

  const email = user?.email || "Signed in";

  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  // --------------------------------
  // LOAD SIDEBAR FROM API
  // --------------------------------

  const toggleGroup = (groupId) => {
    setOpenGroups((prev) => ({
      ...prev,
      [groupId]: !prev[groupId],
    }));
  };

  useEffect(() => {
    loadSidebar();
  }, []);

  async function loadSidebar() {
    try {
      setSidebarLoading(true);
      setSidebarError("");

      const response = await fetchSidebar();

      console.log("Sidebar API response:", response);

      // API response:
      // {
      //   status: true,
      //   level: "module",
      //   group_count: 6,
      //   total_modules: 16,
      //   data: [...]
      // }

      setNavGroups(response?.data || []);
    } catch (error) {
      console.error("Sidebar API error:", error);

      setSidebarError("Unable to load sidebar");
    } finally {
      setSidebarLoading(false);
    }
  }

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
        {/* =========================
            LOGO
        ========================== */}

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

        {/* =========================
            NAVIGATION
        ========================== */}

        <div className="flex-1 overflow-y-auto px-2 py-2">
          <nav>
            {/* LOADING */}

            {sidebarLoading && (
              <div className="px-3 py-4 text-sm text-gray-500">
                Loading sidebar...
              </div>
            )}

            {/* ERROR */}

            {!sidebarLoading && sidebarError && (
              <div className="px-3 py-4 text-sm text-red-500">
                {sidebarError}
              </div>
            )}

            {/* API GROUPS */}

            {!sidebarLoading &&
              !sidebarError &&
              navGroups.map((group) => (
                <div key={group.id} className="sidebar-nav-group border-b py-2">
                  {/* GROUP NAME */}

                  <button
                    type="button"
                    onClick={() => toggleGroup(group.id)}
                    title={collapsed ? group.group_name : undefined}
                    className={`
          sidebar-group-header
          flex w-full cursor-pointer items-center
          rounded-xl
          transition-all duration-200
          ${
            collapsed ? "justify-center px-0 py-3" : "justify-between px-3 py-2"
          }
        `}
                  >
                    <div
                      className={`
            flex items-center
            ${collapsed ? "justify-center" : "gap-3"}
          `}
                    >
                      {(() => {
                        const GroupIcon = getGroupIcon(group.group_name);

                        return (
                          <GroupIcon
                            size={20}
                            className="shrink-0 transition-transform duration-200"
                          />
                        );
                      })()}

                      {!collapsed && (
                        <span className="text-left text-[17px] font-bold uppercase tracking-wide">
                          {group.group_name}
                        </span>
                      )}
                    </div>

                    {!collapsed && (
                      <span className="flex items-center justify-center text-lg">
                        {openGroups[group.id] ? "−" : "+"}
                      </span>
                    )}
                  </button>

                  {/* MODULES */}

                  {openGroups[group.id] &&
                    group.data
                      ?.filter(
                        (item) =>
                          item.visible === true &&
                          (item.is_active === true || item.is_active === "1"),
                      )
                      .sort((a, b) =>
                        (a.rank || "").localeCompare(b.rank || ""),
                      )
                      .map((item) => (
                        <SidebarItem
                          key={item.id}
                          item={item}
                          collapsed={collapsed}
                        />
                      ))}
                </div>
              ))}
          </nav>
        </div>

        {/* =========================
            BOTTOM ACCOUNT
        ========================== */}

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
            className={`
              sidebar-sign-out mt-2 flex w-full items-center rounded-xl
              px-2 py-2 text-xs font-semibold transition
              ${collapsed ? "justify-center" : "gap-2"}
            `}
          >
            <LogOut size={16} />

            {!collapsed && "Sign out"}
          </button>
        </div>
      </aside>

      {/* =========================
          COLLAPSE BUTTON
      ========================== */}

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

/* =====================================================
   SIDEBAR ITEM
===================================================== */

function SidebarItem({ item, collapsed }) {
  /*
    API gives:

    icon: "LuContact"

    We dynamically get:

    Icons["LuContact"]
  */

  const Icon = Icons[item.icon] || Circle;

  return (
    <NavLink
      to={item.navigation || "#"}
      title={collapsed ? item.name : undefined}
      className={({ isActive }) => `
        group relative flex w-full items-center
        gap-3 rounded-xl py-2.5
        text-sm font-semibold
        transition-all duration-200

        ${collapsed ? "justify-center px-0" : "px-3"}

        ${
          isActive
            ? "sidebar-nav-link--active shadow-sm ring-1"
            : "sidebar-nav-link"
        }
      `}
    >
      {({ isActive }) => (
        <>
          {/* ACTIVE INDICATOR */}

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

          {/* ICON */}

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

          {/* LABEL */}

          {!collapsed && <span className="whitespace-nowrap">{item.name}</span>}
        </>
      )}
    </NavLink>
  );
}
