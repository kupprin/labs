import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const Projects = () => {
    const projects = [
        {
            title: "Castle of Sadness",
            description: "Визуальная новелла в жанре фэнтезийного средневековья.",
            link: ""
        },
        {
            title: "Калупсо",
            description: "Здесь вы сможете ознакомиться с моими работами в диджитал формате.",
            link: "https://t.me/imcallisto"
        },
        
    ];

    return (
        <main className="">
            <Header />
            <div className="flex justify-center">
            <div className="flex flex-col items-center mt-10 p-6 bg-white rounded-lg shadow-md w-full max-w-4xl">
                <h2 className="text-3xl font-semibold mb-6">Мои проекты</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                    {projects.map((project, index) => (
                        <div key={index} className="p-4 border rounded-lg shadow-sm bg-gray-50">
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-700 mb-4">{project.description}</p>
                            <a 
                                href={project.link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-blue-500 hover:underline"
                            >
                                Посмотреть проект
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            </div>
            <Footer />
        </main>
    );
};
