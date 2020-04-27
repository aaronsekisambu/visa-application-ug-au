import React, { Component } from 'react';
import CKEditor from 'ckeditor4-react';
import SourceEditor from './SourceEditor';
import EditorPreview from './EditorPreview';

class TwoWayBinding extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: '',
			preview: false,
		};

		this.handleChange = this.handleChange.bind(this);
		this.onEditorChange = this.onEditorChange.bind(this);
	}

	onEditorChange(evt) {
		this.setState({
			data: evt.editor.getData(),
		});
	}

	handleChange(changeEvent) {
		this.setState({
			data: changeEvent.target.value,
		});
	}

	render() {
		return (
			<div>
				{/* <SourceEditor data={this.state.data} handler={this.handleChange} /> */}

				<div style={{ overflow: 'auto' }}>
					<CKEditor
						data={this.state.data}
						onChange={this.onEditorChange}
						style={{
							float: 'left',
							width: '100%',
							marginBottom: this.props.preview && this.state.data ? '1em' : 0,
						}}
						config={{
							placeholder: 'Add information here...',
							filebrowserBrowseUrl: '',
							filebrowserImageBrowseUrl: '',
							filebrowserUploadUrl:
								'/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Files',
							filebrowserImageUploadUrl:
								'/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Images',
							removePlugins: ['link'],
							extraPlugins: 'image,image2',
							uploadUrl:
								'/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json',
						}}
					/>
					<div className="p-4" style={{ display: this.props.preview && this.state.data ? 'block' : 'none' }}>
						<EditorPreview data={this.state.data} />
					</div>
				</div>
			</div>
		);
	}
}

export default TwoWayBinding;
