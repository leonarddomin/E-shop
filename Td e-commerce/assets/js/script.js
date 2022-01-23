// Création d'une fonction permettant de générer un code html avec le bon nombre d'étoiles
let getStar = (vote) => {
  vote = parseInt(vote);
  let starVote = vote / 2;
  let starFill = "";
  for (i = 0; i < 5; i++) {
    if (i < starVote) {
      starFill += `<i class="fas fa-star"></i>`;
    } else {
      starFill += `<i class="far fa-star"></i>`;
    }
  }
  return starFill;
};

// Récupération du fichier en local (attention, il faut un vhost / un live server)
fetch("assets/data/stock.json")
  .then((response) => response.json())
  .then((jsonStock) => {
    jsonStock.results.map((stock) => {
      let id = stock.id;
      let title = stock.original_title;
      let price = stock.price;
      let image = stock.image;
      let vote = stock.vote_average;
      let star = getStar(vote); // On fait appel à une fonction qui va retourner un contenu html avec les étoiles

      let stockElToInject = `
        <div class='col-12 col-sm-6 col-xl-4 mb-3 px-4'>
            <div class='row ratio-1x1 bg-white border-perso'>
              <img class='img-fluid' src='${image}' />
            </div>
            <div class='row pl-2'>
              <h5 class="pt-3 pt-md-0">${title}</h5>
              <p class='text'>${price}</p>
              <p>${star}</p>
              <button type="button" class="btn btn-success" id="product_${id}">Acheter</button>
            </div>
        </div>
      `;
      document.getElementById("vitrine").innerHTML += stockElToInject;
    });
    add();
  });
// Ajout au panier //
function add() {
  document.querySelector('.btn').addEventListener("click", () => {
        let cart =`
        <table class="table">
        <thead>
          <tr>
            <th scope="col">Liste</th>
            <th scope="col">Article</th>
            <th scope="col">Quantité</th>
            <th scope="col">Prix</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>${title}</td>
            <td>1</td>
            <td>${price}</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>${title}</td>
            <td>1</td>
            <td>${price}</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>${title}</td>
            <td>1</td>
            <td>${price}</td>
          </tr>
        </tbody>
      </table>`
  });
  
}
