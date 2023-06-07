document.querySelector('.nav-toggle').addEventListener('click', function() {
  document.querySelector('.nav-menu').classList.toggle('active');
});

function handleZoom(event) {
  const figure = event.currentTarget.closest('.box').querySelector('.image');
  figure.classList.toggle('zoomed');
}

const projectLinks = document.querySelectorAll('.box.project-text a');
projectLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const targetLink = this.getAttribute('href');
    setTimeout(() => {
      window.location.href = targetLink;
    }, 500);
  });
  link.addEventListener('mouseover', handleZoom);
  link.addEventListener('mouseout', handleZoom);
});

const myPortfolioLink = document.querySelector('.my-portfolio-link');
myPortfolioLink.addEventListener('click', function(event) {
  event.preventDefault();
});

const navigationLinks = document.querySelectorAll('.nav-item');
navigationLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const targetSectionId = link.getAttribute('href');
    const targetSection = document.querySelector(targetSectionId);
    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
