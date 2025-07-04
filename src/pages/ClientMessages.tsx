
import { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Send, Paperclip, ExternalLink } from "lucide-react";

const conversations = [
  {
    id: 1,
    providerName: "Foto Elena",
    service: "Fotografía",
    avatar: "📸",
    lastMessage: "Te envío la propuesta de paquetes...",
    timestamp: "Hace 10 min",
    unread: 2,
    isOnline: true,
    vendorId: 1
  },
  {
    id: 2,
    providerName: "Catering Deluxe",
    service: "Catering",
    avatar: "🍽️",
    lastMessage: "¿Confirmamos menú para 120 personas?",
    timestamp: "Hace 1 hora",
    unread: 0,
    isOnline: false,
    vendorId: 2
  },
  {
    id: 3,
    providerName: "DJ Carlos",
    service: "Música",
    avatar: "🎵",
    lastMessage: "Lista de canciones actualizada adjunta",
    timestamp: "Hace 3 horas",
    unread: 1,
    isOnline: true,
    vendorId: 3
  },
  {
    id: 4,
    providerName: "Flores & Co",
    service: "Decoración",
    avatar: "💐",
    lastMessage: "Mockup del montaje listo",
    timestamp: "Ayer",
    unread: 0,
    isOnline: false,
    vendorId: 4
  }
];

const messages = {
  1: [
    { id: 1, sender: "provider", content: "¡Hola! Te envío la propuesta de paquetes para tu boda", timestamp: "10:30" },
    { id: 2, sender: "provider", content: "Tenemos 3 opciones que se adaptan a diferentes presupuestos", timestamp: "10:31" },
    { id: 3, sender: "client", content: "Perfecto, ¿podrías enviarme más detalles del paquete Premium?", timestamp: "10:45" },
    { id: 4, sender: "provider", content: "Por supuesto! El paquete Premium incluye 8 horas de cobertura, 500 fotos editadas y álbum físico", timestamp: "10:46" }
  ],
  2: [
    { id: 1, sender: "provider", content: "Buenas tardes, tengo el menú preparado para 120 personas", timestamp: "14:30" },
    { id: 2, sender: "provider", content: "¿Confirmamos los detalles que hablamos la semana pasada?", timestamp: "14:31" },
    { id: 3, sender: "client", content: "Sí, perfecto. ¿Podemos incluir opciones vegetarianas?", timestamp: "15:00" }
  ],
  3: [
    { id: 1, sender: "provider", content: "He actualizado la lista de canciones que me enviaste", timestamp: "11:00" },
    { id: 2, sender: "provider", content: "Añadí algunas sugerencias basadas en tu estilo musical", timestamp: "11:01" },
    { id: 3, sender: "client", content: "¡Genial! ¿Cuándo podemos hacer una prueba de sonido?", timestamp: "11:30" }
  ],
  4: [
    { id: 1, sender: "provider", content: "El mockup del montaje floral está listo", timestamp: "16:00" },
    { id: 2, sender: "client", content: "¿Podrías enviármelo? Estoy muy emocionada por verlo", timestamp: "16:15" },
    { id: 3, sender: "provider", content: "Te lo envío ahora mismo por email", timestamp: "16:16" }
  ]
};

const ClientMessages = () => {
  const [selectedConversation, setSelectedConversation] = useState(1);
  const [newMessage, setNewMessage] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const currentConversation = conversations.find(c => c.id === selectedConversation);
  const currentMessages = messages[selectedConversation] || [];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Simulate message sending
      console.log("Sending message:", newMessage);
      setNewMessage("");
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-background to-secondary/30">
        <AppSidebar userType="client" />
        
        <main className="flex-1">
          <DashboardHeader />

          <div className="p-6">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-foreground mb-2">Mensajes</h1>
              <p className="text-muted-foreground">Comunícate con tus proveedores</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 h-[600px]">
              {/* Conversations Sidebar */}
              <div className={`lg:col-span-3 ${!isSidebarOpen ? 'hidden lg:block' : ''}`}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">Conversaciones</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="space-y-1">
                      {conversations.map((conversation) => (
                        <div
                          key={conversation.id}
                          className={`p-4 cursor-pointer hover:bg-secondary transition-colors ${
                            selectedConversation === conversation.id ? 'bg-secondary' : ''
                          }`}
                          onClick={() => setSelectedConversation(conversation.id)}
                        >
                          <div className="flex items-center space-x-3">
                            <div className="relative">
                              <Avatar>
                                <AvatarFallback className="text-lg">{conversation.avatar}</AvatarFallback>
                              </Avatar>
                              {conversation.isOnline && (
                                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <p className="font-medium truncate">{conversation.providerName}</p>
                                {conversation.unread > 0 && (
                                  <Badge variant="destructive" className="text-xs">
                                    {conversation.unread}
                                  </Badge>
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground truncate">{conversation.lastMessage}</p>
                              <p className="text-xs text-muted-foreground">{conversation.timestamp}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Chat Area */}
              <div className="lg:col-span-7">
                <Card className="h-full flex flex-col">
                  {/* Chat Header */}
                  <CardHeader className="border-b">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarFallback className="text-lg">{currentConversation?.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">{currentConversation?.providerName}</h3>
                          <p className="text-sm text-muted-foreground">{currentConversation?.service}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <Link to={`/vendors/${currentConversation?.vendorId}`}>
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Ver Detalles
                        </Link>
                      </Button>
                    </div>
                  </CardHeader>

                  {/* Messages */}
                  <CardContent className="flex-1 p-4 overflow-y-auto">
                    <div className="space-y-4">
                      {currentMessages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex ${message.sender === 'client' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div
                            className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                              message.sender === 'client'
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-secondary text-secondary-foreground'
                            }`}
                          >
                            <p className="text-sm">{message.content}</p>
                            <p className="text-xs opacity-70 mt-1">{message.timestamp}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>

                  {/* Message Input */}
                  <div className="p-4 border-t">
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
                      <Button onClick={handleSendMessage}>
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default ClientMessages;
