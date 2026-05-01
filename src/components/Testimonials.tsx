import { useScrollReveal } from "@/hooks/useScrollReveal";

const reviews = [
  {
    name: "Аня К.",
    role: "Блогер, 120k подписчиков",
    text: "Заказала монтаж рилса для рекламы — получила его за сутки. Ролик зашёл на 2 миллиона просмотров!",
    avatar: "А",
  },
  {
    name: "Максим Д.",
    role: "Владелец кофейни",
    text: "Сделали рилс для нашей кофейни. Сторис и рилс дали +40 новых гостей за первую неделю. Огонь!",
    avatar: "М",
  },
  {
    name: "Salim A.",
    role: "Интернет-магазин одежды",
    text: "Работаем постоянно уже 3 месяца. Команда понимает задачу с полуслова, правки вносят быстро.",
    avatar: "S",
  },
  {
    name: "Карина Л.",
    role: "Фитнес-тренер",
    text: "Заказала пакет из 5 рилсов — все сданы в срок. Подписчики выросли в 2 раза за месяц!",
    avatar: "К",
  },
  {
    name: "Дмитрий В.",
    role: "Ресторан, Москва",
    text: "Снимаем сами, монтируют они. Качество на уровне топовых студий, а цена раз в пять ниже.",
    avatar: "Д",
  },
  {
    name: "Lena M.",
    role: "Beauty-мастер",
    text: "Первый же рилс собрал 500к просмотров. Запись на два месяца вперёд — не ожидала такого эффекта!",
    avatar: "L",
  },
];

const RevealCard = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const { ref, className } = useScrollReveal(delay);
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

const Testimonials = () => {
  const { ref, className } = useScrollReveal();

  return (
    <section className="bg-background py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <p ref={ref} className={`text-sm font-semibold tracking-widest uppercase text-primary text-center mb-3 ${className}`}>
          Отзывы
        </p>
        <h2 ref={ref} className={`text-3xl sm:text-4xl font-bold text-foreground text-center mb-14 ${className}`}>
          Что говорят клиенты
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <RevealCard key={i} delay={i * 80}>
              <div className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-4 h-full">
                <p className="text-3xl text-primary">"</p>
                <p className="text-foreground text-sm leading-relaxed flex-1">{r.text}</p>
                <div className="flex items-center gap-3 mt-2">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                    {r.avatar}
                  </div>
                  <div>
                    <p className="text-foreground font-semibold text-sm">{r.name}</p>
                    <p className="text-muted-foreground text-xs">{r.role}</p>
                  </div>
                </div>
              </div>
            </RevealCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
