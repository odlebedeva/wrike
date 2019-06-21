function binarySearch(value, array) {
 let first = 0; // индекс начала массива
 let last = array.length - 1; //индекс конца массива
 let position = -1; //начальная позиция искомого значения
 let found = false; // признак нахождения
 let middle; // индекс середины массива
 while (found === false && first <= last) {
  middle = Math.floor((first + last)/2);
  if (array[middle] == value) {
    found = true;
	position = middle;
  } else if (array[middle] > value) {  
	last = middle - 1;
  } else { 
	first = middle + 1;
  }
 }
 return position;
}
