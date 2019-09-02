<?php
  if(isset($_POST['sweets'])) 
  {
    echo $_POST['sweets'];
    exit;
  }
  ?>

    <script>
        $(function(){
          $("select[name='sweets']").change(function () {
          var str = "";
          $("select[name='sweets'] option:selected").each(function () {
                str += $(this).text() + " ";

              });

                jQuery.ajax({
                type: "POST",
                data:  $("form#a").serialize(),

                success: function(data){
                    jQuery(".res").html(data);

                    $('#test').html(data);


                }
                });  
                var str = $("form").serialize();
                $(".res").text(str);
        });
        });
        </script>


 <div id="test">

  </div>

<form id="a" action="" method="post">
  <select name="sweets" >
   <option>Chocolate</option>
   <option selected="selected">Candy</option>
   <option>Taffy</option>
   <option>Caramel</option>
   <option>Fudge</option>
  <option>Cookie</option>
</select>
</form>