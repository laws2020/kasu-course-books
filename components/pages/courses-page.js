
const grid =
  document.querySelector("#courses-list") ||
  document.querySelector(".page-grid");

if (grid && typeof courses !== "undefined") {

  function lookup(items, id) {

    if (!id || typeof items === "undefined") {
      return null;
    }

    return items.find(function (item) {
      return item.id === id;
    }) || null;
  }

  grid.innerHTML = courses.map(function (course) {

    const faculty =
      lookup(
        typeof faculties !== "undefined"
          ? faculties
          : [],
        course.facultyId
      );

    const department =
      lookup(
        typeof departments !== "undefined"
          ? departments
          : [],
        course.departmentId
      );

    const courseBooks =
      typeof books !== "undefined"
        ? books.filter(function (book) {
            return (
              book.courseId === course.id ||
              book.courseCode === course.code
            );
          })
        : [];

    return `
      <article class="directory-card">

        <span class="directory-card-label">
          COURSE
        </span>

        <h2>
          ${course.code} — ${course.title}
        </h2>

        <p>
          ${
            course.description ||
            "Course information and associated digital course books."
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
            ${
              department
                ? department.name
                : "Department not specified"
            }
          </span>

          <span>
            ${courseBooks.length}
            ${
              courseBooks.length === 1
                ? " Course Book"
                : " Course Books"
            }
          </span>

        </div>

        <div class="directory-details">

          <h3>Course Information</h3>

          <dl class="book-meta-list">

            <dt>Course Code</dt>
            <dd>${course.code}</dd>

            <dt>Course Title</dt>
            <dd>${course.title}</dd>

            <dt>Faculty</dt>
            <dd>
              ${
                faculty
                  ? faculty.name
                  : "Not specified"
              }
            </dd>

            <dt>Department</dt>
            <dd>
              ${
                department
                  ? department.name
                  : "Not specified"
              }
            </dd>

            <dt>Level</dt>
            <dd>
              ${course.level || "Not specified"}
            </dd>

            <dt>Semester</dt>
            <dd>
              ${course.semester || "Not specified"}
            </dd>

            <dt>Credit Units</dt>
            <dd>
              ${course.creditUnits || "Not specified"}
            </dd>

            <dt>Session</dt>
            <dd>
              ${course.session || "Not specified"}
            </dd>

          </dl>

          <h3>Course Books</h3>

          ${
            courseBooks.length
              ? `
                <ul>
                  ${courseBooks.map(function (book) {
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
                  No course books are linked to this course yet.
                </p>
              `
          }

        </div>

      </article>
    `;

  }).join("");

}

