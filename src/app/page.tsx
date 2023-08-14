import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
	return (
		<main className="h-screen snap-y snap-mandatory overflow-scroll z-0">
			<Header />

			<Main />

			<About />

			<Experience />

			<Skills />

			<Projects />

			<Contact />
		</main>
	);
}
