// One deliberate motion moment: hero stats count up on load.
(function () {
  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var stats = document.querySelectorAll(".stat dt[data-count]");

  if (!stats.length) return;

  if (prefersReduced) {
    stats.forEach(function (el) {
      var target = parseInt(el.getAttribute("data-count"), 10);
      var suffix = el.getAttribute("data-suffix") || "";
      el.textContent = target.toLocaleString() + suffix;
    });
    return;
  }

  function animate(el) {
    var target = parseInt(el.getAttribute("data-count"), 10);
    var suffix = el.getAttribute("data-suffix") || "";
    var duration = 900;
    var start = null;

    function step(ts) {
      if (start === null) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var value = Math.round(target * eased);
      el.textContent = value.toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animate(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  stats.forEach(function (el) { observer.observe(el); });
})();
