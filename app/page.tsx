import "@/styles/globals.css";
import "@/styles/page.css";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Navbar } from "@/components/Navbar/Navbar";
import { Header } from "@/components/Header/Header";
import { Searchbar } from "@/components/Searchbar/Searchbar";
import { Card } from "@/components/Card/Card";
import { Timeline } from "@/components/Timeline/Timeline";
import { Contact } from "@/components/Contact/Contact";

export default function Home() {
	return (
		<>
			{/*<Header />*/}
			<Navbar />
			<div className="profile-container">
				<h1 className="profile-name">Hi! I&apos;m Sam</h1>
				<p className="profile-description">Front-end web developer, web designer, and hobby software developer.</p>
				<a className="profile-button" href="#contact">Contact Me</a>
				<img className="profile-picture" src="image/profile.jpg" alt="Sam in a canoe" />
			</div>
			<div id="about"className="about">
				<p className="about-title">
					About Me:
				</p>

				<p className="about-content">
					I&apos;m a self-taught frontent web developer with 10 years of hobby experience and two years of professional experience. 
					I have experience developing APIs, discord bots, web apps, and more. While my main focus is frontend, 
					I have backend experience from working with various database management systems, data sinks, and several personal projects.
				</p>
				<div className="about-list">
					<li>Built an API that parsed transaction data from EOS, Telos, and Wax blockchains for the
					<a className="about-link" href="https://spyglass.network/" target="_blank"> Spyglass Network website</a> as mentioned in the projects section.</li>
					<li>Developed a Discord bot for the EOS Community Discord server, which distributed POP
					Token NFTs to users who ran a command that included their Anchor account username.</li>
					<li>Created a tool that pipes data from a blockchain to a WebSocket connection using
					Substreams: <a className="about-link" href="https://github.com/pinax-network/substreams-sink-websockets" target="_blank">GitHub Repository.</a></li>
					<li>Worked on a data sink that extracts, parses, and validates Substreams inscriptions data and
					passes it to an API: <a className="about-link" href="https://github.com/pinax-network/substreams-inscriptions" target="_blank">GitHub Repository.</a></li>
				</div>

				<p>My skills:</p>
			</div>
			<div className="projects-container">
				<div id="projects">
					<h1 className="projects-title">Some of my <br></br>projects:</h1>
					<div className="card-container">
						<div><Card data="public/projects/Mooshrum_Bot.json" /></div>
						<div><Card data="public/projects/Math_Game.json" /></div>
						<div><Card data="public/projects/Spyglass.json" /></div>
					</div>
				</div>
			</div>
			<div className="canoe-footer">
				<div className="canoe-footer-transition"></div>
					<Contact />
				<img className="canoe-footer-image" src="image/20220811_151135.jpg" alt="canoe on a beach" />
			</div>
		</>
	);
}
