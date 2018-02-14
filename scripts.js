$(function() {
    $("#gifSubmit").click(function(e){
        e.preventDefault();
        var value = $("#gifInput").val();
        console.log(value);
        var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=" + value + "&api_key=cPhYjQSR2UZU8gafjTiH3C3yrxnanfW9&limit=3");
        xhr.done(function(data) { 
            console.log("success got data", data); 
            var results = "";
            results += "<h2>Your Results: </h2><div id='images'>";
            for (var i=0; i<3; i++) {
                results += "<div class='image'>"
                 results += "<img src=" +data.data[i].images.fixed_height.url + "> </div>"                  
            }
            results += "</div>";
            $("#gifResults").html(results);
        });

    });
})
//api key: cPhYjQSR2UZU8gafjTiH3C3yrxnanfW9
