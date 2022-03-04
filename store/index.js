export const state = () => ({
  headerLinks: [
    {
      title: "Решения",
      link: "variants",
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
      link: "products",
      icon: true,
    },
    {
      title: "Партнерам",
      link: "partners",
      icon: true,
    },
    {
      title: "Концепция",
      link: "concept",
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
      link: "company",
      icon: true,
    },
    {
      title: "Контакты",
      link: "contacts",
      icon: false,
    },
  ],
})
