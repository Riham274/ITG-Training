$(document).ready(function() {
    $('#password').on('input', function(){
        let value = $('#password').val();
        let score = 0;
       // let strength = "None";
        // let color = "grey";

        score += Math.min(Math.floor(value.length / 4), 4);

        if (/[a-z]/.test(value))
            score += 2;

        if (/[A-Z]/.test(value))
            score += 2;

        if (/[0-9]/.test(value))
            score += 2;

        if (/[^a-zA-Z0-9]/.test(value))
            score += 2;


       if (score <= 5) {
        strength = "Weak";
        color = "red";
       }
       else if (score >= 6 && score <= 8) {
        strength = "Medium";
        color = "orange";
       }

       else if (score > 8 ) {
        strength = "Strong";
        color = "green";
       }

       $("#progress").css("width", (score / 12) * 100 + "%")
                     .css("background-color" , color);

       $("#strength").text("Strength: " + strength).css("color" , color);
       $("#length").text("length: " + value.length);

       update("#lowercase", /[a-z]/.test(value));
       update("#uppercase", /[A-Z]/.test(value));
       update("#number", /[0-9]/.test(value));
       update("#special", /[^a-zA-Z0-9]/.test(value));


       function update(id , condition) {
        let icon = $(id).find("i");
        if(condition){
            icon.removeClass("fa-xmark").addClass("fa-check").css("color", "green");
        }
        else {
            icon.removeClass("fa-check").addClass("fa-xmark").css("color", "red");


        }
       }


    } )
})