import Header from '../components/Header'
import Footer from '../components/Footer'
import Slider from 'react-slick'
import { asset } from '../utils/asset'

const projects = [
  {
    title: 'Calculadora em C - Algoritmo',
    description:
      'Programa que lê dois números e executa soma, subtração, multiplicação e divisão, além de identificar qual número é maior ou se são iguais. Trabalhei com operações aritméticas, estruturas condicionais e formatação de saída para apresentar os resultados de forma clara ao usuário. Essa aplicação consolidou noções de fluxo de controle, boas práticas de código e tratamento de variáveis numéricas.',
    images: [asset('calculadora.png'), asset('calculadora.png')],
    techs: ['C', 'Linguagem C', 'Linguagem de programação', 'Logica de programação'],
    link: 'https://example.com'
  },
  {
    title: 'Sistema CRUD - APP Inventor',
    description:
      ' Aplicativo Android completo para gerenciar usuários (Create, Read, Update, Delete) com banco de dados local TinyDB. Criei telas de navegação (Home, Edição, Exclusão) no MIT App Inventor, utilizando blocos de programação para validar login, comparar senhas e atualizar dados armazenados. O sistema impede campos vazios e mostra alertas em cada etapa. Esse projeto exigiu design de interface responsiva, lógica de fluxo em blocos, persistência de dados offline e boas práticas de UX, preparando o app para uso real mesmo sem internet.',
    images: [asset('homecrud.png'), asset('codehome.png'), asset('logincrud.png'), asset('codelogin.png'), asset('cadastrocrud.png'), asset('codecadastro.png'), asset('deletarcrud.png'), asset('codedelete.png'), asset('editarcrud.png'), asset('codeeditar.png')],
    techs: ['C', 'Linguagem C', 'Linguagem de programação', 'Logica de programação'],
    link: 'https://example.com'
  },
  {
    title: 'Algoritimo de Media em linguagem C',
    description:
      'Aplicativo de console em C que recebe três notas, calcula a média aritmética e exibe o resultado com uma casa decimal. Durante o desenvolvimento, trabalhei com variáveis de ponto flutuante, entrada de dados via scanf, formatação de saída com printf e tratamento básico de cálculos. Esse exercício reforçou práticas de clareza de código, estrutura sequencial e manipulação de tipos numéricos. ',
    images: [asset('media.png'), asset('media.png')],
    techs: ['C', 'Linguagem C', 'Linguagem de programação', 'Logica de programação'],
    link: 'https://example.com'
  },
  {
    title: 'Algoritimo Par Impar em linguagem C',
    description:
      'Programa simples, porém essencial para consolidar conceitos de estrutura condicional. O código solicita um número inteiro, verifica se o resto da divisão por 2 é zero e informa se o número é par ou ímpar. O desafio foi criar um fluxo de leitura e escrita limpo e garantir a correta interpretação de variáveis, reforçando uso de operadores aritméticos e lógicos, bem como interação com o usuário.',
    images: [asset('parimpar.png'), asset('parimpar.png')],
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
      'Protótipo interativo que transforma botões físicos em teclas musicais. Cada botão conectado à protoboard envia um sinal digital para o Arduino, que emite diferentes frequências em um buzzer piezoelétrico, correspondendo às notas musicais. Criei o código para mapear cada botão a uma frequência específica, garantindo baixa latência e clareza sonora. Foram necessárias habilidades em programação de tons (função tone/ noTone), debounce de botões, leitura de entradas digitais e design de circuito lógico. ',
    images: [asset('piano.png'), asset('piano.png')],
    techs: ['Arduino', 'C++', 'Jogos', 'Robotica'],
    link: 'https://example.com'
  },
    {
    title: 'Piano com Arduino - Cirucuito e programação',
    description:
      'Protótipo interativo que transforma botões físicos em teclas musicais. Cada botão conectado à protoboard envia um sinal digital para o Arduino, que emite diferentes frequências em um buzzer piezoelétrico, correspondendo às notas musicais. Criei o código para mapear cada botão a uma frequência específica, garantindo baixa latência e clareza sonora. Foram necessárias habilidades em programação de tons (função tone/ noTone), debounce de botões, leitura de entradas digitais e design de circuito lógico',
    images: [asset('semafaro.png'), asset('semafaro.png')],
    techs: ['Arduino', 'C++', 'Jogos', 'Robotica'],
    link: 'https://example.com'
  },
  {
    title: 'API clima - APP Inventor',
    description:
      'Aplicativo Android que exibe a temperatura atual de qualquer cidade digitada pelo usuário e mostra sua localização em um mapa interativo. A interface inclui um campo de texto para o nome da cidade, botão de busca, rótulo para exibir a temperatura em graus Celsius e um mapa com marcador dinâmico. \nO funcionamento começa quando o usuário informa o nome da cidade e toca em “saiba a temperatura”. O app monta uma URL para a API do OpenWeatherMap, incluindo o parâmetro units=metric e a chave de acesso. O componente Web envia a requisição e, ao receber a resposta, decodifica o JSON retornado para extrair:\nTemperatura atual (main → temp),\nLatitude e longitude (coord → lat, coord → lon).\nEsses valores alimentam a interface: o rótulo é atualizado com a temperatura e o componente Map centraliza a visualização na coordenada obtida, posicionando automaticamente o marcador vermelho no ponto correspondente à cidade pesquisada.\nO desenvolvimento envolveu:\nConstrução de interface responsiva no App Inventor, com uso de TextBox, Button, Label, Map e Marker.\nConsumo de API REST via componente Web, montagem de URL com blocos join e gerenciamento de chave de API.\nParsing de JSON com blocos de busca em pares para acessar campos aninhados.\nManipulação de mapa interativo, aplicando métodos PanTo e SetLocation para ajustar zoom e marcador.\nTratamento básico de erros, inicialização de variáveis globais (latitude e longitude) e exibição de mensagens amigáveis em caso de cidade inválida ou resposta ausente.\nComo resultado, o aplicativo demonstra habilidades de programação em blocos, integração com serviços web e uso de dados geográficos em tempo real, servindo como exemplo prático de consumo de APIs e apresentação visual de informações climáticas em um ambiente mobile. ',
    images: [asset('apiclima.png'), asset('codeclima.png')],
    techs: ['App Inventor', 'mobile', 'API', 'Logica'],
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
