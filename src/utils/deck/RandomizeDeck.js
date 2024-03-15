import GenerateDeck from "./GenerateDeck";

const FullDeck = GenerateDeck();

export default function RandomDeck() {
    return FullDeck.sort((a, b) => 0.5 - Math.random());
}