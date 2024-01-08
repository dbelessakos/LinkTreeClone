import { createClient } from "@supabase/supabase-js";

const subabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const subabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

const supabase = createClient(subabaseUrl, subabaseAnonKey);
export default supabase;