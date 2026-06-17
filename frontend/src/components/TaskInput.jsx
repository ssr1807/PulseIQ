function TaskInput({
  task,
  setTask,
  executeWorkflow,
  loading
}) {

  return (
    <div className="glass-card task-card">

      <h2 className="section-title">
        Cross-Department Request
      </h2>

      <textarea
        className="task-input"
        placeholder="Example: Need approval to purchase 15 laptops for new employees. Route through HR, Procurement, and Finance departments..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button
        className="execute-btn"
        onClick={executeWorkflow}
      >
        {
          loading
          ? "Routing Workflow..."
          : "Start Workflow"
        }
      </button>

    </div>
  );
}

export default TaskInput;