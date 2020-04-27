import React, { Fragment, useState, useRef } from 'react';
import Select from 'react-select';
import JoditEditor from 'jodit-react';
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
import 'jodit/build/jodit.min.css';
import 'jodit';
import { connect } from 'react-redux';
import { createPage, getPage } from '../../redux/action-creators/pages';
import { dashboardPages } from '../../helpers/data';
import parse from 'html-react-parser';
import MoonLoader from 'react-spinners/MoonLoader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const config = {
	zIndex: 0,
	readonly: false,
	activeButtonsInReadOnly: ['source', 'fullsize', 'print', 'about'],
	toolbarButtonSize: 'middle',
	theme: 'default',
	enableDragAndDropFileToEditor: true,
	saveModeInCookie: false,
	spellcheck: true,
	editorCssClass: false,
	triggerChangeEvent: true,
	height: 520,
	direction: 'ltr',
	language: 'en',
	debugLanguage: false,
	i18n: 'en',
	tabIndex: -1,
	toolbar: true,
	enter: 'P',
	useSplitMode: false,
	colorPickerDefaultTab: 'background',
	imageDefaultWidth: 100,
	disablePlugins: ['paste', 'stat'],
	events: {},
	textIcons: false,
	uploader: {
		insertImageAsBase64URI: true,
	},
	showXPathInStatusbar: false,
};
const Collection = (props) => {
	const { createPage, uploaded, aPageInfo, getPage, errors } = props;
	const [state, setState] = useState('');
	const [preview, setPreview] = useState('');
	const editor = useRef(null);
	const [content, setContent] = useState();
	const [title, setTitle] = useState('');
	const [loading, setLoading] = useState(false);
	const options = dashboardPages.map((page) => {
		return { value: page, label: page };
	});

	const handleChange = (e) => {
		setState(e.value);
	};
	const onChange = (e) => {
		setTitle(e.target.value);
	};
	const onPreview = async (evt) => {
		setPreview(!preview);
		const type = state.split(' ').join('-').toLocaleLowerCase();
		await getPage(type);
	};
	const handleContent = (content) => {
		setContent(content);
	};
	const savePage = async (e) => {
		setLoading(!loading);
		const token = localStorage.getItem('token');
		if (!token) {
			return this.props.history.push('/auth');
		}
		const type = state.split(' ').join('-').toLocaleLowerCase();
		await createPage(token, title, content, type);
	};
	const clearError = (e) => {
		window.location.reload();
	};
	if (errors) {
		if (errors.data.error) {
			toast.error(errors.data.error, {
				position: toast.POSITION.TOP_LEFT,
			});
		}
	}
	return (
		<Fragment>
			<ToastContainer />

			{uploaded ? (
				<div className="pb-4 p-3 pl-5 pr-5 my-3 text-center rounded shadow-sm border">
					<h4 className="text-secondary" style={{ fontSize: '13px' }}>
						Page uploaded <span className="text-success">successfully</span>{' '}
					</h4>
					<button
						className="btn btn-outline-success"
						style={{ fontSize: '13px', fontWeight: 'bolder' }}
						onClick={clearError}
					>
						New Page
					</button>
				</div>
			) : (
				<section>
					<div className="d-flex align-items-center  justify-content-between pb-4 p-3 pl-5 pr-5 my-3 text- rounded shadow-sm border">
						<div style={{ width: '100%' }}>
							{state.length === 0 ? (
								' '
							) : errors ? (
								<button className="btn btn-danger ml-3" onClick={clearError}>
									<i className="zmdi zmdi-close"></i>
								</button>
							) : aPageInfo ? (
								<button className="btn btn-info ml-2" onClick={clearError}>
									<i className="zmdi zmdi-desktop-mac"></i> Stop previewing
								</button>
							) : preview ? (
								<button className="btn btn-light ml-3">
									<MoonLoader size={20} color={'black'} loading={preview} />
								</button>
							) : (
								<button className="btn btn-secondary ml-2" onClick={onPreview}>
									<i className="zmdi zmdi-desktop-mac"></i> Preview
								</button>
							)}
						</div>
						<div className="lh-100" style={{ width: '80%', zIndex: 999 }}>
							<Select onChange={handleChange} options={options} placeholder="Select page" />{' '}
							<p
								className="text-danger"
								style={{
									fontSize: '12px',
									padding: 0,
									margin: '.4em auto',
									textAlign: 'center',
									float: 'right',
									display: errors ? 'block' : 'none',
									position: 'absolute',
								}}
							>
								{errors
									? errors.data.error
										? ''
										: errors.data.errors.type
										? state.length === 0
											? errors.data.errors.type
											: ''
										: ''
									: ''}
							</p>
						</div>
						{!content || title.length === 0 || state.length === 0 ? (
							''
						) : errors ? (
							<button className="btn btn-danger ml-3" onClick={clearError}>
								<i className="zmdi zmdi-close"></i>
							</button>
						) : uploaded ? (
							<button className="btn btn-secondary ml-3">Published</button>
						) : loading ? (
							<button className="btn btn-warning ml-3">
								<MoonLoader size={20} color={'black'} loading={loading} />
							</button>
						) : (
							<button className="btn btn-success ml-3" onClick={savePage}>
								Publish
							</button>
						)}
					</div>

					{/* Editor  */}
					<div>
						<div className="form-group">
							<input
								type="text"
								className="form-control"
								placeholder="title *"
								name="title"
								onChange={onChange}
								// onBlur={handleBlur('surname')}
							/>
							<p className="text-danger" style={{ fontSize: '12px' }}>
								{errors
									? errors.data.error
										? ''
										: errors.data.errors.title
										? title.length === 0
											? errors.data.errors.title
											: ''
										: ''
									: ''}
							</p>
						</div>
						<div
							className="d-flex align-items-center  justify-content-between   my-3 rounded shadow-sm border"
							style={{ display: aPageInfo ? 'none' : 'block' }}
						>
							<div className="lh-100" style={{ width: '100%', display: aPageInfo ? 'none' : 'block' }}>
								{/* <CkEditor preview={preview} /> */}
								<JoditEditor
									ref={editor}
									value={content}
									config={config}
									tabIndex={1} // tabIndex of textarea
									onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
									onChange={handleContent}
								/>
								{/* <SunEditor width="100%" placeholder="Please type here..." autoFocus={true} /> */}
								<p
									className="text-danger"
									style={{ fontSize: '12px', display: errors ? 'block' : 'none' }}
								>
									{errors
										? errors.data.error
											? ''
											: errors.data.errors.body
											? !content
												? errors.data.errors.body
												: ''
											: ''
										: ''}
								</p>
							</div>
							{/* errors ? errors.data.error ? '' : errors.data.errors.body ? errors.data.errors.body : '' : */}
						</div>
					</div>
					{aPageInfo ? (
						<div className="p-3 my-3 rounded shadow-sm border">
							<h3 className="h4">{aPageInfo.Title}</h3>
							<div className="lh-100" style={{ width: '100%' }}>
								{parse(aPageInfo.Body)}
							</div>
						</div>
					) : uploaded ? (
						<div className="p-3 my-3 rounded shadow-sm border">
							<h3 className="h4">{uploaded.Title}</h3>
							<div className="lh-100" style={{ width: '100%' }}>
								{parse(uploaded.Body)}
							</div>
						</div>
					) : (
						<p className="text-grey" style={{ fontSize: '12px' }}>
							Select a <strong>page</strong> then click the <strong>preview</strong> button
						</p>
					)}
				</section>
			)}
		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	uploaded: state.pages.pages,
	aPageInfo: state.pages.getPage,
	errors: state.pages.error,
});
export default connect(mapStateToProps, { createPage, getPage })(Collection);
