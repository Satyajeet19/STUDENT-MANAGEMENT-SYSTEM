"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Users,
  Search,
  Filter,
  MoreHorizontal,
  UserPlus,
  Grid,
  List,
  Star,
} from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function TeamPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedDepartment, setSelectedDepartment] = useState("all")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const teamMembers = [
    {
      id: 1,
      name: "Alice Johnson",
      role: "Senior Product Designer",
      department: "Design",
      email: "alice.johnson@projecthub.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
      avatar: "/placeholder.svg?height=80&width=80&text=AJ",
      status: "online",
      joinDate: "2022-03-15",
      projects: ["Mobile App Redesign", "E-commerce Platform"],
      skills: ["UI/UX Design", "Figma", "User Research", "Prototyping"],
      performance: 95,
      isManager: false,
    },
    {
      id: 2,
      name: "Bob Smith",
      role: "Frontend Developer",
      department: "Engineering",
      email: "bob.smith@projecthub.com",
      phone: "+1 (555) 234-5678",
      location: "New York, NY",
      avatar: "/placeholder.svg?height=80&width=80&text=BS",
      status: "online",
      joinDate: "2021-11-20",
      projects: ["Mobile App Redesign", "Data Analytics Dashboard"],
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
      performance: 92,
      isManager: false,
    },
    {
      id: 3,
      name: "Carol Davis",
      role: "Product Manager",
      department: "Product",
      email: "carol.davis@projecthub.com",
      phone: "+1 (555) 345-6789",
      location: "Austin, TX",
      avatar: "/placeholder.svg?height=80&width=80&text=CD",
      status: "away",
      joinDate: "2020-08-10",
      projects: ["Mobile App Redesign", "Customer Support Portal"],
      skills: ["Product Strategy", "Roadmapping", "Analytics", "Leadership"],
      performance: 98,
      isManager: true,
    },
    {
      id: 4,
      name: "David Wilson",
      role: "Backend Developer",
      department: "Engineering",
      email: "david.wilson@projecthub.com",
      phone: "+1 (555) 456-7890",
      location: "Seattle, WA",
      avatar: "/placeholder.svg?height=80&width=80&text=DW",
      status: "offline",
      joinDate: "2021-05-03",
      projects: ["E-commerce Platform", "API Integration Suite"],
      skills: ["Node.js", "Python", "PostgreSQL", "AWS"],
      performance: 90,
      isManager: false,
    },
    {
      id: 5,
      name: "Emma Brown",
      role: "Marketing Specialist",
      department: "Marketing",
      email: "emma.brown@projecthub.com",
      phone: "+1 (555) 567-8901",
      location: "Los Angeles, CA",
      avatar: "/placeholder.svg?height=80&width=80&text=EB",
      status: "online",
      joinDate: "2022-01-12",
      projects: ["Marketing Campaign"],
      skills: ["Digital Marketing", "Content Strategy", "SEO", "Analytics"],
      performance: 88,
      isManager: false,
    },
    {
      id: 6,
      name: "Frank Miller",
      role: "DevOps Engineer",
      department: "Engineering",
      email: "frank.miller@projecthub.com",
      phone: "+1 (555) 678-9012",
      location: "Denver, CO",
      avatar: "/placeholder.svg?height=80&width=80&text=FM",
      status: "online",
      joinDate: "2021-09-15",
      projects: ["API Integration Suite", "Data Analytics Dashboard"],
      skills: ["Docker", "Kubernetes", "CI/CD", "Monitoring"],
      performance: 93,
      isManager: false,
    },
  ]

  const departments = [
    { name: "all", label: "All Departments", count: teamMembers.length },
    {
      name: "Engineering",
      label: "Engineering",
      count: teamMembers.filter((m) => m.department === "Engineering").length,
    },
    { name: "Design", label: "Design", count: teamMembers.filter((m) => m.department === "Design").length },
    { name: "Product", label: "Product", count: teamMembers.filter((m) => m.department === "Product").length },
    { name: "Marketing", label: "Marketing", count: teamMembers.filter((m) => m.department === "Marketing").length },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-green-500"
      case "away":
        return "bg-yellow-500"
      case "offline":
        return "bg-gray-400"
      default:
        return "bg-gray-400"
    }
  }

  const getPerformanceColor = (performance: number) => {
    if (performance >= 95) return "text-green-600"
    if (performance >= 90) return "text-blue-600"
    if (performance >= 85) return "text-orange-600"
    return "text-red-600"
  }

  const filteredMembers = teamMembers.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.department.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesDepartment = selectedDepartment === "all" || member.department === selectedDepartment
    return matchesSearch && matchesDepartment
  })

  const TeamMemberCard = ({ member }: { member: (typeof teamMembers)[0] }) => (
    <Card className="hover:shadow-lg transition-all duration-200 border border-gray-200 hover:border-gray-300">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-4">
            <div className="relative">
              <Avatar className="w-16 h-16">
                <AvatarImage src={member.avatar || "/placeholder.svg"} />
                <AvatarFallback className="text-lg font-semibold">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div
                className={`absolute -bottom-1 -right-1 w-5 h-5 ${getStatusColor(member.status)} rounded-full border-2 border-white`}
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <CardTitle className="text-lg font-semibold text-gray-900">{member.name}</CardTitle>
                {member.isManager && <Star className="h-4 w-4 text-yellow-500 fill-current" />}
              </div>
              <CardDescription className="text-sm text-gray-600 mb-2">{member.role}</CardDescription>
              <Badge variant="outline" className="text-xs">
                {member.department}
              </Badge>
            </div>
          </div>
          <Button variant="ghost" size="sm">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-4">
          {/* Contact Info */}
          <div className="space-y-2 text-sm">
            <div className="flex items-center text-gray-600">
              <Mail className="h-4 w-4 mr-2" />
              {member.email}
            </div>
            <div className="flex items-center text-gray-600">
              <Phone className="h-4 w-4 mr-2" />
              {member.phone}
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin className="h-4 w-4 mr-2" />
              {member.location}
            </div>
            <div className="flex items-center text-gray-600">
              <Calendar className="h-4 w-4 mr-2" />
              Joined {new Date(member.joinDate).toLocaleDateString()}
            </div>
          </div>

          {/* Performance */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Performance</span>
            <span className={`font-semibold ${getPerformanceColor(member.performance)}`}>{member.performance}%</span>
          </div>

          {/* Active Projects */}
          <div>
            <div className="text-sm font-medium text-gray-900 mb-2">Active Projects</div>
            <div className="space-y-1">
              {member.projects.map((project, idx) => (
                <div key={idx} className="text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded">
                  {project}
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <div className="text-sm font-medium text-gray-900 mb-2">Skills</div>
            <div className="flex flex-wrap gap-1">
              {member.skills.slice(0, 3).map((skill, idx) => (
                <Badge key={idx} variant="secondary" className="text-xs">
                  {skill}
                </Badge>
              ))}
              {member.skills.length > 3 && (
                <Badge variant="secondary" className="text-xs">
                  +{member.skills.length - 3}
                </Badge>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex space-x-2 pt-2">
            <Button variant="outline" size="sm" className="flex-1 bg-transparent">
              Message
            </Button>
            <Button variant="outline" size="sm" className="flex-1 bg-transparent">
              View Profile
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  const TeamMemberRow = ({ member }: { member: (typeof teamMembers)[0] }) => (
    <Card className="hover:shadow-sm transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 flex-1">
            <div className="relative">
              <Avatar className="w-12 h-12">
                <AvatarImage src={member.avatar || "/placeholder.svg"} />
                <AvatarFallback>
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div
                className={`absolute -bottom-1 -right-1 w-4 h-4 ${getStatusColor(member.status)} rounded-full border-2 border-white`}
              />
            </div>

            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <h3 className="font-semibold text-gray-900">{member.name}</h3>
                {member.isManager && <Star className="h-4 w-4 text-yellow-500 fill-current" />}
              </div>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>

            <div className="flex items-center space-x-6">
              <div className="text-sm">
                <div className="font-medium text-gray-900">{member.department}</div>
                <div className="text-gray-600">{member.location}</div>
              </div>

              <div className="text-sm">
                <div className="font-medium text-gray-900">{member.projects.length} Projects</div>
                <div className={`${getPerformanceColor(member.performance)}`}>{member.performance}% Performance</div>
              </div>

              <div className="text-sm text-gray-600">{member.email}</div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              Message
            </Button>
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
              <h1 className="text-3xl font-bold text-gray-900">Team</h1>
              <p className="text-gray-600 mt-1">Meet your amazing team members and collaborate effectively</p>
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
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <UserPlus className="h-4 w-4 mr-2" />
                Invite Member
              </Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-1 md:grid-cols-4 gap-6 transition-all duration-700 delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Members</p>
                  <p className="text-2xl font-bold text-gray-900">{teamMembers.length}</p>
                </div>
                <Users className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Online Now</p>
                  <p className="text-2xl font-bold text-green-600">
                    {teamMembers.filter((m) => m.status === "online").length}
                  </p>
                </div>
                <div className="w-8 h-8 bg-green-500 rounded-full" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Departments</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {departments.filter((d) => d.name !== "all").length}
                  </p>
                </div>
                <div className="w-8 h-8 bg-purple-600 rounded-lg" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Avg Performance</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {Math.round(teamMembers.reduce((sum, m) => sum + m.performance, 0) / teamMembers.length)}%
                  </p>
                </div>
                <div className="w-8 h-8 bg-orange-500 rounded-lg" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <div
          className={`flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 transition-all duration-700 delay-400 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Search team members..."
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
            {departments.map((dept) => (
              <Button
                key={dept.name}
                variant={selectedDepartment === dept.name ? "default" : "ghost"}
                size="sm"
                onClick={() => setSelectedDepartment(dept.name)}
              >
                {dept.label} ({dept.count})
              </Button>
            ))}
          </div>
        </div>

        {/* Team Members Grid/List */}
        <div
          className={`transition-all duration-700 delay-600 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          {filteredMembers.length === 0 ? (
            <Card className="p-12 text-center">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-gray-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">No team members found</h3>
                  <p className="text-gray-600">Try adjusting your search or filters</p>
                </div>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedDepartment("all")
                  }}
                >
                  Clear filters
                </Button>
              </div>
            </Card>
          ) : (
            <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
              {filteredMembers.map((member) =>
                viewMode === "grid" ? (
                  <TeamMemberCard key={member.id} member={member} />
                ) : (
                  <TeamMemberRow key={member.id} member={member} />
                ),
              )}
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  )
}
