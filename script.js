const filterBtns = document.querySelectorAll('.filter-btn');
const posts = document.querySelectorAll('.post');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Toggle active class
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const category = btn.dataset.cat;
    posts.forEach(post => {
      const postCats = post.dataset.cat.split(' ');
      if (category === 'all' || postCats.includes(category)) {
        post.style.display = 'block';
      } else {
        post.style.display = 'none';
      }
    });
  });
});


const scrollLine = document.querySelector('.scroll-line');
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      scrollLine.style.width = `${scrollPercent}%`;
    });
