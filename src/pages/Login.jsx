import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../auth/useAuth";

const providers = [
  {
    id: "google",
    label: "Continue with Google",
    icon: "https://www.svgrepo.com/show/475656/google-color.svg",
  },
  {
    id: "microsoft",
    label: "Continue with Microsoft",
    icon: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
];

export default function Login() {
  const { user, isLoading, signInWith } = useAuth();
  const [redirecting, setRedirecting] = useState(null);
  const [error, setError] = useState("");
  const location = useLocation();
  const destination = location.state?.from?.pathname ?? "/";

  if (!isLoading && user) {
    return <Navigate to={destination} replace />;
  }

  const startSignIn = (provider) => {
    try {
      setError("");
      setRedirecting(provider);
      signInWith(provider);
    } catch (authError) {
      setRedirecting(null);
      setError(authError.message || "Unable to start sign-in.");
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 p-6">
      <section className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/60 sm:p-10">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-xl font-bold text-white">
            O
          </div>
          <h1 className="text-2xl font-bold text-slate-900">Welcome to ORC</h1>
          <p className="mt-2 text-sm text-slate-500">Choose a secure sign-in method to continue.</p>
        </div>

        <div className="space-y-3">
          {providers.map((provider) => (
            <button
              key={provider.id}
              type="button"
              disabled={redirecting !== null || isLoading}
              onClick={() => startSignIn(provider.id)}
              className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 font-semibold text-slate-700 transition hover:border-indigo-300 hover:bg-indigo-50 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <img
                src={provider.icon}
                alt=""
                aria-hidden="true"
                className="h-5 w-5"
              />
              {redirecting === provider.id ? "Redirecting..." : provider.label}
            </button>
          ))}
        </div>

        {error && <p className="mt-5 text-center text-sm text-red-600">{error}</p>}
      </section>
    </main>
  );
}
