"use client"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, Loader2 } from "lucide-react"

interface Message {
  role: "user" | "assistant"
  content: string
}

const BRAND = {
  accent: "#849BBD",
  dark: "#191D24",
  blue: "#003C85",
  white: "#FFFFFF",
  lightGray: "#F3F3F3",
  borderGray: "#E5E5E5",
}

const MAYA_AVATAR = "data:image/jpeg;base64,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"

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
    <div className="fixed bottom-20 right-4 sm:bottom-5 sm:right-5 z-50 flex flex-col items-end gap-3">
      {/* Chat panel */}
      {open && (
        <div
          className="flex flex-col w-[calc(100vw-2rem)] sm:w-[340px] h-[460px] sm:h-[500px] rounded-2xl shadow-2xl overflow-hidden"
          style={{ background: BRAND.white, border: `1px solid ${BRAND.borderGray}` }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-3"
            style={{ background: BRAND.dark }}
          >
            <div className="flex items-center gap-3">
              <img
                src={MAYA_AVATAR}
                alt="Maya"
                className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                style={{ border: `2px solid ${BRAND.accent}` }}
              />
              <div>
                <p className="text-white text-sm font-semibold leading-none tracking-wide">Maya</p>
                <p className="text-xs mt-1" style={{ color: BRAND.accent }}>Move Muscle &amp; Joint</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="transition-opacity hover:opacity-70"
              style={{ color: BRAND.accent }}
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div
            className="flex-1 overflow-y-auto px-4 py-4 space-y-3"
            style={{ background: BRAND.lightGray }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className="max-w-[82%] text-sm leading-relaxed px-4 py-2.5"
                  style={
                    msg.role === "user"
                      ? {
                          background: BRAND.accent,
                          color: BRAND.white,
                          borderRadius: "18px 18px 4px 18px",
                        }
                      : {
                          background: BRAND.white,
                          color: BRAND.dark,
                          border: `1px solid ${BRAND.borderGray}`,
                          borderRadius: "18px 18px 18px 4px",
                        }
                  }
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div
                  className="px-4 py-2.5"
                  style={{
                    background: BRAND.white,
                    border: `1px solid ${BRAND.borderGray}`,
                    borderRadius: "18px 18px 18px 4px",
                  }}
                >
                  <Loader2 size={14} className="animate-spin" style={{ color: BRAND.accent }} />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div
            className="flex items-center gap-2 px-3 py-3"
            style={{ borderTop: `1px solid ${BRAND.borderGray}`, background: BRAND.white }}
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask a question…"
              disabled={loading}
              className="flex-1 text-sm outline-none bg-transparent disabled:opacity-50"
              style={{ color: BRAND.dark }}
            />
            <button
              onClick={send}
              disabled={loading || !input.trim()}
              className="flex items-center justify-center w-8 h-8 rounded-full transition-opacity disabled:opacity-30"
              style={{ background: BRAND.accent }}
              aria-label="Send"
            >
              <Send size={13} className="text-white" />
            </button>
          </div>
        </div>
      )}

      {/* Toggle button with label */}
      <div className="flex flex-col items-center gap-1.5">
        {!open && (
          <span
            className="text-xs font-semibold tracking-wide px-2.5 py-1 rounded-full shadow-md"
            style={{ background: BRAND.dark, color: BRAND.white }}
          >
            Chat with us
          </span>
        )}
        <button
          onClick={() => setOpen((v) => !v)}
          className="relative flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 overflow-hidden"
          style={{ background: BRAND.accent }}
          aria-label={open ? "Close chat" : "Chat with us"}
        >
          {open ? (
            <X size={22} className="text-white" />
          ) : (
            <img
              src={MAYA_AVATAR}
              alt="Chat with Maya"
              className="w-14 h-14 object-cover"
            />
          )}
          {!open && unread && (
            <span
              className="absolute top-0.5 right-0.5 w-3.5 h-3.5 rounded-full border-2 border-white"
              style={{ background: "#e53e3e" }}
            />
          )}
        </button>
      </div>
    </div>
  )
}
