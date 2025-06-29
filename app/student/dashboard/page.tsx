"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, GraduationCap, Home, LogOut, FileText } from "lucide-react"
import Link from "next/link"

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock student data
  const studentInfo = {
    name: "Alice Johnson",
    id: "CS2021001",
    email: "alice.johnson@university.edu",
    course: "Computer Science",
    year: "3rd Year",
    semester: "6th Semester",
    cgpa: 8.7,
    avatar: "/placeholder.svg?height=64&width=64",
  }

  const enrolledCourses = [
    {
      id: 1,
      name: "Data Structures & Algorithms",
      code: "CS301",
      instructor: "Dr. Smith",
      credits: 4,
      grade: "A",
      attendance: 92,
      nextClass: "Tomorrow 10:00 AM",
    },
    {
      id: 2,
      name: "Database Management Systems",
      code: "CS302",
      instructor: "Prof. Johnson",
      credits: 3,
      grade: "A-",
      attendance: 88,
      nextClass: "Today 2:00 PM",
    },
    {
      id: 3,
      name: "Computer Networks",
      code: "CS303",
      instructor: "Dr. Brown",
      credits: 4,
      grade: "B+",
      attendance: 95,
      nextClass: "Friday 11:00 AM",
    },
    {
      id: 4,
      name: "Software Engineering",
      code: "CS304",
      instructor: "Prof. Davis",
      credits: 3,
      grade: "A",
      attendance: 90,
      nextClass: "Monday 9:00 AM",
    },
  ]

  const upcomingAssignments = [
    { id: 1, title: "DSA Assignment 3", course: "CS301", dueDate: "2024-01-15", status: "pending" },
    { id: 2, title: "Database Project", course: "CS302", dueDate: "2024-01-18", status: "in-progress" },
    { id: 3, title: "Network Lab Report", course: "CS303", dueDate: "2024-01-20", status: "pending" },
  ]

  const recentGrades = [
    { course: "CS301", assignment: "Mid-term Exam", grade: "A", points: "85/100" },
    { course: "CS302", assignment: "Quiz 2", grade: "A-", points: "38/40" },
    { course: "CS303", assignment: "Lab Assignment 4", grade: "B+", points: "42/50" },
    { course: "CS304", assignment: "Project Phase 1", grade: "A", points: "95/100" },
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
                <h1 className="text-2xl font-bold text-gray-900">Student Portal</h1>
                <p className="text-sm text-gray-600">Welcome back, {studentInfo.name}</p>
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
                <AvatarImage src={studentInfo.avatar || "/placeholder.svg"} />
                <AvatarFallback>AJ</AvatarFallback>
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
            <TabsTrigger value="grades">Grades</TabsTrigger>
            <TabsTrigger value="assignments">Assignments</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Student Info Card */}
            <Card>
              <CardHeader>
                <CardTitle>Academic Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{studentInfo.cgpa}</div>
                    <p className="text-sm text-muted-foreground">Current CGPA</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{enrolledCourses.length}</div>
                    <p className="text-sm text-muted-foreground">Enrolled Courses</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">{upcomingAssignments.length}</div>
                    <p className="text-sm text-muted-foreground">Pending Assignments</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">91%</div>
                    <p className="text-sm text-muted-foreground">Overall Attendance</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
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
                    {enrolledCourses.slice(0, 3).map((course) => (
                      <div key={course.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <div>
                          <p className="font-medium">{course.name}</p>
                          <p className="text-sm text-muted-foreground">{course.instructor}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">{course.nextClass}</p>
                          <Badge variant="outline">{course.code}</Badge>
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
                    Recent Assignments
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {upcomingAssignments.map((assignment) => (
                      <div key={assignment.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <div>
                          <p className="font-medium">{assignment.title}</p>
                          <p className="text-sm text-muted-foreground">{assignment.course}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">Due: {assignment.dueDate}</p>
                          <Badge variant={assignment.status === "pending" ? "destructive" : "default"}>
                            {assignment.status}
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
            <h2 className="text-2xl font-bold">My Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {enrolledCourses.map((course) => (
                <Card key={course.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{course.name}</CardTitle>
                        <CardDescription>
                          {course.code} - {course.instructor}
                        </CardDescription>
                      </div>
                      <Badge variant="outline">{course.credits} Credits</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Attendance</span>
                          <span>{course.attendance}%</span>
                        </div>
                        <Progress value={course.attendance} className="h-2" />
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm font-medium">Current Grade: {course.grade}</p>
                          <p className="text-xs text-muted-foreground">Next Class: {course.nextClass}</p>
                        </div>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="grades" className="space-y-6">
            <h2 className="text-2xl font-bold">Academic Performance</h2>

            <Card>
              <CardHeader>
                <CardTitle>Recent Grades</CardTitle>
                <CardDescription>Your latest assessment results</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentGrades.map((grade, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">{grade.assignment}</p>
                        <p className="text-sm text-muted-foreground">{grade.course}</p>
                      </div>
                      <div className="text-right">
                        <Badge
                          variant={
                            grade.grade.startsWith("A")
                              ? "default"
                              : grade.grade.startsWith("B")
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {grade.grade}
                        </Badge>
                        <p className="text-sm text-muted-foreground mt-1">{grade.points}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="assignments" className="space-y-6">
            <h2 className="text-2xl font-bold">Assignments & Tasks</h2>

            <Card>
              <CardHeader>
                <CardTitle>Upcoming Assignments</CardTitle>
                <CardDescription>Stay on top of your deadlines</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingAssignments.map((assignment) => (
                    <div key={assignment.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">{assignment.title}</p>
                        <p className="text-sm text-muted-foreground">{assignment.course}</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="text-sm font-medium">Due: {assignment.dueDate}</p>
                          <Badge variant={assignment.status === "pending" ? "destructive" : "default"}>
                            {assignment.status}
                          </Badge>
                        </div>
                        <Button variant="outline" size="sm">
                          {assignment.status === "pending" ? "Start" : "Continue"}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <h2 className="text-2xl font-bold">Student Profile</h2>

            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Full Name</label>
                      <p className="text-lg">{studentInfo.name}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Student ID</label>
                      <p className="text-lg">{studentInfo.id}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Email</label>
                      <p className="text-lg">{studentInfo.email}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Course</label>
                      <p className="text-lg">{studentInfo.course}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Academic Year</label>
                      <p className="text-lg">{studentInfo.year}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Current Semester</label>
                      <p className="text-lg">{studentInfo.semester}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Button>Edit Profile</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
