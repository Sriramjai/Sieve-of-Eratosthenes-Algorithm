var generatePrimes = function (n) {

    /*var inputRange = document.getElementById("txtInputLimit").value;
    console.log(inputRange); */

    document.getElementById("output").innerHTML = "";

    if (isNaN(n)) {
        document.getElementById("error").innerHTML = "Invalid Input : Please Enter a Numeric Value";
    }
    else if (n < 0) {
        document.getElementById("error").innerHTML = "Invalid Input : Please Enter a Whole Number Only";
    }
    else if (n == "") {
        document.getElementById("error").innerHTML = "Invalid Input : Please Provide an Input";
    }
    else {

        document.getElementById("error").innerHTML = "";

        var inputArray = [], inputLimit = Math.sqrt(n), output = [];

        for (var i = 0; i < n; i++) {
            inputArray.push(true);

        }

        for (var i = 2; i <= inputLimit; i++) {
            if (inputArray[i]) {
                for (var j = i * i; j < n; j += i) {
                    inputArray[j] = false;
                }
            }
        }

        for (var i = 2; i < n; i++) {
            if (inputArray[i]) {
                output.push(i);
            }
        }

        //Finding the median prime number(s)

        const mid = Math.floor(output.length / 2);
        if (output.length % 2) {
            document.getElementById("output").innerHTML = "Median : [" + output[mid] + "]";
        } else {
            median = output[mid - 1] + output[mid];
            document.getElementById("output").innerHTML = "Median : [" + output[mid - 1] + "," + (output[mid]) + "]";

        }
        //const median = output.length % 2 !== 0 ? output[mid] : (output[mid - 1] + output[mid]) / 2;
        //console.log(output[median]);

        //document.getElementById("output").innerHTML = output.join(",");
        //return output;
    }


}

//document.getElementById("output").innerHTML = generatePrimes().join(",");


