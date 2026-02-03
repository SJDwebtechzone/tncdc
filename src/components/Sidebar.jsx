import { Link, useLocation } from "react-router-dom"
import {
    LayoutDashboard,
    Award,
    Image as ImageIcon,
    BookOpen,
    DollarSign,
    Box,
    Layers,
    FileText,
    MonitorPlay,
    MessageSquare,
    Video,
    StickyNote,
    Star,
    Menu,
    Search,
    Files,
    Users,
    Contact,
    CalendarCheck,
    CalendarX,
    Banknote,
    UserCog,
    Lock,
    Briefcase,
    Gift,
    Settings,
    Settings2,
    KeyRound,
    ShieldCheck,
    Bell,
    AppWindow,
    MessageCircle,
    ArrowUpRight,
    UserPlus,
    Printer,
    HelpCircle,
    Cake,
    History as HistoryIcon,
    Wallet,
    ChartBar,
    Clock,
    QrCode,
    CalendarOff,
    Palmtree,
    Calendar,
    FileSignature, // Hall Ticket
    FileQuestion, // Mock Test
    FileCheck, // Final Exam & Approved Cert
    FileInput, // Exam Request
    PenTool, // Update Marks
    FileBadge, // Apply Cert
    FileOutput // Requested Cert
} from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"

// Structure based on USER REQUEST images
const menuGroups = [
    {
        title: "COURSES",
        items: [
            { href: "/dashboard/exam-grade", label: "Exam Grade System", icon: Award },
            { href: "/dashboard/subjects", label: "Subjects", icon: BookOpen },
            { href: "/dashboard/languages", label: "Languages", icon: MessageSquare },
            { href: "/dashboard/course/categories", label: "Course Categories", icon: Layers },
            { href: "/dashboard/course/award-categories", label: "Course Award Categories", icon: Award },
            { href: "/dashboard/courses", label: "Courses", icon: BookOpen },
            { href: "/dashboard/online-classes", label: "Online Classes", icon: MonitorPlay },
        ]
    },
    {
        title: "COURSE CONTENT",
        items: [
            { href: "/dashboard/course/videos", label: "Course Videos", icon: Video },
            { href: "/dashboard/course/notes", label: "Course Notes", icon: StickyNote },
            { href: "/dashboard/course/reviews", label: "Course Reviews", icon: Star },
        ]
    },
    {
        title: "BATCHES",
        items: [
            { href: "/dashboard/batches", label: "Batches", icon: Box },
        ]
    },
    {
        title: "STUDENT MANAGEMENT",
        items: [
            { href: "/dashboard/students/list", label: "Students List", icon: Users },
            { href: "/dashboard/students/notifications", label: "Student Notifications", icon: Bell },
            { href: "/dashboard/students/popups", label: "Popups", icon: AppWindow },
            { href: "/dashboard/students/enquiries", label: "Student Enquiries", icon: MessageCircle },
            { href: "/dashboard/students/enquiry-followups", label: "Enquiries Follow-Ups", icon: ArrowUpRight },
            { href: "/dashboard/students/admissions", label: "Admissions", icon: UserPlus },
            { href: "/dashboard/students/id-card-print", label: "Bulk ID Card Print", icon: Printer },
            { href: "/dashboard/students/help-support", label: "Help Support", icon: HelpCircle },
            { href: "/dashboard/students/birthday-list", label: "Birthday List", icon: Cake },
        ]
    },
    {
        title: "STUDENT FEES",
        items: [
            { href: "/dashboard/fees/upcoming", label: "Upcoming Installments", icon: DollarSign },
            { href: "/dashboard/fees/paid", label: "Paid Installments", icon: FileText },
            { href: "/dashboard/fees/history", label: "Payment History", icon: HistoryIcon },
            { href: "/dashboard/fees/wallet", label: "Student Wallet", icon: Wallet },
        ]
    },
    {
        title: "STUDENT ATTENDANCE",
        items: [
            { href: "/dashboard/attendance/report", label: "Attendance Report", icon: ChartBar },
            { href: "/dashboard/attendance/add", label: "Add Attendance", icon: Clock },
            { href: "/dashboard/attendance/qr", label: "Add Attendance QR", icon: QrCode },
            { href: "/dashboard/attendance/leave", label: "Leave Management", icon: CalendarOff },
            { href: "/dashboard/attendance/holidays", label: "Holidays", icon: Palmtree },
            { href: "/dashboard/attendance/week-off", label: "Week Off Days", icon: Calendar },
        ]
    },
    {
        title: "STUDENT EXAMS",
        items: [
            { href: "/dashboard/exams/hall-tickets", label: "Generate Hall Tickets", icon: FileSignature },
            { href: "/dashboard/exams/mock-tests", label: "Mock Tests", icon: FileQuestion },
            { href: "/dashboard/exams/final", label: "Final Exams", icon: FileCheck },
            { href: "/dashboard/exams/requests", label: "Exam Requests", icon: FileInput },
            { href: "/dashboard/exams/marks", label: "Update Marks", icon: PenTool },
        ]
    },
    {
        title: "CERTIFICATES",
        items: [
            { href: "/dashboard/certificates/apply", label: "Apply for Certificate", icon: FileBadge },
            { href: "/dashboard/certificates/approved", label: "Approved Certificates", icon: FileCheck },
            { href: "/dashboard/certificates/requested", label: "Requested Certificates", icon: FileOutput },
        ]
    },
    {
        title: "OLD/HDI CERTIFICATES",
        items: [
            { href: "/dashboard/hdi-certificate", label: "HDI Certificate Marksheets", icon: Box },
        ]
    },
    {
        title: "BACKGROUND IMAGES",
        items: [
            { href: "/dashboard/backgrounds", label: "Background Images", icon: ImageIcon },
        ]
    },
    {
        title: "EXPENSES",
        items: [
            { href: "/dashboard/expenses/types", label: "Expense Types", icon: FileText },
            { href: "/dashboard/expenses/subtypes", label: "Expense Sub Types", icon: Layers },
            { href: "/dashboard/expenses/list", label: "Expenses List", icon: FileText },
        ]
    },
    {
        title: "INVENTORY",
        items: [
            { href: "/dashboard/inventory/categories", label: "Inventory Categories", icon: Files },
            { href: "/dashboard/inventory/products", label: "Inventory Products", icon: Box },
            { href: "/dashboard/inventory/student", label: "Student Inventory", icon: Users },
        ]
    },
    {
        title: "STAFF MANAGEMENT",
        items: [
            { href: "/dashboard/staff/list", label: "Staff List", icon: Contact },
            { href: "/dashboard/staff/attendance", label: "Staff Attendance", icon: CalendarCheck },
            { href: "/dashboard/staff/leaves", label: "Staff Leaves", icon: CalendarX },
            { href: "/dashboard/staff/salary", label: "Staff Salary", icon: Banknote },
            { href: "/dashboard/staff/lectures", label: "Staff Lectures", icon: BookOpen },
        ]
    },
    {
        title: "USER MANAGEMENT",
        items: [
            { href: "/dashboard/users/manage", label: "Manage Users", icon: UserCog },
            { href: "/dashboard/users/roles", label: "Manage Roles", icon: Lock },
            { href: "/dashboard/users/designations", label: "Designations", icon: Briefcase },
        ]
    },
    {
        title: "OFFERS",
        items: [
            { href: "/dashboard/offers", label: "Offers", icon: Gift },
        ]
    },
    {
        title: "SETTINGS",
        items: [
            { href: "/dashboard/settings/general", label: "Settings", icon: Settings },
            { href: "/dashboard/settings/payment", label: "Payment Settings", icon: Settings2 },
            { href: "/dashboard/settings/whatsapp", label: "WhatsApp Templates", icon: MessageSquare },
            { href: "/dashboard/settings/password", label: "Change Password", icon: KeyRound },
            { href: "/dashboard/settings/backup", label: "Secure Backup", icon: ShieldCheck },
        ]
    }
]

export function Sidebar() {
    const { pathname } = useLocation()

    return (
        <div className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col fixed left-0 top-0 overflow-y-auto z-50 shadow-sm scrollbar-thin scrollbar-thumb-gray-200">
            {/* Logo Area */}
            <div className="flex items-center justify-between px-6 py-4">
                <div className="flex items-center gap-2 px-2">
                    <img src="https://mum-objectstore.e2enetworks.net/hdi-multi-tenant/tncdc.in/website/logo/image_6979ce5039f69.png" alt="TNCDC Logo" className="h-12" />
                </div>
                <button className="text-gray-500 hover:text-gray-700">
                    <Menu size={20} />
                </button>
            </div>

            {/* Switch Button */}
            <div className="px-4 mb-4">
                <button className="w-full bg-[#5d5fef] hover:bg-[#4b4dcf] text-white py-3 px-4 rounded-xl text-xs font-semibold shadow-md transition-colors flex flex-col items-center justify-center text-center">
                    <span>Switch to Website</span>
                    <span>Management</span>
                </button>
            </div>

            {/* Search */}
            <div className="px-4 mb-2">
                <div className="relative">
                    <Input
                        placeholder="Search menu..."
                        className="pl-3 pr-4 py-2 h-9 text-sm bg-white border-gray-200"
                    />
                    {/* <Search className="absolute right-3 top-2.5 text-gray-400" size={14} /> */}
                </div>
            </div>

            {/* Dashboard Link (Separate) */}
            <div className="px-4 mb-4">
                <Link
                    to="/dashboard"
                    className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                        pathname === "/dashboard"
                            ? "bg-[#0f172a] text-white shadow-md" // Dark blue active state like image
                            : "text-gray-600 hover:bg-gray-50"
                    )}
                >
                    <LayoutDashboard size={18} />
                    <span>Dashboard</span>
                </Link>
            </div>

            {/* Menu Items */}
            <nav className="flex-1 px-4 space-y-6 pb-8">
                {menuGroups.map((group) => (
                    <div key={group.title}>
                        <h3 className="text-xs font-bold text-blue-900 mb-3 px-2 uppercase tracking-wide">{group.title}</h3>
                        <div className="space-y-1">
                            {group.items.map((item) => (
                                <Link
                                    key={item.href}
                                    to={item.href}
                                    className={cn(
                                        "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
                                        pathname === item.href
                                            ? "bg-[#0f172a] text-white shadow-md font-medium"
                                            : "text-gray-600 hover:text-[#5d5fef] hover:bg-gray-50"
                                    )}
                                >
                                    <item.icon size={18} className={cn("opacity-70", pathname === item.href && "opacity-100")} />
                                    <span>{item.label}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </nav>

            <div className="p-4 mt-auto border-t border-gray-100">
                <p className="text-xs text-center text-gray-400">Copyright 2026-27 © DITRP INDIA All rights reserved.</p>
            </div>
        </div>
    )
}
