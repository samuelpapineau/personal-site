import './Searchbar.scss';

export const runtime = 'edge';

export const Searchbar = () => {

	return (
		<>
            <form action="#" method="get">
                <input className="searchbar" type="text" placeholder="Search" />
            </form>
		</>
	);
};

export default Searchbar;