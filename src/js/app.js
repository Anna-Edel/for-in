export default function orderByProps(obj, order) {
    const result = [];
  
    // Сортировка по указанному порядку
    for (const prop of order) {
      if (prop in obj) {
        result.push({ key: prop, value: obj[prop] });
      }
    }
  
    // Сортировка по алфавиту для остальных свойств
    const remainingProps = [];
    for (const prop in obj) {
      if (!order.includes(prop)) {
        remainingProps.push({ key: prop, value: obj[prop] });
      }
    }
    remainingProps.sort((a, b) => (a.key > b.key ? 1 : -1));
  
    return result.concat(remainingProps);
  }
  