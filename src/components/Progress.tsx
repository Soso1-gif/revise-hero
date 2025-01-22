import { Card } from "@/components/ui/card";
import { Progress as ProgressBar } from "@/components/ui/progress";

interface ProgressProps {
  totalCards: number;
  reviewedCards: number;
}

const Progress = ({ totalCards, reviewedCards }: ProgressProps) => {
  const progress = (reviewedCards / totalCards) * 100;

  return (
    <Card className="p-6 animate-fade-in">
      <h3 className="text-lg font-semibold mb-4">Today's Progress</h3>
      <ProgressBar value={progress} className="w-full" />
      <div className="mt-2 text-sm text-gray-600">
        {reviewedCards} of {totalCards} cards reviewed
      </div>
    </Card>
  );
};

export default Progress;