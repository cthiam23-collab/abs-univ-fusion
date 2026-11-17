-- =============================================================
-- ABS University — Système de candidatures (admissions)
-- Tables: applications + application_documents
-- Cible: Supabase local "abs-univ-local" (public)
-- =============================================================

-- Séquence pour les numéros de référence ABS-2026-00001
CREATE SEQUENCE IF NOT EXISTS application_ref_seq START 1;

CREATE TABLE IF NOT EXISTS applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  reference VARCHAR(24) UNIQUE NOT NULL
    DEFAULT 'ABS-' || to_char(now(), 'YYYY') || '-' ||
            lpad(nextval('application_ref_seq')::text, 5, '0'),

  -- Type de candidature
  application_type VARCHAR(20) NOT NULL
    CHECK (application_type IN ('undergraduate', 'graduate', 'international')),

  -- Identité du candidat
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  date_of_birth DATE,
  gender VARCHAR(20) CHECK (gender IN ('M', 'F', 'other') OR gender IS NULL),
  country VARCHAR(100),
  city VARCHAR(100),
  address TEXT,

  -- Choix académique
  program_code VARCHAR(50),
  program_name VARCHAR(200) NOT NULL,
  start_term VARCHAR(30),                -- ex: "Septembre 2026"

  -- Parcours académique
  last_diploma VARCHAR(200),
  last_institution VARCHAR(200),
  graduation_year INTEGER,
  english_level VARCHAR(30),             -- beginner/intermediate/advanced/fluent

  -- Lettre de motivation
  motivation TEXT,

  -- Spécifique Master (graduate)
  experience_years INTEGER,
  currently_employed BOOLEAN DEFAULT FALSE,
  has_recommendation_letter BOOLEAN DEFAULT FALSE,
  has_cv BOOLEAN DEFAULT FALSE,

  -- Spécifique étudiants internationaux
  needs_visa BOOLEAN,
  needs_housing BOOLEAN,
  passport_number VARCHAR(50),

  -- Suivi administratif
  status VARCHAR(20) NOT NULL DEFAULT 'submitted'
    CHECK (status IN ('submitted', 'in_review', 'interview', 'accepted', 'rejected', 'waitlist')),
  admin_notes TEXT,

  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Pièces du dossier (checklist par candidature)
CREATE TABLE IF NOT EXISTS application_documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  application_id UUID NOT NULL REFERENCES applications(id) ON DELETE CASCADE,
  document_type VARCHAR(50) NOT NULL
    CHECK (document_type IN (
      'acte_naissance', 'photos', 'bac_attestation', 'releves_bac',
      'bulletins_terminale', 'releves_l1l2', 'diplome_licence',
      'releves_licence', 'cv', 'motivation', 'recommandation',
      'attestation_travail', 'autre'
    )),
  file_name VARCHAR(255),
  provided BOOLEAN NOT NULL DEFAULT FALSE,
  verified BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (application_id, document_type)
);

-- Index
CREATE INDEX IF NOT EXISTS idx_applications_type ON applications(application_type);
CREATE INDEX IF NOT EXISTS idx_applications_status ON applications(status);
CREATE INDEX IF NOT EXISTS idx_applications_email ON applications(email);
CREATE INDEX IF NOT EXISTS idx_applications_created ON applications(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_app_documents_app ON application_documents(application_id);
