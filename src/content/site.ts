export const site = {
  name: "Fundación Dr. Rodrigo Testart Tobar",
  shortName: "Fundación Testart",
  tagline: "Salud integral para quienes más lo necesitan",
  description:
    "Fundación Dr. Rodrigo Testart Tobar: creamos esta fundación para apoyar la salud integral y facilitar el acceso a terapias esenciales como la ozonoterapia, la medicina ortomolecular y los suplementos.",
  url: "https://fundacion-rodrigo-testart-tobar.vercel.app",
  locale: "es_CL",
} as const;

export const contact = {
  email: "fundacionrodrigotestart@gmail.com",
  emailClinico: "consultamedicatestart@gmail.com",
  phone: "+56 2 233 65 00 48",
  phoneDisplay: "2 33 65 00 48",
  whatsapp: "+56 9 5522 5749",
  whatsappDisplay: "+56 9 5522 5749",
  address: "Las Pelargonias 60, oficina 84, Bosques de Montemar",
  city: "Concón, Chile",
  hours: [
    { day: "Lunes a viernes", time: "09:00 – 18:00" },
    { day: "Sábado", time: "Cerrado" },
    { day: "Domingo", time: "Cerrado" },
  ],
} as const;

export const donation = {
  title: "Contribuye y respalda a un paciente",
  description:
    "Tu aporte, único o periódico, permite financiar tratamientos que cambian la calidad de vida de pacientes con enfermedades crónicas. Cada acción cuenta y la tuya es un eslabón de esta cadena de ayuda.",
  bank: {
    holder: "Sociedad de prestaciones Médicas y Tecnológicas Lasermed",
    account: "Banco de Chile N° 60540310",
    rut: "78.941.930-2",
    email: "fundacionrodrigotestart@gmail.com",
    whatsapp: "+56 9 5522 5749",
  },
} as const;

export const nav = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios y Productos" },
  { href: "/articulos", label: "Artículos" },
  { href: "/acerca-de", label: "Acerca de" },
] as const;

export const social = [
  { label: "YouTube", href: "https://www.youtube.com/channel/UColAFF3-rmaK_FpoOT1pbjQ" },
  { label: "Instagram", href: "https://www.instagram.com/klotho3chile/" },
  { label: "Facebook", href: "https://www.facebook.com/klotho3chile/" },
  { label: "WhatsApp", href: "https://wa.me/56955225749" },
] as const;

export const stats = [
  { value: "+40", label: "Años de experiencia médica" },
  { value: "+15", label: "Años en ozonoterapia" },
  { value: "6", label: "Líneas de servicio y productos" },
  { value: "100%", label: "Evaluación individualizada" },
] as const;

export const pillars = [
  {
    title: "Apoyo económico",
    description:
      "Entregamos el respaldo económico necesario para que un paciente acceda a terapias esenciales que su seguro no cubre.",
    icon: "heart",
  },
  {
    title: "Evaluación personalizada",
    description:
      "Cada caso se analiza de manera individualizada, considerando la situación particular de cada paciente y los recursos disponibles en ese momento.",
    icon: "clipboard",
  },
  {
    title: "Red de apoyo",
    description:
      "Contribuciones únicas, aportes periódicos y difusión de la misión se entrelazan para transformar y mejorar la salud y la calidad de vida.",
    icon: "network",
  },
  {
    title: "Difusión de la misión",
    description:
      "Compartimos el conocimiento del Dr. Rodrigo Testart para que más personas conozcan estas terapias y puedan tomarlas con criterio.",
    icon: "share",
  },
] as const;

export const process = [
  {
    step: "01",
    title: "Presentación de la solicitud",
    description:
      "El paciente presenta un formulario de solicitud con sus antecedentes, tratamiento requerido y situación económica.",
  },
  {
    step: "02",
    title: "Evaluación individualizada",
    description:
      "El equipo de la fundación analiza el caso y determina los porcentajes de subvención posibles para cada tratamiento.",
  },
  {
    step: "03",
    title: "Asignación del beneficio",
    description:
      "Se asigna el beneficio correspondiente y se coordinan las atenciones y productos con la red de profesionales.",
  },
] as const;

export const values = [
  {
    title: "Empatía",
    description:
      "Entendemos que muchos tratamientos son costosos y prolongados, especialmente para quienes conviven con enfermedades crónicas.",
  },
  {
    title: "Rigor profesional",
    description:
      "Cada intervención se realiza bajo supervisión médica, con protocolos seguros y equipos de máxima calidad.",
  },
  {
    title: "Transparencia",
    description:
      "Informamos con claridad a dónde llega cada aporte y mantenemos comunicación directa con el beneficiario y con la comunidad.",
  },
  {
    title: "Accesibilidad",
    description:
      "Diseñamos el programa de subvención para que un obstáculo económico no impida el acceso a una terapia esencial.",
  },
] as const;

export const team = [
  {
    name: "Mari",
    role: "Coordinación y atención de pacientes",
    image: "/images/equipo-mari.jpg",
  },
  {
    name: "Jocelyn Contreras Vargas",
    role: "Atención y orientación clínica",
    image: "/images/equipo-jocelyn.jpg",
  },
  {
    name: "Marcia Soto Hormazabal",
    role: "Coordinación administrativa",
    image: "/images/equipo-marcia.jpg",
  },
] as const;

export const faq = [
  {
    question: "¿Qué es la Fundación Dr. Rodrigo Testart Tobar?",
    answer:
      "Es un proyecto nacido con el propósito de apoyar la salud integral. La fundación gestiona el respaldo económico para que pacientes con enfermedades crónicas, como diabetes o cáncer, puedan acceder a terapias esenciales como la ozonoterapia, la medicina ortomolecular y los suplementos, que en muchos casos no están cubiertos por isapres, fonasa o seguros.",
  },
  {
    question: "¿Quiénes pueden postular?",
    answer:
      "Pueden postular personas que requieren un tratamiento y que, por su situación económica, no pueden cubrirlo por completo. La solicitud se evalúa de manera individualizada, considerando la situación particular de cada paciente y los recursos disponibles en ese momento.",
  },
  {
    question: "¿Cómo se hace la solicitud de apoyo?",
    answer:
      "El paciente debe presentar el formulario de solicitud disponible en la sección Contacto, indicando sus antecedentes personales, el tratamiento requerido y una breve descripción de su situación. Tras ello, el equipo de la fundación toma contacto, realiza la evaluación y comunica el resultado.",
  },
  {
    question: "¿Qué porcentaje de subvención se entrega?",
    answer:
      "La asignación de porcentajes de subvención para los tratamientos se determina de manera individualizada, considerando la situación particular de cada paciente y los recursos disponibles en ese momento por parte de la fundación.",
  },
  {
    question: "¿Cómo puedo aportar a la fundación?",
    answer:
      "Puedes realizar contribuciones únicas, aportes periódicos o simplemente difundir nuestra misión. Los aportes se realizan mediante transferencia a la cuenta indicada en la sección de donación, enviando luego tu nombre, RUT, teléfono y comprobante para poder acreditar tu contribución.",
  },
  {
    question: "¿Qué es la ozonoterapia?",
    answer:
      "La ozonoterapia es medicina natural que puede complementar una serie de tratamientos, mejorando índices de pacientes diabéticos, hipertensos o deportistas de alto rendimiento. Ayuda a fortalecer los ciclos celulares que mejoran la calidad de vida, disminuyendo la cantidad de fármacos que son administrados. Debe ser administrada por médicos especialistas, como el Dr. Rodrigo Testart, con más de 15 años de experiencia en ozonoterapia y más de 35 años como médico cirujano anestesista.",
  },
  {
    question: "¿Qué es el ozono?",
    answer:
      "El ozono es una partícula natural que nos protege de los rayos solares de alta energía. Está compuesto por 3 átomos de oxígeno y tiene una vida media baja. A nivel respiratorio puede generar daño si se respira en altas concentraciones y por mucho tiempo. Por otra parte, puede ser administrado de manera segura y eficaz por médicos especialistas en ozonoterapia por vía venosa, rectal, mediante aplicación en aceites ozonizados o en sueros especiales, además de inyección de ozono gaseoso en articulaciones.",
  },
  {
    question: "¿Para qué enfermedades sirve la ozonoterapia?",
    answer:
      "Se utiliza para múltiples enfermedades, entre las que destacan la artrosis, la hernia discal lumbar y cervical, el dolor crónico, la fibromialgia, el cansancio y la fatiga crónica, la vulvovaginitis y enfermedades inflamatorias en general, además de enfermedades neurodegenerativas como Alzheimer y Parkinson. La frecuencia de aplicación depende de lo que se busque lograr a nivel médico.",
  },
  {
    question: "¿La fundación reemplaza la consulta médica?",
    answer:
      "No. La fundación entrega apoyo económico y facilita el acceso a las terapias, pero todas las atenciones son realizadas por profesionales habilitados y bajo indicación médica. La evaluación de cada paciente la realiza el equipo médico de la fundación.",
  },
] as const;

export const experienceTimeline = [
  {
    year: "1981",
    title: "Licenciado de medicina",
    description: "Universidad de Chile.",
  },
  {
    year: "1983",
    title: "Médico cirujano",
    description: "Universidad de Valparaíso.",
  },
  {
    year: "1987",
    title: "Especialización en anestesia",
    description: "Universidad Católica de Lovaina, Bélgica.",
  },
  {
    year: "1996",
    title: "Postgrado en anestesia intravenosa TIVA",
    description: "King's College de la Universidad de Cambridge, Inglaterra.",
  },
  {
    year: "2019",
    title: "Inicio del proyecto Klotho3",
    description:
      "Empresa formada por médicos y profesionales, con resolución sanitaria 2005249673 del 31 de julio de 2020.",
  },
] as const;
