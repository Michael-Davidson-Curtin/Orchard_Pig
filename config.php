<?php
// Error reporting
ini_set('display_errors', 1);
error_reporting(E_ALL);


//Michael DB Config
$dbhost = "127.0.0.1";
$dbuser = "michaeldavidsond";
$dbpass = "";
$dbname = "Orchard_Pig";




// MySQL connection
$connection = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
// Test if connection succeeded
if(mysqli_connect_errno()) {
  die("Database connection failed: " . mysqli_connect_error() ." (" . mysqli_connect_errno() . ")"
  );
}
?>