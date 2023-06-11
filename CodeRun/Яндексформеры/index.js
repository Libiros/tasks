/**
* @param {number} N - целое число, количество сотрудников, готовых к объединению
* @param {number[]} staff - массив длины N с грейдами доступных сотрудников
* @param {number} K - целое число, количество доступных клавиатур
* @returns {number}
*/
function yf(N, staff, K) {

  // Соберем массив вида "индекс - грейд, значение - количество повторений"
  // Например, [0, 10, 2] значит, что с грейдом "1" есть "10" сотрудников, с грейдом "2" есть "2" сотрудника
  const mapped_staff = staff
    .reduce((acc, item) => {
      acc[item] = acc[item] ? acc[item] + 1 : 1
      return acc
    }, [])

  let x = 0

  // Идем по сформированному массиву с конца, чтобы собирать с больших грейдов
  for (let i = mapped_staff.length - 1; i > 0; i--) {
    if (!mapped_staff[i]) continue;
    
    if (mapped_staff[i] < K) {
      x += i * mapped_staff[i]
      K -= mapped_staff[i]
      continue;
    }

    if (mapped_staff[i] >= K) {
      x += i * K
      break;
    }
  }

  return x
  
}
