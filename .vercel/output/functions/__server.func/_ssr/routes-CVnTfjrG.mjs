import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as portfolio, r as useTheme } from "./router-BjmwlhvO.mjs";
import { n as motion, r as AnimatePresence, t as useInView } from "../_libs/framer-motion+[...].mjs";
import { C as Database, D as Building2, E as Check, O as Briefcase, S as Download, T as ChevronDown, _ as Globe, a as Sun, b as FileText, c as Send, d as Mail, f as Linkedin, g as GraduationCap, h as House, i as Twitter, k as ArrowDown, l as Moon, m as Layers, n as Wrench, o as Sparkles, p as LayoutGrid, r as User, s as Server, t as X, u as MapPin, v as Github, w as Cloud, x as ExternalLink, y as Folder } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CVnTfjrG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var options = [{
	value: "light",
	label: "Light",
	icon: Sun
}, {
	value: "dark",
	label: "Dark",
	icon: Moon
}];
/** Light / dark / system segmented control. */
function ThemeToggle({ className }) {
	const { theme, setTheme } = useTheme();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "radiogroup",
		"aria-label": "Colour theme",
		className: cn("glass flex items-center gap-0.5 rounded-full p-1", className),
		children: options.map(({ value, label, icon: Icon }) => {
			const active = theme === value;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				role: "radio",
				"aria-checked": active,
				"aria-label": `${label} theme`,
				onClick: () => setTheme(value),
				className: cn("flex size-8 items-center justify-center rounded-full transition-colors", active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					className: "size-4",
					"aria-hidden": "true"
				})
			}, value);
		})
	});
}
/** Section ids + labels used by both the desktop and mobile navigation. */
var sections = [
	{
		id: "home",
		label: "Home",
		icon: "home"
	},
	{
		id: "about",
		label: "About",
		icon: "user"
	},
	{
		id: "skills",
		label: "Skills",
		icon: "layers"
	},
	{
		id: "projects",
		label: "Projects",
		icon: "folder"
	},
	{
		id: "experience",
		label: "Experience",
		icon: "briefcase"
	},
	{
		id: "contact",
		label: "Contact",
		icon: "mail"
	}
];
/** Tracks which section is currently in view, for nav highlighting. */
function useActiveSection() {
	const [active, setActive] = (0, import_react.useState)(sections[0].id);
	(0, import_react.useEffect)(() => {
		const observer = new IntersectionObserver((entries) => {
			const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
			if (visible) setActive(visible.target.id);
		}, {
			rootMargin: "-45% 0px -45% 0px",
			threshold: [
				0,
				.25,
				.5,
				1
			]
		});
		sections.map((section) => document.getElementById(section.id)).filter((node) => node !== null).forEach((node) => observer.observe(node));
		return () => observer.disconnect();
	}, []);
	return active;
}
/** Smooth-scrolls to a section, respecting reduced motion. */
function scrollToSection(id) {
	const node = document.getElementById(id);
	if (!node) return;
	const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	node.scrollIntoView({
		behavior: reduced ? "auto" : "smooth",
		block: "start"
	});
}
var icons = {
	home: House,
	user: User,
	layers: Layers,
	folder: Folder,
	briefcase: Briefcase,
	mail: Mail
};
function Navigation() {
	const active = useActiveSection();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "fixed inset-x-0 top-0 z-50 hidden justify-center px-6 pt-4 md:flex",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				"aria-label": "Main",
				className: "glass glass-sheen flex items-center gap-1 rounded-full p-1.5 pl-4 shadow-glass",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => scrollToSection("home"),
						className: "mr-2 text-sm font-semibold tracking-tight",
						children: portfolio.shortName
					}),
					sections.map((section) => {
						const isActive = active === section.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => scrollToSection(section.id),
							"aria-current": isActive ? "true" : void 0,
							className: cn("relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors", isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"),
							children: [isActive ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
								layoutId: "nav-pill-desktop",
								className: "absolute inset-0 rounded-full bg-black/5 ring-1 ring-black/10 dark:bg-white/15 dark:ring-white/10",
								transition: {
									type: "spring",
									stiffness: 380,
									damping: 32
								}
							}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "relative",
								children: section.label
							})]
						}, section.id);
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, { className: "ml-2" })
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			"aria-label": "Main",
			className: "glass-strong fixed inset-x-0 bottom-0 z-50 flex items-stretch justify-around px-2 pt-1.5 pb-[max(0.5rem,env(safe-area-inset-bottom))] md:hidden",
			children: sections.map((section) => {
				const Icon = icons[section.icon] ?? House;
				const isActive = active === section.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => scrollToSection(section.id),
					"aria-current": isActive ? "true" : void 0,
					className: cn("relative flex min-h-11 flex-1 flex-col items-center justify-center gap-0.5 rounded-xl px-1 py-1 transition-colors", isActive ? "text-primary" : "text-muted-foreground"),
					children: [
						isActive ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
							layoutId: "nav-pill-mobile",
							className: "absolute inset-0 rounded-xl bg-accent",
							transition: {
								type: "spring",
								stiffness: 380,
								damping: 32
							}
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "relative size-5",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "relative text-[0.62rem] font-medium",
							children: section.label
						})
					]
				}, section.id);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fixed top-3 right-3 z-50 md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {})
		})
	] });
}
/** Consistent section shell: scroll anchor, vertical rhythm, max width. */
function Section({ id, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: cn("mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-16 sm:px-8 sm:py-24", className),
		children
	});
}
/** True when the visitor asked the OS to reduce motion. */
function useReducedMotion() {
	const [reduced, setReduced] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const media = window.matchMedia("(prefers-reduced-motion: reduce)");
		const update = () => setReduced(media.matches);
		update();
		media.addEventListener("change", update);
		return () => media.removeEventListener("change", update);
	}, []);
	return reduced;
}
/** Shared iOS-flavoured spring used across the site. */
var spring = {
	type: "spring",
	stiffness: 320,
	damping: 30,
	mass: .9
};
var softSpring = {
	type: "spring",
	stiffness: 180,
	damping: 26
};
var fadeUp = {
	hidden: {
		opacity: 0,
		y: 24
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .6,
			ease: [
				.32,
				.72,
				0,
				1
			]
		}
	}
};
var fadeIn = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { duration: .5 }
	}
};
var scaleIn = {
	hidden: {
		opacity: 0,
		scale: .96
	},
	visible: {
		opacity: 1,
		scale: 1,
		transition: softSpring
	}
};
var staggerChildren = (stagger = .08, delayChildren = 0) => ({
	hidden: {},
	visible: { transition: {
		staggerChildren: stagger,
		delayChildren
	} }
});
/** Variants with all movement stripped out, for prefers-reduced-motion. */
var staticVariants = {
	hidden: { opacity: 1 },
	visible: { opacity: 1 }
};
var presets = {
	fadeUp,
	fadeIn,
	scaleIn
};
/**
* Reveals content when it scrolls into view. Automatically falls back to a
* static render when the visitor prefers reduced motion.
*/
function AnimatedContainer({ children, className, animation = "fadeUp", stagger, delay = 0, as = "div" }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-80px"
	});
	const reduced = useReducedMotion();
	const MotionTag = motion[as];
	const variants = reduced ? staticVariants : stagger !== void 0 ? staggerChildren(stagger, delay) : presets[animation];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MotionTag, {
		ref,
		className: cn(className),
		variants: variants ?? fadeUp,
		initial: "hidden",
		animate: inView ? "visible" : "hidden",
		...stagger === void 0 ? { transition: { delay } } : {},
		children
	});
}
var glassBadgeVariants = cva("inline-flex items-center gap-1.5 rounded-full font-medium whitespace-nowrap", {
	variants: {
		variant: {
			glass: "glass text-foreground/85",
			accent: "bg-accent text-accent-foreground",
			outline: "border border-border text-muted-foreground"
		},
		size: {
			sm: "px-2.5 py-1 text-[0.7rem]",
			md: "px-5 py-1.5 text-md"
		}
	},
	defaultVariants: {
		variant: "glass",
		size: "md"
	}
});
function GlassBadge({ children, className, variant, size }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn(glassBadgeVariants({
			variant,
			size
		}), className),
		children
	});
}
/** The core Liquid Glass surface. Used for every card on the site. */
var GlassCard = (0, import_react.forwardRef)(function GlassCard({ className, interactive = false, strong = false, sheen = true, children, ...props }, ref) {
	const reduced = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		ref,
		className: cn(strong ? "glass-strong" : "glass", sheen && "glass-sheen", "rounded-2xl shadow-glass", interactive && "cursor-pointer transition-shadow hover:shadow-float", className),
		...interactive && !reduced ? {
			whileHover: { y: -4 },
			whileTap: { scale: .985 }
		} : {},
		transition: spring,
		...props,
		children
	});
});
function SectionHeading({ eyebrow, title, subtitle, align = "left", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatedContainer, {
		className: cn("flex flex-col items-start gap-3", align === "center" && "items-center text-center", className),
		children: [
			eyebrow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassBadge, {
				variant: "accent",
				children: eyebrow
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-3xl font-semibold sm:text-4xl",
				children: title
			}),
			subtitle ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-2xl text-base leading-relaxed text-muted-foreground",
				children: subtitle
			}) : null
		]
	});
}
function About() {
	const reduced = useReducedMotion();
	const { description, location, interests, education, role } = portfolio;
	const variants = reduced ? staticVariants : fadeUp;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "about",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "About",
			title: "A little background",
			subtitle: "Who I am, where I am, and what I like to work on."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatedContainer, {
			stagger: .1,
			className: "mt-10 grid gap-4 lg:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					variants,
					className: "lg:col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
						className: "h-full p-6 sm:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-semibold",
								children: role
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 leading-relaxed text-muted-foreground",
								children: description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex items-center gap-2 text-sm text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
									className: "size-6 text-primary",
									"aria-hidden": "true"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: location })]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					variants,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
						className: "h-full p-6 sm:p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
								className: "size-6 text-primary",
								"aria-hidden": "true"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-semibold",
								children: "Focus areas"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 flex flex-wrap gap-2",
							children: interests.map((interest) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassBadge, {
								variant: "outline",
								children: interest
							}) }, interest))
						})]
					})
				}),
				education.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					variants,
					className: "lg:col-span-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
						className: "p-6 sm:p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, {
								className: "size-6 text-primary",
								"aria-hidden": "true"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-semibold",
								children: "Education"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 grid gap-3 sm:grid-cols-2",
							children: education.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "rounded-xl bg-secondary/60 p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-medium",
										children: item.degree
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-[14px] text-muted-foreground",
										children: item.institution
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 font-mono text-[13px] text-muted-foreground",
										children: item.duration
									}),
									item.description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-[14px] leading-relaxed text-muted-foreground",
										children: item.description
									}) : null
								]
							}, `${item.degree}-${item.institution}`))
						})]
					})
				}) : null
			]
		})]
	});
}
var glassButtonVariants = cva("inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap select-none transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-[1.05em] [&_svg]:shrink-0", {
	variants: {
		variant: {
			primary: "bg-primary text-primary-foreground shadow-accent hover:brightness-110",
			glass: "glass glass-sheen text-foreground shadow-glass hover:bg-glass-strong hover:shadow-float",
			subtle: "bg-secondary text-secondary-foreground hover:bg-accent",
			ghost: "text-muted-foreground hover:bg-secondary hover:text-foreground"
		},
		size: {
			sm: "h-9 px-4 text-sm",
			md: "h-11 px-5 text-[0.95rem]",
			lg: "h-13 px-7 text-base",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "glass",
		size: "md"
	}
});
var GlassButton = (0, import_react.forwardRef)(function GlassButton({ className, variant, size, ...props }, ref) {
	const reduced = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
		ref,
		className: cn(glassButtonVariants({
			variant,
			size
		}), className),
		...reduced ? {} : {
			whileTap: { scale: .96 },
			whileHover: { y: -1 }
		},
		transition: spring,
		...props
	});
});
/** Anchor version of GlassButton — same visuals, correct semantics for links. */
var GlassLinkButton = (0, import_react.forwardRef)(function GlassLinkButton({ className, variant, size, ...props }, ref) {
	const reduced = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.a, {
		ref,
		className: cn(glassButtonVariants({
			variant,
			size
		}), className),
		...reduced ? {} : {
			whileTap: { scale: .96 },
			whileHover: { y: -1 }
		},
		transition: spring,
		...props
	});
});
var config = {
	github: {
		icon: Github,
		label: "GitHub"
	},
	linkedin: {
		icon: Linkedin,
		label: "LinkedIn"
	},
	twitter: {
		icon: Twitter,
		label: "Twitter"
	},
	website: {
		icon: Globe,
		label: "Website"
	},
	email: {
		icon: Mail,
		label: "Email"
	}
};
/** Renders nothing when `href` is empty, so unused socials disappear cleanly. */
function SocialButton({ kind, href, showLabel = false }) {
	if (!href) return null;
	const { icon: Icon, label } = config[kind];
	const isMail = kind === "email";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassLinkButton, {
		href: isMail ? `mailto:${href}` : href,
		...isMail ? {} : {
			target: "_blank",
			rel: "noreferrer noopener"
		},
		"aria-label": label,
		size: showLabel ? "md" : "icon",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { "aria-hidden": "true" }), showLabel ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }) : null]
	});
}
var fieldClass = "w-full rounded-xl border border-input bg-card/70 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-none";
function Contact() {
	const { email, social, location, contactFormEndpoint } = portfolio;
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		email: "",
		message: ""
	});
	const update = (key) => (value) => setForm((current) => ({
		...current,
		[key]: value
	}));
	async function handleSubmit(event) {
		event.preventDefault();
		if (!contactFormEndpoint) {
			const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
			const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
			window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
			setStatus("sent");
			return;
		}
		try {
			setStatus("sending");
			if (!(await fetch(contactFormEndpoint, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json"
				},
				body: JSON.stringify(form)
			})).ok) throw new Error("Request failed");
			setStatus("sent");
			setForm({
				name: "",
				email: "",
				message: ""
			});
		} catch {
			setStatus("error");
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "contact",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Contact",
			title: "Let's build something",
			subtitle: "Send a message, or reach out on any of these."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-10 grid gap-4 lg:grid-cols-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedContainer, {
				className: "lg:col-span-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
					className: "flex h-full flex-col gap-6 p-6 sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold tracking-wide text-muted-foreground uppercase",
							children: "Email"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `mailto:${email}`,
							className: "mt-1 inline-flex items-center gap-2 font-medium break-all transition-colors hover:text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
								className: "size-4.5 shrink-0 text-primary",
								"aria-hidden": "true"
							}), email]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold tracking-wide text-muted-foreground uppercase",
							children: "Based in"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 inline-flex items-center gap-2 font-medium",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
								className: "size-4.5 shrink-0 text-primary",
								"aria-hidden": "true"
							}), location]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold tracking-wide text-muted-foreground uppercase",
							children: "Elsewhere"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex flex-wrap gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialButton, {
									kind: "github",
									href: social.github,
									showLabel: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialButton, {
									kind: "linkedin",
									href: social.linkedin,
									showLabel: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialButton, {
									kind: "twitter",
									href: social.twitter,
									showLabel: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialButton, {
									kind: "website",
									href: social.website,
									showLabel: true
								})
							]
						})] })
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedContainer, {
				className: "lg:col-span-3",
				delay: .08,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
					className: "relative h-full overflow-hidden p-6 sm:p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSubmit,
						className: "flex flex-col gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "contact-name",
										className: "text-sm font-medium",
										children: "Name"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "contact-name",
										name: "name",
										required: true,
										autoComplete: "name",
										value: form.name,
										onChange: (event) => update("name")(event.target.value),
										placeholder: "Ada Lovelace",
										className: fieldClass
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "contact-email",
										className: "text-sm font-medium",
										children: "Email"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "contact-email",
										name: "email",
										type: "email",
										required: true,
										autoComplete: "email",
										value: form.email,
										onChange: (event) => update("email")(event.target.value),
										placeholder: "ada@example.com",
										className: fieldClass
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "contact-message",
									className: "text-sm font-medium",
									children: "Message"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									id: "contact-message",
									name: "message",
									required: true,
									rows: 5,
									value: form.message,
									onChange: (event) => update("message")(event.target.value),
									placeholder: "Tell me about your project…",
									className: `${fieldClass} resize-y`
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassButton, {
									type: "submit",
									variant: "primary",
									disabled: status === "sending",
									className: "w-full sm:w-auto",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { "aria-hidden": "true" }), status === "sending" ? "Sending…" : "Send message"]
								}), status === "error" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									role: "alert",
									className: "text-sm text-destructive",
									children: "Something went wrong. Please email me directly."
								}) : null]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: contactFormEndpoint ? "Submissions go to the form service configured in src/data/portfolio.ts." : "This opens your mail app — no backend or API keys required."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: status === "sent" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						className: "glass-strong absolute inset-0 flex flex-col items-center justify-center gap-4 text-center",
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						exit: { opacity: 0 },
						role: "status",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
								className: "flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground",
								initial: { scale: .5 },
								animate: { scale: 1 },
								transition: spring,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
									className: "size-7",
									"aria-hidden": "true"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lg font-semibold",
								children: "Message on its way"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassButton, {
								size: "sm",
								onClick: () => setStatus("idle"),
								children: "Send another"
							})
						]
					}) : null })]
				})
			})]
		})]
	});
}
/** EXAMPLE DATA — replace with your own roles. */
var experience = [{
	company: "Example Labs",
	role: "Software Developer",
	location: "Remote",
	startDate: "Jun 2024",
	endDate: "",
	description: [
		"Led the frontend rebuild of the customer dashboard, cutting time-to-interactive by 45%.",
		"Designed a shared component library adopted by three product teams.",
		"Mentored two interns through their first production releases."
	],
	technologies: [
		"React",
		"TypeScript",
		"Node.js",
		"PostgreSQL"
	]
}, {
	company: "Sample Studio",
	role: "Junior Developer",
	location: "Your City",
	startDate: "Aug 2023",
	endDate: "May 2024",
	description: ["Built and shipped client marketing sites with a focus on Core Web Vitals.", "Automated release checks in CI, removing most manual QA passes."],
	technologies: [
		"JavaScript",
		"Vite",
		"Tailwind CSS"
	]
}];
function ExperienceTimeline() {
	const variants = useReducedMotion() ? staticVariants : fadeUp;
	if (experience.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "experience",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Experience",
			title: "Where I've worked",
			subtitle: "Roles, responsibilities and the stacks behind them."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatedContainer, {
			stagger: .1,
			className: "relative mt-10 flex flex-col gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": "true",
				className: "absolute top-2 bottom-2 left-[19px] w-px bg-border sm:left-[23px]"
			}), experience.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				variants,
				className: "relative pl-12 sm:pl-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "glass absolute top-4 left-0 flex size-10 items-center justify-center rounded-full sm:size-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, {
						className: "size-6 text-primary",
						"aria-hidden": "true"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
					className: "p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-semibold",
								children: item.role
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-mono text-xs text-muted-foreground",
								children: [
									item.startDate,
									" — ",
									item.endDate ? item.endDate : "Present"
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: [item.company, item.location ? ` · ${item.location}` : ""]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 flex flex-col gap-2",
							children: item.description.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "relative pl-4 text-sm leading-relaxed text-muted-foreground before:absolute before:top-2 before:left-0 before:size-1.5 before:rounded-full before:bg-primary/60",
								children: line
							}, line))
						}),
						item.technologies.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 flex flex-wrap gap-1.5",
							children: item.technologies.map((tech) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassBadge, {
								variant: "outline",
								className: "px-2.5 py-1 text-[12.5px]",
								children: tech
							}) }, tech))
						}) : null
					]
				})]
			}, `${item.company}-${item.role}-${item.startDate}`))]
		})]
	});
}
function Footer() {
	const { name, social, email } = portfolio;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "hairline-t mx-auto mt-8 w-full max-w-6xl px-5 pb-28 sm:px-8 md:pb-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center justify-between gap-5 pt-8 sm:flex-row",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted-foreground",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					name,
					". Built with React & Tailwind CSS."
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialButton, {
						kind: "github",
						href: social.github
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialButton, {
						kind: "linkedin",
						href: social.linkedin
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialButton, {
						kind: "email",
						href: email
					})
				]
			})]
		})
	});
}
/**
* Image that degrades to a tasteful placeholder tile instead of a broken image
* when `src` is missing or fails to load.
*/
function SafeImage({ src, alt, className, fallbackLabel, loading = "lazy" }) {
	const [failed, setFailed] = (0, import_react.useState)(false);
	if (!src || failed) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "img",
		"aria-label": alt,
		className: cn("flex items-center justify-center bg-secondary text-2xl font-semibold text-muted-foreground", className),
		children: fallbackLabel ?? alt.slice(0, 1).toUpperCase()
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src,
		alt,
		loading,
		onError: () => setFailed(true),
		className: cn("size-full object-cover", className)
	});
}
function Hero() {
	const reduced = useReducedMotion();
	const { name, role, tagline, description, location, avatar, social, stats, email } = portfolio;
	const initials = name.split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		className: "ambient-mesh relative flex min-h-[100svh] items-center justify-center overflow-hidden px-5 pt-24 pb-28 sm:px-8 md:pb-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			className: "mx-auto w-full max-w-4xl text-center",
			variants: reduced ? staticVariants : staggerChildren(.09, .05),
			initial: "hidden",
			animate: "visible",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					variants: reduced ? staticVariants : fadeUp,
					className: "flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassCard, {
						strong: true,
						className: "size-24 overflow-hidden rounded-full p-0 sm:size-28",
						sheen: false,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SafeImage, {
							src: avatar,
							alt: name,
							loading: "eager",
							fallbackLabel: initials,
							className: "size-full rounded-full"
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					variants: reduced ? staticVariants : fadeUp,
					className: "mt-6 flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassBadge, {
						variant: "glass",
						className: "gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
							className: "size-3",
							"aria-hidden": "true"
						}), location]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
					variants: reduced ? staticVariants : fadeUp,
					className: "mt-5 text-4xl font-semibold sm:text-6xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground",
						children: "Hi, I'm "
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-gradient",
						children: [name, "."]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					variants: reduced ? staticVariants : fadeUp,
					className: "mt-4 text-xl font-medium text-foreground/90 sm:text-2xl",
					children: role
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					variants: reduced ? staticVariants : fadeUp,
					className: "mt-2 text-lg text-muted-foreground",
					children: tagline
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					variants: reduced ? staticVariants : fadeUp,
					className: "mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground",
					children: description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: reduced ? staticVariants : fadeUp,
					className: "mt-9 flex flex-wrap items-center justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassButton, {
						variant: "primary",
						size: "lg",
						onClick: () => scrollToSection("projects"),
						children: "View Projects"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassButton, {
						variant: "glass",
						size: "lg",
						onClick: () => scrollToSection("contact"),
						children: "Contact Me"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: reduced ? staticVariants : fadeUp,
					className: "mt-6 flex flex-wrap items-center justify-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialButton, {
							kind: "github",
							href: social.github
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialButton, {
							kind: "linkedin",
							href: social.linkedin
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialButton, {
							kind: "twitter",
							href: social.twitter
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialButton, {
							kind: "website",
							href: social.website
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialButton, {
							kind: "email",
							href: email
						})
					]
				}),
				stats.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.ul, {
					variants: reduced ? staticVariants : fadeUp,
					className: "mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3",
					children: stats.map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
						className: "px-5 py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-2xl font-semibold",
							children: stat.value
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-0.5 text-xs tracking-wide text-muted-foreground uppercase",
							children: stat.label
						})]
					}) }, stat.label))
				}) : null
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => scrollToSection("about"),
			"aria-label": "Scroll to About",
			className: "absolute bottom-24 left-1/2 hidden -translate-x-1/2 text-muted-foreground transition-colors hover:text-foreground md:block",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, {
				className: "size-5 animate-bounce",
				"aria-hidden": "true"
			})
		})]
	});
}
function ProjectCard({ project, onOpen }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
		interactive: true,
		className: "group flex h-full flex-col overflow-hidden p-0",
		sheen: false,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => onOpen(project),
			"aria-label": `Open details for ${project.title}`,
			className: "flex flex-1 flex-col text-left",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "aspect-16/10 w-full overflow-hidden bg-secondary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SafeImage, {
					src: project.image,
					alt: `${project.title} preview`,
					fallbackLabel: project.title.slice(0, 1),
					className: "size-full transition-transform duration-500 group-hover:scale-[1.04]"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 flex-col p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-semibold",
							children: project.title
						}), project.year ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 font-mono text-xs text-muted-foreground",
							children: project.year
						}) : null]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground",
						children: project.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 flex flex-wrap gap-1.5",
						children: [project.technologies.slice(0, 4).map((tech) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassBadge, {
							variant: "outline",
							size: "sm",
							children: tech
						}) }, tech)), project.technologies.length > 4 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassBadge, {
							variant: "outline",
							size: "sm",
							children: ["+", project.technologies.length - 4]
						}) }) : null]
					})
				]
			})]
		}), project.github || project.demo ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "hairline-t flex items-center gap-2 px-5 py-3",
			children: [project.github ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: project.github,
				target: "_blank",
				rel: "noreferrer noopener",
				className: "inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, {
					className: "size-5",
					"aria-hidden": "true"
				}), "Code"]
			}) : null, project.demo ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: project.demo,
				target: "_blank",
				rel: "noreferrer noopener",
				className: "inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-opacity hover:opacity-80",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
					className: "size-4.5",
					"aria-hidden": "true"
				}), "Live demo"]
			}) : null]
		}) : null]
	});
}
function useIsMobile() {
	const [mobile, setMobile] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const media = window.matchMedia("(max-width: 767px)");
		const update = () => setMobile(media.matches);
		update();
		media.addEventListener("change", update);
		return () => media.removeEventListener("change", update);
	}, []);
	return mobile;
}
/**
* iOS-inspired overlay: a centred glass modal on desktop and a
* bottom sheet with a grabber on mobile. Closes on Escape and backdrop tap.
*/
function GlassSheet({ open, onClose, title, children, className }) {
	const isMobile = useIsMobile();
	const reduced = useReducedMotion();
	const panelRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onKeyDown = (event) => {
			if (event.key === "Escape") onClose();
		};
		document.addEventListener("keydown", onKeyDown);
		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		panelRef.current?.focus();
		return () => {
			document.removeEventListener("keydown", onKeyDown);
			document.body.style.overflow = previousOverflow;
		};
	}, [open, onClose]);
	const panelMotion = reduced ? {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 }
	} : isMobile ? {
		initial: { y: "100%" },
		animate: { y: 0 },
		exit: { y: "100%" }
	} : {
		initial: {
			opacity: 0,
			scale: .95,
			y: 16
		},
		animate: {
			opacity: 1,
			scale: 1,
			y: 0
		},
		exit: {
			opacity: 0,
			scale: .97,
			y: 8
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-100 flex items-end justify-center md:items-center md:p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			className: "absolute inset-0 bg-foreground/25 backdrop-blur-sm",
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			onClick: onClose,
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			ref: panelRef,
			role: "dialog",
			"aria-modal": "true",
			"aria-label": title,
			tabIndex: -1,
			className: cn("glass-strong glass-sheen relative flex max-h-[92dvh] w-full flex-col overflow-hidden shadow-float outline-none", "rounded-t-3xl md:max-w-3xl md:rounded-3xl", className),
			transition: spring,
			...panelMotion,
			children: [
				isMobile ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-center pt-3",
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-10 rounded-full bg-muted-foreground/40" })
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onClose,
					"aria-label": "Close",
					className: "glass absolute top-4 right-4 z-10 flex size-9 items-center justify-center rounded-full text-foreground/70 transition-colors hover:text-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
						className: "size-4",
						"aria-hidden": "true"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-y-auto overscroll-contain",
					children
				})
			]
		})]
	}) : null });
}
/** Glass modal on desktop, iOS bottom sheet on mobile. */
function ProjectDetail({ project, onClose }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassSheet, {
		open: project !== null,
		onClose,
		title: project?.title ?? "Project",
		children: project ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "pb-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "aspect-16/9 w-full overflow-hidden bg-secondary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SafeImage, {
					src: project.image,
					alt: `${project.title} preview`,
					loading: "eager",
					fallbackLabel: project.title.slice(0, 1),
					className: "size-full"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-6 pt-6 sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-baseline justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-semibold",
							children: project.title
						}), project.year ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-sm text-muted-foreground",
							children: project.year
						}) : null]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 leading-relaxed text-muted-foreground",
						children: project.description
					}),
					project.longDescription ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-7 text-sm font-semibold tracking-wide uppercase",
						children: "Overview"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 leading-relaxed text-muted-foreground",
						children: project.longDescription
					})] }) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-7 text-sm font-semibold tracking-wide uppercase",
						children: "Technologies"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 flex flex-wrap gap-2",
						children: project.technologies.map((tech) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassBadge, {
							variant: "accent",
							children: tech
						}) }, tech))
					}),
					project.screenshots && project.screenshots.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-7 text-sm font-semibold tracking-wide uppercase",
						children: "Screenshots"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 grid gap-3 sm:grid-cols-2",
						children: project.screenshots.map((shot) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "aspect-16/10 overflow-hidden rounded-xl bg-secondary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SafeImage, {
								src: shot,
								alt: `${project.title} screenshot`,
								fallbackLabel: project.title.slice(0, 1)
							})
						}, shot))
					})] }) : null,
					project.github || project.demo ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [project.demo ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassLinkButton, {
							variant: "primary",
							href: project.demo,
							target: "_blank",
							rel: "noreferrer noopener",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { "aria-hidden": "true" }), "Live demo"]
						}) : null, project.github ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassLinkButton, {
							href: project.github,
							target: "_blank",
							rel: "noreferrer noopener",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { "aria-hidden": "true" }), "View code"]
						}) : null]
					}) : null
				]
			})]
		}) : null
	});
}
/** EXAMPLE DATA — safe to delete entirely. */
var projects = [
	{
		id: "glass-analytics",
		title: "Glass Analytics",
		description: "A realtime product analytics dashboard with streaming charts and shareable reports.",
		longDescription: "Glass Analytics ingests events through a queue-backed pipeline and renders them in a realtime dashboard. It supports custom funnels, retention cohorts and shareable report links. Built to stay responsive with millions of events by aggregating on write and caching aggressively at the edge.",
		image: "/projects/example-1.svg",
		technologies: [
			"React",
			"TypeScript",
			"Node.js",
			"PostgreSQL",
			"Redis"
		],
		github: "https://github.com/yourusername/glass-analytics",
		demo: "",
		featured: true,
		year: "2025"
	},
	{
		id: "orbit-notes",
		title: "Orbit Notes",
		description: "Offline-first note taking app with CRDT sync and instant full-text search.",
		longDescription: "Orbit Notes keeps everything local-first: notes are stored in IndexedDB and merged with a CRDT so edits never conflict across devices. Search runs fully on-device, and sync is an optional background task.",
		image: "/projects/example-2.svg",
		technologies: [
			"React",
			"TypeScript",
			"IndexedDB",
			"Vite"
		],
		github: "https://github.com/yourusername/orbit-notes",
		demo: "https://example.com",
		featured: true,
		year: "2024"
	},
	{
		id: "ship-cli",
		title: "Ship CLI",
		description: "A tiny deployment CLI that turns any static project into a preview URL.",
		longDescription: "Ship CLI wraps build detection, asset hashing and upload into a single command. It generates immutable preview URLs per commit and cleans them up automatically.",
		image: "/projects/example-3.svg",
		technologies: [
			"Node.js",
			"TypeScript",
			"AWS"
		],
		github: "https://github.com/yourusername/ship-cli",
		demo: "",
		featured: false,
		year: "2024"
	}
];
function Projects() {
	const reduced = useReducedMotion();
	const [selected, setSelected] = (0, import_react.useState)(null);
	const [filter, setFilter] = (0, import_react.useState)("all");
	const variants = reduced ? staticVariants : fadeUp;
	const hasFeatured = (0, import_react.useMemo)(() => projects.some((project) => project.featured), []);
	const visible = (0, import_react.useMemo)(() => filter === "featured" ? projects.filter((project) => project.featured) : projects, [filter]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "projects",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Projects",
					title: "Things I've built",
					subtitle: "Selected work. Click any project for the full story."
				}), hasFeatured ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "glass flex rounded-full p-1",
					role: "group",
					"aria-label": "Filter projects",
					children: ["all", "featured"].map((value) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassButton, {
						variant: "ghost",
						size: "sm",
						"aria-pressed": filter === value,
						onClick: () => setFilter(value),
						className: cn("capitalize", filter === value && "bg-primary text-primary-foreground hover:bg-primary"),
						children: value
					}, value))
				}) : null]
			}),
			visible.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-10 text-muted-foreground",
				children: [
					"No projects yet — add yours in ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
						className: "font-mono",
						children: "src/data/projects.ts"
					}),
					"."
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedContainer, {
				stagger: .08,
				className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: visible.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					variants,
					layout: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, {
						project,
						onOpen: setSelected
					})
				}, project.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectDetail, {
				project: selected,
				onClose: () => setSelected(null)
			})
		]
	});
}
/** Renders nothing when portfolio.resumeUrl is empty — no broken links. */
function Resume() {
	const { resumeUrl, name } = portfolio;
	if (!resumeUrl) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto w-full max-w-6xl px-5 sm:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
			className: "flex flex-col items-start gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex size-12 items-center justify-center rounded-2xl bg-secondary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
						className: "size-5 text-primary",
						"aria-hidden": "true"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg font-semibold",
					children: "Résumé"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: "The full details, in one PDF page."
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassLinkButton, {
					variant: "primary",
					href: resumeUrl,
					target: "_blank",
					rel: "noreferrer noopener",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { "aria-hidden": "true" }), "View Resume"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassLinkButton, {
					href: resumeUrl,
					download: `${name.replace(/\s+/g, "-")}-resume.pdf`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { "aria-hidden": "true" }), "Download Resume"]
				})]
			})]
		}) })
	});
}
var skills = [
	{
		label: "Frontend",
		icon: "layout",
		items: [
			"React",
			"TypeScript",
			"JavaScript",
			"Tailwind CSS",
			"Vite",
			"Framer Motion"
		]
	},
	{
		label: "Backend",
		icon: "server",
		items: [
			"Node.js",
			"NestJS",
			"Express",
			"REST",
			"GraphQL"
		]
	},
	{
		label: "Database",
		icon: "database",
		items: [
			"PostgreSQL",
			"MySQL",
			"Redis",
			"Prisma"
		]
	},
	{
		label: "Cloud",
		icon: "cloud",
		items: [
			"AWS",
			"Docker",
			"GitHub Actions",
			"Vercel"
		]
	},
	{
		label: "Tools",
		icon: "wrench",
		items: [
			"Git",
			"Vitest",
			"Figma",
			"Linux"
		]
	}
];
/** Maps the icon names allowed in src/data/skills.ts to Lucide components. */
var skillIcons = {
	layout: LayoutGrid,
	server: Server,
	database: Database,
	cloud: Cloud,
	wrench: Wrench,
	sparkles: Sparkles
};
function Skills() {
	const reduced = useReducedMotion();
	const [openLabel, setOpenLabel] = (0, import_react.useState)(skills[0]?.label ?? null);
	const variants = reduced ? staticVariants : fadeUp;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "skills",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Skills",
			title: "Tools I reach for",
			subtitle: "Tap a category to expand it."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedContainer, {
			stagger: .07,
			className: "mt-10 grid gap-3 md:grid-cols-2",
			children: skills.map((category) => {
				const Icon = skillIcons[category.icon];
				const open = openLabel === category.label;
				const panelId = `skills-panel-${category.label.toLowerCase()}`;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					variants,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
						className: "overflow-hidden p-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setOpenLabel(open ? null : category.label),
							"aria-expanded": open,
							"aria-controls": panelId,
							className: "flex w-full items-center gap-3 p-5 text-left",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("flex size-10 items-center justify-center rounded-xl transition-colors", open ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										className: "size-5",
										"aria-hidden": "true"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block font-medium",
										children: category.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "block text-xs text-muted-foreground",
										children: [category.items.length, " skills"]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
									animate: { rotate: open ? 180 : 0 },
									transition: spring,
									className: "text-muted-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
										className: "size-4",
										"aria-hidden": "true"
									})
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
							initial: false,
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								id: panelId,
								initial: reduced ? { opacity: 1 } : {
									height: 0,
									opacity: 0
								},
								animate: reduced ? { opacity: 1 } : {
									height: "auto",
									opacity: 1
								},
								exit: reduced ? { opacity: 1 } : {
									height: 0,
									opacity: 0
								},
								transition: {
									duration: .28,
									ease: [
										.32,
										.72,
										0,
										1
									]
								},
								className: "overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "flex flex-wrap gap-2 px-5 pb-5",
									children: category.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassBadge, {
										variant: "accent",
										children: item
									}) }, item))
								})
							}) : null
						})]
					})
				}, category.label);
			})
		})]
	});
}
function PortfolioPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skills, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExperienceTimeline, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Resume, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
//#endregion
export { PortfolioPage as component };
