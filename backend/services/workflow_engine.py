from agents.coordinator_agent import coordinator_agent
from agents.analytics_agent import analytics_agent
from agents.finance_agent import finance_agent
from agents.operations_agent import operations_agent
from agents.research_agent import research_agent

def run_enterprise_workflow(task):

    coordinator_output = coordinator_agent(task)

    analytics_output = analytics_agent(task)

    finance_output = finance_agent(task)

    operations_output = operations_agent(task)

    research_output = research_agent(task)

    final_report = f"""
# Enterprise AI Executive Report

## Coordinator Analysis
{coordinator_output}

---

## Analytics Insights
{analytics_output}

---

## Financial Analysis
{finance_output}

---

## Operations Strategy
{operations_output}

---

## Research Intelligence
{research_output}
"""

    return {
        "coordinator": coordinator_output,
        "analytics": analytics_output,
        "finance": finance_output,
        "operations": operations_output,
        "research": research_output,
        "final_report": final_report
    }