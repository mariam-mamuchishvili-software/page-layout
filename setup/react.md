Rebuild the following Django page-layout-components project in React.
Preserve the exact same 5-layer layout split architecture described below.

---

## THE 5-LAYER SPLIT CONCEPT

Every element in the UI belongs to exactly one of these layers,
identified by a data-layout-structure attribute (keep it in React
as a data attribute so the visual hierarchy stays inspectable):

1. PAGE — the outermost shell. One per route. Sets the full-
   viewport wrapper. In React: a top-level route component.

2. BUILDER — a layout container/grid that arranges its children
   (columns, rows). Does not hold content itself — only
   positions other layers. In React: a layout wrapper
   component that accepts children.

3. PARTIAL — a reusable named region: <nav>, <main>, <aside>,
   <footer>, <slider>. Rendered inside a builder.
   In React: a self-contained section component that
   fetches or receives its own slice of data.

4. BLOCK — a content section inside a partial. Has a heading,
   icon, and iterates over a data array. Examples:
   PostsBlock, EventsBlock, TasksBlock, QuestionsBlock,
   ContactBlock. In React: a component that receives
   an array prop and renders the list + its own header.

5. COMPONENT — an atomic UI card/item. Receives one data object.
   Examples: PostCard, EventCard, TaskCard,
   QuestionItem, NavItem, PageItem, SliderItem,
   SocialIcon, ContactItem, FormInput, FormTextarea.
   In React: a pure presentational component.

---

## FILE STRUCTURE TO PRODUCE

src/
layouts/
BaseLayout.jsx # PAGE + outer BUILDER shell, nav, slider, footer
pages/
HomePage.jsx # extends BaseLayout, inner BUILDER with main+aside columns
partials/
Nav.jsx # PARTIAL — navigation
Slider.jsx # PARTIAL — hero slider
Footer.jsx # PARTIAL — footer
blocks/
PostsBlock.jsx # BLOCK — title, icon, list of PostCard + Pagination
EventsBlock.jsx # BLOCK — title, icon, list of EventCard
TasksBlock.jsx # BLOCK — title, icon, list of TaskCard
QuestionsBlock.jsx # BLOCK — title, icon, list of QuestionItem
ContactBlock.jsx # BLOCK — contact form with FormInput + FormTextarea
PaginationBlock.jsx # BLOCK — page controls
components/
PostCard.jsx
EventCard.jsx
TaskCard.jsx
QuestionItem.jsx
NavItem.jsx
PageItem.jsx
SliderItem.jsx
SocialIcon.jsx
ContactItem.jsx
FormInput.jsx
FormTextarea.jsx
services/
api.js # fetch helpers: getPosts(page), getEvents(), # getTasks(), getQuestions(), sendContact(data)

---

## DATA MODELS (match these prop shapes exactly)

Post: { id, title, body, tags[], reactions:{likes,dislikes}, views, created_at }
Event: { id, title, description, status, location:{city,...}, start_date,
attendees, capacity, tags[] }
Task: { id, title, description, priority, status, progress, due_date,
completed, tags[] }
Question:{ id, title, body, tags[], votes, views, answers }

status values:
Task.status → 'in_progress' | 'todo' | 'done'
Task.priority → 'urgent' | 'high' | 'medium' | 'low'
Event.status → 'upcoming' | 'ongoing' | 'completed' | 'cancelled'

---

## DERIVED VALUES (computed in ui_tags.py — move this logic into the components)

EventCard:
attendance*pct = Math.round((event.attendees / event.capacity) \* 100)
capacity_color:
pct >= 100 → var(--clr-danger)
pct >= 80 → var(--clr-warning)
else → var(--clr-accent)
status_label = event.status.replace('*', ' ')

TaskCard:
progress*color:
task.status === 'done' → var(--clr-success)
task.progress >= 50 → var(--clr-warning)
else → var(--clr-info)
status_label = task.status.replace('*', ' ')

---

## BLOCK DEFAULT PROPS (match Django inclusion tag defaults)

PostsBlock: title='Latest Posts', icon='article'
EventsBlock: title='Upcoming Events', icon='event'
TasksBlock: title='Team Tasks', icon='checklist'
QuestionsBlock:title='Questions', icon='help_outline'

---

## PAGE LAYOUT (match home.html + base.html structure)

BaseLayout:

  <section data-layout-structure="page">
    <div data-layout-structure="builder">          ← outer container
      <HeaderBlock title=... subtitle=... />        ← always present
      <Nav />
      <Slider />
      {flashMessages}
      {children}                                   ← page content slot
      <Footer />
    </div>
  </section>

HomePage (fills the children slot):

  <div class="row" data-layout-structure="builder">
    <div class="col" data-layout-structure="builder" data-content="main">
      <main data-layout-structure="partial">
        <PostsBlock posts={posts} />
        <QuestionsBlock questions={questions} />
        <ContactBlock />
      </main>
    </div>
    <div class="col" data-layout-structure="builder" data-content="aside">
      <aside data-layout-structure="partial">
        <EventsBlock events={events} />
        <TasksBlock tasks={tasks} />
      </aside>
    </div>
  </div>

---

## NAV STRUCTURE (match partials/nav.html)

Nav renders:

  <nav data-layout-structure="partial">
    <ul data-layout-structure="block">
      <NavItem href="/" icon="home"           label="Home"     active />
      <NavItem href="#" icon="info"           label="About" />
      <NavItem href="#" icon="design_services"label="Services" />
      <NavItem href="#" icon="mail"           label="Contact" />
    </ul>
    <div data-layout-structure="block">
      <button data-layout-structure="component">Sign In</button>
      <button data-layout-structure="component">Sign Up</button>
    </div>
  </nav>

---

## PAGINATION (match Django Paginator behaviour)

PostsBlock fetches posts with a page param (?page=N).
PaginationBlock receives: { page, totalPages, onPageChange }
Renders: « prev 1 2 3 … next » using PageItem components.

---

## CONTACT FORM (match blocks/contact.html)

ContactBlock contains a <form> that POSTs to /api/contact/.
On success: show a flash message "Your message has been sent!"
and clear the form.
Use FormInput for name, email fields.
Use FormTextarea for the message field.

---

## STYLING

Keep the existing CSS custom properties from main.css:
--clr-success, --clr-warning, --clr-danger, --clr-info, --clr-accent
Keep class names: .wrapper, .container, .row, .col, .post, .post-title,
.post-body, .tags, .tag, .post-meta, .nav-list, .alert, .alert--success

Icons: use Material Symbols Outlined (same CDN link already in base.html).

---

## WHAT NOT TO CHANGE

- The 5-layer naming and data-layout-structure attribute values
- The derived color/label logic per component
- The block default prop values (title, icon)
- The two-column main/aside split on HomePage
- Pagination with 4 posts per page
  How this maps Django → React:

Django concept React equivalent
layouts/base.html BaseLayout.jsx (children slot)
{% extends %} + {% block content %} <BaseLayout>{children}</BaseLayout>
{% include "partials/nav.html" %} <Nav /> inside BaseLayout
@register.inclusion_tag in block_tags.py Block component with default props
@register.inclusion_tag in ui_tags.py Presentational card/item component
views.py home() + Paginator HomePage.jsx with useState(page) + fetch
messages.success(...) React flash message state
data-layout-structure="..." Same attribute kept on the DOM element
The prompt gives an AI (or yourself) everything needed to produce a React app with the same visual hierarchy, data shapes, derived logic, and structural split as this Django project.
