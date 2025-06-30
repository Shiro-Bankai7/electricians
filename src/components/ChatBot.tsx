import React, { useState } from 'react';
import { MessageCircle, X, Phone, Clock, AlertTriangle, Send } from 'lucide-react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      message: "Hi! I'm here to help with your electrical needs. Is this an emergency?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const quickReplies = [
    { text: "🚨 Yes, this is an emergency!", action: "emergency" },
    { text: "📅 Schedule routine service", action: "schedule" },
    { text: "💰 Get a quote", action: "quote" },
    { text: "❓ Ask a question", action: "question" }
  ];

  const commonQuestions = [
    {
      question: "What are your service hours?",
      answer: "Our regular hours are Mon-Fri 7AM-6PM, Saturday 8AM-4PM. Emergency service is available 24/7!"
    },
    {
      question: "Do you provide free estimates?",
      answer: "Yes! We provide free estimates for all non-emergency electrical work. Call (555) 123-4567 to schedule."
    },
    {
      question: "Are you licensed and insured?",
      answer: "Absolutely! We're fully licensed (#EL-12345), bonded, and insured for your protection."
    },
    {
      question: "What areas do you serve?",
      answer: "We serve the entire metropolitan area including Downtown, Westside, Northfield, Southbrook, and surrounding communities."
    }
  ];

  const handleQuickReply = (action: string, text: string) => {
    // Add user message
    const userMessage = {
      type: 'user' as const,
      message: text,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);

    // Add bot response based on action
    setTimeout(() => {
      let botResponse = '';
      
      switch (action) {
        case 'emergency':
          botResponse = "🚨 This is an emergency! Please call us immediately at (555) 123-4567. Our emergency team is standing by 24/7. What type of emergency are you experiencing?";
          break;
        case 'schedule':
          botResponse = "I'd be happy to help you schedule service! What type of electrical work do you need? You can also call (555) 123-4567 or fill out our contact form for faster service.";
          break;
        case 'quote':
          botResponse = "I can help you get a quote! For the most accurate estimate, please describe the electrical work you need or call (555) 123-4567 to speak with one of our electricians.";
          break;
        case 'question':
          botResponse = "What would you like to know? I can answer questions about our services, pricing, or schedule an appointment for you.";
          break;
        default:
          botResponse = "How can I help you today?";
      }

      const newBotMessage = {
        type: 'bot' as const,
        message: botResponse,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, newBotMessage]);
    }, 1000);
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      type: 'user' as const,
      message: inputMessage,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    // Simple keyword-based responses
    setTimeout(() => {
      let botResponse = '';
      const message = inputMessage.toLowerCase();
      
      if (message.includes('emergency') || message.includes('urgent')) {
        botResponse = "🚨 For emergencies, please call (555) 123-4567 immediately! Our emergency team is available 24/7.";
      } else if (message.includes('price') || message.includes('cost') || message.includes('quote')) {
        botResponse = "For accurate pricing, I'd recommend calling (555) 123-4567 for a free estimate. Pricing varies based on the specific work needed.";
      } else if (message.includes('hours') || message.includes('open')) {
        botResponse = "We're open Mon-Fri 7AM-6PM, Saturday 8AM-4PM. Emergency service available 24/7! Call (555) 123-4567.";
      } else if (message.includes('license') || message.includes('insured')) {
        botResponse = "Yes! We're fully licensed (#EL-12345), bonded, and insured. All our electricians are certified professionals.";
      } else {
        botResponse = "Thanks for your message! For the best assistance, please call (555) 123-4567 to speak with one of our electricians, or you can schedule service through our contact form.";
      }

      const newBotMessage = {
        type: 'bot' as const,
        message: botResponse,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, newBotMessage]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-50"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 md:w-96 h-96 bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col z-50">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div>
              <h3 className="font-semibold">PowerPro Electric</h3>
              <p className="text-blue-100 text-sm">How can we help you?</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Emergency Alert */}
          <div className="bg-red-50 border-l-4 border-red-500 p-3">
            <div className="flex items-center">
              <AlertTriangle className="h-4 w-4 text-red-500 mr-2" />
              <p className="text-red-700 text-sm font-medium">
                Emergency? Call (555) 123-4567 now!
              </p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                    msg.type === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {msg.message}
                </div>
              </div>
            ))}
            
            {/* Quick Replies (only show after initial message) */}
            {messages.length === 1 && (
              <div className="space-y-2">
                {quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickReply(reply.action, reply.text)}
                    className="block w-full text-left p-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm transition-colors"
                  >
                    {reply.text}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t p-3">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
              <button
                onClick={handleSendMessage}
                className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            
            {/* Quick Actions */}
            <div className="flex space-x-2 mt-2">
              <a
                href="tel:+15551234567"
                className="flex-1 bg-red-600 hover:bg-red-700 text-white text-xs py-2 px-3 rounded-lg transition-colors flex items-center justify-center space-x-1"
              >
                <Phone className="h-3 w-3" />
                <span>Call Now</span>
              </a>
              <a
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs py-2 px-3 rounded-lg transition-colors flex items-center justify-center space-x-1"
              >
                <Clock className="h-3 w-3" />
                <span>Schedule</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;