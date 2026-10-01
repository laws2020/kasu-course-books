
const grid =
  document.querySelector("#departments-list") ||
  document.querySelector(".page-grid");

if (grid && typeof departments !== "undefined") {

  function findFaculty(facultyId) {

    if (
      !facultyId ||
      typeof faculties === "undefined"
    ) {
      return null;
    }

    return faculties.find(function (faculty) {
      return faculty.id === facultyId;
    }) || null;
  }

  grid.innerHTML = departments.map(function (department) {

    const faculty =
      findFaculty(department.facultyId);

    const departmentCourses =
      typeof courses !== "undefined"
        ? courses.filter(function (course) {
            return course.departmentId === department.id;
          })
        : [];

    const departmentBooks =
      typeof books !== "undefined"
        ? books.filter(function (book) {
            return book.departmentId === department.id;
          })
        : [];

    return `
      <article class="directory-card">

        <span class="directory-card-label">
          DEPARTMENT
        </span>

        <h2>${department.name}</h2>

        <p>
          ${
            department.description ||
            "Academic resources and course books associated with this department."
          }
        </p>

        <div class="directory-meta">

          <span>
            ${
              faculty
                ? faculty.name
                : "Faculty not specified"
            }
          </span>

          <span>
            ${departmentCourses.length}
            ${
              departmentCourses.length === 1
                ? " Course"
                : " Courses"
            }
          </span>

          <span>
            ${departmentBooks.length}
            ${
              departmentBooks.length === 1
                ? " Course Book"
                : " Course Books"
            }
          </span>

        </div>

        <div class="directory-details">

          <h3>Faculty</h3>

          <p>
            ${
              faculty
                ? faculty.name
                : "Faculty not specified"
            }
          </p>

          <h3>Courses</h3>

          ${
            departmentCourses.length
              ? `
                <ul>
                  ${departmentCourses.map(function (course) {
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
                  No courses have been linked to this department yet.
                </p>
              `
          }

          <h3>Course Books</h3>

          ${
            departmentBooks.length
              ? `
                <ul>
                  ${departmentBooks.map(function (book) {
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
                  No course books have been linked to this department yet.
                </p>
              `
          }

        </div>

      </article>
    `;

  }).join("");

}

