//the main.js file will control all of the data driven items for the main page
$(document).ready(function()
{
    var id=0;
    //get from Json the category information for bottled drinks and assemble here
    $("#category_image").css({"background":"url('img/bottles-main.png') no-repeat center","background-size": "cover"});
    $.getJSON("API/get_drink_categories.php",function(json)
        {
            $('#drink_category_title').html(json[id].Short_Description); 
            $('#drink_category_text').html(json[id].Long_Description);
        });
    $.getJSON("API/get_drinks_by_category.php?id="+id,function(drinks)
        {
            $('#drinks-links').empty();
            for (i=0;i<drinks.length;i++)
            {
                $('#drinks-links').append("<div class='col-md'><a href='Products.php?id="+drinks[i].id+"&category="+drinks[i].category_id+"' class='card-link' id="+drinks[i].name+">"+drinks[i].name+"</a></div>");   
            }
        });
  
    //Bottles Clicked Function
    $('#bottled').on('click',function()
    {
    var id=0;
    //get from Json the category information for bottled drinks and assemble here
    $("#category_image").css({"background":"url('img/bottles-main.png') no-repeat center","background-size": "cover"});
    $.getJSON("API/get_drink_categories.php",function(json)
        {
            $('#drink_category_title').html(json[id].Short_Description); 
            $('#drink_category_text').html(json[id].Long_Description);
        });
    $.getJSON("API/get_drinks_by_category.php?id="+id,function(drinks)
        {
            $('#drinks-links').empty();
            for (i=0;i<drinks.length;i++)
            {
                $('#drinks-links').append("<div class='col-md'><a href='Products.php?id="+drinks[i].id+"&category="+drinks[i].category_id+"' class='card-link' id="+drinks[i].name+">"+drinks[i].name+"</a></div>");   
            }
        });
    });

    //Draught Clicked Function
    $('#draught').on('click',function()
    {
    var id=1;
    //get from Json the category information for Draught drinks and assemble here
    $("#category_image").css({"background":"url('img/OP pint.png') no-repeat center","background-size": "cover"});
    $.getJSON("API/get_drink_categories.php",function(json)
        {
            $('#drink_category_title').html(json[id].Short_Description); 
            $('#drink_category_text').html(json[id].Long_Description);
        });
    $.getJSON("API/get_drinks_by_category.php?id="+id,function(drinks)
        {
            $('#drinks-links').empty();
            for (i=0;i<drinks.length;i++)
            {
                $('#drinks-links').append("<div class='col-md'><a href='Products.php?id="+drinks[i].id+"&category="+drinks[i].category_id+"' class='card-link' id="+drinks[i].name+">"+drinks[i].name+"</a></div");   
            }
        });
    });
    
    //Juicy Clicked function
    $('#juicy').on('click',function()
    {
    var id=2;
    //get from Json the category information for bottled drinks and assemble here
    $.getJSON("API/get_drink_categories.php",function(json)
        {
            $('#drink_category_title').html(json[id].Short_Description); 
            $('#drink_category_text').html(json[id].Long_Description);
        });
    $.getJSON("API/get_drinks_by_category.php?id="+id,function(drinks)
        {
            $('#drinks-links').empty();
            for (i=0;i<drinks.length;i++)
            {
                $('#drinks-links').append("<div class='col-md'><a href='Products.php?id="+drinks[i].id+"&category="+drinks[i].category_id+"' class='card-link' id=juicy"+drinks[i].id+">"+drinks[i].name+"</a></div>");   
            }
        });
    });
});//end page 


