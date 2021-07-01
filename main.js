let str = `
010-1234-5678
thececond@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
동해물과_백두산이 마르고 닳도록
`
/*
// const regexp = new RegExp('the', 'gi') //g 플래그 i = 대소문자 구분 x
const regexp = /fox/gi
// console.log(regexp.test(str))
str = str.replace(regexp, 'AAA')
console.log(str) // 재할당을 안하면 원본은 손상하지 않음
*/

const h = `  the hello  world   !

`

console.log(str.match(/\w{3,}/g))
console.log(str.match(/\bf\w{1,}\b/g)) //f로 시작하는 단어 중에 문자가 1개 이상
console.log(str.match(/\d{1,}/g))
console.log(h.replace(/\s/g, ''))
console.log(str.match(/[가-힣]{1,}/g))

console.log('=====================================================')


let str2 = `
010-1234-5678
thececond@gmail.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

console.log(str2.match(/.{1,}(?=@)/g))
console.log(str2.match(/(?<=@).{1,}/g))




// 백슬래시 기호(\ 이스케이프문자)를 통해 본래의 기능에서 벗어나 상태가 바뀌는 문자를 말함, $ = 꼭 마침표 뒤에 붙여야함, $사인 앞에 있는 하나의 단어로 해당하는 줄이 끝나는 부분을 찾아서 끝나는 부분을 일치시킴

// console.log(str)