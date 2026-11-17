-- =============================================================
-- ABS University — Messages de contact
-- =============================================================

CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(150) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  department VARCHAR(50) NOT NULL DEFAULT 'general'
    CHECK (department IN ('general', 'admissions', 'graduate_admissions', 'international', 'library', 'financial', 'careers')),
  subject VARCHAR(200) NOT NULL,
  message TEXT NOT NULL,
  status VARCHAR(20) NOT NULL DEFAULT 'new'
    CHECK (status IN ('new', 'read', 'answered', 'archived')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_contact_messages_department ON contact_messages(department);
CREATE INDEX IF NOT EXISTS idx_contact_messages_created ON contact_messages(created_at DESC);
