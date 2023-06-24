import { useEffect, useState } from "react";
import styles from "../styles/text.module.css"

function MemoryGame() {
    const [cards, setCards] = useState([]);
    const [selectedCards, setSelectedCards] = useState([]);
    

    const initializeGame = () => {
        const pairs = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']; // Valores dos pares de cartas
        const shuffledCards = shuffle([...pairs, ...pairs]); // Embaralhar os valores dos pares
        setCards(shuffledCards.map((value, index) => ({ id: index, value, flipped: false, removed: false })));
        setSelectedCards([]);
    };

    const shuffle = (array) => {
        const shuffledArray = array.slice();
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    };

    const flipCard = (index) => {
        if (selectedCards.length < 2) {
            const updatedCards = [...cards];
            updatedCards[index].flipped = true;
            setCards(updatedCards);
            setSelectedCards([...selectedCards, updatedCards[index]]);
        }
    };

    const checkForPair = () => {
        const [card1, card2] = selectedCards;
        const updatedCards = cards.map((card) => {
            if (card.id === card1 || card.id === card2) {
                return { ...card, flipped: false, removed: true };
            }
            return card;
        });
        setCards(updatedCards);
        setSelectedCards([]);
    };

    useEffect(() => {
        if (selectedCards.length === 2) {
            setTimeout(() => {
                checkForPair();
            }, 1000); // Espera 1 segundo antes de verificar o par
        }
    }, [selectedCards]);

    return (
        <div>
            <div>
                <div className={styles.typingAnimation}>Texto sendo digitado...</div>
            </div>
            <button onClick={initializeGame}>Start Game</button>
        </div>
    );
}

export default MemoryGame;