import Link from 'next/link'
import { ReactNode } from 'react'
import Image from 'next/image'

interface HeaderProps {
  showLoginLink?: boolean
  loginHref?: string
  rightElement?: ReactNode
}

export default function Header({
  showLoginLink = true,
  loginHref = '/login',
  rightElement
}: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 w-full h-20 z-50 bg-gray-200/30 backdrop-blur-lg shadow-lg">
      <div className="w-full px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            className="rounded-full"
            src="/logo-removebg-preview.png"
            width={100}
            height={100}
            alt="Logo"
          />
          <span className="text-lg font-bold">Hyperlocal</span>
        </div>
        {rightElement ? (
          rightElement
        ) : showLoginLink ? (
          <div className="flex items-center gap-4">
            <span className="text-gray-600 hidden sm:inline">Already have an account?</span>
            <Link href={loginHref} className="text-cyan-600 hover:text-cyan-700 font-medium">
              Log in
            </Link>
          </div>
        ) : null}
      </div>
    </header>
  )
}