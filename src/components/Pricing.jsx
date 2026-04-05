import { useState } from 'react';
import { Check, ArrowRight, Zap } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const plans = [
  {
    name: 'Basic',
    monthly: 15,
    annual: 12,
    popular: false,
    desc: 'Perfect for getting started',
    features: [
      'Access to gym floor',
      'Locker room access',
      '2 group classes/week',
      'Basic fitness assessment',
    ],
  },
  {
    name: 'Pro',
    monthly: 30,
    annual: 24,
    popular: true,
    desc: 'Most popular choice',
    features: [
      'Unlimited gym access',
      'All group classes',
      '1 personal training/month',
      'Nutrition consultation',
      'Progress tracking dashboard',
    ],
  },
  {
    name: 'Elite',
    monthly: 55,
    annual: 44,
    popular: false,
    desc: 'For the dedicated athlete',
    features: [
      'Everything in Pro',
      '4 personal trainings/month',
      'Custom meal plans',
      'Recovery & sauna access',
      'Priority booking',
      'Guest passes (2/month)',
    ],
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);
  const ref = useScrollReveal();

  return (
    <section id="pricing" className="bg-secondary py-24 md:py-32">
      <div ref={ref} className="scroll-reveal max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <p className="text-primary uppercase text-xs tracking-widest mb-4 font-medium flex items-center gap-2">
              <span className="w-8 h-px bg-primary" />
              Pricing Plans
            </p>
            <h2 className="font-display text-4xl md:text-6xl text-foreground leading-none">
              Invest In Your<br />
              <span className="text-primary">Best Self.</span>
            </h2>
          </div>

          {/* Toggle */}
          <div className="flex items-center gap-3 mt-6 md:mt-0 bg-card border border-border rounded-full px-4 py-2 justify-center mx-auto md:mx-0">
            <span className={`text-sm font-medium transition-colors ${!annual ? 'text-foreground' : 'text-muted-foreground'}`}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
                annual ? 'bg-primary' : 'bg-muted'
              }`}
              aria-label="Toggle billing period"
            >
              <span
                className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-primary-foreground transition-transform duration-300 ${
                  annual ? 'translate-x-6' : ''
                }`}
              />
            </button>
            <span className={`text-sm font-medium transition-colors ${annual ? 'text-foreground' : 'text-muted-foreground'}`}>
              Annual
              <span className="text-primary text-xs ml-1">-20%</span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl p-8 border transition-all duration-300 relative group hover:-translate-y-1 ${
                p.popular
                  ? 'bg-card border-primary'
                  : 'bg-card border-border hover:border-primary/40'
              }`}
            >
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                  <Zap size={12} />
                  Most Popular
                </div>
              )}

              <p className="text-muted-foreground text-sm mb-2">{p.desc}</p>
              <h3 className="font-display text-3xl text-foreground mb-1">{p.name}</h3>
              <div className="flex items-end gap-1 mb-6">
                <span className="font-display text-5xl md:text-6xl text-foreground leading-none">
                  ${annual ? p.annual : p.monthly}
                </span>
                <span className="text-muted-foreground text-sm mb-2">/mo</span>
              </div>

              <a
                href="#"
                className={`block text-center font-bold py-3.5 rounded-full transition-all duration-300 mb-8 flex items-center justify-center gap-2 group/btn ${
                  p.popular
                    ? 'bg-primary text-primary-foreground hover:bg-accent'
                    : 'border border-border text-foreground hover:border-primary hover:text-primary'
                }`}
              >
                Get Started
                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
              </a>

              <ul className="space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} className="text-primary" />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
