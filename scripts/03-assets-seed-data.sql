-- Insert Asset Categories
INSERT INTO asset_categories (name, description, code) VALUES
  ('Furniture', 'Office and facility furniture', 'FUR'),
  ('Computing Equipment', 'Computers, laptops, servers', 'COMP'),
  ('Laboratory Equipment', 'Scientific and lab instruments', 'LAB'),
  ('Office Equipment', 'Printers, scanners, copiers', 'OFF'),
  ('Vehicles', 'Cars, buses, vans for university use', 'VEH'),
  ('Sports Equipment', 'Athletic and recreational equipment', 'SPORT'),
  ('Library Materials', 'Books and multimedia resources', 'LIB'),
  ('Audiovisual Equipment', 'Projectors, cameras, microphones', 'AV')
ON CONFLICT DO NOTHING;

-- Insert Sample Assets
INSERT INTO assets (asset_code, name, description, category_id, location, purchase_date, purchase_price, depreciation_rate, condition, status, assigned_department, warranty_expiry, serial_number, manufacturer, model, quantity, useful_life_years, created_at) VALUES
  ('AST-2024-001', 'Desktop Computer', 'Intel i7 Processor 32GB RAM', 2, 'IT Department', '2023-06-15', 1200.00, 20.00, 'excellent', 'active', 'IT', '2025-06-15', 'SN12345678', 'Dell', 'OptiPlex 7080', 10, 4, CURRENT_TIMESTAMP),
  ('AST-2024-002', 'Office Desk', 'Executive desk with drawers', 1, 'Admin Wing', '2022-01-20', 450.00, 10.00, 'excellent', 'active', 'Admin', NULL, 'FUR-56789', 'IKEA', 'Bekant', 25, 10, CURRENT_TIMESTAMP),
  ('AST-2024-003', 'Projector', '4K Ultra HD Projector', 8, 'Conference Room A', '2023-09-10', 800.00, 15.00, 'excellent', 'active', 'Academics', '2025-09-10', 'PROJ-98765', 'Epson', 'EB-2250U', 3, 5, CURRENT_TIMESTAMP),
  ('AST-2024-004', 'Laboratory Microscope', 'Advanced Research Microscope', 3, 'Science Lab 101', '2021-03-15', 5000.00, 10.00, 'good', 'active', 'Sciences', '2024-03-15', 'MICRO-11111', 'Zeiss', 'Axio', 5, 10, CURRENT_TIMESTAMP),
  ('AST-2024-005', 'Printer', 'Multi-function Color Printer', 4, 'Library', '2022-11-05', 600.00, 20.00, 'excellent', 'active', 'Library', '2024-11-05', 'PRINT-22222', 'HP', 'LaserJet Pro', 8, 5, CURRENT_TIMESTAMP),
  ('AST-2024-006', 'Campus Vehicle', 'Toyota Bus for shuttle service', 5, 'Vehicle Depot', '2020-05-10', 35000.00, 12.00, 'good', 'active', 'Transport', NULL, 'VEH-33333', 'Toyota', 'Coaster', 1, 8, CURRENT_TIMESTAMP);
