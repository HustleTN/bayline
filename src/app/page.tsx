import BuiltForDifferentLoads from "@/components/sections/BuiltForDifferentLoads";
import Facility from "@/components/sections/Facility";
import FAQCTA from "@/components/sections/FAQCTA";
import FromDockToDispatch from "@/components/sections/FromDockToDispatch";
import Hero from "@/components/sections/Hero";
import InsideBayline from "@/components/sections/InsideBayline";
import WhyOutsource from "@/components/sections/WhyOutsource";
import Footer from "@/components/sections/Footer";
export default function Home() {
  return (
    <main>
      <Hero />
      <Facility />
      <FromDockToDispatch />
      <BuiltForDifferentLoads />
      <InsideBayline />
      <WhyOutsource />
      <FAQCTA />
      <Footer />
    </main>
  );
}
