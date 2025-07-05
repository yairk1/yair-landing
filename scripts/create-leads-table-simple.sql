-- Create a simple leads table
CREATE TABLE IF NOT EXISTS public.leads (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  variant TEXT NOT NULL DEFAULT 'primary',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for better performance
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON public.leads(created_at DESC);

-- Disable RLS for now to make it simple
ALTER TABLE public.leads DISABLE ROW LEVEL SECURITY;

-- Grant permissions to everyone (we'll secure this later)
GRANT ALL ON public.leads TO anon;
GRANT ALL ON public.leads TO authenticated;
GRANT USAGE ON SEQUENCE public.leads_id_seq TO anon;
GRANT USAGE ON SEQUENCE public.leads_id_seq TO authenticated;
