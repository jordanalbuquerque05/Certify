// ============================================================
// CERTIFY — Dados completos das certificações
// ============================================================

const CERTIFICATIONS = {

  // ──────────────────────────────────────────────────────────
  // AWS CLOUD PRACTITIONER — CLF-C02
  // ──────────────────────────────────────────────────────────
  'clf-c02': {
    id: 'clf-c02',
    provider: 'aws',
    code: 'CLF-C02',
    name: 'AWS Certified Cloud Practitioner',
    shortName: 'Cloud Practitioner',
    level: 'Foundational',
    emoji: '☁️',
    duration: '4 semanas',
    hoursPerDay: '1–2h/dia',
    totalModules: 18,
    sourceUrl: 'https://github.com/Thiago-code-lab/aws-certified-cloud-practitioner-brasil',
    description: 'Fundamentos de nuvem, serviços core da AWS, segurança, FinOps e casos de uso reais em empresas.',
    roadmap: [
      {
        week: 1,
        title: 'Base de Nuvem, Segurança e Rede',
        modules: [1, 2, 3, 4, 5]
      },
      {
        week: 2,
        title: 'Serviços de Dados, Storage e Custos',
        modules: [6, 7, 8, 9, 10]
      },
      {
        week: 3,
        title: 'Adoção, Arquitetura e Inovação',
        modules: [11, 12, 13, 14, 15]
      },
      {
        week: 4,
        title: 'Consolidação e Revisão Final',
        modules: [16, 17, 18]
      }
    ],
    modules: [
      {
        id: 1,
        title: 'Introdução à Computação em Nuvem',
        icon: '🌩️',
        estimatedTime: '2h',
        topics: [
          'O que é Cloud Computing?',
          'Modelos de implantação: Pública, Privada, Híbrida',
          'Modelos de serviço: IaaS, PaaS, SaaS',
          'Vantagens da nuvem AWS',
          'Infraestrutura global AWS: Regiões, AZs, Edge Locations',
          'Responsabilidade compartilhada',
          'Serviços mais cobrados no CLF-C02'
        ],
        resources: {
          readme: 'https://github.com/Thiago-code-lab/aws-certified-cloud-practitioner-brasil/blob/main/01-Introducao-Computacao-em-Nuvem/README.md',
          quickReview: 'https://github.com/Thiago-code-lab/aws-certified-cloud-practitioner-brasil/blob/main/quick-review/fundamentos.md'
        },
        content: {
          focus: 'Base do CLF-C02: benefícios da nuvem, infraestrutura global e linguagem de prova.',
          keyPoints: [
            'Benefícios da nuvem: agilidade, elasticidade e OPEX vs CAPEX.',
            'Região define área geográfica; AZ (Availability Zone) define isolamento dentro da Região.',
            'Responsabilidade compartilhada: AWS cuida DA nuvem (hardware), cliente cuida NA nuvem (dados, acessos).',
            'Diferencie elasticidade (ajuste dinâmico a picos) de escalabilidade (crescimento sustentável).'
          ],
          examSignals: [
            '"Baixa latência para país específico" → escolha de Região adequada.',
            '"Continuidade mesmo com falha local" → distribuição em múltiplas AZs.',
            '"Começar rápido sem comprar hardware" → benefício de agilidade da nuvem.'
          ],
          traps: [
            'Confundir alta performance com alta disponibilidade. Performance = velocidade; Disponibilidade = continuidade.',
            'Elasticidade responde a picos; escalabilidade sustenta crescimento — são conceitos distintos.'
          ],
          tips: [
            'Região vs AZ: Região = área geográfica; AZ = data center isolado dentro da Região.',
            'Nuvem reduz CAPEX e acelera provisionamento — essa é a resposta para cenários de agilidade.'
          ]
        },
        flashcards: [
          { q: 'Quais são os 3 modelos de serviço em cloud?', a: 'IaaS (Infraestrutura), PaaS (Plataforma) e SaaS (Software).' },
          { q: 'O que é uma Availability Zone (AZ)?', a: 'Um ou mais data centers com energia, rede e conectividade redundantes dentro de uma Região AWS.' },
          { q: 'Quais são as 6 vantagens da AWS Cloud?', a: 'Trocar capex por opex, economia de escala, parar de adivinhar capacidade, agilidade e velocidade, foco no negócio, global em minutos.' },
          { q: 'O que é o Modelo de Responsabilidade Compartilhada?', a: 'A AWS é responsável "da nuvem" (hardware, infraestrutura global), o cliente é responsável "na nuvem" (dados, acessos, configurações).' },
          { q: 'O que é uma Edge Location?', a: 'Site usado pelo CloudFront para cache de conteúdo perto dos usuários finais. Há mais Edge Locations do que Regiões.' }
        ]
      },
      {
        id: 2,
        title: 'Amazon EC2',
        icon: '🖥️',
        estimatedTime: '2h',
        topics: [
          'Tipos de instância EC2 (General Purpose, Compute Optimized, Memory Optimized, Storage Optimized)',
          'Modelos de compra: On-Demand, Reserved, Spot, Dedicated',
          'Security Groups vs NACLs',
          'EC2 Instance Store vs EBS',
          'AMIs (Amazon Machine Images)',
          'EC2 User Data',
          'Preço e custos EC2'
        ],
        resources: {
          readme: 'https://github.com/Thiago-code-lab/aws-certified-cloud-practitioner-brasil/blob/main/02-Amazon-EC2/README.md'
        },
        content: {
          focus: 'Módulo de computação virtual: instâncias EC2, modelos de compra e decisões básicas de disponibilidade.',
          keyPoints: [
            'EC2 é computação como serviço: você escolhe capacidade, sistema e configuração.',
            'EBS é armazenamento de bloco persistente, diferente de S3 (objetos).',
            'Auto Scaling ajusta quantidade de instâncias; Load Balancer distribui tráfego.',
            'Spot Instances têm desconto de até 90%, mas podem ser interrompidas com 2 min de aviso.'
          ],
          examSignals: [
            '"Servidor virtual na nuvem" → Amazon EC2.',
            '"Volume para anexar a uma instância" → Amazon EBS.',
            '"Distribuir tráfego entre instâncias" → Elastic Load Balancing.',
            '"Reduzir custo para workload previsível" → Reserved Instances.'
          ],
          traps: [
            'Aumentar tamanho de instância (escala vertical) melhora capacidade, NÃO cria alta disponibilidade.',
            'Security Groups são stateful (retorno automático); NACLs são stateless (precisam regras de entrada E saída).'
          ],
          tips: [
            'EC2 vs Lambda: EC2 = servidor gerenciado pelo cliente; Lambda = execução sem servidor.',
            'EBS vs S3: EBS = bloco para instância; S3 = objetos via API.'
          ]
        },
        flashcards: [
          { q: 'Qual tipo de instância EC2 é ideal para banco de dados em memória?', a: 'Memory Optimized (famílias R e X), projetadas para cargas de trabalho que precisam processar grandes datasets na memória.' },
          { q: 'Qual modelo de compra EC2 oferece maior desconto para cargas previsíveis?', a: 'Reserved Instances (RI) com até 72% de desconto para compromissos de 1 ou 3 anos.' },
          { q: 'O que é uma Spot Instance?', a: 'Capacidade EC2 não utilizada com desconto de até 90%, mas pode ser interrompida com aviso de 2 minutos.' },
          { q: 'Diferença entre Security Group e NACL?', a: 'Security Groups são stateful (retorno automático), operam em nível de instância. NACLs são stateless (precisam regras de entrada E saída), operam em nível de subnet.' }
        ]
      },
      {
        id: 3,
        title: 'Segurança e Conformidade',
        icon: '🔐',
        estimatedTime: '2.5h',
        topics: [
          'AWS IAM: usuários, grupos, roles, políticas',
          'MFA (Multi-Factor Authentication)',
          'Políticas de senha',
          'AWS Organizations e SCPs',
          'AWS Shield (Standard e Advanced)',
          'AWS WAF',
          'AWS Artifact',
          'Amazon Inspector, GuardDuty, Macie',
          'AWS KMS e CloudHSM'
        ],
        resources: {
          readme: 'https://github.com/Thiago-code-lab/aws-certified-cloud-practitioner-brasil/blob/main/03-Seguran%C3%A7a-e-Conformidade/README.md',
          quickReview: 'https://github.com/Thiago-code-lab/aws-certified-cloud-practitioner-brasil/blob/main/quick-review/seguranca.md'
        },
        content: {
          focus: 'O que mais cai em prova: identidade, acesso, auditoria e responsabilidade.',
          keyPoints: [
            'Root deve ser restrito e protegido com MFA — nunca use para operação diária.',
            'IAM controla autenticação (quem é) e autorização (o que pode fazer).',
            'IAM Role: identidade assumida temporariamente por serviços ou usuários.',
            'CloudTrail responde "quem fez o quê" via eventos de API — ferramenta de auditoria.'
          ],
          examSignals: [
            '"Rastrear chamadas de API" → AWS CloudTrail.',
            '"Conceder acesso temporário entre serviços" → IAM Role.',
            '"Aplicar acesso mínimo necessário" → princípio de menor privilégio.',
            '"Detectar ameaças inteligentemente" → Amazon GuardDuty.'
          ],
          traps: [
            'Habilitar IAM sozinho não resolve conformidade. A prova cobra conjunto de controles: log, governança e MFA.',
            'IAM User = identidade de longo prazo; IAM Role = permissão assumida, inclusive temporária.'
          ],
          tips: [
            'Root vs IAM Admin: Root para tarefas excepcionais; IAM Admin para operação diária.',
            'Shield Standard é automático e gratuito; Shield Advanced é pago com suporte especializado.'
          ]
        },
        flashcards: [
          { q: 'O que é o princípio do menor privilégio (least privilege)?', a: 'Conceder apenas as permissões mínimas necessárias para realizar uma tarefa.' },
          { q: 'O que é IAM Role?', a: 'Identidade IAM que pode ser assumida por serviços AWS ou usuários para obter permissões temporárias.' },
          { q: 'Para que serve o AWS Shield?', a: 'Proteção gerenciada contra ataques DDoS. Standard é gratuito e automático; Advanced oferece proteção adicional paga.' },
          { q: 'O que faz o Amazon GuardDuty?', a: 'Serviço de detecção de ameaças inteligente que monitora malwares, atividades suspeitas usando ML e análise de logs.' },
          { q: 'Diferença entre KMS e CloudHSM?', a: 'KMS é gerenciado pela AWS, multitenant. CloudHSM é hardware dedicado para o cliente, conformidade FIPS 140-2 Nível 3.' }
        ]
      },
      {
        id: 4,
        title: 'Amazon S3',
        icon: '🪣',
        estimatedTime: '2h',
        topics: [
          'Conceitos: Buckets, objetos, chaves',
          'Classes de armazenamento S3: Standard, IA, One Zone-IA, Glacier',
          'S3 Lifecycle Policies',
          'S3 Versioning',
          'S3 Encryption: SSE-S3, SSE-KMS, SSE-C, Client-Side',
          'S3 Block Public Access',
          'S3 Replication (CRR e SRR)',
          'Static website hosting no S3'
        ],
        resources: {
          readme: 'https://github.com/Thiago-code-lab/aws-certified-cloud-practitioner-brasil/blob/main/04-Amazon-S3/README.md',
          quickReview: 'https://github.com/Thiago-code-lab/aws-certified-cloud-practitioner-brasil/blob/main/quick-review/armazenamento.md'
        },
        content: {
          focus: 'Armazenamento de objetos: durabilidade, classes de armazenamento e custo.',
          keyPoints: [
            'S3 é armazenamento de objetos — não é disco para boot de EC2 (use EBS para isso).',
            'Versionamento protege contra exclusão acidental e mantém histórico.',
            'Lifecycle move dados para classe mais barata conforme padrão de acesso.',
            'Todas as classes S3 têm 11 noves de durabilidade (99,999999999%).'
          ],
          examSignals: [
            '"Site estático simples" → S3 static website hosting.',
            '"Dados raramente acessados por anos" → S3 Glacier Deep Archive.',
            '"Recuperação rápida de arquivo" → S3 Glacier Instant Retrieval.',
            '"Padrão de acesso imprevisível" → S3 Intelligent-Tiering.'
          ],
          traps: [
            'Escolher classe apenas pelo menor preço por GB e ignorar custo/tempo de recuperação.',
            'S3 Glacier Flexible Retrieval: recuperação em minutos a horas — não é instantâneo!'
          ],
          tips: [
            'S3 Standard → acesso frequente. S3 Glacier → arquivo e acesso raro.',
            'CRR (Cross-Region Replication): cópia automática entre regiões. SRR: mesma região.'
          ]
        },
        flashcards: [
          { q: 'O S3 é ilimitado em termos de capacidade?', a: 'Sim. O S3 tem armazenamento ilimitado. Cada objeto pode ter até 5TB.' },
          { q: 'Qual classe do S3 é mais barata para dados raramente acessados que precisam de recuperação rápida?', a: 'S3 Standard-IA (Infrequent Access) ou S3 One Zone-IA para ainda mais economia sem redundância multi-AZ.' },
          { q: 'Para arquivamento de longo prazo com recuperação em minutos, qual classe usar?', a: 'S3 Glacier Instant Retrieval — recuperação em milissegundos com custo muito baixo.' },
          { q: 'O que é CRR no S3?', a: 'Cross-Region Replication: cópia automática de objetos para um bucket em outra região AWS.' }
        ]
      },
      {
        id: 5,
        title: 'Redes e Conectividade',
        icon: '🌐',
        estimatedTime: '2h',
        topics: [
          'Amazon VPC: subnets públicas e privadas',
          'Internet Gateway e NAT Gateway',
          'Route Tables',
          'Security Groups e NACLs',
          'VPC Peering',
          'AWS Direct Connect',
          'AWS VPN',
          'Amazon Route 53',
          'Amazon CloudFront (CDN)',
          'Elastic Load Balancer (ALB, NLB, CLB)'
        ],
        resources: {
          readme: 'https://github.com/Thiago-code-lab/aws-certified-cloud-practitioner-brasil/blob/main/05-Redes-e-Conectividade/README.md'
        },
        content: {
          focus: 'Rede virtual isolada na AWS e como trafego entra, sai e é controlado.',
          keyPoints: [
            'VPC é rede virtual privada isolada. Dentro dela você define subnets, tabelas de rotas e gateways.',
            'Internet Gateway: conexão bidirecional com a internet para subnets públicas.',
            'NAT Gateway: saída para internet sem expor IPs privados de subnets privadas.',
            'CloudFront é CDN; Route 53 é DNS gerenciado.'
          ],
          examSignals: [
            '"Isolar aplicação em rede privada" → VPC com subnets privadas.',
            '"Baixa latência global para conteúdo estático" → CloudFront.',
            '"Conexão dedicada on-premises para AWS" → AWS Direct Connect.',
            '"Resolver DNS de domínio próprio" → Amazon Route 53.'
          ],
          traps: [
            'Subnet pública NÃO significa exposta. Sem Security Group permissivo, nada acessa.',
            'NAT Gateway é unidirecional (saída); Internet Gateway é bidirecional.'
          ],
          tips: [
            'Direct Connect vs VPN: Direct Connect é físico, mais rápido e confiável; VPN é pela internet, mais econômico.',
            'CloudFront usa Edge Locations globais para cachear e entregar conteúdo com baixa latência.'
          ]
        },
        flashcards: [
          { q: 'Para que serve o Internet Gateway?', a: 'Permite comunicação bidirecional entre instâncias em uma VPC e a internet.' },
          { q: 'Para que serve o NAT Gateway?', a: 'Permite que instâncias em subnets privadas acessem a internet sem expor o IP privado (tráfego de saída somente).' },
          { q: 'O que é VPC Peering?', a: 'Conexão de rede entre duas VPCs que permite rotear tráfego usando endereços IP privados.' },
          { q: 'Diferença entre Direct Connect e VPN?', a: 'Direct Connect é uma conexão física dedicada ao data center do cliente (mais rápida e consistente). VPN é criptografada pela internet pública (mais barata).' }
        ]
      },
      {
        id: 6,
        title: 'Banco de Dados',
        icon: '🗄️',
        estimatedTime: '2h',
        topics: [
          'Amazon RDS (MySQL, PostgreSQL, Oracle, SQL Server, MariaDB)',
          'Amazon Aurora',
          'Amazon DynamoDB',
          'Amazon Redshift (Data Warehouse)',
          'Amazon ElastiCache (Redis e Memcached)',
          'Amazon DocumentDB',
          'AWS Database Migration Service (DMS)',
          'Multi-AZ vs Read Replicas'
        ],
        resources: {
          readme: 'https://github.com/Thiago-code-lab/aws-certified-cloud-practitioner-brasil/blob/main/06-Banco-de-Dados/README.md'
        },
        content: {
          focus: 'Escolher o banco certo para o caso de uso certo — relacional vs NoSQL vs cache vs DW.',
          keyPoints: [
            'RDS Multi-AZ = alta disponibilidade (failover automático). Read Replica = escala de leitura.',
            'DynamoDB: NoSQL totalmente gerenciado, escala horizontal automática, single-digit ms.',
            'Aurora: compatível com MySQL/PostgreSQL, até 15 read replicas, storage compartilhado.',
            'ElastiCache Redis/Memcached: cache em memória para reduzir latência de acesso.'
          ],
          examSignals: [
            '"Dados relacionais estruturados" → Amazon RDS.',
            '"Cache para reduzir latência" → Amazon ElastiCache.',
            '"NoSQL para qualquer escala" → Amazon DynamoDB.',
            '"Data Warehouse para analytics" → Amazon Redshift.'
          ],
          traps: [
            'RDS Multi-AZ NÃO melhora performance de leitura. Para leitura, use Read Replica.',
            'DynamoDB não suporta SQL complexo. Se precisar de JOIN, considere RDS.'
          ],
          tips: [
            'Aurora vs RDS: Aurora é mais caro mas muito mais rápido e escalável.',
            'Redshift é para queries analíticas em grandes volumes. RDS é transacional (OLTP).'
          ]
        },
        flashcards: [
          { q: 'Para que serve o Amazon RDS Multi-AZ?', a: 'Alta disponibilidade: cria uma réplica em outra AZ para failover automático. NÃO serve para melhorar performance de leitura.' },
          { q: 'O que é Amazon Aurora?', a: 'Banco relacional da AWS, compatível com MySQL e PostgreSQL. Até 5x mais rápido que MySQL padrão com custos menores que bancos comerciais.' },
          { q: 'Quando usar DynamoDB vs RDS?', a: 'DynamoDB para dados NoSQL com baixa latência em qualquer escala. RDS para dados relacionais com queries SQL complexas.' },
          { q: 'Para que serve o Amazon ElastiCache?', a: 'Cache em memória (Redis ou Memcached) para reduzir carga em bancos de dados e melhorar latência de aplicações.' }
        ]
      },
      {
        id: 7,
        title: 'Computação Serverless',
        icon: '⚡',
        estimatedTime: '1.5h',
        topics: [
          'AWS Lambda: funções, triggers, limites',
          'Amazon API Gateway',
          'AWS Fargate',
          'Amazon ECS e EKS (conceitos)',
          'AWS Elastic Beanstalk',
          'Diferença Serverless vs Managed vs Self-Managed'
        ],
        resources: {
          readme: 'https://github.com/Thiago-code-lab/aws-certified-cloud-practitioner-brasil/blob/main/07-Computacao-Serverless/README.md'
        },
        content: {
          focus: 'Computar sem gerenciar servidores: Lambda, containers e PaaS.',
          keyPoints: [
            'Lambda: evento dispara função, paga por execução, limite de 15 min.',
            'Fargate: containers sem gerenciar servidor EC2 — serverless para containers.',
            'ECS vs EKS: ECS é nativo AWS; EKS é Kubernetes gerenciado.',
            'Elastic Beanstalk: PaaS que gerencia infra para você (EC2, ELB, Auto Scaling).'
          ],
          examSignals: [
            '"Sem gerenciar servidor" + "eventos" → AWS Lambda.',
            '"Containers sem gerenciar clusters" → AWS Fargate.',
            '"Deploy de app web sem gerenciar infra" → Elastic Beanstalk.',
            '"Kubernetes gerenciado" → Amazon EKS.'
          ],
          traps: [
            'Lambda tem limite de 15 minutos. Processos longos precisam de EC2 ou Fargate.',
            'Fargate (serverless) vs ECS com EC2: Fargate a AWS gerencia o nó; ECS-EC2 você gerencia.'
          ],
          tips: [
            'Serverless = sem gerenciar infraestrutura, mas o código continua sendo sua responsabilidade.',
            'Lambda + API Gateway = arquitetura de API sem servidor.'
          ]
        },
        flashcards: [
          { q: 'O que é AWS Lambda?', a: 'Serviço de computação serverless que executa código em resposta a eventos sem necessidade de gerenciar servidores.' },
          { q: 'Qual é o limite de execução do Lambda?', a: 'Máximo de 15 minutos por execução.' },
          { q: 'Diferença entre ECS e EKS?', a: 'ECS é o serviço de containers gerenciado da AWS (mais simples). EKS é o Kubernetes gerenciado (padrão de mercado).' }
        ]
      },
      {
        id: 8,
        title: 'Armazenamento',
        icon: '💾',
        estimatedTime: '1.5h',
        topics: [
          'Amazon EBS (Elastic Block Store): tipos de volume',
          'Amazon EFS (Elastic File System)',
          'AWS Snow Family: Snowcone, Snowball, Snowmobile',
          'AWS Storage Gateway',
          'Diferença EBS vs EFS vs S3',
          'Casos de uso por tipo de armazenamento'
        ],
        resources: {
          readme: 'https://github.com/Thiago-code-lab/aws-certified-cloud-practitioner-brasil/blob/main/08-Armazenamento/README.md'
        },
        content: {
          focus: 'Tipos de armazenamento AWS: escolha certa para cada caso de uso.',
          keyPoints: [
            'EBS: bloco de disco para instância EC2 específica, na mesma AZ.',
            'EFS: sistema de arquivos compartilhado por múltiplas instâncias em múltiplas AZs.',
            'S3: objetos via API HTTP; não é sistema de arquivos montável.',
            'Snow Family: migração física de grandes volumes de dados para a AWS.'
          ],
          examSignals: [
            '"Disco persistente para instância" → Amazon EBS.',
            '"Dados compartilhados entre várias instâncias" → Amazon EFS.',
            '"Migração de petabytes offline" → AWS Snowball ou Snowmobile.',
            '"Conexão on-premises com S3" → AWS Storage Gateway.'
          ],
          traps: [
            'EBS só pode ser montado em UMA instância EC2 por vez (exceto io1/io2 com Multi-Attach).',
            'S3 é objeto, não pode ser usado como disco de boot.'
          ],
          tips: [
            'EBS = exclusivo da AZ; EFS = multi-AZ; S3 = global.',
            'Snowcone (8 TB) < Snowball Edge (80 TB) < Snowmobile (100 PB).'
          ]
        },
        flashcards: [
          { q: 'Diferença entre EBS e EFS?', a: 'EBS é bloco, acoplado a UMA instância EC2, na mesma AZ. EFS é sistema de arquivos compartilhado montável em múltiplas instâncias em múltiplas AZs.' },
          { q: 'Quando usar AWS Snowball?', a: 'Para migrar terabytes/petabytes de dados offline para a AWS quando a transferência via internet seria muito lenta ou cara.' },
          { q: 'O que é AWS Storage Gateway?', a: 'Serviço híbrido que conecta on-premises ao armazenamento em nuvem AWS de forma transparente.' }
        ]
      },
      {
        id: 9,
        title: 'Monitoramento e Governança',
        icon: '📊',
        estimatedTime: '2h',
        topics: [
          'Amazon CloudWatch: métricas, logs, alarmes, dashboards',
          'AWS CloudTrail: auditoria de chamadas de API',
          'AWS Config: conformidade de recursos',
          'AWS Trusted Advisor',
          'AWS Health Dashboard',
          'AWS Service Catalog',
          'AWS Systems Manager',
          'Amazon EventBridge'
        ],
        resources: {
          readme: 'https://github.com/Thiago-code-lab/aws-certified-cloud-practitioner-brasil/blob/main/09-Monitoramento-e-Governanca/README.md'
        },
        content: {
          focus: 'Observabilidade e conformidade: ver o que acontece e garantir boas práticas.',
          keyPoints: [
            'CloudWatch: métricas, logs, alarmes e dashboards de monitoramento.',
            'CloudTrail: auditoria de QUEM fez O QUÊ via chamadas de API.',
            'Config: conformidade contínua de configurações de recursos.',
            'Trusted Advisor: recomendações em custo, performance, segurança e limites.'
          ],
          examSignals: [
            '"Monitorar CPU de EC2" → CloudWatch Metrics.',
            '"Quem deletou esse bucket S3?" → AWS CloudTrail.',
            '"Verificar se recursos seguem boas práticas" → AWS Config + Trusted Advisor.',
            '"Reagir a eventos de recursos" → Amazon EventBridge.'
          ],
          traps: [
            'CloudWatch NÃO registra ações de usuário; isso é função do CloudTrail.',
            'Trusted Advisor recomenda; Config registra e verifica conformidade.'
          ],
          tips: [
            'CloudWatch = observabilidade de recursos. CloudTrail = log de auditoria de ações.',
            'AWS Health Dashboard = status de saúde de serviços na sua conta.'
          ]
        },
        flashcards: [
          { q: 'Diferença entre CloudWatch e CloudTrail?', a: 'CloudWatch monitora performance e recursos (métricas, logs). CloudTrail registra QUEM fez O QUÊ na conta AWS (auditoria de API calls).' },
          { q: 'Para que serve o AWS Trusted Advisor?', a: 'Recomendações automáticas em 5 categorias: otimização de custos, performance, segurança, tolerância a falhas e service limits.' },
          { q: 'O que é AWS Config?', a: 'Serviço de avaliação de conformidade que rastreia configurações de recursos e verifica se estão em conformidade com regras definidas.' }
        ]
      },
      {
        id: 10,
        title: 'Precificação e Suporte',
        icon: '💰',
        estimatedTime: '2h',
        topics: [
          'Modelos de precificação AWS (pay-as-you-go, save when you reserve, pay less by using more)',
          'AWS Free Tier',
          'AWS Cost Explorer',
          'AWS Budgets',
          'AWS Pricing Calculator',
          'Total Cost of Ownership (TCO)',
          'Planos de suporte: Basic, Developer, Business, Enterprise On-Ramp, Enterprise',
          'AWS Marketplace'
        ],
        resources: {
          readme: 'https://github.com/Thiago-code-lab/aws-certified-cloud-practitioner-brasil/blob/main/10-Precificacao-e-Suporte/README.md',
          quickReview: 'https://github.com/Thiago-code-lab/aws-certified-cloud-practitioner-brasil/blob/main/quick-review/custos.md'
        },
        content: {
          focus: 'Como a AWS cobra e como reduzir custos de forma inteligente.',
          keyPoints: [
            'Pay-as-you-go: pague apenas pelo que usa, sem contratos longos obrigatórios.',
            'Reserved e Savings Plans: compromisso de uso = desconto de até 72%.',
            'Cost Explorer: analisa gastos. Budgets: define alertas de orçamento.',
            'TCO (Total Cost of Ownership): compara custo on-premises vs nuvem.'
          ],
          examSignals: [
            '"Visualizar e analisar gastos" → AWS Cost Explorer.',
            '"Definir alertas quando custo exceder limite" → AWS Budgets.',
            '"Suporte com TAM dedicado" → Enterprise Support.',
            '"Calcular custo antes de migrar" → AWS Pricing Calculator.'
          ],
          traps: [
            'Basic Support é gratuito mas não inclui suporte técnico. Developer tem email; Business tem phone 24/7.',
            'Free Tier "Always Free" difere de "12 Months Free" que expira no primeiro ano.'
          ],
          tips: [
            'Tags de alocação de custo permitem rastrear gastos por projeto, equipe ou ambiente.',
            'Spot Instances = até 90% desconto, mas podem ser interrompidas. Bom para workloads flexíveis.'
          ]
        },
        flashcards: [
          { q: 'O que é o AWS Free Tier?', a: 'Nível gratuito com 3 categorias: Always Free (sem expiração), 12 Months Free (primeiro ano), Trials (tempo limitado).' },
          { q: 'Qual plano de suporte inclui Technical Account Manager (TAM)?', a: 'Enterprise Support (e Enterprise On-Ramp com TAM designado do pool).' },
          { q: 'O que é AWS Cost Explorer?', a: 'Ferramenta para visualizar, entender e gerenciar custos e uso da AWS com gráficos e filtros.' }
        ]
      },
      {
        id: 11,
        title: 'Migração e Inovação',
        icon: '🚀',
        estimatedTime: '1.5h',
        topics: [
          '6 Rs de migração: Rehost, Replatform, Repurchase, Refactor, Retire, Retain',
          'AWS Migration Hub',
          'AWS Application Migration Service (MGN)',
          'AWS Database Migration Service (DMS)',
          'AWS DataSync',
          'AWS Snow Family na migração',
          'Inovação na AWS: IA, ML, IoT'
        ],
        resources: {
          readme: 'https://github.com/Thiago-code-lab/aws-certified-cloud-practitioner-brasil/blob/main/11-Migracao-e-Inovacao/README.md'
        },
        content: {
          focus: 'Estratégias para mover workloads para a AWS e inovar com novas tecnologias.',
          keyPoints: [
            'Os 6 Rs de migração: Rehost, Replatform, Repurchase, Refactor, Retire, Retain.',
            'Rehost (Lift and Shift) = copiar exatamente como está para a AWS.',
            'DMS migra bancos de dados; DataSync transfere arquivos; Snow Family migra volumes físicos.',
            'Innovação: Bedrock (GenAI), SageMaker (ML), IoT Core (IoT).'
          ],
          examSignals: [
            '"Menor esforço de migração" → Rehost (Lift and Shift).',
            '"Migrar banco sem downtime" → AWS DMS.',
            '"Dados demais para internet, enviar físico" → AWS Snow Family.',
            '"Refatorar para microserviços" → Re-architect (maior esforço, maior benefício).'
          ],
          traps: [
            'Replatform não é refatoração completa; faz ajustes menores (ex: migrar de DB autogerenciado para RDS).',
            'DMS é para bancos de dados; DataSync é para sistemas de arquivos NFS/SMB.'
          ],
          tips: [
            'Retire = desligar o que não usa mais. Retain = manter on-premises por ora.',
            'DataSync usa agente local para mover dados via rede; Snow Family é físico.'
          ]
        },
        flashcards: [
          { q: 'O que significa "Lift and Shift" em migração?', a: 'É o Rehost: mover aplicações para a nuvem sem alterações, apenas replicando a arquitetura on-premises.' },
          { q: 'Qual "R" de migração envolve refatorar para arquitetura cloud-native?', a: 'Refactor/Re-architect: maior esforço mas melhor aproveitamento dos benefícios cloud (ex: migrar para serverless).' }
        ]
      },
      {
        id: 12,
        title: 'CAF — Cloud Adoption Framework',
        icon: '🗺️',
        estimatedTime: '1.5h',
        topics: [
          '6 perspectivas do CAF: Business, People, Governance, Platform, Security, Operations',
          'Fases de adoção: Envision, Align, Launch, Scale',
          'Resultados de negócio esperados',
          'Casos de uso do CAF na prática'
        ],
        resources: {
          readme: 'https://github.com/Thiago-code-lab/aws-certified-cloud-practitioner-brasil/blob/main/12-CAF-Cloud-Adoption-Framework/README.md'
        },
        content: {
          focus: 'Framework de adoção de nuvem: perspectivas e fases da jornada para a AWS.',
          keyPoints: [
            '6 perspectivas do CAF: Business, People, Governance, Platform, Security, Operations.',
            'Perspectivas de negócio (Business, People, Governance) = stakeholders não técnicos.',
            'Perspectivas técnicas (Platform, Security, Operations) = times de TI.',
            'Fases de adoção: Envision → Align → Launch → Scale.'
          ],
          examSignals: [
            '"Framework de adoção de nuvem" → AWS CAF.',
            '"Perspectiva focada em conformidade e riscos" → Governance.',
            '"Perspectiva focada em pessoas e mudanças culturais" → People.',
            '"Perspectiva focada em detecção e resposta a ameaas" → Security.'
          ],
          traps: [
            'CAF NÃO é sobre arquitetura de soluções. É sobre a jornada de adoção organizacional.',
            'Cada perspectiva tem stakeholders próprios, não é apenas TI.'
          ],
          tips: [
            'Business: CFO, CEO. People: RH, diretores. Governance: CTO, arquitetos. Platform/Security/Ops: times técnicos.',
            'CAF ajuda a identificar lacunas de capacidade antes da migração.'
          ]
        },
        flashcards: [
          { q: 'Quantas perspectivas tem o AWS CAF?', a: '6 perspectivas: Business, People, Governance, Platform, Security, Operations.' },
          { q: 'Qual perspectiva do CAF foca em gestão de identidade e controle de acesso?', a: 'Perspectiva de Security.' }
        ]
      },
      {
        id: 13,
        title: 'Well-Architected Framework',
        icon: '🏛️',
        estimatedTime: '2h',
        topics: [
          '6 pilares: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, Sustainability',
          'Well-Architected Tool',
          'Design Principles de cada pilar',
          'Perguntas de design do Well-Architected'
        ],
        resources: {
          readme: 'https://github.com/Thiago-code-lab/aws-certified-cloud-practitioner-brasil/blob/main/13-Well-Architected-Framework/README.md'
        },
        content: {
          focus: 'Boas práticas de arquitetura AWS agrupadas em 6 pilares fundamentais.',
          keyPoints: [
            'Pilares: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, Sustainability.',
            'Reliability: capacidade de se recuperar de falhas e atingir a função pretendida.',
            'Operational Excellence: melhoria contínua e operações como código.',
            'Well-Architected Tool: revisa arquitetura respondendo perguntas por pilar.'
          ],
          examSignals: [
            '"Reduzir impacto ambiental" → pilar Sustainability.',
            '"Recuperar de falhas automaticamente" → pilar Reliability.',
            '"Usar recursos certos para a carga" → pilar Performance Efficiency.',
            '"Menor custo com requisitos cumpridos" → pilar Cost Optimization.'
          ],
          traps: [
            'Security não é apenas criptografia. É também: IAM, detecção de ameaas, proteção de dados.',
            'Não há pilar mais importante. Todos os 6 devem ser considerados em conjunto.'
          ],
          tips: [
            'Sustainability foi o 6º pilar adicionado em novembro de 2021.',
            'WAF Tool: avaliação interativa que gera plano de melhoria com prioridades.'
          ]
        },
        flashcards: [
          { q: 'Quantos pilares tem o AWS Well-Architected Framework?', a: '6 pilares: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, Sustainability.' },
          { q: 'Qual pilar foca em recuperar-se de falhas?', a: 'Reliability (Confiabilidade) — capacidade de um sistema se recuperar de perturbações e atingir sua função pretendida.' },
          { q: 'Qual pilar foca em reduzir o impacto ambiental?', a: 'Sustainability (Sustentabilidade) — adicionado em 2021.' }
        ]
      },
      {
        id: 14,
        title: 'Inteligência Artificial e ML',
        icon: '🤖',
        estimatedTime: '1.5h',
        topics: [
          'Amazon Rekognition (visão computacional)',
          'Amazon Comprehend (NLP)',
          'Amazon Transcribe (speech-to-text)',
          'Amazon Polly (text-to-speech)',
          'Amazon Translate',
          'Amazon Lex (chatbots)',
          'Amazon SageMaker (treinamento de modelos)',
          'Amazon Bedrock (modelos fundacionais)',
          'Amazon Kendra (busca inteligente)'
        ],
        resources: {
          readme: 'https://github.com/Thiago-code-lab/aws-certified-cloud-practitioner-brasil/blob/main/14-Inteligencia-Artificial-e-ML/README.md'
        },
        content: {
          focus: 'Serviços de IA/ML gerenciados: entender qual serviço resolve qual tipo de problema.',
          keyPoints: [
            'Rekognition: imagens/vídeos. Transcribe: fala para texto. Polly: texto para fala.',
            'Comprehend: NLP (sentimento, entidades, idioma). Translate: tradução automática.',
            'Lex: chatbots (mesmo motor do Alexa). Kendra: busca inteligente em documentos.',
            'Bedrock: Foundation Models gerenciados (GenAI). SageMaker: ciclo completo de ML.'
          ],
          examSignals: [
            '"Reconhecer rostos em imagens" → Amazon Rekognition.',
            '"Chat bot com linguagem natural" → Amazon Lex.',
            '"Treinar modelo customizado" → Amazon SageMaker.',
            '"Usar FM sem gerenciar infra" → Amazon Bedrock.'
          ],
          traps: [
            'Bedrock é para consumir FMs gerenciados; SageMaker é para construir e treinar modelos próprios.',
            'Kendra é busca semântica; Comprehend é NLP estruturado (sentimento, entidades, PII).'
          ],
          tips: [
            'Mapeie: texto→Comprehend, fala→Transcribe/Polly, imagem→Rekognition, doc→Textract.',
            'Para o CLF, Bedrock = resposta para qualquer questão sobre IA generativa gerenciada.'
          ]
        },
        flashcards: [
          { q: 'Qual serviço AWS é usado para reconhecimento de imagens e vídeos?', a: 'Amazon Rekognition — detecção de objetos, rostos, textos em imagens e vídeos.' },
          { q: 'Qual serviço AWS é usado para criar chatbots?', a: 'Amazon Lex — mesmo motor que alimenta o Amazon Alexa.' },
          { q: 'O que é Amazon Bedrock?', a: 'Serviço para acessar modelos fundacionais de IA generativa (FMs) de múltiplos provedores via API.' }
        ]
      },
      {
        id: 15,
        title: 'Serviços para Desenvolvedores',
        icon: '👨‍💻',
        estimatedTime: '1.5h',
        topics: [
          'AWS CodeCommit (repositório Git)',
          'AWS CodeBuild (build de código)',
          'AWS CodeDeploy (deploy automatizado)',
          'AWS CodePipeline (CI/CD pipeline)',
          'AWS Cloud9 (IDE na nuvem)',
          'AWS CloudFormation (IaC)',
          'AWS CDK (Cloud Development Kit)',
          'AWS SAM (Serverless Application Model)'
        ],
        resources: {
          readme: 'https://github.com/Thiago-code-lab/aws-certified-cloud-practitioner-brasil/blob/main/15-Servicos-Desenvolvedor/README.md'
        },
        content: {
          focus: 'Ferramentas para automatizar o ciclo de desenvolvimento e entrega de software na AWS.',
          keyPoints: [
            'CodePipeline: orquestra CI/CD. CodeBuild: compila e testa. CodeDeploy: faz deploy.',
            'CloudFormation: IaC declarativo (JSON/YAML). CDK: IaC com código (Python, TypeScript).',
            'CodeCommit: repositório Git gerenciado na AWS (similar ao GitHub).',
            'SAM: extensão do CloudFormation focada em serverless (Lambda + API Gateway + DynamoDB).'
          ],
          examSignals: [
            '"Pipeline de CI/CD automatizado" → AWS CodePipeline.',
            '"Infraestrutura como código" → AWS CloudFormation ou CDK.',
            '"Implantar automático em instancias EC2" → AWS CodeDeploy.',
            '"IDE na nuvem" → AWS Cloud9.'
          ],
          traps: [
            'CloudFormation é declarativo; CDK é imperativo (você programa). Ambos geram stacks CloudFormation.',
            'CodeCommit é privado e gerenciado; GitHub é externo e pode exigir configurações adicionais.'
          ],
          tips: [
            'CI = integrar código continuamente (CodeBuild). CD = entregar continuamente (CodeDeploy via CodePipeline).',
            'SAM simplifica o CloudFormation para serverless: define Função, API e Tabela com menos código.'
          ]
        },
        flashcards: [
          { q: 'O que é Infrastructure as Code (IaC)?', a: 'Gerenciamento de infraestrutura via código, permitindo versionamento e replicação. Na AWS: CloudFormation e CDK.' },
          { q: 'Para que serve o AWS CodePipeline?', a: 'Serviço de integração e entrega contínua (CI/CD) que automatiza os estágios de build, teste e deploy.' }
        ]
      },
      {
        id: 16,
        title: 'Simulados e Questões',
        icon: '📝',
        estimatedTime: '4h',
        topics: [
          'Simulado completo de 65 questões',
          'Questões por domínio do exame',
          'Caderno de erros',
          'Estratégias de prova',
          'Dicas de eliminação de alternativas',
          'Domínios do CLF-C02: Cloud Concepts (24%), Security (30%), Technology (34%), Billing (12%)'
        ],
        resources: {
          readme: 'https://github.com/Thiago-code-lab/aws-certified-cloud-practitioner-brasil/blob/main/16-Simulados-e-Questoes/README.md'
        },
        content: {
          focus: 'Preparação final com questões de simulado e foco na gestão de tempo.',
          keyPoints: [
            'A prova CLF-C02 possui 65 questões e tempo de 90 minutos.',
            'Cuidado com as "unscored questions": são 15 questões teste que não contam pontos.',
            'Pontuação mínima para aprovação é 700/1000.'
          ],
          examSignals: [
            '"Maior benefício de custo" → Elimine opções de instâncias sob demanda (On-Demand).',
            '"Gerenciar infraestrutura como código" → AWS CloudFormation.'
          ],
          traps: [
            'Tentar decorar sem entender os casos de uso. A AWS vai descrever um problema prático.',
            'Deixar perguntas em branco. Chute se não souber, pois não há penalidade por erro.'
          ],
          tips: [
            'Mantenha um caderno de erros. Se errar um conceito em um simulado, estude o serviço antes de fazer outro.',
            'Marque questões para revisão (flag for review) no exame se bater dúvida.'
          ]
        },
        flashcards: [
          { q: 'Quantas questões tem o exame CLF-C02?', a: '65 questões (50 scored + 15 unscored). Tempo: 90 minutos. Score de aprovação: 700/1000.' },
          { q: 'Qual é o domínio com maior peso no CLF-C02?', a: 'Cloud Technology and Services com 34% do exame.' }
        ]
      },
      {
        id: 17,
        title: 'Glossário AWS',
        icon: '📖',
        estimatedTime: '1h',
        topics: [
          'Termos essenciais do CLF-C02',
          'Siglas e acrônimos AWS',
          'Diferença entre serviços similares',
          'Cheatsheet de serviços por categoria'
        ],
        resources: {
          readme: 'https://github.com/Thiago-code-lab/aws-certified-cloud-practitioner-brasil/blob/main/17-Glossario/README.md'
        },
        content: {
          focus: 'Lista dos jargões mais usados e siglas de serviços da AWS.',
          keyPoints: [
            'Alta Disponibilidade (HA): Sistema continua funcionando durante falhas parciais.',
            'Elasticidade: Capacidade de expandir e contrair infraestrutura dinamicamente sob demanda.',
            'Agilidade: Rapidez para desenvolver, testar e lançar software com serviços gerenciados.'
          ],
          examSignals: [
            'N/A'
          ],
          traps: [
            'Confundir AWS Shield (DDoS) com WAF (proteção web/L7).',
            'Confundir Macie (descobrir PII) com GuardDuty (detectar ameaças).'
          ],
          tips: [
            'Faça flashcards das siglas (ALB, IAM, S3, RDS, EBS) para nunca errar opções banais.'
          ]
        },
        flashcards: [
          { q: 'O que significa RTO e RPO?', a: 'RTO (Recovery Time Objective): tempo máximo para restaurar o serviço. RPO (Recovery Point Objective): tempo máximo de dados perdidos.' }
        ]
      },
      {
        id: 18,
        title: 'Recursos e Links Oficiais',
        icon: '🔗',
        estimatedTime: '0.5h',
        topics: [
          'AWS Skill Builder (treinamentos gratuitos)',
          'AWS Whitepapers essenciais',
          'AWS Documentation',
          'Exam Guide oficial CLF-C02',
          'AWS Training and Certification'
        ],
        resources: {
          readme: 'https://github.com/Thiago-code-lab/aws-certified-cloud-practitioner-brasil/blob/main/18-Recursos-e-Links/README.md'
        },
        content: {
          focus: 'Documentações e FAQs essenciais diretamente da fonte (AWS).',
          keyPoints: [
            'Exam Guide Oficial (PDF da AWS).',
            'AWS Whitepapers como "Overview of Amazon Web Services".',
            'AWS Cloud Practitioner Ramp-Up Guide.'
          ],
          examSignals: [
            'N/A'
          ],
          traps: [
            'A prova CLF-C02 foi atualizada. Certifique-se de não estar estudando materiais velhos do C01.'
          ],
          tips: [
            'AWS Skill Builder contém vídeos oficiais e gratuitos feitos pelos próprios instrutores da AWS.'
          ]
        },
        flashcards: []
      }
    ]
  },

  // ──────────────────────────────────────────────────────────
  // AWS SOLUTIONS ARCHITECT ASSOCIATE — SAA-C03
  // ──────────────────────────────────────────────────────────
  'saa-c03': {
    id: 'saa-c03',
    provider: 'aws',
    code: 'SAA-C03',
    name: 'AWS Certified Solutions Architect – Associate',
    shortName: 'Solutions Architect',
    level: 'Associate',
    emoji: '🏗️',
    duration: '9 semanas',
    hoursPerDay: '2–3h/dia',
    totalModules: 31,
    sourceUrl: 'https://github.com/Thiago-code-lab/aws-certified-solutions-architect-associate-brasil',
    description: 'Arquitetura escalável, resiliente e segura na AWS. Foco em raciocínio arquitetural: trade-offs, casos de uso e armadilhas de prova.',
    roadmap: [
      { week: 1, title: 'Estratégia, IAM e Segurança', modules: [1, 2, 3] },
      { week: 2, title: 'EC2 e Alta Disponibilidade', modules: [4, 5] },
      { week: 3, title: 'S3, Armazenamento e VPC', modules: [6, 7, 8, 9] },
      { week: 4, title: 'Banco de Dados e DNS', modules: [10, 11, 12, 13] },
      { week: 5, title: 'Mensageria e Containers', modules: [14, 15, 16] },
      { week: 6, title: 'Serverless e Analytics', modules: [17, 18] },
      { week: 7, title: 'IA/ML, Monitoramento e Migração', modules: [19, 20, 21] },
      { week: 8, title: 'DR, Governança e Redes Avançadas', modules: [22, 23, 24, 25] },
      { week: 9, title: 'Well-Architected, Casos Reais e Simulados', modules: [26, 27, 28, 29, 30, 31] }
    ],
    modules: [
      { id: 1, title: 'Introdução ao SAA-C03', icon: '🎯', estimatedTime: '1.5h',
        topics: ['Estrutura do exame SAA-C03', 'Domínios: Design Resilient Architectures (30%), Design High-Performing Architectures (28%), Design Secure Applications (24%), Design Cost-Optimized Architectures (18%)', 'Estratégia de estudo', 'Serviços mais cobrados', 'Armadilhas comuns no exame'],
        resources: { readme: 'https://github.com/Thiago-code-lab/aws-certified-solutions-architect-associate-brasil/blob/main/01-Introducao-SAA-C03/README.md', localPath: 'conteudo/aws-certified-solutions-architect-associate-brasil-main/aws-certified-solutions-architect-associate-brasil-main/01-Introducao-SAA-C03/README.md' },
        content: {
          focus: 'Mentalidade de arquiteto: identificar requisito, restrição, risco, trade-off e decisão mais adequada ao cenário.',
          keyPoints: [
            'SAA-C03 não testa decoração de serviços; testa raciocínio arquitetural em cenários realistas.',
            'Domínio Resilient (30%): HA, DR, desacoplamento, filas, replicação.',
            'Domínio High-Performing (28%): compute, banco, rede, storage otimizados para throughput.',
            'Palavras-chave decisivas: "least operational overhead", "most cost-effective", "highly available".'
          ],
          examSignals: [
            '"Menor esforço operacional" → preferir serviços gerenciados.',
            '"Altamente disponível" → distribuir em múltiplas AZs.',
            '"Tolerante a falha" → eliminar ponto único de falha.',
            '"Perto do tempo real" → streaming ou fila, não batch.'
          ],
          traps: [
            'Sempre verificar se o cenário pede multi-AZ ou multi-region — são coisas diferentes.',
            'Resposta mais cara nem sempre é a resposta correta. A prova privilegia equilíbrio.'
          ],
          tips: [
            'Treine com a pergunta: qual requisito está dirigindo a decisão?',
            'Serviços mais cobrados: EC2, S3, VPC, IAM, RDS, DynamoDB, Lambda, SQS, Route 53, CloudFront, KMS.'
          ]
        },
        flashcards: [
          { q: 'Quais são os 4 domínios do SAA-C03?', a: 'Design Resilient Architectures (30%), High-Performing (28%), Secure Applications (24%), Cost-Optimized (18%).' },
          { q: 'Quantas questões tem o SAA-C03?', a: '65 questões, 130 minutos. Score de aprovação: 720/1000.' }
        ]
      },
      { id: 2, title: 'IAM e Segurança', icon: '🔑', estimatedTime: '3h',
        topics: ['IAM Policies: Identity-based, Resource-based, Permission Boundaries', 'STS e AssumeRole', 'AWS Organizations e SCPs', 'AWS Identity Center (SSO)', 'AWS KMS: chaves gerenciadas pelo cliente vs AWS', 'Secrets Manager vs Parameter Store', 'Amazon Cognito', 'Cross-account access'],
        resources: { readme: 'https://github.com/Thiago-code-lab/aws-certified-solutions-architect-associate-brasil/blob/main/02-IAM-e-Seguranca/README.md', localPath: 'conteudo/aws-certified-solutions-architect-associate-brasil-main/aws-certified-solutions-architect-associate-brasil-main/02-IAM-e-Seguranca/README.md' },
        content: {
          focus: 'Lógica de avaliação de permissões IAM: explicit deny, SCPs, permission boundary, identity e resource policy.',
          keyPoints: [
            'Explicit deny vence qualquer allow. SCP define teto organizacional (não afeta management account).',
            'Permission Boundary: teto de permissões; mesmo que a policy conceda mais, o boundary limita.',
            'Cross-account: AssumeRole (trust policy + permissions) OU resource-based policy com principal explícito.',
            'KMS: key policy é separada e obrigatória. Sem controle ao root na key policy, até admin IAM perde acesso.'
          ],
          examSignals: [
            '"Rotação automática de credencial de banco" → Secrets Manager.',
            '"Acesso entre contas sem assumir role" → resource-based policy + aws:PrincipalOrgID.',
            '"Restringir o que admin de subconta pode fazer" → SCP no Organizations.',
            '"Chave de criptografia com controle total" → customer-managed CMK.'
          ],
          traps: [
            'SCP nunca afeta o management account. Para isso, use permission boundary.',
            'IAM Groups não assumem roles. Se EC2 precisa acessar S3, use IAM Role na Instance Profile.'
          ],
          tips: [
            'Lógica: explicit deny → SCP → permission boundary → identity policy OU resource policy.',
            'Secrets Manager = rotação. Parameter Store SecureString = configuração (sem rotação nativa).'
          ]
        },
        flashcards: [
          { q: 'O que é SCP (Service Control Policy)?', a: 'Política de controle no AWS Organizations que define limites máximos de permissões para contas membros.' },
          { q: 'Diferença entre Secrets Manager e Parameter Store?', a: 'Secrets Manager: rotação automática de secrets, mais caro. Parameter Store: armazenamento de configs e secrets, grátis para Standard.' },
          { q: 'O que é Permission Boundary?', a: 'Política gerenciada que define o máximo de permissões que uma entidade IAM pode ter, mesmo que outras policies concedam mais.' }
        ]
      },
      { id: 3, title: 'IAM e Segurança — Labs', icon: '🧪', estimatedTime: '2h', isLab: true,
        topics: ['Lab: Criar usuário IAM com MFA', 'Lab: Criar Role cross-account', 'Lab: Configurar Organizations e SCPs', 'Lab: Secrets Manager com rotação automática'],
        resources: { readme: 'https://github.com/Thiago-code-lab/aws-certified-solutions-architect-associate-brasil/blob/main/03-IAM-e-Seguranca-Labs/lab.md', localPath: 'conteudo/aws-certified-solutions-architect-associate-brasil-main/aws-certified-solutions-architect-associate-brasil-main/03-IAM-e-Seguranca-Labs/README.md' },
        flashcards: []
      },
      { id: 4, title: 'Computação EC2', icon: '🖥️', estimatedTime: '3h',
        topics: ['Tipos de instância e casos de uso', 'Placement Groups: Cluster, Spread, Partition', 'EBS: tipos de volume (gp3, io2, st1, sc1)', 'EC2 Instance Store', 'Hibernation', 'AMIs e Image Builder', 'Modelos de compra: Reserved, Savings Plans, Spot, Dedicated Hosts', 'Spot Fleets'],
        resources: { readme: 'https://github.com/Thiago-code-lab/aws-certified-solutions-architect-associate-brasil/blob/main/04-Computacao-EC2/README.md', localPath: 'conteudo/aws-certified-solutions-architect-associate-brasil-main/aws-certified-solutions-architect-associate-brasil-main/04-Computacao-EC2/README.md' },
        content: {
          focus: 'EC2: famílias de instância, modelos de compra e tipos de armazenamento para otimização de custo e performance.',
          keyPoints: [
            'M (balanced), C (compute), R (memory), I (storage), T (burstable). A letra inicial identifica a família.',
            'Spot: até 90% desconto, pode ser interrompida; Savings Plans: comprometimento de gasto, sem lock de instância.',
            'EBS gp3: IOPS independente de capacidade. io2: IOPS > 32.000, missão crítica. st1/sc1: throughput, não bootable.',
            'Instance Store: alta IOPS, temporário — perda ao parar a instância.'
          ],
          examSignals: [
            '"Workload crítico de banco com alta IOPS" → io2 Block Express.',
            '"Custo mínimo para workload flexível e tolerante a interrupção" → Spot Instances.',
            '"Baixa latência de rede entre instâncias HPC" → Cluster Placement Group.',
            '"Isolar instâncias por falha de hardware" → Spread Placement Group.'
          ],
          traps: [
            'T-instances com unlimited credits: alta CPU contínua pode custar mais que uma M-instance.',
            'Instance Store não persiste após stop/terminate. Para persistência, use EBS.'
          ],
          tips: [
            'Savings Plans (Compute) é mais flexível que Reserved Instances; EC2 Savings Plans tem maior desconto mas menos flexibilidade.',
            'IMDSv2 é mais seguro que IMDSv1: requer session token antes de acessar metadados.'
          ]
        },
        flashcards: [
          { q: 'Qual Placement Group é ideal para HPC (High Performance Computing)?', a: 'Cluster Placement Group — coloca instâncias próximas fisicamente, baixa latência, alta largura de banda.' },
          { q: 'Qual tipo de EBS oferece maior IOPS?', a: 'io2 Block Express — até 256.000 IOPS, para bancos de dados críticos.' },
          { q: 'O que são Savings Plans?', a: 'Compromisso de uso ($ por hora) por 1 ou 3 anos com até 66% de desconto, mais flexível que Reserved Instances.' }
        ]
      },
      { id: 5, title: 'Alta Disponibilidade e Escalabilidade', icon: '📈', estimatedTime: '3h',
        topics: ['Elastic Load Balancer: ALB (Application), NLB (Network), GWLB (Gateway)', 'ALB: Path-based routing, Host-based routing, Lambda targets', 'NLB: TCP/UDP, IP estático, preserve client IP', 'Auto Scaling Groups: políticas de scaling', 'ASG: Launch Templates vs Launch Configurations', 'Health checks: ELB vs EC2', 'Warm pools e lifecycle hooks'],
        resources: { readme: 'https://github.com/Thiago-code-lab/aws-certified-solutions-architect-associate-brasil/blob/main/05-Alta-Disponibilidade-e-Escalabilidade/README.md', localPath: 'conteudo/aws-certified-solutions-architect-associate-brasil-main/aws-certified-solutions-architect-associate-brasil-main/05-Alta-Disponibilidade-e-Escalabilidade/README.md' },
        content: {
          focus: 'ELB e Auto Scaling: distribuição de tráfego e ajuste dinâmico de capacidade para alta disponibilidade.',
          keyPoints: [
            'ALB: camada 7, HTTP/HTTPS/gRPC, roteamento por path/host/header. NLB: camada 4, TCP/UDP, IP estático.',
            'GWLB: inspecionar tráfego com appliances de rede terceiras (firewall/IDS) de forma transparente.',
            'ASG + ELB = alta disponibilidade automática. Lifecycle Hooks para warm-up antes do tráfego.',
            'Cross-Zone Load Balancing: distribui uniformemente entre todas AZs (padrão no ALB, opcional no NLB).'
          ],
          examSignals: [
            '"IP estático para allowlist de firewall" → NLB (Elastic IP por AZ).',
            '"Roteamento por URL path" → ALB path-based routing.',
            '"Inspecionar tráfego com firewall terceiro" → GWLB.',
            '"Escalar por métrica de negócio" → ASG Target Tracking com CloudWatch Custom Metric.'
          ],
          traps: [
            'NLB preserva IP de origem por padrão. ALB usa X-Forwarded-For para IP de origem.',
            'Sticky sessions podem concentrar carga em uma instância — é melhor externalizar sessões para ElastiCache.'
          ],
          tips: [
            'ALB pode invocar Lambda diretamente como target — sem API Gateway.',
            'Warm Pools: instâncias pré-inicializadas esperando ser integradas ao ASG sem delay de boot.'
          ]
        },
        flashcards: [
          { q: 'Quando usar NLB em vez de ALB?', a: 'NLB para latência ultra-baixa (<100ms), TCP/UDP, IP estático, ou quando precisa preservar o IP do cliente.' },
          { q: 'O que é um lifecycle hook no ASG?', a: 'Pausa o scaling action para executar ações customizadas (ex: instalar software) antes da instância ser colocada em serviço.' },
          { q: 'Diferença entre target tracking e step scaling?', a: 'Target Tracking mantém uma métrica no valor alvo automaticamente. Step Scaling define ações baseadas em alarmes CloudWatch.' }
        ]
      },
      { id: 6, title: 'Amazon S3 e Armazenamento', icon: '🪣', estimatedTime: '3h',
        topics: ['S3 Classes: Standard, IA, One Zone-IA, Glacier IR, Glacier Flexible, Glacier Deep Archive', 'S3 Lifecycle transitions', 'S3 Replication: CRR, SRR, RTC (Replication Time Control)', 'S3 Event Notifications → Lambda, SQS, SNS', 'S3 Select e Glacier Select', 'S3 Access Points', 'S3 Object Lock (WORM)', 'Multipart Upload e Transfer Acceleration'],
        resources: { readme: 'https://github.com/Thiago-code-lab/aws-certified-solutions-architect-associate-brasil/blob/main/06-Amazon-S3-e-Armazenamento/README.md', localPath: 'conteudo/aws-certified-solutions-architect-associate-brasil-main/aws-certified-solutions-architect-associate-brasil-main/06-Amazon-S3-e-Armazenamento/README.md' },
        content: {
          focus: 'S3 para o SAA: classes, ciclo de vida, replicação, segurança e padrões de acesso.',
          keyPoints: [
            'Todas as classes S3 têm 11 noves de durabilidade. Disponibilidade varia: Standard 99.99%, One Zone-IA 99.5%.',
            'CRR (Cross-Region Replication): replica entre regiões. SRR: mesma região. Requer versionamento habilitado.',
            'S3 Object Lock: WORM (Write Once Read Many) para compliance. Modes: Governance e Compliance.',
            'VPC Endpoint Gateway para S3: tráfego permanece na rede AWS, sem custo de NAT.'
          ],
          examSignals: [
            '"Compliance regulatório, não pode deletar" → S3 Object Lock (Compliance mode).',
            '"Uploads mais rápidos de clientes globais" → S3 Transfer Acceleration.',
            '"Eventos ao criar objetos" → S3 Event Notifications → Lambda/SQS/SNS.',
            '"Acessar S3 sem sair da VPC" → VPC Gateway Endpoint.'
          ],
          traps: [
            'CRR requer versionamento em ambos os buckets (origem e destino).',
            'One Zone-IA: mesma durabilidade de 11 noves, mas perde disponibilidade se a AZ falhar.'
          ],
          tips: [
            'S3 Glacier IR: recuperação em milissegundos (não confunda com Glacier Flexible que pode demorar horas).',
            'S3 Select: processa dados diretamente no S3 com SQL simples, reduz transferência de dados.'
          ]
        },
        flashcards: [
          { q: 'Qual é o tempo mínimo de armazenamento no Glacier Deep Archive?', a: '180 dias. É a classe mais barata, com recuperação em até 12 horas.' },
          { q: 'O que é S3 Object Lock?', a: 'Modo WORM (Write Once Read Many) que impede deleção ou sobrescrita de objetos. Útil para conformidade regulatória.' },
          { q: 'O que é S3 Transfer Acceleration?', a: 'Usa Edge Locations do CloudFront para acelerar uploads para S3 de clientes distantes.' }
        ]
      },
      { id: 7, title: 'S3 Avançado — Labs', icon: '🧪', estimatedTime: '2h', isLab: true,
        topics: ['Lab: Configurar S3 lifecycle policy', 'Lab: Habilitar replicação CRR', 'Lab: S3 Event Notification → Lambda', 'Lab: Static website com CloudFront + OAC'],
        resources: { readme: 'https://github.com/Thiago-code-lab/aws-certified-solutions-architect-associate-brasil/blob/main/07-S3-Avancado-Labs/lab.md', localPath: 'conteudo/aws-certified-solutions-architect-associate-brasil-main/aws-certified-solutions-architect-associate-brasil-main/07-S3-Avancado-Labs/README.md' },
        flashcards: []
      },
      { id: 8, title: 'VPC e Redes', icon: '🌐', estimatedTime: '3.5h',
        topics: ['CIDR blocks e subnets', 'Internet Gateway e NAT Gateway', 'VPC Endpoints: Gateway (S3, DynamoDB) e Interface', 'VPC Peering (não transitivo)', 'VPC Flow Logs', 'Bastion Hosts', 'Network ACLs stateless vs Security Groups stateful', 'AWS PrivateLink', 'Egress-Only Internet Gateway (IPv6)'],
        resources: { readme: 'https://github.com/Thiago-code-lab/aws-certified-solutions-architect-associate-brasil/blob/main/08-VPC-e-Redes/README.md', localPath: 'conteudo/aws-certified-solutions-architect-associate-brasil-main/aws-certified-solutions-architect-associate-brasil-main/08-VPC-e-Redes/README.md' },
        content: {
          focus: 'VPC: isolamento, conectividade e controle de tráfego para ambientes seguros na AWS.',
          keyPoints: [
            'Security Groups: stateful, nível de recurso. NACLs: stateless, nível de subnet (entrada e saída separadas).',
            'VPC Peering: não é transitivo. Para conectar múltiplas VPCs, use Transit Gateway.',
            'VPC Gateway Endpoint: S3 e DynamoDB sem custo adicional. Interface Endpoint: demais serviços (cobrado).',
            'Flow Logs: captura tráfego de rede para auditoria e troubleshooting.'
          ],
          examSignals: [
            '"Tráfego para S3 sem expor à internet" → VPC Gateway Endpoint.',
            '"Conectar várias VPCs hub-and-spoke" → Transit Gateway.',
            '"Diagnosticar tráfego rejeitado por rede" → VPC Flow Logs.',
            '"Acesso SSH seguro sem IP pública" → Bastion Host ou SSM Session Manager.'
          ],
          traps: [
            'NACL é stateless: deve ter regras de entrada E saída. Security Group é stateful: retorno automático.',
            'VPC Peering não transita entre peerings: A-B e B-C não dá acesso A-C.'
          ],
          tips: [
            'Para bloquear IP específico, use NACL (nível de subnet). Security Group não tem "deny" explícito.',
            'AWS PrivateLink expõe serviços de sua VPC para outras VPCs sem peering (via Interface Endpoint).'
          ]
        },
        flashcards: [
          { q: 'Quando usar VPC Gateway Endpoint vs Interface Endpoint?', a: 'Gateway Endpoint: grátis, apenas S3 e DynamoDB. Interface Endpoint: pago, para a maioria dos serviços AWS via PrivateLink.' },
          { q: 'VPC Peering é transitivo?', a: 'NÃO. Se VPC A peering com B, e B peering com C, A NÃO pode acessar C diretamente. Use Transit Gateway para isso.' }
        ]
      },
      { id: 9, title: 'VPC e Redes — Labs', icon: '🧪', estimatedTime: '2h', isLab: true,
        topics: ['Lab: Criar VPC com subnets públicas e privadas', 'Lab: NAT Gateway', 'Lab: VPC Peering entre duas VPCs', 'Lab: VPC Endpoint para S3'],
        resources: { readme: 'https://github.com/Thiago-code-lab/aws-certified-solutions-architect-associate-brasil/blob/main/09-VPC-e-Redes-Labs/lab.md', localPath: 'conteudo/aws-certified-solutions-architect-associate-brasil-main/aws-certified-solutions-architect-associate-brasil-main/09-VPC-e-Redes-Labs/README.md' },
        flashcards: []
      },
      { id: 10, title: 'Banco de Dados', icon: '🗄️', estimatedTime: '4h',
        topics: ['RDS: tipos, Multi-AZ, Read Replicas, storage autoscaling', 'Aurora: clusters, Global Database, Serverless v2', 'DynamoDB: partition key, sort key, GSI, LSI, streams', 'DynamoDB: DAX, TTL, Capacity modes', 'ElastiCache: Redis vs Memcached para SAA', 'Redshift: AQUA, Spectrum, workload management', 'DocumentDB, Neptune, Keyspaces, QLDB, Timestream'],
        resources: { readme: 'https://github.com/Thiago-code-lab/aws-certified-solutions-architect-associate-brasil/blob/main/10-Banco-de-Dados/README.md', localPath: 'conteudo/aws-certified-solutions-architect-associate-brasil-main/aws-certified-solutions-architect-associate-brasil-main/10-Banco-de-Dados/README.md' },
        flashcards: [
          { q: 'Aurora Global Database: qual é o RPO e RTO?', a: 'RPO de segundos, RTO de menos de 1 minuto para failover cross-region.' },
          { q: 'O que é DynamoDB DAX?', a: 'Cache em memória totalmente gerenciado para DynamoDB. Reduz latência de leitura de milissegundos para microssegundos.' },
          { q: 'Quando usar ElastiCache Redis vs Memcached?', a: 'Redis: persistência, estruturas complexas, replicação, pub/sub. Memcached: simples, multi-thread, sem persistência.' }
        ]
      },
      { id: 11, title: 'RDS e Bancos Relacionais — Labs', icon: '🧪', estimatedTime: '2h', isLab: true,
        topics: ['Lab: Criar RDS MySQL com Multi-AZ', 'Lab: Criar Read Replica', 'Lab: Aurora Serverless v2', 'Lab: Snapshot e restore'],
        resources: { readme: 'https://github.com/Thiago-code-lab/aws-certified-solutions-architect-associate-brasil/blob/main/11-RDS-e-Bancos-Relacionais-Labs/lab.md', localPath: 'conteudo/aws-certified-solutions-architect-associate-brasil-main/aws-certified-solutions-architect-associate-brasil-main/11-RDS-e-Bancos-Relacionais-Labs/README.md' },
        flashcards: []
      },
      { id: 12, title: 'DynamoDB — Labs', icon: '🧪', estimatedTime: '2h', isLab: true,
        topics: ['Lab: Criar tabela DynamoDB com GSI', 'Lab: DynamoDB Streams → Lambda', 'Lab: Configurar DAX', 'Lab: DynamoDB Global Tables'],
        resources: { readme: 'https://github.com/Thiago-code-lab/aws-certified-solutions-architect-associate-brasil/blob/main/12-DynamoDB/lab.md', localPath: 'conteudo/aws-certified-solutions-architect-associate-brasil-main/aws-certified-solutions-architect-associate-brasil-main/12-DynamoDB/README.md' },
        flashcards: []
      },
      { id: 13, title: 'DNS, Route 53 e CloudFront', icon: '🌍', estimatedTime: '3h',
        topics: ['Route 53: tipos de record (A, AAAA, CNAME, Alias)', 'Routing policies: Simple, Weighted, Latency, Failover, Geolocation, Geoproximity, IP-based, Multivalue', 'Health Checks e DNS Failover', 'CloudFront: origens, behaviors, distribuições', 'CloudFront OAC (Origin Access Control)', 'CloudFront Functions vs Lambda@Edge', 'WAF integrado ao CloudFront', 'AWS Global Accelerator vs CloudFront'],
        resources: { readme: 'https://github.com/Thiago-code-lab/aws-certified-solutions-architect-associate-brasil/blob/main/13-DNS-Route53-e-CloudFront/README.md', localPath: 'conteudo/aws-certified-solutions-architect-associate-brasil-main/aws-certified-solutions-architect-associate-brasil-main/13-DNS-Route53-e-CloudFront/README.md' },
        content: {
          focus: 'Route 53 e CloudFront: DNS inteligente, roteamento de tráfego e distribuição global de conteúdo.',
          keyPoints: [
            'Alias record: funciona no root domain (diferente de CNAME), sem cobrança de DNS query.',
            'Routing policies: Weighted (A/B test), Latency (menor latência), Failover (ativo/passivo), Geolocation (país).',
            'CloudFront OAC: bucket S3 privado, só CloudFront acessa (substitui OAI).',
            'CloudFront vs Global Accelerator: CF é cache HTTP; GA é rede AWS para qualquer TCP/UDP (2 Anycast IPs).'
          ],
          examSignals: [
            '"Trafego por país" → Route 53 Geolocation policy.',
            '"Failover automático para backup" → Route 53 Failover + Health Check.',
            '"S3 privado entregue pelo CloudFront" → OAC (Origin Access Control).',
            '"IP fixo global para TCP/UDP" → Global Accelerator.'
          ],
          traps: [
            'CNAME não pode ser usado no root domain (example.com). Use Alias record.',
            'Global Accelerator é NÃO cache — roteia tráfego pela rede AWS. CloudFront tem cache.'
          ],
          tips: [
            'Health Checks do Route 53 podem monitorar endpoints e acionar failover automático.',
            'Lambda@Edge roda mais próximo do usuário nas edge locations (mais latençia-sensitive que Lambda regional).'
          ]
        },
        flashcards: [
          { q: 'Diferença entre CNAME e Alias record?', a: 'CNAME aponta para outro hostname (não pode ser root domain). Alias é exclusivo da AWS, funciona no root domain e não cobra.' },
          { q: 'Diferença entre CloudFront e Global Accelerator?', a: 'CloudFront cacheia conteúdo nas Edge Locations (HTTP). Global Accelerator roteia tráfego TCP/UDP pela rede AWS para minimizar latência sem cache.' }
        ]
      },
      { id: 14, title: 'Desacoplamento: SQS, SNS, EventBridge', icon: '📨', estimatedTime: '3h',
        topics: ['Amazon SQS: Standard vs FIFO', 'SQS: visibility timeout, DLQ, delay queues, long polling', 'Amazon SNS: topics, subscriptions, fan-out pattern', 'SNS FIFO', 'Amazon EventBridge: rules, event buses, targets', 'EventBridge Pipes', 'Step Functions: Standard vs Express', 'Amazon MQ'],
        resources: { readme: 'https://github.com/Thiago-code-lab/aws-certified-solutions-architect-associate-brasil/blob/main/14-Desacoplamento-SQS-SNS-EventBridge/README.md', localPath: 'conteudo/aws-certified-solutions-architect-associate-brasil-main/aws-certified-solutions-architect-associate-brasil-main/14-Desacoplamento-SQS-SNS-EventBridge/README.md' },
        content: {
          focus: 'Desacoplamento de componentes: filas, notificações e eventos para resiliência e escalabilidade.',
          keyPoints: [
            'SQS: fila que desacopla produtor e consumidor. FIFO garante ordem e exatamente-1-entrega.',
            'SNS: notificação pub/sub. Fan-out: 1 mensagem SNS → múltiplos SQS/Lambda/email/HTTP.',
            'EventBridge: roteamento de eventos por regras. Melhor que SNS para múltiplos produtores e roteamento avançado.',
            'DLQ (Dead-Letter Queue): mensagens que falham depois de N tentativas vão para a DLQ para análise.'
          ],
          examSignals: [
            '"Processar mensagens em ordem" → SQS FIFO.',
            '"Notificar múltiplos sistemas" → SNS Fan-Out.',
            '"Reagir a eventos de múltiplos serviços" → Amazon EventBridge.',
            '"Migração de mensageiro existente (ActiveMQ/RabbitMQ)" → Amazon MQ.'
          ],
          traps: [
            'SQS Standard: at-least-once delivery (pode duplicar). FIFO: exactly-once processing.',
            'EventBridge vs SNS: EventBridge para roteamento por regra e filtro rico; SNS para fan-out simples.'
          ],
          tips: [
            'Visibility Timeout: mensagem fica invisível após receive. Se não deletada no prazo, volta à fila.',
            'Long Polling: economiza requests SQS. Short Polling: responde imediatamente mesmo se fila vazia.'
          ]
        },
        flashcards: [
          { q: 'Diferença entre SQS Standard e FIFO?', a: 'Standard: altíssimo throughput, at-least-once delivery, sem ordem garantida. FIFO: exatamente uma entrega, ordem preservada, 300 msgs/s (3000 com batching).' },
          { q: 'O que é o padrão Fan-Out com SNS?', a: 'SNS envia uma mensagem para vários SQS/endpoints simultaneamente. Útil para desacoplar microsserviços.' },
          { q: 'O que é Visibility Timeout no SQS?', a: 'Período em que uma mensagem fica invisível para outros consumers após ser recebida. Padrão: 30s, máximo: 12h.' }
        ]
      },
      { id: 15, title: 'SQS e SNS — Labs', icon: '🧪', estimatedTime: '2h', isLab: true,
        topics: ['Lab: SQS FIFO com Lambda consumer', 'Lab: SNS Fan-Out para múltiplos SQS', 'Lab: DLQ e redrive policy', 'Lab: EventBridge rule → múltiplos targets'],
        resources: { readme: 'https://github.com/Thiago-code-lab/aws-certified-solutions-architect-associate-brasil/blob/main/15-SQS-SNS-Mensageria-Labs/lab.md', localPath: 'conteudo/aws-certified-solutions-architect-associate-brasil-main/aws-certified-solutions-architect-associate-brasil-main/15-SQS-SNS-Mensageria-Labs/README.md' },
        flashcards: []
      },
      { id: 16, title: 'Containers: ECS, EKS, Fargate', icon: '🐳', estimatedTime: '2.5h',
        topics: ['ECS: task definitions, services, clusters', 'ECS com EC2 vs Fargate', 'ECR (Elastic Container Registry)', 'EKS: worker nodes, managed node groups', 'AWS App Runner', 'Fargate pricing', 'ECS Service Connect', 'Service Mesh com App Mesh'],
        resources: { readme: 'https://github.com/Thiago-code-lab/aws-certified-solutions-architect-associate-brasil/blob/main/16-Containers-ECS-EKS-Fargate/README.md', localPath: 'conteudo/aws-certified-solutions-architect-associate-brasil-main/aws-certified-solutions-architect-associate-brasil-main/16-Containers-ECS-EKS-Fargate/README.md' },
        content: {
          focus: 'Containers na AWS: escolha entre ECS, EKS, Fargate e App Runner conforme requisito operacional.',
          keyPoints: [
            'ECS com EC2: você gerencia as instâncias dos nós. ECS com Fargate: AWS gerencia infra (serverless containers).',
            'EKS: Kubernetes gerenciado. Mais controle e portabilidade, maior complexidade operacional.',
            'App Runner: PaaS de container sem gerenciar nada; ideal para apps web simples com escalonamento automático.',
            'ECR: registro privado de imagens Docker gerenciado, integrado ao IAM e ECS.'
          ],
          examSignals: [
            '"Containers sem gerenciar servidor" → ECS Fargate.',
            '"Kubernetes gerenciado" → Amazon EKS.',
            '"App simples container sem configuração" → AWS App Runner.',
            '"Registro privado de imagens" → Amazon ECR.'
          ],
          traps: [
            'ECS Fargate é serverless para containers, mas você ainda gerencia task definitions e configurações.',
            'EKS é Kubernetes; não confunda com ECS (orquestrador proprietário da AWS).'
          ],
          tips: [
            'Para SAA: "menor esforço operacional em containers" → ECS Fargate ou App Runner.',
            'Fargate é cobrado por vCPU e memória usados, não por instância ativa.'
          ]
        },
        flashcards: [
          { q: 'Diferença entre ECS EC2 e ECS Fargate?', a: 'EC2: você gerencia os servidores dos containers. Fargate: serverless, AWS gerencia a infraestrutura, você paga por vCPU/memória usados.' }
        ]
      },
      { id: 17, title: 'Serverless: Lambda e API Gateway', icon: '⚡', estimatedTime: '3h',
        topics: ['Lambda: triggers, layers, container images, concurrency', 'Lambda: Reserved vs Provisioned Concurrency', 'Lambda: Event source mapping (SQS, DynamoDB Streams, Kinesis)', 'API Gateway: REST vs HTTP vs WebSocket APIs', 'API Gateway: stages, canary deployments, caching', 'Lambda@Edge e CloudFront Functions', 'Lambda Destinations'],
        resources: { readme: 'https://github.com/Thiago-code-lab/aws-certified-solutions-architect-associate-brasil/blob/main/17-Serverless-Lambda-API-Gateway/README.md', localPath: 'conteudo/aws-certified-solutions-architect-associate-brasil-main/aws-certified-solutions-architect-associate-brasil-main/17-Serverless-Lambda-API-Gateway/README.md' },
        content: {
          focus: 'Lambda e API Gateway: arquitetura serverless orientada a eventos para APIs e processamento assíncrono.',
          keyPoints: [
            'Lambda executa em resposta a eventos: HTTP (via API GW), fila (SQS), stream (Kinesis/DynamoDB Streams), cron.',
            'Provisioned Concurrency: elimina cold start (paga sempre). Reserved Concurrency: limita concorrência máxima.',
            'REST API vs HTTP API: REST = mais rico; HTTP = mais barato, JWT nativo.',
            'Lambda@Edge: executa nas edge locations do CloudFront (para personalização de resposta na borda).'
          ],
          examSignals: [
            '"API serverless sem servidor" → API Gateway + Lambda.',
            '"Eliminar cold start em Lambda" → Provisioned Concurrency.',
            '"Limitar consumo de Lambda para não estourar banco" → Reserved Concurrency.',
            '"Processar stream em tempo real" → Lambda com Event Source Mapping (Kinesis/DynamoDB Streams).'
          ],
          traps: [
            'Lambda Layers compartilham dependencias, mas não são executáveis independentes.',
            'API Gateway REST API não suporta JWT nativo; HTTP API sim.'
          ],
          tips: [
            'Lambda Destinations: resultado de invoção assíncrona vai para SQS/SNS/EventBridge/Lambda (sucesso ou falha).',
            'WebSocket API no API Gateway: conexão persistente bidirecional para apps de chat e tempo real.'
          ]
        },
        flashcards: [
          { q: 'O que é Provisioned Concurrency no Lambda?', a: 'Mantém um número de instâncias "aquecidas" prontas para executar, eliminando cold starts. Tem custo adicional.' },
          { q: 'Diferença entre REST API e HTTP API no API Gateway?', a: 'HTTP API é mais barato e simples, suporta JWT e Lambda. REST API tem mais funcionalidades (API Keys, throttling, transformações).' }
        ]
      },
      { id: 18, title: 'Dados e Analytics', icon: '📊', estimatedTime: '3h',
        topics: ['Amazon Kinesis Data Streams vs Firehose', 'Amazon Kinesis Data Analytics', 'AWS Glue: ETL, Data Catalog, crawlers', 'Amazon Athena: query S3 com SQL', 'Amazon EMR (Hadoop/Spark)', 'Amazon QuickSight (BI)', 'AWS Lake Formation', 'Amazon OpenSearch Service'],
        resources: { readme: 'https://github.com/Thiago-code-lab/aws-certified-solutions-architect-associate-brasil/blob/main/18-Dados-e-Analytics/README.md', localPath: 'conteudo/aws-certified-solutions-architect-associate-brasil-main/aws-certified-solutions-architect-associate-brasil-main/18-Dados-e-Analytics/README.md' },
        content: {
          focus: 'Analytics na AWS: ingestão, transformação, armazenamento e visualização de dados em grande escala.',
          keyPoints: [
            'Kinesis Data Streams: real-time, consumidores múltiplos, você gerencia. Firehose: near-real-time, entrega automática.',
            'Athena: query SQL no S3 sem servidor; paga por dado escaneado. Use Glue Catalog para metadados.',
            'Glue ETL: transforma e move dados. Glue Data Catalog: repositório de metadados compartilhado.',
            'EMR: Hadoop/Spark gerenciado para processamento massivo. Lake Formation: governança de data lake.'
          ],
          examSignals: [
            '"Ingerir eventos em tempo real" → Kinesis Data Streams.',
            '"Query SQL em dados S3 sem servidor" → Amazon Athena.',
            '"ETL gerenciado" → AWS Glue.',
            '"BI e dashboards" → Amazon QuickSight.'
          ],
          traps: [
            'Kinesis Firehose é near-real-time (buffer 60s-900s); Streams é real-time (sub-segundo).',
            'Athena paga por dado escaneado; use particionamento para reduzir custo.'
          ],
          tips: [
            'Arquitetura clássica: Kinesis → Firehose → S3 → Athena → QuickSight.',
            'OpenSearch: sucessor do Elasticsearch. Ideal para busca e log analytics.'
          ]
        },
        flashcards: [
          { q: 'Diferença entre Kinesis Data Streams e Firehose?', a: 'Streams: real-time, você gerencia consumers. Firehose: near-real-time, entrega automaticamente para S3/Redshift/OpenSearch.' },
          { q: 'Para que serve o AWS Glue Data Catalog?', a: 'Repositório central de metadados de dados. Usado pelo Athena, EMR e Redshift Spectrum para descobrir e consultar dados.' }
        ]
      },
      { id: 19, title: 'Machine Learning e IA', icon: '🤖', estimatedTime: '2h',
        topics: ['Amazon Rekognition, Transcribe, Polly, Translate, Comprehend, Lex', 'Amazon SageMaker: training, deployment, pipelines', 'Amazon Bedrock: FMs, Knowledge Bases, Agents', 'Amazon Kendra', 'AWS Textract', 'Amazon Forecast, Personalize, Fraud Detector'],
        resources: { readme: 'https://github.com/Thiago-code-lab/aws-certified-solutions-architect-associate-brasil/blob/main/19-Machine-Learning-e-IA/README.md', localPath: 'conteudo/aws-certified-solutions-architect-associate-brasil-main/aws-certified-solutions-architect-associate-brasil-main/19-Machine-Learning-e-IA/README.md' },
        content: {
          focus: 'Escolher o serviço de IA certo para o cenário de prova: qué problema resolve cada serviço.',
          keyPoints: [
            'Rekognition (imagens/vídeos), Transcribe (fala→texto), Polly (texto→fala), Comprehend (NLP), Translate.',
            'SageMaker: treinar e implantar modelos de ML customizados; Autopilot: AutoML gerenciado.',
            'Bedrock: Foundation Models gerenciados sem gerenciar infra; RAG via Knowledge Bases.',
            'Personalize: recomendações personalizadas. Forecast: previsão de séries temporais.'
          ],
          examSignals: [
            '"Detectar objetos em imagem" → Rekognition.',
            '"Chatbot com linguagem natural" → Amazon Lex.',
            '"IA generativa gerenciada" → Amazon Bedrock.',
            '"Treinamento de modelo customizado" → SageMaker.'
          ],
          traps: [
            'Bedrock consome FMs; SageMaker treina modelos. Para o SAA, diferenciação é fundamental.',
            'Kendra: busca semântica corporativa. Não confundir com Comprehend (NLP estruturado).'
          ],
          tips: [
            'Mapeie serviços por domínio: visão→Rekognition; texto→Comprehend; documentos→Textract.',
            'Para SAA, IA aparece em cenários de arquitetura integrada (ex: Rekognition + S3 + Lambda).'
          ]
        },
        flashcards: [
          { q: 'O que é Amazon SageMaker?', a: 'Plataforma gerenciada para criar, treinar e implantar modelos de ML em qualquer escala.' }
        ]
      },
      { id: 20, title: 'Monitoramento: CloudWatch e CloudTrail', icon: '👁️', estimatedTime: '2h',
        topics: ['CloudWatch Metrics: namespace, dimensions, statistics', 'CloudWatch Logs: log groups, streams, Insights', 'CloudWatch Alarms: metric alarms, composite alarms', 'CloudWatch Dashboards', 'CloudTrail: events, data events, insights', 'AWS Config: rules, conformance packs', 'AWS X-Ray', 'Amazon EventBridge e métricas personalizadas'],
        resources: { readme: 'https://github.com/Thiago-code-lab/aws-certified-solutions-architect-associate-brasil/blob/main/20-Monitoramento-CloudWatch-CloudTrail/README.md', localPath: 'conteudo/aws-certified-solutions-architect-associate-brasil-main/aws-certified-solutions-architect-associate-brasil-main/20-Monitoramento-CloudWatch-CloudTrail/README.md' },
        content: {
          focus: 'Observabilidade para o SAA: métricas, logs, auditoria e rastreamento distribuído.',
          keyPoints: [
            'CloudWatch Metrics: ponto de dados de cada recurso. Log Groups: armazena logs de Lambda, EC2, RDS etc.',
            'CloudWatch Alarms: dispara ações (Auto Scaling, SNS, Lambda) quando métrica passa de threshold.',
            'CloudTrail: registra TODAS as chamadas de API da conta. Data Events: nível de objeto (S3, DynamoDB).',
            'X-Ray: tracing distribuído; identifica gargalos em arquiteturas de microsserviços.'
          ],
          examSignals: [
            '"Alertar quando uso de CPU > 80%" → CloudWatch Alarm + SNS.',
            '"Quem chamou DeleteObject no S3" → CloudTrail Data Events.',
            '"Rastrear requisição por microsserviços" → AWS X-Ray.',
            '"Conformidade contínua de configuração" → AWS Config.'
          ],
          traps: [
            'CloudWatch não registra ações de usuário; isso é CloudTrail.',
            'CloudTrail Management Events estão habilitados por padrão; Data Events não.'
          ],
          tips: [
            'Composite Alarms: combina múltiplos alarmes com AND/OR para alertas mais precisos.',
            'Metric Filters: transforma logs em métricas customizadas para criar alarmes.'
          ]
        },
        flashcards: [
          { q: 'Para que serve o AWS X-Ray?', a: 'Rastreamento distribuído de requisições em aplicações. Permite identificar gargalos e erros em microsserviços.' }
        ]
      },
      { id: 21, title: 'Migração e Transferência', icon: '🚛', estimatedTime: '2h',
        topics: ['AWS Application Migration Service (MGN)', 'AWS DMS: replicação de banco de dados', 'AWS DataSync: mover dados NFS/SMB para AWS', 'AWS Snow Family: Snowcone, Snowball, Snowmobile', 'AWS Transfer Family (SFTP, FTP)', 'AWS Migration Hub'],
        resources: { readme: 'https://github.com/Thiago-code-lab/aws-certified-solutions-architect-associate-brasil/blob/main/21-Migracao-e-Transferencia/README.md', localPath: 'conteudo/aws-certified-solutions-architect-associate-brasil-main/aws-certified-solutions-architect-associate-brasil-main/21-Migracao-e-Transferencia/README.md' },
        content: {
          focus: 'Migração de workloads para a AWS: escolha o serviço certo por tipo de dado e escala.',
          keyPoints: [
            'MGN (Application Migration Service): migra servidores completos (lift-and-shift) com replicação contínua.',
            'DMS: migra bancos de dados (homogêneo e heterogêneo). SCT converte schema para bancos diferentes.',
            'DataSync: transfere dados de NFS/SMB on-premises para S3/EFS/FSx via rede gerenciada.',
            'Snow Family: para volumes físicos muito grandes ou redes lentas (Snowcone, Snowball, Snowmobile).'
          ],
          examSignals: [
            '"Migrar servidor on-premises para EC2" → AWS MGN.',
            '"Migrar banco Oracle para Aurora" → AWS DMS + SCT.',
            '"Transferir 5 PB offline" → AWS Snowmobile.',
            '"Sincronizar dados NFS periodicamente" → AWS DataSync.'
          ],
          traps: [
            'DMS mantém a migração em execução (replication ongoing) até o cutover.',
            'DataSync (online) é diferente de Snow Family (físico). DataSync usa rede; Snow usa dispositivo enviado.'
          ],
          tips: [
            'SCT (Schema Conversion Tool) é necessário quando o banco de origem e destino são diferentes.',
            'Transfer Family: SFTP/FTP gerenciado para parceiros que precisam enviar arquivos via protocolos legados.'
          ]
        },
        flashcards: [
          { q: 'Quando usar DataSync vs Snow Family?', a: 'DataSync: transferências online via rede (incremental). Snow Family: quando a largura de banda é insuficiente ou o volume é muito grande para transferir online.' }
        ]
      },
      { id: 22, title: 'Recuperação de Desastres e Continuidade', icon: '🛡️', estimatedTime: '2.5h',
        topics: ['RTO vs RPO: conceitos e impacto na estratégia', 'Estratégias DR: Backup & Restore, Pilot Light, Warm Standby, Multi-Site Active/Active', 'AWS Backup', 'S3 como armazenamento de backup', 'RDS automated backups vs snapshots', 'Aurora Global Database para DR', 'Route 53 Failover para DR'],
        resources: { readme: 'https://github.com/Thiago-code-lab/aws-certified-solutions-architect-associate-brasil/blob/main/22-Recuperacao-de-Desastres-e-Continuidade/README.md', localPath: 'conteudo/aws-certified-solutions-architect-associate-brasil-main/aws-certified-solutions-architect-associate-brasil-main/22-Recuperacao-de-Desastres-e-Continuidade/README.md' },
        content: {
          focus: 'DR (Disaster Recovery): RPO, RTO e estratégias em ordem crescente de custo/disponibilidade.',
          keyPoints: [
            'RPO: quanto de dados você pode perder. RTO: quanto tempo para voltar ao ar.',
            'Backup & Restore: mais barato, maior RTO/RPO. Multi-Site Active/Active: mais caro, RTO/RPO quase zero.',
            'Pilot Light: só core rodando (ex: banco replicado). Warm Standby: ambiente menor sempre rodando.',
            'AWS Backup: política centralizada de backup para RDS, EBS, EFS, DynamoDB, S3.'
          ],
          examSignals: [
            '"Menor RPO e RTO possível" → Multi-Site Active/Active.',
            '"Backup barato, pode aceitar horas de RTO" → Backup & Restore.',
            '"Infra mínima sempre ativa em outra região" → Pilot Light.',
            '"Failover automático de banco multi-região em segundos" → Aurora Global Database.'
          ],
          traps: [
            'RDS Read Replica pode ser promovida a primary no DR, mas não é failover automático.',
            'Multi-AZ é HA dentro de uma região; DR multi-region usa outra região completamente.'
          ],
          tips: [
            'RPO e RTO inversamente proporcionais ao custo: menor RPO/RTO = mais investimento.',
            'Route 53 Health Checks + Failover policy = DNS-level automatic failover cross-region.'
          ]
        },
        flashcards: [
          { q: 'Qual estratégia DR tem o menor RTO?', a: 'Multi-Site Active/Active — todas as regiões servem tráfego ao mesmo tempo. Mais caro mas RPO/RTO quase zero.' },
          { q: 'O que é Pilot Light?', a: 'Apenas os serviços core rodam na região de DR (ex: banco de dados replicado). Resto é iniciado no failover.' }
        ]
      },
      { id: 23, title: 'AWS Organizations, Governança e Custos', icon: '🏢', estimatedTime: '2h',
        topics: ['AWS Organizations: master account, OUs, SCPs', 'AWS Control Tower', 'AWS Config em múltiplas contas', 'AWS Cost Explorer e Cost Allocation Tags', 'AWS Budgets e Savings Plans', 'AWS Compute Optimizer', 'Reserved Instance Marketplace'],
        resources: { readme: 'https://github.com/Thiago-code-lab/aws-certified-solutions-architect-associate-brasil/blob/main/23-AWS-Organizations-Governanca-e-Custos/README.md', localPath: 'conteudo/aws-certified-solutions-architect-associate-brasil-main/aws-certified-solutions-architect-associate-brasil-main/23-AWS-Organizations-Governanca-e-Custos/README.md' },
        content: {
          focus: 'Multi-account governance: Organizations, Control Tower, SCPs e otimização de custos em escala.',
          keyPoints: [
            'Organizations: agrupa contas em OUs. SCPs limitam o que contas membros podem fazer (não afeta management account).',
            'Control Tower: automatiza criação de ambiente multi-conta seguro com guardrails pré-configurados.',
            'Cost Explorer: visualiza gastos por serviço, conta, tag. Budgets: alerta por limite de gasto ou uso.',
            'Compute Optimizer: recomendações de right-sizing para EC2, Lambda, ECS e EBS.'
          ],
          examSignals: [
            '"Restringir o que subcontas podem fazer" → SCPs no Organizations.',
            '"Ambiente multi-conta padronizado e seguro" → AWS Control Tower.',
            '"Reduzir custo de EC2 sem mudar arquitetura" → Compute Optimizer + right-sizing.',
            '"Alocar custos por equipe ou projeto" → Cost Allocation Tags.'
          ],
          traps: [
            'SCPs não dão permissões; só limitam. Permissões ainda precisam de policies IAM.',
            'Management account não é restrita por SCPs — isso é uma armadilha clássica.'
          ],
          tips: [
            'Savings Plans compromête gasto por hora (flexibilidade). Reserved Instances compromête instância (desconto maior).',
            'Cost Allocation Tags: ativar tags e’m Cost Explorer para rastrear gastos por projeto.'
          ]
        },
        flashcards: [
          { q: 'O que é AWS Control Tower?', a: 'Serviço para configurar e governar um ambiente multi-conta seguro e em conformidade seguindo best practices.' }
        ]
      },
      { id: 24, title: 'Redes Avançadas e Conectividade Híbrida', icon: '🔌', estimatedTime: '3h',
        topics: ['AWS Transit Gateway (TGW): hub-and-spoke', 'AWS Direct Connect: conexão física dedicada', 'Direct Connect Gateway para múltiplas regiões', 'Site-to-Site VPN e Client VPN', 'AWS PrivateLink', 'VPN CloudHub', 'AWS Network Firewall', 'Route 53 Resolver (DNS híbrido)'],
        resources: { readme: 'https://github.com/Thiago-code-lab/aws-certified-solutions-architect-associate-brasil/blob/main/24-Redes-Avancadas-e-Conectividade-Hibrida/README.md', localPath: 'conteudo/aws-certified-solutions-architect-associate-brasil-main/aws-certified-solutions-architect-associate-brasil-main/24-Redes-Avancadas-e-Conectividade-Hibrida/README.md' },
        content: {
          focus: 'Conectividade híbrida: interligar on-premises e AWS com confiabilidade, segurança e performance.',
          keyPoints: [
            'Transit Gateway: hub central para múltiplas VPCs e VPNs. Resolve a não-transitividade do peering.',
            'Direct Connect: conexão física dedicada (1Gbps/10Gbps). Mais estável que VPN (sem internet pública).',
            'VPN CloudHub: conecta múltiplos sites on-premises via Virtual Private Gateway (hub-and-spoke).',
            'Route 53 Resolver: resolve DNS híbrido entre on-premises e AWS bidirecionalmente.'
          ],
          examSignals: [
            '"Conectar 100 VPCs sem peering" → Transit Gateway.',
            '"Conexão dedicada on-premises, alta largura de banda" → AWS Direct Connect.',
            '"VPN rápida para migração inicial" → Site-to-Site VPN.',
            '"Resolver DNS de on-premises dentro da VPC" → Route 53 Resolver Inbound Endpoint.'
          ],
          traps: [
            'Direct Connect só por si não é criptografado; combine com VPN para criptografia.',
            'Transit Gateway é regional; para multi-região, faça peering entre TGWs.'
          ],
          tips: [
            'DX + VPN em paralelo: Direct Connect como primário, VPN como failover automático.',
            'Client VPN: usuários remotos acessam VPC via OpenVPN.'
          ]
        },
        flashcards: [
          { q: 'Para que serve o Transit Gateway?', a: 'Hub central que conecta múltiplas VPCs e redes on-premises. Resolve a limitação não-transitiva do VPC Peering.' },
          { q: 'Diferença entre Site-to-Site VPN e Direct Connect?', a: 'VPN: rápido de configurar, criptografado, usa internet pública. Direct Connect: conexão física dedicada, mais estável e rápida, não usa internet.' }
        ]
      },
      { id: 25, title: 'Criptografia, KMS e Gestão de Segredos', icon: '🔐', estimatedTime: '2.5h',
        topics: ['AWS KMS: CMKs, data keys, envelope encryption', 'KMS Key Policies vs IAM Policies', 'AWS Secrets Manager: rotação automática', 'AWS Systems Manager Parameter Store', 'AWS Certificate Manager (ACM)', 'CloudHSM: hardware dedicado', 'S3 encryption options', 'EBS encryption'],
        resources: { readme: 'https://github.com/Thiago-code-lab/aws-certified-solutions-architect-associate-brasil/blob/main/25-Criptografia-KMS-e-Gestao-de-Segredos/README.md', localPath: 'conteudo/aws-certified-solutions-architect-associate-brasil-main/aws-certified-solutions-architect-associate-brasil-main/25-Criptografia-KMS-e-Gestao-de-Segredos/README.md' },
        content: {
          focus: 'Criptografia na AWS: KMS, envelope encryption e gestão segura de segredos e certificados.',
          keyPoints: [
            'KMS: gerencia CMKs. Envelope Encryption: data key criptografa os dados; CMK criptografa a data key.',
            'CMK da AWS vs CMK do cliente: cliente gerencia (rotação manual, access control granular).',
            'Secrets Manager: rotação automática de credenciais (banco, API). Parameter Store: configurações e segredos mais simples.',
            'ACM: certificados SSL/TLS gratuitos para ALB/CloudFront. Não pode exportar chave privada.'
          ],
          examSignals: [
            '"Rotação automática de senha de banco" → Secrets Manager.',
            '"Criptografia de EBS" → KMS (habilitado por padrão se configuração da conta).',
            '"Hardware dedicado para compliance FIPS 140-2 Nivel 3" → CloudHSM.',
            '"Certificado SSL sem custo para ALB" → ACM.'
          ],
          traps: [
            'ACM só funciona com serviços AWS (ALB, CloudFront). Não é para instalar em EC2.',
            'CloudHSM: você gerencia as chaves. Perda do acesso é permanente e irrecuperável.'
          ],
          tips: [
            'KMS Key Policy: sem ação kms:* para root na key policy, nem admin IAM acessa.',
            'SSE-S3 usa chave AWS gerenciada. SSE-KMS usa CMK. SSE-C: cliente fornece a chave a cada request.'
          ]
        },
        flashcards: [
          { q: 'O que é Envelope Encryption?', a: 'Técnica onde uma data key criptografa os dados, e a data key é criptografada pela CMK do KMS. Melhora performance.' }
        ]
      },
      { id: 26, title: 'Well-Architected Framework', icon: '🏛️', estimatedTime: '2h',
        topics: ['6 pilares e design principles', 'Well-Architected Tool', 'Lentes do Well-Architected (Serverless, SaaS, etc.)', 'Padrões de DR no contexto do Well-Architected'],
        resources: { readme: 'https://github.com/Thiago-code-lab/aws-certified-solutions-architect-associate-brasil/blob/main/26-Well-Architected-Framework/README.md', localPath: 'conteudo/aws-certified-solutions-architect-associate-brasil-main/aws-certified-solutions-architect-associate-brasil-main/26-Well-Architected-Framework/README.md' },
        content: {
          focus: 'Os 6 pilares do AWS Well-Architected Framework: guia definitivo para projetar na nuvem.',
          keyPoints: [
            '1. Operational Excellence: infraestrutura como código, observabilidade, processos frequentes pequenos.',
            '2. Security: IAM (least privilege), rastreabilidade, proteção de dados em repouso e trânsito.',
            '3. Reliability: recuperação automática, escalabilidade horizontal, teste de falhas.',
            '4. Performance Efficiency: usar tecnologia serverless, ir global em minutos, democratizar tecnologias avançadas.',
            '5. Cost Optimization: modelo de consumo, economia de escala, parar de gastar em data center.',
            '6. Sustainability: entender impacto ambiental, maximizar uso, minimizar hardware (novo pilar).'
          ],
          examSignals: [
            '"Projetar para tolerar falhas" → Reliability Pillar.',
            '"Pagar apenas pelo que usa, medir métricas de negócio" → Cost Optimization Pillar.',
            '"Proteger dados e sistemas de acesso indevido" → Security Pillar.'
          ],
          traps: [
            'Operational Excellence não é apenas não ter erros, é a capacidade de evoluir rapidamente (CI/CD, automação).',
            'Sustainability não é só energia verde; é usar menos recursos provendo o mesmo valor.'
          ],
          tips: [
            'O Well-Architected Tool é um serviço na AWS que avalia sua conta com base em um questionário.',
            'No exame, quando a pergunta pedir a "arquitetura mais econômica" ou "mais tolerante a falhas", relacione diretamente com os pilares.'
          ]
        },
        flashcards: [
          { q: 'Qual pilar do WAF foca em selecionar o tipo certo de recurso para a carga de trabalho?', a: 'Performance Efficiency — usar os recursos computacionais de forma eficiente para atender os requisitos.' }
        ]
      },
      { id: 27, title: 'Casos de Uso Reais', icon: '🎯', estimatedTime: '2h',
        topics: ['Arquitetura de e-commerce escalável', 'Media streaming com CloudFront', 'Data Lake na AWS', 'Aplicação serverless completa', 'Migração de banco de dados Oracle para Aurora'],
        resources: { readme: 'https://github.com/Thiago-code-lab/aws-certified-solutions-architect-associate-brasil/blob/main/27-Casos-de-Uso-Reais/README.md', localPath: 'conteudo/aws-certified-solutions-architect-associate-brasil-main/aws-certified-solutions-architect-associate-brasil-main/27-Casos-de-Uso-Reais/README.md' },
        content: {
          focus: 'Sintetizando tudo: como os serviços AWS se encaixam para resolver problemas de negócio.',
          keyPoints: [
            'E-commerce: Route 53 → WAF → CloudFront → ALB → ASG(EC2) → RDS Multi-AZ + ElastiCache + S3 (imagens).',
            'Data Lake: Dados (Kinesis) → S3 (RAW) → Glue (ETL) → S3 (Processed) → Athena (Queries) → QuickSight (BI).',
            'Serverless App: Cognito (Auth) → API Gateway → Lambda → DynamoDB.',
            'Processamento Assíncrono: API Gateway → SQS → Lambda (consumidor).'
          ],
          examSignals: [
            '"Arquitetura que escala de zero a milhares rapidamente sem gerenciar instâncias" → API Gateway + Lambda + DynamoDB.',
            '"Usuários globais acessando vídeos com baixa latência" → S3 + CloudFront.',
            '"Separar frontend e backend com processamento assíncrono" → Uso de filas (SQS) e tópicos (SNS).'
          ],
          traps: [
            'Não use EC2 se o requisito é "menor sobrecarga operacional" (serverless é preferível).',
            'Evite armazenar imagens no RDS ou DynamoDB; S3 é sempre a resposta para objetos estáticos.'
          ],
          tips: [
            'O exame quase sempre testa Padrões. Quando ver "desacoplar", pense SQS. Quando ver "cache de banco", ElastiCache.'
          ]
        },
        flashcards: []
      },
      { id: 28, title: 'Labs Práticos End-to-End', icon: '🧪', estimatedTime: '4h', isLab: true,
        topics: ['Lab: Arquitetura completa com ALB + ASG + RDS Multi-AZ', 'Lab: Serverless API com Lambda + API Gateway + DynamoDB', 'Lab: Data pipeline com Kinesis + Lambda + S3 + Athena', 'Lab: Disaster Recovery com Route 53 Failover'],
        resources: { readme: 'https://github.com/Thiago-code-lab/aws-certified-solutions-architect-associate-brasil/blob/main/28-Labs-Praticos/README.md', localPath: 'conteudo/aws-certified-solutions-architect-associate-brasil-main/aws-certified-solutions-architect-associate-brasil-main/28-Labs-Praticos/README.md' },
        content: {
          focus: 'Experiência mão-na-massa construindo as arquiteturas mais testadas na prova.',
          keyPoints: [
            'A teoria só fixa com a prática. No SAA, entender onde ficam as configurações na console ajuda muito.',
            'Configurar VPC do zero: VPC, Subnets (Public/Private), IGW, NAT Gateway, Route Tables.',
            'Subir um ASG: Launch Template com User Data instalando servidor web.',
            'Criar RDS Multi-AZ: simular o failover forçando reboot com failover e observar o tempo de indisponibilidade.'
          ],
          examSignals: [
            '"Não consigo acessar a instância em sub-rede privada pela internet" → Faltou o NAT Gateway e a rota.',
            '"ALB marcando instâncias como Unhealthy" → Health check path incorreto ou Security Group bloqueando tráfego do ALB.'
          ],
          traps: [
            'Deixar recursos ligados após os labs! Cuidado com a fatura. Destrua sempre tudo.',
            'NAT Gateway custa caro por hora (não tem free tier duradouro).'
          ],
          tips: [
            'Acompanhe os vídeos do material extra ou siga os tutoriais no README para não cometer erros comuns.'
          ]
        },
        flashcards: []
      },
      { id: 29, title: 'Simulados e Questões — Reta Final', icon: '📝', estimatedTime: '6h',
        topics: ['Simulado completo por domínio', 'Mini-simulados de 20 questões', 'Caderno de erros', 'Revisão dos temas mais cobrados', 'Estratégias de eliminação de alternativas', 'Checklist final: Multi-AZ, DR, IAM, S3, VPC, ELB, RDS'],
        resources: { readme: 'https://github.com/Thiago-code-lab/aws-certified-solutions-architect-associate-brasil/blob/main/29-Simulados-e-Questoes/README.md', localPath: 'conteudo/aws-certified-solutions-architect-associate-brasil-main/aws-certified-solutions-architect-associate-brasil-main/29-Simulados-e-Questoes/README.md' },
        content: {
          focus: 'Testar os conhecimentos com questões modelo exame SAA-C03.',
          keyPoints: [
            'A prova tem 65 questões. Aprovação exige score de 720 (em 1000).',
            'Questões têm sempre de 1 a 2 distrações. Aprenda a ler os requisitos não funcionais (Custo vs Performance).',
            'Caderno de erros: anote toda questão que errar para entender o porquê.',
            'Tempo médio: menos de 2 minutos por questão.'
          ],
          examSignals: [
            '"Most cost-effective" (Mais barato) → Spot Instances, S3 Standard-IA/Glacier, Serverless.',
            '"Most highly available" (Alta Disponibilidade) → Multi-AZ, Route 53 com failover, Aurora.',
            '"Lowest latency" (Menor Latência) → CloudFront, Global Accelerator, ElastiCache.'
          ],
          traps: [
            'Alternativas que parecem corretas tecnicamente mas violam uma restrição da questão (ex: custam muito caro quando pedia barato).',
            'Serviços que não existem: a AWS às vezes inventa nomes de serviços nas alternativas.'
          ],
          tips: [
            'Elimine logo as opções que envolvem "provisionar hardware", "escrever código do zero" ou "gerenciar infra manual" (geralmente serviços gerenciados são a resposta correta).'
          ]
        },
        flashcards: [
          { q: 'Para alta disponibilidade de um banco RDS, o que usar?', a: 'Multi-AZ: cria replica síncrona em outra AZ com failover automático em 1-2 minutos.' },
          { q: 'Qual serviço usar para servir conteúdo estático globalmente com baixa latência?', a: 'CloudFront (CDN) com S3 como origem. Usa Edge Locations globais para cachear conteúdo.' }
        ]
      },
      { id: 30, title: 'Glossário SAA-C03', icon: '📖', estimatedTime: '1h',
        topics: ['Termos de arquitetura: HA, FT, DR, scalability, elasticity', 'Siglas e conceitos do SAA-C03', 'Cheatsheet por domínio'],
        resources: { readme: 'https://github.com/Thiago-code-lab/aws-certified-solutions-architect-associate-brasil/blob/main/30-Glossario/README.md', localPath: 'conteudo/aws-certified-solutions-architect-associate-brasil-main/aws-certified-solutions-architect-associate-brasil-main/30-Glossario/README.md' },
        content: {
          focus: 'Terminologia fundamental para a prova e para o dia-a-dia de Cloud.',
          keyPoints: [
            'High Availability (HA): o sistema permanece operando sem interrupção mesmo se houver falhas (ex: Multi-AZ).',
            'Fault Tolerance (FT): o sistema tolera falhas sem degradação de performance.',
            'Disaster Recovery (DR): plano para restaurar sistemas em evento extremo (ex: Multi-Region).',
            'Scalability vs Elasticity: escalabilidade é crescer; elasticidade é crescer E encolher de acordo com a demanda.'
          ],
          examSignals: [
            'N/A - seção de glossário.'
          ],
          traps: [
            'Alta disponibilidade (HA) NÃO é tolerância a falhas (FT). FT costuma ser mais complexo/caro (ativo/ativo).',
            'A prova exige conhecer muito bem os acrônimos: WAF vs AWS WAF, IAM, SCP, CMK, etc.'
          ],
          tips: [
            'Leia este glossário um dia antes da prova para manter as siglas frescas na cabeça.'
          ]
        },
        flashcards: []
      },
      { id: 31, title: 'Recursos e Links Oficiais', icon: '🔗', estimatedTime: '0.5h',
        topics: ['Whitepapers essenciais para o SAA-C03', 'AWS Solutions Library', 'AWS Architecture Center', 'Exam Guide oficial'],
        resources: { readme: 'https://github.com/Thiago-code-lab/aws-certified-solutions-architect-associate-brasil/blob/main/31-Recursos-e-Links/README.md', localPath: 'conteudo/aws-certified-solutions-architect-associate-brasil-main/aws-certified-solutions-architect-associate-brasil-main/31-Recursos-e-Links/README.md' },
        content: {
          focus: 'Links e recursos adicionais da própria AWS para estudo aprofundado.',
          keyPoints: [
            'Exam Guide Oficial SAA-C03 (AWS).',
            'Whitepapers recomendados: Overview of AWS, AWS Well-Architected Framework.',
            'AWS Knowledge Center e FAQ dos serviços (S3, EC2, RDS, VPC).'
          ],
          examSignals: [
            'N/A'
          ],
          traps: [
            'Não se perca em documentações antigas. Certifique-se de que está estudando os limites e features mais recentes (SAA-C03).'
          ],
          tips: [
            'A seção de "FAQs" (Frequently Asked Questions) no site da AWS contém as perguntas exatas que frequentemente caem em prova.'
          ]
        },
        flashcards: []
      }
    ]
  },

  // ──────────────────────────────────────────────────────────
  // AWS AI PRACTITIONER — AIF-C01
  // ──────────────────────────────────────────────────────────
  'aif-c01': {
    id: 'aif-c01',
    provider: 'aws',
    code: 'AIF-C01',
    name: 'AWS Certified AI Practitioner',
    shortName: 'AI Practitioner',
    level: 'Foundational',
    emoji: '🤖',
    duration: '4 semanas',
    hoursPerDay: '1–2h/dia',
    totalModules: 18,
    sourceUrl: 'https://github.com/Thiago-code-lab/aws-certified-ai-practitioner-brasil',
    description: 'Fundamentos de IA/ML na AWS, serviços gerenciados como Bedrock e SageMaker, IA responsável e aplicações de negócio.',
    roadmap: [
      { week: 1, title: 'Fundamentos de IA/ML e Serviços AWS', modules: [1, 2, 3, 4] },
      { week: 2, title: 'Bedrock, SageMaker e IA Responsável', modules: [5, 6, 7, 8] },
      { week: 3, title: 'GenAI Avançado e Segurança', modules: [9, 10, 11, 12, 13] },
      { week: 4, title: 'Integração, Otimização e Revisão', modules: [14, 15, 16, 17, 18] }
    ],
    modules: [
      { id: 1, title: 'Fundamentos de IA e ML', icon: '🧠', estimatedTime: '2h',
        topics: ['O que é Inteligência Artificial (IA)', 'Machine Learning (ML): Supervised, Unsupervised, Reinforcement Learning', 'Deep Learning e Redes Neurais', 'Foundation Models (FMs) e Large Language Models (LLMs)', 'IA Generativa: conceitos e casos de uso', 'Diferença entre IA, ML e Deep Learning', 'Bias e fairness em modelos de ML'],
        resources: { readme: 'https://github.com/Thiago-code-lab/aws-certified-ai-practitioner-brasil/blob/main/01-Fundamentos-IA-e-ML/README.md', localPath: 'conteudo/aws-certified-ai-practitioner-brasil-main/aws-certified-ai-practitioner-brasil-main/01-Introducao-IA-e-ML/README.md' },
        content: {
          focus: 'Entender o landscape de IA/ML: o que é cada técnica e qual problema resolve.',
          keyPoints: [
            'IA ⊃ ML ⊃ Deep Learning. IA generativa usa DL para criar conteúdo novo (texto, imagem, código).',
            'Supervised Learning: dados rotulados (classificação, regressão). Unsupervised: sem rótulos (clustering).',
            'Foundation Models: treinados em volumes enormes, adaptados a múltiplas tarefas sem re-treinar do zero.',
            'Hallucination: LLMs podem gerar informações falsas com confiança — principal limitação.'
          ],
          examSignals: [
            '"Modelo que aprende sem rótulos" → Unsupervised / Clustering.',
            '"Detectar padrões anômalos" → Anomaly Detection (Unsupervised).',
            '"Gerar texto ou imagem" → Generative AI / Foundation Model.',
            '"Modelo enviado de volta por feedback de recompensa" → Reinforcement Learning.'
          ],
          traps: [
            'ML Supervisionado não significa que humanos supervisionam em tempo real; significa que usa dados rotulados.',
            'LLMs são um tipo de Foundation Model, mas não o único (existe text-to-image, multimodal, etc.).'
          ],
          tips: [
            'Para o AIF: domine a hierarquia IA⊃ML⊃DL e os 3 tipos de ML (supervisionado, não supervisionado, RL).',
            'Bias de dados leva a modelos discriminatórios. Fairness é o princípio de mitigar isso.'
          ]
        },
        flashcards: [
          { q: 'Diferença entre ML Supervisionado e Não-supervisionado?', a: 'Supervisionado: treinado com dados rotulados (ex: classificação, regressão). Não-supervisionado: sem rótulos, encontra padrões (ex: clustering).' },
          { q: 'O que é um Foundation Model (FM)?', a: 'Modelo de IA treinado em grandes volumes de dados que pode ser adaptado para múltiplas tarefas sem re-treinamento completo.' },
          { q: 'O que é Hallucination em LLMs?', a: 'Quando o modelo gera informações falsas mas apresentadas com confiança. Principal desafio dos LLMs.' }
        ]
      },
      { id: 2, title: 'Conceitos de ML na AWS', icon: '⚙️', estimatedTime: '2h',
        topics: ['Pipeline de ML: coleta → preparação → treinamento → avaliação → deploy → monitoramento', 'Métricas de avaliação: Accuracy, Precision, Recall, F1, AUC-ROC', 'Overfitting vs Underfitting', 'Feature Engineering', 'Dados de treino, validação e teste', 'Transfer Learning', 'MLOps: conceitos e ferramentas'],
        resources: { readme: 'https://github.com/Thiago-code-lab/aws-certified-ai-practitioner-brasil/blob/main/02-Conceitos-ML-na-AWS/README.md', localPath: 'conteudo/aws-certified-ai-practitioner-brasil-main/aws-certified-ai-practitioner-brasil-main/02-Fundamentos-de-IA-Generativa/README.md' },
        content: {
          focus: 'Pipeline de ML e métricas de avaliação: entender cada etapa e escolher a métrica certa.',
          keyPoints: [
            'Pipeline: Coleta → Preparação → Treinamento → Avaliação → Deploy → Monitoramento.',
            'Precision: quando diz positivo, está certo? Recall: de todos os positivos reais, quantos detectou?',
            'Overfitting: modelo muito bom nos dados de treino, ruim em novos dados. Solução: regularização, dropout.',
            'Transfer Learning: começa de um modelo já treinado. Fine-tuning: ajusta camadas finais com dados específicos.'
          ],
          examSignals: [
            '"Métrica para minimizar falsos negativos" → Recall (alta sensitividade).',
            '"Métrica balanceada entre precision e recall" → F1 Score.',
            '"Modelo não generaliza" → Overfitting (complexo demais para os dados).'
          ],
          traps: [
            'Accuracy pode enganar em datasets desbalanceados (99% acertos se 99% são da mesma classe).',
            'Underfitting: modelo muito simples para o padrão. Overfitting: modelo muito complexo (decorou).'
          ],
          tips: [
            'AUC-ROC: métrica global de performance do classificador. AUC=0.5 é aleatório; AUC=1.0 é perfeito.',
            'MLOps = DevOps para ML: automatiça treinamento, deploy e monitoramento de modelos em produção.'
          ]
        },
        flashcards: [
          { q: 'O que é Transfer Learning?', a: 'Técnica que usa um modelo pré-treinado como ponto de partida para uma nova tarefa, reduzindo dados e tempo necessários.' },
          { q: 'O que é Overfitting?', a: 'Modelo aprende demais os dados de treino e não generaliza para dados novos. Solução: mais dados, regularização, dropout.' }
        ]
      },
      { id: 3, title: 'Serviços de IA da AWS — Visão Geral', icon: '🛠️', estimatedTime: '2h',
        topics: ['Camadas de serviços IA/ML na AWS: AI Services, ML Services, Frameworks', 'AI Services: Rekognition, Comprehend, Textract, Translate, Transcribe, Polly, Lex, Kendra, Personalize, Forecast'],
        resources: { readme: 'https://github.com/Thiago-code-lab/aws-certified-ai-practitioner-brasil/blob/main/03-Servicos-IA-AWS/README.md', localPath: 'conteudo/aws-certified-ai-practitioner-brasil-main/aws-certified-ai-practitioner-brasil-main/03-Fundamentos-de-Machine-Learning/README.md' },
        content: {
          focus: 'Mapa de serviços AWS por tipo de problema de IA: visão, linguagem, voz, busca e recomendação.',
          keyPoints: [
            'AI Services (nível 1): Rekognition, Textract, Transcribe, Polly, Translate, Comprehend, Lex, Kendra.',
            'ML Services (nível 2): SageMaker (treinar, implantar, monitorar). Frameworks (nível 3): TensorFlow, PyTorch.',
            'Rekognition: imagens/vídeos. Textract: documentos OCR. Comprehend: NLP. Transcribe: STT. Polly: TTS.',
            'Kendra: busca semântica. Personalize: recomendações. Forecast: séries temporais.'
          ],
          examSignals: [
            '"Analisar sentimento de texto" → Amazon Comprehend.',
            '"Extrair dados de formulário PDF" → Amazon Textract.',
            '"Transcrever chamada telefônica" → Amazon Transcribe.',
            '"Busca empresarial inteligente" → Amazon Kendra.'
          ],
          traps: [
            'Transcribe é fala→texto. Polly é texto→fala. Não confundir a direção.',
            'Comprehend analisa texto; Rekognition analisa imagem/vídeo.'
          ],
          tips: [
            'Mnemonic: Rekognition (Reconhecimento), Comprehend (Compreensão), Translate (Tradução).',
            'Para o AIF, a prova cobra o que cada serviço FAZ — não os detalhes técnicos de implementação.'
          ]
        },
        flashcards: [
          { q: 'Qual serviço AWS extrai texto e dados de documentos (PDFs, formulários)?', a: 'Amazon Textract — extrai texto, tabelas e formulários de documentos digitalizados.' }
        ]
      },
      { id: 4, title: 'Amazon SageMaker — Fundamentos', icon: '🔬', estimatedTime: '2h',
        topics: ['SageMaker Studio', 'SageMaker Training Jobs', 'SageMaker Endpoints (real-time e batch)', 'SageMaker Pipelines', 'SageMaker Feature Store', 'SageMaker Model Monitor', 'SageMaker Clarify (bias detection)', 'SageMaker JumpStart (modelos prontos)'],
        resources: { readme: 'https://github.com/Thiago-code-lab/aws-certified-ai-practitioner-brasil/blob/main/04-Amazon-SageMaker-Fundamentos/README.md', localPath: 'conteudo/aws-certified-ai-practitioner-brasil-main/aws-certified-ai-practitioner-brasil-main/04-Modelos-Fundacionais-e-LLMs/README.md' },
        content: {
          focus: 'SageMaker: plataforma completa de ML — treinar, avaliar, implantar e monitorar modelos.',
          keyPoints: [
            'SageMaker Studio: IDE unificada para ML (notebooks, training jobs, pipelines, monitoramento).',
            'Training Jobs: treina modelo com dados do S3. Endpoints: serve o modelo em produção.',
            'SageMaker Clarify: detecta bias nos dados e modelo; explica previsões com SHAP values.',
            'SageMaker JumpStart: modelos e soluções prontos para deploy com 1 clique.'
          ],
          examSignals: [
            '"Treinar modelo de ML gerenciado" → SageMaker Training Job.',
            '"Detectar bias no modelo" → SageMaker Clarify.',
            '"Monitorar drift em produção" → SageMaker Model Monitor.',
            '"Pipeline automatizado de ML" → SageMaker Pipelines.'
          ],
          traps: [
            'SageMaker não é para consumir FMs prontos (isso é Bedrock); é para treinar modelos próprios.',
            'JumpStart disponibiliza modelos prontos (fine-tuning); Bedrock é servido como API sem acesso ao modelo.'
          ],
          tips: [
            'Feature Store armazena features para reuso entre modelos e equipes — evita recomputação.',
            'Autopilot (AutoML): seleciona automaticamente algoritmo e hiperparâmetros otimizados.'
          ]
        },
        flashcards: [
          { q: 'Para que serve o SageMaker Clarify?', a: 'Detecta bias em dados e modelos de ML, além de fornecer explicabilidade (feature importance).' }
        ]
      },
      { id: 5, title: 'Amazon Bedrock', icon: '🪨', estimatedTime: '3h',
        topics: ['O que é o Amazon Bedrock', 'Foundation Models disponíveis: Anthropic Claude, Titan, Llama, Mistral, Stable Diffusion', 'Bedrock APIs: InvokeModel, Converse', 'Amazon Bedrock Knowledge Bases (RAG)', 'Amazon Bedrock Agents', 'Bedrock Guardrails (content filtering)', 'Bedrock Model Evaluation', 'Fine-tuning e continued pre-training no Bedrock'],
        resources: { readme: 'https://github.com/Thiago-code-lab/aws-certified-ai-practitioner-brasil/blob/main/05-Amazon-Bedrock/README.md', localPath: 'conteudo/aws-certified-ai-practitioner-brasil-main/aws-certified-ai-practitioner-brasil-main/05-Amazon-Bedrock/README.md' },
        content: {
          focus: 'Amazon Bedrock: o serviço central do AIF — FMs gerenciados, RAG, Agents e Guardrails.',
          keyPoints: [
            'Bedrock: acessa FMs de múltiplos provedores (Anthropic, Meta, Mistral, AWS Titan) via API unificada.',
            'Knowledge Bases (RAG): conecta o FM a dados próprios no S3; respostas mais precisas e atualizadas.',
            'Agents: automatiza workflows multi-etapa chamando APIs, bancos e ações externas via FMs.',
            'Guardrails: filtra conteúdo harmícioso, PII, tópicos indesejados e alucinações.'
          ],
          examSignals: [
            '"Usar FM sem gerenciar servidor" → Amazon Bedrock.',
            '"Responder perguntas com base em documentos próprios" → Bedrock Knowledge Base (RAG).',
            '"Automatizar processo com FM como orquestrador" → Bedrock Agents.',
            '"Impedir que FM responda sobre tópicos proibidos" → Bedrock Guardrails.'
          ],
          traps: [
            'Fine-tuning muda o modelo permanentemente. RAG é dinâmico e não muda o modelo.',
            'Bedrock Agents não é execução de código; é orquestração de API calls guiada pelo FM.'
          ],
          tips: [
            'RAG vs Fine-tuning: RAG = mais flexível e econômico para dados dinâmicos. Fine-tuning = adapta estilo/comportamento.',
            'Bedrock Model Evaluation: avalia qualidade do FM com métricas como BLEU, ROUGE, BERTScore.'
          ]
        },
        flashcards: [
          { q: 'O que é RAG (Retrieval-Augmented Generation)?', a: 'Técnica que conecta LLMs a bases de conhecimento externas para gerar respostas mais precisas e atualizadas.' },
          { q: 'O que são Bedrock Guardrails?', a: 'Camada de proteção que filtra conteúdo prejudicial, PII e tópicos indesejados nas interações com FMs.' },
          { q: 'Diferença entre fine-tuning e RAG?', a: 'Fine-tuning: re-treina o modelo com novos dados (mais caro, permanente). RAG: recupera dados externos em runtime (mais flexível, menos caro).' }
        ]
      },
      { id: 6, title: 'Amazon SageMaker — Avançado', icon: '🚀', estimatedTime: '2h',
        topics: ['SageMaker Training: distributed training, managed spot training', 'SageMaker Inference: real-time, serverless, async, batch transform', 'SageMaker Experiments', 'SageMaker Autopilot (AutoML)', 'SageMaker Canvas (no-code ML)', 'MLflow on SageMaker'],
        resources: { readme: 'https://github.com/Thiago-code-lab/aws-certified-ai-practitioner-brasil/blob/main/06-Amazon-SageMaker/README.md', localPath: 'conteudo/aws-certified-ai-practitioner-brasil-main/aws-certified-ai-practitioner-brasil-main/06-Amazon-SageMaker/README.md' },
        content: {
          focus: 'SageMaker avançado: modalidades de inferência, AutoML e no-code para diferentes perfis.',
          keyPoints: [
            'Real-time endpoints: baixa latência, sempre ativo. Serverless: escala a zero, paga por request.',
            'Batch Transform: processa grandes volumes de dados de uma vez (sem endpoint persistente).',
            'Autopilot (AutoML): testa automaticamente múltiplos algoritmos e escolhe o melhor.',
            'Canvas: interface visual no-code para analistas de negócio criarem modelos sem código.'
          ],
          examSignals: [
            '"Inferência de baixo custo sem tráfego constante" → Serverless Inference.',
            '"Processar lote de milhões de registros" → Batch Transform.',
            '"Usuário de negócio sem código" → SageMaker Canvas.',
            '"ML automático sem engenheiro de ML" → SageMaker Autopilot.'
          ],
          traps: [
            'Serverless Inference tem cold start. Real-time não. Para latência crítica, prefira real-time.',
            'Managed Spot Training: use instâncias Spot para treinar mais barato, mas configure checkpoints.'
          ],
          tips: [
            'Multi-model endpoints: hospedam múltiplos modelos em um único endpoint. Economiza custo.',
            'SageMaker Experiments: rastreia runs de experimentos com hiperparâmetros e métricas.'
          ]
        },
        flashcards: [
          { q: 'O que é SageMaker Canvas?', a: 'Interface no-code que permite usuários de negócio criar previsões de ML sem escrever código.' }
        ]
      },
      { id: 7, title: 'IA Responsável e Governança', icon: '⚖️', estimatedTime: '2h',
        topics: ['Princípios de IA Responsável: fairness, explainability, privacy, robustness', 'AWS AI Service Cards', 'Detecção e mitigação de bias', 'Explainability com SageMaker Clarify e SHAP', 'Privacidade em ML: federated learning, differential privacy', 'Regulamentações: GDPR, LGPD e impacto em IA', 'AWS Responsible AI Framework'],
        resources: { readme: 'https://github.com/Thiago-code-lab/aws-certified-ai-practitioner-brasil/blob/main/07-IA-Responsavel-e-Governanca/README.md', localPath: 'conteudo/aws-certified-ai-practitioner-brasil-main/aws-certified-ai-practitioner-brasil-main/07-IA-Responsavel-e-Governanca/README.md' },
        content: {
          focus: 'IA Responsável: domínio com 14% do AIF. Princípios, detecção de bias e conformidade regulatória.',
          keyPoints: [
            'Princípios: Fairness (justiça), Explainability (explicabilidade), Transparency (transparência), Robustness.',
            'Bias: distorção sistemática por dados não representativos. Clarify detecta e quantifica.',
            'GDPR/LGPD: regulamentações de privacidade que impactam coleta e uso de dados em ML.',
            'AWS AI Service Cards: documentação de limitações e uso responsável de cada serviço IA.'
          ],
          examSignals: [
            '"Explicar decisão de crédito feita por modelo" → Explainability (Clarify/SHAP).',
            '"Modelo discrimina por gênero" → Bias. Detectar com Clarify; mitigar com dados balanceados.',
            '"Respeitar direito ao esquecimento" → GDPR/LGPD compliance.',
            '"Modelo que performa mal em grupos específicos" → Fairness bias.'
          ],
          traps: [
            'Explicabilidade (“ouvir de onde veio”) difere de interpretabilidade (“entender por quê”).',
            'Fairness não é um estado absoluto; depende da definição de fairness adotada (equidade vs igualdade).'
          ],
          tips: [
            'SHAP (SHapley Additive exPlanations): atribui impacto de cada feature à previsão.',
            'Federated Learning: treina modelo em dados locais sem enviá-los para um servidor central.'
          ]
        },
        flashcards: [
          { q: 'O que é Explainability em IA?', a: 'Capacidade de explicar como um modelo chegou a uma decisão. Importante para conformidade e confiança.' },
          { q: 'O que é bias em modelos de ML?', a: 'Distorção sistemática nas previsões do modelo geralmente causada por dados de treinamento não representativos.' }
        ]
      },
      { id: 8, title: 'Dados para IA', icon: '📊', estimatedTime: '2h',
        topics: ['Tipos de dados: estruturados, semi-estruturados, não-estruturados', 'Data Lakes na AWS para ML (S3 + Glue + Athena)', 'AWS Data Wrangler', 'Amazon Redshift para ML (Redshift ML)', 'Qualidade de dados para ML', 'Feature Engineering e Feature Store', 'Data versioning e lineage'],
        resources: { readme: 'https://github.com/Thiago-code-lab/aws-certified-ai-practitioner-brasil/blob/main/08-Dados-para-IA/README.md', localPath: 'conteudo/aws-certified-ai-practitioner-brasil-main/aws-certified-ai-practitioner-brasil-main/08-Dados-para-IA/README.md' },
        content: {
          focus: 'Dados como insumo central de ML: qualidade, preparação e gerenciamento de features.',
          keyPoints: [
            'Dados estruturados: tabelas SQL. Semi-estruturados: JSON, XML. Não-estruturados: texto, imagem, áudio.',
            'Data Lake: S3 + Glue Catalog + Athena. Dado bruto armazenado, transformado sob demanda.',
            'Feature Engineering: criar variáveis relevantes para o modelo a partir de dados brutos.',
            'Feature Store: repositório de features compartilhadas entre equipes (SageMaker Feature Store).'
          ],
          examSignals: [
            '"Centralizar dados de múltiplas fontes para ML" → Data Lake (S3 + Glue + Athena).',
            '"Armazenar e reusar features entre modelos" → SageMaker Feature Store.',
            '"Fazer query SQL nos dados de treino" → Amazon Athena.',
            '"Limpeza e preparação de dados sem código" → AWS Data Wrangler.'
          ],
          traps: [
            'Dados de baixa qualidade resultam em modelos ruins (Garbage In, Garbage Out).',
            'Feature leakage: usar como feature uma variável que vaza informação do rótulo (causa overfitting).'
          ],
          tips: [
            'Data versioning: rastrear versões dos dados de treinamento é crucial para reprodutibilidade.',
            'Redshift ML: treina modelos de ML diretamente no Redshift com SQL usando SageMaker Autopilot.'
          ]
        },
        flashcards: [
          { q: 'O que é Feature Store no contexto de ML?', a: 'Repositório centralizado para armazenar, compartilhar e reusar features entre diferentes modelos e equipes.' }
        ]
      },
      { id: 9, title: 'Engenharia de Prompts', icon: '✍️', estimatedTime: '2h',
        topics: ['O que é Prompt Engineering', 'Técnicas: Zero-shot, Few-shot, Chain-of-Thought (CoT)', 'Prompt Templates', 'System Prompts vs User Prompts', 'Parâmetros de inferência: Temperature, Top-P, Top-K, Max Tokens', 'Problemas: Prompt Injection, Jailbreaking', 'Boas práticas de prompt engineering'],
        resources: { readme: 'https://github.com/Thiago-code-lab/aws-certified-ai-practitioner-brasil/blob/main/09-Engenharia-de-Prompts/README.md', localPath: 'conteudo/aws-certified-ai-practitioner-brasil-main/aws-certified-ai-practitioner-brasil-main/09-Engenharia-de-Prompts/README.md' },
        content: {
          focus: 'Prompt Engineering: técnicas para extrair o melhor de FMs sem re-treinar.',
          keyPoints: [
            'Zero-shot: instrui sem exemplos. Few-shot: fornece exemplos no prompt. CoT: pede raciocínio passo a passo.',
            'Temperature: controla aleatoriedade (0=determinístico, 1=criativo). Top-P/Top-K: controla diversidade.',
            'System Prompt: define personalidade e regras do assistente. User Prompt: pergunta do usuário.',
            'Prompt Injection: ataque que manipula o modelo via entrada do usuário.'
          ],
          examSignals: [
            '"Resposta mais consistente e focada" → Temperature baixa (próximo de 0).',
            '"Guiar o modelo com exemplos" → Few-shot prompting.',
            '"Melhorar raciocínio lógico" → Chain-of-Thought (CoT).',
            '"Definir comportamento padrão do assistente" → System Prompt.'
          ],
          traps: [
            'Temperature alta não significa mais precisão; significa mais criatividade/aleatoriedade.',
            'Few-shot com exemplos errados piora o modelo. Qualidade dos exemplos importa.'
          ],
          tips: [
            'Max Tokens: controla tamanho da resposta. Não é o mesmo que prompt tokens.',
            'Prompt injection é um risco de segurança; use Bedrock Guardrails para mitigar.'
          ]
        },
        flashcards: [
          { q: 'O que é Few-shot prompting?', a: 'Fornecer exemplos no prompt para guiar o comportamento do modelo sem re-treinar.' },
          { q: 'O que é Temperature em LLMs?', a: 'Controla a aleatoriedade das respostas. Baixo (0.1): determinístico/focado. Alto (1.0): criativo/variado.' },
          { q: 'O que é Chain-of-Thought prompting?', a: 'Técnica que instrui o modelo a mostrar o raciocínio passo a passo antes da resposta final, melhorando precisão.' }
        ]
      },
      { id: 10, title: 'IA Generativa na AWS', icon: '✨', estimatedTime: '2h',
        topics: ['Arquitetura Transformer e atenção', 'Tipos de FMs: text-to-text, text-to-image, text-to-code, multimodal', 'Embeddings e busca semântica', 'Vector databases: Amazon OpenSearch, Aurora pgvector', 'Padrões de aplicação: RAG, Agents, FMs fine-tuned', 'Casos de uso empresariais de GenAI'],
        resources: { readme: 'https://github.com/Thiago-code-lab/aws-certified-ai-practitioner-brasil/blob/main/10-IA-Generativa-na-AWS/README.md', localPath: 'conteudo/aws-certified-ai-practitioner-brasil-main/aws-certified-ai-practitioner-brasil-main/10-IA-Generativa-na-AWS/README.md' },
        content: {
          focus: 'GenAI na AWS: transformers, embeddings, vector databases e padrões de aplicação.',
          keyPoints: [
            'Transformers: arquitetura base dos LLMs. Self-attention captura relações entre tokens.',
            'Embeddings: vetores que representam significado semântico. Usados em busca semântica e RAG.',
            'Vector databases: armazenam e consultam embeddings (OpenSearch, Aurora pgvector, Pinecone).',
            'RAG: recupera documentos similares da vector DB e enriquece o prompt antes de enviar ao FM.'
          ],
          examSignals: [
            '"Busca por similaridade semântica" → Vector database + Embeddings.',
            '"Grounding do FM com dados próprios" → RAG.',
            '"Gerar imagem a partir de texto" → text-to-image FM (ex: Stable Diffusion).'
          ],
          traps: [
            'Embeddings não são palavras; são vetores numéricos de alta dimensão.',
            'Vector DB não substitui banco relacional; é especializado em busca por similaridade.'
          ],
          tips: [
            'RAG fluxo: query → embedding → busca no vector DB → top-K documentos → contexto no prompt → FM responde.',
            'Amazon Bedrock Titan Embeddings: gera embeddings para usar em RAG com Knowledge Bases.'
          ]
        },
        flashcards: [
          { q: 'O que são Embeddings?', a: 'Representação numérica (vetor) de textos, imagens ou outros dados que captura o significado semântico.' }
        ]
      },
      { id: 11, title: 'Segurança e Conformidade em IA', icon: '🔒', estimatedTime: '1.5h',
        topics: ['Segurança de dados em treinamento de ML', 'IAM roles para SageMaker e Bedrock', 'VPC endpoints para serviços de IA', 'Bedrock Guardrails e content moderation', 'AWS Macie para dados sensíveis em datasets', 'Auditoria com CloudTrail para serviços IA', 'Conformidade: GDPR, HIPAA e ML'],
        resources: { readme: 'https://github.com/Thiago-code-lab/aws-certified-ai-practitioner-brasil/blob/main/11-Seguranca-e-Conformidade-em-IA/README.md', localPath: 'conteudo/aws-certified-ai-practitioner-brasil-main/aws-certified-ai-practitioner-brasil-main/11-Seguranca-e-Conformidade-em-IA/README.md' },
        content: {
          focus: 'Segurança em IA: 14% do AIF. IAM, VPC, Guardrails, auditoria e conformidade regulatória.',
          keyPoints: [
            'IAM Role para SageMaker e Bedrock: acesso least-privilege a S3, KMS, logs etc.',
            'VPC endpoints: mantém tráfego de SageMaker/Bedrock na rede AWS sem expor à internet.',
            'Bedrock Guardrails: filtra prompts e respostas (PII, tópicos proibidos, conteúdo harmícioso).',
            'CloudTrail: audita chamadas de API de Bedrock e SageMaker para conformidade e investigação.'
          ],
          examSignals: [
            '"Auditar quem chamou InvokeModel no Bedrock" → CloudTrail.',
            '"Filtrar PII nas respostas do FM" → Bedrock Guardrails.',
            '"Dados sensíveis em datasets no S3" → Amazon Macie para descoberta de PII.',
            '"Training sem expor dados à internet" → VPC endpoints para SageMaker.'
          ],
          traps: [
            'HIPAA compliance exige configuração específica (Business Associate Agreement com AWS).',
            'Guardrails é runtime; Clarify é para detectar bias nos dados de treino.'
          ],
          tips: [
            'SageMaker network isolation: bloqueia acesso a internet durante treinamento (dados confidenciais).',
            'Model cards: documentação de uso pretendido, limitações e métricas do modelo.'
          ]
        },
        flashcards: []
      },
      { id: 12, title: 'Casos de Uso e Arquiteturas', icon: '🎨', estimatedTime: '2h',
        topics: ['Chatbot empresarial com Bedrock + Knowledge Base', 'Resumo automático de documentos', 'Análise de sentimento em atendimento ao cliente', 'Detecção de fraude com ML', 'Recomendação de produtos com Amazon Personalize', 'Análise de imagens médicas', 'Code generation com Amazon CodeWhisperer / Q Developer'],
        resources: { readme: 'https://github.com/Thiago-code-lab/aws-certified-ai-practitioner-brasil/blob/main/12-Casos-de-Uso-e-Arquiteturas/README.md', localPath: 'conteudo/aws-certified-ai-practitioner-brasil-main/aws-certified-ai-practitioner-brasil-main/12-Casos-de-Uso-e-Arquiteturas/README.md' },
        content: {
          focus: 'Arquiteturas reais de IA na AWS: mapear caso de uso para combinação de serviços.',
          keyPoints: [
            'Chatbot corporativo: Bedrock + Knowledge Base (RAG) + Guardrails + IAM + CloudTrail.',
            'Resumo de documentos: Textract (OCR) → Bedrock/Comprehend → resumo estruturado.',
            'Detecção de fraude: dados históricos → SageMaker Training → Lambda para inferência em tempo real.',
            'Recomendação: Amazon Personalize ingere dados de comportamento e gera recomendações personalizadas.'
          ],
          examSignals: [
            '"Chatbot com base de conhecimento interna" → Bedrock + Knowledge Base.',
            '"Recomendações personalizadas como Netflix" → Amazon Personalize.',
            '"Gerar código automaticamente" → Amazon Q Developer (ex-CodeWhisperer).',
            '"Assistente empresarial conectado a dados internos" → Amazon Q Business.'
          ],
          traps: [
            'Amazon Q Business e Q Developer são produtos distintos: Q Business é para usuários finais; Q Developer é para devs.',
            'Personalize requer dados de eventos (cliques, compras) para treinar; não funciona sem dados históricos.'
          ],
          tips: [
            'PartyRock: playground público gratuito para testar aplicações GenAI sem conta AWS.',
            'Para o AIF, a prova testa se você consegue associar caso de uso ao serviço AWS correto.'
          ]
        },
        flashcards: []
      },
      { id: 13, title: 'Serviços de IA da AWS — Detalhado', icon: '🔎', estimatedTime: '2h',
        topics: ['Amazon Rekognition: faces, objetos, moderação de conteúdo', 'Amazon Comprehend: entidades, sentimento, PII, tópicos', 'Amazon Textract: OCR avançado com estrutura', 'Amazon Transcribe: STT, diarização, vocabulário custom', 'Amazon Polly: TTS, neural voices, SSML', 'Amazon Lex: NLU, intents, slots, fulfillment', 'Amazon Kendra: busca semântica empresarial', 'Amazon Personalize: recomendações em tempo real'],
        resources: { readme: 'https://github.com/Thiago-code-lab/aws-certified-ai-practitioner-brasil/blob/main/13-Servicos-de-IA-da-AWS/README.md', localPath: 'conteudo/aws-certified-ai-practitioner-brasil-main/aws-certified-ai-practitioner-brasil-main/13-Servicos-de-IA-da-AWS/README.md' },
        content: {
          focus: 'Detalhamento de cada serviço IA da AWS: capacidades específicas e diferenciais.',
          keyPoints: [
            'Rekognition: detecção de faces, objetos, celebridades, texto em imagem, moderação de conteúdo.',
            'Comprehend: sentimento (Positivo/Negativo/Neutro), entidades (PERSON, LOCATION), PII detection, tópicos.',
            'Transcribe: STT com diarização (quem falou o quê), vocabulário custom para jargão específico.',
            'Lex: NLU com intents (intenção), slots (entidades), fulfillment (Lambda ou código de bot).'
          ],
          examSignals: [
            '"Detectar quem está falando em ligação" → Transcribe (diarização).',
            '"Identificar informação sensível em texto" → Comprehend (PII detection).',
            '"Bot com intenção natural" → Amazon Lex.',
            '"Recomendação personalizada em tempo real" → Amazon Personalize.'
          ],
          traps: [
            'Comprehend é NLP estruturado (regras). Não gera texto (isso é Bedrock/genAI).',
            'Lex usa NLU para entender intenção; Bedrock/FMs podem ser usados para resposta mais sofisticada.'
          ],
          tips: [
            'Polly SSML: formatação de voz (pausas, ênfase, soletrar) via tags XML.',
            'Kendra é busca semântica em documentos corporativos; diferente de pesquisa web.'
          ]
        },
        flashcards: [
          { q: 'Qual serviço AWS identifica o idioma de um texto?', a: 'Amazon Comprehend — detecta idioma, entidades nomeadas, sentimento e PII.' }
        ]
      },
      { id: 14, title: 'Integração com Aplicações', icon: '🔗', estimatedTime: '1.5h',
        topics: ['Integrar Bedrock via SDK (Python boto3)', 'Bedrock Runtime API', 'SageMaker Endpoints em aplicações web', 'Amazon Q Business (assistente empresarial)', 'Amazon Q Developer (coding assistant)', 'AWS PartyRock (GenAI playground)'],
        resources: { readme: 'https://github.com/Thiago-code-lab/aws-certified-ai-practitioner-brasil/blob/main/14-Integracao-com-Aplicacoes/README.md', localPath: 'conteudo/aws-certified-ai-practitioner-brasil-main/aws-certified-ai-practitioner-brasil-main/14-Integracao-com-Aplicacoes/README.md' },
        content: {
          focus: 'Integrar serviços IA em aplicações via SDK e APIs AWS.',
          keyPoints: [
            'Bedrock Runtime API: InvokeModel (sync) e InvokeModelWithResponseStream (streaming).',
            'Amazon Q Business: assistente AI com dados corporativos via conectores (S3, Salesforce, etc.).',
            'Amazon Q Developer: sugestões de código, debug, segurança e documentação em IDEs.',
            'SageMaker Endpoint: REST API do modelo; use boto3 invoke_endpoint para chamar.'
          ],
          examSignals: [
            '"Assistente que responde com dados de SharePoint" → Amazon Q Business.',
            '"Sugestões de código em Python no VS Code" → Amazon Q Developer.',
            '"Integrar Bedrock em aplicação Python" → boto3 bedrock-runtime.'
          ],
          traps: [
            'Q Business é para usuários de negócio (chat com dados corporativos). Q Developer é para devs.',
            'Bedrock Converse API: interface unificada para múltiplos modelos (preferível ao InvokeModel).'
          ],
          tips: [
            'Streaming: InvokeModelWithResponseStream retorna tokens enquanto o FM gera (UX melhor).',
            'PartyRock: teste GenAI sem conta AWS. Ótimo para aprender e demonstrar.'
          ]
        },
        flashcards: []
      },
      { id: 15, title: 'Boas Práticas e Otimização', icon: '🏆', estimatedTime: '1.5h',
        topics: ['Otimização de custos em inferência de ML', 'Escolha do modelo certo: custo vs performance', 'Monitoramento de modelos em produção (data drift, concept drift)', 'A/B testing de modelos', 'Multi-model endpoints no SageMaker', 'Compressão de modelos: quantização, pruning, distilação'],
        resources: { readme: 'https://github.com/Thiago-code-lab/aws-certified-ai-practitioner-brasil/blob/main/15-Boas-Praticas-e-Otimizacao/README.md', localPath: 'conteudo/aws-certified-ai-practitioner-brasil-main/aws-certified-ai-practitioner-brasil-main/15-Boas-Praticas-e-Otimizacao/README.md' },
        content: {
          focus: 'Otimização de modelos em produção: custo, drift e escolha do modelo certo.',
          keyPoints: [
            'Data drift: distribuição dos dados de entrada muda (ex: padrões sazonais). Concept drift: relação input-output muda.',
            'Model Monitor: detecta drift comparando estatísticas de produção com baseline.',
            'Quantização: reduz precisão (FP32→INT8) para inferir mais rápido e barato. Pruning: remove pesos desnecessários.',
            'A/B testing de modelos: direciona parte do tráfego para novo modelo via endpoint variants.'
          ],
          examSignals: [
            '"Detectar quando modelo perde performance" → SageMaker Model Monitor.',
            '"Reduzir latencia de inferência" → Quantização ou inferencia serverless.',
            '"Testar novo modelo com risco controlado" → A/B testing via SageMaker endpoint variants.',
            '"Hospedar muitos modelos com baixo custo" → Multi-model endpoints.'
          ],
          traps: [
            'Concept drift é mais sutil que data drift e mais difícil de detectar (a entrada parece normal).',
            'Quantização reduz tamanho/velocidade mas pode reduzir precisão.'
          ],
          tips: [
            'Destilação de modelos: treina um modelo menor (student) para imitar o maior (teacher).',
            'Escolha do modelo: comece com o menor capaz de resolver o problema — menor custo, menor latência.'
          ]
        },
        flashcards: []
      },
      { id: 16, title: 'Simulados e Questões', icon: '📝', estimatedTime: '3h',
        topics: ['Simulado completo AIF-C01', 'Domínios: Fundamentals of AI and ML (20%), Fundamentals of Generative AI (24%), Applications of Foundation Models (28%), Guidelines for Responsible AI (14%), Security, Compliance and Governance for AI (14%)', 'Questões comentadas'],
        resources: { readme: 'https://github.com/Thiago-code-lab/aws-certified-ai-practitioner-brasil/blob/main/16-Simulados-e-Questoes/README.md', localPath: 'conteudo/aws-certified-ai-practitioner-brasil-main/aws-certified-ai-practitioner-brasil-main/16-Simulados-e-Questoes/README.md' },
        flashcards: [
          { q: 'Quantas questões tem o exame AIF-C01?', a: '65 questões, 120 minutos. Score de aprovação: 700/1000.' }
        ]
      },
      { id: 17, title: 'Glossário IA/ML', icon: '📖', estimatedTime: '1h',
        topics: ['Termos essenciais de IA/ML/GenAI', 'Acrônimos: LLM, FM, RAG, RL, NLP, CV', 'Cheatsheet de serviços IA da AWS'],
        resources: { readme: 'https://github.com/Thiago-code-lab/aws-certified-ai-practitioner-brasil/blob/main/17-Glossario/README.md', localPath: 'conteudo/aws-certified-ai-practitioner-brasil-main/aws-certified-ai-practitioner-brasil-main/17-Glossario/README.md' },
        flashcards: []
      },
      { id: 18, title: 'Recursos e Links Oficiais', icon: '🔗', estimatedTime: '0.5h',
        topics: ['AWS Skill Builder para IA/ML', 'Whitepapers de IA responsável', 'AWS Machine Learning Blog', 'Exam Guide oficial AIF-C01'],
        resources: { readme: 'https://github.com/Thiago-code-lab/aws-certified-ai-practitioner-brasil/blob/main/18-Recursos-e-Links/README.md', localPath: 'conteudo/aws-certified-ai-practitioner-brasil-main/aws-certified-ai-practitioner-brasil-main/18-Recursos-e-Links/README.md' },
        flashcards: []
      }
    ]
  },

  // ──────────────────────────────────────────────────────────
  // ORACLE OCI FOUNDATIONS ASSOCIATE
  // ──────────────────────────────────────────────────────────
  'oci-foundations': {
    id: 'oci-foundations',
    provider: 'oracle',
    code: '1Z0-1085-24',
    name: 'Oracle Cloud Infrastructure Foundations Associate',
    shortName: 'OCI Foundations',
    level: 'Associate',
    emoji: '🏛️',
    duration: '3 semanas',
    hoursPerDay: '1–2h/dia',
    totalModules: 10,
    sourceUrl: 'https://app.notion.com/p/Oracle-Cloud-Infrastructure-Foundations-AssociateOCI-Foundations-32f9d99c988080c7b8a7cc75a210fefc',
    description: 'Fundamentos da Oracle Cloud Infrastructure: compute, storage, networking, security, database e gerenciamento de identidade.',
    roadmap: [
      { week: 1, title: 'Fundamentos OCI, IAM e Computação', modules: [1, 2, 3, 4] },
      { week: 2, title: 'Storage, Rede e Banco de Dados', modules: [5, 6, 7] },
      { week: 3, title: 'Segurança, Governança e Revisão', modules: [8, 9, 10] }
    ],
    modules: [
      { id: 1, title: 'Introdução ao OCI', icon: '🌐', estimatedTime: '2h',
        topics: [
          'O que é Oracle Cloud Infrastructure (OCI)',
          'Modelo de responsabilidade compartilhada OCI',
          'Regiões OCI e Availability Domains (ADs)',
          'Fault Domains dentro de um AD',
          'OCI vs AWS vs Azure: diferenças arquiteturais',
          'Oracle Cloud Free Tier: Always Free resources',
          'Preços e modelos de consumo OCI (PAYG, Annual Flex)',
          'OCI Console, CLI e SDKs'
        ],
        resources: { readme: 'https://app.notion.com/p/Oracle-Cloud-Infrastructure-Foundations-AssociateOCI-Foundations-32f9d99c988080c7b8a7cc75a210fefc' },
        flashcards: [
          { q: 'O que é um Availability Domain (AD) no OCI?', a: 'Um ou mais data centers dentro de uma região OCI com energia, rede e cooling independentes.' },
          { q: 'O que é um Fault Domain no OCI?', a: 'Agrupamento de hardware dentro de um AD que protege contra falhas de hardware ou de manutenção.' },
          { q: 'Quantos Fault Domains existem por AD no OCI?', a: 'Três Fault Domains por Availability Domain.' }
        ]
      },
      { id: 2, title: 'OCI IAM — Identidade e Acesso', icon: '🔑', estimatedTime: '2.5h',
        topics: [
          'Tenancy e Compartments (hierarquia)',
          'Users, Groups e Dynamic Groups',
          'Políticas IAM OCI: sintaxe e hierarquia',
          'Verbs: inspect, read, use, manage',
          'Resources e subject patterns',
          'Identity Domains (novo modelo de IAM)',
          'MFA no OCI',
          'Federation com SAML 2.0 e IDCS',
          'Instance Principal e Resource Principal',
          'Tags: Defined Tags e Freeform Tags'
        ],
        resources: { readme: 'https://app.notion.com/p/Oracle-Cloud-Infrastructure-Foundations-AssociateOCI-Foundations-32f9d99c988080c7b8a7cc75a210fefc' },
        flashcards: [
          { q: 'O que são Compartments no OCI?', a: 'Contêineres lógicos para organizar e isolar recursos OCI. Permitem gerenciar acesso e custos por projeto/equipe.' },
          { q: 'Quais são os 4 verbos de permissão no OCI IAM?', a: 'inspect (listar), read (visualizar), use (usar sem modificar), manage (controle total).' },
          { q: 'O que é um Dynamic Group no OCI?', a: 'Grupo de resources OCI (ex: instâncias) que podem receber políticas de IAM, sem precisar de usuário/senha.' }
        ]
      },
      { id: 3, title: 'OCI Compute', icon: '🖥️', estimatedTime: '2.5h',
        topics: [
          'Instâncias Compute: VM e Bare Metal',
          'Shapes: Standard, DensIO, GPU, HPC',
          'Flexible Shapes: OCPU e memória customizáveis',
          'Preemptible Instances (equivalente ao Spot)',
          'Custom Images e Boot Volume',
          'Instance Pools e Auto Scaling',
          'Cloud Shell',
          'Oracle Container Engine for Kubernetes (OKE)',
          'Oracle Functions (serverless)',
          'Dedicated VM Hosts'
        ],
        resources: { readme: 'https://app.notion.com/p/Oracle-Cloud-Infrastructure-Foundations-AssociateOCI-Foundations-32f9d99c988080c7b8a7cc75a210fefc' },
        flashcards: [
          { q: 'O que é uma Preemptible Instance no OCI?', a: 'Instância mais barata que pode ser reclamada pela Oracle com 30 segundos de aviso. Equivalente ao Spot na AWS.' },
          { q: 'O que é um Flexible Shape no OCI?', a: 'Shape onde você escolhe a quantidade de OCPUs e memória de forma independente.' },
          { q: 'O que é OKE?', a: 'Oracle Container Engine for Kubernetes — serviço gerenciado de Kubernetes no OCI.' }
        ]
      },
      { id: 4, title: 'OCI Networking', icon: '🌐', estimatedTime: '3h',
        topics: [
          'Virtual Cloud Network (VCN)',
          'Subnets: Públicas e Privadas, Regionais',
          'Internet Gateway',
          'NAT Gateway',
          'Service Gateway (acesso a serviços OCI sem internet)',
          'Dynamic Routing Gateway (DRG) — hub de conectividade',
          'Local Peering Gateway (LPG) e Remote Peering',
          'FastConnect (equivalente ao Direct Connect)',
          'VPN Site-to-Site e Client VPN',
          'Security Lists vs Network Security Groups (NSGs)',
          'Load Balancer OCI: Flexible e Network LB'
        ],
        resources: { readme: 'https://app.notion.com/p/Oracle-Cloud-Infrastructure-Foundations-AssociateOCI-Foundations-32f9d99c988080c7b8a7cc75a210fefc' },
        flashcards: [
          { q: 'Diferença entre Security List e Network Security Group (NSG) no OCI?', a: 'Security List: aplica-se a toda a subnet. NSG: aplica-se a recursos específicos (VNICs), mais granular.' },
          { q: 'O que é o Service Gateway no OCI?', a: 'Permite que recursos em subnets privadas acessem serviços Oracle (Object Storage, etc.) sem passar pela internet.' },
          { q: 'O que é o DRG (Dynamic Routing Gateway)?', a: 'Hub central de conectividade no OCI para conectar VCNs, FastConnect, VPN e outras redes.' }
        ]
      },
      { id: 5, title: 'OCI Storage', icon: '💾', estimatedTime: '2.5h',
        topics: [
          'Block Volume: volume de boot e volumes adicionais, performance tiers',
          'Object Storage: namespaces, buckets, objetos',
          'Object Storage Tiers: Standard, Infrequent Access, Archive',
          'File Storage (NFS compartilhado)',
          'Archive Storage (equivalente ao Glacier)',
          'Data Transfer Service (offline migration)',
          'Storage Gateway',
          'Ciclo de vida de objetos no Object Storage',
          'Versionamento e retenção no Object Storage'
        ],
        resources: { readme: 'https://app.notion.com/p/Oracle-Cloud-Infrastructure-Foundations-AssociateOCI-Foundations-32f9d99c988080c7b8a7cc75a210fefc' },
        flashcards: [
          { q: 'Diferença entre Block Volume e File Storage no OCI?', a: 'Block Volume: disco anexado a uma instância (como HD). File Storage: sistema de arquivos NFS compartilhado por múltiplas instâncias.' },
          { q: 'Qual tier do Object Storage OCI é equivalente ao S3 Glacier?', a: 'Archive Storage — para dados raramente acessados, restauração em horas.' }
        ]
      },
      { id: 6, title: 'OCI Database', icon: '🗄️', estimatedTime: '2.5h',
        topics: [
          'Oracle Base Database Service (VM, BM, ExaDB)',
          'Autonomous Database: ATP, ADW, JSON',
          'Autonomous Transaction Processing (ATP)',
          'Autonomous Data Warehouse (ADW)',
          'MySQL HeatWave (MySQL + Analytics + ML)',
          'NoSQL Database Cloud Service',
          'Data Guard: standby, switchover, failover',
          'Backup automático e manual no OCI DB',
          'Exadata Cloud Service'
        ],
        resources: { readme: 'https://app.notion.com/p/Oracle-Cloud-Infrastructure-Foundations-AssociateOCI-Foundations-32f9d99c988080c7b8a7cc75a210fefc' },
        flashcards: [
          { q: 'O que é o Autonomous Database no OCI?', a: 'Banco de dados Oracle totalmente autogerenciado: auto-provisioning, auto-scaling, auto-patching, auto-backup.' },
          { q: 'Diferença entre ATP e ADW?', a: 'ATP (Autonomous Transaction Processing): workloads OLTP. ADW (Autonomous Data Warehouse): workloads analíticos.' },
          { q: 'O que é MySQL HeatWave?', a: 'MySQL gerenciado no OCI com HeatWave Engine para queries analíticas em memória sem mover dados.' }
        ]
      },
      { id: 7, title: 'OCI Observability e Gerenciamento', icon: '📊', estimatedTime: '2h',
        topics: [
          'OCI Monitoring: métricas, alarmes, namespaces',
          'OCI Logging: logs de serviço, audit logs, custom logs',
          'OCI Notifications (ONS)',
          'OCI Events',
          'Logging Analytics',
          'Application Performance Monitoring (APM)',
          'OCI Ops Insights',
          'Database Management Service',
          'Stack Monitoring'
        ],
        resources: { readme: 'https://app.notion.com/p/Oracle-Cloud-Infrastructure-Foundations-AssociateOCI-Foundations-32f9d99c988080c7b8a7cc75a210fefc' },
        flashcards: [
          { q: 'O que é o OCI Audit Service?', a: 'Registra todas as chamadas de API na tenancy OCI (quem fez o quê e quando). Equivalente ao CloudTrail.' }
        ]
      },
      { id: 8, title: 'OCI Security', icon: '🔐', estimatedTime: '2h',
        topics: [
          'Cloud Guard: detecção e correção de problemas de segurança',
          'Security Zones (políticas obrigatórias)',
          'OCI Vault (gerenciamento de chaves e secrets)',
          'Web Application Firewall (WAF)',
          'DDoS Protection',
          'Vulnerability Scanning',
          'OS Management Service',
          'Bastion Service (acesso seguro sem IP público)',
          'OCI Certificate Service'
        ],
        resources: { readme: 'https://app.notion.com/p/Oracle-Cloud-Infrastructure-Foundations-AssociateOCI-Foundations-32f9d99c988080c7b8a7cc75a210fefc' },
        flashcards: [
          { q: 'O que é OCI Cloud Guard?', a: 'Serviço de segurança que detecta e corrige automaticamente configurações incorretas e ameaças de segurança.' },
          { q: 'O que é Security Zone no OCI?', a: 'Compartment com políticas de segurança obrigatórias que não podem ser violadas (ex: sem recursos públicos).' }
        ]
      },
      { id: 9, title: 'OCI Preços, Suporte e Arquitetura', icon: '💰', estimatedTime: '1.5h',
        topics: [
          'Modelo de preços OCI: Pay-as-you-go vs Annual Universal Credits',
          'OCI Free Tier: Always Free e 30-day trial',
          'Cost Management: Budget Alerts, Usage Reports',
          'Planos de suporte: Basic, Premier',
          'Oracle Support Rewards',
          'OCI Architecture Center e Reference Architectures',
          'Oracle Cloud Adoption Framework'
        ],
        resources: { readme: 'https://app.notion.com/p/Oracle-Cloud-Infrastructure-Foundations-AssociateOCI-Foundations-32f9d99c988080c7b8a7cc75a210fefc' },
        flashcards: [
          { q: 'O que são Oracle Cloud Free Tier Always Free resources?', a: 'Recursos OCI que são sempre gratuitos (sem expiração): 2 VMs AMD, 200GB Block Storage, Object Storage, ATP e ADW até certos limites.' }
        ]
      },
      { id: 10, title: 'Simulados OCI Foundations', icon: '📝', estimatedTime: '3h',
        topics: [
          'Simulado completo 1Z0-1085-24',
          'Domínios: OCI Introduction (8%), IAM (17%), Compute (17%), Network (19%), Storage (13%), Database (18%), Observability (8%)',
          'Questões commentadas',
          'Estratégias de prova'
        ],
        resources: { readme: 'https://app.notion.com/p/Oracle-Cloud-Infrastructure-Foundations-AssociateOCI-Foundations-32f9d99c988080c7b8a7cc75a210fefc' },
        flashcards: [
          { q: 'Quantas questões tem o exame OCI Foundations?', a: '60 questões, 90 minutos. Score de aprovação: 68%.' }
        ]
      }
    ]
  },

  // ──────────────────────────────────────────────────────────
  // ORACLE OCI AI FOUNDATIONS ASSOCIATE
  // ──────────────────────────────────────────────────────────
  'oci-ai-foundations': {
    id: 'oci-ai-foundations',
    provider: 'oracle',
    code: '1Z0-1122-24',
    name: 'Oracle Cloud Infrastructure AI Foundations Associate',
    shortName: 'OCI AI Foundations',
    level: 'Associate',
    emoji: '🧠',
    duration: '3 semanas',
    hoursPerDay: '1–2h/dia',
    totalModules: 10,
    sourceUrl: 'https://app.notion.com/p/Oracle-Cloud-Infrastructure-IA-Foundations-Associate-3369d99c98808003bd71e1b52dea5c4b',
    description: 'Fundamentos de IA e Machine Learning no Oracle Cloud: OCI AI Services, Oracle Digital Assistant, OCI Data Science e Generative AI Service.',
    roadmap: [
      { week: 1, title: 'Fundamentos de IA/ML e OCI AI Services', modules: [1, 2, 3, 4] },
      { week: 2, title: 'Generative AI, Data Science e Language AI', modules: [5, 6, 7] },
      { week: 3, title: 'Vision, Speech e Revisão Final', modules: [8, 9, 10] }
    ],
    modules: [
      { id: 1, title: 'Fundamentos de IA e ML — OCI', icon: '🧠', estimatedTime: '2h',
        topics: [
          'Conceitos de IA, ML e Deep Learning no contexto OCI',
          'Tipos de ML: Supervised, Unsupervised, Reinforcement Learning',
          'Foundation Models e Large Language Models (LLMs)',
          'IA Generativa: transformers e atenção',
          'Casos de uso de IA no mercado',
          'Oracle AI Strategy',
          'OCI AI Portfolio overview'
        ],
        resources: { readme: 'https://app.notion.com/p/Oracle-Cloud-Infrastructure-IA-Foundations-Associate-3369d99c98808003bd71e1b52dea5c4b' },
        flashcards: [
          { q: 'Qual é a estratégia de IA da Oracle?', a: 'AI embedded in applications, AI infrastructure (GPU), AI services prontos e suporte a modelos open-source.' },
          { q: 'O que é o OCI Generative AI Service?', a: 'Serviço gerenciado da Oracle para acessar e fazer fine-tuning de LLMs (Cohere Command, Llama, etc.) no OCI.' }
        ]
      },
      { id: 2, title: 'OCI AI Services — Visão Geral', icon: '🛠️', estimatedTime: '2h',
        topics: [
          'OCI AI Services: Language, Vision, Speech, Anomaly Detection, Forecasting, Document Understanding',
          'OCI Generative AI Service',
          'OCI Digital Assistant',
          'OCI Data Science',
          'Oracle Database 23ai e AI integrado',
          'AI infrastructure: GPU shapes, RDMA networking'
        ],
        resources: { readme: 'https://app.notion.com/p/Oracle-Cloud-Infrastructure-IA-Foundations-Associate-3369d99c98808003bd71e1b52dea5c4b' },
        flashcards: [
          { q: 'O que é OCI Anomaly Detection?', a: 'Serviço gerenciado que detecta anomalias em séries temporais de dados usando ML sem precisar escrever código.' }
        ]
      },
      { id: 3, title: 'OCI Language AI', icon: '💬', estimatedTime: '2h',
        topics: [
          'OCI Language Service: processamento de texto em escala',
          'Funcionalidades: detecção de idioma, sentiment analysis, NER, key phrase extraction',
          'Aspect-based Sentiment Analysis',
          'Text Classification customizada',
          'Named Entity Recognition (NER) customizada',
          'PII Detection e mascaramento',
          'Batch e real-time processing',
          'Casos de uso: análise de reviews, moderação de conteúdo'
        ],
        resources: { readme: 'https://app.notion.com/p/Oracle-Cloud-Infrastructure-IA-Foundations-Associate-3369d99c98808003bd71e1b52dea5c4b' },
        flashcards: [
          { q: 'O que é Aspect-based Sentiment Analysis no OCI Language?', a: 'Análise de sentimento em nível de aspecto específico (ex: "a câmera é ótima, mas a bateria é péssima").' }
        ]
      },
      { id: 4, title: 'OCI Document Understanding', icon: '📄', estimatedTime: '1.5h',
        topics: [
          'Extração de texto de documentos (OCR)',
          'Classificação de documentos',
          'Extração de tabelas e formulários',
          'Key-value extraction',
          'Modelos pré-treinados e customizados',
          'Integração com Object Storage'
        ],
        resources: { readme: 'https://app.notion.com/p/Oracle-Cloud-Infrastructure-IA-Foundations-Associate-3369d99c98808003bd71e1b52dea5c4b' },
        flashcards: [
          { q: 'O que é OCI Document Understanding?', a: 'Serviço de IA que extrai texto, tabelas, chaves-valores e classifica documentos como faturas, recibos e formulários.' }
        ]
      },
      { id: 5, title: 'OCI Generative AI Service', icon: '✨', estimatedTime: '3h',
        topics: [
          'Modelos disponíveis: Cohere Command R+, Llama 3, meta models',
          'Playground de Generative AI no OCI',
          'Dedicated AI Cluster vs Shared AI Cluster',
          'Fine-tuning de modelos no OCI GenAI',
          'RAG com OCI GenAI + OCI OpenSearch',
          'OCI Generative AI Agents',
          'Embeddings com Cohere Embed',
          'Parâmetros de inferência',
          'Segurança e privacidade no GenAI OCI'
        ],
        resources: { readme: 'https://app.notion.com/p/Oracle-Cloud-Infrastructure-IA-Foundations-Associate-3369d99c98808003bd71e1b52dea5c4b' },
        flashcards: [
          { q: 'O que é um Dedicated AI Cluster no OCI?', a: 'Cluster de GPUs exclusivo para o seu workload de GenAI, sem compartilhamento com outros clientes.' },
          { q: 'Qual é a principal diferença do OCI GenAI para o Azure OpenAI?', a: 'OCI GenAI oferece modelos de múltiplos provedores (Cohere, Meta), opção de cluster dedicado e integração com serviços Oracle.' }
        ]
      },
      { id: 6, title: 'OCI Data Science', icon: '🔬', estimatedTime: '2.5h',
        topics: [
          'Notebooks gerenciados (JupyterLab)',
          'Conda environments e aceleração de GPU',
          'Jobs: treinamento batch de modelos',
          'Model Catalog e Model Store',
          'Model Deployment (endpoints)',
          'ML Pipelines',
          'Data Science SDK (Python)',
          'Integração com Object Storage, Vault, IAM',
          'OCI Data Science e AutoML'
        ],
        resources: { readme: 'https://app.notion.com/p/Oracle-Cloud-Infrastructure-IA-Foundations-Associate-3369d99c98808003bd71e1b52dea5c4b' },
        flashcards: [
          { q: 'O que é o Model Catalog no OCI Data Science?', a: 'Repositório gerenciado para versionar, compartilhar e fazer deploy de modelos de ML.' }
        ]
      },
      { id: 7, title: 'OCI Digital Assistant', icon: '🤖', estimatedTime: '2h',
        topics: [
          'Oracle Digital Assistant (ODA): chatbots e voice assistants',
          'Skills: bots especializados em uma tarefa',
          'Intents, Utterances e Entities',
          'Dialog Flow: YAML e Visual Flow Designer',
          'Built-in NLP da Oracle',
          'Digital Assistant Skills Marketplace',
          'Integração com canais: WhatsApp, Slack, MS Teams',
          'ODA e LLMs: Generative AI integrado ao Digital Assistant'
        ],
        resources: { readme: 'https://app.notion.com/p/Oracle-Cloud-Infrastructure-IA-Foundations-Associate-3369d99c98808003bd71e1b52dea5c4b' },
        flashcards: [
          { q: 'O que é um Skill no Oracle Digital Assistant?', a: 'Um bot especializado em uma tarefa específica (ex: RH bot, IT helpdesk bot) que pode ser combinado no Digital Assistant.' }
        ]
      },
      { id: 8, title: 'OCI Vision AI', icon: '👁️', estimatedTime: '2h',
        topics: [
          'OCI Vision: análise de imagens e vídeos',
          'Image Classification',
          'Object Detection',
          'Text Detection (OCR em imagens)',
          'Face Detection',
          'Modelos pré-treinados vs customizados',
          'Batch Image Analysis com Object Storage',
          'Vision API: REST e SDK'
        ],
        resources: { readme: 'https://app.notion.com/p/Oracle-Cloud-Infrastructure-IA-Foundations-Associate-3369d99c98808003bd71e1b52dea5c4b' },
        flashcards: [
          { q: 'O que é OCI Vision?', a: 'Serviço de IA de visão computacional que analisa imagens: classificação, detecção de objetos, OCR e detecção de rostos.' }
        ]
      },
      { id: 9, title: 'OCI Speech AI e Anomaly Detection', icon: '🎙️', estimatedTime: '1.5h',
        topics: [
          'OCI Speech: transcrição de áudio (ASR)',
          'Speech-to-Text em batch e real-time',
          'Customização com vocabulários específicos',
          'Diarização: identificar quem falou',
          'OCI Anomaly Detection: séries temporais',
          'MSET (Multivariate State Estimation Technique)',
          'Treinamento de modelo de anomalia customizado',
          'OCI Forecasting Service'
        ],
        resources: { readme: 'https://app.notion.com/p/Oracle-Cloud-Infrastructure-IA-Foundations-Associate-3369d99c98808003bd71e1b52dea5c4b' },
        flashcards: [
          { q: 'O que é OCI Speech?', a: 'Serviço de Speech-to-Text que transcreve áudio em texto com suporte a múltiplos idiomas e diarização.' }
        ]
      },
      { id: 10, title: 'Simulados OCI AI Foundations', icon: '📝', estimatedTime: '3h',
        topics: [
          'Simulado completo 1Z0-1122-24',
          'Domínios: AI Concepts (18%), OCI AI Services (28%), Generative AI (22%), Data Science (16%), Digital Assistant (16%)',
          'Questões comentadas por domínio',
          'Estratégias de aprovação'
        ],
        resources: { readme: 'https://app.notion.com/p/Oracle-Cloud-Infrastructure-IA-Foundations-Associate-3369d99c98808003bd71e1b52dea5c4b' },
        flashcards: [
          { q: 'Quantas questões tem o exame OCI AI Foundations?', a: '60 questões, 90 minutos. Score de aprovação: 68%.' }
        ]
      }
    ]
  }

};

// Helper functions
function getCertById(id) {
  return CERTIFICATIONS[id] || null;
}

function getCertsByProvider(provider) {
  return Object.values(CERTIFICATIONS).filter(c => c.provider === provider);
}

function getAllCerts() {
  return Object.values(CERTIFICATIONS);
}

// Populate m.week based on roadmap
Object.values(CERTIFICATIONS).forEach(cert => {
  if (cert.roadmap && cert.modules) {
    cert.roadmap.forEach(r => {
      r.modules.forEach(mid => {
        const mod = cert.modules.find(m => m.id === mid);
        if (mod) mod.week = r.week;
      });
    });
  }
});

window.CERTIFICATIONS = CERTIFICATIONS;
