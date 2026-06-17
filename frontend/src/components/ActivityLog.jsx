function ActivityLog() {

  const logs = [
    "Coordinator Agent initialized workflow",
    "Analytics Agent gathering enterprise metrics",
    "Finance Agent awaiting dependency",
    "Operations Agent prepared optimization strategy"
  ];

  return (
    <div className="glass-card">

      <h2 className="section-title">
        Live Agent Logs
      </h2>

      <div className="log-container">

        {logs.map((log, index) => (
          <div className="log-item" key={index}>
            {log}
          </div>
        ))}

      </div>

    </div>
  );
}

export default ActivityLog;