module.exports = async (state, event) => {
  // Offering therapist support and guidance based on the input
  const userInput = event.payload.text;

  await bp.events.replyToEvent(event, [
    {
      text: "You can share your thoughts. I am here to listen and guide you.",
    },
    {
      text: `Based on your input, I will try to understand your current mental state and suggest ways to cope.`,
    },
  ]);

  // Process the input and guide user based on the provided information
  // Example: If the user mentions feeling low, suggest appropriate coping mechanisms

  const response = `From your message, it seems you might be feeling a bit overwhelmed. But don't worry, you're not alone. Let's take it one step at a time and work on this together. Remember, small progress is still progress. 🌱`;

  await bp.events.replyToEvent(event, [{ text: response }]);

  return state;
};
