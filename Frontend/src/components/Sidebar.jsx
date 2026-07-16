import { BookOpen, Brain, RotateCcw } from "lucide-react";

export default function Sidebar({ activeTab, setActiveTab }) {
  const items = [
    {
      name: "Flashcards",
      icon: BookOpen,
    },
    {
      name: "Quiz",
      icon: Brain,
    },
    {
      name: "Wrong Answers",
      icon: RotateCcw,
    },
  ];

  return (
    <div className="w-72 bg-slate-900 border-r border-slate-800 min-h-screen p-6">

      <h1 className="text-3xl font-bold text-white mb-10">
        LearnFlow AI
      </h1>

      <div className="space-y-3">

        {items.map((item) => {

          const Icon = item.icon;

          return (

            <button
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl transition

              ${
                activeTab === item.name
                  ? "bg-indigo-600 text-white"
                  : "text-gray-400 hover:bg-slate-800"
              }
              `}
            >

              <Icon size={22} />

              {item.name}

            </button>

          );
        })}

      </div>

    </div>
  );
}