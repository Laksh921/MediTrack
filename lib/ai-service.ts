export const aiService = {
  async generateChatResponse(userInput: string): Promise<string> {
    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userInput }),
      });

      // ✅ Print status code for debugging
      console.log("Response status:", response.status);

      if (!response.ok) {
        const err = await response.text(); // Get error message
        console.error("Backend error:", err); // 👈 See the actual error
        throw new Error("Failed to get a valid response from backend");
      }

      const data = await response.json();
      return data.response || "Sorry, no response from the model.";
    } catch (error) {
      console.error("Frontend error:", error);
      return "❌ Could not connect to the health assistant server. Please ensure your AI model backend is running.";
    }
  },
};
