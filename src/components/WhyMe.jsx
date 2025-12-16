import { motion } from 'framer-motion';

const features = [
    {
        icon: "🌐",
        title: "Онлайн в Zoom",
        description: "Занимайтесь из любой точки мира. Вам нужен только интернет и желание учиться."
    },
    {
        icon: "👤",
        title: "Индивидуально",
        description: "Только вы и преподаватель. 100% внимания на вас, ваши цели и ваш темп обучения."
    },
    {
        icon: "📅",
        title: "Гибкий график",
        description: "Выбирайте удобное время для занятий. Возможность переноса уроков без потери оплаты."
    }
];

const WhyMe = () => {
    return (
        <section className="py-24 bg-cream relative">
            <div className="section-container">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-teal">
                        Как проходят занятия?
                    </h2>
                    <p className="text-lg text-text-light max-w-2xl mx-auto">
                        Комфортная атмосфера и эффективность индивидуального подхода
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group p-8 bg-white rounded-3xl border border-sand/30 shadow-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="w-16 h-16 bg-teal/10 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-teal/20 transition-colors">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-teal">
                                {item.title}
                            </h3>
                            <p className="text-text-light leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyMe;
