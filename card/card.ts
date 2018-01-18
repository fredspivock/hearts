import { CardType } from "./card-type";
import { Suit } from "./suit";

export class Card {
    constructor(suit: Suit, cardType: CardType) {
        this.suit = suit;
        this.cardType = cardType;
    }

    public cardType: CardType;
    public suit: Suit;
}