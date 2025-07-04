
import { useState } from "react";
import { AppSidebar } from "@/components/AppSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Send, Paperclip, User, Eye } from "lucide-react";

const conversations = [
  {
    id: 1,
    client: "María & José",
    avatar: "MJ",
    lastMessage: "¿Podemos cambiar la hora de la sesión?",
    timestamp: "Hace 2 horas",
    unread: 2,
    status: "online"
  },
  {
    id: 2,
    client: "Ana & Carlos",
    avatar: "AC",
    lastMessage: "Las fotos de la prueba están perfectas!",
    timestamp: "Ayer",
    unread: 0,
    status: "offline"
  },
  {
    id: 3,
    client: "Elena & David",
    avatar: "ED",
    lastMessage: "¿Incluye el paquete el álbum físico?",
    timestamp: "Hace 3 días",
    unread: 1,
    status: "away"
  },
  {
    id: 4,
    client: "Sofia & Miguel",
    avatar: "SM",
    lastMessage: "Perfecto, confirmamos la fecha",
    timestamp: "Hace 1 semana",
    unread: 0,
    status: "offline"
  }
];

const messages = [
  {
    id: 1,
    sender: "client",
    content: "Hola! ¿Podríamos cambiar la hora de la sesión del viernes?",
    timestamp: "14:30"
  },
  {
    id: 2,
    sender: "provider",
    content: "¡Hola María! Por supuesto, ¿qué hora te vendría mejor?",
    timestamp: "14:35"
  },
  {
    id: 3,
    sender: "client",
    content: "¿Sería posible a las 16:00h en lugar de las 10:00h?",
    timestamp: "14:40"
  },
  {
    id: 4,
    sender: "provider",
    content: "Perfecto, lo cambio en mi agenda. Nos vemos el viernes a las 16:00h en el parque como habíamos quedado.",
    timestamp: "14:42"
  },
  {
    id: 5,
    sender: "client",
    content: "¡Genial! Muchas gracias por la flexibilidad 😊",
    timestamp: "14:45"
  }
];

const ProviderMessages = () => {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [newMessage, setNewMessage] = useState("");

  const getStatusIndicator = (status: string) => {
    switch (status) {
      case "online":
        return <div className="w-3 h-3 bg-green-500 rounded-full" />;
      case "away":
        return <div className="w-3 h-3 bg-yellow-500 rounded-full" />;
      default:
        return <div className="w-3 h-3 bg-gray-300 rounded-full" />;
    }
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Simulate sending message
      console.log("Sending message:", newMessage);
      setNewMessage("");
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-background to-secondary/20">
        <AppSidebar userType="provider" />
        <SidebarInset className="flex-1">
          <DashboardHeader />
          
          <main className="flex-1 p-6">
            <div className="max-w-7xl mx-auto">
              {/* Header */}
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-foreground mb-2">Mensajes</h1>
                <p className="text-muted-foreground">Comunícate con tus clientes</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-200px)]">
                {/* Conversations List */}
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg">Conversaciones</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="space-y-1 max-h-[calc(100vh-300px)] overflow-y-auto">
                      {conversations.map((conversation) => (
                        <div
                          key={conversation.id}
                          onClick={() => setSelectedConversation(conversation)}
                          className={`p-4 cursor-pointer border-b hover:bg-secondary/10 transition-colors ${
                            selectedConversation.id === conversation.id ? 'bg-secondary/20' : ''
                          }`}
                        >
                          <div className="flex items-start space-x-3">
                            <div className="relative">
                              <Avatar className="h-10 w-10">
                                <AvatarFallback className="bg-primary/10 text-primary">
                                  {conversation.avatar}
                                </AvatarFallback>
                              </Avatar>
                              <div className="absolute -bottom-1 -right-1">
                                {getStatusIndicator(conversation.status)}
                              </div>
                            </div>
                            
                            <div className="flex-1 min-w-0">
                              <div className="flex justify-between items-start">
                                <h4 className="font-medium text-sm truncate">
                                  {conversation.client}
                                </h4>
                                <div className="flex items-center space-x-2">
                                  <span className="text-xs text-muted-foreground">
                                    {conversation.timestamp}
                                  </span>
                                  {conversation.unread > 0 && (
                                    <Badge className="bg-primary text-primary-foreground h-5 w-5 p-0 text-xs flex items-center justify-center">
                                      {conversation.unread}
                                    </Badge>
                                  )}
                                </div>
                              </div>
                              <p className="text-sm text-muted-foreground truncate mt-1">
                                {conversation.lastMessage}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Chat Area */}
                <div className="lg:col-span-2">
                  <Card className="shadow-lg h-full flex flex-col">
                    {/* Chat Header */}
                    <CardHeader className="border-b">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                          <div className="relative">
                            <Avatar className="h-10 w-10">
                              <AvatarFallback className="bg-primary/10 text-primary">
                                {selectedConversation.avatar}
                              </AvatarFallback>
                            </Avatar>
                            <div className="absolute -bottom-1 -right-1">
                              {getStatusIndicator(selectedConversation.status)}
                            </div>
                          </div>
                          <div>
                            <h3 className="font-semibold">{selectedConversation.client}</h3>
                            <p className="text-sm text-muted-foreground">
                              {selectedConversation.status === "online" ? "En línea" : 
                               selectedConversation.status === "away" ? "Ausente" : "Desconectado"}
                            </p>
                          </div>
                        </div>
                        
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-2" />
                          Ver Perfil
                        </Button>
                      </div>
                    </CardHeader>

                    {/* Messages */}
                    <CardContent className="flex-1 p-4 overflow-y-auto">
                      <div className="space-y-4">
                        {messages.map((message) => (
                          <div
                            key={message.id}
                            className={`flex ${message.sender === 'provider' ? 'justify-end' : 'justify-start'}`}
                          >
                            <div
                              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                                message.sender === 'provider'
                                  ? 'bg-primary text-primary-foreground'
                                  : 'bg-secondary/50'
                              }`}
                            >
                              <p className="text-sm">{message.content}</p>
                              <p className={`text-xs mt-1 ${
                                message.sender === 'provider' 
                                  ? 'text-primary-foreground/70' 
                                  : 'text-muted-foreground'
                              }`}>
                                {message.timestamp}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>

                    {/* Message Input */}
                    <div className="border-t p-4">
                      <div className="flex space-x-2">
                        <Button variant="outline" size="icon">
                          <Paperclip className="h-4 w-4" />
                        </Button>
                        <Input
                          placeholder="Escribe tu mensaje..."
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                          className="flex-1"
                        />
                        <Button onClick={handleSendMessage} className="bg-primary hover:bg-primary/90">
                          <Send className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default ProviderMessages;
