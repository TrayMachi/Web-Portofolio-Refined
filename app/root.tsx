import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";

import { ThemeProvider } from "~/lib/theme-context";
import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
    // Fonts
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
    },
    {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
    },

    // Favicons and App Icons
    { rel: "manifest", href: "/webicon/manifest.json" },
    { rel: "icon", type: "image/x-icon", href: "/webicon/favicon.ico" },
    { rel: "icon", type: "image/png", sizes: "16x16", href: "/webicon/favicon-16x16.png" },
    { rel: "icon", type: "image/png", sizes: "32x32", href: "/webicon/favicon-32x32.png" },
    { rel: "icon", type: "image/png", sizes: "96x96", href: "/webicon/favicon-96x96.png" },

    // Apple Touch Icons
    { rel: "apple-touch-icon", sizes: "57x57", href: "/webicon/apple-icon-57x57.png" },
    { rel: "apple-touch-icon", sizes: "60x60", href: "/webicon/apple-icon-60x60.png" },
    { rel: "apple-touch-icon", sizes: "72x72", href: "/webicon/apple-icon-72x72.png" },
    { rel: "apple-touch-icon", sizes: "76x76", href: "/webicon/apple-icon-76x76.png" },
    { rel: "apple-touch-icon", sizes: "114x114", href: "/webicon/apple-icon-114x114.png" },
    { rel: "apple-touch-icon", sizes: "120x120", href: "/webicon/apple-icon-120x120.png" },
    { rel: "apple-touch-icon", sizes: "144x144", href: "/webicon/apple-icon-144x144.png" },
    { rel: "apple-touch-icon", sizes: "152x152", href: "/webicon/apple-icon-152x152.png" },
    { rel: "apple-touch-icon", sizes: "180x180", href: "/webicon/apple-icon-180x180.png" },

    // Microsoft Tiles
    { rel: "msapplication-TileImage", href: "/webicon/ms-icon-144x144.png" },
];

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="dark">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                {/* Basic SEO Meta Tags */}
                <title>Tristan Agra Yudhistira - Software Engineer Portfolio</title>
                <meta
                    name="description"
                    content="Software Engineer specializing in Website, Mobile, and Desktop Development. Currently studying Computer Science at Universitas Indonesia."
                />
                <meta
                    name="keywords"
                    content= "Software Engineer specializing in Website, Mobile, and Desktop Development. Currently studying Computer Science at Universitas Indonesia."
                />
                <meta name="author" content="Tristan Agra Yudhistira" />
                <meta name="robots" content="index, follow" />
                <meta name="language" content="English" />
                <meta name="revisit-after" content="7 days" />

                {/* Open Graph Meta Tags for Social Media */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Tristan Agra Yudhistira - Software Engineer Portfolio" />
                <meta
                    property="og:description"
                    content="Software Engineer specializing in Website, Mobile, and Desktop Development. Currently studying Computer Science at Universitas Indonesia."
                />
                <meta property="og:image" content="/webicon/android-icon-192x192.png" />
                <meta property="og:url" content="https://tristanagra.dev" />
                <meta property="og:site_name" content="Tristan Agra Yudhistira Portfolio" />
                <meta property="og:locale" content="en_US" />

                {/* Twitter Card Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Tristan Agra Yudhistira - Software Engineer Portfolio" />
                <meta
                    name="twitter:description"
                    content="Software Engineer specializing in Website, Mobile, and Desktop Development. Currently studying Computer Science at Universitas Indonesia."
                />
                <meta name="twitter:image" content="/webicon/android-icon-192x192.png" />
                <meta name="twitter:creator" content="@TrayMachi" />
                <meta name="twitter:site" content="@TrayMachi" />

                {/* LinkedIn and Professional Networks */}
                <meta property="profile:first_name" content="Tristan" />
                <meta property="profile:last_name" content="Agra Yudhistira" />
                <meta property="profile:username" content="tristanagra" />

                {/* Additional Meta Tags */}
                <meta name="theme-color" content="#6366f1" />
                <meta name="msapplication-TileColor" content="#6366f1" />
                <meta name="msapplication-config" content="/webicon/browserconfig.xml" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                <meta name="apple-mobile-web-app-title" content="Tristan Portfolio" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://tristanagra.dev" />

                <Meta />
                <Links />
                {/* Structured Data for SEO */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            name: "Tristan Agra Yudhistira",
                            jobTitle: "Software Engineer",
                            description:
                                "Software Engineer specializing in Website, Mobile, and Desktop Development. Currently studying Computer Science at Universitas Indonesia.",
                            url: "https://tristanagra.dev",
                            email: "tristanagraa@gmail.com",
                            image: "/Profile/tristan.png",
                            sameAs: [
                                "https://www.linkedin.com/in/tristanagra/",
                                "https://github.com/TrayMachi",
                                "https://www.instagram.com/tristan.agra/",
                                "https://x.com/TrayMachi",
                            ],
                            alumniOf: {
                                "@type": "EducationalOrganization",
                                name: "Universitas Indonesia",
                                description: "Computer Science",
                            },
                            knowsAbout: [
                                "React",
                                "Next.js",
                                "TypeScript",
                                "JavaScript",
                                "NestJS",
                                "Node.js",
                                "Full Stack Development",
                                "Software Engineering",
                                "Web Development",
                            ],
                            address: {
                                "@type": "PostalAddress",
                                addressLocality: "Jakarta",
                                addressCountry: "Indonesia",
                            },
                        }),
                    }}
                />

                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              // Theme detection and initialization
              try {
                const theme = localStorage.getItem('theme') || 'system';
                let resolvedTheme;
                
                if (theme === 'system') {
                  resolvedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                } else {
                  resolvedTheme = theme;
                }
                
                document.documentElement.classList.remove('light', 'dark');
                document.documentElement.classList.add(resolvedTheme);
              } catch (e) {
                document.documentElement.classList.add('dark');
              }
            `,
                    }}
                />
            </head>
            <body className="antialiased">
                {children}
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export default function App() {
    return (
        <ThemeProvider>
            <Outlet />
        </ThemeProvider>
    );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
    let message = "Oops!";
    let details = "An unexpected error occurred.";
    let stack: string | undefined;

    if (isRouteErrorResponse(error)) {
        message = error.status === 404 ? "404" : "Error";
        details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
    } else if (import.meta.env.DEV && error && error instanceof Error) {
        details = error.message;
        stack = error.stack;
    }

    return (
        <main className="min-h-screen flex items-center justify-center p-4">
            <div className="max-w-md mx-auto text-center space-y-6">
                <div className="space-y-2">
                    <h1 className="text-6xl font-bold text-primary">{message}</h1>
                    <p className="text-lg text-muted-foreground">{details}</p>
                </div>
                <a
                    href="/"
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                    Go back home
                </a>
                {stack && (
                    <details className="mt-8 text-left">
                        <summary className="cursor-pointer text-sm text-muted-foreground hover:text-foreground">
                            Show error details
                        </summary>
                        <pre className="mt-4 p-4 bg-muted rounded-lg text-xs overflow-x-auto">
                            <code>{stack}</code>
                        </pre>
                    </details>
                )}
            </div>
        </main>
    );
}
