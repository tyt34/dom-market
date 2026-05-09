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
    label: 'Центральный',
    value: '1',
  },
  {
    label: 'Ворошиловский',
    value: '2',
  },
]

export const OPTIONS_ROOMS_DESKTOP: Option[] = [
  {
    label: '1-у комнатную',
    value: '1',
  },
  {
    label: '2-ух комнатную',
    value: '2',
  },
  {
    label: '3-ех комнатную',
    value: '3',
  },
  {
    label: '4 и более комнатную',
    value: 'many',
  },
]

export const OPTIONS_ROOMS_MOBILE: Option[] = [
  {
    label: '1',
    value: '1',
  },
  {
    label: '2',
    value: '2',
  },
  {
    label: '3',
    value: '3',
  },
  {
    label: '4+',
    value: 'many',
  },
]

export const OPTIONS_CITY: Option[] = [
  {
    label: 'Волгоград',
    value: '1',
  },
  {
    label: 'Волжский',
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

export const OPTIONS_ADDRESS: Record<string, Option[]> = {
  '1': [
    {
      label: 'Волгоград (все адреса)',
      value: 'vlg-0',
    },
    {
      label: 'Волгоград, проспект Ленина 1',
      value: 'vlg-1',
    },
    {
      label: 'Волгоград, проспект Ленина 45',
      value: 'vlg-2',
    },
    {
      label: 'Волгоград, улица Рабоче-Крестьянская 12',
      value: 'vlg-3',
    },
    {
      label: 'Волгоград, улица Рабоче-Крестьянская 68',
      value: 'vlg-4',
    },
    {
      label: 'Волгоград, улица Советская 5',
      value: 'vlg-5',
    },
    {
      label: 'Волгоград, улица Советская 33',
      value: 'vlg-6',
    },
    {
      label: 'Волгоград, улица Мира 10',
      value: 'vlg-7',
    },
    {
      label: 'Волгоград, улица Мира 52',
      value: 'vlg-8',
    },
    {
      label: 'Волгоград, улица Комсомольская 7',
      value: 'vlg-9',
    },
    {
      label: 'Волгоград, улица Комсомольская 41',
      value: 'vlg-10',
    },
  ],
  '2': [
    {
      label: 'Волжский (все адреса)',
      value: 'vsk-0',
    },
    {
      label: 'Волжский, проспект Ленина 10',
      value: 'vsk-1',
    },
    {
      label: 'Волжский, проспект Ленина 58',
      value: 'vsk-2',
    },
    {
      label: 'Волжский, улица Мира 12',
      value: 'vsk-3',
    },
    {
      label: 'Волжский, улица Мира 47',
      value: 'vsk-4',
    },
    {
      label: 'Волжский, улица Карбышева 5',
      value: 'vsk-5',
    },
    {
      label: 'Волжский, улица Карбышева 33',
      value: 'vsk-6',
    },
    {
      label: 'Волжский, улица Энгельса 14',
      value: 'vsk-7',
    },
    {
      label: 'Волжский, улица Энгельса 62',
      value: 'vsk-8',
    },
    {
      label: 'Волжский, улица Александрова 9',
      value: 'vsk-9',
    },
  ],
}
