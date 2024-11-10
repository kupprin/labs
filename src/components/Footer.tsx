export const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-4 mt-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">&copy; 2024 My Website. All rights reserved.</p>
            <nav className="space-x-4 mt-4 md:mt-0">
                <a href="#privacy" className="hover:text-gray-300">Privacy Policy</a>
                <a href="#terms" className="hover:text-gray-300">Terms of Service</a>
                <a href="#contact" className="hover:text-gray-300">Contact Us</a>
            </nav>
        </div>
    </footer>
    );
};