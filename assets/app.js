(function () {
  var body = document.body;
  var btn = document.querySelector('.menu-btn');
  var scrim = document.querySelector('.scrim');
  if (btn) btn.addEventListener('click', function () { body.classList.toggle('nav-open'); });
  if (scrim) scrim.addEventListener('click', function () { body.classList.remove('nav-open'); });

  // Keep the current page visible in a long sidebar.
  var sidebar = document.querySelector('.sidebar');
  var active = sidebar && sidebar.querySelector('a.active');
  if (active) sidebar.scrollTop = active.offsetTop - sidebar.clientHeight / 2;

  if (window.hljs) {
    document.querySelectorAll('pre code[class*="language-"]').forEach(function (el) { window.hljs.highlightElement(el); });
  }

  if (window.mermaid && document.querySelector('pre.mermaid')) {
    var dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    window.mermaid.initialize({
      startOnLoad: false,
      theme: dark ? 'dark' : 'default',
      securityLevel: 'strict',
      flowchart: { useMaxWidth: false },
      sequence: { useMaxWidth: false },
      er: { useMaxWidth: false }
    });
    window.mermaid.run({ querySelector: 'pre.mermaid' }).then(function () {
      // Diagrams wider than the page start fitted to the width; a click toggles the natural size.
      document.querySelectorAll('.diagram').forEach(function (box) {
        var svg = box.querySelector('svg');
        if (!svg || svg.getBoundingClientRect().width <= box.clientWidth) return;
        box.classList.add('zoomable');
        box.title = '클릭하면 원래 크기로 보기';
        box.addEventListener('click', function () { box.classList.toggle('zoomed'); });
      });
    });
  }
})();
