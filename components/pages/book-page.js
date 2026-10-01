const page = document.getElementById('book-page');

const params = new URLSearchParams(window.location.search);
const bookId = params.get('id') || window.location.hash.substring(1);

const book = books.find(function (item) {
  return item.id === bookId;
});

function renderBookDetails(book) {

  if (!book) {
    document.title = 'Book Not Found | KASU Digital Library';

    page.innerHTML =
      '<section class="library-page">' +
      '<div class="page-heading">' +
      '<p class="section-kicker">BOOK NOT FOUND</p>' +
      '<h1>The requested book could not be found</h1>' +
      '<p>The catalogue record may be missing or the link may be incorrect.</p>' +
      '<p><a class="text-link" href="catalog.html">Return to Catalogue →</a></p>' +
      '</div>' +
      '</section>';

    return;
  }

  document.title = book.title + ' | KASU Digital Library';

  const cover = book.cover
    ? '<img src="' + book.cover + '" alt="' + book.title + ' cover">'
    : '<div class="book-detail-placeholder">' +
      '<span>' + (book.bookType || 'COURSE BOOK') + '</span>' +
      '<strong>' + book.title + '</strong>' +
      '<small>' + (book.courseCode || '') + '</small>' +
      '</div>';

  let keywords = '';

  if (Array.isArray(book.keywords)) {
    book.keywords.forEach(function (keyword) {
      keywords += '<span>' + keyword + '</span>';
    });
  }

  page.innerHTML =
    '<section class="book-details-page">' +

    '<div class="book-details-back">' +
    '<a href="catalog.html">← Back to Catalogue</a>' +
    '</div>' +

    '<div class="book-detail-layout">' +

    '<div class="book-detail-cover">' +
    cover +
    '</div>' +

    '<div class="book-detail-content">' +

    '<p class="section-kicker">' +
    (book.bookType || 'COURSE BOOK') +
    '</p>' +

    '<h1>' + book.title + '</h1>' +

    '<p class="book-detail-course">' +
    (book.courseCode || '') +
    (book.courseTitle ? ' · ' + book.courseTitle : '') +
    '</p>' +

    '<p class="book-detail-author">' +
    (book.author || 'Author not specified') +
    '</p>' +

    '<div class="book-status">' +
    (book.status || 'Published') +
    '</div>' +

    '<p class="book-detail-description">' +
    (book.description || 'No description has been provided for this publication.') +
    '</p>' +

    '<div class="book-information">' +
    '<h2>Publication Information</h2>' +

    '<dl class="book-meta-list">' +

    '<div>' +
    '<dt>Course Code</dt>' +
    '<dd>' + (book.courseCode || 'Not specified') + '</dd>' +
    '</div>' +

    '<div>' +
    '<dt>Course</dt>' +
    '<dd>' + (book.courseTitle || 'Not specified') + '</dd>' +
    '</div>' +

    '<div>' +
    '<dt>Faculty</dt>' +
    '<dd>' + (book.faculty || 'Not specified') + '</dd>' +
    '</div>' +

    '<div>' +
    '<dt>Department</dt>' +
    '<dd>' + (book.department || 'Not specified') + '</dd>' +
    '</div>' +

    '<div>' +
    '<dt>Session</dt>' +
    '<dd>' + (book.session || 'Not specified') + '</dd>' +
    '</div>' +

    '<div>' +
    '<dt>Edition</dt>' +
    '<dd>' + (book.edition || 'Not specified') + '</dd>' +
    '</div>' +

    '<div>' +
    '<dt>Publication Date</dt>' +
    '<dd>' + (book.publicationDate || 'Not specified') + '</dd>' +
    '</div>' +

    '</dl>' +
    '</div>' +

    '<div class="book-detail-actions">' +
    '<a href="' + book.url + '" class="button button-primary">Read Online</a>' +
    '<a href="' + book.downloadUrl + '" class="button button-secondary">Download PDF</a>' +
    '</div>' +

    (keywords
      ? '<div class="book-keywords">' +
        '<h2>Keywords</h2>' +
        '<div class="keyword-list">' +
        keywords +
        '</div>' +
        '</div>'
      : '') +

    '</div>' +
    '</div>' +
    '</section>';
}

renderBookDetails(book);
