<?php
require_once ('../config.php');
$query = "SELECT * FROM categories";

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