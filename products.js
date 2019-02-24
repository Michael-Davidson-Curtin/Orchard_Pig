$(document).ready(function(){
    var url = window.location.href;
    var id = url.substring(url.lastIndexOf('id=')+3);


    $.getJSON("API/get_drink_by_id.php?id="+id,function(drink){
      //change drink card content based on drink loaded
        
        changeDrinkContent(drink[0]);
    
    $.getJSON("API/get_drinks_by_category.php?id="+drink[0].category_id,function(drinks){
        //update product card here
        loadBarrels(drinks);
    });
});
//load initial content is now complete. Now need to get the barrels working
//I am thinking a switch but I might watch the video coz I really want them all to do the same thing
function changeDrinkContent(drink)
{   
    console.log("Drink Contents = "+drink.drink_name);
    $('#product_title').html(drink.drink_name);
    //change the colour of the text to match product
    $('#product_title').css({"color":""+drink.text_color+"","text-shadow":"2px 2px #363636"});
    //product image
    $('#product_image').html("<img src='img/Products/Product Images/"+drink.image_name+"' class='card-img' alt='"+drink.image_name+"'></img>");

    //product short description
    //product long description    
    $('#product_short_description').html(drink.short_description);
    $('#product_short_description').css("color",drink.text_color);
    $('#product_long_description').html(drink.long_description);
    $('#product_long_description').css("color",drink.text_color);
}

function loadBarrels(drinks)
{
    console.log(drinks);
  
        //now I have all of the data when the page loads lets assign the barrels first
        $('#barrels_row').empty();
        for (i=0;i<drinks.length;i++)
            {   
                var image_source = "img/Products/Barrel Images/"+drinks[i].Category_Name+"/"+drinks[i].drink_name+".png";
                var image_alt_label = drinks[i].drink_name;
                var image_id = drinks[i].drink_name;
                var image_id_trimmed = image_id.replace(/\s+/g, '');
                $('#barrels_row').append("<div class='col-sm'><img src='"+image_source+"' alt='"+image_alt_label+"' id='"+image_id_trimmed+"' ></div>");   
                
            }
}

//Nav Functions
$('#bottled_products').on('click',function(){
    console.log("clicked bottled");
       $.getJSON("API/get_drinks_by_category.php?id=0",function(drinks){
        //update product card here
        loadBarrels(drinks);
        console.log(drinks[0]);
        changeDrinkContent(drinks[0]);
    });
});
$('#draught_products').on('click',function(){
    $.getJSON("API/get_drinks_by_category.php?id=1",function(drinks){
     //update product card here
     loadBarrels(drinks);
     console.log(drinks[0]);
     changeDrinkContent(drinks[0]);
 });
});

$('#juicy_products').on('click',function(){
    $.getJSON("API/get_drinks_by_category.php?id=2",function(drinks){
     //update product card here
     loadBarrels(drinks);
     console.log(drinks[0]);
     changeDrinkContent(drinks[0]);
 });
});


//Barrel Functions
$('#barrels_row').on('click','#Reveller',function(){
   

    $.getJSON("API/get_drink_by_id.php?id=1",function(drink)
    {
        changeDrinkContent(drink[0]);
    });
});

$('#barrels_row').on('click','#Charmer',function()
{
    console.log("clicked");
    $.getJSON("API/get_drink_by_id.php?id=2",function(drink){
       changeDrinkContent(drink[0]);
    });
});

$('#barrels_row').on('click','#Truffler',function(){
    $.getJSON("API/get_drink_by_id.php?id=3",function(drink){
       changeDrinkContent(drink[0]);
    });
});
$('#barrels_row').on('click','#HogFather',function(){
    $.getJSON("API/get_drink_by_id.php?id=4",function(drink){
       changeDrinkContent(drink[0]);
    });
});
$('#barrels_row').on('click','#Navelgazer',function(){
    $.getJSON("API/get_drink_by_id.php?id=8",function(drink){
       changeDrinkContent(drink[0]);
    });
});
$('#barrels_row').on('click','#GingerandChill',function(){
    $.getJSON("API/get_drink_by_id.php?id=7",function(drink){
       changeDrinkContent(drink[0]);
    });
});
$('#barrels_row').on('click','#Explorer',function(){
    $.getJSON("API/get_drink_by_id.php?id=6",function(drink){
       changeDrinkContent(drink[0]);
    });
});
$('#barrels_row').on('click','#AppleTingler',function(){
    $.getJSON("API/get_drink_by_id.php?id=10",function(drink){
       changeDrinkContent(drink[0]);
    });
});
$('#barrels_row').on('click','#AppleRambler',function(){
    $.getJSON("API/get_drink_by_id.php?id=11",function(drink){
       changeDrinkContent(drink[0]);
    });
});
$('#barrels_row').on('click','#FlowerPower',function(){
    $.getJSON("API/get_drink_by_id.php?id=12",function(drink){
       changeDrinkContent(drink[0]);
    });
});
$('#barrels_row').on('click','#VeryBerried',function(){
    $.getJSON("API/get_drink_by_id.php?id=13",function(drink){
       changeDrinkContent(drink[0]);
    });
});
$('#barrels_row').on('click','#DeeplyRooted',function(){
    $.getJSON("API/get_drink_by_id.php?id=14",function(drink){
       changeDrinkContent(drink[0]);
    });
});
$('#barrels_row').on('click','#TotallyMinted',function(){
    $.getJSON("API/get_drink_by_id.php?id=15",function(drink){
       changeDrinkContent(drink[0]);
    });
});





});//end of page
