"use client"

import { motion } from "framer-motion"
import { PawPrint, Facebook, Instagram } from "lucide-react"

export default function Footer() {
  const footerLinkVariants = {
    hover: { x: 5, color: "#FFFFFF" },
  }

  return (
    <footer className="bg-[#1B4D5C] text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold font-serif mb-2 flex items-center gap-2">
              <PawPrint size={28} />
              Blue Paw
            </h3>
            <p className="text-white/80 text-sm">Cuidando do seu melhor amigo com amor e profissionalismo.</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm text-white/80">
              {[
                { href: "#home", label: "Home" },
                { href: "#about", label: "Sobre" },
                { href: "#services", label: "Serviços" },
                { href: "#contact", label: "Contato" },
              ].map((link, i) => (
                <motion.li key={i} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-white/80">
              {[{ label: "Consultas" }, { label: "Cirurgias" }, { label: "Emergência" }, { label: "Vacinação" }].map(
                (item, i) => (
                  <motion.li key={i} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <a href="#" className="hover:text-white transition-colors">
                      {item.label}
                    </a>
                  </motion.li>
                ),
              )}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <motion.a
                href="#"
                className="text-white/80"
                whileHover={{ scale: 1.3, color: "#E8A835" }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                title="Facebook"
              >
                <Facebook size={24} />
              </motion.a>
              <motion.a
                href="#"
                className="text-white/80"
                whileHover={{ scale: 1.3, color: "#E8A835" }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                title="Instagram"
              >
                <Instagram size={24} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="border-t border-white/20 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/80">
            <p>&copy; 2025 Blue Paw Veterinária. Todos os direitos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              {["Política de Privacidade", "Termos de Serviço"].map((link, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="hover:text-white transition-colors"
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
