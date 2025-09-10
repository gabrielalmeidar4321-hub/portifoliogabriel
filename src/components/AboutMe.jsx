import { asset } from '../utils/asset'

export default function AboutMe() {
  return (
    <div className="grid md:grid-cols-2 gap-10 items-start">
      <div className="card p-4 md:p-6">
        <img src={asset('sobre mim img.jpg')} alt="About" className="rounded-lg" />
      </div>
      <div className="space-y-4">
        <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-dark-50/20 text-sm">Sobre mim</span>
        <h2 className="section-title">Curioso(a) sobre mim? O'que você vai encontrar:</h2>
        <p className="text-gray-600 dark:text-dark-200">Gabriel Rodrigues</p>
        <p className="text-gray-600 dark:text-dark-200">texto sobre mim</p>
        <ul className="grid grid-cols-2 gap-2 text-sm list-disc pl-5">
          <li>Estudante Fundação Bradesco</li>
          <li>Robotica</li>
        </ul>
      </div>
    </div>
  )
}
