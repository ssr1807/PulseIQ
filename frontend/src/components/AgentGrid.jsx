import AgentCard from "./AgentCard";

function AgentGrid({ agentStatuses }) {

 const agents = [

  {
  name: "Intake Agent",
  role: "Analyze requests and extract requirements",
  status: agentStatuses.coordinator
  },

  {
  name: "Routing Agent",
  role: "Select departments and assign tasks",
  status: agentStatuses.analytics
  },

  {
  name: "Coordination Agent",
  role: "Manage inter-department communication",
  status: agentStatuses.finance
  },

  {
  name: "Decision Agent",
  role: "Compile approvals and finalize outcomes",
  status: agentStatuses.operations
  }

  ];

  return (
    <div className="glass-card">

      <h2 className="section-title">
        Workflow Agents
      </h2>

      <div className="agent-grid">

        {agents.map((agent, index) => (
          <AgentCard
            key={index}
            name={agent.name}
            role={agent.role}
            status={agent.status}
          />
        ))}

      </div>

    </div>
  );
}

export default AgentGrid;