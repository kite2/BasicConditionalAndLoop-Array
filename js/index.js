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
    var maxArrayIndex = array.length - 1;
    for (i = 0; i < array.length; i++) {
        if (minArrayIndex <= maxArrayIndex) {
            var middleIndex = Math.floor((minArrayIndex + maxArrayIndex) / 2);
            if (array[middleIndex] === numberNeedToFind) {
                return "Phần tử cần tìm nằm ở vị trí: " + middleIndex;
            }
            if (array[middleIndex] < numberNeedToFind) {
                minArrayIndex = middleIndex + 1;
            } else {
                maxArrayIndex = middleIndex - 1;
            }
        }
    }
    return "-1 aka Không thấy";

}

function getArraySorted() {
    return document.getElementById("array2").value.split(',');
}

function getNumberToFindInBinarySearch() {
    return document.getElementById("number2").value;
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