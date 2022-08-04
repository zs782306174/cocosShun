
import ObjectPool from "../../common/ObjectPool";
import Card from "./Card";

export default class CardPool {
    cards: number[][] = [];

    getCard(quality: number) {
        let id = this.cards[quality].pop();
        let card = ObjectPool.get(Card);
        card.init(id);
        return card;
    }
    getQuality(arr) {
        let total = 0;
        for (let index = 0; index < arr.length; index++) {
            total += arr[index];
        }
        let r = Math.random() * total;
        total = 0;
        for (let quality = 0; quality < arr.length; quality++) {
            const quan = arr[quality];
            total += quan;
            if (r < total) {
                return quality;
            }
        }
    }
    lowToHigh(qualityArr: number[], count) {
        let cards = [];
        for (let quality = 0; quality < qualityArr.length; quality++) {
            for (let index = 0; index < count; index++) {
                if (qualityArr[quality] > 0) {
                    let card = this.getCard(quality);
                    card && cards.push(card);
                    if (cards.length >= count) {
                        return cards;
                    }
                }
            }
        }
        return cards;
    }
    getCards(qualityArr: number[], count: number) {
        let cards: Card[] = [];
        for (let index = 0; index < count; index++) {
            let quality = this.getQuality(qualityArr);
            let card = this.getCard(quality);
            card && cards.push(card);
        }
        count -= cards.length;
        if (count > 0) {
            cards.push(...this.lowToHigh(qualityArr, count));
            return cards;
        } else {
            return cards;
        }
    }
    putCard(card: Card) {
        card.lv = 1;
        this.cards[card.quality].push(card.id);
        ObjectPool.put(Card,card);
        if (!card.children || card.children.length <= 0) {
            return;
        }
        for (const iterator of card.children) {
            // this.cards[iterator.quality].push(iterator);
            this.putCard(iterator);
        }
    }
}