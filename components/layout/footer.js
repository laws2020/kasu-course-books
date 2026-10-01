(function () {
  const target = document.getElementById('site-footer');
  if (!target) return;

  target.innerHTML = `
    <footer class="site-library-footer">
      <div class="site-library-footer-inner">
        <div>
          <strong>KASU Digital Library</strong>
          <p>Course books and academic resources for university study.</p>
        </div>
        <div class="site-library-footer-links">
          <a href="about.html">About</a>
          <a href="help.html">Help</a>
          <a href="resources.html">Resources</a>
        </div>
      </div>
    </footer>`;
})();
