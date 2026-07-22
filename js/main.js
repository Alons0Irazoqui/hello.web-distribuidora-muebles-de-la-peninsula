/* ══════════════════════════════════════════════════════
   DISTRIBUIDORA MUEBLES DE LA PENÍNSULA — Interactions
══════════════════════════════════════════════════════ */
(function(){
  "use strict";

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Footer year ── */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ══════════════════════════════════════
     LOADER
  ══════════════════════════════════════ */
  var loader = document.getElementById('loader');
  var body = document.body;
  body.classList.add('locked');

  function hideLoader(){
    if (!loader) return;
    loader.classList.add('loader-exit');
    document.dispatchEvent(new CustomEvent('site:reveal'));
    setTimeout(function(){
      loader.classList.add('loader-hidden');
      body.classList.remove('locked');
    }, 950);
  }

  var minDelay = new Promise(function(res){ setTimeout(res, 2200); });
  var pageReady = new Promise(function(res){
    if (document.readyState === 'complete') res();
    else window.addEventListener('load', res);
  });
  Promise.all([minDelay, pageReady]).then(hideLoader);
  // Hard fallback in case something stalls
  setTimeout(hideLoader, 5000);

  /* ══════════════════════════════════════
     HERO ENTRANCE (title / sub / ctas reveal)
  ══════════════════════════════════════ */
  document.addEventListener('site:reveal', function(){
    var heroContent = document.querySelector('.hero-content');
    if (heroContent) requestAnimationFrame(function(){ heroContent.classList.add('is-in'); });
  });

  /* ══════════════════════════════════════
     NAVBAR
  ══════════════════════════════════════ */
  var navbar = document.getElementById('navbar');
  function onScrollNav(){
    if (!navbar) return;
    if (window.scrollY > 40) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  }
  onScrollNav();
  window.addEventListener('scroll', onScrollNav, { passive:true });

  /* ── Mobile menu ── */
  var hamburger = document.getElementById('hamburger');
  var mobMenu = document.getElementById('mob-menu');
  if (hamburger && mobMenu){
    hamburger.addEventListener('click', function(){
      var open = mobMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
      body.classList.toggle('locked', open);
    });
    mobMenu.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){
        mobMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        body.classList.remove('locked');
      });
    });
  }

  /* ══════════════════════════════════════
     MARQUEE — inject product categories, duplicated for seamless loop
  ══════════════════════════════════════ */
  var marquee = document.getElementById('marquee');
  if (marquee){
    var items = [
      'Colchones', 'Box Springs', 'Roperos y Cómodas', 'Sillas y Bancos',
      'Tinas y Cubetas', 'Cajas Organizadoras', 'Lavadoras', 'Estufas',
      'Refrigeradores', 'Microondas', 'Menaje Forte', 'Ventiladores'
    ];
    var buildSet = function(){
      return items.map(function(it){
        return '<span>' + it + '</span><i class="fa-solid fa-diamond" aria-hidden="true"></i>';
      }).join('');
    };
    marquee.innerHTML = buildSet() + buildSet();
  }

  /* ══════════════════════════════════════
     SCROLL REVEAL
  ══════════════════════════════════════ */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if (entry.isIntersecting){
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold:.15, rootMargin:'0px 0px -60px 0px' });
    revealEls.forEach(function(el){ io.observe(el); });
  } else {
    revealEls.forEach(function(el){ el.classList.add('in-view'); });
  }

  /* ══════════════════════════════════════
     COUNTERS
  ══════════════════════════════════════ */
  var counters = document.querySelectorAll('.stat-num');
  function animateCount(el){
    var target = parseFloat(el.getAttribute('data-count')) || 0;
    var suffix = el.getAttribute('data-suffix') || '';
    var duration = 1600;
    var start = null;
    function step(ts){
      if (!start) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var value = Math.floor(eased * target);
      el.textContent = value + suffix;
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target + suffix;
    }
    requestAnimationFrame(step);
  }
  if ('IntersectionObserver' in window && counters.length){
    var cio = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if (entry.isIntersecting){
          animateCount(entry.target);
          cio.unobserve(entry.target);
        }
      });
    }, { threshold:.5 });
    counters.forEach(function(el){ cio.observe(el); });
  }

  /* ══════════════════════════════════════
     PARTICLES — lightweight floating dots per section
  ══════════════════════════════════════ */
  document.querySelectorAll('[data-particles]').forEach(function(container){
    var count = parseInt(container.getAttribute('data-count'), 10) || 12;
    for (var i = 0; i < count; i++){
      var p = document.createElement('span');
      p.className = 'particle';
      var size = 2 + Math.random() * 4;
      p.style.width = size + 'px';
      p.style.height = size + 'px';
      p.style.left = (Math.random() * 100) + '%';
      p.style.setProperty('--p-drift', (Math.random() * 60 - 30) + 'px');
      p.style.setProperty('--p-op', (0.25 + Math.random() * 0.4).toFixed(2));
      p.style.animationDuration = (9 + Math.random() * 10) + 's';
      p.style.animationDelay = (Math.random() * 12) + 's';
      container.appendChild(p);
    }
  });

  /* ══════════════════════════════════════
     PARALLAX — transform-based (works on mobile, unlike bg-attachment:fixed)
  ══════════════════════════════════════ */
  var parallaxEls = Array.prototype.slice.call(document.querySelectorAll('[data-parallax]'));
  if (parallaxEls.length && !reducedMotion){
    var ticking = false;
    function updateParallax(){
      var vh = window.innerHeight;
      parallaxEls.forEach(function(el){
        var speed = parseFloat(el.getAttribute('data-speed')) || 0.2;
        var rect = el.parentElement.getBoundingClientRect();
        var center = rect.top + rect.height / 2 - vh / 2;
        var offset = center * speed * -1;
        el.style.transform = 'translate3d(0,' + offset.toFixed(1) + 'px,0)';
      });
      ticking = false;
    }
    function requestTick(){
      if (!ticking){ requestAnimationFrame(updateParallax); ticking = true; }
    }
    window.addEventListener('scroll', requestTick, { passive:true });
    window.addEventListener('resize', requestTick);
    requestTick();
  }

  /* ══════════════════════════════════════
     HERO CANVAS — floating gold particle orbs
  ══════════════════════════════════════ */
  var canvas = document.getElementById('hero-canvas');
  if (canvas && canvas.getContext && !reducedMotion){
    var ctx = canvas.getContext('2d');
    var orbs = [];
    var w, h, dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize(){
      w = canvas.parentElement.offsetWidth;
      h = canvas.parentElement.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function createOrbs(){
      var n = w < 640 ? 18 : 34;
      orbs = [];
      for (var i = 0; i < n; i++){
        orbs.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: 1 + Math.random() * 2.4,
          vx: (Math.random() - 0.5) * 0.15,
          vy: -0.08 - Math.random() * 0.18,
          o: 0.15 + Math.random() * 0.45
        });
      }
    }

    function tick(){
      ctx.clearRect(0, 0, w, h);
      orbs.forEach(function(p){
        p.x += p.vx; p.y += p.vy;
        if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w; }
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        var grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 5);
        grad.addColorStop(0, 'rgba(212,175,55,' + p.o + ')');
        grad.addColorStop(1, 'rgba(212,175,55,0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 5, 0, Math.PI * 2);
        ctx.fill();
      });
      requestAnimationFrame(tick);
    }

    resize();
    createOrbs();
    tick();
    window.addEventListener('resize', function(){ resize(); createOrbs(); });
  }

  /* ══════════════════════════════════════
     CONTACT FORM → WhatsApp redirect
  ══════════════════════════════════════ */
  var waForm = document.getElementById('wa-form');
  if (waForm){
    waForm.addEventListener('submit', function(e){
      e.preventDefault();
      var name = document.getElementById('f-name').value.trim();
      var interest = document.getElementById('f-interest').value;
      var msg = document.getElementById('f-msg').value.trim();

      if (!name || !msg){
        var firstInvalid = !name ? document.getElementById('f-name') : document.getElementById('f-msg');
        firstInvalid.focus();
        return;
      }

      var text = 'Hola, soy ' + name + '. Me interesa: ' + interest + '. ' + msg;
      var url = 'https://wa.me/529851464554?text=' + encodeURIComponent(text);
      window.open(url, '_blank', 'noopener');
    });
  }

})();
