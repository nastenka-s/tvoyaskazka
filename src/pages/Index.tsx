import { useState } from "react";
import pinkBg from "@/assets/pink-flowers-bg.png";
import maxLogo from "@/assets/max-logo.png";
import flower1 from "@/assets/flower1.jpg";
import flower2 from "@/assets/flower2.jpg";
import flower3 from "@/assets/flower3.jpg";
import flower4 from "@/assets/flower4.jpg";

const MAX_LINK = "https://max.ru/join/m5Sm4F83OYsucwisLF35yFIvS1bB0rpbZ9w21GpRWwk";

const benefits = [
  "Советы по уходу",
  "Идеи и фото интерьеров",
  "Ответы на вопросы",
  "Необычные растения",
];

const PhoneMockup = ({ image, hasPlay, className = "" }: { image: string; hasPlay?: boolean; className?: string }) => (
  <div className={`relative ${className}`}>
    {/* Phone frame */}
    <div className="relative rounded-[2rem] border-[3px] border-[hsl(0_0%_15%)] bg-[hsl(0_0%_10%)] p-1.5 shadow-2xl">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-[hsl(0_0%_10%)] rounded-b-xl z-20" />
      {/* Screen */}
      <div className="relative rounded-[1.6rem] overflow-hidden bg-black aspect-[9/16]">
        <img src={image} alt="Растение" className="w-full h-full object-cover" />
        {hasPlay && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-[hsl(0_0%_100%_/_0.85)] flex items-center justify-center shadow-lg backdrop-blur-sm">
              <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 ml-1">
                <path d="M8 5.14v14.72a1 1 0 001.5.86l11.74-7.36a1 1 0 000-1.72L9.5 4.28a1 1 0 00-1.5.86z" fill="hsl(350, 60%, 50%)" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
);

const Index = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);

  const handleCtaClick = () => {
    setShowPopup(true);
  };

  const handleGoToMax = () => {
    setHasClicked(true);
    if (!localStorage.getItem("max_goal_sent")) {
      const w = window as any;
      if (typeof w.ym === "function") {
        w.ym(106990821, "reachGoal", "subscribe_click");
      }
      localStorage.setItem("max_goal_sent", "1");
    }
  };

  return (
    <main className="relative min-h-screen w-screen overflow-hidden">
      {/* Full background */}
      <div className="absolute inset-0">
        <img src={pinkBg} alt="Красивые домашние цветы" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(130_40%_30%_/_0.15)] via-[hsl(350_30%_90%_/_0.3)] to-[hsl(350_40%_95%_/_0.7)]" />
      </div>

      {/* Bottom green brush */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden z-[1]">
        <div className="absolute -bottom-4 -left-8 w-[120%] h-12 bg-gradient-to-r from-[hsl(140_60%_35%)] via-[hsl(130_55%_40%)] to-[hsl(140_60%_35%)] rotate-1 rounded-t-[40%] opacity-80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-screen flex-col items-center justify-center px-4 py-4 overflow-hidden">
        {/* Header with brush stroke */}
        <div className="relative text-center mb-3">
          <h1 className="font-display text-xl md:text-3xl font-black text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)] leading-tight">
            Подпишитесь на канал
          </h1>
          <div className="relative inline-block mt-0.5">
            <div className="absolute inset-0 -inset-x-4 -inset-y-1 bg-gradient-to-r from-[hsl(340_60%_75%_/_0.6)] via-[hsl(350_60%_80%_/_0.7)] to-[hsl(340_60%_75%_/_0.6)] rounded-lg -skew-y-1" />
            <h2 className="relative font-display text-2xl md:text-4xl font-black text-[hsl(350_50%_35%)] italic drop-shadow-[0_1px_2px_rgba(255,255,255,0.5)]">
              Любимый Цветочек
            </h2>
          </div>
          <p className="mt-0.5 text-base font-black text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)]">
            в MAX!
          </p>
        </div>

        {/* Phone mockups section */}
        <div className="relative flex items-center justify-center gap-3 mb-3 w-full max-w-sm mx-auto">
          <div className="-rotate-6 scale-90 -mr-4 z-[2]">
            <PhoneMockup image={flower1} hasPlay className="w-28" />
          </div>
          <div className="relative z-[3] -mx-2">
            <svg viewBox="0 0 48 32" className="w-8 h-6 drop-shadow-lg" fill="none">
              <path d="M4 16h32M28 6l12 10-12 10" stroke="hsl(55, 80%, 55%)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="rotate-3 z-[2]">
            <PhoneMockup image={flower2} className="w-36" />
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={handleCtaClick}
          className="relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[hsl(280_50%_45%)] via-[hsl(320_55%_50%)] to-[hsl(340_60%_55%)] px-6 py-3 text-sm font-black text-white shadow-[0_6px_30px_hsl(320_50%_40%_/_0.4)] transition-all hover:scale-105 hover:shadow-[0_8px_40px_hsl(320_50%_40%_/_0.5)] active:scale-100"
        >
          <span>Подписаться</span>
          <img src={maxLogo} alt="MAX" className="w-6 h-6 rounded-md" />
          <span className="font-black text-base">MAX</span>
        </button>

        <p className="mt-1 mb-2 text-xs font-semibold text-[hsl(0_0%_100%_/_0.8)] drop-shadow-sm">
          👉 Бесплатная подписка на канал
        </p>

        {/* "Необычные цветы" label */}
        <div className="relative mb-2">
          <div className="inline-block rounded-full bg-gradient-to-r from-[hsl(300_40%_50%_/_0.8)] to-[hsl(340_50%_55%_/_0.8)] px-4 py-1 shadow-lg backdrop-blur-sm">
            <span className="text-xs font-black text-white drop-shadow-sm">🌺 Необычные цветы</span>
          </div>
        </div>

        {/* Benefits with green checkmarks */}
        <div className="grid grid-cols-2 gap-1.5 mx-auto max-w-xs mb-3 w-full">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="flex items-center gap-2 rounded-lg bg-[hsl(0_0%_100%_/_0.8)] backdrop-blur-md border border-[hsl(130_30%_80%_/_0.6)] px-2.5 py-1.5 shadow-md"
            >
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-[hsl(140_60%_40%)] to-[hsl(130_50%_30%)] flex items-center justify-center shadow-sm">
                <svg viewBox="0 0 16 16" className="w-3 h-3" fill="none">
                  <path d="M3.5 8.5l3 3 6-7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-xs font-bold text-[hsl(150_30%_20%)]">{b}</span>
            </div>
          ))}
        </div>

        {/* Small gallery strip */}
        <div className="flex gap-1.5 justify-center">
          {[flower3, flower4, flower1].map((img, i) => (
            <div key={i} className="w-16 h-16 rounded-xl overflow-hidden border-2 border-white shadow-lg">
              <img src={img} alt="Растение" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Popup overlay */}
      {showPopup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setShowPopup(false)}
        >
          <div
            className="mx-4 w-full max-w-sm rounded-2xl bg-white p-6 text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={maxLogo} alt="MAX мессенджер" className="mx-auto mb-3 w-16 h-16 rounded-2xl" />
            <h2 className="text-lg font-black text-[hsl(350_40%_25%)]">
              Переход в мессенджер MAX
            </h2>
            <p className="mt-2 text-sm text-[hsl(350_25%_40%)]">
              Вы будете перенаправлены в мессенджер MAX для подписки на канал «Любимый Цветочек»
            </p>
            {hasClicked ? (
              <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[hsl(0_0%_60%)] to-[hsl(0_0%_50%)] px-8 py-3.5 text-base font-black text-white/70 cursor-not-allowed">
                ✅ Вы уже перешли
              </div>
            ) : (
              <a
                href={MAX_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleGoToMax}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[hsl(280_50%_45%)] via-[hsl(320_55%_50%)] to-[hsl(340_60%_55%)] px-8 py-3.5 text-base font-black text-white shadow-lg transition-all hover:scale-105 hover:brightness-110"
              >
                🌸 Перейти в MAX
              </a>
            )}
            <button
              onClick={() => setShowPopup(false)}
              className="mt-3 block w-full text-xs font-semibold text-[hsl(350_20%_55%)] hover:text-[hsl(350_30%_35%)] transition-colors"
            >
              Отмена
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Index;
