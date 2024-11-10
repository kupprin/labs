import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import profileImage from "../assets/image.png"; // Import your local image

export const Home = () => {
    return (
        <main>
            <Header />
            <div className="flex justify-center h-96">
                <div className="flex flex-col items-center mt-10 p-4 bg-white rounded-lg shadow-md w-full max-w-md">
                    <img 
                        src={profileImage}
                        alt="Profile" 
                        className="rounded-full w-32 h-32 mb-4"
                    />
                    <h2 className="text-2xl font-semibold mb-2">Камилла</h2>
                    <p className="text-gray-600 text-center">
                        Приветствую на своем сайте! Я учусь на 3 курсе университета, а в свободное время рисую и увлекаюсь разработкой компьютерных игр. Здесь вы можете следить, как за моим творчеством, так и за играми, которые я делаю.
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    );
};