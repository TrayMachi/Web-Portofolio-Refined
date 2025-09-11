import { motion } from "framer-motion";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "~/lib/theme-context";
import { Button } from "./button";

export function ThemeToggle() {
    const { theme, setTheme, resolvedTheme } = useTheme();

    const themes = [
        { key: "light" as const, icon: Sun, label: "Light" },
        { key: "dark" as const, icon: Moon, label: "Dark" },
    ];

    const currentTheme = themes.find(t => t.key === theme);
    const Icon = currentTheme?.icon || Sun;

    return (
        <div className="relative">
            <Button
                variant="outline"
                size="sm"
                className="relative w-9 h-9 p-0 border-border/50 hover:border-border bg-card/50 hover:bg-card/80 backdrop-blur-sm"
                onClick={() => {
                    const currentIndex = themes.findIndex(t => t.key === theme);
                    const nextIndex = (currentIndex + 1) % themes.length;
                    setTheme(themes[nextIndex].key);
                }}
            >
                <motion.div
                    key={theme}
                    initial={{ scale: 0.5, opacity: 0, rotate: -180 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    exit={{ scale: 0.5, opacity: 0, rotate: 180 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <Icon className="h-4 w-4" />
                </motion.div>
                <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Theme indicator dot */}
            <motion.div
                className={`absolute -bottom-1 -right-1 w-2 h-2 rounded-full ${
                    resolvedTheme === "dark" ? "bg-blue-500" : "bg-yellow-500"
                }`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
            />
        </div>
    );
}
