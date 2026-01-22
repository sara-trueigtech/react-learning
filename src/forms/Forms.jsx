import React, {
  useOptimistic,
  useState,
  startTransition
} from "react";

const Forms = () => {
  const [messages, setMessages] = useState([]);

  async function sendMsg(text) {
    await new Promise(res => setTimeout(res, 2000));
  }

  const [optMsg, addOptMsg] = useOptimistic(
    messages,
    (state, newMsg) => [...state, newMsg]
  );

  async function handleSubmit(e) {
    e.preventDefault();

    const text = e.target.message.value;
    e.target.reset();

    // ✅ optimistic update MUST be in a transition
    startTransition(() => {
      addOptMsg({ text, sending: true });
    });

    await sendMsg(text);

    setMessages(prev => [...prev, { text, sending: false }]);
  }

  return (
    <>
      <ul>
        {optMsg.map((m, i) => (
          <li key={i}>
            {m.text} {m.sending && "sending"}
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input type="text" name="message" />
        <button>Send</button>
      </form>
    </>
  );
};

export default Forms;
