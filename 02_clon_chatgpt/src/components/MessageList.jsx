export default function MessageList({ messages }) {
  return (
    <div className="flex flex-col gap-2 p-4 bg-gray-100 rounded h-96 overflow-y-auto">
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`p-2 rounded ${
            msg.role === "user" ? "bg-blue-200 self-end" : "bg-green-200 self-start"
          }`}
        >
          <strong>{msg.role === "user" ? "Tú:" : "IA:"}</strong> {msg.content}
        </div>
      ))}
    </div>
  );
}