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
            Educator & Technology Innovator
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            As a dedicated Professor in the Department of Information Technology at
            The University of Modern Sciences, Tando Muhammad Khan, I am committed to
            shaping the next generation of IT professionals. My expertise spans across
            modern web technologies, software engineering, and computer science education.
            I specialize in teaching and researching cutting-edge technologies including
            JavaScript, React.js, Next.js, and full-stack development. With a passion
            for innovation and academic excellence, I strive to bridge the gap between
            theoretical knowledge and practical application, empowering students to become
            skilled professionals in the ever-evolving field of information technology.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            500+ <sub className="font-semibold text-base">students taught</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            10+{" "}
            <sub className="font-semibold text-base">years of teaching</sub>
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full sm:col-span-6 md:col-span-4"}>
          <h3 className="text-xl font-semibold text-accent mb-2">Research Areas</h3>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Web Technologies</li>
            <li>Software Engineering</li>
            <li>Database Systems</li>
            <li>Cloud Computing</li>
          </ul>
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8"}>
          <h3 className="text-xl font-semibold text-accent mb-2">Academic Qualifications</h3>
          <p className="text-sm">
            Ph.D. in Information Technology<br/>
            Specializing in modern web development, software engineering methodologies,
            and computer science education. Committed to advancing IT education and
            fostering innovation in the field of technology.
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=html,css,js,react,nextjs,nodejs,mongodb,mysql,git,github,vscode,tailwind,bootstrap,python,java,cpp,docker,linux,aws,firebase`}
            alt="Technical Skills"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6"}>
          <h3 className="text-xl font-semibold text-accent mb-2">Teaching Philosophy</h3>
          <p className="text-sm">
            Emphasizing hands-on learning, critical thinking, and real-world
            application of theoretical concepts. Dedicated to creating an
            inclusive and engaging learning environment.
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6"}>
          <h3 className="text-xl font-semibold text-accent mb-2">Professional Development</h3>
          <p className="text-sm">
            Continuously updating curriculum with latest industry trends and
            technologies. Active participation in academic conferences and
            professional workshops to enhance teaching methodologies.
          </p>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
