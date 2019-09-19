$.ajax({
    url: 'http://localhost:3000/houses',
    method: 'get',
}).done((e) => {
    for(let i = 0; i < e.length; i++){
        $('.card-container').append(
            `<div class="card" style="width: 18rem;">
            <div class="img-con">
                <img src="./images/automart4.jpg" class="card-img-top" alt="images">
            </div>
            <div class="card-body">
            <span><p class="card-text">House Type: ${e[i].type}</p></span>
              <span><p class="card-text">Rooms: ${e[i].no_of_rooms}</p></span>
              <span><p class="card-text">Bathrooms: ${e[i].no_of_bathrooms}</p></span>
              <span><p class="card-text">Address: ${e[i].address}</p></span>
              <span><p class="card-text">Price: ${e[i].price}</p></span>
              <button class="btn btn-info buy-btn" id="buy-${e[i].id}">Buy</button>
              <button class="edit-btn" id="edit-${e[i].id}">Edit</button>
              <button class="delete-btn" id="del-${e[i].id}">Delete</button>
            </div>`
        )
    }
    $('.delete-btn').on('click',(e)=>{
        let id = e.target.id.split('del-').join('');
        $.ajax({
            url:`http://localhost:3000/houses/${id}`,
            method: 'delete'
        }).done((e)=>{
            window.location.replace('http://localhost:3000/dashboard.html');
        })
    })
    $('.edit-btn').click(e => {
        let id = e.target.id.split('edit-').join('');
        localStorage.setItem('id', id);
        window.location.replace('http://localhost:3000/edit-listing.html');
    })

    $('.buy-btn').click(e => {
        let id = e.target.id.split('buy-').join('');
        localStorage.setItem("buyId", id);
        window.location.replace('http://localhost:3000/buy-listing.html');
    })
})

