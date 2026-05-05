import type {
  Option,
  OptionImage,
  OptionsCheckbox,
} from '@shared/types/types'
import img1 from './assets/1.png'
import img2 from './assets/2.png'
import img3 from './assets/3.png'
import img4 from './assets/4.png'
import img5 from './assets/5.png'
import img6 from './assets/6.png'

export const OPTIONS_HOME: OptionImage[] = [
  {
    label: 'Квартиры',
    value: '1',
    image: img1,
  },
  {
    label: 'Комнаты',
    value: '2',
    image: img2,
  },
  {
    label: 'Новостроики',
    value: '3',
    image: img3,
  },
  {
    label: 'Дома',
    value: '4',
    image: img4,
  },
  {
    label: 'Участки',
    value: '5',
    image: img5,
  },
  {
    label: 'Комерческая',
    value: '6',
    image: img6,
  },
]

export const OPTIONS_AREA: Option[] = [
  {
    // value: 'center',
    label: 'Центральный',
    value: '1',
  },
  {
    // value: 'voroshilosky',
    label: 'Ворошиловский',
    value: '2',
  },
]

export const OPTIONS_ROOMS_DESKTOP: Option[] = [
  {
    // value: '1',
    label: '1-у комнатную',
    value: '1',
  },
  {
    // value: '2',
    label: '2-ух комнатную',
    value: '2',
  },
  {
    // value: '3',
    label: '3-ех комнатную',
    value: '3',
  },
  {
    // value: 'many',
    label: '4 и более комнатную',
    value: 'many',
  },
]

export const OPTIONS_ROOMS_MOBILE: Option[] = [
  {
    // value: '1',
    label: '1',
    value: '1',
  },
  {
    // value: '2',
    label: '2',
    value: '2',
  },
  {
    // value: '3',
    label: '3',
    value: '3',
  },
  {
    // value: 'many',
    label: '4+',
    value: 'many',
  },
]

export const OPTIONS_CITY: Option[] = [
  {
    // value: 'vlg',
    label: 'Волгоград',
    value: '1',
  },
  {
    // value: 'spb',
    label: 'Санкт-Петербург',
    value: '2',
  },
]

export const OPTIONS_TYPE_DEAL: Option[] = [
  {
    label: 'Купить',
    value: '1',
  },
  {
    label: 'Продать',
    value: '2',
  },
]

export const OPTIONS_TYPE_PRICE: Option[] = [
  {
    label: 'Стоимость',
    value: '1',
  },
  {
    label: 'Даром',
    value: '2',
  },
]

export const OPTIONS_SUPER: OptionsCheckbox = [
  {
    label: 'Да',
    value: 'true',
  },
  {
    label: 'Нет',
    value: 'false',
  },
]

export const OPTIONS_ADDRESS: Option[] = [
  {
    value: '',
    label: '',
  },
  {
    label: 'Волгоград, проспект Ленина 1',
    value: 'volgograd-lenina-1',
  },
  {
    label: 'Волгоград, проспект Ленина 45',
    value: 'volgograd-lenina-45',
  },
  {
    label: 'Волгоград, улица Рабоче-Крестьянская 12',
    value: 'volgograd-raboche-krestyanskaya-12',
  },
  {
    label: 'Волгоград, улица Рабоче-Крестьянская 68',
    value: 'volgograd-raboche-krestyanskaya-68',
  },
  {
    label: 'Волгоград, улица Советская 5',
    value: 'volgograd-sovetskaya-5',
  },
  {
    label: 'Волгоград, улица Советская 33',
    value: 'volgograd-sovetskaya-33',
  },
  { label: 'Волгоград, улица Мира 10', value: 'volgograd-mira-10' },
  { label: 'Волгоград, улица Мира 52', value: 'volgograd-mira-52' },
  {
    label: 'Волгоград, улица Комсомольская 7',
    value: 'volgograd-komsomolskaya-7',
  },
  {
    label: 'Волгоград, улица Комсомольская 41',
    value: 'volgograd-komsomolskaya-41',
  },
]
