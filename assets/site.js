(function () {
  var viewer = document.getElementById('viewer');
  var viewerImg = viewer.querySelector('img');
  var viewerName = viewer.querySelector('.viewer__name');

  document.querySelectorAll('.card__shot').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var img = btn.querySelector('img');
      viewerImg.src = img.src;
      viewerImg.alt = img.alt;
      viewerImg.style.width = img.naturalWidth * 2 + 'px';
      viewerName.textContent = btn.dataset.name;
      viewer.showModal();
    });
  });

  viewer.querySelector('.viewer__close').addEventListener('click', function () {
    viewer.close();
  });

  viewer.addEventListener('click', function (e) {
    if (e.target === viewer) viewer.close();
  });

  var search = document.getElementById('search');
  var sections = Array.prototype.map.call(document.querySelectorAll('.section'), function (section) {
    return {
      count: section.querySelector('.section__count'),
      empty: section.querySelector('.empty'),
      cards: Array.prototype.slice.call(section.querySelectorAll('.card'))
    };
  });

  search.addEventListener('input', function () {
    var q = search.value.trim().toLowerCase();
    sections.forEach(function (section) {
      var shown = 0;
      section.cards.forEach(function (card) {
        var hit = card.dataset.name.indexOf(q) !== -1;
        card.hidden = !hit;
        if (hit) shown++;
      });
      section.count.textContent = shown;
      section.empty.hidden = shown > 0;
    });
  });
})();
