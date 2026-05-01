import { useState } from "react";
import Icon from "@/components/ui/icon";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const BACKEND_URL = "https://functions.poehali.dev/5d110e86-d51e-46a6-ac90-c557d41e96e4";

const ContactForm = () => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", contact: "", desc: "" });

  const { ref: titleRef, className: titleClass } = useScrollReveal(0);
  const { ref: headRef, className: headClass } = useScrollReveal(100);
  const { ref: subRef, className: subClass } = useScrollReveal(180);
  const { ref: formRef, className: formClass } = useScrollReveal(260);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch(BACKEND_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Ошибка отправки");
      setSent(true);
    } catch {
      setError("Не удалось отправить. Попробуйте ещё раз.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-card py-20 px-6">
      <div className="max-w-xl mx-auto">
        <p ref={titleRef} className={`text-sm font-semibold tracking-widest uppercase text-primary text-center mb-3 ${titleClass}`}>
          Заявка
        </p>
        <h2 ref={headRef} className={`text-3xl sm:text-4xl font-bold text-foreground text-center mb-4 ${headClass}`}>
          Заказать монтаж
        </h2>
        <p ref={subRef} className={`text-muted-foreground text-center mb-10 ${subClass}`}>
          Оставьте заявку — ответим в течение 30 минут
        </p>

        {sent ? (
          <div className="flex flex-col items-center gap-4 py-12 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
              <Icon name="CheckCircle" size={32} className="text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Заявка отправлена!</h3>
            <p className="text-muted-foreground">Мы свяжемся с вами в течение 30 минут.</p>
          </div>
        ) : (
          <div ref={formRef} className={formClass}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                required
                type="text"
                placeholder="Ваше имя"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-5 py-3.5 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <input
                required
                type="text"
                placeholder="Telegram или телефон"
                value={form.contact}
                onChange={(e) => setForm({ ...form, contact: e.target.value })}
                className="w-full px-5 py-3.5 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <textarea
                rows={4}
                placeholder="Опишите задачу: что за ролик, стиль, дедлайн..."
                value={form.desc}
                onChange={(e) => setForm({ ...form, desc: e.target.value })}
                className="w-full px-5 py-3.5 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
              />
              {error && (
                <p className="text-sm text-red-400 text-center">{error}</p>
              )}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 shadow-lg hover:shadow-primary/40 transition-all duration-200 transform hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Отправляем..." : "Отправить заявку"}
              </button>
              <p className="text-xs text-muted-foreground text-center">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных
              </p>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
