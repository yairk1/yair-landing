-- Create the leads table in Supabase
CREATE TABLE IF NOT EXISTS leads (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  email VARCHAR(255),
  variant VARCHAR(50) NOT NULL DEFAULT 'primary',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on created_at for better performance
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows inserting leads (for the form)
CREATE POLICY "Allow public insert" ON leads
  FOR INSERT 
  WITH CHECK (true);

-- Create a policy for reading leads (you can restrict this later)
CREATE POLICY "Allow authenticated read" ON leads
  FOR SELECT 
  USING (auth.role() = 'authenticated');
