export const serviceMenu = [
  {
    title: "Borrowing Laptop",
    detail: "borrowingLaptop",
    icon: "laptop",
    link: "/Instructions/borrowingLaptop",
    color: "green",
    size: "md",
  },
  {
    title: "BorrowingUsb",
    detail: "borrowingUsb",
    icon: "usb",
    link: "/Instructions/borrowingUsb",
    color: "green",
    size: "md",
  },
  {
    title: "BorrowingItEquipment",
    detail: "borrowingItEquipment",
    icon: "construction",
    link: "/Instructions/borrowingItEquipment",
    color: "red",
    size: "md",
  },
  {
    title: "BorrowingCamera",
    detail: "borrowingCamera",
    icon: "photo_camera",
    link: "/Instructions/borrowingCamera",
    color: "red",
    size: "md",
  },
  {
    title: "SummitForm",
    detail: "summitForm",
    icon: "list_alt",
    link: "/Instructions/summitForm",
    color: "blue",
    size: "md",
  },
  {
    title: "BorrowingUsbVaccine",
    detail: "borrowingUsbVaccine",
    icon: "vaccines",
    link: "/Instructions/borrowingUsbVaccine",
    color: "blue",
    size: "md",
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
export const categoryService = [
  {
    service: "Information Security",
  },
  {
    service: "Information System / IT Support service",
  },
  {
    service: "General IT Service",
  },
  {
    service: "Innovative Development",
  },
];
export const serViceMenuData = [
  {
    nested: false,
    serviceDetail: [
      {
        title: "IT Equipment procurement request",
        detail: "ขอจัดซื้ออุปกรณ์ไอที",
        icon: "shopping_cart",
        link: "/Instructions/borrowingLaptop",
        color: "blue",
        size: "lg",
      },
      {
        title: "Registration IT/DX project support request",
        detail: "ลงทะเบียนขอรับการสนับสนุนโครงการ IT/DX",
        icon: "app_registration",
        link: "/Instructions/borrowingUsb",
        color: "blue",
        size: "lg",
      },
      {
        title: "Register laptop work from anywhere",
        detail: "ลงทะเบียน Laptop work from anywhere",
        icon: "place",
        link: "/Instructions/borrowingItEquipment",
        color: "blue",
        size: "lg",
      },
      {
        title: "IT Equipment Carry In/Out",
        detail: "ขอนำอุปกรณ์ IT Equipment เข้า/ออก บริษัท",
        icon: "business",
        link: "/Instructions/borrowingItEquipment",
        color: "blue",
        size: "lg",
      },
      {
        title: "Register IT Equipment",
        detail: "ลงทะเบียนอุปกรณ์ไอที",
        icon: "assignment",
        link: "/Instructions/borrowingItEquipment",
        color: "blue",
        size: "lg",
      },
      {
        title: "Transfer IT Equipment",
        detail: "โอนย้ายอุปกรณ์ไอที",
        icon: "open_in_full",
        link: "/Instructions/borrowingItEquipment",
        color: "blue",
        size: "lg",
      },
      {
        title: "Disposal IT Equipment",
        detail: "ทำทิ้งอุปกรณ์ไอที",
        icon: "construction",
        link: "/Instructions/borrowingItEquipment",
        color: "blue",
        size: "lg",
      },
      {
        title: "Antivirus USB Vaccine borrowing",
        detail: "ขอยืม Antivirus USB Vaccine",
        icon: "coronavirus",
        link: "/Instructions/borrowingItEquipment",
        color: "blue",
        size: "lg",
      },
    ],
  },
  {
    nested: true,
    serviceDetail: [
      {
        name: "General Service Request",
        serviceNested: [
          {
            title: "System Support Request",
            detail:
              "Computer/Software/Printer installation, Transfer software or data, Other",
            icon: "help_center",
            link: "/Instructions/borrowingLaptop",
            color: "orange",
            size: "lg",
          },
          {
            title: "Email/Share mailbox/Team group",
            detail: "(New, Change, Terminate)",
            icon: "email",
            link: "/Instructions/borrowingUsb",
            color: "orange",
            size: "lg",
          },
          {
            title: "Windows/AS400/Lotus Notes ID",
            detail: "(New, Change, Terminate)",
            icon: "article",
            link: "/Instructions/borrowingItEquipment",
            color: "orange",
            size: "lg",
          },
          {
            title: "Yellowfin ID",
            detail: "(New, Change, Terminate)",
            icon: "published_with_changes",
            link: "/Instructions/borrowingItEquipment",
            color: "orange",
            size: "lg",
          },
          {
            title: "Add storage SharePoint/Server",
            detail: "Add storage SharePoint/Server",
            icon: "inventory_2",
            link: "/Instructions/borrowingItEquipment",
            color: "orange",
            size: "lg",
          },
          {
            title: "Update M365 Organization",
            detail: "(Title, Dept., Superior, Transfer, Change Name)",
            icon: "update",
            link: "/Instructions/borrowingItEquipment",
            color: "orange",
            size: "lg",
          },
          {
            title: "Update Email Group (M365)",
            detail: "Update Email Group (M365)",
            icon: "mark_email_unread",
            link: "/Instructions/borrowingItEquipment",
            color: "orange",
            size: "lg",
          },
          {
            title: "Internet Access Requisition form",
            detail: "Internet Access Requisition form",
            icon: "wifi",
            link: "/Instructions/borrowingItEquipment",
            color: "orange",
            size: "lg",
          },
        ],
      },
      {
        name: "Network",
        serviceNested: [
          {
            title: "New network / Relocation",
            detail: "New network / Relocation",
            icon: "router",
            link: "/Instructions/borrowingLaptop",
            color: "red",
            size: "lg",
          },
          {
            title: "VPN network",
            detail: "VPN network",
            icon: "vpn_lock",
            link: "/Instructions/borrowingUsb",
            color: "red",
            size: "lg",
          },
          {
            title: "Firewall setting",
            detail: "Firewall setting",
            icon: "security",
            link: "/Instructions/borrowingItEquipment",
            color: "red",
            size: "lg",
          },
          {
            title: "Internet gateway",
            detail: "Internet gateway",
            icon: "sync_alt",
            link: "/Instructions/borrowingItEquipment",
            color: "red",
            size: "lg",
          },
        ],
      },
      {
        name: "Security Service Request",
        serviceNested: [
          {
            title: "Security Application Checklist",
            detail: "Security Application Checklist",
            icon: "https",
            link: "/Instructions/borrowingLaptop",
            color: "black",
            size: "lg",
          },
        ],
      },
    ],
  },
  {
    nested: false,
    serviceDetail: [
      {
        title: "Common/Training laptop borrowing",
        detail: "Common/Training laptop borrowing",
        icon: "laptop",
        link: "/Instructions/borrowingLaptop",
        color: "green",
        size: "lg",
      },
      {
        title: "IT Equipment borrowing",
        detail: "IT Equipment borrowing",
        icon: "keyboard",
        link: "/Instructions/borrowingUsb",
        color: "green",
        size: "lg",
      },
      {
        title: "USB/Hibun borrowing",
        detail: "USB/Hibun borrowing",
        icon: "usb",
        link: "/Instructions/borrowingItEquipment",
        color: "green",
        size: "lg",
      },
    ],
  },
  {
    nested: false,
    serviceDetail: [
      {
        title: "Request PR 2S Connect Homepage Portal & ESS",
        detail: "Request PR 2S Connect Homepage Portal & ESS",
        icon: "description",
        link: "/Instructions/borrowingLaptop",
        color: "yellow",
        size: "lg",
      },
      {
        title: "In-House Development IT/DX Project Support Request",
        detail: "In-House Development IT/DX Project Support Request",
        icon: "code",
        link: "/Instructions/borrowingUsb",
        color: "yellow",
        size: "lg",
      },
      {
        title: "Request Upgrade or Modify In-house Software System",
        detail: "Request Upgrade or Modify In-house Software System",
        icon: "terminal",
        link: "/Instructions/borrowingItEquipment",
        color: "yellow",
        size: "lg",
      },
      {
        title: "Report and request troubleshooting In-house system problems",
        detail: "Report and request troubleshooting In-house system problems",
        icon: "report",
        link: "/Instructions/borrowingItEquipment",
        color: "yellow",
        size: "lg",
      },
    ],
  },
];
