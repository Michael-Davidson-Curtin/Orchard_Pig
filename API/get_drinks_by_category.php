<?php
//this API will provide a list of beverage categories. This will be used to populate the main.php drinks section
require '../config.php';
require_once('../functions.php');

$category="Juicy Pigs";
$query = "SELECT * FROM Products WHERE `Product Category`= '$category'";



$result = mysqli_query($connection, $query);
$rows = array();
while($r = mysqli_fetch_assoc($result)) {

    // output JSON data    
    print json_encode($r);    
    }

?>