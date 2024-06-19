import './Card.scss';
/*import fs from 'fs';*/

export const runtime = 'edge';

class Project {
	title: string;
	description: string;
	image_url: string;
	image_alt: string;
	year: number;

	constructor(theName: string, theDescription: string, theImage_url: string, theImage_alt: string, theYear: number) {
		this.title = theName;
		this.description = theDescription;
		this.image_url = theImage_url;
		this.image_alt = theImage_alt;
		this.year = theYear;
	}
}

export const Card = (data: any) => {
	let project = data.data[0].data;

	let card = new Project(project.title, project.description, project.image_url, project.image_alt, project.year);
	return (
		<>
			<div className="card">
				<img className="card-image" src={card.image_url} alt={card.image_alt}/>
				<h2 className="card-title">{card.title}</h2>
				<p className="card-description">{card.description}</p>
				<p className="card-year">Made in {card.year}</p>
				<button className="card-button">Learn More</button>
			</div>
		</>
	);
};

export default Card;