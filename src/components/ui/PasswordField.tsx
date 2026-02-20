import { useState, InputHTMLAttributes } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface PasswordFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  hint?: string;
}

export default function PasswordField({ label, error, hint, className = '', id, ...props }: PasswordFieldProps) {
  const [showPassword, setShowPassword] = useState(false);
  const fieldId = id || `password-${label.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div>
      <label htmlFor={fieldId} className="block text-sm font-medium text-gray-900 mb-2">
        {label}
      </label>
      <div className="relative">
        <input
          id={fieldId}
          type={showPassword ? 'text' : 'password'}
          className={`w-full px-4 py-3 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1E7B7C] focus:ring-1 focus:ring-[#1E7B7C] ${className}`}
          {...props}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>
      {hint && <p className="text-xs text-gray-500 mt-2">{hint}</p>}
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}