document.addEventListener('DOMContentLoaded', function(){

    const allSearchButtons = document.querySelectorAll('.searchBtn');
    const searchBar = document.querySelector('.searchBar');
    const searchInput = document.getElementById('searchInput');
    const searchClose = document.getElementById('searchClose');
  
    allSearchButtons.forEach(function(btn){
        btn.addEventListener('click', function() {
            searchBar.style.visibility = 'visible';
            searchBar.classList.add('open');
            this.setAttribute('aria-expanded', 'true');
        //    for focus to be straight on the input expecially on mobile
            searchInput.focus();
          });
    })
  
    searchClose.addEventListener('click', function() {
      searchBar.style.visibility = 'hidden';
      searchBar.classList.remove('open');
      this.setAttribute('aria-expanded', 'false');
    });
  
  
  });