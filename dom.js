$("#FirstName").focus();
$("#click").click(function(){
    event.preventDefault();
    var FirstName = $("#FirstName").val();
    console.log(FirstName);

    var LastName = $("#LastName").val();
    console.log(LastName);

    var email = $("#email").val();
    console.log(email);

    var age = $("#age").val();
    console.log(age);

    var comment = $("#comment").val();
    console.log(comment);

    $("input[name='gender']:checked").val();

    /*$(document).ready(function(){
        $("button").click(function(){
            alert($("inkedin").attr("href"));
        });
    }); */

    var gender = $("input[name='gender']:checked").val();
    

    $.post('https://www.mydevcompany.com/formulaire/api/form.php',
    {firstname: FirstName, lastname: LastName, email: email, age: age, comment: comment, gender: gender},
    function(response){
        console.log(response)
    });
    

    $('#email').blur(function(){
        var email= $('#email').val();
        $.get('https://www.mydevcompany.com/formulaire/api/mail_exist.php',
        {email_exist: email},
        function (response){  
            if(response == 1) {
                $('.error').hide ()
            };
        });
    });

    alert("Hello  world!");
    });
