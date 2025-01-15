module.exports = async (state, event) => {
  // Asking for the user's name
  const userName = event.payload.text;

  if (!userName) {
    // If the name is not provided, ask for it
    await bp.events.replyToEvent(event, [
      {
        text: "Hello! I'm WellnessWave, your friendly mental health assistant. What's your name?",
      },
    ]);
    return;
  }

  // Welcoming the user by name with a positive quote
  const positiveQuote = "Remember, you are stronger than you think, and you're not alone in this journey. 🌟";

  await bp.events.replyToEvent(event, [
    {
      text: `Welcome, ${userName}! 👋 ${positiveQuote}`,
    },
    {
      text: "Let's continue further. Type 'yes' to proceed.",
    },
  ]);

  // Storing the user's name in the state for further interaction
  state.userName = userName;

  return state;
};
