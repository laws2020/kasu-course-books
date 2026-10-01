const searchCatalog = document.getElementById('search-catalog');

searchCatalog.innerHTML = `
  <section class="search-section">
    <div class="search-content">
      <p class="section-kicker">LIBRARY SEARCH</p>
      <h1>Find course books and academic resources</h1>
      <p>Search by title, course code, author, department or subject.</p>
      <form id="home-search" class="library-search" role="search">
        <input
          type="search"
          id="home-search-input"
          placeholder="Search books, courses, authors or subjects..."
          aria-label="Search the library"
        >
        <button type="submit">Search</button>
      </form>
    </div>
  </section>
`;

document.getElementById('home-search').addEventListener('submit', function (event) {
  event.preventDefault();
  const query = document.getElementById('home-search-input').value.trim();
  const target = query
    ? 'catalog.html?q=' + encodeURIComponent(query)
    : 'catalog.html';
  window.location.href = target;
});
