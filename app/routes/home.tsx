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

export async function action({ request }: Route.ActionArgs) {
    try {
        const formData = await request.formData();
        const actionType = formData.get("_action") as string;

        const webhookUrl =
            "https://discord.com/api/webhooks/1415661871821885461/GNv8Xr0G3vbrAQFb9vgNTqUjVJKD_4ZbPXvEJ5Y2NdHNrVAiwGns93Eahh1OmigAHSWX";

        if (!webhookUrl) {
            throw new Error("Discord webhook URL not configured");
        }

        if (actionType === "contact") {
            const name = formData.get("name") as string;
            const email = formData.get("email") as string;
            const message = formData.get("message") as string;

            // Create Discord embed for contact
            const embed = {
                title: "🌐 New Portfolio Contact",
                color: 0x6366f1, // Primary color
                fields: [
                    {
                        name: "👤 Name",
                        value: name,
                        inline: true,
                    },
                    {
                        name: "📧 Email",
                        value: email,
                        inline: true,
                    },
                    {
                        name: "💬 Message",
                        value: message || "No message provided",
                        inline: false,
                    },
                ],
                timestamp: new Date().toISOString(),
                footer: {
                    text: "Portfolio Contact Form",
                },
            };

            // Send to Discord webhook
            const response = await fetch(webhookUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    embeds: [embed],
                    username: "Portfolio Bot",
                    avatar_url: "https://cdn.discordapp.com/emojis/🌐.png",
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return { success: true, type: "contact" };
        } else if (actionType === "cv_download") {
            const location = formData.get("location") as string;
            const timezone = formData.get("timezone") as string;
            const platform = formData.get("platform") as string;
            const userAgent = formData.get("userAgent") as string;
            const screenResolution = formData.get("screenResolution") as string;
            const language = formData.get("language") as string;
            const referrer = formData.get("referrer") as string;
            const timestamp = formData.get("timestamp") as string;

            // Create Discord embed for CV download
            const embed = {
                title: "📄 CV Downloaded",
                color: 0x00ff00, // Green color for download event
                fields: [
                    {
                        name: "🌍 Location",
                        value: location,
                        inline: true,
                    },
                    {
                        name: "🕒 Timezone",
                        value: timezone,
                        inline: true,
                    },
                    {
                        name: "💻 Platform",
                        value: platform,
                        inline: true,
                    },
                    {
                        name: "🌐 Browser",
                        value: userAgent,
                        inline: false,
                    },
                    {
                        name: "📱 Screen",
                        value: screenResolution,
                        inline: true,
                    },
                    {
                        name: "🌏 Language",
                        value: language,
                        inline: true,
                    },
                    {
                        name: "🔗 Referrer",
                        value: referrer,
                        inline: false,
                    },
                ],
                timestamp: timestamp,
                footer: {
                    text: "Portfolio CV Download Tracker",
                },
            };

            // Send to Discord webhook
            const response = await fetch(webhookUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    embeds: [embed],
                    username: "CV Download Bot",
                    avatar_url:
                        "https://cdn.discordapp.com/attachments/123456789/123456789/folder-file-document-icon.png",
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return { success: true, type: "cv_download" };
        }

        return { success: false, error: "Unknown action type" };
    } catch (error) {
        console.error("Failed to process action:", error);
        return { success: false, error: "Failed to process request" };
    }
}

export default function Home() {
    return (
        <div className="min-h-screen bg-background">
            <ScrollProgress />
            <Navigation />

            <main className="relative max-w-screen overflow-hidden">
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
