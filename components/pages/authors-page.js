
const grid =
  document.querySelector("#authors-list") ||
  document.querySelector(".page-grid");

if (grid && typeof authors !== "undefined") {

  function findById(items, id) {

    if (!id || typeof items === "undefined") {
      return null;
    }

    return items.find(function (item) {
      return item.id === id;
    }) || null;
  }

  function authorHasBook(author, book) {

    if (book.authorId === author.id) {
      return true;
    }

    if (
      Array.isArray(book.authorIds) &&
      book.authorIds.includes(author.id)
    ) {
      return true;
    }

    return false;
  }

  grid.innerHTML = authors.map(function (author) {

    const faculty =
      findById(
        typeof faculties !== "undefined"
          ? faculties
          : [],
        author.facultyId
      );

    const department =
      findById(
        typeof departments !== "undefined"
          ? departments
          : [],
        author.departmentId
      );

    const publications =
      typeof books !== "undefined"
        ? books.filter(function (book) {
            return authorHasBook(author, book);
          })
        : [];

    return `
      <article class="directory-card">

        <span class="directory-card-label">
          AUTHOR
        </span>

        <h2>${author.name}</h2>

        ${
          author.bio
            ? `<p>${author.bio}</p>`
            : `<p>Course book author.</p>`
        }

        <div class="directory-meta">

          ${
            faculty
              ? `<span>${faculty.name}</span>`
              : ""
          }

          ${
            department
              ? `<span>${department.name}</span>`
              : ""
          }

          <span>
            ${publications.length}
            ${
              publications.length === 1
                ? " Publication"
                : " Publications"
            }
          </span>

        </div>

        <div class="directory-details">

          <h3>Publications</h3>

          ${
            publications.length
              ? `
                <ul>
                  ${publications.map(function (book) {
                    return `
                      <li>
                        <a href="book.html?id=${encodeURIComponent(book.id)}">
                          ${book.title}
                        </a>
                      </li>
                    `;
                  }).join("")}
                </ul>
              `
              : `
                <p>
                  No publications have been linked to this author yet.
                </p>
              `
          }

        </div>

      </article>
    `;

  }).join("");

}

