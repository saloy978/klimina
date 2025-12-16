import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        level: 'a1'
    });
    const [status, setStatus] = useState('idle');

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.contact) {
            alert("Пожалуйста, заполните обязательные поля");
            return;
        }

        setStatus('submitting');
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', contact: '', level: 'a1' });
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 bg-cream relative overflow-hidden">
            <div className="section-container">
                <div className="bg-white rounded-4xl shadow-xl overflow-hidden border border-sand/30">
                    <div className="flex flex-col md:flex-row">

                        {/* Info Side */}
                        <div className="md:w-5/12 bg-teal p-10 md:p-14 text-white relative overflow-hidden">
                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">Начните сейчас</h2>
                                <p className="text-white/80 mb-10 text-lg leading-relaxed">
                                    Оставьте заявку на бесплатное пробное занятие (15 мин), где мы познакомимся и определим ваш уровень.
                                </p>

                                <div className="space-y-4">
                                    <a
                                        href="https://t.me/maria_spanish"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 border border-white/20 hover:bg-white/20 transition-colors"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-xl">📱</div>
                                        <div>
                                            <div className="text-xs text-white/60 uppercase tracking-wider mb-1">Telegram</div>
                                            <div className="font-semibold">@maria_spanish</div>
                                        </div>
                                    </a>
                                    <a
                                        href="https://instagram.com/maria_klimina"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 border border-white/20 hover:bg-white/20 transition-colors"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-xl">📷</div>
                                        <div>
                                            <div className="text-xs text-white/60 uppercase tracking-wider mb-1">Instagram</div>
                                            <div className="font-semibold">@maria_klimina</div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-terracotta/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
                        </div>

                        {/* Form Side */}
                        <div className="md:w-7/12 p-8 md:p-14 bg-white">
                            <AnimatePresence mode="wait">
                                {status === 'success' ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className="h-full flex flex-col items-center justify-center text-center py-10"
                                    >
                                        <div className="w-20 h-20 bg-teal/10 text-teal rounded-full flex items-center justify-center text-4xl mb-6">
                                            ✓
                                        </div>
                                        <h3 className="text-2xl font-bold text-teal mb-3">Заявка принята!</h3>
                                        <p className="text-text-light text-lg max-w-sm mx-auto">
                                            Скоро я напишу вам, чтобы договориться о времени. Hasta pronto!
                                        </p>
                                        <button
                                            onClick={() => setStatus('idle')}
                                            className="mt-8 px-6 py-2.5 rounded-full border-2 border-sand text-sm font-semibold text-text-dark hover:bg-cream transition-colors"
                                        >
                                            Отправить еще
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onSubmit={handleSubmit}
                                        className="space-y-6"
                                    >
                                        <div>
                                            <label className="block text-sm font-semibold text-text-light mb-2 uppercase tracking-wider">
                                                Как вас зовут
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-5 py-4 border-2 border-sand/50 rounded-xl focus:border-teal bg-cream/50 text-lg font-medium outline-none transition-colors placeholder-text-light/50"
                                                placeholder="Имя Фамилия"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-text-light mb-2 uppercase tracking-wider">
                                                Где с вами связаться
                                            </label>
                                            <input
                                                type="text"
                                                name="contact"
                                                value={formData.contact}
                                                onChange={handleChange}
                                                className="w-full px-5 py-4 border-2 border-sand/50 rounded-xl focus:border-teal bg-cream/50 text-lg font-medium outline-none transition-colors placeholder-text-light/50"
                                                placeholder="Телефон или ссылка на Telegram"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-text-light mb-3 uppercase tracking-wider">
                                                Ваш уровень
                                            </label>
                                            <div className="grid grid-cols-2 gap-3">
                                                {['a1', 'a2', 'b1', 'unknown'].map((lvl) => (
                                                    <div
                                                        key={lvl}
                                                        onClick={() => setFormData(prev => ({ ...prev, level: lvl }))}
                                                        className={`cursor-pointer px-4 py-3 rounded-xl border-2 text-center font-semibold transition-all ${formData.level === lvl
                                                            ? 'border-teal bg-teal/5 text-teal'
                                                            : 'border-sand/50 text-text-light hover:border-sand'
                                                            }`}
                                                    >
                                                        {lvl === 'unknown' ? 'Не знаю' : lvl.toUpperCase()}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="pt-4">
                                            <button
                                                type="submit"
                                                disabled={status === 'submitting'}
                                                className="w-full btn-primary py-5 text-lg flex items-center justify-center gap-3"
                                            >
                                                {status === 'submitting' ? (
                                                    <motion.div
                                                        animate={{ rotate: 360 }}
                                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                        className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full"
                                                    />
                                                ) : (
                                                    "Отправить заявку"
                                                )}
                                            </button>
                                        </div>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
