<?php  

$a = array(
    "first" => "S",
    "second" => "h",
    "third" => "a",
    "fourth" => "r",
    "fifth" => "i",
    "sixth" => "f"
);


unset($a["first"]);

foreach ($a as $key => $value) {
    echo $value;
}
?>
