<?php 
   $title ="School.AboutUs.com";
   require "blocks/header.php";
?> 
<?php
  $name = $_POST['name'];
  $email = $_POST['email'];
  $password = $_POST['pass'];
  $massage = $_POST['massage'];
  $a = 0;
  if(trim($name) == "" || trim($name) == " "){
    echo "Please input name" . '<br>';
    $a++;
  }else if(strlen(trim($name)) <= 1){
          echo "This name isn`t real" . '<br>';
          $a++;
        }
        

  if(trim($email) == "" || trim($email) == " "){
    echo "Please input email" . '<br>';
    $a++;
  }

  if(trim($password) == "" || trim($password) == " "){
    echo "Please input password" . '<br>';
    $a++;
  }

  if($a==0){

    // echo "<h1>all information</h1>";
    // foreach ($_POST as $key => $value) {
    //      echo "<p>$value</p>";
    // }
    //cf();
    $_POST['pass'] = md5($password);
    header("Location: /contacts.html");
    exit;
  }else{
    header("Location: /contacts.html");
    exit;
  }
  //print_r($_POST);
?>
<?php 
   require "blocks/footer.php";
?>