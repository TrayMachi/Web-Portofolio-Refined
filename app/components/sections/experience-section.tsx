import { motion } from "framer-motion";
import { Calendar, ChevronRight } from "lucide-react";
import { Card, CardContent } from "~/components/ui/card";
import { EXPERIENCE } from "~/lib/constants";

export function ExperienceSection() {
    return (
        <div className="py-20 px-6 bg-muted/20">
            <div className="container max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                        Experience
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        My professional journey and the organizations I've contributed to.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="max-h-[600px] overflow-y-auto pr-4 space-y-6">
                        {EXPERIENCE.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="border-primary/20 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                                    <CardContent className="p-4">
                                        <div className="space-y-3">
                                            <div>
                                                <h3 className="text-lg font-bold text-primary">{exp.title}</h3>
                                                <p className="font-semibold text-foreground text-sm">{exp.position}</p>
                                                <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                                                    <Calendar className="h-3 w-3" />
                                                    {exp.period}
                                                </div>
                                            </div>

                                            <ul className="space-y-1">
                                                {exp.description.slice(0, 3).map((desc, descIndex) => (
                                                    <li
                                                        key={descIndex}
                                                        className="flex items-start gap-2 text-xs text-muted-foreground"
                                                    >
                                                        <ChevronRight className="h-3 w-3 text-primary mt-0.5 flex-shrink-0" />
                                                        {desc}
                                                    </li>
                                                ))}
                                                {exp.description.length > 3 && (
                                                    <li className="text-xs text-primary/70 pl-5">
                                                        +{exp.description.length - 2} more achievements
                                                    </li>
                                                )}
                                            </ul>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
