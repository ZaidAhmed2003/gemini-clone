import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const timeoutIds = [];

  const onSent = async (message = input) => {
    if (!message.trim()) return;

    // 🧹 Clear previous typing effect
    timeoutIds.forEach((id) => clearTimeout(id));
    timeoutIds.length = 0;

    setResultData("");
    setLoading(true);
    setShowResult(true);
    setRecentPrompt(message);

    setPrevPrompts((prev) => {
      if (!prev.includes(message)) {
        return [...prev, message];
      }
      return prev;
    });

    setInput("");

    try {
      const response = await runChat(message);

      let newResponse = "";
      let inCodeBlock = false;
      const lines = response.split("\n");

      for (let line of lines) {
        if (line.startsWith("```")) {
          newResponse += inCodeBlock ? "</code></pre>" : "<pre><code>";
          inCodeBlock = !inCodeBlock;
        } else {
          if (inCodeBlock) {
            newResponse += line + "\n";
          } else {
            let parts = line.split("**");
            parts.forEach((part, i) => {
              newResponse += i % 2 === 1 ? `<b>${part}</b>` : part;
            });
            newResponse += "<br/>";
          }
        }
      }

      const words = newResponse.split(" ");
      words.forEach((word, index) => {
        const id = setTimeout(() => {
          setResultData((prev) => prev + word + " ");
        }, index * 75);
        timeoutIds.push(id);
      });
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  const contextValue = {
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    prevPrompts, // <-- Add this here
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
