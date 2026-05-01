import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const tabs = ["Базовый", "Стандарт", "Про"] as const;
type Tab = typeof tabs[number];

const works: Record<Tab, { img: string; title: string; desc: string }[]> = {
  "Базовый": [
    {
      img: "https://cdn.poehali.dev/projects/9df56395-ba9a-47f6-bf1a-8635f544028b/files/b432e0df-e62c-44a2-a372-853496a97399.jpg",
      title: "Lifestyle рилс",
      desc: "Нарезка + музыка из библиотеки",
    },
    {
      img: "https://cdn.poehali.dev/projects/9df56395-ba9a-47f6-bf1a-8635f544028b/files/975f13a0-1074-4a3c-83d9-a1352c3a1d7b.jpg",
      title: "Фуд-блог",
      desc: "Монтаж видео с едой, 45 секунд",
    },
  ],
  "Стандарт": [
    {
      img: "https://cdn.poehali.dev/projects/9df56395-ba9a-47f6-bf1a-8635f544028b/files/c745e3e8-9402-4c5d-9f48-58391af7e421.jpg",
      title: "Бренд-рилс",
      desc: "Цветокоррекция + текстовые подписи",
    },
    {
      img: "https://cdn.poehali.dev/projects/9df56395-ba9a-47f6-bf1a-8635f544028b/files/a0715295-c563-44a8-bdb9-e1c345abd8b8.jpg",
      title: "Фитнес-контент",
      desc: "Динамичный монтаж, 90 секунд",
    },
  ],
  "Про": [
    {
      img: "https://cdn.poehali.dev/projects/9df56395-ba9a-47f6-bf1a-8635f544028b/files/97945744-a2ef-4704-83d7-3abf9a6ea4e6.jpg",
      title: "Кинематографичный рилс",
      desc: "Эффекты + анимированные субтитры",
    },
    {
      img: "https://cdn.poehali.dev/projects/9df56395-ba9a-47f6-bf1a-8635f544028b/files/447cadcc-abec-4b5a-aa14-a5472f4240d9.jpg",
      title: "Fashion Editorial",
      desc: "Премиум монтаж, motion graphics",
    },
  ],
};

const RevealItem = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const { ref, className } = useScrollReveal(delay);
  return <div ref={ref} className={className}>{children}</div>;
};

const Portfolio = () => {
  const [active, setActive] = useState<Tab>("Базовый");
  const { ref: titleRef, className: titleClass } = useScrollReveal(0);
  const { ref: headRef, className: headClass } = useScrollReveal(100);
  const { ref: tabsRef, className: tabsClass } = useScrollReveal(180);

  return (
    <section id="portfolio" className="bg-background py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <p ref={titleRef} className={`text-sm font-semibold tracking-widest uppercase text-primary text-center mb-3 ${titleClass}`}>
          Портфолио
        </p>
        <h2 ref={headRef} className={`text-3xl sm:text-4xl font-bold text-foreground text-center mb-10 ${headClass}`}>
          Наши работы
        </h2>

        <div ref={tabsRef} className={`flex items-center justify-center gap-2 mb-10 flex-wrap ${tabsClass}`}>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                active === tab
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                  : "border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {works[active].map((work, i) => (
            <RevealItem key={`${active}-${i}`} delay={i * 120}>
              <div className="group rounded-2xl overflow-hidden border border-border bg-card hover:-translate-y-1 transition-transform duration-300">
                <div className="aspect-[9/14] overflow-hidden">
                  <img
                    src={work.img}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-foreground font-semibold">{work.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{work.desc}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </div>

        <RevealItem delay={300}>
          <div className="flex justify-center mt-10">
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 shadow-lg hover:shadow-primary/40 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Заказать такой же
            </button>
          </div>
        </RevealItem>
      </div>
    </section>
  );
};

export default Portfolio;
