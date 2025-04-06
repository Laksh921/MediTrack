// lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rpfcyzfqavqkzbecfwyz.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJwZmN5emZxYXZxa3piZWNmd3l6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM1ODA4ODYsImV4cCI6MjA1OTE1Njg4Nn0.NQuW0aOMfHfaXdyQkRylfxZ0bEmncakvvFIpIDj-odI'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
