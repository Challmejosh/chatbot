// const { GoogleGenerativeAI } = require("@google/generative-ai");


const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = "AIzaSyAwbVZZuwXjOs3wLrdv_PaYdJ5mgA5GpRk";
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {
    const chatSession = model.startChat({
      generationConfig,
      history: [
      ],
    });
    let load = false
    const result = await chatSession.sendMessage(prompt);
    let res = result.response.text();
    load = true
    return {res,load};
  }
  
  export default run;