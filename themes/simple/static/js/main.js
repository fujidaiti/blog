// Shows the post title in the sidebar once the reader scrolls past the main
// heading, so the title remains visible while navigating the TOC.
(function () {
  var h1 = document.querySelector(".post-header h1");
  var sidebarTitle = document.querySelector(".sidebar-post-title");
  if (!h1 || !sidebarTitle) return;

  new IntersectionObserver(function (entries) {
    var entry = entries[0];
    var scrolledPast =
      !entry.isIntersecting && entry.boundingClientRect.top < 0;
    sidebarTitle.classList.toggle("is-visible", scrolledPast);
  }).observe(h1);
})();
