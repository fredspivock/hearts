/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__card_card__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant_deck_constant__ = __webpack_require__(2);


class Deck {
    constructor(numberOfDecks = 1, numOfJokers = 0) {
        this.decks = this.createDecks(numberOfDecks, numOfJokers);
        this.shuffle();
    }
    get cards() {
        return this.decks;
    }
    draw(numberOfCards = 1, from = 'top') {
        if (numberOfCards < 1 || numberOfCards > this.decks.length) {
            console.error();
            return;
        }
        let cards = [];
        for (let i = 0; i < numberOfCards; i++) {
            if (from === 'top') {
                cards.push(this.decks.pop());
            }
            else if (from === 'bottom') {
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
    inspect(numberOfCards = 1, from = 'top') {
        if (numberOfCards < 1 || numberOfCards > this.decks.length) {
            console.error();
            return;
        }
        let cards = [];
        let copyOfDeck = [...this.decks];
        for (let i = 0; i < numberOfCards; i++) {
            if (from === 'top') {
                cards.push(this.decks[i]);
            }
            else if (from === 'bottom') {
                cards.push(this.decks[this.decks.length - 1]);
            }
            else {
                let randomCardIndex = Math.floor(Math.random() * this.decks.length);
                cards.push(copyOfDeck.splice(randomCardIndex, 1)[0]);
            }
        }
        return cards;
    }
    createDecks(numberOfDecks = 1, numJoker = 0) {
        let decks = [];
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
        let copy = [], index;
        while (this.decks.length > 0) {
            index = Math.floor(Math.random() * this.decks.length);
            copy.push(this.decks.splice(index, 1)[0]);
        }
        this.decks.push(...copy);
        return this.decks;
    }
    buildDeck(numJoker) {
        let deck = [];
        for (let suit of __WEBPACK_IMPORTED_MODULE_1__constant_deck_constant__["c" /* SUITS */]) {
            for (let cardType of __WEBPACK_IMPORTED_MODULE_1__constant_deck_constant__["a" /* CARD_TYPES */]) {
                deck.push(new __WEBPACK_IMPORTED_MODULE_0__card_card__["a" /* Card */](suit, cardType));
            }
        }
        for (let i = 0; i < numJoker; i++) {
            deck.push(new __WEBPACK_IMPORTED_MODULE_0__card_card__["a" /* Card */](__WEBPACK_IMPORTED_MODULE_1__constant_deck_constant__["b" /* JOKER */].suit, __WEBPACK_IMPORTED_MODULE_1__constant_deck_constant__["b" /* JOKER */].cardType));
        }
        return deck;
    }
}
/* harmony export (immutable) */ __webpack_exports__["Deck"] = Deck;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Card {
    constructor(suit, cardType) {
        this.cardSuit = suit;
        this.cardType = cardType;
    }
    //suit getters
    get suit() {
        return this.cardSuit;
    }
    get suitName() {
        return this.cardSuit.name;
    }
    get suitKey() {
        return this.cardSuit.key;
    }
    //cardType getters
    get type() {
        return this.cardType;
    }
    get cardTypeName() {
        return this.cardType.name;
    }
    get typeValue() {
        return this.cardType.value;
    }
    get typeSymbol() {
        return this.cardType.symbol;
    }
    //get combined card info
    get face() {
        return this.cardType.symbol + this.cardSuit.key;
    }
    get cardString() {
        return this.cardType.name + ' of ' + this.cardSuit.name + 's';
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Card;



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const SUITS = [
    { key: 'd', name: 'diamond' },
    { key: 's', name: 'spade' },
    { key: 'h', name: 'heart' },
    { key: 'c', name: 'club' }
];
/* harmony export (immutable) */ __webpack_exports__["c"] = SUITS;

const CARD_TYPES = [
    { symbol: 'A', name: "ace", value: 1 },
    { symbol: '2', name: "two", value: 2 },
    { symbol: '3', name: "three", value: 3 },
    { symbol: '4', name: "four", value: 4 },
    { symbol: '5', name: "five", value: 5 },
    { symbol: '6', name: "six", value: 6 },
    { symbol: '7', name: "seven", value: 7 },
    { symbol: '8', name: "eight", value: 8 },
    { symbol: '9', name: "nine", value: 9 },
    { symbol: '10', name: "ten", value: 10 },
    { symbol: 'J', name: "jack", value: 11 },
    { symbol: 'Q', name: "queen", value: 12 },
    { symbol: 'K', name: "king", value: 13 }
];
/* harmony export (immutable) */ __webpack_exports__["a"] = CARD_TYPES;

const JOKER = { cardType: { symbol: 'JK', name: 'joker', value: 14 },
    suit: { key: null, name: null } };
/* harmony export (immutable) */ __webpack_exports__["b"] = JOKER;



/***/ })
/******/ ]);