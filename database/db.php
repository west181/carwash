<?php

// Create connection database
function createConnection()
{

global $servername,$username ,$password,$dbname ;
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error)
{
die("Connection failed: " . $conn->connect_error);
}

return $conn;
};

?>