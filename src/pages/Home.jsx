import {
  Search,
  SlidersHorizontal,
  UserRound,
  Plus,
  MoreVertical,
  CalendarDays,
  MessageCircle,
  Eye,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

const customers = {
  contacted: [
    {
      name: "ByteBridge",
      description: "Corporate and personal data protection on a turnkey basis",
      date: "18 Apr",
      messages: 2,
      views: 1,
    },
    {
      name: "AI Synergy",
      description: "Innovative solutions based on artificial intelligence",
      date: "21 Mar",
      messages: 1,
      views: 3,
    },
    {
      name: "LeadBoost Agency",
      description: "Lead attraction and automation for small businesses",
      date: "No due date",
      messages: 4,
      views: 7,
    },
  ],

  negotiation: [
    {
      name: "SkillUp Hub",
      description: "Platform for professional development of specialists",
      date: "09 Mar",
      messages: 4,
      views: 1,
    },
    {
      name: "Thera Well",
      description: "Platform for psychological support and consultations",
      date: "No due date",
      messages: 7,
      views: 2,
    },
    {
      name: "SwiftCargo",
      description: "International transportation of chemical goods",
      date: "23 Apr",
      messages: 2,
      views: 5,
    },
  ],

  offer: [
    {
      name: "FitLife Nutrition",
      description: "Nutritious food and nutraceuticals for individuals",
      date: "10 Mar",
      messages: 1,
      views: 3,
    },
    {
      name: "Prime Estate",
      description:
        "Agency-developer of low-rise elite and commercial real estate",
      date: "16 Apr",
      messages: 1,
      views: 1,
      featured: true,
      location: "540 Realty Blvd, Miami, FL 33132",
      email: "contact@primeestate.com",
      manager: "Antony Cardenas",
    },
    {
      name: "NextGen University",
      description: "Modern education and professional development",
      date: "12 Apr",
      messages: 3,
      views: 2,
    },
  ],

  closed: [
    {
      name: "CloudSphere",
      description: "Cloud services for data storage and processing",
      date: "24 Mar",
      messages: 2,
      views: 1,
    },
    {
      name: "Advantage Medi",
      description:
        "Full cycle of digital advertising and social media promotion",
      date: "05 Apr",
      messages: 1,
      views: 3,
    },
    {
      name: "Safebank Solutions",
      description: "Innovative financial technologies and digital payments",
      date: "30 Mar",
      messages: 4,
      views: 7,
    },
  ],
};

const columns = [
  {
    key: "contacted",
    title: "Contacted",
    count: 12,
  },
  {
    key: "negotiation",
    title: "Negotiation",
    count: 17,
  },
  {
    key: "offer",
    title: "Offer Sent",
    count: 13,
  },
  {
    key: "closed",
    title: "Deal Closed",
    count: 12,
  },
];

function CustomerCard({ customer }) {
  if (customer.featured) {
    return (
      <div
        className="relative overflow-hidden rounded-xl p-4  shadow-sm"
        style={{
          background: "var(--color-primary)",
          color: "var(--color-surface)",
        }}
      >
        <button
          type="button"
          className="absolute right-3 top-3 rounded-lg p-1 transition"
          style={{
            color: "var(--color-surface)",
          }}
        >
          <MoreVertical size={17} />
        </button>

        <h3 className="pr-6 text-sm font-semibold">{customer.name}</h3>

        <p className="mt-2 text-[11px] leading-4 opacity-75">
          {customer.description}
        </p>

        <div className="mt-4 space-y-1.5 text-[10px] opacity-80">
          <div className="flex items-center gap-1.5">
            <span>⌖</span>
            <span>{customer.location}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <span>✉</span>
            <span>{customer.email}</span>
          </div>
        </div>

        <div
          className="mt-4 flex items-center gap-2 border-t pt-3"
          style={{
            borderColor: "rgba(255,255,255,0.15)",
          }}
        >
          <div
            className="flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-bold"
            style={{
              background: "var(--color-accent)",
            }}
          >
            A
          </div>

          <div className="flex-1">
            <p className="text-[9px] opacity-60">Manager</p>
            <p className="text-[10px] font-medium">{customer.manager}</p>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between text-[10px] opacity-75">
          <span className="flex items-center gap-1">
            <CalendarDays size={12} />
            {customer.date}
          </span>

          <span className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <MessageCircle size={12} />
              {customer.messages}
            </span>

            <span className="flex items-center gap-1">
              <Eye size={12} />
              {customer.views}
            </span>
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      className="group relative rounded-xl border p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
      style={{
        background: "var(--color-surface)",
        borderColor: "var(--color-border)",
      }}
    >
      <button
        type="button"
        className="absolute right-3 top-3 rounded-lg p-1 opacity-60 transition group-hover:opacity-100"
        style={{
          color: "var(--color-text-muted)",
        }}
      >
        <MoreVertical size={17} />
      </button>

      <h3
        className="pr-6 text-sm font-semibold"
        style={{
          color: "var(--color-text)",
        }}
      >
        {customer.name}
      </h3>

      <p
        className="mt-2 line-clamp-2 min-h-[32px] text-[11px] leading-4"
        style={{
          color: "var(--color-text-muted)",
        }}
      >
        {customer.description}
      </p>

      <div
        className="mt-4 flex items-center justify-between text-[10px]"
        style={{
          color: "var(--color-text-muted)",
        }}
      >
        <span
          className="flex items-center gap-1 rounded-md border px-2 py-1"
          style={{
            borderColor: "var(--color-border)",
            background: "var(--color-muted-background)",
          }}
        >
          <CalendarDays size={11} />
          {customer.date}
        </span>

        <span className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <MessageCircle size={11} />
            {customer.messages}
          </span>

          <span className="flex items-center gap-1">
            <Eye size={11} />
            {customer.views}
          </span>
        </span>
      </div>
    </div>
  );
}

function PerformanceChart() {
  const values = [45, 70, 52, 82, 64, 91, 74];

  return (
    <div className="flex h-24 items-end gap-2">
      {values.map((value, index) => (
        <div
          key={index}
          className="flex flex-1 flex-col justify-end"
          style={{ height: "100%" }}
        >
          <div
            className="w-full rounded-t-md transition-all duration-300"
            style={{
              height: `${value}%`,
              background:
                index === values.length - 1
                  ? "var(--color-accent)"
                  : "color-mix(in srgb, var(--color-accent) 35%, var(--color-surface))",
            }}
          />
        </div>
      ))}
    </div>
  );
}

function SuccessGauge() {
  return (
    <div className="relative flex h-32 w-32 items-center justify-center">
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `conic-gradient(var(--color-accent) 0deg 245deg, var(--color-border) 245deg 360deg)`,
          mask: "radial-gradient(farthest-side, transparent calc(100% - 10px), #000 calc(100% - 9px))",
          WebkitMask:
            "radial-gradient(farthest-side, transparent calc(100% - 10px), #000 calc(100% - 9px))",
        }}
      />

      <div className="text-center">
        <p
          className="text-2xl font-semibold"
          style={{ color: "var(--color-text)" }}
        >
          68%
        </p>

        <p
          className="mt-0.5 text-[9px]"
          style={{ color: "var(--color-text-muted)" }}
        >
          Successful deals
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div
      className="flex-1 overflow-y-auto"
      style={{
        background: "var(--color-background)",
      }}
    >
      <div className="min-h-full p-5 md:p-7">
        {/* Top toolbar */}
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div
            className="flex min-w-0 flex-1 items-center gap-2 rounded-xl border px-4 py-2.5"
            style={{
              background: "var(--color-surface)",
              borderColor: "var(--color-border)",
            }}
          >
            <Search size={17} style={{ color: "var(--color-text-muted)" }} />

            <input
              type="text"
              placeholder="Search customer..."
              className="w-full bg-transparent text-sm outline-none"
              style={{
                color: "var(--color-text)",
              }}
            />
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium transition"
              style={{
                color: "var(--color-text)",
              }}
            >
              <TrendingUp size={15} />
              Sort by
            </button>

            <button
              type="button"
              className="flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium transition"
              style={{
                color: "var(--color-text)",
              }}
            >
              <SlidersHorizontal size={15} />
              Filters
            </button>

            <button
              type="button"
              className="flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium transition"
              style={{
                color: "var(--color-text)",
              }}
            >
              <UserRound size={15} />
              Me
            </button>

            <button
              type="button"
              className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:opacity-90"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
              }}
            >
              <Plus size={15} />
              Add customer
            </button>
          </div>
        </div>

        {/* Overview */}
        <div
          className="mb-7 overflow-hidden rounded-2xl border"
          style={{
            background: "var(--color-surface)",
            borderColor: "var(--color-border)",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_0.8fr_0.8fr]">
            {/* New customers */}
            <div className="p-5">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "var(--color-text)" }}
                  >
                    New customers
                  </p>

                  <p
                    className="mt-1 text-[10px]"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Last 7 days
                  </p>
                </div>

                <span
                  className="rounded-full px-2 py-1 text-[9px] font-semibold"
                  style={{
                    color: "var(--color-accent)",
                    background: "var(--color-muted-background)",
                  }}
                >
                  +18.4%
                </span>
              </div>

              <PerformanceChart />

              <div
                className="mt-2 flex justify-between text-[9px]"
                style={{ color: "var(--color-text-muted)" }}
              >
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>

            {/* Success */}
            <div
              className="flex items-center justify-center border-t p-5 lg:border-l lg:border-t-0"
              style={{ borderColor: "var(--color-border)" }}
            >
              <div className="text-center">
                <p
                  className="mb-2 text-xs font-medium"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Conversion rate
                </p>

                <SuccessGauge />
              </div>
            </div>

            {/* Tasks */}
            <div
              className="flex flex-col justify-center border-t p-5 lg:border-l lg:border-t-0"
              style={{ borderColor: "var(--color-border)" }}
            >
              <p
                className="text-3xl font-semibold"
                style={{ color: "var(--color-text)" }}
              >
                53
              </p>

              <p
                className="mt-1 text-xs"
                style={{ color: "var(--color-text-muted)" }}
              >
                Tasks
              </p>

              <p
                className="text-xs"
                style={{ color: "var(--color-text-muted)" }}
              >
                in progress
              </p>

              <button
                type="button"
                className="mt-4 flex w-fit items-center gap-1 text-xs font-semibold"
                style={{ color: "var(--color-accent)" }}
              >
                View tasks
                <ArrowRight size={13} />
              </button>
            </div>

            {/* Payments */}
            <div
              className="flex flex-col justify-center border-t p-5 lg:border-l lg:border-t-0"
              style={{ borderColor: "var(--color-border)" }}
            >
              <p
                className="text-3xl font-semibold"
                style={{ color: "var(--color-text)" }}
              >
                $15,890
              </p>

              <p
                className="mt-1 text-xs"
                style={{ color: "var(--color-text-muted)" }}
              >
                Prepayments
              </p>

              <p
                className="text-xs"
                style={{ color: "var(--color-text-muted)" }}
              >
                from customers
              </p>

              <button
                type="button"
                className="mt-4 flex w-fit items-center gap-1 text-xs font-semibold"
                style={{ color: "var(--color-accent)" }}
              >
                View payments
                <ArrowRight size={13} />
              </button>
            </div>
          </div>
        </div>

        {/* Pipeline */}
        <div className="mb-3 flex items-center justify-between">
          <div>
            <h1
              className="text-xl font-semibold"
              style={{ color: "var(--color-text)" }}
            >
              Customer pipeline
            </h1>

            <p
              className="mt-1 text-xs"
              style={{ color: "var(--color-text-muted)" }}
            >
              Track customers and deals across every stage.
            </p>
          </div>

          <div
            className="hidden items-center gap-2 text-xs sm:flex"
            style={{ color: "var(--color-text-muted)" }}
          >
            <CheckCircle2 size={15} style={{ color: "var(--color-accent)" }} />
            54 active customers
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 xl:grid-cols-4">
          {columns.map((column) => (
            <section key={column.key} className="min-w-0">
              {/* Column header */}
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h2
                    className="text-sm font-semibold"
                    style={{ color: "var(--color-text)" }}
                  >
                    {column.title}
                  </h2>

                  <span
                    className="rounded-md border px-1.5 py-0.5 text-[10px] font-medium"
                    style={{
                      background: "var(--color-surface)",
                      borderColor: "var(--color-border)",
                      color: "var(--color-text-muted)",
                    }}
                  >
                    {column.count}
                  </span>
                </div>

                <button
                  type="button"
                  className="rounded-md px-1.5 py-1 text-xs"
                  style={{
                    color: "var(--color-text-muted)",
                  }}
                >
                  ↕
                </button>
              </div>

              {/* Cards */}
              <div className="space-y-2.5">
                {customers[column.key].map((customer) => (
                  <CustomerCard
                    key={`${column.key}-${customer.name}`}
                    customer={customer}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
