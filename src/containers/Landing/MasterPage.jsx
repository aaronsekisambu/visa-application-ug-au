import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getPage } from '../../redux/action-creators/pages';
import PageLayout from '../../containers/Landing/PageLayout';

const MasterPage = (props) => {
	const { information, getPage, aPageInfo, page, type, errors } = props;
	useEffect(() => {
		getPage(type);
	}, []);
	return (
		<Fragment>
			<PageLayout information={information} error={errors} page={aPageInfo} />
		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	aPageInfo: state.pages.getPage,
	errors: state.pages.error
});
export default connect(mapStateToProps, { getPage })(MasterPage);
