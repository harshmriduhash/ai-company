import Image from 'next/image'
import Link from 'next/link'

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-x-2">
      <Image src="/logo.svg" alt="Logo" width={40} height={40} />
      <span className="text-xl font-bold">company.ai</span>
    </Link>
  )
}
