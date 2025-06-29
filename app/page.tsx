"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  GraduationCap,
  Users,
  Award,
  TrendingUp,
  Star,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Target,
  Zap,
} from "lucide-react"

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("login")
  const [isVisible, setIsVisible] = useState(false)
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    userType: "student",
  })
  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    studentId: "",
    program: "",
  })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate login
    if (loginData.userType === "student") {
      window.location.href = "/dashboard"
    } else {
      window.location.href = "/admin"
    }
  }

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate registration
    window.location.href = "/dashboard"
  }

  const features = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Course Management",
      description: "Easily enroll in courses, track progress, and access learning materials",
      color: "from-orange-400 to-red-500",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Grade Tracking",
      description: "Monitor your academic performance with detailed grade analytics",
      color: "from-blue-400 to-indigo-500",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Student Community",
      description: "Connect with classmates and participate in study groups",
      color: "from-green-400 to-teal-500",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Goal Setting",
      description: "Set academic goals and track your progress towards achievement",
      color: "from-purple-400 to-pink-500",
    },
  ]

  const stats = [
    { number: "15,000+", label: "Active Students", icon: <Users className="h-5 w-5" /> },
    { number: "500+", label: "Courses Available", icon: <BookOpen className="h-5 w-5" /> },
    { number: "98%", label: "Success Rate", icon: <TrendingUp className="h-5 w-5" /> },
    { number: "4.9/5", label: "Student Rating", icon: <Star className="h-5 w-5" /> },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-blue-400/10" />
        <nav className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center transform rotate-12">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  EduFlow
                </h1>
                <p className="text-xs text-gray-600">Student Management System</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#features" className="text-gray-600 hover:text-orange-600 transition-colors font-medium">
                Features
              </a>
              <a href="#about" className="text-gray-600 hover:text-orange-600 transition-colors font-medium">
                About
              </a>
              <Badge variant="secondary" className="bg-orange-100 text-orange-700 border-orange-200">
                <Sparkles className="h-3 w-3 mr-1" />
                New Features
              </Badge>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div
              className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
            >
              <div className="space-y-6">
                <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 px-4 py-2">
                  <Zap className="h-4 w-4 mr-2" />
                  Revolutionizing Student Experience
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  Your Academic
                  <span className="block bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    Journey Starts
                  </span>
                  <span className="block text-gray-900">Here</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Experience the future of student management with our intuitive platform. Track grades, enroll in
                  courses, and connect with your academic community all in one beautiful interface.
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-600">Free to use</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-600">24/7 Support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-600">Secure & Private</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg flex items-center justify-center text-white">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Login/Register Form */}
            <div
              className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
            >
              <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-4 transform -rotate-6">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">Welcome to EduFlow</CardTitle>
                  <CardDescription className="text-gray-600">
                    Join thousands of students managing their academic journey
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs value={activeTab} onValueChange={setActiveTab}>
                    <TabsList className="grid w-full grid-cols-2 mb-6 bg-gray-100">
                      <TabsTrigger
                        value="login"
                        className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-500 data-[state=active]:text-white"
                      >
                        Sign In
                      </TabsTrigger>
                      <TabsTrigger
                        value="register"
                        className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-500 data-[state=active]:text-white"
                      >
                        Sign Up
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="login">
                      <form onSubmit={handleLogin} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-gray-700 font-medium">
                            Email Address
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="student@university.edu"
                            value={loginData.email}
                            onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                            className="border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="password" className="text-gray-700 font-medium">
                            Password
                          </Label>
                          <Input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            value={loginData.password}
                            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                            className="border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-gray-700 font-medium">I am a:</Label>
                          <Tabs
                            value={loginData.userType}
                            onValueChange={(value) => setLoginData({ ...loginData, userType: value })}
                          >
                            <TabsList className="grid w-full grid-cols-2 bg-gray-100">
                              <TabsTrigger value="student">Student</TabsTrigger>
                              <TabsTrigger value="admin">Administrator</TabsTrigger>
                            </TabsList>
                          </Tabs>
                        </div>
                        <Button
                          type="submit"
                          className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-medium py-3"
                        >
                          Sign In to EduFlow
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <div className="text-center text-sm text-gray-600">
                          <p>Demo Credentials:</p>
                          <p className="font-mono text-xs bg-gray-100 p-2 rounded mt-1">
                            student@demo.com / password123
                          </p>
                        </div>
                      </form>
                    </TabsContent>

                    <TabsContent value="register">
                      <form onSubmit={handleRegister} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName" className="text-gray-700 font-medium">
                              First Name
                            </Label>
                            <Input
                              id="firstName"
                              placeholder="John"
                              value={registerData.firstName}
                              onChange={(e) => setRegisterData({ ...registerData, firstName: e.target.value })}
                              className="border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName" className="text-gray-700 font-medium">
                              Last Name
                            </Label>
                            <Input
                              id="lastName"
                              placeholder="Doe"
                              value={registerData.lastName}
                              onChange={(e) => setRegisterData({ ...registerData, lastName: e.target.value })}
                              className="border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                              required
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="studentId" className="text-gray-700 font-medium">
                            Student ID
                          </Label>
                          <Input
                            id="studentId"
                            placeholder="STU2024001"
                            value={registerData.studentId}
                            onChange={(e) => setRegisterData({ ...registerData, studentId: e.target.value })}
                            className="border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-gray-700 font-medium">
                            Email Address
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john.doe@university.edu"
                            value={registerData.email}
                            onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                            className="border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="program" className="text-gray-700 font-medium">
                            Program
                          </Label>
                          <Input
                            id="program"
                            placeholder="Computer Science"
                            value={registerData.program}
                            onChange={(e) => setRegisterData({ ...registerData, program: e.target.value })}
                            className="border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="password" className="text-gray-700 font-medium">
                            Password
                          </Label>
                          <Input
                            id="password"
                            type="password"
                            placeholder="Create a strong password"
                            value={registerData.password}
                            onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                            className="border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                            required
                          />
                        </div>
                        <Button
                          type="submit"
                          className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-medium py-3"
                        >
                          Create Your Account
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </form>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white border-0 px-4 py-2 mb-4">
              <Sparkles className="h-4 w-4 mr-2" />
              Powerful Features
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need for
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Academic Success
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive platform provides all the tools you need to excel in your studies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-3xl flex items-center justify-center mx-auto mb-6 text-white transform rotate-3`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                <Star className="h-4 w-4 mr-2" />
                Join the Revolution
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Ready to Transform Your
                <span className="block">Academic Experience?</span>
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Join thousands of students who are already using EduFlow to achieve their academic goals
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-medium"
                onClick={() => setActiveTab("register")}
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-medium bg-transparent"
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center transform rotate-12">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">EduFlow</h3>
                  <p className="text-sm text-gray-400">Student Management</p>
                </div>
              </div>
              <p className="text-gray-400">
                Empowering students with modern tools for academic success and personal growth.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <div className="space-y-2 text-gray-400">
                <div>Dashboard</div>
                <div>Courses</div>
                <div>Grades</div>
                <div>Profile</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2 text-gray-400">
                <div>Help Center</div>
                <div>Documentation</div>
                <div>Contact Us</div>
                <div>Community</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <div className="space-y-2 text-gray-400">
                <div>Privacy Policy</div>
                <div>Terms of Service</div>
                <div>Cookie Policy</div>
                <div>GDPR</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400">© 2024 EduFlow. All rights reserved.</div>
            <div className="flex space-x-6 text-gray-400 mt-4 md:mt-0">
              <div>Made with ❤️ for Students</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
