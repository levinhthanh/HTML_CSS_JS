let images = ['banner1.jpg', 'banner2.jpg', 'banner3.jpg', 'banner4.jpg'];

function change_banner(direct){
          current = document.getElementById('image_banner').src;
          console.log(current);
          index = 1;
          for(i = 0; i < images.length; i++){
               value = "http://127.0.0.1:5500/ecommerce/" + images[i];
               if(current == value){
                   index = i;
               }
          }
          if(direct == 'previous'){
            if(index + 1 == images.length){
                index = 0;
            }else{
              index = index + 1;
              }
          };
          if(direct == 'next'){
            if(index - 1 < 0){
                index = images.length - 1;
            }else{
              index = index - 1;
              }
          }     
          document.getElementById('image_banner').src = images[index];
}
setInterval(function(){ 
    change_banner('next');
}, 3000);