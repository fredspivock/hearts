import { CardType } from "./card-type";
import { Suit } from "./suit";

export class Card {
    private cardSuit: Suit;
    private cardType: CardType;

    constructor(suit: Suit, cardType: CardType) {
        this.cardSuit = suit;
        this.cardType = cardType;
    }

    //suit getters
    get suit(): Suit {
        return this.cardSuit;
    }

    get suitName(): string {
        return this.cardSuit.name;
    }

    get suitKey(): string {
        return this.cardSuit.key;
    }


    //cardType getters
    get type(): CardType {
        return this.cardType;
    }

    get cardTypeName(): string {
        return this.cardType.name
    }

    get typeValue(): number {
        return this.cardType.value;
    }

    get typeSymbol(): string {
        return this.cardType.symbol;
    }

    //get combined card info
    get face(): string {
        return this.cardType.symbol + this.cardSuit.key;
    }

    get cardString(): string {
        return this.cardType.name + ' of ' + this.cardSuit.name + 's'
    }
}
