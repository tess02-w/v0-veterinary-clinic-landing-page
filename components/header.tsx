"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, PawPrint } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Sobre", href: "#about" },
    { label: "Serviços", href: "#services" },
    { label: "Equipe", href: "#team" },
    { label: "Contato", href: "#contact" },
  ]

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="#" className="text-2xl font-bold text-[#1B4D5C] font-serif flex items-center gap-2">
              <PawPrint size={28} />
              Blue Paw
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-[#1B4D5C] transition-colors font-medium text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-[#1B4D5C] text-white px-8 py-2 rounded-full font-semibold hover:bg-[#153844] transition-colors text-sm">
              Agendar
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden p-2 rounded-lg hover:bg-gray-100">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                {link.label}
              </a>
            ))}
            <button className="w-full mt-4 bg-[#1B4D5C] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#153844] transition-colors">
              Agendar Consulta
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
