import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  MapPin,
  Mail,
  MessageCircle,
  ArrowRight,
  Instagram,
  Linkedin,
  ArrowLeft,
} from "lucide-react";
import hubotBlack from "@/assets/hubot-black.png";

export const Route = createFileRoute("/termos-de-uso")({
  head: () => ({
    meta: [
      { title: "Termos e Condições de Uso — Hubvision" },
      {
        name: "description",
        content:
          "Leia os Termos e Condições de Uso da Hubvision. Conheça as regras, responsabilidades e direitos ao utilizar nossa plataforma de atendimento.",
      },
      { property: "og:title", content: "Termos e Condições de Uso — Hubvision" },
      {
        property: "og:description",
        content:
          "Leia os Termos e Condições de Uso da Hubvision. Conheça as regras, responsabilidades e direitos ao utilizar nossa plataforma.",
      },
    ],
  }),
  component: TermosDeUso,
});

function TermosDeUso() {
  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-gray-800">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-12 text-center md:py-16">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
            Termos e Condições de Uso
          </h1>
          <p className="mt-3 text-sm text-gray-500">Última atualização: 29/06/2026</p>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-12 md:py-16">
        <Link
          to="/"
          className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
        >
          <ArrowLeft size={18} className="transition-transform duration-200 group-hover:-translate-x-1" />
          Voltar para o início
        </Link>
        <article className="prose prose-gray max-w-none">
          <p className="text-lg leading-relaxed text-gray-700">
            Bem-vindo(a) à Hubvision!
          </p>
          <p className="mt-4 leading-relaxed text-gray-700">
            Estes Termos de Uso regulam o acesso e a utilização do site hubvision.com.br e dos
            serviços, plataformas e soluções de atendimento oferecidos pela{" "}
            <strong>Hubvision Inovação e Negócios LTDA</strong>, com sede na Rua Bruno Veloso 603 -
            Recife, PE.
          </p>
          <p className="mt-4 leading-relaxed text-gray-700">
            Ao acessar ou utilizar nossa plataforma, você concorda expressamente com estes Termos. Se
            você não concordar com alguma destas condições, pedimos que não utilize nossos serviços.
          </p>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900 md:text-2xl">
              1. O que é a Hubvision e os nossos Serviços
            </h2>
            <p className="mt-3 leading-relaxed text-gray-700">
              A Hubvision é uma plataforma voltada para gestão de atendimento ao cliente,
              otimização de comunicação e relacionamento, fornecendo ferramentas para melhorar a
              eficiência e os resultados do seu negócio. As funcionalidades específicas, planos e
              limitações estão detalhados em nosso site oficial e em propostas comerciais
              específicas.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900 md:text-2xl">2. Cadastro e Segurança da Conta</h2>
            <p className="mt-3 leading-relaxed text-gray-700">
              Para acessar as funcionalidades da plataforma, o usuário deverá criar uma conta
              fornecendo informações precisas, completas e atualizadas.
            </p>
            <p className="mt-3 leading-relaxed text-gray-700">
              Você é o único responsável por manter a confidencialidade das suas credenciais de
              acesso (login e senha). A Hubvision não se responsabiliza por quaisquer perdas ou
              danos resultantes do uso não autorizado de sua conta.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900 md:text-2xl">3. Regras de Uso Aceitável</h2>
            <p className="mt-3 leading-relaxed text-gray-700">
              Ao utilizar a plataforma Hubvision, o usuário se compromete a:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed text-gray-700">
              <li>
                Não utilizar o serviço para fins ilícitos, fraudulentos ou que violem a legislação
                brasileira (incluindo a LGPD).
              </li>
              <li>
                Não tentar invadir, sobrecarregar ou comprometer a segurança, integridade e
                disponibilidade dos nossos sistemas.
              </li>
              <li>
                Não utilizar a plataforma para envio de spam, correntes ou comunicações não
                solicitadas.
              </li>
            </ul>
            <p className="mt-3 leading-relaxed text-gray-700">
              A Hubvision reserva-se o direito de suspender ou encerrar contas que violem estas
              regras, sem aviso prévio.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900 md:text-2xl">4. Propriedade Intelectual</h2>
            <p className="mt-3 leading-relaxed text-gray-700">
              Todo o conteúdo disponível no site e na plataforma (incluindo textos, gráficos,
              logotipos, ícones, códigos-fonte e softwares) é de propriedade exclusiva da Hubvision
              ou de seus licenciadores, e está protegido pelas leis de direitos autorais e
              propriedade intelectual. É proibida a cópia, modificação, distribuição ou engenharia
              reversa de qualquer parte do nosso sistema.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900 md:text-2xl">
              5. Privacidade e Proteção de Dados (LGPD)
            </h2>
            <p className="mt-3 leading-relaxed text-gray-700">
              A Hubvision leva a privacidade a sério. O tratamento dos seus dados pessoais e dos
              dados de seus clientes (quando aplicável) é regido pela nossa Política de Privacidade
              e está em estrita conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018
              - LGPD).
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900 md:text-2xl">6. Limitação de Responsabilidade</h2>
            <p className="mt-3 leading-relaxed text-gray-700">
              A plataforma é fornecida "no estado em que se encontra" (as is). A Hubvision trabalha
              incessantemente para garantir a estabilidade do sistema, mas não garante que o serviço
              será ininterrupto ou livre de erros a todo momento. Não nos responsabilizamos por
              danos indiretos, lucros cessantes ou perda de dados decorrentes do uso da plataforma.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900 md:text-2xl">7. Alterações nestes Termos</h2>
            <p className="mt-3 leading-relaxed text-gray-700">
              Podemos atualizar estes Termos de Uso periodicamente para refletir mudanças em nossos
              serviços ou na legislação. Recomendamos que você revise esta página regularmente.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900 md:text-2xl">8. Contato e Suporte</h2>
            <p className="mt-3 leading-relaxed text-gray-700">
              Se você tiver qualquer dúvida sobre estes Termos de Uso, entre em contato conosco:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed text-gray-700">
              <li>
                <strong>E-mail:</strong> diego@hubvision.com.br
              </li>
              <li>
                <strong>Telefone/WhatsApp:</strong> (81) 99669-6708
              </li>
              <li>
                <strong>Endereço:</strong> Rua Bruno Veloso 603 - Recife, PE
              </li>
            </ul>
          </section>
        </article>
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
              <a href="#top" className="flex items-center" aria-label="HUBOT">
                <img src={hubotBlack} alt="HUBOT" className="w-32 md:w-40 h-auto shrink-0 object-contain" />
              </a>
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
