"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Users, BookOpen, GraduationCap, BarChart3, Plus, Search, Edit, Trash2, LogOut, Home } from "lucide-react"
import Link from "next/link"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock data
  const stats = {
    totalStudents: 1247,
    totalTeachers: 89,
    totalCourses: 156,
    activeEnrollments: 3421,
  }

  const recentStudents = [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice@example.com",
      course: "Computer Science",
      year: "3rd Year",
      status: "Active",
    },
    { id: 2, name: "Bob Smith", email: "bob@example.com", course: "Electronics", year: "2nd Year", status: "Active" },
    {
      id: 3,
      name: "Carol Davis",
      email: "carol@example.com",
      course: "Mechanical",
      year: "4th Year",
      status: "Inactive",
    },
    { id: 4, name: "David Wilson", email: "david@example.com", course: "Civil", year: "1st Year", status: "Active" },
  ]

  const courses = [
    { id: 1, name: "Data Structures", code: "CS201", teacher: "Dr. Smith", students: 45, credits: 4 },
    { id: 2, name: "Digital Electronics", code: "EC301", teacher: "Prof. Johnson", students: 38, credits: 3 },
    { id: 3, name: "Thermodynamics", code: "ME401", teacher: "Dr. Brown", students: 52, credits: 4 },
    { id: 4, name: "Structural Analysis", code: "CE501", teacher: "Prof. Davis", students: 29, credits: 3 },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-sm text-gray-600">Student Information Management System</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="outline" size="sm">
                  <Home className="h-4 w-4 mr-2" />
                  Home
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" size="sm">
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </Link>
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Students</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalStudents}</div>
                  <p className="text-xs text-muted-foreground">+12% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Teachers</CardTitle>
                  <GraduationCap className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalTeachers}</div>
                  <p className="text-xs text-muted-foreground">+3% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Courses</CardTitle>
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalCourses}</div>
                  <p className="text-xs text-muted-foreground">+8% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Enrollments</CardTitle>
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.activeEnrollments}</div>
                  <p className="text-xs text-muted-foreground">+15% from last month</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Student Registrations</CardTitle>
                  <CardDescription>Latest students added to the system</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentStudents.slice(0, 3).map((student) => (
                      <div key={student.id} className="flex items-center space-x-4">
                        <Avatar className="h-9 w-9">
                          <AvatarFallback>
                            {student.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium">{student.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {student.course} - {student.year}
                          </p>
                        </div>
                        <Badge variant={student.status === "Active" ? "default" : "secondary"}>{student.status}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Popular Courses</CardTitle>
                  <CardDescription>Courses with highest enrollment</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {courses.slice(0, 3).map((course) => (
                      <div key={course.id} className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium">{course.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {course.code} - {course.teacher}
                          </p>
                        </div>
                        <Badge variant="outline">{course.students} students</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="students" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Student Management</h2>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Student
              </Button>
            </div>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Search className="h-4 w-4" />
                  <Input placeholder="Search students..." className="max-w-sm" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentStudents.map((student) => (
                    <div key={student.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarFallback>
                            {student.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{student.name}</p>
                          <p className="text-sm text-muted-foreground">{student.email}</p>
                          <p className="text-sm text-muted-foreground">
                            {student.course} - {student.year}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={student.status === "Active" ? "default" : "secondary"}>{student.status}</Badge>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="courses" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Course Management</h2>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Course
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <Card key={course.id}>
                  <CardHeader>
                    <CardTitle className="text-lg">{course.name}</CardTitle>
                    <CardDescription>{course.code}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm">
                        <strong>Instructor:</strong> {course.teacher}
                      </p>
                      <p className="text-sm">
                        <strong>Students:</strong> {course.students}
                      </p>
                      <p className="text-sm">
                        <strong>Credits:</strong> {course.credits}
                      </p>
                    </div>
                    <div className="flex space-x-2 mt-4">
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4 mr-1" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <h2 className="text-2xl font-bold">Reports & Analytics</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Enrollment Trends</CardTitle>
                  <CardDescription>Student enrollment over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-muted rounded">
                    <p className="text-muted-foreground">
                      Chart placeholder - Enrollment trends would be displayed here
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Course Performance</CardTitle>
                  <CardDescription>Average grades by course</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-muted rounded">
                    <p className="text-muted-foreground">
                      Chart placeholder - Course performance metrics would be displayed here
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
