const QuickReplies = ({ options, onSelect }) => {
  return (
    <div className="mt-4 flex flex-wrap gap-3">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onSelect(option)}
          className="rounded-xl border border-blue-500 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 transition hover:bg-blue-600 hover:text-white"
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default QuickReplies;