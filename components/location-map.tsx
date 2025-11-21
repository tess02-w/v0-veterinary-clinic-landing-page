"use client"

import { motion } from "framer-motion"
import { StaggerContainer, StaggerItem } from "./scroll-reveal"

export default function Location() {
  const locationDetails = [
    {
      icon: "📍",
      title: "Endereço",
      content: "Rua dos Animais, 123\nSão Paulo, SP 01234-567",
    },
    {
      icon: "📞",
      title: "Telefone",
      content: "(11) 99999-9999\n(11) 3333-3333",
    },
    {
      icon: "🕐",
      title: "Horário de Funcionamento",
      content: "Seg-Sex: 8h às 20h\nSáb-Dom: 8h às 18h",
    },
  ]

  return (
    <section id="location" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-4">
            <div className="flex items-center gap-3 w-full max-w-xs">
              <motion.div
                className="flex-1 h-px bg-[#E8A835]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                style={{ originX: 0 }}
              />
              <span className="text-[#E8A835] text-2xl">🗺️</span>
              <motion.div
                className="flex-1 h-px bg-[#E8A835]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                style={{ originX: 1 }}
              />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1B4D5C] mb-4">Nos Encontre</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Visite nossa clínica no coração de São Paulo</p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Map Container */}
          <motion.div
            className="rounded-2xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <motion.iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0987624516843!2d-46.65429!3d-23.561684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa001%3A0xab35da2f5ca62674!2sRua%20dos%20Animais%2C%20123%20-%20São%20Paulo%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="400"
              className="border-0 w-full"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Information Cards */}
          <div className="flex flex-col justify-between">
            <StaggerContainer>
              <div className="space-y-4">
                {locationDetails.map((detail, index) => (
                  <StaggerItem key={index}>
                    <motion.div
                      className="bg-gradient-to-r from-[#1B4D5C]/5 to-[#E8A835]/5 rounded-xl p-6 border border-[#E8A835]/20"
                      whileHover={{
                        backgroundColor: "rgba(27, 77, 92, 0.08)",
                        borderColor: "#E8A835",
                        x: 8,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-start gap-4">
                        <motion.div
                          className="text-3xl flex-shrink-0 mt-1"
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          transition={{ duration: 0.3 }}
                        >
                          {detail.icon}
                        </motion.div>
                        <div>
                          <h3 className="text-lg font-bold text-[#1B4D5C] mb-2">{detail.title}</h3>
                          <p className="text-gray-600 whitespace-pre-line text-sm leading-relaxed">{detail.content}</p>
                        </div>
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>

            {/* CTA Button */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="https://www.google.com/maps/search/Rua+dos+Animais,+123+-+São+Paulo,+SP/@-23.561684,-46.65429,15z"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-[#1B4D5C] text-white font-semibold py-4 px-6 rounded-full gap-2"
                whileHover={{
                  backgroundColor: "#153844",
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(27, 77, 92, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <span>Abrir no Google Maps</span>
                <span>→</span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
