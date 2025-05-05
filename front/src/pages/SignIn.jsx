import React from "react";
import LoginImage from '../assets/Login.png'; // Caminho para a imagem

function SignIn() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-50">
            <div className="flex w-full h-full bg-white rounded-none lg:rounded-3xl">
                <div className="flex flex-col justify-center align-center w-full lg:w-1/2 px-8 lg:px-16 py-12">
                    <h1 className="text-[48px] font-semibold mb-6 league-regular">
                        Welcome to <span className="text-[#3C096C] league-regular">Smart</span>{" "}
                        <span className="text-[48px] text-[#17CF96] league-regular">City</span>
                    </h1>
                    <p className="text-[48px] text-black league-regular font-thin text-10px mb-10">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <form className="space-y-6">
                        {/* Campo de E-mail */}
                        <div>
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="email"
                            >
                                E-mail
                            </label>
                            <input
                                id="email"
                                type="email"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder="Enter your e-mail"
                            />
                        </div>
                        {/* Campo de Senha */}
                        <div>
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder="Enter your password"
                            />
                        </div>
                        {/* Link "Forgot Password" */}
                        <div className="text-right">
                            <a
                                href="#"
                                className="text-purple-600 text-sm hover:underline"
                            >
                                Forgot your password?
                            </a>
                        </div>
                        {/* Botão "Sign In" */}
                        <button
                            type="submit"
                            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition"
                        >
                            Sign in
                        </button>
                    </form>
                    {/* Link "Sign Up" */}
                    <p className="mt-6 text-sm text-center text-gray-500">
                        Don’t have an account?{" "}
                        <a href="#" className="text-purple-600 hover:underline">
                            Sign Up
                        </a>
                    </p>
                </div>

                {/* Seção Direita - Imagem */}
                <div className="hidden lg:block w-1/2">
                    <img
                        src={LoginImage}
                        alt="City View"
                        className="w-full h-full object-cover rounded-tr-3xl rounded-br-3xl"
                    />
                </div>
            </div>

            {/* Rodapé */}
            <footer className="absolute bottom-4 text-gray-500 text-sm text-center w-full">
                © 2025 Lucas Bareli. All rights reserved
            </footer>
        </div>
    );
}

export default SignIn;
