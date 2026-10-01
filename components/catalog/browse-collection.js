
const section = document.getElementById("browse-collection");

if (section) {

  section.innerHTML =
    `
    <section class="collection-section">

      <div class="section-heading">

        <span class="section-eyebrow">
          EXPLORE
        </span>

        <h2>
          Browse the Collection
        </h2>

        <p>
          Explore academic materials through the library's discovery categories.
        </p>

      </div>

      <div class="collection-grid">

        <a
          class="collection-card"
          href="catalog.html"
        >
          <strong>Books</strong>
          <span>
            Browse published course books and eBooks.
          </span>
        </a>

        <a
          class="collection-card"
          href="colleges.html"
        >
          <strong>Colleges</strong>
          <span>
            Discover academic resources by college.
          </span>
        </a>

        <a
          class="collection-card"
          href="faculties.html"
        >
          <strong>Faculties</strong>
          <span>
            Discover materials by faculty.
          </span>
        </a>

        <a
          class="collection-card"
          href="departments.html"
        >
          <strong>Departments</strong>
          <span>
            Explore resources by department.
          </span>
        </a>

        <a
          class="collection-card"
          href="courses.html"
        >
          <strong>Courses</strong>
          <span>
            Find materials linked to courses.
          </span>
        </a>

        <a
          class="collection-card"
          href="authors.html"
        >
          <strong>Authors</strong>
          <span>
            Browse books by author.
          </span>
        </a>

      </div>

    </section>
    `;
}

