import { InputHTMLAttributes } from 'react';

interface CheckboxFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function CheckboxField({ label, id, className = '', ...props }: CheckboxFieldProps) {
  const fieldId = id || `checkbox-${label.toLowerCase().replace(/\s+/g, '-')}`;
  return (
    <label htmlFor={fieldId} className="flex items-center gap-2 cursor-pointer">
      <input
        id={fieldId}
        type="checkbox"
        className={`w-4 h-4 rounded border-gray-300 text-[#1E7B7C] focus:ring-[#1E7B7C] cursor-pointer ${className}`}
        {...props}
      />
      <span className="text-sm text-[#1E7B7C]">{label}</span>
    </label>
  );
}