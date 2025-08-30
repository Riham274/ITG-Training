$(document).ready(function() {
  const $track = $('.moving-wrapper');   // العنصر اللي يحتوي الصور
  const $images = $track.children('img'); // كل الصور
  const $nextBtn = $('.next');
  const $backBtn = $('.back');
  const $select = $('#images-view');

  let imagesPerView = $select.val(); // عدد الصور المعروضة
  let currentIndex = 0; //مؤشر الصورة الأولى التي يتم عرضها حالياً (مبدئياً 0 أي الصورة الأولى).

  // تحديث عرض الصور حسب العدد المختار
  function updateWidth() {
    const width = 100 / imagesPerView; // كل صورة تاخذ نسبة معينة
    $images.css('width', width + '%');

  }

  // تحريك الكاروسيل
  function move(index) {
    const maxIndex = $images.length - imagesPerView; //مثال: عندك 6 صور و3 تظهر → أقصى index = 6 - 3 = 3.
    if (index < 0) {
        index = 0;
    }
    if (index > maxIndex) {
        index = maxIndex;
    }
    else{
     currentIndex = index; //الصورة الأولى التي يتم عرضها حاليا. current
    }

    const translateX = -(100 / imagesPerView) * index;
    $track.css({
      'transform': 'translateX(' + translateX + '%)',
      
    });
  }

  // زر Next
  $nextBtn.click(function() {
    move(currentIndex + 1);
  });

  // زر Back
  $backBtn.click(function() {
    move(currentIndex - 1);
  });

  // تغيير عدد الصور من الـ select
  $select.change(function() {
    imagesPerView = $select.val();
    updateWidth();
  });

 updateWidth();
});
