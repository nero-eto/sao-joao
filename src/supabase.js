import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://gdafibkejjmkrljssbhk.supabase.co';
const SUPABASE_KEY = 'sb_publishable_7YbmQh0lens6GLqcDYNfZw_dzKvsc9A';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);   