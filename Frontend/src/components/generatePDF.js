import { jsPDF } from "jspdf";

export const generatePDF = ({
  topic,
  summary,
  flashcards,
  quiz,
}) => {

  const doc = new jsPDF();

  let y = 20;

  doc.setFontSize(24);
  doc.text("LearnFlow AI", 20, y);

  y += 12;

  doc.setFontSize(16);
  doc.text("AI Generated Study Notes", 20, y);

  y += 20;

  doc.setFontSize(12);

  doc.text(`Topic: ${topic}`, 20, y);

  y += 8;

  doc.text(
    `Generated: ${new Date().toLocaleDateString()}`,
    20,
    y
  );

  y += 15;

  doc.setFontSize(18);

  doc.text("AI Summary", 20, y);

  y += 10;

  doc.setFontSize(12);

  const summaryLines = doc.splitTextToSize(
    summary || "No Summary",
    170
  );

  doc.text(summaryLines, 20, y);

  y += summaryLines.length * 7 + 10;

  doc.setFontSize(18);

  doc.text("Flashcards", 20, y);

  y += 10;

  doc.setFontSize(12);

  flashcards.forEach((card, index) => {

    if (y > 260) {
      doc.addPage();
      y = 20;
    }

    doc.setFont(undefined, "bold");

    doc.text(`Question ${index + 1}`, 20, y);

    y += 8;

    doc.setFont(undefined, "normal");

    doc.text(
      doc.splitTextToSize(card.question, 170),
      20,
      y
    );

    y += 15;

    doc.setFont(undefined, "bold");

    doc.text("Answer", 20, y);

    y += 8;

    doc.setFont(undefined, "normal");

    doc.text(
      doc.splitTextToSize(card.answer, 170),
      20,
      y
    );

    y += 20;

  });

  doc.addPage();

  y = 20;

  doc.setFontSize(18);

  doc.text("Quiz", 20, y);

  y += 15;

  doc.setFontSize(12);

  quiz.forEach((q, index) => {

    if (y > 250) {
      doc.addPage();
      y = 20;
    }

    doc.setFont(undefined, "bold");

    doc.text(`${index + 1}. ${q.question}`, 20, y);

    y += 8;

    doc.setFont(undefined, "normal");

    q.options.forEach((option) => {

      doc.text("• " + option, 30, y);

      y += 7;

    });

    doc.setFont(undefined, "bold");

    doc.text("Correct Answer:", 20, y);

    y += 7;

    doc.setFont(undefined, "normal");

    doc.text(q.answer, 20, y);

    y += 15;

  });

  doc.save("LearnFlow-Study-Notes.pdf");

};