  // Nav scroll effect
  const navbar = document.getElementById('navbar');
  const backTop = document.getElementById('backTop');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
    backTop.classList.toggle('visible', window.scrollY > 400);
    // Active nav link
    const sections = ['hero','about','price','portfolio','process'];
    let current = '';
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 100) current = id;
    });
    document.querySelectorAll('.nav-links a').forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  });

  // Portfolio filter
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const filter = this.dataset.filter;
      const grid = document.getElementById('portfolioGrid');
      const items = document.querySelectorAll('.portfolio-item');

      if (filter === 'all') {
        grid.style.gridTemplateColumns = 'repeat(3, 1fr)';
        grid.style.gap = '16px';
        items.forEach(item => {
          item.style.display = '';
          item.style.transform = '';
          setTimeout(() => { item.style.opacity = '1'; }, 10);
        });
      } else {
        grid.style.gridTemplateColumns = '1fr';
        grid.style.gap = '48px';
        items.forEach(item => {
          const show = item.dataset.category === filter;
          if (!show) {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.95)';
            setTimeout(() => { item.style.display = 'none'; }, 300);
          } else {
            item.style.display = '';
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'scale(1.04)';
            }, 10);
          }
        });
        setTimeout(() => { grid.style.gridTemplateColumns = cols; }, 50);
      }
    });
  });

  // Modal
  function openModal() {
    document.getElementById('modal').classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    document.getElementById('modal').classList.remove('open');
    document.body.style.overflow = '';
  }
  function handleOverlayClick(e) {
    if (e.target === document.getElementById('modal')) closeModal();
  }

  // Form submit
  async function submitForm() {
    const form = document.querySelector('.modal form') || document.querySelector('.modal');
    const data = {
      姓名: form.querySelector('[name="姓名"]').value,
      LINE: form.querySelector('[name="LINE"]').value,
      Instagram: form.querySelector('[name="Instagram"]').value,
      Email: form.querySelector('[name="Email"]').value,
      服務項目: form.querySelector('[name="服務項目"]').value,
      預計日期: form.querySelector('[name="預計日期"]').value,
      其他說明: form.querySelector('[name="其他說明"]').value,
    };
    if (!data.姓名 || (!data.LINE && !data.Instagram && !data.Email)) {
      alert('請填寫姓名，並至少填寫一種聯絡方式');
      return;
    }
    try {
      const res = await fetch('https://formspree.io/f/xrernolz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        closeModal();
        // Clear fields
        form.querySelectorAll('input, textarea').forEach(el => el.value = '');
        form.querySelector('select').selectedIndex = 0;
        const toast = document.getElementById('toast');
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3500);
      } else {
        alert('送出失敗，請稍後再試。');
      }
    } catch(e) {
      alert('網路錯誤，請稍後再試。');
    }
  }

  // Smooth scroll nav links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({behavior:'smooth'}); }
    });
  });


  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const filter = this.dataset.filter;
      const grid = document.getElementById('portfolioGrid');
      const items = document.querySelectorAll('.portfolio-item');

      if (filter === 'all') {
        grid.style.gridTemplateColumns = 'repeat(3, 1fr)';
        grid.style.gap = '16px';
        items.forEach(item => {
          item.style.display = '';
          item.style.transform = '';
          setTimeout(() => { item.style.opacity = '1'; }, 10);
        });
      } else {
        grid.style.gridTemplateColumns = '1fr';
        grid.style.gap = '48px';
        items.forEach(item => {
          const show = item.dataset.category === filter;
          if (!show) {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.95)';
            setTimeout(() => { item.style.display = 'none'; }, 300);
          } else {
            item.style.display = '';
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'scale(1.04)';
            }, 10);
          }
        });
        setTimeout(() => { grid.style.gridTemplateColumns = cols; }, 50);
      }
    });
  });

  // Modal
  function openModal() {
    document.getElementById('modal').classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    document.getElementById('modal').classList.remove('open');
    document.body.style.overflow = '';
  }
  function handleOverlayClick(e) {
    if (e.target === document.getElementById('modal')) closeModal();
  }

  // Form submit
  async function submitForm() {
    const form = document.querySelector('.modal form') || document.querySelector('.modal');
    const data = {
      姓名: form.querySelector('[name="姓名"]').value,
      LINE: form.querySelector('[name="LINE"]').value,
      Instagram: form.querySelector('[name="Instagram"]').value,
      Email: form.querySelector('[name="Email"]').value,
      服務項目: form.querySelector('[name="服務項目"]').value,
      預計日期: form.querySelector('[name="預計日期"]').value,
      其他說明: form.querySelector('[name="其他說明"]').value,
    };
    if (!data.姓名 || (!data.LINE && !data.Instagram && !data.Email)) {
      alert('請填寫姓名，並至少填寫一種聯絡方式');
      return;
    }
    try {
      const res = await fetch('https://formspree.io/f/xrernolz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        closeModal();
        // Clear fields
        form.querySelectorAll('input, textarea').forEach(el => el.value = '');
        form.querySelector('select').selectedIndex = 0;
        const toast = document.getElementById('toast');
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3500);
      } else {
        alert('送出失敗，請稍後再試。');
      }
    } catch(e) {
      alert('網路錯誤，請稍後再試。');
    }
  }

  // Smooth scroll nav links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({behavior:'smooth'}); }
    });
  });

  // ── LIGHTBOX ──
  var _lbItems = [], _lbIdx = 0, _lbTX = 0;

  function lbOpen(el) {
    _lbItems = Array.from(document.querySelectorAll('.portfolio-item')).filter(function(i){
      return i.querySelector('img') && i.style.display !== 'none';
    });
    _lbIdx = _lbItems.indexOf(el);
    if (_lbIdx < 0) _lbIdx = 0;
    document.getElementById('lb-img').src = _lbItems[_lbIdx].querySelector('img').src;
    document.getElementById('lb').classList.add('on');
    document.body.style.overflow = 'hidden';
  }

  function lbClose() {
    document.getElementById('lb').classList.remove('on');
    document.body.style.overflow = '';
  }

  function lbNav(d) {
    if (!_lbItems.length) return;
    _lbIdx = (_lbIdx + d + _lbItems.length) % _lbItems.length;
    document.getElementById('lb-img').src = _lbItems[_lbIdx].querySelector('img').src;
  }

  document.addEventListener('keydown', function(e) {
    if (!document.getElementById('lb').classList.contains('on')) return;
    if (e.key === 'Escape') lbClose();
    if (e.key === 'ArrowRight') lbNav(1);
    if (e.key === 'ArrowLeft') lbNav(-1);
  });

  // Touch swipe on lightbox
  document.getElementById('lb').addEventListener('touchstart', function(e){ _lbTX = e.touches[0].clientX; }, {passive:true});
  document.getElementById('lb').addEventListener('touchend', function(e){
    var d = _lbTX - e.changedTouches[0].clientX;
    if (Math.abs(d) > 50) lbNav(d > 0 ? 1 : -1);
  }, {passive:true});

