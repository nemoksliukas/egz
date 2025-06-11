import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Dimensions,
} from "react-native";
import { useRouter } from "expo-router";

type Card = {
  id: number;
  emoji: string;
  flipped: boolean;
  matched: boolean;
};

const [gameWon, setGameWon] = useState(false);

const EMOJIS = [
  "🍎", "🍌", "🍇", "🍒",
  "🍍", "🍉", "🥝", "🍑"
];

const generateShuffledCards = (): Card[] => {
  const cards = [...EMOJIS, ...EMOJIS]
    .map((emoji, index) => ({
      id: index,
      emoji,
      flipped: false,
      matched: false,
    }))
    .sort(() => Math.random() - 0.5);
  return cards;
};

export default function MemoryGame() {
  const [cards, setCards] = useState<Card[]>(generateShuffledCards());
  const [selected, setSelected] = useState<number[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (selected.length === 2) {
      const [first, second] = selected;
      if (cards[first].emoji === cards[second].emoji) {
        const updated = [...cards];
        updated[first].matched = true;
        updated[second].matched = true;
        setCards(updated);
        setSelected([]);
      } else {
        setTimeout(() => {
          const updated = [...cards];
          updated[first].flipped = false;
          updated[second].flipped = false;
          setCards(updated);
          setSelected([]);
        }, 1000);
      }
    }
  }, [selected]);

  useEffect(() => {
  if (
    !gameWon &&
    cards.length > 0 &&
    cards.every((card) => card.matched)
  ) {
    setGameWon(true);
    setTimeout(() => {
      Alert.alert("You Win!", "All pairs matched!", [
        {
          text: "Play Again",
          onPress: () => {
            setCards(generateShuffledCards());
            setSelected([]);
            setGameWon(false); // reset on new game
          },
        },
        { text: "Back to Menu", onPress: () => router.push("/") },
      ]);
    }, 500);
  }
}, [cards]);

  const flipCard = (index: number) => {
    if (cards[index].flipped || cards[index].matched || selected.length === 2) return;

    const updated = [...cards];
    updated[index].flipped = true;
    setCards(updated);
    setSelected((prev) => [...prev, index]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Memory Match</Text>
      <View style={styles.grid}>
        {cards.map((card, index) => (
          <TouchableOpacity
            key={card.id}
            style={[
              styles.card,
              card.flipped || card.matched ? styles.cardFlipped : styles.cardHidden,
            ]}
            onPress={() => flipCard(index)}
          >
            <Text style={styles.cardText}>
              {card.flipped || card.matched ? card.emoji : "❓"}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

// Calculate card size for a 4x4 grid
const screenWidth = Dimensions.get("window").width;
const cardMargin = 6;
const cardsPerRow = 4;
const cardSize = (screenWidth - cardMargin * (cardsPerRow + 150)) / cardsPerRow;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
  },
  title: {
    fontSize: 28,
    color: "#FFF",
    fontWeight: "bold",
    marginBottom: 24,
  },
  grid: {
    width: screenWidth,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    width: cardSize,
    height: cardSize,
    margin: cardMargin,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  cardHidden: {
    backgroundColor: "#333",
  },
  cardFlipped: {
    backgroundColor: "#3B82F6",
  },
  cardText: {
    fontSize: 28,
    color: "#FFF",
  },
});
