import { useState } from "react";
import { Button } from "@/components/ui/button";
import Announcement from "@/components/Announcement";
import { Bell, Calendar, BookOpen, MessageSquare } from "lucide-react";

interface NavItem {
  icon: typeof Bell;
  label: string;
}

const navigation: NavItem[] = [
  { icon: Bell, label: "Announcements" },
  { icon: Calendar, label: "Schedule" },
  { icon: BookOpen, label: "Lessons" },
  { icon: MessageSquare, label: "Discussions" },
];

const announcements = [
  {
    title: "Mathematics Review Session",
    description: "Join us for an intensive review of Calculus fundamentals. Bring your questions!",
    date: "2024-03-15",
    time: "14:00",
    type: "lesson" as const,
  },
  {
    title: "Assignment Due Reminder",
    description: "Physics Lab Report due tomorrow. Make sure to include all experimental data.",
    date: "2024-03-16",
    time: "23:59",
    type: "assignment" as const,
  },
  {
    title: "Study Group Formation",
    description: "Looking for participants for the Chemistry study group. Sign up today!",
    date: "2024-03-17",
    time: "10:00",
    type: "announcement" as const,
  },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState("Announcements");

  return (
    <div className="min-h-screen bg-secondary">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-primary">StudySync</h1>
            <Button variant="outline" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <nav className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between">
            {navigation.map(({ icon: Icon, label }) => (
              <Button
                key={label}
                variant={activeTab === label ? "default" : "ghost"}
                className="flex-1 flex flex-col items-center py-2 gap-1"
                onClick={() => setActiveTab(label)}
              >
                <Icon className="h-5 w-5" />
                <span className="text-xs">{label}</span>
              </Button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-4">
          {announcements.map((announcement, index) => (
            <Announcement key={index} {...announcement} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;