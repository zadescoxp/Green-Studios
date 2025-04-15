import About from "@/components/general/about";
import Contact from "@/components/general/contact";
import Goals from "@/components/general/goals";
import Home from "@/components/general/home";
import Navbar from "@/components/UI/navbar";
import Lenis from "@/utils/lenis";

export default function Main() {
  return (
    <div>
      <Lenis>
        <Navbar />
        <Home />
        <About />
        <Goals />
        <Contact />
      </Lenis>
    </div>
  );
}
