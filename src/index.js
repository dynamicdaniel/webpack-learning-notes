import moment from 'moment'
import momentRecur from 'moment-recur'
import useMomentRecur from './useMomentRecur'

let today = moment().format('YYYY-MM-DD HH:mm:ss')
let preWeek = momentRecur().recur().every(1).days(7)
// console.log('%c today', 'color:green', today, '\n')
console.log('%c preWeek', 'color:dodgerblue', ...preWeek, '\n')
console.log('%c useMomentRecur', 'color:red', ...useMomentRecur, '\n')