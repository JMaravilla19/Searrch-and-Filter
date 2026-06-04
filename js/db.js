const autos = [
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2020,
		precio: 30000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2026,
		precio: 300000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Acura',
		modelo: 'MDX',
		year: 2021,
		precio: 40000,
		puertas: 4,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'Acura',
		modelo: 'TLX Type S',
		year: 2021,
		precio: 50000,
		puertas: 4,
		color: 'Negro',
		transmision: 'automatico'
	},
	{
		marca: 'Audo',
		modelo: 'Q2',
		year: 2021,
		precio: 60000,
		puertas: 4,
		color: 'Rojo',
		transmision: 'automatico'
	},
	{ 
        marca: 'Audi', 
        modelo: 'A4', 
        year: 2020, 
        precio: 40000, 
        puertas: 4, 
        color: 'Negro', 
        transmision: 'automatico' 
    },
	{
		marca: 'Ford',
		modelo: 'Mustang',
		year: 2015,
		precio: 20000,
		puertas: 2,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ 
        marca: 'Audi', 
        modelo: 'A6', 
        year: 2020, 
        precio: 35000, 
        puertas: 4, 
        color: 'Negro', 
        transmision: 'automatico' 
    },
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2016,
		precio: 70000,
		puertas: 4,
		color: 'Rojo',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2015,
		precio: 25000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Chevrolet',
		modelo: 'Camaro',
		year: 2018,
		precio: 60000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{ 
        marca: 'Ford', 
        modelo: 'Mustang', 
        year: 2019, 
        precio: 80000, 
        puertas: 2, 
        color: 'Rojo', 
        transmision: 'manual' 
    },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2020,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ 
        marca: 'Audi', 
        modelo: 'A3', 
        year: 2017, 
        precio: 55000, 
        puertas: 2, 
        color: 'Negro', 
        transmision: 
        'manual' 
    },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2020,
		precio: 25000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 45000,
		puertas: 4,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2019,
		precio: 90000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ 
        marca: 'Ford', 
        modelo: 'Mustang', 
        year: 2017, 
        precio: 60000, 
        puertas: 2, 
        color: 'Negro', 
        transmision: 'manual' 
    },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2015,
		precio: 35000,
		puertas: 2,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2018,
		precio: 50000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2017,
		precio: 80000,
		puertas: 4,
		color: 'Negro',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ 
        marca: 'Audi', 
        modelo: 'A4', 
        year: 2016, 
        precio: 30000, 
        puertas: 4, 
        color: 'Azul', 
        transmision: 'automatico' 
    },
	{
		marca: 'Mazda',
		modelo: '3 i Sport',
		year: 2026,
		precio: 40000,
		puertas: 4,
		color: 'Rojo',
		transmision: 'automatico'
	},
	{
		marca: 'Mazda',
		modelo: '2 i',
		year: 2026,
		precio: 20000,
		puertas: 4,
		color: 'Gris',
		transmision: 'Manual'
	},
	{
		marca: 'Toyota',
		modelo: 'Yaris Hatchback',
		year: 2025,
		precio: 30000,
		puertas: 4,
		color: 'Azul',
		transmision: 'Manual'
	},
	{
		marca: 'Chevrolet',
		modelo: 'Aveo',
		year: 2025,
		precio: 20000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'automatico'
	},
	{
		marca: 'Toyota',
		modelo: 'Yaris Sedan',
		year: 2024,
		precio: 20000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'Manual'
	},
	{
		marca: 'Chevrolet',
		modelo: 'Aveo Hatchback',
		year: 2024,
		precio: 30000,
		puertas: 4,
		color: 'Rojo',
		transmision: 'automatico'
	}

];
