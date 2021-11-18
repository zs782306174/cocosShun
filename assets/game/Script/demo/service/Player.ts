import Card from "./Card";
import Fetter from "./Fetter";
import GameService from "./GameService";

export default class Player {
    id: number;
    name: string;
    lv: number;
    //woods = [];
    coins: number
    cards: Card[] = [];
    waitCards: Card[] = [null, null, null, null, null];

    qualityArr
    fetters: Map<number, Fetter> = new Map<number, Fetter>();
   // gameService: GameService;

    size = 0;
   
    addFetters(card: Card) {
        for (const id of card.fetterIds) {
            this.fetters.get(id).add(card.id, card.cellIndex);
        }
    }
    removeFetters(card: Card) {
        for (const id of card.fetterIds) {
            this.fetters.get(id).reduce(card.id, card.cellIndex);
        }
    }

    combine(cards: Card[]) {
        let card = cards.pop();
        for (const iterator of cards) {
            this.removeFetters(iterator);
            this.cards[iterator.cellIndex] = null;
            if (!card.children) {
                card.children = [];
            }
            card.children.push(iterator);
            this.size--;
        }
        card.lv += 1;
        return card;
    }
    checkUpLevel(card: Card) {
        let arr = [];
        for (const other of this.cards) {

            if (other.id == card.id && other.lv == card.lv) {
                arr.push(other);
                if (arr.length >= 3) {
                    let card = this.combine(arr);
                    this.checkUpLevel(card);
                    break;
                }
            }
        }
    }

    
   
    removeCard(card: Card) {
        let pos = this.cards.indexOf(card);
        this.cards[pos] = null;
        if (pos >= 9) {
            this.removeFetters(card);
        }
        card.cellIndex = -1;
        this.size--;
    }
    addCard(index: number) {
        let pos = this.hasEmpty();
        let card = this.waitCards[index];
        if (pos != -1) {
            let index = this.waitCards.indexOf(card);
            this.waitCards[index] = null;
            this.cards[pos] = card;
            card.cellIndex = pos;
            this.size++;
            return true;
        }
        return false;
    }
    
    moveCard(card: Card, tagartPos) {
        //let tagartPos = x + 7 * y;
        let currentPos = card.cellIndex;
        let card2 = this.cards[tagartPos];
        if (card2) {
            this.cards[currentPos] = card2;
            card2.cellIndex = currentPos;
        }
        this.cards[tagartPos] = card;
        card.cellIndex = tagartPos;
        if (currentPos < 9) {
            this.addFetters(card);
        }
    }
    hasEmpty() {
        for (let index = 0; index < 9; index++) {
            if (!this.cards[index]) {
                return index;
            }
        }
        return -1;
    }
    getBattleCards() {
        return this.cards.slice(9);
    }

   
}