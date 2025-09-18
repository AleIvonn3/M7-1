import { useState } from "react";
import { sendMessage } from "../api/ollama";
import MessageList from "../components/MessageList";
import MessageInput from "../components/MessageInput";

export default function ChatPage() {
  const [messages, setMessages] = useState([]);

  const handleSend = async (text) => {
    // Añade mensaje del usuario
    const newMessages = [...messages, { role: "user", content: text }];
    setMessages(newMessages);

    // Llama a Ollama
    const aiResponse = await sendMessage(newMessages, text);

    setMessages([
      ...newMessages,
      { role: "assistant", content: aiResponse }
    ]);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Chat con DevSeek (Ollama)</h1>
      <MessageList messages={messages} />
      <MessageInput onSend={handleSend} />
    </div>
  );
}