import React from 'react'
import { sendAction } from './state/messages'
import { store } from './store'

class App extends React.Component {
	state = {
		messages: []
	}

	prepareMessages = () => {
		const receiver = prompt('name: ')
		const text = prompt('enter your message: ')
		const message = sendAction(receiver, text)

		this.setState({
			messages: this.state.messages.concat(message)
		})
	}

	sendMessages = () => {
		this.state.messages.forEach(
			message => store.dispatch(message)
		)
		this.setState({messages: []})
	}

	render() {
		return (
			<div>
				<button
					onClick={this.prepareMessages}
				>
					PREPARE MESSAGE
        		</button>
				<button
					onClick={this.sendMessages}
				>
					SEND MESSAGES
        		</button>
				{
					this.state.messages.map(
						(message, index) => (
							<p
								key={index + message.receiver}
							>
								{message.receiver + ': ' + message.text}
							</p>
						)
					)
				}
			</div>

		)
	}
}

export default App
