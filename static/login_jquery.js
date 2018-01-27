$(document).ready(function(){
    $("#SignUpButton").hide();
    $("#GoToLoginLabel").hide();

    $("#LoginModal").modal( {backdrop: 'static',
    keyboard: false, show:true });

    $("#LoginForm").submit(function(e){
        $("#LoginModal").modal('hide');
    });

    $("#GoToSignUpLabel").click(function(){
        $("#LoginButton").hide();
        $("#SignUpButton").show();
        $("#GoToSignUpLabel").hide();
        $("#GoToLoginLabel").show();
    });

    $("#GoToLoginLabel").click(function(){
        $("#LoginButton").show();
        $("#SignUpButton").hide();
        $("#GoToSignUpLabel").show();
        $("#GoToLoginLabel").hide();
    });

});
