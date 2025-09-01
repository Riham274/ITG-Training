$(document).ready(function() {
  const $track = $('.moving-wrapper');  
  const $images = $track.children('img'); 
  const $nextBtn = $('.next');
  const $backBtn = $('.back');
  const $select = $('#images-view');

  let imagesPerView = $select.val(); 
  let currentIndex = 0; 

  
  function updateWidth() {
    const width = 100 / imagesPerView; 
    $images.css('width', width + '%');

  }

 
  function move(index) {
    const maxIndex = $images.length - imagesPerView; 
    if (index < 0) {
        index = 0;
    }
    if (index > maxIndex) {
        index = maxIndex;
    }
    else{
     currentIndex = index;
    }

    const translateX = -(100 / imagesPerView) * index;
    $track.css({
      'transform': 'translateX(calc(' + translateX + '% + 20px))',
      
    });
  }

  $nextBtn.click(function() {
    move(currentIndex + 1);
  });


  $backBtn.click(function() {
    move(currentIndex - 1);
  });

 
  $select.change(function() {
    imagesPerView = $select.val();
    updateWidth();
  });


});


