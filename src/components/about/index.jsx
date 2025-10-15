import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            AI Researcher & Applied AI Pioneer
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            As Professor of Applied Artificial Intelligence at the University of Modern Sciences,
            Pakistan, I am at the forefront of AI research and innovation. With a PhD in Electronic
            and Electrical Engineering from Sungkyunkwan University (SKKU), South Korea, where I
            received the 1st prize in Superior Research Award, my work focuses on the convergence
            of emerging technologies including Applied AI, 5G Wireless Networks, and Healthcare
            sector applications. As former CEO of Lyceumerce Private Limited and leader of the
            AI Initiative SAINCUBE, I bridge the gap between cutting-edge research and practical
            applications, advancing the field of artificial intelligence while mentoring the next
            generation of AI professionals.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            14+ <sub className="font-semibold text-base">publications</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            9+{" "}
            <sub className="font-semibold text-base">years at IBA</sub>
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full sm:col-span-6 md:col-span-4"}>
          <h3 className="text-xl font-semibold text-accent mb-2">Research Areas</h3>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Applied Artificial Intelligence</li>
            <li>5G Wireless Networks</li>
            <li>Healthcare AI Applications</li>
            <li>Emerging Technologies Convergence</li>
          </ul>
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8"}>
          <h3 className="text-xl font-semibold text-accent mb-2">Academic Qualifications</h3>
          <p className="text-sm">
            Ph.D. in Electronic and Electrical Engineering<br/>
            Sungkyunkwan University (SKKU), South Korea<br/>
            Recipient of 1st Prize in Superior Research Award<br/>
            Supervised by Prof. Dong Ryeol Shin and co-supervised by Prof. N. Saxena<br/>
            Specialized in AI convergence, 5G networks, and healthcare technology applications.
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=python,tensorflow,pytorch,keras,sklearn,opencv,matlab,latex,linux,docker,aws,gcp,git,github,vscode,jupyter,anaconda,mysql,mongodb,nodejs`}
            alt="AI & Technical Skills"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6"}>
          <h3 className="text-xl font-semibold text-accent mb-2">Research Collaborations</h3>
          <p className="text-sm">
            Active collaborations with MediaTek Inc. USA and Samsung, South Korea.
            Member of Technical Program Committees for IEEE Conferences.
            External examiner for graduate proposals and global talent mentoring programs.
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6"}>
          <h3 className="text-xl font-semibold text-accent mb-2">Professional Training</h3>
          <p className="text-sm">
            Completed &ldquo;Postdocs Ventures: From Science to Business&rdquo; at University of Cambridge (2020).
            Conducted workshops on Writing Research Articles Using LATEX and AI.
            Active speaker on AI Tools in Medical Education and Research.
          </p>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
