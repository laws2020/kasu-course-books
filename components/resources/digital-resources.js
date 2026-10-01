function renderDigitalResources(books) {
  const digitalResources = document.getElementById('digital-resources');

  if (!digitalResources) return;

  const courseBooks = Array.isArray(books) ? books.length : 0;

  digitalResources.innerHTML = `
    <section class="resources-section">
      <div class="section-heading">
        <p class="section-kicker">RESOURCES</p>
        <h2>Digital Resources</h2>
        <p>Access the academic materials currently available through the library.</p>
      </div>

      <div class="resources-grid">
        <article class="resource-card">
          <span class="resource-status">Available</span>
          <h3>Course Books</h3>
          <p>${courseBooks} course book${courseBooks === 1 ? '' : 's'} currently in the catalogue.</p>
          <a href="catalog.html">Browse Course Books</a>
        </article>

        <article class="resource-card">
          <span class="resource-status">Coming Soon</span>
          <h3>Open Educational Resources</h3>
          <p>Open academic resources will be added as the collection develops.</p>
        </article>

        <article class="resource-card">
          <span class="resource-status">Coming Soon</span>
          <h3>Theses &amp; Dissertations</h3>
          <p>Research publications can be added to this collection in a later phase.</p>
        </article>

        <article class="resource-card">
          <span class="resource-status">Coming Soon</span>
          <h3>Other Digital Collections</h3>
          <p>Additional academic digital resources can be introduced as they become available.</p>
        </article>
      </div>
    </section>
  `;
}
