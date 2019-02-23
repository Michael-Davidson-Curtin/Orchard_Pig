$(document).ready(function(){
    var url = window.location.href;
    console.log(url);
    var id = url.substring(url.lastIndexOf('id=')+3);
    var category = url.substring(url.lastIndexOf('category='));
    console.log("The drink ID is "+id);
    //now we need to load some data first we want the drink which the id is assocatied with
    $.getJSON("API/get_drink_by_id.php?id="+id,function(drink){
        console.log(drink);
    //product title
    $('#product_title').html(drink[0].drink_name);
    //change the colour of the text to match product
    $('#product_title').css({"color":""+drink[0].text_color+"","text-shadow":"2px 2px #363636"});
    //product image
    $('#product_image').html("<img src='img/Products/Product Images/"+drink[0].image_name+"' class='card-img' alt='"+drink[0].image_name+"'></img>");

    //product short description
    //product long description    
    $('#product_short_description').html(drink[0].short_description);
    $('#product_short_description').css("color",drink[0].text_color);
    $('#product_long_description').html(drink[0].long_description);
    $('#product_long_description').css("color",drink[0].text_color);

    $.getJSON("API/get_drinks_by_category.php?id="+drink[0].category_id,function(drinks){
        //update product card here
        console.log(drinks);

        //now I have all of the data when the page loads lets assign the barrels first
        for (i=0;i<drinks.length;i++)
            {
                $('#barrels_row').append("<div class='col-sm'><img src='img/Products/Barrel Images/"+drinks[i].Category_Name+"/"+drinks[i].drink_name+".png' alt='"+drinks[i].drink_name+"' id='"+drinks[i].drink_name+"'></div>");   
                
                //<img src='img/Products/Barrel Images/Bottled/"+drinks[i].name+".png alt="+drinks[i].name+" id="+drinks[i].name+">
            }

    });
});
//load initial content is now complete. Now need to get the barrels working
//I am thinking a switch but I might watch the video coz I really want them all to do the same thing





});
