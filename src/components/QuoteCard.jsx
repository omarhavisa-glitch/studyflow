function QuoteCard() {
  const quotes = [
    "Small progress is still progress.",
    "Stay focused and keep learning.",
    "Discipline beats motivation.",
    "One pomodoro at a time.",
    "Success comes from consistency.",
  ];

  const random =
    quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="bg-white p-6 rounded-3xl shadow mt-8">
      <p className="text-center italic text-slate-500">
        "{random}"
      </p>
    </div>
  );
}

export default QuoteCard;