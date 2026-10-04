"use client";
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Paperclip, RotateCcw } from 'lucide-react';
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
      content: "Hello. I am the Institutional Research Assistant. I can help you discover research, datasets, and expeditions from the NCPOR archive. How can I assist your research today?",
    },
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
    <div className="flex flex-col h-[calc(100vh-64px)]" style={{ background: 'var(--bg)' }}>
      {/* Chat Header */}
      <div className="border-b px-6 py-4 flex items-center justify-between" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full flex items-center justify-center text-white" style={{ background: '#12264A' }}>
            <Bot size={20} />
          </div>
          <div>
            <h1 className="font-bold" style={{ color: 'var(--text)' }}>Institutional Research Assistant</h1>
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
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-white"
                style={{ background: msg.role === 'user' ? '#F2A30F' : '#12264A' }}
              >
                {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
              </div>
              <div
                className="max-w-xl p-4 rounded-md shadow-sm"
                style={
                  msg.role === 'user'
                    ? { background: '#12264A', color: 'white' }
                    : { background: 'var(--surface)', color: 'var(--text)', border: '1px solid var(--border)' }
                }
              >
                <p className="leading-relaxed text-sm">{msg.content}</p>
                {msg.citations && (
                  <div className="mt-4 pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                    <p className="text-[10px] font-bold uppercase mb-2" style={{ color: 'var(--text-muted)' }}>Sources</p>
                    <div className="flex flex-wrap gap-2">
                      {msg.citations.map((cit, j) => (
                        <div
                          key={j}
                          className="text-xs px-2 py-1 rounded border cursor-pointer transition-colors"
                          style={{ background: 'var(--bg)', color: 'var(--text)', borderColor: 'var(--border)' }}
                        >
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
      <div className="border-t p-4 md:p-8" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
        <div className="max-w-4xl mx-auto relative">
          <div
            className="flex items-center gap-3 border rounded-md p-2 focus-within:border-sagar transition-all"
            style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}
          >
            <button className="p-2 transition-colors" style={{ color: 'var(--text-muted)' }}>
              <Paperclip size={20} />
            </button>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about institutional research, datasets, or expeditions..."
              className="flex-grow bg-transparent py-2 focus:outline-none text-sm"
              style={{ color: 'var(--text)' }}
            />
            <VigyanButton variant="primary" size="sm" className="gap-2" onClick={handleSend}>
              <Send size={16} /> Send
            </VigyanButton>
          </div>
          <p className="text-center text-[10px] mt-3" style={{ color: 'var(--text-muted)' }}>
            Answers are grounded in available institutional sources. AI may occasionally produce inaccuracies.
          </p>
        </div>
      </div>
    </div>
  );
}
