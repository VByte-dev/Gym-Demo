import { Star, ChevronLeft, ChevronRight, Quote, ArrowRight, TrendingUp } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const testimonials = [
	{
		name: 'Olivia R.',
		tag: 'Lost 20kg in 90 days',
		quote:
			'PulseFit changed my life. The coaches kept me accountable and the community made every session something I looked forward to.',
		img: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800',
		stat: '-20kg',
		duration: '90 days',
	},
	{
		name: 'Marcus J.',
		tag: 'Gained 8kg of muscle in 6 months',
		quote:
			'The personal training program was exactly what I needed. Customized workouts, nutrition guidance, and real results I can see in the mirror.',
		img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800',
		stat: '+8kg',
		duration: '6 months',
	},
	{
		name: 'Sarah K.',
		tag: 'Completed first marathon',
		quote:
			'I went from barely running a mile to finishing a full marathon. The trainers built a program that pushed me without breaking me.',
		img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800',
		stat: '42km',
		duration: '8 months',
	},
];

const stats = [
	{ value: '2,500+', label: 'Members Transformed' },
	{ value: '98%', label: 'Satisfaction Rate' },
	{ value: '15+', label: 'Expert Trainers' },
];

const autoSwitchInterval = 6000;
const animationDuration = 500;

const parseStatValue = (value) => {
	const suffix = value.replace(/[0-9,]/g, '');
	const number = Number(value.replace(/[^0-9]/g, ''));
	return { number, suffix };
};

export default function Testimonials() {
	const [current, setCurrent] = useState(0);
	const [isAnimating, setIsAnimating] = useState(false);
	const [countValues, setCountValues] = useState(stats.map(() => 0));
	const ref = useScrollReveal();
	const statsRef = useRef(null);
	const hasAnimated = useRef(false);

	useEffect(() => {
		const interval = setInterval(() => {
			setIsAnimating(true);
			setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
			setTimeout(() => setIsAnimating(false), animationDuration);
		}, autoSwitchInterval);

		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		const el = statsRef.current;
		if (!el) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (!entry.isIntersecting || hasAnimated.current) return;

				hasAnimated.current = true;
				const targets = stats.map((s) => parseStatValue(s.value).number);
				const duration = 1400;
				const startTime = performance.now();

				const tick = (now) => {
					const progress = Math.min(1, (now - startTime) / duration);
					setCountValues(targets.map((target) => Math.round(target * progress)));

					if (progress < 1) {
						requestAnimationFrame(tick);
					}
				};

				requestAnimationFrame(tick);
				observer.unobserve(el);
			},
			{ threshold: 0.3 }
		);

		observer.observe(el);
		return () => observer.disconnect();
	}, []);

	const navigate = (direction) => {
		if (isAnimating) return;
		setIsAnimating(true);
		setCurrent((c) =>
			direction === 'next'
				? c === testimonials.length - 1
					? 0
					: c + 1
				: c === 0
				? testimonials.length - 1
				: c - 1
		);
		setTimeout(() => setIsAnimating(false), animationDuration);
	};

	const t = testimonials[current];

	return (
		<section className="bg-secondary py-24 md:py-32 overflow-hidden">
			<div ref={ref} className="scroll-reveal max-w-7xl mx-auto px-6">
				{/* Header */}
				<div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
					<div>
						<p className="text-primary uppercase text-xs tracking-widest mb-4 font-medium flex items-center gap-2">
							<span className="w-8 h-px bg-primary" />
							Real Transformations
						</p>
						<h2 className="font-display text-4xl md:text-6xl text-foreground leading-none">
							Success Stories That
							<br />
							<span className="text-primary">Speak For Themselves.</span>
						</h2>
					</div>
					<div className="flex justify-center md:justify-start gap-3 mt-6 md:mt-0">
						<button
							onClick={() => navigate('prev')}
							className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
							aria-label="Previous testimonial"
						>
							<ChevronLeft size={20} />
						</button>
						<button
							onClick={() => navigate('next')}
							className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
							aria-label="Next testimonial"
						>
							<ChevronRight size={20} />
						</button>
					</div>
				</div>

				{/* Main testimonial card */}
				<div className="grid md:grid-cols-5 gap-0 rounded-3xl overflow-hidden bg-card border border-border">
					{/* Image - 2 cols */}
					<div className="md:col-span-2 relative">
						<img
							src={t.img}
							alt={t.name}
							className={`w-full h-72 md:h-full object-cover transition-opacity duration-500 ${
								isAnimating ? 'opacity-0' : 'opacity-100'
							}`}
							loading="lazy"
						/>
						{/* Result badge */}
						<div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full flex items-center gap-2">
							<TrendingUp size={16} />
							<span className="font-bold text-sm">{t.stat}</span>
							<span className="text-xs opacity-80">in {t.duration}</span>
						</div>
					</div>

					{/* Content - 3 cols */}
					<div
						className={`md:col-span-3 p-8 md:p-12 flex flex-col justify-between transition-opacity duration-500 ${
							isAnimating ? 'opacity-0' : 'opacity-100'
						}`}
					>
						<div>
							<Quote size={40} className="text-primary/20 mb-4" />
							<div className="flex gap-1 mb-4">
								{[...Array(5)].map((_, i) => (
									<Star key={i} size={18} className="text-primary fill-primary" />
								))}
							</div>
							<blockquote className="text-foreground text-xl md:text-2xl leading-relaxed mb-8 font-light">
								{t.quote}
							</blockquote>
						</div>

						<div className="flex items-center justify-between border-t border-border pt-6">
							<div>
								<p className="text-foreground font-semibold text-lg">{t.name}</p>
								<p className="text-primary text-sm uppercase tracking-widest">
									{t.tag}
								</p>
							</div>
							{/* Dot indicators */}
							<div className="flex gap-2">
								{testimonials.map((_, i) => (
									<button
										key={i}
										onClick={() => {
											if (!isAnimating) {
												setIsAnimating(true);
												setCurrent(i);
												setTimeout(() => setIsAnimating(false), 500);
											}
										}}
										className={`h-2 rounded-full transition-all duration-300 ${
											i === current
												? 'w-8 bg-primary'
												: 'w-2 bg-border hover:bg-muted-foreground'
										}`}
										aria-label={`Go to testimonial ${i + 1}`}
									/>
								))}
							</div>
						</div>
					</div>
				</div>

				{/* Stats bar + CTA */}
				<div className="mt-8 grid md:grid-cols-3 gap-4" ref={statsRef}>
					{stats.map((s, i) => {
						const { number, suffix } = parseStatValue(s.value);
						const displayValue = countValues[i] >= number ? s.value : `${countValues[i].toLocaleString()}${suffix}`;

						return (
							<div
								key={s.label}
								className="bg-card border border-border rounded-2xl p-6 text-center"
							>
								<p className="font-display text-3xl md:text-4xl text-primary">
									{displayValue}
								</p>
								<p className="text-muted-foreground text-sm mt-1">
									{s.label}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
