$(document).ready(function() {
         let typingTimer;

        $("#searchBox").on("input", function(){ 
            clearTimeout(typingTimer); //search
            let name = $("#searchBox").val();

             if(name.length >= 3){ 
               typingTimer = setTimeout(function() {
                 searchFun(name);
                 }, 3000);
              }   
            else {
            $("#results").empty(); 
            } 


        function searchFun(name) {
            $.ajax({
                url: "https://en.wikipedia.org/w/api.php",
                dataType: "jsonp",
                data: {
                    action: "opensearch",
                    format: "json",
                    search: name
                },
                success: function(data) {
                    const titles = data[1];
                    const descriptions = data[2];
                    const links = data[3];
                   

                    for(let i=0; i< titles.length; i++){
                        $("#results").append(
                            `<div class="result">
                                <a href="${links[i]}">${titles[i]}</a>
                                </div>`
                        );
                    }
                }

            })
        }
        }
        )
    }
    )