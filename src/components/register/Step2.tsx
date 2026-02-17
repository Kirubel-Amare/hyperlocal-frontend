// components/register/Step2.tsx
'use client'

import { useState } from 'react'
import FormField from '@/components/ui/FormField'
import Button from '@/components/ui/Button'
import type { RegistrationData } from '@/types/registration'

interface Step2Props {
  initialData: Partial<RegistrationData>
  onBack: () => void
  onSubmit: (data: Partial<RegistrationData>) => void
}

export default function Step2({ initialData, onBack, onSubmit }: Step2Props) {
  const [dob, setDob] = useState(initialData.dateOfBirth || '')
  const [address, setAddress] = useState(initialData.address || '')
  const [city, setCity] = useState(initialData.city || '')
  const [postalCode, setPostalCode] = useState(initialData.postalCode || '')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ dateOfBirth: dob, address, city, postalCode })
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Details</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <FormField
          label="Date of Birth"
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          required
        />

        <FormField
          label="Street Address"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="123 Main St"
          required
        />

        <div className="grid grid-cols-2 gap-4">
          <FormField
            label="City"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="New York"
            required
          />
          <FormField
            label="Postal Code"
            type="text"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            placeholder="10001"
            required
          />
        </div>

        <div className="flex gap-4">
          <Button type="button" variant="secondary" onClick={onBack} fullWidth>
            Back
          </Button>
          <Button type="submit" variant="primary" fullWidth>
            Continue
          </Button>
        </div>
      </form>
    </div>
  )
}