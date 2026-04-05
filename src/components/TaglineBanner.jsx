import { useScrollReveal } from '../hooks/useScrollReveal';

const marqueeItems = [
  'Smart Coaching',
  'Real Strength',
  'Visible Progress',
  'Peak Performance',
  'Total Wellness',
];

export default function TaglineBanner() {
  const ref = useScrollReveal();

  return (
    <section className="relative py-8 overflow-hidden bg-primary">
      {/* Scrolling marquee */}
      <div className="flex whitespace-nowrap">
        <div className="animate-marquee flex items-center gap-8">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="font-display text-4xl md:text-6xl text-primary-foreground flex items-center gap-8">
              {item}
              <span className="text-primary-foreground/30">✦</span>
            </span>
          ))}
        </div>
        <div className="animate-marquee flex items-center gap-8" aria-hidden>
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="font-display text-4xl md:text-6xl text-primary-foreground flex items-center gap-8">
              {item}
              <span className="text-primary-foreground/30">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
