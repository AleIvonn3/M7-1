import axios from "axios";

const OLLAMA_API = "http://localhost:11434/api/chat"; // Ollama corre aquí por defecto

export async function sendMessage(history, userMessage) {
  try {
    const response = await axios.post(OLLAMA_API, {
      model: "devseek",     // modelo que corre en Ollama
      messages: [
        ...history,         // historial anterior
        { role: "user", content: userMessage }
      ],
      stream: false         // respuesta completa (no streaming en este ejemplo)
    });

    // La API devuelve el historial actualizado
    return response.data.message.content;
  } catch (err) {
    console.error("Error al llamar a Ollama:", err);
    return "⚠️ Error conectando con la IA.";
  }
}