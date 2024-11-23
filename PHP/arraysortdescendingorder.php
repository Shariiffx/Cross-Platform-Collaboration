<?php
$numbers = array(3, 92, 1, 16, 28, 18, 16);
rsort($numbers);

$arrlength = count($numbers);
for ($x = 0; $x < $arrlength; $x++) {
  echo "$numbers[$x]\n";

}
?>