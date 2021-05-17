CREATE TABLE helo_users (
id SERIAL PRIMARY KEY,
username VARCHAR(50),
password VARCHAR(50),
profile_pic TEXT
);

CREATE TABLE helo_posts(
  id SERIAL PRIMARY KEY,
  title VARCHAR(45),
  content TEXT,
  img TEXT,
  author_id INTEGER,
  date_created TIMESTAMP
);