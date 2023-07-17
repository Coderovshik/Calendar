const months = [
    {
        name: "Январь",
        numberOfDays: 31,
        startsWith: 7
    },
    {
        name: "Февраль",
        numberOfDays: 28,
        startsWith: 3
    },
    {
        name: "Март",
        numberOfDays: 31,
        startsWith: 3
    },
    {
        name: "Апрель",
        numberOfDays: 30,
        startsWith: 6
    },
    {
        name: "Май",
        numberOfDays: 31,
        startsWith: 1
    },
    {
        name: "Июнь",
        numberOfDays: 30,
        startsWith: 4
    },
    {
        name: "Июль",
        numberOfDays: 31,
        startsWith: 6
    },
    {
        name: "Август",
        numberOfDays: 31,
        startsWith: 2
    },
    {
        name: "Сентябрь",
        numberOfDays: 30,
        startsWith: 5
    },
    {
        name: "Октябрь",
        numberOfDays: 31,
        startsWith: 7
    },
    {
        name: "Ноябрь",
        numberOfDays: 30,
        startsWith: 3
    },
    {
        name: "Декабрь",
        numberOfDays: 31,
        startsWith: 5
    },
];

const weekDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
const sideColumn = Array(6).fill(0, 0);

const calendarWrap = document.querySelector(".calendar-wrap");

const calendar = document.createElement("ul");
calendar.className = "calendar";

for (let i = 0; i < months.length; i++) {
    let month = document.createElement("li");
    month.className = "month";

    const dates = [ ...Array(months[i].numberOfDays).keys()];
    const prevDates = [ ...Array(months[i].startsWith - 1).keys()];
    const nextDates = [ ...Array(7 * 6 - (prevDates.length - 1 + months[i].numberOfDays) - 1).keys()];

    month.innerHTML = `
        <h1 class="name">${months[i].name}</h1>
        <div class="date-table">
            <div class="left-side-column">
                <p class="blank"></p>
                ${sideColumn.reduce((accumulator, item) => 
                    accumulator + `<p class="side-column-item">${item}</p>`, 
                "")}
            </div>
            <div class="main-block">
                <div class="top-row">
                    ${weekDays.reduce((accumulator, item) => 
                        accumulator + `<p class="weekDay">${item}</p>`,
                    "")}
                </div>
                <div class="dates">
                    ${prevDates.reduce((accumulator, item) => 
                        accumulator + `<p class="previous-date">${months[i - 1 >= 0 ? i - 1 : 11].numberOfDays - (prevDates.length - (item + 1))}</p>`,
                    "")}
                    ${dates.reduce((accumulator, item) => 
                        accumulator + `<p class="date">${item + 1}</p>`,
                    "")}
                    ${nextDates.reduce((accumulator, item) => 
                        accumulator + `<p class="next-date">${item + 1}</p>`,
                    "")}
                </div>
            </div>
        </div>
    `;

    calendar.appendChild(month);
}

calendarWrap.appendChild(calendar);