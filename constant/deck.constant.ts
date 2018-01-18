import {Suit} from "../card/suit";
import {CardType} from "../card/card-type";

export const SUITS: Suit[] = [
    {key: 'd', name: 'diamond'},
    {key: 's', name: 'spade'},
    {key: 'h', name: 'heart'},
    {key: 'c', name: 'club'}
];

export const CARD_TYPES: CardType[] = [
    {symbol: 'A', name: "ace", value: 1},
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

export const JOKER: {cardType: CardType, suit: Suit} = {cardType:
        {symbol: 'JK', name: 'joker', value: 14},
        suit: {key: null, name: null}};

