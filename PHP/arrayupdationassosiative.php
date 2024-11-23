<?php  

$a = array(
    "first" => "S",
    "second" => "h",
    "third" => "a",
    "fourth" => "r",
    "fifth" => "i",
    "sixth" => "f"
);


$a["first"] = "J";


foreach ($a as $key => $value) {
    echo $value;
}
?>
