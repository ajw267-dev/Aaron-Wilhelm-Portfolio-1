// Small progressive enhancement. The portfolio remains usable without JavaScript.
const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());

const links = document.querySelectorAll('.site-nav a[href^="#"]');
const sections = [...links].map(link => ({link, section: document.querySelector(link.getAttribute('href'))})).filter(item=>item.section);
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      for (const {link, section} of sections) {
        if (section === entry.target) link.setAttribute('aria-current','location');
        else link.removeAttribute('aria-current');
      }
    }
  }, {rootMargin:'-15% 0px -70% 0px', threshold:0});
  for (const {section} of sections) observer.observe(section);
}
