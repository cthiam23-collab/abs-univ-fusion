// @ts-nocheck
"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Plus, Search, Send, Inbox, Mail, Trash2, RefreshCw, Star, Reply, Forward, Archive } from "lucide-react"
import { getMockMessageData } from "@/lib/mock-data"
import { formatDateTime } from "@/lib/helpers"

interface Message {
  id: string
  subject: string
  from: string
  to: string
  cc?: string
  content: string
  date: string
  status: "read" | "unread"
  starred: boolean
  category: "inbox" | "sent" | "draft" | "trash" | "archived"
  priority: "high" | "normal" | "low"
  hasAttachment: boolean
}

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterCategory, setFilterCategory] = useState<Message["category"]>("inbox")
  const [filterStatus, setFilterStatus] = useState("all")
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null)
  const [isComposeOpen, setIsComposeOpen] = useState(false)
  const { toast } = useToast()

  const [composeData, setComposeData] = useState({
    to: "",
    cc: "",
    subject: "",
    content: "",
    priority: "normal" as const,
  })

  useEffect(() => {
    loadMessages()
  }, [])

  const loadMessages = async () => {
    setLoading(true)
    try {
      const data = getMockMessageData()
      setMessages(data)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load messages",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const filteredMessages = messages.filter((message) => {
    const matchesSearch =
      message.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.from.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.to.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.content.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = message.category === filterCategory
    const matchesStatus = filterStatus === "all" || message.status === filterStatus
    return matchesSearch && matchesCategory && matchesStatus
  })

  const stats = {
    inbox: messages.filter((m) => m.category === "inbox").length,
    unread: messages.filter((m) => m.status === "unread" && m.category === "inbox").length,
    sent: messages.filter((m) => m.category === "sent").length,
    starred: messages.filter((m) => m.starred).length,
    drafts: messages.filter((m) => m.category === "draft").length,
  }

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const newMessage: Message = {
        id: `MSG${Date.now()}`,
        subject: composeData.subject,
        from: "admin@abs-university.com",
        to: composeData.to,
        cc: composeData.cc,
        content: composeData.content,
        date: new Date().toISOString(),
        status: "read",
        starred: false,
        category: "sent",
        priority: composeData.priority,
        hasAttachment: false,
      }
      setMessages([newMessage, ...messages])
      toast({
        title: "Success",
        description: "Message sent successfully",
      })
      resetComposeForm()
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message",
        variant: "destructive",
      })
    }
  }

  const handleMarkAsRead = (id: string) => {
    setMessages(messages.map((msg) => (msg.id === id ? { ...msg, status: "read" as const } : msg)))
  }

  const handleMarkAsUnread = (id: string) => {
    setMessages(messages.map((msg) => (msg.id === id ? { ...msg, status: "unread" as const } : msg)))
  }

  const handleToggleStar = (id: string) => {
    setMessages(messages.map((msg) => (msg.id === id ? { ...msg, starred: !msg.starred } : msg)))
  }

  const handleDelete = (id: string) => {
    if (!confirm("Are you sure you want to delete this message?")) return
    const message = messages.find((m) => m.id === id)
    if (message?.category === "trash") {
      setMessages(messages.filter((msg) => msg.id !== id))
      toast({
        title: "Success",
        description: "Message permanently deleted",
      })
    } else {
      setMessages(messages.map((msg) => (msg.id === id ? { ...msg, category: "trash" as const } : msg)))
      toast({
        title: "Success",
        description: "Message moved to trash",
      })
    }
    setSelectedMessage(null)
  }

  const handleArchive = (id: string) => {
    setMessages(messages.map((msg) => (msg.id === id ? { ...msg, category: "archived" as const } : msg)))
    setSelectedMessage(null)
    toast({
      title: "Success",
      description: "Message archived",
    })
  }

  const handleReply = (message: Message) => {
    setComposeData({
      to: message.from,
      cc: "",
      subject: `Re: ${message.subject}`,
      content: `\n\n---\nOn ${formatDateTime(message.date)}, ${message.from} wrote:\n${message.content}`,
      priority: "normal",
    })
    setIsComposeOpen(true)
  }

  const handleForward = (message: Message) => {
    setComposeData({
      to: "",
      cc: "",
      subject: `Fwd: ${message.subject}`,
      content: `\n\n---\nForwarded message from ${message.from}:\n${message.content}`,
      priority: "normal",
    })
    setIsComposeOpen(true)
  }

  const resetComposeForm = () => {
    setComposeData({
      to: "",
      cc: "",
      subject: "",
      content: "",
      priority: "normal",
    })
    setIsComposeOpen(false)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <RefreshCw className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Messages</h1>
          <p className="text-muted-foreground">Internal messaging system</p>
        </div>
        <Button onClick={() => setIsComposeOpen(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Compose
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card className="cursor-pointer" onClick={() => setFilterCategory("inbox")}>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Inbox className="h-4 w-4" />
              Inbox
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.inbox}</div>
            <p className="text-xs text-muted-foreground">{stats.unread} unread</p>
          </CardContent>
        </Card>
        <Card className="cursor-pointer" onClick={() => setFilterCategory("sent")}>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Send className="h-4 w-4" />
              Sent
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.sent}</div>
            <p className="text-xs text-muted-foreground">Messages</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Star className="h-4 w-4 text-yellow-500" />
              Starred
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.starred}</div>
            <p className="text-xs text-muted-foreground">Important</p>
          </CardContent>
        </Card>
        <Card className="cursor-pointer" onClick={() => setFilterCategory("draft")}>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Drafts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.drafts}</div>
            <p className="text-xs text-muted-foreground">Unsent</p>
          </CardContent>
        </Card>
        <Card className="cursor-pointer" onClick={() => setFilterCategory("trash")}>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Trash2 className="h-4 w-4" />
              Trash
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{messages.filter((m) => m.category === "trash").length}</div>
            <p className="text-xs text-muted-foreground">Deleted</p>
          </CardContent>
        </Card>
      </div>

      {isComposeOpen && (
        <Card>
          <CardHeader>
            <CardTitle>Compose Message</CardTitle>
            <CardDescription>Send a new message</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSendMessage} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="to">To *</Label>
                <Input
                  id="to"
                  type="email"
                  value={composeData.to}
                  onChange={(e) => setComposeData({ ...composeData, to: e.target.value })}
                  placeholder="recipient@example.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cc">CC</Label>
                <Input
                  id="cc"
                  type="email"
                  value={composeData.cc}
                  onChange={(e) => setComposeData({ ...composeData, cc: e.target.value })}
                  placeholder="cc@example.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject *</Label>
                <Input
                  id="subject"
                  value={composeData.subject}
                  onChange={(e) => setComposeData({ ...composeData, subject: e.target.value })}
                  placeholder="Message subject"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="priority">Priority</Label>
                <Select
                  value={composeData.priority}
                  onValueChange={(value: any) => setComposeData({ ...composeData, priority: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="normal">Normal</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="content">Message *</Label>
                <Textarea
                  id="content"
                  value={composeData.content}
                  onChange={(e) => setComposeData({ ...composeData, content: e.target.value })}
                  placeholder="Type your message here..."
                  rows={8}
                  required
                />
              </div>
              <div className="flex justify-end gap-2">
                <Button type="button" variant="outline" onClick={resetComposeForm}>
                  Cancel
                </Button>
                <Button type="submit">
                  <Send className="h-4 w-4 mr-2" />
                  Send
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Folders</CardTitle>
              <Button variant="ghost" size="sm" onClick={loadMessages}>
                <RefreshCw className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button
              variant={filterCategory === "inbox" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setFilterCategory("inbox")}
            >
              <Inbox className="h-4 w-4 mr-2" />
              Inbox
              {stats.unread > 0 && <Badge className="ml-auto">{stats.unread}</Badge>}
            </Button>
            <Button
              variant={filterCategory === "sent" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setFilterCategory("sent")}
            >
              <Send className="h-4 w-4 mr-2" />
              Sent
            </Button>
            <Button
              variant={filterCategory === "draft" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setFilterCategory("draft")}
            >
              <Mail className="h-4 w-4 mr-2" />
              Drafts
              {stats.drafts > 0 && (
                <Badge variant="secondary" className="ml-auto">
                  {stats.drafts}
                </Badge>
              )}
            </Button>
            <Button
              variant={filterCategory === "archived" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setFilterCategory("archived")}
            >
              <Archive className="h-4 w-4 mr-2" />
              Archived
            </Button>
            <Button
              variant={filterCategory === "trash" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setFilterCategory("trash")}
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Trash
            </Button>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search messages..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8"
                />
              </div>
              {filterCategory === "inbox" && (
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Messages</SelectItem>
                    <SelectItem value="unread">Unread</SelectItem>
                    <SelectItem value="read">Read</SelectItem>
                  </SelectContent>
                </Select>
              )}
            </div>
          </CardHeader>
          <CardContent>
            {selectedMessage ? (
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">{selectedMessage.subject}</h3>
                    <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                      <span>From: {selectedMessage.from}</span>
                      <span>•</span>
                      <span>{formatDateTime(selectedMessage.date)}</span>
                      {selectedMessage.priority === "high" && (
                        <>
                          <span>•</span>
                          <Badge variant="destructive">High Priority</Badge>
                        </>
                      )}
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">To: {selectedMessage.to}</div>
                    {selectedMessage.cc && (
                      <div className="text-sm text-muted-foreground">CC: {selectedMessage.cc}</div>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" onClick={() => handleToggleStar(selectedMessage.id)}>
                      <Star className={`h-4 w-4 ${selectedMessage.starred ? "fill-yellow-500 text-yellow-500" : ""}`} />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => setSelectedMessage(null)}>
                      ✕
                    </Button>
                  </div>
                </div>
                <div className="prose max-w-none py-4 border-t border-b">
                  <p className="whitespace-pre-wrap">{selectedMessage.content}</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => handleReply(selectedMessage)}>
                    <Reply className="h-4 w-4 mr-2" />
                    Reply
                  </Button>
                  <Button variant="outline" onClick={() => handleForward(selectedMessage)}>
                    <Forward className="h-4 w-4 mr-2" />
                    Forward
                  </Button>
                  {selectedMessage.category !== "archived" && (
                    <Button variant="outline" onClick={() => handleArchive(selectedMessage.id)}>
                      <Archive className="h-4 w-4 mr-2" />
                      Archive
                    </Button>
                  )}
                  <Button variant="destructive" onClick={() => handleDelete(selectedMessage.id)}>
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                {filteredMessages.length === 0 ? (
                  <div className="text-center py-12 text-muted-foreground">
                    <Mail className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>No messages found</p>
                  </div>
                ) : (
                  filteredMessages.map((message) => (
                    <div
                      key={message.id}
                      className={`p-4 border rounded-lg cursor-pointer hover:bg-accent transition-colors ${
                        message.status === "unread" ? "bg-blue-50 border-blue-200" : ""
                      }`}
                      onClick={() => {
                        setSelectedMessage(message)
                        if (message.status === "unread") {
                          handleMarkAsRead(message.id)
                        }
                      }}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="p-0 h-auto"
                              onClick={(e) => {
                                e.stopPropagation()
                                handleToggleStar(message.id)
                              }}
                            >
                              <Star
                                className={`h-4 w-4 ${message.starred ? "fill-yellow-500 text-yellow-500" : "text-muted-foreground"}`}
                              />
                            </Button>
                            <span className={`font-medium truncate ${message.status === "unread" ? "font-bold" : ""}`}>
                              {message.subject}
                            </span>
                            {message.priority === "high" && <Badge variant="destructive">High</Badge>}
                            {message.hasAttachment && <span className="text-muted-foreground">📎</span>}
                          </div>
                          <div className="text-sm text-muted-foreground mt-1">
                            {filterCategory === "sent" ? `To: ${message.to}` : `From: ${message.from}`}
                          </div>
                          <p className="text-sm text-muted-foreground mt-1 truncate">{message.content}</p>
                        </div>
                        <div className="text-xs text-muted-foreground ml-4 whitespace-nowrap">
                          {formatDateTime(message.date)}
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
