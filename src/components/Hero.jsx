import { ArrowRight, Play } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useEffect, useRef, useState } from 'react';

const stats = [
	{ value: '2,500+', label: 'Active Members' },
	{ value: '15+', label: 'Expert Trainers' },
	{ value: '98%', label: 'Success Rate' },
];

const parseStatValue = (value) => {
	const suffix = value.replace(/[0-9,]/g, '');
	const number = Number(value.replace(/[^0-9]/g, ''));
	return { number, suffix };
};

export default function Hero() {
	const ref = useScrollReveal();
	const statsRef = useRef(null);
	const [countValues, setCountValues] = useState(stats.map(() => 0));
	const hasAnimated = useRef(false);

	useEffect(() => {
		const el = statsRef.current;
		if (!el) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (!entry.isIntersecting || hasAnimated.current) return;

				hasAnimated.current = true;
				const duration = 1400;
				const targets = stats.map((stat) => parseStatValue(stat.value).number);
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

	return (
		<section
			id="home"
			className="relative min-h-screen flex items-end overflow-hidden"
		>
			<div className="absolute left-10 top-24 h-32 w-32 rounded-full bg-primary/20 blur-3xl animate-blob-float opacity-70 pointer-events-none" />
			<div className="absolute right-10 top-32 h-48 w-48 rounded-full bg-accent/20 blur-3xl animate-blob-float opacity-60 pointer-events-none" />
			<img
				src="./stock/hero.jpg"
				alt="Gym interior with modern equipment"
				className="absolute inset-0 w-full h-full object-cover scale-x-[-1]"
				loading="eager"
			/>
			<div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />

			<div
				ref={ref}
				className="scroll-reveal relative z-10 max-w-7xl mx-auto px-6 pb-16 pt-32 w-full animate-fade-in-up"
			>
				<div className="mb-12">
					<h1 className="font-display text-6xl md:text-9xl leading-[0.85] text-foreground mb-6">
						Train Stronger.
						<br />
						<span className="text-primary">Live Better.</span>
					</h1>
					<p className="text-muted-foreground max-w-md mb-8 leading-relaxed text-md md:text-lg">
						With a 4.8-star rating from 59+ members, Seven Gym in Mathur, Chennai is built for results. If you’re ready to stop delaying and start transforming, this is where it begins.
					</p>
					<div className="flex flex-wrap gap-4 items-center justify-center md:justify-start">
						<a
							href="#pricing"
							className="bg-primary text-primary-foreground font-bold px-8 py-4 rounded-full hover:bg-accent transition-all duration-300 flex items-center gap-2 group text-sm md:text-lg"
						>
							Start Your Journey
							<ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
						</a>
						<a
							href="#features"
							className="border border-foreground/20 text-foreground px-8 py-2 md:py-3 rounded-full hover:border-primary hover:text-primary transition-all duration-300 flex items-center gap-3 "
						>
							<span className="w-10 h-8 rounded-full bg-primary/10 flex items-center justify-center">
								<Play size={16} className="text-primary ml-0.5" />
							</span>
							Watch Video
						</a>
					</div>
				</div>

				{/* Stats bar */}
				<div ref={statsRef} className="text-center grid grid-cols-3 gap-4 border-t border-foreground/10 pt-8">
					{stats.map((s, i) => {
						const { number, suffix } = parseStatValue(s.value);
						const displayValue = countValues[i] >= number
							? s.value
							: `${countValues[i].toLocaleString()}${suffix}`;

						return (
							<div key={s.label}>
								<p className="font-display text-3xl md:text-5xl text-foreground transition-transform duration-700 ease-out motion-reduce:transition-none will-change-transform">
									{displayValue}
								</p>
								<p className="text-muted-foreground text-xs md:text-sm uppercase tracking-widest mt-1">
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
