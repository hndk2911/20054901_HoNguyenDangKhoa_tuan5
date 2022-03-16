function KiemTraTenDN() {
    let re = /^[a-z]/;
    let chuoi = document.getElementById('txtDN').value.trim()
    if (re.test(chuoi) == true) {
        tendn.innerText = " * ";
        return true;
    } else {
        tendn.innerText = " * bắt buộc, bắt đầu bằng ký tự";
        return false;
    }
}

function KiemTraMK() {
    let re = /(?=.*\d).{6,}/;
    if (re.test(document.getElementById('txtMK').value.trim()) == false) {
        mk.innerText = " * phải có chữ, số, ít nhất 6 ký tự";
        return false;
    } else {
        mk.innerText = "*";
        return true;
    }
}

function KiemTraXNMK() {
    if (document.getElementById('txtXNMK').value != document.getElementById('txtMK').value) {
        xnmk.innerText = " * Mật khẩu không trùng khớp";
        return false;
    } else {
        xnmk.innerText = "*";
        return true;
    }
}

function KiemTraNgaySinh() {
    var ns = new Date(document.getElementById('txtNS').value);
    var today = new Date();
    if (eval(today.getFullYear() - ns.getFullYear()) <= 10) {
        ngaysinh.innerText = " tuổi phải > 10";
        return false;
    } else {
        ngaysinh.innerText = "";
        return true;
    }
}

function Submitform() {
    if (KiemTraTenDN() == false || KiemTraMK() == false || KiemTraXNMK() == false) {
        arlet("Bạn chưa nhập đầy đủ và đúng thông tin!");
    } else {
        var tt1 = document.getElementById('txtName').value;
        var tt2 = document.getElementById('txtNS').value;
        var w = open("FormValidation_info.html", "Ketqua");
        w.document.write("<B>THONG TIN CA NHAN </B> <br>");
        w.document.write("Ho ten:" + tt1 + "<Br>");
        w.document.write("Nam sinh:" + tt2 + "<Br>");
        w.document.write("Dia chi: " + document.getElementById('txtDC').value + "<br>");
        w.document.write("Dien thoai: " + document.getElementById('txtDT').value + "<br>");
        w.document.write("Email: " + document.getElementById('txtEmail').value + "<br>");
    }
}