import Link from 'next/link'
import { useTranslation } from '@/i18n/LanguageContext'

export default function CTASection() {
  const { t } = useTranslation()
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 px-6 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-2xl">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          {t('cta.title')}
        </h2>
        <p className="text-xl text-gray-300 mb-10 leading-relaxed whitespace-pre-line">
          {t('cta.description')}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/register"
            className="bg-[#1E7B7C] hover:bg-[#166566] text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors transform hover:scale-105 shadow-lg shadow-[#1E7B7C]/20"
          >
            {t('cta.button')}
          </Link>
          <button className="border-2 border-gray-400 hover:border-gray-300 text-gray-300 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors">
            {t('cta.howItWorks')}
          </button>
        </div>
      </div>
    </section>
  )
}
