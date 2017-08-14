import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.state = { messages: []};
  }

  componentWillMount() {

  }

  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));
    let body = {
      user: this.props.user_id,
      messageOriginationTime: Date.now(),
      messageContent: messages[-1]
    };
      // fetch({
      //   method: 'POST',
      //   url: 'localhost:3000/message',
      //   json: true,
      //   headers: {
      //       "Content-Type": "application/json",
      //   },
      //   body: messages[-1]
      // }), function(error) {
      //   return error;
      // });
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={(messages) => {
          this.onSend(messages);
        }}
        user={
          {
            id: this.props.user_id,
            name: this.props.name,
            avatar: this.props.avatar
          }
        }
      />
    );
  }
}

Chat.propTypes = {

};

export default Chat;
