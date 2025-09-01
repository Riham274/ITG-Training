$(document).ready(function () {
  let progress = 0;   //from 0 to 100
  let interval;       

  
  $("#start").click(function () {
    if (interval == null) {
      interval = setInterval(function () {
        if (progress < 100) {
          progress++;
          $("#progress").css("width", progress + "%");
        } 
        else {
          clearInterval(interval);
          interval = null; 
        }
      }, 100); 
    }
  });

  $("#stop").click(function () {
    clearInterval(interval);
    interval = null;
  });

  $("#reset").click(function () {
    clearInterval(interval);
    interval = null;
    progress = 0;
    $("#progress").css("width", "0%");
  });
});

