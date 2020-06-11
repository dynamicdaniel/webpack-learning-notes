import moment from 'moment'
import momentRecur from 'moment-recur'
import { add } from './utils'
let test = momentRecur(moment).recur().every(1).days()
let v = add(2,3)
let str = test.next(7, 'YYYY-MM-DD')
console.log(v)
console.log('hahah')
export default str