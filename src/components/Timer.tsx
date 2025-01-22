import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Timer as TimerIcon, Pause, Play, RotateCcw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined;

    if (isRunning && timeLeft > 0) {
      intervalId = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      toast({
        title: "Time's up!",
        description: "Take a break and start another session when you're ready.",
      });
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isRunning, timeLeft, toast]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(25 * 60);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <Card className="p-6 max-w-sm mx-auto bg-white shadow-lg animate-fade-in">
      <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center justify-center w-32 h-32 rounded-full bg-secondary">
          <span className="text-4xl font-bold text-primary">
            {formatTime(timeLeft)}
          </span>
        </div>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTimer}
            className="w-12 h-12 rounded-full"
          >
            {isRunning ? (
              <Pause className="h-6 w-6" />
            ) : (
              <Play className="h-6 w-6" />
            )}
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={resetTimer}
            className="w-12 h-12 rounded-full"
          >
            <RotateCcw className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default Timer;