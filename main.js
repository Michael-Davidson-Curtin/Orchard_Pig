//the main.js file will control all of the data driven items for the main page

$(document).ready(function()
{
    //when the page loads I would like it to select the bottled content to be shown first
    var id=0;
    $("#category_image").css({"background":"url('img/main-information/bottles-main.png') no-repeat center","background-size": "cover"});
    changeDrinkCardInformation(id);
    //get from Json the category information for bottled drinks and assemble here
    
    //from there the user can select the content they see
    //Bottles Clicked Function
    $('#bottled').on('click',function()
    {
    var id=0;
    //get from Json the category information for bottled drinks and assemble here
    $("#category_image").css({"background":"url('img/main-information/bottles-main.png') no-repeat center","background-size": "cover"});
    changeDrinkCardInformation(id);
     });

    //Draught Clicked Function
    $('#draught').on('click',function()
    {
    var id=1;
    
    //get from Json the category information for Draught drinks and assemble here
    $("#category_image").css({"background":"url('img/main-information/OP pint.png') no-repeat center","background-size": "cover"});
    changeDrinkCardInformation(id);
    });
    
    //Juicy Clicked function
    $('#juicy').on('click',function()
    {
    var id=2;
    //get from Json the category information for bottled drinks and assemble here
    $("#category_image").css({"background":"url('img/main-information/juicy-main.png') no-repeat center","background-size": "cover"});
    changeDrinkCardInformation(id);
    });

//I transferred indivdual clicks in to a function that is shared..I used to have 
//multiples because the juicy fruits had to be done seperately but they no longer do
//the way this is achieved means I can also get rid of some styling that is no longer required

function changeDrinkCardInformation(id)
{
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
                //$('#drinks-links').append("<div class='col-md'><a href='Products.html?id="+drinks[i].id+"#products' class='card-link' id=juicy"+drinks[i].id+">"+drinks[i].drink_name+"</a></div>");
                var drink_id=drinks[i].drink_name;
                var drink_id_trimmed = drink_id.replace(/\s+/g, '');
                $('#drinks-links').append("<div class='col-md'><a href='Products.html?id="+drinks[i].id+"#products' class='card-link' id="+drink_id_trimmed+">"+drink_id+"</a></div>");   
                $("#"+drink_id_trimmed).css("color",drinks[i].text_color);
            }
        });
}
});//end page 


