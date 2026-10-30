export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; source?: string };

export interface Article {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  dateLabel: string;
  readingTime: string;
  author: string;
  image: string;
  imageAlt: string;
  blocks: ArticleBlock[];
}

export const articulos: Article[] = [
  {
    slug: "citrato-de-magnesio",
    title: "Citrato de magnesio",
    category: "Nutrición",
    excerpt:
      "El magnesio es el cuarto mineral más abundante en el cuerpo humano. Se aporta solamente a través de las comidas o suplementos, y dentro de los suplementos el más recomendado es el citrato de magnesio.",
    date: "2023-05-22",
    dateLabel: "22 de mayo de 2023",
    readingTime: "2 min de lectura",
    author: "Fundación Dr. Rodrigo Testart Tobar",
    image: "/images/servicio-oleo3.jpg",
    imageAlt: "Producto natural de la línea de la fundación",
    blocks: [
      {
        type: "paragraph",
        text: "El magnesio es el cuarto mineral más abundante en el cuerpo humano y lo encontramos principalmente en los huesos. Se aporta solamente a través de las comidas o suplementos. Dentro de los suplementos, el más recomendado es el Citrato de Magnesio. Este mineral es esencial para el funcionamiento de las células, los músculos, el cerebro y el corazón.",
      },
      {
        type: "paragraph",
        text: "Obtenemos magnesio de las verduras de hoja verde (por la clorofila) como espinacas, los frutos secos y los cereales. Es importante suplementar el magnesio, dado que actualmente no logramos obtener lo necesario de la alimentación, es por esto que la carencia de magnesio es una de las deficiencias nutricionales más frecuentes que afecta a la población.",
      },
      {
        type: "paragraph",
        text: "Signos de carencia de magnesio son la fatiga, dolores o calambres musculares, problemas para dormir, estreñimiento, entre otros.",
      },
      {
        type: "paragraph",
        text: "El magnesio ayuda a calcificar los huesos, evitando así la osteoporosis. También es esencial en la función eléctrica del corazón, como también en el músculo cardíaco: la suplementación de este mineral previene las enfermedades cardiovasculares. El magnesio es también coayudante en el manejo de la diabetes. Un nivel adecuado de magnesio nos ayuda a absorber más vitamina D, lo cual es fundamental en múltiples funciones, esencialmente en el sistema inmunológico y en la calcificación ósea.",
      },
      { type: "heading", text: "El magnesio nos ayuda en" },
      {
        type: "list",
        items: [
          "La síntesis de proteínas, que son fundamentales para la vida.",
          "Eliminar sustancias tóxicas.",
          "Regulación del metabolismo.",
          "Evitar la osteoporosis y mejorar la calidad ósea.",
          "Efecto antidepresivo.",
          "Relajante muscular.",
          "Efecto tranquilizante.",
          "Ayuda a bien dormir.",
          "Efecto adelgazante.",
          "Protector cerebral.",
          "Propiedades depurativas y desintoxicantes.",
          "Evita la formación de cálculos renales.",
          "Ayuda a controlar la presión arterial.",
          "Previene diabetes.",
          "Alivia el estreñimiento.",
          "Previne contracturas musculares y calambres.",
        ],
      },
      {
        type: "paragraph",
        text: "Se recomienda suplementar entre 500 y 2000 mg de Citrato de Magnesio al día. Una dosis de 500 mg en la noche habitualmente es suficiente, según necesidad e indicación médica profesional.",
      },
    ],
  },
  {
    slug: "melatonina-super-particula-de-la-juventud",
    title: "La melatonina, la súper partícula de la juventud",
    category: "Investigación",
    excerpt:
      "Teoría mitocondrial del envejecimiento: la melatonina es una hormona natural, componente más importante del sistema antioxidante del organismo.",
    date: "2023-05-08",
    dateLabel: "8 de mayo de 2023",
    readingTime: "7 min de lectura",
    author: "Fundación Dr. Rodrigo Testart Tobar",
    image: "/images/servicio-mel13.jpg",
    imageAlt: "Aplicación de crema de melatonina",
    blocks: [
      { type: "heading", text: "Teoría mitocondrial del envejecimiento" },
      {
        type: "paragraph",
        text: "Es una hormona que se encuentra de forma natural en nuestro cuerpo y es el componente más importante del sistema antioxidante del organismo.",
      },
      {
        type: "paragraph",
        text: "El envejecimiento ocurre a todos los niveles de la organización biológica. Las capacidades fisiológicas aumentan durante la maduración para después decaer linealmente con la edad. Este proceso da lugar a una disminución en la resistencia y a un aumento de la fragilidad celular, que con el tiempo se manifiesta en enfermedades asociadas al envejecimiento.",
      },
      {
        type: "paragraph",
        text: "Se considera hoy día como causa de primera importancia en el envejecimiento el acúmulo lento y progresivo de radicales libres de oxígeno y nitrógeno (ROS/RNS) que se producen a lo largo de la vida. Los radicales libres, tanto los que se generan en la propia mitocondria como los que le llegan desde el citosol, van dañando inexorablemente a la célula y la función mitocondrial va disminuyendo lentamente. Como consecuencia, la cadena de transporte electrónico (CTE) y la fosforilación oxidativa se hacen ineficientes, disminuyendo la producción de ATP. En esta situación, la mitocondria se hace más vulnerable al ataque de los ROS/RNS, disminuyendo todavía más su eficiencia. Así se cierra un círculo vicioso que termina en apoptosis o muerte celular programada. Esta es la base de la teoría mitocondrial del envejecimiento.",
      },
      {
        type: "paragraph",
        text: "En una gran mayoría de patologías degenerativas asociadas al envejecimiento, el aumento en la producción de especies reactivas va asociado a la perpetuación de un proceso inflamatorio crónico. Por otro lado, las radiaciones ionizantes, como la ultravioleta (RUV), son ejemplos claros de inductores de ROS, responsables del daño oxidativo y lesión inmune de los tejidos periféricos como la piel.",
      },
      {
        type: "paragraph",
        text: "Datos recientes indican que, además de los ROS, el óxido nítrico (NO), un componente de los radicales libres de nitrógeno, afecta notablemente la respiración y es causa directa del fracaso mitocondrial. El NO y el oxígeno compiten por el mismo sitio de unión en el complejo IV de la CTE. Conforme aumenta la concentración mitocondrial de NO, se inhiben los complejos III, II y I, dañando de forma grave la CTE, aumentando la producción de ROS/RNS, que termina en la liberación de citocromo c al citosol para iniciar los procesos apoptóticos.",
      },
      { type: "heading", text: "La melatonina" },
      {
        type: "paragraph",
        text: "La melatonina se descubrió inicialmente como un producto de la glándula pineal, aunque sabemos hoy en día que es producida ubicuamente en el organismo. Entre los lugares de producción extrapineal están, entre otros, la retina, timo, intestino, hígado, cerebro, músculo esquelético y cardíaco, células del sistema inmune, ovario, testículo y la piel.",
      },
      {
        type: "paragraph",
        text: "El papel de la glándula pineal es producir melatonina de forma cíclica, generando un ritmo circadiano de la hormona con un pico nocturno que sincroniza a su vez otros ritmos endocrinos y no endocrinos, como el ritmo sueño-vigilia, la actividad antioxidante y la respuesta de la inmunidad innata del organismo.",
      },
      {
        type: "paragraph",
        text: "La producción de melatonina disminuye con la edad, siendo significativa esta disminución a partir de los 40 años. La melatonina presenta una serie de acciones no hormonales, que incluyen su actividad antioxidante, antiinflamatoria y depuradora de radicales libres. La melatonina es el más importante componente del sistema antioxidante del organismo y mantiene la homeostasis redox de la célula. Presenta una alta capacidad para depurar radicales hidroxilo y peroxinitritos, así como también anión superóxido, peróxido de hidrógeno y NO, protegiendo la célula del ataque de dichos radicales libres.",
      },
      {
        type: "paragraph",
        text: "La ventaja de la melatonina como antioxidante es triple: es una molécula muy lipofílica, alcanzando todas las estructuras intracelulares y protegiéndolas del ataque oxidativo; depura radicales libres y aumenta el GSH, necesario para el equilibrio redox de la célula y, a través de un efecto genómico, aumenta la expresión y actividad de la glutation reductasa y peroxidasa. Esta actividad antioxidante puede ser la base de las acciones reguladoras del ciclo celular por parte de la melatonina, incluyendo la inhibición de la apoptosis.",
      },
      {
        type: "paragraph",
        text: "Entre otras acciones antioxidantes y antiinflamatorias bien documentadas experimentalmente, la melatonina se comporta como un antioxidante más potente que las vitaminas E y C y que el deprenilo para inhibir la oxidación de la dopamina, y revierte la oxidación del complejo I mitocondrial inducida por potentes neurotoxinas como el MPTP, recuperando la energética mitocondrial y la actividad locomotora normal en ratones parkinsonianos.",
      },
      {
        type: "paragraph",
        text: "Sobre todo, la melatonina reduce la expresión y actividad de la i-mtNOS, reduciendo significativamente los niveles mitocondriales de NO, normalizando la actividad de la CTE y la producción de ATP. Estos ejemplos de la eficacia antioxidante y antiinflamatoria de la melatonina son la base de su utilidad clínica.",
      },
      { type: "heading", text: "La melatonina y la piel" },
      {
        type: "paragraph",
        text: "La piel participa en el mantenimiento de la homeostasis del cuerpo debido a su localización entre el medio ambiente y el medio interno. Está en continua comunicación con los sistemas inmune, neural y endocrino y, por tanto, comparte numerosos mediadores con el sistema nervioso central y con el sistema endocrino. La piel de los mamíferos contiene toda la maquinaria molecular y bioquímica necesaria para la síntesis de melatonina a partir del triptófano.",
      },
      {
        type: "paragraph",
        text: "Esta melatonina producida por la piel se metaboliza dando lugar a diferentes catabolitos como la N1-acetil-N2-formil-5-metoxiquinuramina (AFMK). Las UVB estimulan a su vez la formación de N1-acetil-5-metoxiquinuramina (AMK) a partir de AFMK. Estos metabolitos poseen acciones antioxidantes más potentes que la propia melatonina. En la piel, una de las actividades más importantes de la melatonina consiste en contrarrestar el daño oxidativo inducido diariamente por las RUV y otros polutantes ambientales.",
      },
      {
        type: "paragraph",
        text: "La melatonina actúa como un agente antiapoptótico, aumenta la viabilidad de las células irradiadas con RUV y suprime la formación de ROS. También inhibe la peroxidación lipídica y la formación de NO, reduce la producción de poliaminas y estimula los enzimas antioxidantes. La melatonina estabiliza la mitocondria aumentando la actividad de los complejos respiratorios y la eficiencia mitocondrial. Todo ello refleja las extraordinarias propiedades de la melatonina en el cuidado de la piel.",
      },
      { type: "heading", text: "Resultados" },
      {
        type: "paragraph",
        text: "Se ha demostrado que la melatonina protege las células frente a los efectos tóxicos de las radiaciones ionizantes. Por tanto, la melatonina puede proteger la integridad de la piel y ayudar a mantener las funciones de la barrera epidérmica y, a través de sus acciones antioxidantes, podría proteger los queratinocitos y los fibroblastos del daño producido por las radiaciones UVB. La melatonina previene el eritema así como del daño de la piel inducido por las radiaciones, además de tener efectos antimutagénicos, anticarcinogénicos y oncostáticos en la piel.",
      },
      {
        type: "paragraph",
        text: "La melatonina también inhibe la transcripción de los genes de los receptores α-estrogénicos y de proteínas inmunorreactivas en la piel, provocando una desensibilización de la piel a estímulos estrogénicos. Todos estos datos indican que la melatonina actúa como un importante regulador de las funciones y estructuras de la piel.",
      },
      {
        type: "quote",
        text: "Artículo original de Pharmamel.",
        source: "Pharmamel",
      },
    ],
  },
  {
    slug: "alergia-cutanea-dermatitis-atopica",
    title: "¿Alergia cutánea o dermatitis atópica? Sabes qué es",
    category: "Dermatología",
    excerpt:
      "¿Has notado últimamente un enrojecimiento en tu piel? ¿Alguna inflamación fuera de lo común? Puede que una alergia cutánea o una dermatitis atópica se haya despertado.",
    date: "2023-05-08",
    dateLabel: "8 de mayo de 2023",
    readingTime: "2 min de lectura",
    author: "Fundación Dr. Rodrigo Testart Tobar",
    image: "/images/mel13-banner.jpg",
    imageAlt: "Campaña de productos MEL13",
    blocks: [
      {
        type: "paragraph",
        text: "¿Has notado últimamente un enrojecimiento en tu piel? ¿Alguna inflamación fuera de lo común? ¿Lesiones de descamación en placas de la piel? ¿Aparición de intenso prurito o picor? Puede que esta primavera anticipada te haya despertado alguna alergia cutánea o algún tipo de dermatitis atópica.",
      },
      {
        type: "paragraph",
        text: "La dermatitis atópica puede aparecer en cualquier persona. Se llama atópica porque aparece más fácilmente en personas atópicas, es decir, con más facilidad para desarrollar enfermedades alérgicas de cualquier tipo, y en personas con familiares afectados de enfermedades alérgicas.",
      },
      {
        type: "paragraph",
        text: "Las alergias aparecen cuando tu sistema inmunitario reacciona ante alguna sustancia extraña como puede ser el polen, el veneno de abejas, la caspa de las mascotas, entre otras. Cuando tienes alergias, tu sistema inmunitario produce anticuerpos que van a identificar y a reaccionar con estas sustancias extrañas denominadas alérgenos. Estas reacciones van a provocar una serie de manifestaciones como eccemas en la piel, inflamación de los senos paranasales produciendo rinitis, inflamación de las vías respiratorias o del aparato digestivo.",
      },
      {
        type: "paragraph",
        text: "La gravedad de las alergias varía según las personas, ya que un proceso alérgico puede provocar desde una irritación menor hasta desencadenar un shock anafiláctico, siendo este una situación de emergencia potencialmente mortal. Al día de hoy hay numerosos tratamientos que pueden ayudarte a aliviar los síntomas de la alergia.",
      },
      {
        type: "quote",
        text: "Mel13, el excepcional tratamiento protector y regenerador celular avanzado a base de melatonina y Coenzima Q10, te ayuda a combatir los signos de la alergia que se presentan en la piel, más conocidos como dermatitis atópica.",
      },
      {
        type: "paragraph",
        text: "La dermatitis atópica es un trastorno alérgico de la piel que puede provocar eccemas o distintas lesiones de la piel que cursan con picazón, enrojecimiento y hojuelas o escamas.",
      },
      {
        type: "paragraph",
        text: "Para mitigar los efectos de esta patología, te recomendamos que uses las cremas Mel13, Mel13 Plus, Mel Serum y Mel Eyes, especialmente si notas los síntomas en el cutis.",
      },
      {
        type: "paragraph",
        text: "La melatonina protege la integridad de la piel y ayuda a mantener las funciones de la barrera epidérmica y, a través de sus acciones antioxidantes y antiinflamatorias, protege los queratinocitos y los fibroblastos del daño producido por las radiaciones UVB, además de los alérgenos.",
      },
      {
        type: "paragraph",
        text: "Si tienes algún tipo de duda, acude a alguna de las farmacias recomendadas para la venta de los productos Mel13 y consulta con tu farmacéutico.",
      },
    ],
  },
  {
    slug: "psoriasis-causas-tipos-y-tratamientos",
    title: "Qué es la psoriasis: guía rápida para entender sus causas, tipos y tratamientos",
    category: "Dermatología",
    excerpt:
      "La psoriasis es una enfermedad que principalmente afecta a la piel, las uñas y las articulaciones. En la mayoría de los casos cursa con placas rojas y descamación.",
    date: "2023-05-08",
    dateLabel: "8 de mayo de 2023",
    readingTime: "3 min de lectura",
    author: "Fundación Dr. Rodrigo Testart Tobar",
    image: "/images/servicio-mel13.jpg",
    imageAlt: "Cuidado de la piel con productos MEL13",
    blocks: [
      {
        type: "paragraph",
        text: "La psoriasis es una enfermedad que principalmente afecta a la piel, las uñas y las articulaciones. En la mayoría de los casos cursa con placas rojas y descamación.",
      },
      {
        type: "paragraph",
        text: "Se trata de una patología que, por sus características, no solo afecta físicamente, sino que también emocional y socialmente. Un porcentaje importante de las personas con psoriasis sufre depresión, ansiedad u otra enfermedad mental, según el Informe Mundial de la Felicidad elaborado por el World Happiness Institute.",
      },
      {
        type: "paragraph",
        text: "Por eso, en este artículo de Pharmamel queremos aportar nuestro granito de arena como expertos en el cuidado de la piel para hablar de la psoriasis y resolver dudas frecuentes. Entender qué es la psoriasis te proporcionará las herramientas para afrontar esta patología de la mejor forma posible o para entender a amigos y familiares con psoriasis.",
      },
      { type: "heading", text: "¿Se contagia la psoriasis?" },
      {
        type: "paragraph",
        text: "No. La psoriasis no se contagia. Es una enfermedad inflamatoria del sistema inmunitario, por lo general crónica, que presenta brotes, con exacerbaciones y remisiones, pero en ninguno de los casos es contagiosa.",
      },
      { type: "heading", text: "¿Qué causa esta enfermedad?" },
      {
        type: "paragraph",
        text: "La epidermis es la capa más externa de la piel y está formada por células que se llaman queratinocitos. Estas se originan en capas más profundas de la piel, aunque progresivamente van migrando hacia la superficie de la epidermis. A través de ese proceso, los queratinocitos que se encuentran en la superficie de la epidermis son reemplazados gradualmente por las células más jóvenes.",
      },
      {
        type: "paragraph",
        text: "Lo que ocurre con la psoriasis es que se produce un crecimiento demasiado rápido de las células de la piel. En lugar de renovarse en unas cuatro semanas, la formación de nuevas células de piel se acelera a unos siete días, debido a unas señales defectuosas que se originan en el sistema inmunológico. Este excesivo crecimiento genera tres de los rasgos característicos de la psoriasis: descamación, engrosamiento e inflamación de la piel.",
      },
      {
        type: "paragraph",
        text: "Las causas por las que aparece la psoriasis son variadas y responden a varios factores:",
      },
      {
        type: "list",
        items: [
          "Genéticos: no hay un gen portador de la psoriasis, pero sí una serie de características genéticas que hacen que el paciente pueda ser más propenso a desarrollar la enfermedad.",
          "Inmunológicos: en las personas afectadas por psoriasis, las células de la piel se renuevan con demasiada rapidez y hay dos tipos de células que causan inflamación: los neutrófilos polimorfonucleares y los linfocitos T.",
          "Ambientales: estrés, ciertos medicamentos, enfermedades víricas, traumatismos, cambios de estación, tejido de la ropa, tabaquismo, alcohol y otros factores pueden desencadenan brotes de psoriasis.",
        ],
      },
      { type: "heading", text: "¿Cuántos tipos de psoriasis hay?" },
      {
        type: "paragraph",
        text: "La psoriasis en placas es la más frecuente: afecta al 80% de las personas que sufren la enfermedad. Aunque puede aparecer por cualquier parte del cuerpo, suele afectar a codos, rodillas, espalda y cuero cabelludo.",
      },
      {
        type: "paragraph",
        text: "La psoriasis guttata se presenta en forma de pequeños puntos rojos escamosos y puede transformarse en psoriasis en placas, aunque en los casos leves también puede desaparecer sin tratamiento.",
      },
      {
        type: "paragraph",
        text: "Las variantes pustulosas se caracterizan por tener pústulas, que son protuberancias elevadas llenas de pus no infeccioso, y afectan mayormente a pies y manos. Puede aparecer como una complicación de la psoriasis en placas.",
      },
      {
        type: "paragraph",
        text: "La psoriasis flexural es poco frecuente y estas placas de color rojo intenso suelen aparecer en axilas, ingles, bajo el pecho y alrededor de los genitales y los glúteos.",
      },
      {
        type: "paragraph",
        text: "La psoriasis eritrodérmica recibe esta denominación cuando las lesiones afectan a casi toda la superficie cutánea. La piel se encuentra muy roja, caliente y se descama de forma abundante. Es la manifestación más grave de psoriasis, aunque es poco frecuente.",
      },
      { type: "heading", text: "¿Cómo se trata la psoriasis?" },
      {
        type: "paragraph",
        text: "Por lo general, la psoriasis es recurrente y crónica. Y, como en cualquier enfermedad, el tratamiento variará según la persona. En líneas generales, el tratamiento está enfocado al control de los síntomas y a la prevención de infecciones secundarias, y se podría resumir en:",
      },
      {
        type: "list",
        items: [
          "Tratamiento tópico en forma de lociones, cremas y champús para reducir la inflamación y el reemplazo celular. Se utilizan sobre todo corticoides, sustancias derivadas de la vitamina D, retinoides tópicos, breas y alquitranes, ácido salicílico y urea.",
          "Fototerapia, que sigue en plena vigencia hoy día por sus pocas contraindicaciones. Permite su uso en pacientes embarazadas, en pacientes con problemas hepáticos e incluso para personas con contraindicaciones para otros fármacos sistémicos utilizados.",
          "En casos graves, el especialista puede prescribir medicamentos como retinoides sistémicos o inmunosupresores.",
          "Estos tratamientos pueden combinarse para mejorar los resultados.",
        ],
      },
      {
        type: "paragraph",
        text: "Esperamos que este artículo de Pharmamel te haya ayudado a conocer y entender mejor qué es la psoriasis porque, sin lugar a dudas, el conocimiento es el primer paso para abordar o ayudar a otras personas a afrontar una enfermedad.",
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articulos.find((artículo) => artículo.slug === slug);
}
