import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

const easeOut = [0.22, 1, 0.36, 1] as const;
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Bot,
  Play,
  Check,
  X,
  MessageCircle,
  Instagram,
  Send,
  Facebook,
  Users,
  LayoutGrid,
  Zap,
  Bell,
  BarChart3,
  Shield,
  Workflow,
  Sparkles,
  ArrowRight,
  Mail,
  MapPin,
  Linkedin,
  Youtube,
} from "lucide-react";
import hubotWhite from "@/assets/hubot-white.png";
import videoHubotMultiplos from "@/assets/Video_Hubot_-_Multiplos.mp4";
import videoHubotKanban from "@/assets/Video_Hubot_Kanban.mp4";
import videoHubotTelaGeral from "@/assets/Video_Hubot_-_tela_geral_1.mp4";
import logoAmigotech from "@/assets/logos/amigotech.png";
import logoBiosystems from "@/assets/logos/biosystems.png";
import logoAsa from "@/assets/logos/asa.png";
import logoAutonorte from "@/assets/logos/autonorte.png";
import logoCapetro from "@/assets/logos/capetro.png";
import logoBokus from "@/assets/logos/bokus.png";
import logoGrauTecnico from "@/assets/logos/grautecnico.png";
import hubotBlack from "@/assets/hubot-black.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HUBOT — Atendimento ágil e inteligente para sua empresa" },
      {
        name: "description",
        content:
          "HUBOT é a plataforma SaaS que conecta sua empresa aos clientes via WhatsApp, Instagram e mais — com integração TOTVS, Kanban e múltiplos atendentes.",
      },
      { property: "og:title", content: "HUBOT — Atendimento ágil e inteligente" },
      { property: "og:description", content: "A forma mais ágil e eficiente de conectar sua empresa aos clientes" },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Navbar />
      <Hero />
      <SocialProof />
      <PainSolution />
      <FeatureZ1 />
      <FeatureZ2 />
      <FeatureZ3 />
      <AdvancedGrid />
      <DemoLead />
      <Pricing />
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

/* -------------------- NAVBAR -------------------- */
function Navbar() {
  const links = [
    { label: "O que é", id: "about" },
    { label: "Funcionalidades", id: "features" },
    { label: "Integração Protheus", id: "integration" },
    { label: "Planos", id: "pricing" },
  ];
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };
  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <nav className="flex items-center justify-between py-6 px-8 md:px-16">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center shrink-0"
          aria-label="HUBOT"
        >
          <img src={hubotWhite} alt="HUBOT" className="h-36 md:h-44 w-auto -my-10" />
        </a>
        <ul className="hidden md:flex items-center gap-10 lg:gap-12">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={(e) => scrollToSection(e, l.id)}
                className="text-[17px] font-medium text-white/90 transition-all duration-300 hover:text-[#ffd33d] hover:drop-shadow-[0_0_8px_rgba(255,211,61,0.5)]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <Link
          to="/demonstracao"
          className="inline-flex items-center rounded-full bg-[#ffd33d] px-8 py-3.5 text-lg font-extrabold text-black transition-all duration-300 ease-out hover:scale-105 hover:bg-[#ffdf66] hover:shadow-[0_10px_30px_rgba(255,211,61,0.4)]"
        >
          Teste Grátis
        </Link>
      </nav>
    </header>
  );
}

/* -------------------- HERO -------------------- */
function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    sectionRef.current.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    sectionRef.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };
  return (
    <section
      id="top"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="group relative overflow-hidden bg-black text-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 211, 61, 0.255), transparent 40%)",
        }}
      />
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 pt-36 md:pt-48 pb-20 md:pb-24 lg:grid-cols-2">



        <div>
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0 }}
            className="inline-block rounded-full border border-[#ffd33d] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#ffd33d]"
          >
            O FUTURO DO ATENDIMENTO JÁ COMEÇOU
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.1 }}
            className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
          >
            A forma mais ágil e eficiente de{" "}
            <span className="text-[#ffd33d]">conectar sua empresa</span> aos clientes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg text-gray-400"
          >
            Centralize WhatsApp, Instagram, Telegram e Messenger num único painel. Integre com Protheus,
            organize com Kanban e venda mais com múltiplos atendentes.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              to="/demonstracao"
              className="inline-flex items-center justify-center rounded-md bg-[#ffd33d] px-6 py-3.5 text-sm font-bold text-black shadow-md transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,211,61,0.4)]"
            >
              Teste 7 dias grátis
            </Link>
            <a
              href="#video"
              className="inline-flex items-center gap-2 rounded-md border border-white/40 bg-transparent px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-[#ffd33d] hover:-translate-y-1 hover:bg-white/5"
            >
              <Play size={16} fill="currentColor" />
              Ver vídeo na prática
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.4 }}
            className="mt-10 flex items-center gap-6 text-xs text-gray-500"
          >
            {/* Removed "Sem cartão de crédito" and "Suporte humano" spans */}
          </motion.div>
        </div>

        {/* Right: phone mock with floating integrations */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: easeOut, delay: 0.2 }}
          className="relative mx-auto flex h-[520px] w-full max-w-md items-center justify-center"
        >
          <div className="relative h-[480px] w-[240px] rounded-[2.5rem] border-[10px] border-gray-800 bg-gray-900 shadow-2xl transition-transform duration-500 ease-out hover:scale-[1.02] hover:-translate-y-2 hover:drop-shadow-[0_0_40px_rgba(255,211,61,0.35)]">
            <div className="absolute left-1/2 top-2 h-1.5 w-16 -translate-x-1/2 rounded-full bg-black" />
            <div className="m-2 mt-6 flex h-[calc(100%-3rem)] flex-col overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[#ffd33d] via-amber-200 to-white">
              <div className="bg-black/90 px-3 py-2 text-[10px] font-semibold text-white flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded bg-[#ffd33d] text-black">
                  <Bot size={11} />
                </span>
                HUBOT&nbsp;
              </div>
              <div className="flex-1 space-y-2 p-3">
                <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-black px-3 py-2 text-[10px] text-white">
                  Olá! Quero saber sobre os planos.
                </div>
                <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-white px-3 py-2 text-[10px] text-gray-900 shadow">
                  Claro! Te envio agora todas as opções 👇
                </div>
                <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-white px-3 py-2 text-[10px] text-gray-900 shadow">
                  <div className="font-semibold">Plano Premium</div>
                  <div className="text-gray-500">{"\n"} 599{"\n"}</div>
                </div>
                <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-black px-3 py-2 text-[10px] text-white">
                  Perfeito! Vamos contratar.
                </div>
              </div>
            </div>
          </div>

          {/* Floating integrations */}
          {[
            { Icon: MessageCircle, cls: "top-4 -left-2 bg-green-500", delay: "0s" },
            { Icon: Instagram, cls: "top-32 -right-2 bg-gradient-to-br from-pink-500 to-purple-600", delay: "1s" },
            { Icon: Send, cls: "bottom-32 -left-4 bg-sky-500", delay: "1.5s" },
            { Icon: Facebook, cls: "bottom-8 -right-4 bg-blue-600", delay: "0.5s" },
          ].map(({ Icon, cls, delay }, i) => (
            <div
              key={i}
              style={{ animationDelay: delay }}
              className={`absolute grid h-14 w-14 place-items-center rounded-2xl text-white shadow-xl animate-float ${cls}`}
            >
              <Icon size={26} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------- SOCIAL PROOF -------------------- */
function SocialProof() {
  const logos: { name: string; src?: string }[] = [
    { name: "Amigotech", src: logoAmigotech },
    { name: "BioSystems", src: logoBiosystems },
    { name: "Asa Rent a Car", src: logoAsa },
    { name: "Autonorte", src: logoAutonorte },
    { name: "Capetro", src: logoCapetro },
    { name: "Boku's", src: logoBokus },
    { name: "Grau Técnico", src: logoGrauTecnico },
  ];

  const renderLogo = (l: { name: string; src?: string }, i: number) =>
    l.src ? (
      <img
        key={i}
        src={l.src}
        alt={l.name}
        className="h-[115px] md:h-[173px] w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 mix-blend-multiply shrink-0"
      />
    ) : (
      <span
        key={i}
        className="h-[115px] md:h-[173px] flex items-center px-4 text-base md:text-lg font-extrabold tracking-tight text-black/80 opacity-80 hover:opacity-100 transition-opacity duration-300 shrink-0"
      >
        {l.name}
      </span>
    );

  return (
    <section className="w-full bg-[#ffd33d]">
      <Reveal y={32} duration={0.6} className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 sm:px-6 py-5 md:flex-row md:gap-8 md:py-6">
        <h3 className="shrink-0 text-center text-base font-bold text-black md:text-left md:text-lg md:w-1/3 md:max-w-xs">
          Empresas estruturadas com a tecnologia HUBOT:
        </h3>
        <div
          className="relative md:w-2/3 flex-1 overflow-hidden whitespace-nowrap flex items-center w-full"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div className="flex shrink-0 items-center gap-12 md:gap-24 px-6 animate-[marquee_30s_linear_infinite]">
            {logos.map(renderLogo)}
          </div>
          <div className="flex shrink-0 items-center gap-12 md:gap-24 px-6 animate-[marquee_30s_linear_infinite]" aria-hidden="true">
            {logos.map(renderLogo)}
          </div>
        </div>
      </Reveal>
    </section>
  );
}


/* -------------------- PAIN vs SOLUTION -------------------- */
function PainSolution() {
  const pains = [
    "WhatsApp desorganizado entre vendedores",
    "Atendentes perdendo conversas importantes",
    "Falta de relatórios e métricas",
    "Clientes esperando horas por uma resposta",
    "Zero integração com seu ERP",
  ];
  const solutions = [
    "Caixa única com múltiplos atendentes",
    "Histórico completo de cada cliente",
    "Dashboards e métricas em tempo real",
    "Respostas rápidas e automações inteligentes",
    "Integração nativa com Protheus e ERPs",
  ];

  const [spot, setSpot] = useState<{ x: number; y: number } | null>(null);
  const solutionRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = solutionRef.current?.getBoundingClientRect();
    if (!rect) return;
    setSpot({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section id="about" className="bg-[#f9fafb]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 md:py-24">
        <div className="mx-auto max-w-2xl text-center animate-fade-in-up">
          <span className="text-sm font-bold uppercase tracking-wider text-[#ffd33d]">
            Evolua seu atendimento
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Pare de perder vendas por desorganização
          </h2>
          <p className="mt-4 text-gray-600">
            Veja a diferença entre o caos atual e a sua operação com HUBOT.
          </p>
        </div>

        <div className="group/cards mt-14 grid gap-8 lg:grid-cols-2">
          {/* Card 1 — Sem o HUBOT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: easeOut }}
            className="group/pain relative rounded-2xl bg-gray-50 p-8 ring-1 ring-gray-100 transition-all duration-300 group-hover/cards:opacity-40 group-hover/cards:blur-[2px] hover:!opacity-100 hover:!blur-none hover:ring-red-200 hover:shadow-[0_20px_60px_-15px_rgba(239,68,68,0.25)]"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-red-100 text-red-400">
                <X size={26} strokeWidth={3} />
              </span>
              <h3 className="text-2xl font-bold text-gray-900">Sem o HUBOT</h3>
            </div>
            <ul className="space-y-4">
              {pains.map((p, i) => (
                <li
                  key={p}
                  className="flex items-start gap-3 text-gray-700 transition-transform duration-300 ease-out group-hover/pain:translate-x-1"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <X size={18} className="mt-1 shrink-0 text-red-500" strokeWidth={3} />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Card 2 — Com o HUBOT (Spotlight) */}
          <motion.div
            ref={solutionRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setSpot(null)}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: easeOut }}
            className="group/sol relative overflow-hidden rounded-2xl bg-[#fff8dc] p-8 ring-1 ring-[#ffd33d]/30 shadow-md transition-all duration-300 group-hover/cards:opacity-40 group-hover/cards:blur-[2px] hover:!opacity-100 hover:!blur-none hover:!scale-105 hover:ring-2 hover:ring-[#ffd33d] hover:shadow-xl hover:shadow-yellow-500/20"
          >
            {spot && (
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(360px circle at ${spot.x}px ${spot.y}px, rgba(255,211,61,0.25), transparent 70%)`,
                }}
              />
            )}
            <div className="relative">
              <div className="mb-6 flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#ffd33d] text-black">
                  <Check size={26} strokeWidth={3} />
                </span>
                <h3 className="text-2xl font-bold text-gray-900">Com o HUBOT</h3>
              </div>
              <ul className="space-y-4">
                {solutions.map((s, i) => (
                  <li
                    key={s}
                    className="flex items-start gap-3 text-gray-700 transition-all duration-300 ease-out group-hover/sol:translate-x-2 group-hover/sol:text-gray-900"
                    style={{ transitionDelay: `${i * 60}ms` }}
                  >
                    <Check size={18} className="mt-1 shrink-0 text-green-600" strokeWidth={3} />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- FEATURE Z BLOCKS -------------------- */
function VideoPlaceholder({ ratio = "16/9", label }: { ratio?: string; label: string }) {
  return (
    <div
      className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-black shadow-xl ring-1 ring-black/5 transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)]"
      style={{ aspectRatio: ratio }}
    >
      <div className="absolute inset-0 grid place-items-center">
        <button className="grid h-20 w-20 place-items-center rounded-full bg-[#ffd33d] text-black shadow-2xl transition-all duration-300 ease-out group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(255,211,61,0.6)]">
          <Play size={32} fill="currentColor" className="ml-1" />
        </button>
      </div>
      <div className="absolute bottom-4 left-4 rounded-md bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur opacity-80 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:-translate-y-1">
        {label}
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,211,61,0.15),transparent_50%)]" />
    </div>
  );
}

function FeatureZ1() {
  return (
    <section id="features" className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 py-20 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          <video
            src={videoHubotMultiplos}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-cover rounded-2xl shadow-2xl overflow-hidden"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: easeOut }}
          className="group/text"
        >
          <span className="inline-block rounded-full bg-[#fff8dc] px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700 transition-colors duration-300 ease-out group-hover/text:bg-[#ffe98a]">
            Gestão de equipe
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Múltiplos atendentes em um único número
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Sua equipe inteira atende pelo mesmo WhatsApp, com distribuição automática, transferência
            entre setores e acompanhamento em tempo real do desempenho de cada agente.
          </p>
          <Stagger staggerChildren={0.1} className="mt-6 space-y-3">
            {[
              "Distribuição inteligente de tickets",
              "Transferência entre setores em 1 clique",
              "Relatórios individuais por atendente",
            ].map((i) => (
              <StaggerItem key={i} y={12}>
                <div className="group/item flex items-center gap-2 text-gray-700 transition-all duration-300 ease-out hover:translate-x-2 hover:text-black">
                  <Check
                    size={18}
                    className="text-green-600 transition-transform duration-300 ease-out group-hover/item:scale-110"
                    strokeWidth={3}
                  />{" "}
                  {i}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </motion.div>
      </div>
    </section>
  );
}

function FeatureZ2() {
  return (
    <section id="integration" className="bg-gray-50">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 py-20 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: easeOut }}
          className="order-2 lg:order-1"
        >
          <span className="inline-block rounded-full bg-[#fff8dc] px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700 transition-colors duration-300 ease-out hover:bg-[#ffe98a] hover:text-amber-900">
            Integração
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Integração nativa com Protheus
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Consulte pedidos, boletos, notas fiscais e estoque diretamente no chat. Seu atendimento
            fala a mesma língua do seu ERP.
          </p>
          <Stagger staggerChildren={0.1} className="mt-6 space-y-3">
            {[
              "Consulta de pedidos em tempo real",
              "Emissão e envio de boletos pelo chat",
              "Atualização automática de cadastros",
              "Sincronização bidirecional",
            ].map((i) => (
              <StaggerItem key={i} y={12}>
                <div className="group/item flex items-center gap-2 text-gray-700 transition-all duration-300 ease-out hover:translate-x-2 hover:text-black cursor-default">
                  <Check
                    size={18}
                    className="text-green-600 transition-transform duration-300 ease-out group-hover/item:scale-110"
                    strokeWidth={3}
                  />{" "}
                  {i}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: easeOut }}
          className="order-1 lg:order-2"
        >
          <div className="group rounded-3xl bg-white p-10 shadow-xl ring-1 ring-gray-100 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-center gap-2">
                <div className="grid h-20 w-20 place-items-center rounded-2xl bg-[#25D366] text-white shadow-lg animate-pulse-soft">
                  <WhatsAppIcon size={38} />
                </div>
                <span className="text-sm font-semibold text-gray-700">WhatsApp</span>
              </div>
              <div className="relative flex-1 px-6">
                <div className="h-0.5 w-full bg-gradient-to-r from-green-500 via-[#ffd33d] to-blue-600" />
                <div className="pointer-events-none absolute inset-0 flex items-center">
                  <span className="animate-pingpong group-hover:[animation-duration:1.8s] grid h-10 w-10 place-items-center rounded-full bg-[#ffd33d] text-black shadow-md transition-shadow duration-300 group-hover:shadow-[0_0_15px_#ffd33d]">
                    <Bot size={20} />
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="grid h-20 w-20 place-items-center rounded-2xl bg-blue-600 text-white text-[10px] font-extrabold tracking-wide shadow-lg animate-pulse-soft [animation-delay:1s] text-center px-1">
                  Protheus
                </div>
                <span className="text-sm font-semibold text-gray-700">ERP</span>
              </div>
            </div>
            <div className="mt-8 rounded-xl bg-gray-50 p-4 text-center text-sm text-gray-600">
              Dados sincronizados em{" "}
              <span className="font-bold text-gray-900">tempo real</span>
              <span className="ml-2 inline-block h-2 w-2 rounded-full bg-green-500 align-middle animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FeatureZ3() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 py-20 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          <video
            src={videoHubotKanban}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-cover rounded-2xl shadow-2xl overflow-hidden"
            aria-label="Kanban de atendimentos"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          <span className="inline-block rounded-full bg-[#fff8dc] px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700 transition-colors duration-300 ease-out hover:bg-[#ffe98a]">
            Organização
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Kanban Integrado
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Visualize toda a jornada do cliente em colunas arrastáveis. Do primeiro contato ao
            fechamento, com automações de movimentação e alertas inteligentes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------- ADVANCED GRID -------------------- */
function AdvancedGrid() {
  const cards = [
    { Icon: Zap, title: "Automações", desc: "Fluxos inteligentes que respondem 24/7 sem perder o toque humano." },
    { Icon: Bell, title: "Alertas em tempo real", desc: "Receba notificações sobre clientes parados e SLA estourado." },
    { Icon: BarChart3, title: "Relatórios completos", desc: "Métricas de produtividade, conversão e satisfação." },
    { Icon: Shield, title: "Segurança LGPD", desc: "Criptografia ponta a ponta e conformidade total com a LGPD." },
    { Icon: Workflow, title: "Chatbot com IA", desc: "Bots treinados que entendem contexto e qualificam leads." },
    { Icon: Users, title: "CRM embutido", desc: "Histórico, tags e segmentação de clientes nativo." },
    { Icon: LayoutGrid, title: "API aberta", desc: "Conecte com qualquer sistema da sua operação." },
    { Icon: Sparkles, title: "Respostas prontas", desc: "Biblioteca de mensagens com variáveis dinâmicas." },
  ];
  return (
    <section className="bg-[#fff8dc]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 md:py-24">
        <Reveal y={24} className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-amber-700">
            Recursos avançados
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl whitespace-pre-line">
            Tudo que sua operação precisa{" "}
            {"\n"}em um só lugar
          </h2>
        </Reveal>
        <Stagger staggerChildren={0.05} delayChildren={0.2} className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ Icon, title, desc }) => (
            <StaggerItem key={title} y={20}>
              <div className="group h-full rounded-2xl bg-white p-6 shadow-sm border border-transparent transition-all duration-300 ease-out hover:border-[#ffd33d] hover:shadow-lg hover:shadow-yellow-500/10">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#ffd33d] text-black transition-all duration-300 ease-out group-hover:scale-110 group-hover:rotate-3">
                  <Icon size={24} strokeWidth={2.2} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-gray-800 transition-colors duration-300 ease-out group-hover:text-black">{title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed opacity-90 transition-opacity duration-300 ease-out group-hover:opacity-100">{desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* -------------------- DEMO LEAD -------------------- */
function DemoLead() {
  const demoRef = useRef<HTMLElement>(null);

  const handleDemoMouseMove = (e: React.MouseEvent) => {
    if (!demoRef.current) return;
    const rect = demoRef.current.getBoundingClientRect();
    demoRef.current.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    demoRef.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <section
      id="demo"
      ref={demoRef}
      onMouseMove={handleDemoMouseMove}
      className="group relative overflow-hidden bg-black text-white"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(800px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(255, 211, 61, 0.216), transparent 40%)`,
        }}
      />
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 py-20 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: easeOut }}
        >
          <span className="inline-block text-sm font-bold uppercase tracking-wider text-[#ffd33d]">
            DEMONSTRAÇÃO{" "}
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Veja como funciona por dentro
          </h2>
          <p className="mt-4 text-gray-400">
            Um especialista mostra a plataforma na prática, com casos reais aplicados ao seu segmento.
          </p>
          <div id="video" className="relative mt-8 rounded-2xl shadow-2xl overflow-hidden">
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: easeOut, delay: 0.15 }}
          className="rounded-2xl bg-white p-10 text-gray-900 shadow-2xl transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] flex flex-col items-center text-center"
        >
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#ffd33d]/10 text-[#ffd33d]">
            <Sparkles size={40} />
          </div>
          <h3 className="text-3xl font-extrabold tracking-tight">Pronto para testar?</h3>
          <p className="mt-4 text-lg text-gray-600">
            Experimente gratuitamente e descubra como o HUBOT pode escalar o seu atendimento.
          </p>
          <Link
            to="/demonstracao"
            className="mt-10 inline-flex w-full items-center justify-center gap-3 rounded-md bg-[#ffd33d] py-5 text-lg font-extrabold uppercase tracking-wider text-black shadow-md transition-all duration-300 ease-out hover:bg-[#e6be2e] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,211,61,0.3)] active:translate-y-0 active:shadow-none"
          >
            Solicitar Demonstração Gratuita
            <ArrowRight size={22} />
          </Link>
          <p className="mt-6 text-sm text-gray-400">
            Sem compromisso • Ativação rápida • Suporte dedicado
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------- PRICING -------------------- */
function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", whatsapp: "" });

  const plans = [
    {
      name: "Starter",
      price: "199",
      desc: "Para começar com o pé direito",
      features: ["1 número WhatsApp", "3 atendentes", "Kanban básico", "Suporte por email"],
    },
    {
      name: "Pro",
      price: "399",
      desc: "Para times em crescimento",
      features: ["2 números", "10 atendentes", "Kanban + automações", "Integrações básicas", "Suporte prioritário"],
    },
    {
      name: "Premium",
      price: "599",
      desc: "O mais escolhido pelas equipes",
      highlight: true,
      features: [
        "3 números\u00a0",
        "30 atendentes",
        "Integração Protheus",
        "IA",
        "Relatórios avançados",
        "Suporte 24/7",
      ],
    },
    {
      name: "Enterprise",
      price: "A Consultar",
      desc: "Operações em larga escala",
      features: ["Atendentes personalizados", "API dedicada", "SLA garantido", "Customizações", "CSM dedicado"],
    },
  ];

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Tenho interesse no plano ${selectedPlan}.
Nome: ${form.name}
E-mail: ${form.email}
WhatsApp: ${form.whatsapp}`;
    const encoded = encodeURIComponent(message);
    window.location.href = `https://hubot.app.br/checkout?p=${selectedPlan?.toLowerCase()}&data=${encoded}`;
  };

  return (
    <section id="pricing" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 md:py-24">
        <Reveal y={24} className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-amber-700">Planos</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl whitespace-pre-line">
            Estruture antes de crescer
            {"\n"}Escolha seu plano
          </h2>
          <p className="mt-4 text-gray-600">{"\n"}</p>
        </Reveal>

        <div className="mt-14 grid items-stretch gap-8 lg:grid-cols-4">
          {plans.map((p, idx) => {
            const hl = p.highlight;
            const initial = hl
              ? { opacity: 0, scale: 0.9, y: 30 }
              : { opacity: 0, y: 30, scale: 1 };
            const animate = hl
              ? { opacity: 1, scale: 1.05, y: 0 }
              : { opacity: 1, y: 0, scale: 1 };
            const delay = hl ? 0.5 : idx * 0.1;
            const duration = hl ? 0.7 : 0.55;
            return (
              <motion.div
                key={p.name}
                initial={initial}
                whileInView={animate}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration, ease: easeOut, delay }}
                className={`group relative flex flex-col rounded-2xl p-8 transition-[box-shadow,transform,background-color] duration-300 ease-in-out ${
                  hl
                    ? "bg-[#ffd33d] shadow-lg hover:-translate-y-4 hover:shadow-2xl"
                    : "bg-white border border-gray-200 hover:bg-[#ffd33d] hover:-translate-y-2 hover:shadow-xl"
                }`}
              >
                {hl && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-black px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#ffd33d]">
                    Mais popular
                  </span>
                )}
                <h3 className={`text-lg font-bold ${hl ? "text-black" : "text-gray-900"}`}>
                  {p.name}
                </h3>
                <p className={`mt-1 text-sm ${hl ? "text-black/70" : "text-gray-500 group-hover:text-black/70"} transition-colors duration-300`}>{p.desc}</p>
                <div className="mt-6 flex flex-col items-start">
                  <span className={`text-5xl font-extrabold ${hl ? "text-black" : "text-gray-900 group-hover:text-black"} transition-colors duration-300`}>
                    {p.name === "Enterprise" ? "" : " \n "}
                    {p.price}
                  </span>
                  <span className={`text-sm ${hl ? "text-black/70" : "text-gray-500"}`}>
                    {"\n"}
                  </span>
                </div>
                <ul className="mt-6 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-start gap-2 text-sm ${
                        hl ? "text-black" : "text-gray-700 group-hover:text-black"
                      } transition-colors duration-300`}
                    >
                      <Check
                        size={16}
                        strokeWidth={3}
                        className={`mt-0.5 transition-colors duration-300 ${hl ? "text-black" : "text-green-600 group-hover:text-black"}`}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedPlan(p.name);
                    setIsModalOpen(true);
                  }}
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-md py-3 text-sm font-bold transition-all duration-300 cursor-pointer ${
                    hl
                      ? "bg-black text-white hover:shadow-[0_0_24px_rgba(0,0,0,0.45)] animate-pulse-ring"
                      : "border-2 border-black bg-white text-black group-hover:bg-black group-hover:text-white group-hover:border-black"
                  }`}
                >
                  Contratar
                </button>

              </motion.div>
            );
          })}
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm transition-all p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.2, ease: easeOut }}
            className="bg-white w-full max-w-md rounded-2xl p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Fechar"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Interesse no plano {selectedPlan}</h3>
            <p className="text-gray-500 mb-6">
              Preencha seus dados para avançar para o cadastro e pagamento.
            </p>
            <form onSubmit={handleConfirm}>
              <input
                type="text"
                required
                placeholder="Nome completo"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 w-full mb-4 focus:bg-white focus:border-[#ffd33d] focus:ring-2 focus:ring-[#ffd33d]/50 focus:outline-none transition-all"
              />
              <input
                type="email"
                required
                placeholder="E-mail"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 w-full mb-4 focus:bg-white focus:border-[#ffd33d] focus:ring-2 focus:ring-[#ffd33d]/50 focus:outline-none transition-all"
              />
              <input
                type="tel"
                required
                placeholder="WhatsApp"
                value={form.whatsapp}
                onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 w-full mb-4 focus:bg-white focus:border-[#ffd33d] focus:ring-2 focus:ring-[#ffd33d]/50 focus:outline-none transition-all"
              />
              <div className="flex justify-end gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-2.5 rounded-lg text-gray-600 font-medium hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-lg bg-[#ffd33d] text-black font-bold hover:scale-105 hover:bg-[#ffdf66] hover:shadow-lg transition-all cursor-pointer"
                >
                  Confirmar
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </section>
  );

}

/* -------------------- FOOTER -------------------- */
function Footer() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <footer onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {/* Main footer with light spotlight */}
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
              <a href="#top" className="flex items-center" aria-label="HUBOT">
                <img src={hubotBlack} alt="HUBOT" className="w-32 md:w-40 h-auto shrink-0 object-contain" />
              </a>
              <p className="mt-4 text-sm leading-relaxed text-gray-700">
                {"\n"}
              </p>
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

      {/* Bottom bar with dark spotlight */}
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
            <p>© 2023&nbsp;HUBOT — CNPJ 00.000.000/0001-00. Todos os direitos reservados.</p>
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

/* -------------------- WHATSAPP ICON (official logo) -------------------- */
function WhatsAppIcon({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.889-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.887 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* -------------------- WHATSAPP FAB -------------------- */
function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/5581996696708?text=Ol%C3%A1%21+Estava+navegando+no+site+do+HUBOT+e+gostaria+de+saber+como+a+plataforma+pode+automatizar+e+estruturar+o+atendimento+da+minha+empresa.+Podemos+conversar%3F"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-6 right-6 z-[100] grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform duration-300 hover:scale-110 hover:shadow-2xl animate-pulse-ring"
    >
      <WhatsAppIcon size={30} />
    </a>
  );
}
