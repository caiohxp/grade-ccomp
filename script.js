// Data Store for all subjects
const disciplinas = {
    // Obrigatórias
    'comp_soc': { nome: 'Computadores e Sociedade', codigo: 'TN703', nucleo: 'horizontal', ementa: 'Computadores, ética e sociedade. Casos de ética em Computação. Inclusão e Exclusão digital. Novas tecnologias e o seu impacto na sociedade. Doenças profissionais e ergonomia.', docentes: 'LIGIA MARIA SOARES PASSOS', horario: 'A ser definido' },
    'geo_ana': { nome: 'Geometria Analítica', codigo: 'IM885', nucleo: 'matematica', ementa: 'Vetores. Retas e planos. Seções Cônicas. Superfícies.', docentes: 'A ser definido', horario: 'A ser definido' },
    'mat_disc': { nome: 'Matemática Discreta para Computação', codigo: 'TM403', nucleo: 'programacao', ementa: 'Lógica Matemática. Teoria dos Conjuntos. Técnicas de Demonstração. Relação de Recorrência. Análise Combinatória. Relações.', docentes: 'A ser definido', horario: 'A ser definido' },
    'prog_est': { nome: 'Programação Estruturada', codigo: 'TM422', nucleo: 'programacao', ementa: 'Conceito de algoritmos. Blocos fundamentais de programação estruturada. Linguagem de programação imperativa. Representação de Dados. Procedimentos e Funções. Recursividade. Ponteiros. Arquivos.', docentes: 'A ser definido', horario: 'A ser definido' },
    'icc': { nome: 'Introdução à Ciência da Computação', codigo: 'TN707', nucleo: 'programacao', ementa: 'O curso de Ciência da Computação. Linha do tempo da computação. Hardware e Software Básico. Sistemas Numéricos. Grandes áreas da computação e o mercado de trabalho.', docentes: 'DANIEL FABIO DOMINGUES POSNER / FILIPE BRAIDA DO CARMO / NATALIA CHAVES LESSA', horario: 'A ser definido' },
    'circ_dig': { nome: 'Circuitos Digitais', codigo: 'IM853', nucleo: 'programacao', ementa: 'Introdução aos Circuitos Digitais. Álgebra de Boole. Blocos Lógicos Funcionais. Circuitos Aritméticos. Circuitos Sequenciais. Linguagens de descrição de hardware.', docentes: 'A ser definido', horario: 'A ser definido' },
    'calc1': { nome: 'Cálculo I', codigo: 'IM403', nucleo: 'matematica', prerequisitos: [], ementa: 'Funções de uma variável. Limites. Teoremas sobre funções deriváveis. Regra de L\'Hôpital. Aplicações da Derivada. Máximos e Mínimos. Esboço de gráficos de funções.', docentes: 'A ser definido', horario: 'A ser definido' },
    'alg_lin1': { nome: 'Álgebra Linear I', codigo: 'IM429', nucleo: 'matematica', prerequisitos: ['Geometria Analítica'], ementa: 'Matrizes e Sistemas Lineares. Espaços vetoriais. Transformações lineares. Autovalores e Autovetores. Diagonalização de operadores.', docentes: 'A ser definido', horario: 'A ser definido' },
    'log_comp': { nome: 'Lógica para Computação', codigo: 'TN709', nucleo: 'programacao', ementa: 'Sintaxe e Semântica da Lógica Proposicional e de Predicados. Dedução Axiomática. Resolução na Lógica Proposicional. Método de Resolução SLD.', docentes: 'A ser definido', horario: 'A ser definido' },
    'eng_soft1': { nome: 'Engenharia de Software I', codigo: 'TN710', nucleo: 'horizontal', ementa: 'Introdução aos Processos de Software. Engenharia de Requisitos. Verificação e Validação de Software. Disponibilização e Qualidade de Software.', docentes: 'NATALIA CHAVES LESSA', horario: 'A ser definido' },
    'ed1': { nome: 'Estrutura de Dados I', codigo: 'TM424', nucleo: 'programacao', prerequisitos: ['Programação Estruturada'], ementa: 'Complexidade de algoritmos. Listas lineares, encadeadas, circulares. Pilha e Fila. Algoritmos de ordenação. Árvores binárias, de busca, AVL e rubro-negras.', docentes: 'A ser definido', horario: 'A ser definido' },
    'arq_comp': { nome: 'Arquitetura de Computadores', codigo: 'TN712', nucleo: 'horizontal', prerequisitos: ['Circuitos Digitais'], ementa: 'Aritmética computacional. Instruções e Linguagem de Máquina. O processador: caminho de dados e controle. Hierarquia de memória. Desempenho e Pipeline.', docentes: 'UBIRATAM CARVALHO DE PAULA JUNIOR / MARCEL WILLIAM ROCHA DA SILVA / 	JULIANA MENDES NASCENTE E SILVA ZAMITH', horario: 'A ser definido' },
    'calc2': { nome: 'Cálculo II', codigo: 'IM404', nucleo: 'matematica', prerequisitos: ['Cálculo I'], docentes: 'A ser definido', horario: 'A ser definido' },
    'alg_lin_comp': { nome: 'Álgebra Linear Computacional', codigo: 'IM478', nucleo: 'matematica', prerequisitos: ['Álgebra Linear I'], docentes: 'A ser definido', horario: 'A ser definido' },
    'lfa': { nome: 'Linguagens Formais e Autômatos', codigo: 'IM854', nucleo: 'programacao', docentes: 'A ser definido', horario: 'A ser definido' },
    'mod_proj': { nome: 'Modelagem e Projeto de Software', codigo: 'TM412', nucleo: 'horizontal', prerequisitos: ['Engenharia de Software I'], docentes: 'A ser definido', horario: 'A ser definido' },
    'poo': { nome: 'Programação Orientada a Objetos', codigo: 'TM423', nucleo: 'programacao', prerequisitos: ['Programação Estruturada'], docentes: 'A ser definido', horario: 'A ser definido' },
    'grafos': { nome: 'Grafos e Algoritmos', codigo: 'TN718', nucleo: 'horizontal', docentes: 'FERNANDA VIEIRA DIAS COUTO', horario: 'A ser definido' },
    'calc3': { nome: 'Cálculo III', codigo: 'TM406', nucleo: 'matematica', prerequisitos: ['Cálculo II'], docentes: 'A ser definido', horario: 'A ser definido' },
    'lp': { nome: 'Linguagens de Programação', codigo: 'IM864', nucleo: 'horizontal', prerequisitos: ['Programação Orientada a Objetos'], docentes: 'A ser definido', horario: 'A ser definido' },
    'prob_est': { nome: 'Probabilidade e Estatística para Ciência da Computação', codigo: 'IM859', nucleo: 'matematica', prerequisitos: ['Matemática Discreta para Computação', 'Cálculo II'], docentes: 'A ser definido', horario: 'A ser definido' },
    'so': { nome: 'Sistemas Operacionais', codigo: 'IM868', nucleo: 'horizontal', docentes: 'A ser definido', horario: 'A ser definido' },
    'fis_comp': { nome: 'Física para Ciência da Computação', codigo: 'TM407', nucleo: 'matematica', prerequisitos: ['Cálculo II'], docentes: 'A ser definido', horario: 'A ser definido' },
    'apa': { nome: 'Análise e Projeto de Algoritmos', codigo: 'TM425', nucleo: 'horizontal', prerequisitos: ['Grafos e Algoritmos'], docentes: 'A ser definido', horario: 'A ser definido' },
    'ia': { nome: 'Inteligência Artificial', codigo: 'IM870', nucleo: 'horizontal', prerequisitos: ['Lógica para Computação', 'Estrutura de Dados I'], ementa: 'Fundamentos da IA. Resolução de Problemas por Meio de Busca. Conhecimento e Raciocínio com Enfoque Computacional. Incerteza. Aprendizagem Automática.', docentes: 'A ser definido', horario: 'A ser definido' },
    'compiladores': { nome: 'Compiladores', codigo: 'IM861', nucleo: 'horizontal', prerequisitos: ['Linguagens de Programação', 'Linguagens Formais e Autômatos'], docentes: 'A ser definido', horario: 'A ser definido' },
    'met_num': { nome: 'Métodos Numéricos', codigo: 'TM410', nucleo: 'horizontal', prerequisitos: ['Cálculo II'], docentes: 'A ser definido', horario: 'A ser definido' },
    'bd': { nome: 'Banco de Dados', codigo: 'TN727', nucleo: 'horizontal', prerequisitos: ['Estruturas de Dados II'], ementa: 'Modelagem Conceitual (Entidade-Relacionamento). Projeto Lógico. Normalização até a 4a Forma Normal. Algebra Relacional. Linguagem de Consulta Estruturada (SQL).', docentes: 'FELLIPE RIBEIRO DUARTE', horario: 'A ser definido' },
    'cg': { nome: 'Computação Gráfica', codigo: 'TM421', nucleo: 'horizontal', prerequisitos: ['Álgebra Linear I', 'Estrutura de Dados I'], docentes: 'A ser definido', horario: 'A ser definido' },
    'otim_lin': { nome: 'Otimização Linear', codigo: 'TN728', nucleo: 'horizontal', prerequisitos: ['Álgebra Linear I'], docentes: 'ADRIA RAMOS DE LYRA', horario: 'A ser definido' },
    'redes': { nome: 'Redes de Computadores', codigo: 'TM427', nucleo: 'horizontal', prerequisitos: ['Sistemas Operacionais'], docentes: 'A ser definido', horario: 'UBIRATAM CARVALHO DE PAULA JUNIOR' },
    'ed2': { nome: 'Estruturas de Dados II', codigo: 'IM860', nucleo: 'horizontal', prerequisitos: ['Estrutura de Dados I'], docentes: 'A ser definido', horario: 'A ser definido' },

    // Optativas de Algoritmos e Combinatória
    'opt_alg_top_otim': { nome: 'Tópicos Especiais em Otimização', codigo: 'TN751', nucleo: 'especificas', prerequisitos: ['Programação Orientada a Objetos'], ementa: 'Introdução a heurísticas e metaheurísticas; Algoritmos construtivos; Busca local; Otimalidade local x global; Algoritmos Genéticos; Scatter Search; Busca Tabu; Simulated Annealing; GRASP; Busca Local Iterada; VNS; Colônia de Formigas.', docentes: 'ADRIA RAMOS DE LYRA', horario: 'A ser definido' },
    'opt_alg_otim_comb': { nome: 'Otimização Combinatória', codigo: 'A definir', nucleo: 'especificas', prerequisitos: ['Otimização Linear'], ementa: 'Formulações de problemas de Otimização Combinatória; Desigualdades válidas; Relaxação linear; Métodos de resolução exata; Programação dinâmica; Branch-and-bound; Branch-and-cut; Branch-and-price; Aplicações.', docentes: 'A ser definido', horario: 'A ser definido' },
    'opt_alg_bio_comp': { nome: 'Introdução à Biologia Computacional', codigo: 'TN737', nucleo: 'especificas', prerequisitos: ['Tópicos Especiais em Otimização'], ementa: 'Conceitos básicos de biologia molecular; Comparação de bio-sequências; Montagem de fragmentos de DNA; Mapeamento físico de DNA; Rearranjo de genomas.', docentes: 'DANIEL FABIO DOMINGUES POSNER', horario: 'A ser definido' },
    'opt_alg_pesq_op': { nome: 'Introdução à Pesquisa Operacional', codigo: 'TN738', nucleo: 'especificas', prerequisitos: ['Tópicos Especiais em Otimização'], ementa: 'Conceitos básicos de biologia molecular; Comparação de bio-sequências; Montagem de fragmentos de DNA; Mapeamento físico de DNA; Rearranjo de genomas.', docentes: 'ADRIA RAMOS DE LYRA', horario: 'A ser definido' },
    'opt_alg_teo_grafos': { nome: 'Teoria dos Grafos', codigo: 'TN749', nucleo: 'especificas', prerequisitos: ['Matemática Discreta para Computação'], ementa: 'Fundamentos. Classes de grafos. Problemas de reconhecimento de classes de grafos.', docentes: 'FERNANDA VIEIRA DIAS COUTO', horario: 'A ser definido' },
    'opt_alg_top_grafos': { nome: 'Tópicos Especiais em Grafos e Algoritmos', codigo: 'TN740', nucleo: 'especificas', prerequisitos: ['Análise e Projeto de Algoritmos'], ementa: 'Teoria dos Grafos. Complexidade computacional. Algoritmos e Complexidade Computacional de problemas em grafos.', docentes: 'FERNANDA VIEIRA DIAS COUTO', horario: 'A ser definido' },
    'opt_alg_jogos_alg': { nome: 'Teoria dos Jogos Algorítmica', codigo: 'A definir', nucleo: 'especificas', prerequisitos: ['Programação Orientada a Objetos'], ementa: 'Conceitos básicos de jogos e soluções; Complexidade de encontrar equilíbrios de Nash; Projeto de Mecanismos; Leilões; Jogos de formação de redes; Ineficiência de equilíbrios.', docentes: 'A ser definido', horario: 'A ser definido' },

    // Optativas de Engenharia de Sistemas e Informação
    'opt_emp_info': { nome: 'Empreendedorismo em Informática', codigo: 'TN754', nucleo: 'especificas', prerequisitos: [], ementa: 'Teoria Geral de Sistemas. Dado, informação, conhecimento. TI nas organizações. Estruturas organizacionais. Tipologia de Sistemas de Informação.', docentes: 'NATALIA CHAVES LESSA', horario: 'A ser definido' },
    'opt_eng_sis_info': { nome: 'Introdução aos Sistemas de Informação', codigo: 'A definir', nucleo: 'especificas', prerequisitos: [], ementa: 'Introdução. Teoria Geral de Sistemas. Dado, informação, conhecimento. TI nas organizações. Principais estruturas organizacionais. Sistemas de Informação. Tipologia de Sistemas de Informação.', docentes: 'A ser definido', horario: 'A ser definido' },
    'opt_top_bd_eng_soft': { nome: 'Tópicos Especiais em Banco de Dados e Engenharia de Software', codigo: 'TM415', nucleo: 'especificas', prerequisitos: ['Banco de Dados'], ementa: 'Dificuldades no processamento de dados textuais. O processo de descoberta de conhecimento em textos (KDT) e áreas de conhecimento relacionadas. Pré-processamento de documentos textuais: etapas, técnicas e algoritmos. Representação de documentos. Tarefas de mineração de dados textuais: classificação, agrupamento, extração de informação e sumarização e algoritmos. Métricas de avaliação de desempenho.', docentes: 'DANIEL FABIO DOMINGUES POSNER / FELLIPE RIBEIRO DUARTE', horario: 'A ser definido'},
    'opt_eng_soft2': { nome: 'Engenharia de Software II', codigo: 'A definir', nucleo: 'especificas', prerequisitos: ['Engenharia de Software I'], ementa: 'Introdução. Engenharia de software distribuído. Reúso de software. Arquitetura orientada a serviços. Engenharia Dirigida por Modelos. Linhas de Produto de Software. Reengenharia de software.', docentes: 'A ser definido', horario: 'A ser definido' },
    'opt_eng_arq_soft': { nome: 'Arquitetura de Software', codigo: 'TN721', nucleo: 'especificas', prerequisitos: ['Modelagem e Projeto de Software', 'Engenharia de Software I'], ementa: 'Fundamentos de Projeto de Sistemas. Padrões de Projeto. Padrões Arquiteturais. Introdução ao desenvolvimento WEB. Tópicos avançados.', docentes: 'FELLIPE RIBEIRO DUARTE', horario: 'A ser definido' },
    'opt_eng_redes_petri': { nome: 'Introdução à Teoria das Redes de Petri', codigo: 'TM431', nucleo: 'especificas', prerequisitos: ['Álgebra Linear I', 'Grafos e Algoritmos'], ementa: 'Introdução e conceitos básicos. Definições. Redes de Petri interpretadas. Análise de Propriedades. Redes de Petri e representação de tempo. Redes de Petri e representação de dados.', docentes: 'LIGIA MARIA SOARES PASSOS', horario: 'A ser definido'},
    'opt_eng_mod_soft_petri': { nome: 'Modelagem de Software com Redes de Petri', codigo: 'TM432', nucleo: 'especificas', prerequisitos: ['Modelagem e Projeto de Software', 'Grafos e Algoritmos'], ementa: 'Introdução e conceitos básicos. Especificação e análise baseada em fluxo de dados. Especificação e análise baseada em fluxo de controle. Especificação e análise baseada em fluxo de dados e de controle. Projeto de arquitetura de software.', docentes: 'A ser definido', horario: 'A ser definido'},
    'opt_eng_mod_analise_neg': { nome: 'Modelagem e Análise Formal de Processos de Negócio', codigo: 'A definir', nucleo: 'especificas', prerequisitos: ['Modelagem e Projeto de Software', 'Grafos e Algoritmos'], ementa: 'Introdução e conceitos básicos. WorkFlow nets. Análise qualitativa para WorkFlow nets. WorkFlow nets interorganizacionais e análise qualitativa. Análise Quantitativa para Workflow nets e IOWF-nets.', docentes: 'A ser definido', horario: 'A ser definido'},
    'opt_eng_ger_proj': { nome: 'Gerência de Projetos', codigo: 'TN731', nucleo: 'especificas', prerequisitos: ['Engenharia de Software I'], ementa: 'Projetos e Organizações. Ciclo de vida de projetos. Processos de gerência de projetos. Gerência de Projetos em normas, boas práticas e modelos de maturidade. O gerente de projetos e suas interfaces.', docentes: '	NATALIA CHAVES LESSA', horario: 'A ser definido' },
    'opt_eng_med_qual_soft': { nome: 'Medição e Qualidade de Software', codigo: 'TN732', nucleo: 'especificas', prerequisitos: ['Engenharia de Software I'], ementa: 'Conceitos básicos. Processo de medição de software. Planejamento de medição. Técnicas de análise. Análise de desempenho de processos. Estimativas.', docentes: '	NATALIA CHAVES LESSA', horario: 'A ser definido' },
    'opt_eng_gest_proc': { nome: 'Gestão de Processos', codigo: 'A definir', nucleo: 'especificas', prerequisitos: ['Engenharia de Software I'], ementa: 'Introdução. Gestão de processos de negócio (Business Process Management – BPM). Modelagem de processos. Processos de software. Melhoria de processos de software. Normas de Qualidade e Modelos de Maturidade. Six Sigma', docentes: 'A ser definido', horario: 'A ser definido' },
    'opt_eng_soft_exp': { nome: 'Introdução à Engenharia de Software Experimental', codigo: 'TN704', nucleo: 'especificas', prerequisitos: [], ementa: 'Introdução. Planejamento e execução de estudos experimentais. Estudos primários. Métodos estatísticos. Revisão sistemática da literatura.', docentes: '	NATALIA CHAVES LESSA', horario: 'A ser definido' },
    'opt_eng_gov_ti': { nome: 'Governança de Tecnologia da Informação', codigo: 'A definir', nucleo: 'especificas', prerequisitos: [], ementa: 'Introdução. Planejamento Estratégico e a Tecnologia da Informação (TI). Framework para Governança de TI – COBIT. A necessidade de controles para a Governança de TI. Gestão de Serviços de TI. Ferramentas e modelos de melhores práticas para Governança de TI.', docentes: 'A ser definido', horario: 'A ser definido' },
    'opt_eng_ihc': { nome: 'Interação Humano-Computador', codigo: 'A definir', nucleo: 'especificas', prerequisitos: ['Engenharia de Software I'], ementa: 'O Humano. O Computador. Interação. Processo de Design.', docentes: 'A ser definido', horario: 'A ser definido' },
    'opt_eng_req': { nome: 'Engenharia de Requisitos', codigo: 'A definir', nucleo: 'especificas', prerequisitos: ['Engenharia de Software I'], ementa: 'Conceitos gerais. Tipos de requisitos. Processo de engenharia de requisitos. Técnicas de elicitação de requisitos. Técnicas de modelagem de requisitos. Revisão e validação de requisitos. Gerência de requisitos.', docentes: 'A ser definido', horario: 'A ser definido' },
    'opt_eng_bd2': { nome: 'Banco de Dados II', codigo: 'A definir', nucleo: 'especificas', prerequisitos: ['Banco de Dados'], ementa: 'Arquitetura de um SGBDR; Processamento de Consultas SQL; Análise de Planos de Consulta; Otimização de Consultas SQL; Conceitos Avançados.', docentes: 'A ser definido', horario: 'A ser definido' },
    'opt_eng_web_sem': { nome: 'Programação para a Web', codigo: 'TN758', nucleo: 'especificas', prerequisitos: ['Banco de Dados, Modelagem e Projeto de Software'], ementa: 'Introdução à Web Semântica. Introdução a Dados Ligados. Modelo de 5 estrelas. Resource Description Framework (RDF). RDF Schema (RDFS). Ontologias. SPARQL Protocol and RDF Query Language.', docentes: 'FILIPE BRAIDA DO CARMO', horario: 'A ser definido' },
    'opt_eng_intel_neg': { nome: 'Inteligência de Negócios', codigo: 'A definir', nucleo: 'especificas', prerequisitos: ['Banco de Dados'], ementa: 'Introdução à Inteligência de Negócios. Bancos de Dados OLTP e Bancos de Dados OLAP. Data Warehouse: Modelagem Dimensional Estrela. Modelagem Dimensional Snowflake. Tabelas Fato e Dimensão. Tipos de Dimensões. Áreas de Staging. Processos de Extração, Limpeza e Carga (ETL) de Dados. Tópicos Avançados.', docentes: 'A ser definido', horario: 'A ser definido' },
    
    // Optativas de Sistemas de Computação
    'opt_sc_arq_comp2': { nome: 'Arquitetura de Computadores II', codigo: 'TM409', nucleo: 'especificas', prerequisitos: ['Arquitetura de Computadores', 'Sistemas Operacionais'], ementa: 'Arquitetura básica de um processador. Sistemas de Entrada e Saída. Melhora da performance com uso de Pipeline. Tópicos especiais.', docentes: 'A ser definido', horario: 'A ser definido' },
    'opt_sc_sis_dist': { nome: 'Sistemas Distribuídos', codigo: 'IM873', nucleo: 'especificas', prerequisitos: ['Sistemas Operacionais'], ementa: 'Conceito de sistemas distribuídos, modelos de computação, algoritmos básicos, compartilhamento de recursos.', docentes: 'A ser definido', horario: 'A ser definido' },
    'opt_sc_top_prog_comp': { nome: 'Tópicos Especiais em Programação de Computadores', codigo: 'TM418', nucleo: 'especificas', prerequisitos: ['Programação Orientada a Objetos'], ementa: 'Ementa variável para cobrir tópicos avançados e emergentes em programação.', docentes: 'A ser definido', horario: 'A ser definido' },
    'opt_sc_prog_par_dist': { nome: 'Programação Paralela e Distribuída', codigo: 'TM435', nucleo: 'especificas', prerequisitos: ['Arquitetura de Computadores', 'Sistemas Operacionais'], ementa: 'Arquitetura de computadores voltadas para programação paralela e distribuída. Modelos de programação paralela. Programação em ambientes de Memória Compartilhada (Threads, OpenMP etc). Programação em ambientes de Memória Distribuída (MPI). Programação em ambientes de memória compartilha e distribuída. Ambientes Heterogêneos. Ferramentas de avaliação de desempenho.', docentes: 'A ser definido', horario: 'A ser definido' },
    'opt_sc_cad': { nome: 'Computação de Alto Desempenho', codigo: 'A definir', nucleo: 'especificas', prerequisitos: ['Arquitetura de Computadores', 'Sistemas Operacionais'], ementa: 'Modernização de código. Ambientes de execução paralelas e distribuídos. GPU’s e Programação em hardware reconfigurável-FPGA (field-programmable gate array). Análise de Desempenho.', docentes: 'A ser definido', horario: 'A ser definido' },
    'opt_sc_alg_par_dist': { nome: 'Algoritmos Paralelos e Distribuídos', codigo: 'TM436', nucleo: 'especificas', prerequisitos: ['Sistemas Operacionais'], ementa: 'Introdução aos Algoritmos Paralelos: técnicas básicas e algoritmos paralelos. Introdução à Algoritmos Distribuídos: relógios lógicos, gravação de estado global algoritmos distribuídos básicos.', docentes: 'A ser definido', horario: 'A ser definido' },
    'opt_sc_disp_moveis': { nome: 'Introdução aos Dispositivos Móveis', codigo: 'A definir', nucleo: 'especificas', prerequisitos: ['Sistemas Operacionais'], ementa: 'Visão geral sobre dispositivos móveis, plataformas de desenvolvimento (Android, iOS). Requisitos e desafios para computação móvel. Arquitetura de Software Móvel. Comunicação, Middleware e frameworks. Sensibilidade ao contexto e adaptação. Plataforma Android: Activities, Intents, Layouts, Services, Localização, Mapas e Sensores.', docentes: 'A ser definido', horario: 'A ser definido' },
    'opt_sc_prog_gpu': { nome: 'Programação em GPU', codigo: 'A definir', nucleo: 'especificas', prerequisitos: ['Arquitetura de Computadores', 'Sistemas Operacionais'], ementa: 'Introdução a programação de alto Desempenho em GPU. Paralelismo em GPU. Programação em CUDA/OPENCL.', docentes: 'A ser definido', horario: 'A ser definido' },
    'opt_sc_redes_sf': { nome: 'Redes de Computadores sem Fio', codigo: 'TM430', nucleo: 'especificas', prerequisitos: ['Redes e Sistemas Distribuídos'], ementa: 'Fundamentos de transmissão sem fio. Arquiteturas (Ad hoc, Malha). Padrões (redes celulares, locais, de sensores). Mobilidade e IP móvel.', docentes: 'A ser definido', horario: 'MARCEL WILLIAM ROCHA DA SILVA' },
    'opt_sc_sis_multi': { nome: 'Sistemas multimídia', codigo: 'IM879', nucleo: 'especificas', prerequisitos: ['Redes e Sistemas Distribuídos'], ementa: 'Introdução. Conversão de Sinais. Compactação e Compressão de Audio e Vídeo. Aplicações.', docentes: 'A ser definido', horario: 'A ser definido' },
    'opt_sc_roteamento': { nome: 'Roteamento em Redes de Computadores', codigo: 'A definir', nucleo: 'especificas', prerequisitos: ['Redes e Sistemas Distribuídos'], ementa: 'Princípios do roteamento em redes de computadores: vetores de distância e estado de enlace. Roteamento na Internet. Endereçamento hierárquico. Roteamento intra-domínio. Roteamento inter-domínio. Roteamento multicast. Roteamento em redes sem fio. Tópicos avançados em roteamento.', docentes: 'A ser definido', horario: 'A ser definido' },

    // Optativas de Sistemas Inteligentes
    'opt_si_top_ia': { nome: 'Tópicos Especiais em Inteligência Artificial', codigo: 'TM416', nucleo: 'especificas', prerequisitos: ['Inteligência Artificial'], ementa: 'Introdução e Conceitos Básicos. Hierarquia do Aprendizado. Paradigmas de Aprendizado: Simbólico, Estatístico, Baseado em Exemplos, Conexionista e Evolutivo. Aprendizado Supervisionado: Conceitos e Definições. Métodos e Critérios de Avaliação e Comparação de Algoritmos de Aprendizado.', docentes: 'A ser definido', horario: 'A ser definido' },
    'opt_si_busca_rec_info': { nome: 'Busca e Recuperação da Informação', codigo: 'TM444', nucleo: 'especificas', prerequisitos: ['Inteligência Artificial'], ementa: 'Introdução a Busca e Recuperação da Informação (BRI), modelos tradicionais. Modelo genérico de Sistemas para BRI. Requisitos para recuperação de textos. Gerenciamento de bancos de dados e BRI. Recuperação de textos utilizando métodos de índices invertidos.', docentes: 'A ser definido', horario: 'A ser definido' },
    'opt_si_ap_maq': { nome: 'Aprendizado de Máquina', codigo: 'A definir', nucleo: 'especificas', prerequisitos: ['Inteligência Artificial'], ementa: 'Aprendizado de Máquina. Tipos de Problema e Aprendizado. Metodologia Experimental. Engenharia de Atributos. Seleção de Modelos. Métodos Preditivos.', docentes: 'A ser definido', horario: 'A ser definido' },
    'opt_si_redes_neurais': { nome: 'Redes Neurais Artificiais', codigo: 'A definir', nucleo: 'especificas', prerequisitos: ['Aprendizado de Máquina'], ementa: 'Definição de modelos conexionistas. O neurônio biológico. Aprendizado em modelos conexionistas. Perceptron. Adaline. Modelos de redes neurais: Redes MLP, Redes Auto-organizáveis e Autoencoders. Aprendizado Profundo. Aplicações.', docentes: 'A ser definido', horario: 'A ser definido' },
    'opt_si_min_dados': { nome: 'Mineração de Dados', codigo: 'TM434', nucleo: 'especificas', prerequisitos: ['Inteligência Artificial'], ementa: 'Introdução à Mineração de Dados. Processo de descoberta de conhecimento. Análise e pré-processamento de dados. Tarefas de Mineração de Dados. Descoberta de regras de associação. Métodos de classificação. Métodos de agrupamento. Detecção de Outlier.', docentes: 'A ser definido', horario: 'A ser definido' },
    'opt_si_pln': { nome: 'Processamento de Linguagem Natural', codigo: 'TM441', nucleo: 'especificas', prerequisitos: ['Aprendizado de Máquina'], ementa: 'Definição de PLN. História. Conceitos básicos de processamento de texto. Modelos de Linguagem. Classificação de texto. Tarefas: Corretores de Escrita,Classificação de classes gramaticais, Identificação de entidades nomeadas, Extração de relações, Análise de sentimentos.', docentes: 'A ser definido', horario: 'A ser definido' },
    'opt_si_proc_img': { nome: 'Processamento de Imagens', codigo: 'TM438', nucleo: 'especificas', prerequisitos: ['Álgebra Linear I'], ementa: 'Introdução, Fundamentos, Filtragem no Domínio Espacial, Filtragem no dom´ınio da frequência, Restauração e reconstrução de imagens, Processamento morfológico de imagens, Segmentação de Imagens, Compressão de Imagens.', docentes: 'A ser definido', horario: 'A ser definido' },
    'opt_si_pln': { nome: 'Processamento de Linguagem Natural', codigo: 'TM441', nucleo: 'especificas', prerequisitos: ['Aprendizado de Máquina'], ementa: 'Processamento de texto (tokenização, normalização). Modelos de Linguagem (N-gramas). Classificação de texto. Tarefas: Identificação de entidades nomeadas, Análise de sentimentos.', docentes: 'A ser definido', horario: 'A ser definido' },
    'opt_si_sis_rec': { nome: 'Sistemas de Recomendação', codigo: 'TM429', nucleo: 'especificas', prerequisitos: ['Aprendizado de Máquina'], ementa: 'Taxonomia dos Sistemas de Recomendação. Filtragem Colaborativa (abordagens usuário-usuário e item-item). Algoritmos baseados em modelo (redução de dimensionalidade). Avaliação de recomendadores.', docentes: 'FILIPE BRAIDA DO CARMO', horario: 'A ser definido' },
    'opt_si_intel_neg': { nome: 'Inteligência de Negócios', codigo: 'A definir', nucleo: 'especificas', prerequisitos: ['Banco de Dados'], ementa: 'Introdução à Inteligência de Negócios. Bancos de Dados OLTP e Bancos de Dados OLAP. Data Warehouse. Modelagem Dimensional. ETL. Tópicos Avançados.', docentes: 'A ser definido', horario: 'A ser definido' },
};

const grade = [
    { periodo: 1, materias: ['comp_soc', 'geo_ana', 'mat_disc', 'prog_est', 'icc', 'circ_dig'] },
    { periodo: 2, materias: ['calc1', 'alg_lin1', 'log_comp', 'eng_soft1', 'ed1', 'arq_comp'] },
    { periodo: 3, materias: ['calc2', 'alg_lin_comp', 'lfa', 'mod_proj', 'poo', 'grafos'] },
    { periodo: 4, materias: ['calc3', 'lp', 'prob_est', 'so', 'fis_comp', 'apa'] },
    { periodo: 5, materias: ['ia', 'compiladores', 'met_num', 'bd', 'cg', 'otim_lin'] },
    { periodo: 6, materias: ['redes', 'ed2', { nome: 'Optativa', codigo: 'A definir', nucleo: 'especificas', docentes: 'A ser definido', horario: 'A ser definido' }, { nome: 'Optativa', codigo: 'A definir', nucleo: 'especificas', docentes: 'A ser definido', horario: 'A ser definido' }, { nome: 'Optativa', codigo: 'A definir', nucleo: 'especificas', docentes: 'A ser definido', horario: 'A ser definido' }, { nome: 'Eletiva', codigo: 'A definir', nucleo: 'eletiva', docentes: 'A ser definido', horario: 'A ser definido' }] },
    { periodo: 7, materias: [{ nome: 'Optativa', codigo: 'A definir', nucleo: 'especificas', docentes: 'A ser definido', horario: 'A ser definido' }, { nome: 'Optativa', codigo: 'A definir', nucleo: 'especificas', docentes: 'A ser definido', horario: 'A ser definido' }, { nome: 'Optativa', codigo: 'A definir', nucleo: 'especificas', docentes: 'A ser definido', horario: 'A ser definido' }, { nome: 'TCC 1', codigo: 'A definir', nucleo: 'academica', docentes: 'A ser definido', horario: 'A ser definido' }, { nome: 'TCC 1', codigo: 'A definir', nucleo: 'academica', docentes: 'A ser definido', horario: 'A ser definido' }] },
    { periodo: 8, materias: [{ nome: 'Optativa', codigo: 'A definir', nucleo: 'especificas', docentes: 'A ser definido', horario: 'A ser definido' }, { nome: 'Optativa', codigo: 'A definir', nucleo: 'especificas', docentes: 'A ser definido', horario: 'A ser definido' }, { nome: 'Optativa', codigo: 'A definir', nucleo: 'especificas', docentes: 'A ser definido', horario: 'A ser definido' }, { nome: 'TCC 2', codigo: 'A definir', nucleo: 'academica', docentes: 'A ser definido', horario: 'A ser definido' }, { nome: 'TCC 2', codigo: 'A definir', nucleo: 'academica', docentes: 'A ser definido', horario: 'A ser definido' }] }
];

const eixos = [
    { nome: 'Algoritmos e Combinatória', descricao: 'Foco em modelagem de problemas e projeto de algoritmos eficientes, exatos ou heurísticos, para questões de natureza combinatória.', cargaHoraria: '180h (3 optativas)', disciplinas: ['opt_alg_top_otim', 'opt_alg_otim_comb', 'opt_alg_bio_comp', 'opt_alg_pesq_op', 'opt_alg_teo_grafos', 'opt_alg_top_grafos', 'opt_alg_jogos_alg'], nucleo: 'matematica' },
    { nome: 'Engenharia de Sistemas e Informação', descricao: 'Engloba o desenvolvimento de sistemas, incluindo modelagem e gestão de processos, armazenamento e recuperação de dados, usabilidade e governança.', cargaHoraria: '240h (4 optativas)', disciplinas: ['opt_emp_info', 'opt_eng_sis_info', 'opt_top_bd_eng_soft', 'opt_eng_soft2', 'opt_eng_arq_soft', 'opt_eng_redes_petri', 'opt_eng_mod_soft_petri', 'opt_eng_mod_analise_neg', 'opt_eng_ger_proj', 'opt_eng_med_qual_soft', 'opt_eng_gest_proc', 'opt_eng_soft_exp', 'opt_eng_gov_ti', 'opt_eng_ihc', 'opt_eng_req', 'opt_eng_bd2', 'opt_eng_web_sem', 'opt_eng_intel_neg'], nucleo: 'horizontal' },
    { nome: 'Sistemas de Computação', descricao: 'Aprofundamento em arquitetura de computadores, ambientes de execução paralelos e distribuídos, e desenvolvimento de aplicações de alto desempenho.', cargaHoraria: '300h (5 optativas)', disciplinas: ['opt_sc_arq_comp2', 'opt_sc_sis_dist', 'opt_sc_top_prog_comp', 'opt_sc_prog_par_dist', 'opt_sc_cad', 'opt_sc_alg_par_dist', 'opt_sc_disp_moveis', 'opt_sc_prog_gpu', 'opt_sc_redes_sf', 'opt_sc_sis_multi', 'opt_sc_roteamento'], nucleo: 'programacao' },
    { nome: 'Sistemas Inteligentes', descricao: 'Relacionado a sistemas especialistas e aplicações de inteligência artificial que podem interagir e aprender com os usuários e dados.', cargaHoraria: '300h (5 optativas)', disciplinas: ['opt_si_top_ia', 'opt_si_busca_rec_info', 'opt_si_ap_maq', 'opt_si_redes_neurais', 'opt_si_min_dados', 'opt_si_pln', 'opt_si_proc_img', 'opt_si_sis_rec', 'opt_si_intel_neg'], nucleo: 'especificas' }
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
    document.getElementById('modal-codigo').innerText = materia.codigo || '';
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

            li.innerHTML = `<div class="flex justify-between items-center">
                              <span class="font-semibold text-slate-100 text-sm">${materia.nome}</span>
                              <span class="text-xs font-mono text-slate-500">${materia.codigo || ''}</span>
                            </div>`;
            if (materia.nome === 'Optativa') {
                li.addEventListener('click', () => {
                    document.getElementById('eixos-profissionais').scrollIntoView({ behavior: 'smooth' });
                });
            } else {
                li.addEventListener('click', () => openModal(materia));
            }
            materiasList.appendChild(li);
        });
        periodoDiv.appendChild(materiasList);
        gradeContainer.appendChild(periodoDiv);
    });
}

function renderFilters() {
    const buttonClasses = 'filter-btn px-4 py-2 text-sm font-semibold rounded-t-lg transition-all duration-300 bg-slate-700 text-slate-300';
    let buttonsHTML = `<button data-filter="all" class="${buttonClasses} active">Todos</button>`;

    Object.keys(nucleoClasses).forEach(key => {
        if (key !== 'academica' && key !== 'eletiva') {
            const nucleo = nucleoClasses[key];
            buttonsHTML += `<button data-filter="${key}" class="${buttonClasses} border-l-4 ${nucleo.border}">${nucleo.text}</button>`;
        }
    });
    filtersContainer.innerHTML = buttonsHTML;

    filtersContainer.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const filter = e.target.dataset.filter;
            // Remove 'active' class from all buttons
            document.querySelectorAll('#filters button').forEach(btn => {
                btn.classList.remove('active');
            });
            // Add 'active' class to the clicked button
            e.target.classList.add('active');

            // Filter the grid
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

        const ul = document.createElement('ul');
        ul.className = 'space-y-2';
        eixo.disciplinas.forEach(optativaId => {
            const optativa = disciplinas[optativaId];
            if (!optativa) return;
            const nucleoClass = nucleoClasses[optativa.nucleo]?.border || 'border-l-slate-600';
            const li = document.createElement('li');
            li.className = `materia-item bg-slate-900 p-3 rounded-md border-l-4 cursor-pointer transition-all duration-300 hover:bg-slate-700 hover:shadow-md ${nucleoClass}`;
            li.dataset.nucleo = optativa.nucleo;
            li.innerHTML = `<div class="flex justify-between items-center">
                              <span class="font-semibold text-slate-100 text-sm">${optativa.nome}</span>
                              <span class="text-xs font-mono text-slate-500">${optativa.codigo || ''}</span>
                            </div>`;
            li.addEventListener('click', () => openModal(optativa));
            ul.appendChild(li);
        });

        eixoCard.innerHTML = `
            <div class="flex-grow">
                <span class="px-3 py-1 text-xs rounded-full text-white font-semibold ${nucleoColor}">${eixo.cargaHoraria}</span>
                <h4 class="text-2xl font-bold text-white mt-4 mb-2">${eixo.nome}</h4>
                <p class="text-slate-300 mb-4">${eixo.descricao}</p>
                <h5 class="font-semibold text-slate-200 mb-2">Disciplinas Optativas do Eixo:</h5>
            </div>
        `;
        eixoCard.querySelector('.flex-grow').appendChild(ul);
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
