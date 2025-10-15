import Link from "next/link";
import React from "react";

const PublicationLayout = ({ title, authors, journal, volume, impact, link }) => {
  return (
    <Link
      href={link}
      target="_blank"
      className="text-sm md:text-base flex  items-center justify-between w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg"
    >
      <div className="flex flex-col items-start justify-center w-full">
        <h2 className="text-base md:text-xl font-semibold text-foreground mb-2">
          {title}
        </h2>
        <p className="text-xs md:text-sm text-muted mb-1">{authors}</p>
        <p className="text-xs md:text-sm text-foreground/80">
          <span className="font-medium">{journal}</span>
          {volume && `, ${volume}`}
        </p>
        {impact && (
          <span className="inline-block mt-2 px-3 py-1 text-xs font-semibold rounded-full bg-accent/20 text-accent border border-accent/30">
            {impact}
          </span>
        )}
      </div>
    </Link>
  );
};

export default PublicationLayout;
