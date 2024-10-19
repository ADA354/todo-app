-- If the table 'items' already exists, this command will remove it, ensuring that we can create a fresh table without any conflict
DROP TABLE IF EXISTS items;

-- This creates a new table called 'items' with two columns:
-- 'id': an auto-incrementing unique identifier for each row (item), serving as the primary key
-- 'title': a string column (VARCHAR) that can hold up to 100 characters, meant to store the item's title, and it's required (NOT NULL means it cannot be left empty)
CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL
);

-- This statement enters predefined values in the table
INSERT INTO items (title) VALUES ('Buy milk'), ('Finish homework');
