<?php 
$vehiculo = rand(1,3);
$fecha = date('Y-m-d H:i:s');
$lat = rand(-31300, -31500)/1000;
$lng = rand(-64100, -64300)/1000;


$con = new SQLite3('BASE.sqlite');
$con->exec("insert into ubicaciones values (null, $vehiculo, '$fecha', '$lat', '$lng')");
// $sql = "insert into ubicaciones values (null, $vehiculo, '$fecha', '$lat', '$lng')";
// $query = mysqli_query($con, $sql);


echo "<script>
window.location='index.php'
</script>";


?>