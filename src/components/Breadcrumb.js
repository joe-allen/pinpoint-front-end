import React, { Component } from 'react';
import * as style from '../App.less';

class Header extends Component {
	render() {
		const icon = {
			'color'			: '#d4d4d4',
			'fontSize'	: '1.75rem',
			'margin'		: '0 1rem'
		}

		return (
			<div className={style.Breadcrumb}>
				Teams
					<span style={icon}>
						<i className="fas fa-chevron-right " />
					</span>
			</div>
		);
	}
}

export default Header;