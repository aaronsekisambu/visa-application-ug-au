import React, { Fragment, useState, useRef, useEffect } from 'react';
import { withRouter, NavLink } from 'react-router-dom';

const NavigationList = (props) => {
	const { lists, menuList, closeSideNav, closeSideNavOnClick } = props;
	const [height, setHeight] = useState(0);
	const [dropdown, setDropdown] = useState(false);
	const [select, setSelected] = useState('');
	let wrapperRef = useRef(null)

// 	useEffect(() => {/**
// 	 * Alert if clicked on outside of element
// 	 */
// 		const handleClickOutside = (event) => {
// 			// const { showCountries, isSelectable } = this.state;
// 			if (dropdown) {
// 				if (wrapperRef && !wrapperRef.current.contains(event.target)) {
// 					return setDropdown(false);
// 				}
// 			}
// 		}
		
// 		document.removeEventListener('mousedown', handleClickOutside);
// 		return () => {
			
// 		document.removeEventListener('mousedown', handleClickOutside);
// 		};
// 	}, []);
// console.log(dropdown)
	const dropItDown = (e, name) => {
		e.preventDefault();
		setDropdown(!dropdown);
		setSelected(name);
	};
	return (
		<Fragment>
			{/* <ul
				className="navbar-nav mt-lg-0"
				style={{
					flexDirection: menuList === 'top-lists' || menuList !== 'menu' ? 'row' : 'column',
				}}
			>
				{lists.map((list, i) => {
					return (
						<li
							className="nav-item font-size-nav-item"
							key={list.id || i}
							style={{
								padding: menuList === 'top-lists' ? '0 0.5em' : 0,
							}}
							onClick={closeSideNavOnClick}
						>
							<NavLink
								className="nav-link text-nowrap font-weight-bold navigation-link"
								to={list.link}
								onMouseOver={list.subLink ? (e) => dropItDown(e, list.name) : ''}
							>
								{list.name}
							</NavLink>
							{list.subLink && list.name === select ? (
								<div
									className="sub-navigation"
									style={{
										position: 'absolute',
										display: dropdown ? 'block' : 'none',
									}}
									ref={wrapperRef}
								>
									<ul>
										{list.subLink.map((link) => (
											<li key={link.id} onClick={dropItDown}>
												<NavLink
													className="nav-link text-nowrap font-weight-bold navigation-link-sub"
													to={link.link}
												>
													<i className="zmdi zmdi-chevron-right"></i>
													{link.name}
												</NavLink>
											</li>
										))}
									</ul>
								</div>
							) : (
								''
							)}
						</li>
					);
				})}
			</ul> */}
		</Fragment>
	);
};

NavigationList.defaultProps = {
	lists: [{ id: 1, name: 'Visa Application', link: 'sample link' }],
};
export default withRouter(NavigationList);
