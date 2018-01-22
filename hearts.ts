import {Card} from "./card/card";
import {SUITS, CARD_TYPES, JOKER} from './constant/deck.constant'


export class Deck {

    private decks: Card[];

    constructor(numberOfDecks: number = 1, numOfJokers: number = 0) {
        this.decks = this.createDecks(numberOfDecks, numOfJokers);
        this.shuffle();
    }

    get cards() {
        return this.decks;
    }

    draw(numberOfCards: number = 1, from: 'top' | 'bottom' | 'random' = 'top'): Card[] {
        if(numberOfCards < 1 || numberOfCards > this.decks.length) {
            console.error();
            return;
        }

        let cards: Card[] = [];

        for (let i = 0; i < numberOfCards; i++) {
            if(from === 'top') {
                cards.push(this.decks.pop())
            }
            else if(from === 'bottom') {
                cards.push(this.decks.shift());
            }
            else {
                let randomCardIndex = Math.floor(Math.random() * this.decks.length);
                cards.push(this.decks.splice(randomCardIndex, 1)[0]);
            }
        }
        return cards;
    }

    //Look at cards
    inspect(numberOfCards:number = 1, from: 'top' | 'bottom' | 'random' = 'top'): Card[] {
        if(numberOfCards < 1 || numberOfCards > this.decks.length) {
            console.error();
            return;
        }

        let cards: Card[] = [];
        let copyOfDeck: Card[] = [...this.decks];

        for (let i = 0; i < numberOfCards; i++) {
            if(from === 'top') {
                cards.push(this.decks[i])
            }
            else if(from === 'bottom') {
                cards.push(this.decks[this.decks.length - 1]);
            }
            else {
                let randomCardIndex = Math.floor(Math.random() * this.decks.length);
                cards.push(copyOfDeck.splice(randomCardIndex, 1)[0]);
            }
        }
        return cards;
    }

    private createDecks(numberOfDecks: number = 1, numJoker: number = 0) {
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
        this.decks.push(...copy);

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