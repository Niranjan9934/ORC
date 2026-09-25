import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Building2,
  Shield,
  Bell,
  Lock,
  KeyRound,
  Monitor,
  CreditCard,
  Activity,
  Camera,
  Pencil,
  Check,
  ChevronRight,
  LogOut,
  Trash2,
  Sparkles,
} from "lucide-react";

const Account = () => {
  const [activeTab, setActiveTab] = useState("Profile");
  const [notifications, setNotifications] = useState(true);
  const [twoFactor, setTwoFactor] = useState(false);

  const tabs = [
    {
      name: "Profile",
      icon: User,
    },
    {
      name: "Security",
      icon: Shield,
    },
    {
      name: "Notifications",
      icon: Bell,
    },
    {
      name: "Preferences",
      icon: Monitor,
    },
  ];

  return (
    <div className=" bg-[#f8fafc] px-4 py-6 text-slate-900 sm:px-6 lg:px-8  overflow-auto">
      <div className="mx-auto max-w-7xl">
        {/* ================= HEADER ================= */}
        <div className="mb-8">
          <div className="mb-2 flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
              <User size={18} />
            </div>

            <span className="text-sm font-semibold text-blue-600">Account</span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Account settings
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            Manage your profile, security, preferences and account settings from
            one place.
          </p>
        </div>

        {/* ================= PROFILE HERO ================= */}
        <div className="relative mb-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          {/* Background */}
          <div className="absolute inset-x-0 top-0 h-32 " />

          <div className="relative px-5 pb-6 pt-20 sm:px-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
                {/* Avatar */}
                <div className="relative">
                  <div className="flex h-24 w-24 items-center justify-center rounded-3xl border-4 border-white  text-3xl font-bold text-black shadow-xl">
                    AT
                  </div>

                  <button
                    className="absolute -bottom-2 -right-2 flex h-9 w-9 items-center justify-center rounded-xl border-2 border-white bg-slate-900 text-white shadow-lg transition hover:scale-105"
                    title="Change photo"
                  >
                    <Camera size={15} />
                  </button>
                </div>

                <div className="pb-1">
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-bold">Abigail Turner</h2>

                    <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-600">
                      ACTIVE
                    </span>
                  </div>

                  <p className="mt-1 text-sm text-slate-500">
                    abigail@example.com
                  </p>

                  <div className="mt-3 flex items-center gap-2 text-xs text-slate-400">
                    <Activity size={14} />
                    Last active recently
                  </div>
                </div>
              </div>

              <button className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50">
                <Pencil size={15} />
                Edit profile
              </button>
            </div>
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="grid gap-6 lg:grid-cols-[230px_1fr]">
          {/* SIDEBAR */}
          <div className="h-fit rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const active = activeTab === tab.name;

              return (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`mb-1 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                    active
                      ? "bg-blue-50 text-blue-700"
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <Icon size={17} />
                  {tab.name}

                  {active && <ChevronRight size={15} className="ml-auto" />}
                </button>
              );
            })}

            <div className="my-3 border-t border-slate-100" />

            <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-500 transition hover:bg-red-50">
              <LogOut size={17} />
              Sign out
            </button>
          </div>

          {/* MAIN */}
          <div className="space-y-6">
            {/* ================= PROFILE ================= */}
            {activeTab === "Profile" && (
              <>
                <Section
                  title="Personal information"
                  description="Update your personal details and contact information."
                >
                  <div className="grid gap-5 md:grid-cols-2">
                    <Input
                      icon={<User size={17} />}
                      label="Full name"
                      value="Abigail Turner"
                    />

                    <Input
                      icon={<Mail size={17} />}
                      label="Email address"
                      value="abigail@example.com"
                    />

                    <Input
                      icon={<Phone size={17} />}
                      label="Phone number"
                      value="+91 98765 43210"
                    />

                    <Input
                      icon={<Building2 size={17} />}
                      label="Company"
                      value="Outright Systems"
                    />
                  </div>

                  <div className="mt-6 flex justify-end">
                    <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700">
                      <Check size={16} />
                      Save changes
                    </button>
                  </div>
                </Section>

                {/* PLAN */}
                <Section
                  title="Current plan"
                  description="Manage your subscription and billing."
                >
                  <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-5">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg">
                          <Sparkles size={21} />
                        </div>

                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                            Current plan
                          </p>

                          <h3 className="mt-1 text-lg font-bold">
                            Professional
                          </h3>

                          <p className="mt-1 text-xs text-slate-500">
                            Your plan renews on October 24, 2026
                          </p>
                        </div>
                      </div>

                      <button className="rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-blue-600 shadow-sm transition hover:shadow-md">
                        Manage plan
                      </button>
                    </div>

                    {/* Usage */}
                    <div className="mt-6">
                      <div className="mb-2 flex justify-between text-xs">
                        <span className="font-medium text-slate-600">
                          Monthly usage
                        </span>

                        <span className="font-semibold text-slate-900">
                          72%
                        </span>
                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-white">
                        <div className="h-full w-[72%] rounded-full bg-blue-600" />
                      </div>

                      <p className="mt-2 text-xs text-slate-400">
                        7,200 of 10,000 actions used
                      </p>
                    </div>
                  </div>
                </Section>

                {/* ACCOUNT ACTIVITY */}
                <Section
                  title="Recent activity"
                  description="Review recent activity on your account."
                >
                  <ActivityRow
                    icon={<Monitor size={17} />}
                    title="New browser session"
                    subtitle="Chrome · Windows · Today"
                    status="Current"
                  />

                  <ActivityRow
                    icon={<KeyRound size={17} />}
                    title="Password changed"
                    subtitle="September 21, 2026"
                  />

                  <ActivityRow
                    icon={<CreditCard size={17} />}
                    title="Subscription updated"
                    subtitle="September 15, 2026"
                  />
                </Section>
              </>
            )}

            {/* ================= SECURITY ================= */}
            {activeTab === "Security" && (
              <>
                <Section
                  title="Security"
                  description="Keep your account protected and secure."
                >
                  <SettingRow
                    icon={<Lock size={18} />}
                    title="Password"
                    description="Change your account password."
                    action={
                      <button className="rounded-xl border border-slate-200 px-4 py-2 text-xs font-semibold hover:bg-slate-50">
                        Change
                      </button>
                    }
                  />

                  <SettingRow
                    icon={<Shield size={18} />}
                    title="Two-factor authentication"
                    description="Add an extra layer of security to your account."
                    action={
                      <Toggle
                        enabled={twoFactor}
                        onClick={() => setTwoFactor(!twoFactor)}
                      />
                    }
                  />

                  <SettingRow
                    icon={<KeyRound size={18} />}
                    title="Active sessions"
                    description="Manage devices currently signed into your account."
                    action={
                      <button className="rounded-xl border border-slate-200 px-4 py-2 text-xs font-semibold hover:bg-slate-50">
                        View
                      </button>
                    }
                  />
                </Section>

                <DangerZone />
              </>
            )}

            {/* ================= NOTIFICATIONS ================= */}
            {activeTab === "Notifications" && (
              <Section
                title="Notifications"
                description="Choose how you want to receive notifications."
              >
                <SettingRow
                  icon={<Bell size={18} />}
                  title="Email notifications"
                  description="Receive important updates and account notifications."
                  action={
                    <Toggle
                      enabled={notifications}
                      onClick={() => setNotifications(!notifications)}
                    />
                  }
                />

                <SettingRow
                  icon={<Mail size={18} />}
                  title="Product updates"
                  description="Receive news about new features and improvements."
                  action={<Toggle enabled={true} onClick={() => {}} />}
                />

                <SettingRow
                  icon={<Activity size={18} />}
                  title="Activity alerts"
                  description="Get notified when important activity happens."
                  action={<Toggle enabled={true} onClick={() => {}} />}
                />
              </Section>
            )}

            {/* ================= PREFERENCES ================= */}
            {activeTab === "Preferences" && (
              <Section
                title="Preferences"
                description="Customize your workspace experience."
              >
                <div className="space-y-5">
                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      Language
                    </label>

                    <select className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-blue-500 md:max-w-md">
                      <option>English</option>
                      <option>Hindi</option>
                      <option>French</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      Time zone
                    </label>

                    <select className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-blue-500 md:max-w-md">
                      <option>Asia/Kolkata (GMT+5:30)</option>
                      <option>UTC</option>
                      <option>America/New_York</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      Date format
                    </label>

                    <select className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-blue-500 md:max-w-md">
                      <option>DD/MM/YYYY</option>
                      <option>MM/DD/YYYY</option>
                      <option>YYYY-MM-DD</option>
                    </select>
                  </div>
                </div>
              </Section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ================================================= */
/* COMPONENTS */
/* ================================================= */

const Section = ({ title, description, children }) => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-6">
        <h2 className="text-lg font-bold text-slate-900">{title}</h2>

        <p className="mt-1 text-sm text-slate-500">{description}</p>
      </div>

      {children}
    </section>
  );
};

const Input = ({ icon, label, value }) => {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold text-slate-600">
        {label}
      </label>

      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
          {icon}
        </div>

        <input
          defaultValue={value}
          className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-3 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
        />
      </div>
    </div>
  );
};

const SettingRow = ({ icon, title, description, action }) => {
  return (
    <div className="flex flex-col gap-4 border-b border-slate-100 py-5 first:pt-0 last:border-none last:pb-0 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-600">
          {icon}
        </div>

        <div>
          <h3 className="text-sm font-semibold text-slate-800">{title}</h3>

          <p className="mt-1 max-w-lg text-xs leading-5 text-slate-500">
            {description}
          </p>
        </div>
      </div>

      {action}
    </div>
  );
};

const ActivityRow = ({ icon, title, subtitle, status }) => {
  return (
    <div className="flex items-center gap-4 border-b border-slate-100 py-4 last:border-none">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-slate-500">
        {icon}
      </div>

      <div className="flex-1">
        <p className="text-sm font-semibold text-slate-800">{title}</p>

        <p className="mt-1 text-xs text-slate-400">{subtitle}</p>
      </div>

      {status && (
        <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-600">
          {status}
        </span>
      )}
    </div>
  );
};

const Toggle = ({ enabled, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`relative h-6 w-11 rounded-full transition ${
        enabled ? "bg-blue-600" : "bg-slate-200"
      }`}
    >
      <span
        className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition ${
          enabled ? "left-6" : "left-1"
        }`}
      />
    </button>
  );
};

const DangerZone = () => {
  return (
    <section className="rounded-2xl border border-red-100 bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-5">
        <h2 className="text-lg font-bold text-red-600">Danger zone</h2>

        <p className="mt-1 text-sm text-slate-500">
          These actions can permanently affect your account.
        </p>
      </div>

      <div className="flex flex-col gap-4 rounded-xl bg-red-50 p-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-800">Delete account</p>

          <p className="mt-1 text-xs text-slate-500">
            Permanently delete your account and all associated data.
          </p>
        </div>

        <button className="flex w-fit items-center gap-2 rounded-xl border border-red-200 bg-white px-4 py-2.5 text-xs font-bold text-red-600 transition hover:bg-red-600 hover:text-white">
          <Trash2 size={15} />
          Delete account
        </button>
      </div>
    </section>
  );
};

export default Account;
