// alert('yippee');
$('#submit').click((e)=>{
    e.preventDefault();
    let email = $('#email').val();
    let name = $('#name').val();
    let address = $('#address').val();
    let age = Number($('#age').val());
    let password = $('#password').val();
    $.ajax({
        url: 'http://localhost:3000/users',
        method: 'post',
        data: {
            email, name, address, age, password, isAdmin: false
        }
    }).done((e) =>{
        if(e.email !== email){
            localStorage.setItem('email', email);
            window.location.replace("../dashboard.html");
            $('#email').val('');
            $('#name').val('');
            $('#address').val('');
            $('#age').val('');
            $('#password').val('');
        }else{
            alert('Authentication Failed');
            window.location.reload();
        }
    });
}); 