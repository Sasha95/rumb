import swim from "../../resources/swim.png"
import bike from "../../resources/bike.png"
import regat from "../../resources/regat.png"
import image1 from "../../resources/image1.png"
import image2 from "../../resources/image2.png"
import { ICard } from "../dto/Card"

export const data: ICard[] = [{
    id: 1,
    freeSeats: 1,
    seats: 2,
    town: "Гент",
    country: "Бельгия",
    title: "Обучение морской одиночной регате от профессионалов",
    description: "Мыс Фиолент – это девственная природа, чистейший воздух, прозрачная вода Яшмового пляжа, тишина и спокойствие, цветущий миндаль и новые впечатления. Скалистый берег представляет собой нагромождение серых камней чередующихся с небольшими галечными пляжами. На протяжении более 6 километров вдоль берега моря высятся остроконечные скалы причудливой формы, мысы, напоминающие при некотором воображении сфинксов, львов, фантастические чудовища. На скалистых обрывах в районе мыса Фиолент и в бывших Митрополичьих садах растут редкие растения - дикие и высаженные монахами. Здесь обилие фисташки туполистной - очень древнее реликтовое растение. Встречается в этих местах и редкий крымский дикорос - можжевельник. На территории монастыря растут кустарниковый жасмин и скальный дуб, встречаются кизил обыкновенный и инжир, лечебные свойства которого известны с давних времен. Суровые, дикие, почти стометровой высоты скалы громоздятся здесь над морем. В береговых урочищах образовались многочисленные ниши, каменные хаосы, миниатюрные островки, арки. Особенно впечатляет островерхий утес самого мыса Фиолент и огромный грот Дианы.",
    dateOfStart: "2019-12-30",
    dateOfEnd: "2020-01-1",
    rate: 4.52,
    countRate: 1243,
    interes: "Регата",
    time: "48 часов",
    professional: "Для новичков",
    equipment: "Треб. снаряжение",
    cost: 91,
    services: 25.6,
    result: 116.6,
    valute: "$",
    from: "с человека",
    including: {
        inventory: "Комплект из специального термобелья, флисового костюма и водонепроницаемых штанов, и курток. В летнюю жару плавательные костюмы.",
        beverages: "Какие-то напитки",
        nutrition: "Какое-то питание",
    },
    requires: "Различные требования к экипировке, подготовке и т.д.. Возможно различные гайды",
    adress: {
        fullAdress: "Emile Braunplein, Гент, Бельгия",
        timeStart: "После 11:00",
        timeEnd: "17:00",
    },
    cancelReserv: " Если вы отменяете участие в туре в течение 24 часов с момента его бронирования, вы получаете полный возврат",
    images: [swim, image1, image2, swim, swim]
},
{
    id: 2,
    seats: 2,
    freeSeats: 2,
    town: "Гент",
    country: "Бельгия",
    title: "Групповой регата для любителей вдоль реки Лейе",
    description: "Мыс Фиолент – это девственная природа, чистейший воздух, прозрачная вода Яшмового пляжа, тишина и спокойствие, цветущий миндаль и новые впечатления. Скалистый берег представляет собой нагромождение серых камней чередующихся с небольшими галечными пляжами. На протяжении более 6 километров вдоль берега моря высятся остроконечные скалы причудливой формы, мысы, напоминающие при некотором воображении сфинксов, львов, фантастические чудовища. На скалистых обрывах в районе мыса Фиолент и в бывших Митрополичьих садах растут редкие растения - дикие и высаженные монахами. Здесь обилие фисташки туполистной - очень древнее реликтовое растение. Встречается в этих местах и редкий крымский дикорос - можжевельник. На территории монастыря растут кустарниковый жасмин и скальный дуб, встречаются кизил обыкновенный и инжир, лечебные свойства которого известны с давних времен. Суровые, дикие, почти стометровой высоты скалы громоздятся здесь над морем. В береговых урочищах образовались многочисленные ниши, каменные хаосы, миниатюрные островки, арки. Особенно впечатляет островерхий утес самого мыса Фиолент и огромный грот Дианы.",
    dateOfStart: "2019-12-30",
    dateOfEnd: "2020-01-02",
    rate: 4.8,
    countRate: 311,
    interes: "Регата",
    time: "",
    professional: "Для новичков",
    equipment: "Треб. снаряжение",
    cost: 85,
    services: 25,
    result: 110,
    valute: "$",
    from: "с человека",
    including: {
        inventory: "Комплект из специального термобелья, флисового костюма и водонепроницаемых штанов, и курток. В летнюю жару плавательные костюмы.",
        beverages: "Какие-то напитки",
        nutrition: "Какое-то питание",
    },
    requires: "Различные требования к экипировке, подготовке и т.д.. Возможно различные гайды",
    adress: {
        fullAdress: "Emile Braunplein, Гент, Бельгия",
        timeStart: "11:00",
        timeEnd: "17:00",
    },
    cancelReserv: " Если вы отменяете участие в туре в течение 24 часов с момента его бронирования, вы получаете полный возврат",
    images: [swim, bike, regat, swim, swim]
},
{
    id: 3,
    seats: 5,
    freeSeats: 2,
    town: "Гент",
    country: "Бельгия",
    title: "Обучение морской одиночной регате от профессионалов",
    description: "Мыс Фиолент – это девственная природа, чистейший воздух, прозрачная вода Яшмового пляжа, тишина и спокойствие, цветущий миндаль и новые впечатления. Скалистый берег представляет собой нагромождение серых камней чередующихся с небольшими галечными пляжами. На протяжении более 6 километров вдоль берега моря высятся остроконечные скалы причудливой формы, мысы, напоминающие при некотором воображении сфинксов, львов, фантастические чудовища. На скалистых обрывах в районе мыса Фиолент и в бывших Митрополичьих садах растут редкие растения - дикие и высаженные монахами. Здесь обилие фисташки туполистной - очень древнее реликтовое растение. Встречается в этих местах и редкий крымский дикорос - можжевельник. На территории монастыря растут кустарниковый жасмин и скальный дуб, встречаются кизил обыкновенный и инжир, лечебные свойства которого известны с давних времен. Суровые, дикие, почти стометровой высоты скалы громоздятся здесь над морем. В береговых урочищах образовались многочисленные ниши, каменные хаосы, миниатюрные островки, арки. Особенно впечатляет островерхий утес самого мыса Фиолент и огромный грот Дианы.",
    dateOfStart: "2019-12-30",
    dateOfEnd: "2020-01-02",
    rate: 4.91,
    countRate: 429,
    interes: "Регата",
    time: "48 часов",
    professional: "Для новичков",
    equipment: "Треб. снаряжение",
    cost: 120,
    services: 20.2,
    result: 140.2,
    valute: "$",
    from: "с человека",
    including: {
        inventory: "Комплект из специального термобелья, флисового костюма и водонепроницаемых штанов, и курток. В летнюю жару плавательные костюмы.",
        beverages: "Какие-то напитки",
        nutrition: "Какое-то питание",
    },
    requires: "Различные требования к экипировке, подготовке и т.д.. Возможно различные гайды",
    adress: {
        fullAdress: "Emile Braunplein, Гент, Бельгия",
        timeStart: "После 11:00",
        timeEnd: "17:00",
    },
    cancelReserv: " Если вы отменяете участие в туре в течение 24 часов с момента его бронирования, вы получаете полный возврат",
    images: [swim, bike, regat, swim, swim]
},
{
    id: 4,
    seats: 2,
    freeSeats: 1,
    town: "Гент",
    country: "Бельгия",
    title: "Обучение морской одиночной регате от профессионалов",
    description: "Мыс Фиолент – это девственная природа, чистейший воздух, прозрачная вода Яшмового пляжа, тишина и спокойствие, цветущий миндаль и новые впечатления. Скалистый берег представляет собой нагромождение серых камней чередующихся с небольшими галечными пляжами. На протяжении более 6 километров вдоль берега моря высятся остроконечные скалы причудливой формы, мысы, напоминающие при некотором воображении сфинксов, львов, фантастические чудовища. На скалистых обрывах в районе мыса Фиолент и в бывших Митрополичьих садах растут редкие растения - дикие и высаженные монахами. Здесь обилие фисташки туполистной - очень древнее реликтовое растение. Встречается в этих местах и редкий крымский дикорос - можжевельник. На территории монастыря растут кустарниковый жасмин и скальный дуб, встречаются кизил обыкновенный и инжир, лечебные свойства которого известны с давних времен. Суровые, дикие, почти стометровой высоты скалы громоздятся здесь над морем. В береговых урочищах образовались многочисленные ниши, каменные хаосы, миниатюрные островки, арки. Особенно впечатляет островерхий утес самого мыса Фиолент и огромный грот Дианы.",
    dateOfStart: "2019-12-30",
    dateOfEnd: "2020-01-10",
    rate: 4.91,
    countRate: 429,
    interes: "Велосипед",
    time: "48 часов",
    professional: "Для новичков",
    equipment: "Треб. снаряжение",
    cost: 120,
    services: 20.2,
    result: 140.2,
    valute: "$",
    from: "с человека",
    including: {
        inventory: "Комплект из специального термобелья, флисового костюма и водонепроницаемых штанов, и курток. В летнюю жару плавательные костюмы.",
        beverages: "Какие-то напитки",
        nutrition: "Какое-то питание",
    },
    requires: "Различные требования к экипировке, подготовке и т.д.. Возможно различные гайды",
    adress: {
        fullAdress: "Emile Braunplein, Гент, Бельгия",
        timeStart: "11:00",
        timeEnd: "17:00",
    },
    cancelReserv: " Если вы отменяете участие в туре в течение 24 часов с момента его бронирования, вы получаете полный возврат",
    images: [swim, bike, regat, swim, swim]
},
{
    id: 5,
    seats: 6,
    freeSeats: 5,
    town: "Тирасполь",
    country: "Приднестровье",
    title: "Обучение велосипедному спорту от профессионалов для новичков",
    description: "Мыс Фиолент – это девственная природа, чистейший воздух, прозрачная вода Яшмового пляжа, тишина и спокойствие, цветущий миндаль и новые впечатления. Скалистый берег представляет собой нагромождение серых камней чередующихся с небольшими галечными пляжами. На протяжении более 6 километров вдоль берега моря высятся остроконечные скалы причудливой формы, мысы, напоминающие при некотором воображении сфинксов, львов, фантастические чудовища. На скалистых обрывах в районе мыса Фиолент и в бывших Митрополичьих садах растут редкие растения - дикие и высаженные монахами. Здесь обилие фисташки туполистной - очень древнее реликтовое растение. Встречается в этих местах и редкий крымский дикорос - можжевельник. На территории монастыря растут кустарниковый жасмин и скальный дуб, встречаются кизил обыкновенный и инжир, лечебные свойства которого известны с давних времен. Суровые, дикие, почти стометровой высоты скалы громоздятся здесь над морем. В береговых урочищах образовались многочисленные ниши, каменные хаосы, миниатюрные островки, арки. Особенно впечатляет островерхий утес самого мыса Фиолент и огромный грот Дианы.",
    dateOfStart: "2019-12-30",
    dateOfEnd: "2020-01-10",
    rate: 4.91,
    countRate: 429,
    interes: "Велосипед",
    time: "48 часов",
    professional: "Для новичков",
    equipment: "Треб. снаряжение",
    cost: 120,
    services: 20.2,
    result: 140.2,
    valute: "$",
    from: "с человека",
    including: {
        inventory: "Комплект из специального термобелья, флисового костюма и водонепроницаемых штанов, и курток. В летнюю жару плавательные костюмы.",
        beverages: "Какие-то напитки",
        nutrition: "Какое-то питание",
    },
    requires: "Различные требования к экипировке, подготовке и т.д.. Возможно различные гайды",
    adress: {
        fullAdress: "Emile Braunplein, Гент, Бельгия",
        timeStart: "11:00",
        timeEnd: "17:00",
    },
    cancelReserv: " Если вы отменяете участие в туре в течение 24 часов с момента его бронирования, вы получаете полный возврат",
    images: [swim, bike, regat, swim, swim]
},
{
    id: 6,
    seats: 2,
    freeSeats: 1,
    town: "Тирасполь",
    country: "Приднестровье",
    title: "Обучение велосипедному спорту от профессионалов для новичков",
    description: "Мыс Фиолент – это девственная природа, чистейший воздух, прозрачная вода Яшмового пляжа, тишина и спокойствие, цветущий миндаль и новые впечатления. Скалистый берег представляет собой нагромождение серых камней чередующихся с небольшими галечными пляжами. На протяжении более 6 километров вдоль берега моря высятся остроконечные скалы причудливой формы, мысы, напоминающие при некотором воображении сфинксов, львов, фантастические чудовища. На скалистых обрывах в районе мыса Фиолент и в бывших Митрополичьих садах растут редкие растения - дикие и высаженные монахами. Здесь обилие фисташки туполистной - очень древнее реликтовое растение. Встречается в этих местах и редкий крымский дикорос - можжевельник. На территории монастыря растут кустарниковый жасмин и скальный дуб, встречаются кизил обыкновенный и инжир, лечебные свойства которого известны с давних времен. Суровые, дикие, почти стометровой высоты скалы громоздятся здесь над морем. В береговых урочищах образовались многочисленные ниши, каменные хаосы, миниатюрные островки, арки. Особенно впечатляет островерхий утес самого мыса Фиолент и огромный грот Дианы.",
    dateOfStart: "2020-4-1",
    dateOfEnd: "2020-4-17",
    rate: 2.5,
    countRate: 427,
    interes: "Велосипед",
    time: "48 часов",
    professional: "Для новичков",
    equipment: "Треб. снаряжение",
    cost: 120,
    services: 20.2,
    result: 140.2,
    valute: "$",
    from: "с человека",
    including: {
        inventory: "Комплект из специального термобелья, флисового костюма и водонепроницаемых штанов, и курток. В летнюю жару плавательные костюмы.",
        beverages: "Какие-то напитки",
        nutrition: "Какое-то питание",
    },
    requires: "Различные требования к экипировке, подготовке и т.д.. Возможно различные гайды",
    adress: {
        fullAdress: "Emile Braunplein, Гент, Бельгия",
        timeStart: "11:00",
        timeEnd: "17:00",
    },
    cancelReserv: " Если вы отменяете участие в туре в течение 24 часов с момента его бронирования, вы получаете полный возврат",
    images: [swim, bike, regat, swim, swim]
},
{
    id: 7,
    seats: 2,
    freeSeats: 2,
    town: "Тирасполь",
    country: "Приднестровье",
    title: "Обучение велосипедному спорту от профессионалов для новичков",
    description: "Мыс Фиолент – это девственная природа, чистейший воздух, прозрачная вода Яшмового пляжа, тишина и спокойствие, цветущий миндаль и новые впечатления. Скалистый берег представляет собой нагромождение серых камней чередующихся с небольшими галечными пляжами. На протяжении более 6 километров вдоль берега моря высятся остроконечные скалы причудливой формы, мысы, напоминающие при некотором воображении сфинксов, львов, фантастические чудовища. На скалистых обрывах в районе мыса Фиолент и в бывших Митрополичьих садах растут редкие растения - дикие и высаженные монахами. Здесь обилие фисташки туполистной - очень древнее реликтовое растение. Встречается в этих местах и редкий крымский дикорос - можжевельник. На территории монастыря растут кустарниковый жасмин и скальный дуб, встречаются кизил обыкновенный и инжир, лечебные свойства которого известны с давних времен. Суровые, дикие, почти стометровой высоты скалы громоздятся здесь над морем. В береговых урочищах образовались многочисленные ниши, каменные хаосы, миниатюрные островки, арки. Особенно впечатляет островерхий утес самого мыса Фиолент и огромный грот Дианы.",
    dateOfStart: "2020-4-10",
    dateOfEnd: "2020-4-17",
    rate: 2.5,
    countRate: 427,
    interes: "Велосипед",
    time: "48 часов",
    professional: "Для новичков",
    equipment: "Треб. снаряжение",
    cost: 120,
    services: 20.2,
    result: 140.2,
    valute: "$",
    from: "с человека",
    including: {
        inventory: "Комплект из специального термобелья, флисового костюма и водонепроницаемых штанов, и курток. В летнюю жару плавательные костюмы.",
        beverages: "Какие-то напитки",
        nutrition: "Какое-то питание",
    },
    requires: "Различные требования к экипировке, подготовке и т.д.. Возможно различные гайды",
    adress: {
        fullAdress: "Emile Braunplein, Гент, Бельгия",
        timeStart: "11:00",
        timeEnd: "17:00",
    },
    cancelReserv: " Если вы отменяете участие в туре в течение 24 часов с момента его бронирования, вы получаете полный возврат",
    images: [swim, bike, regat, swim, swim]
}
]