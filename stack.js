// Your implementation goes here

function Stack(...items) {
  const list = items

  const isEmpty = () => !list.length
  const pop = () => isEmpty() ? null : list.pop()
  const peek = () => list[list.length - 1]
  const push = (item) => { list.push(item) }
  const swap = () => {
    const [lastItem, secondLastItem] = [pop(), pop()]
    list.push(lastItem, secondLastItem)
  }

  return {
    get size() { return list.length },
    isEmpty,
    pop,
    peek,
    push,
    swap,
  }
}

module.exports = Stack