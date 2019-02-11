<?php
//this API will provide a list of beverage categories. This will be used to populate the main.php drinks section
require '../config.php';
require_once('../functions.php');

$query = "SELECT * FROM Categories";

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