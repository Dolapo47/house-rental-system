$('#login').click((e)=>{
    e.preventDefault();
    let email = $('#email').val();
    let password = $('#password').val();
    $.ajax({
        url: `http://localhost:3000/users`,
        method: 'get',
    }).done((e) => {
        for(let i = 0; i < e.length; i++){
            if(e[i].email === email && e[i].password === password){
                localStorage.setItem('email', email);
                localStorage.setItem('id', id)
                window.location.replace("../dashboard.html");
                $('#email').val('');
                $('#password').val('');
            }else {
                alert('Authentication Failed');
                window.location.reload();
            }
        }
    })
})