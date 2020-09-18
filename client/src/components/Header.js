import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className="ui secondary pointing menu">
			<Link to="/" className="item">
				Residences
			</Link>
			<Link to="/residences/new" className="item">
				New Residence
			</Link>
			<div className="right menu">
				<Link to="/" className="ui primary button">
					<i className="fire icon" />
					Map
				</Link>
			</div>
		</div>
	);
};

export default Header;
