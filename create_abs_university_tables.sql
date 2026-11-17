-- Create users table
CREATE OR REPLACE FUNCTION create_abs_university_tables()
RETURNS TEXT AS $$
BEGIN
  CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

  CREATE TABLE IF NOT EXISTS users (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role TEXT NOT NULL,
    first_name TEXT,
    last_name TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
  );

  CREATE TABLE IF NOT EXISTS courses (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    code TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    description TEXT,
    credits INT4,
    department TEXT,
    instructor UUID REFERENCES users(id)
  );

  -- Add other tables here (programs, students, faculty, etc.)

  RETURN 'Tables created successfully';
END;
$$ LANGUAGE plpgsql;
