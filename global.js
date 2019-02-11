$(document).ready(function(){
     $('#bottled_info').show();
     $('#draughty_info').hide();
     $('#juicy_info').hide();
//When the doc loads have bottled as visible
$('#bottled').on('click',function(){
    console.log("you clicked the Bottled button");
    $('#bottled_info').show();
    $('#draughty_info').show();
    $('#juicy_info').hide();
   
});

$('#draught').on('click',function(){
    console.log("you clicked the Draught button");
    $('#draughty_info').show();
    $('#bottled_info').hide();
    $('#juicy_info').hide();
    
});

$('#juicy').on('click',function(){
    console.log("you clicked the Juicy button");
    $('#bottled_info').hide();
    $('#draughty_info').hide();
    $('#juicy_info').show();
});

});//end page
