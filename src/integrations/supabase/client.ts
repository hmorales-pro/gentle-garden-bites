// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://covontuisogmogvhqmku.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNvdm9udHVpc29nbW9ndmhxbWt1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc5MDc0NzMsImV4cCI6MjA1MzQ4MzQ3M30.38J0zHhBJ-CqNJ58o-PR-U-fkeoWWcovwkIzKXMOviY";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);