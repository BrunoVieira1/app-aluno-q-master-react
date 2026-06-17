export const NAV_ITEMS = [
  { path: '/painel', label: 'Painel', icon: 'grid' },
  { path: '/disciplinas', label: 'Disciplinas', icon: 'book' },
  { path: '/tutor-ia', label: 'Tutor IA', icon: 'bot' },
  { path: '/perfil', label: 'Perfil', icon: 'user' },
]

export const DASHBOARD_COURSES = [
  {
    title: 'Front-end',
    badge: 'Em progresso',
    description: 'Aula 2: Conceitos do desenvolvimento Front-end e GIT + Github.',
    progress: 65,
    action: 'Retomar estudo',
  },
  {
    title: 'UX Design',
    badge: 'Em progresso',
    description: 'Aula 3: Usabilidade.',
    progress: 25,
    action: 'Retomar estudo',
  },
]

export const DASHBOARD_STATS = [
  { label: 'Tempo de estudo', value: '12h 45m', detail: 'Esta semana', icon: 'clock' },
  { label: 'Tarefas pendentes', value: '2', detail: 'Próximo vencimento em 2 dias', icon: 'clipboard' },
  { label: 'Discussões com IA', value: '8', detail: 'Tópicos ativos', icon: 'chat' },
]

export const DISCIPLINES = [
  {
    title: 'Front-end',
    teacher: 'Prof. Marco Silva',
    badge: 'Em curso',
    progressLabel: 'Progresso',
    progress: 75,
    action: 'Acessar disciplina',
  },
  {
    title: 'UX Design',
    teacher: 'Dra. Ana Lúcia',
    badge: 'Próximo semestre',
    progressLabel: 'Disponibilidade',
    progress: 0,
    action: 'Acessar disciplina',
  },
]

export const PROFILE_FIELDS = [
  ['Nome Completo', 'João Silva'],
  ['Nome de Preferência', 'John'],
  ['Endereço de E-mail', 'joao.silva@satc.edu.br'],
  ['Matrícula / CPF', '***.***.***-89'],
  ['Número de Telefone', 'Não fornecido'],
]

export const AUTH_QUOTE = {
  text:
    'Educação não é o aprendizado de fatos, mas treinamento da mente para pensar.',
  author: 'Albert Einstein',
}

export const TUTOR_INITIAL_MESSAGES = [
  {
    id: 1,
    role: 'user',
    author: 'João Silva',
    content: 'Explique computação quântica',
  },
  {
    id: 2,
    role: 'assistant',
    author: 'Tutor IA',
    content:
      'Computação quântica usa qubits e explora superposição e emaranhamento para resolver certos problemas de forma diferente da computação clássica.',
  },
]