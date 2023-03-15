//Цикл:

// const printList = (list) => {
//   let step = list;
//   while (step) {
//     alert(list.value);
//     step = list.next;
//   }
// };

// printList(list);

//Рекурсия:

  const printList = (list) => {
    alert(list.value);
    if (list.next) {
      printList(list.next);
    }
  }

  printList(list);
