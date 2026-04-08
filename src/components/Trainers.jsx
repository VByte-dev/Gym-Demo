import { useState } from 'react';
import { Instagram, Twitter, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const trainers = [
	{
		name: 'Saran',
		role: 'Head Coach',
		img: './stock/t1.webp',
		bio: 'Humble, experienced, and deeply committed to every member’s progress.',
	},
	{
		name: 'Yogesh',
		role: 'Strength & Conditioning',
		img: './stock/t2.jpg',
		bio: 'Focused on building strength through smart training and steady technique.',
	},
	{
		name: 'Arun Kumar',
		role: 'Yoga & Mobility',
		img: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600',
		bio: 'Certified instructor helping every member move better and recover faster.',
	},
];

export default function Trainers() {
	const [hovered, setHovered] = useState(null);
	const ref = useScrollReveal();

	return (
		<section id="trainers" className="bg-background py-24 md:py-32">
			<div ref={ref} className="scroll-reveal max-w-7xl mx-auto px-6">
				<div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
					<div>
						<p className="text-primary uppercase text-xs tracking-widest mb-4 font-medium flex items-center gap-2">
							<span className="w-8 h-px bg-primary" />
							Our Team
						</p>
						<h2 className="font-display text-4xl md:text-6xl text-foreground leading-none">
							Meet Our Expert
							<br />
							<span className="text-primary">Trainers.</span>
						</h2>
					</div>
				</div>

				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
					{trainers.map((t, i) => (
						<div
							key={t.name}
							className="relative rounded-2xl overflow-hidden group cursor-pointer"
							onMouseEnter={() => setHovered(i)}
							onMouseLeave={() => setHovered(null)}
						>
							<img
								src={t.img}
								alt={t.name}
								className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-700"
								loading="lazy"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

							{/* Always visible info */}
							<div className="absolute bottom-0 left-0 right-0 p-6">
								<h3 className="font-display text-2xl text-foreground">
									{t.name}
								</h3>
								<p className="text-primary text-sm uppercase tracking-widest mb-3">
									{t.role}
								</p>

								{/* Hover reveal */}
								<div
									className={`overflow-hidden transition-all duration-500 ${
										hovered === i
											? 'max-h-32 opacity-100'
											: 'max-h-0 opacity-0'
									}`}
								>
									<p className="text-muted-foreground text-sm mb-4">
										{t.bio}
									</p>
									<div className="flex gap-2">
										{[Instagram, Twitter].map((Icon, j) => (
											<a
												key={j}
												href="#"
												className="w-9 h-9 rounded-full bg-foreground/10 border border-foreground/20 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
											>
												<Icon size={14} />
											</a>
										))}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
