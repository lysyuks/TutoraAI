function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0f0f1a] text-gray-500 py-6 border-t border-white/5">
      <div className="container-width text-center">
        <p className="text-sm">
          &copy; {currentYear} Serhii Lysiuk. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
