$(function() {
    $("#gifSubmit").click(function(e){
        e.preventDefault();
        var value = $("#gifInput").val();
        console.log(value);
        var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=" + value + "&api_key=cPhYjQSR2UZU8gafjTiH3C3yrxnanfW9&limit=1");
        xhr.done(function(data) { 
            console.log("success got data", data); 
            var results = "";
            results += "<h2>Your Results: </h2>";
            /*for (var i=0; i<json.weather.length; i++) {
                results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
            }*/
            results += '<img src =' + data[0].url + " ></img>"
            
            $("#gifResults").html(results);
        });

    });
})
//api key: cPhYjQSR2UZU8gafjTiH3C3yrxnanfW9
