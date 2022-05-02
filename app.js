require("dotenv").config();

if(!process.env.TOKEN && !process.env.KEY){
  throw new Error("No hay configuración con API key y/o token");
}

let Trello = require("trello");
let trello = new Trello(process.env.KEY, process.env.TOKEN);

// let cardTitle = `Card nueva ${new Date()}`;

// trello.addCard(cardTitle, "LaunchX Card Description", "626dea5a90d6d6789af81917",
//   function(error, trelloCard){
//     if(error){
//       console.log("Could not add card", error);
//     }
//     else{
//       console.log("Added card", trelloCard);
//     }
//   }
// );

// trello.getListsOnBoard("626dea5a90d6d6789af81916", "Ver algo",
//   function(error, trelloList){
//     if(error){
//       console.log("Could not find any list", error);
//     }
//     else{
//       console.log("Lists", trelloList);
//     }
//   }
//   );
let listId;
let listsPromise = trello.getListsOnBoard("626dea5a90d6d6789af81916", "Ver listas en board");
listsPromise.then((list) => {
  listId = list[0];
  createNewCard(`Nueva tarjeta ${new Date()}`, "Aqui va la descripcion", list[0].id)
  console.log(listId.id);  
})

function createNewCard(nameCard, description, listId){
  let createCard = trello.addCard(nameCard, description, listId);
  createCard.then((card) => {
    console.log("nueva Card creada!");
  })
}
