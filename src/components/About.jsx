import { ArrowRight, Target, Flame, Trophy } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const highlights = [
  { icon: Target, label: 'Goal-Oriented Programs' },
  { icon: Flame, label: 'High-Intensity Training' },
  { icon: Trophy, label: 'Award-Winning Coaches' },
];

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="features" className="bg-secondary py-24 md:py-32">
      <div
        ref={ref}
        className="scroll-reveal max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <p className="text-primary uppercase text-xs tracking-widest mb-4 font-medium flex items-center gap-2">
            <span className="w-8 h-px bg-primary" />
            About Us
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground leading-none mb-6">
            Empowering Every Body to Move{' '}
            <span className="text-primary">Stronger.</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
            At PulseFit, we believe that fitness is more than just lifting
            weights. It&apos;s about building a lifestyle that makes you feel
            confident, energized, and unstoppable every single day.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Our state-of-the-art facilities paired with certified coaches create
            the perfect environment for beginners and athletes alike to reach
            their peak potential.
          </p>

          {/* Highlight pills */}
          <div className="flex flex-wrap gap-3 mb-8">
            {highlights.map((h) => (
              <div key={h.label} className="flex items-center w-full justify-center md:w-fit gap-2 bg-card border border-border rounded-full px-4 py-2">
                <h.icon size={16} className="text-primary" />
                <span className="text-foreground text-sm font-medium">{h.label}</span>
              </div>
            ))}
          </div>

          <a
            href="#program"
            className="inline-flex items-center gap-2 text-primary font-semibold group"
          >
            Explore Our Programs
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800"
            alt="Athlete performing a workout"
            className="rounded-2xl w-full object-cover aspect-[4/5] border border-lime-400"
            loading="lazy"
          />
          {/* Floating card */}
          <div className="w-full md:w-fit absolute -bottom-6 md:-left-8 bg-card border border-lime-400 border-border rounded-2xl p-5 flex items-center gap-4 shadow-2xl">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <Trophy size={22} className="text-primary-foreground" />
            </div>
            <div className=''>
              <p className="font-display text-2xl text-foreground leading-none">10+</p>
              <p className="text-muted-foreground text-xs uppercase tracking-widest">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
