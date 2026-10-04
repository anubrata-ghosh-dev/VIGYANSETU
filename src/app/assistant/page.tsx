"use client";
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Paperclip, Trash2, RotateCcw } from 'lucide-react';
import VigyanButton from '@/components/ui/VigyanButton';

type Message = {
  role: 'user' | 'assistant';
  content: string;
  citations?: { title: string; page: string }[];
};

export default function ResearchAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'assistant', 
      content: "Hello. I am the Institutional Research Assistant. I can help you discover research, datasets, and expeditions from the NCPOR archive. How can I assist your research today?" 
    }
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    try {
      const response = await fetch('/api/v1/ai/query', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: input }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'The assistant request failed');
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: data.answer,
        citations: data.citations?.map((citation: { title: string; date: string }) => ({
          title: citation.title,
          page: citation.date,
        })),
      }]);
    } catch (error) {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: error instanceof Error ? error.message : 'The assistant is temporarily unavailable.',
      }]);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] bg-gray-50">
      {/* Chat Header */}
      <div className="bg-white border-b border-vigyan-border px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-vigyan-navy text-white rounded-full flex items-center justify-center">
            <Bot size={20} />
          </div>
          <div>
            <h1 className="font-bold text-vigyan-heading">Institutional Research Assistant</h1>
            <p className="text-xs text-green-600 flex items-center gap-1">
              <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse" />
              Source-Grounded AI Active
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <VigyanButton variant="ghost" size="sm" className="gap-2" onClick={() => setMessages([messages[0]])}>
            <RotateCcw size={14} /> Reset
          </VigyanButton>
        </div>
      </div>

      {/* Chat Area */}
      <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 md:p-8 space-y-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {messages.map((msg, i) => (
            <div key={i} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-vigyan-saffron text-white' : 'bg-vigyan-navy text-white'}`}>
                {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
              </div>
              <div className={`max-w-xl p-4 rounded-sm shadow-sm ${msg.role === 'user' ? 'bg-vigyan-navy text-white rounded-tr-none' : 'bg-white text-vigyan-body border border-vigyan-border rounded-tl-none'}`}>
                <p className="leading-relaxed text-sm">{msg.content}</p>
                {msg.citations && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-[10px] font-bold uppercase text-gray-400 mb-2">Sources</p>
                    <div className="flex flex-wrap gap-2">
                      {msg.citations.map((cit, j) => (
                        <div key={j} className="text-xs bg-gray-50 text-vigyan-navy px-2 py-1 rounded border border-gray-200 hover:bg-gray-100 cursor-pointer transition-colors">
                          {cit.title} ({cit.page})
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-white border-t border-vigyan-border p-4 md:p-8">
        <div className="max-w-4xl mx-auto relative">
          <div className="flex items-center gap-3 bg-gray-50 border border-vigyan-border rounded-sm p-2 focus-within:border-vigyan-navy transition-all">
            <button className="p-2 text-gray-400 hover:text-vigyan-navy transition-colors">
              <Paperclip size={20} />
            </button>
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about institutional research, datasets, or expeditions..." 
              className="flex-grow bg-transparent py-2 focus:outline-none text-sm"
            />
            <VigyanButton variant="primary" size="sm" className="gap-2" onClick={handleSend}>
              <Send size={16} /> Send
            </VigyanButton>
          </div>
          <p className="text-center text-[10px] text-gray-400 mt-3">
            Answers are grounded in available institutional sources. AI may occasionally produce inaccuracies.
          </p>
        </div>
      </div>
    </div>
  );
}
