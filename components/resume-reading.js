(function () {
  const key = 'kasu-course-books-progress';

  function saveProgress() {
    localStorage.setItem(key, JSON.stringify({
      page: window.location.pathname,
      scroll: window.scrollY
    }));
  }

  function restoreProgress() {
    const saved = localStorage.getItem(key);
    if (!saved) return;

    try {
      const progress = JSON.parse(saved);
      if (progress.page !== window.location.pathname) return;

      window.scrollTo(0, progress.scroll || 0);
    } catch (e) {
      console.warn('Could not restore reading progress.', e);
    }
  }

  window.addEventListener('scroll', saveProgress, { passive: true });
  window.addEventListener('load', restoreProgress);
})();
