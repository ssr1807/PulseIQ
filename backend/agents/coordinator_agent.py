from services.llm_service import invoke_llm

def coordinator_agent(task):

    prompt = f"""
You are a senior enterprise AI coordinator.

Analyze the following business task and decide:
1. Which enterprise agents are needed
2. What each agent should do

Available agents:
- Analytics Agent
- Finance Agent
- Operations Agent
- Research Agent

Task:
{task}

Return concise workflow steps.
"""

    return invoke_llm(prompt)