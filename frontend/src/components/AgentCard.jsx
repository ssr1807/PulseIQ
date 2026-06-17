function AgentCard({ name, role, status }) {
  return (
    <div className="agent-card">

      <div className="agent-header">
        <h3>{name}</h3>

        <span className={`agent-status ${status}`}>
          {status}
        </span>
      </div>

      <p className="agent-role">
        {role}
      </p>

    </div>
  );
}

export default AgentCard;