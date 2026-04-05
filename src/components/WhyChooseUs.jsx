import {
  CheckCircle,
  Dumbbell,
  Clock,
  Users,
  BarChart3,
  Star,
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const features = [
  { icon: CheckCircle, title: 'Certified & Experienced Coaches', desc: 'Every trainer is nationally certified with 5+ years of hands-on experience.' },
  { icon: Dumbbell, title: 'Premium Equipment', desc: 'Top-of-the-line machines and free weights from leading fitness brands.' },
  { icon: Clock, title: 'Open 24/7', desc: 'Train on your schedule — our doors never close, day or night.' },
  { icon: Users, title: 'Supportive Community', desc: 'Join a tribe of like-minded people who push each other forward.' },
  { icon: BarChart3, title: 'Progress Tracking', desc: 'Smart dashboards and body composition scans to track your transformation.' },
  { icon: Star, title: 'Five-Star Experience', desc: 'From locker rooms to smoothie bars — every detail is designed for you.' },
];

export default function WhyChooseUs() {
  const ref = useScrollReveal();

  return (
    <section className="bg-secondary py-24 md:py-32">
      <div
        ref={ref}
        className="scroll-reveal max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start"
      >
        <div className="md:sticky md:top-24">
          <p className="text-primary uppercase text-xs tracking-widest mb-4 font-medium flex items-center gap-2">
            <span className="w-8 h-px bg-primary" />
            About Our Gym
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight">
            Turn Your Workout Into a Lifestyle That Moves You Forward
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 auto-rows-auto">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`bg-card rounded-2xl p-6 border border-border hover:border-primary/40 transition-all duration-300 ${
                i === 0 ? 'sm:col-span-2 sm:flex sm:items-center sm:gap-6' :
                i === 3 ? 'sm:col-span-2 sm:flex sm:items-center sm:gap-6' : ''
              }`}
            >
              <div className={`shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 ${
                i === 0 || i === 3 ? 'sm:mb-0' : ''
              }`}>
                <f.icon size={22} className="text-primary" />
              </div>
              <div>
                <h4 className="text-foreground font-semibold mb-1">{f.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
