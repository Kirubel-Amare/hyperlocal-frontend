import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div>
                <Image src="/logo-removebg-preview.png" alt="Logo" width={80} height={80} />
              </div>
              <span className="text-xl font-bold text-white">LocalExpert</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Building stronger communities by connecting neighbors with the best local service professionals.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-[#1E7B7C] transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#1E7B7C] transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#1E7B7C] transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#1E7B7C] transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {['Plumbing', 'Cleaning', 'Electrical', 'Tutoring', 'Pet Care', 'Gardening'].map((service) => (
                <li key={service}>
                  <Link href="#" className="text-sm text-gray-400 hover:text-[#1E7B7C] transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Careers', 'Press', 'Impact'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-gray-400 hover:text-[#1E7B7C] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {['Help Center', 'Safety', 'Contact', 'Terms'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-gray-400 hover:text-[#1E7B7C] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © 2024 LocalExpert Technologies. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-gray-400 hover:text-[#1E7B7C] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-[#1E7B7C] transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-[#1E7B7C] transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
