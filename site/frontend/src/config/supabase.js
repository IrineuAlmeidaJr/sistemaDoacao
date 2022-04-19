import { createClient } from '@supabase/supabase-js';

const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRqeW1odnB4bG9ndnFpbW9reXR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDk2MzE1ODUsImV4cCI6MTk2NTIwNzU4NX0.b32YpSZum0hX5rGX6GM_JsNFl8rKn0dirVzvDDTE_qo'
const SUPABASE_URL = 'https://tjymhvpxlogvqimokytv.supabase.co';
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabaseClient;