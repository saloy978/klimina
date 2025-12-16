import { motion } from 'framer-motion';
import heroBg from '../assets/hero_bg.png';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Full-screen Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroBg}
                    alt="Spanish Teacher - Ekaterina Klimina"
                    className="w-full h-full object-cover"
                />
                {/* Subtle overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-cream/30 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="section-container relative z-10 w-full pt-16 md:pt-20">
                <div className="max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] text-teal drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)]">
                            Учите испанский<br />
                            <span className="text-teal">вместе с нами</span>
                        </h1>

                        <p className="text-lg md:text-xl text-text-dark/80 mb-10 max-w-lg leading-relaxed drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)]">
                            Групповые онлайн-уроки с опытным преподавателем
                        </p>

                        <motion.a
                            href="#contact"
                            className="btn-primary inline-block text-center px-10 py-4 text-lg shadow-button"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Записаться на урок
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
