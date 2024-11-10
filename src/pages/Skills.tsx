import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const Skills = () => {
    return (
        <main className="">
            <Header />
            <div className="flex justify-center"> 
            <div className="flex flex-col items-center mt-10 p-6 bg-white rounded-lg shadow-md w-full max-w-3xl">
                <h2 className="text-3xl font-semibold mb-6">Навыки</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>JavaScript (React, Node.js)</li>
                    <li>HTML & CSS (Tailwind, Bootstrap)</li>
                    <li>Python (Django, Flask)</li>
                    <li>Java (Spring Boot)</li>
                    <li>SQL & Databases (PostgreSQL, MySQL)</li>
                    <li>Version Control (Git, GitHub)</li>
                    <li>Ren'Py</li>
                    <li>Procreate</li>
                    <li>Krita</li>
                </ul>
            </div>
            </div>
            <Footer />
        </main>
    );
};
