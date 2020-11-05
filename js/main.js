$("#searchBtn").on('click', function () {
                    
    /* Here we retrieve the data from the drop down lists*/
    var city_dropdown = $("#city_dropdown").val();
    var dept_dropdown = $("#dept_dropdown").val();
    var region_dropdown = $("#region_dropdown").val();

    /* If a city of the list is picked then send alert with city, department and region */
    if($('#city_list option').filter(function(){
        return this.value === city_dropdown;
    }).length) {
        //send ajax request
        alert(city_dropdown + " " + dept_dropdown + " " + region_dropdown);
    }

    /* If statement we will use to display different conclusions depending on the index score */
    /* Since we don't have access to the score yet we just use dummy check to get the idea */
    
    if (city_dropdown === "Metz") {
        document.getElementById("conclusion-text").innerHTML = "Your area is within it’s regions average score";
    }
    else if (city_dropdown === "Paris") {
        document.getElementById("conclusion-text").innerHTML = "Your area is above it’s region’s average score";
    } 
    else {
        document.getElementById("conclusion-text").innerHTML = "Your area is below it’s region’s average score";
    }
    

});
                    
                    