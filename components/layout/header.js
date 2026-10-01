(function () {
  const target = document.getElementById('site-header');
  if (!target) return;

  const name = typeof library !== 'undefined'
    ? library.name
    : 'KASU Digital Library';

  target.innerHTML = `
    <header class="site-library-header">
      <div class="site-library-header-inner">
        <a class="site-library-brand" href="index.html">
          <strong>KASU</strong>
          <span>Digital Library</span>
        </a>

        <nav class="site-library-nav">
          <a href="index.html">Home</a>
          <a href="catalog.html">Search &amp; Catalog</a>
          <a href="colleges.html">Colleges</a>
          <a href="faculties.html">Faculties</a>
          <a href="departments.html">Departments</a>
          <a href="courses.html">Courses</a>
          <a href="authors.html">Authors</a>
          <a href="resources.html">Resources</a>
          <a href="help.html">Help</a>
          <a href="about.html">About</a>
        </nav>
      </div>
    </header>`;
})();
