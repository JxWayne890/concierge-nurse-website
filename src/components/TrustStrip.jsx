import { Star, BookOpen, Users, Target } from 'lucide-react';
import { useState, useEffect, useRef, useCallback } from 'react';

const items = [
  { icon: Star, text: 'Five-Star Rated by Every Cohort Graduate', delay: 0 },
  { icon: BookOpen, text: 'Education, Consulting & Hands-On Coaching', delay: 0.5 },
  { icon: Users, text: 'Trusted by Nurses Building Private-Pay Businesses', delay: 1 },
  { icon: Target, text: 'Strategic Business-Building, Not Theory', delay: 1.5 },
];

function ScrollingText({ text, isActive }) {
  return (
    <div
      className="overflow-hidden whitespace-nowrap"
      style={{
        maxWidth: isActive ? 'calc(100vw - 120px)' : 0,
        opacity: isActive ? 1 : 0,
        transition: 'max-width 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.3s ease',
      }}
    >
      <div
        className="inline-flex gap-12"
        style={{
          animation: isActive ? 'trust-scroll-left 6s linear infinite' : 'none',
        }}
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="font-body text-white/70 md:text-charcoal/80 text-[0.7rem] font-medium tracking-[0.08em] uppercase shrink-0"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TrustStrip() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [pressed, setPressed] = useState(null);
  const timerRef = useRef(null);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const handleTap = useCallback((index) => {
    clearTimer();
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
      timerRef.current = setTimeout(() => {
        setActiveIndex(null);
      }, 3000);
    }
  }, [activeIndex, clearTimer]);

  useEffect(() => {
    return () => clearTimer();
  }, [clearTimer]);

  const expandsRight = (index) => index <= 1;
  const isIdle = activeIndex === null;

  return (
    <section className="relative overflow-hidden">
      {/* Desktop: cream background / Mobile: navy gradient fading between navy sections */}
      <div className="hidden md:block absolute inset-0 bg-cream border-y border-cream-dark/30" />
      <div className="md:hidden absolute inset-0 bg-gradient-to-b from-navy via-navy/80 to-navy" />
      <div className="relative max-w-[1400px] mx-auto px-6 py-6 md:py-8 lg:py-10">

        {/* Mobile View: Interactive expanding icons */}
        <div className="md:hidden py-3 overflow-hidden">
          <div className="flex items-center justify-center gap-6">
            {items.map((item, index) => {
              const isActive = activeIndex === index;
              const isRight = expandsRight(index);
              const isPressed = pressed === index;
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex items-center cursor-pointer select-none shrink-0"
                  style={{
                    transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    flexDirection: isRight ? 'row' : 'row-reverse',
                  }}
                  onClick={() => handleTap(index)}
                  onTouchStart={() => setPressed(index)}
                  onTouchEnd={() => setPressed(null)}
                  onMouseDown={() => setPressed(index)}
                  onMouseUp={() => setPressed(null)}
                  onMouseLeave={() => setPressed(null)}
                >
                  {/* Icon circle */}
                  <div
                    className="shrink-0 flex items-center justify-center rounded-full"
                    style={{
                      width: isActive ? 44 : 58,
                      height: isActive ? 44 : 58,
                      border: isActive
                        ? '2px solid var(--color-gold)'
                        : '1.5px solid rgba(196, 162, 101, 0.35)',
                      background: isActive
                        ? 'rgba(196, 162, 101, 0.15)'
                        : 'rgba(255, 255, 255, 0.08)',
                      boxShadow: isActive
                        ? '0 0 20px rgba(196, 162, 101, 0.4), inset 0 0 8px rgba(196, 162, 101, 0.1)'
                        : isPressed
                          ? '0 2px 8px rgba(196, 162, 101, 0.25)'
                          : '0 3px 15px rgba(0, 0, 0, 0.2), 0 0 8px rgba(196, 162, 101, 0.08)',
                      transform: isPressed && !isActive ? 'scale(0.93)' : 'scale(1)',
                      transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                      animation: isIdle ? `trust-pulse 3s ease-in-out ${item.delay}s infinite` : 'none',
                    }}
                  >
                    <Icon
                      size={isActive ? 18 : 22}
                      strokeWidth={1.5}
                      className="text-gold transition-all duration-300"
                    />
                  </div>

                  {/* Scrolling text ticker */}
                  <div
                    style={{
                      marginLeft: isRight ? (isActive ? 10 : 0) : 0,
                      marginRight: !isRight ? (isActive ? 10 : 0) : 0,
                      transition: 'margin 0.4s ease',
                    }}
                  >
                    <ScrollingText
                      text={item.text}
                      isActive={isActive}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Desktop View: Clean Minimal Row */}
        <div className="hidden md:flex items-center justify-center gap-x-8 lg:gap-x-12 xl:gap-x-16">
          {items.map((item) => (
            <div key={item.text} className="flex items-center gap-3">
              <item.icon size={18} strokeWidth={1.5} className="text-gold flex-shrink-0" />
              <span className="text-charcoal/70 text-[0.75rem] lg:text-[0.8rem] font-medium tracking-wide">
                {item.text}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
