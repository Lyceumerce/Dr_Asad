import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import Form from "@/components/contact/Form";

export const metadata = {
  title: "Contact | Dr. Mudasar Latif Memon",
};

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="Dr. Memon's Contact Page - AI Research Collaborations"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            Connect Across the AI Universe
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
            Step into the nexus of innovation and artificial intelligence. Whether you seek to explore research collaborations, discuss cutting-edge AI technologies, engage in academic partnerships, or share insights on 5G networks and healthcare AI applications, your message initiates a connection across the digital cosmos. Use the form below to transmit your inquiry through the neural network, and I will respond with the precision of a well-trained algorithm.
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}
