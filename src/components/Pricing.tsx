import Icon from "@/components/ui/icon";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const plans = [
  {
    name: "Базовый",
    price: "990 ₽",
    desc: "Для тех, кто только начинает",
    features: [
      "1 рилс до 60 секунд",
      "Нарезка и монтаж",
      "Музыка из библиотеки",
      "1 правка",
    ],
    highlight: false,
  },
  {
    name: "Стандарт",
    price: "1 590 ₽",
    desc: "Оптимально для бизнеса",
    features: [
      "1 рилс до 90 секунд",
      "Монтаж + цветокоррекция",
      "Текстовые подписи",
      "Музыка по вашему выбору",
      "2 правки",
    ],
    highlight: true,
  },
  {
    name: "Про",
    price: "2 190 ₽",
    desc: "Максимальный результат",
    features: [
      "1 рилс до 3 минут",
      "Полный монтаж + эффекты",
      "Анимированные субтитры",
      "Музыка + озвучка",
      "Безлимитные правки",
    ],
    highlight: false,
  },
];

const TelegramIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.17 13.561l-2.95-.924c-.64-.204-.654-.64.136-.953l11.57-4.461c.537-.194 1.006.131.836.025z"/>
  </svg>
);

const Pricing = () => {
  const { ref, className } = useScrollReveal();

  return (
    <section className="bg-card py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <p ref={ref} className={`text-sm font-semibold tracking-widest uppercase text-primary text-center mb-3 ${className}`}>
          Тарифы
        </p>
        <h2 ref={ref} className={`text-3xl sm:text-4xl font-bold text-foreground text-center mb-14 ${className}`}>
          Цены на монтаж
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <RevealCard key={i} delay={i * 100}>
              <div
                className={`rounded-2xl p-8 flex flex-col gap-6 border transition-transform hover:-translate-y-1 h-full ${
                  plan.highlight
                    ? "border-primary bg-primary/10 ring-2 ring-primary/40"
                    : "border-border bg-background"
                }`}
              >
                {plan.highlight && (
                  <span className="self-start text-xs font-bold uppercase tracking-widest text-primary bg-primary/20 px-3 py-1 rounded-full">
                    Популярный
                  </span>
                )}
                <div>
                  <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{plan.desc}</p>
                  <p className="text-4xl font-bold text-foreground mt-4">{plan.price}</p>
                </div>
                <ul className="flex flex-col gap-3 flex-1">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-2 mt-auto">
                  <button
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    className={`w-full py-3 rounded-full font-semibold transition-all duration-200 ${
                      plan.highlight
                        ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-primary/40"
                        : "border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary"
                    }`}
                  >
                    Заказать
                  </button>
                  <a
                    href="https://t.me/MagicTrick01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-full font-semibold transition-all duration-200 border border-border text-foreground hover:bg-muted flex items-center justify-center gap-2 text-sm"
                  >
                    <TelegramIcon />
                    Перейти в канал
                  </a>
                  <a
                    href="https://t.me/HAURMA999_BOT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-full font-semibold transition-all duration-200 bg-green-600 text-white hover:bg-green-700 flex items-center justify-center gap-2 text-sm"
                  >
                    <Icon name="CreditCard" size={15} />
                    Оплатить в боте
                  </a>
                </div>
              </div>
            </RevealCard>
          ))}
        </div>
      </div>
    </section>
  );
};

const RevealCard = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const { ref, className } = useScrollReveal(delay);
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default Pricing;
