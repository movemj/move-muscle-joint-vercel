"use client"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, Loader2 } from "lucide-react"

interface Message {
  role: "user" | "assistant"
  content: string
}

const GREETING =
  "Hi! I'm Maya, your guide for Move Muscle & Joint. What brings you in today — or can I answer something about our services, pricing, or how to get started?"

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: GREETING },
  ])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [unread, setUnread] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open) {
      setUnread(false)
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [open])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, loading])

  async function send() {
    const text = input.trim()
    if (!text || loading) return

    const userMessage: Message = { role: "user", content: text }
    const updated = [...messages, userMessage]
    setMessages(updated)
    setInput("")
    setLoading(true)

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updated }),
      })
      const data = await res.json()
      const reply = data.message || "Something went wrong — please call us at (913) 303-0389."
      setMessages((prev) => [...prev, { role: "assistant", content: reply }])
      if (!open) setUnread(true)
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Something went wrong. You can reach us at (913) 303-0389 or hello@movemj.com." },
      ])
    } finally {
      setLoading(false)
    }
  }

  function handleKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {/* Chat panel */}
      {open && (
        <div
          className="flex flex-col w-[340px] h-[480px] rounded-2xl shadow-2xl overflow-hidden"
          style={{ background: "#fff", border: "1px solid #e5e7eb" }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-3"
            style={{ background: "#1a1a1a" }}
          >
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold text-white"
                style={{ background: "#c8a97e" }}
              >
                M
              </div>
              <div>
                <p className="text-white text-sm font-medium leading-none">Maya</p>
                <p className="text-gray-400 text-xs mt-0.5">Move Muscle &amp; Joint</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3" style={{ background: "#f9f9f9" }}>
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className="max-w-[82%] text-sm leading-relaxed px-3 py-2 rounded-xl"
                  style={
                    msg.role === "user"
                      ? { background: "#1a1a1a", color: "#fff", borderRadius: "18px 18px 4px 18px" }
                      : { background: "#fff", color: "#1a1a1a", border: "1px solid #e5e7eb", borderRadius: "18px 18px 18px 4px" }
                  }
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div
                  className="px-3 py-2 rounded-xl text-sm"
                  style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: "18px 18px 18px 4px" }}
                >
                  <Loader2 size={14} className="animate-spin text-gray-400" />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div
            className="flex items-center gap-2 px-3 py-2"
            style={{ borderTop: "1px solid #e5e7eb", background: "#fff" }}
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask a question…"
              disabled={loading}
              className="flex-1 text-sm outline-none bg-transparent placeholder-gray-400 text-gray-800 disabled:opacity-50"
            />
            <button
              onClick={send}
              disabled={loading || !input.trim()}
              className="flex items-center justify-center w-8 h-8 rounded-full transition-opacity disabled:opacity-40"
              style={{ background: "#c8a97e" }}
              aria-label="Send"
            >
              <Send size={14} className="text-white" />
            </button>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="relative flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95"
        style={{ background: "#1a1a1a" }}
        aria-label={open ? "Close chat" : "Chat with us"}
      >
        {open ? (
          <X size={22} className="text-white" />
        ) : (
          <MessageCircle size={22} className="text-white" />
        )}
        {!open && unread && (
          <span
            className="absolute top-1 right-1 w-3 h-3 rounded-full"
            style={{ background: "#c8a97e" }}
          />
        )}
      </button>
    </div>
  )
}
