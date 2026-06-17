import "./App.css";
import DepartmentPanel from "./components/DepartmentPanel";
import { useState } from "react";
import { generateWorkflow } from "./services/groqService";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import WorkflowTimeline from "./components/WorkflowTimeline";
import AgentGrid from "./components/AgentGrid";
import ExecutiveReport from "./components/ExecutiveReport";
import LoadingOverlay from "./components/LoadingOverlay";

function App() {

  const [task, setTask] = useState("");

  const [report, setReport] = useState("");
  const [displayedReport, setDisplayedReport] = useState("");

  const [loading, setLoading] = useState(false);

  const [agentStatuses, setAgentStatuses] = useState({
    coordinator: "idle",
    analytics: "idle",
    finance: "idle",
    operations: "idle"
  });

  const [messages, setMessages] = useState([]);

  const [activePage, setActivePage] = useState("dashboard");
  const [departments, setDepartments] = useState([]);

  const [workflowSteps, setWorkflowSteps] = useState([
    {
      label: "Request Submitted",
      status: "pending"
    },
    {
      label: "Department Detection",
      status: "pending"
    },
    {
      label: "Cross-Team Coordination",
      status: "pending"
    },
    {
      label: "Decision Approval",
      status: "pending"
    }
  ]);

  const delay = (ms) =>
    new Promise(resolve => setTimeout(resolve, ms));
  const detectDepartments = (text) => {

    const detected = [];

    const lowerText = text.toLowerCase();

    if (
      lowerText.includes("hire") ||
      lowerText.includes("employee") ||
      lowerText.includes("recruit") ||
      lowerText.includes("staff")
    ) {
      detected.push("HR");
    }

    if (
      lowerText.includes("budget") ||
      lowerText.includes("finance") ||
      lowerText.includes("payment") ||
      lowerText.includes("purchase")
    ) {
      detected.push("Finance");
    }

    if (
      lowerText.includes("vendor") ||
      lowerText.includes("procurement") ||
      lowerText.includes("laptop") ||
      lowerText.includes("equipment")
    ) {
      detected.push("Procurement");
    }

    if (
      lowerText.includes("contract") ||
      lowerText.includes("legal") ||
      lowerText.includes("compliance")
    ) {
      detected.push("Legal");
    }

    if (
      lowerText.includes("software") ||
      lowerText.includes("system") ||
      lowerText.includes("access")
    ) {
      detected.push("IT");
    }

    return [...new Set(detected)];
  };
    const typeReport = async (text) => {
    setDisplayedReport("");

    for (let i = 0; i < text.length; i += 5) {
  setDisplayedReport(text.slice(0, i + 5));

  await delay(10);
    }
    setDisplayedReport(text);
  };

  const executeWorkflow = async () => {

    if (!task.trim()) return;

    setLoading(true);
    setDisplayedReport("");

    setReport("");
    setMessages([]);
    setWorkflowSteps([
    {
    label:"Request Submitted",
    status:"completed"
    },
    {
    label:"Department Detection",
    status:"active"
    },
    {
    label:"Cross Team Coordination",
    status:"pending"
    },
    {
    label:"Approval Workflow",
    status:"pending"
    },
    {
    label:"Final Decision",
    status:"pending"
    }
    ]);
    try {

      setAgentStatuses({
        coordinator: "running",
        analytics: "idle",
        finance: "idle",
        operations: "idle"
      });

      setMessages([
      {
      agent:"Intake Agent",
      text:"Understanding the request."
      }
      ]);

      await delay(1000);
      setWorkflowSteps([
      {
      label:"Request Submitted",
      status:"completed"
      },
      {
      label:"Department Detection",
      status:"completed"
      },
      {
      label:"Cross Team Coordination",
      status:"active"
      },
      {
      label:"Approval Workflow",
      status:"pending"
      },
      {
      label:"Final Decision",
      status:"pending"
      }
      ]);

      setAgentStatuses({
        coordinator: "active",
        analytics: "running",
        finance: "idle",
        operations: "idle"
      });

      setMessages(prev => [
        ...prev,
        {
          agent: "Routing Agent",
          text: "Collecting KPI trends and sales performance metrics."
        }
      ]);

      await delay(1000);
      setWorkflowSteps([
      {
      label:"Request Submitted",
      status:"completed"
      },
      {
      label:"Department Detection",
      status:"completed"
      },
      {
      label:"Cross Team Coordination",
      status:"completed"
      },
      {
      label:"Approval Workflow",
      status:"active"
      },
      {
      label:"Final Decision",
      status:"pending"
      }
      ]);
      setAgentStatuses({
        coordinator: "active",
        analytics: "active",
        finance: "running",
        operations: "idle"
      });

      setMessages(prev => [
        ...prev,
        {
          agent: "Coordination Agent",
          text: "Evaluating revenue decline and operational cost impact."
        }
      ]);

      await delay(1000);
      setWorkflowSteps([
      {
      label:"Request Submitted",
      status:"completed"
      },
      {
      label:"Department Detection",
      status:"completed"
      },
      {
      label:"Cross Team Coordination",
      status:"completed"
      },
      {
      label:"Approval Workflow",
      status:"completed"
      },
      {
      label:"Final Decision",
      status:"completed"
      }
      ]);

      setAgentStatuses({
        coordinator: "active",
        analytics: "active",
        finance: "active",
        operations: "running"
      });

      setMessages(prev => [
        ...prev,
        {
          agent: "Decision Agent",
          text: "Generating enterprise optimization strategy."
        }
      ]);
      setWorkflowSteps([
        {
          label: "Task Received",
          status: "completed"
        },
        {
          label: "Coordinator Routing",
          status: "completed"
        },
        {
          label: "Analytics Processing",
          status: "completed"
        },
        {
          label: "Finance Evaluation",
          status: "completed"
        },
        {
          label: "Operations Optimization",
          status: "active"
        },
        {
          label: "Executive Report Generated",
          status: "pending"
        }
      ]);
      const finalReport =
      await generateWorkflow(task);

      setReport(finalReport);

      typeReport(finalReport);
      setWorkflowSteps([
        {
          label: "Task Received",
          status: "completed"
        },
        {
          label: "Coordinator Routing",
          status: "completed"
        },
        {
          label: "Analytics Processing",
          status: "completed"
        },
        {
          label: "Finance Evaluation",
          status: "completed"
        },
        {
          label: "Operations Optimization",
          status: "completed"
        },
        {
          label: "Executive Report Generated",
          status: "completed"
        }
      ]);
      setMessages(prev => [
        ...prev,
        {
          agent: "Coordinator Agent",
          text: "Workflow completed successfully."
        }
      ]);
      setAgentStatuses({
        coordinator: "active",
        analytics: "active",
        finance: "active",
        operations: "active"
      });

    } catch (error) {

      console.error(error);

      setReport("Unable to generate workflow.");

    }

    setLoading(false);
  };

  const downloadReport = () => {

  const element = document.createElement("a");

  const file = new Blob(
    [report],
    { type: "text/plain" }
  );

  element.href = URL.createObjectURL(file);

  element.download = "enterprise_report.txt";

  document.body.appendChild(element);

  element.click();
};

  return (
    <>

    {
      loading && <LoadingOverlay />
    }

    <div className="app-container">

      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <main className="main-content">
      {
        activePage === "dashboard" &&
        (

          <>

            <Header />

            <TaskInput
              task={task}
              setTask={(value) => {
                setTask(value);
                setDepartments(detectDepartments(value));
              }}
              executeWorkflow={executeWorkflow}
              loading={loading}
            />

            <div className="top-grid">

          <div className="left-column">

            <WorkflowTimeline
              workflowSteps={workflowSteps}
            />

            
            <DepartmentPanel
              departments={departments}
            />

          </div>

          <div className="right-column">

            <AgentGrid
              agentStatuses={agentStatuses}
            />

            
          </div>

        </div>

        <div className="report-wrapper">

  <div className="report-actions">

  </div>

  <ExecutiveReport
    report={displayedReport}
  />

</div>

    </>

  )
}
{
activePage === "departments" && (

<div className="page-card">

<DepartmentPanel
departments={departments}
/>

</div>

)
}

{
  activePage === "workflows" && (
    <div className="workflows-page">

      <div className="glass-card workflow-section">
        <h2 className="section-title">
          Cross Department Workflow
        </h2>

        <div className="pipeline-container">

          <div className="pipeline-step completed">
            <div className="step-circle">✓</div>
            <p>Task Received</p>
          </div>

          <div className="pipeline-line active"></div>

          <div className="pipeline-step completed">
            <div className="step-circle">✓</div>
            <p>Coordinator</p>
          </div>

          <div className="pipeline-line active"></div>

          <div className="pipeline-step active">
            <div className="step-circle">⚡</div>
            <p>Analytics</p>
          </div>

          <div className="pipeline-line"></div>

          <div className="pipeline-step pending">
            <div className="step-circle">•</div>
            <p>Finance</p>
          </div>

          <div className="pipeline-line"></div>

          <div className="pipeline-step pending">
            <div className="step-circle">•</div>
            <p>Operations</p>
          </div>

          <div className="pipeline-line"></div>

          <div className="pipeline-step pending">
            <div className="step-circle">•</div>
            <p>Legal</p>
          </div>

        </div>
      </div>

      <div className="workflow-grid">

        <div className="glass-card workflow-section">
          <h2 className="section-title">
            Department Handoff Flow
          </h2>

          <div className="dependency-list">

            <div className="dependency-card">
              <h3>Coordinator Agent</h3>
              <p>Controls workflow routing</p>
            </div>

            <div className="dependency-arrow">↓</div>

            <div className="dependency-card">
              <h3>Analytics Agent</h3>
              <p>Depends on Coordinator</p>
            </div>

            <div className="dependency-arrow">↓</div>

            <div className="dependency-card">
              <h3>Finance Agent</h3>
              <p>Depends on Analytics</p>
            </div>

            <div className="dependency-arrow">↓</div>

            <div className="dependency-card">
              <h3>Operations Agent</h3>
              <p>Depends on Finance</p>
            </div>

          </div>
        </div>

        <div className="glass-card workflow-section">
          <h2 className="section-title">
            Recent Requests
          </h2>

          <div className="workflow-history">

            <div className="history-item success">
              <div>
                <h4>WF-1042</h4>
                <p>Revenue Recovery Analysis</p>
              </div>
              <span>Completed • 18s</span>
            </div>

            <div className="history-item success">
              <div>
                <h4>WF-1041</h4>
                <p>Customer Retention Forecast</p>
              </div>
              <span>Completed • 24s</span>
            </div>

            <div className="history-item failed">
              <div>
                <h4>WF-1040</h4>
                <p>Supply Chain Audit</p>
              </div>
              <span>Failed • 9s</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

{
  activePage === "activity" && (
    <div className="analytics-page">

      <div className="analytics-top">

        <div className="glass-card metric-card">
          <h3>Open Requests</h3>
          <h1>$2.4M</h1>
          <span className="positive">+12.4%</span>
        </div>

        <div className="glass-card metric-card">
          <h3>Workflow Success Rate</h3>
          <h1>94%</h1>
          <span className="positive">+4.2%</span>
        </div>

        <div className="glass-card metric-card">
          <h3>Agent Efficiency</h3>
          <h1>87%</h1>
          <span className="positive">+6.8%</span>
        </div>

        <div className="glass-card metric-card">
          <h3>Pending Approvals</h3>
          <h1>$480K</h1>
          <span className="negative">-3.1%</span>
        </div>

      </div>

      <div className="analytics-grid">

        <div className="glass-card chart-card">
          <h2 className="section-title">
            Department Activity
          </h2>

          <div className="line-chart">

            <div style={{ height: "60%" }} className="line-bar"></div>
            <div style={{ height: "75%" }} className="line-bar"></div>
            <div style={{ height: "55%" }} className="line-bar"></div>
            <div style={{ height: "85%" }} className="line-bar"></div>
            <div style={{ height: "70%" }} className="line-bar"></div>
            <div style={{ height: "95%" }} className="line-bar"></div>
            <div style={{ height: "88%" }} className="line-bar"></div>

          </div>
        </div>

        <div className="glass-card chart-card">
          <h2 className="section-title">
            Department Workload
          </h2>

          <div className="performance-list">

            <div className="performance-item">
              <span>Coordinator</span>
              <div className="progress-bar">
                <div style={{ width: "96%" }}></div>
              </div>
            </div>

            <div className="performance-item">
              <span>HR</span>
              <div className="progress-bar">
                <div style={{ width: "91%" }}></div>
              </div>
            </div>

            <div className="performance-item">
              <span>Finance</span>
              <div className="progress-bar">
                <div style={{ width: "84%" }}></div>
              </div>
            </div>

            <div className="performance-item">
              <span>Procurement</span>
              <div className="progress-bar">
                <div style={{ width: "88%" }}></div>
              </div>
            </div>

            <div className="performance-item">
              <span>Research</span>
              <div className="progress-bar">
                <div style={{ width: "93%" }}></div>
              </div>
            </div>

          </div>
        </div>

      </div>

      <div className="analytics-grid">

        <div className="glass-card chart-card">
          <h2 className="section-title">
            Workflow Distribution
          </h2>

          <div className="pie-container">

            <div className="pie-chart"></div>

            <div className="pie-legend">
              <div><span className="dot purple"></span> Analytics</div>
              <div><span className="dot green"></span> Finance</div>
              <div><span className="dot blue"></span> Operations</div>
            </div>

          </div>
        </div>

        <div className="glass-card chart-card">
          <h2 className="section-title">
            Workflow Insights
          </h2>

          <div className="insights-list">

            <div className="insight-item">
              AI workflow automation reduced operational delays by 32%.
            </div>

            <div className="insight-item">
              Customer retention increased after predictive analytics deployment.
            </div>

            <div className="insight-item">
              Finance Agent identified $120K in optimization opportunities.
            </div>

            <div className="insight-item">
              Multi-agent coordination improved KPI response time by 48%.
            </div>

          </div>
        </div>

      </div>
    <div className="analytics-disclaimer glass-card">
  <p>
    Demo Environment Notice:
    Analytics, KPIs, workflow metrics, and operational insights
    displayed on this dashboard are simulated for demonstration
    and hackathon presentation purposes only.
  </p>
</div>
    </div>
  )
}

{
  activePage === "settings" && (
    <div className="settings-page">

      <div className="glass-card settings-card">

        <h2 className="section-title">
          AI Model Configuration
        </h2>

        <div className="settings-grid">

          <div className="setting-item">
            <label>LLM Provider</label>

            <select>
              <option>Groq</option>
              <option>Google Gemini</option>
              <option>OpenAI</option>
            </select>
          </div>

          <div className="setting-item">
            <label>Model</label>

            <select>
              <option>Llama 3.3 70B</option>
              <option>Gemini 1.5 Pro</option>
              <option>Mixtral 8x7B</option>
            </select>
          </div>

          <div className="setting-item">
            <label>Response Temperature</label>

            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              defaultValue="0.7"
            />
          </div>

          <div className="setting-item toggle-item">
            <label>Autonomous Reasoning</label>

            <div className="toggle active"></div>
          </div>

        </div>

      </div>

      <div className="glass-card settings-card">

        <h2 className="section-title">
          Notification Preferences
        </h2>

        <div className="settings-grid">

          <div className="setting-item toggle-item">
            <label>Email Alerts</label>
            <div className="toggle active"></div>
          </div>

          <div className="setting-item toggle-item">
            <label>Slack Notifications</label>
            <div className="toggle active"></div>
          </div>

          <div className="setting-item toggle-item">
            <label>Workflow Completion Alerts</label>
            <div className="toggle active"></div>
          </div>

          <div className="setting-item toggle-item">
            <label>Failure Notifications</label>
            <div className="toggle"></div>
          </div>

        </div>

      </div>

      <div className="glass-card settings-card">

        <h2 className="section-title">
          Security & Governance
        </h2>

        <div className="settings-grid">

          <div className="setting-item toggle-item">
            <label>Audit Logging</label>
            <div className="toggle active"></div>
          </div>

          <div className="setting-item toggle-item">
            <label>Encrypted Reports</label>
            <div className="toggle active"></div>
          </div>

          <div className="setting-item toggle-item">
            <label>Role-Based Access</label>
            <div className="toggle active"></div>
          </div>

        </div>

      </div>

    </div>
  )
}
      </main>

    </div>
      </>
  );
  
}

export default App;