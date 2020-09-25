var products = [
{
    "name" : "Nước hoa X-Men Phiên Bản Đặc Biệt 50ml",
    "price" : "259.000 ₫",
    "image" :  "products/xmen-fire-50ml-nen-dep-xinh.jpg"
 },
 {
    "name" : "Trọn bộ 5 món X-men phiên bản đặc biệt",
    "price" : "469.000 ₫",
    "image" :  "products/5_chai_xmen_mobile-e1592812659551.png"
 },
 {
    "name" : "Xịt X-Men Phiên Bản Đặc Biệt 100ml",
    "price" : "99.000 ₫",
    "image" :  "products/eOEBtL_simg_de2fe0_500x500_maxb.png"
 },
 {
    "name" : "Dầu gội X-Men For Boss Intense - Hương trầm mạnh mẽ 650g",
    "price" : "155.000 ₫",
    "image" :  "products/df176fb191ee6459190e3a59ac53d1b6.jpeg"
 },
 {
    "name" : "Sáp Vuốt Tóc Kiểu Tự Nhiên X-Men Freestyle (70g)",
    "price" : "72.000 ₫",
    "image" :  "products/adcb7eadc1c39b10be7c75063a22f1f2.jpg"
 },
 {
    "name" : "Sữa tắm X-Men Phiên Bản Đặc Biệt 650g",
    "price" : "174.988 ₫",
    "image" :  "products/sua-tam-xmen-650g-dep-xinh.jpg"
 },

];

window.onload = function load_products(){
    let data_products = "";
    for(let i = 0; i < products.length; i++){
        data_products += `
        <div class="grid-item">
            <img class="product_image" src="`+products[i].image+`" alt="">
            <a class="product_name" href="#">`+products[i].name+`</a>
            <p class="product_price">`+products[i].price+`</p>
        </div>
        `;
    }
    document.getElementById('product_list').innerHTML = data_products;
}