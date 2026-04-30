import { useState } from "react";
import { BookOpen, FileText, Music, Sparkles, Wand2 } from "lucide-react";
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

const features = [
  { label: "Ваш ребёнок — главный герой сказки", Icon: Sparkles },
  { label: "Каждый раз уникальный сюжет", Icon: Wand2 },
  { label: "Готовая PDF-книга", Icon: BookOpen },
  { label: "Индивидуальная песня-поздравление", Icon: Music },
];

type Messenger = "telegram" | "max";

const messengerData = {
  telegram: {
    name: "Telegram",
    link: TELEGRAM_LINK,
    goal: "telegram_open",
    note: "Для открытия Telegram может понадобиться VPN.",
    button: "Создать свою сказку в Telegram",
    className: "bg-telegram shadow-[0_0_28px_hsl(var(--telegram)/0.42)]",
  },
  max: {
    name: "MAX",
    link: MAX_LINK,
    goal: "max_open",
    note: "Вы перейдёте в бот сказок в MAX.",
    button: "Создать свою сказку в MAX",
    className: "bg-max shadow-[0_0_28px_hsl(var(--max)/0.42)]",
  },
};

const Index = () => {
  const [selectedMessenger, setSelectedMessenger] = useState<Messenger | null>(null);
  const [openedMessengers, setOpenedMessengers] = useState<Record<Messenger, boolean>>(() => ({
    telegram: sessionStorage.getItem("story_bot_telegram_opened") === "1",
    max: sessionStorage.getItem("story_bot_max_opened") === "1",
  }));

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

  const handleOpen = (messenger: Messenger) => {
    if (openedMessengers[messenger]) return;

    const data = messengerData[messenger];
    sessionStorage.setItem(`story_bot_${messenger}_opened`, "1");
    setOpenedMessengers((current) => ({ ...current, [messenger]: true }));
    trackOpen(data.goal);
  };

  const selectedData = selectedMessenger ? messengerData[selectedMessenger] : null;
  const selectedAlreadyOpened = selectedMessenger ? openedMessengers[selectedMessenger] : false;

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Волшебная сказка с ребёнком" className="h-full w-full object-cover object-[62%_center] md:object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,hsl(var(--storybook-night)/0.78)_0%,hsl(var(--storybook-night)/0.46)_46%,hsl(var(--storybook-night)/0.12)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_84%,hsl(var(--storybook-glow)/0.28),transparent_34%)]" />
      </div>

      <section className="relative z-10 grid h-screen grid-rows-[1fr_auto] px-5 py-5 md:px-10 md:py-8">
        <div className="flex max-w-[720px] flex-col justify-center">
          <p className="mb-2 text-xs font-black uppercase tracking-[0.28em] text-accent drop-shadow-md md:text-sm">бот сказок в MAX и Telegram</p>
          <h1 className="font-display text-[clamp(2.6rem,7vw,6.4rem)] font-bold leading-[0.95] text-primary-foreground drop-shadow-[0_6px_28px_hsl(var(--storybook-night)/0.65)]">
            Сказка, где ваш ребёнок — главный герой
          </h1>
          <p className="mt-3 max-w-[360px] text-sm font-bold leading-snug text-primary-foreground/88 drop-shadow-md md:text-lg">
            Персональная сказка и PDF за пару минут.
          </p>

          <div className="mt-3 flex w-fit max-w-full flex-wrap items-center gap-x-2 gap-y-1 rounded-xl border border-primary-foreground/18 bg-card/12 px-3 py-1.5 text-primary-foreground shadow-[0_10px_40px_hsl(var(--storybook-night)/0.14)] backdrop-blur-md md:px-4">
            {features.map(({ label, Icon }) => (
              <div key={label} className="inline-flex items-center gap-1.5 text-[11px] font-extrabold leading-none md:text-xs">
                <Icon className="h-3.5 w-3.5 shrink-0 text-accent md:h-4 md:w-4" aria-hidden="true" />
                <span className="whitespace-nowrap">{label}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 flex w-fit max-w-full flex-col gap-1.5 rounded-2xl border border-accent/45 bg-popover/18 px-3 py-2 text-primary-foreground shadow-[0_12px_42px_hsl(var(--storybook-night)/0.2)] backdrop-blur-md md:px-4">
            <span className="text-[10px] font-black uppercase tracking-[0.08em] text-accent md:text-xs md:tracking-[0.16em]">До 1 июня</span>
            <div className="flex flex-nowrap items-baseline gap-x-1.5 whitespace-nowrap md:gap-x-2">
              <span className="text-sm font-extrabold md:text-base">Сказка</span>
              <span className="text-base font-black md:text-2xl">349₽</span>
              <span className="text-xs font-bold text-primary-foreground/58 line-through md:text-sm">549₽</span>
            </div>
            <div className="flex flex-nowrap items-baseline gap-x-1.5 whitespace-nowrap md:gap-x-2">
              <span className="text-sm font-extrabold md:text-base">Сказка + песня</span>
              <span className="text-base font-black md:text-2xl">399₽</span>
              <span className="text-xs font-bold text-primary-foreground/58 line-through md:text-sm">650₽</span>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <button type="button" onClick={() => setSelectedMessenger("telegram")} className="inline-flex min-h-12 items-center justify-center rounded-full bg-telegram px-5 text-sm font-black text-primary-foreground shadow-[0_0_28px_hsl(var(--telegram)/0.42)] transition-transform hover:scale-105 md:px-7 md:text-base">
              Создать свою сказку в Telegram <span className="ml-2 text-primary-foreground/75">нужен VPN</span>
            </button>
            <button type="button" onClick={() => setSelectedMessenger("max")} className="inline-flex min-h-12 items-center justify-center rounded-full bg-max px-7 text-sm font-black text-primary-foreground shadow-[0_0_28px_hsl(var(--max)/0.42)] transition-transform hover:scale-105 md:text-base">
              Создать свою сказку в MAX
            </button>
          </div>

          <div className="mt-5">
            <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-primary-foreground/75">примеры сказок</p>
            <div className="flex flex-wrap gap-2">
              {examples.map((example) => (
                <a key={example.title} href={example.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-accent/45 bg-popover/16 px-4 py-2 text-sm font-extrabold text-primary-foreground backdrop-blur-md transition-colors hover:bg-popover/28">
                  <FileText className="h-4 w-4 text-accent" aria-hidden="true" />
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

      {selectedData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-storybook-night/60 px-4 backdrop-blur-sm" onClick={() => setSelectedMessenger(null)}>
          <div className="w-full max-w-sm rounded-2xl border border-primary-foreground/15 bg-storybook-night/85 p-5 text-center text-primary-foreground shadow-[0_24px_80px_hsl(var(--storybook-night)/0.55)] backdrop-blur-xl" onClick={(event) => event.stopPropagation()}>
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/80 text-3xl shadow-[0_0_30px_hsl(var(--storybook-glow)/0.25)]">✨</div>
            <h2 className="font-display text-3xl font-bold leading-tight">Перейти в {selectedData.name}?</h2>
            <p className="mt-2 text-sm font-bold leading-snug text-primary-foreground/82">{selectedData.note}</p>
            {selectedAlreadyOpened ? (
              <button type="button" disabled className="mt-5 inline-flex min-h-12 w-full cursor-not-allowed items-center justify-center rounded-full bg-muted px-5 text-sm font-black text-muted-foreground">
                Уже открывали в этой сессии
              </button>
            ) : (
              <a href={selectedData.link} target="_blank" rel="noopener noreferrer" onClick={() => handleOpen(selectedMessenger)} className={`mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-full px-5 text-sm font-black text-primary-foreground transition-transform hover:scale-[1.02] ${selectedData.className}`}>
                {selectedData.button}
              </a>
            )}
            <button type="button" onClick={() => setSelectedMessenger(null)} className="mt-3 text-sm font-extrabold text-primary-foreground/70 transition-colors hover:text-primary-foreground">
              Отмена
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Index;
