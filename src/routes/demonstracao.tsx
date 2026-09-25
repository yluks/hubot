import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  MessageCircle,
  Instagram,
  Linkedin,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import hubotBlack from "@/assets/hubot-black.png";
import videoHubotTelaGeral from "@/assets/Video_Hubot_-_tela_geral_1.mp4";

const easeOut = [0.22, 1, 0.36, 1] as const;

export const Route = createFileRoute("/demonstracao")({
  head: () => ({
    meta: [
      { title: "Solicitar Demonstração — HUBOT" },
      {
        name: "description",
        content:
          "Preencha seus dados para testar o HUBOT e transformar seu atendimento digital com IA e organização.",
      },
    ],
  }),
  component: Demonstracao,
});

function Demonstracao() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    empresa: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const demoRef = useRef<HTMLElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setIsSuccess(false);

    try {
      const response = await fetch(
        "https://crm-rho-ruby.vercel.app/api/webhooks/leads",
        {
          method: "POST",
          headers: { 
            "Content-Type": "application/json",
            "Authorization": "Bearer 514696d278fa7eab1af18e221a4e96ef4927c6b1c2bb77059e6e402016d99716"
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ nome: "", email: "", whatsapp: "", empresa: "" });
      } else {
        // Log error internally but don't show to user as per request
        console.error("Submission failed with status:", response.status);
      }
    } catch (err) {
      console.error("Erro ao enviar formulário:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-gray-800">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-12 text-center md:py-16">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
            Agende sua Demonstração
          </h1>
          <p className="mt-3 text-lg text-gray-500">
            Falta pouco para você transformar sua operação de atendimento.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-12 md:py-20">
        <Link
          to="/"
          className="group mb-12 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
        >
          <ArrowLeft size={18} className="transition-transform duration-200 group-hover:-translate-x-1" />
          Voltar para o início
        </Link>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Lado Esquerdo: Vídeo/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: easeOut }}
          >
            <div className="relative rounded-2xl shadow-2xl overflow-hidden aspect-video bg-black">
              <video
                src={videoHubotTelaGeral}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-4 left-4 z-10 bg-black/80 text-white px-3 py-1.5 text-sm font-medium rounded-lg backdrop-blur-sm">
                Tour completo da plataforma
              </span>
            </div>
            <div className="mt-8 space-y-4">
              <h3 className="text-xl font-bold text-gray-900">Por que ver a demonstração?</h3>
              <ul className="space-y-3">
                {[
                  "Visualização real do painel de múltiplos atendentes",
                  "Como funciona a integração com Protheus/ERPs",
                  "Configuração de automações e chatbots",
                  "Relatórios e métricas de desempenho em tempo real",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#ffd33d]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Lado Direito: Formulário */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOut, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="rounded-2xl bg-white p-8 text-gray-900 shadow-2xl ring-1 ring-gray-100"
          >
            <h3 className="text-2xl font-extrabold tracking-tight">Solicite seu acesso</h3>
            <p className="mt-1 text-sm text-gray-500">
              Preencha os dados abaixo e nosso time comercial entrará em contato em até 1 hora útil.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { label: "Nome completo", type: "text", placeholder: "Seu nome", name: "nome" as const },
                { label: "Email corporativo", type: "email", placeholder: "voce@empresa.com", name: "email" as const },
                { label: "WhatsApp", type: "tel", placeholder: "(00) 00000-0000", name: "whatsapp" as const },
                { label: "Empresa", type: "text", placeholder: "Nome da empresa", name: "empresa" as const },
              ].map((f) => (
                <div key={f.name}>
                  <label className="text-xs font-semibold uppercase tracking-wider text-gray-600">
                    {f.label}
                  </label>
                  <input
                    type={f.type}
                    placeholder={f.placeholder}
                    value={formData[f.name]}
                    onChange={(e) => setFormData({ ...formData, [f.name]: e.target.value })}
                    required
                    className="mt-1 w-full rounded-md bg-gray-50 border border-gray-200 px-4 py-3 text-sm transition-colors duration-200 hover:bg-gray-100 focus:bg-white focus:border-[#ffd33d] focus:ring-2 focus:ring-[#ffd33d]/50 focus:outline-none"
                  />
                </div>
              ))}
            </div>

            <button
              type="submit"
              disabled={isSubmitting || isSuccess}
              className={`mt-8 w-full rounded-md py-4 text-sm font-extrabold uppercase tracking-wider shadow-md transition-all duration-300 ease-out ${
                isSuccess
                  ? "bg-green-500 text-white cursor-default"
                  : isSubmitting
                    ? "bg-[#ffd33d] text-black opacity-60 cursor-not-allowed"
                    : "bg-[#ffd33d] text-black hover:bg-[#e6be2e] hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(255,211,61,0.3)] active:translate-y-0 active:shadow-none"
              }`}
            >
              {isSuccess ? "Solicitação Enviada! ✔️" : isSubmitting ? "Enviando..." : "Confirmar e Solicitar"}
            </button>


            {isSuccess && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 rounded-md bg-green-50 p-3 text-xs font-medium text-green-700 border border-green-100"
              >
                Tudo pronto! Nossa equipe entrará em contato em breve.
              </motion.div>
            )}

            <p className="mt-4 text-center text-xs text-gray-400">
              Seus dados estão protegidos e serão usados apenas para o contato de demonstração.
            </p>
          </motion.form>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function Footer() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <footer onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div onMouseMove={handleMouseMove} className="relative overflow-hidden bg-[#fff8dc] text-gray-800">
        <div
          className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ease-in-out ${isHovered ? "opacity-100" : "opacity-0"}`}
          style={{
            background:
              "radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(0,0,0,0.09), transparent 40%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16">
          <div className="grid gap-10 md:grid-cols-3 items-start">
            <div className="flex flex-col items-start justify-start">
              <Link to="/" className="flex items-center" aria-label="HUBOT">
                <img src={hubotBlack} alt="HUBOT" className="w-32 md:w-40 h-auto shrink-0 object-contain" />
              </Link>
              <p className="mt-4 text-sm leading-relaxed text-gray-700">{"\n"}</p>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-black">Links úteis</h4>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li>
                  <a
                    href="#"
                    className="inline-block transition-all duration-200 ease-out hover:translate-x-1 hover:text-black hover:font-medium"
                  >
                    Política de privacidade
                  </a>
                </li>
                <li>
                  <Link
                    to="/termos-de-uso"
                    className="inline-block transition-all duration-200 ease-out hover:translate-x-1 hover:text-black hover:font-medium"
                  >
                    Termos de uso
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block transition-all duration-200 ease-out hover:translate-x-1 hover:text-black hover:font-medium"
                  >
                    LGPD
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block transition-all duration-200 ease-out hover:translate-x-1 hover:text-black hover:font-medium"
                  >
                    Política de segurança
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-black">Contato</h4>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <MapPin size={16} className="mt-0.5 shrink-0" /> Rua Bruno Veloso 603 - Recife. PE
                </li>
                <li className="flex items-start gap-2">
                  <Mail size={16} className="mt-0.5 shrink-0" /> diego@hubvision.com.br
                </li>
                <li className="flex items-start gap-2">
                  <MessageCircle size={16} className="mt-0.5 shrink-0" /> (81) 99669-6708
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div onMouseMove={handleMouseMove} className="relative overflow-hidden bg-neutral-900">
        <div
          className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ease-in-out ${isHovered ? "opacity-100" : "opacity-0"}`}
          style={{
            background:
              "radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,211,61,0.15), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-6">
          <div className="flex flex-col items-start justify-between gap-4 text-xs text-gray-400 sm:flex-row sm:items-center">
            <p>© 2023 HUBOT — CNPJ 00.000.000/0001-00. Todos os direitos reservados.</p>
            <div className="flex items-center gap-5">
              {[
                { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/hubot_oficial/" },
                { Icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/hubvision0/" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-gray-400 transition-all duration-300 ease-out hover:text-[#ffd33d] hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(255,211,61,0.8)]"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
