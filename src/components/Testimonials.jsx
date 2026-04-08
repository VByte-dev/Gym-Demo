import { Star, ChevronLeft, ChevronRight, Quote, ArrowRight, TrendingUp } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const testimonials = [
	{
		name: 'Sandy Shaik',
		tag: '7 months ago · 5/5',
		quote:
			'Good trainer and friendly teaching master. Must visit to join this gym.',
		img: './stock/testi1.jpg',
		stat: '-20kg',
		duration: '90 days',
	},
	{
		name: 'Joseph',
		tag: '4 years ago · 5/5',
		quote:
			'Only a few legendary masters in Tamil Nadu, and their lead coach is one of them. Such a humble, down-to-earth person. Very proud to be part of this gym.',
		img: './stock/testi2.jpg',
		stat: '+8kg',
		duration: '6 months',
	},
	{
		name: 'Prabhu S',
		tag: 'Local Guide · 64 reviews',
		quote:
			'Flexible and user-friendly gym. Easy access and usage of equipment without much restrictions. Guidance is available at all times.',
		img: './stock/testi3.jpg',
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
				<div className="grid md:grid-cols-5 gap-0 rounded-3xl overflow-hidden bg-gradient-to-br from-black via-neutral-900 to-black border border-border h-[34rem] md:h-[32rem] animate-fade-in-up transition-transform duration-500 hover:-translate-y-1 shadow-2xl shadow-black/30">
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
						<div className="absolute top-4 left-4 bg-amber-400 text--950 px-4 py-2 rounded-full flex items-center gap-2">
							<TrendingUp size={16} />
							<span className="font-bold text-sm">{t.stat}</span>
							<span className="text-xs opacity-80">in {t.duration}</span>
						</div>
					</div>

					{/* Content - 3 cols */}
					<div
						className={`md:col-span-3 p-8 md:p-12 flex h-full flex-col justify-between transition-opacity duration-500 ${
						isAnimating ? 'opacity-0' : 'opacity-100'
					}`}
					>
						<div>
							<Quote size={40} className="text-amber-300/40 mb-4" />
							<div className="flex gap-1 mb-4">
								{[...Array(5)].map((_, i) => (
									<Star key={i} size={18} className="text-amber-400 fill-amber-400" />
								))}
							</div>
							<blockquote className="text-foreground text-xl md:text-2xl leading-relaxed mb-8 font-light">
								{t.quote}
							</blockquote>
						</div>

						<div className="flex items-center justify-between border-t border-border pt-6">
							<div>
								<p className="text-foreground font-semibold text-lg">{t.name}</p>
								<p className="text-amber-400 text-sm uppercase tracking-widest">
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
												? 'w-8 bg-amber-400'
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
