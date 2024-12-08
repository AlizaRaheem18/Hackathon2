import { Topheader } from "./component/Topheader";
import { Navbar } from "./component/Navbar";
import Hero from "./component/Hero";
import Popularcar from "./component/Popularcar"
import Recommendedcar from "./component/Recommendedcar"
import Footer from './component/Footer';


export default function Home() {
  return (
   <div >
     <Topheader />
     <Navbar />
     <Hero />
     <Popularcar />
     <Recommendedcar />
     <Footer />
   </div>
  );
}

