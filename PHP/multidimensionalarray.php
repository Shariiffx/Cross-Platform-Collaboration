<?php
$students = [
    ['name' => 'Jisan', 'age' => 20, 'grades' => [85, 90, 92]],
    ['name' => 'Soumyadip', 'age' => 21, 'grades' => [78, 88, 95]]
];

foreach ($students as $s) {
    echo "Student: {$s['name']}\nAge: {$s['age']}\nGrades: " . implode(', ', $s['grades']) . "\n\n";
}
?>