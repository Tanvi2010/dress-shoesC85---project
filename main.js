canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

dress_width=100;
dress_height=90;
dress_x=0;
dress_y=120;

shoes_width=100;
shoes_height=90;
shoes_x=0;
shoes_y=0;

background_image="pinkboutique.png";
dress_image="dress.jpg";
shoes_image="shoes.jpg";

if (shoes_x < 750) {
    console.log("Delivery status:Shoes not delivered");
    document.getElementById('game_statusS').innerHTML="Delivery status:Shoes not delivered";
}

if (dress_x < 750) {
    console.log("Delivery status:Dress not delivered");
    document.getElementById('game_status').innerHTML="Delivery status:Dress not delivered";
}

function add() {
  background_imagetag=new Image();
  background_imagetag.onload=uploadBackground;
  background_imagetag.src=background_image;
  
  dress_imagetag=new Image();
  dress_imagetag.onload=uploadDress;
  dress_imagetag.src=dress_image;

  shoes_imagetag=new Image();
  shoes_imagetag.onload=uploadShoes;
  shoes_imagetag.src=shoes_image;
}

function uploadBackground() {
    ctx.drawImage(background_imagetag,0,0,canvas.width,canvas.height);
}

function uploadDress() {
    ctx.drawImage( dress_imagetag, dress_x, dress_y, dress_width, dress_height);
}

function uploadShoes() {
    ctx.drawImage( shoes_imagetag, shoes_x, shoes_y, shoes_width, shoes_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e) {
    keypressed=e.keyCode;
    console.log(keypressed);
    if (keypressed=="37") {
        leftD();
        console.log("left");
    }

    if (keypressed=="38") {
        upD();
        console.log("up");
    }

    if (keypressed=="39") {
        rightD();
        console.log("right");
    }

    if (keypressed=="40") {
        downD();
        console.log("down");
    }



    if (keypressed=="65") {
        leftS();
        console.log("left");
    }

    if (keypressed=="87") {
        upS();
        console.log("up");
    }

    if (keypressed=="68") {
        rightS();
        console.log("right");
    }

    if (keypressed=="83") {
        downS();
        console.log("down");
    }

    if (dress_x >= 750) {
        console.log("Delivery status:Dress delivered");
        document.getElementById('game_status').innerHTML="Delivery status:Dress delivered";
    }

    if (dress_x < 750) {
        console.log("Delivery status:Dress not delivered");
        document.getElementById('game_status').innerHTML="Delivery status:Dress not delivered";
    }

    if (shoes_x >= 750) {
        console.log("Delivery status:Shoes delivered");
        document.getElementById('game_statusS').innerHTML="Delivery status:Shoes delivered";
    }

    if (shoes_x < 750) {
        console.log("Delivery status:Shoes not delivered");
        document.getElementById('game_statusS').innerHTML="Delivery status:Shoes not delivered";
    }
}

function upD() {
    if (dress_y >=0 ) {
        dress_y=dress_y-10; 
      console.log("when up arrow is pressed,x= " + dress_x+ ", y= " + dress_y);
      uploadBackground();
      uploadDress();
      uploadShoes();
    }  
  }
  
  function downD() {
      if (dress_y <=700 ) {
        dress_y=dress_y+10; 
        console.log("when up arrow is pressed,x= " + dress_x+ ", y= " + dress_y);
        uploadBackground();
        uploadDress();
        uploadShoes();
      }  
    }
  
    function leftD() {
      if (dress_x >=0 ) {
        dress_x=dress_x-10; 
        console.log("when up arrow is pressed,x= " + dress_x+ ", y= " + dress_y);
        uploadBackground();
        uploadDress();
        uploadShoes();
      }  
    }
  
    function rightD() {
      if (dress_x <=840 ) {
        dress_x=dress_x+10; 
        console.log("when up arrow is pressed,x= " + dress_x+ ", y= " + dress_y);
        uploadBackground();
        uploadDress();
        uploadShoes();
      }  
    }



    function upS() {
        if (shoes_y >=0 ) {
            shoes_y=shoes_y-10; 
          console.log("when up arrow is pressed,x= " + shoes_x+ ", y= " + shoes_y);
          uploadBackground();
          uploadShoes();
          uploadDress();
        }  
      }
      
      function downS() {
          if (shoes_y <=700 ) {
            shoes_y=shoes_y+10; 
            console.log("when up arrow is pressed,x= " + shoes_x+ ", y= " + shoes_y);
            uploadBackground();
            uploadShoes();
            uploadDress();
          }  
        }
      
        function leftS() {
          if (shoes_x >=0 ) {
            shoes_x=shoes_x-10; 
            console.log("when up arrow is pressed,x= " + shoes_x+ ", y= " + shoes_y);
            uploadBackground();
            uploadShoes();
            uploadDress();
          }  
        }
      
        function rightS() {
          if (shoes_x <=840 ) {
            shoes_x=shoes_x+10; 
            console.log("when up arrow is pressed,x= " + shoes_x+ ", y= " + shoes_y);
            uploadBackground();
            uploadShoes();
            uploadDress();
          }  
        }
  
  random_number=Math.floor(Math.random()*4);
  background_image=mars_image[random_number];
  console.log("backgroundimage=" + background_image);