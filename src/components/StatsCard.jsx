function StatsCard({ icon, title, value }) {
  return (
    <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
      <p className="text-slate-500 text-sm">
        {icon} {title}
      </p>

      <h3 className="text-2xl font-bold mt-1">
        {value}
      </h3>
    </div>
  );
}

export default StatsCard;