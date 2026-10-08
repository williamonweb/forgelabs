export const services = [
  {
    slug: "sites",
    number: "01",
    eyebrow: "Presença digital",
    title: "Sites que posicionam",
    short:
      "Experiências digitais autorais, rápidas e preparadas para transformar atenção em oportunidade.",
    description:
      "Criamos sites com direção visual própria, conteúdo bem organizado e uma jornada clara para quem visita. Nada de template com a sua logo por cima.",
    deliverables: [
      "Sites institucionais",
      "Landing pages",
      "Portfólios profissionais",
      "Lojas e catálogos",
      "SEO e performance",
      "Painel de conteúdo",
    ],
  },
  {
    slug: "sistemas",
    number: "02",
    eyebrow: "Operação sob medida",
    title: "Sistemas que organizam",
    short:
      "Ferramentas construídas em torno da rotina real da empresa, sem obrigar a operação a caber em um sistema genérico.",
    description:
      "Mapeamos o processo, eliminamos retrabalho e transformamos regras de negócio em uma ferramenta simples de usar e pronta para evoluir.",
    deliverables: [
      "Sistemas internos",
      "SaaS e plataformas",
      "Painéis administrativos",
      "Gestão de clientes",
      "Estoque e financeiro",
      "Relatórios e permissões",
    ],
  },
  {
    slug: "automacoes",
    number: "03",
    eyebrow: "Tempo devolvido",
    title: "Automações que liberam",
    short:
      "Integrações e fluxos inteligentes para reduzir tarefas repetitivas e manter as informações no lugar certo.",
    description:
      "Conectamos ferramentas, mensagens, dados e rotinas para que a equipe trabalhe com menos interrupções e mais previsibilidade.",
    deliverables: [
      "Integrações entre sistemas",
      "Fluxos de atendimento",
      "Alertas e notificações",
      "Documentos automáticos",
      "Rotinas com inteligência artificial",
      "Consultoria de processos",
    ],
  },
];

export type Project = {
  slug: string;
  index: string;
  name: string;
  category: string;
  phrase: string;
  summary: string;
  challenge: string;
  solution: string;
  modules: string[];
  color: string;
  image: string | null;
  website: string | null;
  websiteLabel: string | null;
  featured: boolean;
};

// Para cadastrar um projeto, copie um bloco abaixo e altere os campos.
// A ordem dos blocos é a ordem exibida no site.
export const projects: Project[] = [
  {
    slug: "eterniza",
    index: "01",
    name: "Eterniza",
    category: "Plataforma de homenagens",
    phrase: "Onde cada história vive para sempre.",
    summary:
      "Homenagens digitais sensíveis para preservar memórias de pessoas e pets por meio de páginas únicas.",
    challenge:
      "Criar uma experiência delicada, simples e confiável para transformar momentos importantes em páginas que podem ser revisitadas e compartilhadas.",
    solution:
      "Um fluxo guiado com fotos, música, texto, QR Code, pagamento e publicação automática da homenagem.",
    modules: ["Homenagens", "Pagamentos", "QR Code", "IA para textos", "Clínicas parceiras"],
    color: "#b89e7d",
    image: "/projects/eterniza.jpg",
    website: "https://www.eternizas.com.br/",
    websiteLabel: "eternizas.com.br",
    featured: true,
  },
  {
    slug: "onda-animal",
    index: "02",
    name: "Onda Animal",
    category: "Adoção responsável",
    phrase: "Tecnologia aproximando animais e famílias.",
    summary:
      "Portal de adoção com catálogo, histórias, triagem de interessados e gestão por unidade.",
    challenge:
      "Organizar o processo de adoção e melhorar a qualidade das conexões entre cada animal e sua futura família.",
    solution:
      "Uma jornada pública clara conectada a um painel completo de animais, candidatos, etapas e histórico.",
    modules: ["Catálogo", "Triagem", "Histórias", "Unidades", "Formulários", "Indicadores"],
    color: "#2d806d",
    image: "/projects/onda-animal.jpg",
    website: "https://www.onda-animal.com.br/",
    websiteLabel: "onda-animal.com.br",
    featured: true,
  },
  {
    slug: "banda-valete",
    index: "03",
    name: "Banda Valete",
    category: "Experiência musical",
    phrase: "O palco continua depois do show.",
    summary:
      "Site oficial reunindo história, agenda, músicas, vídeos, galerias e pedidos de camisetas.",
    challenge:
      "Dar à banda uma presença digital própria, forte e fácil de atualizar, sem depender apenas das redes sociais.",
    solution:
      "Uma experiência visual inspirada no rock com conteúdo organizado por rotas e painel para gerenciar toda a presença da banda.",
    modules: ["Agenda", "Músicas", "Vídeos", "Álbuns", "Integrantes", "Camisetas"],
    color: "#bd9458",
    image: "/projects/banda-valete.jpg",
    website: "https://www.bandavalete.com.br/",
    websiteLabel: "bandavalete.com.br",
    featured: true,
  },
  {
    slug: "andre-ribeiro",
    index: "04",
    name: "André Ribeiro Tattoo",
    category: "Portfólio profissional",
    phrase: "Arte que fica. Histórias na pele.",
    summary:
      "Portfólio autoral para apresentar trabalhos, especialidades, cuidados e pedidos de orçamento.",
    challenge:
      "Transformar mais de vinte anos de experiência em uma presença digital à altura do trabalho do artista.",
    solution:
      "Uma experiência editorial escura e sofisticada, com portfólio, especialidades, processo de atendimento e orçamento direto.",
    modules: ["Portfólio", "Especialidades", "Depoimentos", "FAQ", "Orçamento", "CMS"],
    color: "#cfa85d",
    image: "/projects/andre-ribeiro.jpg",
    website: "https://www.andreribeirotattoo.com.br/",
    websiteLabel: "andreribeirotattoo.com.br",
    featured: false,
  },
  {
    slug: "vetcore",
    index: "05",
    name: "Vetcore",
    category: "Ecossistema de gestão veterinária",
    phrase: "A operação inteira da clínica em um só núcleo.",
    summary:
      "Agenda, atendimento, estoque, caixa, relatórios e experiência indoor pensados para clínicas veterinárias.",
    challenge:
      "Reunir rotinas complexas e diferentes perfis de equipe sem transformar o sistema em uma ferramenta pesada.",
    solution:
      "Uma plataforma modular, com permissões por função, fluxos rápidos e módulos que crescem junto com a clínica.",
    modules: ["Agenda", "Indoor", "Estoque", "Caixa", "Relatórios", "Permissões"],
    color: "#c78b43",
    image: null,
    website: null,
    websiteLabel: null,
    featured: false,
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Entendemos",
    text: "Entramos no problema antes de pensar na tela. Objetivo, público, operação e resultado esperado.",
  },
  {
    number: "02",
    title: "Planejamos",
    text: "Transformamos o cenário em arquitetura, prioridades, conteúdo e uma experiência coerente.",
  },
  {
    number: "03",
    title: "Desenvolvemos",
    text: "Construímos em ciclos curtos, mostrando o avanço e validando as decisões importantes.",
  },
  {
    number: "04",
    title: "Entregamos",
    text: "Publicamos, testamos e deixamos a base preparada para manutenção e evolução contínua.",
  },
];
