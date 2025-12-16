import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AboutTeacher = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

    return (
        <section className="py-24 bg-teal text-white overflow-hidden" ref={containerRef}>
            <div className="section-container relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Image Side */}
                    <motion.div
                        style={{ y }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-white/10 border border-white/20 relative shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-terracotta/30 to-teal/50 mix-blend-overlay" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center">
                                <span className="text-7xl mb-6 opacity-80">👩‍🏫</span>
                                <p className="text-white/80 font-light italic text-lg leading-relaxed max-w-sm">
                                    "Мой подход — это не зубрёжка, а погружение в язык через практику."
                                </p>
                            </div>
                        </div>

                        {/* Experience Badge */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="absolute -bottom-6 -left-6 bg-white text-teal p-6 rounded-2xl shadow-xl"
                        >
                            <p className="font-bold text-4xl mb-1">5+</p>
                            <p className="font-medium text-sm text-text-light">Лет опыта</p>
                        </motion.div>
                    </motion.div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-10"
                        >
                            <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-white">
                                Екатерина <span className="text-terracotta">Климина</span>
                            </h2>
                            <div className="space-y-6 text-lg text-white/80 leading-relaxed">
                                <p>
                                    Преподаватель испанского языка с опытом более 5 лет. Жила и училась в Испании, поэтому знаю не только книжные правила, но и реальную живую речь.
                                </p>
                                <p>
                                    Имею сертификат международного уровня DELE C2. Моя цель — научить вас говорить уверенно и с удовольствием.
                                </p>
                            </div>
                        </motion.div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { label: "Студентов", value: "100+" },
                                { label: "Уровень", value: "DELE C2" },
                                { label: "Подход", value: "Индивидуальный" },
                                { label: "Результат", value: "Говорение" },
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white/10 p-5 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors"
                                >
                                    <div className="text-xl font-bold text-white mb-1">{stat.value}</div>
                                    <div className="text-sm text-white/60">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutTeacher;
