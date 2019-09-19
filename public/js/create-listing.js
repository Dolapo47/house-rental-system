$('#submit').click((e) => {
    e.preventDefault();
    let rooms = $('#rooms').val();
    let type = $('#type').val();
    let bathrooms = $('#bathrooms').val();
    let address = $('#address').val();
    let price = $('#price').val();
    $.ajax({
        url: 'http://localhost:3000/houses',
        method: 'post',
        data: {
            no_of_rooms: rooms, type, no_of_bathrooms: bathrooms, address, price
        }
    }).done((e) => {
        $('.card-container').append(
            `<div class="card" style="width: 18rem;">
            <div class="img-con">
                <img src="./images/automart4.jpg" class="card-img-top" alt="images">
            </div>
            <div class="card-body">
            <span><p class="card-text">House Type: ${e.type}</p></span>
              <span><p class="card-text">Rooms: ${e.no_of_rooms}</p></span>
              <span><p class="card-text">Bathrooms: ${e.no_of_bathrooms}</p></span>
              <span><p class="card-text">Address: ${e.address}</p></span>
              <span><p class="card-text">Price: ${e.price}</p></span>
              <a href="#" class="btn btn-info">Rent</a>
              <a href="#" class="btn btn-info">Edit</a>
              <a href="#" class="btn btn-info delete-btn">Delete</a>
            </div>`
        )
        window.location.replace("../dashboard.html");
    })
})