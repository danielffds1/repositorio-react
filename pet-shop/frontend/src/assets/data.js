export const dataVideo = {
  title: "Como veterinário e amante dos animais",
  description:
    "Eu sei que a saúde do seu pet é muito importante para você. Por isso, eu criei um guia com os 10 principais cuidados que você deve ter com o seu pet.",
  items: [
    "Alimentação balanceada e adequada às necessidades do animal",
    "Exercícios físicos regulares para manter a saúde e o peso ideal",
    "Água fresca e limpa sempre disponível para hidratação",
    "Higiene regular, incluindo banhos, escovação dos pelos e limpeza das orelhas e dentes",
    "Vacinação e controle de parasitas, como pulgas e carrapatos",
    "Ambiente seguro e livre de objetos perigosos que possam ser ingeridos",
    "Visitas periódicas ao veterinário para check-ups e prevenção de doenças",
    "Estímulo mental através de brinquedos e atividades que promovam o bem-estar",
    "Atenção à saúde emocional, incluindo interação social e tempo de qualidade com o dono",
    "Identificação do animal através de coleiras com plaquinhas ou microchip",
  ],
};

import servicos1 from "./servicos1.png";
import servicos2 from "./servicos2.png";
import servicos6 from "./servicos6.png";

export const preventiveCares = [
  {
    id: 1,
    image: servicos1,
    title: "Veterinários especializados",
    description:
      "Profissionais qualificados e serviços abrangentes.",
  },
  {
    id: 2,
    image: servicos2,
    title: "Cuidados Vacinais Pet",
    description:
      "Cronogramas de vacinação recomendados.",
  },
  {
    id: 3,
    image: servicos6,
    title: "Cuidados Dentais",
    description:
      "Cuidados dentários especializados.",
  },
];

import animais1 from './animais1.png';
import animais2 from './animais2.png';
import animais3 from './animais3.png';

export const buyAnimals = [
  {
    id: 1,
    image: animais1,
    title: "Cachorros",
    oldPrice: "$50",
    newPrice: "$45",
    description: "Raças variadas para todos os gostos.",
  },
  {
    id: 2,
    image: animais2,
    title: "Gatos",
    oldPrice: "$40",
    newPrice: "$35",
    description: "Gatinhos fofos e brincalhões.",
  },
  {
    id: 3,
    image: animais3,
    title: "Pássaros",
    oldPrice: "$30",
    newPrice: "$25",
    description: "Cantos melodiosos e cores vibrantes.",
  },
];

import servicos3 from './servicos3.png';
import servicos4 from './servicos4.png';
import servicos5 from './servicos5.png';
import servicos7 from './servicos7.png';
import servicos8 from './servicos8.png';
import servicos9 from './servicos9.png';

export const recentPosts = 
[
  {
    id: 1,
    image: servicos3,
    title: "Veterinários de excelência",
    date: "10/08/2021",
    description: "Conheça nossa equipe de veterinários de excelência, prontos para oferecer cuidados excepcionais ao seu pet. #Veterinária #CuidadosPets"
  },
  {
    id: 2,
    image: servicos4,
    title: "Equipe de veterinários",
    date: "11/08/2021",
    description: "No nosso último post, destacamos a competência e dedicação dos nossos veterinários. Conte conosco para cuidar do seu pet com amor e expertise. #Veterinários #AmorAnimais"
  },
  {
    id: 3,
    image: servicos5,
    title: "Serviços oferecidos pelos veterinários",
    date: "12/08/2021",
    description: "Saiba mais sobre os serviços oferecidos pelos nossos veterinários de excelência. Desde consultas de rotina até emergências, estamos aqui para cuidar do seu pet. #CuidadosPet #Veterinária"
  },
  {
    id: 4,
    image: servicos7,
    title: "Veterinários qualificados",
    date: "13/08/2021",
    description: "Nossos veterinários são altamente qualificados e apaixonados por animais. Confie em nós para proporcionar cuidados de qualidade ao seu companheiro peludo. #CuidadosVeterinários #AmorPets"
  },
  {
    id: 5,
    image: servicos8,
    title: "Destaque para os nossos veterinários",
    date: "14/08/2021",
    description: "Destaque para os veterinários dedicados que fazem parte da nossa equipe. Sua expertise e comprometimento garantem o melhor para o seu pet. #Veterinários #CuidadoAnimal"
  },
  {
    id: 6,
    image: servicos9,
    title: "Importância dos nossos veterinários",
    date: "15/08/2021",
    description: "Em nosso blog, destacamos a importância dos nossos veterinários de excelência. Conheça mais sobre suas qualificações e experiência em cuidar dos animais. #Veterinária #CuidadosAnimais"
  }
];

import servicespet1 from './servicespet1.jpg';
import servicespet2 from './servicespet2.jpg';
import servicespet3 from './servicespet3.jpg';
import servicespet4 from './servicespet4.jpg';
import servicespet5 from './servicespet5.jpg';
import servicespet6 from './servicespet6.jpg';

export const availableServices = 
[
  {
    id: 1,
    image: servicespet1,
    title: "Banho e tosa",
    description: "Ofereça serviços de banho e tosa profissionais para cães e gatos, incluindo corte de unhas, limpeza de ouvidos e tratamento de pelagem",
    price: 100
  },
  {
    id: 2,
    image: servicespet2,
    title: "Consulta Veterinária",
    description: "Se possível, ofereça consultas veterinárias para serviços básicos, como vacinação, exames de saúde e tratamento de problemas de pele ou ouvido.",
    price: 100
  },
  {
    id: 3,
    image: servicespet3,
    title: "Hospedagem",
    description: "Oferecemos serviços de hospedagem para animais de estimação quando os donos precisarem viajar ou se ausentar por um período.",
    price: 100
  },
  {
    id: 4,
    image: servicespet4,
    title: "Treinamento e Comportamento",
    description: "Ofereça aulas de treinamento para cães, seja para obediência básica, socialização ou correção de comportamentos indesejados.",
    price: 100
  },
  {
    id: 5,
    image: servicespet5,
    title: "Serviços de Emergência:",
    description: "Tenha um plano de ação para lidar com emergências veterinárias e ofereça serviços de primeiros socorros, como curativos e estabilização, antes de encaminhar o animal para um veterinário.",
    price: 100
  },
  {
    id: 6,
    image: servicespet6,
    title: "Creche",
    description: "Para clientes que precisam deixar seus animais de estimação durante o dia, ofereça serviços de creche onde os pets podem socializar e se exercitar sob supervisão.",
    price: 100
  }
]