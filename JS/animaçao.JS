(function () {
  // Breadcrumb nas páginas internas (usa o h1 da própria página)
  var h1 = document.querySelector('.titulo-pg .wrap h1');
  if (h1) {
    var nav = document.createElement('nav');
    nav.className = 'breadcrumb';
    nav.setAttribute('aria-label', 'Você está em');
    nav.innerHTML = '<a href="index.html">Início</a><span>›</span><span aria-current="page"></span>';
    nav.lastChild.textContent = h1.textContent;
    h1.parentNode.insertBefore(nav, h1);
  }

  // Revelar ao rolar: só serviços, clientes e blocos da loja
  if (!('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var io = new IntersectionObserver(function (itens) {
    itens.forEach(function (i) {
      if (i.isIntersecting) { i.target.classList.add('visivel'); io.unobserve(i.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.card:not(.aval), .clientes-lista li, .dois > *, .numeros ul')
    .forEach(function (el) { el.classList.add('revelar'); io.observe(el); });
})();