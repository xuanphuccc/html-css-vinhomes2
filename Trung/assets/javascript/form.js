var inputName = document.getElementById('input__name')
var inputPassword = document.getElementById('input--password')

function dangnhap(a) {
    if (inputName.value == '' || inputPassword.value == '') {
        alert('Email hoặc mật khẩu không hợp lệ')
    } else {

    }
}


var inputPasswordDK = document.getElementById('input__password--dk')
var Confirm = document.getElementById('confirm')

var inputEmail = document.getElementById('input__email')
var inputName = document.getElementById('input__name')
var inputSdt = document.getElementById('input__sdt')


function dangki(a) {
    console.log(Confirm)
    if (inputPasswordDK.value != Confirm.value) {
        alert('Mật khẩu và xác nhận mật khẩu không trùng nhau!')
    }
    if (inputPasswordDK.value != Confirm.value) {
        alert('Mật khẩu và xác nhận mật khẩu không trùng nhau!')
    }
    if (inputEmail.value == '' || inputPassword.value == '' || inputName.value == '' || inputSdt.value == '' || Confirm.value == '') {
        alert('Chưa nhập đầy đủ thông tin!')
    }
}