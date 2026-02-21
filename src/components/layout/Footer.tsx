import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import Image from 'next/image'
import { useTranslation } from '@/i18n/LanguageContext'

export default function Footer() {
  const { t } = useTranslation()
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
              {t('footer.brandDescription')}
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
            <h4 className="text-white font-semibold mb-4">{t('footer.services')}</h4>
            <ul className="space-y-3">
              {[
                { name: t('categories.list.plumbing'), href: '#' },
                { name: t('categories.list.cleaning'), href: '#' },
                { name: t('categories.list.electrical'), href: '#' },
                { name: t('categories.list.tutoring'), href: '#' },
                { name: t('categories.list.petCare'), href: '#' },
                { name: t('categories.list.gardening'), href: '#' }
              ].map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-sm text-gray-400 hover:text-[#1E7B7C] transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.company')}</h4>
            <ul className="space-y-3">
              {[
                { name: t('footer.links.aboutUs'), href: '#' },
                { name: t('footer.links.careers'), href: '#' },
                { name: t('footer.links.press'), href: '#' },
                { name: t('footer.links.impact'), href: '#' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-gray-400 hover:text-[#1E7B7C] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.support')}</h4>
            <ul className="space-y-3">
              {[
                { name: t('footer.links.helpCenter'), href: '#' },
                { name: t('footer.links.safety'), href: '#' },
                { name: t('footer.links.contact'), href: '#' },
                { name: t('footer.links.terms'), href: '#' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-gray-400 hover:text-[#1E7B7C] transition-colors">
                    {item.name}
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
            {t('footer.copyright')}
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-gray-400 hover:text-[#1E7B7C] transition-colors">
              {t('footer.privacyPolicy')}
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-[#1E7B7C] transition-colors">
              {t('footer.termsOfService')}
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-[#1E7B7C] transition-colors">
              {t('footer.cookiePolicy')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
