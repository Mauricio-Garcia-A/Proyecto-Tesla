const mockProducts = [
    {
        id: 'model-s',
        title: 'Model S',
        subtitle: 'Programe una consulta virtual',
        imageHome: '/images/Model-S-Desktop.avif',
        imageFooter: '/images/model-s/MS-Footer-Desktop.avif',
        description: {
            image: '/images/model-s/Model-S-Main-Desktop.avif',
            characteristics: [
                {
                    id: 'range',
                    title: 'Autonomia (WLTP)',
                    value: '637 km',
                },
                {
                    id: 'acceleration',
                    title: '0-100 km/h*',
                    value: '2,1 s',
                },
                {
                    id: 'top-speed',
                    title: 'Velocidad maxima',
                    value: '322 km/h',
                },
                {
                    id: 'peak-power',
                    title: 'Potencia del vehiculo',
                    value: '1020 hp',
                },
            ],
        },
        exterior: {
            title: 'Exterior diseñado para la eficiencia',
            subtitle: 'Con un coeficiente de resistencia aerodinámica de solo .208 Cx, el más bajo del planeta, el Model S está construido para velocidad, resistencia y autonomía. La aerodinámica mejorada y un chasis más ancho ofrecen un desempeño con mayor capacidad de respuesta para que pueda tomar las curvas más rápido y con más confianza.',
            image: '/images/model-s/Model-S-Exterior-Desktop.avif',
            itemsExterior: [
                {
                    id: 'ms-item-exterior-a',
                    title: 'Desempeño implacable',
                    value: 'Un juego de llantas y rines escalonados, de altodesempeño, mantienen al auto plantado y ayudan atransferir aun mas potencia a la superficie.',
                    image: '/images/model-s/MS-Exterior-A-Desktop.avif',
                },
                {
                    id: 'ms-item-exterior-b',
                    title: 'Aerodinámica optimizada',
                    value: 'La atención al detalle en todas las superficiesexteriores hace del Model S el auto de producción másaerodinámico del mundo.',
                    image: '/images/model-s/MS-Exterior-B-Desktop.avif',
                },
                {
                    id: 'ms-item-exterior-c',
                    title: 'Diseño exterior refinado',
                    value: 'Una silueta icónica se combina con proporcionesrenovadas y elegantes.',
                    image: '/images/model-s/MS-Exterior-C-Desktop.avif',
                },
            ],
        },
        interior: {
            title: 'Interior del futuro',
            subtitle: '',
            image: '/images/model-s/Model-S-Interior-Desktop.avif',
            itemsInterior: [
                {
                    id: 'ms-item-interior-a',
                    title: 'Mantente conectado',
                    value: 'Conéctese al instante con Bluetooth multi dispositivo o dispositivos de carga rápida con carga inalámbrica y USB-C de 36 W.',
                    image: '/images/model-s/MS-Interior-A-Desktop.avif',
                },
                {
                    id: 'ms-item-interior-b',
                    title: 'Sonido envolvente',
                    value: 'Un sistema de audio de 22 bocinas y 960 vatios con reducción activa del ruido de la carretera ofrece una escucha inmersiva y una calidad de sonido de estudio.',
                    image: '/images/model-s/MS-Interior-B-Desktop.avif',
                },
                {
                    id: 'ms-item-interior-a',
                    title: 'Espacio para todo',
                    value: 'Con cajuelas delantera y trasera y asientos plegables puede colocar su bicicleta sin quitar la llanta—y su equipaje también.',
                    image: '/images/model-s/MS-Interior-C-Desktop.avif',
                },
            ],
        },
        performance: {
            title: 'Performance',
            subtitle: '',
            image: '/images/model-s/Model-S-Performance-Desktop.avif',
            itemsPerformance: [
                {
                    id: 'security',
                    title: 'Seguridad',
                    subtitle: 'Alta protección contra impactos',
                    value: 'El Model S se ha diseñado desde cero como vehículo eléctrico, con una arquitectura de alta resistencia y una batería montada en el suelo que, en conjunto, ofrecen una protección excelente a los ocupantes y reducen al máximo el riesgo de vuelco. Cada nuevo Model S incluye las últimas características de seguridad activa de Tesla, como el Freno de emergencia automático, sin coste adicional.',
                    image: '/images/model-s/MS-Performance-A-Desktop.avif',
                },
            ],
        },
        autopilot: {
            title: 'Autopilot',
            subtitle: 'El futuro de la conducción',
            image: '/images/model-s/Autopilot-Vision_Desktop.avif',
            itemsAutopilot: [
                {
                    id: '',
                    title: '360°',
                    subtitle: '',
                    value: 'Cámaras traseras, laterales y frontales que proporcionan una máxima visibilidad',
                    image: "",
                },
                {
                    id: '',
                    title: '250 m',
                    subtitle: '',
                    value: 'Potente procesamiento visual de hasta 250 metros de alcance',
                    image: "",
                },
                {
                    id: '',
                    title: 'Tesla Vision',
                    subtitle: '',
                    value: 'Tesla Vision detecta vehículos cercanos, ayuda a prevenir posibles colisiones y asiste con el estacionamiento',
                    image: "",
                },
            ],
            characteristics:{
                title:'Características',
                subtitle:'El Autopilot mejorado y la Capacidad de conducción autónoma total cuentan con funciones adicionales y mejoran las funciones existentes para que su auto tenga mayores capacidades al pasar del tiempo, incluyendo:',
                items: [
                    {
                        id:'item-autopilot-1',
                        image:'/images/model-s/Autopilot-V1.webm',
                        title:'Navegar en Autopilot',
                        subtitle:'Guía activa desde la rampa de entrada hasta la rampa de salida'
                    },
                    {
                        id:'item-autopilot-2',
                        image:'/images/model-s/Autopilot-V2.webm',
                        title:'Cambio de carril automático',
                        subtitle:'Cambie automáticamente de carril mientras conduce por la autopista'
                    },
                    {
                        id:'item-autopilot-3',
                        image:'/images/model-s/Autopilot-V3.webm',
                        title:'Llamar',
                        subtitle:'Convoque automáticamente a su auto'
                    },
                    {
                        id:'item-autopilot-4',
                        image:'/images/model-s/Autopilot-V4.webm',
                        title:'Estacionado automático',
                        subtitle:'Estacionamiento paralelo y perpendicular con un solo toque'
                    },

                ]
            }
        }

    },



    {
        id: '',
        title: '',
        subtitle: '',
        imageHome: '',
        imageFooter: '',
        description: {
            image: '',
            characteristics: [
                {
                    id: '',
                    title: '',
                    value: '',
                },
                {
                    id: '',
                    title: '',
                    value: '',
                },
                {
                    id: '',
                    title: '',
                    value: '',
                },
                {
                    id: '',
                    title: '',
                    value: '',
                },
            ],
        },
        exterior: {
            title: '',
            subtitle: '',
            image: '',
            itemsExterior: [
                {
                    id: '',
                    title: '',
                    value: '',
                    image: '',
                },
                {
                    id: '',
                    title: '',
                    value: '',
                    image: '',
                },
                {
                    id: '',
                    title: '',
                    value: '',
                    image: '',
                },
            ],
        },
        interior: {
            title: '',
            subtitle: '',
            image: '',
            itemsInterior: [
                {
                    id: '',
                    title: '',
                    value: '',
                    image: '',
                },
                {
                    id: '',
                    title: '',
                    value: '',
                    image: '',
                },
                {
                    id: '',
                    title: '',
                    value: '',
                    image: '',
                },
            ],
        },
        performance: {
            title: '',
            subtitle: '',
            image: '',
            itemsPerformance: [
                {
                    id: '',
                    title: '',
                    subtitle: '',
                    value: '',
                    image: '',
                },
            ],
        },
        autopilot: {
            title: '',
            subtitle: '',
            image: '',
            itemsAutopilot: [
                {
                    id: '',
                    title: '',
                    subtitle: '',
                    value: '',
                    image: '',
                },
            ],
            characteristics:{
                title:'',
                subtitle:'',
                items: [
                    {
                        id:'',
                        image:'',
                        title:'',
                        subtitle:''
                    },
                    {
                        id:'',
                        image:'',
                        title:'',
                        subtitle:''
                    },
                    {
                        id:'',
                        image:'',
                        title:'',
                        subtitle:''
                    },
                    {
                        id:'',
                        image:'',
                        title:'',
                        subtitle:''
                    },

                ]
            }
        }

    }

]


export function getProduct({idProduct}) {
    const product = mockProducts.find(product => product.id === idProduct)
    return {product}
}