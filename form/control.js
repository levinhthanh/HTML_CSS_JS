function uploadAvatar(element) {
    var img = element.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onloadend = function () {
            $("#avatar").attr("src", reader.result);
        } 
}

$().ready(function(){
    $("#validatedForm").validate({
        rules:{
            fullname: {
                required: true,
                minlength: 2
            },
            birthday: "required",
            email: {
                required: true,
                email: true
            },
            password:{
                required: true,
                minlength: 8
            },
            password_confirm:{
                required:true,
                minlength: 8,
                equalTo: "#password"
            },
            avatar: "required"
        },
        messages:{
            fullname: {
                required: "Bạn chưa nhập tên !",
                minlength: "Tên phải ít nhất 2 ký tự"
            },
            birthday: "Bạn chưa chọn ngày sinh",
            email: {
                required: "Bạn chưa nhập email !",
                email: "Email chưa đúng định dạng"
            },
            password:{
                required: "Bạn chưa nhập mật khẩu !",
                minlength: "Mật khẩu phải từ 8 ký tự trở lên !"
            },
            password_confirm:{
                required:"Bạn chưa xác nhận mật khẩu !",
                minlength: "Mật khẩu xác nhận phải từ 8 ký tự trở lên !",
                equalTo: "Mật khẩu xác nhận không khớp !"
            },
            avatar: "Bạn chưa chọn ảnh đại diện !"
        }
    })
});