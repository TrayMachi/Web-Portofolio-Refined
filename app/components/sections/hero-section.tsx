import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import { useEffect, useRef } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useSubmit } from "react-router";
import Typed from "typed.js";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import {
  PERSONAL_INFO,
  SECTION_IDS,
  SOCIAL_LINKS,
  TYPING_STRINGS,
} from "~/lib/constants";
import { useSmoothScroll } from "~/lib/smooth-scroll";

export function HeroSection() {
  const typedRef = useRef<HTMLSpanElement>(null);
  const { scrollToSection } = useSmoothScroll();
  const submit = useSubmit();

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: [...TYPING_STRINGS],
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 1000,
        startDelay: 300,
        loop: true,
      });

      return () => typed.destroy();
    }
  }, []);

  const scrollToContact = () => {
    scrollToSection(SECTION_IDS.contact);
  };

  const trackCVDownload = async () => {
    try {
      // Get user agent and other browser info
      const userAgent = navigator.userAgent;
      const platform = navigator.platform;
      const language = navigator.language;
      const screenResolution = `${screen.width}x${screen.height}`;
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      // Get timestamp
      const now = new Date();
      const timestamp = now.toISOString();

      // Get referrer if available
      const referrer = document.referrer || "Direct visit";

      // Try to get IP-based location (this is a free service)
      let locationInfo = "Unknown";
      try {
        const locationResponse = await fetch("https://ipapi.co/json/");
        const locationData = await locationResponse.json();
        if (locationData.city && locationData.country) {
          locationInfo = `${locationData.city}, ${locationData.country}`;
        }
      } catch (error) {
        console.log("Location detection failed:", error);
      }

      // Create form data to submit to server action
      const formData = new FormData();
      formData.append("_action", "cv_download");
      formData.append("location", locationInfo);
      formData.append("timezone", timezone);
      formData.append("platform", platform);
      formData.append("userAgent", userAgent);
      formData.append("screenResolution", screenResolution);
      formData.append("language", language);
      formData.append("referrer", referrer);
      formData.append("timestamp", timestamp);

      // Submit to server action
      submit(formData, { method: "post" });
    } catch (error) {
      console.error("Failed to track CV download:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-muted-foreground font-medium"
              >
                👋 Hello, I'm
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-[52px] font-bold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent"
              >
                {PERSONAL_INFO.name}
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-3xl font-semibold text-foreground"
              >
                a <span ref={typedRef} className="text-primary" />
              </motion.h2>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90"
              >
                <a
                  href={PERSONAL_INFO.cv}
                  download="CV_TristanAgraYudhistira"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={trackCVDownload}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={scrollToContact}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center space-x-6"
            >
              <motion.a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="text-muted-foreground hover:text-[#0077B5] transition-colors"
              >
                <FaLinkedin size={24} />
              </motion.a>

              <motion.a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <FaGithub size={24} />
              </motion.a>

              <motion.a
                href={SOCIAL_LINKS.email}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="text-muted-foreground hover:text-red-500 transition-colors"
              >
                <Mail size={24} />
              </motion.a>

              <motion.a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="text-muted-foreground hover:text-pink-500 transition-colors"
              >
                <FaInstagram size={24} />
              </motion.a>

              <motion.a
                href={SOCIAL_LINKS.x}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="text-muted-foreground hover:text-blue-500 transition-colors"
              >
                <FaXTwitter size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-purple-500/30 rounded-full blur-2xl transform scale-110" />
              <Avatar className="relative w-80 h-80 md:w-96 md:h-96 border-4 border-primary/20">
                <AvatarImage
                  src={PERSONAL_INFO.image}
                  alt={PERSONAL_INFO.name}
                  className="object-cover"
                />
                <AvatarFallback className="text-4xl font-bold">
                  {PERSONAL_INFO.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>

              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -top-2 -right-8 bg-background border border-border rounded-full px-3 py-1.5 shadow-lg flex items-center gap-2 text-sm font-medium"
              >
                <img
                  src="/glints-logo.png"
                  alt="Glints"
                  className="h-4 w-4 object-contain"
                />
                <span className="text-foreground">
                  Software Engineer at Glints
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
