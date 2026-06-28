import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Host canonicalization (apex importtaxph.com; www + *.vercel.app redirect to it)
  // is handled at the Vercel domain level. Do NOT add a host `redirects()` here —
  // it conflicts with the dashboard config and causes an infinite redirect loop.
};

export default nextConfig;
