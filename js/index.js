$(window).scroll(function () {
    if ($(window).scrollTop() > 104) {
        $('#nav').addClass('navbar-fixed-top');
    }
    if ($(window).scrollTop() < 104) {
        $('#nav').removeClass('navbar-fixed-top');
    }
});

//Tìm kiếm kiểu tuyến tính
function searchLinear(array, numberNeedToFind) {
    for (i = 0; i < array.length; i++) {
        if (array[i] === numberNeedToFind) {
            return "Phần tử nằm ở vị trí: " + i;
        }
    }
    return "-1 aka Không thấy";
}

function getArrayUnsorted() {
    return document.getElementById("array1").value.split(',');
}

function getNumberToFindInLinearSearch() {
    return document.getElementById('number1').value;
}

function showSearchLinearResult() {
    return document.getElementById('result1').innerHTML = searchLinear(getArrayUnsorted(), getNumberToFindInLinearSearch());
}

//Tìm kiếm kiểu nhị phân
function searchBinary(array, numberNeedToFind) {
    var minArrayIndex = 0;
    var maxArrayIndex = array.length;
    var middleArrayIndex = 0;
    do {
        middleArrayIndex = Math.floor((minArrayIndex + maxArrayIndex) / 2);
        if (array[middleArrayIndex] === numberNeedToFind) {
            return "Phần tử nằm ở vị trí: " + middleArrayIndex;
        } else if (array[middleArrayIndex] < numberNeedToFind) {
            minArrayIndex = middleArrayIndex + 1;
        } else {
            maxArrayIndex = middleArrayIndex - 1;
        }
    }
    while (minArrayIndex <= maxArrayIndex);
    return "-1 aka Không thấy";

}

function getArraySorted() {
    var arraySorted = document.getElementById("array2").value.split(',');
    for (i = 0; i < arraySorted.length; i++) {
        arraySorted[i] = parseInt(arraySorted[i]);
    }
    return arraySorted;
}

function getNumberToFindInBinarySearch() {
    return parseInt(document.getElementById("number2").value);
}
function showSearchBinaryResult() {
    return document.getElementById('result2').innerHTML = searchBinary(getArraySorted(), getNumberToFindInBinarySearch());
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

function getWidthRectangle() {
    return document.getElementById("width1").value;
}

function getLengthRectangle() {
    return document.getElementById("length1").value;
}
function showRectangle() {
    return document.getElementById('result3').innerHTML = drawRectangle(getWidthRectangle(), getLengthRectangle());
}

//Vẽ hình chữ nhật rỗng
function drawEmptyRectangle(edgeWidth, edgeLength) {
    var rectangle = "";
    for (i = 1; i <= edgeWidth; i++) {
        for (j = 1; j <= edgeLength; j++) {
            if ((i == 1) && (j < edgeLength)) {
                rectangle += "*";
            } else if ((i == 1) && (j == edgeLength)) {
                rectangle += "*" + "<br>";
            }else if ((i == edgeWidth) && (j < edgeLength)) {
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

function getWidthEmptyRectangle() {
    return document.getElementById("width2").value;
}

function getLengthEmptyRectangle() {
    return document.getElementById("length2").value;
}

function showEmptyRectangle() {
    return document.getElementById('result4').innerHTML = drawEmptyRectangle(getWidthEmptyRectangle(), getLengthEmptyRectangle());
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

function getHeightRightAngledTriangle() {
    return document.getElementById("height1").value;
}

function showRightAngledTriangle() {
    return document.getElementById('result5').innerHTML = drawRightAngledTriangle(getHeightRightAngledTriangle());
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

function getHeightEmptyRightAngledTriangle() {
    return document.getElementById('height2').value;
}

function showEmptyRightAngledTriangle() {
    return document.getElementById('result6').innerHTML = drawEmptyRightAngledTriangle(getHeightEmptyRightAngledTriangle());
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

function getHeightIsoscelesTriangle() {
    return document.getElementById('height3').value;
}

function showIsoscelesTriangle() {
    return document.getElementById('result7').innerHTML = drawIsoscelesTriangle(getHeightIsoscelesTriangle());
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

function getHeightEmptyIsoscelesTriangle() {
    return document.getElementById('height4').value;
}

function showEmptyIsoscelesTriangle() {
    return document.getElementById('result8').innerHTML = drawEmptyIsoscelesTriangle(getHeightEmptyIsoscelesTriangle());
}

//Vẽ hình thoi
function drawDiamond() {
    var height = document.getElementById('height5').value;
    var diamond = "";
    var count = Math.floor(height / 2);
    for (i = 0; i <= height; i++) {
        for (j = height; j > 0; j--) {
            if ((j == 0) || (j < count)) {
                diamond += "&nbsp;";
            } else if (j == height - count) {
                diamond += "&nbsp;" +"<br>";
            } else {
                diamond += "*";
            }
        }
    }
    return document.getElementById('result9').innerHTML = diamond;
}