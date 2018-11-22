function dispArr(arr) {
  let str = '<table cellpadding="10"><tr>';
  for (let i = 0; i < arr.length; ++i) {
    str += `<td>${arr[i]}</td>`;
    if(i%10==9){
      str += "</tr><tr>";
    }
  }
  str += '</table>'
  document.write(str);
} //end function dispArr()

function binarySearch(arr, left, right, data) 
{ 
  console.log(left);
  console.log(right);
  if (right >= left)
  {
    let mid = parseInt(left + (right - left)/2); 

    if (arr[mid] == data)
      return mid; 

    if (arr[mid] > data)  
      return binarySearch(arr, left, mid-1, data); 

    return binarySearch(arr, mid+1, right, data); 
  }
  return -1;
}

function count(arr, data) {
  let count = 0;
  let position = binarySearch(arr, 0, arr.length-1, data);
  console.log(position);
  if (position > -1) {
    ++count;
    for (let i = position-1; i > 0; --i) {
      if (arr[i] == data) {
        ++count;
      }
      else {
        break;
      }
    }

    for (let i = position+1; i < arr.length; ++i) {
      if (arr[i] == data) {
        ++count;
      }
      else {
        break;
      }
    }
  } //end if
  return count;
}

function insertSort(arr, n=arr.length)
{
  let t, j;
  for(let i = 1; i<n; i++)
  {
    j = i-1;
    t= arr[i];
    while(j>=0 && t<arr[j])
    {
      arr[j+1]=arr[j];
      j--;
    }
    arr[j+1]=t;
  }
}

let nums = [];
for(let i=0;i<100;++i) {
   nums[i] = Math.floor(Math.random() * 101);
}

insertSort(nums);
dispArr(nums);

var val = parseInt(prompt("Enter a value to count: "));
var retVal = count(nums, val);
document.write("Found " + retVal + " occurrences of " + val + ".");