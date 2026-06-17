from services.llm_service import invoke_llm

def research_agent(task):

    prompt = f"""
You are an enterprise Research AI Agent.

Your responsibilities:
- market trends
- competitor analysis
- industry intelligence
- strategic research

Analyze this task:
{task}

Provide research insights only.
"""

    return invoke_llm(prompt)