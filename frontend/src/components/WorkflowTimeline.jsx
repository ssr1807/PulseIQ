function WorkflowTimeline({ workflowSteps }) {

  return (
    <div className="glass-card">

      <h2 className="section-title">
        Workflow Progress
      </h2>

      <div className="timeline-container">

        {
          workflowSteps.map((step, index) => (

            <div
              key={index}
              className={`timeline-step ${step.status}`}
            >

              <div className="timeline-dot"></div>

              <div className="timeline-text">
                {step.label}
              </div>

            </div>

          ))
        }

      </div>

    </div>
  );
}

export default WorkflowTimeline;