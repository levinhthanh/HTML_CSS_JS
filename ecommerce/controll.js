let images = ['banner1.jpg', 'banner2.jpg', 'banner3.jpg', 'banner4.jpg'];

function change_banner(direct){
          current = document.getElementById('image_banner').src;
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

var jump = 0;

function change_jump(){
    jump += 1;
    if(jump > 14){
        jump = 0;
    }
    load_products_2();
}

function load_products_2(){
    $('#product_list_2').html("");
    $.ajax({
        url: "http://localhost:3000/products",
        type: "get"
    }).fail(function(result){
          console.log(result);
    }).done(function(result){
        let count = 0;
        for(let i = jump; i < result.length; i++){
            if(count < 12){
                $('#product_list_2').append(
                    `
                    <div class="grid-item_2">
                    <img class="image_product" src="`+ result[i].image+`" alt="">
                    <p class="name_product">`+ result[i].name +`</p>
                    <p class="price_product">`+ result[i].price +`</p>
                </div>
                    `
                );
                count++;
            }
            
        }
        for(let i = 0; i < jump; i++){
            if(count < 12){
                $('#product_list_2').append(
                    `
                    <div class="grid-item_2">
                    <img class="image_product" src="`+ result[i].image+`" alt="">
                    <p class="name_product">`+ result[i].name +`</p>
                    <p class="price_product">`+ result[i].price +`</p>
                </div>
                    `
                );
                count++;
            } 
        }
    });
}