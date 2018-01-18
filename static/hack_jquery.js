$(document).ready(function(){
    $("#HackForm").submit(function(e){
        $("#HackDetails").val($("#TempHackDetails").val());
    });
});