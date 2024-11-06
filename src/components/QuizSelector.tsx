interface QuizSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export function QuizSelector({ value, onChange }: QuizSelectorProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border rounded-md px-4 py-2 bg-white text-gray-700"
    >
      <option value="Basics of IT">Basics of IT</option>
      <option value="Advanced Programming">Advanced Programming</option>
      <option value="Web Development">Web Development</option>
    </select>
  );
}