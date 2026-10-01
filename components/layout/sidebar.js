(function () {
  const target = document.getElementById("site-sidebar");
  if (!target) return;

  const active = target.dataset.active || "";
  const variant = target.dataset.variant || "library";

  function link(item) {
    const activeClass = item.label === active ? " active" : "";

    return `
      <a class="library-sidebar-link${activeClass}" href="${item.url}">
        ${item.label}
      </a>`;
  }

  target.innerHTML = `
    <aside class="library-sidebar ${variant}">

      <a href="index.html" class="library-sidebar-brand">
        <span class="library-sidebar-hamburger">
          <i></i><i></i><i></i>
        </span>
        <span class="library-sidebar-brand-text">
          <strong>KASU</strong>
          <small>Digital Library</small>
        </span>
      </a>

      <div class="library-sidebar-create">
        <button id="library-create-button" type="button"> + <span> Create</span></button>
      </div>


      <nav class="library-sidebar-scroll">
        <div class="library-sidebar-group">
          ${navigation.primary.map(link).join("")}
        </div>

        <div class="library-sidebar-section">
          <span>Library</span>
          ${navigation.library.map(link).join("")}
        </div>
      </nav>

    </aside>`;

  const createButton = document.getElementById("library-create-button");

  if (createButton) {
    createButton.addEventListener("click", function () {
      window.alert("The lecturer publishing workflow will be connected during the platform implementation.");
    });
  }
})();
