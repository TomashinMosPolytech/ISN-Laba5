function ajaxRequest(str)
{
    if (str.length==0)
    {
        document.getElementById("txtAntwort ").innerHTML="";
        return;
    }
    else
    {
        $.ajax({
            type: "POST",
            url: "server_bearbeiter.php",
            data: {log:str},
            success: function(msg)
            {
                document.getElementById("txtAntwort").innerHTML=msg;
            }
        });
    }
}