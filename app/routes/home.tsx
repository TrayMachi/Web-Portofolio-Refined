import { Navigation } from "~/components/navigation";
import { AboutSection } from "~/components/sections/about-section";
import { ContactSection } from "~/components/sections/contact-section";
import { ExperienceSection } from "~/components/sections/experience-section";
import { HeroSection } from "~/components/sections/hero-section";
import { ProjectsSection } from "~/components/sections/projects-section";
import { SkillsSection } from "~/components/sections/skills-section";
import { BackToTop } from "~/components/ui/back-to-top";
import { ScrollProgress } from "~/components/ui/scroll-progress";
import { SECTION_IDS } from "~/lib/constants";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Tristan Agra Yudhistira | Software Engineer" },
        {
            name: "description",
            content:
                "Portfolio of Tristan Agra Yudhistira - Computer Science student and aspiring Software Engineer at University of Indonesia.",
        },
        {
            name: "keywords",
            content: "software engineer, computer science, react, nextjs, typescript, nestjs, portfolio",
        },
        { name: "author", content: "Tristan Agra Yudhistira" },
        { property: "og:title", content: "Tristan Agra Yudhistira | Software Engineer" },
        {
            property: "og:description",
            content: "Portfolio of Tristan Agra Yudhistira - Computer Science student and aspiring Software Engineer.",
        },
        { property: "og:type", content: "website" },
        { property: "og:image", content: "/Profile/tristan.png" },
        { name: "twitter:card", content: "summary_large_image" },
    ];
}

export default function Home() {
    return (
        <div className="min-h-screen bg-background">
            <ScrollProgress />
            <Navigation />

            <main className="relative">
                <section id={SECTION_IDS.home}>
                    <HeroSection />
                </section>

                <section id={SECTION_IDS.about}>
                    <AboutSection />
                </section>

                <section id={SECTION_IDS.experience}>
                    <ExperienceSection />
                </section>

                <section id={SECTION_IDS.projects}>
                    <ProjectsSection />
                </section>

                <section id={SECTION_IDS.skills}>
                    <SkillsSection />
                </section>

                <section id={SECTION_IDS.contact}>
                    <ContactSection />
                </section>
            </main>

            <BackToTop />
        </div>
    );
}
