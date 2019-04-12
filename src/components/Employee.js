import React, { Component } from 'react';
import * as style from '../App.less';

class Employee extends Component {
	render() {
		return (
			<div className={style.Box}>
				<h2>Joe Allen</h2>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed imperdiet dui. Integer vel turpis id nulla dictum eleifend quis vel lacus. Etiam non mauris sed ex rhoncus sagittis ac ac lacus. Quisque pharetra sem dui, ac egestas quam lacinia vitae. Nullam ut mollis lorem, sit amet aliquam sem. Ut placerat commodo faucibus. In hac habitasse platea dictumst. Ut consectetur tortor id velit vehicula, eget ultrices neque pharetra. Suspendisse blandit feugiat nulla, a ornare lectus accumsan non. Donec at arcu nec lorem condimentum condimentum sed at est. Sed eu interdum felis.
			</div>
		);
	}
}

export default Employee;
