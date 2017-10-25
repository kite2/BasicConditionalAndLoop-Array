$(window).scroll(function () {
    if ($(window).scrollTop() > 104) {
        $('#nav').addClass('navbar-fixed-top');
    }
    if ($(window).scrollTop() < 104) {
        $('#nav').removeClass('navbar-fixed-top');
    }
});

//Hàm lấy mảng và lấy số
function getArray(arrayID) {
    var array= document.getElementById(arrayID).value.split(',');
    for (i = 0; i < array.length; i++) {
        array[i] = parseInt(array[i]);
    }
    return array;
}

function getNumber(numberID) {
    return parseInt(document.getElementById(numberID).value);
}
//Tìm kiếm kiểu tuyến tính
function searchLinear(array, numberNeedToFind) {
    for (i = 0; i < array.length; i++) {
        if (array[i] === numberNeedToFind) {
            return i;
        }
    }
    return -1;
}


function showSearchLinearResult() {
    var array = getArray("array1");
    var number = getNumber("number1");
    var index = searchLinear(array, number);
    if(index === -1){
        return document.getElementById('result1').innerHTML = "Không tìm thấy";
    }else{
        return document.getElementById('result1').innerHTML = "Phần tử nằm ở vị trí: " + index;
    }
}

//Tìm kiếm kiểu nhị phân
function searchBinary(array, numberNeedToFind) {
    var minArrayIndex = 0;
    var maxArrayIndex = array.length;
    var middleArrayIndex = 0;
    do {
        middleArrayIndex = Math.floor((minArrayIndex + maxArrayIndex) / 2);
        if (array[middleArrayIndex] === numberNeedToFind) {
            return middleArrayIndex;
        } else if (array[middleArrayIndex] < numberNeedToFind) {
            minArrayIndex = middleArrayIndex + 1;
        } else {
            maxArrayIndex = middleArrayIndex - 1;
        }
    }
    while (minArrayIndex <= maxArrayIndex);
    return -1;
}

function showSearchBinaryResult() {
    var array = getArray("array2");
    var number = getNumber("number2")
    var result = searchBinary(array, number);
    if (result === -1) {
        return document.getElementById('result2').innerHTML = "Không tìm thấy";

    } else {
        return document.getElementById('result2').innerHTML = "Phần tử nằm ở vị trí: " + result;
    }
}

//Vẽ hình chữ nhật
function drawRectangle(edgeWidth, edgeLength) {
    var rectangle = "";
    for (i = 1; i <= edgeWidth; i++) {
        for (j = 1; j <= edgeLength; j++) {
            if (j == edgeLength) {
                rectangle += "*" + "<br>";
            } else {
                rectangle += "*";
            }
        }
    }
    return rectangle;
}

function showRectangle() {
    var width = getNumber(getNumber("width1"));
    var length = getNumber("length1");
    var rectangle = drawEmptyIsoscelesTriangle(width, length);
    return document.getElementById('result3').innerHTML = rectangle;
}

//Vẽ hình chữ nhật rỗng
function drawEmptyRectangle(edgeWidth, edgeLength) {
    var rectangle = "";
    for (i = 1; i <= edgeWidth; i++) {
        for (j = 1; j <= edgeLength; j++) {
            if ((i == 1) && (j < edgeLength)) {
                rectangle += "*";
            } else if ((i == edgeWidth) && (j < edgeLength)) {
                rectangle += "*";
            } else if (j == 1) {
                rectangle += "*";
            } else if (j < edgeLength) {
                rectangle += "&nbsp;";
            } else if (j = edgeLength) {
                rectangle += "*" + "<br>";
            }
        }
    }
    return rectangle;
}

function showEmptyRectangle() {
    var width = getNumber("width2");
    var length = getNumber("length2");
    var rectangle = drawEmptyRectangle(width, length);
    return document.getElementById('result4').innerHTML = rectangle;
}

// Vẽ tam giác vuông cân
function drawRightAngledTriangle(height) {
    var triangle = "";
    for (i = height; i > 0; i--) {
        for (j = 0; j < i; j++) {
            if (j == i - 1) {
                triangle += "*"+"<br>"
            } else {
                triangle += "*";
            }
        }
    }
    return triangle;
}

function showRightAngledTriangle() {
    var height = getNumber("height1");
    var triangle = drawRightAngledTriangle(height);
    return document.getElementById('result5').innerHTML = triangle;
}

// Vẽ tam giác vuông cân rỗng
function drawEmptyRightAngledTriangle(height) {
    var triangle = "";
    for (i = height; i > 0; i--) {
        for (j = 0; j < i; j++) {
            if ((i == height) && (j < i - 1)) {
                triangle += "*";
            } else if (j == i - 1) {
                triangle += "*" + "<br>"
            } else if (j == 0) {
                triangle += "*";
            } else {
                triangle += "&nbsp;"
            }
        }
    }
    return triangle;
}

function showEmptyRightAngledTriangle() {
    var height = getNumber('height2');
    var triangle = drawEmptyRightAngledTriangle(height);
    return document.getElementById('result6').innerHTML = triangle;
}

//Vẽ tam giác cân
function drawIsoscelesTriangle(height) {
    var triangle = "";
    var count = 0;
    for (i = height; i > 0; i--) {
        if (i == height) {
            for (j = 0; j < i; j++) {
                if (j == i - 1)  {
                    triangle += "*" + "<br>"
                } else {
                    triangle += "*";
                }
            }
        } else {
            for (j = 0; j <= i ; j++) {
                if ((j == 0) || (j < count)) {
                    triangle += "&nbsp;";
                } else  if (j == i) {
                    triangle += "&nbsp;" + "<br>"
                } else {
                    triangle += "*"
                }
            }
        }
        count++;
        if (count - i == 0) {
            return triangle;
        }
    }
}

function showIsoscelesTriangle() {
    var height = getNumber('height3');
    var triangle = drawIsoscelesTriangle(height);
    return document.getElementById('result7').innerHTML = triangle;
}

//Vẽ tam giác cân rỗng
function drawEmptyIsoscelesTriangle(height) {
    var triangle = "";
    var count = 0;
    for (i = height; i > 0; i--) {
        if (i == height) {
            for (j = 0; j < i; j++) {
                if (j == i - 1)  {
                    triangle += "*" + "<br>"
                } else {
                    triangle += "*";
                }
            }
        } else {
            for (j = 0; j <= i ; j++) {
                if ((j == 0) || (j < count)) {
                    triangle += "&nbsp;";
                } else  if (j == i) {
                    triangle += "&nbsp;" + "<br>"
                } else if ((j == count) || (j == i - 1)) {
                    triangle += "*"
                } else {
                    triangle += "&nbsp;"
                }
            }
        }
        count++;
        if (count - i == 0) {
            return triangle;
        }
    }
}

function showEmptyIsoscelesTriangle() {
    var height = getNumber('height4');
    var triangle = drawEmptyIsoscelesTriangle(height);
    return document.getElementById('result8').innerHTML = height;
}

//Vẽ hình thoi
function drawDiamond() {
    var height = document.getElementById('height5').value;
    var diamond = "";
    var count = Math.floor(height / 2);
    for (i = height; i > 0; i--) {
        if (i != count) {
            for (j = 0; j <= i ; j++) {
                if ((j == 0) || (j < count)) {
                    diamond += "&nbsp;";
                } else  if (j == i) {
                    diamond += "&nbsp;" + "<br>"
                } else {
                    diamond += "*"
                }
            }
        }
    }
    return document.getElementById('result9').innerHTML = diamond;
}

//Tìm số nhỏ nhất trong mảng
function findSmallestNumber(array) {
    var minNumber = array[0];
    for (i = 0; i < array.length; i++) {
        if (array[i] < minNumber) {
            minNumber = array[i];
        }
    }
    return minNumber;
}

function getArrayForSmallestNumber() {
    var array = document.getElementById('array3').value.split(',');
    for (i = 0; i < array.length; i++) {
        array[i] = parseInt(array[i]);
    }
    return array;
}

function showSmallestNumber() {
    var array = getArray("array3");
    var smallestNumber = findSmallestNumber(array);
    return document.getElementById('result11').innerHTML = "Số nhỏ nhất là: " + smallestNumber;
}

//Tìm số lớn nhất
function findBiggestNumber(array) {
    var maxNumber = array[0];
    for (i = 0; i < array.length; i++) {
        if (array[i] > maxNumber) {
            maxNumber = array[i];
        }
    }
    return maxNumber;
}

function showBiggestNumber() {
    var array = getArray("array4");
    var biggestNumber = findBiggestNumber(array);
    return document.getElementById('result12').innerHTML ="Số lớn nhất là: " + biggestNumber;
}

//Tìm số nhỏ nhì
function findSecondSmallestNumber(array) {
    for (i = 0; i < array.length; i++) {
        for (j = array.length; j > i; j--) {
            if (array[j] < array[j - 1]) {
                var temp = array[j - 1];
                array[j - 1] = array[j];
                array[j] = temp;
            }
        }
    }
    return  + array[1];
}

function showSecondSmallestNumber() {
    var array = getArray("array5")
    var secondSmallestNumber = findSecondSmallestNumber(array);
    var indexOfSecondSmallestNumber = searchLinear(secondSmallestNumber);
    var resultNumber = "Số nhỏ nhì là: " + secondSmallestNumber;
    var resultIndex = "Vị trí số nhỏ nhì ở: " + indexOfSecondSmallestNumber;
    return document.getElementById('result13').innerHTML = resultNumber + "<br>" + resultIndex;
}

//Tìm số lớn nhì
function findSecondBiggestNumber(array) {
    for (i = 0; i < array.length; i++) {
        for (j = array.length; j > i; j--) {
            if (array[j] > array[j - 1]) {
                var temp = array[j - 1];
                array[j - 1] = array[j];
                array[j] = temp;
            }
        }
    }
    return array[1];
    // var min = array[0]
    // for (i = 1; i < array.length; i++) {
    //     var index = i;
    //     while ((index > 0) && (array[index] > array[index - 1])) {
    //         var temp = array[index];
    //         array[index] = array[index - 1];
    //         array[index - 1] = temp;
    //         index--;
    //     }
    // }
    // return array[1];
}

function showSecondBiggestNumber() {
    var array = getArray("array6")
    var secondBiggestNumber = findSecondBiggestNumber(array);
    var indexOfSecondBiggestNumber = searchLinear(secondBiggestNumber);
    var resultNumber = "Số lớn nhì là: " + secondBiggestNumber;
    var resultIndex = "Vị trí số lớn nhì ở: " + indexOfSecondBiggestNumber;
    return document.getElementById('result14').innerHTML = resultNumber + "<br>" + resultIndex;
}

//Nối 2 mảng
function joinArray(array1, array2) {
    var newArray = [];
    for (i = 0; i < array1.length; i++) {
        newArray.push(array1[i]);
    }
    for (j = 0; j < array2.length; j++) {
        newArray.push(array2[j]);
    }
    return newArray;
}

function showArrayAfterJoin() {
    var firstArray = getArray('array7');
    var secondArray = getArray('array8');
    var ArrayAfterJoin = joinArray(firstArray, secondArray);
    return document.getElementById('result15').innerHTML = "Mảng được nối là: " + ArrayAfterJoin;
}

//Đảo mảng
function permutationArray(array) {
    for (i = 0; i < array.length; i++) {
        var temp = array[i];
        array[i] = array[(array.length - i - 1)];
        array[array.length - i - 1] = temp;
        if (array.length - i - 2 <= i) {
            return array;
        }
    }
}

function getArrayString(arrayID) {
    return array= document.getElementById(arrayID).value.split(',');
}
function showArrayAfterPermutation() {
    var array = getArrayString('array9');
    var arrayAfterPermutation = permutationArray(array);
    return document.getElementById('result16').innerHTML = "Mảng được đảo là: " + arrayAfterPermutation;
}

//Kiểm tra đối xứng
function checkSymmetryArray(array) {
    for (i = 0; i < array.length; i++) {
        if (i == Math.floor(array.length / 2)) {
            return "Mảng đổi xứng"
        }
        if (array[i] == array[array.length - 1 - i]) {
            continue ;
        } else {
            return "Không đối xứng";
        }
    }
}

function showCheckArraySymmetryResult() {
    var array = getArrayString('array10');
    var resultCheckArraySymmestryResult = checkSymmetryArray(array)
    return document.getElementById('result17').innerHTML = "Mảng này: " + resultCheckArraySymmestryResult;
}