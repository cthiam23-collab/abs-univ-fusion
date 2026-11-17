-- Assets Management System Tables

-- Asset Categories Table
CREATE TABLE IF NOT EXISTS asset_categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE,
  description TEXT,
  code VARCHAR(20) NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Assets Table
CREATE TABLE IF NOT EXISTS assets (
  id SERIAL PRIMARY KEY,
  asset_code VARCHAR(50) NOT NULL UNIQUE,
  name VARCHAR(200) NOT NULL,
  description TEXT,
  category_id INTEGER NOT NULL REFERENCES asset_categories(id),
  location VARCHAR(200),
  purchase_date DATE NOT NULL,
  purchase_price DECIMAL(15, 2) NOT NULL,
  depreciation_rate DECIMAL(5, 2) DEFAULT 10.00,
  depreciation_method VARCHAR(50) DEFAULT 'straight-line',
  condition VARCHAR(50) DEFAULT 'excellent',
  status VARCHAR(50) DEFAULT 'active',
  assigned_to_id UUID REFERENCES users(id),
  assigned_department VARCHAR(100),
  warranty_expiry DATE,
  serial_number VARCHAR(100),
  manufacturer VARCHAR(100),
  model VARCHAR(100),
  color VARCHAR(50),
  quantity INTEGER DEFAULT 1,
  unit_cost DECIMAL(15, 2),
  useful_life_years INTEGER DEFAULT 5,
  salvage_value DECIMAL(15, 2) DEFAULT 0,
  notes TEXT,
  image_url VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  created_by UUID REFERENCES users(id),
  last_modified_by UUID REFERENCES users(id)
);

-- Asset Maintenance Records Table
CREATE TABLE IF NOT EXISTS asset_maintenance (
  id SERIAL PRIMARY KEY,
  asset_id INTEGER NOT NULL REFERENCES assets(id) ON DELETE CASCADE,
  maintenance_type VARCHAR(50) NOT NULL,
  description TEXT,
  maintenance_date DATE NOT NULL,
  cost DECIMAL(15, 2),
  performed_by VARCHAR(100),
  next_maintenance_date DATE,
  status VARCHAR(50) DEFAULT 'completed',
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Asset Depreciation Table
CREATE TABLE IF NOT EXISTS asset_depreciation (
  id SERIAL PRIMARY KEY,
  asset_id INTEGER NOT NULL REFERENCES assets(id) ON DELETE CASCADE,
  depreciation_year INTEGER NOT NULL,
  depreciation_amount DECIMAL(15, 2) NOT NULL,
  accumulated_depreciation DECIMAL(15, 2),
  book_value DECIMAL(15, 2),
  calculated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Asset Allocation History Table
CREATE TABLE IF NOT EXISTS asset_allocation_history (
  id SERIAL PRIMARY KEY,
  asset_id INTEGER NOT NULL REFERENCES assets(id) ON DELETE CASCADE,
  allocated_to_id UUID REFERENCES users(id),
  allocated_department VARCHAR(100),
  allocation_date DATE NOT NULL,
  return_date DATE,
  status VARCHAR(50) DEFAULT 'active',
  notes TEXT,
  created_by UUID REFERENCES users(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Asset Disposal Table
CREATE TABLE IF NOT EXISTS asset_disposal (
  id SERIAL PRIMARY KEY,
  asset_id INTEGER NOT NULL REFERENCES assets(id),
  disposal_date DATE NOT NULL,
  disposal_method VARCHAR(50),
  reason VARCHAR(200),
  disposal_value DECIMAL(15, 2),
  disposal_reference VARCHAR(100),
  approved_by UUID REFERENCES users(id),
  notes TEXT,
  created_by UUID REFERENCES users(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Indexes for performance
CREATE INDEX idx_assets_category ON assets(category_id);
CREATE INDEX idx_assets_status ON assets(status);
CREATE INDEX idx_assets_location ON assets(location);
CREATE INDEX idx_assets_assigned_to ON assets(assigned_to_id);
CREATE INDEX idx_maintenance_asset ON asset_maintenance(asset_id);
CREATE INDEX idx_allocation_asset ON asset_allocation_history(asset_id);
CREATE INDEX idx_allocation_user ON asset_allocation_history(allocated_to_id);
