import React, { Component } from 'react';

class SourceEditor extends Component {
	constructor(props) {
		super(props);

		this.state = {
			focused: false,
		};
	}

	render() {
		var textareaValue = {};

		if (!this.state.focused) {
			textareaValue = {
				value: this.props.data,
			};
		}

		return (
			<>
				<p>
					{/* <label htmlFor="editor-editor">The editor content:</label> */}
				</p>
				<p>
					<textarea
						id="editor-editor"
						className="binding-editor"
						{...textareaValue}
						onChange={this.props.handler}
						onFocus={() => {
							this.setState({
								focused: true,
							});
						}}
						onBlur={() => {
							this.setState({
								focused: false,
							});
						}}
					/>
				</p>
			</>
		);
	}
};

export default SourceEditor;

