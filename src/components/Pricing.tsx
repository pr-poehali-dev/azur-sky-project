import Icon from "@/components/ui/icon";

const plans = [
  {
    name: "Базовый",
    price: "1 990 ₽",
    desc: "Для тех, кто только начинает",
    features: [
      "1 рилс до 60 секунд",
      "Нарезка и монтаж",
      "Музыка из библиотеки",
      "1 правка",
    ],
    cta: "Заказать",
    highlight: false,
  },
  {
    name: "Стандарт",
    price: "3 490 ₽",
    desc: "Оптимально для бизнеса",
    features: [
      "1 рилс до 90 секунд",
      "Монтаж + цветокоррекция",
      "Текстовые подписи",
      "Музыка по вашему выбору",
      "2 правки",
    ],
    cta: "Заказать",
    highlight: true,
  },
  {
    name: "Про",
    price: "5 990 ₽",
    desc: "Максимальный результат",
    features: [
      "1 рилс до 3 минут",
      "Полный монтаж + эффекты",
      "Анимированные субтитры",
      "Музыка + озвучка",
      "Безлимитные правки",
    ],
    cta: "Заказать",
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <section className="bg-card py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-semibold tracking-widest uppercase text-primary text-center mb-3">
          Тарифы
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-14">
          Цены на монтаж
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-2xl p-8 flex flex-col gap-6 border transition-transform hover:-translate-y-1 ${
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
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className={`w-full py-3 rounded-full font-semibold transition-all duration-200 ${
                  plan.highlight
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-primary/40"
                    : "border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;