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

<nav class="navbar navbar-expand-lg bg-info fixed-top navbar-dark " >
  <a class="navbar-brand" href="main.php" id="logo_text">Orchard Pig</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>
  <div class="navbar-collapse  collapse" id="collapsibleNavbar">
  <ul class="navbar-nav" >
    <li class="nav-item ">
      <a class="nav-link" href="#bottled" id="our_drinks" >Our Drinks</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#about" id="about_us">About Us</a>
    </li>
    </ul>
</div>
</nav>

<!--Nav 2-->


<!--Hero Section -->
<div class="jumbotron.jumbotron-fluid" id="Hero_Background___Home" >

</div>
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
<!-- Drinks Information Panel-->
    <div class="row">
        <div class="col-lg-2"></div>
        <div class="col-lg-10">
            <div class="card mb-3" style="max-width: 1200px;" id="drink_card">
                <div class="row no-gutters">
                    <div class="col-md-4" id="category_image">
<!-- Sample <img src="img\bottles-main.png" class="card-img" alt="...">-->
                  </div><!-- col-md-4 - End -->
                  <div class="col-md-8" id="main_card_body">
                      <div class="card-body" >
                        <h5 class="card-title" id="drink_category_title"></h5>
                        <p class="card-text" id="drink_category_text"></p>
                        <br>
<!-- Need links to drinks -->
                        <div class = "row" id="drinks-links"><!--Drink content appended here--></div>
<!-- Drink Links End -->
                      </div><!-- card-body - End -->
                  </div><!-- col-md-8 - End -->
                </div><!-- row n/g - End -->
            </div> <!-- Drink-card - End -->
        </div>
        <div class="col-lg-2"></div><!-- </div> Container - End -->
    </div><!--Row - End -->
</div> 
<!--Drinks - End -->


<!--About Us Section -->
<div class="container-fluid" id="about">
<br>
<h1>Our History...</h1>
<div class="row">
<div class="col-lg-1"></div><!-- </div> Container - End -->
<div class="col-lg-10" >
<div class="bd-example">
  <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
    </ol>
    <div class="carousel-inner" >
      <div class="carousel-item active">
        <img src="img\orchard.jpg" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block" id="carousel-slide1">
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="img\orchard2.jpg" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block" id="carousel-slide2">
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="img\orchard3.jpg" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block" id="carousel-slide3">
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </div>
      </div>
      <div class="carousel-item" >
      <img src="img\orchard3.jpg" class="d-block w-100" alt="..." id="carousel-slide4">
        <div class="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>
</div><!-- </div> Container - End -->
<div class="col-lg-1"></div><!-- </div> Container - End -->
</div><!--Row End-->
<br>
<h1>A little bit of Somerset</h1>
<div class="row">
<div class="col-lg-2"></div><!-- </div> Container - End -->
<div class="col-lg-8">
<div class="card mb-3" style="max-width: 1200px;" id="about_card">
  <div class="row no-gutters">
    <div class="col-md-5" id="history_image">
      <!--<img src="" class="card-img" alt="..." id="category_image">-->
    </div>
    <div class="col-md-7">
      <div class="card-body">
        <h5 class="card-title" id="history_category_title">Rooted in Somerset...</h5>
        <p class="card-text">Orchard Pig's home in West Bradley Orchards is well and truely rooted in Somerset's
                             cider-making history, dating back to the 1850s and W.T Allen's award winning Somerset
                             cider...and Orchard Pig have carried on that fine tradition</p>
      </div>
    </div>
  </div>
</div>
</div><!-- </div> Container - End -->
<div class="col-lg-3"></div><!-- </div> Container - End -->
<div>

</div><!--Section End-->
 
  </main>    
-->
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
<script src="main.js"></script>
  </body>

</html>