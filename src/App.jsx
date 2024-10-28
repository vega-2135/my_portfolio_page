import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/Navbar";

export default function App() {
    return (
        <main>
            <Header />
            <Footer />
            <About />
            <Projects />
            <Skills />
            <Contact />
            <Navbar />
        </main>
    )
}