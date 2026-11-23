<script lang="ts">
	const email = "dcs@pup.edu.ph";
	const year = new Date().getFullYear();

	const portfolioLinks = [
		{ label: "Compliance Report", href: "/compliance" },
		{ label: "Narrative Report", href: "/narrative-report" },
		{ label: "Curriculum", href: "/curriculum" },
		{ label: "Faculty Directory", href: "/faculty" },
	];

	const pillarLinks = [
		{ label: "Research", href: "/research" },
		{ label: "Teaching & Learning", href: "/teaching-and-learning" },
		{ label: "Community", href: "/community" },
		{ label: "Internationalization", href: "/internationalization" },
		{ label: "Planning & QA", href: "/planning-and-qa" },
	];

	function backToTop() {
		const still = window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		).matches;
		const behavior = still ? "auto" : "smooth";
		const scrollContainer = document.querySelector(".scroll-container");
		if (scrollContainer) {
			scrollContainer.scrollTo({ top: 0, behavior });
		} else {
			window.scrollTo({ top: 0, behavior });
		}
	}
</script>

<footer class="site_footer">
	<div class="footer_body">
		<div class="footer_lead">
			<p class="footer_kicker">
				Polytechnic University of the Philippines
			</p>
			<p class="footer_title">Department of<br />Computer Science</p>
		</div>

		<div class="footer_info">
			<section class="info_block" aria-labelledby="footer-visit">
				<h2 id="footer-visit" class="info_label">Visit</h2>
				<address class="info_text">
					Room 508, South Wing<br />
					PUP Main Building<br />
					Anonas St., Sta. Mesa, Manila
				</address>
			</section>

			<section class="info_block" aria-labelledby="footer-write">
				<h2 id="footer-write" class="info_label">Write to us</h2>
				<a class="info_email" href="mailto:{email}">{email}</a>
			</section>

			<nav class="info_block" aria-labelledby="footer-portfolio">
				<h2 id="footer-portfolio" class="info_label">Portfolio</h2>
				<ul class="quick_links">
					{#each portfolioLinks as item (item.href)}
						<li>
							<a class="quick_link" href={item.href}>
								{item.label}
							</a>
						</li>
					{/each}
				</ul>
			</nav>

			<nav class="info_block" aria-labelledby="footer-pillars">
				<h2 id="footer-pillars" class="info_label">Pillars</h2>
				<ul class="quick_links">
					{#each pillarLinks as item (item.href)}
						<li>
							<a class="quick_link" href={item.href}>
								{item.label}
							</a>
						</li>
					{/each}
				</ul>
			</nav>
		</div>

		<div class="footer_bar">
			<p>© {year} Department of Computer Science, PUP Sta. Mesa</p>
			<button class="to_top" type="button" onclick={backToTop}>
				Back to top
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.75"
					stroke-linecap="round"
					stroke-linejoin="round"
					aria-hidden="true"
				>
					<path d="m5 12 7-7 7 7" />
					<path d="M12 19V5" />
				</svg>
			</button>
		</div>
	</div>
</footer>

<style>
	.site_footer {
		--footer-paper: var(--color-white);
		--footer-muted: rgba(255, 255, 255, 0.8);
		--footer-rule: rgba(255, 255, 255, 0.14);
		background: linear-gradient(
			to bottom,
			var(--color-maroon),
			var(--color-dark-maroon)
		);
		color: var(--footer-paper);
		font-family: var(--font-inter), system-ui, sans-serif;
		overflow: hidden;
		scroll-snap-align: end;
	}

	.footer_body {
		max-width: var(--container-max, 1280px);
		margin: 0 auto;
		padding: clamp(3.5rem, 7vw, 6rem)
			var(--page-pad, clamp(1rem, 4vw, 4rem)) 0;
		display: grid;
		grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
		gap: clamp(2.5rem, 5vw, 5rem);
	}

	.footer_lead {
		align-self: center;
	}

	.footer_kicker,
	.info_label {
		margin: 0;
		font-size: 0.75rem;
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--color-gold);
	}

	.footer_title {
		margin: 0.75rem 0 0;
		font-family: var(--font-montserrat), system-ui, sans-serif;
		font-size: clamp(1.9rem, 3.4vw, 3.25rem);
		font-weight: 700;
		line-height: 1.04;
		letter-spacing: -0.01em;
		text-wrap: balance;
	}

	.footer_info {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: clamp(1.75rem, 3vw, 3rem);
		align-content: end;
	}

	.info_block {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.9rem;
		padding-top: 1.25rem;
		border-top: 1px solid var(--footer-rule);
	}

	.info_text {
		margin: 0;
		font-style: normal;
		font-size: 0.9rem;
		line-height: 1.65;
		color: var(--footer-muted);
	}

	.info_email {
		font-family: var(--font-montserrat), system-ui, sans-serif;
		font-size: 1.15rem;
		font-weight: 600;
		color: var(--footer-paper);
		text-decoration: none;
		overflow-wrap: anywhere;
		transition: color 160ms ease;
	}

	.info_email:hover {
		color: var(--color-gold);
	}

	.to_top {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		padding: 0.55rem 0.95rem;
		border: 1px solid var(--footer-rule);
		border-radius: 999px;
		background: none;
		font: inherit;
		font-size: 0.85rem;
		font-weight: 600;
		color: var(--footer-paper);
		text-decoration: none;
		cursor: pointer;
		transition:
			border-color 160ms ease,
			background-color 160ms ease,
			color 160ms ease;
	}

	.quick_links {
		display: grid;
		gap: 0.55rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.quick_link {
		font-size: 0.9rem;
		color: var(--footer-muted);
		text-decoration: none;
		transition: color 160ms ease;
	}

	.quick_link:hover {
		color: var(--footer-paper);
	}

	.footer_bar {
		grid-column: 1 / -1;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding: 1.25rem 0 clamp(1.5rem, 3vw, 2.5rem);
		border-top: 1px solid var(--footer-rule);
	}

	.footer_bar p {
		margin: 0;
		font-size: 0.8rem;
		color: var(--footer-muted);
	}

	.to_top :global(svg) {
		transition: transform 240ms cubic-bezier(0.16, 1, 0.3, 1);
	}

	.to_top:hover {
		border-color: var(--color-gold);
		background: var(--color-gold);
		color: var(--color-dark-maroon);
	}

	.to_top:hover :global(svg) {
		transform: translateY(-2px);
	}

	.to_top:active {
		transform: scale(0.97);
	}

	.site_footer :is(a, button):focus-visible {
		outline: 2px solid var(--color-gold);
		outline-offset: 4px;
		border-radius: 4px;
	}

	.site_footer .to_top:focus-visible {
		border-radius: 999px;
	}

	@media (max-width: 1024px) {
		.footer_body {
			grid-template-columns: minmax(0, 1fr);
		}
	}

	@media (max-width: 820px) {
		.footer_info {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (max-width: 480px) {
		.footer_info {
			grid-template-columns: minmax(0, 1fr);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.site_footer *,
		.site_footer :global(svg) {
			transition: none !important;
		}

		.to_top:active {
			transform: none;
		}
	}
</style>
