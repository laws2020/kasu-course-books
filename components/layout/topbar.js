(function () {
  const target = document.getElementById("site-topbar");
  if (!target) return;

  const placeholder = target.dataset.placeholder || "Search the library";

  target.innerHTML = `
    <div class="library-topbar">
      <div class="library-topbar-search">
        <span>Search</span>
        <input id="library-global-search" type="search" placeholder="${placeholder}" autocomplete="off">
      </div>

      <div class="library-topbar-actions">
        <button id="library-signin" type="button">Sign In</button>
        <button id="library-register" type="button">Register</button>
      </div>
    </div>`;

  const search = document.getElementById("library-global-search");

  function goToCatalog() {
    const value = search.value.trim();
    if (!value) {
      window.location.href = "catalog.html";
      return;
    }

    window.location.href = "catalog.html?q=" + encodeURIComponent(value);
  }

  search.addEventListener("keydown", function (event) {
    if (event.key === "Enter") goToCatalog();
  });

  document.getElementById("library-signin").addEventListener("click", function () {
    window.alert("Student and lecturer sign-in will be connected during the authentication phase.");
  });

  document.getElementById("library-register").addEventListener("click", function () {
    window.alert("Registration will be connected during the authentication phase.");
  });
})();
