(function () {
  const container = document.getElementById('catalog-page');
  if (!container) return;

  const data = {
    books: typeof books !== 'undefined' ? books : [],
    courses: typeof courses !== 'undefined' ? courses : [],
    authors: typeof authors !== 'undefined' ? authors : [],
    departments: typeof departments !== 'undefined' ? departments : [],
    faculties: typeof faculties !== 'undefined' ? faculties : [],
    colleges: typeof colleges !== 'undefined' ? colleges : []
  };

  const params = new URLSearchParams(window.location.search);

  const state = {
    query: params.get('q') || '',
    subject: '',
    college: '',
    faculty: '',
    department: '',
    course: '',
    author: '',
    status: '',
    sort: 'relevance'
  };

  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function find(list, id) {
    return list.find(function (item) { return item.id === id; });
  }

  function courseFor(book) {
    return find(data.courses, book.courseId) || data.courses.find(function (course) {
      return course.code === book.courseCode;
    });
  }

  function authorsFor(book) {
    if (Array.isArray(book.authorIds) && book.authorIds.length) {
      return book.authorIds.map(function (id) {
        const author = find(data.authors, id);
        return author ? author.name : '';
      }).filter(Boolean).join(' / ');
    }

    if (book.authorId) {
      const author = find(data.authors, book.authorId);
      if (author) return author.name;
    }

    return book.author || 'Author not listed';
  }

  function keywordsFor(book) {
    if (Array.isArray(book.keywords)) return book.keywords;
    if (book.keywords) return String(book.keywords).split(/[,;|]/);
    return [];
  }

  function searchable(book) {
    const course = courseFor(book);
    const faculty = find(data.faculties, book.facultyId);
    const department = find(data.departments, book.departmentId);

    return [
      book.title,
      book.description,
      book.courseCode,
      book.subject,
      authorsFor(book),
      course && course.code,
      course && course.title,
      faculty && faculty.name,
      department && department.name,
      keywordsFor(book).join(' ')
    ].filter(Boolean).join(' ').toLowerCase();
  }

  function matches(book) {
    const course = courseFor(book);
    const authorIds = Array.isArray(book.authorIds)
      ? book.authorIds
      : (book.authorId ? [book.authorId] : []);

    return
      (!state.query || searchable(book).includes(state.query.toLowerCase())) &&
      (!state.subject || searchable(book).includes(state.subject.toLowerCase())) &&
      (!state.college || book.collegeId === state.college) &&
      (!state.faculty || book.facultyId === state.faculty) &&
      (!state.department || book.departmentId === state.department) &&
      (!state.course || (course && course.id === state.course)) &&
      (!state.author || authorIds.includes(state.author)) &&
      (!state.status || book.status === state.status);
  }

  function results() {
    const output = data.books.filter(matches);

    output.sort(function (a, b) {
      if (state.sort === 'title') return String(a.title || '').localeCompare(String(b.title || ''));
      if (state.sort === 'author') return authorsFor(a).localeCompare(authorsFor(b));
      if (state.sort === 'course') return String(a.courseCode || '').localeCompare(String(b.courseCode || ''));
      if (state.sort === 'newest') return String(b.publicationDate || '').localeCompare(String(a.publicationDate || ''));
      return 0;
    });

    return output;
  }

  function options(list, label) {
    return '<option value="">' + label + '</option>' +
      list.map(function (item) {
        const value = item.code ? item.code + ' - ' + item.title : item.name;
        return '<option value="' + escapeHtml(item.id) + '">' + escapeHtml(value) + '</option>';
      }).join('');
  }

  function excerpt(book) {
    const text = String(book.description || '').replace(/\s+/g, ' ').trim();
    if (!text) return 'Digital academic material prepared for university study.';
    if (text.length <= 155) return text;
    return text.substring(0, 152).replace(/\s+\S*$/, '') + '...';
  }

  function renderBook(book) {
    const course = courseFor(book);
    const cover = book.cover
      ? '<img src="' + escapeHtml(book.cover) + '" alt="' + escapeHtml(book.title) + ' cover">'
      : '<div class="kcat-cover-placeholder">KASU</div>';

    return `
      <article class='kcat-book-card'>
        <div class='kcat-book-header'>
          <h2><a href='book.html?id=${encodeURIComponent(book.id)}'>${escapeHtml(book.title)}</a></h2>
          <p>by ${escapeHtml(authorsFor(book))}</p>
        </div>
        <div class='kcat-book-meta'>
          <span>${escapeHtml(book.publicationDate || book.session || '')}</span>
          <span>${escapeHtml(book.courseCode || (course && course.code) || '')}</span>
          <span>${escapeHtml(book.status || '')}</span>
        </div>
        <div class='kcat-book-body'>
          <a class='kcat-book-cover' href='book.html?id=${encodeURIComponent(book.id)}'>${cover}</a>
          <div class='kcat-book-description'>
            <p>${escapeHtml(excerpt(book))}</p>
            <a href='book.html?id=${encodeURIComponent(book.id)}'>Read more →</a>
          </div>
        </div>
      </article>`;
  }

  container.innerHTML = `
    <div class='catalog-content'>
      <section class='kcat-intro'>
        <div>
          <h1>Library Catalog</h1>
          <p>Find course books and academic resources across the university.</p>
          <button id='kcat-upload' class='kcat-upload-button' type='button'>+ Upload Course</button>
        </div>
      </section>

      <section class='kcat-discovery'>
        <div class='kcat-catalog-search'>
          <span>Search</span>
          <input id='kcat-catalog-search' type='search' placeholder='Search course books, authors, course codes...'>
          <button id='kcat-filter-button' type='button'>Filters</button>
        </div>

        <div id='kcat-filter-panel' class='kcat-filter-panel'>
          <div class='kcat-filter-panel-head'>
            <strong>Filters</strong>
            <button id='kcat-clear' type='button'>Clear all</button>
          </div>
          <div class='kcat-filter-scroll'>
            <label>College<select id='kcat-college'>${options(data.colleges, 'All colleges')}</select></label>
            <label>Faculty<select id='kcat-faculty'>${options(data.faculties, 'All faculties')}</select></label>
            <label>Department<select id='kcat-department'>${options(data.departments, 'All departments')}</select></label>
            <label>Course<select id='kcat-course'>${options(data.courses, 'All courses')}</select></label>
            <label>Author<select id='kcat-author'>${options(data.authors, 'All authors')}</select></label>
            <label>Subject / Keyword<select id='kcat-subject'>
              <option value=''>All subjects</option>
              <option value='Finance'>Finance</option>
              <option value='Banking'>Banking</option>
              <option value='Risk Management'>Risk Management</option>
              <option value='Financial Markets'>Financial Markets</option>
              <option value='Financial Institutions'>Financial Institutions</option>
              <option value='Regulation'>Regulation</option>
            </select></label>
            <label>Status<select id='kcat-status'>
              <option value=''>All statuses</option>
              <option value='Published'>Published</option>
              <option value='Draft'>Draft</option>
            </select></label>
          </div>
        </div>

        <div class='kcat-topic-chips'>
          <button class='active' data-subject=''>All Books</button>
          <button data-subject='Finance'>Finance</button>
          <button data-subject='Banking'>Banking</button>
          <button data-subject='Risk Management'>Risk Management</button>
          <button data-subject='Financial Markets'>Financial Markets</button>
          <button data-subject='Financial Institutions'>Financial Institutions</button>
          <button data-subject='Regulation'>Regulation</button>
        </div>
      </section>

      <section class='kcat-results-header'>
        <strong id='kcat-count'>0 course books</strong>
        <label>Sort:
          <select id='kcat-sort'>
            <option value='relevance'>Relevance</option>
            <option value='newest'>Newest</option>
            <option value='title'>Title A-Z</option>
            <option value='author'>Author A-Z</option>
            <option value='course'>Course Code</option>
          </select>
        </label>
      </section>

      <section id='kcat-results' class='kcat-results'></section>
    </div>`;

  function render() {
    const output = results();
    const target = document.getElementById('kcat-results');
    const count = document.getElementById('kcat-count');

    count.textContent = output.length + (output.length === 1 ? ' course book' : ' course books');
    target.innerHTML = output.length
      ? output.map(renderBook).join('')
      : '<div class="kcat-empty"><h2>No course books found</h2><p>Try another search or clear your filters.</p></div>';
  }

  function syncSearch(value) {
    state.query = value.trim();
    document.getElementById('kcat-catalog-search').value = value;
    const globalSearch = document.getElementById('library-global-search');
    if (globalSearch) globalSearch.value = value;
    render();
  }

  document.getElementById('kcat-catalog-search').addEventListener('input', function () {
    syncSearch(this.value);
  });

  document.getElementById('kcat-filter-button').addEventListener('click', function () {
    document.getElementById('kcat-filter-panel').classList.toggle('open');
  });

  const filterMap = {
    'kcat-college': 'college',
    'kcat-faculty': 'faculty',
    'kcat-department': 'department',
    'kcat-course': 'course',
    'kcat-author': 'author',
    'kcat-subject': 'subject',
    'kcat-status': 'status'
  };

  Object.keys(filterMap).forEach(function (id) {
    document.getElementById(id).addEventListener('change', function () {
      state[filterMap[id]] = this.value;
      render();
    });
  });

  document.querySelectorAll('.kcat-topic-chips button').forEach(function (button) {
    button.addEventListener('click', function () {
      document.querySelectorAll('.kcat-topic-chips button').forEach(function (item) {
        item.classList.remove('active');
      });
      button.classList.add('active');
      state.subject = button.dataset.subject;
      render();
    });
  });

  document.getElementById('kcat-sort').addEventListener('change', function () {
    state.sort = this.value;
    render();
  });

  document.getElementById('kcat-clear').addEventListener('click', function () {
    state.query = '';
    state.college = '';
    state.faculty = '';
    state.department = '';
    state.course = '';
    state.author = '';
    state.status = '';
    state.subject = '';
    document.getElementById('kcat-catalog-search').value = '';
    const globalSearch = document.getElementById('library-global-search');
    if (globalSearch) globalSearch.value = '';
    Object.keys(filterMap).forEach(function (id) {
      document.getElementById(id).value = '';
    });
    document.querySelectorAll('.kcat-topic-chips button').forEach(function (button) {
      button.classList.toggle('active', button.dataset.subject === '');
    });
    render();
  });

  document.getElementById('kcat-upload').addEventListener('click', function () {
    window.alert('The lecturer course-upload workflow will be connected during the platform implementation.');
  });

  render();
})();
