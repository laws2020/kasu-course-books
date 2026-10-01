function renderFeaturedBooks(books) {
  const featuredBooks = document.getElementById('featured-books');

  if (!featuredBooks) return;

  let cards = '';

  books.forEach(function (book) {
    const cover = book.cover
      ? '<img src="' + book.cover + '" alt="' + book.title + ' cover">'
      : '<div class="book-placeholder">' +
        '<span>' + (book.bookType || 'Course Book') + '</span>' +
        '<strong>' + book.title + '</strong>' +
        '<small>' + (book.courseCode || '') + '</small>' +
        '</div>';

    cards += '<article class="book-card">' +
      cover +
      '<div class="book-card-content">' +
      '<p class="book-type">' + (book.bookType || 'Course Book') + '</p>' +
      '<h3>' + book.title + '</h3>' +
      '<p class="book-author">' + (book.author || 'Author not specified') + '</p>' +
      '<p>' + (book.courseCode || '') + (book.department ? ' · ' + book.department : '') + '</p>' +
      '<div class="book-actions">' +
      '<a href="book.html?id=' + encodeURIComponent(book.id) + '" class="button button-primary">Read Book</a>' +
      '<a href="' + book.downloadUrl + '" class="button button-secondary">Download</a>' +
      '</div>' +
      '</div>' +
      '</article>';
  });

  featuredBooks.innerHTML =
    '<section class="featured-section">' +
    '<div class="section-heading">' +
    '<p class="section-kicker">CATALOGUE</p>' +
    '<h2>Featured Course Books</h2>' +
    '<p>Read online or access the available digital formats.</p>' +
    '</div>' +
    '<div class="book-grid">' + cards + '</div>' +
    '</section>';
}
