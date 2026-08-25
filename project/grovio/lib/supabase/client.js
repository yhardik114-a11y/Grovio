import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL= "https://gfoaftftsxgghiaucgcx.supabase.co",
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY="sb_publishable_kJqCQfAqk3J1NFInclnQ3A_K85kDIFd"
  );
}