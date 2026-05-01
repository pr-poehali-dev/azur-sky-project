import { useState } from "react";
import Icon from "@/components/ui/icon";

const ContactForm = () => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", contact: "", desc: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="bg-card py-20 px-6">
      <div className="max-w-xl mx-auto">
        <p className="text-sm font-semibold tracking-widest uppercase text-primary text-center mb-3">
          Заявка
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-4">
          Заказать монтаж
        </h2>
        <p className="text-muted-foreground text-center mb-10">
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
            <button
              type="submit"
              className="w-full py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 shadow-lg hover:shadow-primary/40 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Отправить заявку
            </button>
            <p className="text-xs text-muted-foreground text-center">
              Нажимая кнопку, вы соглашаетесь на обработку персональных данных
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
