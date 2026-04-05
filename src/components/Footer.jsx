import { Instagram, Twitter, Youtube, ArrowRight, MapPin, Phone, Mail, Clock, Dumbbell } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Programs', href: '#services' },
  { label: 'Trainers', href: '#trainers' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
];

const programs = ['Strength Training', 'HIIT Classes', 'Yoga & Mobility', 'Personal Coaching', 'Nutrition Plans'];

const socials = [
  { Icon: Instagram, label: 'Instagram', href: '#' },
  { Icon: Twitter, label: 'Twitter', href: '#' },
  { Icon: Youtube, label: 'YouTube', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-background relative overflow-hidden">
      {/* Top CTA Banner */}
      <div className="relative bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-display text-4xl md:text-6xl text-foreground leading-none mb-3">
              Ready To <span className="text-primary">Transform?</span>
            </h3>
            <p className="text-muted-foreground max-w-md">
              Join 2,500+ members who already made the best decision of their lives.
            </p>
          </div>
          <a
            href="#pricing"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent transition-colors duration-300 flex items-center gap-3 group shrink-0"
          >
            Get Started Today
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
        {/* Decorative accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4">
            <div className="flex items-center gap-2 mb-5">
              <Dumbbell size={28} className="text-primary" />
              <span className="font-display text-4xl text-foreground leading-none">
                Pulse<span className="text-primary">Fit</span>
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-xs">
              Elevate your fitness journey with world-class coaching, cutting-edge facilities, and a community that pushes you further.
            </p>
            {/* Newsletter */}
            <p className="text-foreground text-sm font-semibold mb-3 uppercase tracking-widest">Stay Updated</p>
            <div className="flex max-w-sm">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-secondary border border-border rounded-l-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground flex-1 outline-none focus:border-primary transition-colors"
              />
              <button className="bg-primary text-primary-foreground px-5 rounded-r-xl hover:bg-accent transition-colors duration-300">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-foreground font-semibold mb-5 uppercase text-xs tracking-widest">Navigate</h4>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-primary transition-all duration-300" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="col-span-1 md:col-span-3">
            <h4 className="text-foreground font-semibold mb-5 uppercase text-xs tracking-widest">Programs</h4>
            <ul className="space-y-3">
              {programs.map((p) => (
                <li key={p}>
                  <a
                    href="#services"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-primary transition-all duration-300" />
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-2 md:col-span-3">
            <h4 className="text-foreground font-semibold mb-5 uppercase text-xs tracking-widest">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground text-sm">123 Fitness Blvd, Downtown,<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <span className="text-muted-foreground text-sm">+1 (555) 234-5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <span className="text-muted-foreground text-sm">hello@pulsefit.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-primary shrink-0" />
                <span className="text-muted-foreground text-sm">Mon–Sat: 5AM – 10PM</span>
              </li>
            </ul>

            {/* Socials */}
            <div className="flex gap-3 mt-6">
              {socials.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="w-10 h-10 rounded-xl bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary-foreground hover:bg-primary hover:border-primary transition-all duration-300"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-muted-foreground text-xs">© 2025 PulseFit. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-primary text-xs transition-colors">Terms of Service</a>
            <a href="#" className="text-muted-foreground hover:text-primary text-xs transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
