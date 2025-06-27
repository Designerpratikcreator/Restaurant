<div id="chatbox-container">
  <div id="chat-header">Ask Gwarko Restaurant AI</div>
  <div id="chat-messages"></div>
  <div id="chat-input-container">
    <input type="text" id="chat-input" placeholder="Ask something..." />
    <button id="send-btn">Send</button>
  </div>
</div>

<script>
  const input = document.getElementById('chat-input');
  const sendBtn = document.getElementById('send-btn');
  const messages = document.getElementById('chat-messages');

  function addMessage(text, sender = 'user') {
    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble ' + (sender === 'user' ? 'user-msg' : 'ai-msg');
    bubble.textContent = text;
    messages.appendChild(bubble);
    messages.scrollTop = messages.scrollHeight;
  }

  function fakeAIResponse(userMsg) {
    // Basic responses based on keywords
    if (userMsg.toLowerCase().includes("menu")) {
      return "You can find our full menu by clicking on the 'Menu' link in the navigation bar. We offer a variety of Nepali and international dishes!";
    } else if (userMsg.toLowerCase().includes("reservation") || userMsg.toLowerCase().includes("book a table")) {
      return "To make a reservation, please visit our 'Reservations' section on this page and fill out the form, or call us at +977-XXXXXXXXXX.";
    } else if (userMsg.toLowerCase().includes("hours") || userMsg.toLowerCase().includes("open")) {
      return "Gwarko Restaurant is open from 10 AM to 10 PM, seven days a week.";
    } else if (userMsg.toLowerCase().includes("contact")) {
      return "You can reach us via our 'Contact' page, by email at info@gwarkorestaurant.com, or by phone at +977-XXXXXXXXXX.";
    } else if (userMsg.toLowerCase().includes("specials")) {
      return "Today's specials include Nepali Thali Set, Chicken Chowmein, and Vegetable Momos. Check out the 'Specials' section for more details!";
    } else if (userMsg.toLowerCase().includes("events")) {
      return "We have a Live Music Night on July 15, 2025, and a Nepali Cuisine Cooking Class on August 5, 2025. See the 'Events' section for more!";
    } else if (userMsg.toLowerCase().includes("location")) {
        return "Gwarko Restaurant is located in Gwarko, Lalitpur, Nepal.";
    }
    // Generic response for other queries
    return `You asked about: "${userMsg}". For more information about Gwarko Restaurant, please explore our website or contact us directly.`;
  }

  sendBtn.onclick = () => {
    const userMsg = input.value.trim();
    if (!userMsg) return;
    addMessage(userMsg, 'user');
    input.value = '';
    setTimeout(() => {
      addMessage(fakeAIResponse(userMsg), 'ai');
    }, 500);
  };
