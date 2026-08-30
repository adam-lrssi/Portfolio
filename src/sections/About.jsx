import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const text = `Passionné par le développement web moderne,
   Je conçois des applications robustes et performantes de l'idée brute à la mise en production`;
  const aboutText = `Axé sur la création d'applications rapides et intuitives — des interfaces soignées en React jusqu'aux architectures backend fiables.
  Chaque ligne de code vise la clarté, l'efficacité technique et une expérience utilisateur fluide.
  
  Quand je ne code pas:
  - Sport & Entaînement (pour garder la forme, l'énergie et la discipline),
  - Passion moto (la mécanique et le plaisir de rouler),
  - Cinéphile (toujours à l'affut d'une bonne  mise en scéne ou d'un bon sénario)
  - Curiosité générale (explorer de nouveaux sujet, de nouveaux paysages...)
  `;
  const imgRef = useRef(null);
  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });
  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"Code fonctionnel, conçu à toute échelle "}
        title={"À Propos"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
        <img
          ref={imgRef}
          src="images/man.jpg"
          alt="man"
          className="w-md rounded-3xl"
        />
        <AnimatedTextLines text={aboutText} className={"w-full"} />
      </div>
    </section>
  );
};

export default About;
