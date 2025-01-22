import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface FlashcardProps {
  cards: Array<{
    question: string;
    answer: string;
  }>;
}

const Flashcard = ({ cards }: FlashcardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
    }
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="max-w-md mx-auto p-4 animate-fade-in">
      <Card
        className="relative h-64 cursor-pointer perspective-1000"
        onClick={handleFlip}
      >
        <div
          className={`absolute w-full h-full transition-transform duration-500 transform-style-3d ${
            isFlipped ? "rotate-y-180" : ""
          }`}
        >
          <div className="absolute w-full h-full p-6 backface-hidden bg-white rounded-lg shadow flex items-center justify-center">
            <p className="text-xl text-center">
              {cards[currentIndex]?.question || "No question available"}
            </p>
          </div>
          <div className="absolute w-full h-full p-6 backface-hidden bg-primary text-white rounded-lg shadow flex items-center justify-center rotate-y-180">
            <p className="text-xl text-center">
              {cards[currentIndex]?.answer || "No answer available"}
            </p>
          </div>
        </div>
      </Card>
      <div className="flex justify-center mt-4 space-x-4">
        <Button
          variant="outline"
          size="icon"
          onClick={handlePrevious}
          disabled={currentIndex === 0}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={handleNext}
          disabled={currentIndex === cards.length - 1}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Flashcard;