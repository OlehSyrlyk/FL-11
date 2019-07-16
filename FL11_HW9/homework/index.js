function getNumbers(str) {
    const res = [];

    for(let i = 0; i < str.length; i++) {
        if(!isNaN(str[i])) {
          res.push(parseInt(str[i]));
        }
    }
    return res; 
}

function findTypes() {
    let res = {};
    for(let arg of arguments) {
        let argType = typeof arg;
        if(res[argType]) {
            res[argType]++
        } else {
            res[argType] = 1;
        }
    }
    return res;
}

function executeforEach(arr, func) {
    for(let i = 0; i < arr.length; i++) {
        arr[i] = func(arr[i])
    }
    return arr;
}

function mapArray(arr, func) {
    let res = arr;
    res = executeforEach(arr, func)
    return res;
}

function filterArray(arr, func) {
    let res = [];
    executeforEach(arr, function(num) {
        if(func(num)) {
            arr.push(num)
        }
    });
    return res;
}

function showFormattedDate(date) {
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `Date: ${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;
  }

function daysBetween(date1, date2) {
    let ms = 1000;
    let secInHr = 3600;
    let hrInDay = 24
    let msInDay = hrInDay * secInHr * ms;
    return Math.round((Date.parse(date2) - Date.parse(date1)) / msInDay);
}
let data = [
    {
    '_id': '5b5e3168c6bf40f2c1235cd6',
    'index': 0,
    ' birthday ': '2016-03-18T00:00:00',
    'eyeColor': 'green',
    'name': 'Stein',
    'favoriteFruit': 'apple'
    },
    {
    '_id': '5b5e3168e328c0d72e4f27d8',
    'index': 1,
    ' birthday ': '1991-02-11T00:00:00',
    'eyeColor': 'blue',
    'name': 'Cortez',
    'favoriteFruit': 'strawberry'
    },
    {
    '_id': '5b5e3168cc79132b631c666a',
    'index': 2,
    ' birthday ': '1984-04-17T00:00:00',
    'eyeColor': 'blue',
    'name': 'Suzette',
    'favoriteFruit': 'apple'
    },
    {
    '_id': '5b5e31682093adcc6cd0dde5',
    'index': 3,
    ' birthday ': '1994-04-17T00:00:00',
    'eyeColor': 'green',
    'name': 'George',
    'favoriteFruit': 'banana'
    }
];
function getAmountOfAdultPeople(data) {
    let curetdate = new Date();
    let years = [];
    let daysInYear = 365;
    let passYears = 18
	for(let i=0; i < data.length; i++) {
		let yearsNow = daysBetween(data[i]['Birthday'], curetdate) / daysInYear;
		if (yearsNow > passYears) {
			years.push(yearsNow)
		}	
	}
	return years.length

}

function keys(arr) {
    let res = [];
    for(let key in arr) {
      if(arr.hasOwnProperty(key)) {
        res.push(key);
        }
    }
    return res;
  }

function values(arr) {
    let res = [];
    for (let key in arr) {
        if (arr.hasOwnProperty(key)) {
        res.push(arr[key]);
        }
    }
    return res;
}
  