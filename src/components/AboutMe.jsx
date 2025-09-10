import { asset } from '../utils/asset'

export default function AboutMe() {
  return (
    <div className="grid md:grid-cols-2 gap-10 items-start">
      <div className="card p-4 md:p-6">
        <img src={asset('logoalto.jpg')} alt="About" className="rounded-lg" />
      </div>
      <div className="space-y-4">
        <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-dark-50/20 text-sm">Sobre mim</span>
        <h2 className="section-title">Curioso(a) sobre mim? O'que você vai encontrar:</h2>
        <p className="text-gray-600 dark:text-dark-200">Atualmente curso o ensino médio na Fundação Bradesco e busco meu primeiro espaço no mercado de trabalho como Jovem Aprendiz. Já atuei em cantina escolar, realizando atendimento direto ao público, reposição de produtos e organização do fluxo de caixa, desenvolvendo responsabilidade e habilidade no trato com pessoas. Também tive experiência em estética automotiva, o que contribuiu para meu senso de organização, disciplina e atenção aos detalhes.</p>
        <p className="text-gray-600 dark:text-dark-200">Sou uma pessoa comprometida, comunicativa e aberta a aprender novas funções. Tenho interesse em ingressar em áreas administrativas, onde possa expandir meus conhecimentos e construir uma base sólida para meu desenvolvimento profissional.</p>
        <ul className="grid grid-cols-2 gap-2 text-sm list-disc pl-5">
          <li>Estudante Fundação Bradesco</li>
          <li>Aprendiz Rápido</li>
          <li>Comunicativo</li>
          <li>Responsável e Pontual</li>
          <li>Atento aos Detalhes</li>
          <li>Proativo</li>
        </ul>
      </div>
    </div>
  )
}
