export const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Calypso</h1>
                <nav className="space-x-4">
                    <a href="/" className="hover:text-gray-300">Главная</a>
                    <a href="about" className="hover:text-gray-300">Обо мне</a>
                    <a href="skills" className="hover:text-gray-300">Навыки</a>
                    <a href="projects" className="hover:text-gray-300">Проекты</a>
                    <a href="contacts" className="hover:text-gray-300">Контакты</a>
                </nav>
            </div>
        </header>
    );
};