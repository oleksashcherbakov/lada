import { QUESTIONS } from '../data/questions'



export type Profile = 'STEM'|'ART'|'SOC'|'BUSINESS'|'TECH'



export function scoreAnswers(answers: Record<number,string>){

    const totals: Record<Profile, number> = { STEM:0, ART:0, SOC:0, BUSINESS:0, TECH:0 }

    QUESTIONS.forEach(q=>{

        const aid = answers[q.id]

        if(!aid) return

        const opt = q.options.find(o=>o.id===aid)

        if(!opt) return

        Object.entries(opt.score).forEach(([k,v])=>{

            (totals as any)[k] += v

        })

    })

    return totals

}



export function interpretTotals(totals: Record<string,number>){

    // determine top profile and give recommendations

    const entries = Object.entries(totals).sort((a,b)=>b[1]-a[1])

    const primary = entries[0][0]

    const secondary = entries[1][0]



    const map: Record<string, { title:string; description:string; careers:string[] }>= {

        STEM: {

            title: 'Технічні та природничі науки (STEM)',

            description: 'Підходить для тих, хто любить точні науки, експерименти та аналіз.',

            careers: ['Інженер', 'Фізик', 'Біотехнолог', 'Хімік', 'Дослідник']

        },

        ART: {

            title: 'Мистецтво та креативність',

            description: 'Підходить для творчих людей: дизайн, медіа, реклама, мистецтво.',

            careers: ['Графічний дизайнер', 'Ілюстратор', 'Маркетолог-креатор', 'Архітектор']

        },

        SOC: {

            title: 'Соціальні та гуманітарні науки',

            description: 'Підходить для тих, хто любить працювати з людьми і допомагати.',

            careers: ['Психолог', 'Соціальний працівник', 'Вчитель', 'HR-фахівець']

        },

        BUSINESS: {

            title: 'Бізнес та менеджмент',

            description: 'Підходить для управління, підприємництва та економіки.',

            careers: ['Менеджер', 'Аналітик', 'Підприємець', 'Фінансовий консультант']

        },

        TECH: {

            title: 'ІТ та технології',

            description: 'Підходить для розробки програмного забезпечення, систем та інфраструктури.',

            careers: ['Software Engineer', 'DevOps', 'Data Scientist', 'Mobile Developer']

        }

    }



    return {

        primary: map[primary],

        secondary: map[secondary],

        raw: totals

    }

}

