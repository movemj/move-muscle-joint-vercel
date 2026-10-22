"use client"

import { useState, useRef, useEffect } from "react"
import { X, Send, Loader2 } from "lucide-react"
import { MAYA_AVATAR } from "@/lib/maya-avatar"

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
                src={MAYA_AVATAR || "/placeholder.svg"}
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
            Ask Maya
          </span>
        )}
        <button
          onClick={() => setOpen((v) => !v)}
          className="relative flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 overflow-hidden"
          style={{ background: BRAND.accent }}
          aria-label={open ? "Close chat" : "Chat with Maya"}
        >
          {open ? (
            <X size={22} className="text-white" />
          ) : (
            <img
              src={MAYA_AVATAR || "/placeholder.svg"}
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
