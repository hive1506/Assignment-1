var data = [
    {
        "name":"rajiv",
        "marks":{
            "Maths":"18",
            "English":"21",
            "Science":"45"
        },
        "rollNumber":"KV2017-5A2"
    },
    {
        "name":"abhishek",
        "marks":{
            "Maths":"43",
            "English":"30",
            "Science":"37"
        },
        "rollNumber":"KV2017-5A1"
    },
    {
        "name":"zoya",
        "marks":{
            "Maths":"42",
            "English":"31",
            "Science":"50"
        },
        "rollNumber":"KV2017-5A3"
    }
];
data.sort(function (x,y) {
    var nameA = x.name.toUpperCase();
    var nameB = y.name.toUpperCase();
    x.name= x.name[0].toUpperCase() + x.name.slice(1);
    y.name = y.name[0].toUpperCase() + y.name.slice(1);
    if (nameA < nameB) {
        return -1;
      }
    if (nameA > nameB) {
        return 1;
    }
    return 0;
});
function createTable(data, columns) {
    var table = d3.select('body').append('table')
                .append('tr')
                .text('Student Results Board')
                .style("font-weight","bold");
    var thead = table.append('thead');
    var tbody = table.append('tbody');

    // append the header row
    var c = d3.values(columns);
    thead.append('tr')
        .selectAll('th')
        .data(c)
        .enter()
        .append('th')
        .text((c) => c);
    
    var totalSum = [];
	var topper =[];
    data.forEach(function (val){
        val.totalMarks = parseInt(val.marks.Maths) + parseInt(val.marks.English) + parseInt(val.marks.Science);
		topper.push(val.totalMarks);
    });
    var cols = d3.keys(data[0]);
    var temp = cols[1];
    cols[1] = cols[2];
    cols[2] = temp;     
    var totalMarks = 0;
    var flag = -1;
    temp = 0;
    var temp2 = [];
    var row = -1;
    // create a row for each object in the data
    var rows = tbody.selectAll('tr')
                    .data(data)
                    .enter()
                    .append('tr')
					.style("color",function (d, i) {
						//alert(d);
						var minMarks = d3.values(d.marks);
                                minMarks = d3.min(minMarks, (d1) => d1);
                                if (minMarks < 20) {
									return "red";
                                }
                        if (d.totalMarks == d3.max(topper)) {
                            return "green";
                        }                    
                    })
                    .selectAll('td')  // create a cell in each row for each column
                    .data(function (d) {
                        return cols.map(function (k) {
                            document.writeln();
                            if (k == 'name') {
                                return d[k];
                            }
                            else if (k =='rollNumber') {
                                return d[k];
                            }
                            else if (k == 'marks') {
                                totalMarks = parseInt(d.marks.Maths) + parseInt(d.marks.English) + parseInt(d.marks.Science);
                                topper.push(totalMarks);
                                return totalMarks;
                            }
                            else {
                                var minMarks = d3.values(d.marks);
                                minMarks = d3.min(minMarks, (d1) => d1);
                                if (minMarks < 20) {
                                    row += 1;
                                    temp = [1, row];
                                    temp2.push(temp);
                                    return "Fail";
                                }
                                else {
                                    row += 1;
                                    temp = [0, row];
                                    temp2.push(temp);
                                    return "Pass";
                                }
                            }
                        });
                      })
                    .enter()
                    .append('td')
                    .text(function (d, i) {
                        row = -1;
                        if (i == 2 && d == d3.max(topper)) {
                            flag = 1;
                            return d;
                        }
                        else {
                            if (flag == 1) {
                                d = "Topper";
                                return d;
                            }
                            return d;
                        }
                     })
                    // .style("color",function (d, i) {
                        // if (d == "Fail" || d == "Pass") {
                            // row += 1;
                        // if ( temp2[row][0] == 1) {
                            // return "red";
                        // }
                        // if (temp2[row][0] == 0 && flag == 1) {
                            // return "green";
                        // }
                    // }
                    // })
					;
    return table;
}

//render the table
createTable(data, {'name' : 'Student Name', 'rollNumber' : 'Roll Number', 'totalMarks' : 'Total Marks', 'status' : 'Status'});