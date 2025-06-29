"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  BookOpen,
  Calendar,
  Award,
  Clock,
  Target,
  Plus,
  ArrowRight,
  Star,
  Users,
  AlertCircle,
  BookMarked,
} from "lucide-react"
import Link from "next/link"
import { StudentLayout } from "@/components/student-layout"

export default function Dashboard() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const studentInfo = {
    name: "Alex Johnson",
    studentId: "STU2024001",
    program: "Computer Science",
    year: "3rd Year",
    semester: "Fall 2024",
    gpa: 3.85,
    avatar: "/placeholder.svg?height=80&width=80&text=AJ",
  }

  const currentCourses = [
    {
      id: 1,
      name: "Data Structures & Algorithms",
      code: "CS301",
      instructor: "Dr. Sarah Wilson",
      credits: 4,
      progress: 75,
      grade: "A-",
      nextClass: "Tomorrow 10:00 AM",
      color: "from-blue-400 to-blue-600",
      assignments: 3,
      attendance: 92,
    },
    {
      id: 2,
      name: "Database Management Systems",
      code: "CS302",
      instructor: "Prof. Michael Chen",
      credits: 3,
      progress: 60,
      grade: "B+",
      nextClass: "Today 2:00 PM",
      color: "from-green-400 to-green-600",
      assignments: 2,
      attendance: 88,
    },
    {
      id: 3,
      name: "Software Engineering",
      code: "CS303",
      instructor: "Dr. Emily Rodriguez",
      credits: 4,
      progress: 85,
      grade: "A",
      nextClass: "Friday 11:00 AM",
      color: "from-purple-400 to-purple-600",
      assignments: 1,
      attendance: 95,
    },
    {
      id: 4,
      name: "Computer Networks",
      code: "CS304",
      instructor: "Prof. David Kim",
      credits: 3,
      progress: 45,
      grade: "B",
      nextClass: "Monday 9:00 AM",
      color: "from-orange-400 to-orange-600",
      assignments: 4,
      attendance: 85,
    },
  ]

  const upcomingAssignments = [
    {
      id: 1,
      title: "Binary Search Tree Implementation",
      course: "CS301",
      dueDate: "2024-02-15",
      priority: "high",
      status: "pending",
    },
    {
      id: 2,
      title: "Database Design Project",
      course: "CS302",
      dueDate: "2024-02-18",
      priority: "medium",
      status: "in-progress",
    },
    {
      id: 3,
      title: "Software Requirements Document",
      course: "CS303",
      dueDate: "2024-02-20",
      priority: "low",
      status: "pending",
    },
  ]

  const recentGrades = [
    { course: "CS301", assignment: "Midterm Exam", grade: "A-", points: "87/100", date: "2024-01-28" },
    { course: "CS302", assignment: "SQL Query Assignment", grade: "A", points: "95/100", date: "2024-01-25" },
    { course: "CS303", assignment: "UML Diagrams", grade: "B+", points: "88/100", date: "2024-01-22" },
    { course: "CS304", assignment: "Network Protocol Analysis", grade: "A-", points: "90/100", date: "2024-01-20" },
  ]

  const quickStats = [
    {
      title: "Current GPA",
      value: studentInfo.gpa.toFixed(2),
      change: "+0.12",
      icon: <Award className="h-5 w-5" />,
      color: "from-yellow-400 to-orange-500",
    },
    {
      title: "Enrolled Courses",
      value: currentCourses.length.toString(),
      change: "+1",
      icon: <BookOpen className="h-5 w-5" />,
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "Pending Assignments",
      value: upcomingAssignments.filter((a) => a.status === "pending").length.toString(),
      change: "-2",
      icon: <Clock className="h-5 w-5" />,
      color: "from-red-400 to-red-600",
    },
    {
      title: "Average Attendance",
      value: "90%",
      change: "+5%",
      icon: <Target className="h-5 w-5" />,
      color: "from-green-400 to-green-600",
    },
  ]

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-700 border-red-200"
      case "medium":
        return "bg-yellow-100 text-yellow-700 border-yellow-200"
      case "low":
        return "bg-green-100 text-green-700 border-green-200"
      default:
        return "bg-gray-100 text-gray-700 border-gray-200"
    }
  }

  return (
    <StudentLayout>
      <div className="space-y-8">
        {/* Welcome Header */}
        <div
          className={`transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold">Welcome back, {studentInfo.name}! 👋</h1>
                  <p className="text-white/90 text-lg">
                    Ready to continue your learning journey? You have {upcomingAssignments.length} assignments due this
                    week.
                  </p>
                  <div className="flex items-center space-x-6 text-sm text-white/80 mt-4">
                    <div className="flex items-center space-x-2">
                      <BookMarked className="h-4 w-4" />
                      <span>{studentInfo.program}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{studentInfo.semester}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="h-4 w-4" />
                      <span>GPA: {studentInfo.gpa}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 md:mt-0">
                  <Avatar className="w-20 h-20 border-4 border-white/20">
                    <AvatarImage src={studentInfo.avatar || "/placeholder.svg"} />
                    <AvatarFallback className="text-2xl font-bold bg-white/20">
                      {studentInfo.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          {quickStats.map((stat, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-green-600 font-medium mt-1">{stat.change} from last month</p>
                  </div>
                  <div
                    className={`w-14 h-14 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center text-white transform rotate-3`}
                  >
                    {stat.icon}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-3 gap-8 transition-all duration-700 delay-400 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          {/* Current Courses */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center text-xl">
                      <BookOpen className="h-6 w-6 mr-3 text-blue-600" />
                      Current Courses
                    </CardTitle>
                    <CardDescription className="mt-1">Track your progress across all enrolled courses</CardDescription>
                  </div>
                  <Link href="/courses">
                    <Button variant="outline" size="sm" className="bg-transparent">
                      View All
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  {currentCourses.map((course) => (
                    <div
                      key={course.id}
                      className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <div className={`w-3 h-3 bg-gradient-to-r ${course.color} rounded-full`} />
                            <h3 className="font-bold text-gray-900 text-lg">{course.name}</h3>
                            <Badge variant="outline" className="text-xs">
                              {course.code}
                            </Badge>
                          </div>
                          <p className="text-gray-600 mb-1">{course.instructor}</p>
                          <p className="text-sm text-gray-500">{course.credits} Credits</p>
                        </div>
                        <div className="text-right">
                          <Badge className={`bg-gradient-to-r ${course.color} text-white border-0 mb-2`}>
                            Grade: {course.grade}
                          </Badge>
                          <p className="text-sm text-gray-600">{course.nextClass}</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <div className="flex items-center justify-between text-sm mb-2">
                            <span className="text-gray-600">Course Progress</span>
                            <span className="font-semibold text-gray-900">{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>

                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4 text-gray-400" />
                              <span className="text-gray-600">{course.assignments} assignments</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Users className="h-4 w-4 text-gray-400" />
                              <span className="text-gray-600">{course.attendance}% attendance</span>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Assignments */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <AlertCircle className="h-5 w-5 mr-2 text-orange-600" />
                  Upcoming Assignments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingAssignments.map((assignment) => (
                    <div key={assignment.id} className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-gray-900 text-sm leading-tight">{assignment.title}</h4>
                        <Badge variant="outline" className={getPriorityColor(assignment.priority)}>
                          {assignment.priority}
                        </Badge>
                      </div>
                      <p className="text-xs text-gray-600 mb-2">{assignment.course}</p>
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-gray-500">Due: {assignment.dueDate}</p>
                        <Badge
                          variant={assignment.status === "pending" ? "destructive" : "default"}
                          className="text-xs"
                        >
                          {assignment.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
                <Link href="/assignments">
                  <Button variant="outline" className="w-full mt-4 bg-transparent">
                    View All Assignments
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Recent Grades */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Star className="h-5 w-5 mr-2 text-yellow-600" />
                  Recent Grades
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentGrades.map((grade, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 text-sm">{grade.assignment}</p>
                        <p className="text-xs text-gray-600">{grade.course}</p>
                        <p className="text-xs text-gray-500">{grade.date}</p>
                      </div>
                      <div className="text-right">
                        <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white border-0">
                          {grade.grade}
                        </Badge>
                        <p className="text-xs text-gray-600 mt-1">{grade.points}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link href="/grades">
                  <Button variant="outline" className="w-full mt-4 bg-transparent">
                    View All Grades
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Link href="/courses/enroll">
                    <Button className="w-full justify-start bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
                      <Plus className="h-4 w-4 mr-2" />
                      Enroll in Course
                    </Button>
                  </Link>
                  <Link href="/profile">
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <Users className="h-4 w-4 mr-2" />
                      Update Profile
                    </Button>
                  </Link>
                  <Link href="/schedule">
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <Calendar className="h-4 w-4 mr-2" />
                      View Schedule
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </StudentLayout>
  )
}
