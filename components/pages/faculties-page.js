
const grid =
  document.querySelector("#faculties-list") ||
  document.querySelector(".page-grid");

if (grid && typeof faculties !== "undefined") {

  grid.innerHTML = faculties.map(function (faculty) {

    const facultyDepartments =
      typeof departments !== "undefined"
        ? departments.filter(function (department) {
            return department.facultyId === faculty.id;
          })
        : [];

    const facultyCourses =
      typeof courses !== "undefined"
        ? courses.filter(function (course) {
            return course.facultyId === faculty.id;
          })
        : [];

    const facultyBooks =
      typeof books !== "undefined"
        ? books.filter(function (book) {
            return book.facultyId === faculty.id;
          })
        : [];

    return `
      <article class="directory-card">

        <span class="directory-card-label">
          FACULTY
        </span>

        <h2>${faculty.name}</h2>

        <p>
          ${
            faculty.description ||
            "Academic resources and course books associated with this faculty."
          }
        </p>

        <div class="directory-meta">

          <span>
            ${facultyDepartments.length}
            ${
              facultyDepartments.length === 1
                ? " Department"
                : " Departments"
            }
          </span>

          <span>
            ${facultyCourses.length}
            ${
              facultyCourses.length === 1
                ? " Course"
                : " Courses"
            }
          </span>

          <span>
            ${facultyBooks.length}
            ${
              facultyBooks.length === 1
                ? " Course Book"
                : " Course Books"
            }
          </span>

        </div>

        <div class="directory-details">

          <h3>Departments</h3>

          ${
            facultyDepartments.length
              ? `
                <ul>
                  ${facultyDepartments.map(function (department) {
                    return `
                      <li>
                        ${department.name}
                      </li>
                    `;
                  }).join("")}
                </ul>
              `
              : `
                <p>
                  No departments have been added yet.
                </p>
              `
          }

          <h3>Courses</h3>

          ${
            facultyCourses.length
              ? `
                <ul>
                  ${facultyCourses.map(function (course) {
                    return `
                      <li>
                        ${course.code} — ${course.title}
                      </li>
                    `;
                  }).join("")}
                </ul>
              `
              : `
                <p>
                  No courses have been linked to this faculty yet.
                </p>
              `
          }

          <h3>Course Books</h3>

          ${
            facultyBooks.length
              ? `
                <ul>
                  ${facultyBooks.map(function (book) {
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
                  No course books have been linked to this faculty yet.
                </p>
              `
          }

        </div>

      </article>
    `;

  }).join("");

}

