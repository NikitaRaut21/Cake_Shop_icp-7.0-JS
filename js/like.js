document.querySelectorAll('.like-btn').forEach(item => {
    item.addEventListener('click', event => {
      alert('Liked!');
    });
  });
  
  document.querySelectorAll('.dislike-btn').forEach(item => {
    item.addEventListener('click', event => {
      alert('Disliked!');
    });
  });
  