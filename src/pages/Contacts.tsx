import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
    name: string;
    email: string;
    message: string;
}

export const Contacts = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Здесь вы можете добавить логику для отправки данных формы, например, отправку на сервер
        console.log("Submitted:", formData);
        // Очистка формы после отправки
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <main className="">
            <Header />
            <div className="flex justify-center">
            <div className="flex flex-col items-center mt-10 p-6 bg-white rounded-lg shadow-md w-full max-w-lg">
                <h2 className="text-3xl font-semibold mb-6">Связаться со мной</h2>
                <form onSubmit={handleSubmit} className="w-full space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-gray-700">Имя</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-700">Почта</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-gray-700">Сообщение</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md"
                            rows={5}
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                    >
                        Отправить
                    </button>
                </form>
            </div>
            </div>
            <Footer />
        </main>
    );
};
