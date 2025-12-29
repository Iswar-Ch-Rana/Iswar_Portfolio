export const projects = [
    {
        title: "Enterprise Document Management System",
        period: "June 2024 – Present",
        bullets: [
            "Designed and developed a scalable Spring Boot microservice with AWS S3 for secure document storage and retrieval.",
            "Integrated Stripe API to process payments for 500+ monthly transactions with webhook support.",
            "Implemented government API integrations with robust error handling and retry mechanisms.",
            "Containerized services using Docker and optimized CI/CD pipelines for zero-downtime deployments.",
            "Achieved 99.9% application uptime with production-grade monitoring and logging.",
        ],
        links: {
            code: null, // Private enterprise code
            demo: null,
        },
        tags: ["Spring Boot", "AWS S3", "Stripe", "PostgreSQL", "Docker", "REST APIs"],
    },

    {
        title: "Microservices Rules Engine",
        period: "March 2024 – June 2024",
        bullets: [
            "Developed a centralized Rules Engine using Drools for dynamic business validations across multiple services.",
            "Reduced code complexity by 40% by externalizing rule logic from application code.",
            "Enabled on-the-fly rule updates without code redeployment, improving flexibility for 15+ business scenarios.",
            "Optimized execution flow, reducing processing time by 50%.",
        ],
        links: {
            code: null,
            demo: null,
        },
        tags: ["Drools", "Spring Boot", "PostgreSQL", "Microservices", "Rule Engine"],
    },

    {
        title: "Performance Optimization & Legacy Migration",
        period: "January 2024 – April 2024",
        bullets: [
            "Migrated a legacy Node.js + Stored Procedure based module to Spring Boot, improving performance by 40%.",
            "Optimized database queries with indexing and rewritten joins, reducing execution time from 30s to under 5s (83% gain).",
            "Implemented clean layered architecture with DTOs, services, and repository patterns.",
            "Improved system maintainability and reduced tech debt significantly.",
        ],
        links: {
            code: null,
            demo: null,
        },
        tags: ["Spring Boot", "Node.js Migration", "SQL Optimization", "Indexing", "Microservices"],
    },
];
