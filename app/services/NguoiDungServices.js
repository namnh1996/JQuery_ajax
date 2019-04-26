function NguoiDungServices() {
    this.DSND = [];
    this.layDanhSachNguoiDung = function () {
        $.ajax({
            url: "http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachNguoiDung",
            type: "GET"
        })
            .done(function (result) {
                this.DSND = result;
                taoBang(this.DSND);
            })
            .fail(function (eer) {
                console.log(err);
            })

    }
    this.themNguoiDung = function () {
        $.ajax({
            url: "http://svcy.myclass.vn/api/QuanLyTrungTam/ThemNguoiDung",
            type: "POST"
        })
            .done(function (result) {
                if(result === "tai khoan da ton tai !"){
                    alert(result);
                }
                else{
                    location.reload;
                }
            })
            .fail(function (eer) {
                console.log(err);
            })

    }

    this.xoaNguoiDung = function () {
        $.ajax({
            url: `http://svcy.myclass.vn/api/QuanLyTrungTam/XoaNguoiDung/${taikhoan}`,
            type: "DELETE"
        })
            .done(function (result) {
                location.reload;
            })
            .fail(function (eer) {
                console.log(err);
            })

    }
    this.timKiemNguoiDung = function(chuoiTimKiem){
        var mangTimKiem = [];
        var dsnd = JSOM.parse(localStorage.getItem("danhSachNguoiDung"));
        dsnd.map(function(item){
            if(item.TaiKhoan.tolowerCase().indexOf(chuoiTimKiem.tolowerCase()) >-1 ){
                mangTimKiem.push(item);
            }
        })
        return mangTimKiem;

    }
    

}
function taoBang(danhSachNguoiDung) {
    var tblBody = "";

    danhSachNguoiDung.map(function (item,index) {
        tblBody += `
        <tr>
            <td>${index + 1}</td>   
            <td>${item.TaiKhoan}</td>
            <td>${item.MatKhau}</td>
            <td>${item.HoTen}</td>
            <td>${item.Email}</td>
            <td>${item.SoDT}</td>
            <td>${item.TenLoaiNguoiDung}</td>
            <td>
                <button class="btn btn-success btnSua" data-toggle="modal" data-target="#myModal"> Sua </button>
                <button class="btn btn-danger btnXoa"> Xoa </button>
            </td>
         </tr>
        `
    });

    // for(var i = 0 ;i < danhSachNguoiDung.length; i++){
    //     // console.log(nguoiDungServices.DSND);
    //     tblBody += `
    //     <tr>
    //         <td>${i}</td>
    //         <td>${danhSachNguoiDung[i].TaiKhoan}</td>
    //         <td>${danhSachNguoiDung[i].MatKhau}</td>
    //         <td>${danhSachNguoiDung[i].HoTen}</td>
    //         <td>${danhSachNguoiDung[i].Email}</td>
    //         <td>${danhSachNguoiDung[i].SoDT}</td>
    //         <td>${danhSachNguoiDung[i].TenLoaiNguoiDung}</td>
    //      </tr>
    //     `
    // }
    $("#tblDanhSachNguoiDung").html(tblBody);
}