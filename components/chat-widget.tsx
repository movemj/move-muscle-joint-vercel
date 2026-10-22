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
          className="relative flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95"
          style={{ background: BRAND.accent }}
          aria-label={open ? "Close chat" : "Chat with us"}
        >
          {open ? (
            <X size={22} className="text-white" />
          ) : (
            <img
              src={MAYA_AVATAR}
              alt="Chat with Maya"
              className="w-14 h-14 rounded-full object-cover"
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
