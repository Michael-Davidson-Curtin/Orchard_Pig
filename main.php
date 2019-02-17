<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8"> 
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css">
   <link rel="stylesheet" href="CSS\styles.css">
    <title>Orchard Pig - The Pig Sty</title>
  </head>
<body class="cursor">
  
<!-- Navigation Bar -->

<nav class="navbar navbar-expand-lg bg-info navbar-dark " >
  <a class="navbar-brand" href="main.php" id="logo_text">Orchard Pig</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>
  <div class="navbar-collapse justify-content-md-center collapse" id="collapsibleNavbar">
  <ul class="navbar-nav" >
    <li class="nav-item ">
      <a class="nav-link" href="#bottled" id="our_drinks" >Our Drinks</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#about" id="about_us">About Us</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#contact" id="contact_us">Contact Us</a>
    </li>
   </ul>
</div>
</nav>

<!--Nav 2-->


<!--Hero Section -->
<div class="jumbotron.jumbotron-fluid" id="Hero_Background___Home"></div>

<!-- Green Patch-->
<div class="container-fluid" id="green_patch">
  <div class="row" >
  <!-- Bottled Sign Post -->
    <div class="col-sm" >
      <img src="img/Bottled Sign Post.png" href="#drinks"class="signpost" id="bottled">
    </div>
  <!-- Draught Sign Post -->
    <div class="col-sm" >
        <img src="img/Draught Sign Post.png" class="signpost" id="draught">
    </div>
  <!-- Juicy Sign Post -->
    <div class="col-sm" >
      <img src="img/Juicy Sign Post.png" href="#drinks" class="signpost" id="juicy">
    </div>
  </div>
</div>
<!-- Green Patch End-->

<!-- Drinks Information Panel Container -->
<div class="container-fluid" id="drinks">
<!-- Drinks Information Panel Heading -->
  <h1>Our Drinks...</h1> 
  <!-- Drinks Information Panel  -->
    <div class="container" >
    <!-- want to trial a horizontal card -->
    <div class="card mb-3"  id="drink-card">
      <div class="row no-gutters">
        <div class="col-md-4">
           <img src="img\bottles-main.png" class="card-img" alt="...">
        </div><!-- col-md-4 - End -->
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title" id="drink_category_title"></h5>
          <p class="card-text" id="drink_category_text"></p>
        <!-- Need links to drinks -->
        <div id="drinks-links">
        
        </div>
       
        <!-- Drink Links End -->
        </div><!-- card-body - End -->
      </div><!-- col-md-8 - End -->
      </div><!-- row - End -->
    </div> <!-- Drink-card - End -->
    </div><!-- Container - End -->
</div><!--Container-fluid - End -->
        
         <!--Blank Space 
         <div class="col-1"></div>
        <!-- Information 
             <div id="bottled_info">
             <div class="col-12 " id="info">
                     <div class="info_image"></div>
                     <div class="info_panel">
                         <article id="main-info">
                             <h2 id="heading"></h2>
                             <div id="main-text">
                             </div>
                          <div class="row" id="drink_links">
                            
                              
                            <!--
                              <div class="col-3" style="color:#f98847;"><p>Charmer</p></div>
                            <div class="col-3" style="color:#82bb61;"><p>Truffler</p></div>
                            <div class="col-3" style="color:#9a667d;"><p>Hog Father</p></div>

                          </div>
                         </article>
                        </div>
                        
                     </div>    
            </div>
     
             <div class="col-1"></div>
             
         </div> -->
          
       
      <div class="container-fluid" id="about">
      
          <h1>Our History...</h1>
           <div class="container" >
             <div class="col-2"></div>
             <div class="col-12 " >
           
            
             </div>
          <div class="col-2"></div>
          
      </div>
      <div class="container" >
             <div class="col-1"></div>
             <div class="col-12 " id="info">
                     <div class="about_image"><img src="img\OPlogo2012large.png" ></div>
                     <div class="info_panel">
                         <article id="main-info">
                             <h2>Rooted in Somerset....</h2>
                             <br>
                            
                             
                             <div id="main-text">
                             <p>Orchard Pig's home in West Bradley Orchards is well and truely rooted in Somerset's
                             cider-making history, dating back to the 1850s and W.T Allen's award winning Somerset
                             cider...and Orchard Pig have carried on that fine tradition</p>
                             </div>
                          
                         </article>
                        </div>
                     </div>    
             </div>
             <div class="col-1"></div>
          </div>
      
      <div class="container-fluid" id="contact">
            <br>
        <br>
          <h1>Follow Us or get in touch...</h1>
           <div class="container" >
             <div class="col-2"></div>
             <div class="col-12" id="social_info" >
            <img src="img\OrchardPigsilhouette.png" id="top_logo"/>
            <div class="social_information">
                <p>Follow us on social media</p><br>
                <img src="..img/Social Media Links.png"/>
                
            </div>
             </div>
          <div class="col-2"></div>
      </div>
      <div>
          
          
      </div>
  </main>    
  
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
<script src="global.js"></script>
  </body>

</html>