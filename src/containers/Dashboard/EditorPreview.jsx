import React, { Component } from 'react';
		

class EditorPreview extends Component {
	render() {
		return (
			<div className="editor-preview mt-5">
				<div dangerouslySetInnerHTML={{ __html: this.props.data }}></div>
			</div>
		);
	}
}

export default EditorPreview;