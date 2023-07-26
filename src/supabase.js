
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://pixoyguydzqehtblkrah.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpeG95Z3V5ZHpxZWh0YmxrcmFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAxOTE1MDIsImV4cCI6MjAwNTc2NzUwMn0.id_R2O9KGVFaKqqueUwM1ze6KesXC3xl2Rc0eqGf2UA';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;