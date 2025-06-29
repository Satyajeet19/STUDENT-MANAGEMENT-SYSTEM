"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { BookOpen, Search, Filter, Plus, Clock, Star, Award, Target, TrendingUp, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { StudentLayout } from "@/components/student-layout"

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("enrolled")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const enrolledCourses = [
    {
      id: 1,
      name: "Data Structures & Algorithms",
      code: "CS301",
      instructor: "Dr. Sarah Wilson",
      instructorAvatar: "/placeholder.svg?height=40&width=40&text=SW",
      credits: 4,
      progress: 75,
      grade: "A-",
      nextClass: "Tomorrow 10:00 AM",
      color: "from-blue-400 to-blue-600",
      assignments: 3,
      attendance: 92,
      description: "Learn fundamental data structures and algorithms essential for computer science.",
      enrolled: 45,
      rating: 4.8,
      difficulty: "Advanced",
    },
    {
      id: 2,
      name: "Database Management Systems",
      code: "CS302",
      instructor: "Prof. Michael Chen",
      instructorAvatar: "/placeholder.svg?height=40&width=40&text=MC",
      credits: 3,
      progress: 60,
      grade: "B+",
      nextClass: "Today 2:00 PM",
      color: "from-green-400 to-green-600",
      assignments: 2,
      attendance: 88,
      description: "Comprehensive study of database design, implementation, and management.",
      enrolled: 38,
      rating: 4.6,
      difficulty: "Intermediate",
    },
    {
      id: 3,
      name: "Software Engineering",
      code: "CS303",
      instructor: "Dr. Emily Rodriguez",
      instructorAvatar: "/placeholder.svg?height=40&width=40&text=ER",
      credits: 4,
      progress: 85,
      grade: "A",
      nextClass: "Friday 11:00 AM",
      color: "from-purple-400 to-purple-600",
      assignments: 1,
      attendance: 95,
      description: "Software development methodologies, project management, and best practices.",
      enrolled: 42,
      rating: 4.9,
      difficulty: "Intermediate",
    },
    {
      id: 4,
      name: "Computer Networks",
      code: "CS304",
      instructor: "Prof. David Kim",
      instructorAvatar: "/placeholder.svg?height=40&width=40&text=DK",
      credits: 3,
      progress: 45,
      grade: "B",
      nextClass: "Monday 9:00 AM",
      color: "from-orange-400 to-orange-600",
      assignments: 4,
      attendance: 85,
      description: "Network protocols, architecture, and distributed systems fundamentals.",
      enrolled: 35,
      rating: 4.5,
      difficulty: "Advanced",
    },
  ]

  const availableCourses = [
    {
      id: 5,
      name: "Machine Learning Fundamentals",
      code: "CS401",
      instructor: "Dr. Lisa Zhang",
      instructorAvatar: "/placeholder.svg?height=40&width=40&text=LZ",
      credits: 4,
      color: "from-pink-400 to-pink-600",
      description: "Introduction to machine learning algorithms and applications.",
      enrolled: 28,
      rating: 4.7,
      difficulty: "Advanced",
      prerequisites: ["CS301", "MATH201"],
    },
    {
      id: 6,
      name: "Web Development",
      code: "CS205",
      instructor: "Prof. Alex Thompson",
      instructorAvatar: "/placeholder.svg?height=40&width=40&text=AT",
      credits: 3,
      color: "from-teal-400 to-teal-600",
      description: "Modern web development with HTML, CSS, JavaScript, and frameworks.",
      enrolled: 52,
      rating: 4.8,
      difficulty: "Beginner",
      prerequisites: ["CS101"],
    },
    {
      id: 7,
      name: "Cybersecurity Essentials",
      code: "CS350",
      instructor: "Dr. Robert Johnson",
      instructorAvatar: "/placeholder.svg?height=40&width=40&text=RJ",
      credits: 3,
      color: "from-red-400 to-red-600",
      description: "Network security, cryptography, and ethical hacking fundamentals.",
      enrolled: 31,
      rating: 4.6,
      difficulty: "Intermediate",
      prerequisites: ["CS304"],
    },
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-700 border-green-200"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-700 border-yellow-200"
      case "Advanced":
        return "bg-red-100 text-red-700 border-red-200"
      default:
        return "bg-gray-100 text-gray-700 border-gray-200"
    }
  }

  const filteredCourses = selectedFilter === "enrolled" ? enrolledCourses : availableCourses
  const searchedCourses = filteredCourses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const EnrolledCourseCard = ({ course }: { course: (typeof enrolledCourses)[0] }) => (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <div className={`w-4 h-4 bg-gradient-to-r ${course.color} rounded-full`} />
                <h3 className="font-bold text-gray-900 text-lg">{course.name}</h3>
                <Badge variant="outline" className="text-xs">
                  {course.code}
                </Badge>
              </div>
              <p className="text-gray-600 text-sm mb-2">{course.description}</p>
              <div className="flex items-center space-x-2">
                <Avatar className="w-6 h-6">
                  <AvatarImage src={course.instructorAvatar || "/placeholder.svg"} />
                  <AvatarFallback className="text-xs">
                    {course.instructor
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm text-gray-600">{course.instructor}</span>
              </div>
            </div>
            <Badge className={`bg-gradient-to-r ${course.color} text-white border-0`}>Grade: {course.grade}</Badge>
          </div>

          {/* Progress */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Course Progress</span>
              <span className="font-semibold text-gray-900">{course.progress}%</span>
            </div>
            <Progress value={course.progress} className="h-2" />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="text-center">
              <div className="font-semibold text-gray-900">{course.assignments}</div>
              <div className="text-gray-600">Assignments</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-gray-900">{course.attendance}%</div>
              <div className="text-gray-600">Attendance</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-gray-900">{course.credits}</div>
              <div className="text-gray-600">Credits</div>
            </div>
          </div>

          {/* Next Class */}
          <div className="bg-gray-50 rounded-xl p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">Next Class:</span>
              </div>
              <span className="text-sm font-medium text-gray-900">{course.nextClass}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex space-x-2">
            <Button variant="outline" className="flex-1 bg-transparent">
              View Details
            </Button>
            <Button className={`flex-1 bg-gradient-to-r ${course.color} hover:opacity-90`}>Continue Learning</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  const AvailableCourseCard = ({ course }: { course: (typeof availableCourses)[0] }) => (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <div className={`w-4 h-4 bg-gradient-to-r ${course.color} rounded-full`} />
                <h3 className="font-bold text-gray-900 text-lg">{course.name}</h3>
                <Badge variant="outline" className="text-xs">
                  {course.code}
                </Badge>
              </div>
              <p className="text-gray-600 text-sm mb-3">{course.description}</p>
              <div className="flex items-center space-x-2">
                <Avatar className="w-6 h-6">
                  <AvatarImage src={course.instructorAvatar || "/placeholder.svg"} />
                  <AvatarFallback className="text-xs">
                    {course.instructor
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm text-gray-600">{course.instructor}</span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-yellow-500 fill-current" />
              <span className="text-sm font-medium">{course.rating}</span>
            </div>
          </div>

          {/* Course Info */}
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="text-center">
              <div className="font-semibold text-gray-900">{course.enrolled}</div>
              <div className="text-gray-600">Students</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-gray-900">{course.credits}</div>
              <div className="text-gray-600">Credits</div>
            </div>
            <div className="text-center">
              <Badge variant="outline" className={getDifficultyColor(course.difficulty)}>
                {course.difficulty}
              </Badge>
            </div>
          </div>

          {/* Prerequisites */}
          {course.prerequisites && (
            <div className="bg-blue-50 rounded-xl p-3 border border-blue-100">
              <div className="text-sm">
                <span className="font-medium text-blue-900">Prerequisites: </span>
                <span className="text-blue-700">{course.prerequisites.join(", ")}</span>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex space-x-2">
            <Button variant="outline" className="flex-1 bg-transparent">
              View Syllabus
            </Button>
            <Button className={`flex-1 bg-gradient-to-r ${course.color} hover:opacity-90`}>
              <Plus className="h-4 w-4 mr-2" />
              Enroll Now
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <StudentLayout>
      <div className="space-y-8">
        {/* Header */}
        <div
          className={`transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold">My Courses 📚</h1>
                  <p className="text-white/90 text-lg">
                    Manage your enrolled courses and discover new learning opportunities
                  </p>
                  <div className="flex items-center space-x-6 text-sm text-white/80 mt-4">
                    <div className="flex items-center space-x-2">
                      <BookOpen className="h-4 w-4" />
                      <span>{enrolledCourses.length} Enrolled</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Target className="h-4 w-4" />
                      <span>{enrolledCourses.reduce((sum, course) => sum + course.credits, 0)} Credits</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-4 w-4" />
                      <span>3.85 GPA</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 md:mt-0">
                  <Link href="/courses/enroll">
                    <Button className="bg-white text-purple-600 hover:bg-gray-100 px-6 py-3">
                      <Plus className="h-4 w-4 mr-2" />
                      Enroll in New Course
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div
          className={`grid grid-cols-1 md:grid-cols-4 gap-6 transition-all duration-700 delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Enrolled Courses</p>
                  <p className="text-2xl font-bold text-gray-900">{enrolledCourses.length}</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center text-white transform rotate-3">
                  <BookOpen className="h-5 w-5" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Credits</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {enrolledCourses.reduce((sum, course) => sum + course.credits, 0)}
                  </p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl flex items-center justify-center text-white transform rotate-3">
                  <Award className="h-5 w-5" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Avg Progress</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {Math.round(
                      enrolledCourses.reduce((sum, course) => sum + course.progress, 0) / enrolledCourses.length,
                    )}
                    %
                  </p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center text-white transform rotate-3">
                  <TrendingUp className="h-5 w-5" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Avg Attendance</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {Math.round(
                      enrolledCourses.reduce((sum, course) => sum + course.attendance, 0) / enrolledCourses.length,
                    )}
                    %
                  </p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center text-white transform rotate-3">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
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
                placeholder="Search courses..."
                className="pl-10 w-64 border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" size="sm" className="bg-transparent">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant={selectedFilter === "enrolled" ? "default" : "ghost"}
              size="sm"
              onClick={() => setSelectedFilter("enrolled")}
              className={selectedFilter === "enrolled" ? "bg-gradient-to-r from-orange-500 to-red-500" : ""}
            >
              My Courses ({enrolledCourses.length})
            </Button>
            <Button
              variant={selectedFilter === "available" ? "default" : "ghost"}
              size="sm"
              onClick={() => setSelectedFilter("available")}
              className={selectedFilter === "available" ? "bg-gradient-to-r from-orange-500 to-red-500" : ""}
            >
              Available ({availableCourses.length})
            </Button>
          </div>
        </div>

        {/* Courses Grid */}
        <div
          className={`transition-all duration-700 delay-600 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          {searchedCourses.length === 0 ? (
            <Card className="p-12 text-center border-0 shadow-lg">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                  <Search className="h-8 w-8 text-gray-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">No courses found</h3>
                  <p className="text-gray-600">Try adjusting your search or browse available courses</p>
                </div>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedFilter("available")
                  }}
                  className="bg-transparent"
                >
                  Browse Available Courses
                </Button>
              </div>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchedCourses.map((course) =>
                selectedFilter === "enrolled" ? (
                  <EnrolledCourseCard key={course.id} course={course as (typeof enrolledCourses)[0]} />
                ) : (
                  <AvailableCourseCard key={course.id} course={course as (typeof availableCourses)[0]} />
                ),
              )}
            </div>
          )}
        </div>
      </div>
    </StudentLayout>
  )
}
