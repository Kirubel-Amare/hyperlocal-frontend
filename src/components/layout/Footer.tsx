// components/layout/Footer.tsx
import Link from 'next/link'

const footerSections = [
  {
    title: 'Services',
    links: [
      { label: 'Cleaning', href: '/services/cleaning' },
      { label: 'Plumbing', href: '/services/plumbing' },
      { label: 'Tutoring', href: '/services/tutoring' },
      { label: 'Pet Care', href: '/services/pet-care' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Press', href: '/press' },
      { label: 'Impact', href: '/impact' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Center', href: '/help' },
      { label: 'Safety', href: '/safety' },
      { label: 'Contact', href: '/contact' },
      { label: 'Terms', href: '/terms' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-gray-900 mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-gray-600 hover:text-cyan-600">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
            {/* Add social icons if needed */}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} LocalExpert. All rights reserved.
        </div>
      </div>
    </footer>
  )
}