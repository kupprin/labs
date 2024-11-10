export const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">My Website</h1>
                <nav className="space-x-4">
                    <a href="#home" className="hover:text-gray-300">Home</a>
                    <a href="#about" className="hover:text-gray-300">About</a>
                    <a href="#contact" className="hover:text-gray-300">Contact</a>
                </nav>
            </div>
        </header>
    );
};