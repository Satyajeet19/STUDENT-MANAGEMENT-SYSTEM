"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import {
  BookOpen,
  Users,
  Calendar,
  GraduationCap,
  Home,
  LogOut,
  Plus,
  Search,
  Edit,
  FileText,
  Clock,
} from "lucide-react"
import Link from "next/link"

export default function TeacherDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock teacher data
  const teacherInfo = {
    name: "Dr. Sarah Smith",
    id: "T001",
    email: "sarah.smith@university.edu",
    department: "Computer Science",
    designation: "Associate Professor",
  }

  const teachingCourses = [
    {
      id: 1,
      name: "Data Structures & Algorithms",
      code: "CS301",
      students: 45,
      semester: "6th",
      schedule: "Mon, Wed, Fri - 10:00 AM",
      nextClass: "Tomorrow 10:00 AM",
    },
    {
      id: 2,
      name: "Advanced Programming",
      code: "CS401",
      students: 38,
      semester: "8th",
      schedule: "Tue, Thu - 2:00 PM",
      nextClass: "Thursday 2:00 PM",
    },
    {
      id: 3,
      name: "Computer Graphics",
      code: "CS501",
      students: 32,
      semester: "10th",
      schedule: "Mon, Wed - 11:00 AM",
      nextClass: "Monday 11:00 AM",
    },
  ]

  const recentStudents = [
    { id: 1, name: "Alice Johnson", course: "CS301", grade: "A", attendance: 92 },
    { id: 2, name: "Bob Smith", course: "CS401", grade: "B+", attendance: 88 },
    { id: 3, name: "Carol Davis", course: "CS301", grade: "A-", attendance: 95 },
    { id: 4, name: "David Wilson", course: "CS501", grade: "B", attendance: 85 },
  ]

  const pendingTasks = [
    { id: 1, task: "Grade CS301 Mid-term Exams", course: "CS301", dueDate: "2024-01-15", priority: "high" },
    { id: 2, task: "Prepare CS401 Lab Materials", course: "CS401", dueDate: "2024-01-16", priority: "medium" },
    { id: 3, task: "Review CS501 Project Proposals", course: "CS501", dueDate: "2024-01-18", priority: "low" },
  ]

  const upcomingClasses = [
    { course: "CS301", topic: "Binary Search Trees", time: "Tomorrow 10:00 AM", room: "Lab 101" },
    { course: "CS401", topic: "Object-Oriented Design Patterns", time: "Thursday 2:00 PM", room: "Room 205" },
    { course: "CS501", topic: "3D Transformations", time: "Friday 11:00 AM", room: "Lab 301" },
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
                <h1 className="text-2xl font-bold text-gray-900">Teacher Portal</h1>
                <p className="text-sm text-gray-600">Welcome back, {teacherInfo.name}</p>
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
                <AvatarFallback>SS</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="grades">Grading</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Courses</CardTitle>
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{teachingCourses.length}</div>
                  <p className="text-xs text-muted-foreground">Active this semester</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Students</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {teachingCourses.reduce((sum, course) => sum + course.students, 0)}
                  </div>
                  <p className="text-xs text-muted-foreground">Across all courses</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pending Tasks</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{pendingTasks.length}</div>
                  <p className="text-xs text-muted-foreground">Need attention</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Next Class</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-lg font-bold">Tomorrow</div>
                  <p className="text-xs text-muted-foreground">CS301 at 10:00 AM</p>
                </CardContent>
              </Card>
            </div>

            {/* Quick Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    Upcoming Classes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {upcomingClasses.map((class_, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <div>
                          <p className="font-medium">{class_.topic}</p>
                          <p className="text-sm text-muted-foreground">
                            {class_.course} - {class_.room}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">{class_.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-5 w-5 mr-2" />
                    Pending Tasks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {pendingTasks.map((task) => (
                      <div key={task.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <div>
                          <p className="font-medium">{task.task}</p>
                          <p className="text-sm text-muted-foreground">{task.course}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">Due: {task.dueDate}</p>
                          <Badge
                            variant={
                              task.priority === "high"
                                ? "destructive"
                                : task.priority === "medium"
                                  ? "default"
                                  : "secondary"
                            }
                          >
                            {task.priority}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="courses" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">My Courses</h2>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Course Material
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teachingCourses.map((course) => (
                <Card key={course.id}>
                  <CardHeader>
                    <CardTitle className="text-lg">{course.name}</CardTitle>
                    <CardDescription>
                      {course.code} - {course.semester} Semester
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm">Students Enrolled:</span>
                        <Badge variant="outline">{course.students}</Badge>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Schedule:</p>
                        <p className="text-sm text-muted-foreground">{course.schedule}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Next Class:</p>
                        <p className="text-sm text-muted-foreground">{course.nextClass}</p>
                      </div>
                      <div className="flex space-x-2 mt-4">
                        <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                          View Details
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="students" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Student Management</h2>
              <div className="flex items-center space-x-2">
                <Search className="h-4 w-4" />
                <Input placeholder="Search students..." className="max-w-sm" />
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recent Student Activity</CardTitle>
                <CardDescription>Students from your courses</CardDescription>
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
                          <p className="text-sm text-muted-foreground">{student.course}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="text-sm font-medium">Grade: {student.grade}</p>
                          <p className="text-sm text-muted-foreground">Attendance: {student.attendance}%</p>
                        </div>
                        <Button variant="outline" size="sm">
                          View Profile
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="grades" className="space-y-6">
            <h2 className="text-2xl font-bold">Grading & Assessment</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Pending Grading</CardTitle>
                  <CardDescription>Assignments waiting for evaluation</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                      <div>
                        <p className="font-medium">CS301 Mid-term Exam</p>
                        <p className="text-sm text-muted-foreground">45 submissions</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Grade Now
                      </Button>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                      <div>
                        <p className="font-medium">CS401 Assignment 3</p>
                        <p className="text-sm text-muted-foreground">38 submissions</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Grade Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Grade Distribution</CardTitle>
                  <CardDescription>Current semester overview</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-muted rounded">
                    <p className="text-muted-foreground">Grade distribution chart would be displayed here</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="schedule" className="space-y-6">
            <h2 className="text-2xl font-bold">Class Schedule</h2>

            <Card>
              <CardHeader>
                <CardTitle>Weekly Schedule</CardTitle>
                <CardDescription>Your teaching schedule for this week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day) => (
                    <div key={day} className="space-y-2">
                      <h3 className="font-semibold text-center">{day}</h3>
                      <div className="space-y-2">
                        {day === "Monday" && (
                          <>
                            <div className="p-2 bg-blue-100 rounded text-sm">
                              <p className="font-medium">CS301</p>
                              <p>10:00 - 11:00 AM</p>
                            </div>
                            <div className="p-2 bg-green-100 rounded text-sm">
                              <p className="font-medium">CS501</p>
                              <p>11:00 - 12:00 PM</p>
                            </div>
                          </>
                        )}
                        {day === "Tuesday" && (
                          <div className="p-2 bg-purple-100 rounded text-sm">
                            <p className="font-medium">CS401</p>
                            <p>2:00 - 3:00 PM</p>
                          </div>
                        )}
                        {day === "Wednesday" && (
                          <>
                            <div className="p-2 bg-blue-100 rounded text-sm">
                              <p className="font-medium">CS301</p>
                              <p>10:00 - 11:00 AM</p>
                            </div>
                            <div className="p-2 bg-green-100 rounded text-sm">
                              <p className="font-medium">CS501</p>
                              <p>11:00 - 12:00 PM</p>
                            </div>
                          </>
                        )}
                        {day === "Thursday" && (
                          <div className="p-2 bg-purple-100 rounded text-sm">
                            <p className="font-medium">CS401</p>
                            <p>2:00 - 3:00 PM</p>
                          </div>
                        )}
                        {day === "Friday" && (
                          <div className="p-2 bg-blue-100 rounded text-sm">
                            <p className="font-medium">CS301</p>
                            <p>10:00 - 11:00 AM</p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
