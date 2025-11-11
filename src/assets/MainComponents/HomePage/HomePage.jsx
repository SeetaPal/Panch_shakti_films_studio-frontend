import { useEffect } from "react"
import { Header } from "./Header"
import { HeroSection } from "./HeroSection"
import { Quality } from "./Quality"
import { Testimonials } from "./Testimonials"
import { NewsLetter } from "./NewsLetter"
import { Footer } from "./Footer"
import { Navbar } from "./Navbar"
import { Services } from "./Services"
import { OurAdWork } from "./OurAdWork"

export const HomePage = () => {
    useEffect(() => {
        // Fade-In Effect on Scroll
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        const fadeElements = document.querySelectorAll('.fade-in-element');
        fadeElements.forEach(el => observer.observe(el));

        // Active Nav Link on Scroll
        const sections = document.querySelectorAll('section[id]');
        const internalNavLinks = document.querySelectorAll('nav a[href^="#"]'); // Changed for React routing
        const changeNav = () => {
            let index = sections.length;
            while (--index && window.scrollY + 100 < sections[index].offsetTop) { }
            internalNavLinks.forEach((link) => link.classList.remove('active-link'));
            const activeLink = document.querySelector('nav a[href="#' + sections[index].id + '"]');
            if (activeLink) {
                activeLink.classList.add('active-link');
            }
        };
        changeNav();
        window.addEventListener('scroll', changeNav);

        // Cleanup
        return () => {
            window.removeEventListener('scroll', changeNav);
            fadeElements.forEach(el => observer.unobserve(el));
        };
    }, []);

    return (
        <div>
            <Navbar />
            <Header active="Home" />
            <HeroSection />
            <Quality />
            <Services />
            <OurAdWork/>
            <Testimonials />
            <NewsLetter />
            <Footer />
        </div>
    )
}