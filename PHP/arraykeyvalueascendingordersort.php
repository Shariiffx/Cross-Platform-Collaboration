<?php
$ages = array("Sharif" => 25, "Jisan" => 22, "Soumyadip" => 28);
ksort($ages);
foreach ($ages as $name => $age) {
    echo "$age: $name \n";
}
?>