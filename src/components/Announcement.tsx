import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, Clock } from "lucide-react";

interface AnnouncementProps {
  title: string;
  description: string;
  date: string;
  time: string;
  type: "lesson" | "announcement" | "assignment";
}

const Announcement = ({ title, description, date, time, type }: AnnouncementProps) => {
  return (
    <Card className="p-4 hover:shadow-lg transition-shadow animate-fade-in">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold text-lg">{title}</h3>
        <Badge variant={type === "lesson" ? "default" : type === "announcement" ? "secondary" : "destructive"}>
          {type}
        </Badge>
      </div>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <div className="flex items-center gap-4 text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <CalendarIcon className="h-4 w-4" />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="h-4 w-4" />
          <span>{time}</span>
        </div>
      </div>
    </Card>
  );
};

export default Announcement;