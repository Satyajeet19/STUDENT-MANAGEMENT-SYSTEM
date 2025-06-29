"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Camera,
  Save,
  Edit,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Award,
  BookOpen,
  Target,
  User,
  Shield,
  Bell,
  Palette,
} from "lucide-react"
import { StudentLayout } from "@/components/student-layout"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [profileImage, setProfileImage] = useState("/placeholder.svg?height=120&width=120&text=AJ")
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [profileData, setProfileData] = useState({
    firstName: "Alex",
    lastName: "Johnson",
    studentId: "STU2024001",
    email: "alex.johnson@university.edu",
    phone: "+1 (555) 123-4567",
    address: "123 University Ave, College Town, ST 12345",
    dateOfBirth: "2002-05-15",
    program: "Computer Science",
    year: "3rd Year",
    semester: "Fall 2024",
    gpa: "3.85",
    bio: "Passionate computer science student with interests in artificial intelligence and web development. Always eager to learn new technologies and collaborate on innovative projects.",
  })

  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    pushNotifications: true,
    weeklyReports: false,
    darkMode: false,
    language: "English",
  })

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSave = () => {
    setIsEditing(false)
    // Here you would typically save to backend
    console.log("Profile saved:", profileData)
  }

  const academicStats = [
    {
      label: "Current GPA",
      value: profileData.gpa,
      icon: <Award className="h-5 w-5" />,
      color: "from-yellow-400 to-orange-500",
    },
    {
      label: "Completed Courses",
      value: "24",
      icon: <BookOpen className="h-5 w-5" />,
      color: "from-blue-400 to-blue-600",
    },
    {
      label: "Current Semester",
      value: profileData.semester,
      icon: <Calendar className="h-5 w-5" />,
      color: "from-green-400 to-green-600",
    },
    {
      label: "Academic Year",
      value: profileData.year,
      icon: <Target className="h-5 w-5" />,
      color: "from-purple-400 to-purple-600",
    },
  ]

  return (
    <StudentLayout>
      <div className="space-y-8">
        {/* Profile Header */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              <div className="relative">
                <Avatar className="w-32 h-32 border-4 border-white/20 shadow-xl">
                  <AvatarImage src={profileImage || "/placeholder.svg"} />
                  <AvatarFallback className="text-4xl font-bold bg-white/20">
                    {profileData.firstName[0]}
                    {profileData.lastName[0]}
                  </AvatarFallback>
                </Avatar>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="absolute bottom-2 right-2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <Camera className="h-5 w-5" />
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold">
                    {profileData.firstName} {profileData.lastName}
                  </h1>
                  <p className="text-white/90 text-lg">
                    {profileData.program} • {profileData.year}
                  </p>
                  <p className="text-white/80">Student ID: {profileData.studentId}</p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
                    <Badge className="bg-white/20 text-white border-white/30">GPA: {profileData.gpa}</Badge>
                    <Badge className="bg-white/20 text-white border-white/30">{profileData.semester}</Badge>
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-3">
                <Button
                  onClick={() => setIsEditing(!isEditing)}
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                >
                  <Edit className="h-4 w-4 mr-2" />
                  {isEditing ? "Cancel" : "Edit Profile"}
                </Button>
                {isEditing && (
                  <Button onClick={handleSave} className="bg-white text-orange-600 hover:bg-gray-100">
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Academic Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {academicStats.map((stat, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center text-white transform rotate-3`}
                  >
                    {stat.icon}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Profile Tabs */}
        <Tabs defaultValue="personal" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-gray-100">
            <TabsTrigger
              value="personal"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-500 data-[state=active]:text-white"
            >
              <User className="h-4 w-4 mr-2" />
              Personal Info
            </TabsTrigger>
            <TabsTrigger
              value="academic"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-500 data-[state=active]:text-white"
            >
              <BookOpen className="h-4 w-4 mr-2" />
              Academic
            </TabsTrigger>
            <TabsTrigger
              value="security"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-500 data-[state=active]:text-white"
            >
              <Shield className="h-4 w-4 mr-2" />
              Security
            </TabsTrigger>
            <TabsTrigger
              value="preferences"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-500 data-[state=active]:text-white"
            >
              <Palette className="h-4 w-4 mr-2" />
              Preferences
            </TabsTrigger>
          </TabsList>

          <TabsContent value="personal">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="h-5 w-5 mr-2 text-blue-600" />
                  Personal Information
                </CardTitle>
                <CardDescription>Update your personal details and contact information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-gray-700 font-medium">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      value={profileData.firstName}
                      onChange={(e) => setProfileData({ ...profileData, firstName: e.target.value })}
                      disabled={!isEditing}
                      className="border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-gray-700 font-medium">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      value={profileData.lastName}
                      onChange={(e) => setProfileData({ ...profileData, lastName: e.target.value })}
                      disabled={!isEditing}
                      className="border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 font-medium">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                      disabled={!isEditing}
                      className="pl-10 border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-700 font-medium">
                    Phone Number
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="phone"
                      value={profileData.phone}
                      onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                      disabled={!isEditing}
                      className="pl-10 border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address" className="text-gray-700 font-medium">
                    Address
                  </Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Textarea
                      id="address"
                      value={profileData.address}
                      onChange={(e) => setProfileData({ ...profileData, address: e.target.value })}
                      disabled={!isEditing}
                      className="pl-10 border-gray-200 focus:border-orange-500 focus:ring-orange-500 min-h-[80px]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dateOfBirth" className="text-gray-700 font-medium">
                    Date of Birth
                  </Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="dateOfBirth"
                      type="date"
                      value={profileData.dateOfBirth}
                      onChange={(e) => setProfileData({ ...profileData, dateOfBirth: e.target.value })}
                      disabled={!isEditing}
                      className="pl-10 border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio" className="text-gray-700 font-medium">
                    Bio
                  </Label>
                  <Textarea
                    id="bio"
                    value={profileData.bio}
                    onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                    disabled={!isEditing}
                    placeholder="Tell us about yourself..."
                    className="border-gray-200 focus:border-orange-500 focus:ring-orange-500 min-h-[120px]"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="academic">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-green-600" />
                  Academic Information
                </CardTitle>
                <CardDescription>View and update your academic details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="studentId" className="text-gray-700 font-medium">
                      Student ID
                    </Label>
                    <Input
                      id="studentId"
                      value={profileData.studentId}
                      disabled
                      className="bg-gray-50 border-gray-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="program" className="text-gray-700 font-medium">
                      Program
                    </Label>
                    <Input
                      id="program"
                      value={profileData.program}
                      onChange={(e) => setProfileData({ ...profileData, program: e.target.value })}
                      disabled={!isEditing}
                      className="border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="year" className="text-gray-700 font-medium">
                      Academic Year
                    </Label>
                    <Input
                      id="year"
                      value={profileData.year}
                      onChange={(e) => setProfileData({ ...profileData, year: e.target.value })}
                      disabled={!isEditing}
                      className="border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="semester" className="text-gray-700 font-medium">
                      Current Semester
                    </Label>
                    <Input
                      id="semester"
                      value={profileData.semester}
                      onChange={(e) => setProfileData({ ...profileData, semester: e.target.value })}
                      disabled={!isEditing}
                      className="border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="gpa" className="text-gray-700 font-medium">
                    Current GPA
                  </Label>
                  <Input id="gpa" value={profileData.gpa} disabled className="bg-gray-50 border-gray-200" />
                  <p className="text-sm text-gray-500">GPA is automatically calculated based on your grades</p>
                </div>

                {/* Academic Progress */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Academic Progress</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">24</div>
                      <div className="text-sm text-gray-600">Completed Courses</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">96</div>
                      <div className="text-sm text-gray-600">Total Credits</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">80%</div>
                      <div className="text-sm text-gray-600">Degree Progress</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-red-600" />
                  Security Settings
                </CardTitle>
                <CardDescription>Manage your account security and password</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword" className="text-gray-700 font-medium">
                      Current Password
                    </Label>
                    <Input
                      id="currentPassword"
                      type="password"
                      placeholder="Enter your current password"
                      className="border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newPassword" className="text-gray-700 font-medium">
                      New Password
                    </Label>
                    <Input
                      id="newPassword"
                      type="password"
                      placeholder="Enter your new password"
                      className="border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-gray-700 font-medium">
                      Confirm New Password
                    </Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm your new password"
                      className="border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>
                  <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700">
                    Update Password
                  </Button>
                </div>

                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 border border-yellow-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Two-Factor Authentication</h3>
                  <p className="text-gray-600 mb-4">Add an extra layer of security to your account</p>
                  <Button
                    variant="outline"
                    className="bg-transparent border-orange-300 text-orange-700 hover:bg-orange-50"
                  >
                    Enable 2FA
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="preferences">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="h-5 w-5 mr-2 text-purple-600" />
                  Preferences & Notifications
                </CardTitle>
                <CardDescription>Customize your experience and notification settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div>
                      <h4 className="font-medium text-gray-900">Email Notifications</h4>
                      <p className="text-sm text-gray-600">Receive updates about grades and assignments</p>
                    </div>
                    <Button
                      variant={preferences.emailNotifications ? "default" : "outline"}
                      size="sm"
                      onClick={() =>
                        setPreferences({ ...preferences, emailNotifications: !preferences.emailNotifications })
                      }
                      className={
                        preferences.emailNotifications
                          ? "bg-gradient-to-r from-green-500 to-green-600"
                          : "bg-transparent"
                      }
                    >
                      {preferences.emailNotifications ? "On" : "Off"}
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div>
                      <h4 className="font-medium text-gray-900">Push Notifications</h4>
                      <p className="text-sm text-gray-600">Get instant notifications on your device</p>
                    </div>
                    <Button
                      variant={preferences.pushNotifications ? "default" : "outline"}
                      size="sm"
                      onClick={() =>
                        setPreferences({ ...preferences, pushNotifications: !preferences.pushNotifications })
                      }
                      className={
                        preferences.pushNotifications
                          ? "bg-gradient-to-r from-green-500 to-green-600"
                          : "bg-transparent"
                      }
                    >
                      {preferences.pushNotifications ? "On" : "Off"}
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div>
                      <h4 className="font-medium text-gray-900">Weekly Reports</h4>
                      <p className="text-sm text-gray-600">Receive weekly academic progress reports</p>
                    </div>
                    <Button
                      variant={preferences.weeklyReports ? "default" : "outline"}
                      size="sm"
                      onClick={() => setPreferences({ ...preferences, weeklyReports: !preferences.weeklyReports })}
                      className={
                        preferences.weeklyReports ? "bg-gradient-to-r from-green-500 to-green-600" : "bg-transparent"
                      }
                    >
                      {preferences.weeklyReports ? "On" : "Off"}
                    </Button>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Appearance</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">Dark Mode</h4>
                        <p className="text-sm text-gray-600">Switch to dark theme</p>
                      </div>
                      <Button
                        variant={preferences.darkMode ? "default" : "outline"}
                        size="sm"
                        onClick={() => setPreferences({ ...preferences, darkMode: !preferences.darkMode })}
                        className={
                          preferences.darkMode ? "bg-gradient-to-r from-gray-700 to-gray-900" : "bg-transparent"
                        }
                      >
                        {preferences.darkMode ? "Dark" : "Light"}
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </StudentLayout>
  )
}
