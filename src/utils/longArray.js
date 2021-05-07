export default function longArray(length){
  const array = []
  for (let i=0;i<length;++i){
    const random = Math.floor(Math.random() * (2000 + 1));
    array.push(random)
  }
  return JSON.stringify(array)
}