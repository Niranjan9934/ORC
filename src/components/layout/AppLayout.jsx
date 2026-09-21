import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function AppLayout() {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-50/50">
      <Sidebar />

      <main className="flex min-w-0 flex-1 flex-col overflow-hidden bg-slate-50/30">
        <Outlet />
      </main>
    </div>
  );
}
