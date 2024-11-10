import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import profileImage from "../assets/image.png"; // Import your local image

export const About = () => {
    return (
        <main>
            <Header />
            <div className="flex justify-center">
            <div className="flex flex-col items-center mt-10 p-6 bg-white rounded-lg shadow-md w-full max-w-3xl">
                <img 
                    src={profileImage} 
                    alt="Profile" 
                    className="rounded-full w-32 h-32 mb-4"
                />
                <h2 className="text-3xl font-semibold mb-6">Обо мне</h2>

                {/* Education Section */}
                <section className="w-full mb-6">
                    <h3 className="text-xl font-bold mb-2">Обучение</h3>
                    <p className="text-gray-700">
                        Являюсь студенткой 3-го курса ДВФУ (год выпуска 2026).
                    </p>
                </section>

                {/* Experience Section */}
                <section className="w-full mb-6">
                    <h3 className="text-xl font-bold mb-2">Опыт</h3>
                    <p className="text-gray-700">
                        На данном этапе своей жизни я запрограммировала несколько визуальных новелл, ко всему прочему я постоянно публикую свои рисунки в диджитал формате на своем телеграмм-канале, беру коммишены и развиваюсь в сфере системного гейм-дизайна.
                    </p>
                </section>

                {/* Interests Section */}
                <section className="w-full">
                    <h3 className="text-xl font-bold mb-2">Интересы</h3>
                    <p className="text-gray-700">
                        Я увлекаюсь азиатской культурой, в особенности мне нравится творчество китайской писательницы Мосян Тунсю и работы японской мангаки Яна Тобосо.
                    </p>
                </section>
            </div>
            </div>
            <Footer />
        </main>
    );
};
