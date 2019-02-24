<?php
require_once ('../config.php');
//require_once('../functions.php');



$category_id = $_GET['id'];

$query = "SELECT drinks.id,drinks.category_id,categories.Category_Name,drinks.name AS drink_name,drinks.short_description,drinks.long_description,drinks.text_color,drinks.image_name";
$query .=" FROM drinks";
$query .=" LEFT JOIN categories";
$query .=" ON drinks.category_id = categories.id WHERE drinks.category_id = ".$category_id.";";


$result = mysqli_query($connection, $query);
$rows = array();
while($r = mysqli_fetch_assoc($result)) {
    $rows[] = $r;
}
if($rows)
    {
    // output JSON data    
    print json_encode($rows);    
    }
else
    {
        print json_encode("No Results found!!");    
    }



?>