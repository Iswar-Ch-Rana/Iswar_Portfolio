// src/components/Certifications.js
import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { FaAws, FaGithub } from 'react-icons/fa';
import { certifications, certificationsMeta } from '../data/certifications';

const Certifications = () => {
  const [isFlipped, setIsFlipped] = useState(Array(certifications.length).fill(false));

  const handleFlip = (idx) => {
    setIsFlipped((prev) => prev.map((v, i) => (i === idx ? !v : v)));
  };

  // Icon mapping
  const getIcon = (iconType) => {
    const icons = {
      aws: <FaAws size={40} className="mx-auto mb-3 text-[#FF9900]" />,
      github: <FaGithub size={40} className="mx-auto mb-3 text-foreground" />,
    };
    return icons[iconType] || null;
  };

  // Background color mapping for card flip
  const getBgColor = (iconType) => {
    const colors = {
      aws: 'bg-[#FF9900]',
      github: 'bg-foreground',
    };
    return colors[iconType] || 'bg-primary';
  };

  return (
    <section id="certifications" className="py-16 sm:py-20 lg:py-24 bg-foreground/[0.02]">
      <div className="container text-center">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">{certificationsMeta.heading}</h2>
          <p className="mt-2 text-muted-foreground">{certificationsMeta.subtitle}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {certifications.map((cert, idx) => (
            <ReactCardFlip key={idx} isFlipped={isFlipped[idx]} flipDirection="horizontal">
              {/* Front Side */}
              <div
                className="rounded-md border border-border bg-card p-6 shadow-sm cursor-pointer"
                onClick={() => handleFlip(idx)}
              >
                {getIcon(cert.icon)}
                <h3 className="text-lg font-semibold">{cert.name}</h3>
                <p className="text-sm text-muted-foreground">Issued By: {cert.issuer}</p>
                <p className="text-sm text-muted-foreground">{cert.period}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-primary font-medium"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Certificate
                </a>
              </div>

              {/* Back Side */}
              <div
                className={`rounded-md border border-border ${getBgColor(cert.icon)} p-4 text-white cursor-pointer`}
                onClick={() => handleFlip(idx)}
              >
                <img
                  src={cert.image}
                  alt={`${cert.name} Certificate`}
                  className="w-full h-auto rounded-md"
                  loading="lazy"
                />
              </div>
            </ReactCardFlip>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
