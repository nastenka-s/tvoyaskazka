import heroImage from "@/assets/fairy-bot-hero.png";

const MAX_LINK = "https://max.ru/id352829389470_4_bot";
const TELEGRAM_LINK = "https://t.me/skazkisrebenkombot";

const examples = [
  {
    title: "Костя и Город Роботов",
    href: "https://gykgkporkemmzsnychxd.supabase.co/storage/v1/object/public/dedmoroz-examples/Kostya_roboti.pdf",
  },
  {
    title: "Лия и Фея",
    href: "https://gykgkporkemmzsnychxd.supabase.co/storage/v1/object/public/dedmoroz-examples/Lilya_feya.pdf",
  },
];

const features = ["Сказка с вашим ребёнком в главной роли", "Персональный сюжет за пару минут", "Готовый PDF для чтения и печати"];

const Index = () => {
  const trackOpen = (goal: string) => {
    const key = `story_bot_${goal}_sent`;
    if (!localStorage.getItem(key)) {
      const w = window as any;
      if (typeof w.ym === "function") {
        w.ym(106990821, "reachGoal", goal);
      }
      localStorage.setItem(key, "1");
    }
  };

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Волшебная сказка с ребёнком" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,hsl(var(--storybook-night)/0.78)_0%,hsl(var(--storybook-night)/0.46)_46%,hsl(var(--storybook-night)/0.12)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_84%,hsl(var(--storybook-glow)/0.28),transparent_34%)]" />
      </div>

      <section className="relative z-10 grid h-screen grid-rows-[1fr_auto] px-5 py-5 md:px-10 md:py-8">
        <div className="flex max-w-[720px] flex-col justify-center">
          <p className="mb-2 text-xs font-black uppercase tracking-[0.28em] text-accent drop-shadow-md md:text-sm">бот сказок в MAX и Telegram</p>
          <h1 className="font-display text-[clamp(2.4rem,6vw,5.8rem)] font-black leading-[0.9] text-primary-foreground drop-shadow-[0_6px_28px_hsl(var(--storybook-night)/0.65)]">
            Сказка, где ваш ребёнок — главный герой
          </h1>
          <p className="mt-4 max-w-[560px] text-base font-bold leading-snug text-primary-foreground/90 drop-shadow-md md:text-2xl">
            Бот создаёт персональные волшебные истории по имени, возрасту и любимым темам ребёнка — с приключением, добрым финалом и готовым PDF.
          </p>

          <div className="mt-5 grid max-w-[620px] gap-2 md:grid-cols-3">
            {features.map((feature) => (
              <div key={feature} className="rounded-lg border border-primary-foreground/25 bg-card/18 px-3 py-2 text-sm font-extrabold text-primary-foreground shadow-[0_10px_40px_hsl(var(--storybook-night)/0.2)] backdrop-blur-md md:text-base">
                {feature}
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" onClick={() => trackOpen("telegram_open")} className="inline-flex min-h-12 items-center justify-center rounded-full bg-telegram px-5 text-sm font-black text-primary-foreground shadow-[0_0_28px_hsl(var(--telegram)/0.42)] transition-transform hover:scale-105 md:px-7 md:text-base">
              Открыть в Telegram <span className="ml-2 text-primary-foreground/75">нужен VPN</span>
            </a>
            <a href={MAX_LINK} target="_blank" rel="noopener noreferrer" onClick={() => trackOpen("max_open")} className="inline-flex min-h-12 items-center justify-center rounded-full bg-max px-7 text-sm font-black text-primary-foreground shadow-[0_0_28px_hsl(var(--max)/0.42)] transition-transform hover:scale-105 md:text-base">
              Открыть в MAX
            </a>
          </div>

          <div className="mt-5">
            <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-primary-foreground/75">примеры сказок</p>
            <div className="flex flex-wrap gap-2">
              {examples.map((example) => (
                <a key={example.title} href={example.href} target="_blank" rel="noopener noreferrer" className="rounded-full border border-accent/45 bg-popover/16 px-4 py-2 text-sm font-extrabold text-primary-foreground backdrop-blur-md transition-colors hover:bg-popover/28">
                  {example.title}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-end justify-between gap-4 text-primary-foreground/80">
          <span className="text-xs font-bold md:text-sm">персональные сказки • иллюстрированные PDF • добрые приключения</span>
          <span className="hidden text-xs font-black uppercase tracking-[0.24em] md:block">skazki bot</span>
        </div>
      </section>
    </main>
  );
};

export default Index;
