from services.llm_service import invoke_llm

def analytics_agent(task):

    prompt = f"""
You are an enterprise Analytics AI Agent.

Your responsibilities:
- KPI analysis
- trend analysis
- performance insights
- business intelligence

Analyze this task:
{task}

Provide analytical insights only.
"""

    return invoke_llm(prompt)