import { LogOut, Sparkles, User as UserIcon } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"

export function Header() {
    const navigate = useNavigate();
    return (
        <header className="h-16 bg-white sticky top-0 z-40 px-8 flex items-center justify-between ml-64">
            <div className="flex items-center gap-2">
                <h1 className="font-medium text-gray-800 text-xl flex items-center gap-2">
                    Achieve More! <Sparkles className="text-orange-400 fill-orange-400" size={18} />
                </h1>
            </div>

            <div className="flex items-center gap-4">
                <Button variant="outline" size="sm" className="bg-gray-100 border-none text-gray-700 hover:bg-gray-200 gap-2 rounded-lg" asChild>
                    <Link to="/dashboard/profile" target="_blank">
                        <UserIcon size={16} />
                        <span>Profile</span>
                    </Link>
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    className="bg-gray-100 border-none text-gray-700 hover:bg-gray-200 gap-2 rounded-lg"
                    onClick={() => navigate('/login')}
                >
                    <LogOut size={16} />
                    <span>Log out</span>
                </Button>
            </div>
        </header>
    )
}






