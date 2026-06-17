import ReactMarkdown from "react-markdown";

function ExecutiveReport({ report }) {

  return (
    <div className="glass-card report-card">

      <div className="report-header">

        <h2 className="section-title">
          Executive Report
        </h2>

        {
          report && (
            <div className="report-badge">
              AI Generated
            </div>
          )
        }

      </div>

      <div className="report-content">

        {
          report
          ? (
              <ReactMarkdown>
                {report}
              </ReactMarkdown>
            )
          : (
              <p>
                AI-generated enterprise insights and strategic
                recommendations will appear here after workflow execution.
              </p>
            )
        }

      </div>

    </div>
  );
}

export default ExecutiveReport;