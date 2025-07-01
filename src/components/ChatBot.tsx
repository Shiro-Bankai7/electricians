"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { Send, Sparkles, X, Loader2, MessageCircle, Phone, Minimize2, Maximize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface MillionDollarChatbotProps {
  companyName?: string;
  emergencyPhone?: string;
  initialMessage?: string;
  className?: string;
}

const MillionDollarChatbot = ({
  companyName = "PowerPro Electric",
  emergencyPhone = "(555) 123-4567",
  initialMessage = "Hi! I'm here to help with your electrical needs. What can I assist you with today?",
  className = ""
}: MillionDollarChatbotProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: initialMessage,
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const smartResponses = {
    greeting: [
      "Hello! Welcome to PowerPro Electric. How can I help you today?",
      "Hi there! I'm your electrical assistant. What electrical service do you need?",
      "Welcome! I'm here to help with all your electrical needs."
    ],
    emergency: [
      `This sounds like an emergency! Please call us immediately at ${emergencyPhone} for urgent electrical issues.`,
      `For electrical emergencies, please call ${emergencyPhone} right away. Our emergency team is standing by 24/7.`
    ],
    services: [
      "We offer a full range of electrical services including wiring, panel upgrades, lighting installation, electrical repairs, and safety inspections. What specific service interests you?",
      "Our expert electricians handle residential and commercial electrical work. We specialize in panel upgrades, rewiring, lighting design, and electrical troubleshooting. How can we help?"
    ],
    pricing: [
      "Our pricing is competitive and transparent. We offer free estimates for most projects. Would you like to schedule a consultation to discuss your specific needs?",
      "We provide upfront pricing with no hidden fees. Each project is unique, so I'd recommend a free estimate. Can I help you schedule one?"
    ],
    appointment: [
      "I'd be happy to help you schedule an appointment! Our electricians are available Monday through Saturday. What type of electrical work do you need done?",
      "Let's get you scheduled! We have openings this week. What electrical service do you need, and what's your preferred time?"
    ],
    default: [
      "That's a great question! Our experienced electricians can definitely help with that. Would you like me to connect you with a specialist?",
      "I understand your concern. Our team has extensive experience with all types of electrical work. Can you tell me more about your specific situation?",
      "Thanks for reaching out! Our certified electricians are experts in handling these types of issues. Would you like to schedule a consultation?"
    ]
  };

  const getSmartResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes("emergency") || message.includes("urgent") || message.includes("sparks") || message.includes("burning smell")) {
      return smartResponses.emergency[Math.floor(Math.random() * smartResponses.emergency.length)];
    }
    
    if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
      return smartResponses.greeting[Math.floor(Math.random() * smartResponses.greeting.length)];
    }
    
    if (message.includes("service") || message.includes("what do you do") || message.includes("help with")) {
      return smartResponses.services[Math.floor(Math.random() * smartResponses.services.length)];
    }
    
    if (message.includes("price") || message.includes("cost") || message.includes("how much")) {
      return smartResponses.pricing[Math.floor(Math.random() * smartResponses.pricing.length)];
    }
    
    if (message.includes("appointment") || message.includes("schedule") || message.includes("book")) {
      return smartResponses.appointment[Math.floor(Math.random() * smartResponses.appointment.length)];
    }
    
    return smartResponses.default[Math.floor(Math.random() * smartResponses.default.length)];
  };

  const simulateTyping = useCallback((userMessage: string) => {
    setIsTyping(true);
    
    const response = getSmartResponse(userMessage);
    const typingDuration = Math.min(response.length * 30, 3000);
    
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        text: response,
        isUser: false,
        timestamp: new Date()
      }]);
    }, typingDuration);
  }, []);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    
    if (input.trim() === "") return;
    
    const userMessage = input;
    setMessages(prev => [...prev, {
      id: Date.now().toString(),
      text: userMessage,
      isUser: true,
      timestamp: new Date()
    }]);
    setInput("");
    
    simulateTyping(userMessage);
  };

  const quickActions = [
    "Schedule an appointment",
    "Get a quote",
    "Emergency service",
    "Panel upgrade info"
  ];

  const handleQuickAction = (action: string) => {
    setInput(action);
    setTimeout(() => handleSubmit(), 100);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  if (!isOpen) {
    return (
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full shadow-2xl flex items-center justify-center text-white z-50 hover:shadow-gray-700/25"
      >
        <MessageCircle className="w-8 h-8" />
      </motion.button>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      className={`fixed bottom-6 right-6 w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-border flex flex-col z-50 overflow-hidden ${className}`}
      style={{ height: isMinimized ? "auto" : "500px" }}
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 flex items-center justify-between text-white">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">{companyName}</h3>
            <p className="text-gray-300 text-sm">How can we help you?</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1 hover:bg-white/20 rounded transition-colors"
          >
            {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 hover:bg-white/20 rounded transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Emergency Banner */}
      <div className="bg-red-950 border-b border-red-900 p-3">
        <div className="flex items-center space-x-2 text-red-400">
          <Phone className="w-4 h-4" />
          <span className="text-sm font-medium">Emergency? Call {emergencyPhone} now!</span>
        </div>
      </div>

      <AnimatePresence>
        {!isMinimized && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="flex flex-col flex-1"
          >
            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto bg-background" style={{ maxHeight: "300px" }}>
              <div className="space-y-4">
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] p-3 rounded-2xl ${
                        msg.isUser
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-tr-md"
                          : "bg-card text-card-foreground rounded-tl-md shadow-sm border border-border"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{msg.text}</p>
                      <p className={`text-xs mt-1 ${msg.isUser ? "text-blue-100" : "text-muted-foreground"}`}>
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </motion.div>
                ))}
                
                <AnimatePresence>
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex justify-start"
                    >
                      <div className="bg-card text-card-foreground rounded-2xl rounded-tl-md shadow-sm border border-border p-3">
                        <div className="flex items-center space-x-2">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce"></div>
                            <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce delay-75"></div>
                            <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce delay-150"></div>
                          </div>
                          <span className="text-xs text-muted-foreground">Typing...</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Quick Actions */}
            {messages.length <= 1 && (
              <div className="p-3 bg-background border-t border-border">
                <div className="grid grid-cols-2 gap-2">
                  {quickActions.map((action, index) => (
                    <motion.button
                      key={action}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handleQuickAction(action)}
                      className="p-2 text-xs bg-muted hover:bg-muted/80 rounded-lg border border-border transition-colors text-foreground"
                    >
                      {action}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 bg-background border-t border-border">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder="Type your message..."
                  className={`w-full bg-input border rounded-full py-3 pl-4 pr-12 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-all ${
                    isFocused ? "border-primary focus:ring-primary/20 bg-background" : "border-border"
                  }`}
                />
                <button
                  type="submit"
                  disabled={input.trim() === "" || isTyping}
                  className={`absolute right-2 rounded-full p-2 transition-all ${
                    input.trim() === "" || isTyping
                      ? "text-muted-foreground bg-muted cursor-not-allowed"
                      : "text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg"
                  }`}
                >
                  {isTyping ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function ChatBot() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <MillionDollarChatbot />
    </div>
  );
}
