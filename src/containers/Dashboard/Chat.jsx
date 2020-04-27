import React, { Component } from 'react';
import 'react-chat-elements/dist/main.css';
import { MessageBox, ChatItem, MessageList, ChatList } from 'react-chat-elements';

class Chat extends Component {
	render() {
		return (
			<div className="d-flex align-items-center  justify-content-between   pr-5 my-3 text- rounded shadow-sm border">
				<div className="bg-light border p-3">
					<ChatItem
						avatar={'https://facebook.github.io/react/img/logo.svg'}
						alt={'Reactjs'}
						title={'Facebook'}
						subtitle={'What are you doing?'}
						date={new Date()}
						unread={0}
					/>
					<ChatList
						className="chat-list"
						dataSource={[
							{
								avatar: 'https://facebook.github.io/react/img/logo.svg',
								alt: 'Reactjs',
								title: 'Facebook',
								subtitle: 'What are you doing?',
								date: new Date(),
								unread: 0,
							},
						]}
					/>
				</div>
				<div>
					<MessageBox
						position={'left'}
						type={'photo'}
						text={'react.svg'}
						data={{
							// uri: 'https://facebook.github.io/react/img/logo.svg',
							status: {
								click: false,
								loading: 0,
							},
						}}
						reply={{
							photoURL: 'https://facebook.github.io/react/img/logo.svg',
							title: 'elit magna',
							titleColor: '#8717ae',
							message: 'Aliqua amet incididunt id nostrud',
						}}
						onReplyMessageClick={() => console.log('reply clicked!')}
						position={'left'}
						type={'text'}
						text={'Tempor duis do voluptate enim duis velit veniam aute ullamco dolore duis irure.'}
					/>
					<MessageList
						className="message-list"
						lockable={true}
						toBottomHeight={'100%'}
						dataSource={[
							{
								position: 'right',
								type: 'text',
								text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
								date: new Date(),
							},
						]}
					/>
				</div>
			</div>
		);
	}
}

export default Chat;
