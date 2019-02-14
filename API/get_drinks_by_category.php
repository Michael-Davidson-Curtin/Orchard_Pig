<?php
//this API will provide a list of beverage categories. This will be used to populate the main.php drinks section
require_once ('C:\xampp\htdocs\Orchard_Pig\config.php');
//require_once('../functions.php');

$category_id = ($_GET['id']);


$query = "SELECT * FROM drinks WHERE category_id = $category_id";



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