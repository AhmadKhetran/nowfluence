export default function NavBar() {
    return (
      <nav className="w-full bg-blue-50 shadow px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-semibold text-[#23b8b8]">newfluence</div>

          {/* Auth Links */}
          <div className="space-x-4">
            <a href="#" className="text-gray-600 font-semibold hover:text-gray-900">
              Sign Up
            </a>
            <a
              href="#"
              className="px-4 py-2 font-semibold  text-[#23b8b8] rounded "
            >
              Login
            </a>
          </div>
        </div>
      </nav>
    );
  }
