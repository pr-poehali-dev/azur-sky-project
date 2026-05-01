import Icon from "@/components/ui/icon";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  {
    icon: "MessageCircle",
    title: "Заявка",
    desc: "Оставляете заявку или пишете нам. Обсуждаем задачу, стиль и дедлайн.",
  },
  {
    icon: "Upload",
    title: "Материалы",
    desc: "Присылаете исходники: видео, фото, музыку или техническое задание.",
  },
  {
    icon: "Scissors",
    title: "Монтаж",
    desc: "Монтируем ролик: нарезка, цветокоррекция, текст, переходы и звук.",
  },
  {
    icon: "CheckCircle",
    title: "Готово!",
    desc: "Получаете готовый рилс в формате MP4. Две правки уже включены в цену.",
  },
];

const RevealItem = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const { ref, className } = useScrollReveal(delay);
  return <div ref={ref} className={className}>{children}</div>;
};

const HowWeWork = () => {
  const { ref: titleRef, className: titleClass } = useScrollReveal(0);
  const { ref: headRef, className: headClass } = useScrollReveal(100);

  return (
    <section className="bg-background py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <p ref={titleRef} className={`text-sm font-semibold tracking-widest uppercase text-primary text-center mb-3 ${titleClass}`}>
          Процесс работы
        </p>
        <h2 ref={headRef} className={`text-3xl sm:text-4xl font-bold text-foreground text-center mb-14 ${headClass}`}>
          Как мы работаем
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <RevealItem key={i} delay={i * 120}>
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center ring-1 ring-primary/30">
                  <Icon name={step.icon} size={28} className="text-primary" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-primary/60">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>
            </RevealItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
