export async function POST(req: Request) {
  const { message } = await req.json();

  const responses = [
    "I am running a targeted research pass on your request and summarizing the best options with a concise decision brief.",
    "I’ve identified the strongest path: comparing the most relevant solutions, extracting key trade-offs, and preparing the final result in a usable format.",
    "The task is in progress. I’m gathering context, validating assumptions, and preparing a polished output for you.",
  ];

  const reply = message && typeof message === "string"
    ? `${responses[Math.floor(Math.random() * responses.length)]}\n\nTask: ${message}`
    : "I’m ready to help with research, planning, creation, or analysis.";

  return Response.json({ reply });
}
