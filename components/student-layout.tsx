"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Bell,
  Search,
  Settings,
  User,
  LogOut,
  Home,
  BookOpen,
  Award,
  Calendar,
  FileText,
  Menu,
  X,
  GraduationCap,
  Sparkles,
} from "lucide-react"
import Link from "next/link"

interface StudentLayoutProps {
  children: React.ReactNode
}

export function StudentLayout({ children }: StudentLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: Home, active: true },
    { name: "My Courses", href: "/courses", icon: BookOpen },
    { name: "Grades", href: "/grades", icon: Award },
    { name: "Schedule", href: "/schedule", icon: Calendar },
    { name: "Assignments", href: "/assignments", icon: FileText },
    { name: "Profile", href: "/profile", icon: User },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      {/* Sidebar */}
      <div className="flex">
        {/* Mobile sidebar overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 z-50 w-72 bg-white shadow-2xl transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
        >
          <div className="flex items-center justify-between h-20 px-6 border-b border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center transform rotate-12">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  EduFlow
                </h1>
                <p className="text-xs text-gray-500">Student Portal</p>
              </div>
            </div>
            <button className="lg:hidden" onClick={() => setIsSidebarOpen(false)}>
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="mt-8 px-4">
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center px-4 py-3 text-sm font-medium rounded-2xl transition-all duration-200 ${
                    item.active
                      ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg transform scale-105"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.name}
                  {item.active && <Sparkles className="ml-auto h-4 w-4" />}
                </Link>
              ))}
            </div>
          </nav>

          {/* Student Info Card */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-4 border border-blue-100">
              <div className="flex items-center space-x-3">
                <Avatar className="w-12 h-12 border-2 border-white shadow-sm">
                  <AvatarImage src="/placeholder.svg?height=48&width=48" />
                  <AvatarFallback className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold">
                    AJ
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-gray-900 truncate">Alex Johnson</p>
                  <p className="text-xs text-gray-600 truncate">Computer Science</p>
                  <Badge className="bg-green-100 text-green-700 border-green-200 text-xs mt-1">3rd Year</Badge>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-8 w-8 rounded-full">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      Profile Settings
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      Preferences
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <Link href="/">
                      <DropdownMenuItem>
                        <LogOut className="mr-2 h-4 w-4" />
                        Sign Out
                      </DropdownMenuItem>
                    </Link>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 lg:ml-0">
          {/* Top navigation */}
          <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-30">
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center space-x-4">
                  <button className="lg:hidden" onClick={() => setIsSidebarOpen(true)}>
                    <Menu className="h-6 w-6" />
                  </button>

                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        type="search"
                        placeholder="Search courses, assignments, or grades..."
                        className="pl-10 w-64 md:w-96 border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  {/* Notifications */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="relative">
                        <Bell className="h-5 w-5" />
                        <Badge className="absolute -top-1 -right-1 w-2 h-2 p-0 bg-red-500" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-80">
                      <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <div className="space-y-2 p-2">
                        <div className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium">New assignment posted</p>
                            <p className="text-xs text-gray-500">CS301 - Data Structures</p>
                            <p className="text-xs text-gray-400 mt-1">5 minutes ago</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium">Grade updated</p>
                            <p className="text-xs text-gray-500">CS302 - Database Systems</p>
                            <p className="text-xs text-gray-400 mt-1">1 hour ago</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2" />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium">Class schedule changed</p>
                            <p className="text-xs text-gray-500">CS303 - Software Engineering</p>
                            <p className="text-xs text-gray-400 mt-1">3 hours ago</p>
                          </div>
                        </div>
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  {/* User Profile */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                          <AvatarFallback className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-bold">
                            AJ
                          </AvatarFallback>
                        </Avatar>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="end" forceMount>
                      <DropdownMenuLabel className="font-normal">
                        <div className="flex flex-col space-y-1">
                          <p className="text-sm font-medium leading-none">Alex Johnson</p>
                          <p className="text-xs leading-none text-muted-foreground">STU2024001</p>
                          <Badge className="bg-blue-100 text-blue-700 border-blue-200 text-xs mt-2 w-fit">
                            Computer Science
                          </Badge>
                        </div>
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <Link href="/profile">
                        <DropdownMenuItem>
                          <User className="mr-2 h-4 w-4" />
                          <span>My Profile</span>
                        </DropdownMenuItem>
                      </Link>
                      <DropdownMenuItem>
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <Link href="/">
                        <DropdownMenuItem>
                          <LogOut className="mr-2 h-4 w-4" />
                          <span>Sign Out</span>
                        </DropdownMenuItem>
                      </Link>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </header>

          {/* Page content */}
          <main className="p-4 sm:p-6 lg:p-8">{children}</main>
        </div>
      </div>
    </div>
  )
}
