const id = localStorage.getItem('buyId');
const userId = localStorage.getItem('id')

$.ajax({
    url: `http://localhost:3000/houses/${id}`,
    method: 'get',
}).done((e) => {
    $('#rent').append(`
    <div class="image-container"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nibh turpis, euismod a nunc a, fermentum porttitor erat. Curabitur vel massa et leo bibendum dictum sit amet ut mi. Sed magna orci, egestas vel sagittis at, lobortis venenatis nisl. Fusce blandit, nisi et dignissim lobortis, tellus nisi finibus arcu, quis semper est tellus ac ante. Nam eu tempor erat, semper accumsan tellus. Nulla facilisi. Donec posuere efficitur massa eu blandit.</p>p></div>
    <div class="item-details"><img src="./images/automart4.jpg" alt="" srcset="" width= "500px" height="300px"></div>
    <div class="item-footer">
        <p>House Type: ${e.type}</p> <span><p>House Type: ${e.no_of_rooms}</p></span>
        <p>Number of bathrooms: ${e.no_of_bathrooms}</p> <span><p>Address: ${e.address}</p></span>
        <span><p>Price: ${e.price}</p></span>
        <button class="btn-primary rent-btn" id="transaction">Rent</button>
        <button class="btn-danger cancel-btn">Cancel</button>
    </div>`
    )
})

$("#transactions").click((e) => {
    $.ajax({
        url: `http://localhost:3000/transactions`,
        method: 'post',
        data: {
            userId, houseId: id
        }
    }).done((e) => {
        
    })
});