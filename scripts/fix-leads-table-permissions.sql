-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow public insert" ON leads;
DROP POLICY IF EXISTS "Allow authenticated read" ON leads;

-- Recreate the leads table with proper structure
DROP TABLE IF EXISTS leads;

CREATE TABLE leads (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  email VARCHAR(255),
  variant VARCHAR(50) NOT NULL DEFAULT 'primary',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for better performance
CREATE INDEX idx_leads_created_at ON leads(created_at DESC);

-- Enable Row Level Security
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Policy 1: Allow anyone to INSERT leads (for the contact form)
CREATE POLICY "Allow public insert leads" ON leads
  FOR INSERT 
  WITH CHECK (true);

-- Policy 2: Allow service role to SELECT all leads (for admin dashboard)
CREATE POLICY "Allow service role select leads" ON leads
  FOR SELECT 
  USING (auth.jwt() ->> 'role' = 'service_role' OR auth.role() = 'service_role');

-- Policy 3: Allow authenticated users to SELECT leads (backup policy)
CREATE POLICY "Allow authenticated select leads" ON leads
  FOR SELECT 
  USING (auth.role() = 'authenticated');

-- Grant necessary permissions
GRANT USAGE ON SCHEMA public TO anon;
GRANT USAGE ON SCHEMA public TO authenticated;
GRANT USAGE ON SCHEMA public TO service_role;

GRANT INSERT ON leads TO anon;
GRANT INSERT ON leads TO authenticated;
GRANT ALL ON leads TO service_role;

GRANT USAGE ON SEQUENCE leads_id_seq TO anon;
GRANT USAGE ON SEQUENCE leads_id_seq TO authenticated;
GRANT ALL ON SEQUENCE leads_id_seq TO service_role;
