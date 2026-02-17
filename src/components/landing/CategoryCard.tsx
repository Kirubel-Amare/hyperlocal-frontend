import Link from 'next/link'

interface CategoryCardProps {
  name: string
  price: string
  href?: string
}

export default function CategoryCard({ name, price, href = '#' }: CategoryCardProps) {
  return (
    <Link href={href} className="block p-6 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
      <h3 className="font-semibold text-gray-900">{name}</h3>
      <p className="text-sm text-cyan-600 mt-1">{price}</p>
    </Link>
  )
}