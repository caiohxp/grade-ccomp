// Data Store for all subjects
const disciplinas = {
    // Obrigatórias
    'comp_soc': { nome: 'Computadores e Sociedade', nucleo: 'horizontal', ementa: 'Computadores, ética e sociedade. Casos de ética em Computação. Inclusão e Exclusão digital. Novas tecnologias e o seu impacto na sociedade. Doenças profissionais e ergonomia.', docentes: 'A ser definido', horario: 'A ser definido' },
    'geo_ana': { nome: 'Geometria Analítica', nucleo: 'matematica', ementa: 'Vetores. Retas e planos. Seções Cônicas. Superfícies.', docentes: 'A ser definido', horario: 'A ser definido' },
    'mat_disc': { nome: 'Matemática Discreta para Computação', nucleo: 'programacao', ementa: 'Lógica Matemática. Teoria dos Conjuntos. Técnicas de Demonstração. Relação de Recorrência. Análise Combinatória. Relações.', docentes: 'A ser definido', horario: 'A ser definido' },
    'prog_est': { nome: 'Programação Estruturada', nucleo: 'programacao', ementa: 'Conceito de algoritmos. Blocos fundamentais de programação estruturada. Linguagem de programação imperativa. Representação de Dados. Procedimentos e Funções. Recursividade. Ponteiros. Arquivos.', docentes: 'A ser definido', horario: 'A ser definido' },
    'icc': { nome: 'Introdução à Ciência da Computação', nucleo: 'programacao', ementa: 'O curso de Ciência da Computação. Linha do tempo da computação. Hardware e Software Básico. Sistemas Numéricos. Grandes áreas da computação e o mercado de trabalho.', docentes: 'A ser definido', horario: 'A ser definido' },
    'circ_dig': { nome: 'Circuitos Digitais', nucleo: 'programacao', ementa: 'Introdução aos Circuitos Digitais. Álgebra de Boole. Blocos Lógicos Funcionais. Circuitos Aritméticos. Circuitos Sequenciais. Linguagens de descrição de hardware.', docentes: 'A ser definido', horario: 'A ser definido' },
    'calc1': { nome: 'Cálculo I', nucleo: 'matematica', prerequisitos: [], ementa: 'Funções de uma variável. Limites. Teoremas sobre funções deriváveis. Regra de L\'Hôpital. Aplicações da Derivada. Máximos e Mínimos. Esboço de gráficos de funções.', docentes: 'A ser definido', horario: 'A ser definido' },
    'alg_lin1': { nome: 'Álgebra Linear I', nucleo: 'matematica', prerequisitos: ['Geometria Analítica'], ementa: 'Matrizes e Sistemas Lineares. Espaços vetoriais. Transformações lineares. Autovalores e Autovetores. Diagonalização de operadores.', docentes: 'A ser definido', horario: 'A ser definido' },
    'log_comp': { nome: 'Lógica para Computação', nucleo: 'programacao', ementa: 'Sintaxe e Semântica da Lógica Proposicional e de Predicados. Dedução Axiomática. Resolução na Lógica Proposicional. Método de Resolução SLD.', docentes: 'A ser definido', horario: 'A ser definido' },
    'eng_soft1': { nome: 'Engenharia de Software I', nucleo: 'horizontal', ementa: 'Introdução aos Processos de Software. Engenharia de Requisitos. Verificação e Validação de Software. Disponibilização e Qualidade de Software.', docentes: 'A ser definido', horario: 'A ser definido' },
    'ed1': { nome: 'Estrutura de Dados I', nucleo: 'programacao', prerequisitos: ['Programação Estruturada'], ementa: 'Complexidade de algoritmos. Listas lineares, encadeadas, circulares. Pilha e Fila. Algoritmos de ordenação. Árvores binárias, de busca, AVL e rubro-negras.', docentes: 'A ser definido', horario: 'A ser definido' },
    'arq_comp': { nome: 'Arquitetura de Computadores', nucleo: 'horizontal', prerequisitos: ['Circuitos Digitais'], ementa: 'Aritmética computacional. Instruções e Linguagem de Máquina. O processador: caminho de dados e controle. Hierarquia de memória. Desempenho e Pipeline.', docentes: 'A ser definido', horario: 'A ser definido' },
    'calc2': { nome: 'Cálculo II', nucleo: 'matematica', prerequisitos: ['Cálculo I'], docentes: 'A ser definido', horario: 'A ser definido' },
    'alg_lin_comp': { nome: 'Álgebra Linear Computacional', nucleo: 'matematica', prerequisitos: ['Álgebra Linear I'], docentes: 'A ser definido', horario: 'A ser definido' },
    'lfa': { nome: 'Linguagens Formais e Autômatos', nucleo: 'programacao', docentes: 'A ser definido', horario: 'A ser definido' },
    'mod_proj': { nome: 'Modelagem e Projeto de Software', nucleo: 'horizontal', prerequisitos: ['Engenharia de Software I'], docentes: 'A ser definido', horario: 'A ser definido' },
    'poo': { nome: 'Programação Orientada a Objetos', nucleo: 'programacao', prerequisitos: ['Programação Estruturada'], docentes: 'A ser definido', horario: 'A ser definido' },
    'grafos': { nome: 'Grafos e Algoritmos', nucleo: 'horizontal', docentes: 'A ser definido', horario: 'A ser definido' },
    'calc3': { nome: 'Cálculo III', nucleo: 'matematica', prerequisitos: ['Cálculo II'], docentes: 'A ser definido', horario: 'A ser definido' },
    'lp': { nome: 'Linguagens de Programação', nucleo: 'horizontal', prerequisitos: ['Programação Orientada a Objetos'], docentes: 'A ser definido', horario: 'A ser definido' },
    'prob_est': { nome: 'Probabilidade e Estatística para Ciência da Computação', nucleo: 'matematica', prerequisitos: ['Matemática Discreta para Computação', 'Cálculo II'], docentes: 'A ser definido', horario: 'A ser definido' },
    'so': { nome: 'Sistemas Operacionais', nucleo: 'horizontal', docentes: 'A ser definido', horario: 'A ser definido' },
    'fis_comp': { nome: 'Física para Ciência da Computação', nucleo: 'matematica', prerequisitos: ['Cálculo II'], docentes: 'A ser definido', horario: 'A ser definido' },
    'apa': { nome: 'Análise e Projeto de Algoritmos', nucleo: 'horizontal', prerequisitos: ['Grafos e Algoritmos'], docentes: 'A ser definido', horario: 'A ser definido' },
    'ia': { nome: 'Inteligência Artificial', nucleo: 'horizontal', prerequisitos: ['Lógica para Computação', 'Estrutura de Dados I'], ementa: 'Fundamentos da IA. Resolução de Problemas por Meio de Busca. Conhecimento e Raciocínio com Enfoque Computacional. Incerteza. Aprendizagem Automática.', docentes: 'A ser definido', horario: 'A ser definido' },
    'compiladores': { nome: 'Compiladores', nucleo: 'horizontal', prerequisitos: ['Linguagens de Programação', 'Linguagens Formais e Autômatos'], docentes: 'A ser definido', horario: 'A ser definido' },
    'met_num': { nome: 'Métodos Numéricos', nucleo: 'horizontal', prerequisitos: ['Cálculo II'], docentes: 'A ser definido', horario: 'A ser definido' },
    'bd': { nome: 'Banco de Dados', nucleo: 'horizontal', prerequisitos: ['Estrutura de Dados II'], ementa: 'Modelagem Conceitual (Entidade-Relacionamento). Projeto Lógico. Normalização até a 4a Forma Normal. Algebra Relacional. Linguagem de Consulta Estruturada (SQL).', docentes: 'A ser definido', horario: 'A ser definido' },
    'cg': { nome: 'Computação Gráfica', nucleo: 'horizontal', prerequisitos: ['Álgebra Linear I', 'Estrutura de Dados I'], docentes: 'A ser definido', horario: 'A ser definido' },
    'otim_lin': { nome: 'Otimização Linear', nucleo: 'horizontal', prerequisitos: ['Álgebra Linear I'], docentes: 'A ser definido', horario: 'A ser definido' },
    'redes': { nome: 'Redes e Sistemas Distribuídos', nucleo: 'horizontal', prerequisitos: ['Sistemas Operacionais'], docentes: 'A ser definido', horario: 'A ser definido' },
    'ed2': { nome: 'Estruturas de Dados II', nucleo: 'horizontal', prerequisitos: ['Estrutura de Dados I'], docentes: 'A ser definido', horario: 'A ser definido' },
    
    // Optativas de Algoritmos e Combinatória
    'opt_alg_top_otim': { nome: 'Tópicos Especiais em Otimização', nucleo: 'especificas', prerequisitos: ['Programação Orientada a Objetos'], ementa: 'Introdução a heurísticas e metaheurísticas; Algoritmos construtivos; Busca local; Otimalidade local x global; Algoritmos Genéticos; Scatter Search; Busca Tabu; Simulated Annealing; GRASP; Busca Local Iterada; VNS; Colônia de Formigas.', docentes: 'A ser definido', horario: 'A ser definido' },
    'opt_alg_otim_comb': { nome: 'Otimização Combinatória', nucleo: 'especificas', prerequisitos: ['Otimização Linear'], ementa: 'Formulações de problemas de Otimização Combinatória; Desigualdades válidas; Relaxação linear; Métodos de resolução exata; Programação dinâmica; Branch-and-bound; Branch-and-cut; Branch-and-price; Aplicações.', docentes: 'A ser definido', horario: 'A ser definido' },
    'opt_alg_bio_comp': { nome: 'Introdução à Biologia Computacional', nucleo: 'especificas', prerequisitos: ['Tópicos Especiais em Otimização'], ementa: 'Conceitos básicos de biologia molecular; Comparação de bio-sequências; Montagem de fragmentos de DNA; Mapeamento físico de DNA; Rearranjo de genomas.', docentes: 'A ser definido', horario: 'A ser definido' },
    'opt_alg_teo_grafos': { nome: 'Teoria dos Grafos', nucleo: 'especificas', prerequisitos: ['Matemática Discreta para Computação'], ementa: 'Fundamentos. Classes de grafos. Problemas de reconhecimento de classes de grafos.', docentes: 'A ser definido', horario: 'A ser definido' },
    'opt_alg_top_grafos': { nome: 'Tópicos Especiais em Grafos e Algoritmos', nucleo: 'especificas', prerequisitos: ['Análise e Projeto de Algoritmos'], ementa: 'Teoria dos Grafos. Complexidade computacional. Algoritmos e Complexidade Computacional de problemas em grafos.', docentes: 'A ser definido', horario: 'A ser definido' },
    'opt_alg_jogos_alg': { nome: 'Teoria dos Jogos Algorítmica', nucleo: 'especificas', prerequisitos: ['Programação Orientada a Objetos'], ementa: 'Conceitos básicos de jogos e soluções; Complexidade de encontrar equilíbrios de Nash; Projeto de Mecanismos; Leilões; Jogos de formação de redes; Ineficiência de equilíbrios.', docentes: 'A ser definido', horario: 'A ser definido' },
    
    // Optativas de Engenharia de Sistemas e Informação
    'opt_eng_sis_info': { nome: 'Introdução aos Sistemas de Informação', nucleo: 'especificas', prerequisitos: [], ementa: 'Teoria Geral de Sistemas. Dado, informação, conhecimento. TI nas organizações. Estruturas organizacionais. Tipologia de Sistemas de Informação.', docentes: 'A ser definido', horario: 'A ser definido' },
    'opt_eng_soft2': { nome: 'Engenharia de Software II', nucleo: 'especificas', prerequisitos: ['Engenharia de Software I'], ementa: 'Engenharia de software distribuído. Reúso de software. Arquitetura orientada a serviços. Engenharia Dirigida por Modelos. Linhas de Produto de Software. Reengenharia de software.', docentes: 'A ser definido', horario: 'A ser definido' },
    'opt_eng_arq_soft': { nome: 'Arquitetura de Software', nucleo: 'especificas', prerequisitos: ['Modelagem e Projeto de Software', 'Engenharia de Software I'], ementa: 'Fundamentos de Projeto de Sistemas. Padrões de Projeto. Padrões Arquiteturais. Introdução ao desenvolvimento WEB.', docentes: 'A ser definido', horario: 'A ser definido' },
    'opt_eng_ger_proj': { nome: 'Gerência de Projetos', nucleo: 'especificas', prerequisitos: ['Engenharia de Software I'], ementa: 'Projetos e Organizações. Ciclo de vida e processos de gerência de projetos. Gerência de Projetos em normas e boas práticas (PMBOK, Scrum). O gerente de projetos.', docentes: 'A ser definido', horario: 'A ser definido' },
    'opt_eng_bd2': { nome: 'Banco de Dados II', nucleo: 'especificas', prerequisitos: ['Banco de Dados'], ementa: 'Arquitetura de um SGBDR; Processamento e Otimização de Consultas SQL; Análise de Planos de Consulta; Particionamento de Dados.', docentes: 'A ser definido', horario: 'A ser definido' },
    'opt_eng_ihc': { nome: 'Interação Humano-Computador', nucleo: 'especificas', prerequisitos: ['Engenharia de Software I'], ementa: 'O Humano (percepção, memória, raciocínio). O Computador (dispositivos). Interação (modelos, paradigmas). Processo de Design (Design Centrado no Usuário, prototipação, avaliação de usabilidade, acessibilidade).', docentes: 'A ser definido', horario: 'A ser definido' },
    'opt_eng_gov_ti': { nome: 'Governança de Tecnologia da Informação', nucleo: 'especificas', prerequisitos: [], ementa: 'Planejamento Estratégico e TI. Framework para Governança de TI (COBIT). Gestão de Serviços de TI (ITIL). Ferramentas e modelos de melhores práticas.', docentes: 'A ser definido', horario: 'A ser definido' },

    // Optativas de Sistemas de Computação
    'opt_sc_prog_par_dist': { nome: 'Programação Paralela e Distribuída', nucleo: 'especificas', prerequisitos: ['Arquitetura de Computadores', 'Sistemas Operacionais'], ementa: 'Modelos de programação paralela. Programação em Memória Compartilhada (Threads, OpenMP). Programação em Memória Distribuída (MPI). Programação híbrida e em ambientes heterogêneos.', docentes: 'A ser definido', horario: 'A ser definido' },
    'opt_sc_cad': { nome: 'Computação de Alto Desempenho', nucleo: 'especificas', prerequisitos: ['Arquitetura de Computadores', 'Sistemas Operacionais'], ementa: 'Modernização e otimização de código. Ambientes de execução (multi-core, clusters, grids, cloud). GPU e FPGA. Análise de Desempenho.', docentes: 'A ser definido', horario: 'A ser definido' },
    'opt_sc_prog_gpu': { nome: 'Programação em GPU', nucleo: 'especificas', prerequisitos: ['Arquitetura de Computadores', 'Sistemas Operacionais'], ementa: 'Arquitetura de GPU. Programação massivamente paralela. Programação em CUDA/OpenCL. Hierarquia de memória, concorrência e sincronismo.', docentes: 'A ser definido', horario: 'A ser definido' },
    'opt_sc_redes_sf': { nome: 'Redes de Computadores sem Fio', nucleo: 'especificas', prerequisitos: ['Redes e Sistemas Distribuídos'], ementa: 'Fundamentos de transmissão sem fio. Arquiteturas (Ad hoc, Malha). Padrões (redes celulares, locais, de sensores). Mobilidade e IP móvel.', docentes: 'A ser definido', horario: 'A ser definido' },
    'opt_sc_roteamento': { nome: 'Roteamento em Redes de Computadores', nucleo: 'especificas', prerequisitos: ['Redes e Sistemas Distribuídos'], ementa: 'Princípios de roteamento (vetores de distância, estado de enlace). Roteamento na Internet (intra-domínio e inter-domínio - RIP, OSPF, BGP). Roteamento multicast e em redes sem fio.', docentes: 'A ser definido', horario: 'A ser definido' },

    // Optativas de Sistemas Inteligentes
    'opt_si_ap_maq': { nome: 'Aprendizado de Máquina', nucleo: 'especificas', prerequisitos: ['Inteligência Artificial'], ementa: 'Metodologia Experimental. Engenharia de Atributos. Seleção de Modelos. Métodos Preditivos (Classificação, Regressão, Agrupamento).', docentes: 'A ser definido', horario: 'A ser definido' },
    'opt_si_redes_neurais': { nome: 'Redes Neurais Artificiais', nucleo: 'especificas', prerequisitos: ['Aprendizado de Máquina'], ementa: 'Modelos conexionistas. Perceptron e Adaline. Redes MLP (Multi-Layer Perceptron) e algoritmo de retropropagação. Redes Auto-organizáveis e Autoencoders. Aprendizado Profundo.', docentes: 'A ser definido', horario: 'A ser definido' },
    'opt_si_min_dados': { nome: 'Mineração de Dados', nucleo: 'especificas', prerequisitos: ['Inteligência Artificial'], ementa: 'Processo de KDD. Pré-processamento de dados. Descoberta de regras de associação (Apriori). Métodos de classificação e agrupamento. Detecção de Outlier.', docentes: 'A ser definido', horario: 'A ser definido' },
    'opt_si_pln': { nome: 'Processamento de Linguagem Natural', nucleo: 'especificas', prerequisitos: ['Aprendizado de Máquina'], ementa: 'Processamento de texto (tokenização, normalização). Modelos de Linguagem (N-gramas). Classificação de texto. Tarefas: Identificação de entidades nomeadas, Análise de sentimentos.', docentes: 'A ser definido', horario: 'A ser definido' },
    'opt_si_sis_rec': { nome: 'Sistemas de Recomendação', nucleo: 'especificas', prerequisitos: ['Aprendizado de Máquina'], ementa: 'Taxonomia dos Sistemas de Recomendação. Filtragem Colaborativa (abordagens usuário-usuário e item-item). Algoritmos baseados em modelo (redução de dimensionalidade). Avaliação de recomendadores.', docentes: 'A ser definido', horario: 'A ser definido' },
};

const grade = [
    { periodo: 1, materias: ['comp_soc', 'geo_ana', 'mat_disc', 'prog_est', 'icc', 'circ_dig'] },
    { periodo: 2, materias: ['calc1', 'alg_lin1', 'log_comp', 'eng_soft1', 'ed1', 'arq_comp'] },
    { periodo: 3, materias: ['calc2', 'alg_lin_comp', 'lfa', 'mod_proj', 'poo', 'grafos'] },
    { periodo: 4, materias: ['calc3', 'lp', 'prob_est', 'so', 'fis_comp', 'apa'] },
    { periodo: 5, materias: ['ia', 'compiladores', 'met_num', 'bd', 'cg', 'otim_lin'] },
    { periodo: 6, materias: ['redes', 'ed2', { nome: 'Optativa', nucleo: 'especificas', docentes: 'A ser definido', horario: 'A ser definido' }, { nome: 'Optativa', nucleo: 'especificas', docentes: 'A ser definido', horario: 'A ser definido' }, { nome: 'Optativa', nucleo: 'especificas', docentes: 'A ser definido', horario: 'A ser definido' }, { nome: 'Eletiva', nucleo: 'eletiva', docentes: 'A ser definido', horario: 'A ser definido' }] },
    { periodo: 7, materias: [{ nome: 'Optativa', nucleo: 'especificas', docentes: 'A ser definido', horario: 'A ser definido' }, { nome: 'Optativa', nucleo: 'especificas', docentes: 'A ser definido', horario: 'A ser definido' }, { nome: 'Optativa', nucleo: 'especificas', docentes: 'A ser definido', horario: 'A ser definido' }, { nome: 'TCC 1', nucleo: 'academica', docentes: 'A ser definido', horario: 'A ser definido' }, { nome: 'TCC 1', nucleo: 'academica', docentes: 'A ser definido', horario: 'A ser definido' }] },
    { periodo: 8, materias: [{ nome: 'Optativa', nucleo: 'especificas', docentes: 'A ser definido', horario: 'A ser definido' }, { nome: 'Optativa', nucleo: 'especificas', docentes: 'A ser definido', horario: 'A ser definido' }, { nome: 'Optativa', nucleo: 'especificas', docentes: 'A ser definido', horario: 'A ser definido' }, { nome: 'TCC 2', nucleo: 'academica', docentes: 'A ser definido', horario: 'A ser definido' }, { nome: 'TCC 2', nucleo: 'academica', docentes: 'A ser definido', horario: 'A ser definido' }] }
];

const eixos = [
    { nome: 'Algoritmos e Combinatória', descricao: 'Foco em modelagem de problemas e projeto de algoritmos eficientes, exatos ou heurísticos, para questões de natureza combinatória.', cargaHoraria: '180h (3 optativas)', disciplinas: ['opt_alg_top_otim', 'opt_alg_otim_comb', 'opt_alg_bio_comp', 'opt_alg_teo_grafos', 'opt_alg_top_grafos', 'opt_alg_jogos_alg'], nucleo: 'matematica' },
    { nome: 'Engenharia de Sistemas e Informação', descricao: 'Engloba o desenvolvimento de sistemas, incluindo modelagem, gestão de processos, armazenamento e recuperação de dados, usabilidade e governança.', cargaHoraria: '240h (4 optativas)', disciplinas: ['opt_eng_sis_info', 'opt_eng_soft2', 'opt_eng_arq_soft', 'opt_eng_ger_proj', 'opt_eng_bd2', 'opt_eng_ihc', 'opt_eng_gov_ti'], nucleo: 'horizontal' },
    { nome: 'Sistemas de Computação', descricao: 'Aprofundamento em arquitetura de computadores, ambientes de execução paralelos e distribuídos, e desenvolvimento de aplicações de alto desempenho.', cargaHoraria: '300h (5 optativas)', disciplinas: ['opt_sc_prog_par_dist', 'opt_sc_cad', 'opt_sc_prog_gpu', 'opt_sc_redes_sf', 'opt_sc_roteamento'], nucleo: 'programacao' },
    { nome: 'Sistemas Inteligentes', descricao: 'Relacionado a sistemas especialistas e aplicações de inteligência artificial que podem interagir e aprender com os usuários e dados.', cargaHoraria: '300h (5 optativas)', disciplinas: ['opt_si_ap_maq', 'opt_si_redes_neurais', 'opt_si_min_dados', 'opt_si_pln', 'opt_si_sis_rec'], nucleo: 'especificas' }
];

const nucleoClasses = {
    matematica: { border: 'border-nucleo-matematica', bg: 'bg-nucleo-matematica', text: 'Matemática' },
    programacao: { border: 'border-nucleo-programacao', bg: 'bg-nucleo-programacao', text: 'Programação' },
    horizontal: { border: 'border-nucleo-horizontal', bg: 'bg-nucleo-horizontal', text: 'Horizontal' },
    especificas: { border: 'border-nucleo-especificas', bg: 'bg-nucleo-especificas', text: 'Optativas' },
    academica: { border: 'border-ativ-academica', bg: 'bg-ativ-academica', text: 'Acadêmica' },
    eletiva: { border: 'border-eletiva', bg: 'bg-eletiva', text: 'Eletiva' }
};

const gradeContainer = document.getElementById('grade-curricular');
const eixosContainer = document.getElementById('eixos-profissionais');
const filtersContainer = document.getElementById('filters');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-content');
const closeModalBtn = document.getElementById('close-modal');

function openModal(materia) {
    document.getElementById('modal-title').innerText = materia.nome;
    const nucleoInfo = nucleoClasses[materia.nucleo];
    const modalNucleo = document.getElementById('modal-nucleo');
    modalNucleo.innerHTML = `<span class="px-3 py-1 text-sm rounded-full text-white ${nucleoInfo.bg}">${nucleoInfo.text}</span>`;
    
    document.getElementById('modal-ementa').innerText = materia.ementa || 'Ementa não disponível.';
    document.getElementById('modal-prerequisitos').innerText = (materia.prerequisitos && materia.prerequisitos.length > 0) ? materia.prerequisitos.join(', ') : 'Sem pré-requisitos formais.';
    document.getElementById('modal-docentes').innerText = materia.docentes || 'Não informado';
    document.getElementById('modal-horario').innerText = materia.horario || 'Não informado';
    
    modal.classList.remove('invisible', 'opacity-0');
    modalContent.classList.remove('scale-95');
}

function closeModal() {
    modal.classList.add('invisible', 'opacity-0');
    modalContent.classList.add('scale-95');
}

function renderGrade(filter = 'all') {
    gradeContainer.innerHTML = '';
    grade.forEach((p, index) => {
        const periodoDiv = document.createElement('div');
        periodoDiv.className = 'slide-up bg-slate-800 rounded-lg shadow-xl p-4 flex flex-col transition-all duration-300';
        periodoDiv.style.animationDelay = `${index * 60}ms`;

        periodoDiv.innerHTML = `<h3 class="text-xl font-bold mb-4 border-b border-slate-700 pb-2 text-white">Período ${p.periodo}</h3>`;
        const materiasList = document.createElement('ul');
        materiasList.className = 'space-y-2';

        p.materias.forEach(mId => {
            const materia = (typeof mId === 'string') ? disciplinas[mId] : mId;

            const li = document.createElement('li');
            const nucleoClass = nucleoClasses[materia.nucleo]?.border || 'border-l-slate-600';
            li.className = `materia-item bg-slate-900 p-3 rounded-md border-l-4 cursor-pointer transition-all duration-300 hover:bg-slate-700 hover:shadow-md ${nucleoClass}`;
            li.dataset.nucleo = materia.nucleo;
            
            if (filter !== 'all' && materia.nucleo !== filter) {
                li.classList.add('filtered-out');
            }
            
            li.innerHTML = `<span class="font-semibold text-slate-100 text-sm">${materia.nome}</span>`;
            li.addEventListener('click', () => openModal(materia));
            materiasList.appendChild(li);
        });
        periodoDiv.appendChild(materiasList);
        gradeContainer.appendChild(periodoDiv);
    });
}

function renderFilters() {
    const buttonClasses = 'px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300';
    let buttonsHTML = `<button data-filter="all" class="${buttonClasses} bg-sky-600 text-white filter-btn-active">Todos</button>`;
    
    Object.keys(nucleoClasses).forEach(key => {
        if (key !== 'academica' && key !== 'eletiva') {
            const nucleo = nucleoClasses[key];
            buttonsHTML += `<button data-filter="${key}" class="${buttonClasses} bg-slate-700 text-slate-300 hover:bg-slate-600">${nucleo.text}</button>`;
        }
    });
    filtersContainer.innerHTML = buttonsHTML;

    filtersContainer.addEventListener('click', (e) => {
        if(e.target.tagName === 'BUTTON') {
            const filter = e.target.dataset.filter;
            document.querySelectorAll('#filters button').forEach(btn => {
                btn.classList.remove('bg-sky-600', 'text-white', 'filter-btn-active');
                btn.classList.add('bg-slate-700', 'text-slate-300', 'hover:bg-slate-600');
            });
            e.target.classList.add('bg-sky-600', 'text-white');
            e.target.classList.remove('bg-slate-700', 'text-slate-300', 'hover:bg-slate-600');
            
            document.querySelectorAll('.materia-item').forEach(item => {
                if (filter === 'all' || item.dataset.nucleo === filter) {
                    item.classList.remove('filtered-out');
                } else {
                    item.classList.add('filtered-out');
                }
            });
        }
    });
}

function renderEixos() {
    eixosContainer.innerHTML = '';
    eixos.forEach((eixo, index) => {
        const eixoCard = document.createElement('div');
        const nucleoColor = nucleoClasses[eixo.nucleo].bg;
        eixoCard.className = 'slide-up bg-slate-800 p-6 rounded-lg shadow-lg flex flex-col';
        eixoCard.style.animationDelay = `${index * 100}ms`;

        let disciplinasHTML = eixo.disciplinas.map(optativaId => {
            const optativa = disciplinas[optativaId];
            if (!optativa) return '';
            const nucleoClass = nucleoClasses[optativa.nucleo]?.border || 'border-l-slate-600';
            const li = document.createElement('li');
            li.className = `materia-item bg-slate-900 p-3 rounded-md border-l-4 cursor-pointer transition-all duration-300 hover:bg-slate-700 hover:shadow-md ${nucleoClass}`;
            li.dataset.nucleo = optativa.nucleo;
            li.innerHTML = `<span class="font-semibold text-slate-100 text-sm">${optativa.nome}</span>`;
            li.addEventListener('click', () => openModal(optativa));
            return li.outerHTML;
        }).join('');

        eixoCard.innerHTML = `
            <div class="flex-grow">
                <span class="px-3 py-1 text-xs rounded-full text-white font-semibold ${nucleoColor}">${eixo.cargaHoraria}</span>
                <h4 class="text-2xl font-bold text-white mt-4 mb-2">${eixo.nome}</h4>
                <p class="text-slate-300 mb-4">${eixo.descricao}</p>
                <h5 class="font-semibold text-slate-200 mb-2">Disciplinas Optativas do Eixo:</h5>
                <ul class="space-y-2">${disciplinasHTML}</ul>
            </div>
        `;
        eixosContainer.appendChild(eixoCard);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderFilters();
    renderGrade();
    renderEixos();
    
    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
});
