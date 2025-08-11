import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Database, Users, FileText, Settings } from "lucide-react";
import { useBlogPosts, useServices, useTestimonials } from "@/hooks/useStrapi";

export default function StrapiAdmin() {
  const [activeTab, setActiveTab] = useState("overview");
  const { data: blogPosts, isLoading: blogLoading } = useBlogPosts();
  const { data: services, isLoading: servicesLoading } = useServices();
  const { data: testimonials, isLoading: testimonialsLoading } = useTestimonials();

  const handleOpenStrapi = () => {
    window.open('http://localhost:1337/admin', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">
                Strapi CMS Dashboard
              </h1>
              <p className="text-gray-400">
                Manage your BlockMind Labs content with Strapi headless CMS
              </p>
            </div>
            <Button onClick={handleOpenStrapi} className="font-nav">
              <ExternalLink className="w-4 h-4 mr-2" />
              Open Strapi Admin
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Blog Posts</p>
                    <p className="text-2xl font-bold text-white">
                      {blogLoading ? "..." : blogPosts?.length || 0}
                    </p>
                  </div>
                  <FileText className="w-8 h-8 text-blue-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Services</p>
                    <p className="text-2xl font-bold text-white">
                      {servicesLoading ? "..." : services?.length || 0}
                    </p>
                  </div>
                  <Database className="w-8 h-8 text-green-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Testimonials</p>
                    <p className="text-2xl font-bold text-white">
                      {testimonialsLoading ? "..." : testimonials?.length || 0}
                    </p>
                  </div>
                  <Users className="w-8 h-8 text-purple-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">CMS Status</p>
                    <p className="text-sm font-semibold text-green-400">
                      Ready
                    </p>
                  </div>
                  <Settings className="w-8 h-8 text-yellow-400" />
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-gray-800 font-nav">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="setup">Setup Guide</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-gray-800/30 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Recent Blog Posts</CardTitle>
                  <CardDescription>Latest content from Strapi CMS</CardDescription>
                </CardHeader>
                <CardContent>
                  {blogLoading ? (
                    <p className="text-gray-400">Loading blog posts...</p>
                  ) : blogPosts && blogPosts.length > 0 ? (
                    <div className="space-y-3">
                      {blogPosts.slice(0, 3).map((post) => (
                        <div key={post.id} className="flex items-start gap-3 p-3 rounded-lg bg-gray-700/30">
                          <div className="flex-1">
                            <h4 className="font-medium text-white text-sm">{post.title}</h4>
                            <p className="text-xs text-gray-400 mt-1">{post.excerpt}</p>
                            <div className="flex items-center gap-2 mt-2">
                              <Badge variant="secondary" className="text-xs">
                                {post.author}
                              </Badge>
                              {post.tags && post.tags.map((tag) => (
                                <Badge key={tag} variant="outline" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-400">No blog posts found. Create some in Strapi!</p>
                  )}
                </CardContent>
              </Card>

              <Card className="bg-gray-800/30 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Services Overview</CardTitle>
                  <CardDescription>Your AI infrastructure services</CardDescription>
                </CardHeader>
                <CardContent>
                  {servicesLoading ? (
                    <p className="text-gray-400">Loading services...</p>
                  ) : services && services.length > 0 ? (
                    <div className="space-y-3">
                      {services.slice(0, 4).map((service) => (
                        <div key={service.id} className="flex items-center gap-3 p-3 rounded-lg bg-gray-700/30">
                          <div className="flex-1">
                            <h4 className="font-medium text-white text-sm">{service.title}</h4>
                            <p className="text-xs text-gray-400 mt-1 line-clamp-2">{service.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-400">No services found. Add services in Strapi!</p>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="content" className="space-y-6">
            <Card className="bg-gray-800/30 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Content Management</CardTitle>
                <CardDescription>
                  Manage your website content through Strapi CMS
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  onClick={handleOpenStrapi} 
                  className="w-full font-nav"
                  variant="outline"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Open Strapi Admin Panel
                </Button>
                <div className="text-sm text-gray-400 space-y-2">
                  <p>• Create and edit blog posts</p>
                  <p>• Manage services and features</p>
                  <p>• Update testimonials</p>
                  <p>• Configure page content</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="setup" className="space-y-6">
            <Card className="bg-gray-800/30 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Strapi Setup Guide</CardTitle>
                <CardDescription>
                  How to get started with your headless CMS
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4 text-sm text-gray-300">
                  <div className="p-4 rounded-lg bg-gray-700/30">
                    <h4 className="font-semibold text-white mb-2">1. Start Strapi Server</h4>
                    <code className="text-blue-400 bg-gray-900 px-2 py-1 rounded text-xs">
                      cd strapi-cms/backend && npm run develop
                    </code>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-gray-700/30">
                    <h4 className="font-semibold text-white mb-2">2. Create Admin User</h4>
                    <p>Visit http://localhost:1337/admin to create your first admin user</p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-gray-700/30">
                    <h4 className="font-semibold text-white mb-2">3. Create Content Types</h4>
                    <p>Set up Blog Posts, Services, and Testimonials collection types</p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-gray-700/30">
                    <h4 className="font-semibold text-white mb-2">4. Configure Permissions</h4>
                    <p>Enable public read access for frontend consumption</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}