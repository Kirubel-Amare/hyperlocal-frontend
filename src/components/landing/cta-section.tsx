import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Are you a service professional?
        </h2>
        <p className="text-xl text-gray-300 mb-10 leading-relaxed">
          Grow your business and connect with customers in your neighborhood.
          <br />
          Start listing your services for free.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/register"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors transform hover:scale-105"
          >
            Become a Partner
          </Link>
          <button className="border-2 border-gray-400 hover:border-gray-300 text-gray-300 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors">
            How it Works
          </button>
        </div>
      </div>
    </section>
  )
}
