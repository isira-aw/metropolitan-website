-- Migration script to transition from divisions to fixed subdivisions
-- Run this script before starting the application with updated entities

-- Step 1: Add new subdivision_slug columns to all related tables
ALTER TABLE services ADD COLUMN IF NOT EXISTS subdivision_slug VARCHAR(255);
ALTER TABLE testimonials ADD COLUMN IF NOT EXISTS subdivision_slug VARCHAR(255);
ALTER TABLE projects ADD COLUMN IF NOT EXISTS subdivision_slug VARCHAR(255);
ALTER TABLE partners ADD COLUMN IF NOT EXISTS subdivision_slug VARCHAR(255);

-- Step 2: Migrate existing data (if any) - this is a placeholder
-- In a real migration, you would map old division_id values to new subdivision slugs
-- For now, we'll clear the data and rely on data.sql to repopulate

-- Step 3: Drop old division_id columns
ALTER TABLE services DROP COLUMN IF EXISTS division_id;
ALTER TABLE testimonials DROP COLUMN IF EXISTS division_id;
ALTER TABLE projects DROP COLUMN IF EXISTS division_id;
ALTER TABLE partners DROP COLUMN IF EXISTS division_id;

-- Step 4: Drop divisions table (no longer needed)
DROP TABLE IF EXISTS divisions CASCADE;

-- Step 5: Clear existing data to allow data.sql to repopulate with new structure
TRUNCATE TABLE services CASCADE;
TRUNCATE TABLE testimonials CASCADE;
TRUNCATE TABLE projects CASCADE;
TRUNCATE TABLE partners CASCADE;
