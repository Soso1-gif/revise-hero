import Timer from "@/components/Timer";
import Flashcard from "@/components/Flashcard";
import Progress from "@/components/Progress";

// Sample flashcard data
const sampleCards = [
  {
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    question: "What is the largest planet in our solar system?",
    answer: "Jupiter",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    answer: "William Shakespeare",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-secondary p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-primary">
          ReviseIt
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <Timer />
            <Progress totalCards={sampleCards.length} reviewedCards={1} />
          </div>
          <div>
            <Flashcard cards={sampleCards} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;