import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HelmetChanger from '../Shared/Helmet/Helmet';
import BackToTop from '../Shared/BackToTop/BackToTop';
import { setLenisInstance } from '../Shared/Lenis/lenis';
import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Main = () => {
 const location = useLocation();

  const lenisRef = useRef(null);

  // Lenis is created once and shared, so components can scroll programmatically
  // (see Shared/Lenis/lenis.js) instead of fighting it with window.scrollTo.
  useEffect(() => {
    const lenis = new Lenis();

    lenisRef.current = lenis;
    setLenisInstance(lenis);

    lenis.on('scroll', ScrollTrigger.update);

    const raf = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      setLenisInstance(null);
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    // A page can opt out when it scrolls somewhere else itself — the Contact
    // page does this when it is opened from a Careers "Apply" button.
    if (location.state?.skipScrollTop) return;

    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { duration: 1.2 });
      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);


  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <HelmetChanger title={'SEO & Digital Marketing'} />
      <Navbar />
      <BackToTop />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default Main;
