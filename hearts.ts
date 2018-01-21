import { DeckService } from "./service/deck.service";

let deckService = new DeckService();

console.log(deckService.shuffle(deckService.getDecks(1, 0)));