//Цмкл:
const printList = (list) => {
  let arr = [];
  let step = list;

  while (step) {
    arr.push(step.value);
    step = step.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    alert(arr[i]);
  }
};

printList(list);

//Рекурсия:

// const printList = (list) => {
//   if (list.next) {
//     printList(list.next);
//   }
//   alert(list.value);
// };

printList(list);
