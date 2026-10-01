document.addEventListener("DOMContentLoaded", function () {
  if (typeof books === "undefined") return;

  if (typeof renderFeaturedBooks === "function") {
    renderFeaturedBooks(books);
  }

  if (typeof renderSubjectGuides === "function") {
    renderSubjectGuides(books);
  }

  if (typeof renderDigitalResources === "function") {
    renderDigitalResources(books);
  }
});
