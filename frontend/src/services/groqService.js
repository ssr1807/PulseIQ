const API_KEY = import.meta.env.VITE_GROQ_API_KEY;

export async function generateWorkflow(request) {

  const prompt = `

You are PulseIQ.

Analyze this enterprise request:

"${request}"

Perform these tasks:

1. Identify departments involved.

2. Explain why each department is needed.

3. Create an execution workflow.

4. Generate a final executive summary.

Respond ONLY in markdown.

Use this structure:

## Departments

## Workflow

## Executive Summary

`;

  try {

    const response = await fetch(

      "https://api.groq.com/openai/v1/chat/completions",

      {

        method: "POST",

        headers: {

          Authorization: `Bearer ${API_KEY}`,

          "Content-Type": "application/json"

        },

        body: JSON.stringify({

          model: "llama-3.3-70b-versatile",

          messages: [

            {

              role: "user",

              content: prompt

            }

          ],

          temperature: 0.4

        })

      }

    );

    const data = await response.json();

    return data.choices[0].message.content;

  }

  catch(error){

    console.log(error);

    return "Unable to generate report.";

  }

}