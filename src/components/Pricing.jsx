import { motion } from 'framer-motion';

const prices = [
    {
        title: "Пробный урок",
        price: "Бесплатно",
        desc: "30 минут",
        features: ["Знакомство с методикой", "Определение уровня", "Составление программы", "Без обязательств"],
        isPopular: false,
        cta: "Записаться"
    },
    {
        title: "Пакет 8 уроков",
        formattedPrice: "Оптимально",
        desc: "60 минут / урок",
        features: ["Все материалы включены", "Домашние задания", "Поддержка между уроками", "Гибкий график"],
        isPopular: true,
        cta: "Выбрать пакет"
    },
    {
        title: "Разовый урок",
        formattedPrice: "Стандарт",
        desc: "60 минут",
        features: ["Индивидуальный план", "Все материалы включены", "Оплата за урок", "Свободный график"],
        isPopular: false,
        cta: "Записаться"
    }
];

const Pricing = () => {
    return (
        <section id="pricing" className="py-24 bg-beige/50">
            <div className="section-container">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-teal font-semibold tracking-widest uppercase text-sm mb-4 block"
                    >
                        Стоимость
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-teal mb-6"
                    >
                        Варианты обучения
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-text-light max-w-2xl mx-auto"
                    >
                        Инвестируйте в своё будущее и свободу общения
                    </motion.p>
                </div>

                {/* Pricing Cards */}
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                    {prices.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative bg-white rounded-3xl p-8 md:p-10 transition-all duration-300 ${item.isPopular
                                ? 'shadow-xl scale-105 border-2 border-teal z-10'
                                : 'shadow-card border border-sand/30 hover:shadow-xl'
                                }`}
                        >
                            {item.isPopular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-teal text-white px-5 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                                    Рекомендую
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-teal">{item.title}</h3>
                                <p className="text-text-light mt-2">{item.desc}</p>
                            </div>

                            <div className="mb-8">
                                <div className="text-3xl font-bold text-text-dark">
                                    {item.price || item.formattedPrice}
                                </div>
                            </div>

                            <ul className="space-y-4 mb-10">
                                {item.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="mt-0.5 w-5 h-5 rounded-full bg-teal/10 text-teal flex items-center justify-center text-xs font-bold">✓</span>
                                        <span className="text-text-light">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#contact"
                                className={`block w-full py-4 rounded-full font-semibold text-center transition-all ${item.isPopular
                                    ? 'bg-teal text-white hover:bg-teal-light shadow-button'
                                    : 'bg-cream text-teal hover:bg-beige border border-teal/20'
                                    }`}
                            >
                                {item.cta}
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
