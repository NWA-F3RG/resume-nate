/* Tabs: Resume / HomeLab */
(function () {
  const tabs = document.querySelectorAll('.tab-btn[data-tab]');
  const panels = document.querySelectorAll('.tabpanel[data-panel]');

  function activate(tabName) {
    tabs.forEach(btn => {
      const isActive = btn.dataset.tab === tabName;
      btn.setAttribute('aria-selected', String(isActive));
      btn.classList.toggle('active', isActive);
    });
    panels.forEach(panel => {
      panel.hidden = panel.dataset.panel !== tabName;
    });
  }

  tabs.forEach(btn => btn.addEventListener('click', () => activate(btn.dataset.tab)));

  // Default to Resume
  activate('resume');
})();

/* Optional: Smooth scroll if you add anchor links later */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
