
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getBusinessAdvice = async (userQuery: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userQuery,
      config: {
        systemInstruction: `You are the AI Business Consultant for Star POS Network. 
        You have deep knowledge of our services:
        1. ATM SOLUTIONS: We offer nationwide technical support, 24-hour cash settlement, wireless processing solutions, and a Smartphone Monitoring App.
        2. ATM FINANCING: Leasing and financing options that can cost as little as a few dollars per day for well-qualified applicants.
        3. BRANDING: Custom ATM wraps and signage to boost transaction volume.
        4. VAULT CASH: Full-service armored delivery, cash forecasting, and real-time monitoring.
        5. POS SOFTWARE: We specialize in Clover, Aldelo Express (Restaurant focus), and Hiopos (Retail/Multi-store focus).
        
        Keep responses professional, data-driven, and concise. Your goal is to qualify the lead and encourage them to book a consultation via the contact page.`,
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a slight connectivity issue. Please reach out to our team at (800) 555-STAR for immediate assistance!";
  }
};
