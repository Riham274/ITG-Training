$(document).ready(function () {
  let progress = 0;   //from 0 to 100
  let interval;       // 

  // Start :
  $("#start").click(function () {
    if (interval == null) {
      interval = setInterval(function () {// كل 100 ملي كرر هذا الكود
        if (progress < 100) {
          progress++;
          $("#progress").css("width", progress + "%");
        } 
        else {
          clearInterval(interval); // اوقف هذا التكرار
          interval = null; // تعيد المتغير إلى فارغ → جاهز للتكرار مرة ثانية.
        }
      }, 100); 
    }
  });

  // Stop :
  $("#stop").click(function () {
    clearInterval(interval);
    interval = null;
  });

  // Reset :
  $("#reset").click(function () {
    clearInterval(interval);
    interval = null;
    progress = 0;
    $("#progress").css("width", "0%");
  });
});

//تشبيه مبسط:

//setInterval → كأنك شغلت آلة لإنتاج شيء كل ثانية.

//clearInterval → توقف الآلة عن العمل.

//interval = null → تضع علامة "الآلة متوقفة وجاهزة للتشغيل من جديد".