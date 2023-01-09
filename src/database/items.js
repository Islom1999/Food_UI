export const COLORS = {
    white: '#ffffff',
    black: '#000000',
    lightGray: 'b3b4b6',
    accent: '#ffc231',
    accentRed: '#fb5d2e',
    accentPink: '#f96165'
}

export const Categories = [
    {
        name: 'Burger',
        image: require('../database/images/burger.png'),
        items:[
            {
                name: 'Classic Burger',
                weight: 120,
                rating: '5.0',
                price: 199,
                isTopOfTheWeek: true,
                image: require('../database/images/burger/classicburger.png'),
                size: 'Large 8',
                delivery: 25,
                crust: 'thin Crust',
                ingredients:[
                    require('../database/images/flour.png'),
                    require('../database/images/cheese.png'),
                    require('../database/images/Sliced-Onion.png'),
                    require('../database/images/Tomato.png'),
                ]
            },
            {
                name: 'Alo Tikki Burger',
                weight: 150,
                rating: '4.5',
                price: 99,
                isTopOfTheWeek: false,
                image: require('../database/images/burger/alootikkiburger.png'),
                size: 'Large 12',
                delivery: 25,
                crust: 'thin Crust',
                ingredients:[
                    require('../database/images/Sliced-Onion.png'),
                    require('../database/images/cheese.png'),
                    require('../database/images/Tomato.png'),
                    require('../database/images/flour.png'),
                ]
            },
            {
                name: 'Big Cheese',
                weight: 250,
                rating: '4.2',
                price: 299,
                isTopOfTheWeek: false,
                image: require('../database/images/burger/biggiecheese.png'),
                size: 'Large 12',
                crust: 'thin Crust',
                delivery: 35,
                ingredients:[
                    require('../database/images/Tomato.png'),
                    require('../database/images/Sliced-Onion.png'),
                    require('../database/images/flour.png'),
                    require('../database/images/cheese.png'),
                ]
            }
        ]
    },
    {
        name: 'Pizza',
        image: require('../database/images/pizza.png'),
        items:[
            {
                name: 'Pepperoni Pizza',
                weight: 190,
                rating: '3.7',
                price: 399,
                isTopOfTheWeek: true,
                image: require('../database/images/pizza/mexicangreenwave.png'),
                size: 'Large 14',
                crust: 'thin Crust',
                delivery: 25,
                ingredients:[
                    require('../database/images/Sliced-Onion.png'),
                    require('../database/images/cheese.png'),
                    require('../database/images/Tomato.png'),
                    require('../database/images/flour.png'),
                ]
            },
            {
                name: 'Plain Cheese Pizza',
                weight: 300,
                rating: '4.8',
                price: 449,
                isTopOfTheWeek: false,
                image: require('../database/images/pizza/plaincheesepizza.png'),
                size: 'Large 16',
                crust: 'thin Chesse',
                delivery: 25,
                ingredients:[
                    require('../database/images/Tomato.png'),
                    require('../database/images/cheese.png'),
                    require('../database/images/flour.png'),
                    require('../database/images/Sliced-Onion.png'),
                ]
            },
            {
                name: 'Mexican Green Pizza',
                weight: 450,
                rating: '4.3',
                price: 4000,
                isTopOfTheWeek: false,
                image: require('../database/images/pizza/pepperonipizza.png'),
                size: 'Large 10',
                crust: 'Thin Crust',
                delivery: 45,
                ingredients:[
                    require('../database/images/Tomato.png'),
                    require('../database/images/Sliced-Onion.png'),
                    require('../database/images/flour.png'),
                    require('../database/images/cheese.png'),
                ]
            },
        ]
    },
    {
        name: 'Soft Drinks',
        image: require('../database/images/softdrinks.png'),
        items:[
            {
                name: 'Coca Cola',
                weight: 200,
                rating: '5',
                price: 299,
                isTopOfTheWeek: true,
                image: require('../database/images/softdrinks/cocacola.png'),
                size: 'Medium Glass',
                crust: 'Small Ice',
                delivery: 10,
                ingredients:[
                    require('../database/images/softdrinks/cocacola.png'),
                ]
            },
            {
                name: 'Orange Juise',
                weight: 500,
                rating: '4.5',
                price: 250,
                isTopOfTheWeek: false,
                image: require('../database/images/softdrinks/orange.png'),
                size: 'Large Glass',
                crust: 'Large Ice',
                delivery: 8,
                ingredients:[
                    require('../database/images/softdrinks/cocacola.png'),
                ]
            },
            {
                name: 'Mongo Juise',
                weight: 150,
                rating: '4.3',
                price: 150,
                isTopOfTheWeek: false,
                image: require('../database/images/softdrinks/mango.png'),
                size: 'Large Glass',
                crust: 'Small Ice',
                delivery: 10,
                ingredients:[
                    require('../database/images/softdrinks/mango.png'),
                ]
            },
        ]
    }
]