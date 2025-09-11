import { motion } from "framer-motion";
import { AlertCircle, CheckCircle, Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { PERSONAL_INFO, SOCIAL_LINKS } from "~/lib/constants";

export function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            const webhookUrl = 'https://discord.com/api/webhooks/1415661871821885461/GNv8Xr0G3vbrAQFb9vgNTqUjVJKD_4ZbPXvEJ5Y2NdHNrVAiwGns93Eahh1OmigAHSWX';

            if (!webhookUrl) {
                throw new Error("Discord webhook URL not configured");
            }

            // Create Discord embed
            const embed = {
                title: "🌐 New Portfolio Contact",
                color: 0x6366f1, // Primary color
                fields: [
                    {
                        name: "👤 Name",
                        value: formData.name,
                        inline: true,
                    },
                    {
                        name: "📧 Email",
                        value: formData.email,
                        inline: true,
                    },
                    {
                        name: "💬 Message",
                        value: formData.message || "No message provided",
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

            setSubmitStatus("success");
            // Reset form
            setFormData({ name: "", email: "", message: "" });

            // Auto-hide success message after 5 seconds
            setTimeout(() => setSubmitStatus("idle"), 5000);
        } catch (error) {
            console.error("Failed to send message:", error);
            setSubmitStatus("error");

            // Auto-hide error message after 5 seconds
            setTimeout(() => setSubmitStatus("idle"), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <div className="py-20 px-6">
            <div className="container max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                        Get in Touch
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        I'm always open to discussing new opportunities, interesting projects, or just having a chat
                        about technology.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                            <p className="text-muted-foreground leading-relaxed mb-8">
                                Whether you have a project in mind, need consulting on a technical challenge, or just
                                want to network, I'd love to hear from you. Let's create something amazing together!
                            </p>
                        </div>

                        <div className="space-y-6">
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="flex items-center gap-4 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-primary/20"
                            >
                                <div className="p-3 bg-primary/10 rounded-lg">
                                    <Mail className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-semibold">Email</h4>
                                    <a
                                        href={`mailto:${PERSONAL_INFO.email}`}
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {PERSONAL_INFO.email}
                                    </a>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="flex items-center gap-4 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-primary/20"
                            >
                                <div className="p-3 bg-primary/10 rounded-lg">
                                    <MapPin className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-semibold">Location</h4>
                                    <p className="text-muted-foreground">Jakarta, Indonesia</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h4 className="font-semibold mb-4">Follow Me</h4>
                            <div className="flex items-center space-x-4">
                                <motion.a
                                    href={SOCIAL_LINKS.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="p-3 bg-[#0077B5]/10 text-[#0077B5] rounded-lg hover:bg-[#0077B5]/20 transition-colors"
                                >
                                    <Linkedin className="h-5 w-5" />
                                </motion.a>

                                <motion.a
                                    href={SOCIAL_LINKS.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="p-3 bg-foreground/10 text-foreground rounded-lg hover:bg-foreground/20 transition-colors"
                                >
                                    <Github className="h-5 w-5" />
                                </motion.a>

                                <motion.a
                                    href={SOCIAL_LINKS.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="p-3 bg-pink-500/10 text-pink-500 rounded-lg hover:bg-pink-500/20 transition-colors"
                                >
                                    <FaInstagram className="h-5 w-5" />
                                </motion.a>

                                <motion.a
                                    href={SOCIAL_LINKS.x}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="p-3 bg-blue-500/10 text-blue-500 rounded-lg hover:bg-blue-500/20 transition-colors"
                                >
                                    <FaXTwitter className="h-5 w-5" />
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle>Send a Message</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium">
                                            Name
                                        </label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                                            placeholder="Your name"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium">
                                            Email
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={6}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                                            placeholder="Tell me about your project or just say hello!"
                                        />
                                    </div>

                                    {/* Status Messages */}
                                    {submitStatus === "success" && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="flex items-center gap-2 p-3 bg-green-500/10 border border-green-500/20 rounded-md text-green-600"
                                        >
                                            <CheckCircle className="h-4 w-4" />
                                            <span className="text-sm">
                                                Message sent successfully! I'll get back to you soon.
                                            </span>
                                        </motion.div>
                                    )}

                                    {submitStatus === "error" && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-md text-red-600"
                                        >
                                            <AlertCircle className="h-4 w-4" />
                                            <span className="text-sm">
                                                Failed to send message. Please try again or contact me directly.
                                            </span>
                                        </motion.div>
                                    )}

                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 disabled:opacity-50 disabled:cursor-not-allowed"
                                        size="lg"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                    className="mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full"
                                                />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="mr-2 h-4 w-4" />
                                                Send Message
                                            </>
                                        )}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-20 pt-8 border-t border-border/50 text-center"
                >
                    <p className="text-muted-foreground">
                        © 2025 {PERSONAL_INFO.name}.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
