// Select all FAQ titles
const faqItems = document.querySelectorAll('.faqs');

faqItems.forEach(item => {
  const title = item.querySelector('.faqs-title');
  const answer = item.querySelector('.answer');
  const icon = title.querySelector('img');

  // Initially hide the answer
  answer.style.display = 'none';

  title.addEventListener('click', () => {
    const isOpen = answer.style.display === 'block';

    // Close all other open answers
    faqItems.forEach(i => {
      i.querySelector('.answer').style.display = 'none';
      i.querySelector('.faqs-title img').src = 'img/icon-plus.svg';
    });

    // Toggle current one
    if (!isOpen) {
      answer.style.display = 'block';
      icon.src = 'img/icon-minus.svg';
    } else {
      answer.style.display = 'none';
      icon.src = 'img/icon-plus.svg';
    }
  });
});
