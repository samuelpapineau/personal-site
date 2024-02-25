import './Header.scss';

export const Header = () => {

	return (
		<>
            <div className="headers">
                <div className="header-container">
                    <img src="image/canoe-fishing-extended.png" alt="fishing on beach with canoe"/>
                </div>
                <div className="welcome-tag">
                        <h1 className="center-text main-title">Welcome!</h1>
                </div>
            </div>
		</>
	);
};

export default Header;