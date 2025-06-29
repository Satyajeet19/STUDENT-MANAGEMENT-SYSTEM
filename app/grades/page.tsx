"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, TrendingUp, Calendar, Star, Target, BookOpen, Download } from "lucide-react"
import { StudentLayout } from "@/components/student-layout"

export default function GradesPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [selectedSemester, setSelectedSemester] = useState("current")

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const currentGrades = [
    {
      course: "Data Structures & Algorithms",
      code: "CS301",
      grade: "A-",
      percentage: 87,
      credits: 4,
      color: "from-blue-400 to-blue-600",
      assignments: [
        { name: "Binary Search Tree Implementation", grade: "A", points: "95/100", date: "2024-01-28", weight: 20 },
        { name: "Graph Algorithms Project", grade: "B+", points: "88/100", date: "2024-01-15", weight: 25 },
        { name: "Midterm Exam", grade: "A-", points: "87/100", date: "2024-01-10", weight: 30 },
        { name: "Weekly Quizzes", grade: "A", points: "92/100", date: "Ongoing", weight: 25 }
      ]
    },
    {
      course: "Database Management Systems",
      code: "CS302",
      grade: "B+",
      percentage: 85,
      credits: 3,
      color: "from-green-400 to-green-600",
      assignments: [
        { name: "SQL Query Assignment", grade: "A", points: "95/100", date: "2024-01-25", weight: 20 },
        { name: "Database Design Project", grade: "B+", points: "88/100", date: "2024-01-18", weight: 30 },
        { name: "Midterm Exam", grade: "B", points: "82/100", date: "2024-01-12", weight: 35 },
        { name: "Lab Exercises", grade: "A-", points: "90/100", date: "Ongoing", weight: 15 }
      ]
    },
    {
      course: "Software Engineering",
      code: "CS303",
      grade: "A",
      percentage: 92,
      credits: 4,
      color: "from-purple-400 to-purple-600",
      assignments: [
        { name: "Software Requirements Document", grade: "A", points: "96/100", date: "2024-01-22", weight: 25 },
        { name: "UML Diagrams Assignment", grade: "A-", points: "90/100", date: "2024-01-16", weight: 20 },
        { name: "Team Project Phase 1", grade: "A", points: "94/100", date: "2024-01-08", weight: 35 },
        { name: "Class Participation", grade: "A", points: "95/100", date: "Ongoing", weight: 20 }
      ]
    },
    {
      course: "Computer Networks",
      code: "CS304",
      grade: "B",
      percentage: 78,
      credits: 3,
      color: "from-orange-400 to-orange-600",
      assignments: [
        { name: "Network Protocol Analysis", grade: "B+", points: "85/100", date: "2024-01-20", weight: 25 },
        { name: "Socket Programming Lab", grade: "B-", points: "78/100", date: "2024-01-14", weight: 20 },
        { name: "Midterm Exam", grade: "C+", points: "72/100", date: "2024-01-09", weight: 35 },
        { name: "Weekly Assignments", grade: "B", points: "80/100", date: "Ongoing", weight: 20 }
      ]
    }
  ]

  const semesterHistory = [
    { semester: "Spring 2024", gpa: 3.92, credits: 15, courses: 5 },
    { semester: "Fall 2023", gpa: 3.78, credits: 16, courses: 5 },
    { semester: "Spring 2023", gpa: 3.65, credits: 14, courses: 4 },
    { semester: "Fall 2022", gpa: 3.45, credits: 15, courses: 5 }
  ]

  const getGradeColor = (grade: string) => {
    if (grade.startsWith("A")) return "bg-green-100 text-green-800 border-green-200"
    if (grade.startsWith("B")) return "bg-blue-100 text-blue-800 border-blue-200"
    if (grade.startsWith("C")) return "bg-yellow-100 text-yellow-800 border-yellow-200"
    return "bg-red-100 text-red-800 border-red-200"
  }

  const calculateGPA = () => {
    const totalPoints = currentGrades.reduce((sum, course) => {
      const gradePoints = course.grade.startsWith("A") ? 4.0 : 
                         course.grade.startsWith("B") ? 3.0 : 
                         course.grade.startsWith("C") ? 2.0 : 1.0
      return sum + (gradePoints * course.credits)
    }, 0)
    const totalCredits = currentGrades.reduce((sum, course) => sum + course.credits, 0)
    return (totalPoints / totalCredits).toFixed(2)
  }

  const currentGPA = calculateGPA()

  return (
    <StudentLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className={`transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <div className="bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold">Academic Performance 📊</h1>
                  <p className="text-white/90 text-lg">
                    Track your grades, GPA, and academic progress across all courses
                  </p>
                  <div className="flex items-center space-x-6 text-sm text-white/80 mt-4">
                    <div className="flex items-center space-x-2">
                      <Award className="h-4 w-4" />
                      <span>Current GPA: {currentGPA}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <BookOpen className="h-4 w-4" />
                      <span>{currentGrades.length} Courses</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Target className="h-4 w-4" />
                      <span>{currentGrades.reduce((sum, course) => sum + course.credits, 0)} Credits</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 md:mt-0">
                  <Button className="bg-white text-teal-600 hover:bg-gray-100 px-6 py-3">
                    <Download className="h-4 w-4 mr-2" />
                    Download Transcript
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* GPA Overview */}
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-6 transition-all duration-700 delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Current GPA</p>
                  <p className="text-3xl font-bold text-gray-900">{currentGPA}</p>
                  <p className="text-sm text-green-600 font-medium">+0.12 from last semester</p>
                </div>
                <div className="w-14 h-14 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center text-white transform rotate-3">
                  <Award className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Cumulative GPA</p>
                  <p className="text-3xl font-bold text-gray-900">3.85</p>
                  <p className="text-sm text-blue-600 font-medium">Overall average</p>
                </div>
                <div className="w-14 h-14 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center text-white transform rotate-3">
                  <TrendingUp className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Credits Earned</p>
                  <p className="text-3xl font-bold text-gray-900">96</p>
                  <p className="text-sm text-purple-600 font-medium">Out of 120 required</p>
                </div>
                <div className="w-14 h-14 bg-gradient-to-r from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center text-white transform rotate-3">
                  <BookOpen className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Class Rank</p>
                  <p className="text-3xl font-bold text-gray-900">15th</p>
                  <p className="text-sm text-green-600 font-medium">Top 10% of class</p>
                </div>
                <div className="w-14 h-14 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl flex items-center justify-center text-white transform rotate-3">
                  <Star className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className={`transition-all duration-700 delay-400 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <Tabs defaultValue="current" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3 bg-gray-100">
              <TabsTrigger value="current" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-teal-500 data-[state=active]:text-white">
                Current Semester
              </TabsTrigger>
              <TabsTrigger value="history" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-teal-500 data-[state=active]:text-white">
                Grade History
              </TabsTrigger>
              <TabsTrigger value="analytics" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-teal-500 data-[state=active]:text-white">
                Analytics
              </TabsTrigger>
            </TabsList>

            <TabsContent value="current" className="space-y-6">
              <div className="grid gap-6">
                {currentGrades.map((course, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`w-4 h-4 bg-gradient-to-r ${course.color} rounded-full`} />
                          <div>
                            <CardTitle className="text-xl">{course.course}</CardTitle>
                            <CardDescription>{course.code} • {course.credits} Credits</CardDescription>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Badge variant="outline" className={getGradeColor(course.grade)}>
                            {course.grade}
                          </Badge>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-gray-900">{course.percentage}%</div>
                            <div className="text-sm text-gray-600">Overall</div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {/* Progress Bar */}
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">Course Progress</span>
                            <span className="font-medium">{course.percentage}%</span>
                          </div>
                          <Progress value={course.percentage} className="h-2" />
                        </div>

                        {/* Assignments */}
                        <div className="space-y-3">
                          <h4 className="font-semibold text-gray-900">Recent Assignments</h4>
                          <div className="grid gap-3">
                            {course.assignments.map((assignment, idx) => (
                              <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                                <div className="flex-1">
                                  <div className="flex items-center space-x-3">
                                    <h5 className="font-medium text-gray-900 text-sm">{assignment.name}</h5>
                                    <Badge variant="outline" className={getGradeColor(assignment.grade)}>
                                      {assignment.grade}
                                    </Badge>
                                  </div>
                                  <div className="flex items-center space-x-4 mt-1 text-xs text-gray-600">
                                    <span>{assignment.points}</span>
                                    <span>•</span>
                                    <span>{assignment.weight}% of grade</span>
                                    <span>•</span>
                                    <span>{assignment.date}</span>
                                  </div>
                                </div>
                                <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                                  View Details
                                </Button>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="history" className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                    Semester History
                  </CardTitle>
                  <CardDescription>
                    Your academic performance across all semesters
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {semesterHistory.map((semester, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center text-white font-bold transform rotate-3">
                            {index + 1}
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{semester.semester}</h3>
                            <p className="text-sm text-gray-600">{semester.courses} courses • {semester.credits} credits</p>
                \
