// components/register/Step3.tsx
'use client'

import { useState } from 'react'
import CheckboxField from '@/components/ui/CheckboxField'
import Button from '@/components/ui/Button'
import type { RegistrationData } from '@/types/registration'

interface Step3Props {
  initialData: Partial<RegistrationData>
  onBack: () => void
  onSubmit: (data: Partial<RegistrationData>) => void
}

export default function Step3({ initialData, onBack, onSubmit }: Step3Props) {
  const [idFile, setIdFile] = useState<File | null>(null)
  const [termsAccepted, setTermsAccepted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!termsAccepted) {
      alert('Please accept the terms to continue.')
      return
    }
    onSubmit({ idDocument: idFile || undefined })
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Verification</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Upload ID (Driver's License / Passport)
          </label>
          <input
            type="file"
            accept="image/*,application/pdf"
            onChange={(e) => setIdFile(e.target.files?.[0] || null)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-cyan-50 file:text-cyan-700 hover:file:bg-cyan-100"
            required
          />
        </div>

        <CheckboxField
          label="I confirm that the information provided is accurate and I agree to the Terms of Service."
          checked={termsAccepted}
          onChange={(e) => setTermsAccepted(e.target.checked)}
        />

        <div className="flex gap-4">
          <Button type="button" variant="secondary" onClick={onBack} fullWidth>
            Back
          </Button>
          <Button type="submit" variant="primary" fullWidth>
            Create Account
          </Button>
        </div>
      </form>
    </div>
  )
}