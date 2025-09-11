import { motion } from "framer-motion";
import { Award, Calendar, GraduationCap } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { EDUCATION } from "~/lib/constants";

export function AboutSection() {
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
                        About Me
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Get to know more about my background, education, and what drives my passion for technology.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* About Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3">
                                    <div className="p-2 bg-primary/10 rounded-lg">
                                        <GraduationCap className="h-5 w-5 text-primary" />
                                    </div>
                                    My Journey
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-muted-foreground leading-relaxed">
                                    I believe in continuous learning and staying updated with the latest technologies.
                                    My goal is to create impactful digital solutions that solve real-world problems
                                    while delivering exceptional user experiences.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3">
                                    <div className="p-2 bg-primary/10 rounded-lg">
                                        <Award className="h-5 w-5 text-primary" />
                                    </div>
                                    What I Do
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <h4 className="font-semibold text-primary">Software Engineer</h4>
                                        <p className="text-sm text-muted-foreground">
                                            Building responsive and interactive digital solutions through Web, Mobile, and Desktop.
                                        </p>
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="font-semibold text-primary">Project Manager</h4>
                                        <p className="text-sm text-muted-foreground">
                                            Managing and coordinating projects to ensure timely delivery and quality.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold mb-6">Education</h3>

                        {EDUCATION.map((edu, index) => (
                            <motion.div
                                key={edu.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="border-primary/20 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-shadow">
                                    <CardContent className="p-6">
                                        <div className="flex items-start space-x-4">
                                            <div className="p-3 bg-primary/10 rounded-lg">
                                                <GraduationCap className="h-6 w-6 text-primary" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-semibold text-lg">{edu.degree}</h4>
                                                <p className="text-primary font-medium">{edu.institution}</p>
                                                <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                                                    <Calendar className="h-4 w-4" />
                                                    {edu.period}
                                                </div>
                                                <p className="mt-3 text-muted-foreground">{edu.description}</p>
                                                {edu.gpa && (
                                                    <div className="mt-3 flex items-center gap-2">
                                                        <Award className="h-4 w-4 text-primary" />
                                                        <span className="text-sm font-medium">GPA: {edu.gpa}</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}

                        {/* Quick Stats */}
                        <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-purple-500/5 backdrop-blur-sm">
                            <CardContent className="p-6">
                                <h4 className="font-semibold mb-4">Quick Stats</h4>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-primary">15+</div>
                                        <div className="text-sm text-muted-foreground">Projects Completed</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-primary">3+</div>
                                        <div className="text-sm text-muted-foreground">Organizations</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-primary">2+</div>
                                        <div className="text-sm text-muted-foreground">Achievements</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-primary">3+</div>
                                        <div className="text-sm text-muted-foreground">Years Learning</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
