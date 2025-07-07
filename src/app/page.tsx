import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-white text-zinc-700 min-h-screen flex flex-col items-center justify-center p-4">
      <div
        className="bg-[url('/images/foto.jpg')] bg-cover bg-center bg-no-repeat w-42 h-42 rounded-full mb-4"
      />
      <div className="flex flex-col items-center text-center gap-6">
        <h1 className="text-3xl font-bold w-[90%] text-center">João Marcos Alecsandro Kirimis</h1>
        <p className="text-lg w-[90%] lg:w-3/5 text-center">
          Desenvolvedor de software com foco em aplicações mobile e web. Experiência com React, React Native, Flask e banco de dados.
        </p>
        <Link href="/politica" className="text-blue-600 underline"> Ver Política de Privacidade </Link>
      </div>
    </div>
  );
}