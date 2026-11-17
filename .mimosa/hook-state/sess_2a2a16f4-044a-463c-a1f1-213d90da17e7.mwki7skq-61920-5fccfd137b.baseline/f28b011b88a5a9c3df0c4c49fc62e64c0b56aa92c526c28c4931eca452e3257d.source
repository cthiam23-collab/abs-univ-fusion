"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { MessageSquare, Send } from "lucide-react"

export function DiscussionForums() {
  const [forums, setForums] = useState([
    { id: 1, title: "BUS101 Discussion", posts: 15 },
    { id: 2, title: "ECO201 Study Group", posts: 8 },
    { id: 3, title: "Campus Events", posts: 22 },
  ])

  const [selectedForum, setSelectedForum] = useState<(typeof forums)[number] | null>(null)
  const [newPost, setNewPost] = useState("")

  const [posts, setPosts] = useState([
    {
      id: 1,
      forumId: 1,
      author: "John Doe",
      content: "Has anyone started working on the business plan assignment?",
      timestamp: "2023-05-10 14:30",
    },
    {
      id: 2,
      forumId: 1,
      author: "Jane Smith",
      content: "Yes, I've begun researching. Would anyone like to form a study group?",
      timestamp: "2023-05-10 15:45",
    },
  ])

  const handleNewPost = () => {
    if (!selectedForum || newPost.trim() === "") return
    if (newPost.trim() !== "") {
      const newPostObj = {
        id: posts.length + 1,
        forumId: selectedForum.id,
        author: "Current User", // In a real app, this would be the logged-in user
        content: newPost,
        timestamp: new Date().toLocaleString(),
      }
      setPosts([...posts, newPostObj])
      setNewPost("")
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <MessageSquare className="mr-2 h-6 w-6" />
            Discussion Forums
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {forums.map((forum) => (
              <Card key={forum.id} className="cursor-pointer hover:bg-accent" onClick={() => setSelectedForum(forum)}>
                <CardContent className="p-4">
                  <h3 className="font-semibold">{forum.title}</h3>
                  <p className="text-sm text-muted-foreground">{forum.posts} posts</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Dialog open={selectedForum !== null} onOpenChange={() => setSelectedForum(null)}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{selectedForum?.title}</DialogTitle>
            <DialogDescription>Join the discussion and share your thoughts.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 max-h-[60vh] overflow-y-auto">
            {posts
              .filter((post) => post.forumId === selectedForum?.id)
              .map((post) => (
                <Card key={post.id}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">{post.author}</span>
                      <span className="text-sm text-muted-foreground">{post.timestamp}</span>
                    </div>
                    <p>{post.content}</p>
                  </CardContent>
                </Card>
              ))}
          </div>
          <div className="flex items-center space-x-2">
            <Textarea
              placeholder="Type your message here"
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
            />
            <Button onClick={handleNewPost}>
              <Send className="mr-2 h-4 w-4" />
              Post
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
