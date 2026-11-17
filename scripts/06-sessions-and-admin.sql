-- Sessions pour l'authentification par cookie (login route)
CREATE TABLE IF NOT EXISTS sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  token VARCHAR(128) UNIQUE NOT NULL,
  expires_at TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_sessions_token ON sessions(token);
CREATE INDEX IF NOT EXISTS idx_sessions_user ON sessions(user_id);

-- Compte administrateur de démonstration (mot de passe : AbsAdmin2026!)
-- Hash bcrypt de 'AbsAdmin2026!' — à changer en production.
INSERT INTO users (email, password_hash, full_name, role)
VALUES ('admin@abs-univ.com', '$2b$10$ndZLZwKKdj5tRThZ0oTuu.CpJyC6bhzslbPdtpY4WYelnPQJLvNqO', 'Administrateur ABS', 'admin'::user_role)
ON CONFLICT (email) DO NOTHING;
