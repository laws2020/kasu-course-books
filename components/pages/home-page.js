(function () {
  const target = document.getElementById('home-page');
  if (!target) return;

  const libraryData = typeof library !== 'undefined'
    ? library
    : { name: 'KASU Digital Library' };

  const bookData = typeof books !== 'undefined' ? books : [];
  const courseData = typeof courses !== 'undefined' ? courses : [];

  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function authorFor(book) {
    if (Array.isArray(book.authorIds) && typeof authors !== 'undefined') {
      return book.authorIds.map(function (id) {
        const author = authors.find(function (item) { return item.id === id; });
        return author ? author.name : '';
      }).filter(Boolean).join(' / ');
    }
    return book.author || 'Author not listed';
  }

  function courseFor(book) {
    if (typeof courses === 'undefined') return null;
    return courses.find(function (course) {
      return course.code === book.courseCode || course.id === book.courseId;
    });
  }

  function featuredBook(book) {
    const course = courseFor(book);
    const cover = book.cover
      ? `<img src="${escapeHtml(book.cover)}" alt="${escapeHtml(book.title)} cover">`
      : `<div class="home-book-cover-placeholder">KASU</div>`;

    return `
      <article class="home-book-card">
        <a class="home-book-cover" href="book.html?id=${encodeURIComponent(book.id)}">
          ${cover}
        </a>
        <div class="home-book-info">
          <div class="home-book-code">${escapeHtml(book.courseCode || '')}</div>
          <h3><a href="book.html?id=${encodeURIComponent(book.id)}">${escapeHtml(book.title)}</a></h3>
          <p>${escapeHtml(authorFor(book))}</p>
          <span>${escapeHtml(course ? course.title : '')}</span>
        </div>
      </article>`;
  }

  target.innerHTML = `
    <div class="home-page">

      <section class="home-hero">
        <div class="home-container">
          <div class="home-eyebrow">KASU DIGITAL LIBRARY</div>
          <h1>Your university course materials, in one digital library.</h1>
          <p class="home-hero-text">
            Discover course books, lecturer notes, study guides and other academic resources organized around the courses and programmes you study.
          </p>

          <form class="home-search" action="catalog.html" method="get">
            <input name="q" type="search" placeholder="Search course books, authors, course codes, subjects...">
            <button type="submit">Search Library</button>
          </form>

          <div class="home-actions">
            <a class="kasu-primary-button" href="catalog.html">Explore the Library</a>
            <a class="kasu-secondary-button" href="courses.html">Browse Courses</a>
          </div>
        </div>
      </section>

      <section class="home-section">
        <div class="home-container">
          <div class="home-section-heading">
            <div class="home-kicker">BROWSE THE COLLECTION</div>
            <h2>Find resources through the university academic structure.</h2>
          </div>

          <div class="home-browse-grid">
            <a href="catalog.html" class="home-browse-card"><strong>Books</strong><span>Explore course books and digital editions.</span></a>
            <a href="colleges.html" class="home-browse-card"><strong>Colleges</strong><span>Explore the university academic structure.</span></a>
            <a href="faculties.html" class="home-browse-card"><strong>Faculties</strong><span>Find resources by faculty.</span></a>
            <a href="departments.html" class="home-browse-card"><strong>Departments</strong><span>Find materials within departments.</span></a>
            <a href="courses.html" class="home-browse-card"><strong>Courses</strong><span>Go directly to a course.</span></a>
            <a href="authors.html" class="home-browse-card"><strong>Authors</strong><span>Explore lecturer publications.</span></a>
          </div>
        </div>
      </section>

      <section class="home-section home-featured">
        <div class="home-container">
          <div class="home-section-heading home-section-heading-row">
            <div>
              <div class="home-kicker">FEATURED COURSE BOOKS</div>
              <h2>Explore the latest materials in the library.</h2>
            </div>
            <a href="catalog.html" class="home-text-link">See all books →</a>
          </div>

          <div class="home-books-grid">
            ${bookData.slice(0, 3).map(featuredBook).join('')}
          </div>
        </div>
      </section>

      <section class="home-section">
        <div class="home-container">
          <div class="home-section-heading">
            <div class="home-kicker">FOR STUDENTS</div>
            <h2>Find the material for the course you are studying.</h2>
            <p>Search by course, lecturer, title or subject and move directly into the relevant digital resource.</p>
          </div>

          <div class="home-feature-strip">
            <article>
              <span>01</span>
              <h3>Discover</h3>
              <p>Find your course and its available academic materials.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Access</h3>
              <p>Obtain authorized access through the applicable platform arrangements.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Study</h3>
              <p>Read structured digital course materials wherever you study.</p>
            </article>
          </div>
        </div>
      </section>

      <section class="home-section home-lecturer-section">
        <div class="home-container">
          <div class="home-lecturer-box">
            <div>
              <div class="home-kicker">FOR LECTURERS</div>
              <h2>Turn your course materials into digital academic resources.</h2>
              <p>
                KASU Course Book is designed to help lecturers structure, publish, maintain and distribute their academic materials while retaining their academic role and attribution.
              </p>
            </div>
            <a href="about.html" class="kasu-primary-button">Learn About the Platform</a>
          </div>
        </div>
      </section>

      <section class="home-final">
        <div class="home-container">
          <div>
            <div class="home-kicker">KASU COURSE BOOK</div>
            <h2>Course books, lecturers and students in one academic library.</h2>
          </div>
          <a href="catalog.html" class="kasu-primary-button">Explore Course Books</a>
        </div>
      </section>

    </div>`;
})();
