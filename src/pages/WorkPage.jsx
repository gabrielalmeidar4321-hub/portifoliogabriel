import Header from '../components/Header'
import Footer from '../components/Footer'
import Slider from 'react-slick'
import { asset } from '../utils/asset'

const projects = [
  {
    title: 'calculadora em C',
    description:
      ' Descrição calculadora',
    images: [asset('calculadora.png'), asset('calculadora.png')],
    techs: ['C', 'Linguagem C', 'Linguagem de programação', 'Logica de programação'],
    link: 'https://example.com'
  },
  {
    title: 'Sensor de Presença com Ultrassônico e Buzzer',
    description:
      'Este circuito utiliza o módulo HC-SR04, um sensor ultrassônico capaz de medir distâncias a partir do tempo de resposta de ondas sonoras, e um buzzer que emite um alerta sonoro quando um objeto é detectado dentro de uma distância configurada no código do Arduino. O microcontrolador processa o tempo de ida e volta do pulso sonoro, calcula a distância e, caso seja menor que o limite estabelecido, aciona o alarme.\n\nAplicação: Muito utilizado em sistemas de segurança (alarmar presença em um ambiente restrito), tecnologia automotiva (sensores de estacionamento), robótica (desvio de obstáculos em robôs móveis) e até mesmo em automação residencial (ativação de luzes ou travas automáticas quando alguém se aproxima).',
    images: [asset('sensorpresenca.png'), asset('sensorpresenca.png')],
    techs: ['Arduino', 'HC-SR04', 'Buzzer', 'Eletrônica', 'Automação'],
    link: 'https://example.com'
  },
  {
    title: 'Algoritimo de Media em linguagem C',
    description:
      'explicação ',
    images: [asset('media.png'), asset('media.png')],
    techs: ['C', 'Linguagem C', 'Linguagem de programação', 'Logica de programação'],
    link: 'https://example.com'
  },
  {
    title: 'Algoritimo Par Impar em linguagem C',
    description:
      'Descrição algoritimo',
    images: [asset('mensagem.png'), asset('mensagem.png')],
    techs: ['C', 'Linguagem C', 'Linguagem de programação', 'Logica de programação'],
    link: 'https://example.com'
  },
  {
    title: 'Controle de Servo Motor com Potenciômetro',
    description:
      'Neste circuito, o potenciômetro funciona como um divisor de tensão que fornece valores analógicos lidos pelo Arduino. Esses valores são convertidos em sinais PWM (Pulse Width Modulation), controlando o ângulo de rotação do servo motor. Assim, a posição do potenciômetro define diretamente a posição do eixo do servo.\n\nAplicação: Muito utilizado em protótipos de robôs com braços articulados, portas automáticas, catracas eletrônicas, sistemas de modelismo (aviões, barcos, carros) e em automação residencial para controle de válvulas ou persianas. É um conceito essencial em mecatrônica e controle de movimento.',
    images: [asset('catraca.png'), asset('catraca.png')],
    techs: ['Arduino', 'Servo Motor', 'Potenciômetro', 'PWM', 'Mecatrônica'],
    link: 'https://example.com'
  },
  {
    title: 'Piano com Arduino - Cirucuito e programação',
    description:
      'Descrição ',
    images: [asset('piano.png'), asset('piano.png')],
    techs: ['Arduino', 'C++', 'Jogos', 'Robotica'],
    link: 'https://example.com'
  },
    {
    title: 'Piano com Arduino - Cirucuito e programação',
    description:
      'Descrição ',
    images: [asset('semafaro.png'), asset('semafaro.png')],
    techs: ['Arduino', 'C++', 'Jogos', 'Robotica'],
    link: 'https://example.com'
  },
  {
    title: 'Acender led - Robotica básica',
    description:
      'Descrição ',
    images: [asset('acenderled.png'), asset('acenderled.png')],
    techs: ['Arduino', 'C++', 'Jogos', 'Robotica'],
    link: 'https://example.com'
  },
]

export default function WorkPage() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-dark-900 dark:text-dark-100">
      <Header />
      <main className="container-base py-10">
        <div className="text-center mb-6">
          <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-dark-50/20 text-sm">
            Work
          </span>
          <p className="mt-3 text-gray-600 dark:text-dark-200">
            All of my noteworthy projects:
          </p>
        </div>
        <div className="space-y-10">
          {projects.map((p) => (
            <div
              key={p.title}
              className="grid md:grid-cols-2 gap-6 card p-4 md:p-6"
            >
              <div>
                <Slider {...settings}>
                  {p.images.map((img, i) => (
                    <div key={i} className="px-2">
                      <img src={img} className="rounded-lg" />
                    </div>
                  ))}
                </Slider>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-gray-600 dark:text-dark-200 whitespace-pre-line">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.techs.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-dark-50/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm underline"
                  >
                    Visitar projeto <span>↗</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div> 
  )
}
