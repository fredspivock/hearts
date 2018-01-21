import {Card} from "../card/card";
import {SUITS, CARD_TYPES, JOKER} from '../constant/deck.constant'


export class DeckService {

    private decks: Card[];

    constructor(numberOfDecks: number = 1, numJoker: number = 0) {
        this.decks = this.getDecks(numberOfDecks, numJoker);
    }

    get deck() {
        return this.decks
    }

    private getDecks(numberOfDecks: number = 1, numJoker: number = 0) {
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

    shuffle() {
        let copy: Card[] = [],
        index: number;
        while (this.decks.length > 0) {
            index = Math.floor(Math.random() * this.decks.length);
            copy.push(this.decks.splice(index, 1)[0]);
        }
        this.decks = copy;

        return this.decks;
    }

    private buildDeck(numJoker: number) {
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