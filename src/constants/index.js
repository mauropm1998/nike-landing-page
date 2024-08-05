import { facebook, instagram, shieldTick, support, truckFast, twitter } from '../assets/icons'
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3
} from '../assets/images'

export const navLinks = [
  { href: '#home', label: 'Página Inicial' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#contactos', label: 'Contactos' }
]

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3
  }
]

export const statistics = [
  { value: '1k+', label: 'Marcas' },
  { value: '500+', label: 'Lojas' },
  { value: '250k+', label: 'Clientes' }
]

export const products = [
  {
    imgURL: shoe4,
    name: 'Nike Air Jordan-01',
    price: '$200.20'
  },
  {
    imgURL: shoe5,
    name: 'Nike Air Jordan-10',
    price: '$210.20'
  },
  {
    imgURL: shoe6,
    name: 'Nike Air Jordan-100',
    price: '$220.20'
  },
  {
    imgURL: shoe7,
    name: 'Nike Air Jordan-001',
    price: '$230.20'
  }
]

export const services = [
  {
    imgURL: truckFast,
    label: 'Frete Grátis',
    subtext: 'Desfrute de compras perfeitas com nosso serviço de remessa gratuita.'
  },
  {
    imgURL: shieldTick,
    label: 'Pagamento Seguro',
    subtext: 'Experimente transações sem preocupações com nossas opções de pagamento seguras.'
  },
  {
    imgURL: support,
    label: 'Prazer Ajudar Você',
    subtext: 'Nossa equipe dedicada está aqui para ajudá-lo em cada etapa do processo.'
  }
]

export const reviews = [
  {
    imgURL: customer1,
    customerName: 'Morich Brown',
    rating: 4.5,
    feedback:
      'A atenção aos detalhes e a qualidade do produto superaram minhas expectativas. Altamente recomendado!'
  },
  {
    imgURL: customer2,
    customerName: 'Lota Mongeskar',
    rating: 4.5,
    feedback:
      'O produto não só atendeu como superou minhas expectativas. Com certeza serei um cliente recorrente!'
  }
]

export const footerLinks = [
  {
    title: 'Produtos',
    links: [
      { name: 'Air Force 1', link: '/' },
      { name: 'Air Max 1', link: '/' },
      { name: 'Air Jordan 1', link: '/' },
      { name: 'Air Force 2', link: '/' },
      { name: 'Nike Waffle Racer', link: '/' },
      { name: 'Nike Cortez', link: '/' }
    ]
  },
  {
    title: 'Ajuda',
    links: [
      { name: 'Sobre nós', link: '/' },
      { name: 'FAQs', link: '/' },
      { name: 'Como funciona', link: '/' },
      { name: 'Política de privacidade', link: '/' },
      { name: 'Política de pagamento', link: '/' }
    ]
  },
  {
    title: 'Contactos',
    links: [
      { name: 'customer@nike.com', link: 'mailto:customer@nike.com' },
      { name: '+92554862354', link: 'tel:+92554862354' }
    ]
  }
]

export const socialMedia = [
  { src: facebook, alt: 'facebook logo' },
  { src: twitter, alt: 'twitter logo' },
  { src: instagram, alt: 'instagram logo' }
]
