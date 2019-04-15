import React from 'react'
import { sendMessage } from './store'

class App extends React.Component {
	sendMessage = () => {
		sendMessage(
			prompt('name:'),
			prompt('message:')
		)
	}

	render() {
		return (
			<div>
				<button
					onClick={this.sendMessage}
				>
					SEND MESSAGE
        		</button>
			</div>

		)
	}
}

export default App
