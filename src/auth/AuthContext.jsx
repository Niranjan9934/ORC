import { useEffect, useMemo, useState } from "react";
import { AuthContext } from "./context";
const AUTH_URL = import.meta.env.VITE_AUTH_URL;

function createAuthUrl(action) {
  if (!AUTH_URL) {
    throw new Error("VITE_AUTH_URL is not configured.");
  }

  const url = new URL(AUTH_URL);
  url.searchParams.set("controller", "auth");
  url.searchParams.set("action", action);
  return url;
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const refreshSession = async () => {
    if (!AUTH_URL) {
      setUser(null);
      setIsLoading(false);
      return;
    }

    try {
      const url = createAuthUrl("me");
      const response = await fetch(url, { credentials: "include" });

      if (!response.ok) {
        setUser(null);
        return;
      }

      const data = await response.json();
      setUser(data.user ?? null);
    } catch {
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const sessionCheck = window.setTimeout(refreshSession, 0);
    return () => window.clearTimeout(sessionCheck);
  }, []);

  const signInWith = (provider) => {
    const url = createAuthUrl(
      provider === "google" ? "googleLogin" : "microsoftLogin",
    );
    url.searchParams.set("frontend", window.location.href);
    window.location.assign(url.toString());
  };

  const signOut = async () => {
    try {
      await fetch(createAuthUrl("logout"), { credentials: "include" });
    } finally {
      setUser(null);
    }
  };

  const value = useMemo(
    () => ({ user, isLoading, signInWith, signOut }),
    [user, isLoading],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
