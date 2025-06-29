"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Calendar, CheckCircle2, Clock, Filter, Grid, List, MoreHorizontal, Plus, Search, Star } from "lucide-react"
import Link from "next/link"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function ProjectsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("all")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const projects = [
    {
      id: 1,
      name: "Mobile App Redesign",
      description: "Complete overhaul of the mobile application UI/UX with modern design principles",
      status: "in-progress",
      progress: 75,
      dueDate: "2024-02-15",
      priority: "high",
      favorite: true,
      team: [
        { name: "Alice Johnson", avatar: "/placeholder.svg?height=32&width=32&text=A", role: "Designer" },
        { name: "Bob Smith", avatar: "/placeholder.svg?height=32&width=32&text=B", role: "Developer" },
        { name: "Carol Davis", avatar: "/placeholder.svg?height=32&width=32&text=C", role: "PM" },
      ],
      tasks: { completed: 12, total: 16 },
      budget: "$45,000",
      timeSpent: "120h",
      category: "Design",
    },
    {
      id: 2,
      name: "E-commerce Platform",
      description: "Building a scalable e-commerce solution with advanced features",
      status: "planning",
      progress: 25,
      dueDate: "2024-03-20",
      priority: "medium",
      favorite: false,
      team: [
        { name: "David Wilson", avatar: "/placeholder.svg?height=32&width=32&text=D", role: "Tech Lead" },
        { name: "Emma Brown", avatar: "/placeholder.svg?height=32&width=32&text=E", role: "Developer" },
      ],
      tasks: { completed: 3, total: 12 },
      budget: "$85,000",
      timeSpent: "45h",
      category: "Development",
    },
    {
      id: 3,
      name: "Marketing Campaign",
      description: "Q1 2024 digital marketing initiative across multiple channels",
      status: "completed",
      progress: 100,
      dueDate: "2024-01-30",
      priority: "low",
      favorite: true,
      team: [
        { name: "Frank Miller", avatar: "/placeholder.svg?height=32&width=32&text=F", role: "Marketing Lead" },
        { name: "Grace Lee", avatar: "/placeholder.svg?height=32&width=32&text=G", role: "Content Creator" },
        { name: "Henry Taylor", avatar: "/placeholder.svg?height=32&width=32&text=H", role: "Analyst" },
        { name: "Iris Chen", avatar: "/placeholder.svg?height=32&width=32&text=I", role: "Designer" },
      ],
      tasks: { completed: 8, total: 8 },
      budget: "$25,000",
      timeSpent: "80h",
      category: "Marketing",
    },
    {
      id: 4,
      name: "Data Analytics Dashboard",
      description: "Advanced analytics and reporting system for business insights",
      status: "in-progress",
      progress: 45,
      dueDate: "2024-02-28",
      priority: "high",
      favorite: false,
      team: [
        { name: "Jake Wilson", avatar: "/placeholder.svg?height=32&width=32&text=J", role: "Data Analyst" },
        { name: "Kate Brown", avatar: "/placeholder.svg?height=32&width=32&text=K", role: "Backend Dev" },
      ],
      tasks: { completed: 9, total: 20 },
      budget: "$60,000",
      timeSpent: "95h",
      category: "Analytics",
    },
    {
      id: 5,
      name: "Customer Support Portal",
      description: "Self-service portal for customer support and knowledge base",
      status: "planning",
      progress: 15,
      dueDate: "2024-04-15",
      priority: "medium",
      favorite: false,
      team: [
        { name: "Liam Garcia", avatar: "/placeholder.svg?height=32&width=32&text=L", role: "Product Owner" },
        { name: "Maya Patel", avatar: "/placeholder.svg?height=32&width=32&text=M", role: "UX Designer" },
        { name: "Noah Kim", avatar: "/placeholder.svg?height=32&width=32&text=N", role: "Developer" },
      ],
      tasks: { completed: 2, total: 15 },
      budget: "$35,000",
      timeSpent: "20h",
      category: "Support",
    },
    {
      id: 6,
      name: "API Integration Suite",
      description: "Comprehensive API integration platform for third-party services",
      status: "in-progress",
      progress: 60,
      dueDate: "2024-03-10",
      priority: "high",
      favorite: true,
      team: [
        { name: "Oliver Zhang", avatar: "/placeholder.svg?height=32&width=32&text=O", role: "API Architect" },
        { name: "Sophia Rodriguez", avatar: "/placeholder.svg?height=32&width=32&text=S", role: "Backend Dev" },
      ],
      tasks: { completed: 15, total: 25 },
      budget: "$70,000",
      timeSpent: "150h",
      category: "Infrastructure",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 border-green-200"
      case "in-progress":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "planning":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200"
      case "medium":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "low":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter =
      selectedFilter === "all" ||
      project.status === selectedFilter ||
      (selectedFilter === "favorites" && project.favorite)
    return matchesSearch && matchesFilter
  })

  const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => (
    <Card className="hover:shadow-lg transition-all duration-200 border border-gray-200 hover:border-gray-300">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <CardTitle className="text-lg font-semibold text-gray-900 line-clamp-1">{project.name}</CardTitle>
              {project.favorite && <Star className="h-4 w-4 text-yellow-500 fill-current" />}
            </div>
            <CardDescription className="text-sm text-gray-600 line-clamp-2">{project.description}</CardDescription>
          </div>
          <Button variant="ghost" size="sm">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-4">
          {/* Status and Priority */}
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className={getStatusColor(project.status)}>
              {project.status.replace("-", " ")}
            </Badge>
            <Badge variant="outline" className={getPriorityColor(project.priority)}>
              {project.priority}
            </Badge>
            <Badge variant="outline" className="text-purple-700 bg-purple-50 border-purple-200">
              {project.category}
            </Badge>
          </div>

          {/* Progress */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Progress</span>
              <span className="font-medium text-gray-900">{project.progress}%</span>
            </div>
            <Progress value={project.progress} className="h-2" />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center text-gray-600">
              <CheckCircle2 className="h-4 w-4 mr-1" />
              {project.tasks.completed}/{project.tasks.total} tasks
            </div>
            <div className="flex items-center text-gray-600">
              <Calendar className="h-4 w-4 mr-1" />
              Due {new Date(project.dueDate).toLocaleDateString()}
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="h-4 w-4 mr-1" />
              {project.timeSpent}
            </div>
            <div className="text-gray-600 font-medium">{project.budget}</div>
          </div>

          {/* Team */}
          <div className="flex items-center justify-between">
            <div className="flex -space-x-2">
              {project.team.slice(0, 4).map((member, idx) => (
                <Avatar key={idx} className="w-8 h-8 border-2 border-white shadow-sm">
                  <AvatarImage src={member.avatar || "/placeholder.svg"} />
                  <AvatarFallback className="text-xs font-medium">{member.name[0]}</AvatarFallback>
                </Avatar>
              ))}
              {project.team.length > 4 && (
                <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center">
                  <span className="text-xs text-gray-600 font-medium">+{project.team.length - 4}</span>
                </div>
              )}
            </div>
            <Button variant="outline" size="sm" className="text-sm bg-transparent">
              View Project
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  const ProjectRow = ({ project }: { project: (typeof projects)[0] }) => (
    <Card className="hover:shadow-sm transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 flex-1">
            <div className="flex items-center space-x-2">
              {project.favorite && <Star className="h-4 w-4 text-yellow-500 fill-current" />}
              <h3 className="font-semibold text-gray-900">{project.name}</h3>
            </div>
            <div className="flex items-center space-x-3">
              <Badge variant="outline" className={getStatusColor(project.status)}>
                {project.status.replace("-", " ")}
              </Badge>
              <Badge variant="outline" className={getPriorityColor(project.priority)}>
                {project.priority}
              </Badge>
              <Badge variant="outline" className="text-purple-700 bg-purple-50 border-purple-200">
                {project.category}
              </Badge>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <CheckCircle2 className="h-4 w-4" />
                <span>
                  {project.tasks.completed}/{project.tasks.total}
                </span>
              </div>
            </div>

            <div className="w-24">
              <div className="flex items-center justify-between text-sm mb-1">
                <span className="text-gray-600">Progress</span>
                <span className="font-medium">{project.progress}%</span>
              </div>
              <Progress value={project.progress} className="h-2" />
            </div>

            <div className="flex -space-x-2">
              {project.team.slice(0, 3).map((member, idx) => (
                <Avatar key={idx} className="w-6 h-6 border-2 border-white">
                  <AvatarImage src={member.avatar || "/placeholder.svg"} />
                  <AvatarFallback className="text-xs">{member.name[0]}</AvatarFallback>
                </Avatar>
              ))}
              {project.team.length > 3 && (
                <div className="w-6 h-6 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center">
                  <span className="text-xs text-gray-600">+{project.team.length - 3}</span>
                </div>
              )}
            </div>

            <div className="text-sm text-gray-600">Due {new Date(project.dueDate).toLocaleDateString()}</div>

            <Button variant="ghost" size="sm">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div
          className={`transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
              <p className="text-gray-600 mt-1">Manage and track all your projects in one place</p>
            </div>
            <div className="flex items-center space-x-3 mt-4 md:mt-0">
              <div className="flex items-center space-x-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
              <Link href="/projects/new">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Plus className="h-4 w-4 mr-2" />
                  New Project
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div
          className={`flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 transition-all duration-700 delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Search projects..."
                className="pl-10 w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant={selectedFilter === "all" ? "default" : "ghost"}
              size="sm"
              onClick={() => setSelectedFilter("all")}
            >
              All ({projects.length})
            </Button>
            <Button
              variant={selectedFilter === "in-progress" ? "default" : "ghost"}
              size="sm"
              onClick={() => setSelectedFilter("in-progress")}
            >
              Active ({projects.filter((p) => p.status === "in-progress").length})
            </Button>
            <Button
              variant={selectedFilter === "completed" ? "default" : "ghost"}
              size="sm"
              onClick={() => setSelectedFilter("completed")}
            >
              Completed ({projects.filter((p) => p.status === "completed").length})
            </Button>
            <Button
              variant={selectedFilter === "favorites" ? "default" : "ghost"}
              size="sm"
              onClick={() => setSelectedFilter("favorites")}
            >
              Favorites ({projects.filter((p) => p.favorite).length})
            </Button>
          </div>
        </div>

        {/* Projects Grid/List */}
        <div
          className={`transition-all duration-700 delay-400 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          {filteredProjects.length === 0 ? (
            <Card className="p-12 text-center">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                  <Search className="h-8 w-8 text-gray-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">No projects found</h3>
                  <p className="text-gray-600">Try adjusting your search or filters</p>
                </div>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedFilter("all")
                  }}
                >
                  Clear filters
                </Button>
              </div>
            </Card>
          ) : (
            <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
              {filteredProjects.map((project) =>
                viewMode === "grid" ? (
                  <ProjectCard key={project.id} project={project} />
                ) : (
                  <ProjectRow key={project.id} project={project} />
                ),
              )}
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  )
}
