// src/App.jsx
import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import { SkeletonGrid } from './components/ui/skeleton';
import './index.css';

const Experience = React.lazy(() => import('./components/Experience'));
const Projects = React.lazy(() => import('./components/Projects'));
const Skills = React.lazy(() => import('./components/Skills'));
const Education = React.lazy(() => import('./components/Education'));
// const Certifications = React.lazy(() => import('./components/Certifications'));
const Contact = React.lazy(() => import('./components/Contact'));

function App() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Helmet>
                {/* ---------------------- PAGE TITLE ---------------------- */}
                <title>Iswar Chandra Rana - Software Engineer</title>

                {/* ---------------------- META DESCRIPTION ---------------------- */}
                <meta
                    name="description"
                    content="Portfolio of Iswar Chandra Rana — Software Engineer specializing in Spring Boot microservices, Java, AWS, Docker, distributed systems, and scalable backend development."
                />

                {/* ---------------------- KEYWORDS ---------------------- */}
                <meta
                    name="keywords"
                    content="Iswar Rana, Iswar Chandra Rana, Software Engineer, Java Developer, Spring Boot Developer, Microservices Engineer, Backend Developer, Portfolio"
                />

                <meta name="author" content="Iswar Chandra Rana" />

                {/* ---------------------- OPEN GRAPH (SOCIAL SHARING) ---------------------- */}
                <meta property="og:title" content="Iswar Chandra Rana - Software Engineer Portfolio" />
                <meta
                    property="og:description"
                    content="Explore my professional projects, experience, and technical skills in backend engineering, Java, Spring Boot, and cloud-native microservices."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://iswarchandra.com" />
                <meta property="og:image" content="https://iswarchandra.com/preview.png" /> {/* Optional preview image */}

                {/* ---------------------- TWITTER TAGS ---------------------- */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Iswar Chandra Rana - Portfolio" />
                <meta
                    name="twitter:description"
                    content="Portfolio website of Iswar Chandra Rana showcasing backend engineering skills, projects, and professional experience."
                />

                <link rel="canonical" href="https://iswarchandra.com" />

                {/* ---------------------- STRUCTURED DATA (SEO) ---------------------- */}
                <script type="application/ld+json">
                    {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Iswar Chandra Rana",
              "url": "https://iswarchandra.com",
              "sameAs": [
                "https://github.com/Iswar-Ch-Rana",
                "https://www.linkedin.com/in/iswar-chandra-rana/"
              ],
              "jobTitle": "Software Engineer",
              "description": "Backend & Microservices Engineer specializing in Java, Spring Boot, AWS, Docker, distributed systems, and performance optimization."
            }
          `}
                </script>

                {/* Allow Google to index the site */}
                <meta name="robots" content="index, follow" />
            </Helmet>

            {/* ---------------------- HEADER ---------------------- */}
            <Header />

            {/* ---------------------- MAIN CONTENT ---------------------- */}
            <div className="main-content">
                <About />

                <Suspense
                    fallback={
                        <div className="container py-16">
                            <SkeletonGrid count={6} />
                        </div>
                    }
                >
                    <Experience />
                    <Projects />
                    <Skills />
                    <Education />
                    {/*<Certifications />*/}
                    <Contact />
                </Suspense>
            </div>

            {/* ---------------------- FOOTER ---------------------- */}
            <Footer />
        </div>
    );
}

export default App;
