// components/landing/ProfessionalCard.tsx
import Image from 'next/image'
import Button from '@/components/ui/Button'

interface ProfessionalCardProps {
  name: string;
  location: string;
  title: string;
  description: string;
  imageSrc?: string;
}

export default function ProfessionalCard({ name, location, title, description, imageSrc }: ProfessionalCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <div className="flex items-start gap-4">
        {imageSrc ? (
          <Image src={imageSrc} alt={name} width={64} height={64} className="rounded-full object-cover" />
        ) : (
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-xl font-bold">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <h3 className="font-bold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-600">{location}</p>
        </div>
      </div>
      <h4 className="font-semibold text-gray-800 mt-4">{title}</h4>
      <p className="text-sm text-gray-600 mt-2 line-clamp-3">{description}</p>
      <div className="mt-4">
        <Button variant="outline" size="sm" href="/profile">
          View Profile
        </Button>
      </div>
    </div>
  )
}
