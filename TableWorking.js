/**
 * Created by a on 26.10.2016.
 */
TableWorking();
function TableWorking()
{
    TableWorking.addElement = function (res, tbl) {
        document.getElementById("add").onclick = function () {
            var row = tbl.insertRow();
            row.insertCell().innerHTML = '<button id="del" class="delButton">Del</button>';
            var a = row.insertCell().innerText = document.getElementById("inputModel").value;
            var b = row.insertCell().style.background = document.getElementById("inputColor").value;
            var c = row.insertCell().innerText = document.getElementById("inputEngine").value;
            var d = row.insertCell().innerText = document.getElementById("inputOName").value;
            var e = row.insertCell().innerText = document.getElementById("inputOCity").value;
            var r = new Car(a, b, c, new Owner(d, e));

            var t = document.getElementById("tableFin");
            res[res.length] = r;

            while (t.rows.length > 2) {
                t.deleteRow(2);
            }
            ArrayUtil.barmanSort(res, Car.modelComparator);
            TableWorking.filltable(res, tbl);
            return res;
        }
    }
    ;

    TableWorking.delElement=function(res, tbl) {
        document.getElementById("del").onclick = function () {
            var tableVar = document.getElementById("tableFin");
            var tableRowsLenght = tableVar.rows.length;
            console.log(tableRowsLenght);
            for (var i = 2; i <= tableRowsLenght; i++) {
                var row = tableVar.rows[i];
                var chkbox = row.cells[0].getElementsByTagName("input")[0];
                if ('checkbox' == chkbox.type && true == chkbox.checked) {
                    tableVar.deleteRow(i);
                    res.splice(i - 2, 1);
                    i--;
                }
            }
            var t = document.getElementById("tableFin");
            while (t.rows.length > 2) {
                t.deleteRow(2);
            }
            ArrayUtil.barmanSort(res, Car.modelComparator);
            TableWorking.filltable(res, tbl);
            return res;
        }
    }
    ;

    TableWorking.filltable=function (array, tbl) {
        for (i = 0; i < array.length; i++) {
            var row = tbl.insertRow();
            row.insertCell().innerHTML = '<input type="checkbox" class="check"/>';
            row.insertCell().innerText = array[i].model;
            row.insertCell().style.backgroundColor = array[i].color;
            row.insertCell().innerText = array[i].engine;
            row.insertCell().innerText = array[i].owner.name;
            row.insertCell().innerText = array[i].owner.city;
        }

    }
    ;

    TableWorking.sortByEngine=function (flag, res, tbl) {

        document.getElementById("engineButton").onclick = function () {
            if (flag == 1) {
                ArrayUtil.barmanSort(res, Car.engineComparatorRevers);

                var q = document.getElementById("tableFin");
                while (q.rows.length > 2) {
                    q.deleteRow(2);
                }
                TableWorking.filltable(res, tbl);

                flag = 0;
                return res;
            }
            else {

                ArrayUtil.barmanSort(res, Car.engineComparator);
                var q = document.getElementById("tableFin");
                while (q.rows.length > 2) {
                    q.deleteRow(2);
                }
                TableWorking.filltable(res, tbl);
                flag = 1;
                return res;
            }
        }

    }
    ;

    TableWorking.sortByCity=function (flag, array, tbl) {
        document.getElementById("cityButton").onclick = function () {
            if (flag == 1) {
                ArrayUtil.barmanSort(array, Car.ownerCityComparator);
                var q = document.getElementById("tableFin");
                while (q.rows.length > 2) {
                    q.deleteRow(2);
                }
                TableWorking.filltable(array, tbl);
                flag = 0;
                return array;
            }
            else {
                ArrayUtil.barmanSort(array, Car.ownerCityComparatorRevers);

                q = document.getElementById("tableFin");
                while (q.rows.length > 2) {
                    q.deleteRow(2);
                }

                TableWorking.filltable(array, tbl);
                flag = 1;
                return array

            }
        }
    }
    ;


    TableWorking.sortByName=function (flag, res, tbl) {
        document.getElementById("ownerButton").onclick = function () {
            if (flag == 1) {
                ArrayUtil.barmanSort(res, Car.ownerNameComparator);

                var q = document.getElementById("tableFin");
                while (q.rows.length > 2) {
                    q.deleteRow(2);
                }
                TableWorking.filltable(res, tbl);
                flag = 0;
            }
            else {

                ArrayUtil.barmanSort(res, Car.ownerNameComparatorRevers);

                var q = document.getElementById("tableFin");
                while (q.rows.length > 2) {
                    q.deleteRow(2);
                }
                TableWorking.filltable(res, tbl);
                flag = 1;
            }
        }

    };


    TableWorking.sortByColor=function (flag, res, tbl) {
        document.getElementById("colorButton").onclick = function () {
            if (flag == 1) {
                ArrayUtil.barmanSort(res, Car.colorComparator);

                var q = document.getElementById("tableFin");
                while (q.rows.length > 2) {
                    q.deleteRow(2);
                }
                TableWorking.filltable(res, tbl);
                flag = 0;
            }
            else {

                ArrayUtil.barmanSort(res, Car.colorComparatorRevers);

                var q = document.getElementById("tableFin");
                while (q.rows.length > 2) {
                    q.deleteRow(2);
                }
                TableWorking.filltable(res, tbl);
                flag = 1;
            }

        }
    };

    TableWorking.sortByModel=function (flag, res, tbl) {
        document.getElementById("modelButton").onclick = function () {
            if (flag == 1) {
                ArrayUtil.barmanSort(res, Car.modelComparator);

                var q = document.getElementById("tableFin");
                while (q.rows.length > 2) {
                    q.deleteRow(2);
                }
                TableWorking.filltable(res, tbl);
                flag = 0;
            }
            else {

                ArrayUtil.barmanSort(res, Car.modelComparatorRevers);

                var q = document.getElementById("tableFin");
                while (q.rows.length > 2) {
                    q.deleteRow(2);
                }
                TableWorking.filltable(res, tbl);
                flag = 1;
            }

        }
    };
}
