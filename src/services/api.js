const POSTS_PER_PAGE = 4

const POSTS = [
  {
    id: 1,
    title: 'His mother had always taught him',
    body: 'His mother had always taught him not to ever think of himself as better than others. He tried to live by this motto, but a difficult conversation challenged that belief.',
    tags: ['history', 'american', 'crime'],
    reactions: { likes: 192, dislikes: 25 },
    views: 305,
    created_at: '2026-01-15',
  },
  {
    id: 2,
    title: 'He was an expert but not in a discipline',
    body: 'He had mastered the small art of making perfect soft-serve cones. It was not a famous skill, but it took years of patience and repetition.',
    tags: ['french', 'fiction', 'english'],
    reactions: { likes: 859, dislikes: 32 },
    views: 4884,
    created_at: '2026-02-03',
  },
  {
    id: 3,
    title: 'The archive opened after midnight',
    body: 'The researcher found a missing catalog card behind the cabinet. It pointed to a sealed box no one had requested in thirty years.',
    tags: ['mystery', 'archive', 'research'],
    reactions: { likes: 341, dislikes: 18 },
    views: 1290,
    created_at: '2026-02-20',
  },
  {
    id: 4,
    title: 'A small city changed its traffic lights',
    body: 'The council expected complaints after the new timing system launched. Instead, drivers noticed shorter waits and fewer crowded intersections.',
    tags: ['urban', 'planning', 'technology'],
    reactions: { likes: 512, dislikes: 44 },
    views: 2307,
    created_at: '2026-03-08',
  },
  {
    id: 5,
    title: "The lighthouse keeper's last entry",
    body: 'After forty years of service, the keeper wrote a single sentence in the logbook before switching off the light for the final time.',
    tags: ['maritime', 'history', 'journal'],
    reactions: { likes: 274, dislikes: 9 },
    views: 1543,
    created_at: '2026-03-15',
  },
  {
    id: 6,
    title: 'She planted the tree on a Tuesday',
    body: 'No one paid attention at the time. But the sapling she placed outside the library grew into something the whole town came to know.',
    tags: ['nature', 'community', 'story'],
    reactions: { likes: 430, dislikes: 11 },
    views: 2100,
    created_at: '2026-03-28',
  },
  {
    id: 7,
    title: 'The code review that changed everything',
    body: 'A junior engineer flagged a function that had gone unnoticed for three years. That single comment prevented a data breach affecting thousands of users.',
    tags: ['technology', 'engineering', 'security'],
    reactions: { likes: 1203, dislikes: 47 },
    views: 8921,
    created_at: '2026-04-10',
  },
  {
    id: 8,
    title: 'Mountains do not move, but rivers do',
    body: 'He had gone to the mountains expecting clarity. What he found instead was that the river below told him everything he needed to know.',
    tags: ['philosophy', 'nature', 'reflection'],
    reactions: { likes: 188, dislikes: 14 },
    views: 876,
    created_at: '2026-04-22',
  },
  {
    id: 9,
    title: 'A recipe passed down three generations',
    body: "The index card was stained, almost illegible, but her grandmother's handwriting was clear enough to follow for the bread that defined every holiday.",
    tags: ['food', 'family', 'tradition'],
    reactions: { likes: 633, dislikes: 19 },
    views: 3450,
    created_at: '2026-05-01',
  },
  {
    id: 10,
    title: 'The bus arrived exactly on time for once',
    body: 'Regulars at the stop looked at one another with mild disbelief. The schedule said 8:14 and the clock above the shelter confirmed it.',
    tags: ['urban', 'transport', 'humor'],
    reactions: { likes: 891, dislikes: 55 },
    views: 5120,
    created_at: '2026-05-14',
  },
  {
    id: 11,
    title: 'A letter written in 1987 finally arrived',
    body: 'The envelope was postmarked for a city that no longer existed under that name. A postal clerk recognised the street and made the delivery by hand.',
    tags: ['history', 'letters', 'mystery'],
    reactions: { likes: 2140, dislikes: 38 },
    views: 14200,
    created_at: '2026-05-27',
  },
  {
    id: 12,
    title: 'The smallest bridge in the country',
    body: 'It spans just over a metre of a stream that runs through a farm in the countryside. Three people have ever stood on it at the same time.',
    tags: ['architecture', 'travel', 'quirky'],
    reactions: { likes: 317, dislikes: 7 },
    views: 1820,
    created_at: '2026-06-03',
  },
]

const EVENTS = [
  {
    id: 1,
    title: 'Riverside Jazz Night',
    description: 'A free open-air concert featuring three local quartets. Bring a blanket; food trucks arrive at sunset.',
    status: 'upcoming',
    location: { venue: 'Riverside Park', city: 'Portland', country: 'USA' },
    start_date: 'Jul 12, 2026',
    attendees: 643,
    capacity: 800,
    tags: ['music', 'outdoor', 'community'],
  },
  {
    id: 2,
    title: 'Open Source Maintainers Summit',
    description: 'A one-day gathering for project maintainers to swap burnout survival tactics and governance models.',
    status: 'upcoming',
    location: { venue: 'Hall C, Convention Center', city: 'Berlin', country: 'Germany' },
    start_date: 'Sep 3, 2026',
    attendees: 250,
    capacity: 250,
    tags: ['technology', 'conference', 'developers'],
  },
  {
    id: 3,
    title: 'Coastal Cleanup Morning',
    description: 'Volunteers meet at the north pier to collect debris before the tide turns. Gloves and bags provided.',
    status: 'completed',
    location: { venue: 'North Pier', city: 'Brighton', country: 'UK' },
    start_date: 'May 30, 2026',
    attendees: 88,
    capacity: 120,
    tags: ['environment', 'volunteering', 'outdoor'],
  },
  {
    id: 4,
    title: 'Late Night Pasta Workshop',
    description: 'A hands-on class where each guest rolls, cuts, and plates their own fresh tagliatelle.',
    status: 'upcoming',
    location: { venue: 'Cucina Lab', city: 'Bologna', country: 'Italy' },
    start_date: 'Jun 21, 2026',
    attendees: 14,
    capacity: 16,
    tags: ['food', 'workshop', 'cooking'],
  },
]

const TASKS = [
  {
    id: 1,
    title: 'Migrate user table to new schema',
    description: 'Add the verified_at column and backfill existing rows in batches to avoid locking the table.',
    priority: 'high',
    status: 'in_progress',
    progress: 60,
    due_date: 'Jun 10, 2026',
    completed: false,
    tags: ['backend', 'database', 'migration'],
  },
  {
    id: 2,
    title: 'Write onboarding email sequence',
    description: 'Draft five emails covering setup, first win, tips, social proof, and a check-in.',
    priority: 'medium',
    status: 'todo',
    progress: 0,
    due_date: 'Jun 18, 2026',
    completed: false,
    tags: ['marketing', 'copywriting', 'email'],
  },
  {
    id: 3,
    title: 'Fix flaky checkout test',
    description: 'The payment integration test fails intermittently under load. Reproduce, isolate the race condition, and stabilize.',
    priority: 'urgent',
    status: 'in_progress',
    progress: 35,
    due_date: 'Jun 5, 2026',
    completed: false,
    tags: ['testing', 'ci', 'bug'],
  },
  {
    id: 4,
    title: 'Archive Q1 financial reports',
    description: 'Export the closed quarterly statements to cold storage and update the index spreadsheet.',
    priority: 'low',
    status: 'done',
    progress: 100,
    due_date: 'May 20, 2026',
    completed: true,
    tags: ['finance', 'admin', 'archive'],
  },
]

const QUESTIONS = [
  {
    id: 1,
    title: 'What is the difference between a <code>page</code> and a <code>builder</code>?',
    body: 'The <code>page</code> is the outermost full-viewport wrapper — it fills the screen and sets the background canvas. The <code>builder</code> (the <code>container</code> div) lives inside it and constrains content to a readable max-width, centred with <code>margin-inline: auto</code>. Think of <code>page</code> as the wall and <code>builder</code> as the framed picture hanging on it.',
    tags: [],
    votes: 0,
    views: 0,
    answers: 0,
  },
  {
    id: 2,
    title: 'What is a <code>partial</code> and why does it matter?',
    body: 'A <code>partial</code> is a named region of the page — <code>main</code>, <code>aside</code>, <code>header</code>, or <code>footer</code>. Each partial owns a distinct area of the layout. The <code>row</code> splits the canvas into columns and each column holds one or more partials. Partials define <em>where</em> content lives, not what the content looks like.',
    tags: [],
    votes: 0,
    views: 0,
    answers: 0,
  },
  {
    id: 3,
    title: 'How is a <code>block</code> different from a <code>component</code>?',
    body: 'A <code>block</code> is a named content group — <code>posts</code>, <code>events</code>, or <code>tasks</code> — that collects related components under one labelled roof. A <code>component</code> is the smallest self-contained unit: a single post card, an event card, or a task item. Blocks provide the heading and container; components provide the repeatable content inside.',
    tags: [],
    votes: 0,
    views: 0,
    answers: 0,
  },
  {
    id: 4,
    title: 'Why use <code>data-layout-structure</code> instead of plain class names?',
    body: 'Class names describe <em>style</em> (<code>card</code>, <code>row</code>, <code>active</code>). The <code>data-layout-structure</code> attribute describes <em>role</em> in the architecture — a completely separate concern. This means you can restyle every component without touching the HTML, and tooling or a CSS inspector overlay can query structural intent rather than visual appearance.',
    tags: [],
    votes: 0,
    views: 0,
    answers: 0,
  },
]

export async function getPosts(page = 1) {
  const start = (page - 1) * POSTS_PER_PAGE
  return {
    posts: POSTS.slice(start, start + POSTS_PER_PAGE),
    page,
    totalPages: Math.ceil(POSTS.length / POSTS_PER_PAGE),
  }
}

export async function getEvents() {
  return EVENTS
}

export async function getTasks() {
  return TASKS
}

export async function getQuestions() {
  return QUESTIONS
}

export async function getCounts() {
  return {
    posts: POSTS.length,
    events: EVENTS.length,
    tasks: TASKS.length,
  }
}

export async function sendContact(_data) {
  await new Promise((r) => setTimeout(r, 300))
  return { success: true }
}
