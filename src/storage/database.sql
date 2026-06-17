-- ============================================================
--  Schema
-- ============================================================

CREATE TABLE posts (
  id       INTEGER PRIMARY KEY,
  title    TEXT    NOT NULL,
  body     TEXT    NOT NULL,
  views    INTEGER NOT NULL DEFAULT 0,
  likes    INTEGER NOT NULL DEFAULT 0,
  dislikes INTEGER NOT NULL DEFAULT 0,
  user_id  INTEGER NOT NULL
);

CREATE TABLE post_tags (
  post_id INTEGER NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
  tag     TEXT    NOT NULL,
  PRIMARY KEY (post_id, tag)
);

CREATE TABLE events (
  id           INTEGER PRIMARY KEY,
  title        TEXT    NOT NULL,
  description  TEXT    NOT NULL,
  category     TEXT    NOT NULL,
  venue        TEXT    NOT NULL,
  city         TEXT    NOT NULL,
  country      TEXT    NOT NULL,
  start_date   TIMESTAMPTZ NOT NULL,
  end_date     TIMESTAMPTZ NOT NULL,
  capacity     INTEGER NOT NULL,
  attendees    INTEGER NOT NULL DEFAULT 0,
  organizer_id INTEGER NOT NULL,
  status       TEXT    NOT NULL CHECK (status IN ('upcoming', 'sold_out', 'completed'))
);

CREATE TABLE event_tags (
  event_id INTEGER NOT NULL REFERENCES events(id) ON DELETE CASCADE,
  tag      TEXT    NOT NULL,
  PRIMARY KEY (event_id, tag)
);

CREATE TABLE tasks (
  id          INTEGER PRIMARY KEY,
  title       TEXT    NOT NULL,
  description TEXT    NOT NULL,
  status      TEXT    NOT NULL CHECK (status IN ('todo', 'in_progress', 'done')),
  priority    TEXT    NOT NULL CHECK (priority IN ('urgent', 'high', 'medium', 'low')),
  due_date    TIMESTAMPTZ NOT NULL,
  created_at  TIMESTAMPTZ NOT NULL,
  assignee_id INTEGER NOT NULL,
  completed   BOOLEAN NOT NULL DEFAULT FALSE,
  progress    INTEGER NOT NULL DEFAULT 0 CHECK (progress BETWEEN 0 AND 100)
);

CREATE TABLE task_tags (
  task_id INTEGER NOT NULL REFERENCES tasks(id) ON DELETE CASCADE,
  tag     TEXT    NOT NULL,
  PRIMARY KEY (task_id, tag)
);


-- ============================================================
--  Seed data
-- ============================================================

-- posts
INSERT INTO posts (id, title, body, views, likes, dislikes, user_id) VALUES
  (1, 'His mother had always taught him',
      'His mother had always taught him not to ever think of himself as better than others. He tried to live by this motto, but a difficult conversation challenged that belief.',
      305, 192, 25, 121),
  (2, 'He was an expert but not in a discipline',
      'He had mastered the small art of making perfect soft-serve cones. It was not a famous skill, but it took years of patience and repetition.',
      4884, 859, 32, 91),
  (3, 'The archive opened after midnight',
      'The researcher found a missing catalog card behind the cabinet. It pointed to a sealed box no one had requested in thirty years.',
      1290, 341, 18, 74),
  (4, 'A small city changed its traffic lights',
      'The council expected complaints after the new timing system launched. Instead, drivers noticed shorter waits and fewer crowded intersections.',
      2307, 512, 44, 188);

INSERT INTO post_tags (post_id, tag) VALUES
  (1, 'history'), (1, 'american'), (1, 'crime'),
  (2, 'french'),  (2, 'fiction'),  (2, 'english'),
  (3, 'mystery'), (3, 'archive'),  (3, 'research'),
  (4, 'urban'),   (4, 'planning'), (4, 'technology');

-- events
INSERT INTO events (id, title, description, category, venue, city, country, start_date, end_date, capacity, attendees, organizer_id, status) VALUES
  (1, 'Riverside Jazz Night',
      'A free open-air concert featuring three local quartets. Bring a blanket; food trucks arrive at sunset.',
      'music', 'Riverside Park', 'Portland', 'USA',
      '2026-07-12T18:00:00Z', '2026-07-12T22:30:00Z',
      800, 643, 121, 'upcoming'),
  (2, 'Open Source Maintainers Summit',
      'A one-day gathering for project maintainers to swap burnout survival tactics and governance models.',
      'technology', 'Hall C, Convention Center', 'Berlin', 'Germany',
      '2026-09-03T09:00:00Z', '2026-09-03T17:00:00Z',
      250, 250, 91, 'sold_out'),
  (3, 'Coastal Cleanup Morning',
      'Volunteers meet at the north pier to collect debris before the tide turns. Gloves and bags provided.',
      'volunteering', 'North Pier', 'Brighton', 'UK',
      '2026-05-30T07:30:00Z', '2026-05-30T11:00:00Z',
      120, 88, 74, 'completed'),
  (4, 'Late Night Pasta Workshop',
      'A hands-on class where each guest rolls, cuts, and plates their own fresh tagliatelle.',
      'food', 'Cucina Lab', 'Bologna', 'Italy',
      '2026-06-21T20:00:00Z', '2026-06-21T23:00:00Z',
      16, 14, 188, 'upcoming');

INSERT INTO event_tags (event_id, tag) VALUES
  (1, 'music'),       (1, 'outdoor'),      (1, 'community'),
  (2, 'technology'),  (2, 'conference'),   (2, 'developers'),
  (3, 'environment'), (3, 'volunteering'), (3, 'outdoor'),
  (4, 'food'),        (4, 'workshop'),     (4, 'cooking');

-- tasks
INSERT INTO tasks (id, title, description, status, priority, due_date, created_at, assignee_id, completed, progress) VALUES
  (1, 'Migrate user table to new schema',
      'Add the verified_at column and backfill existing rows in batches to avoid locking the table.',
      'in_progress', 'high',
      '2026-06-10T17:00:00Z', '2026-05-28T10:15:00Z',
      91, FALSE, 60),
  (2, 'Write onboarding email sequence',
      'Draft five emails covering setup, first win, tips, social proof, and a check-in.',
      'todo', 'medium',
      '2026-06-18T12:00:00Z', '2026-05-30T08:00:00Z',
      121, FALSE, 0),
  (3, 'Fix flaky checkout test',
      'The payment integration test fails intermittently under load. Reproduce, isolate the race condition, and stabilize.',
      'in_progress', 'urgent',
      '2026-06-05T15:00:00Z', '2026-06-01T09:45:00Z',
      74, FALSE, 35),
  (4, 'Archive Q1 financial reports',
      'Export the closed quarterly statements to cold storage and update the index spreadsheet.',
      'done', 'low',
      '2026-05-20T17:00:00Z', '2026-05-12T11:30:00Z',
      188, TRUE, 100);

INSERT INTO task_tags (task_id, tag) VALUES
  (1, 'backend'),  (1, 'database'), (1, 'migration'),
  (2, 'marketing'),(2, 'copywriting'),(2, 'email'),
  (3, 'testing'),  (3, 'ci'),       (3, 'bug'),
  (4, 'finance'),  (4, 'admin'),    (4, 'archive');
