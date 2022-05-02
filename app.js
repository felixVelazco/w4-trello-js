require("dotenv").config();

if(!process.env.TOKEN && !process.env.KEY){
  throw new Error("No hay configuración con API key y/o token");
}

let Trello = require("trello");
let trello = new Trello(process.env.KEY, process.env.TOKEN);

let cardTitle = `Card nueva ${new Date()}`;

trello.addCard(cardTitle, "LaunchX Card Description", "626dea5a90d6d6789af81917",
  function(error, trelloCard){
    if(error){
      console.log("Could not add card", error);
    }
    else{
      console.log("Added card", trelloCard);
    }
  }
);
