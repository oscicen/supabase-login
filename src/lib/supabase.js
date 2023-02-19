import { createClient } from '@supabase/supabase-js';

const URL = process.env.REACT_APP_URL;
const ANON_KEY = process.env.REACT_APP_ANON_KEY;
console.log(URL, ANON_KEY);

// Create a single supabase client for interacting with your database
const supabase = createClient(URL, ANON_KEY);

// DB PASS cKFAGnMKkOPNExBG

export default supabase;