import {Card} from "../card/card";
import {SUITS, CARD_TYPES, JOKER} from '../constant/deck.constant'


export class DeckService {

    getDecks(numberOfDecks: number = 1, numJoker: number = 0) {
        let decks: Card[] = [];

        if (numberOfDecks < 1 || numberOfDecks > 100) {
            console.error();
            return;
        }

        for (let i = 0; i < numberOfDecks; i++) {
            decks = decks.concat(this.buildDeck(numJoker));
        }
        return decks;
    }

    shuffle(decks: Card[]) {

    }

    buildDeck(numJoker: number) {
        let deck = [];
        for (let suit of SUITS) {
            for (let cardType of CARD_TYPES) {
                deck.push(new Card(suit, cardType))
            }
        }

        for (let i = 0; i < numJoker; i++) {
            deck.push(new Card(JOKER.suit, JOKER.cardType))
        }

        return deck;
    }

}