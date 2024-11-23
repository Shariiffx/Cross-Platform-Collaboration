<?php
// Define an associative array
$a = array(
    "first" => "S",
    "second" => "h",
    "third" => "a",
    "fourth" => "r",
    "fifth" => "i",
    "sixth" => "f"
);



// Remove the item with key 'fourth'
unset($a["fourth"]);

// Print the modified associative array

foreach ($a as $key => $value) {
    echo "$key: $value\n";
}
?>