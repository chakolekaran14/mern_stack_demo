import { useState } from "react"
import { Link } from "react-router-dom"
export default function NavbarDemo() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="bg-gray-900 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

                {/* Logo */}
                <h1 className="text-xl font-bold">MyApp</h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6">
                    <li className="hover:text-orange-400 cursor-pointer">
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li className="hover:text-orange-400 cursor-pointer">
                        <Link to={"/add-student"}>AddNew Student</Link>
                    </li>
                    <li className="hover:text-orange-400 cursor-pointer">
                        <Link to={"/edit-student/:id"}>Edit Student</Link>
                    </li>
                    <li className="hover:text-orange-400 cursor-pointer">Contact</li>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className="md:hidden bg-gray-800 px-4 pb-4 space-y-3">
                    <li className="hover:text-orange-400 cursor-pointer">Home</li>
                    <li className="hover:text-orange-400 cursor-pointer">AddNew Student</li>
                    <li className="hover:text-orange-400 cursor-pointer">Edit</li>
                    <li className="hover:text-orange-400 cursor-pointer">Contact</li>
                </ul>
            )}
        </nav>
    )
}