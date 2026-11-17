"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Message {
  id: string
  sender: string
  recipient: string
  subject: string
  content: string
  date: string
  read: boolean
}

export function MessagingSystem() {
  const { t } = useLanguage()
  const [messages, setMessages] = useState<Message[]>([])
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null)
  const [showNewMessageDialog, setShowNewMessageDialog] = useState(false)
  const [newMessage, setNewMessage] = useState({ recipient: "", subject: "", content: "" })

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch("/api/messages")
        if (!response.ok) throw new Error("Failed to fetch messages")
        const data = await response.json()
        setMessages(data)
      } catch (error) {
        console.error("Error fetching messages:", error)
        toast({
          title: t("error"),
          description: t("messagesFetchError"),
          variant: "destructive",
        })
      }
    }

    fetchMessages()
  }, [t])

  const handleSendMessage = async () => {
    try {
      const response = await fetch("/api/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newMessage),
      })

      if (!response.ok) throw new Error("Failed to send message")

      const sentMessage: Message = await response.json()
      setMessages([...messages, sentMessage])
      setShowNewMessageDialog(false)
      setNewMessage({ recipient: "", subject: "", content: "" })

      toast({
        title: t("success"),
        description: t("messageSent"),
      })
    } catch (error) {
      console.error("Error sending message:", error)
      toast({
        title: t("error"),
        description: t("messageSendError"),
        variant: "destructive",
      })
    }
  }

  const markAsRead = async (messageId: string) => {
    try {
      const response = await fetch(`/api/mark-message-as-read`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messageId }),
      })

      if (!response.ok) throw new Error("Failed to mark message as read")

      setMessages(messages.map((msg) => (msg.id === messageId ? { ...msg, read: true } : msg)))
    } catch (error) {
      console.error("Error marking message as read:", error)
      toast({
        title: t("error"),
        description: t("messageMarkReadError"),
        variant: "destructive",
      })
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>{t("messages")}</CardTitle>
          <Button onClick={() => setShowNewMessageDialog(true)}>{t("newMessage")}</Button>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[400px]">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`p-4 border-b cursor-pointer ${message.read ? "bg-gray-100" : "bg-white font-semibold"}`}
                onClick={() => {
                  setSelectedMessage(message)
                  if (!message.read) markAsRead(message.id)
                }}
              >
                <div className="flex justify-between items-center">
                  <span>{message.sender}</span>
                  <span className="text-sm text-muted-foreground">{new Date(message.date).toLocaleString()}</span>
                </div>
                <div>{message.subject}</div>
              </div>
            ))}
          </ScrollArea>
        </CardContent>
      </Card>

      <Dialog open={!!selectedMessage} onOpenChange={() => setSelectedMessage(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedMessage?.subject}</DialogTitle>
            <DialogDescription>
              From: {selectedMessage?.sender} | Date: {new Date(selectedMessage?.date || "").toLocaleString()}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <p>{selectedMessage?.content}</p>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showNewMessageDialog} onOpenChange={setShowNewMessageDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t("newMessage")}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="recipient" className="text-right">
                {t("to")}
              </label>
              <Input
                id="recipient"
                value={newMessage.recipient}
                onChange={(e) => setNewMessage({ ...newMessage, recipient: e.target.value })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="subject" className="text-right">
                {t("subject")}
              </label>
              <Input
                id="subject"
                value={newMessage.subject}
                onChange={(e) => setNewMessage({ ...newMessage, subject: e.target.value })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="content" className="text-right">
                {t("message")}
              </label>
              <Textarea
                id="content"
                value={newMessage.content}
                onChange={(e) => setNewMessage({ ...newMessage, content: e.target.value })}
                className="col-span-3"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <Button onClick={handleSendMessage}>{t("send")}</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
