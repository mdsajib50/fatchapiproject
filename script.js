const API = " https://picsum.photos/v2/list";
const cards = document.querySelector(".cards");

fetch(API)
    .then(res => res.json())
    .then(data => {
        data.map(item => {
            const { id, author, download_url, url, height, width } = item;

            cards.innerHTML+=`<li class="card-item" id="${id}">
                <figure>
                    <img src="${download_url}" alt="img" srcset="" class="img-fluid" width="120px">
                </figure>
                <h2>Author ${author}</h2>
                <p>Size ${height} X ${width}</p>
                <a href="${url}" class="btn">Download</a>
            </li>`
            console.log(item);
            
        })
    })
    .catch(error=>console.error(`Something want wrong ${error}`)
    )
