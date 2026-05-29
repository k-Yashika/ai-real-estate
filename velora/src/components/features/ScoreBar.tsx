type ScoreBarProps = {
  label: string;
  score: number;
};

export default function ScoreBar({ label, score }: ScoreBarProps) {
  const barColor =
    score >= 75 ? "bg-cyan-400" : score >= 50 ? "bg-violet-400" : "bg-red-400";

  return (
    <div className="mb-5">
      <div className="mb-2 flex items-center justify-between">
        <p className="text-sm font-medium text-slate-600">{label}</p>
        <p className="text-sm font-semibold text-slate-500">{score}</p>
      </div>

      <div className="h-3 overflow-hidden rounded-full bg-white">
        <div
          className={`h-full rounded-full ${barColor}`}
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );
}
