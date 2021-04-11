<?php
    header("Cache-Control: no-cache, must-revalidate");
    // Прошедшая дата
    header("Expires: Mon, 1 Sep 2008 07:30:00 GMT");
    // Инициализация массива названий
    $login[]="aazc";
    $login[]="bblk";
    $login[]="cclk";
    //получение параметра log
    $q = $_POST["log"];
    //поиск соответствий из массива если длина log > 0
    $antvort="";
    if (strlen($log) > 0)
    {
        for($i=0;$i<count($login);$i++)
        {
            if (strtolower($log) ==strtolower(substr($login[$i],0,strlen($log))))
                $antvort = "УЖЕ СУЩЕСТВУЕТ";
            else
                $antvort = "НЕ СУЩЕСТВУЕТ";
        }
    }
    //вывод результата
    echo $antvort;
?>