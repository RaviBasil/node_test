var fs = require('fs');
var path = require('path');

exports.getNumberSequence = (req, res) => {
    
    //creating the output filename
    let d = new Date();
    let filename = "output_" + d.getTime() + ".txt";
    
    // Input file
    let inputFile = path.resolve(__dirname + "/input_user_story_1.txt")
    let dataToWrite = ""
    try {
        //reading the file
        fs.readFile(inputFile, 'utf8', function (err, data) {
            if (err) throw err;
            //console.log(data);
            var array = data.toString().split("\n");
            var vArray = []
            vArray[0] = ""
            vArray[1] = ""
            vArray[2] = ""
            vArray[3] = ""
            vArray[4] = ""
            vArray[5] = ""
            vArray[6] = ""
            vArray[7] = ""
            vArray[8] = ""

            //loop through each row
            for (let i=0 ;i< array.length-1;i++) {

                //get single row
                let newString = array[i]
                if (newString.trim().length > 0) {
                    
                    //loop throug each element of the row
                    for (let j = 0; j < 27; j++) {
                        
                        //dividing whole row into 9 parts
                        if (j >= 0 && j <= 2) {
                            vArray[0] += convertToBinary(newString[j])
                        } else if (j >= 3 && j <= 5) {
                            vArray[1] += convertToBinary(newString[j])
                        } else if (j >= 6 && j <= 8) {
                            vArray[2] += convertToBinary(newString[j])
                        } else if (j >= 9 && j <= 11) {
                            vArray[3] += convertToBinary(newString[j])
                        } else if (j >= 12 && j <= 14) {
                            vArray[4] += convertToBinary(newString[j])
                        } else if (j >= 15 && j <= 17) {
                            vArray[5] += convertToBinary(newString[j])
                        } else if (j >= 18 && j <= 20) {
                            vArray[6] += convertToBinary(newString[j])
                        } else if (j >= 21 && j <= 23) {
                            vArray[7] += convertToBinary(newString[j])
                        } else if (j >= 24 && j <= 26) {
                            vArray[8] += convertToBinary(newString[j])
                        }
                    }
                } else {
                    // dataToWrite += `${checkPattern(vArray[0])},${checkPattern(vArray[1])},${checkPattern(vArray[2])},${checkPattern(vArray[3])},${checkPattern(vArray[4])},${checkPattern(vArray[5])},${checkPattern(vArray[6])},${checkPattern(vArray[7])},${checkPattern(vArray[8])}\n`;
                    let inputLine = []
                    let isIllegal = false
                    for(let i = 0; i<9; i++){
                        if(checkPattern(vArray[0])>0){
                            inputLine.push(checkPattern(vArray[i]))
                        }else if(checkPattern(vArray[0]) == -1){
                            isIllegal = true
                            inputLine.push("?")
                        }
                    }
                    if(isIllegal && inputLine.length==9)
                        dataToWrite += inputLine.toString()+"ILLEGAL\n";
                    else if(inputLine.length==9)
                        dataToWrite += inputLine.toString()+"\n";
                    
                    vArray[0] = ""
                    vArray[1] = ""
                    vArray[2] = ""
                    vArray[3] = ""
                    vArray[4] = ""
                    vArray[5] = ""
                    vArray[6] = ""
                    vArray[7] = ""
                    vArray[8] = ""
                }
                if(i == array.length-2)
                {
                    createFile(filename,dataToWrite)
                }
            }


        });

        res.send("success")
    } catch (error) {
        res.send("Oops! Some Error occured")
    }

}
function convertToBinary(newString) {
    let string = 0;
    if (newString == " ") {
        string = "0"
    } else {
        string = "1"
    }
    return string
}

function checkPattern(pattern) {
    if (pattern == "010101111") return 0
    else if (pattern == "000001001") return 1
    else if (pattern == "010011110") return 2
    else if (pattern == "010011011") return 3
    else if (pattern == "000111001") return 4
    else if (pattern == "010110011") return 5
    else if (pattern == "010110111") return 6
    else if (pattern == "010001001") return 7
    else if (pattern == "010111111") return 8
    else if (pattern == "010111011") return 9
    else if (pattern == "000000000") return -9
    else return -1
}

function createFile(filename, data) {
    fs.open(filename, 'r', function (err, fd) {
        if (err) {
            fs.writeFile(filename, data, function (err) {
                if (err) {
                    console.log(err);
                }
                console.log("The file was saved!");
            });
        } else {
            console.log("The file exists!");
        }
    });
}