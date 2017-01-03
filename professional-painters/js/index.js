$(document).ready(function(){
  $("#btn-submit").click(function(){
    var name  = $("#name").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    if((name!="")||(email!="")){
      if(phone==""){phone="N/A";}
      $.post("http://Codefront.Design/ProfessionalPainters/php/email.php", {name:name, email:email, phone:phone}, function(d){
          $("#modal").dialog().css({"display":"block"});
      });
    }else{
      alert("Please check that you have filled each field, and try again!");
    }
  });
});
