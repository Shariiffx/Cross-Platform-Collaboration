<?php
$n = 5; 
$result = 1;

for ($i = 2; $i <= $n; $i++) {
    $result *= $i;
}

echo "The factorial of $n is $result";
?>
