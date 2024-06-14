export const serviceMenu = [
  {
    title: "Borrowing Laptop",
    detail: "borrowingLaptop",
    icon: "laptop",
    link: "/Instructions/borrowingLaptop",
    color: 'green',
    size: 'md',
  },
  {
    title: "BorrowingUsb",
    detail: "borrowingUsb",
    icon: "usb",
    link: "/Instructions/borrowingUsb",
    color: 'green',
    size: 'md',
  },
  {
    title: "BorrowingItEquipment",
    detail: "borrowingItEquipment",
    icon: "construction",
    link: "/Instructions/borrowingItEquipment",
    color: 'red',
    size: 'md',
  },
  {
    title: "BorrowingCamera",
    detail: "borrowingCamera",
    icon: "photo_camera",
    link: "/Instructions/borrowingCamera",
    color: 'red',
    size: 'md',
  },
  {
    title: "SummitForm",
    detail: "summitForm",
    icon: "list_alt",
    link: "/Instructions/summitForm",
    color: 'blue',
    size: 'md',
  },
  {
    title: "BorrowingUsbVaccine",
    detail: "borrowingUsbVaccine",
    icon: "vaccines",
    link: "/Instructions/borrowingUsbVaccine",
    color: 'blue',
    size: 'md',
  },
];

export const Menulist = [
  {
    title: "Home",
    detail: "HomePage",
    icon: "home",
    link: "/",
  },
  {
    title: "Service",
    detail: "ServicePage",
    icon: "code",
    link: "/Instructions",
  },
  {
    title: "Q&A",
    detail: "questionAndAnswer",
    icon: "chat",
    link: "/Q&A",
  },
  {
    title: "CheckStatus",
    detail: "checkStatus",
    icon: "record_voice_over",
    link: "/checkStatus",
  },
];

export const dataPageService = [
  {
    borrowingLaptop: {
      needCardDowload: true,
      srcImg: "/src/assets/IT_EQUIPMENT_PROCUREMENT_REQUEST_CONTROL(1).png",
      IntroductionService: {
        title: "Bowrow Notebook Command",
        subtitle: "detail data",
        bgColor: true,
      },
      DataCardDowload: {
        head: "Download From",
        datas: [
          { title: "PDF", detail: "detail", icon: "home", link: "/" },
          { title: "Word", detail: "detail", icon: "warning", link: "/" },
          { title: "PowerPoint", detail: "detail", icon: "warning", link: "/" },
          { title: "Excel", detail: "detail", icon: "warning", link: "/" },
        ],
      },
      ButtonLabel: {
        label: "Go to E-Form",
        link: "/",
      },
    },
    borrowingUsb: {
      needCardDowload: true,
      srcImg: "https://picsum.photos/500/300",
      IntroductionService: {
        title: "Bowrow USB",
        subtitle: "detail data",
        bgColor: true,
      },
      DataCardDowload: {
        head: "Download From",
        datas: [
          { title: "PDF", detail: "detail", icon: "home", link: "/" },
          { title: "WORD", detail: "detail", icon: "warning", link: "/" },
          { title: "PowerPoint", detail: "detail", icon: "warning", link: "/" },
          { title: "Excel", detail: "detail", icon: "warning", link: "/" },
          { title: "Git", detail: "detail", icon: "warning", link: "/" },
        ],
      },
      ButtonLabel: {
        label: "Go to E-Form",
        link: "/",
      },
    },
    borrowingItEquipment: {
      needCardDowload: true,
      srcImg: "https://picsum.photos/500/300",
      IntroductionService: {
        title: "borrowing It Equipment",
        subtitle: "detail data",
        bgColor: true,
      },
      DataCardDowload: {
        head: "Download From",
        datas: [
          { title: "PDF", detail: "detail", icon: "home", link: "/" },
          { title: "WORD", detail: "detail", icon: "warning", link: "/" },
        ],
      },
      ButtonLabel: {
        label: "Go to E-Form",
        link: "/",
      },
    },
    borrowingCamera: {
      needCardDowload: true,
      srcImg: "https://picsum.photos/500/300",
      IntroductionService: {
        title: "borrowing Camera",
        subtitle: "detail data",
        bgColor: false,
      },
      DataCardDowload: {
        head: "Download From",
        datas: [
          { title: "PDF", detail: "detail", icon: "home", link: "/" },
          { title: "WORD", detail: "detail", icon: "warning", link: "/" },
        ],
      },
      ButtonLabel: {
        label: "Go to E-Form",
        link: "/",
      },
    },
    summitForm: {
      needCardDowload: false,
      srcImg: "https://picsum.photos/500/300",
      IntroductionService: {
        title: "summit Form",
        subtitle: "detail data",
        bgColor: false,
      },
      DataCardDowload: {
        head: "Download From",
        datas: [
          { title: "PDF", detail: "detail", icon: "home", link: "/" },
          { title: "WORD", detail: "detail", icon: "warning", link: "/" },
        ],
      },
      ButtonLabel: {
        label: "Go to E-Form",
        link: "/",
      },
    },
    borrowingUsbVaccine: {
      needCardDowload: false,
      IntroductionService: {
        title: "borrowing Usb Vaccine",
        subtitle: "detail data",
        bgColor: false,
      },
      DataCardDowload: {
        head: "Download From",
        datas: [
          { title: "PDF", detail: "detail", icon: "home", link: "/" },
          { title: "WORD", detail: "detail", icon: "warning", link: "/" },
        ],
      },
      ButtonLabel: {
        label: "Go to E-Form",
        link: "/",
      },
    },
  },
];

export const dataDowload = [
  {
    head: "Dowload From",
    data: [
      { title: "PDF", detail: "datail", icon: "home", link: "/" },
      { title: "WORD", detail: "datail", icon: "warning", link: "/" },
    ],
  },
];
