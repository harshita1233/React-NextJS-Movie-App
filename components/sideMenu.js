import {Fragment} from 'react';
const SideMenu = ({count}) => ( 
	<Fragment>
		<h1 className="my-4">Shop Name</h1>
			<div className="list-group">
				<a href="#" className="list-group-item">Category 1</a>
				<a href="#" className="list-group-item">Category 2</a>
				<a href="#" className="list-group-item">Category 3</a>
			</div>
			<div>
				<h1>{count}</h1>
			</div>
	</Fragment>
)
export default SideMenu;