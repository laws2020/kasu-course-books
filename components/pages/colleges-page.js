const grid = document.getElementById("colleges-list");
if (grid && typeof colleges !== "undefined") {
  if (colleges.length === 0) {
    grid.innerHTML =
      "<div class=\"catalog-empty\">" +
      "<h2>No colleges have been added yet</h2>" +
      "<p>College records will appear here when they are added to the university data registry.</p>" +
      "</div>";
  } else {
    grid.innerHTML = colleges.map(function (college) {
      const universityId =
        college.universityId ||
        (typeof library !== "undefined"
          ? library.id
          : "");
      const collegeFaculties =
        typeof faculties !== "undefined"
          ? faculties.filter(function (faculty) {
              return faculty.collegeId === college.id;
            })
          : [];
      const facultyIds =
        collegeFaculties.map(function (faculty) {
          return faculty.id;
        });
      const collegeDepartments =
        typeof departments !== "undefined"
          ? departments.filter(function (department) {
              return facultyIds.includes(department.facultyId);
            })
          : [];
      const collegeCourses =
        typeof courses !== "undefined"
          ? courses.filter(function (course) {
              return facultyIds.includes(course.facultyId);
            })
          : [];
      const collegeBooks =
        typeof books !== "undefined"
          ? books.filter(function (book) {
              return facultyIds.includes(book.facultyId);
            })
          : [];
      return
        "<article class=\"directory-card\">" +
        "<span class=\"directory-card-label\">COLLEGE</span>" +
        "<h2>" +
          college.name +
        "</h2>" +
        "<p>" +
          (college.description ||
           "Academic resources associated with this college.") +
        "</p>" +
        "<div class=\"directory-meta\">" +
          "<span>" +
            collegeFaculties.length +
            (collegeFaculties.length === 1
              ? " Faculty"
              : " Faculties") +
          "</span>" +
          "<span>" +
            collegeDepartments.length +
            (collegeDepartments.length === 1
              ? " Department"
              : " Departments") +
          "</span>" +
          "<span>" +
            collegeCourses.length +
            (collegeCourses.length === 1
              ? " Course"
              : " Courses") +
          "</span>" +
          "<span>" +
            collegeBooks.length +
            (collegeBooks.length === 1
              ? " Course Book"
              : " Course Books") +
          "</span>" +
        "</div>" +
        "<div class=\"directory-details\">" +
          "<h3>Faculties</h3>" +
          (collegeFaculties.length
            ? "<ul>" +
              collegeFaculties.map(function (faculty) {
                return "<li>" +
                  faculty.name +
                  "</li>";
              }).join("") +
              "</ul>"
            : "<p>No faculties have been linked to this college yet.</p>") +
        "</div>" +
        "</article>";
    }).join("");
  }
}
