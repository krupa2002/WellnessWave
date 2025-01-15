module.exports = async (state, event) => {
  // Function to output results based on mental health test responses
  const workflow = state.workflow;

  const problemOutput = {
    dep: workflow.dep,
    anx: workflow.anx,
    happy: workflow.happy,
  };

  // Analyze the user's mental state based on their answers
  let condition = "";
  if (workflow.dep > workflow.anx && workflow.dep > workflow.happy) {
    condition = "depressed";
  } else if (workflow.anx > workflow.dep && workflow.anx > workflow.happy) {
    condition = "anxious";
  } else {
    condition = "happy";
  }

  // Determine the intensity based on the problem output
  let intensity = "";
  if (problemOutput.anx > 50) {
    intensity = "high anxiety level detected";
  } else if (problemOutput.dep > 50) {
    intensity = "high depression level detected";
  } else {
    intensity = "your condition seems stable";
  }

  // Return the analysis result and intensity
  await bp.events.replyToEvent(event, [
    {
      text: `Based on your responses, it seems you are experiencing ${condition}. The intensity of your condition is: ${intensity}. Let's discuss how we can improve your well-being together! 💖`,
    },
  ]);

  return state;
};
