import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const services = [
	{
		name: 'Personal Training',
		desc: 'One-on-one coaching built around your body, goals, and schedule. Every session is guided so you train smarter and stronger with clear next steps.',
		img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600',
	},
	{
		name: 'Group Training',
		desc: 'Local classes designed for members who want energy, accountability, and fast results. Expert coaches keep every workout focused, safe, and motivating.',
		img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600',
	},
	{
		name: 'Team Fitness',
		desc: 'Small-group programs for friends, coworkers, and teams that build strength, discipline, and everyday confidence through structured sessions and support.',
		img: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600',
	},
];

export default function Services() {
	const [active, setActive] = useState(0);
	const ref = useScrollReveal();

	return (
		<section id="programs" className="bg-background py-24 md:py-32">
			<div ref={ref} className="scroll-reveal max-w-7xl mx-auto px-6">
				<p className="text-primary uppercase text-xs tracking-widest mb-4 font-medium flex items-center gap-2">
					<span className="w-8 h-px bg-primary" />
					Our Services
				</p>
				<h2 className="font-display text-4xl md:text-6xl text-foreground leading-tight max-w-3xl mb-6">
					Services designed for real progress, consistency, and local support.
				</h2>

				<div className="mt-12 divide-y divide-border">
					{services.map((s, i) => {
						const isActive = active === i;
						return (
							<button
								key={s.name}
								onClick={() => setActive(i)}
								className="w-full text-left py-8 group transition-all duration-300"
							>
								<div className="flex items-center justify-between gap-4">
									<div className="flex items-center gap-4">
										<span
											className={`font-display text-2xl transition-colors duration-300 ${
												isActive ? 'text-primary' : 'text-muted'
											}`}
										>
											0{i + 1}
										</span>
										<h3
											className={`font-display text-3xl md:text-5xl transition-colors duration-300 ${
												isActive
													? 'text-primary'
													: 'text-muted hover:text-foreground'
											}`}
										>
											{s.name}
										</h3>
									</div>
									<ArrowRight
										size={28}
										className={`shrink-0 transition-all duration-500 ${
											isActive
												? 'text-primary -rotate-45'
												: 'text-muted rotate-0 group-hover:text-foreground group-hover:-rotate-45'
										}`}
									/>
								</div>
								<div
									className={`overflow-hidden transition-all duration-500 ${
										isActive ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'
									}`}
								>
									<p className="text-muted-foreground max-w-2xl leading-relaxed pl-12">
										{s.desc}
									</p>
								</div>
							</button>
						);
					})}
				</div>
			</div>
		</section>
	);
}
