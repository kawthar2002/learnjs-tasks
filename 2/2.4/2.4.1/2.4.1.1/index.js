let selected = genres.options[genres.selectedIndex];
alert(selected.value);
alert(selected.text);

let newItem = new Option('Классика', 'classic');
genres.append(newItem);
newItem.selected = true;
