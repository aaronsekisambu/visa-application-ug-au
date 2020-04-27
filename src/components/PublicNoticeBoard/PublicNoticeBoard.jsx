import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getPage } from '../../redux/action-creators/pages';
import PageLayout from '../../containers/Landing/PageLayout';

const PublicNoticeBoard = (props) => {
	const { information, getPage, aPageInfo, page } = props;
	useEffect(() => {
		// const token = localStorage.getItem('token');
		getPage('public-notice-board');
	}, []);
	return (
		<Fragment>
			<PageLayout information={information} page={aPageInfo} />
		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	aPageInfo: state.pages.getPage,
});
export default connect(mapStateToProps, { getPage })(PublicNoticeBoard);
