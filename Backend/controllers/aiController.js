import ai from "../utils/gemini.js";

export const generateStudyMaterial = async (req, res) => {
    try {

        const { text,difficulty,flashcardCount,
    quizCount, } = req.body;

      const prompt = `
You are an AI Study Assistant.

Topic:
${text}

Difficulty:
${difficulty}

Generate:

• Exactly ${flashcardCount} flashcards.
• Exactly ${quizCount} multiple-choice quiz questions.

Requirements:

- Return ONLY valid JSON.
- No markdown.
- No explanation outside JSON.

JSON Format:

{
  "summary":"...",

  "flashcards":[
    {
      "question":"...",
      "answer":"..."
    }
  ],

  "quiz":[
    {
      "question":"...",
      "options":[
        "...",
        "...",
        "...",
        "..."
      ],
      "answer":"...",
      "explanation":"..."
    }
  ]
}
`;
        const response = await ai.models.generateContent({
             model: "gemini-3.1-flash-lite",
            contents: prompt,
            config: {
        responseMimeType: "application/json",
    },
        });

        let result = response.text;

        result = result
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim();

     
        let json;

        try {
           const start = result.indexOf("{");
const end = result.lastIndexOf("}");

result = result.substring(start, end + 1);

console.log(result);

json = JSON.parse(result);
        } catch (err) {
            return res.status(500).json({
                message: "AI returned invalid JSON. Please try again."
            });
        }

        
        if (
            !json.flashcards ||
            !Array.isArray(json.flashcards) ||
            !json.quiz ||
            !Array.isArray(json.quiz)
        ) {
            return res.status(500).json({
                message: "AI response has an invalid format."
            });
        }

     console.log(json);
        res.json(json);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to generate study material"
        });
    }
};