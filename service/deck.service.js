import { Card } from "../class/card";


export class DeckService {
    SUITS =  [
        {key: 'd', name: 'diamond'},
        {key: 's', name: 'spade'},
        {key: 'h', name: 'heart'},
        {key: 'c', name: 'club'}
    ];

    CARD_TYPES = [
        {symbol: 'A', name:"ace", value: 1},
        {symbol: '2', name: "two", value: 2},
        {symbol: '3', name: "three", value: 3},
        {symbol: '4', name: "four", value: 4},
        {symbol: '5', name: "five", value: 5},
        {symbol: '6', name: "six", value: 6},
        {symbol: '7', name: "seven", value: 7},
        {symbol: '8', name: "eight", value: 8},
        {symbol: '9', name: "nine", value: 9},
        {symbol: '10', name: "ten", value: 10},
        {symbol: 'J', name: "jack", value: 11},
        {symbol: 'Q', name: "queen", value: 12},
        {symbol: 'K', name: "king", value: 13}
    ];

    SPECIAL_CARDS = {
        joker: {cardType: {symbol: 'JK', name: 'joker', value: '14'}, suit: null}
    };

    getDecks(specialCards = null, numberOfDecks = 1) {
        let decks = [];

        if(numberOfDecks < 1 || numberOfDecks > 100) {
            console.error();
            return;
        }

        for (let i = 0; i < numberOfDecks; i++) {
            decks.concat(buildDeck(specialCards));
        }
        return decks;
    }

    shuffle(decks) {

    }

    buildDeck(specialCards) {
        let deck = [];
        for (let suit of this.SUITS) {
            for (let cardType of this.CARD_TYPES) {
                deck.push(new Card(cardType, suit))
            }
        }

        if(specialCards) {
            for (let specialCard of specialCards) {
                let c = this.SPECIAL_CARDS[specialCard];
                deck.push(new Card (c.cardType, c.suit))
            }
        }

        return deck;
    }

}