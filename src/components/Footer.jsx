import { Heart } from 'lucide-react'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-gray-400 py-8">
      <div className="container-width text-center">
        <p className="flex items-center justify-center gap-1">
          Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Serhii Lysiuk
        </p>
        <p className="text-sm mt-2">
          &copy; {currentYear} All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
