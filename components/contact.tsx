"use client"

import { motion } from "framer-motion"
import { StaggerContainer, StaggerItem } from "./scroll-reveal"

export default function Contact() {
  const contactInfo = [
    {
      icon: "📍",
      label: "Localização",
      content: "Rua dos Animais, 123 - São Paulo, SP 01234-567",
    },
    {
      icon: "✉️",
      label: "Contato",
      items: [
        { text: "(11) 99999-9999", href: "tel:(11)99999-9999" },
        { text: "contato@bluepaw.com.br", href: "mailto:contato@bluepaw.com.br" },
      ],
    },
    {
      icon: "🕐",
      label: "Horários",
      items: [{ text: "Dias úteis: 8h às 20h" }, { text: "Fim de semana: 8h às 18h" }],
    },
  ]

  return (
    <section id="contact" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <span className="text-[#E8A835] text-2xl">📞</span>
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
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1B4D5C] mb-4">Entre em Contato</h2>
        </motion.div>

        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="bg-white rounded-xl shadow-sm p-8"
                  whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="text-4xl mb-4"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {info.icon}
                  </motion.div>
                  <h3 className="text-lg font-bold text-[#1B4D5C] mb-4">{info.label}</h3>
                  {info.content && <p className="text-gray-600">{info.content}</p>}
                  {info.items && (
                    <div className="space-y-2">
                      {info.items.map((item, i) => (
                        <motion.div key={i} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                          {item.href ? (
                            <a href={item.href} className="text-gray-600 hover:text-[#1B4D5C] transition-colors">
                              {item.text}
                            </a>
                          ) : (
                            <p className="text-gray-600">{item.text}</p>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        <motion.div
          className="mt-16 bg-white rounded-2xl p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#1B4D5C] mb-4">
            Fique por dentro das novidades
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Receba dicas de cuidados com seu pet e informações sobre nossos serviços.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <motion.input
              type="email"
              placeholder="Seu email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-[#1B4D5C]"
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            />
            <motion.button
              className="bg-[#1B4D5C] text-white px-8 py-3 rounded-full font-semibold whitespace-nowrap"
              whileHover={{ backgroundColor: "#153844", scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Inscrever
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
