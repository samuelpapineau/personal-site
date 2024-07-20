import "@/styles/globals.css";
import "@/styles/page.css";
import { Navbar } from "@/components/Navbar/Navbar";
import { Card } from "@/components/Card/Card";
import { Contact } from "@/components/Contact/Contact";
import mooshrum from "@/public/projects/Mooshrum_Bot.json";
import math_game from "@/public/projects/Math_Game.json";
import spyglass from "@/public/projects/Spyglass.json";
import eos_discord from "@/public/projects/eos-community-discord.json";
import discord_announcement_bot from "@/public/projects/discord-announcement-bot.json";
import lyric_generator from "@/public/projects/lyric-video-generator.json"
import substreams_inscriptions from "@/public/projects/substreams-inscriptions.json"
import substreams_sink_websockets from "@/public/projects/substreams-sink-websockets.json"

export const runtime = 'edge';

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
				<p className="about-content">
					In my free time I enjoy bouldering and hiking. I am an avid canoeist and love spending time outdoors with my friends and family.
					I`&apos;`m passionate about the creation of things, which is the reason I love programming, and that passion also spills out in the art
					I make and the objects I create or restore.
				</p>
			</div>
			<div className="projects-container">
				<div id="projects">
					<h1 className="projects-title">Some of my <br></br>projects:</h1>
					<div className="card-container">
						<div><Card data={discord_announcement_bot} /></div>
						<div><Card data={lyric_generator} /></div>
						<div><Card data={substreams_inscriptions} /></div>
						<div><Card data={substreams_sink_websockets} /></div>
						<div><Card data={spyglass} /></div>
						<div><Card data={eos_discord} /></div>
						<div><Card data={mooshrum}/></div>
						<div><Card data={math_game} /></div>
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
