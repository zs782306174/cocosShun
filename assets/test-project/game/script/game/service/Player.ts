import Card from "./Card";
import Fetter from "./Fetter";
import GameService from "./GameService";
export default class Player {
    id: number = -1;
    name: string = '';
    lv!: number;
    //woods = [];
    coins: number = 0;
    cards: Card[] | null[] = [];
    waitCards: Card[] | null[] = [null, null, null, null, null];

    qualityArr
    fetters: Map<number, Fetter> = new Map<number, Fetter>();

    size = 0;

    private addFetters(card: Card) {
        for (const id of card.fetterIds) {
            this.fetters.get(id)?.add(card.id, card.cellIndex);
        }
    }
    private removeFetters(card: Card) {
        for (const id of card.fetterIds) {
            this.fetters.get(id)?.reduce(card.id, card.cellIndex);
        }
    }

    private combine(cards: Card[]) {
        let card = cards.pop()!;
        for (const iterator of cards) {
            this.removeFetters(iterator);
            this.cards[1] = new Card();
            this.cards[iterator.cellIndex] = null;
            if (card.children) {
                card.children = [];
            }
            card.children.push(iterator);
            this.size--;
        }
        card.lv += 1;
        return card;
    }
    private checkUpLevel(card: Card) {
        let arr = [];
        for (const other of this.cards) {

            if (other?.id == card.id && other?.lv == card.lv) {
                arr.push(other);
                if (arr.length >= 3) {
                    let card = this.combine(arr);
                    this.checkUpLevel(card);
                    break;
                }
            }
        }
    }
    private hasEmpty() {

        for (let index = 0; index < 9; index++) {
            if (!this.cards[index]) {
                return index;
            }
        }
        return -1;
    }


    public recycleCard(pos: number) {
        let card = this.cards[pos];
        if (card) {
            this.cards[pos] = null;
            if (pos >= 9) {
                this.removeFetters(card);
            }
            card.cellIndex = -1;
            this.size--;
            return card;
        }

    }
    public catchCard(index: number) {
        let pos = this.hasEmpty();
        let card = this.waitCards[index]!;
        if (pos != -1) {
            //@ts-ignore
            let index = this.waitCards.indexOf(card);
            this.waitCards[index] = null;
            this.cards[pos] = card;
            card.cellIndex = pos;
            this.size++;
            this.checkUpLevel(card);
        }
        return pos;
    }

    public moveCard(startPos: number, tagartPos: number) {
        let card = this.cards[startPos]!;
        let card2 = this.cards[tagartPos];
        if (card2) {
            this.cards[startPos] = card2;
            card2.cellIndex = startPos;
            if (startPos < 9 && tagartPos >= 9) {
                this.removeFetters(card2);
            } else if (tagartPos < 9 && startPos >= 9) {
                this.addFetters(card2);
            }
        }
        this.cards[tagartPos] = card;
        card.cellIndex = tagartPos;
        if (startPos < 9 && tagartPos >= 9) {
            this.addFetters(card);
        } else if (tagartPos < 9 && startPos >= 9) {
            this.removeFetters(card);
        }
    }

    public getBattleCards() {
        return this.cards.slice(9);
    }


}