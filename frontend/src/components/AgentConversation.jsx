function AgentConversation({ messages }) {

  return (
    <div className="glass-card">

      <h2 className="section-title">
        Agent Communication
      </h2>

      <div className="conversation-container">

        {
          messages.map((msg, index) => (
            <div
              key={index}
              className="conversation-message"
            >

              <div className="message-agent">
                {msg.agent}
              </div>

              <div className="message-text">
                {msg.text}
              </div>

            </div>
          ))
        }

      </div>

    </div>
  );
}

export default AgentConversation;