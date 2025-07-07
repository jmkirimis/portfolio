import Link from "next/link";

export default function PoliticaPage() {
  return (
    <div className="bg-white text-zinc-700 min-h-screen flex flex-col p-4">
      <div className="flex items-center justify-center mb-6">
        <h1 className="text-3xl font-bold">Política de Privacidade</h1>
      </div>
      <p>Última atualização: 07/07/2025</p>

      <p>Esta Política de Privacidade descreve como as suas informações pessoais são coletadas, usadas e compartilhadas quando você utiliza o aplicativo <strong>Glossário ECEE</strong>, desenvolvido por <strong>João Marcos Alecsandro Kirimis</strong>.</p>

      <h2 className="text-xl font-semibold mt-4">1. Informações que Coletamos</h2>
      <ul className="list-disc list-inside">
        <li>Informações fornecidas pelo usuário.</li>
        <li>Informações de uso e dados técnicos.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4">2. Como Usamos as Informações</h2>
      <p>Usamos os dados para fornecer e melhorar os serviços, personalizar a experiência e analisar estatísticas.</p>

      <h2 className="text-xl font-semibold mt-4">3. Compartilhamento de Informações</h2>
      <p>Não compartilhamos seus dados com terceiros sem consentimento, exceto quando exigido por lei ou por parceiros de infraestrutura.</p>

      <h2 className="text-xl font-semibold mt-4">4. Armazenamento e Segurança</h2>
      <p>Adotamos medidas para proteger suas informações, mas não garantimos segurança absoluta.</p>

      <h2 className="text-xl font-semibold mt-4">5. Direitos do Usuário</h2>
      <p>Você pode solicitar acesso, correção ou exclusão de seus dados pessoais a qualquer momento.</p>

      <h2 className="text-xl font-semibold mt-4">6. Contato</h2>
      <p>Para dúvidas, entre em contato via e-mail: <Link href="mailto:joao.kirimis@gmail.com"className="text-blue-600 underline"> joao.kirimis@gmail.com</Link></p>

      <Link href="/" className="w-48 text-blue-600 underline block mt-6"> ← Voltar para o Portfólio </Link>
    </div>
  );
}
