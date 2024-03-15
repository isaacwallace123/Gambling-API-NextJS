const Cards = require('./GetCards').default;
const Suits = require('./GetSuits').default;

export default function GenerateDeck() {
    let Deck = [];

    Cards.map((Data) => {
        Suits.map((Suit) => {
            Deck.push({
                Suit: Suit,
                Card: Data.Card,
                Values: Data.Values
            });
        });
    });

    return Deck;
};