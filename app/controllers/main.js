$(document).ready(function(){
    var nguoiDungServices = new NguoiDungServices();
    layDanhSachNguoiDung();

    function getInput(title, btnTitle, btnID){
        $(".modal-title").html("title");
        var footer = `
            <button id="${btnID}" class="btn btn-success">${btnTitle}</button>
            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        
        `
        $(".modal-footer").html(footer);
    }

    $("#btnThemNguoiDung").click(function(){
        // $(".modal-title").html("Them Nguoi Dung");
        // var footer = `
        //     <button id="btnThem" class="btn btn-success">Them</button>
        //     <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        
        // `
        // $(".modal-footer").html(footer);
        getInput("Them nguoi dung","Them", "btnThem");
    });
    $("body").delegate(".btnSua", "click", function(){
        // $(".modal-title").html("Them Nguoi Dung");
        // var footer = `
        //     <button id="btnThem" class="btn btn-success">Cap Nhat</button>
        //     <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        
        // `
        // $(".modal-footer").html(footer);
        getInput("Them nguoi dung","Cap Nhat", "btnCapNhat");
    })

    $("body").delegate(".btnXoa", "click", function(){
        var taiKhoan = $(this).data('taiKhoan');
        nguoiDungServices.xoaNguoiDung(taiKhoan);
    })
    $("body").delegate(".btnThem", "click", function(){
        var taiKhoan = $("#HoTen").val();
        var taiKhoan = $("#MatKhau").val();
        var taiKhoan = $("#Email").val();
        var taiKhoan = $("#SoDienThoai").val();
        var taiKhoan = $("#LoaiNguoiDung").val();

        var nguoiDung = new NguoiDung (taiKHoan,matkhau,hoTen,email,soDT,loaiNguoiDung);

    })
    $("#txtTimKiem").keyup(function(){
        var mangTimKiem = [];
        var taiKhoan = $("txtTimKiem").val();
        mangTimKiem
    })

    function layDanhSachNguoiDung(){
        nguoiDungServices.layDanhSachNguoiDung();
    }
});
