export const state = () => ({
  headerLinks: [
    {
      title: "Решения",
      link: "/solutions",
      icon: true,
      submenu: [
        {
          title: "Пиво",
          link: "#",
          img: '',
          id: 1
        },
        {
          title: "Вода",
          link: "#",
          img: '',
          id: 2
        },
        {
          title: "Сидр",
          link: "#",
          img: '',
          id: 3
        },
        {
          title: "Квас",
          link: "#",
          img: '',
          id: 4
        },
        {
          title: "Вино",
          link: "#",
          img: '',
          id: 5
        },
        {
          title: "Кофе",
          link: "#",
          img: '',
          id: 6
        },
      ]
    },
    {
      title: "Продукция",
      link: "#",
      icon: true,
    },
    {
      title: "Партнерам",
      link: "#",
      icon: true,
    },
    {
      title: "Концепция",
      link: "#",
      icon: true,
      submenu: [
        {
          title: "Качество",
          link: "#",
          img: '',
          id: 1
        },
        {
          title: "Безопасность",
          link: "#",
          img: '',
          id: 2
        },
        {
          title: "Доверие",
          link: "#",
          img: '',
          id: 3
        },

      ]
    },
    {
      title: "Компания",
      link: "#",
      icon: true,
    },
    {
      title: "Контакты",
      link: "#",
      icon: false,
    },
  ],
  solutions: [
    {
      id: 1,
      title: "Вода",
      description:
        "Международный бренд по производству ПЭТ-тары, отличающийся высочайшим качеством материалов, продукции и подхода к клиентам. Международный бренд отличающийся высочайшим качеством материалов, продукции и подхода к клиентам.",
      img1: "water.jpg",
      img2: "water1.jpg",
      imgbtn: "solution1.png",
      svg: "water",
    },
    {
      id: 2,
      title: "Пиво",
      description:
        "Международный бренд по производству ПЭТ-тары, отличающийся высочайшим качеством материалов, продукции и подхода к клиентам. Международный бренд отличающийся высочайшим качеством материалов, продукции и подхода к клиентам. ",
      img1: "beer.jpg",
      img2: "beer1.jpg",
      imgbtn: "solution2.png",
      svg: "beer",
    },
    {
      id: 3,
      title: "Квас",
      description:
        "Международный бренд по производству ПЭТ-тары, отличающийся высочайшим качеством материалов, продукции и подхода к клиентам. Международный бренд отличающийся высочайшим качеством материалов, продукции и подхода к клиентам. ",
      img1: "water.jpg",
      img2: "water1.jpg",
      imgbtn: "solution3.png",
      svg: "kvass",
    },
    {
      id: 4,
      title: "Сидр",
      description:
        "Международный бренд по производству ПЭТ-тары, отличающийся высочайшим качеством материалов, продукции и подхода к клиентам. Международный бренд отличающийся высочайшим качеством материалов, продукции и подхода к клиентам. ",
      img1: "water.jpg",
      img2: "water1.jpg",
      imgbtn: "solution4.png",
      svg: "cider",
    },
    {
      id: 5,
      title: "Вино",
      description:
        "Международный бренд по производству ПЭТ-тары, отличающийся высочайшим качеством материалов, продукции и подхода к клиентам. Международный бренд отличающийся высочайшим качеством материалов, продукции и подхода к клиентам. ",
      img1: "water.jpg",
      img2: "water1.jpg",
      imgbtn: "solution5.png",
      svg: "vine",
    },
    {
      id: 6,
      title: "Кофе",
      description:
        "Международный бренд по производству ПЭТ-тары, отличающийся высочайшим качеством материалов, продукции и подхода к клиентам. Международный бренд отличающийся высочайшим качеством материалов, продукции и подхода к клиентам. ",
      img1: "water.jpg",
      img2: "water1.jpg",
      imgbtn: "solution6.png",
      svg: "coffe",
    },
  ],
  //преимущества должны быть с апи индивидуального продукта
  advantages: [
    {
      id: 1,
      title: 'Эстетика упаковки',
      list: [
        'Низкая теплопроводность',
        'Гарантия герметичности фитинга',
        'Стерильная среда внутри кега'
      ],
      img: 'adv1.png',
      imgMobile: 'adv1-m.png',
      num: 'num1'
    },
    {
      id: 2,
      title: 'Выгодная логистика',
      list: [
        'Отсутствует необходимость возврата тары',
        'ПЭТ-КЕГ в 16 раз легче металлической ',
        'Фура вмещает на 25% больше'
      ],
      img: 'adv2.png',
      imgMobile: 'adv2-m.png',
      num: 'num2'
    },
    {
      id: 3,
      title: 'Сокращение издержек производства',
      list: [
        'Разморозка денежных средств заложеных в тару',
        'Сокращение площади хранения КЕГ',
        'Отсутствие технического обслуживания и мойки',
        'Сокращение фонда оплаты труда'
      ],
      img: 'adv3.png',
      imgMobile: 'adv3-m.png',
      num: 'num3'
    },
    {
      id: 4,
      title: 'Легкий и быстрый переход с металла на ПЭТ',
      list: [
        'Не требуется сложная перенастройка оборудования',
        'Не требуется инвестиций в оборудование',
        'Сопровождение и поддержка от технических специалистов компании ПЭТ-Эксперт'
      ],
      img: 'adv4.png',
      imgMobile: 'adv4-m.png',
      num: 'num4'
    },
  ]
})
