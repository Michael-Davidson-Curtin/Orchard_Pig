$(document).ready(function(){
   
    
//When the doc loads have bottled as visible
$('#bottled').on('click',function(){
    var id=0;
    console.log("you clicked the Bottled button");
    //get from Json the category information for bottled drinks and assemble here
    $.getJSON("API/get_drink_categories.php?id=0",function(json){
        console.log(json);
        $('#heading').replaceWith("<h2>"+json[id].Short_Description+"</h2>"); 
        $('#main-text').replaceWith("<div id='main-text'><p>"+json[id].Long_Description+"<p></div>");
    });
    $.getJSON("API/get_drinks_by_category.php?id="+id,function(drinks){
        console.log(drinks);
        for (i=0;i<drinks.length;i++)
        {
            $('#drink_links').append("<div class='col-3'><p id="+drinks[i].name+">"+drinks[i].name+"</p></div>");    
        }
        //go throught the list of drinks returned and for each of them create a 
        //<div class="col-3" style="color:#2e4a87;"><p>Reveller</p></div>
    });
    
    
   
   
});

$('#draught').on('click',function(){
    console.log("you clicked the Draught button");
    //get from Json the category information for Draught drinks and assemble here
 
    
});

$('#juicy').on('click',function(){
    console.log("you clicked the Juicy button");
    //get from Json the category information for Juicy drinks and assemble here
   
});


});//end page
