import React, { useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail, ExternalLink, MessageCircle } from 'lucide-react';

function App() {
  const [contactOpen, setContactOpen] = React.useState(false);
  
  const projects = [
    {
      title: "Projeto 1",
      description: "Descriçao do projeto 1",
      link: "https://ate1.netlify.app/",
      image: "https://github.com/kaykeeee1/foto/blob/main/Captura%20de%20tela%202025-03-09%20144412.png?raw=true"
    },
    {
      title: "Projeto 2",
      description: "Descriçao do projeto 2",
      link: "https://consufacil.netlify.app/",
      image: "https://github.com/kaykeeee1/foto/blob/main/Captura%20de%20tela%202025-03-09%20144327.png?raw=true"
    }
  ];

  const SectionTitle = ({ children }: { children: React.ReactNode }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
      threshold: 0.2,
      triggerOnce: true,
    });

    useEffect(() => {
      if (inView) {
        controls.start({ opacity: 1, y: 0 });
      }
    }, [controls, inView]);

    return (
      <motion.h2
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        className="text-3xl font-bold mb-8 text-center"
      >
        {children}
      </motion.h2>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 opacity-90"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 py-16 relative z-10"
        >
          <div className="flex flex-col items-center text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/30 shadow-xl relative group"
            >
              <img
                src="https://github.com/kaykeeee1/foto/blob/main/1738194617281.jpeg?raw=true"
                alt="Kayke José"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Kayke 
              </h1>
              <p className="text-xl md:text-2xl text-blue-200 mb-8">Desenvolvedor Full Stack</p>
              <div className="flex gap-6 justify-center">
                {[
                  { icon: Github, href: "https://github.com/yourusername" },
                  { icon: Linkedin, href: "https://linkedin.com/in/yourusername" },
                  { icon: Mail, href: "mailto:your.email@example.com" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="text-blue-300 hover:text-blue-100 transition-colors"
                  >
                    <social.icon size={32} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </header>

      {/* About Section */}
      <section className="py-24 bg-gray-800">
        <div className="container mx-auto px-4">
          <SectionTitle>Sobre Mim</SectionTitle>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
            Desenvolvedor full stack web e mobile, especializado em arquiteturas escaláveis e alto desempenho. Trabalho com React, React Native, Node.js, TypeScript, Python e Kotlin, desenvolvendo aplicações robustas e eficientes. Tenho experiência em APIs RESTful, integração com Firebase, bancos de dados SQL e NoSQL, além de otimização de performance e boas práticas de desenvolvimento. Busco constantemente aprimorar minhas habilidades e acompanhar as tendências do setor para criar soluções inovadoras e de alta qualidade.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projectos Section */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionTitle>Projetos</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-xl transform transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <div className="relative overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-blue-300">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href={project.link}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300"
                  >
                    Ver projeto <ExternalLink size={16} className="ml-1" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/*  Contacto Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setContactOpen(true)}
        className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
      >
        <MessageCircle size={24} />
      </motion.button>

      {/* Contact Modal */}
      <AnimatePresence>
        {contactOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setContactOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.9 }}
              className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 bg-gray-800 p-8 rounded-2xl shadow-2xl z-50 md:w-full md:max-w-lg"
            >
              <h2 className="text-2xl font-bold mb-6 text-center">Entre em Contato</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Nome</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Mensagem</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    required
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Enviar Mensagem
                </motion.button>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Kayke José Evangelista dos Santos. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;