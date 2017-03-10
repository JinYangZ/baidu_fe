const sortType = (type, a, b) => type ? a > b : a < b

// 冒泡排序 : type(true: p, false: r) ; sortFn(排序时的回调)
// sortEndFn(排序结束时的回调)
const bubbleSort = (arr, type=true, sortFn, sortEndFn) => {
  const
    list = copyArray(arr),
    len = list.length

  if (len === 1) return list

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1; j++) {
      const
        a = list[j],
        b = list[j + 1]

      if ( sortType(type, a, b) ) {
        [list[j], list[j + 1]] = [b, a]
        sortFn && sortFn(list, a, b)
      }
    }
  }
  sortEndFn && sortEndFn(list)
  return list
}


// 快速排序
const quickSort = (arr, type=true, sortFn, sortEndFn) => {
  const list = copyArray(arr), len = list.length
  if (len <= 1) { // 递归停止条件
    sortEndFn && sortEndFn(list)
    return list
  }
  // 选取基准值
  const
    pivotIndex = Math.ceil(list.length / 2),
    pivot      = list.splice(pivotIndex, 1)[0] // 基准值
  let left = [], right = []

  // 如果大于基准值，移到数组right中；小于基准的值，移到数组left中
  for (let i = 0; i < len; i++)
    (list[i] > pivot) ? right.push(list[i]) : left.push(list[i])
    sortType(type, list[i], pivot) ? right.push(list[i]) : left.push(list[i])

  return quickSort(left).concat([pivot], quickSort(right))
}

// 堆排序

// 希尔排序

// 归并排序

// 基数排序

// 选择排序

// 插入排序