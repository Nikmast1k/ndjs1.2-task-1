#!/usr/bin/env node
const yargs = require('yargs')
const date = new Date()

function getFutureDay(days) {
    const newDate = new Date()
    newDate.setDate(newDate.getDate() + days)
    return newDate
}
function getFutureMonth(months) {
    const newDate = new Date()
    newDate.setMonth(newDate.getMonth() + months)
    return newDate
}

const argv = process.argv.slice(2)

if (argv[0] == '--year' || argv[0] == '-y') {
    console.log(date.getFullYear())
} else if (argv[0] == '--month' || argv[0] == '-m') {
    console.log(date.getMonth())
} else if (argv[0] == '--date' || argv[0] == '-d') {
    console.log(date.getDate())
} else if (argv[0] == 'add' && argv[1] == '-d' || argv[1] == '--date') {
    const nextDate = getFutureDay(Number(argv[2]))
    console.log(nextDate)
} else if (argv[0] == 'add' && argv[1] == '-m' || argv[1] == '--month') {
    const nextDate = getFutureMonth(Number(argv[2]))
    console.log(nextDate)
} else if (argv[0] == 'sub' && argv[1] == '-m' || argv[1] == '--month') {
    const nextDate = getFutureMonth(-(Number(argv[2])))
    console.log(nextDate)
} else if (argv[0] == 'sub' && argv[1] == '-d' || argv[1] == '--day') {
    const nextDate = getFutureDay(-(Number(argv[2])))
    console.log(nextDate)
} else {
    console.log(date)
}

