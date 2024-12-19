import BenefitsSection from "@/components/benefits-section/benefits-section";
import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";
import SectionImc from "@/components/section-imc/section-imc";

export default function Home() {
  return (
      <div>
      <Header/>
      <Hero/>
      {/* <SectionAbout/>  */}
      <BenefitsSection/>
      <SectionImc/>
    </div>
  );
}
