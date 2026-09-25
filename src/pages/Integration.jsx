import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Check,
  ArrowUpRight,
  Zap,
  Database,
  Mail,
  MessageSquare,
  BarChart3,
  ShieldCheck,
  Sparkles,
  Plus,
  Settings2,
  Globe,
  RefreshCw,
  X,
} from "lucide-react";

const integrations = [
  {
    id: "google",
    name: "Google Workspace",
    description: "Connect Gmail, Drive, Calendar and more.",
    category: "Productivity",
    icon: "G",
    color: "from-red-500 via-yellow-400 to-blue-500",
    connected: true,
    popular: true,
  },
  {
    id: "slack",
    name: "Slack",
    description: "Send notifications and collaborate with your team.",
    category: "Communication",
    icon: "S",
    color: "from-purple-500 to-pink-500",
    connected: false,
    popular: true,
  },
  {
    id: "hubspot",
    name: "HubSpot",
    description: "Sync contacts, companies and CRM activity.",
    category: "CRM",
    icon: "H",
    color: "from-orange-500 to-red-500",
    connected: false,
    popular: true,
  },
  {
    id: "mailchimp",
    name: "Mailchimp",
    description: "Sync subscribers and automate email campaigns.",
    category: "Marketing",
    icon: "M",
    color: "from-yellow-400 to-orange-500",
    connected: false,
  },
  {
    id: "zapier",
    name: "Zapier",
    description: "Automate workflows between thousands of apps.",
    category: "Automation",
    icon: "Z",
    color: "from-orange-500 to-orange-600",
    connected: false,
    popular: true,
  },
  {
    id: "stripe",
    name: "Stripe",
    description: "Manage payments, customers and subscriptions.",
    category: "Payments",
    icon: "S",
    color: "from-indigo-500 to-purple-600",
    connected: false,
  },
  {
    id: "notion",
    name: "Notion",
    description: "Sync your workspace and project information.",
    category: "Productivity",
    icon: "N",
    color: "from-gray-700 to-black",
    connected: false,
  },
  {
    id: "webhook",
    name: "Webhooks",
    description: "Connect your own applications using webhooks.",
    category: "Developer",
    icon: "W",
    color: "from-cyan-500 to-blue-600",
    connected: false,
  },
];

const categories = [
  "All",
  "Productivity",
  "Communication",
  "CRM",
  "Marketing",
  "Automation",
  "Payments",
  "Developer",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

export default function Integration() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [showConnectedOnly, setShowConnectedOnly] = useState(false);
  const [selectedIntegration, setSelectedIntegration] = useState(null);

  const filteredIntegrations = useMemo(() => {
    return integrations.filter((integration) => {
      const matchesSearch =
        integration.name.toLowerCase().includes(search.toLowerCase()) ||
        integration.description.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        activeCategory === "All" || integration.category === activeCategory;

      const matchesConnected = !showConnectedOnly || integration.connected;

      return matchesSearch && matchesCategory && matchesConnected;
    });
  }, [search, activeCategory, showConnectedOnly]);

  const connectedCount = integrations.filter((item) => item.connected).length;

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900  overflow-auto">
      {/* Background decoration */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-40 -right-40 h-[420px] w-[420px] rounded-full bg-blue-400/10 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -70, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[45%] -left-40 h-[400px] w-[400px] rounded-full bg-violet-400/10 blur-3xl"
        />
      </div>

      <main className="relative mx-auto max-w-7xl px-5 py-8 lg:px-8 mb-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between"
        >
          <div>
            <div className="mb-2 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                <Zap size={18} fill="currentColor" />
              </div>

              <span className="text-sm font-semibold text-blue-600">
                Integrations
              </span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Connect everything.
              <span className="block bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
                Work smarter.
              </span>
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
              Connect your favorite tools and bring your entire workflow
              together in one powerful workspace.
            </p>
          </div>

          {/* Connected counter */}
          <motion.div
            whileHover={{ y: -3 }}
            className="flex w-fit items-center gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <Check size={21} />
            </div>

            <div>
              <p className="text-2xl font-bold text-slate-900">
                {connectedCount}
              </p>
              <p className="text-xs text-slate-500">Connected apps</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4"
        >
          <StatCard
            icon={<Globe size={19} />}
            title="Available"
            value={`${integrations.length}+`}
            subtitle="Integrations"
          />

          <StatCard
            icon={<Zap size={19} />}
            title="Automations"
            value="24"
            subtitle="Active workflows"
          />

          <StatCard
            icon={<RefreshCw size={19} />}
            title="Syncs"
            value="1.8K"
            subtitle="This month"
          />

          <StatCard
            icon={<ShieldCheck size={19} />}
            title="Secure"
            value="100%"
            subtitle="Encrypted"
          />
        </motion.div>

        {/* Search / filters */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mb-7 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm"
        >
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
            {/* Search */}
            <div className="relative flex-1">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search integrations..."
                className="h-12 w-full rounded-xl bg-slate-50 pl-11 pr-4 text-sm outline-none transition focus:bg-white focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            {/* Connected toggle */}
            <button
              onClick={() => setShowConnectedOnly(!showConnectedOnly)}
              className={`flex h-12 items-center justify-center gap-2 rounded-xl px-5 text-sm font-medium transition ${
                showConnectedOnly
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100"
              }`}
            >
              <Check size={16} />
              Connected
            </button>
          </div>

          {/* Categories */}
          <div className="mt-3 flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((category) => {
              const active = activeCategory === category;

              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`relative whitespace-nowrap rounded-lg px-4 py-2 text-xs font-semibold transition ${
                    active
                      ? "bg-slate-900 text-white"
                      : "text-slate-500 hover:bg-slate-100 hover:text-slate-800"
                  }`}
                >
                  {category}

                  {active && (
                    <motion.div
                      layoutId="activeCategory"
                      className="absolute inset-0 -z-10 rounded-lg"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Section heading */}
        <div className="mb-5 flex items-end justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Explore integrations
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Choose the tools you want to connect.
            </p>
          </div>

          <span className="hidden text-xs font-medium text-slate-400 sm:block">
            {filteredIntegrations.length} results
          </span>
        </div>

        {/* Integration cards */}
        <AnimatePresence mode="popLayout">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
          >
            {filteredIntegrations.map((integration) => (
              <IntegrationCard
                key={integration.id}
                integration={integration}
                onClick={() => setSelectedIntegration(integration)}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {filteredIntegrations.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex min-h-[300px] flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
              <Search size={24} />
            </div>

            <h3 className="font-semibold text-slate-800">
              No integrations found
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Try changing your search or category.
            </p>
          </motion.div>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mt-10 overflow-hidden rounded-3xl bg-slate-950 p-7 text-white sm:p-9"
        >
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute -bottom-20 left-20 h-52 w-52 rounded-full bg-violet-500/20 blur-3xl" />

          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-3 flex items-center gap-2 text-blue-400">
                <Sparkles size={18} />
                <span className="text-xs font-semibold uppercase tracking-wider">
                  Need something else?
                </span>
              </div>

              <h3 className="text-xl font-bold sm:text-2xl">
                Connect your own application
              </h3>

              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
                Use our API or webhooks to create a custom integration for your
                own workflow.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="flex w-fit items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-xl"
            >
              <Plus size={17} />
              Create integration
              <ArrowUpRight size={16} />
            </motion.button>
          </div>
        </motion.div>
      </main>

      {/* Integration modal */}
      <AnimatePresence>
        {selectedIntegration && (
          <IntegrationModal
            integration={selectedIntegration}
            onClose={() => setSelectedIntegration(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

/* ---------------- STAT CARD ---------------- */

function StatCard({ icon, title, value, subtitle }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{
        y: -4,
        transition: { duration: 0.2 },
      }}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
          {icon}
        </div>

        <ArrowUpRight size={15} className="text-slate-300" />
      </div>

      <p className="text-xs font-medium text-slate-400">{title}</p>

      <div className="mt-1 flex items-baseline gap-2">
        <span className="text-2xl font-bold text-slate-900">{value}</span>
        <span className="text-xs text-slate-400">{subtitle}</span>
      </div>
    </motion.div>
  );
}

/* ---------------- INTEGRATION CARD ---------------- */

function IntegrationCard({ integration, onClick }) {
  return (
    <motion.div
      variants={itemVariants}
      layout
      whileHover={{
        y: -7,
        transition: {
          duration: 0.25,
        },
      }}
      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-xl hover:shadow-slate-200/70"
    >
      {/* Hover glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-blue-500/5 blur-2xl transition-all duration-500 group-hover:scale-[2]" />

      {/* Popular */}
      {integration.popular && (
        <div className="absolute right-4 top-4 rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-amber-600">
          Popular
        </div>
      )}

      <div className="relative">
        <div className="mb-5 flex items-start justify-between">
          <motion.div
            whileHover={{ rotate: 8, scale: 1.08 }}
            className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${integration.color} text-xl font-bold text-white shadow-lg`}
          >
            {integration.icon}
          </motion.div>

          {integration.connected && (
            <div className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1.5 text-[10px] font-bold text-emerald-600">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
              Connected
            </div>
          )}
        </div>

        <h3 className="font-bold text-slate-900">{integration.name}</h3>

        <p className="mt-2 min-h-[42px] text-sm leading-5 text-slate-500">
          {integration.description}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
          <span className="rounded-lg bg-slate-50 px-2.5 py-1.5 text-[10px] font-semibold text-slate-500">
            {integration.category}
          </span>

          <motion.button
            whileHover={{ x: 3 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className={`flex items-center gap-1.5 text-xs font-bold transition ${
              integration.connected
                ? "text-slate-600 hover:text-slate-900"
                : "text-blue-600 hover:text-blue-700"
            }`}
          >
            {integration.connected ? (
              <>
                <Settings2 size={14} />
                Manage
              </>
            ) : (
              <>
                Connect
                <ArrowUpRight size={14} />
              </>
            )}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

/* ---------------- MODAL ---------------- */

function IntegrationModal({ integration, onClose }) {
  const [connecting, setConnecting] = useState(false);

  const handleConnect = () => {
    setConnecting(true);

    setTimeout(() => {
      setConnecting(false);
      onClose();
    }, 1200);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-5 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl"
      >
        <div className="relative overflow-hidden bg-slate-950 px-6 py-8 text-white">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-lg p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
          >
            <X size={18} />
          </button>

          <div
            className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${integration.color} text-2xl font-bold shadow-xl`}
          >
            {integration.icon}
          </div>

          <h2 className="text-2xl font-bold">Connect {integration.name}</h2>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            {integration.description}
          </p>
        </div>

        <div className="p-6">
          <div className="mb-6 space-y-3">
            {[
              "Secure OAuth connection",
              "Automatic data synchronization",
              "Easy disconnect anytime",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-sm text-slate-600"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  <Check size={14} />
                </div>

                {item}
              </div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleConnect}
            disabled={connecting}
            className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 disabled:opacity-70"
          >
            {connecting ? (
              <>
                <RefreshCw size={16} className="animate-spin" />
                Connecting...
              </>
            ) : (
              <>
                <Zap size={16} />
                Connect {integration.name}
              </>
            )}
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}
