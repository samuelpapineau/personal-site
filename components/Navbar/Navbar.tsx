import './Navbar.scss';

export const Navbar = () => {

	return (
		<>
			<div className="navbar">
				<ul className="ul-nav">
					<li className="li-nav"><a href="#home">Home</a></li>
					<li className="li-nav"><a href="#projects">Projects</a></li>
					<li className="li-nav"><a href="#about">Blog</a></li>
					<li className="li-nav"><a href="#about">About</a></li>
					<li className="li-nav"><a href="#contact">Contact</a></li>
				</ul>

			</div>
		</>
	);
};

export default Navbar;