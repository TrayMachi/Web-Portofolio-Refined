import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ThemeToggle } from "~/components/ui/theme-toggle";
import { SECTION_IDS } from "~/lib/constants";
import { useSmoothScroll } from "~/lib/smooth-scroll";
import { cn } from "~/lib/utils";

const NAV_ITEMS = [
    { id: SECTION_IDS.home, label: "Home" },
    { id: SECTION_IDS.about, label: "About" },
    { id: SECTION_IDS.experience, label: "Experience" },
    { id: SECTION_IDS.projects, label: "Projects" },
    { id: SECTION_IDS.skills, label: "Skills" },
    { id: SECTION_IDS.contact, label: "Contact" },
];

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<string>(SECTION_IDS.home);
    const { scrollToSection } = useSmoothScroll();

    useEffect(() => {
        const handleScroll = () => {
            const sections = NAV_ITEMS.map(item => ({
                id: item.id,
                element: document.getElementById(item.id),
            }));

            const currentSection = sections.find(section => {
                if (!section.element) return false;
                const rect = section.element.getBoundingClientRect();
                return rect.top <= 100 && rect.bottom >= 100;
            });

            if (currentSection) {
                setActiveSection(currentSection.id);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScrollToSection = (sectionId: string) => {
        scrollToSection(sectionId);
        setIsOpen(false);
    };

    return (
        <>
            {/* Desktop Navigation */}
            <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 hidden md:block">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-card/80 backdrop-blur-lg border border-border rounded-full px-6 py-3 shadow-lg"
                >
                    <div className="flex items-center space-x-6">
                        <ul className="flex items-center space-x-8">
                            {NAV_ITEMS.map(item => (
                                <li key={item.id}>
                                    <button
                                        onClick={() => handleScrollToSection(item.id)}
                                        className={cn(
                                            "text-sm font-medium transition-colors relative py-2 px-3 rounded-full",
                                            activeSection === item.id
                                                ? "text-primary"
                                                : "text-muted-foreground hover:text-foreground"
                                        )}
                                    >
                                        {activeSection === item.id && (
                                            <motion.div
                                                layoutId="activeSection"
                                                className="absolute inset-0 bg-primary/10 rounded-full"
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}
                                        <span className="relative z-10">{item.label}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <ThemeToggle />
                    </div>
                </motion.div>
            </nav>

            {/* Mobile Navigation Button and Theme Toggle */}
            <div className="fixed top-6 right-6 z-50 md:hidden flex items-center space-x-3">
                <ThemeToggle />
                <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-card/80 backdrop-blur-lg border border-border rounded-full p-3 shadow-lg"
                >
                    <div className="relative w-6 h-6">
                        <motion.span
                            animate={{
                                rotate: isOpen ? 45 : 0,
                                y: isOpen ? 8 : 0,
                            }}
                            className="absolute top-0 left-0 w-6 h-0.5 bg-foreground rounded-full"
                        />
                        <motion.span
                            animate={{
                                opacity: isOpen ? 0 : 1,
                            }}
                            className="absolute top-2.5 left-0 w-6 h-0.5 bg-foreground rounded-full"
                        />
                        <motion.span
                            animate={{
                                rotate: isOpen ? -45 : 0,
                                y: isOpen ? -8 : 0,
                            }}
                            className="absolute top-5 left-0 w-6 h-0.5 bg-foreground rounded-full"
                        />
                    </div>
                </motion.button>
            </div>

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 md:hidden bg-background/95 backdrop-blur-lg"
                        onClick={() => setIsOpen(false)}
                    >
                        <motion.nav
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            className="flex flex-col items-center justify-center h-full space-y-8"
                        >
                            {NAV_ITEMS.map((item, index) => (
                                <motion.button
                                    key={item.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => handleScrollToSection(item.id)}
                                    className={cn(
                                        "text-2xl font-semibold transition-colors",
                                        activeSection === item.id
                                            ? "text-primary"
                                            : "text-muted-foreground hover:text-foreground"
                                    )}
                                >
                                    {item.label}
                                </motion.button>
                            ))}
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
