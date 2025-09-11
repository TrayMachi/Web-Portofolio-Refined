import { motion } from "framer-motion";
import { Code, Server, Terminal } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { SKILLS } from "~/lib/constants";

const SkillCard = ({ skill, index }: { skill: { name: string; icon: string }; index: number }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05, y: -5 }}
        className="group"
    >
        <Card className="border-primary/20 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:border-primary/40">
            <CardContent className="p-6 text-center">
                <div className="relative mb-4">
                    <div className="w-16 h-16 mx-auto bg-muted rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                        <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-10 h-10 object-contain filter group-hover:brightness-110 transition-all"
                        />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                </div>
                <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                </h3>
            </CardContent>
        </Card>
    </motion.div>
);

export function SkillsSection() {
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
                        Skills & Technologies
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        The tools and technologies I use to bring ideas to life.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <Tabs defaultValue="frontend" className="w-full">
                        <TabsList className="grid w-full grid-cols-3 mb-8 bg-card/50 backdrop-blur-sm">
                            <TabsTrigger
                                value="frontend"
                                className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                            >
                                <Code className="h-4 w-4" />
                                <span className="hidden sm:inline">Frontend</span>
                            </TabsTrigger>
                            <TabsTrigger
                                value="backend"
                                className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                            >
                                <Server className="h-4 w-4" />
                                <span className="hidden sm:inline">Backend</span>
                            </TabsTrigger>
                            <TabsTrigger
                                value="devops"
                                className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                            >
                                <Terminal className="h-4 w-4" />
                                <span className="hidden sm:inline">DevOps</span>
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="frontend" className="space-y-6">
                            <Card className="border-primary/20 bg-card/30 backdrop-blur-sm">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3">
                                        <div className="p-2 bg-primary/10 rounded-lg">
                                            <Code className="h-5 w-5 text-primary" />
                                        </div>
                                        Frontend Technologies
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                                        {SKILLS.frontend.map((skill, index) => (
                                            <SkillCard key={skill.name} skill={skill} index={index} />
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="backend" className="space-y-6">
                            <Card className="border-primary/20 bg-card/30 backdrop-blur-sm">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3">
                                        <div className="p-2 bg-primary/10 rounded-lg">
                                            <Server className="h-5 w-5 text-primary" />
                                        </div>
                                        Backend Technologies
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                        {SKILLS.backend.map((skill, index) => (
                                            <SkillCard key={skill.name} skill={skill} index={index} />
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="devops" className="space-y-6">
                            <Card className="border-primary/20 bg-card/30 backdrop-blur-sm">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3">
                                        <div className="p-2 bg-primary/10 rounded-lg">
                                            <Terminal className="h-5 w-5 text-primary" />
                                        </div>
                                        DevOps & Services
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                        {SKILLS.devops.map((skill, index) => (
                                            <SkillCard key={skill.name} skill={skill} index={index} />
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </motion.div>
            </div>
        </div>
    );
}
