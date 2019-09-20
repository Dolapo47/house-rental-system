$('#edit-submit').click(e => {
    alert('dfkbdsfjkfdskjhdf')
    let room = $('#edit-rooms').val();
    let type = $('#edit-type').val();
    let bathroom = $('#edit-bathrooms').val();
    let address = $('#edit-address').val();
    let price = $('#edit-price').val();

    let id = localStorage.getItem('id');
    let room = $('#edit-rooms').val();
    let type = $('#edit-type').val();
    let bathroom = $('#edit-bathrooms').val();
    let address = $('#edit-address').val();
    let price = $('#edit-price').val();

    $.ajax({
        url: `http://localhost:3000/houses/${id}`,
        method: 'put',
        data: {
            no_of_rooms: room, type, no_of_bathrooms: bathroom, address, price
        }
    })
}).done((e) =>{
    window.location.redirect('../dashboard.html');
})