<?php
$a = array("S", "h", "a", "r", "i", "f");

// Remove the item at index 3
unset($a[3]);

// Reindex the array to ensure it’s contiguous
$a = array_values($a);

// Output the modified array
foreach ($a as $value) {
    echo $value;
}
?>