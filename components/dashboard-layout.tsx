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
  FolderOpen,
  Users,
  BarChart3,
  Calendar,
  MessageSquare,
  FileText,
  Menu,
  X,
} from "lucide-react"
import Link from "next/link"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: Home, active: true },
    { name: "Projects", href: "/projects", icon: FolderOpen },
    { name: "Team", href: "/team", icon: Users },
    { name: "Analytics", href: "/analytics", icon: BarChart3 },
    { name: "Calendar", href: "/calendar", icon: Calendar },
    { name: "Messages", href: "/messages", icon: MessageSquare },
    { name: "Documents", href: "/documents", icon: FileText },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
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
          className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
        >
          <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="text-xl font-bold text-gray-900">ProjectHub</span>
            </div>
            <button className="lg:hidden" onClick={() => setIsSidebarOpen(false)}>
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="mt-6 px-3">
            <div className="space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    item.active
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* User Profile Section */}
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
            <div className="flex items-center space-x-3">
              <Avatar className="w-10 h-10">
                <AvatarImage src="/placeholder.svg?height=40&width=40" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">John Doe</p>
                <p className="text-xs text-gray-500 truncate">john@projecthub.com</p>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <Settings className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 lg:ml-0">
          {/* Top navigation */}
          <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-30">
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
                        placeholder="Search projects, tasks, or team members..."
                        className="pl-10 w-64 md:w-96"
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
                        <div className="flex items-start space-x-3 p-2 hover:bg-gray-50 rounded">
                          <Avatar className="w-8 h-8">
                            <AvatarFallback>AS</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm">
                              <span className="font-medium">Alice Smith</span> commented on Mobile App Redesign
                            </p>
                            <p className="text-xs text-gray-500 mt-1">5 minutes ago</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 p-2 hover:bg-gray-50 rounded">
                          <Avatar className="w-8 h-8">
                            <AvatarFallback>BJ</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm">
                              <span className="font-medium">Bob Johnson</span> assigned you a new task
                            </p>
                            <p className="text-xs text-gray-500 mt-1">1 hour ago</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 p-2 hover:bg-gray-50 rounded">
                          <Avatar className="w-8 h-8">
                            <AvatarFallback>CD</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm">
                              <span className="font-medium">Carol Davis</span> updated project timeline
                            </p>
                            <p className="text-xs text-gray-500 mt-1">3 hours ago</p>
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
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="end" forceMount>
                      <DropdownMenuLabel className="font-normal">
                        <div className="flex flex-col space-y-1">
                          <p className="text-sm font-medium leading-none">John Doe</p>
                          <p className="text-xs leading-none text-muted-foreground">john@projecthub.com</p>
                        </div>
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <Link href="/">
                        <DropdownMenuItem>
                          <LogOut className="mr-2 h-4 w-4" />
                          <span>Log out</span>
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
