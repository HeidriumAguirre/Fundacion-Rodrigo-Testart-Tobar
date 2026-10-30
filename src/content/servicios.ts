export interface Product {
  name: string;
  format: string;
  description: string;
  image?: string;
  price?: string;
  notes?: string[];
}

export interface ServiceSection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
}

export interface Service {
  slug: string;
  title: string;
  eyebrow: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  summary: string;
  highlights: string[];
  sections: ServiceSection[];
  products?: Product[];
}

export const servicios: Service[] = [
  {
    slug: "consulta-medica-general",
    title: "Consulta médica general",
    eyebrow: "Atención clínica",
    subtitle:
      "El punto de partida de todo el programa: un diagnóstico claro, un tratamiento posible y una evaluación de subsidies.",
    image: "/images/dr-rodrigo-testart.jpg",
    imageAlt: "Dr. Rodrigo Testart Tobar, médico cirujano anestesista",
    summary:
      "El Dr. Rodrigo Testart, profesional titulado de la Universidad de Chile y postgrado en anestesia por la Universidad Católica de Lovaina, Bélgica, genera los diagnósticos, examen, tratamiento, seguimiento y consejo médico de cada paciente.",
    highlights: [
      "Diagnóstico, tratamiento y seguimiento",
      "Evaluación inicial para el programa de subvención",
      "Más de 40 años de experiencia médica",
    ],
    sections: [
      {
        heading: "En qué consiste",
        paragraphs: [
          "La consulta médica general es el punto de partida del proceso. A partir de una evaluación clínica completa se genera el diagnóstico, el plan de tratamiento, el seguimiento y el consejo que el paciente necesita para su recuperación.",
          "Cuando la Fundación Dr. Rodrigo Testart Tobar evalúa una solicitud de apoyo, esta atención es el punto de partida del expediente: permite conocer el tratamiento requerido, su duración estimada y el monto del apoyo que la fundación puede otorgar.",
        ],
      },
      {
        heading: "Cómo agendar",
        paragraphs: [
          "Para consultar, agendar y conocer valores llama al 2 33 65 00 48. Las atenciones se realizan de lunes a viernes, dentro del horario de 09:00 a 18:00 horas.",
        ],
      },
    ],
  },
  {
    slug: "ozonoterapia",
    title: "Ozonoterapia",
    eyebrow: "Tratamiento complementario",
    subtitle:
      "Procedimientos de ozonoterapia seguros según las necesidades de cada paciente, deportista o persona.",
    image: "/images/servicio-ozonoterapia.jpg",
    imageAlt: "Aplicación de ozonoterapia en un paciente",
    summary:
      "La ozonoterapia es medicina natural que puede complementar una serie de tratamientos, mejorando índices de pacientes diabéticos, hipertensos o deportistas de alto rendimiento y disminuyendo la cantidad de fármacos administrados.",
    highlights: [
      "Más de 15 años de experiencia en ozonoterapia",
      "Autohemoterapia mayor, menor y procedimiento Lahodny",
      "Aplicación rectal (RIO3) y en aceites ozonizados",
    ],
    sections: [
      {
        heading: "Declaración de Madrid sobre la Ozonoterapia",
        paragraphs: [
          "La ozonoterapia tiene que ser practicada como un tratamiento complementario, adyuvante o paliativo para diversas enfermedades. La ozonoterapia es parte de las técnicas de las nuevas tecnologías que complementan y facilitan los tratamientos convencionales. Es una herramienta más en el arsenal médico.",
        ],
      },
      {
        heading: "Métodos recomendados por el Dr. Rodrigo Testart",
        list: [
          "Autohemoterapia mayor, menor y procedimiento Lahodny: permiten saber con certeza la cantidad de ozono que se administra a cada paciente y realizar un seguimiento perfecto de los resultados.",
          "Aplicación de RIO3 o inyección rectal: los intestinos pueden absorber de manera segura el ozono. Es la alternativa recomendada para personas con venas muy dañadas o que practiquen una religión que no permite la extracción de sangre.",
          "Uso diario y constante de aceite ozonizado: entrega mayor energía, potencia el sistema inmunológico y puede administrarse de forma segura por cada integrante de la familia.",
        ],
      },
      {
        heading: "Para qué enfermedades se recomienda",
        paragraphs: [
          "Este tratamiento se utiliza para múltiples enfermedades, entre las que destacan la artrosis, la hernia discal lumbar y cervical, el dolor crónico, la fibromialgia, el cansancio y la fatiga crónica, la vulvovaginitis y enfermedades inflamatorias en general, además de enfermedades neurodegenerativas como Alzheimer y Parkinson.",
          "La frecuencia de aplicación depende de lo que se quiera lograr a nivel médico. Por ejemplo, si es un dolor en alguna articulación, la aplicación puede ser única. Por otra parte, si se quiere potenciar la generación de la proteína S-Klotho, se deben realizar sesiones continuas a lo largo de la vida.",
          "La ozonoterapia, al entregar más oxígeno, revitaliza todos los ciclos celulares y mejora el sistema circulatorio, entregando oxígeno en vasos dañados.",
        ],
      },
      {
        heading: "¿Qué es el ozono?",
        paragraphs: [
          "El ozono es una partícula natural que nos protege de los rayos solares de alta energía. Está compuesto por 3 átomos de oxígeno y tiene una vida media baja. A nivel respiratorio puede generar daño si se respira en altas concentraciones y por mucho tiempo.",
          "Por otra parte, el ozono puede ser administrado de manera segura y eficaz por médicos especialistas en ozonoterapia por vía venosa, rectal, mediante aplicación en aceites ozonizados o en sueros especiales, además de inyección de ozono gaseoso en articulaciones. Depende entonces el ozono de cómo se administre, de quién lo administre y que los equipos utilizados sean de la máxima calidad.",
        ],
      },
    ],
  },
  {
    slug: "vitamina-c-endovenosa",
    title: "Terapia con vitamina C endovenosa",
    eyebrow: "Medicina ortomolecular",
    subtitle: "Vitamina C o ácido ascórbico en altas dosis, bajo supervisión médica.",
    image: "/images/oleo3-35.jpg",
    imageAlt: "Aplicación endovenosa en un paciente",
    summary:
      "La vitamina C endovenosa es un potente antioxidante que participa en la formación de colágeno, potencia el sistema inmunológico y acompaña la reparación de tejidos.",
    highlights: [
      "Potente antioxidante en altas dosis",
      "Acción antiinflamatoria y cicatrizadora",
      "Acelera la cicatrización y la reparación de tejidos",
    ],
    sections: [
      {
        heading: "Beneficios de la vitamina C o ácido ascórbico",
        list: [
          "En altas dosis es un potente antioxidante.",
          "Rol esencial en la formación de colágeno.",
          "Potencia el sistema inmunológico.",
          "Frena el envejecimiento.",
          "Ayuda a disminuir la arteriosclerosis.",
          "Acelera los procesos de cicatrización y curación de heridas y/o quemaduras.",
          "Ayuda a la regeneración de articulaciones, cartílagos y tendones, y favorece el movimiento y la elasticidad de las articulaciones.",
          "Acción antiinflamatoria.",
          "Rejuvenece la piel y protege el tejido conectivo.",
          "Tratamiento para enfermedades degenerativas y cardiovasculares.",
        ],
      },
      {
        heading: "Post procedimiento",
        list: [
          "Se recomienda tomar agua durante y después del procedimiento, según necesidad.",
          "No ingerir azúcares ni café hasta 2 horas después de la aplicación.",
          "No tomar oxidantes el día de la administración de vitamina C, ni antes ni después, como aceite ozonizado o dióxido de cloro (CDS o MMS).",
        ],
      },
      {
        heading: "Sobre el colágeno",
        paragraphs: [
          "El colágeno es una proteína propia de cada persona, codificada en los cromosomas y presente en todos los tejidos del cuerpo, especialmente en articulaciones, cartílagos, tendones, ligamentos y piel. Su materia prima son los aminoácidos (desde alimentos ricos en proteínas), vitamina D, magnesio (citrato de magnesio) y silicio orgánico de bambú.",
          "Comer colágeno no sirve de nada, porque nuestro sistema digestivo lo reduce a aminoácidos. Al introducir una proteína animal o humana en nuestro cuerpo, siempre será procesada por nuestro organismo, rehaciendo la cadena proteica nuevamente.",
        ],
      },
    ],
  },
  {
    slug: "ondas-escalares-tesla",
    title: "Ondas escalares de Tesla",
    eyebrow: "Terapia Complementaria",
    subtitle:
      "Ondas longitudinales instantáneas que abarcan todo el cuerpo y transportan energía e información.",
    image: "/images/ozonoterapia-accion.jpg",
    imageAlt: "Sesión de ozonoterapia en el consultorio",
    summary:
      "Las ondas escalares son ondas longitudinales instantáneas que, a diferencia de las ondas electromagnéticas, no se propagan a lo largo de un eje en una determinada dirección. Son capaces de transportar y proporcionar energía e información.",
    highlights: [
      "Aumenta la energía celular",
      "Mejora la circulación y reduce la inflamación",
      "Protege y repara el ADN",
    ],
    sections: [
      {
        heading: "Nuevos paradigmas",
        paragraphs: [
          "Es un hecho que no sólo hay materia en el universo, sino también ondas, y las moléculas no sólo interactúan por contacto sino también por ondas. Por eso hablamos de señales electromagnéticas específicas, incluso de fenómenos de resonancia de acciones a distancia y de interferencias.",
          "Los gérmenes, virus y bacterias utilizan efectivamente estas ondas por su ADN o ARN para amplificar su efecto.",
          "Es en este sentido que las ondas Tesla o escalares restablecen la comunicación intracelular e intercelular, ayudando también a limpiar nuestra agua del daño informativo provocado por las emisiones de ondas de altísima potencia como las 5G.",
        ],
      },
      {
        heading: "El origen de las enfermedades",
        paragraphs: [
          "Las causas principales de determinadas enfermedades están originadas en un bloqueo de nuestras vías energéticas. Cuando hay un bloqueo, el metabolismo local se ralentiza y la estructura del cuerpo se vuelve menos energética, es menos capaz de eliminar los desechos químicos, causando una mayor acumulación de toxinas.",
          "Una vez que el nivel de energía cae por debajo de un umbral crítico, el inicio de una enfermedad crónica está cerca.",
          "Las células utilizan ondas escalares para comunicarse entre sí, y los tratamientos con estas ondas introducen energía a las células que restaura esta comunicación. Las mitocondrias son las centrales eléctricas de las células: las ondas escalares las cargan y proporcionan más energía para una mejor función.",
        ],
      },
      {
        heading: "Beneficios de las ondas escalares",
        list: [
          "Aumenta la energía celular.",
          "Retrasa el envejecimiento.",
          "Mejora la circulación corporal.",
          "Baja la presión arterial alta.",
          "Reduce el dolor y la inflamación.",
          "Ayuda en la artritis.",
          "Estimula la función inmune natural para matar virus y bacterias.",
          "Acelera la curación natural.",
          "Mejora la permeabilidad de las paredes celulares.",
          "Mejora la absorción de nutrientes celulares y la desintoxicación de residuos.",
          "Elimina las células cancerosas.",
          "Protege nuestro cuerpo del cáncer.",
          "Disminuye el daño por estrés.",
          "Mejora la calidad del sueño.",
          "Cura los nervios.",
          "Ayuda con la depresión.",
          "Despeja la mente.",
          "Mejora la concentración y la memoria.",
          "Alivia la migraña.",
          "Reduce los efectos nocivos de los campos electromagnéticos de teléfonos celulares, computadoras y wifi.",
          "Protege y repara el ADN.",
        ],
      },
    ],
  },
  {
    slug: "aceites-ozonizados",
    title: "Aceites ozonizados",
    eyebrow: "Productos",
    subtitle: "Oxigena tu interior. Superalimento descubierto por Nikola Tesla.",
    image: "/images/servicio-oleo3.jpg",
    imageAlt: "Aceite ozonizado OLEO3",
    summary:
      "Los aceites ozonizados existen hace más de 100 años, desde que Nikola Tesla los descubrió. Contienen enlaces con oxígeno que ayudan a complementar y tratar enfermedades degenerativas: más oxígeno es más energía y más ATP.",
    highlights: [
      "Más oxígeno, más protección",
      "Fabricado en Chile con aceite de oliva orgánico",
      "Fortalece el sistema inmunológico y descongestiona el sistema digestivo",
    ],
    sections: [
      {
        heading: "Sobre los aceites ozonizados",
        paragraphs: [
          "OLEO3 y OZONO LIMÓN son aceites de oliva oxigenados por proceso de ozonización. El ozono es un gas compuesto por 3 átomos de oxígeno y se ha reconocido, mediante múltiples estudios, como uno de los mejores antivirales, bactericidas y antifúngicos. Aumenta la energía intracelular y se recomienda como suplemento alimentario.",
          "El ozono reacciona con el aceite, produciendo compuestos naturales químicos oxigenados estables, denominados ozónidos y peróxidos, de alto poder oxidante. Este proceso se conoce como ozonización de Criegge. Al ser consumido por vía oral, estos compuestos son absorbidos y pueden fortalecer nuestro sistema inmune.",
          "Los ozónidos y peróxidos de hidrógeno liberan oxígeno, lo cual potencia y facilita procesos biológicos. Al consumir diariamente el aceite ozonizado puede disminuir las probabilidades de enfermedades degenerativas como Alzheimer, Parkinson y Diabetes, potencia las defensas naturales del cuerpo frente a amenazas externas como virus, hongos y bacterias, y favorece la recuperación rápida de atletas de alto rendimiento.",
        ],
      },
      {
        heading: "Productos",
        paragraphs: [
          "Te invitamos a ser parte del wellness natural, el fitness y la gestión de tu cuerpo, reduciendo probabilidades de problemas de salud a medida que pasan los años, sobre todo después de los 40 años.",
        ],
      },
    ],
    products: [
      {
        name: "OLEO3 250 mL",
        format: "Aceite de oliva ozonizado, sabor natural",
        description:
          "Dosis diaria de 10 mL en condiciones normales. Envase de 250 mL de aceite de oliva ozonizado.",
        image: "/images/producto-oleo3-250.jpg",
        price: "Consultar disponibilidad",
        notes: ["Dosis diaria: 10 mL", "Conservar en lugar fresco y seco"],
      },
      {
        name: "OZONO LIMÓN 200 mL",
        format: "Aceite de oliva orgánico con doble ozonizado y sabor a limón",
        description:
          "Aceite de oliva orgánico con doble ozonizado y un toque a sabor a limón totalmente natural y orgánico, en un envase ámbar que protege de la luz solar.",
        image: "/images/producto-ozono-limon.jpg",
        price: "CLP 26.900.-",
        notes: [
          "Contiene 40 dosis de 5 mL",
          "Consumo habitual: 5 mL diarios (adulto)",
          "No exponer al sol, mantener a la sombra o refrigerado",
          "Fabricado por KLOTHO3, resolución sanitaria 2005249673",
        ],
      },
      {
        name: "OLEO3 60 mL",
        format: "Formato ámbar robusto para llevar",
        description:
          "OLEO3 en formato de 60 mL, en envase ámbar más robusto para resistir el sol. Aceite ozonizado ideal para llevar en viajes, entrenar, escalar y como compañero de bolsillo.",
        image: "/images/producto-oleo3-60.jpg",
        price: "Consultar disponibilidad",
        notes: ["Ideal para viajes y uso diario", "Fácil de transportar"],
      },
    ],
  },
  {
    slug: "cremas-melatonina-mel13",
    title: "Cremas de melatonina MEL13",
    eyebrow: "Productos",
    subtitle:
      "A partir de un spin off en la Universidad de Granada, nace Pharmamel en España.",
    image: "/images/servicio-mel13.jpg",
    imageAlt: "Aplicación de crema de melatonina MEL13",
    summary:
      "Distribuidores oficiales en Chile de las cremas de melatonina de Pharmamel: MEL13, MEL13 PLUS, MEL13 SERUM y MEL13 EYES, productos del tratamiento antiaging MEL13.",
    highlights: [
      "Melatonina y Coenzima Q10 activos",
      "Más de 250 artículos científicos sobre melatonina",
      "Registro ISP chileno y certificaciones europeas",
    ],
    sections: [
      {
        heading: "Origen y respaldo científico",
        paragraphs: [
          "Las cremas de melatonina de Pharmamel nacen del estudio de la Dra. Germaine Escames y el Dr. Darío Acuña de la Universidad de Granada, España, con más de 250 artículos científicos sobre melatonina y más de 25 años de experiencia en melatonina y su aplicación en la piel.",
          "Existen dos tipos de melatonina en nuestro cuerpo: la pineal, encargada de nuestro sueño, y la extrapineal, que se encuentra en todas las demás células.",
          "Por medio de investigaciones y la formulación de MEL13, esta crema traspasa todas las capas de la piel manteniéndose en ellas durante bastantes horas. Esto permite detener tanto la producción de radicales libres en nuestra piel como ser un potente antiinflamatorio.",
        ],
      },
      {
        heading: "Propiedades y aplicaciones",
        list: [
          "Vitiligo.",
          "Cáncer a la piel.",
          "Exposición solar.",
          "Psoriasis.",
          "Acné.",
          "Irritación cutánea.",
          "Quemaduras y heridas.",
          "Cicatrización.",
          "Rush alérgico.",
          "Rosácea.",
          "Rutina antiaging.",
          "Depilación láser.",
          "Psoriasis eritrodérmica.",
        ],
      },
      {
        heading: "Tipos de piel",
        paragraphs: [
          "Cuentan con estudios para uso en todo tipo de pieles, hidratante, con registro ISP chileno y todas las certificaciones europeas. Descubre las cremas en nuestra tienda y recupera la elasticidad e hidratación de tu piel jóven y sana.",
        ],
      },
    ],
  },
];

export function getService(slug: string) {
  return servicios.find((servicio) => servicio.slug === slug);
}
