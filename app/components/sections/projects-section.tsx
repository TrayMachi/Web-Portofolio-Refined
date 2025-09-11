import { motion } from "framer-motion";
import { ExternalLink, Eye, Github } from "lucide-react";

import { Button } from "~/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";
import { PROJECTS } from "~/lib/constants";

export function ProjectsSection() {
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
                        Featured Projects
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        A showcase of my recent work and contributions to various projects.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="h-full"
                        >
                            <Card className="border-primary/20 bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col overflow-hidden group">
                                {/* Project Image */}
                                <div className="relative overflow-hidden bg-muted">
                                    <motion.img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                                        whileHover={{ scale: 1.05 }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    {/* Quick Action Buttons */}
                                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {project.demo && (
                                            <Button
                                                size="sm"
                                                variant="secondary"
                                                asChild
                                                className="bg-white/90 text-black hover:bg-white"
                                            >
                                                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                                    <Eye className="h-4 w-4" />
                                                </a>
                                            </Button>
                                        )}
                                        {project.github && (
                                            <Button
                                                size="sm"
                                                variant="secondary"
                                                disabled={project.isPrivate}
                                                asChild
                                                className="bg-white/90 text-black hover:bg-white"
                                            >
                                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                    <Github className="h-4 w-4" />
                                                </a>
                                            </Button>
                                        )}
                                    </div>
                                </div>

                                <CardHeader className="pb-4">
                                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                                        {project.title}
                                    </CardTitle>
                                </CardHeader>

                                <CardContent className="flex-1 pb-4">
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </CardContent>

                                <CardFooter className="pt-4 border-t border-border/50">
                                    <div className="flex gap-2 w-full">
                                        {project.github && (
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                asChild
                                                className="flex-1 border-primary/20 hover:bg-primary hover:text-primary-foreground"
                                            >
                                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                    <Github className="mr-2 h-4 w-4" />
                                                    Code
                                                </a>
                                            </Button>
                                        )}
                                        {project.demo && (
                                            <Button
                                                size="sm"
                                                asChild
                                                className="flex-1 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90"
                                            >
                                                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                                    <ExternalLink className="mr-2 h-4 w-4" />
                                                    Live Demo
                                                </a>
                                            </Button>
                                        )}
                                    </div>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* View More Projects */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <Button
                        variant="outline"
                        size="lg"
                        asChild
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                        <a href="https://github.com/TrayMachi" target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            View More on GitHub
                        </a>
                    </Button>
                </motion.div>
            </div>
        </div>
    );
}
