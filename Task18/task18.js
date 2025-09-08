$(document).ready(function() {
    $('#password').on('input', function() {
        let value = $('#password').val();
        let score = 0;
        let strength = "None";
        let progressClass = "";

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
            progressClass = "bg-danger";
        } 
        else if (score >= 6 && score <= 8) {
            strength = "Medium";
            progressClass = "bg-warning";
        } 
        else if (score > 8) {
            strength = "Strong";
            progressClass = "bg-success";
        }

        $("#progress")
            .css("width", (score / 12) * 100 + "%")
            .removeClass("bg-danger bg-warning bg-success")
            .addClass(progressClass);


        $("#strength")
            .text("Strength: " + strength)
            .removeClass("text-danger text-warning text-success")
            .addClass("text-" + progressClass.split("-")[1]);
        $("#length").text("Length: " + value.length);

       
        update("#lowercase", /[a-z]/.test(value));
        update("#uppercase", /[A-Z]/.test(value));
        update("#number", /[0-9]/.test(value));
        update("#special", /[^a-zA-Z0-9]/.test(value));


        function update(id, condition) {
            let icon = $(id); 
            if (condition) {
                icon.removeClass("fa-xmark text-danger").addClass("fa-check text-success");
            } 
            else {
                icon.removeClass("fa-check text-success").addClass("fa-xmark text-danger");
            }
        }
    });
});