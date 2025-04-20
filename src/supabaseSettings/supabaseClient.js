import {createClient} from '@supabase/supabase-js'

const supabaseUrl = 'https://pwsuvdmsktvfshnqyckn.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB3c3V2ZG1za3R2ZnNobnF5Y2tuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM0MjM1MTAsImV4cCI6MjA1ODk5OTUxMH0.ZskHQUfuKvdfOJOmqCATL0HsY20xFhOTwWQxeRzK7Gw'

export const supabase = createClient(supabaseUrl, supabaseKey);