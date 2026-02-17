interface DividerWithTextProps {
  text?: string;
}

export default function DividerWithText({ text = 'OR' }: DividerWithTextProps) {
  return (
    <div className="my-6 flex items-center">
      <div className="flex-1 border-gray-300"></div>
      <p className="px-3 text-sm text-gray-500 font-medium">{text}</p>
      <div className="flex-1 border-gray-300"></div>
    </div>
  );
}