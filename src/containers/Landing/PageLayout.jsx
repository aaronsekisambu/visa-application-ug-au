import React, { Fragment } from 'react';
import parse from 'html-react-parser';
import ClockLoader from 'react-spinners/ClockLoader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PageLayout = (props) => {
	const { information, page, error } = props;
		if (error) {
			if (error.data.error) {
				toast.error(error.data.error, {
					position: toast.POSITION.TOP_LEFT,
				});
			}
		}
	return (
		<Fragment>
			<ToastContainer />
			{page ? (
				<div className="">
					<div className="page-layout">
						<aside className="page-a">
							<div className="layout-messages p-2">
								<h3 className="h3">{page.Title}</h3>
								<div className="layout-data">{parse(page.Body)}</div>
							</div>
						</aside>
						<aside className="page-b">
							<div className="layout-messages-h3">
								<h3 className="text-center pt-2">{page.Title}</h3>
							</div>
							<div className="d-flex flex-column layout-info mr-2">
								{information.quickLinks.map((links) => (
									<p className="pl-2 pt-2">
										<a href={links.link} target="_blank">
											{links.name}
										</a>
									</p>
								))}
							</div>
						</aside>
					</div>
				</div>
			) : (
				<ClockLoader size={80} color={'black'} />
			)}
		</Fragment>
	);
};

export default PageLayout;
