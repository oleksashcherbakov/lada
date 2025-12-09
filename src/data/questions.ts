export type Question = {

    id: number

    text: string

    options: { id: string; text: string; score: Record<string, number> }[]

}


export const QUESTIONS: Question[] = [

    {

        id: 1,

        text: 'Тобі більше подобається працювати з числами та логікою чи з людьми?',

        options: [

            { id: 'a', text: 'Числа та логіка', score: { STEM:2, TECH:1 }},

            { id: 'b', text: 'Люди та комунікація', score: { SOC:2, BUSINESS:1 }},

            { id: 'c', text: 'Творчі завдання', score: { ART:2 }},

        ]

    },

    {

        id: 2,

        text: 'Ти любиш створювати нові речі, малювати або писати?',

        options: [

            { id: 'a', text: 'Так, це моє', score: { ART:2 }},

            { id: 'b', text: 'Ні, віддаю перевагу точним наукам', score: { STEM:2 }},

            { id: 'c', text: 'І те й інше', score: { ART:1, STEM:1 }},

        ]

    },

    {

        id: 3,

        text: 'Чи подобається тобі керувати проєктами та людьми?',

        options: [

            { id: 'a', text: 'Так', score: { BUSINESS:2 }},

            { id: 'b', text: 'Ні', score: { SOC:1 }},

            { id: 'c', text: 'Інколи', score: { BUSINESS:1, TECH:1 }},

        ]

    },

    {

        id: 4,

        text: 'Чи легко ти вчишся програмувати або розумієш алгоритми?',

        options: [

            { id: 'a', text: 'Так', score: { TECH:2, STEM:1 }},

            { id: 'b', text: 'Ні', score: {}},

            { id: 'c', text: 'Хочу спробувати', score: { TECH:1 }},

        ]

    },

    {

        id: 5,

        text: 'Чи подобається тобі допомагати іншим, працювати в соціальній сфері?',

        options: [

            { id: 'a', text: 'Так', score: { SOC:2 }},

            { id: 'b', text: 'Ні', score: {}},

            { id: 'c', text: 'Іноді', score: { SOC:1 }},

        ]

    },

    {

        id: 6,

        text: 'Ти віддаєш перевагу лабораторним дослідам і точним вимірюванням?',

        options: [

            { id: 'a', text: 'Так', score: { STEM:2 }},

            { id: 'b', text: 'Ні', score: {}},

            { id: 'c', text: 'Інколи', score: { STEM:1 }},

        ]

    },

    {

        id: 7,

        text: 'Чи цікавишся дизайном, модою або візуальними мистецтвами?',

        options: [

            { id: 'a', text: 'Так', score: { ART:2 }},

            { id: 'b', text: 'Ні', score: {}},

            { id: 'c', text: 'Трохи', score: { ART:1 }},

        ]

    },

    {

        id: 8,

        text: 'Ти добре вирішуєш складні технічні задачі?',

        options: [

            { id: 'a', text: 'Так', score: { TECH:2, STEM:1 }},

            { id: 'b', text: 'Ні', score: {}},

            { id: 'c', text: 'Інколи', score: { TECH:1 }},

        ]

    },

    {

        id: 9,

        text: 'Чи подобається тобі аналізувати економіку, бізнес-кейси, створювати стартапи?',

        options: [

            { id: 'a', text: 'Так', score: { BUSINESS:2 }},

            { id: 'b', text: 'Ні', score: {}},

            { id: 'c', text: 'Інколи', score: { BUSINESS:1 }},

        ]

    },

    {

        id: 10,

        text: 'Ти віддаєш перевагу командній роботі чи індивідуальним проєктам?',

        options: [

            { id: 'a', text: 'Командна', score: { BUSINESS:1, SOC:1 }},

            { id: 'b', text: 'Індивідуальна', score: { ART:1, TECH:1 }},

            { id: 'c', text: 'І те й інше', score: { STEM:1, BUSINESS:1 }},

        ]

    }

]

