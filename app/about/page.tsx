import "@/styles/globals.css";

import { title } from "@/components/primitives";
import { headers } from 'next/headers'

export default function AboutPage() {
	const header = headers();
	const ip = (header.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0]
	console.log(ip)
	return (
		<div>
			<h1 className={title()}>About</h1>
			<p className="light-text">test</p>
		</div>
	);
}
