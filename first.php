<?php 
    // $a = 23;
    // echo (a);
    // // Conditional statement
    // //----------Switch Statement-----------
    // $var = 1;
    // switch($var){
    //     case 1:
    //     echo("One");
    //     break;
    //     case 2:
    //     echo("Two");
    //     break;
    //     case 3:
    //     echo("Three");
    //     break;
    //     case 4:
    //     echo("Four");
    //     break;
    //     default:
    //     echo("Enter valid number");
    // }

    // //-----------arrays ---- 03-09------------
    // $arr1= array(23,233,2333);
    // print_r($arr1);

    // // Associative array
    // $arr2 =["first" => 1, "second" => 2, "Third" => 3];

    // //Multidimensional array
    // $arr3 = [array(22,34),array(34,22)];

    // // for($i = 0, $j = 0; $i < row, $j < col; $i++, $j++){
    // //     echo($arr3[i])
    // // }


    // //-------------Function -------------------  05 - sept
    // // call by value
    // function add($i){
    //     return $i += $i;
    // }
    // echo(add(4));

    // function sum(&$a){
    //     return $a += $a;
    // }
    // echo(sum(4));

    // function mul($j=2){
    //     return $j *= $j;
    // }
    // echo(mul(4));

    //------------Scope of variables

    // function pass by reference
    function passbyref(&$x){
        $x += $x;
        return $x;
    }

    $var = passbyref(23);
    echo($var);
?>