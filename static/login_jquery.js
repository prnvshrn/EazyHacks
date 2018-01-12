$(document).ready(function(){
    $("#LoginModal").modal( {backdrop: 'static',
    keyboard: false, show:true });

    $("#LoginForm").submit(function(e){
        alert($("#UserNameTextField").val());
        $("#LoginModal").modal('hide');
    });
});
