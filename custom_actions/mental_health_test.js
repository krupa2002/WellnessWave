module.exports = async (state, event) => {
  // Initialize or update the workflow object
  const workflow = state.workflow || {
    dep: 0,
    anx: 0,
    happy: 0,
    response1: "",
    response2: "",
    response3: "",
    response4: "",
    response5: "",
    response6: "",
    response7: "",
    response8: "",
    response9: "",
    response10: "",
  };

  // Process responses and update the workflow
  const responses = {
    response1: {
      "Option 1": "dep",
      "Option 2": "anx",
      "Option 3": "happy",
    },
    response2: {
      "Option 1": "dep",
      "Option 2": "anx",
      "Option 3": "happy",
    },
    // Similarly for response3 through response10
  };

  // Handling user responses and incrementing appropriate values
  Object.keys(responses).forEach((responseKey, index) => {
    const response = event.payload.text;
    const category = responses[responseKey][response];

    if (category) {
      workflow[category] += 10;
    }
  });

  // After collecting all responses, calculate the intensity
  if (workflow.anx >= 0 && workflow.anx <= 25) {
    workflow.aprint = "Your anxiety score is low, which is fantastic! Keep up the great work in managing your stress levels. Remember to practice self-care and mindfulness to maintain this sense of calm. 🌿💖";
  }
  if (workflow.anx >= 26 && workflow.anx <= 50) {
    workflow.aprint = "Feeling a bit anxious? That's okay! Your anxiety score suggests a moderate level of stress, but it's manageable. Try incorporating relaxation techniques like deep breathing or meditation to help ease your worries. You've got this! 🌟🌻";
  }
  if (workflow.anx >= 51 && workflow.anx <= 75) {
    workflow.aprint = "Your anxiety score indicates some significant stress, but remember, you're not alone! Reach out to supportive friends or family members for a chat. Consider practicing self-care activities like exercise or journaling to help ease your mind. You're stronger than you think! 💪😊";
  }
  if (workflow.anx >= 75 && workflow.anx <= 100) {
    workflow.aprint = "Your anxiety score is quite high, but remember, there's always hope for managing stress! Consider seeking support from a mental health professional who can provide coping strategies tailored to your needs. You deserve to feel calm and at ease. Take care of yourself! 🌈✨";
  }

  // Output result
  await bp.events.replyToEvent(event, [
    { text: workflow.aprint }
  ]);

  return state;
};
