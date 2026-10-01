function renderSubjectGuides(books) {
  const subjectGuides = document.getElementById('subject-guides');

  if (!subjectGuides) return;

  const faculties = [...new Set(books.map(book => book.faculty).filter(Boolean))];
  const departments = [...new Set(books.map(book => book.department).filter(Boolean))];
  const courses = [...new Set(books.map(book => book.courseCode).filter(Boolean))];
  const authors = [...new Set(books.map(book => book.author).filter(Boolean))];

  subjectGuides.innerHTML = `
    <section class="guides-section">
      <div class="section-heading">
        <p class="section-kicker">DISCOVER</p>
        <h2>Subject Guides</h2>
        <p>Explore the collection through the academic structure of the university.</p>
      </div>

      <div class="guides-grid">
        <a href="faculties.html" class="guide-card">
          <strong>Faculties</strong>
          <span>${faculties.length} represented</span>
        </a>

        <a href="departments.html" class="guide-card">
          <strong>Departments</strong>
          <span>${departments.length} represented</span>
        </a>

        <a href="courses.html" class="guide-card">
          <strong>Courses</strong>
          <span>${courses.length} represented</span>
        </a>

        <a href="authors.html" class="guide-card">
          <strong>Authors</strong>
          <span>${authors.length} represented</span>
        </a>
      </div>

      <div class="section-actions">
        <a href="faculties.html" class="text-link">Explore Subject Guides →</a>
      </div>
    </section>
  `;
}
