/**
 * Academic Portfolio Interactive Script
 * Lamia Tasnim Khan — Fall 2027 Ph.D. Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initPubFilters();
  initAbstractToggles();
  initBibtexCopies();
  initMobileNav();
  initSmoothScroll();
});

/* ---------------- Theme Toggle ---------------- */
function initThemeToggle() {
  const toggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  if (!toggleBtn) return;

  const savedTheme = localStorage.getItem('academic-theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
    updateThemeIcon('dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    updateThemeIcon('light');
  }

  toggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('academic-theme', nextTheme);
    updateThemeIcon(nextTheme);
  });

  function updateThemeIcon(theme) {
    if (!themeIcon) return;
    if (theme === 'dark') {
      themeIcon.className = 'fa-solid fa-moon';
      toggleBtn.setAttribute('title', 'Switch to light mode');
    } else {
      themeIcon.className = 'fa-solid fa-sun';
      toggleBtn.setAttribute('title', 'Switch to dark mode');
    }
  }
}

/* ---------------- Publication Filter Tabs ---------------- */
function initPubFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const pubCards = document.querySelectorAll('.pub-card');
  if (!filterBtns.length || !pubCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      pubCards.forEach(card => {
        if (filterValue === 'all') {
          card.style.display = 'block';
        } else {
          const categories = card.getAttribute('data-category') || '';
          const catList = categories.split(' ').map(c => c.trim());
          if (catList.includes(filterValue)) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        }
      });
    });
  });
}

/* ---------------- Abstract Accordion ---------------- */
function initAbstractToggles() {
  const toggleBtns = document.querySelectorAll('[data-action="toggle-abstract"]');
  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const targetEl = document.getElementById(targetId);
      if (!targetEl) return;

      const isOpen = targetEl.classList.contains('open');
      if (isOpen) {
        targetEl.classList.remove('open');
        btn.innerHTML = '<i class="fa-solid fa-align-left"></i> Abstract';
      } else {
        targetEl.classList.add('open');
        btn.innerHTML = '<i class="fa-solid fa-chevron-up"></i> Hide Abstract';
      }
    });
  });
}

/* ---------------- BibTeX Toggle & One-Click Copy ---------------- */
function initBibtexCopies() {
  // Toggle bibtex box
  const bibtexBtns = document.querySelectorAll('[data-action="toggle-bibtex"]');
  bibtexBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const targetEl = document.getElementById(targetId);
      if (!targetEl) return;

      targetEl.classList.toggle('open');
    });
  });

  // Direct copy button
  const copyBtns = document.querySelectorAll('[data-action="copy-bibtex"]');
  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const bibtexId = btn.getAttribute('data-bibtex-id');
      const bibtexCodeEl = document.getElementById(bibtexId);
      if (!bibtexCodeEl) return;

      const text = bibtexCodeEl.innerText.trim();
      navigator.clipboard.writeText(text).then(() => {
        showToast('✓ BibTeX copied to clipboard!');
      }).catch(() => {
        showToast('Failed to copy. Please copy manually.');
      });
    });
  });
}

/* ---------------- Toast Notification ---------------- */
function showToast(message) {
  let toast = document.getElementById('academicToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'academicToast';
    toast.className = 'toast-msg';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #10b981;"></i> <span>${message}</span>`;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

/* ---------------- Mobile Navigation Drawer ---------------- */
function initMobileNav() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');
  if (!menuBtn || !navLinks) return;

  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-open');
  });

  // Close when link clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('mobile-open');
    });
  });
}

/* ---------------- Smooth Scroll Navigation ---------------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerOffset = 75;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}
