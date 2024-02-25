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

export default function Home() {
	return (
		<>
			<Header />
			<Navbar />
			<div className="profile-container">
				<h1 className="profile-name">Samuel Papineau</h1>
				<p className="profile-description">Front-end web developer, web designer, and hobby software developer.</p>
				<button className="profile-button">About Me</button>
				<img className="profile-picture" src="image/Sam_Canoe.jpg" alt="Sam in a canoe" />
			</div>
			<div className="projects-container">
				<hr className="hr"></hr>
				<div className="projects-cards">
					<div className="card-container">
						<h1 className="projects-title">Some of my <br></br>projects:</h1>
						<Card data="public/projects/Mooshrum_Bot.json" />
						<Card data="public/projects/Math_Game.json" />
					</div>
				</div>
			</div>
			<div className="canoe-footer">
				<div className="canoe-footer-transition"></div>
				<img className="canoe-footer-image" src="image/20220811_151135.jpg" alt="canoe on a beach" />
			</div>
			<h1>Page</h1>
		</>
	);
}
