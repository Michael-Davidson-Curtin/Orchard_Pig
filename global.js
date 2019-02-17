$(document).ready(function(){
    var id=0;
    //console.log("you clicked the Bottled button");
    //get from Json the category information for bottled drinks and assemble here
    $.getJSON("API/get_drink_categories.php?id=0",function(json){
        //console.log(json);
        $('#drink_category_title').html(json[id].Short_Description); 
        $('#drink_category_text').html(json[id].Long_Description);
    });
    $.getJSON("API/get_drinks_by_category.php?id="+id,function(drinks){
        //console.log(drinks);
        $('#drinks-links').empty();
        for (i=0;i<drinks.length;i++)
        {
            //$('#drinks-links').html("<a href='#' class='card-link' id='drink"+i+"'>"+drinks[i].name+"</a>");           
            $('#drinks-links').append("<a href='#' class='card-link' id="+drinks[i].name+">"+drinks[i].name+"</a>");   
        }
 });
  
//When the doc loads have bottled as visible
$('#bottled').on('click',function(){
    var id=0;
    //console.log("you clicked the Bottled button");
    //get from Json the category information for bottled drinks and assemble here
    $.getJSON("API/get_drink_categories.php?id=0",function(json){
        //console.log(json);
        $('#drink_category_title').html(json[id].Short_Description); 
        $('#drink_category_text').html(json[id].Long_Description);
    });
    $.getJSON("API/get_drinks_by_category.php?id="+id,function(drinks){
        //console.log(drinks);
        $('#drinks-links').empty();
        for (i=0;i<drinks.length;i++)
        {
            //$('#drinks-links').html("<a href='#' class='card-link' id='drink"+i+"'>"+drinks[i].name+"</a>");           
            $('#drinks-links').append("<a href='Products.php?id="+drinks[i].id+"&"+drinks[i].category_id+"' class='card-link' id="+drinks[i].name+">"+drinks[i].name+"</a>");   
        }
 });
});


$('#draught').on('click',function(){
        //console.log("you clicked the Draught button");
        //get from Json the category information for Draught drinks and assemble here
        var id=1;
        //console.log("you clicked the Bottled button");
        //get from Json the category information for bottled drinks and assemble here
        $.getJSON("API/get_drink_categories.php?id=0",function(json){
            //console.log(json);
            $('#drink_category_title').html(json[id].Short_Description); 
            $('#drink_category_text').html(json[id].Long_Description);
            
        });
        $.getJSON("API/get_drinks_by_category.php?id="+id,function(drinks){
            //console.log(drinks);
            $('#drinks-links').empty();
            for (i=0;i<drinks.length;i++)
            {
                $('#drinks-links').append("<a href='#' class='card-link' id="+drinks[i].name+">"+drinks[i].name+"</a>");   
                //$('#drink_category_text').after("<a href='#' class='card-link'>"+drinks[i].name+"</a>");
                //$('#drink_links').append("<div class='col-sm'><p id="+drinks[i].name+">"+drinks[i].name+"</p></div>");    
            }
    
    
});
});


$('#juicy').on('click',function(){
    //console.log("you clicked the Juicy button");
    //get from Json the category information for Juicy drinks and assemble here
    var id=2;
    //console.log("you clicked the Bottled button");
    //get from Json the category information for bottled drinks and assemble here
    $.getJSON("API/get_drink_categories.php?id=0",function(json){
       // console.log(json);
        $('#drink_category_title').html(json[id].Short_Description); 
        $('#drink_category_text').html(json[id].Long_Description);
       
    });
    $.getJSON("API/get_drinks_by_category.php?id="+id,function(drinks){
       // console.log(drinks);
        $('#drinks-links').empty();
        //need to replace this when new content is made
        
        for (i=0;i<drinks.length;i++)
        {
            $('#drinks-links').append("<a href='#' class='card-link' id=juicy"+drinks[i].id+">"+drinks[i].name+"</a>");   
            //$('#drink_category_text').after("<a href='#' class='card-link'>"+drinks[i].name+"</a>");
            //$('#drink_links').append("<div class='col-4'><p id="+drinks[i].name+">"+drinks[i].name+"</p></div>");    
        }

});
});
});//end page 


