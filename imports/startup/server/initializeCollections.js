import { YeshivaCourses, SternCourses } from '../../api/courses.js';
import { Calendars } from '../../api/calendars.js';

if (YeshivaCourses.find().count() === 0) {
  YeshivaCoursesArray = [
       {
          "capacity": 500,
          "code": "1033",
          "credits": 3,
          "department": "*Hebrew Studies",
          "display": {
             "dow": "",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "36129",
          "instructor": "TBA",
          "location": "TBA",
          "section": "JS3",
          "start": "",
          "subject": "HES",
          "title": "Hebrew Lang & Lit (JSS)"
       },
       {
          "capacity": 50,
          "code": "1034",
          "credits": 4,
          "department": "*Hebrew Studies",
          "display": {
             "dow": "",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "36130",
          "instructor": "TBA",
          "location": "TBA",
          "section": "JS4",
          "start": "",
          "subject": "HES",
          "title": "Hebrew Lang & Lit (JSS)"
       },
       {
          "capacity": 500,
          "code": "1131",
          "credits": 1,
          "department": "*Hebrew Studies",
          "display": {
             "dow": "",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "36118",
          "instructor": "TBA",
          "location": "TBA",
          "section": "MY1",
          "start": "",
          "subject": "HES",
          "title": "Hebrew Lang & Lit (MYP)"
       },
       {
          "capacity": 500,
          "code": "1132",
          "credits": 2,
          "department": "*Hebrew Studies",
          "display": {
             "dow": "",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "36119",
          "instructor": "TBA",
          "location": "TBA",
          "section": "MY2",
          "start": "",
          "subject": "HES",
          "title": "Hebrew Lang & Lit (MYP)"
       },
       {
          "capacity": 500,
          "code": "1133",
          "credits": 3,
          "department": "*Hebrew Studies",
          "display": {
             "dow": "",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "36120",
          "instructor": "TBA",
          "location": "TBA",
          "section": "MY3",
          "start": "",
          "subject": "HES",
          "title": "Hebrew Lang & Lit (MYP)"
       },
       {
          "capacity": 500,
          "code": "1233",
          "credits": 3,
          "department": "*Hebrew Studies",
          "display": {
             "dow": "",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "36125",
          "instructor": "TBA",
          "location": "TBA",
          "section": "IB3",
          "start": "",
          "subject": "HES",
          "title": "Hebrew Lang & Lit (IBC)"
       },
       {
          "capacity": 500,
          "code": "1631",
          "credits": 1,
          "department": "*Hebrew Studies",
          "display": {
             "dow": "",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "36121",
          "instructor": "TBA",
          "location": "TBA",
          "section": "BM1",
          "start": "",
          "subject": "HES",
          "title": "Hebrew Lang & Lit (BMP)"
       },
       {
          "capacity": 500,
          "code": "1632",
          "credits": 2,
          "department": "*Hebrew Studies",
          "display": {
             "dow": "",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "36122",
          "instructor": "TBA",
          "location": "TBA",
          "section": "BM2",
          "start": "",
          "subject": "HES",
          "title": "Hebrew Lang & Lit (BMP)"
       },
       {
          "capacity": 500,
          "code": "1633",
          "credits": 3,
          "department": "*Hebrew Studies",
          "display": {
             "dow": "",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "36133",
          "instructor": "TBA",
          "location": "TBA",
          "section": "BM3",
          "start": "",
          "subject": "HES",
          "title": "Hebrew Lang & Lit (BMP)"
       },
       {
          "capacity": 35,
          "code": "1001",
          "credits": 3,
          "department": "Accounting",
          "display": {
             "dow": "MW",
             "end": "02:45pm",
             "start": "01:30pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "14:45",
          "id": "33793",
          "instructor": "Aliza Rotenstein",
          "location": "TBA",
          "section": "211",
          "start": "13:30",
          "subject": "ACC",
          "title": "Accounting Principles I"
       },
       {
          "capacity": 40,
          "code": "1001",
          "credits": 3,
          "department": "Accounting",
          "display": {
             "dow": "MW",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "16:15",
          "id": "33866",
          "instructor": "Constance J. Crawford",
          "location": "TBA",
          "section": "231",
          "start": "15:00",
          "subject": "ACC",
          "title": "Accounting Principles I"
       },
       {
          "capacity": 40,
          "code": "1001",
          "credits": 3,
          "department": "Accounting",
          "display": {
             "dow": "MW",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "17:45",
          "id": "33817",
          "instructor": "Constance J. Crawford",
          "location": "TBA",
          "section": "241",
          "start": "16:30",
          "subject": "ACC",
          "title": "Accounting Principles I"
       },
       {
          "capacity": 40,
          "code": "1001",
          "credits": 3,
          "department": "Accounting",
          "display": {
             "dow": "TR",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "16:15",
          "id": "33794",
          "instructor": "Leonard Fuld",
          "location": "TBA",
          "section": "331",
          "start": "15:00",
          "subject": "ACC",
          "title": "Accounting Principles I"
       },
       {
          "capacity": 0,
          "code": "1001",
          "credits": 3,
          "department": "Accounting",
          "display": {
             "dow": "TR",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "17:45",
          "id": "35635",
          "instructor": "TBA",
          "location": "TBA",
          "section": "341",
          "start": "16:30",
          "subject": "ACC",
          "title": "Accounting Principles I"
       },
       {
          "capacity": 35,
          "code": "1002",
          "credits": 3,
          "department": "Accounting",
          "display": {
             "dow": "TR",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "16:15",
          "id": "33821",
          "instructor": "Joel A. Hochman",
          "location": "TBA",
          "section": "331",
          "start": "15:00",
          "subject": "ACC",
          "title": "Accounting Principles II"
       },
       {
          "capacity": 35,
          "code": "1101",
          "credits": 3,
          "department": "Accounting",
          "display": {
             "dow": "MW",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "16:15",
          "id": "33795",
          "instructor": "Aliza Rotenstein",
          "location": "TBA",
          "section": "231",
          "start": "15:00",
          "subject": "ACC",
          "title": "Intermediate Accounting I"
       },
       {
          "capacity": 35,
          "code": "1101",
          "credits": 3,
          "department": "Accounting",
          "display": {
             "dow": "MW",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "17:45",
          "id": "33796",
          "instructor": "Aliza Rotenstein",
          "location": "TBA",
          "section": "241",
          "start": "16:30",
          "subject": "ACC",
          "title": "Intermediate Accounting I"
       },
       {
          "capacity": 25,
          "code": "1101",
          "credits": 3,
          "department": "Accounting",
          "display": {
             "dow": "TR",
             "end": "08:00pm",
             "start": "06:45pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "20:00",
          "id": "36423",
          "instructor": "Francine Mellors-Rothenstein",
          "location": "TBA",
          "section": "361",
          "start": "18:45",
          "subject": "ACC",
          "title": "Intermediate Accounting I"
       },
       {
          "capacity": 40,
          "code": "2403",
          "credits": 3,
          "department": "Accounting",
          "display": {
             "dow": "M",
             "end": "09:15pm",
             "start": "06:45pm"
          },
          "dow": [
             1
          ],
          "end": "21:15",
          "id": "33797",
          "instructor": "He Huang",
          "location": "TBA",
          "section": "261",
          "start": "18:45",
          "subject": "ACC",
          "title": "Management Accounting"
       },
       {
          "capacity": 35,
          "code": "3201",
          "credits": 3,
          "department": "Accounting",
          "display": {
             "dow": "MW",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "16:15",
          "id": "33825",
          "instructor": "Martin A. Leibowitz",
          "location": "TBA",
          "section": "231",
          "start": "15:00",
          "subject": "ACC",
          "title": "Advanced Accounting"
       },
       {
          "capacity": 35,
          "code": "3201",
          "credits": 3,
          "department": "Accounting",
          "display": {
             "dow": "MW",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "17:45",
          "id": "33798",
          "instructor": "Martin A. Leibowitz",
          "location": "TBA",
          "section": "241",
          "start": "16:30",
          "subject": "ACC",
          "title": "Advanced Accounting"
       },
       {
          "capacity": 15,
          "code": "3851",
          "credits": 3,
          "department": "Accounting",
          "display": {
             "dow": "W",
             "end": "09:15pm",
             "start": "06:45pm"
          },
          "dow": [
             3
          ],
          "end": "21:15",
          "id": "33816",
          "instructor": "Sidney J. Mehl",
          "location": "TBA",
          "section": "461",
          "start": "18:45",
          "subject": "ACC",
          "title": "Financial Statement Analysis"
       },
       {
          "capacity": 6,
          "code": "1023H",
          "credits": 3,
          "department": "Art",
          "display": {
             "dow": "F",
             "end": "12:30pm",
             "start": "10:00am"
          },
          "dow": [
             5
          ],
          "end": "12:30",
          "id": "35699",
          "instructor": "Jacob Wisse, Meir Yakov Soloveichik ",
          "location": "TBA",
          "section": "621",
          "start": "10:00",
          "subject": "ART",
          "title": "Rembrandt and the Jews"
       },
       {
          "capacity": 15,
          "code": "1635H",
          "credits": 3,
          "department": "Art",
          "display": {
             "dow": "T",
             "end": "09:30pm",
             "start": "06:45pm"
          },
          "dow": [
             2
          ],
          "end": "21:30",
          "id": "35570",
          "instructor": "Paul Glassman",
          "location": "TBA",
          "section": "361",
          "start": "18:45",
          "subject": "ART",
          "title": "Evolution of the Skyscraper"
       },
       {
          "capacity": 25,
          "code": "1831",
          "credits": 3,
          "department": "Art",
          "display": {
             "dow": "W",
             "end": "09:30pm",
             "start": "06:45pm"
          },
          "dow": [
             3
          ],
          "end": "21:30",
          "id": "35643",
          "instructor": "Paul Glassman",
          "location": "TBA",
          "section": "461",
          "start": "18:45",
          "subject": "ART",
          "title": "Architectural Design Process"
       },
       {
          "capacity": 16,
          "code": "2301",
          "credits": 2,
          "department": "Art",
          "display": {
             "dow": "M",
             "end": "10:30pm",
             "start": "08:45pm"
          },
          "dow": [
             1
          ],
          "end": "22:30",
          "id": "33989",
          "instructor": "Carla Aurich",
          "location": "MUSS MU107",
          "section": "281",
          "start": "20:45",
          "subject": "ART",
          "title": "Principles of Drawing"
       },
       {
          "capacity": 25,
          "code": "1000",
          "credits": 2,
          "department": "Bible",
          "display": {
             "dow": "T",
             "end": "02:45pm",
             "start": "01:05pm"
          },
          "dow": [
             2
          ],
          "end": "14:45",
          "id": "33969",
          "instructor": "Moshe J. Bernstein",
          "location": "TBA",
          "section": "311",
          "start": "13:05",
          "subject": "BIB",
          "title": "Bible:Text, Context, Tradition"
       },
       {
          "capacity": 32,
          "code": "1000",
          "credits": 2,
          "department": "Bible",
          "display": {
             "dow": "T",
             "end": "02:45pm",
             "start": "01:05pm"
          },
          "dow": [
             2
          ],
          "end": "14:45",
          "id": "33972",
          "instructor": "Shalom Carmy",
          "location": "TBA",
          "section": "312",
          "start": "13:05",
          "subject": "BIB",
          "title": "Bible:Text, Context, Tradition"
       },
       {
          "capacity": 25,
          "code": "1000",
          "credits": 2,
          "department": "Bible",
          "display": {
             "dow": "R",
             "end": "02:45pm",
             "start": "01:05pm"
          },
          "dow": [
             4
          ],
          "end": "14:45",
          "id": "33971",
          "instructor": "Moshe J. Bernstein",
          "location": "TBA",
          "section": "511",
          "start": "13:05",
          "subject": "BIB",
          "title": "Bible:Text, Context, Tradition"
       },
       {
          "capacity": 28,
          "code": "1000",
          "credits": 2,
          "department": "Bible",
          "display": {
             "dow": "R",
             "end": "02:45pm",
             "start": "01:05pm"
          },
          "dow": [
             4
          ],
          "end": "14:45",
          "id": "33973",
          "instructor": "Shalom Carmy",
          "location": "TBA",
          "section": "512",
          "start": "13:05",
          "subject": "BIB",
          "title": "Bible:Text, Context, Tradition"
       },
       {
          "capacity": 32,
          "code": "1000",
          "credits": 2,
          "department": "Bible",
          "display": {
             "dow": "R",
             "end": "02:45pm",
             "start": "01:05pm"
          },
          "dow": [
             4
          ],
          "end": "14:45",
          "id": "33970",
          "instructor": "Yaakov Elman",
          "location": "TBA",
          "section": "513",
          "start": "13:05",
          "subject": "BIB",
          "title": "Bible:Text, Context, Tradition"
       },
       {
          "capacity": 25,
          "code": "1000",
          "credits": 3,
          "department": "Bible",
          "display": {
             "dow": "MW",
             "end": "12:15pm",
             "start": "11:00am"
          },
          "dow": [
             1,
             3
          ],
          "end": "12:15",
          "id": "34636",
          "instructor": "Shalom E. Holtz",
          "location": "FURST F213",
          "section": "IB3",
          "start": "11:00",
          "subject": "BIB",
          "title": "Bible:Text, Context, Tradition"
       },
       {
          "capacity": 25,
          "code": "1220",
          "credits": 2,
          "department": "Bible",
          "display": {
             "dow": "T",
             "end": "02:45pm",
             "start": "01:05pm"
          },
          "dow": [
             2
          ],
          "end": "14:45",
          "id": "33974",
          "instructor": "Elazar Hurvitz",
          "location": "FURST F206",
          "section": "311",
          "start": "13:05",
          "subject": "BIB",
          "title": "Biblical Midrashim"
       },
       {
          "capacity": 25,
          "code": "1310",
          "credits": 3,
          "department": "Bible",
          "display": {
             "dow": "MW",
             "end": "12:15pm",
             "start": "11:00am"
          },
          "dow": [
             1,
             3
          ],
          "end": "12:15",
          "id": "35886",
          "instructor": "Aaron J. Koller",
          "location": "FURST F209",
          "section": "IB3",
          "start": "11:00",
          "subject": "BIB",
          "title": "The aqeda “Binding of Isaac” and its interpretation"
       },
       {
          "capacity": 15,
          "code": "2000H",
          "credits": 2,
          "department": "Bible",
          "display": {
             "dow": "T",
             "end": "02:45pm",
             "start": "01:05pm"
          },
          "dow": [
             2
          ],
          "end": "14:45",
          "id": "35571",
          "instructor": "Barry L. Eichler",
          "location": "TBA",
          "section": "311",
          "start": "13:05",
          "subject": "BIB",
          "title": "Genesis"
       },
       {
          "capacity": 15,
          "code": "2020H",
          "credits": 3,
          "department": "Bible",
          "display": {
             "dow": "TR",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "17:45",
          "id": "35573",
          "instructor": "Shalom Carmy",
          "location": "TBA",
          "section": "341",
          "start": "16:30",
          "subject": "BIB",
          "title": "Exodus"
       },
       {
          "capacity": 25,
          "code": "2560",
          "credits": 2.5,
          "department": "Bible",
          "display": {
             "dow": "TR",
             "end": "09:55am",
             "start": "09:00am"
          },
          "dow": [
             2,
             4
          ],
          "end": "9:55",
          "id": "35829",
          "instructor": "Allen M. Schwartz",
          "location": "FURST F204",
          "section": "IB4",
          "start": "9:00",
          "subject": "BIB",
          "title": "Amos and Hosea"
       },
       {
          "capacity": 35,
          "code": "2700",
          "credits": 2,
          "department": "Bible",
          "display": {
             "dow": "R",
             "end": "02:45pm",
             "start": "01:05pm"
          },
          "dow": [
             4
          ],
          "end": "14:45",
          "id": "34637",
          "instructor": "Joseph L. Angel",
          "location": "TBA",
          "section": "511",
          "start": "13:05",
          "subject": "BIB",
          "title": "Psalms"
       },
       {
          "capacity": 35,
          "code": "2720",
          "credits": 2,
          "department": "Bible",
          "display": {
             "dow": "T",
             "end": "02:45pm",
             "start": "01:05pm"
          },
          "dow": [
             2
          ],
          "end": "14:45",
          "id": "35569",
          "instructor": "Jeremy Wieder",
          "location": "TBA",
          "section": "311",
          "start": "13:05",
          "subject": "BIB",
          "title": "Proverbs"
       },
       {
          "capacity": 30,
          "code": "2740",
          "credits": 2,
          "department": "Bible",
          "display": {
             "dow": "R",
             "end": "02:45pm",
             "start": "01:05pm"
          },
          "dow": [
             4
          ],
          "end": "14:45",
          "id": "33975",
          "instructor": "Elazar Hurvitz",
          "location": "FURST F206",
          "section": "511",
          "start": "13:05",
          "subject": "BIB",
          "title": "Job"
       },
       {
          "capacity": 30,
          "code": "2800",
          "credits": 2,
          "department": "Bible",
          "display": {
             "dow": "T",
             "end": "02:45pm",
             "start": "01:05pm"
          },
          "dow": [
             2
          ],
          "end": "14:45",
          "id": "35575",
          "instructor": "J. Mitchell Orlian",
          "location": "FURST F209",
          "section": "311",
          "start": "13:05",
          "subject": "BIB",
          "title": "Daniel"
       },
       {
          "capacity": 30,
          "code": "2800",
          "credits": 2,
          "department": "Bible",
          "display": {
             "dow": "R",
             "end": "02:45pm",
             "start": "01:05pm"
          },
          "dow": [
             4
          ],
          "end": "14:45",
          "id": "35572",
          "instructor": "J. Mitchell Orlian",
          "location": "FURST F209",
          "section": "511",
          "start": "13:05",
          "subject": "BIB",
          "title": "Daniel"
       },
       {
          "capacity": 25,
          "code": "2820",
          "credits": 3,
          "department": "Bible",
          "display": {
             "dow": "TR",
             "end": "12:15pm",
             "start": "11:00am"
          },
          "dow": [
             2,
             4
          ],
          "end": "12:15",
          "id": "35715",
          "instructor": "J. Mitchell Orlian",
          "location": "FURST F209",
          "section": "IB6",
          "start": "11:00",
          "subject": "BIB",
          "title": "Ezra-Nehemiah"
       },
       {
          "capacity": 30,
          "code": "5115",
          "credits": 3,
          "department": "Bible",
          "display": {
             "dow": "W",
             "end": "08:30pm",
             "start": "06:50pm"
          },
          "dow": [
             3
          ],
          "end": "20:30",
          "id": "35795",
          "instructor": "Barry L. Eichler",
          "location": "FURST ",
          "section": "A",
          "start": "18:50",
          "subject": "BIB",
          "title": "Intro to Biblical Study II"
       },
       {
          "capacity": 30,
          "code": "5200",
          "credits": 3,
          "department": "Bible",
          "display": {
             "dow": "M",
             "end": "08:30pm",
             "start": "06:50pm"
          },
          "dow": [
             1
          ],
          "end": "20:30",
          "id": "35738",
          "instructor": "Aaron J. Koller",
          "location": "FURST ",
          "section": "A",
          "start": "18:50",
          "subject": "BIB",
          "title": "Biblical Hebrew"
       },
       {
          "capacity": 30,
          "code": "6090",
          "credits": 3,
          "department": "Bible",
          "display": {
             "dow": "T",
             "end": "06:30pm",
             "start": "04:50pm"
          },
          "dow": [
             2
          ],
          "end": "18:30",
          "id": "35796",
          "instructor": "Mordechai Z. Cohen",
          "location": "FURST ",
          "section": "A",
          "start": "16:50",
          "subject": "BIB",
          "title": "Maimonides' Biblical Exegesis"
       },
       {
          "capacity": 30,
          "code": "6212",
          "credits": 3,
          "department": "Bible",
          "display": {
             "dow": "W",
             "end": "04:30pm",
             "start": "02:50pm"
          },
          "dow": [
             3
          ],
          "end": "16:30",
          "id": "35797",
          "instructor": "Barry L. Eichler",
          "location": "FURST ",
          "section": "A",
          "start": "14:50",
          "subject": "BIB",
          "title": "Genesis: Biblical Cosmogony"
       },
       {
          "capacity": 30,
          "code": "7401",
          "credits": 3,
          "department": "Bible",
          "display": {
             "dow": "R",
             "end": "04:30pm",
             "start": "02:50pm"
          },
          "dow": [
             4
          ],
          "end": "16:30",
          "id": "35798",
          "instructor": "Shalom E. Holtz",
          "location": "FURST ",
          "section": "A",
          "start": "14:50",
          "subject": "BIB",
          "title": "Book of Jeremiah"
       },
       {
          "capacity": 0,
          "code": "9901",
          "credits": 3,
          "department": "Bible",
          "display": {
             "dow": "TBA",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "35740",
          "instructor": "TBA",
          "location": "TBA",
          "section": "A",
          "start": "",
          "subject": "BIB",
          "title": "Guided Readings"
       },
       {
          "capacity": 0,
          "code": "9970",
          "credits": 0,
          "department": "Bible",
          "display": {
             "dow": "TBA",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "35741",
          "instructor": "TBA",
          "location": "TBA",
          "section": "A",
          "start": "",
          "subject": "BIB",
          "title": "Masters Research I"
       },
       {
          "capacity": 0,
          "code": "9971",
          "credits": 0,
          "department": "Bible",
          "display": {
             "dow": "TBA",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "35742",
          "instructor": "TBA",
          "location": "TBA",
          "section": "A",
          "start": "",
          "subject": "BIB",
          "title": "Masters Research II"
       },
       {
          "capacity": 0,
          "code": "9979",
          "credits": 0,
          "department": "Bible",
          "display": {
             "dow": "TBA",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "35744",
          "instructor": "TBA",
          "location": "TBA",
          "section": "A",
          "start": "",
          "subject": "BIB",
          "title": "Doctoral Planning II"
       },
       {
          "capacity": 18,
          "code": "1011L",
          "credits": 2,
          "department": "Biology",
          "display": {
             "dow": "M",
             "end": "10:05pm",
             "start": "06:45pm"
          },
          "dow": [
             1
          ],
          "end": "22:05",
          "id": "33868",
          "instructor": "Danielle Wasserman",
          "location": "BELFHL B1415",
          "section": "261",
          "start": "18:45",
          "subject": "BIO",
          "title": "Principles Lab"
       },
       {
          "capacity": 18,
          "code": "1011L",
          "credits": 2,
          "department": "Biology",
          "display": {
             "dow": "T",
             "end": "10:05pm",
             "start": "06:45pm"
          },
          "dow": [
             2
          ],
          "end": "22:05",
          "id": "33869",
          "instructor": "Aaron Kogut",
          "location": "BELFHL B1415",
          "section": "361",
          "start": "18:45",
          "subject": "BIO",
          "title": "Principles Lab"
       },
       {
          "capacity": 18,
          "code": "1011L",
          "credits": 2,
          "department": "Biology",
          "display": {
             "dow": "W",
             "end": "10:05pm",
             "start": "06:45pm"
          },
          "dow": [
             3
          ],
          "end": "22:05",
          "id": "33870",
          "instructor": "TBA",
          "location": "BELFHL B1415",
          "section": "461",
          "start": "18:45",
          "subject": "BIO",
          "title": "Principles Lab"
       },
       {
          "capacity": 18,
          "code": "1011L",
          "credits": 2,
          "department": "Biology",
          "display": {
             "dow": "R",
             "end": "10:05pm",
             "start": "06:45pm"
          },
          "dow": [
             4
          ],
          "end": "22:05",
          "id": "37211",
          "instructor": "TBA",
          "location": "TBA",
          "section": "561",
          "start": "18:45",
          "subject": "BIO",
          "title": "Principles Lab"
       },
       {
          "capacity": 99,
          "code": "1011R",
          "credits": 3,
          "department": "Biology",
          "display": {
             "dow": "TR",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "16:15",
          "id": "33872",
          "instructor": "Somdeb Mitra",
          "location": "TBA",
          "section": "331",
          "start": "15:00",
          "subject": "BIO",
          "title": "Principles Lectures"
       },
       {
          "capacity": 12,
          "code": "1376L",
          "credits": 2,
          "department": "Biology",
          "display": {
             "dow": "R",
             "end": "10:05pm",
             "start": "06:45pm"
          },
          "dow": [
             4
          ],
          "end": "22:05",
          "id": "33873",
          "instructor": "Somdeb Mitra",
          "location": "BELFHL B1417",
          "section": "561",
          "start": "18:45",
          "subject": "BIO",
          "title": "Biochemistry Lab"
       },
       {
          "capacity": 25,
          "code": "1376R",
          "credits": 3,
          "department": "Biology",
          "display": {
             "dow": "TR",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "16:15",
          "id": "33874",
          "instructor": "Daniel Lim",
          "location": "TBA",
          "section": "331",
          "start": "15:00",
          "subject": "BIO",
          "title": "Biochemistry Lecture"
       },
       {
          "capacity": 12,
          "code": "3135C",
          "credits": 4,
          "department": "Biology",
          "display": {
             "dow": "T",
             "end": "04:40pm",
             "start": "03:00pm"
          },
          "dow": [
             2
          ],
          "end": "16:40",
          "id": "33876",
          "instructor": "Vincent Chiappetta",
          "location": "TBA",
          "section": "331",
          "start": "15:00",
          "subject": "BIO",
          "title": "CELL STRUCTURE AND FUNCTION"
       },
       {
          "capacity": 12,
          "code": "3135C",
          "credits": 4,
          "department": "Biology",
          "display": {
             "dow": "T",
             "end": "10:05pm",
             "start": "06:45pm"
          },
          "dow": [
             2
          ],
          "end": "22:05",
          "id": "33876",
          "instructor": "Vincent Chiappetta",
          "location": "TBA",
          "section": "331",
          "start": "18:45",
          "subject": "BIO",
          "title": "CELL STRUCTURE AND FUNCTION"
       },
       {
          "capacity": 16,
          "code": "3207C",
          "credits": 4,
          "department": "Biology",
          "display": {
             "dow": "TR",
             "end": "03:50pm",
             "start": "03:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "15:50",
          "id": "33877",
          "instructor": "TBA",
          "location": "TBA",
          "section": "331",
          "start": "15:00",
          "subject": "BIO",
          "title": "Cell Biology"
       },
       {
          "capacity": 16,
          "code": "3207C",
          "credits": 4,
          "department": "Biology",
          "display": {
             "dow": "T",
             "end": "10:05pm",
             "start": "06:45pm"
          },
          "dow": [
             2
          ],
          "end": "22:05",
          "id": "33877",
          "instructor": "TBA",
          "location": "FURST F020",
          "section": "331",
          "start": "18:45",
          "subject": "BIO",
          "title": "Cell Biology"
       },
       {
          "capacity": 18,
          "code": "3513C",
          "credits": 4,
          "department": "Biology",
          "display": {
             "dow": "MW",
             "end": "03:50pm",
             "start": "03:00pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "15:50",
          "id": "33939",
          "instructor": "Josefa M. Steinhauer",
          "location": "BELFHL B1410",
          "section": "231",
          "start": "15:00",
          "subject": "BIO",
          "title": "Genetics"
       },
       {
          "capacity": 18,
          "code": "3513C",
          "credits": 4,
          "department": "Biology",
          "display": {
             "dow": "W",
             "end": "10:05pm",
             "start": "06:45pm"
          },
          "dow": [
             3
          ],
          "end": "22:05",
          "id": "33939",
          "instructor": "Josefa M. Steinhauer",
          "location": "BELFHL B1407",
          "section": "231",
          "start": "18:45",
          "subject": "BIO",
          "title": "Genetics"
       },
       {
          "capacity": 12,
          "code": "3728C",
          "credits": 4,
          "department": "Biology",
          "display": {
             "dow": "R",
             "end": "06:40pm",
             "start": "05:00pm"
          },
          "dow": [
             4
          ],
          "end": "18:40",
          "id": "33940",
          "instructor": "Sumanta Goswami",
          "location": "BELFHL B1410",
          "section": "551",
          "start": "17:00",
          "subject": "BIO",
          "title": "Human & Animal Physiology"
       },
       {
          "capacity": 12,
          "code": "3728C",
          "credits": 4,
          "department": "Biology",
          "display": {
             "dow": "R",
             "end": "10:05pm",
             "start": "06:45pm"
          },
          "dow": [
             4
          ],
          "end": "22:05",
          "id": "33940",
          "instructor": "Sumanta Goswami",
          "location": "BELFHL B1407",
          "section": "551",
          "start": "18:45",
          "subject": "BIO",
          "title": "Human & Animal Physiology"
       },
       {
          "capacity": 18,
          "code": "4023L",
          "credits": 2,
          "department": "Biology",
          "display": {
             "dow": "W",
             "end": "10:05pm",
             "start": "06:45pm"
          },
          "dow": [
             3
          ],
          "end": "22:05",
          "id": "33920",
          "instructor": "TBA",
          "location": "TBA",
          "section": "461",
          "start": "18:45",
          "subject": "BIO",
          "title": "Microbiology Lab"
       },
       {
          "capacity": 25,
          "code": "4023R",
          "credits": 2,
          "department": "Biology",
          "display": {
             "dow": "W",
             "end": "06:10pm",
             "start": "04:30pm"
          },
          "dow": [
             3
          ],
          "end": "18:10",
          "id": "33921",
          "instructor": "Moses D. Tendler",
          "location": "TBA",
          "section": "441",
          "start": "16:30",
          "subject": "BIO",
          "title": "Microbiology"
       },
       {
          "capacity": 0,
          "code": "4901",
          "credits": 0,
          "department": "Biology",
          "display": {
             "dow": "TBA",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "33978",
          "instructor": "TBA",
          "location": "TBA",
          "section": "901",
          "start": "",
          "subject": "BIO",
          "title": "Research in Biology"
       },
       {
          "capacity": 15,
          "code": "4930",
          "credits": 3,
          "department": "Biology",
          "display": {
             "dow": "MW",
             "end": "08:00pm",
             "start": "06:45pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "20:00",
          "id": "35574",
          "instructor": "Esther Devorah Rollhaus",
          "location": "TBA",
          "section": "261",
          "start": "18:45",
          "subject": "BIO",
          "title": "Topics: Psychopharmacology"
       },
       {
          "capacity": 18,
          "code": "4934H",
          "credits": 2,
          "department": "Biology",
          "display": {
             "dow": "R",
             "end": "08:25pm",
             "start": "06:45pm"
          },
          "dow": [
             4
          ],
          "end": "20:25",
          "id": "33977",
          "instructor": "TBA",
          "location": "TBA",
          "section": "561",
          "start": "18:45",
          "subject": "BIO",
          "title": "Topics: Stem Cells"
       },
       {
          "capacity": 0,
          "code": "4741",
          "credits": 0,
          "department": "Business & Management",
          "display": {
             "dow": "",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "33815",
          "instructor": "TBA",
          "location": "TBA",
          "section": "INT",
          "start": "",
          "subject": "BUS",
          "title": "Business Internship"
       },
       {
          "capacity": 40,
          "code": "1800H",
          "credits": 3,
          "department": "Business Law",
          "display": {
             "dow": "W",
             "end": "08:00pm",
             "start": "06:45pm"
          },
          "dow": [
             3
          ],
          "end": "20:00",
          "id": "33851",
          "instructor": "Moses L. Pava",
          "location": "TBA",
          "section": "461",
          "start": "18:45",
          "subject": "BLW",
          "title": "Business as Human Enterprise"
       },
       {
          "capacity": 35,
          "code": "2021",
          "credits": 3,
          "department": "Business Law",
          "display": {
             "dow": "MW",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "16:15",
          "id": "33799",
          "instructor": "Daniel Feldman",
          "location": "TBA",
          "section": "231",
          "start": "15:00",
          "subject": "BLW",
          "title": "Ethical & Legal Env Business"
       },
       {
          "capacity": 35,
          "code": "2021",
          "credits": 3,
          "department": "Business Law",
          "display": {
             "dow": "MW",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "17:45",
          "id": "35661",
          "instructor": "Daniel Feldman",
          "location": "TBA",
          "section": "241",
          "start": "16:30",
          "subject": "BLW",
          "title": "Ethical & Legal Env Business"
       },
       {
          "capacity": 30,
          "code": "2111",
          "credits": 3,
          "department": "Business Law",
          "display": {
             "dow": "TR",
             "end": "02:45pm",
             "start": "01:30pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "14:45",
          "id": "33800",
          "instructor": "Robert Jay Greenberg",
          "location": "TBA",
          "section": "311",
          "start": "13:30",
          "subject": "BLW",
          "title": "Business Law I"
       },
       {
          "capacity": 45,
          "code": "2111",
          "credits": 3,
          "department": "Business Law",
          "display": {
             "dow": "TR",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "16:15",
          "id": "33801",
          "instructor": "Robert Jay Greenberg",
          "location": "TBA",
          "section": "331",
          "start": "15:00",
          "subject": "BLW",
          "title": "Business Law I"
       },
       {
          "capacity": 25,
          "code": "2500",
          "credits": 2,
          "department": "Business Law",
          "display": {
             "dow": "T",
             "end": "02:45pm",
             "start": "01:05pm"
          },
          "dow": [
             2
          ],
          "end": "14:45",
          "id": "33831",
          "instructor": "Ozer Glickman",
          "location": "TBA",
          "section": "311",
          "start": "13:05",
          "subject": "BLW",
          "title": "Business and Jewish Law"
       },
       {
          "capacity": 25,
          "code": "2500",
          "credits": 2,
          "department": "Business Law",
          "display": {
             "dow": "T",
             "end": "02:45pm",
             "start": "01:05pm"
          },
          "dow": [
             2
          ],
          "end": "14:45",
          "id": "33822",
          "instructor": "Daniel Feldman",
          "location": "TBA",
          "section": "312",
          "start": "13:05",
          "subject": "BLW",
          "title": "Business and Jewish Law"
       },
       {
          "capacity": 25,
          "code": "2500",
          "credits": 2,
          "department": "Business Law",
          "display": {
             "dow": "R",
             "end": "02:45pm",
             "start": "01:05pm"
          },
          "dow": [
             4
          ],
          "end": "14:45",
          "id": "33832",
          "instructor": "Ozer Glickman",
          "location": "TBA",
          "section": "511",
          "start": "13:05",
          "subject": "BLW",
          "title": "Business and Jewish Law"
       },
       {
          "capacity": 80,
          "code": "1045R",
          "credits": 3,
          "department": "Chemistry",
          "display": {
             "dow": "TR",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "17:45",
          "id": "33878",
          "instructor": "James Camara",
          "location": "TBA",
          "section": "341",
          "start": "16:30",
          "subject": "CHE",
          "title": "General Chemistry I Lec"
       },
       {
          "capacity": 80,
          "code": "1045R",
          "credits": 3,
          "department": "Chemistry",
          "display": {
             "dow": "R",
             "end": "06:40pm",
             "start": "05:50pm"
          },
          "dow": [
             4
          ],
          "end": "18:40",
          "id": "33878",
          "instructor": "James Camara",
          "location": "TBA",
          "section": "341",
          "start": "17:50",
          "subject": "CHE",
          "title": "General Chemistry I Lec"
       },
       {
          "capacity": 12,
          "code": "1122H",
          "credits": 4,
          "department": "Chemistry",
          "display": {
             "dow": "MW",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "17:45",
          "id": "34029",
          "instructor": "Jianfeng Jiang",
          "location": "BELFHL B1610",
          "section": "241",
          "start": "16:30",
          "subject": "CHE",
          "title": "Chemical Analysis"
       },
       {
          "capacity": 12,
          "code": "1122H",
          "credits": 4,
          "department": "Chemistry",
          "display": {
             "dow": "W",
             "end": "09:45pm",
             "start": "06:45pm"
          },
          "dow": [
             3
          ],
          "end": "21:45",
          "id": "34029",
          "instructor": "Jianfeng Jiang",
          "location": "BELFHL B1613",
          "section": "241",
          "start": "18:45",
          "subject": "CHE",
          "title": "Chemical Analysis"
       },
       {
          "capacity": 48,
          "code": "1213R",
          "credits": 3,
          "department": "Chemistry",
          "display": {
             "dow": "TR",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "17:45",
          "id": "33879",
          "instructor": "Fabiola Barrios-Landeros",
          "location": "TBA",
          "section": "341",
          "start": "16:30",
          "subject": "CHE",
          "title": "Organic Chemistry I Lec"
       },
       {
          "capacity": 48,
          "code": "1213R",
          "credits": 3,
          "department": "Chemistry",
          "display": {
             "dow": "R",
             "end": "06:40pm",
             "start": "05:50pm"
          },
          "dow": [
             4
          ],
          "end": "18:40",
          "id": "33879",
          "instructor": "Fabiola Barrios-Landeros",
          "location": "TBA",
          "section": "341",
          "start": "17:50",
          "subject": "CHE",
          "title": "Organic Chemistry I Lec"
       },
       {
          "capacity": 16,
          "code": "1215L",
          "credits": 2,
          "department": "Chemistry",
          "display": {
             "dow": "M",
             "end": "10:45pm",
             "start": "06:45pm"
          },
          "dow": [
             1
          ],
          "end": "22:45",
          "id": "33961",
          "instructor": "Jacopo Samson",
          "location": "BELFHL B1510",
          "section": "261",
          "start": "18:45",
          "subject": "CHE",
          "title": "Organic Chemistry Lab"
       },
       {
          "capacity": 16,
          "code": "1215L",
          "credits": 2,
          "department": "Chemistry",
          "display": {
             "dow": "T",
             "end": "10:45pm",
             "start": "06:45pm"
          },
          "dow": [
             2
          ],
          "end": "22:45",
          "id": "33962",
          "instructor": "Racquel K. Malcolm-Whyte",
          "location": "BELFHL B1510",
          "section": "361",
          "start": "18:45",
          "subject": "CHE",
          "title": "Organic Chemistry Lab"
       },
       {
          "capacity": 16,
          "code": "1215L",
          "credits": 2,
          "department": "Chemistry",
          "display": {
             "dow": "F",
             "end": "01:00pm",
             "start": "09:00am"
          },
          "dow": [
             5
          ],
          "end": "13:00",
          "id": "33963",
          "instructor": "Fabiola Barrios-Landeros",
          "location": "BELFHL B1510",
          "section": "611",
          "start": "9:00",
          "subject": "CHE",
          "title": "Organic Chemistry Lab"
       },
       {
          "capacity": 6,
          "code": "1376L",
          "credits": 2,
          "department": "Chemistry",
          "display": {
             "dow": "R",
             "end": "10:05pm",
             "start": "06:45pm"
          },
          "dow": [
             4
          ],
          "end": "22:05",
          "id": "33927",
          "instructor": "Somdeb Mitra",
          "location": "BELFHL B1417",
          "section": "561",
          "start": "18:45",
          "subject": "CHE",
          "title": "Biochemistry Lab"
       },
       {
          "capacity": 15,
          "code": "1376R",
          "credits": 3,
          "department": "Chemistry",
          "display": {
             "dow": "TR",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "16:15",
          "id": "33928",
          "instructor": "Daniel Lim",
          "location": "TBA",
          "section": "331",
          "start": "15:00",
          "subject": "CHE",
          "title": "Biochemistry Lec"
       },
       {
          "capacity": 15,
          "code": "1415R",
          "credits": 4,
          "department": "Chemistry",
          "display": {
             "dow": "MW",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "16:15",
          "id": "33932",
          "instructor": "Raji Viswanathan",
          "location": "TBA",
          "section": "231",
          "start": "15:00",
          "subject": "CHE",
          "title": "Physical Chemistry I"
       },
       {
          "capacity": 15,
          "code": "1415R",
          "credits": 4,
          "department": "Chemistry",
          "display": {
             "dow": "M",
             "end": "07:40pm",
             "start": "06:50pm"
          },
          "dow": [
             1
          ],
          "end": "19:40",
          "id": "33932",
          "instructor": "Raji Viswanathan",
          "location": "TBA",
          "section": "231",
          "start": "18:50",
          "subject": "CHE",
          "title": "Physical Chemistry I"
       },
       {
          "capacity": 0,
          "code": "4901",
          "credits": 0,
          "department": "Chemistry",
          "display": {
             "dow": "TBA",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "33979",
          "instructor": "TBA",
          "location": "TBA",
          "section": "901",
          "start": "",
          "subject": "CHE",
          "title": "Research in Chemistry"
       },
       {
          "capacity": 50,
          "code": "1300C",
          "credits": 4,
          "department": "Computer Science",
          "display": {
             "dow": "MW",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "17:45",
          "id": "33985",
          "instructor": "Van Kelly",
          "location": "TBA",
          "section": "241",
          "start": "16:30",
          "subject": "COM",
          "title": "Introduction to Computer Science"
       },
       {
          "capacity": 25,
          "code": "1300L",
          "credits": 0,
          "department": "Computer Science",
          "display": {
             "dow": "M",
             "end": "08:15pm",
             "start": "06:45pm"
          },
          "dow": [
             1
          ],
          "end": "20:15",
          "id": "33955",
          "instructor": "Mahdokht Behravan",
          "location": "TBA",
          "section": "261",
          "start": "18:45",
          "subject": "COM",
          "title": "Intro to Computer Science-Lab"
       },
       {
          "capacity": 25,
          "code": "1300L",
          "credits": 0,
          "department": "Computer Science",
          "display": {
             "dow": "R",
             "end": "08:15pm",
             "start": "06:45pm"
          },
          "dow": [
             4
          ],
          "end": "20:15",
          "id": "34129",
          "instructor": "Mahdokht Behravan",
          "location": "TBA",
          "section": "561",
          "start": "18:45",
          "subject": "COM",
          "title": "Intro to Computer Science-Lab"
       },
       {
          "capacity": 24,
          "code": "1320C",
          "credits": 4,
          "department": "Computer Science",
          "display": {
             "dow": "TR",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "17:45",
          "id": "33936",
          "instructor": "TBA",
          "location": "TBA",
          "section": "341",
          "start": "16:30",
          "subject": "COM",
          "title": "Data Structures"
       },
       {
          "capacity": 24,
          "code": "1320L",
          "credits": 0,
          "department": "Computer Science",
          "display": {
             "dow": "M",
             "end": "08:00pm",
             "start": "06:45pm"
          },
          "dow": [
             1
          ],
          "end": "20:00",
          "id": "34030",
          "instructor": "TBA",
          "location": "TBA",
          "section": "261",
          "start": "18:45",
          "subject": "COM",
          "title": "Data Structures Lab"
       },
       {
          "capacity": 12,
          "code": "1504C",
          "credits": 4,
          "department": "Computer Science",
          "display": {
             "dow": "TR",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "16:15",
          "id": "33943",
          "instructor": "Arnold Lebow",
          "location": "TBA",
          "section": "331",
          "start": "15:00",
          "subject": "COM",
          "title": "Discrete Structures"
       },
       {
          "capacity": 12,
          "code": "1504C",
          "credits": 4,
          "department": "Computer Science",
          "display": {
             "dow": "R",
             "end": "08:00pm",
             "start": "06:45pm"
          },
          "dow": [
             4
          ],
          "end": "20:00",
          "id": "33943",
          "instructor": "Arnold Lebow",
          "location": "TBA",
          "section": "331",
          "start": "18:45",
          "subject": "COM",
          "title": "Discrete Structures"
       },
       {
          "capacity": 20,
          "code": "1621",
          "credits": 3,
          "department": "Computer Science",
          "display": {
             "dow": "MW",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "17:45",
          "id": "35896",
          "instructor": "Arnold Lebow",
          "location": "TBA",
          "section": "241",
          "start": "16:30",
          "subject": "COM",
          "title": "Theory of Computation"
       },
       {
          "capacity": 20,
          "code": "3610",
          "credits": 3,
          "department": "Computer Science",
          "display": {
             "dow": "MW",
             "end": "08:00pm",
             "start": "06:45pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "20:00",
          "id": "33922",
          "instructor": "TBA",
          "location": "TBA",
          "section": "261",
          "start": "18:45",
          "subject": "COM",
          "title": "Intro to Operating Systems"
       },
       {
          "capacity": 20,
          "code": "3780",
          "credits": 3,
          "department": "Computer Science",
          "display": {
             "dow": "MW",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "16:15",
          "id": "33931",
          "instructor": "Van Kelly",
          "location": "TBA",
          "section": "231",
          "start": "15:00",
          "subject": "COM",
          "title": "Web Programming & Development"
       },
       {
          "capacity": 28,
          "code": "1002",
          "credits": 3,
          "department": "Contemporary World Cultures",
          "display": {
             "dow": "TR",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "16:15",
          "id": "34023",
          "instructor": "Elizabeth Stewart",
          "location": "TBA",
          "section": "331",
          "start": "15:00",
          "subject": "COWC",
          "title": "COWC 1002: Diaspora Literature"
       },
       {
          "capacity": 28,
          "code": "1014",
          "credits": 3,
          "department": "Contemporary World Cultures",
          "display": {
             "dow": "TR",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "17:45",
          "id": "35644",
          "instructor": "Jonathan Schapiro",
          "location": "TBA",
          "section": "341",
          "start": "16:30",
          "subject": "COWC",
          "title": "American Musical Cultures"
       },
       {
          "capacity": 28,
          "code": "1017",
          "credits": 3,
          "department": "Contemporary World Cultures",
          "display": {
             "dow": "TR",
             "end": "08:00pm",
             "start": "06:45pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "20:00",
          "id": "35645",
          "instructor": "Graciela Bazet de Broitman",
          "location": "TBA",
          "section": "361",
          "start": "18:45",
          "subject": "COWC",
          "title": "The Spanish Civil War 35645 COWC 1017 361"
       },
       {
          "capacity": 28,
          "code": "1020",
          "credits": 3,
          "department": "Contemporary World Cultures",
          "display": {
             "dow": "MW",
             "end": "08:00pm",
             "start": "06:45pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "20:00",
          "id": "35646",
          "instructor": "Roberto Genoves",
          "location": "TBA",
          "section": "261",
          "start": "18:45",
          "subject": "COWC",
          "title": "Politics and Global Markets"
       },
       {
          "capacity": 28,
          "code": "1025",
          "credits": 3,
          "department": "Contemporary World Cultures",
          "display": {
             "dow": "F",
             "end": "12:00pm",
             "start": "09:30am"
          },
          "dow": [
             5
          ],
          "end": "12:00",
          "id": "35579",
          "instructor": "Jonathan J. Zisook",
          "location": "TBA",
          "section": "611",
          "start": "9:30",
          "subject": "COWC",
          "title": "Religion and Society"
       },
       {
          "capacity": 28,
          "code": "1003",
          "credits": 3,
          "department": "Cultures Over Time",
          "display": {
             "dow": "MW",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "16:15",
          "id": "34108",
          "instructor": "David Lavinsky",
          "location": "TBA",
          "section": "231",
          "start": "15:00",
          "subject": "CUOT",
          "title": "The Monstrous"
       },
       {
          "capacity": 15,
          "code": "1003H",
          "credits": 3,
          "department": "Cultures Over Time",
          "display": {
             "dow": "MW",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "17:45",
          "id": "35647",
          "instructor": "David Lavinsky",
          "location": "TBA",
          "section": "241",
          "start": "16:30",
          "subject": "CUOT",
          "title": "The Monstrous"
       },
       {
          "capacity": 28,
          "code": "1009",
          "credits": 3,
          "department": "Cultures Over Time",
          "display": {
             "dow": "MW",
             "end": "02:45pm",
             "start": "01:30pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "14:45",
          "id": "35648",
          "instructor": "Rachel Mesch",
          "location": "TBA",
          "section": "211",
          "start": "13:30",
          "subject": "CUOT",
          "title": "France and its Others"
       },
       {
          "capacity": 28,
          "code": "1021",
          "credits": 3,
          "department": "Cultures Over Time",
          "display": {
             "dow": "TR",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "16:15",
          "id": "34132",
          "instructor": "Jeffrey Freedman",
          "location": "TBA",
          "section": "331",
          "start": "15:00",
          "subject": "CUOT",
          "title": "Origins of Democratic Political Culture"
       },
       {
          "capacity": 28,
          "code": "1026",
          "credits": 3,
          "department": "Cultures Over Time",
          "display": {
             "dow": "F",
             "end": "12:00pm",
             "start": "09:30am"
          },
          "dow": [
             5
          ],
          "end": "12:00",
          "id": "35649",
          "instructor": "Aaron J. Koller",
          "location": "TBA",
          "section": "611",
          "start": "9:30",
          "subject": "CUOT",
          "title": "The History of the Alphabet, from its Invention to the Rise of Arabic"
       },
       {
          "capacity": 108,
          "code": "1010",
          "credits": 3,
          "department": "Economics",
          "display": {
             "dow": "TR",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "16:15",
          "id": "34082",
          "instructor": "Ran Shao",
          "location": "TBA",
          "section": "331",
          "start": "15:00",
          "subject": "ECO",
          "title": "Principles of Economics"
       },
       {
          "capacity": 32,
          "code": "1177",
          "credits": 3,
          "department": "Economics",
          "display": {
             "dow": "TR",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "16:15",
          "id": "34002",
          "instructor": "Tadashi Hashimoto",
          "location": "TBA",
          "section": "331",
          "start": "15:00",
          "subject": "ECO",
          "title": "Game Theory"
       },
       {
          "capacity": 32,
          "code": "1201",
          "credits": 3,
          "department": "Economics",
          "display": {
             "dow": "MW",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "16:15",
          "id": "33923",
          "instructor": "Omer Acikgoz",
          "location": "TBA",
          "section": "231",
          "start": "15:00",
          "subject": "ECO",
          "title": "Intermediate Macroeconomics"
       },
       {
          "capacity": 18,
          "code": "1221H",
          "credits": 3,
          "department": "Economics",
          "display": {
             "dow": "TR",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "16:15",
          "id": "35846",
          "instructor": "Elias C. Grivoyannis",
          "location": "TBA",
          "section": "331",
          "start": "15:00",
          "subject": "ECO",
          "title": "Money and Banking"
       },
       {
          "capacity": 32,
          "code": "1421",
          "credits": 3,
          "department": "Economics",
          "display": {
             "dow": "M",
             "end": "09:15pm",
             "start": "06:45pm"
          },
          "dow": [
             1
          ],
          "end": "21:15",
          "id": "33935",
          "instructor": "Orkideh Gharehgozli",
          "location": "TBA",
          "section": "261",
          "start": "18:45",
          "subject": "ECO",
          "title": "Econometrics"
       },
       {
          "capacity": 32,
          "code": "1701",
          "credits": 3,
          "department": "Economics",
          "display": {
             "dow": "TR",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "17:45",
          "id": "35584",
          "instructor": "Elias C. Grivoyannis",
          "location": "TBA",
          "section": "341",
          "start": "16:30",
          "subject": "ECO",
          "title": "International Economics"
       },
       {
          "capacity": 0,
          "code": "5120",
          "credits": 3,
          "department": "Education",
          "display": {
             "dow": "TBA",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "37295",
          "instructor": "TBA",
          "location": "TBA",
          "section": "AP",
          "start": "",
          "subject": "EDU",
          "title": "Models of Teaching"
       },
       {
          "capacity": 0,
          "code": "5130",
          "credits": 3,
          "department": "Education",
          "display": {
             "dow": "TBA",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "37282",
          "instructor": "TBA",
          "location": "TBA",
          "section": "A",
          "start": "",
          "subject": "EDU",
          "title": "Differentiated Instruction"
       },
       {
          "capacity": 0,
          "code": "5140",
          "credits": 3,
          "department": "Education",
          "display": {
             "dow": "TBA",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "37283",
          "instructor": "TBA",
          "location": "TBA",
          "section": "A",
          "start": "",
          "subject": "EDU",
          "title": "Curriculum and Assessment"
       },
       {
          "capacity": 15,
          "code": "0010",
          "credits": 2,
          "department": "English",
          "display": {
             "dow": "MW",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "17:45",
          "id": "33919",
          "instructor": "Norma Silbermintz",
          "location": "TBA",
          "section": "241",
          "start": "16:30",
          "subject": "ENG",
          "title": "ESL: Intro to College"
       },
       {
          "capacity": 15,
          "code": "0011",
          "credits": 1,
          "department": "English",
          "display": {
             "dow": "MW",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "17:45",
          "id": "33958",
          "instructor": "Norma Silbermintz",
          "location": "TBA",
          "section": "241",
          "start": "16:30",
          "subject": "ENG",
          "title": "Eng as Sec Lang I"
       },
       {
          "capacity": 15,
          "code": "0012",
          "credits": 1,
          "department": "English",
          "display": {
             "dow": "MW",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "17:45",
          "id": "33959",
          "instructor": "Norma Silbermintz",
          "location": "TBA",
          "section": "241",
          "start": "16:30",
          "subject": "ENG",
          "title": "Eng as Sec Lang II"
       },
       {
          "capacity": 15,
          "code": "0013",
          "credits": 1,
          "department": "English",
          "display": {
             "dow": "MW",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "17:45",
          "id": "33960",
          "instructor": "Norma Silbermintz",
          "location": "TBA",
          "section": "241",
          "start": "16:30",
          "subject": "ENG",
          "title": "Eng as Sec Lang III"
       },
       {
          "capacity": 5,
          "code": "1002",
          "credits": 3,
          "department": "English",
          "display": {
             "dow": "TR",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "16:15",
          "id": "35652",
          "instructor": "Elizabeth Stewart",
          "location": "TBA",
          "section": "331",
          "start": "15:00",
          "subject": "ENG",
          "title": "Diaspora Literature"
       },
       {
          "capacity": 5,
          "code": "1003",
          "credits": 3,
          "department": "English",
          "display": {
             "dow": "TR",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "16:15",
          "id": "35653",
          "instructor": "William Lamborn Lee",
          "location": "TBA",
          "section": "331",
          "start": "15:00",
          "subject": "ENG",
          "title": "Shakespeare and the Arts"
       },
       {
          "capacity": 5,
          "code": "1007",
          "credits": 3,
          "department": "English",
          "display": {
             "dow": "MW",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "16:15",
          "id": "35654",
          "instructor": "Richard Leonard Nochimson",
          "location": "TBA",
          "section": "231",
          "start": "15:00",
          "subject": "ENG",
          "title": "Fiction & Artistic Imagination"
       },
       {
          "capacity": 15,
          "code": "1409",
          "credits": 3,
          "department": "English",
          "display": {
             "dow": "MW",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "17:45",
          "id": "35656",
          "instructor": "Liesl Schwabe",
          "location": "TBA",
          "section": "241",
          "start": "16:30",
          "subject": "ENG",
          "title": "Writing the Essay: From Personal Narrative to Personal Statements"
       },
       {
          "capacity": 15,
          "code": "2052",
          "credits": 3,
          "department": "English",
          "display": {
             "dow": "TR",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "17:45",
          "id": "35677",
          "instructor": "William Lamborn Lee",
          "location": "TBA",
          "section": "341",
          "start": "16:30",
          "subject": "ENG",
          "title": "Realisms: Mimetic to Magical"
       },
       {
          "capacity": 15,
          "code": "2317",
          "credits": 3,
          "department": "English",
          "display": {
             "dow": "T",
             "end": "09:15pm",
             "start": "06:45pm"
          },
          "dow": [
             2
          ],
          "end": "21:15",
          "id": "35657",
          "instructor": "David Lavinsky",
          "location": "TBA",
          "section": "361",
          "start": "18:45",
          "subject": "ENG",
          "title": "21st Century Chaucer: The Canterbury Tales"
       },
       {
          "capacity": 15,
          "code": "2963H",
          "credits": 3,
          "department": "English",
          "display": {
             "dow": "F",
             "end": "12:30pm",
             "start": "10:00am"
          },
          "dow": [
             5
          ],
          "end": "12:30",
          "id": "35658",
          "instructor": "Elizabeth Stewart",
          "location": "TBA",
          "section": "621",
          "start": "10:00",
          "subject": "ENG",
          "title": "Graphic Novels and Animation"
       },
       {
          "capacity": 15,
          "code": "3065",
          "credits": 3,
          "department": "English",
          "display": {
             "dow": "M",
             "end": "09:15pm",
             "start": "06:45pm"
          },
          "dow": [
             1
          ],
          "end": "21:15",
          "id": "35655",
          "instructor": "Rachel Mesch",
          "location": "TBA",
          "section": "261",
          "start": "18:45",
          "subject": "ENG",
          "title": "Gender and Literature"
       },
       {
          "capacity": 15,
          "code": "4001",
          "credits": 2,
          "department": "English",
          "display": {
             "dow": "W",
             "end": "09:45pm",
             "start": "08:15pm"
          },
          "dow": [
             3
          ],
          "end": "21:45",
          "id": "33933",
          "instructor": "Lauren Fitzgerald",
          "location": "TBA",
          "section": "481",
          "start": "20:15",
          "subject": "ENG",
          "title": "Senior Colloquium"
       },
       {
          "capacity": 18,
          "code": "1002",
          "credits": 3,
          "department": "Experimental & Quant. Methods",
          "display": {
             "dow": "M",
             "end": "06:45pm",
             "start": "04:30pm"
          },
          "dow": [
             1
          ],
          "end": "18:45",
          "id": "34007",
          "instructor": "Raji Viswanathan",
          "location": "TBA",
          "section": "241",
          "start": "16:30",
          "subject": "EXQM",
          "title": "Analysis of Environmntl Toxins"
       },
       {
          "capacity": 18,
          "code": "1002",
          "credits": 3,
          "department": "Experimental & Quant. Methods",
          "display": {
             "dow": "W",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             3
          ],
          "end": "17:45",
          "id": "34007",
          "instructor": "Raji Viswanathan",
          "location": "TBA",
          "section": "241",
          "start": "16:30",
          "subject": "EXQM",
          "title": "Analysis of Environmntl Toxins"
       },
       {
          "capacity": 13,
          "code": "1007",
          "credits": 3,
          "department": "Experimental & Quant. Methods",
          "display": {
             "dow": "TR",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "17:45",
          "id": "35578",
          "instructor": "Daniel Kimmel",
          "location": "TBA",
          "section": "341",
          "start": "16:30",
          "subject": "EXQM",
          "title": "Epidemiology"
       },
       {
          "capacity": 35,
          "code": "1001",
          "credits": 3,
          "department": "Finance",
          "display": {
             "dow": "MW",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "17:45",
          "id": "33802",
          "instructor": "Sidney J. Mehl",
          "location": "TBA",
          "section": "241",
          "start": "16:30",
          "subject": "FIN",
          "title": "Principles of Finance"
       },
       {
          "capacity": 35,
          "code": "1001",
          "credits": 3,
          "department": "Finance",
          "display": {
             "dow": "TR",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "17:45",
          "id": "35673",
          "instructor": "Rachel Calipha",
          "location": "TBA",
          "section": "341",
          "start": "16:30",
          "subject": "FIN",
          "title": "Principles of Finance"
       },
       {
          "capacity": 25,
          "code": "1408",
          "credits": 3,
          "department": "Finance",
          "display": {
             "dow": "MW",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "16:15",
          "id": "35674",
          "instructor": "Joshua Krausz",
          "location": "TBA",
          "section": "231",
          "start": "15:00",
          "subject": "FIN",
          "title": "Corporate Finance"
       },
       {
          "capacity": 25,
          "code": "1408",
          "credits": 3,
          "department": "Finance",
          "display": {
             "dow": "TR",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "17:45",
          "id": "33803",
          "instructor": "Gabriela Coiculescu",
          "location": "TBA",
          "section": "341",
          "start": "16:30",
          "subject": "FIN",
          "title": "Corporate Finance"
       },
       {
          "capacity": 30,
          "code": "2505",
          "credits": 3,
          "department": "Finance",
          "display": {
             "dow": "MW",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "17:45",
          "id": "33804",
          "instructor": "Joshua Krausz",
          "location": "TBA",
          "section": "241",
          "start": "16:30",
          "subject": "FIN",
          "title": "Investment Analysis"
       },
       {
          "capacity": 30,
          "code": "3510",
          "credits": 3,
          "department": "Finance",
          "display": {
             "dow": "TR",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "16:15",
          "id": "33844",
          "instructor": "Rachel Calipha",
          "location": "TBA",
          "section": "331",
          "start": "15:00",
          "subject": "FIN",
          "title": "Options and Futures"
       },
       {
          "capacity": 30,
          "code": "3720",
          "credits": 3,
          "department": "Finance",
          "display": {
             "dow": "M",
             "end": "09:15pm",
             "start": "06:45pm"
          },
          "dow": [
             1
          ],
          "end": "21:15",
          "id": "33820",
          "instructor": "S. Abraham Ravid",
          "location": "TBA",
          "section": "261",
          "start": "18:45",
          "subject": "FIN",
          "title": "Fixed Income Securities"
       },
       {
          "capacity": 15,
          "code": "3851",
          "credits": 3,
          "department": "Finance",
          "display": {
             "dow": "W",
             "end": "09:15pm",
             "start": "06:45pm"
          },
          "dow": [
             3
          ],
          "end": "21:15",
          "id": "33806",
          "instructor": "Sidney J. Mehl",
          "location": "TBA",
          "section": "461",
          "start": "18:45",
          "subject": "FIN",
          "title": "Financial Statement Analysis"
       },
       {
          "capacity": 22,
          "code": "1012",
          "credits": 3,
          "department": "First Year Seminar",
          "display": {
             "dow": "MW",
             "end": "02:45pm",
             "start": "01:30pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "14:45",
          "id": "33827",
          "instructor": "Marc Spear",
          "location": "TBA",
          "section": "211",
          "start": "13:30",
          "subject": "FYSM",
          "title": "Business Communication"
       },
       {
          "capacity": 22,
          "code": "1012",
          "credits": 3,
          "department": "First Year Seminar",
          "display": {
             "dow": "MW",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "16:15",
          "id": "33853",
          "instructor": "Marc Spear",
          "location": "TBA",
          "section": "231",
          "start": "15:00",
          "subject": "FYSM",
          "title": "Business Communication"
       },
       {
          "capacity": 22,
          "code": "1012",
          "credits": 3,
          "department": "First Year Seminar",
          "display": {
             "dow": "MW",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "17:45",
          "id": "33852",
          "instructor": "Marc Spear",
          "location": "TBA",
          "section": "241",
          "start": "16:30",
          "subject": "FYSM",
          "title": "Business Communication"
       },
       {
          "capacity": 16,
          "code": "1020",
          "credits": 3,
          "department": "First Year Writing",
          "display": {
             "dow": "MW",
             "end": "02:45pm",
             "start": "01:30pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "14:45",
          "id": "34068",
          "instructor": "Liesl Schwabe",
          "location": "TBA",
          "section": "211",
          "start": "13:30",
          "subject": "FYWR",
          "title": "First Year Writing"
       },
       {
          "capacity": 16,
          "code": "1020",
          "credits": 3,
          "department": "First Year Writing",
          "display": {
             "dow": "MW",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "16:15",
          "id": "34069",
          "instructor": "Liesl Schwabe",
          "location": "TBA",
          "section": "231",
          "start": "15:00",
          "subject": "FYWR",
          "title": "First Year Writing"
       },
       {
          "capacity": 16,
          "code": "1020",
          "credits": 3,
          "department": "First Year Writing",
          "display": {
             "dow": "MW",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "16:15",
          "id": "34072",
          "instructor": "Elizabeth Stewart",
          "location": "TBA",
          "section": "232",
          "start": "15:00",
          "subject": "FYWR",
          "title": "First Year Writing"
       },
       {
          "capacity": 16,
          "code": "1020",
          "credits": 3,
          "department": "First Year Writing",
          "display": {
             "dow": "MW",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "17:45",
          "id": "34070",
          "instructor": "Lauren Fitzgerald",
          "location": "TBA",
          "section": "241",
          "start": "16:30",
          "subject": "FYWR",
          "title": "First Year Writing"
       },
       {
          "capacity": 16,
          "code": "1020",
          "credits": 3,
          "department": "First Year Writing",
          "display": {
             "dow": "MW",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "17:45",
          "id": "34076",
          "instructor": "Norma Silbermintz",
          "location": "TBA",
          "section": "242",
          "start": "16:30",
          "subject": "FYWR",
          "title": "First Year Writing:ESL"
       },
       {
          "capacity": 15,
          "code": "1020",
          "credits": 3,
          "department": "First Year Writing",
          "display": {
             "dow": "MW",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "17:45",
          "id": "33858",
          "instructor": "TBA",
          "location": "TBA",
          "section": "243",
          "start": "16:30",
          "subject": "FYWR",
          "title": "First Year Writing"
       },
       {
          "capacity": 16,
          "code": "1020",
          "credits": 3,
          "department": "First Year Writing",
          "display": {
             "dow": "MW",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "17:45",
          "id": "34117",
          "instructor": "Barbara A. Blatner",
          "location": "TBA",
          "section": "244",
          "start": "16:30",
          "subject": "FYWR",
          "title": "First Year Writing"
       },
       {
          "capacity": 16,
          "code": "1020",
          "credits": 3,
          "department": "First Year Writing",
          "display": {
             "dow": "MW",
             "end": "08:00pm",
             "start": "06:45pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "20:00",
          "id": "35582",
          "instructor": "Richard Leonard Nochimson",
          "location": "TBA",
          "section": "261",
          "start": "18:45",
          "subject": "FYWR",
          "title": "First Year Writing"
       },
       {
          "capacity": 15,
          "code": "1020",
          "credits": 3,
          "department": "First Year Writing",
          "display": {
             "dow": "MW",
             "end": "08:00pm",
             "start": "06:45pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "20:00",
          "id": "33857",
          "instructor": "TBA",
          "location": "TBA",
          "section": "262",
          "start": "18:45",
          "subject": "FYWR",
          "title": "First Year Writing"
       },
       {
          "capacity": 15,
          "code": "1020",
          "credits": 3,
          "department": "First Year Writing",
          "display": {
             "dow": "TR",
             "end": "02:45pm",
             "start": "01:30pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "14:45",
          "id": "33860",
          "instructor": "Timothy J. Berrigan",
          "location": "TBA",
          "section": "311",
          "start": "13:30",
          "subject": "FYWR",
          "title": "First Year Writing"
       },
       {
          "capacity": 16,
          "code": "1020",
          "credits": 3,
          "department": "First Year Writing",
          "display": {
             "dow": "TR",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "16:15",
          "id": "34071",
          "instructor": "Barbara A. Blatner",
          "location": "TBA",
          "section": "331",
          "start": "15:00",
          "subject": "FYWR",
          "title": "First Year Writing"
       },
       {
          "capacity": 20,
          "code": "1020",
          "credits": 3,
          "department": "First Year Writing",
          "display": {
             "dow": "TR",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "16:15",
          "id": "33859",
          "instructor": "Timothy J. Berrigan",
          "location": "TBA",
          "section": "332",
          "start": "15:00",
          "subject": "FYWR",
          "title": "First Year Writing"
       },
       {
          "capacity": 16,
          "code": "1020",
          "credits": 3,
          "department": "First Year Writing",
          "display": {
             "dow": "TR",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "17:45",
          "id": "34073",
          "instructor": "Barbara A. Blatner",
          "location": "TBA",
          "section": "341",
          "start": "16:30",
          "subject": "FYWR",
          "title": "First Year Writing"
       },
       {
          "capacity": 20,
          "code": "1020",
          "credits": 3,
          "department": "First Year Writing",
          "display": {
             "dow": "TR",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "17:45",
          "id": "33861",
          "instructor": "Timothy J. Berrigan",
          "location": "TBA",
          "section": "342",
          "start": "16:30",
          "subject": "FYWR",
          "title": "First Year Writing"
       },
       {
          "capacity": 20,
          "code": "1020",
          "credits": 3,
          "department": "First Year Writing",
          "display": {
             "dow": "TR",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "17:45",
          "id": "36573",
          "instructor": "TBA",
          "location": "TBA",
          "section": "343",
          "start": "16:30",
          "subject": "FYWR",
          "title": "First Year Writing"
       },
       {
          "capacity": 18,
          "code": "1101",
          "credits": 3,
          "department": "French",
          "display": {
             "dow": "TR",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "17:45",
          "id": "33881",
          "instructor": "Raisa Rexer",
          "location": "TBA",
          "section": "341",
          "start": "16:30",
          "subject": "FRE",
          "title": "Elementary French I"
       },
       {
          "capacity": 18,
          "code": "1201",
          "credits": 3,
          "department": "French",
          "display": {
             "dow": "TR",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "16:15",
          "id": "34119",
          "instructor": "Raisa Rexer",
          "location": "TBA",
          "section": "331",
          "start": "15:00",
          "subject": "FRE",
          "title": "Intermediate French I"
       },
       {
          "capacity": 25,
          "code": "1004",
          "credits": 3,
          "department": "Hebrew",
          "display": {
             "dow": "MWR",
             "end": "12:50pm",
             "start": "12:01pm"
          },
          "dow": [
             1,
             3,
             4
          ],
          "end": "12:50",
          "id": "34012",
          "instructor": "Lori Linzer",
          "location": "TBA",
          "section": "201",
          "start": "12:01",
          "subject": "HEB",
          "title": "Elementary Biblical Hebrew II"
       },
       {
          "capacity": 25,
          "code": "1004",
          "credits": 3,
          "department": "Hebrew",
          "display": {
             "dow": "T",
             "end": "01:10pm",
             "start": "12:20pm"
          },
          "dow": [
             2
          ],
          "end": "13:10",
          "id": "34012",
          "instructor": "Lori Linzer",
          "location": "TBA",
          "section": "201",
          "start": "12:20",
          "subject": "HEB",
          "title": "Elementary Biblical Hebrew II"
       },
       {
          "capacity": 25,
          "code": "1004",
          "credits": 3,
          "department": "Hebrew",
          "display": {
             "dow": "MTWR",
             "end": "02:50pm",
             "start": "02:00pm"
          },
          "dow": [
             1,
             2,
             3,
             4
          ],
          "end": "14:50",
          "id": "33976",
          "instructor": "Lori Linzer",
          "location": "TBA",
          "section": "211",
          "start": "14:00",
          "subject": "HEB",
          "title": "Elementary Biblical Hebrew II"
       },
       {
          "capacity": 20,
          "code": "1005",
          "credits": 3,
          "department": "Hebrew",
          "display": {
             "dow": "MWR",
             "end": "12:50pm",
             "start": "12:01pm"
          },
          "dow": [
             1,
             3,
             4
          ],
          "end": "12:50",
          "id": "34013",
          "instructor": "Rachel Kra Schaum",
          "location": "TBA",
          "section": "201",
          "start": "12:01",
          "subject": "HEB",
          "title": "Intermed. Biblical Hebrew I"
       },
       {
          "capacity": 20,
          "code": "1005",
          "credits": 3,
          "department": "Hebrew",
          "display": {
             "dow": "T",
             "end": "01:10pm",
             "start": "12:20pm"
          },
          "dow": [
             2
          ],
          "end": "13:10",
          "id": "34013",
          "instructor": "Rachel Kra Schaum",
          "location": "TBA",
          "section": "201",
          "start": "12:20",
          "subject": "HEB",
          "title": "Intermed. Biblical Hebrew I"
       },
       {
          "capacity": 20,
          "code": "1005",
          "credits": 3,
          "department": "Hebrew",
          "display": {
             "dow": "MWR",
             "end": "01:55pm",
             "start": "01:05pm"
          },
          "dow": [
             1,
             3,
             4
          ],
          "end": "13:55",
          "id": "33952",
          "instructor": "Rachel Kra Schaum",
          "location": "TBA",
          "section": "211",
          "start": "13:05",
          "subject": "HEB",
          "title": "Intermed. Biblical Hebrew I"
       },
       {
          "capacity": 20,
          "code": "1005",
          "credits": 3,
          "department": "Hebrew",
          "display": {
             "dow": "T",
             "end": "02:00pm",
             "start": "01:10pm"
          },
          "dow": [
             2
          ],
          "end": "14:00",
          "id": "33952",
          "instructor": "Rachel Kra Schaum",
          "location": "TBA",
          "section": "211",
          "start": "13:10",
          "subject": "HEB",
          "title": "Intermed. Biblical Hebrew I"
       },
       {
          "capacity": 20,
          "code": "1006",
          "credits": 3,
          "department": "Hebrew",
          "display": {
             "dow": "MTWR",
             "end": "02:25pm",
             "start": "01:35pm"
          },
          "dow": [
             1,
             2,
             3,
             4
          ],
          "end": "14:25",
          "id": "33948",
          "instructor": "Ezra H. Frazer",
          "location": "TBA",
          "section": "211",
          "start": "13:35",
          "subject": "HEB",
          "title": "Intermed. Biblical Hebrew II"
       },
       {
          "capacity": 20,
          "code": "1006",
          "credits": 3,
          "department": "Hebrew",
          "display": {
             "dow": "MW",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "16:15",
          "id": "34014",
          "instructor": "Ezra H. Frazer",
          "location": "TBA",
          "section": "231",
          "start": "15:00",
          "subject": "HEB",
          "title": "Intermed. Biblical Hebrew II"
       },
       {
          "capacity": 20,
          "code": "1006",
          "credits": 3,
          "department": "Hebrew",
          "display": {
             "dow": "T",
             "end": "06:40pm",
             "start": "05:50pm"
          },
          "dow": [
             2
          ],
          "end": "18:40",
          "id": "34014",
          "instructor": "Ezra H. Frazer",
          "location": "TBA",
          "section": "231",
          "start": "17:50",
          "subject": "HEB",
          "title": "Intermed. Biblical Hebrew II"
       },
       {
          "capacity": 25,
          "code": "1105",
          "credits": 3,
          "department": "Hebrew",
          "display": {
             "dow": "MTWR",
             "end": "02:25pm",
             "start": "01:35pm"
          },
          "dow": [
             1,
             2,
             3,
             4
          ],
          "end": "14:25",
          "id": "33953",
          "instructor": "Chaya Glaser",
          "location": "TBA",
          "section": "211",
          "start": "13:35",
          "subject": "HEB",
          "title": "intermediate Hebrew"
       },
       {
          "capacity": 25,
          "code": "1105",
          "credits": 3,
          "department": "Hebrew",
          "display": {
             "dow": "MW",
             "end": "04:20pm",
             "start": "03:00pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "16:20",
          "id": "34015",
          "instructor": "Chaya Glaser",
          "location": "TBA",
          "section": "231",
          "start": "15:00",
          "subject": "HEB",
          "title": "intermediate Hebrew"
       },
       {
          "capacity": 25,
          "code": "1105",
          "credits": 3,
          "department": "Hebrew",
          "display": {
             "dow": "T",
             "end": "01:00pm",
             "start": "12:20pm"
          },
          "dow": [
             2
          ],
          "end": "13:00",
          "id": "34015",
          "instructor": "Chaya Glaser",
          "location": "TBA",
          "section": "231",
          "start": "12:20",
          "subject": "HEB",
          "title": "intermediate Hebrew"
       },
       {
          "capacity": 20,
          "code": "1106",
          "credits": 3,
          "department": "Hebrew",
          "display": {
             "dow": "TR",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "16:15",
          "id": "34016",
          "instructor": "Chaya Glaser",
          "location": "TBA",
          "section": "331",
          "start": "15:00",
          "subject": "HEB",
          "title": "intermediate 2"
       },
       {
          "capacity": 20,
          "code": "1106",
          "credits": 3,
          "department": "Hebrew",
          "display": {
             "dow": "W",
             "end": "12:50pm",
             "start": "12:01pm"
          },
          "dow": [
             3
          ],
          "end": "12:50",
          "id": "34016",
          "instructor": "Chaya Glaser",
          "location": "TBA",
          "section": "331",
          "start": "12:01",
          "subject": "HEB",
          "title": "intermediate 2"
       },
       {
          "capacity": 25,
          "code": "1205",
          "credits": 3,
          "department": "Hebrew",
          "display": {
             "dow": "TR",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "17:45",
          "id": "36037",
          "instructor": "Sarah Kasher-Bendet",
          "location": "TBA",
          "section": "341",
          "start": "16:30",
          "subject": "HEB",
          "title": "Upper Intermediate Hebrew I"
       },
       {
          "capacity": 25,
          "code": "1206",
          "credits": 3,
          "department": "Hebrew",
          "display": {
             "dow": "MW",
             "end": "02:45pm",
             "start": "01:30pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "14:45",
          "id": "35662",
          "instructor": "Sigal Shalom",
          "location": "TBA",
          "section": "211",
          "start": "13:30",
          "subject": "HEB",
          "title": "Upper Intermediate Hebrew II"
       },
       {
          "capacity": 25,
          "code": "1206",
          "credits": 3,
          "department": "Hebrew",
          "display": {
             "dow": "MW",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "16:15",
          "id": "34053",
          "instructor": "Samuel Schneider",
          "location": "TBA",
          "section": "231",
          "start": "15:00",
          "subject": "HEB",
          "title": "Upper Intermediate Hebrew II - 34053 - HEB 1206 - 231"
       },
       {
          "capacity": 25,
          "code": "1206",
          "credits": 3,
          "department": "Hebrew",
          "display": {
             "dow": "MW",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "17:45",
          "id": "34017",
          "instructor": "Samuel Schneider",
          "location": "TBA",
          "section": "241",
          "start": "16:30",
          "subject": "HEB",
          "title": "Upper Intermediate Hebrew II - 34017 - HEB 1206 - 241"
       },
       {
          "capacity": 25,
          "code": "1206",
          "credits": 3,
          "department": "Hebrew",
          "display": {
             "dow": "MW",
             "end": "08:00pm",
             "start": "06:45pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "20:00",
          "id": "35663",
          "instructor": "Samuel Schneider",
          "location": "TBA",
          "section": "261",
          "start": "18:45",
          "subject": "HEB",
          "title": "Upper Intermediate Hebrew II - 35663 - HEB 1206 - 261"
       },
       {
          "capacity": 25,
          "code": "1206",
          "credits": 3,
          "department": "Hebrew",
          "display": {
             "dow": "TR",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "16:15",
          "id": "34054",
          "instructor": "Sigal Shalom",
          "location": "TBA",
          "section": "331",
          "start": "15:00",
          "subject": "HEB",
          "title": "Upper Intermediate Hebrew II"
       },
       {
          "capacity": 25,
          "code": "1306",
          "credits": 3,
          "department": "Hebrew",
          "display": {
             "dow": "MW",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "16:15",
          "id": "34055",
          "instructor": "Sarah Kasher-Bendet",
          "location": "TBA",
          "section": "231",
          "start": "15:00",
          "subject": "HEB",
          "title": "Advanced Hebrew II - 34055 - HEB 1306 - 231"
       },
       {
          "capacity": 25,
          "code": "1306",
          "credits": 3,
          "department": "Hebrew",
          "display": {
             "dow": "TR",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "16:15",
          "id": "34034",
          "instructor": "Sarah Kasher-Bendet",
          "location": "TBA",
          "section": "331",
          "start": "15:00",
          "subject": "HEB",
          "title": "Advanced Hebrew II - 34034 - HEB 1306 - 331"
       },
       {
          "capacity": 18,
          "code": "1306H",
          "credits": 3,
          "department": "Hebrew",
          "display": {
             "dow": "MW",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "17:45",
          "id": "35664",
          "instructor": "Sarah Kasher-Bendet",
          "location": "TBA",
          "section": "241",
          "start": "16:30",
          "subject": "HEB",
          "title": "Advanced Hebrew II - 35664 - HEB 1306H - 241"
       },
       {
          "capacity": 32,
          "code": "1105",
          "credits": 3,
          "department": "History",
          "display": {
             "dow": "MW",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "16:15",
          "id": "35602",
          "instructor": "Shalom E. Holtz",
          "location": "TBA",
          "section": "231",
          "start": "15:00",
          "subject": "HIS",
          "title": "His. of the Ancient Near East"
       },
       {
          "capacity": 15,
          "code": "2127H",
          "credits": 3,
          "department": "History",
          "display": {
             "dow": "F",
             "end": "12:30pm",
             "start": "10:00am"
          },
          "dow": [
             5
          ],
          "end": "12:30",
          "id": "35666",
          "instructor": "Jeffrey Freedman",
          "location": "TBA",
          "section": "621",
          "start": "10:00",
          "subject": "HIS",
          "title": "European Enlightenment"
       },
       {
          "capacity": 5,
          "code": "2128",
          "credits": 3,
          "department": "History",
          "display": {
             "dow": "TR",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "16:15",
          "id": "34137",
          "instructor": "Jeffrey Freedman",
          "location": "TBA",
          "section": "331",
          "start": "15:00",
          "subject": "HIS",
          "title": "Origins of Democratic Political Culture"
       },
       {
          "capacity": 32,
          "code": "2520",
          "credits": 3,
          "department": "History",
          "display": {
             "dow": "TR",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "17:45",
          "id": "35604",
          "instructor": "Douglas Burgess",
          "location": "TBA",
          "section": "341",
          "start": "16:30",
          "subject": "HIS",
          "title": "Atlantic World"
       },
       {
          "capacity": 32,
          "code": "2604",
          "credits": 3,
          "department": "History",
          "display": {
             "dow": "TR",
             "end": "08:00pm",
             "start": "06:45pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "20:00",
          "id": "35605",
          "instructor": "Douglas Burgess",
          "location": "TBA",
          "section": "361",
          "start": "18:45",
          "subject": "HIS",
          "title": "Piracy & the Nation State"
       },
       {
          "capacity": 100,
          "code": "4977H",
          "credits": 1,
          "department": "Honors",
          "display": {
             "dow": "",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "33984",
          "instructor": "Gabriel Cwilich",
          "location": "TBA",
          "section": "HON",
          "start": "",
          "subject": "HON",
          "title": "Honors Thesis Proposal"
       },
       {
          "capacity": 100,
          "code": "4978H",
          "credits": 0.5,
          "department": "Honors",
          "display": {
             "dow": "",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "33929",
          "instructor": "TBA",
          "location": "TBA",
          "section": "TBA",
          "start": "",
          "subject": "HON",
          "title": "Honors Thesis Seminar I"
       },
       {
          "capacity": 100,
          "code": "4979H",
          "credits": 0.5,
          "department": "Honors",
          "display": {
             "dow": "",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "33930",
          "instructor": "TBA",
          "location": "TBA",
          "section": "TBA",
          "start": "",
          "subject": "HON",
          "title": "Honors Thesis Seminar II"
       },
       {
          "capacity": 100,
          "code": "4980H",
          "credits": 0,
          "department": "Honors",
          "display": {
             "dow": "",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "33917",
          "instructor": "Gabriel Cwilich",
          "location": "TBA",
          "section": "TBA",
          "start": "",
          "subject": "HON",
          "title": "Honors Thesis: Preparation"
       },
       {
          "capacity": 100,
          "code": "4981H",
          "credits": 0,
          "department": "Honors",
          "display": {
             "dow": "",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "33918",
          "instructor": "Gabriel Cwilich",
          "location": "TBA",
          "section": "TBA",
          "start": "",
          "subject": "HON",
          "title": "Honors Thesis: Writing"
       },
       {
          "capacity": 40,
          "code": "1006",
          "credits": 3,
          "department": "Human Behavior Soc Institution",
          "display": {
             "dow": "TR",
             "end": "08:00pm",
             "start": "06:45pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "20:00",
          "id": "34050",
          "instructor": "Elias C. Grivoyannis",
          "location": "TBA",
          "section": "361",
          "start": "18:45",
          "subject": "HBSI",
          "title": "Economics Efficiency & Justice"
       },
       {
          "capacity": 35,
          "code": "1007",
          "credits": 3,
          "department": "Human Behavior Soc Institution",
          "display": {
             "dow": "TR",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "17:45",
          "id": "33967",
          "instructor": "Ariel Malka",
          "location": "TBA",
          "section": "341",
          "start": "16:30",
          "subject": "HBSI",
          "title": "Psychology and Public Opinion"
       },
       {
          "capacity": 10,
          "code": "1007H",
          "credits": 3,
          "department": "Human Behavior Soc Institution",
          "display": {
             "dow": "TR",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "16:15",
          "id": "35583",
          "instructor": "Ariel Malka",
          "location": "TBA",
          "section": "331",
          "start": "15:00",
          "subject": "HBSI",
          "title": "Psychology and Public Opinion"
       },
       {
          "capacity": 35,
          "code": "1012",
          "credits": 3,
          "department": "Human Behavior Soc Institution",
          "display": {
             "dow": "F",
             "end": "12:30pm",
             "start": "10:00am"
          },
          "dow": [
             5
          ],
          "end": "12:30",
          "id": "35585",
          "instructor": "Akiva J. Covitz",
          "location": "TBA",
          "section": "621",
          "start": "10:00",
          "subject": "HBSI",
          "title": "Courts and Social Change"
       },
       {
          "capacity": 30,
          "code": "1014",
          "credits": 3,
          "department": "Human Behavior Soc Institution",
          "display": {
             "dow": "MW",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "16:15",
          "id": "35659",
          "instructor": "Jamie Aroosi",
          "location": "TBA",
          "section": "231",
          "start": "15:00",
          "subject": "HBSI",
          "title": "American Public Policy"
       },
       {
          "capacity": 15,
          "code": "1016H",
          "credits": 3,
          "department": "Human Behavior Soc Institution",
          "display": {
             "dow": "M",
             "end": "09:15pm",
             "start": "06:45pm"
          },
          "dow": [
             1
          ],
          "end": "21:15",
          "id": "35660",
          "instructor": "Amy Stuart",
          "location": "TBA",
          "section": "261",
          "start": "18:45",
          "subject": "HBSI",
          "title": "Sociology of Race and Racism"
       },
       {
          "capacity": 50,
          "code": "1001",
          "credits": 3,
          "department": "Information & Decision Science",
          "display": {
             "dow": "TR",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "16:15",
          "id": "33839",
          "instructor": "Avi Naiman",
          "location": "TBA",
          "section": "331",
          "start": "15:00",
          "subject": "IDS",
          "title": "Business Algebra"
       },
       {
          "capacity": 50,
          "code": "1001",
          "credits": 3,
          "department": "Information & Decision Science",
          "display": {
             "dow": "TR",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "17:45",
          "id": "33840",
          "instructor": "Avi Naiman",
          "location": "TBA",
          "section": "341",
          "start": "16:30",
          "subject": "IDS",
          "title": "Business Algebra"
       },
       {
          "capacity": 30,
          "code": "1020",
          "credits": 3,
          "department": "Information & Decision Science",
          "display": {
             "dow": "MW",
             "end": "02:45pm",
             "start": "01:30pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "14:45",
          "id": "33807",
          "instructor": "Shu Han",
          "location": "TBA",
          "section": "211",
          "start": "13:30",
          "subject": "IDS",
          "title": "Intro to Information Systems"
       },
       {
          "capacity": 30,
          "code": "1020",
          "credits": 3,
          "department": "Information & Decision Science",
          "display": {
             "dow": "MW",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "16:15",
          "id": "33828",
          "instructor": "Shu Han",
          "location": "TBA",
          "section": "231",
          "start": "15:00",
          "subject": "IDS",
          "title": "Intro to Information Systems"
       },
       {
          "capacity": 30,
          "code": "1020",
          "credits": 3,
          "department": "Information & Decision Science",
          "display": {
             "dow": "MW",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "17:45",
          "id": "33809",
          "instructor": "Shu Han",
          "location": "TBA",
          "section": "241",
          "start": "16:30",
          "subject": "IDS",
          "title": "Intro to Information Systems"
       },
       {
          "capacity": 30,
          "code": "1020",
          "credits": 3,
          "department": "Information & Decision Science",
          "display": {
             "dow": "TR",
             "end": "08:00pm",
             "start": "06:45pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "20:00",
          "id": "35679",
          "instructor": "Kevin Brabazon",
          "location": "TBA",
          "section": "361",
          "start": "18:45",
          "subject": "IDS",
          "title": "Intro to Information Systems"
       },
       {
          "capacity": 35,
          "code": "1131",
          "credits": 3,
          "department": "Information & Decision Science",
          "display": {
             "dow": "MW",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "16:15",
          "id": "35680",
          "instructor": "Vladimir Kovtun",
          "location": "TBA",
          "section": "231",
          "start": "15:00",
          "subject": "IDS",
          "title": "Statistics for Business"
       },
       {
          "capacity": 40,
          "code": "1131",
          "credits": 3,
          "department": "Information & Decision Science",
          "display": {
             "dow": "TR",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "16:15",
          "id": "33808",
          "instructor": "Avi H. Giloni",
          "location": "TBA",
          "section": "331",
          "start": "15:00",
          "subject": "IDS",
          "title": "Statistics for Business"
       },
       {
          "capacity": 35,
          "code": "1131",
          "credits": 3,
          "department": "Information & Decision Science",
          "display": {
             "dow": "TR",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "17:45",
          "id": "33833",
          "instructor": "Avi H. Giloni",
          "location": "TBA",
          "section": "341",
          "start": "16:30",
          "subject": "IDS",
          "title": "Statistics for Business"
       },
       {
          "capacity": 40,
          "code": "1456",
          "credits": 3,
          "department": "Information & Decision Science",
          "display": {
             "dow": "MW",
             "end": "02:45pm",
             "start": "01:30pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "14:45",
          "id": "33826",
          "instructor": "Yasar Levent Kocaga",
          "location": "TBA",
          "section": "211",
          "start": "13:30",
          "subject": "IDS",
          "title": "Quantitative Methods Managment"
       },
       {
          "capacity": 40,
          "code": "1456",
          "credits": 3,
          "department": "Information & Decision Science",
          "display": {
             "dow": "MW",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "17:45",
          "id": "33810",
          "instructor": "Yasar Levent Kocaga",
          "location": "TBA",
          "section": "241",
          "start": "16:30",
          "subject": "IDS",
          "title": "Quantitative Methods Managment"
       },
       {
          "capacity": 30,
          "code": "2030",
          "credits": 3,
          "department": "Information & Decision Science",
          "display": {
             "dow": "MW",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "16:15",
          "id": "33837",
          "instructor": "Yitzchak S. Rosenthal",
          "location": "TBA",
          "section": "231",
          "start": "15:00",
          "subject": "IDS",
          "title": "Bus. Analytics & Programming"
       },
       {
          "capacity": 20,
          "code": "2160",
          "credits": 3,
          "department": "Information & Decision Science",
          "display": {
             "dow": "T",
             "end": "09:15pm",
             "start": "06:45pm"
          },
          "dow": [
             2
          ],
          "end": "21:15",
          "id": "33849",
          "instructor": "Sriram Subramanian",
          "location": "TBA",
          "section": "361",
          "start": "18:45",
          "subject": "IDS",
          "title": "Decision Models"
       },
       {
          "capacity": 20,
          "code": "2460",
          "credits": 3,
          "department": "Information & Decision Science",
          "display": {
             "dow": "MW",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "17:45",
          "id": "35689",
          "instructor": "Yitzchak S. Rosenthal",
          "location": "TBA",
          "section": "241",
          "start": "16:30",
          "subject": "IDS",
          "title": "Data Management-Bus Analytics"
       },
       {
          "capacity": 28,
          "code": "1003",
          "credits": 3,
          "department": "Interpreting the Creative",
          "display": {
             "dow": "TR",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "16:15",
          "id": "35606",
          "instructor": "William Lamborn Lee",
          "location": "TBA",
          "section": "331",
          "start": "15:00",
          "subject": "INTC",
          "title": "Shakespeare and the Arts"
       },
       {
          "capacity": 28,
          "code": "1007",
          "credits": 3,
          "department": "Interpreting the Creative",
          "display": {
             "dow": "MW",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "16:15",
          "id": "35608",
          "instructor": "Richard Leonard Nochimson",
          "location": "TBA",
          "section": "231",
          "start": "15:00",
          "subject": "INTC",
          "title": "Fiction & Artistic Imagination"
       },
       {
          "capacity": 28,
          "code": "1016",
          "credits": 3,
          "department": "Interpreting the Creative",
          "display": {
             "dow": "TR",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "16:15",
          "id": "33994",
          "instructor": "Jess J. Olson",
          "location": "TBA",
          "section": "331",
          "start": "15:00",
          "subject": "INTC",
          "title": "Culture of the Fin de Siecle"
       },
       {
          "capacity": 28,
          "code": "1018",
          "credits": 3,
          "department": "Interpreting the Creative",
          "display": {
             "dow": "MW",
             "end": "08:00pm",
             "start": "06:45pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "20:00",
          "id": "34131",
          "instructor": "Daniel Beliavsky",
          "location": "TBA",
          "section": "261",
          "start": "18:45",
          "subject": "INTC",
          "title": "Aesthetic Revolutions"
       },
       {
          "capacity": 28,
          "code": "1022",
          "credits": 3,
          "department": "Interpreting the Creative",
          "display": {
             "dow": "F",
             "end": "12:30pm",
             "start": "10:00am"
          },
          "dow": [
             5
          ],
          "end": "12:30",
          "id": "35607",
          "instructor": "Ronnie Perelis",
          "location": "TBA",
          "section": "621",
          "start": "10:00",
          "subject": "INTC",
          "title": "Travel Narratives"
       },
       {
          "capacity": 12,
          "code": "1023H",
          "credits": 3,
          "department": "Interpreting the Creative",
          "display": {
             "dow": "F",
             "end": "12:30pm",
             "start": "10:00am"
          },
          "dow": [
             5
          ],
          "end": "12:30",
          "id": "35688",
          "instructor": "Jacob Wisse, Meir Yakov Soloveichik ",
          "location": "TBA",
          "section": "621",
          "start": "10:00",
          "subject": "INTC",
          "title": "Rembrandt and the Jews"
       },
       {
          "capacity": 0,
          "code": "5000",
          "credits": 3,
          "department": "Jewish Education",
          "display": {
             "dow": "TBA",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "37297",
          "instructor": "TBA",
          "location": "TBA",
          "section": "AP",
          "start": "",
          "subject": "JED",
          "title": "Learning & Cognition"
       },
       {
          "capacity": 0,
          "code": "5010",
          "credits": 3,
          "department": "Jewish Education",
          "display": {
             "dow": "TBA",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "37281",
          "instructor": "TBA",
          "location": "TBA",
          "section": "A",
          "start": "",
          "subject": "JED",
          "title": "Ed Psych & Jewish Lrng"
       },
       {
          "capacity": 0,
          "code": "5070",
          "credits": 3,
          "department": "Jewish Education",
          "display": {
             "dow": "TBA",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "37299",
          "instructor": "TBA",
          "location": "TBA",
          "section": "AP",
          "start": "",
          "subject": "JED",
          "title": "Promot Jew Values & Spiritual"
       },
       {
          "capacity": 0,
          "code": "5070",
          "credits": 3,
          "department": "Jewish Education",
          "display": {
             "dow": "TBA",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "37320",
          "instructor": "TBA",
          "location": "TBA",
          "section": "NM",
          "start": "",
          "subject": "JED",
          "title": "Promot Jew Values & Spiritual"
       },
       {
          "capacity": 0,
          "code": "5100",
          "credits": 3,
          "department": "Jewish Education",
          "display": {
             "dow": "TBA",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "37279",
          "instructor": "TBA",
          "location": "TBA",
          "section": "A",
          "start": "",
          "subject": "JED",
          "title": "Foundations of Jewish Edu"
       },
       {
          "capacity": 0,
          "code": "5100",
          "credits": 3,
          "department": "Jewish Education",
          "display": {
             "dow": "TBA",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "37296",
          "instructor": "TBA",
          "location": "TBA",
          "section": "AP",
          "start": "",
          "subject": "JED",
          "title": "Foundations of Jewish Edu"
       },
       {
          "capacity": 0,
          "code": "5303",
          "credits": 3,
          "department": "Jewish Education",
          "display": {
             "dow": "TBA",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "37318",
          "instructor": "TBA",
          "location": "TBA",
          "section": "DIR",
          "start": "",
          "subject": "JED",
          "title": "Teaching Jewish Studies I"
       },
       {
          "capacity": 30,
          "code": "5816",
          "credits": 3,
          "department": "Jewish Education",
          "display": {
             "dow": "",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "37303",
          "instructor": "Chaim Feuerman",
          "location": "TBA",
          "section": "AD",
          "start": "",
          "subject": "JED",
          "title": "Sem in Contemporary Jewish Ed"
       },
       {
          "capacity": 45,
          "code": "1200",
          "credits": 3,
          "department": "Jewish History",
          "display": {
             "dow": "TR",
             "end": "08:00pm",
             "start": "06:45pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "20:00",
          "id": "33986",
          "instructor": "Steven Fine",
          "location": "TBA",
          "section": "361",
          "start": "18:45",
          "subject": "JHI",
          "title": "Classical Jewish History"
       },
       {
          "capacity": 30,
          "code": "1200",
          "credits": 3,
          "department": "Jewish History",
          "display": {
             "dow": "TR",
             "end": "12:15pm",
             "start": "11:00am"
          },
          "dow": [
             2,
             4
          ],
          "end": "12:15",
          "id": "35730",
          "instructor": "Joseph L. Angel",
          "location": "FURST F212",
          "section": "IB6",
          "start": "11:00",
          "subject": "JHI",
          "title": "Classical Jewish History"
       },
       {
          "capacity": 35,
          "code": "1300",
          "credits": 3,
          "department": "Jewish History",
          "display": {
             "dow": "MW",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "16:15",
          "id": "33987",
          "instructor": "Chaviva Levin",
          "location": "TBA",
          "section": "231",
          "start": "15:00",
          "subject": "JHI",
          "title": "Medieval Jewish History"
       },
       {
          "capacity": 18,
          "code": "1300H",
          "credits": 3,
          "department": "Jewish History",
          "display": {
             "dow": "MW",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "17:45",
          "id": "35611",
          "instructor": "Chaviva Levin",
          "location": "TBA",
          "section": "241",
          "start": "16:30",
          "subject": "JHI",
          "title": "Medieval Jewish History"
       },
       {
          "capacity": 25,
          "code": "1320",
          "credits": 3,
          "department": "Jewish History",
          "display": {
             "dow": "MW",
             "end": "12:15pm",
             "start": "11:00am"
          },
          "dow": [
             1,
             3
          ],
          "end": "12:15",
          "id": "35836",
          "instructor": "Daniel Tsadik",
          "location": "FURST F212",
          "section": "IB3",
          "start": "11:00",
          "subject": "JHI",
          "title": "Jews and Medieval Islam"
       },
       {
          "capacity": 35,
          "code": "1400",
          "credits": 3,
          "department": "Jewish History",
          "display": {
             "dow": "MW",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "16:15",
          "id": "34006",
          "instructor": "Joshua Karlip",
          "location": "TBA",
          "section": "231",
          "start": "15:00",
          "subject": "JHI",
          "title": "Modern Jewish History"
       },
       {
          "capacity": 40,
          "code": "1400",
          "credits": 3,
          "department": "Jewish History",
          "display": {
             "dow": "TR",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "17:45",
          "id": "35668",
          "instructor": "Jess J. Olson",
          "location": "TBA",
          "section": "341",
          "start": "16:30",
          "subject": "JHI",
          "title": "Modern Jewish History"
       },
       {
          "capacity": 25,
          "code": "1410",
          "credits": 3,
          "department": "Jewish History",
          "display": {
             "dow": "MW",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "16:15",
          "id": "36386",
          "instructor": "Shalom Carmy",
          "location": "TBA",
          "section": "231",
          "start": "15:00",
          "subject": "JHI",
          "title": "Early Modern Intellectual JHI"
       },
       {
          "capacity": 18,
          "code": "2210H",
          "credits": 3,
          "department": "Jewish History",
          "display": {
             "dow": "TR",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "16:15",
          "id": "35695",
          "instructor": "Moshe J. Bernstein",
          "location": "TBA",
          "section": "331",
          "start": "15:00",
          "subject": "JHI",
          "title": "Classical Intellectual JHI"
       },
       {
          "capacity": 25,
          "code": "5213",
          "credits": 3,
          "department": "Jewish History",
          "display": {
             "dow": "T",
             "end": "04:30pm",
             "start": "02:50pm"
          },
          "dow": [
             2
          ],
          "end": "16:30",
          "id": "36139",
          "instructor": "Joseph L. Angel",
          "location": "FURST ",
          "section": "A",
          "start": "14:50",
          "subject": "JHI",
          "title": "Second Temple Jew Literature"
       },
       {
          "capacity": 30,
          "code": "5321",
          "credits": 3,
          "department": "Jewish History",
          "display": {
             "dow": "W",
             "end": "04:30pm",
             "start": "02:50pm"
          },
          "dow": [
             3
          ],
          "end": "16:30",
          "id": "35748",
          "instructor": "David Berger",
          "location": "FURST ",
          "section": "A",
          "start": "14:50",
          "subject": "JHI",
          "title": "Mediev Jew His: Christian Eur"
       },
       {
          "capacity": 30,
          "code": "5337",
          "credits": 3,
          "department": "Jewish History",
          "display": {
             "dow": "W",
             "end": "04:30pm",
             "start": "02:50pm"
          },
          "dow": [
             3
          ],
          "end": "16:30",
          "id": "35819",
          "instructor": "Daniel Tsadik",
          "location": "FURST ",
          "section": "A",
          "start": "14:50",
          "subject": "JHI",
          "title": "Jews in Muslim Lands III"
       },
       {
          "capacity": 30,
          "code": "5410",
          "credits": 3,
          "department": "Jewish History",
          "display": {
             "dow": "M",
             "end": "06:30pm",
             "start": "04:50pm"
          },
          "dow": [
             1
          ],
          "end": "18:30",
          "id": "35825",
          "instructor": "Elisheva Carlebach",
          "location": "FURST ",
          "section": "A",
          "start": "16:50",
          "subject": "JHI",
          "title": "J Mod Eur 1760-1900"
       },
       {
          "capacity": 30,
          "code": "5440",
          "credits": 3,
          "department": "Jewish History",
          "display": {
             "dow": "W",
             "end": "06:30pm",
             "start": "04:50pm"
          },
          "dow": [
             3
          ],
          "end": "18:30",
          "id": "35750",
          "instructor": "Joshua Karlip",
          "location": "FURST ",
          "section": "B",
          "start": "16:50",
          "subject": "JHI",
          "title": "E Eur Jwry 1750-1914"
       },
       {
          "capacity": 30,
          "code": "5571",
          "credits": 3,
          "department": "Jewish History",
          "display": {
             "dow": "R",
             "end": "06:30pm",
             "start": "04:50pm"
          },
          "dow": [
             4
          ],
          "end": "18:30",
          "id": "35751",
          "instructor": "Jeffrey S. Gurock",
          "location": "FURST ",
          "section": "A",
          "start": "16:50",
          "subject": "JHI",
          "title": "Jews US 1654-1880"
       },
       {
          "capacity": 30,
          "code": "6285",
          "credits": 3,
          "department": "Jewish History",
          "display": {
             "dow": "R",
             "end": "04:30pm",
             "start": "02:50pm"
          },
          "dow": [
             4
          ],
          "end": "16:30",
          "id": "35826",
          "instructor": "Steven Fine",
          "location": "FURST ",
          "section": "A",
          "start": "14:50",
          "subject": "JHI",
          "title": "Synagogue in Greco-Roman World"
       },
       {
          "capacity": 30,
          "code": "6377",
          "credits": 3,
          "department": "Jewish History",
          "display": {
             "dow": "M",
             "end": "04:30pm",
             "start": "02:50pm"
          },
          "dow": [
             1
          ],
          "end": "16:30",
          "id": "35827",
          "instructor": "Daniel Tsadik",
          "location": "FURST ",
          "section": "A",
          "start": "14:50",
          "subject": "JHI",
          "title": "Muslim-Jewish Polemics"
       },
       {
          "capacity": 30,
          "code": "6388",
          "credits": 3,
          "department": "Jewish History",
          "display": {
             "dow": "R",
             "end": "08:30pm",
             "start": "06:50pm"
          },
          "dow": [
             4
          ],
          "end": "20:30",
          "id": "35828",
          "instructor": "Ronnie Perelis",
          "location": "FURST ",
          "section": "A",
          "start": "18:50",
          "subject": "JHI",
          "title": "Seph Reactions to Persecution"
       },
       {
          "capacity": 30,
          "code": "6410",
          "credits": 3,
          "department": "Jewish History",
          "display": {
             "dow": "W",
             "end": "06:30pm",
             "start": "04:50pm"
          },
          "dow": [
             3
          ],
          "end": "18:30",
          "id": "35830",
          "instructor": "Sid Z. Leiman",
          "location": "FURST ",
          "section": "A",
          "start": "16:50",
          "subject": "JHI",
          "title": "Emden-Eibeschuetz Controversy"
       },
       {
          "capacity": 30,
          "code": "6484",
          "credits": 3,
          "department": "Jewish History",
          "display": {
             "dow": "M",
             "end": "04:30pm",
             "start": "02:50pm"
          },
          "dow": [
             1
          ],
          "end": "16:30",
          "id": "35831",
          "instructor": "Joshua D. Zimmerman",
          "location": "FURST ",
          "section": "A",
          "start": "14:50",
          "subject": "JHI",
          "title": "Destruct of Eur Jewry-1933-45"
       },
       {
          "capacity": 30,
          "code": "6541",
          "credits": 3,
          "department": "Jewish History",
          "display": {
             "dow": "T",
             "end": "08:30pm",
             "start": "06:50pm"
          },
          "dow": [
             2
          ],
          "end": "20:30",
          "id": "35832",
          "instructor": "Jess J. Olson",
          "location": "FURST ",
          "section": "A",
          "start": "18:50",
          "subject": "JHI",
          "title": "Austro-Hung Jewry 1772-1916"
       },
       {
          "capacity": 30,
          "code": "6828",
          "credits": 3,
          "department": "Jewish History",
          "display": {
             "dow": "R",
             "end": "06:30pm",
             "start": "04:50pm"
          },
          "dow": [
             4
          ],
          "end": "18:30",
          "id": "35833",
          "instructor": "Ephraim Kanarfogel",
          "location": "FURST ",
          "section": "A",
          "start": "16:50",
          "subject": "JHI",
          "title": "Hist Ashkenaz Piyyut"
       },
       {
          "capacity": 0,
          "code": "9901",
          "credits": 3,
          "department": "Jewish History",
          "display": {
             "dow": "TBA",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "35756",
          "instructor": "TBA",
          "location": "TBA",
          "section": "A",
          "start": "",
          "subject": "JHI",
          "title": "Guided Readings"
       },
       {
          "capacity": 0,
          "code": "9971",
          "credits": 0,
          "department": "Jewish History",
          "display": {
             "dow": "TBA",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "35758",
          "instructor": "TBA",
          "location": "TBA",
          "section": "A",
          "start": "",
          "subject": "JHI",
          "title": "Masters Research II"
       },
       {
          "capacity": 0,
          "code": "9980",
          "credits": 3,
          "department": "Jewish History",
          "display": {
             "dow": "TBA",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "35759",
          "instructor": "TBA",
          "location": "TBA",
          "section": "A",
          "start": "",
          "subject": "JHI",
          "title": "Doctoral Planning"
       },
       {
          "capacity": 8,
          "code": "4011",
          "credits": 1,
          "department": "Jewish Music",
          "display": {
             "dow": "W",
             "end": "06:43pm",
             "start": "05:48pm"
          },
          "dow": [
             3
          ],
          "end": "18:43",
          "id": "36431",
          "instructor": "D Lauer",
          "location": "TBA",
          "section": "451",
          "start": "17:48",
          "subject": "JMU",
          "title": "Voice Culture I"
       },
       {
          "capacity": 8,
          "code": "4012",
          "credits": 1,
          "department": "Jewish Music",
          "display": {
             "dow": "W",
             "end": "07:45pm",
             "start": "06:50pm"
          },
          "dow": [
             3
          ],
          "end": "19:45",
          "id": "36429",
          "instructor": "D Lauer",
          "location": "TBA",
          "section": "461",
          "start": "18:50",
          "subject": "JMU",
          "title": "Voice Culture II"
       },
       {
          "capacity": 8,
          "code": "4042",
          "credits": 1,
          "department": "Jewish Music",
          "display": {
             "dow": "W",
             "end": "06:43pm",
             "start": "05:48pm"
          },
          "dow": [
             3
          ],
          "end": "18:43",
          "id": "36446",
          "instructor": "Eric S. Freeman",
          "location": "TBA",
          "section": "451",
          "start": "17:48",
          "subject": "JMU",
          "title": "Keyboard Work II"
       },
       {
          "capacity": 20,
          "code": "4111",
          "credits": 1,
          "department": "Jewish Music",
          "display": {
             "dow": "T",
             "end": "06:43pm",
             "start": "05:48pm"
          },
          "dow": [
             2
          ],
          "end": "18:43",
          "id": "36447",
          "instructor": "Sherwood Goffin",
          "location": "TBA",
          "section": "351",
          "start": "17:48",
          "subject": "JMU",
          "title": "Cantillation I"
       },
       {
          "capacity": 20,
          "code": "4311",
          "credits": 1,
          "department": "Jewish Music",
          "display": {
             "dow": "W",
             "end": "06:43pm",
             "start": "05:48pm"
          },
          "dow": [
             3
          ],
          "end": "18:43",
          "id": "36430",
          "instructor": "Joseph Malovany",
          "location": "TBA",
          "section": "451",
          "start": "17:48",
          "subject": "JMU",
          "title": "Friday Evening Service"
       },
       {
          "capacity": 20,
          "code": "4342",
          "credits": 1,
          "department": "Jewish Music",
          "display": {
             "dow": "T",
             "end": "07:45pm",
             "start": "06:50pm"
          },
          "dow": [
             2
          ],
          "end": "19:45",
          "id": "36432",
          "instructor": "Sherwood Goffin",
          "location": "TBA",
          "section": "361",
          "start": "18:50",
          "subject": "JMU",
          "title": "Sabbath II"
       },
       {
          "capacity": 20,
          "code": "4411",
          "credits": 1,
          "department": "Jewish Music",
          "display": {
             "dow": "T",
             "end": "07:45pm",
             "start": "06:50pm"
          },
          "dow": [
             2
          ],
          "end": "19:45",
          "id": "36441",
          "instructor": "Eric S. Freeman",
          "location": "TBA",
          "section": "361",
          "start": "18:50",
          "subject": "JMU",
          "title": "Ma'ariv 3 Reg/Yamim Noraim"
       },
       {
          "capacity": 20,
          "code": "4631",
          "credits": 1,
          "department": "Jewish Music",
          "display": {
             "dow": "W",
             "end": "07:45pm",
             "start": "06:50pm"
          },
          "dow": [
             3
          ],
          "end": "19:45",
          "id": "36442",
          "instructor": "Joseph Malovany",
          "location": "TBA",
          "section": "461",
          "start": "18:50",
          "subject": "JMU",
          "title": "Special Occasions"
       },
       {
          "capacity": 20,
          "code": "4671",
          "credits": 1,
          "department": "Jewish Music",
          "display": {
             "dow": "T",
             "end": "05:40pm",
             "start": "04:45pm"
          },
          "dow": [
             2
          ],
          "end": "17:40",
          "id": "36443",
          "instructor": "Moshe M. Tessone",
          "location": "TBA",
          "section": "341",
          "start": "16:45",
          "subject": "JMU",
          "title": "Sephardic Liturgical Music I"
       },
       {
          "capacity": 20,
          "code": "4672",
          "credits": 1,
          "department": "Jewish Music",
          "display": {
             "dow": "T",
             "end": "06:43pm",
             "start": "05:48pm"
          },
          "dow": [
             2
          ],
          "end": "18:43",
          "id": "36444",
          "instructor": "Moshe M. Tessone",
          "location": "TBA",
          "section": "351",
          "start": "17:48",
          "subject": "JMU",
          "title": "Sephardic Liturgical Music II"
       },
       {
          "capacity": 20,
          "code": "4711",
          "credits": 1,
          "department": "Jewish Music",
          "display": {
             "dow": "W",
             "end": "07:45pm",
             "start": "06:50pm"
          },
          "dow": [
             3
          ],
          "end": "19:45",
          "id": "36433",
          "instructor": "Shmuel Schneid",
          "location": "TBA",
          "section": "461",
          "start": "18:50",
          "subject": "JMU",
          "title": "Hebrew Calligraphy I"
       },
       {
          "capacity": 20,
          "code": "4714",
          "credits": 1,
          "department": "Jewish Music",
          "display": {
             "dow": "W",
             "end": "06:43pm",
             "start": "05:48pm"
          },
          "dow": [
             3
          ],
          "end": "18:43",
          "id": "36445",
          "instructor": "Shmuel Schneid",
          "location": "TBA",
          "section": "451",
          "start": "17:48",
          "subject": "JMU",
          "title": "Hebrew Calligraphy IV"
       },
       {
          "capacity": 25,
          "code": "1360H",
          "credits": 2.5,
          "department": "Jewish Philosophy",
          "display": {
             "dow": "MW",
             "end": "12:55pm",
             "start": "12:00pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "12:55",
          "id": "35848",
          "instructor": "David Horwitz",
          "location": "FURST F316",
          "section": "IB8",
          "start": "12:00",
          "subject": "JPH",
          "title": "Maimonides"
       },
       {
          "capacity": 35,
          "code": "1380",
          "credits": 3,
          "department": "Jewish Philosophy",
          "display": {
             "dow": "TR",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "17:45",
          "id": "35610",
          "instructor": "Jonathan V. Dauber",
          "location": "TBA",
          "section": "341",
          "start": "16:30",
          "subject": "JPH",
          "title": "Early Kabbalah"
       },
       {
          "capacity": 30,
          "code": "5011",
          "credits": 3,
          "department": "Jewish Philosophy",
          "display": {
             "dow": "M",
             "end": "08:30pm",
             "start": "06:50pm"
          },
          "dow": [
             1
          ],
          "end": "20:30",
          "id": "35763",
          "instructor": "Arthur Hyman",
          "location": "FURST ",
          "section": "A",
          "start": "18:50",
          "subject": "JPH",
          "title": "Medieval Jewish Philosophy"
       },
       {
          "capacity": 30,
          "code": "5350",
          "credits": 3,
          "department": "Jewish Philosophy",
          "display": {
             "dow": "R",
             "end": "04:30pm",
             "start": "02:50pm"
          },
          "dow": [
             4
          ],
          "end": "16:30",
          "id": "35765",
          "instructor": "Jonathan V. Dauber",
          "location": "FURST ",
          "section": "A",
          "start": "14:50",
          "subject": "JPH",
          "title": "Introduction to Kabbalah"
       },
       {
          "capacity": 30,
          "code": "6190",
          "credits": 3,
          "department": "Jewish Philosophy",
          "display": {
             "dow": "W",
             "end": "08:30pm",
             "start": "06:50pm"
          },
          "dow": [
             3
          ],
          "end": "20:30",
          "id": "35834",
          "instructor": "Arthur Hyman",
          "location": "FURST ",
          "section": "A",
          "start": "18:50",
          "subject": "JPH",
          "title": "Jewish Eschatology"
       },
       {
          "capacity": 30,
          "code": "6735",
          "credits": 3,
          "department": "Jewish Philosophy",
          "display": {
             "dow": "T",
             "end": "04:30pm",
             "start": "02:50pm"
          },
          "dow": [
             2
          ],
          "end": "16:30",
          "id": "35835",
          "instructor": "Jonathan V. Dauber",
          "location": "FURST ",
          "section": "A",
          "start": "14:50",
          "subject": "JPH",
          "title": "Kabbalistic Views of Maimonides"
       },
       {
          "capacity": 30,
          "code": "6862",
          "credits": 3,
          "department": "Jewish Philosophy",
          "display": {
             "dow": "M",
             "end": "06:30pm",
             "start": "04:50pm"
          },
          "dow": [
             1
          ],
          "end": "18:30",
          "id": "35837",
          "instructor": "Daniel Rynhold",
          "location": "FURST ",
          "section": "A",
          "start": "16:50",
          "subject": "JPH",
          "title": "Nietzsche & Mod Jew Philosophy"
       },
       {
          "capacity": 30,
          "code": "6874",
          "credits": 3,
          "department": "Jewish Philosophy",
          "display": {
             "dow": "T",
             "end": "08:30pm",
             "start": "06:50pm"
          },
          "dow": [
             2
          ],
          "end": "20:30",
          "id": "35838",
          "instructor": "Daniel Rynhold",
          "location": "FURST ",
          "section": "A",
          "start": "18:50",
          "subject": "JPH",
          "title": "Phil of Emanuel Levinas"
       },
       {
          "capacity": 0,
          "code": "9901",
          "credits": 3,
          "department": "Jewish Philosophy",
          "display": {
             "dow": "TBA",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "35769",
          "instructor": "TBA",
          "location": "TBA",
          "section": "A",
          "start": "",
          "subject": "JPH",
          "title": "Guided Readings"
       },
       {
          "capacity": 56,
          "code": "1001",
          "credits": 2,
          "department": "Jewish Values in Contemp Wrld",
          "display": {
             "dow": "M",
             "end": "08:00pm",
             "start": "06:45pm"
          },
          "dow": [
             1
          ],
          "end": "20:00",
          "id": "33862",
          "instructor": "Jacob J. Schacter",
          "location": "TBA",
          "section": "311",
          "start": "18:45",
          "subject": "JVCW",
          "title": "Jewish Engagements"
       },
       {
          "capacity": 56,
          "code": "1001",
          "credits": 2,
          "department": "Jewish Values in Contemp Wrld",
          "display": {
             "dow": "T",
             "end": "02:30pm",
             "start": "01:30pm"
          },
          "dow": [
             2
          ],
          "end": "14:30",
          "id": "33862",
          "instructor": "Jacob J. Schacter",
          "location": "TBA",
          "section": "311",
          "start": "13:30",
          "subject": "JVCW",
          "title": "Jewish Engagements"
       },
       {
          "capacity": 50,
          "code": "1001",
          "credits": 2,
          "department": "Jewish Values in Contemp Wrld",
          "display": {
             "dow": "M",
             "end": "08:00pm",
             "start": "06:45pm"
          },
          "dow": [
             1
          ],
          "end": "20:00",
          "id": "33863",
          "instructor": "Jacob J. Schacter",
          "location": "TBA",
          "section": "511",
          "start": "18:45",
          "subject": "JVCW",
          "title": "Jewish Engagements"
       },
       {
          "capacity": 50,
          "code": "1001",
          "credits": 2,
          "department": "Jewish Values in Contemp Wrld",
          "display": {
             "dow": "R",
             "end": "02:30pm",
             "start": "01:30pm"
          },
          "dow": [
             4
          ],
          "end": "14:30",
          "id": "33863",
          "instructor": "Jacob J. Schacter",
          "location": "TBA",
          "section": "511",
          "start": "13:30",
          "subject": "JVCW",
          "title": "Jewish Engagements"
       },
       {
          "capacity": 55,
          "code": "1002",
          "credits": 2,
          "department": "Jewish Values in Contemp Wrld",
          "display": {
             "dow": "T",
             "end": "02:45pm",
             "start": "01:05pm"
          },
          "dow": [
             2
          ],
          "end": "14:45",
          "id": "35690",
          "instructor": "Daniel Rynhold",
          "location": "TBA",
          "section": "311",
          "start": "13:05",
          "subject": "JVCW",
          "title": "Jewish Values in Contemp Wrld"
       },
       {
          "capacity": 50,
          "code": "1002",
          "credits": 2,
          "department": "Jewish Values in Contemp Wrld",
          "display": {
             "dow": "R",
             "end": "02:45pm",
             "start": "01:05pm"
          },
          "dow": [
             4
          ],
          "end": "14:45",
          "id": "35691",
          "instructor": "Daniel Rynhold",
          "location": "TBA",
          "section": "511",
          "start": "13:05",
          "subject": "JVCW",
          "title": "Jewish Values in Contemp Wrld"
       },
       {
          "capacity": 36,
          "code": "1020",
          "credits": 3,
          "department": "Management",
          "display": {
             "dow": "MW",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "16:15",
          "id": "35681",
          "instructor": "Andrew M. Geller",
          "location": "TBA",
          "section": "231",
          "start": "15:00",
          "subject": "MAN",
          "title": "Mangmnt in a Global Environmnt"
       },
       {
          "capacity": 35,
          "code": "1020",
          "credits": 3,
          "department": "Management",
          "display": {
             "dow": "TR",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "16:15",
          "id": "33811",
          "instructor": "Steven M. Nissenfeld",
          "location": "TBA",
          "section": "331",
          "start": "15:00",
          "subject": "MAN",
          "title": "Mangmnt in a Global Environmnt"
       },
       {
          "capacity": 35,
          "code": "1020",
          "credits": 3,
          "department": "Management",
          "display": {
             "dow": "TR",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "17:45",
          "id": "33812",
          "instructor": "Steven M. Nissenfeld",
          "location": "TBA",
          "section": "341",
          "start": "16:30",
          "subject": "MAN",
          "title": "Mangmnt in a Global Environmnt"
       },
       {
          "capacity": 40,
          "code": "2800H",
          "credits": 3,
          "department": "Management",
          "display": {
             "dow": "M",
             "end": "09:00pm",
             "start": "06:30pm"
          },
          "dow": [
             1
          ],
          "end": "21:00",
          "id": "35710",
          "instructor": "Laizer Kornwasser",
          "location": "TBA",
          "section": "261",
          "start": "18:30",
          "subject": "MAN",
          "title": "Entrepreneurial Leadership"
       },
       {
          "capacity": 15,
          "code": "2941",
          "credits": 3,
          "department": "Management",
          "display": {
             "dow": "MW",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "17:45",
          "id": "33843",
          "instructor": "Robert Tufts",
          "location": "TBA",
          "section": "241",
          "start": "16:30",
          "subject": "MAN",
          "title": "Sports Marketing Management"
       },
       {
          "capacity": 25,
          "code": "2945",
          "credits": 2,
          "department": "Management",
          "display": {
             "dow": "T",
             "end": "08:25pm",
             "start": "06:45pm"
          },
          "dow": [
             2
          ],
          "end": "20:25",
          "id": "35693",
          "instructor": "Laizer Kornwasser",
          "location": "TBA",
          "section": "361",
          "start": "18:45",
          "subject": "MAN",
          "title": "Real Estate Management"
       },
       {
          "capacity": 35,
          "code": "3015",
          "credits": 3,
          "department": "Management",
          "display": {
             "dow": "MW",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "17:45",
          "id": "33864",
          "instructor": "Andrew M. Geller",
          "location": "TBA",
          "section": "241",
          "start": "16:30",
          "subject": "MAN",
          "title": "Management & Leadership"
       },
       {
          "capacity": 37,
          "code": "3780",
          "credits": 3,
          "department": "Management",
          "display": {
             "dow": "MW",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "16:15",
          "id": "33818",
          "instructor": "Robert Tufts",
          "location": "TBA",
          "section": "231",
          "start": "15:00",
          "subject": "MAN",
          "title": "Principles of Entrepreneurship"
       },
       {
          "capacity": 30,
          "code": "3788",
          "credits": 2,
          "department": "Management",
          "display": {
             "dow": "W",
             "end": "08:25pm",
             "start": "06:45pm"
          },
          "dow": [
             3
          ],
          "end": "20:25",
          "id": "35692",
          "instructor": "TBA",
          "location": "TBA",
          "section": "461",
          "start": "18:45",
          "subject": "MAN",
          "title": "Managing the Family Business"
       },
       {
          "capacity": 35,
          "code": "4002",
          "credits": 2,
          "department": "Management",
          "display": {
             "dow": "W",
             "end": "06:10pm",
             "start": "04:30pm"
          },
          "dow": [
             3
          ],
          "end": "18:10",
          "id": "35683",
          "instructor": "Richard M. Joel",
          "location": "TBA",
          "section": "441",
          "start": "16:30",
          "subject": "MAN",
          "title": "Leadership in Non-Profit World"
       },
       {
          "capacity": 35,
          "code": "1001",
          "credits": 3,
          "department": "Marketing",
          "display": {
             "dow": "TR",
             "end": "02:45pm",
             "start": "01:30pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "14:45",
          "id": "33835",
          "instructor": "Frederick Palumbo",
          "location": "TBA",
          "section": "311",
          "start": "13:30",
          "subject": "MAR",
          "title": "Mar 1001 Principles of Marketing"
       },
       {
          "capacity": 35,
          "code": "1001",
          "credits": 3,
          "department": "Marketing",
          "display": {
             "dow": "TR",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "16:15",
          "id": "33813",
          "instructor": "Frederick Palumbo",
          "location": "TBA",
          "section": "331",
          "start": "15:00",
          "subject": "MAR",
          "title": "Mar 1001 Principles of Marketing"
       },
       {
          "capacity": 35,
          "code": "1001",
          "credits": 3,
          "department": "Marketing",
          "display": {
             "dow": "TR",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "17:45",
          "id": "35684",
          "instructor": "Frederick Palumbo",
          "location": "TBA",
          "section": "341",
          "start": "16:30",
          "subject": "MAR",
          "title": "Principles of Marketing"
       },
       {
          "capacity": 30,
          "code": "2501",
          "credits": 3,
          "department": "Marketing",
          "display": {
             "dow": "TR",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "16:15",
          "id": "35685",
          "instructor": "Tamar Avnet",
          "location": "TBA",
          "section": "331",
          "start": "15:00",
          "subject": "MAR",
          "title": "Buyer Behavior"
       },
       {
          "capacity": 26,
          "code": "2621",
          "credits": 3,
          "department": "Marketing",
          "display": {
             "dow": "MW",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "16:15",
          "id": "33814",
          "instructor": "Maria Blekher",
          "location": "TBA",
          "section": "231",
          "start": "15:00",
          "subject": "MAR",
          "title": "Applied Research"
       },
       {
          "capacity": 15,
          "code": "2941",
          "credits": 3,
          "department": "Marketing",
          "display": {
             "dow": "MW",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "17:45",
          "id": "33846",
          "instructor": "Robert Tufts",
          "location": "TBA",
          "section": "241",
          "start": "16:30",
          "subject": "MAR",
          "title": "Sports Marketing Management"
       },
       {
          "capacity": 37,
          "code": "3318",
          "credits": 3,
          "department": "Marketing",
          "display": {
             "dow": "TR",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "17:45",
          "id": "33838",
          "instructor": "Tamar Avnet",
          "location": "TBA",
          "section": "341",
          "start": "16:30",
          "subject": "MAR",
          "title": "Social Media Marketing"
       },
       {
          "capacity": 20,
          "code": "3320",
          "credits": 3,
          "department": "Marketing",
          "display": {
             "dow": "T",
             "end": "09:15pm",
             "start": "06:45pm"
          },
          "dow": [
             2
          ],
          "end": "21:15",
          "id": "35686",
          "instructor": "Nurit Shaul",
          "location": "TBA",
          "section": "361",
          "start": "18:45",
          "subject": "MAR",
          "title": "Digital Media"
       },
       {
          "capacity": 30,
          "code": "3328",
          "credits": 3,
          "department": "Marketing",
          "display": {
             "dow": "T",
             "end": "09:15pm",
             "start": "06:45pm"
          },
          "dow": [
             2
          ],
          "end": "21:15",
          "id": "35885",
          "instructor": "TBA",
          "location": "TBA",
          "section": "361",
          "start": "18:45",
          "subject": "MAR",
          "title": "Managing Sales in Hi-Tech Co."
       },
       {
          "capacity": 25,
          "code": "1160",
          "credits": 4,
          "department": "Mathematics",
          "display": {
             "dow": "M",
             "end": "06:40pm",
             "start": "05:50pm"
          },
          "dow": [
             1
          ],
          "end": "18:40",
          "id": "33882",
          "instructor": "Donald Taylor-Bruce",
          "location": "TBA",
          "section": "341",
          "start": "17:50",
          "subject": "MAT",
          "title": "Precalculus"
       },
       {
          "capacity": 25,
          "code": "1160",
          "credits": 4,
          "department": "Mathematics",
          "display": {
             "dow": "TR",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "17:45",
          "id": "33882",
          "instructor": "Donald Taylor-Bruce",
          "location": "TBA",
          "section": "341",
          "start": "16:30",
          "subject": "MAT",
          "title": "Precalculus"
       },
       {
          "capacity": 24,
          "code": "1401",
          "credits": 0,
          "department": "Mathematics",
          "display": {
             "dow": "M",
             "end": "05:20pm",
             "start": "04:30pm"
          },
          "dow": [
             1
          ],
          "end": "17:20",
          "id": "34040",
          "instructor": "Yan Li",
          "location": "TBA",
          "section": "241",
          "start": "16:30",
          "subject": "MAT",
          "title": "Problem Seminar I - 34040 - MAT 1401 - 241"
       },
       {
          "capacity": 24,
          "code": "1401",
          "credits": 0,
          "department": "Mathematics",
          "display": {
             "dow": "M",
             "end": "06:40pm",
             "start": "05:50pm"
          },
          "dow": [
             1
          ],
          "end": "18:40",
          "id": "33883",
          "instructor": "Yan Li",
          "location": "TBA",
          "section": "251",
          "start": "17:50",
          "subject": "MAT",
          "title": "Problem Seminar I - 33883 - MAT 1401 - 251"
       },
       {
          "capacity": 24,
          "code": "1401",
          "credits": 0,
          "department": "Mathematics",
          "display": {
             "dow": "T",
             "end": "07:35pm",
             "start": "06:45pm"
          },
          "dow": [
             2
          ],
          "end": "19:35",
          "id": "33884",
          "instructor": "Yan Li",
          "location": "TBA",
          "section": "361",
          "start": "18:45",
          "subject": "MAT",
          "title": "Problem Seminar I - 33884 - MAT 1401 - 361"
       },
       {
          "capacity": 30,
          "code": "1402",
          "credits": 0,
          "department": "Mathematics",
          "display": {
             "dow": "R",
             "end": "06:40pm",
             "start": "05:50pm"
          },
          "dow": [
             4
          ],
          "end": "18:40",
          "id": "33925",
          "instructor": "Yan Li",
          "location": "TBA",
          "section": "551",
          "start": "17:50",
          "subject": "MAT",
          "title": "Problem Seminar II - 33925 - MAT 1402 - 551"
       },
       {
          "capacity": 30,
          "code": "1403",
          "credits": 0,
          "department": "Mathematics",
          "display": {
             "dow": "R",
             "end": "06:40pm",
             "start": "05:50pm"
          },
          "dow": [
             4
          ],
          "end": "18:40",
          "id": "33885",
          "instructor": "Donald Taylor-Bruce",
          "location": "TBA",
          "section": "551",
          "start": "17:50",
          "subject": "MAT",
          "title": "Problem Seminar III"
       },
       {
          "capacity": 72,
          "code": "1412",
          "credits": 4,
          "department": "Mathematics",
          "display": {
             "dow": "TR",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "17:45",
          "id": "33886",
          "instructor": "Yan Li",
          "location": "TBA",
          "section": "341",
          "start": "16:30",
          "subject": "MAT",
          "title": "Calculus I - 33886 - MAT 1412 - 341"
       },
       {
          "capacity": 30,
          "code": "1413",
          "credits": 4,
          "department": "Mathematics",
          "display": {
             "dow": "TR",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "16:15",
          "id": "33887",
          "instructor": "Wenxiong Chen",
          "location": "TBA",
          "section": "331",
          "start": "15:00",
          "subject": "MAT",
          "title": "Calculus II"
       },
       {
          "capacity": 6,
          "code": "1504C",
          "credits": 4,
          "department": "Mathematics",
          "display": {
             "dow": "TR",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "16:15",
          "id": "33957",
          "instructor": "Arnold Lebow",
          "location": "TBA",
          "section": "331",
          "start": "15:00",
          "subject": "MAT",
          "title": "Discrete Structures"
       },
       {
          "capacity": 6,
          "code": "1504C",
          "credits": 4,
          "department": "Mathematics",
          "display": {
             "dow": "R",
             "end": "08:00pm",
             "start": "06:45pm"
          },
          "dow": [
             4
          ],
          "end": "20:00",
          "id": "33957",
          "instructor": "Arnold Lebow",
          "location": "TBA",
          "section": "331",
          "start": "18:45",
          "subject": "MAT",
          "title": "Discrete Structures"
       },
       {
          "capacity": 30,
          "code": "1510",
          "credits": 4,
          "department": "Mathematics",
          "display": {
             "dow": "TR",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "17:45",
          "id": "33888",
          "instructor": "Wenxiong Chen",
          "location": "TBA",
          "section": "341",
          "start": "16:30",
          "subject": "MAT",
          "title": "Multivariable Calculus"
       },
       {
          "capacity": 30,
          "code": "1520",
          "credits": 3,
          "department": "Mathematics",
          "display": {
             "dow": "MW",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "17:45",
          "id": "33889",
          "instructor": "Wenxiong Chen",
          "location": "TBA",
          "section": "241",
          "start": "16:30",
          "subject": "MAT",
          "title": "Advanced Calculus I"
       },
       {
          "capacity": 35,
          "code": "2105",
          "credits": 3,
          "department": "Mathematics",
          "display": {
             "dow": "TR",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "16:15",
          "id": "33942",
          "instructor": "Maxwell Musser",
          "location": "TBA",
          "section": "331",
          "start": "15:00",
          "subject": "MAT",
          "title": "Linear Algebra"
       },
       {
          "capacity": 30,
          "code": "2461",
          "credits": 3,
          "department": "Mathematics",
          "display": {
             "dow": "MW",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "16:15",
          "id": "33890",
          "instructor": "Arnold Lebow",
          "location": "TBA",
          "section": "231",
          "start": "15:00",
          "subject": "MAT",
          "title": "Probability Theory"
       },
       {
          "capacity": 25,
          "code": "5303",
          "credits": 3,
          "department": "Mathematics",
          "display": {
             "dow": "M",
             "end": "08:30pm",
             "start": "06:00pm"
          },
          "dow": [
             1
          ],
          "end": "20:30",
          "id": "35889",
          "instructor": "Marian Gidea",
          "location": "TBA",
          "section": "261",
          "start": "18:00",
          "subject": "MAT",
          "title": "Chaotic Dynamical Systems"
       },
       {
          "capacity": 20,
          "code": "5305",
          "credits": 3,
          "department": "Mathematics",
          "display": {
             "dow": "T",
             "end": "09:15pm",
             "start": "06:45pm"
          },
          "dow": [
             2
          ],
          "end": "21:15",
          "id": "36001",
          "instructor": "Gabriel Cwilich",
          "location": "TBA",
          "section": "361",
          "start": "18:45",
          "subject": "MAT",
          "title": "Statistical Mechanics"
       },
       {
          "capacity": 10,
          "code": "5311",
          "credits": 3,
          "department": "Mathematics",
          "display": {
             "dow": "F",
             "end": "01:30pm",
             "start": "11:00am"
          },
          "dow": [
             5
          ],
          "end": "13:30",
          "id": "35890",
          "instructor": "Fredy Zypman",
          "location": "TBA",
          "section": "631",
          "start": "11:00",
          "subject": "MAT",
          "title": "MAT Solid State"
       },
       {
          "capacity": 25,
          "code": "5312",
          "credits": 3,
          "department": "Mathematics",
          "display": {
             "dow": "MW",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "17:45",
          "id": "35891",
          "instructor": "Arnold Lebow",
          "location": "TBA",
          "section": "241",
          "start": "16:30",
          "subject": "MAT",
          "title": "Math Logic and Comp Theory"
       },
       {
          "capacity": 25,
          "code": "5330",
          "credits": 3,
          "department": "Mathematics",
          "display": {
             "dow": "MW",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "16:15",
          "id": "35892",
          "instructor": "Emil Prodan",
          "location": "TBA",
          "section": "231",
          "start": "15:00",
          "subject": "MAT",
          "title": "Topics: K-Theory & C*-Algebras"
       },
       {
          "capacity": 6,
          "code": "1014",
          "credits": 3,
          "department": "Music",
          "display": {
             "dow": "TR",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "17:45",
          "id": "35669",
          "instructor": "Jonathan Schapiro",
          "location": "TBA",
          "section": "341",
          "start": "16:30",
          "subject": "MUS",
          "title": "American Musical Cultures"
       },
       {
          "capacity": 6,
          "code": "1018",
          "credits": 3,
          "department": "Music",
          "display": {
             "dow": "MW",
             "end": "08:00pm",
             "start": "06:45pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "20:00",
          "id": "34135",
          "instructor": "Daniel Beliavsky",
          "location": "TBA",
          "section": "261",
          "start": "18:45",
          "subject": "MUS",
          "title": "Aesthetic Revolutions"
       },
       {
          "capacity": 20,
          "code": "1350",
          "credits": 3,
          "department": "Music",
          "display": {
             "dow": "MW",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "16:15",
          "id": "33996",
          "instructor": "Daniel Beliavsky",
          "location": "TBA",
          "section": "231",
          "start": "15:00",
          "subject": "MUS",
          "title": "Baroque & Classical Music"
       },
       {
          "capacity": 6,
          "code": "1829H",
          "credits": 3,
          "department": "Music",
          "display": {
             "dow": "TR",
             "end": "08:00pm",
             "start": "06:45pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "20:00",
          "id": "34074",
          "instructor": "Harry Ballan",
          "location": "TBA",
          "section": "361",
          "start": "18:45",
          "subject": "MUS",
          "title": "Music and the Brain"
       },
       {
          "capacity": 20,
          "code": "2111",
          "credits": 3,
          "department": "Music",
          "display": {
             "dow": "MW",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "17:45",
          "id": "34018",
          "instructor": "Daniel Beliavsky",
          "location": "TBA",
          "section": "241",
          "start": "16:30",
          "subject": "MUS",
          "title": "Diatonic Harmony&Counterpoint"
       },
       {
          "capacity": 20,
          "code": "2111L",
          "credits": 1,
          "department": "Music",
          "display": {
             "dow": "M",
             "end": "06:40pm",
             "start": "05:50pm"
          },
          "dow": [
             1
          ],
          "end": "18:40",
          "id": "34019",
          "instructor": "Daniel Beliavsky",
          "location": "TBA",
          "section": "251",
          "start": "17:50",
          "subject": "MUS",
          "title": "Ear Training I"
       },
       {
          "capacity": 20,
          "code": "2113",
          "credits": 3,
          "department": "Music",
          "display": {
             "dow": "MW",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "17:45",
          "id": "33934",
          "instructor": "Kurt Nelson",
          "location": "TBA",
          "section": "241",
          "start": "16:30",
          "subject": "MUS",
          "title": "Chromatic Harmony & Counterpoint I Mus 2113"
       },
       {
          "capacity": 20,
          "code": "2113L",
          "credits": 1,
          "department": "Music",
          "display": {
             "dow": "MW",
             "end": "06:40pm",
             "start": "05:50pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "18:40",
          "id": "35670",
          "instructor": "Kurt Nelson",
          "location": "TBA",
          "section": "251",
          "start": "17:50",
          "subject": "MUS",
          "title": "Ear Training III - 35670 - MUS 2113L - 251"
       },
       {
          "capacity": 20,
          "code": "2120",
          "credits": 2,
          "department": "Music",
          "display": {
             "dow": "TR",
             "end": "03:50pm",
             "start": "03:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "15:50",
          "id": "34042",
          "instructor": "Jonathan Schapiro",
          "location": "TBA",
          "section": "331",
          "start": "15:00",
          "subject": "MUS",
          "title": "Introduction to Composition"
       },
       {
          "capacity": 20,
          "code": "3464",
          "credits": 1,
          "department": "Music",
          "display": {
             "dow": "",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "35616",
          "instructor": "Daniel Beliavsky",
          "location": "TBA",
          "section": "901",
          "start": "",
          "subject": "MUS",
          "title": "Performance: Chamber Ensemble"
       },
       {
          "capacity": 20,
          "code": "3469",
          "credits": 1,
          "department": "Music",
          "display": {
             "dow": "",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "35617",
          "instructor": "Jonathan Schapiro",
          "location": "TBA",
          "section": "901",
          "start": "",
          "subject": "MUS",
          "title": "Performance: Jazz Ensemble"
       },
       {
          "capacity": 20,
          "code": "4111",
          "credits": 1,
          "department": "Music",
          "display": {
             "dow": "",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "33937",
          "instructor": "Daniel Beliavsky",
          "location": "TBA",
          "section": "901",
          "start": "",
          "subject": "MUS",
          "title": "Applied Musical Study"
       },
       {
          "capacity": 70,
          "code": "1010",
          "credits": 3,
          "department": "Natural World",
          "display": {
             "dow": "MW",
             "end": "08:00pm",
             "start": "06:45pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "20:00",
          "id": "35696",
          "instructor": "TBA",
          "location": "TBA",
          "section": "261",
          "start": "18:45",
          "subject": "NAWO",
          "title": "Frontiers of Science"
       },
       {
          "capacity": 50,
          "code": "1110",
          "credits": 3,
          "department": "Natural World",
          "display": {
             "dow": "F",
             "end": "12:00pm",
             "start": "09:30am"
          },
          "dow": [
             5
          ],
          "end": "12:00",
          "id": "35697",
          "instructor": "Gabriel Cwilich",
          "location": "TBA",
          "section": "611",
          "start": "9:30",
          "subject": "NAWO",
          "title": "The Imagination of Nature"
       },
       {
          "capacity": 30,
          "code": "1100",
          "credits": 3,
          "department": "Philosophy",
          "display": {
             "dow": "MW",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "16:15",
          "id": "35618",
          "instructor": "David R. Johnson",
          "location": "TBA",
          "section": "231",
          "start": "15:00",
          "subject": "PHI",
          "title": "Logic"
       },
       {
          "capacity": 18,
          "code": "2170H",
          "credits": 3,
          "department": "Philosophy",
          "display": {
             "dow": "MW",
             "end": "08:00pm",
             "start": "06:45pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "20:00",
          "id": "34109",
          "instructor": "David R. Johnson",
          "location": "TBA",
          "section": "261",
          "start": "18:45",
          "subject": "PHI",
          "title": "Ancient & Medieval Philosophy"
       },
       {
          "capacity": 18,
          "code": "4930H",
          "credits": 3,
          "department": "Philosophy",
          "display": {
             "dow": "TR",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "17:45",
          "id": "34146",
          "instructor": "Meir Yakov Soloveichik",
          "location": "TBA",
          "section": "341",
          "start": "16:30",
          "subject": "PHI",
          "title": "Topics: Judaism and Democracy"
       },
       {
          "capacity": 30,
          "code": "4931",
          "credits": 3,
          "department": "Philosophy",
          "display": {
             "dow": "MW",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "17:45",
          "id": "35671",
          "instructor": "David R. Johnson",
          "location": "TBA",
          "section": "241",
          "start": "16:30",
          "subject": "PHI",
          "title": "Seminar: Paradoxes"
       },
       {
          "capacity": 25,
          "code": "4932",
          "credits": 3,
          "department": "Philosophy",
          "display": {
             "dow": "TR",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "16:15",
          "id": "36144",
          "instructor": "Daniel Rynhold",
          "location": "TBA",
          "section": "331",
          "start": "15:00",
          "subject": "PHI",
          "title": "Seminar: Kant's First Critique"
       },
       {
          "capacity": 0,
          "code": "1120",
          "credits": 0.5,
          "department": "Physical Education",
          "display": {
             "dow": "TBA",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "33956",
          "instructor": "TBA",
          "location": "TBA",
          "section": "TBA",
          "start": "",
          "subject": "PED",
          "title": "Team Golf"
       },
       {
          "capacity": 0,
          "code": "1326",
          "credits": 0.5,
          "department": "Physical Education",
          "display": {
             "dow": "TBA",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "33945",
          "instructor": "TBA",
          "location": "TBA",
          "section": "TBA",
          "start": "",
          "subject": "PED",
          "title": "Team Volleyball"
       },
       {
          "capacity": 0,
          "code": "1346",
          "credits": 0.5,
          "department": "Physical Education",
          "display": {
             "dow": "TBA",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "33944",
          "instructor": "TBA",
          "location": "TBA",
          "section": "TBA",
          "start": "",
          "subject": "PED",
          "title": "Team Tennis"
       },
       {
          "capacity": 0,
          "code": "1426",
          "credits": 0.5,
          "department": "Physical Education",
          "display": {
             "dow": "TBA",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "33904",
          "instructor": "TBA",
          "location": "TBA",
          "section": "TBA",
          "start": "",
          "subject": "PED",
          "title": "Team Basketball"
       },
       {
          "capacity": 0,
          "code": "1511",
          "credits": 0.5,
          "department": "Physical Education",
          "display": {
             "dow": "TBA",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "33905",
          "instructor": "TBA",
          "location": "TBA",
          "section": "TBA",
          "start": "",
          "subject": "PED",
          "title": "Team Soccer"
       },
       {
          "capacity": 0,
          "code": "1611",
          "credits": 0.5,
          "department": "Physical Education",
          "display": {
             "dow": "TBA",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "33906",
          "instructor": "TBA",
          "location": "TBA",
          "section": "TBA",
          "start": "",
          "subject": "PED",
          "title": "Team Baseball"
       },
       {
          "capacity": 0,
          "code": "2316",
          "credits": 0.5,
          "department": "Physical Education",
          "display": {
             "dow": "TBA",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "33907",
          "instructor": "TBA",
          "location": "TBA",
          "section": "TBA",
          "start": "",
          "subject": "PED",
          "title": "Team Cross-Country"
       },
       {
          "capacity": 0,
          "code": "2466",
          "credits": 0.5,
          "department": "Physical Education",
          "display": {
             "dow": "TBA",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "33908",
          "instructor": "TBA",
          "location": "TBA",
          "section": "TBA",
          "start": "",
          "subject": "PED",
          "title": "Team Fencing"
       },
       {
          "capacity": 16,
          "code": "1031L",
          "credits": 1,
          "department": "Physics",
          "display": {
             "dow": "M",
             "end": "08:25pm",
             "start": "06:45pm"
          },
          "dow": [
             1
          ],
          "end": "20:25",
          "id": "33892",
          "instructor": "Neer Asherie",
          "location": "TBA",
          "section": "261",
          "start": "18:45",
          "subject": "PHY",
          "title": "Intro Physics Lab"
       },
       {
          "capacity": 16,
          "code": "1031L",
          "credits": 1,
          "department": "Physics",
          "display": {
             "dow": "W",
             "end": "02:45pm",
             "start": "01:05pm"
          },
          "dow": [
             3
          ],
          "end": "14:45",
          "id": "33964",
          "instructor": "TBA",
          "location": "TBA",
          "section": "411",
          "start": "13:05",
          "subject": "PHY",
          "title": "Intro Physics Lab"
       },
       {
          "capacity": 16,
          "code": "1031L",
          "credits": 1,
          "department": "Physics",
          "display": {
             "dow": "W",
             "end": "08:25pm",
             "start": "06:45pm"
          },
          "dow": [
             3
          ],
          "end": "20:25",
          "id": "33982",
          "instructor": "Clifford Marc Bastuscheck",
          "location": "TBA",
          "section": "461",
          "start": "18:45",
          "subject": "PHY",
          "title": "Intro Physics Lab"
       },
       {
          "capacity": 48,
          "code": "1031R",
          "credits": 4,
          "department": "Physics",
          "display": {
             "dow": "MW",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "16:15",
          "id": "33893",
          "instructor": "Neer Asherie",
          "location": "TBA",
          "section": "231",
          "start": "15:00",
          "subject": "PHY",
          "title": "Intro Physics Lecture"
       },
       {
          "capacity": 24,
          "code": "1031T",
          "credits": 0,
          "department": "Physics",
          "display": {
             "dow": "M",
             "end": "06:40pm",
             "start": "05:50pm"
          },
          "dow": [
             1
          ],
          "end": "18:40",
          "id": "35634",
          "instructor": "Neer Asherie",
          "location": "TBA",
          "section": "251",
          "start": "17:50",
          "subject": "PHY",
          "title": "Intro Physics I - Recitation"
       },
       {
          "capacity": 24,
          "code": "1031T",
          "credits": 0,
          "department": "Physics",
          "display": {
             "dow": "W",
             "end": "06:40pm",
             "start": "05:50pm"
          },
          "dow": [
             3
          ],
          "end": "18:40",
          "id": "35638",
          "instructor": "Neer Asherie",
          "location": "TBA",
          "section": "451",
          "start": "17:50",
          "subject": "PHY",
          "title": "Intro Physics I - Recitation"
       },
       {
          "capacity": 30,
          "code": "1051R",
          "credits": 4,
          "department": "Physics",
          "display": {
             "dow": "MW",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "16:15",
          "id": "34010",
          "instructor": "Fredy Zypman",
          "location": "TBA",
          "section": "231",
          "start": "15:00",
          "subject": "PHY",
          "title": "Calculus Based Physics"
       },
       {
          "capacity": 30,
          "code": "1051T",
          "credits": 0,
          "department": "Physics",
          "display": {
             "dow": "M",
             "end": "06:40pm",
             "start": "05:50pm"
          },
          "dow": [
             1
          ],
          "end": "18:40",
          "id": "35888",
          "instructor": "Mahdokht Behravan",
          "location": "TBA",
          "section": "251",
          "start": "17:50",
          "subject": "PHY",
          "title": "General Physics I-Recitation"
       },
       {
          "capacity": 10,
          "code": "1401",
          "credits": 3,
          "department": "Physics",
          "display": {
             "dow": "F",
             "end": "01:30pm",
             "start": "11:00am"
          },
          "dow": [
             5
          ],
          "end": "13:30",
          "id": "35676",
          "instructor": "Fredy Zypman",
          "location": "TBA",
          "section": "631",
          "start": "11:00",
          "subject": "PHY",
          "title": "PHY Solid State"
       },
       {
          "capacity": 10,
          "code": "1510H",
          "credits": 3,
          "department": "Physics",
          "display": {
             "dow": "T",
             "end": "09:15pm",
             "start": "06:45pm"
          },
          "dow": [
             2
          ],
          "end": "21:15",
          "id": "35672",
          "instructor": "Gabriel Cwilich",
          "location": "TBA",
          "section": "361",
          "start": "18:45",
          "subject": "PHY",
          "title": "Statistical Mechanics"
       },
       {
          "capacity": 10,
          "code": "1621",
          "credits": 3,
          "department": "Physics",
          "display": {
             "dow": "MW",
             "end": "08:00pm",
             "start": "06:45pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "20:00",
          "id": "33926",
          "instructor": "Sergey V. Buldyrev",
          "location": "TBA",
          "section": "261",
          "start": "18:45",
          "subject": "PHY",
          "title": "Intro to Quantum Mechanics"
       },
       {
          "capacity": 36,
          "code": "2051R",
          "credits": 4,
          "department": "Physics",
          "display": {
             "dow": "MW",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "16:15",
          "id": "34088",
          "instructor": "Sergey V. Buldyrev",
          "location": "TBA",
          "section": "231",
          "start": "15:00",
          "subject": "PHY",
          "title": "General Physics III"
       },
       {
          "capacity": 36,
          "code": "2051T",
          "credits": 0,
          "department": "Physics",
          "display": {
             "dow": "W",
             "end": "06:40pm",
             "start": "05:50pm"
          },
          "dow": [
             3
          ],
          "end": "18:40",
          "id": "35678",
          "instructor": "Sergey V. Buldyrev",
          "location": "TBA",
          "section": "451",
          "start": "17:50",
          "subject": "PHY",
          "title": "General Physics III-Recitation"
       },
       {
          "capacity": 18,
          "code": "2061L",
          "credits": 1,
          "department": "Physics",
          "display": {
             "dow": "T",
             "end": "08:45pm",
             "start": "06:45pm"
          },
          "dow": [
             2
          ],
          "end": "20:45",
          "id": "34087",
          "instructor": "Mahdokht Behravan",
          "location": "TBA",
          "section": "361",
          "start": "18:45",
          "subject": "PHY",
          "title": "General Physics III Lab"
       },
       {
          "capacity": 18,
          "code": "2061L",
          "credits": 1,
          "department": "Physics",
          "display": {
             "dow": "W",
             "end": "08:45pm",
             "start": "06:45pm"
          },
          "dow": [
             3
          ],
          "end": "20:45",
          "id": "35633",
          "instructor": "Mahdokht Behravan",
          "location": "TBA",
          "section": "461",
          "start": "18:45",
          "subject": "PHY",
          "title": "General Physics III Lab"
       },
       {
          "capacity": 0,
          "code": "4901",
          "credits": 0,
          "department": "Physics",
          "display": {
             "dow": "TBA",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "34140",
          "instructor": "TBA",
          "location": "TBA",
          "section": "901",
          "start": "",
          "subject": "PHY",
          "title": "Research in Physics"
       },
       {
          "capacity": 0,
          "code": "4935",
          "credits": 1,
          "department": "Physics",
          "display": {
             "dow": "T",
             "end": "12:50pm",
             "start": "12:00pm"
          },
          "dow": [
             2
          ],
          "end": "12:50",
          "id": "33941",
          "instructor": "Mahdokht Behravan",
          "location": "TBA",
          "section": "301",
          "start": "12:00",
          "subject": "PHY",
          "title": "Physics Colloquium"
       },
       {
          "capacity": 32,
          "code": "1101",
          "credits": 3,
          "department": "Political Science",
          "display": {
             "dow": "MW",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "17:45",
          "id": "33981",
          "instructor": "Jamie Aroosi",
          "location": "TBA",
          "section": "241",
          "start": "16:30",
          "subject": "POL",
          "title": "Intro to American Politics"
       },
       {
          "capacity": 15,
          "code": "1105",
          "credits": 3,
          "department": "Political Science",
          "display": {
             "dow": "MW",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "16:15",
          "id": "34094",
          "instructor": "Jamie Aroosi",
          "location": "TBA",
          "section": "231",
          "start": "15:00",
          "subject": "POL",
          "title": "Intro American Public Policy"
       },
       {
          "capacity": 18,
          "code": "1305H",
          "credits": 3,
          "department": "Political Science",
          "display": {
             "dow": "TR",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "16:15",
          "id": "35620",
          "instructor": "Maria N. Zaitseva",
          "location": "TBA",
          "section": "331",
          "start": "15:00",
          "subject": "POL",
          "title": "American Foreign Policy"
       },
       {
          "capacity": 32,
          "code": "1501",
          "credits": 3,
          "department": "Political Science",
          "display": {
             "dow": "TR",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "16:15",
          "id": "33988",
          "instructor": "Ruth Bevan",
          "location": "TBA",
          "section": "331",
          "start": "15:00",
          "subject": "POL",
          "title": "Fundamentals of Political Science"
       },
       {
          "capacity": 15,
          "code": "2320",
          "credits": 3,
          "department": "Political Science",
          "display": {
             "dow": "MW",
             "end": "08:00pm",
             "start": "06:45pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "20:00",
          "id": "35623",
          "instructor": "Roberto Genoves",
          "location": "TBA",
          "section": "261",
          "start": "18:45",
          "subject": "POL",
          "title": "Politics and Global Markets"
       },
       {
          "capacity": 32,
          "code": "2430",
          "credits": 3,
          "department": "Political Science",
          "display": {
             "dow": "TR",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "17:45",
          "id": "35622",
          "instructor": "Ruth Bevan",
          "location": "TBA",
          "section": "341",
          "start": "16:30",
          "subject": "POL",
          "title": "American Political Thought"
       },
       {
          "capacity": 20,
          "code": "2505",
          "credits": 3,
          "department": "Political Science",
          "display": {
             "dow": "TR",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "17:45",
          "id": "35639",
          "instructor": "Maria N. Zaitseva",
          "location": "TBA",
          "section": "341",
          "start": "16:30",
          "subject": "POL",
          "title": "Writing Politics:Dir. Research"
       },
       {
          "capacity": 25,
          "code": "3115H",
          "credits": 3,
          "department": "Political Science",
          "display": {
             "dow": "MW",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "17:45",
          "id": "35621",
          "instructor": "Joseph Lieberman, Ruth Bevan ",
          "location": "TBA",
          "section": "241",
          "start": "16:30",
          "subject": "POL",
          "title": "Presidential Elections"
       },
       {
          "capacity": 7,
          "code": "3575",
          "credits": 3,
          "department": "Political Science",
          "display": {
             "dow": "T",
             "end": "09:15pm",
             "start": "06:45pm"
          },
          "dow": [
             2
          ],
          "end": "21:15",
          "id": "35843",
          "instructor": "TBA",
          "location": "TBA",
          "section": "361",
          "start": "18:45",
          "subject": "POL",
          "title": "Research Methods"
       },
       {
          "capacity": 35,
          "code": "1010",
          "credits": 3,
          "department": "Psychology",
          "display": {
             "dow": "MW",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "16:15",
          "id": "33895",
          "instructor": "Eliezer H. Schnall",
          "location": "TBA",
          "section": "231",
          "start": "15:00",
          "subject": "PSY",
          "title": "Introduction to Psychology"
       },
       {
          "capacity": 35,
          "code": "1010",
          "credits": 3,
          "department": "Psychology",
          "display": {
             "dow": "TR",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "16:15",
          "id": "35625",
          "instructor": "Jenny Isaacs",
          "location": "TBA",
          "section": "331",
          "start": "15:00",
          "subject": "PSY",
          "title": "Introduction to Psychology"
       },
       {
          "capacity": 32,
          "code": "1021",
          "credits": 3,
          "department": "Psychology",
          "display": {
             "dow": "MW",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "16:15",
          "id": "33968",
          "instructor": "Ariel Malka",
          "location": "TBA",
          "section": "231",
          "start": "15:00",
          "subject": "PSY",
          "title": "Statistics for Psychology"
       },
       {
          "capacity": 32,
          "code": "1110",
          "credits": 3,
          "department": "Psychology",
          "display": {
             "dow": "M",
             "end": "09:30pm",
             "start": "06:45pm"
          },
          "dow": [
             1
          ],
          "end": "21:30",
          "id": "33896",
          "instructor": "Eliezer H. Schnall",
          "location": "TBA",
          "section": "261",
          "start": "18:45",
          "subject": "PSY",
          "title": "Developmental I: Child"
       },
       {
          "capacity": 32,
          "code": "1130",
          "credits": 3,
          "department": "Psychology",
          "display": {
             "dow": "M",
             "end": "09:30pm",
             "start": "06:45pm"
          },
          "dow": [
             1
          ],
          "end": "21:30",
          "id": "35626",
          "instructor": "Stephen I. Glicksman",
          "location": "TBA",
          "section": "261",
          "start": "18:45",
          "subject": "PSY",
          "title": "Developmental 2: Adult"
       },
       {
          "capacity": 10,
          "code": "2100C",
          "credits": 5,
          "department": "Psychology",
          "display": {
             "dow": "TR",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "17:45",
          "id": "33897",
          "instructor": "Bruno Galantucci",
          "location": "TBA",
          "section": "341",
          "start": "16:30",
          "subject": "PSY",
          "title": "Experimental Psychology"
       },
       {
          "capacity": 10,
          "code": "2100C",
          "credits": 5,
          "department": "Psychology",
          "display": {
             "dow": "R",
             "end": "07:45pm",
             "start": "06:00pm"
          },
          "dow": [
             4
          ],
          "end": "19:45",
          "id": "33897",
          "instructor": "Bruno Galantucci",
          "location": "TBA",
          "section": "341",
          "start": "18:00",
          "subject": "PSY",
          "title": "Experimental Psychology"
       },
       {
          "capacity": 32,
          "code": "2150",
          "credits": 3,
          "department": "Psychology",
          "display": {
             "dow": "TR",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "16:15",
          "id": "34112",
          "instructor": "Bruno Galantucci",
          "location": "TBA",
          "section": "331",
          "start": "15:00",
          "subject": "PSY",
          "title": "Cognitive Psychology"
       },
       {
          "capacity": 32,
          "code": "2414",
          "credits": 3,
          "department": "Psychology",
          "display": {
             "dow": "TR",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "17:45",
          "id": "35998",
          "instructor": "Jenny Isaacs",
          "location": "TBA",
          "section": "341",
          "start": "16:30",
          "subject": "PSY",
          "title": "Abnormal Psychology"
       },
       {
          "capacity": 32,
          "code": "3105",
          "credits": 3,
          "department": "Psychology",
          "display": {
             "dow": "MW",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "17:45",
          "id": "33898",
          "instructor": "Eliezer H. Schnall",
          "location": "TBA",
          "section": "241",
          "start": "16:30",
          "subject": "PSY",
          "title": "Social Psychology"
       },
       {
          "capacity": 5,
          "code": "3110",
          "credits": 3,
          "department": "Psychology",
          "display": {
             "dow": "TR",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "17:45",
          "id": "34077",
          "instructor": "Ariel Malka",
          "location": "TBA",
          "section": "341",
          "start": "16:30",
          "subject": "PSY",
          "title": "Psychology and Public Opinion"
       },
       {
          "capacity": 10,
          "code": "3110H",
          "credits": 3,
          "department": "Psychology",
          "display": {
             "dow": "TR",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "16:15",
          "id": "35624",
          "instructor": "Ariel Malka",
          "location": "TBA",
          "section": "331",
          "start": "15:00",
          "subject": "PSY",
          "title": "Psychology and Public Opinion"
       },
       {
          "capacity": 32,
          "code": "3435",
          "credits": 3,
          "department": "Psychology",
          "display": {
             "dow": "T",
             "end": "09:30pm",
             "start": "06:45pm"
          },
          "dow": [
             2
          ],
          "end": "21:30",
          "id": "34047",
          "instructor": "E. Hoffman",
          "location": "TBA",
          "section": "361",
          "start": "18:45",
          "subject": "PSY",
          "title": "Industrial & Organization Psyc"
       },
       {
          "capacity": 32,
          "code": "3440",
          "credits": 3,
          "department": "Psychology",
          "display": {
             "dow": "T",
             "end": "09:30pm",
             "start": "06:45pm"
          },
          "dow": [
             2
          ],
          "end": "21:30",
          "id": "35627",
          "instructor": "Ari Shechter",
          "location": "TBA",
          "section": "361",
          "start": "18:45",
          "subject": "PSY",
          "title": "Drugs & Behavior"
       },
       {
          "capacity": 32,
          "code": "3804",
          "credits": 3,
          "department": "Psychology",
          "display": {
             "dow": "W",
             "end": "09:30pm",
             "start": "06:45pm"
          },
          "dow": [
             3
          ],
          "end": "21:30",
          "id": "33899",
          "instructor": "Ido Davidesco",
          "location": "TBA",
          "section": "461",
          "start": "18:45",
          "subject": "PSY",
          "title": "Psychobiology"
       },
       {
          "capacity": 10,
          "code": "3829H",
          "credits": 3,
          "department": "Psychology",
          "display": {
             "dow": "TR",
             "end": "08:00pm",
             "start": "06:45pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "20:00",
          "id": "34075",
          "instructor": "Harry Ballan",
          "location": "TBA",
          "section": "361",
          "start": "18:45",
          "subject": "PSY",
          "title": "Music and the Brain"
       },
       {
          "capacity": 0,
          "code": "4901",
          "credits": 0,
          "department": "Psychology",
          "display": {
             "dow": "TBA",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "33980",
          "instructor": "TBA",
          "location": "TBA",
          "section": "901",
          "start": "",
          "subject": "PSY",
          "title": "Research in Psychology"
       },
       {
          "capacity": 10,
          "code": "4930",
          "credits": 3,
          "department": "Psychology",
          "display": {
             "dow": "MW",
             "end": "08:00pm",
             "start": "06:45pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "20:00",
          "id": "35628",
          "instructor": "Esther Devorah Rollhaus",
          "location": "TBA",
          "section": "261",
          "start": "18:45",
          "subject": "PSY",
          "title": "Topics: Psychopharmacology"
       },
       {
          "capacity": 10,
          "code": "4933",
          "credits": 3,
          "department": "Psychology",
          "display": {
             "dow": "T",
             "end": "09:30pm",
             "start": "06:45pm"
          },
          "dow": [
             2
          ],
          "end": "21:30",
          "id": "35842",
          "instructor": "Jenny Isaacs",
          "location": "TBA",
          "section": "361",
          "start": "18:45",
          "subject": "PSY",
          "title": "Research Seminar"
       },
       {
          "capacity": 25,
          "code": "1001",
          "credits": 3,
          "department": "Sociology",
          "display": {
             "dow": "TR",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "16:15",
          "id": "33900",
          "instructor": "Daniel Kimmel",
          "location": "TBA",
          "section": "331",
          "start": "15:00",
          "subject": "SOC",
          "title": "Introduction to Sociology"
       },
       {
          "capacity": 5,
          "code": "2105",
          "credits": 3,
          "department": "Sociology",
          "display": {
             "dow": "F",
             "end": "12:00pm",
             "start": "09:30am"
          },
          "dow": [
             5
          ],
          "end": "12:00",
          "id": "35630",
          "instructor": "Jonathan J. Zisook",
          "location": "TBA",
          "section": "611",
          "start": "9:30",
          "subject": "SOC",
          "title": "Religion and Society"
       },
       {
          "capacity": 5,
          "code": "2306H",
          "credits": 3,
          "department": "Sociology",
          "display": {
             "dow": "M",
             "end": "09:15pm",
             "start": "06:45pm"
          },
          "dow": [
             1
          ],
          "end": "21:15",
          "id": "35629",
          "instructor": "Amy Stuart",
          "location": "TBA",
          "section": "261",
          "start": "18:45",
          "subject": "SOC",
          "title": "Sociology of Race and Racism"
       },
       {
          "capacity": 5,
          "code": "2407",
          "credits": 3,
          "department": "Sociology",
          "display": {
             "dow": "TR",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "17:45",
          "id": "35632",
          "instructor": "Daniel Kimmel",
          "location": "TBA",
          "section": "341",
          "start": "16:30",
          "subject": "SOC",
          "title": "Epidemiology"
       },
       {
          "capacity": 5,
          "code": "2701",
          "credits": 3,
          "department": "Sociology",
          "display": {
             "dow": "MW",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "17:45",
          "id": "34004",
          "instructor": "Eliezer H. Schnall",
          "location": "TBA",
          "section": "241",
          "start": "16:30",
          "subject": "SOC",
          "title": "Social Psychology"
       },
       {
          "capacity": 18,
          "code": "3003",
          "credits": 3,
          "department": "Sociology",
          "display": {
             "dow": "T",
             "end": "09:15pm",
             "start": "06:45pm"
          },
          "dow": [
             2
          ],
          "end": "21:15",
          "id": "34003",
          "instructor": "TBA",
          "location": "TBA",
          "section": "361",
          "start": "18:45",
          "subject": "SOC",
          "title": "Social Research Methods"
       },
       {
          "capacity": 18,
          "code": "1101",
          "credits": 3,
          "department": "Spanish",
          "display": {
             "dow": "MW",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "16:15",
          "id": "33901",
          "instructor": "Graciela Bazet de Broitman",
          "location": "TBA",
          "section": "231",
          "start": "15:00",
          "subject": "SPA",
          "title": "Elementary Spanish I 33901 SPA 1101 231"
       },
       {
          "capacity": 18,
          "code": "1101",
          "credits": 3,
          "department": "Spanish",
          "display": {
             "dow": "TR",
             "end": "02:45pm",
             "start": "01:30pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "14:45",
          "id": "33902",
          "instructor": "Graciela Bazet de Broitman",
          "location": "TBA",
          "section": "311",
          "start": "13:30",
          "subject": "SPA",
          "title": "Elementary Spanish I 33902 SPA 1101  311"
       },
       {
          "capacity": 18,
          "code": "1201",
          "credits": 3,
          "department": "Spanish",
          "display": {
             "dow": "MW",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "17:45",
          "id": "36557",
          "instructor": "Graciela Bazet de Broitman",
          "location": "TBA",
          "section": "241",
          "start": "16:30",
          "subject": "SPA",
          "title": "Intermediate Spanish I - 36557 - SPA 1201 - 241"
       },
       {
          "capacity": 18,
          "code": "1201",
          "credits": 3,
          "department": "Spanish",
          "display": {
             "dow": "TR",
             "end": "04:15pm",
             "start": "03:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "16:15",
          "id": "33903",
          "instructor": "Graciela Bazet de Broitman",
          "location": "TBA",
          "section": "331",
          "start": "15:00",
          "subject": "SPA",
          "title": "Intermediate Spanish I - 33903 - SPA 1201 - 331"
       },
       {
          "capacity": 20,
          "code": "1231",
          "credits": 3,
          "department": "Spanish",
          "display": {
             "dow": "MW",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "17:45",
          "id": "36038",
          "instructor": "Marcelo Broitman",
          "location": "TBA",
          "section": "241",
          "start": "16:30",
          "subject": "SPA",
          "title": "Advanced Spanish - 36038 - SPA 1231 - 241"
       },
       {
          "capacity": 35,
          "code": "1021",
          "credits": 3,
          "department": "Statistics",
          "display": {
             "dow": "F",
             "end": "12:30pm",
             "start": "10:00am"
          },
          "dow": [
             5
          ],
          "end": "12:30",
          "id": "33909",
          "instructor": "Andreas Kakolyris",
          "location": "TBA",
          "section": "621",
          "start": "10:00",
          "subject": "STA",
          "title": "Intro to Statistics"
       },
       {
          "capacity": 30,
          "code": "5801",
          "credits": 3,
          "department": "Talmudic Studies",
          "display": {
             "dow": "R",
             "end": "08:30pm",
             "start": "06:50pm"
          },
          "dow": [
             4
          ],
          "end": "20:30",
          "id": "35776",
          "instructor": "Yaakov Elman",
          "location": "FURST ",
          "section": "A",
          "start": "18:50",
          "subject": "TAS",
          "title": "Intro Tannaitic Literature"
       },
       {
          "capacity": 30,
          "code": "6874",
          "credits": 3,
          "department": "Talmudic Studies",
          "display": {
             "dow": "T",
             "end": "06:30pm",
             "start": "04:50pm"
          },
          "dow": [
             2
          ],
          "end": "18:30",
          "id": "35839",
          "instructor": "Yaakov Elman",
          "location": "FURST ",
          "section": "A",
          "start": "16:50",
          "subject": "TAS",
          "title": "Class Rabbinic Legal Thought"
       },
       {
          "capacity": 25,
          "code": "6895",
          "credits": 3,
          "department": "Talmudic Studies",
          "display": {
             "dow": "T",
             "end": "04:30pm",
             "start": "02:50pm"
          },
          "dow": [
             2
          ],
          "end": "16:30",
          "id": "36141",
          "instructor": "Elazar Hurvitz",
          "location": "GOTLIB L105",
          "section": "A",
          "start": "14:50",
          "subject": "TAS",
          "title": "Topics in Aggadah"
       },
       {
          "capacity": 30,
          "code": "7523",
          "credits": 3,
          "department": "Talmudic Studies",
          "display": {
             "dow": "T",
             "end": "08:30pm",
             "start": "06:50pm"
          },
          "dow": [
             2
          ],
          "end": "20:30",
          "id": "35840",
          "instructor": "Elazar Hurvitz",
          "location": "GOTLIB L105",
          "section": "A",
          "start": "18:50",
          "subject": "TAS",
          "title": "Lit Gaonic Period"
       },
       {
          "capacity": 0,
          "code": "9901",
          "credits": 3,
          "department": "Talmudic Studies",
          "display": {
             "dow": "TBA",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "35780",
          "instructor": "TBA",
          "location": "TBA",
          "section": "A",
          "start": "",
          "subject": "TAS",
          "title": "Guided Readings"
       },
       {
          "capacity": 35,
          "code": "6124",
          "credits": 3,
          "department": "Tax",
          "display": {
             "dow": "TR",
             "end": "05:45pm",
             "start": "04:30pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "17:45",
          "id": "33823",
          "instructor": "Leonard Fuld",
          "location": "TBA",
          "section": "341",
          "start": "16:30",
          "subject": "TAX",
          "title": "Federal Income Taxation I"
       },
       {
          "capacity": 35,
          "code": "6124",
          "credits": 3,
          "department": "Tax",
          "display": {
             "dow": "TR",
             "end": "08:00pm",
             "start": "06:45pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "20:00",
          "id": "33824",
          "instructor": "Leonard Fuld",
          "location": "TBA",
          "section": "361",
          "start": "18:45",
          "subject": "TAX",
          "title": "Federal Income Taxation I"
       },
       {
          "capacity": 18,
          "code": "2910",
          "credits": 3,
          "department": "Theater Arts",
          "display": {
             "dow": "T",
             "end": "09:15pm",
             "start": "06:45pm"
          },
          "dow": [
             2
          ],
          "end": "21:15",
          "id": "35698",
          "instructor": "Lin Snider",
          "location": "TBA",
          "section": "361",
          "start": "18:45",
          "subject": "THEA",
          "title": "Art of the Actor"
       }
    ];
  YeshivaCoursesArray.forEach(function(element) {
    YeshivaCourses.insert(element);
  });
}

if (SternCourses.find().count() === 0) {
  SternCoursesArray = [
       {
          "capacity": 40,
          "code": "1001",
          "credits": 3,
          "department": "Accounting",
          "display": {
             "dow": "TR",
             "end": "11:45am",
             "start": "10:30am"
          },
          "dow": [
             2,
             4
          ],
          "end": "11:45",
          "id": "34424",
          "instructor": "Constance J. Crawford",
          "location": "LEX215 LX208",
          "section": "K",
          "start": "10:30",
          "subject": "ACC",
          "title": "Accounting Principles I"
       },
       {
          "capacity": 40,
          "code": "1001",
          "credits": 3,
          "department": "Accounting",
          "display": {
             "dow": "TR",
             "end": "11:45am",
             "start": "10:30am"
          },
          "dow": [
             2,
             4
          ],
          "end": "11:45",
          "id": "36565",
          "instructor": "Joel A. Hochman",
          "location": "TBA",
          "section": "K1",
          "start": "10:30",
          "subject": "ACC",
          "title": "Accounting Principles I"
       },
       {
          "capacity": 35,
          "code": "1002",
          "credits": 3,
          "department": "Accounting",
          "display": {
             "dow": "TR",
             "end": "10:15am",
             "start": "09:00am"
          },
          "dow": [
             2,
             4
          ],
          "end": "10:15",
          "id": "34371",
          "instructor": "David Hornung",
          "location": "LEX215 LX314",
          "section": "J",
          "start": "9:00",
          "subject": "ACC",
          "title": "Accounting Principles II"
       },
       {
          "capacity": 25,
          "code": "1101",
          "credits": 3,
          "department": "Accounting",
          "display": {
             "dow": "TR",
             "end": "11:45am",
             "start": "10:30am"
          },
          "dow": [
             2,
             4
          ],
          "end": "11:45",
          "id": "34166",
          "instructor": "David Hornung",
          "location": "LEX215 LX314",
          "section": "K",
          "start": "10:30",
          "subject": "ACC",
          "title": "Intermediate Accounting I"
       },
       {
          "capacity": 35,
          "code": "3201",
          "credits": 3,
          "department": "Accounting",
          "display": {
             "dow": "MW",
             "end": "11:40am",
             "start": "10:25am"
          },
          "dow": [
             1,
             3
          ],
          "end": "11:40",
          "id": "34220",
          "instructor": "Martin A. Leibowitz",
          "location": "LEX215 LX405",
          "section": "B",
          "start": "10:25",
          "subject": "ACC",
          "title": "Advanced Accounting"
       },
       {
          "capacity": 20,
          "code": "3851",
          "credits": 3,
          "department": "Accounting",
          "display": {
             "dow": "TR",
             "end": "03:00pm",
             "start": "01:45pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "15:00",
          "id": "34327",
          "instructor": "Sidney J. Mehl",
          "location": "LEX215 LX313",
          "section": "M",
          "start": "13:45",
          "subject": "ACC",
          "title": "Financial Statement Analysis"
       },
       {
          "capacity": 30,
          "code": "1050",
          "credits": 3,
          "department": "Art",
          "display": {
             "dow": "MW",
             "end": "10:15am",
             "start": "09:00am"
          },
          "dow": [
             1,
             3
          ],
          "end": "10:15",
          "id": "34239",
          "instructor": "Margaret Samu",
          "location": "LEX215 ",
          "section": "A",
          "start": "9:00",
          "subject": "ARTS",
          "title": "Introduction to Art"
       },
       {
          "capacity": 30,
          "code": "1050",
          "credits": 3,
          "department": "Art",
          "display": {
             "dow": "MW",
             "end": "01:10pm",
             "start": "11:55am"
          },
          "dow": [
             1,
             3
          ],
          "end": "13:10",
          "id": "34549",
          "instructor": "Miriam Weinberg",
          "location": "LEX215 ",
          "section": "C",
          "start": "11:55",
          "subject": "ARTS",
          "title": "Introduction to Art"
       },
       {
          "capacity": 20,
          "code": "1050H",
          "credits": 3,
          "department": "Art",
          "display": {
             "dow": "TR",
             "end": "11:45am",
             "start": "10:30am"
          },
          "dow": [
             2,
             4
          ],
          "end": "11:45",
          "id": "34548",
          "instructor": "Marnin Young",
          "location": "LEX215 ",
          "section": "K",
          "start": "10:30",
          "subject": "ARTS",
          "title": "Introduction to Art"
       },
       {
          "capacity": 30,
          "code": "1051",
          "credits": 3,
          "department": "Art",
          "display": {
             "dow": "MW",
             "end": "02:40pm",
             "start": "01:25pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "14:40",
          "id": "34195",
          "instructor": "Melanie Hanan",
          "location": "LEX215 LX717",
          "section": "D1",
          "start": "13:25",
          "subject": "ARTS",
          "title": "History of Art I"
       },
       {
          "capacity": 30,
          "code": "1052",
          "credits": 3,
          "department": "Art",
          "display": {
             "dow": "TR",
             "end": "01:15pm",
             "start": "12:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "13:15",
          "id": "34194",
          "instructor": "Marnin Young",
          "location": "LEX215 LX717",
          "section": "L",
          "start": "12:00",
          "subject": "ARTS",
          "title": "History of Art II"
       },
       {
          "capacity": 28,
          "code": "1350",
          "credits": 3,
          "department": "Art",
          "display": {
             "dow": "MW",
             "end": "11:40am",
             "start": "10:25am"
          },
          "dow": [
             1,
             3
          ],
          "end": "11:40",
          "id": "35504",
          "instructor": "Jacob Wisse",
          "location": "TBA",
          "section": "B",
          "start": "10:25",
          "subject": "ARTS",
          "title": "Baroque Art"
       },
       {
          "capacity": 23,
          "code": "1432",
          "credits": 3,
          "department": "Art",
          "display": {
             "dow": "TR",
             "end": "03:00pm",
             "start": "01:45pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "15:00",
          "id": "35503",
          "instructor": "Marnin Young",
          "location": "TBA",
          "section": "M",
          "start": "13:45",
          "subject": "ARTS",
          "title": "Late-Nineteenth Century Art"
       },
       {
          "capacity": 15,
          "code": "1637H",
          "credits": 3,
          "department": "Art",
          "display": {
             "dow": "F",
             "end": "12:00pm",
             "start": "09:30am"
          },
          "dow": [
             5
          ],
          "end": "12:00",
          "id": "34372",
          "instructor": "John Kriskiewicz",
          "location": "LEX215 LX717",
          "section": "FRI",
          "start": "9:30",
          "subject": "ARTS",
          "title": "NYC Architecture &Urban Design"
       },
       {
          "capacity": 25,
          "code": "1750",
          "credits": 3,
          "department": "Art",
          "display": {
             "dow": "M",
             "end": "05:55pm",
             "start": "04:40pm"
          },
          "dow": [
             1
          ],
          "end": "17:55",
          "id": "35505",
          "instructor": "Herb Leventer",
          "location": "TBA",
          "section": "F",
          "start": "16:40",
          "subject": "ARTS",
          "title": "Philosophy of Art"
       },
       {
          "capacity": 25,
          "code": "1750",
          "credits": 3,
          "department": "Art",
          "display": {
             "dow": "W",
             "end": "06:15pm",
             "start": "05:00pm"
          },
          "dow": [
             3
          ],
          "end": "18:15",
          "id": "35505",
          "instructor": "Herb Leventer",
          "location": "TBA",
          "section": "F",
          "start": "17:00",
          "subject": "ARTS",
          "title": "Philosophy of Art"
       },
       {
          "capacity": 23,
          "code": "1948",
          "credits": 3,
          "department": "Art",
          "display": {
             "dow": "T",
             "end": "05:45pm",
             "start": "03:15pm"
          },
          "dow": [
             2
          ],
          "end": "17:45",
          "id": "35506",
          "instructor": "Elizabeth Anne Eisenberg",
          "location": "TBA",
          "section": "NPT",
          "start": "15:15",
          "subject": "ARTS",
          "title": "The Image of Jerusalem"
       },
       {
          "capacity": 12,
          "code": "2201",
          "credits": 3,
          "department": "Art",
          "display": {
             "dow": "TR",
             "end": "10:15am",
             "start": "09:00am"
          },
          "dow": [
             2,
             4
          ],
          "end": "10:15",
          "id": "34216",
          "instructor": "Mary Therese Creede",
          "location": "LEX215 ",
          "section": "J",
          "start": "9:00",
          "subject": "ARTS",
          "title": "Principles of Design"
       },
       {
          "capacity": 12,
          "code": "2301",
          "credits": 3,
          "department": "Art",
          "display": {
             "dow": "TR",
             "end": "03:00pm",
             "start": "01:45pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "15:00",
          "id": "34167",
          "instructor": "John Jerard",
          "location": "LEX215 LX803",
          "section": "M",
          "start": "13:45",
          "subject": "ARTS",
          "title": "Principles of Drawing"
       },
       {
          "capacity": 6,
          "code": "2301Y",
          "credits": 0,
          "department": "Art",
          "display": {
             "dow": "T",
             "end": "04:30pm",
             "start": "03:15pm"
          },
          "dow": [
             2
          ],
          "end": "16:30",
          "id": "34503",
          "instructor": "John Jerard",
          "location": "LEX215 LX803",
          "section": "NT",
          "start": "15:15",
          "subject": "ARTS",
          "title": "Principles of Drawing Lab"
       },
       {
          "capacity": 12,
          "code": "2511",
          "credits": 3,
          "department": "Art",
          "display": {
             "dow": "MW",
             "end": "11:40am",
             "start": "10:25am"
          },
          "dow": [
             1,
             3
          ],
          "end": "11:40",
          "id": "34217",
          "instructor": "Mary Therese Creede",
          "location": "LEX215 LX804",
          "section": "B",
          "start": "10:25",
          "subject": "ARTS",
          "title": "Beginning Painting"
       },
       {
          "capacity": 6,
          "code": "2511Y",
          "credits": 0,
          "department": "Art",
          "display": {
             "dow": "W",
             "end": "10:15am",
             "start": "09:00am"
          },
          "dow": [
             3
          ],
          "end": "10:15",
          "id": "34505",
          "instructor": "Mary Therese Creede",
          "location": "LEX215 LX804",
          "section": "AW",
          "start": "9:00",
          "subject": "ARTS",
          "title": "Beginning Painting Lab"
       },
       {
          "capacity": 6,
          "code": "2511Y",
          "credits": 0,
          "department": "Art",
          "display": {
             "dow": "M",
             "end": "01:10pm",
             "start": "11:55am"
          },
          "dow": [
             1
          ],
          "end": "13:10",
          "id": "34506",
          "instructor": "Mary Therese Creede",
          "location": "LEX215 LX804",
          "section": "CM",
          "start": "11:55",
          "subject": "ARTS",
          "title": "Beginning Painting Lab"
       },
       {
          "capacity": 12,
          "code": "3009",
          "credits": 3,
          "department": "Art",
          "display": {
             "dow": "MW",
             "end": "10:15am",
             "start": "09:00am"
          },
          "dow": [
             1,
             3
          ],
          "end": "10:15",
          "id": "34286",
          "instructor": "Alexander Rysdon-Moulitsas",
          "location": "LEX215 LX809",
          "section": "A",
          "start": "9:00",
          "subject": "ARTS",
          "title": "Intro Computer Design"
       },
       {
          "capacity": 12,
          "code": "3012",
          "credits": 3,
          "department": "Art",
          "display": {
             "dow": "R",
             "end": "01:00pm",
             "start": "10:30am"
          },
          "dow": [
             4
          ],
          "end": "13:00",
          "id": "34509",
          "instructor": "Terttu Uibopuu",
          "location": "LEX215 LX809",
          "section": "KLR",
          "start": "10:30",
          "subject": "ARTS",
          "title": "Digital Photography"
       },
       {
          "capacity": 14,
          "code": "3014",
          "credits": 3,
          "department": "Art",
          "display": {
             "dow": "MW",
             "end": "11:40am",
             "start": "10:25am"
          },
          "dow": [
             1,
             3
          ],
          "end": "11:40",
          "id": "35494",
          "instructor": "Alexander Rysdon-Moulitsas",
          "location": "TBA",
          "section": "B",
          "start": "10:25",
          "subject": "ARTS",
          "title": "Typography"
       },
       {
          "capacity": 12,
          "code": "3967",
          "credits": 3,
          "department": "Art",
          "display": {
             "dow": "W",
             "end": "07:30pm",
             "start": "05:00pm"
          },
          "dow": [
             3
          ],
          "end": "19:30",
          "id": "34510",
          "instructor": "Barbara L Suhr",
          "location": "LEX215 LX801",
          "section": "FGW",
          "start": "17:00",
          "subject": "ARTS",
          "title": "Topics: Book Arts"
       },
       {
          "capacity": 15,
          "code": "4974",
          "credits": 0,
          "department": "Art",
          "display": {
             "dow": "W",
             "end": "03:30pm",
             "start": "02:45pm"
          },
          "dow": [
             3
          ],
          "end": "15:30",
          "id": "34613",
          "instructor": "Mary Therese Creede",
          "location": "TBA",
          "section": "CLB",
          "start": "14:45",
          "subject": "ARTS",
          "title": "Pre-Senior Project"
       },
       {
          "capacity": 10,
          "code": "4975",
          "credits": 1,
          "department": "Art",
          "display": {
             "dow": "",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "34511",
          "instructor": "Mary Therese Creede",
          "location": "TBA",
          "section": "TB1",
          "start": "",
          "subject": "ARTS",
          "title": "Senior Project"
       },
       {
          "capacity": 32,
          "code": "1082",
          "credits": 3,
          "department": "Bible",
          "display": {
             "dow": "TR",
             "end": "01:15pm",
             "start": "12:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "13:15",
          "id": "35541",
          "instructor": "Nechama Esther Price",
          "location": "TBA",
          "section": "L",
          "start": "12:00",
          "subject": "BIBL",
          "title": "Intro to Exegesis II"
       },
       {
          "capacity": 20,
          "code": "1083H",
          "credits": 3,
          "department": "Bible",
          "display": {
             "dow": "MW",
             "end": "01:10pm",
             "start": "11:55am"
          },
          "dow": [
             1,
             3
          ],
          "end": "13:10",
          "id": "35539",
          "instructor": "Michelle J. Levine",
          "location": "TBA",
          "section": "C",
          "start": "11:55",
          "subject": "BIBL",
          "title": "Topics in Exegesis: Sforno"
       },
       {
          "capacity": 30,
          "code": "1085",
          "credits": 3,
          "department": "Bible",
          "display": {
             "dow": "TR",
             "end": "10:15am",
             "start": "09:00am"
          },
          "dow": [
             2,
             4
          ],
          "end": "10:15",
          "id": "35540",
          "instructor": "Naomi Cohen Grunhaus",
          "location": "TBA",
          "section": "J",
          "start": "9:00",
          "subject": "BIBL",
          "title": "Methods of Peshat: Biblical Stylistics, building blocks of perushim"
       },
       {
          "capacity": 30,
          "code": "1086",
          "credits": 3,
          "department": "Bible",
          "display": {
             "dow": "TR",
             "end": "11:45am",
             "start": "10:30am"
          },
          "dow": [
             2,
             4
          ],
          "end": "11:45",
          "id": "35542",
          "instructor": "Smadar Rosensweig",
          "location": "TBA",
          "section": "K",
          "start": "10:30",
          "subject": "BIBL",
          "title": "Tps in Exegesis: N. Leibowitz"
       },
       {
          "capacity": 25,
          "code": "1088H",
          "credits": 3,
          "department": "Bible",
          "display": {
             "dow": "MW",
             "end": "11:40am",
             "start": "10:25am"
          },
          "dow": [
             1,
             3
          ],
          "end": "11:40",
          "id": "34470",
          "instructor": "Mordechai Z. Cohen, Sara Enna Twersky ",
          "location": "SCW 619",
          "section": "B",
          "start": "10:25",
          "subject": "BIBL",
          "title": "Biblical Exegetes II"
       },
       {
          "capacity": 30,
          "code": "1117",
          "credits": 3,
          "department": "Bible",
          "display": {
             "dow": "TR",
             "end": "03:00pm",
             "start": "01:45pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "15:00",
          "id": "35543",
          "instructor": "Deena S. Rabinovich",
          "location": "TBA",
          "section": "M",
          "start": "13:45",
          "subject": "BIBL",
          "title": "Weekly Portion"
       },
       {
          "capacity": 30,
          "code": "1160",
          "credits": 3,
          "department": "Bible",
          "display": {
             "dow": "TR",
             "end": "01:15pm",
             "start": "12:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "13:15",
          "id": "34413",
          "instructor": "Smadar Rosensweig",
          "location": "SCW 606",
          "section": "L",
          "start": "12:00",
          "subject": "BIBL",
          "title": "Women in Bible & Rabbinic Lit"
       },
       {
          "capacity": 25,
          "code": "1171",
          "credits": 3,
          "department": "Bible",
          "display": {
             "dow": "TR",
             "end": "11:45am",
             "start": "10:30am"
          },
          "dow": [
             2,
             4
          ],
          "end": "11:45",
          "id": "34234",
          "instructor": "Shoshana Schechter",
          "location": "SCW 406",
          "section": "K",
          "start": "10:30",
          "subject": "BIBL",
          "title": "Personal Devlop in the Bible I"
       },
       {
          "capacity": 32,
          "code": "1204",
          "credits": 3,
          "department": "Bible",
          "display": {
             "dow": "TR",
             "end": "01:15pm",
             "start": "12:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "13:15",
          "id": "35544",
          "instructor": "Shoshana Schechter",
          "location": "TBA",
          "section": "L",
          "start": "12:00",
          "subject": "BIBL",
          "title": "Book of Genesis"
       },
       {
          "capacity": 30,
          "code": "1214",
          "credits": 2,
          "department": "Bible",
          "display": {
             "dow": "M",
             "end": "06:10pm",
             "start": "04:30pm"
          },
          "dow": [
             1
          ],
          "end": "18:10",
          "id": "35545",
          "instructor": "Moshe M. Tessone",
          "location": "TBA",
          "section": "FGM",
          "start": "16:30",
          "subject": "BIBL",
          "title": "Topics in Genesis"
       },
       {
          "capacity": 32,
          "code": "1303",
          "credits": 3,
          "department": "Bible",
          "display": {
             "dow": "TR",
             "end": "10:15am",
             "start": "09:00am"
          },
          "dow": [
             2,
             4
          ],
          "end": "10:15",
          "id": "34340",
          "instructor": "Mindy F. Eisenman",
          "location": "SCW 401",
          "section": "J",
          "start": "9:00",
          "subject": "BIBL",
          "title": "Book of Exodus I"
       },
       {
          "capacity": 32,
          "code": "1303",
          "credits": 3,
          "department": "Bible",
          "display": {
             "dow": "TR",
             "end": "11:45am",
             "start": "10:30am"
          },
          "dow": [
             2,
             4
          ],
          "end": "11:45",
          "id": "34246",
          "instructor": "Mindy F. Eisenman",
          "location": "SCW 401",
          "section": "K",
          "start": "10:30",
          "subject": "BIBL",
          "title": "Book of Exodus I"
       },
       {
          "capacity": 30,
          "code": "1305",
          "credits": 3,
          "department": "Bible",
          "display": {
             "dow": "TR",
             "end": "11:45am",
             "start": "10:30am"
          },
          "dow": [
             2,
             4
          ],
          "end": "11:45",
          "id": "34213",
          "instructor": "Elozor Preil",
          "location": "SCW 518",
          "section": "K",
          "start": "10:30",
          "subject": "BIBL",
          "title": "Book of Exodus I"
       },
       {
          "capacity": 30,
          "code": "1407",
          "credits": 3,
          "department": "Bible",
          "display": {
             "dow": "TR",
             "end": "01:15pm",
             "start": "12:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "13:15",
          "id": "34476",
          "instructor": "Deena S. Rabinovich",
          "location": "SCW 601",
          "section": "L",
          "start": "12:00",
          "subject": "BIBL",
          "title": "Book of Leviticus"
       },
       {
          "capacity": 30,
          "code": "1411",
          "credits": 3,
          "department": "Bible",
          "display": {
             "dow": "MW",
             "end": "11:40am",
             "start": "10:25am"
          },
          "dow": [
             1,
             3
          ],
          "end": "11:40",
          "id": "35546",
          "instructor": "Moriah Rachel Rosensweig",
          "location": "TBA",
          "section": "B",
          "start": "10:25",
          "subject": "BIBL",
          "title": "Topics in Leviticus"
       },
       {
          "capacity": 33,
          "code": "1512",
          "credits": 3,
          "department": "Bible",
          "display": {
             "dow": "MW",
             "end": "11:40am",
             "start": "10:25am"
          },
          "dow": [
             1,
             3
          ],
          "end": "11:40",
          "id": "35547",
          "instructor": "Gideon I. Shloush",
          "location": "TBA",
          "section": "B",
          "start": "10:25",
          "subject": "BIBL",
          "title": "Topics in Numbers"
       },
       {
          "capacity": 33,
          "code": "1609",
          "credits": 2,
          "department": "Bible",
          "display": {
             "dow": "TR",
             "end": "02:15pm",
             "start": "01:25pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "14:15",
          "id": "35548",
          "instructor": "Shoshana Schechter",
          "location": "TBA",
          "section": "M",
          "start": "13:25",
          "subject": "BIBL",
          "title": "Book of Deuteronomy"
       },
       {
          "capacity": 33,
          "code": "2116",
          "credits": 3,
          "department": "Bible",
          "display": {
             "dow": "M",
             "end": "04:25pm",
             "start": "03:10pm"
          },
          "dow": [
             1
          ],
          "end": "16:25",
          "id": "34422",
          "instructor": "Ronit Gross",
          "location": "SCW 718",
          "section": "E",
          "start": "15:10",
          "subject": "BIBL",
          "title": "Book of Joshua"
       },
       {
          "capacity": 33,
          "code": "2116",
          "credits": 3,
          "department": "Bible",
          "display": {
             "dow": "W",
             "end": "04:50pm",
             "start": "03:35pm"
          },
          "dow": [
             3
          ],
          "end": "16:50",
          "id": "34422",
          "instructor": "Ronit Gross",
          "location": "SCW 718",
          "section": "E",
          "start": "15:35",
          "subject": "BIBL",
          "title": "Book of Joshua"
       },
       {
          "capacity": 32,
          "code": "2121",
          "credits": 3,
          "department": "Bible",
          "display": {
             "dow": "TR",
             "end": "04:30pm",
             "start": "03:15pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "16:30",
          "id": "35549",
          "instructor": "Ian Shaffer",
          "location": "TBA",
          "section": "N",
          "start": "15:15",
          "subject": "BIBL",
          "title": "Judges"
       },
       {
          "capacity": 30,
          "code": "2149",
          "credits": 3,
          "department": "Bible",
          "display": {
             "dow": "TR",
             "end": "05:55pm",
             "start": "04:40pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "17:55",
          "id": "34481",
          "instructor": "Ian Shaffer",
          "location": "SCW 806",
          "section": "P",
          "start": "16:40",
          "subject": "BIBL",
          "title": "Samuel I, Part II"
       },
       {
          "capacity": 30,
          "code": "2152",
          "credits": 3,
          "department": "Bible",
          "display": {
             "dow": "TR",
             "end": "10:15am",
             "start": "09:00am"
          },
          "dow": [
             2,
             4
          ],
          "end": "10:15",
          "id": "34251",
          "instructor": "Elozor Preil",
          "location": "SCW 518",
          "section": "J",
          "start": "9:00",
          "subject": "BIBL",
          "title": "Samuel I - Part I"
       },
       {
          "capacity": 30,
          "code": "2156",
          "credits": 3,
          "department": "Bible",
          "display": {
             "dow": "TR",
             "end": "03:00pm",
             "start": "01:45pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "15:00",
          "id": "34268",
          "instructor": "Smadar Rosensweig",
          "location": "SCW 606",
          "section": "M",
          "start": "13:45",
          "subject": "BIBL",
          "title": "Samuel I"
       },
       {
          "capacity": 30,
          "code": "2506",
          "credits": 3,
          "department": "Bible",
          "display": {
             "dow": "TR",
             "end": "11:45am",
             "start": "10:30am"
          },
          "dow": [
             2,
             4
          ],
          "end": "11:45",
          "id": "35550",
          "instructor": "Naomi Cohen Grunhaus",
          "location": "TBA",
          "section": "K",
          "start": "10:30",
          "subject": "BIBL",
          "title": "Isaiah: Geulah and the Messianic Era. Use to fulfil JPHIL requirement."
       },
       {
          "capacity": 30,
          "code": "2555",
          "credits": 3,
          "department": "Bible",
          "display": {
             "dow": "TR",
             "end": "01:15pm",
             "start": "12:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "13:15",
          "id": "35551",
          "instructor": "Naomi Cohen Grunhaus",
          "location": "TBA",
          "section": "L",
          "start": "12:00",
          "subject": "BIBL",
          "title": "Jeremiah. Confronting the false prophets. U.INT. Use to fulfill JPHIL"
       },
       {
          "capacity": 33,
          "code": "2653",
          "credits": 3,
          "department": "Bible",
          "display": {
             "dow": "MW",
             "end": "02:40pm",
             "start": "01:25pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "14:40",
          "id": "34485",
          "instructor": "Ronit Gross",
          "location": "SCW 718",
          "section": "D1",
          "start": "13:25",
          "subject": "BIBL",
          "title": "Later Prophets: Yonah"
       },
       {
          "capacity": 33,
          "code": "3208",
          "credits": 3,
          "department": "Bible",
          "display": {
             "dow": "MW",
             "end": "01:10pm",
             "start": "11:55am"
          },
          "dow": [
             1,
             3
          ],
          "end": "13:10",
          "id": "35555",
          "instructor": "Gideon I. Shloush",
          "location": "TBA",
          "section": "C",
          "start": "11:55",
          "subject": "BIBL",
          "title": "Psalms II"
       },
       {
          "capacity": 30,
          "code": "3257",
          "credits": 3,
          "department": "Bible",
          "display": {
             "dow": "MW",
             "end": "02:40pm",
             "start": "01:25pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "14:40",
          "id": "35558",
          "instructor": "Michelle J. Levine",
          "location": "TBA",
          "section": "D1",
          "start": "13:25",
          "subject": "BIBL",
          "title": "Proverbs"
       },
       {
          "capacity": 30,
          "code": "3710",
          "credits": 3,
          "department": "Bible",
          "display": {
             "dow": "MW",
             "end": "10:15am",
             "start": "09:00am"
          },
          "dow": [
             1,
             3
          ],
          "end": "10:15",
          "id": "35559",
          "instructor": "Moriah Rachel Rosensweig",
          "location": "TBA",
          "section": "A",
          "start": "9:00",
          "subject": "BIBL",
          "title": "Esther"
       },
       {
          "capacity": 30,
          "code": "3807",
          "credits": 3,
          "department": "Bible",
          "display": {
             "dow": "M",
             "end": "04:25pm",
             "start": "03:10pm"
          },
          "dow": [
             1
          ],
          "end": "16:25",
          "id": "35560",
          "instructor": "Michelle J. Levine",
          "location": "TBA",
          "section": "E",
          "start": "15:10",
          "subject": "BIBL",
          "title": "Daniel"
       },
       {
          "capacity": 30,
          "code": "3807",
          "credits": 3,
          "department": "Bible",
          "display": {
             "dow": "W",
             "end": "04:50pm",
             "start": "03:35pm"
          },
          "dow": [
             3
          ],
          "end": "16:50",
          "id": "35560",
          "instructor": "Michelle J. Levine",
          "location": "TBA",
          "section": "E",
          "start": "15:35",
          "subject": "BIBL",
          "title": "Daniel"
       },
       {
          "capacity": 33,
          "code": "4002",
          "credits": 3,
          "department": "Bible",
          "display": {
             "dow": "MW",
             "end": "11:40am",
             "start": "10:25am"
          },
          "dow": [
             1,
             3
          ],
          "end": "11:40",
          "id": "34416",
          "instructor": "Ronit Gross",
          "location": "SCW 718",
          "section": "B",
          "start": "10:25",
          "subject": "BIBL",
          "title": "Biblical Narrative"
       },
       {
          "capacity": 0,
          "code": "ELEC",
          "credits": 0.5,
          "department": "Bible",
          "display": {
             "dow": "TBA",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "34852",
          "instructor": "TBA",
          "location": "TBA",
          "section": "IP1",
          "start": "",
          "subject": "BIBL",
          "title": "Elective(s)"
       },
       {
          "capacity": 51,
          "code": "1005C",
          "credits": 4,
          "department": "Biology",
          "display": {
             "dow": "MW",
             "end": "11:40am",
             "start": "10:25am"
          },
          "dow": [
             1,
             3
          ],
          "end": "11:40",
          "id": "34295",
          "instructor": "Richard Bruce Weiss",
          "location": "SCW 418",
          "section": "B",
          "start": "10:25",
          "subject": "BIOL",
          "title": "Human Biology"
       },
       {
          "capacity": 17,
          "code": "1005Y",
          "credits": 0,
          "department": "Biology",
          "display": {
             "dow": "W",
             "end": "10:20am",
             "start": "08:40am"
          },
          "dow": [
             3
          ],
          "end": "10:20",
          "id": "34296",
          "instructor": "Richard Bruce Weiss",
          "location": "SCW LB441",
          "section": "AW",
          "start": "8:40",
          "subject": "BIOL",
          "title": "Human Biology Lab"
       },
       {
          "capacity": 17,
          "code": "1005Y",
          "credits": 0,
          "department": "Biology",
          "display": {
             "dow": "W",
             "end": "03:10pm",
             "start": "01:30pm"
          },
          "dow": [
             3
          ],
          "end": "15:10",
          "id": "34297",
          "instructor": "Bill R Bassman",
          "location": "SCW LB441",
          "section": "DW",
          "start": "13:30",
          "subject": "BIOL",
          "title": "Human Biology Lab"
       },
       {
          "capacity": 17,
          "code": "1005Y",
          "credits": 0,
          "department": "Biology",
          "display": {
             "dow": "T",
             "end": "04:50pm",
             "start": "03:10pm"
          },
          "dow": [
             2
          ],
          "end": "16:50",
          "id": "34298",
          "instructor": "Bill R Bassman",
          "location": "SCW LB441",
          "section": "NPT",
          "start": "15:10",
          "subject": "BIOL",
          "title": "Human Biology Lab"
       },
       {
          "capacity": 50,
          "code": "1011C",
          "credits": 4,
          "department": "Biology",
          "display": {
             "dow": "MW",
             "end": "11:40am",
             "start": "10:25am"
          },
          "dow": [
             1,
             3
          ],
          "end": "11:40",
          "id": "34342",
          "instructor": "Brenda Loewy",
          "location": "SCW KOCH",
          "section": "B",
          "start": "10:25",
          "subject": "BIOL",
          "title": "Biology Principles"
       },
       {
          "capacity": 45,
          "code": "1011C",
          "credits": 4,
          "department": "Biology",
          "display": {
             "dow": "MW",
             "end": "02:40pm",
             "start": "01:25pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "14:40",
          "id": "34343",
          "instructor": "Brenda Loewy",
          "location": "SCW KOCH",
          "section": "D1",
          "start": "13:25",
          "subject": "BIOL",
          "title": "Biology Principles"
       },
       {
          "capacity": 18,
          "code": "1011H",
          "credits": 4,
          "department": "Biology",
          "display": {
             "dow": "TR",
             "end": "01:15pm",
             "start": "12:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "13:15",
          "id": "34345",
          "instructor": "Marina Kaufman Holz",
          "location": "SCW 619",
          "section": "L",
          "start": "12:00",
          "subject": "BIOL",
          "title": "Biology Principles"
       },
       {
          "capacity": 19,
          "code": "1011Y",
          "credits": 0,
          "department": "Biology",
          "display": {
             "dow": "M",
             "end": "06:00pm",
             "start": "03:30pm"
          },
          "dow": [
             1
          ],
          "end": "18:00",
          "id": "34346",
          "instructor": "Bill R Bassman",
          "location": "SCW LB444",
          "section": "EFM",
          "start": "15:30",
          "subject": "BIOL",
          "title": "Bio Principles Lab"
       },
       {
          "capacity": 18,
          "code": "1011Y",
          "credits": 0,
          "department": "Biology",
          "display": {
             "dow": "W",
             "end": "06:05pm",
             "start": "03:35pm"
          },
          "dow": [
             3
          ],
          "end": "18:05",
          "id": "34347",
          "instructor": "Bill R Bassman",
          "location": "SCW LB444",
          "section": "EFW",
          "start": "15:35",
          "subject": "BIOL",
          "title": "Bio Principles Lab"
       },
       {
          "capacity": 0,
          "code": "1011Y",
          "credits": 1,
          "department": "Biology",
          "display": {
             "dow": "M",
             "end": "06:00pm",
             "start": "03:30pm"
          },
          "dow": [
             1
          ],
          "end": "18:00",
          "id": "36562",
          "instructor": "Bill R Bassman",
          "location": "TBA",
          "section": "EM1",
          "start": "15:30",
          "subject": "BIOL",
          "title": "Bio Principles Lab"
       },
       {
          "capacity": 0,
          "code": "1011Y",
          "credits": 1,
          "department": "Biology",
          "display": {
             "dow": "W",
             "end": "06:05pm",
             "start": "03:35pm"
          },
          "dow": [
             3
          ],
          "end": "18:05",
          "id": "36114",
          "instructor": "Bill R Bassman",
          "location": "TBA",
          "section": "EW1",
          "start": "15:35",
          "subject": "BIOL",
          "title": "Bio Principles Lab"
       },
       {
          "capacity": 0,
          "code": "1011Y",
          "credits": 1,
          "department": "Biology",
          "display": {
             "dow": "F",
             "end": "12:00pm",
             "start": "09:30am"
          },
          "dow": [
             5
          ],
          "end": "12:00",
          "id": "36567",
          "instructor": "Mana Mirjany",
          "location": "TBA",
          "section": "FR1",
          "start": "9:30",
          "subject": "BIOL",
          "title": "Bio Principles Lab"
       },
       {
          "capacity": 18,
          "code": "1011Y",
          "credits": 0,
          "department": "Biology",
          "display": {
             "dow": "F",
             "end": "12:00pm",
             "start": "09:30am"
          },
          "dow": [
             5
          ],
          "end": "12:00",
          "id": "34348",
          "instructor": "Mana Mirjany",
          "location": "SCW LB444",
          "section": "FRI",
          "start": "9:30",
          "subject": "BIOL",
          "title": "Bio Principles Lab"
       },
       {
          "capacity": 0,
          "code": "1011Y",
          "credits": 1,
          "department": "Biology",
          "display": {
             "dow": "R",
             "end": "11:45am",
             "start": "09:15am"
          },
          "dow": [
             4
          ],
          "end": "11:45",
          "id": "36564",
          "instructor": "Rafael M. Cuesta-Sanchez",
          "location": "TBA",
          "section": "JK1",
          "start": "9:15",
          "subject": "BIOL",
          "title": "Bio Principles Lab"
       },
       {
          "capacity": 17,
          "code": "1011Y",
          "credits": 0,
          "department": "Biology",
          "display": {
             "dow": "R",
             "end": "11:45am",
             "start": "09:15am"
          },
          "dow": [
             4
          ],
          "end": "11:45",
          "id": "34349",
          "instructor": "Rafael M. Cuesta-Sanchez",
          "location": "SCW LB444",
          "section": "JKR",
          "start": "9:15",
          "subject": "BIOL",
          "title": "Bio Principles Lab"
       },
       {
          "capacity": 20,
          "code": "1011Y",
          "credits": 0,
          "department": "Biology",
          "display": {
             "dow": "T",
             "end": "03:00pm",
             "start": "12:30pm"
          },
          "dow": [
             2
          ],
          "end": "15:00",
          "id": "34350",
          "instructor": "Bill R Bassman",
          "location": "SCW LB444",
          "section": "LMT",
          "start": "12:30",
          "subject": "BIOL",
          "title": "Bio Principles Lab"
       },
       {
          "capacity": 20,
          "code": "1011Y",
          "credits": 0,
          "department": "Biology",
          "display": {
             "dow": "R",
             "end": "04:15pm",
             "start": "01:45pm"
          },
          "dow": [
             4
          ],
          "end": "16:15",
          "id": "34351",
          "instructor": "TBA",
          "location": "SCW LB444",
          "section": "MNR",
          "start": "13:45",
          "subject": "BIOL",
          "title": "Bio Principles Lab"
       },
       {
          "capacity": 30,
          "code": "1376",
          "credits": 3,
          "department": "Biology",
          "display": {
             "dow": "TR",
             "end": "10:15am",
             "start": "09:00am"
          },
          "dow": [
             2,
             4
          ],
          "end": "10:15",
          "id": "35495",
          "instructor": "Daniel Lim",
          "location": "TBA",
          "section": "J",
          "start": "9:00",
          "subject": "BIOL",
          "title": "Biochemistry Lecture"
       },
       {
          "capacity": 43,
          "code": "2730C",
          "credits": 4,
          "department": "Biology",
          "display": {
             "dow": "TR",
             "end": "10:15am",
             "start": "09:00am"
          },
          "dow": [
             2,
             4
          ],
          "end": "10:15",
          "id": "34168",
          "instructor": "Monica Smiddy",
          "location": "SCW ",
          "section": "J",
          "start": "9:00",
          "subject": "BIOL",
          "title": "Human Anatomy"
       },
       {
          "capacity": 12,
          "code": "2730Y",
          "credits": 0,
          "department": "Biology",
          "display": {
             "dow": "MW",
             "end": "05:20pm",
             "start": "03:40pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "17:20",
          "id": "34324",
          "instructor": "Jeffrey R. Mollin",
          "location": "SCW LB447",
          "section": "EF",
          "start": "15:40",
          "subject": "BIOL",
          "title": "Human Anatomy Laboratory"
       },
       {
          "capacity": 19,
          "code": "2730Y",
          "credits": 0,
          "department": "Biology",
          "display": {
             "dow": "TR",
             "end": "01:35pm",
             "start": "11:55am"
          },
          "dow": [
             2,
             4
          ],
          "end": "13:35",
          "id": "34169",
          "instructor": "Jeffrey R. Mollin",
          "location": "SCW LB447",
          "section": "L",
          "start": "11:55",
          "subject": "BIOL",
          "title": "Human Anatomy Laboratory"
       },
       {
          "capacity": 12,
          "code": "2730Y",
          "credits": 0,
          "department": "Biology",
          "display": {
             "dow": "TR",
             "end": "04:55pm",
             "start": "03:15pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "16:55",
          "id": "34170",
          "instructor": "Jeffrey R. Mollin",
          "location": "SCW LB447",
          "section": "NP",
          "start": "15:15",
          "subject": "BIOL",
          "title": "Human Anatomy Laboratory"
       },
       {
          "capacity": 13,
          "code": "3207C",
          "credits": 4,
          "department": "Biology",
          "display": {
             "dow": "TR",
             "end": "11:45am",
             "start": "10:30am"
          },
          "dow": [
             2,
             4
          ],
          "end": "11:45",
          "id": "35496",
          "instructor": "Marina Kaufman Holz",
          "location": "TBA",
          "section": "K",
          "start": "10:30",
          "subject": "BIOL",
          "title": "Cell Biology"
       },
       {
          "capacity": 27,
          "code": "3207C",
          "credits": 4,
          "department": "Biology",
          "display": {
             "dow": "TR",
             "end": "01:15pm",
             "start": "12:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "13:15",
          "id": "34308",
          "instructor": "Margarita Vigodner",
          "location": "SCW 518",
          "section": "L",
          "start": "12:00",
          "subject": "BIOL",
          "title": "Cell Biology"
       },
       {
          "capacity": 20,
          "code": "3207Y",
          "credits": 0,
          "department": "Biology",
          "display": {
             "dow": "R",
             "end": "04:15pm",
             "start": "01:45pm"
          },
          "dow": [
             4
          ],
          "end": "16:15",
          "id": "34319",
          "instructor": "Anna Alayev",
          "location": "SCW LB343",
          "section": "MNR",
          "start": "13:45",
          "subject": "BIOL",
          "title": "Cell Biology Lab"
       },
       {
          "capacity": 20,
          "code": "3207Y",
          "credits": 0,
          "department": "Biology",
          "display": {
             "dow": "T",
             "end": "04:15pm",
             "start": "01:45pm"
          },
          "dow": [
             2
          ],
          "end": "16:15",
          "id": "34318",
          "instructor": "Margarita Vigodner",
          "location": "SCW LB343",
          "section": "MNT",
          "start": "13:45",
          "subject": "BIOL",
          "title": "Cell Biology Lab"
       },
       {
          "capacity": 30,
          "code": "3221",
          "credits": 3,
          "department": "Biology",
          "display": {
             "dow": "M",
             "end": "06:00pm",
             "start": "03:30pm"
          },
          "dow": [
             1
          ],
          "end": "18:00",
          "id": "34299",
          "instructor": "Raizy Weinreb",
          "location": "SCW 601",
          "section": "EFM",
          "start": "15:30",
          "subject": "BIOL",
          "title": "Nutrition"
       },
       {
          "capacity": 20,
          "code": "3230C",
          "credits": 4,
          "department": "Biology",
          "display": {
             "dow": "MW",
             "end": "10:15am",
             "start": "09:00am"
          },
          "dow": [
             1,
             3
          ],
          "end": "10:15",
          "id": "35499",
          "instructor": "Victoria E Ruiz",
          "location": "TBA",
          "section": "A&C",
          "start": "9:00",
          "subject": "BIOL",
          "title": "Immunology"
       },
       {
          "capacity": 20,
          "code": "3230C",
          "credits": 4,
          "department": "Biology",
          "display": {
             "dow": "MW",
             "end": "01:10pm",
             "start": "11:55am"
          },
          "dow": [
             1,
             3
          ],
          "end": "13:10",
          "id": "35499",
          "instructor": "Victoria E Ruiz",
          "location": "TBA",
          "section": "A&C",
          "start": "11:55",
          "subject": "BIOL",
          "title": "Immunology"
       },
       {
          "capacity": 40,
          "code": "3241",
          "credits": 2,
          "department": "Biology",
          "display": {
             "dow": "MW",
             "end": "12:45pm",
             "start": "11:55am"
          },
          "dow": [
             1,
             3
          ],
          "end": "12:45",
          "id": "34272",
          "instructor": "Richard Bruce Weiss",
          "location": "SCW 418",
          "section": "C",
          "start": "11:55",
          "subject": "BIOL",
          "title": "Pharmacology"
       },
       {
          "capacity": 40,
          "code": "3513C",
          "credits": 4,
          "department": "Biology",
          "display": {
             "dow": "MW",
             "end": "02:40pm",
             "start": "01:25pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "14:40",
          "id": "34173",
          "instructor": "Harvey J. Babich",
          "location": "SCW 1015",
          "section": "D1",
          "start": "13:25",
          "subject": "BIOL",
          "title": "Genetics"
       },
       {
          "capacity": 20,
          "code": "3513Y",
          "credits": 0,
          "department": "Biology",
          "display": {
             "dow": "MW",
             "end": "10:15am",
             "start": "09:00am"
          },
          "dow": [
             1,
             3
          ],
          "end": "10:15",
          "id": "34287",
          "instructor": "Harvey J. Babich",
          "location": "SCW LB343",
          "section": "A",
          "start": "9:00",
          "subject": "BIOL",
          "title": "Genetics Laboratory"
       },
       {
          "capacity": 20,
          "code": "3513Y",
          "credits": 0,
          "department": "Biology",
          "display": {
             "dow": "MW",
             "end": "11:40am",
             "start": "10:25am"
          },
          "dow": [
             1,
             3
          ],
          "end": "11:40",
          "id": "34225",
          "instructor": "Harvey J. Babich",
          "location": "SCW LB343",
          "section": "B",
          "start": "10:25",
          "subject": "BIOL",
          "title": "Genetics Laboratory"
       },
       {
          "capacity": 59,
          "code": "3728C",
          "credits": 4,
          "department": "Biology",
          "display": {
             "dow": "MW",
             "end": "10:15am",
             "start": "09:00am"
          },
          "dow": [
             1,
             3
          ],
          "end": "10:15",
          "id": "34215",
          "instructor": "Levy Sztark Amar",
          "location": "SCW 1015",
          "section": "A",
          "start": "9:00",
          "subject": "BIOL",
          "title": "Human Physiology"
       },
       {
          "capacity": 19,
          "code": "3728Y",
          "credits": 0,
          "department": "Biology",
          "display": {
             "dow": "MW",
             "end": "02:40pm",
             "start": "01:25pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "14:40",
          "id": "34243",
          "instructor": "Levy Sztark Amar",
          "location": "SCW LB343",
          "section": "D1",
          "start": "13:25",
          "subject": "BIOL",
          "title": "Human Physiology Lab"
       },
       {
          "capacity": 20,
          "code": "3728Y",
          "credits": 0,
          "department": "Biology",
          "display": {
             "dow": "M",
             "end": "04:25pm",
             "start": "03:10pm"
          },
          "dow": [
             1
          ],
          "end": "16:25",
          "id": "34254",
          "instructor": "Levy Sztark Amar",
          "location": "SCW LB343",
          "section": "E",
          "start": "15:10",
          "subject": "BIOL",
          "title": "Human Physiology Lab"
       },
       {
          "capacity": 20,
          "code": "3728Y",
          "credits": 0,
          "department": "Biology",
          "display": {
             "dow": "W",
             "end": "04:50pm",
             "start": "03:35pm"
          },
          "dow": [
             3
          ],
          "end": "16:50",
          "id": "34254",
          "instructor": "Levy Sztark Amar",
          "location": "SCW LB343",
          "section": "E",
          "start": "15:35",
          "subject": "BIOL",
          "title": "Human Physiology Lab"
       },
       {
          "capacity": 20,
          "code": "3728Y",
          "credits": 0,
          "department": "Biology",
          "display": {
             "dow": "M",
             "end": "05:55pm",
             "start": "04:40pm"
          },
          "dow": [
             1
          ],
          "end": "17:55",
          "id": "34244",
          "instructor": "Levy Sztark Amar",
          "location": "SCW LB343",
          "section": "F",
          "start": "16:40",
          "subject": "BIOL",
          "title": "Human Physiology Lab"
       },
       {
          "capacity": 20,
          "code": "3728Y",
          "credits": 0,
          "department": "Biology",
          "display": {
             "dow": "W",
             "end": "06:15pm",
             "start": "05:00pm"
          },
          "dow": [
             3
          ],
          "end": "18:15",
          "id": "34244",
          "instructor": "Levy Sztark Amar",
          "location": "SCW LB343",
          "section": "F",
          "start": "17:00",
          "subject": "BIOL",
          "title": "Human Physiology Lab"
       },
       {
          "capacity": 30,
          "code": "3730H",
          "credits": 2,
          "department": "Biology",
          "display": {
             "dow": "R",
             "end": "04:55pm",
             "start": "03:15pm"
          },
          "dow": [
             4
          ],
          "end": "16:55",
          "id": "35500",
          "instructor": "Margarita Vigodner",
          "location": "TBA",
          "section": "NPR",
          "start": "15:15",
          "subject": "BIOL",
          "title": "Reproductive Biology"
       },
       {
          "capacity": 25,
          "code": "3830R",
          "credits": 3,
          "department": "Biology",
          "display": {
             "dow": "M",
             "end": "04:25pm",
             "start": "03:10pm"
          },
          "dow": [
             1
          ],
          "end": "16:25",
          "id": "34491",
          "instructor": "Amanda Mitchell",
          "location": "LEX215 LX209",
          "section": "E",
          "start": "15:10",
          "subject": "BIOL",
          "title": "Neurobiology"
       },
       {
          "capacity": 25,
          "code": "3830R",
          "credits": 3,
          "department": "Biology",
          "display": {
             "dow": "W",
             "end": "04:50pm",
             "start": "03:35pm"
          },
          "dow": [
             3
          ],
          "end": "16:50",
          "id": "34491",
          "instructor": "Amanda Mitchell",
          "location": "LEX215 LX209",
          "section": "E",
          "start": "15:35",
          "subject": "BIOL",
          "title": "Neurobiology"
       },
       {
          "capacity": 40,
          "code": "4023C",
          "credits": 4,
          "department": "Biology",
          "display": {
             "dow": "MW",
             "end": "11:40am",
             "start": "10:25am"
          },
          "dow": [
             1,
             3
          ],
          "end": "11:40",
          "id": "34344",
          "instructor": "Alyssa Gabrielle Schuck",
          "location": "SCW 1015",
          "section": "B",
          "start": "10:25",
          "subject": "BIOL",
          "title": "Microbiology"
       },
       {
          "capacity": 20,
          "code": "4023Y",
          "credits": 0,
          "department": "Biology",
          "display": {
             "dow": "TR",
             "end": "10:15am",
             "start": "09:00am"
          },
          "dow": [
             2,
             4
          ],
          "end": "10:15",
          "id": "34320",
          "instructor": "Alyssa Gabrielle Schuck",
          "location": "SCW LB343",
          "section": "J",
          "start": "9:00",
          "subject": "BIOL",
          "title": "Microbiology Lab"
       },
       {
          "capacity": 20,
          "code": "4023Y",
          "credits": 0,
          "department": "Biology",
          "display": {
             "dow": "TR",
             "end": "11:45am",
             "start": "10:30am"
          },
          "dow": [
             2,
             4
          ],
          "end": "11:45",
          "id": "34321",
          "instructor": "Alyssa Gabrielle Schuck",
          "location": "SCW LB343",
          "section": "K",
          "start": "10:30",
          "subject": "BIOL",
          "title": "Microbiology Lab"
       },
       {
          "capacity": 30,
          "code": "4930",
          "credits": 2,
          "department": "Biology",
          "display": {
             "dow": "W",
             "end": "08:00pm",
             "start": "06:20pm"
          },
          "dow": [
             3
          ],
          "end": "20:00",
          "id": "35497",
          "instructor": "James Nussbaum",
          "location": "TBA",
          "section": "GHW",
          "start": "18:20",
          "subject": "BIOL",
          "title": "Topics: Kinesiology"
       },
       {
          "capacity": 20,
          "code": "4936",
          "credits": 1,
          "department": "Biology",
          "display": {
             "dow": "T",
             "end": "07:40pm",
             "start": "06:00pm"
          },
          "dow": [
             2
          ],
          "end": "19:40",
          "id": "35498",
          "instructor": "TBA",
          "location": "TBA",
          "section": "QRT",
          "start": "18:00",
          "subject": "BIOL",
          "title": "Topics: Oncology"
       },
       {
          "capacity": 20,
          "code": "1012",
          "credits": 3,
          "department": "Business & Management",
          "display": {
             "dow": "MW",
             "end": "02:40pm",
             "start": "01:25pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "14:40",
          "id": "34435",
          "instructor": "Francine Mellors-Rothenstein",
          "location": "SCW 501",
          "section": "D1",
          "start": "13:25",
          "subject": "BUS",
          "title": "Business Communication"
       },
       {
          "capacity": 0,
          "code": "4741",
          "credits": 0,
          "department": "Business & Management",
          "display": {
             "dow": "",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "34412",
          "instructor": "TBA",
          "location": "TBA",
          "section": "IN1",
          "start": "",
          "subject": "BUS",
          "title": "Business Internship"
       },
       {
          "capacity": 20,
          "code": "1800H",
          "credits": 3,
          "department": "Business Law",
          "display": {
             "dow": "M",
             "end": "07:15pm",
             "start": "06:00pm"
          },
          "dow": [
             1
          ],
          "end": "19:15",
          "id": "34541",
          "instructor": "Moses L. Pava",
          "location": "LEX215 LX313",
          "section": "GM",
          "start": "18:00",
          "subject": "BLW",
          "title": "Business as Human Enterprise"
       },
       {
          "capacity": 35,
          "code": "2021",
          "credits": 3,
          "department": "Business Law",
          "display": {
             "dow": "M",
             "end": "04:25pm",
             "start": "03:10pm"
          },
          "dow": [
             1
          ],
          "end": "16:25",
          "id": "34283",
          "instructor": "Robert Jay Greenberg",
          "location": "LEX215 LX314",
          "section": "E",
          "start": "15:10",
          "subject": "BLW",
          "title": "Ethical & Legal Env Business"
       },
       {
          "capacity": 35,
          "code": "2021",
          "credits": 3,
          "department": "Business Law",
          "display": {
             "dow": "W",
             "end": "04:50pm",
             "start": "03:35pm"
          },
          "dow": [
             3
          ],
          "end": "16:50",
          "id": "34283",
          "instructor": "Robert Jay Greenberg",
          "location": "LEX215 LX314",
          "section": "E",
          "start": "15:35",
          "subject": "BLW",
          "title": "Ethical & Legal Env Business"
       },
       {
          "capacity": 30,
          "code": "2111",
          "credits": 3,
          "department": "Business Law",
          "display": {
             "dow": "MW",
             "end": "02:40pm",
             "start": "01:25pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "14:40",
          "id": "34175",
          "instructor": "Robert Jay Greenberg",
          "location": "LEX215 LX314",
          "section": "D1",
          "start": "13:25",
          "subject": "BLW",
          "title": "Business Law I"
       },
       {
          "capacity": 18,
          "code": "1010C",
          "credits": 4,
          "department": "Chemistry",
          "display": {
             "dow": "TR",
             "end": "11:45am",
             "start": "10:30am"
          },
          "dow": [
             2,
             4
          ],
          "end": "11:45",
          "id": "34256",
          "instructor": "Lora Danley",
          "location": "SCW 501",
          "section": "KLT",
          "start": "10:30",
          "subject": "CHEM",
          "title": "Essentials of General Chem"
       },
       {
          "capacity": 18,
          "code": "1010C",
          "credits": 4,
          "department": "Chemistry",
          "display": {
             "dow": "T",
             "end": "01:30pm",
             "start": "11:50am"
          },
          "dow": [
             2
          ],
          "end": "13:30",
          "id": "34256",
          "instructor": "Lora Danley",
          "location": "SCW LB543",
          "section": "KLT",
          "start": "11:50",
          "subject": "CHEM",
          "title": "Essentials of General Chem"
       },
       {
          "capacity": 80,
          "code": "1045C",
          "credits": 4,
          "department": "Chemistry",
          "display": {
             "dow": "TR",
             "end": "01:15pm",
             "start": "12:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "13:15",
          "id": "34232",
          "instructor": "Chaya Rapp",
          "location": "SCW KOCH",
          "section": "L",
          "start": "12:00",
          "subject": "CHEM",
          "title": "General Chemistry"
       },
       {
          "capacity": 23,
          "code": "1045H",
          "credits": 4,
          "department": "Chemistry",
          "display": {
             "dow": "TR",
             "end": "11:45am",
             "start": "10:30am"
          },
          "dow": [
             2,
             4
          ],
          "end": "11:45",
          "id": "34354",
          "instructor": "Chaya Rapp",
          "location": "SCW 306",
          "section": "K",
          "start": "10:30",
          "subject": "CHEM",
          "title": "General Chemistry"
       },
       {
          "capacity": 0,
          "code": "1045R",
          "credits": 3,
          "department": "Chemistry",
          "display": {
             "dow": "TR",
             "end": "01:15pm",
             "start": "12:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "13:15",
          "id": "36155",
          "instructor": "Chaya Rapp",
          "location": "TBA",
          "section": "L",
          "start": "12:00",
          "subject": "CHEM",
          "title": "General Chemistry Lecture"
       },
       {
          "capacity": 25,
          "code": "1045T",
          "credits": 0,
          "department": "Chemistry",
          "display": {
             "dow": "W",
             "end": "05:50pm",
             "start": "05:00pm"
          },
          "dow": [
             3
          ],
          "end": "17:50",
          "id": "34407",
          "instructor": "TBA",
          "location": "SCW 301",
          "section": "FW",
          "start": "17:00",
          "subject": "CHEM",
          "title": "General Chem Recitation"
       },
       {
          "capacity": 25,
          "code": "1045T",
          "credits": 0,
          "department": "Chemistry",
          "display": {
             "dow": "R",
             "end": "10:15am",
             "start": "09:25am"
          },
          "dow": [
             4
          ],
          "end": "10:15",
          "id": "34355",
          "instructor": "Donald Estes",
          "location": "SCW 601",
          "section": "JR",
          "start": "9:25",
          "subject": "CHEM",
          "title": "General Chem Recitation"
       },
       {
          "capacity": 25,
          "code": "1045T",
          "credits": 0,
          "department": "Chemistry",
          "display": {
             "dow": "T",
             "end": "11:20am",
             "start": "10:30am"
          },
          "dow": [
             2
          ],
          "end": "11:20",
          "id": "34356",
          "instructor": "Donald Estes",
          "location": "SCW 607",
          "section": "KT",
          "start": "10:30",
          "subject": "CHEM",
          "title": "General Chem Recitation"
       },
       {
          "capacity": 25,
          "code": "1045T",
          "credits": 0,
          "department": "Chemistry",
          "display": {
             "dow": "T",
             "end": "05:30pm",
             "start": "04:40pm"
          },
          "dow": [
             2
          ],
          "end": "17:30",
          "id": "34357",
          "instructor": "TBA",
          "location": "SCW 401",
          "section": "PT",
          "start": "16:40",
          "subject": "CHEM",
          "title": "General Chem Recitation"
       },
       {
          "capacity": 16,
          "code": "1045Y",
          "credits": 0,
          "department": "Chemistry",
          "display": {
             "dow": "M",
             "end": "01:20pm",
             "start": "10:20am"
          },
          "dow": [
             1
          ],
          "end": "13:20",
          "id": "34423",
          "instructor": "Cecily Dobin",
          "location": "SCW LB541",
          "section": "BCM",
          "start": "10:20",
          "subject": "CHEM",
          "title": "General Chemistry Lab"
       },
       {
          "capacity": 16,
          "code": "1045Y",
          "credits": 0,
          "department": "Chemistry",
          "display": {
             "dow": "W",
             "end": "04:30pm",
             "start": "01:30pm"
          },
          "dow": [
             3
          ],
          "end": "16:30",
          "id": "34226",
          "instructor": "Donald Estes",
          "location": "SCW LB541",
          "section": "DEW",
          "start": "13:30",
          "subject": "CHEM",
          "title": "General Chemistry Lab"
       },
       {
          "capacity": 0,
          "code": "1045Y",
          "credits": 1,
          "department": "Chemistry",
          "display": {
             "dow": "M",
             "end": "06:00pm",
             "start": "03:00pm"
          },
          "dow": [
             1
          ],
          "end": "18:00",
          "id": "36560",
          "instructor": "Cecily Dobin",
          "location": "TBA",
          "section": "EF1",
          "start": "15:00",
          "subject": "CHEM",
          "title": "General Chemistry Lab"
       },
       {
          "capacity": 14,
          "code": "1045Y",
          "credits": 0,
          "department": "Chemistry",
          "display": {
             "dow": "M",
             "end": "06:00pm",
             "start": "03:00pm"
          },
          "dow": [
             1
          ],
          "end": "18:00",
          "id": "34196",
          "instructor": "Cecily Dobin",
          "location": "SCW LB541",
          "section": "EFM",
          "start": "15:00",
          "subject": "CHEM",
          "title": "General Chemistry Lab"
       },
       {
          "capacity": 0,
          "code": "1045Y",
          "credits": 1,
          "department": "Chemistry",
          "display": {
             "dow": "F",
             "end": "12:00pm",
             "start": "09:00am"
          },
          "dow": [
             5
          ],
          "end": "12:00",
          "id": "36563",
          "instructor": "Rosalyn Strauss",
          "location": "TBA",
          "section": "FR1",
          "start": "9:00",
          "subject": "CHEM",
          "title": "General Chemistry Lab"
       },
       {
          "capacity": 15,
          "code": "1045Y",
          "credits": 0,
          "department": "Chemistry",
          "display": {
             "dow": "F",
             "end": "12:00pm",
             "start": "09:00am"
          },
          "dow": [
             5
          ],
          "end": "12:00",
          "id": "34257",
          "instructor": "Rosalyn Strauss",
          "location": "SCW LB541",
          "section": "FRI",
          "start": "9:00",
          "subject": "CHEM",
          "title": "General Chemistry Lab"
       },
       {
          "capacity": 15,
          "code": "1045Y",
          "credits": 0,
          "department": "Chemistry",
          "display": {
             "dow": "R",
             "end": "04:30pm",
             "start": "01:30pm"
          },
          "dow": [
             4
          ],
          "end": "16:30",
          "id": "34198",
          "instructor": "Cecily Dobin",
          "location": "SCW LB541",
          "section": "MNR",
          "start": "13:30",
          "subject": "CHEM",
          "title": "General Chemistry Lab"
       },
       {
          "capacity": 14,
          "code": "1045Y",
          "credits": 0,
          "department": "Chemistry",
          "display": {
             "dow": "T",
             "end": "04:30pm",
             "start": "01:30pm"
          },
          "dow": [
             2
          ],
          "end": "16:30",
          "id": "34197",
          "instructor": "Cecily Dobin",
          "location": "SCW LB541",
          "section": "MNT",
          "start": "13:30",
          "subject": "CHEM",
          "title": "General Chemistry Lab"
       },
       {
          "capacity": 0,
          "code": "1045Y",
          "credits": 1,
          "department": "Chemistry",
          "display": {
             "dow": "R",
             "end": "04:30pm",
             "start": "01:30pm"
          },
          "dow": [
             4
          ],
          "end": "16:30",
          "id": "36561",
          "instructor": "Cecily Dobin",
          "location": "TBA",
          "section": "MR1",
          "start": "13:30",
          "subject": "CHEM",
          "title": "General Chemistry Lab"
       },
       {
          "capacity": 0,
          "code": "1045Y",
          "credits": 1,
          "department": "Chemistry",
          "display": {
             "dow": "T",
             "end": "04:30pm",
             "start": "01:30pm"
          },
          "dow": [
             2
          ],
          "end": "16:30",
          "id": "36559",
          "instructor": "Cecily Dobin",
          "location": "TBA",
          "section": "MT1",
          "start": "13:30",
          "subject": "CHEM",
          "title": "General Chemistry Lab"
       },
       {
          "capacity": 64,
          "code": "1213C",
          "credits": 5,
          "department": "Chemistry",
          "display": {
             "dow": "TR",
             "end": "10:15am",
             "start": "09:00am"
          },
          "dow": [
             2,
             4
          ],
          "end": "10:15",
          "id": "34199",
          "instructor": "Evan Mintzer",
          "location": "SCW KOCH",
          "section": "J",
          "start": "9:00",
          "subject": "CHEM",
          "title": "Organic Chemistry"
       },
       {
          "capacity": 16,
          "code": "1213Y",
          "credits": 0,
          "department": "Chemistry",
          "display": {
             "dow": "M",
             "end": "02:15pm",
             "start": "01:25pm"
          },
          "dow": [
             1
          ],
          "end": "14:15",
          "id": "34358",
          "instructor": "Donald Estes",
          "location": "SCW 601",
          "section": "DFM",
          "start": "13:25",
          "subject": "CHEM",
          "title": "Organic Chemistry Lab"
       },
       {
          "capacity": 16,
          "code": "1213Y",
          "credits": 0,
          "department": "Chemistry",
          "display": {
             "dow": "M",
             "end": "05:25pm",
             "start": "02:25pm"
          },
          "dow": [
             1
          ],
          "end": "17:25",
          "id": "34358",
          "instructor": "Donald Estes",
          "location": "SCW LB543",
          "section": "DFM",
          "start": "14:25",
          "subject": "CHEM",
          "title": "Organic Chemistry Lab"
       },
       {
          "capacity": 16,
          "code": "1213Y",
          "credits": 0,
          "department": "Chemistry",
          "display": {
             "dow": "F",
             "end": "09:50am",
             "start": "09:00am"
          },
          "dow": [
             5
          ],
          "end": "9:50",
          "id": "34359",
          "instructor": "Donald Estes",
          "location": "SCW 501",
          "section": "FRI",
          "start": "9:00",
          "subject": "CHEM",
          "title": "Organic Chemistry Lab"
       },
       {
          "capacity": 16,
          "code": "1213Y",
          "credits": 0,
          "department": "Chemistry",
          "display": {
             "dow": "F",
             "end": "01:00pm",
             "start": "10:00am"
          },
          "dow": [
             5
          ],
          "end": "13:00",
          "id": "34359",
          "instructor": "Donald Estes",
          "location": "SCW LB543",
          "section": "FRI",
          "start": "10:00",
          "subject": "CHEM",
          "title": "Organic Chemistry Lab"
       },
       {
          "capacity": 16,
          "code": "1213Y",
          "credits": 0,
          "department": "Chemistry",
          "display": {
             "dow": "R",
             "end": "02:20pm",
             "start": "01:30pm"
          },
          "dow": [
             4
          ],
          "end": "14:20",
          "id": "34360",
          "instructor": "Donald Estes",
          "location": "SCW ",
          "section": "MPR",
          "start": "13:30",
          "subject": "CHEM",
          "title": "Organic Chemistry Lab"
       },
       {
          "capacity": 16,
          "code": "1213Y",
          "credits": 0,
          "department": "Chemistry",
          "display": {
             "dow": "R",
             "end": "05:30pm",
             "start": "02:30pm"
          },
          "dow": [
             4
          ],
          "end": "17:30",
          "id": "34360",
          "instructor": "Donald Estes",
          "location": "SCW LB543",
          "section": "MPR",
          "start": "14:30",
          "subject": "CHEM",
          "title": "Organic Chemistry Lab"
       },
       {
          "capacity": 16,
          "code": "1213Y",
          "credits": 0,
          "department": "Chemistry",
          "display": {
             "dow": "T",
             "end": "02:35pm",
             "start": "01:45pm"
          },
          "dow": [
             2
          ],
          "end": "14:35",
          "id": "34361",
          "instructor": "Donald Estes",
          "location": "SCW 401",
          "section": "MPT",
          "start": "13:45",
          "subject": "CHEM",
          "title": "Organic Chemistry Lab"
       },
       {
          "capacity": 16,
          "code": "1213Y",
          "credits": 0,
          "department": "Chemistry",
          "display": {
             "dow": "T",
             "end": "05:45pm",
             "start": "02:45pm"
          },
          "dow": [
             2
          ],
          "end": "17:45",
          "id": "34361",
          "instructor": "Donald Estes",
          "location": "SCW LB543",
          "section": "MPT",
          "start": "14:45",
          "subject": "CHEM",
          "title": "Organic Chemistry Lab"
       },
       {
          "capacity": 30,
          "code": "1376",
          "credits": 3,
          "department": "Chemistry",
          "display": {
             "dow": "TR",
             "end": "10:15am",
             "start": "09:00am"
          },
          "dow": [
             2,
             4
          ],
          "end": "10:15",
          "id": "35527",
          "instructor": "Daniel Lim",
          "location": "TBA",
          "section": "J",
          "start": "9:00",
          "subject": "CHEM",
          "title": "Biochemistry Lecture"
       },
       {
          "capacity": 15,
          "code": "1415H",
          "credits": 3,
          "department": "Chemistry",
          "display": {
             "dow": "TR",
             "end": "03:00pm",
             "start": "01:45pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "15:00",
          "id": "34363",
          "instructor": "Chaya Rapp",
          "location": "SCW 306",
          "section": "M",
          "start": "13:45",
          "subject": "CHEM",
          "title": "Physical Chemistry I"
       },
       {
          "capacity": 17,
          "code": "1300C",
          "credits": 4,
          "department": "Computer Science",
          "display": {
             "dow": "M",
             "end": "04:25pm",
             "start": "03:10pm"
          },
          "dow": [
             1
          ],
          "end": "16:25",
          "id": "34326",
          "instructor": "Alan J. Broder",
          "location": "LEX215 LX312",
          "section": "EF",
          "start": "15:10",
          "subject": "COMP",
          "title": "Intro to Computer Science"
       },
       {
          "capacity": 17,
          "code": "1300C",
          "credits": 4,
          "department": "Computer Science",
          "display": {
             "dow": "M",
             "end": "05:25pm",
             "start": "04:35pm"
          },
          "dow": [
             1
          ],
          "end": "17:25",
          "id": "34326",
          "instructor": "Alan J. Broder",
          "location": "LEX215 LX312",
          "section": "EF",
          "start": "16:35",
          "subject": "COMP",
          "title": "Intro to Computer Science"
       },
       {
          "capacity": 17,
          "code": "1300C",
          "credits": 4,
          "department": "Computer Science",
          "display": {
             "dow": "W",
             "end": "04:50pm",
             "start": "03:35pm"
          },
          "dow": [
             3
          ],
          "end": "16:50",
          "id": "34326",
          "instructor": "Alan J. Broder",
          "location": "LEX215 LX312",
          "section": "EF",
          "start": "15:35",
          "subject": "COMP",
          "title": "Intro to Computer Science"
       },
       {
          "capacity": 17,
          "code": "1300C",
          "credits": 4,
          "department": "Computer Science",
          "display": {
             "dow": "W",
             "end": "05:50pm",
             "start": "05:00pm"
          },
          "dow": [
             3
          ],
          "end": "17:50",
          "id": "34326",
          "instructor": "Alan J. Broder",
          "location": "LEX215 LX312",
          "section": "EF",
          "start": "17:00",
          "subject": "COMP",
          "title": "Intro to Computer Science"
       },
       {
          "capacity": 15,
          "code": "1300C",
          "credits": 4,
          "department": "Computer Science",
          "display": {
             "dow": "TR",
             "end": "11:45am",
             "start": "10:30am"
          },
          "dow": [
             2,
             4
          ],
          "end": "11:45",
          "id": "36002",
          "instructor": "Joshua Waxman",
          "location": "TBA",
          "section": "KL",
          "start": "10:30",
          "subject": "COMP",
          "title": "Intro to Computer Science"
       },
       {
          "capacity": 15,
          "code": "1300C",
          "credits": 4,
          "department": "Computer Science",
          "display": {
             "dow": "TR",
             "end": "12:50pm",
             "start": "12:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "12:50",
          "id": "36002",
          "instructor": "Joshua Waxman",
          "location": "TBA",
          "section": "KL",
          "start": "12:00",
          "subject": "COMP",
          "title": "Intro to Computer Science"
       },
       {
          "capacity": 15,
          "code": "1504",
          "credits": 3,
          "department": "Computer Science",
          "display": {
             "dow": "TR",
             "end": "03:00pm",
             "start": "01:45pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "15:00",
          "id": "34364",
          "instructor": "Michael Dalezman",
          "location": "SCW 619",
          "section": "M",
          "start": "13:45",
          "subject": "COMP",
          "title": "Discrete Structures"
       },
       {
          "capacity": 15,
          "code": "2115C",
          "credits": 4,
          "department": "Computer Science",
          "display": {
             "dow": "M",
             "end": "04:25pm",
             "start": "03:10pm"
          },
          "dow": [
             1
          ],
          "end": "16:25",
          "id": "34432",
          "instructor": "Thomas M. Schmidt",
          "location": "SCW 315",
          "section": "EF",
          "start": "15:10",
          "subject": "COMP",
          "title": "Computer Systems"
       },
       {
          "capacity": 15,
          "code": "2115C",
          "credits": 4,
          "department": "Computer Science",
          "display": {
             "dow": "M",
             "end": "05:25pm",
             "start": "04:35pm"
          },
          "dow": [
             1
          ],
          "end": "17:25",
          "id": "34432",
          "instructor": "Thomas M. Schmidt",
          "location": "SCW 315",
          "section": "EF",
          "start": "16:35",
          "subject": "COMP",
          "title": "Computer Systems"
       },
       {
          "capacity": 15,
          "code": "2115C",
          "credits": 4,
          "department": "Computer Science",
          "display": {
             "dow": "W",
             "end": "04:50pm",
             "start": "03:35pm"
          },
          "dow": [
             3
          ],
          "end": "16:50",
          "id": "34432",
          "instructor": "Thomas M. Schmidt",
          "location": "SCW 315",
          "section": "EF",
          "start": "15:35",
          "subject": "COMP",
          "title": "Computer Systems"
       },
       {
          "capacity": 15,
          "code": "2115C",
          "credits": 4,
          "department": "Computer Science",
          "display": {
             "dow": "W",
             "end": "05:50pm",
             "start": "05:00pm"
          },
          "dow": [
             3
          ],
          "end": "17:50",
          "id": "34432",
          "instructor": "Thomas M. Schmidt",
          "location": "SCW 315",
          "section": "EF",
          "start": "17:00",
          "subject": "COMP",
          "title": "Computer Systems"
       },
       {
          "capacity": 15,
          "code": "2314C",
          "credits": 4,
          "department": "Computer Science",
          "display": {
             "dow": "MW",
             "end": "01:15pm",
             "start": "12:00pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "13:15",
          "id": "34365",
          "instructor": "Alan J. Broder",
          "location": "LEX215 LX312",
          "section": "CD",
          "start": "12:00",
          "subject": "COMP",
          "title": "Applied Linux Prog & Scripting"
       },
       {
          "capacity": 15,
          "code": "2314C",
          "credits": 4,
          "department": "Computer Science",
          "display": {
             "dow": "MW",
             "end": "02:15pm",
             "start": "01:25pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "14:15",
          "id": "34365",
          "instructor": "Alan J. Broder",
          "location": "LEX215 LX312",
          "section": "CD",
          "start": "13:25",
          "subject": "COMP",
          "title": "Applied Linux Prog & Scripting"
       },
       {
          "capacity": 12,
          "code": "2545",
          "credits": 3,
          "department": "Computer Science",
          "display": {
             "dow": "TR",
             "end": "03:00pm",
             "start": "01:45pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "15:00",
          "id": "35186",
          "instructor": "Joshua Waxman",
          "location": "TBA",
          "section": "M",
          "start": "13:45",
          "subject": "COMP",
          "title": "Algorithms"
       },
       {
          "capacity": 25,
          "code": "3780",
          "credits": 3,
          "department": "Computer Science",
          "display": {
             "dow": "MW",
             "end": "11:40am",
             "start": "10:25am"
          },
          "dow": [
             1,
             3
          ],
          "end": "11:40",
          "id": "35187",
          "instructor": "Van Kelly",
          "location": "TBA",
          "section": "B",
          "start": "10:25",
          "subject": "COMP",
          "title": "Web Programming & Development"
       },
       {
          "capacity": 40,
          "code": "1010",
          "credits": 3,
          "department": "Economics",
          "display": {
             "dow": "TR",
             "end": "11:45am",
             "start": "10:30am"
          },
          "dow": [
             2,
             4
          ],
          "end": "11:45",
          "id": "34494",
          "instructor": "James Kahn",
          "location": "LEX215 LX210",
          "section": "K",
          "start": "10:30",
          "subject": "ECON",
          "title": "Principles of Economics"
       },
       {
          "capacity": 30,
          "code": "1177",
          "credits": 3,
          "department": "Economics",
          "display": {
             "dow": "TR",
             "end": "01:15pm",
             "start": "12:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "13:15",
          "id": "34410",
          "instructor": "Tadashi Hashimoto",
          "location": "LEX215 LX719",
          "section": "L",
          "start": "12:00",
          "subject": "ECON",
          "title": "Game Theory & Behavioral Econ"
       },
       {
          "capacity": 30,
          "code": "1221",
          "credits": 3,
          "department": "Economics",
          "display": {
             "dow": "MW",
             "end": "02:40pm",
             "start": "01:25pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "14:40",
          "id": "35508",
          "instructor": "James Kahn",
          "location": "TBA",
          "section": "D1",
          "start": "13:25",
          "subject": "ECON",
          "title": "Money and Banking"
       },
       {
          "capacity": 1,
          "code": "1421",
          "credits": 3,
          "department": "Economics",
          "display": {
             "dow": "TBA",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "34366",
          "instructor": "TBA",
          "location": "TBA",
          "section": "N",
          "start": "",
          "subject": "ECON",
          "title": "Econometrics"
       },
       {
          "capacity": 20,
          "code": "2133",
          "credits": 3,
          "department": "Education",
          "display": {
             "dow": "M",
             "end": "03:00pm",
             "start": "01:20pm"
          },
          "dow": [
             1
          ],
          "end": "15:00",
          "id": "34301",
          "instructor": "Chaya R. Gorsetman",
          "location": "SCW 906",
          "section": "DM",
          "start": "13:20",
          "subject": "EDUC",
          "title": "Linguistic Tools & Literacy"
       },
       {
          "capacity": 25,
          "code": "2201",
          "credits": 3,
          "department": "Education",
          "display": {
             "dow": "TR",
             "end": "01:15pm",
             "start": "12:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "13:15",
          "id": "34317",
          "instructor": "Miriam Ungar Hirsch",
          "location": "SCW 906",
          "section": "L",
          "start": "12:00",
          "subject": "EDUC",
          "title": "Classroom Mangmt & Instruction"
       },
       {
          "capacity": 20,
          "code": "2301",
          "credits": 3,
          "department": "Education",
          "display": {
             "dow": "TR",
             "end": "10:15am",
             "start": "09:00am"
          },
          "dow": [
             2,
             4
          ],
          "end": "10:15",
          "id": "34303",
          "instructor": "Emily A. Witty",
          "location": "SCW 906",
          "section": "J",
          "start": "9:00",
          "subject": "EDUC",
          "title": "Language and Literacy I"
       },
       {
          "capacity": 25,
          "code": "2303",
          "credits": 3,
          "department": "Education",
          "display": {
             "dow": "TR",
             "end": "11:45am",
             "start": "10:30am"
          },
          "dow": [
             2,
             4
          ],
          "end": "11:45",
          "id": "34253",
          "instructor": "Miriam Ungar Hirsch",
          "location": "SCW 906",
          "section": "K",
          "start": "10:30",
          "subject": "EDUC",
          "title": "Teaching Social Studies"
       },
       {
          "capacity": 20,
          "code": "2930",
          "credits": 3,
          "department": "Education",
          "display": {
             "dow": "T",
             "end": "04:15pm",
             "start": "01:45pm"
          },
          "dow": [
             2
          ],
          "end": "16:15",
          "id": "34498",
          "instructor": "Miriam Ungar Hirsch",
          "location": "SCW 906",
          "section": "MNT",
          "start": "13:45",
          "subject": "EDUC",
          "title": "Senior Seminar: Elem Edu"
       },
       {
          "capacity": 20,
          "code": "2935",
          "credits": 3,
          "department": "Education",
          "display": {
             "dow": "W",
             "end": "03:45pm",
             "start": "01:15pm"
          },
          "dow": [
             3
          ],
          "end": "15:45",
          "id": "34211",
          "instructor": "Chaya R. Gorsetman",
          "location": "SCW 906",
          "section": "DEW",
          "start": "13:15",
          "subject": "EDUC",
          "title": "Sr. Sem. in Early Childhood Ed"
       },
       {
          "capacity": 20,
          "code": "2940",
          "credits": 6,
          "department": "Education",
          "display": {
             "dow": "MWR",
             "end": "04:00pm",
             "start": "08:00am"
          },
          "dow": [
             1,
             3,
             4
          ],
          "end": "16:00",
          "id": "34499",
          "instructor": "Donna J. Greenberg",
          "location": "OFF SITE",
          "section": "TBA",
          "start": "8:00",
          "subject": "EDUC",
          "title": "Student Teaching: Elem Educ"
       },
       {
          "capacity": 20,
          "code": "2940",
          "credits": 6,
          "department": "Education",
          "display": {
             "dow": "T",
             "end": "12:00pm",
             "start": "08:00am"
          },
          "dow": [
             2
          ],
          "end": "12:00",
          "id": "34499",
          "instructor": "Donna J. Greenberg",
          "location": "OFF SITE",
          "section": "TBA",
          "start": "8:00",
          "subject": "EDUC",
          "title": "Student Teaching: Elem Educ"
       },
       {
          "capacity": 20,
          "code": "2940",
          "credits": 6,
          "department": "Education",
          "display": {
             "dow": "F",
             "end": "12:00pm",
             "start": "08:00am"
          },
          "dow": [
             5
          ],
          "end": "12:00",
          "id": "34499",
          "instructor": "Donna J. Greenberg",
          "location": "OFF SITE",
          "section": "TBA",
          "start": "8:00",
          "subject": "EDUC",
          "title": "Student Teaching: Elem Educ"
       },
       {
          "capacity": 20,
          "code": "2945",
          "credits": 6,
          "department": "Education",
          "display": {
             "dow": "MTR",
             "end": "03:30pm",
             "start": "08:30am"
          },
          "dow": [
             1,
             2,
             4
          ],
          "end": "15:30",
          "id": "34191",
          "instructor": "Chaya R. Gorsetman",
          "location": "OFF SITE",
          "section": "TBA",
          "start": "8:30",
          "subject": "EDUC",
          "title": "EC Student Teaching"
       },
       {
          "capacity": 20,
          "code": "2945",
          "credits": 6,
          "department": "Education",
          "display": {
             "dow": "W",
             "end": "12:30pm",
             "start": "08:30am"
          },
          "dow": [
             3
          ],
          "end": "12:30",
          "id": "34191",
          "instructor": "Chaya R. Gorsetman",
          "location": "OFF SITE",
          "section": "TBA",
          "start": "8:30",
          "subject": "EDUC",
          "title": "EC Student Teaching"
       },
       {
          "capacity": 20,
          "code": "2945",
          "credits": 6,
          "department": "Education",
          "display": {
             "dow": "F",
             "end": "01:30pm",
             "start": "08:30am"
          },
          "dow": [
             5
          ],
          "end": "13:30",
          "id": "34191",
          "instructor": "Chaya R. Gorsetman",
          "location": "OFF SITE",
          "section": "TBA",
          "start": "8:30",
          "subject": "EDUC",
          "title": "EC Student Teaching"
       },
       {
          "capacity": 15,
          "code": "1010",
          "credits": 3,
          "department": "English",
          "display": {
             "dow": "TR",
             "end": "03:00pm",
             "start": "01:45pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "15:00",
          "id": "36421",
          "instructor": "TBA",
          "location": "TBA",
          "section": "M",
          "start": "13:45",
          "subject": "ENGL",
          "title": "Essentials of Writing"
       },
       {
          "capacity": 15,
          "code": "1010",
          "credits": 3,
          "department": "English",
          "display": {
             "dow": "TR",
             "end": "04:30pm",
             "start": "03:15pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "16:30",
          "id": "36422",
          "instructor": "TBA",
          "location": "TBA",
          "section": "N",
          "start": "15:15",
          "subject": "ENGL",
          "title": "Essentials of Writing"
       },
       {
          "capacity": 20,
          "code": "1100",
          "credits": 3,
          "department": "English",
          "display": {
             "dow": "MW",
             "end": "11:40am",
             "start": "10:25am"
          },
          "dow": [
             1,
             3
          ],
          "end": "11:40",
          "id": "34219",
          "instructor": "Gina Grimaldi",
          "location": "LEX215 ",
          "section": "B",
          "start": "10:25",
          "subject": "ENGL",
          "title": "Composition and Rhetoric"
       },
       {
          "capacity": 20,
          "code": "1100",
          "credits": 3,
          "department": "English",
          "display": {
             "dow": "MW",
             "end": "01:10pm",
             "start": "11:55am"
          },
          "dow": [
             1,
             3
          ],
          "end": "13:10",
          "id": "34221",
          "instructor": "Michael Shelichach",
          "location": "LEX215 LX719",
          "section": "C",
          "start": "11:55",
          "subject": "ENGL",
          "title": "Composition and Rhetoric"
       },
       {
          "capacity": 20,
          "code": "1100",
          "credits": 3,
          "department": "English",
          "display": {
             "dow": "MW",
             "end": "02:40pm",
             "start": "01:25pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "14:40",
          "id": "34228",
          "instructor": "Michael Shelichach",
          "location": "LEX215 ",
          "section": "D1",
          "start": "13:25",
          "subject": "ENGL",
          "title": "Composition and Rhetoric"
       },
       {
          "capacity": 20,
          "code": "1100",
          "credits": 3,
          "department": "English",
          "display": {
             "dow": "TR",
             "end": "10:15am",
             "start": "09:00am"
          },
          "dow": [
             2,
             4
          ],
          "end": "10:15",
          "id": "34227",
          "instructor": "Lauren Lee Fusilier",
          "location": "LEX215 ",
          "section": "J",
          "start": "9:00",
          "subject": "ENGL",
          "title": "Composition and Rhetoric"
       },
       {
          "capacity": 20,
          "code": "1100",
          "credits": 3,
          "department": "English",
          "display": {
             "dow": "TR",
             "end": "11:45am",
             "start": "10:30am"
          },
          "dow": [
             2,
             4
          ],
          "end": "11:45",
          "id": "34277",
          "instructor": "Lauren Lee Fusilier",
          "location": "LEX215 LX719",
          "section": "K",
          "start": "10:30",
          "subject": "ENGL",
          "title": "Composition and Rhetoric"
       },
       {
          "capacity": 20,
          "code": "1100",
          "credits": 3,
          "department": "English",
          "display": {
             "dow": "TR",
             "end": "01:15pm",
             "start": "12:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "13:15",
          "id": "34171",
          "instructor": "Ann Peters",
          "location": "LEX215 ",
          "section": "L",
          "start": "12:00",
          "subject": "ENGL",
          "title": "Composition and Rhetoric"
       },
       {
          "capacity": 20,
          "code": "1100",
          "credits": 3,
          "department": "English",
          "display": {
             "dow": "TR",
             "end": "03:00pm",
             "start": "01:45pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "15:00",
          "id": "34172",
          "instructor": "Jen DeGregorio",
          "location": "LEX215 LX314",
          "section": "M",
          "start": "13:45",
          "subject": "ENGL",
          "title": "Composition and Rhetoric"
       },
       {
          "capacity": 20,
          "code": "1100",
          "credits": 3,
          "department": "English",
          "display": {
             "dow": "TR",
             "end": "04:30pm",
             "start": "03:15pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "16:30",
          "id": "34247",
          "instructor": "Sierra Ladan Tavasolian",
          "location": "LEX215 ",
          "section": "N",
          "start": "15:15",
          "subject": "ENGL",
          "title": "Composition and Rhetoric"
       },
       {
          "capacity": 15,
          "code": "1200H",
          "credits": 3,
          "department": "English",
          "display": {
             "dow": "MW",
             "end": "11:40am",
             "start": "10:25am"
          },
          "dow": [
             1,
             3
          ],
          "end": "11:40",
          "id": "34310",
          "instructor": "Seamus O'Malley",
          "location": "LEX215 ",
          "section": "B",
          "start": "10:25",
          "subject": "ENGL",
          "title": "Freshman Honors Seminar"
       },
       {
          "capacity": 15,
          "code": "1200H",
          "credits": 3,
          "department": "English",
          "display": {
             "dow": "MW",
             "end": "01:10pm",
             "start": "11:55am"
          },
          "dow": [
             1,
             3
          ],
          "end": "13:10",
          "id": "34309",
          "instructor": "Joy Ladin",
          "location": "LEX215 LX718",
          "section": "C",
          "start": "11:55",
          "subject": "ENGL",
          "title": "Freshman Honors Seminar"
       },
       {
          "capacity": 15,
          "code": "1200H",
          "credits": 3,
          "department": "English",
          "display": {
             "dow": "MW",
             "end": "02:40pm",
             "start": "01:25pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "14:40",
          "id": "35172",
          "instructor": "Matthew Ward Miller",
          "location": "TBA",
          "section": "D1",
          "start": "13:25",
          "subject": "ENGL",
          "title": "Freshman Honors Seminar"
       },
       {
          "capacity": 25,
          "code": "1500",
          "credits": 3,
          "department": "English",
          "display": {
             "dow": "TR",
             "end": "01:15pm",
             "start": "12:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "13:15",
          "id": "34322",
          "instructor": "Lynda Johnson",
          "location": "LEX215 LX405",
          "section": "L",
          "start": "12:00",
          "subject": "ENGL",
          "title": "Media Studies"
       },
       {
          "capacity": 20,
          "code": "1503",
          "credits": 3,
          "department": "English",
          "display": {
             "dow": "W",
             "end": "08:00pm",
             "start": "05:30pm"
          },
          "dow": [
             3
          ],
          "end": "20:00",
          "id": "35173",
          "instructor": "Avital Rachel Chizhik",
          "location": "TBA",
          "section": "FGW",
          "start": "17:30",
          "subject": "ENGL",
          "title": "Columns & Editorials"
       },
       {
          "capacity": 9,
          "code": "1600",
          "credits": 3,
          "department": "English",
          "display": {
             "dow": "T",
             "end": "08:30pm",
             "start": "06:00pm"
          },
          "dow": [
             2
          ],
          "end": "20:30",
          "id": "34556",
          "instructor": "Erik Mintz",
          "location": "LEX215 LX718",
          "section": "QRT",
          "start": "18:00",
          "subject": "ENGL",
          "title": "Advertising Copywriting"
       },
       {
          "capacity": 25,
          "code": "1650",
          "credits": 3,
          "department": "English",
          "display": {
             "dow": "M",
             "end": "07:30pm",
             "start": "05:00pm"
          },
          "dow": [
             1
          ],
          "end": "19:30",
          "id": "34294",
          "instructor": "Deborah Schlueter",
          "location": "LEX215 LX718",
          "section": "FGM",
          "start": "17:00",
          "subject": "ENGL",
          "title": "Public Relations"
       },
       {
          "capacity": 20,
          "code": "1725",
          "credits": 3,
          "department": "English",
          "display": {
             "dow": "R",
             "end": "05:45pm",
             "start": "03:15pm"
          },
          "dow": [
             4
          ],
          "end": "17:45",
          "id": "34523",
          "instructor": "Ted Birkhahn",
          "location": "LEX215 ",
          "section": "NPR",
          "start": "15:15",
          "subject": "ENGL",
          "title": "Topics: Digital Communication"
       },
       {
          "capacity": 20,
          "code": "1802",
          "credits": 3,
          "department": "English",
          "display": {
             "dow": "MW",
             "end": "02:40pm",
             "start": "01:25pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "14:40",
          "id": "35174",
          "instructor": "Joy Ladin",
          "location": "TBA",
          "section": "D1",
          "start": "13:25",
          "subject": "ENGL",
          "title": "Writing Creative Nonfiction"
       },
       {
          "capacity": 18,
          "code": "1812",
          "credits": 3,
          "department": "English",
          "display": {
             "dow": "TR",
             "end": "11:45am",
             "start": "10:30am"
          },
          "dow": [
             2,
             4
          ],
          "end": "11:45",
          "id": "35175",
          "instructor": "Leslie Russell",
          "location": "TBA",
          "section": "K",
          "start": "10:30",
          "subject": "ENGL",
          "title": "Screenwriting"
       },
       {
          "capacity": 18,
          "code": "2000",
          "credits": 3,
          "department": "English",
          "display": {
             "dow": "M",
             "end": "04:25pm",
             "start": "03:10pm"
          },
          "dow": [
             1
          ],
          "end": "16:25",
          "id": "34279",
          "instructor": "Matthew Ward Miller",
          "location": "LEX215 ",
          "section": "E",
          "start": "15:10",
          "subject": "ENGL",
          "title": "Ways of Reading (formerly \"Gateway to Reading\")"
       },
       {
          "capacity": 18,
          "code": "2000",
          "credits": 3,
          "department": "English",
          "display": {
             "dow": "W",
             "end": "04:50pm",
             "start": "03:35pm"
          },
          "dow": [
             3
          ],
          "end": "16:50",
          "id": "34279",
          "instructor": "Matthew Ward Miller",
          "location": "TBA",
          "section": "E",
          "start": "15:35",
          "subject": "ENGL",
          "title": "Ways of Reading (formerly \"Gateway to Reading\")"
       },
       {
          "capacity": 30,
          "code": "2004",
          "credits": 3,
          "department": "English",
          "display": {
             "dow": "MW",
             "end": "01:10pm",
             "start": "11:55am"
          },
          "dow": [
             1,
             3
          ],
          "end": "13:10",
          "id": "34402",
          "instructor": "Linda M. Shires",
          "location": "LEX215 ",
          "section": "C",
          "start": "11:55",
          "subject": "ENGL",
          "title": "Survey of British Lit II"
       },
       {
          "capacity": 30,
          "code": "2007",
          "credits": 3,
          "department": "English",
          "display": {
             "dow": "TR",
             "end": "04:30pm",
             "start": "03:15pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "16:30",
          "id": "35176",
          "instructor": "Ann Peters",
          "location": "TBA",
          "section": "N",
          "start": "15:15",
          "subject": "ENGL",
          "title": "Survey of American Lit II"
       },
       {
          "capacity": 30,
          "code": "2580",
          "credits": 3,
          "department": "English",
          "display": {
             "dow": "TR",
             "end": "03:00pm",
             "start": "01:45pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "15:00",
          "id": "35177",
          "instructor": "Cynthia Wachtell",
          "location": "TBA",
          "section": "M",
          "start": "13:45",
          "subject": "ENGL",
          "title": "American Jewish Literature"
       },
       {
          "capacity": 30,
          "code": "2750",
          "credits": 3,
          "department": "English",
          "display": {
             "dow": "M",
             "end": "04:25pm",
             "start": "03:10pm"
          },
          "dow": [
             1
          ],
          "end": "16:25",
          "id": "35535",
          "instructor": "Seamus O'Malley",
          "location": "TBA",
          "section": "E",
          "start": "15:10",
          "subject": "ENGL",
          "title": "The Graphic Novel"
       },
       {
          "capacity": 30,
          "code": "2750",
          "credits": 3,
          "department": "English",
          "display": {
             "dow": "W",
             "end": "04:50pm",
             "start": "03:35pm"
          },
          "dow": [
             3
          ],
          "end": "16:50",
          "id": "35535",
          "instructor": "Seamus O'Malley",
          "location": "TBA",
          "section": "E",
          "start": "15:35",
          "subject": "ENGL",
          "title": "The Graphic Novel"
       },
       {
          "capacity": 20,
          "code": "2880H",
          "credits": 3,
          "department": "English",
          "display": {
             "dow": "M",
             "end": "05:55pm",
             "start": "04:40pm"
          },
          "dow": [
             1
          ],
          "end": "17:55",
          "id": "35536",
          "instructor": "Matthew Ward Miller",
          "location": "TBA",
          "section": "F",
          "start": "16:40",
          "subject": "ENGL",
          "title": "Parents and Children in American Literature"
       },
       {
          "capacity": 20,
          "code": "2880H",
          "credits": 3,
          "department": "English",
          "display": {
             "dow": "W",
             "end": "06:15pm",
             "start": "05:00pm"
          },
          "dow": [
             3
          ],
          "end": "18:15",
          "id": "35536",
          "instructor": "Matthew Ward Miller",
          "location": "TBA",
          "section": "F",
          "start": "17:00",
          "subject": "ENGL",
          "title": "Parents and Children in American Literature"
       },
       {
          "capacity": 30,
          "code": "2921",
          "credits": 3,
          "department": "English",
          "display": {
             "dow": "MW",
             "end": "10:15am",
             "start": "09:00am"
          },
          "dow": [
             1,
             3
          ],
          "end": "10:15",
          "id": "35178",
          "instructor": "Gina Grimaldi",
          "location": "TBA",
          "section": "A",
          "start": "9:00",
          "subject": "ENGL",
          "title": "Topics: Shakespeare"
       },
       {
          "capacity": 30,
          "code": "2960",
          "credits": 3,
          "department": "English",
          "display": {
             "dow": "MW",
             "end": "11:40am",
             "start": "10:25am"
          },
          "dow": [
             1,
             3
          ],
          "end": "11:40",
          "id": "35179",
          "instructor": "Linda M. Shires",
          "location": "TBA",
          "section": "B",
          "start": "10:25",
          "subject": "ENGL",
          "title": "Representations of Holocaust"
       },
       {
          "capacity": 30,
          "code": "2971",
          "credits": 3,
          "department": "English",
          "display": {
             "dow": "MW",
             "end": "01:10pm",
             "start": "11:55am"
          },
          "dow": [
             1,
             3
          ],
          "end": "13:10",
          "id": "35538",
          "instructor": "Seamus O'Malley",
          "location": "TBA",
          "section": "C",
          "start": "11:55",
          "subject": "ENGL",
          "title": "Literature of the First World War"
       },
       {
          "capacity": 30,
          "code": "3921",
          "credits": 3,
          "department": "English",
          "display": {
             "dow": "TR",
             "end": "03:00pm",
             "start": "01:45pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "15:00",
          "id": "35537",
          "instructor": "Ann Peters",
          "location": "TBA",
          "section": "M",
          "start": "13:45",
          "subject": "ENGL",
          "title": "Tps: Harlem Renaissance"
       },
       {
          "capacity": 5,
          "code": "4001",
          "credits": 1,
          "department": "English",
          "display": {
             "dow": "",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "35182",
          "instructor": "Ann Peters",
          "location": "TBA",
          "section": "TBA",
          "start": "",
          "subject": "ENGL",
          "title": "Sr Exit Project Creative Writ"
       },
       {
          "capacity": 5,
          "code": "4002",
          "credits": 1,
          "department": "English",
          "display": {
             "dow": "",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "36111",
          "instructor": "Erik Mintz",
          "location": "TBA",
          "section": "TB3",
          "start": "",
          "subject": "ENGL",
          "title": "Sr Exit Project Media Studies"
       },
       {
          "capacity": 5,
          "code": "4002",
          "credits": 1,
          "department": "English",
          "display": {
             "dow": "",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "34337",
          "instructor": "Deborah Schlueter",
          "location": "TBA",
          "section": "TBA",
          "start": "",
          "subject": "ENGL",
          "title": "Sr Exit Project Media Studies"
       },
       {
          "capacity": 30,
          "code": "1001",
          "credits": 3,
          "department": "Finance",
          "display": {
             "dow": "TR",
             "end": "10:15am",
             "start": "09:00am"
          },
          "dow": [
             2,
             4
          ],
          "end": "10:15",
          "id": "34245",
          "instructor": "Gabriela Coiculescu",
          "location": "LEX215 LX313",
          "section": "J",
          "start": "9:00",
          "subject": "FIN",
          "title": "Principles of Finance"
       },
       {
          "capacity": 20,
          "code": "2505",
          "credits": 3,
          "department": "Finance",
          "display": {
             "dow": "TR",
             "end": "01:40pm",
             "start": "12:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "13:40",
          "id": "34176",
          "instructor": "Joshua Krausz",
          "location": "LEX215 LX402",
          "section": "L",
          "start": "12:00",
          "subject": "FIN",
          "title": "Investment Analysis"
       },
       {
          "capacity": 15,
          "code": "3851",
          "credits": 3,
          "department": "Finance",
          "display": {
             "dow": "TR",
             "end": "03:00pm",
             "start": "01:45pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "15:00",
          "id": "34284",
          "instructor": "Sidney J. Mehl",
          "location": "LEX215 LX313",
          "section": "M",
          "start": "13:45",
          "subject": "FIN",
          "title": "Financial Statement Analysis"
       },
       {
          "capacity": 999,
          "code": "1373",
          "credits": 3,
          "department": "Hebraic Studies Core",
          "display": {
             "dow": "",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "35723",
          "instructor": "TBA",
          "location": "TBA",
          "section": "TBA",
          "start": "",
          "subject": "HEST",
          "title": "Hebrew Language & Lit."
       },
       {
          "capacity": 999,
          "code": "1374",
          "credits": 4,
          "department": "Hebraic Studies Core",
          "display": {
             "dow": "",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "35724",
          "instructor": "TBA",
          "location": "TBA",
          "section": "TBA",
          "start": "",
          "subject": "HEST",
          "title": "Hebrew Language & Lit."
       },
       {
          "capacity": 999,
          "code": "1375",
          "credits": 5,
          "department": "Hebraic Studies Core",
          "display": {
             "dow": "",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "35725",
          "instructor": "TBA",
          "location": "TBA",
          "section": "TBA",
          "start": "",
          "subject": "HEST",
          "title": "Hebrew Language & Lit."
       },
       {
          "capacity": 999,
          "code": "1376",
          "credits": 6,
          "department": "Hebraic Studies Core",
          "display": {
             "dow": "",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "35726",
          "instructor": "TBA",
          "location": "TBA",
          "section": "TBA",
          "start": "",
          "subject": "HEST",
          "title": "Hebrew Language & Lit."
       },
       {
          "capacity": 20,
          "code": "1101",
          "credits": 3,
          "department": "Hebrew",
          "display": {
             "dow": "MW",
             "end": "01:10pm",
             "start": "11:55am"
          },
          "dow": [
             1,
             3
          ],
          "end": "13:10",
          "id": "34236",
          "instructor": "Rivka Weiner",
          "location": "SCW 301",
          "section": "CP",
          "start": "11:55",
          "subject": "HEBR",
          "title": "Elementary Hebrew I"
       },
       {
          "capacity": 20,
          "code": "1101",
          "credits": 3,
          "department": "Hebrew",
          "display": {
             "dow": "TR",
             "end": "05:30pm",
             "start": "04:40pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "17:30",
          "id": "34236",
          "instructor": " Staff ",
          "location": "SCW 607",
          "section": "CP",
          "start": "16:40",
          "subject": "HEBR",
          "title": "Elementary Hebrew I"
       },
       {
          "capacity": 20,
          "code": "1102",
          "credits": 3,
          "department": "Hebrew",
          "display": {
             "dow": "M",
             "end": "02:55pm",
             "start": "01:40pm"
          },
          "dow": [
             1
          ],
          "end": "14:55",
          "id": "34307",
          "instructor": "Rivka Weiner",
          "location": "SCW 301",
          "section": "D2P",
          "start": "13:40",
          "subject": "HEBR",
          "title": "Elementary Hebrew II"
       },
       {
          "capacity": 20,
          "code": "1102",
          "credits": 3,
          "department": "Hebrew",
          "display": {
             "dow": "TR",
             "end": "05:30pm",
             "start": "04:40pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "17:30",
          "id": "34307",
          "instructor": " Staff ",
          "location": "SCW 606",
          "section": "D2P",
          "start": "16:40",
          "subject": "HEBR",
          "title": "Elementary Hebrew II"
       },
       {
          "capacity": 20,
          "code": "1102",
          "credits": 3,
          "department": "Hebrew",
          "display": {
             "dow": "W",
             "end": "02:40pm",
             "start": "01:25pm"
          },
          "dow": [
             3
          ],
          "end": "14:40",
          "id": "34307",
          "instructor": "Rivka Weiner",
          "location": "SCW 301",
          "section": "D2P",
          "start": "13:25",
          "subject": "HEBR",
          "title": "Elementary Hebrew II"
       },
       {
          "capacity": 16,
          "code": "1103",
          "credits": 3,
          "department": "Hebrew",
          "display": {
             "dow": "MW",
             "end": "10:15am",
             "start": "09:00am"
          },
          "dow": [
             1,
             3
          ],
          "end": "10:15",
          "id": "34587",
          "instructor": "Sarah Hochfeld",
          "location": "SCW 815",
          "section": "APT",
          "start": "9:00",
          "subject": "HEBR",
          "title": "Lower Intermediate Hebrew I"
       },
       {
          "capacity": 16,
          "code": "1103",
          "credits": 3,
          "department": "Hebrew",
          "display": {
             "dow": "T",
             "end": "05:30pm",
             "start": "04:40pm"
          },
          "dow": [
             2
          ],
          "end": "17:30",
          "id": "34587",
          "instructor": "TBA",
          "location": "SCW 818",
          "section": "APT",
          "start": "16:40",
          "subject": "HEBR",
          "title": "Lower Intermediate Hebrew I"
       },
       {
          "capacity": 18,
          "code": "1103",
          "credits": 3,
          "department": "Hebrew",
          "display": {
             "dow": "MW",
             "end": "11:40am",
             "start": "10:25am"
          },
          "dow": [
             1,
             3
          ],
          "end": "11:40",
          "id": "34405",
          "instructor": "Dawn Arussy",
          "location": "SCW ",
          "section": "BQT",
          "start": "10:25",
          "subject": "HEBR",
          "title": "Lower Intermediate Hebrew I"
       },
       {
          "capacity": 18,
          "code": "1103",
          "credits": 3,
          "department": "Hebrew",
          "display": {
             "dow": "T",
             "end": "06:50pm",
             "start": "06:00pm"
          },
          "dow": [
             2
          ],
          "end": "18:50",
          "id": "34405",
          "instructor": "TBA",
          "location": "SCW ",
          "section": "BQT",
          "start": "18:00",
          "subject": "HEBR",
          "title": "Lower Intermediate Hebrew I"
       },
       {
          "capacity": 18,
          "code": "1103",
          "credits": 3,
          "department": "Hebrew",
          "display": {
             "dow": "M",
             "end": "02:55pm",
             "start": "01:40pm"
          },
          "dow": [
             1
          ],
          "end": "14:55",
          "id": "34304",
          "instructor": "Sarah Hochfeld",
          "location": "SCW ",
          "section": "DPT",
          "start": "13:40",
          "subject": "HEBR",
          "title": "Lower Intermediate Hebrew I"
       },
       {
          "capacity": 18,
          "code": "1103",
          "credits": 3,
          "department": "Hebrew",
          "display": {
             "dow": "T",
             "end": "05:30pm",
             "start": "04:40pm"
          },
          "dow": [
             2
          ],
          "end": "17:30",
          "id": "34304",
          "instructor": "TBA",
          "location": "TBA",
          "section": "DPT",
          "start": "16:40",
          "subject": "HEBR",
          "title": "Lower Intermediate Hebrew I"
       },
       {
          "capacity": 18,
          "code": "1103",
          "credits": 3,
          "department": "Hebrew",
          "display": {
             "dow": "W",
             "end": "02:40pm",
             "start": "01:25pm"
          },
          "dow": [
             3
          ],
          "end": "14:40",
          "id": "34304",
          "instructor": "Sarah Hochfeld",
          "location": "TBA",
          "section": "DPT",
          "start": "13:25",
          "subject": "HEBR",
          "title": "Lower Intermediate Hebrew I"
       },
       {
          "capacity": 21,
          "code": "1104",
          "credits": 3,
          "department": "Hebrew",
          "display": {
             "dow": "MW",
             "end": "11:40am",
             "start": "10:25am"
          },
          "dow": [
             1,
             3
          ],
          "end": "11:40",
          "id": "34258",
          "instructor": "Sarah Hochfeld",
          "location": "SCW 819",
          "section": "BQT",
          "start": "10:25",
          "subject": "HEBR",
          "title": "Lower Intermediate Hebrew II"
       },
       {
          "capacity": 21,
          "code": "1104",
          "credits": 3,
          "department": "Hebrew",
          "display": {
             "dow": "T",
             "end": "06:50pm",
             "start": "06:00pm"
          },
          "dow": [
             2
          ],
          "end": "18:50",
          "id": "34258",
          "instructor": "TBA",
          "location": "SCW 819",
          "section": "BQT",
          "start": "18:00",
          "subject": "HEBR",
          "title": "Lower Intermediate Hebrew II"
       },
       {
          "capacity": 21,
          "code": "1104",
          "credits": 3,
          "department": "Hebrew",
          "display": {
             "dow": "MW",
             "end": "01:10pm",
             "start": "11:55am"
          },
          "dow": [
             1,
             3
          ],
          "end": "13:10",
          "id": "34397",
          "instructor": "Sarah Hochfeld",
          "location": "SCW 815",
          "section": "CPT",
          "start": "11:55",
          "subject": "HEBR",
          "title": "Lower Intermediate Hebrew II"
       },
       {
          "capacity": 21,
          "code": "1104",
          "credits": 3,
          "department": "Hebrew",
          "display": {
             "dow": "T",
             "end": "05:30pm",
             "start": "04:40pm"
          },
          "dow": [
             2
          ],
          "end": "17:30",
          "id": "34397",
          "instructor": "TBA",
          "location": "SCW 815",
          "section": "CPT",
          "start": "16:40",
          "subject": "HEBR",
          "title": "Lower Intermediate Hebrew II"
       },
       {
          "capacity": 20,
          "code": "1105",
          "credits": 3,
          "department": "Hebrew",
          "display": {
             "dow": "MW",
             "end": "10:15am",
             "start": "09:00am"
          },
          "dow": [
             1,
             3
          ],
          "end": "10:15",
          "id": "34275",
          "instructor": "Osnat Bishko",
          "location": "SCW ",
          "section": "A",
          "start": "9:00",
          "subject": "HEBR",
          "title": "Intermediate Hebrew I"
       },
       {
          "capacity": 20,
          "code": "1105",
          "credits": 3,
          "department": "Hebrew",
          "display": {
             "dow": "MW",
             "end": "11:40am",
             "start": "10:25am"
          },
          "dow": [
             1,
             3
          ],
          "end": "11:40",
          "id": "34261",
          "instructor": "Osnat Bishko",
          "location": "SCW 906",
          "section": "B",
          "start": "10:25",
          "subject": "HEBR",
          "title": "Intermediate Hebrew I"
       },
       {
          "capacity": 20,
          "code": "1105",
          "credits": 3,
          "department": "Hebrew",
          "display": {
             "dow": "MW",
             "end": "01:10pm",
             "start": "11:55am"
          },
          "dow": [
             1,
             3
          ],
          "end": "13:10",
          "id": "34305",
          "instructor": "Dawn Arussy",
          "location": "SCW 819",
          "section": "C",
          "start": "11:55",
          "subject": "HEBR",
          "title": "Intermediate Hebrew I"
       },
       {
          "capacity": 23,
          "code": "1106",
          "credits": 3,
          "department": "Hebrew",
          "display": {
             "dow": "MW",
             "end": "01:10pm",
             "start": "11:55am"
          },
          "dow": [
             1,
             3
          ],
          "end": "13:10",
          "id": "34263",
          "instructor": "Hilla Goldwicht",
          "location": "SCW 818",
          "section": "C",
          "start": "11:55",
          "subject": "HEBR",
          "title": "Intermediate Hebrew II"
       },
       {
          "capacity": 23,
          "code": "1106",
          "credits": 3,
          "department": "Hebrew",
          "display": {
             "dow": "M",
             "end": "02:55pm",
             "start": "01:40pm"
          },
          "dow": [
             1
          ],
          "end": "14:55",
          "id": "34264",
          "instructor": "Hilla Goldwicht",
          "location": "TBA",
          "section": "D2",
          "start": "13:40",
          "subject": "HEBR",
          "title": "Intermediate Hebrew II"
       },
       {
          "capacity": 23,
          "code": "1106",
          "credits": 3,
          "department": "Hebrew",
          "display": {
             "dow": "W",
             "end": "02:40pm",
             "start": "01:25pm"
          },
          "dow": [
             3
          ],
          "end": "14:40",
          "id": "34264",
          "instructor": "Hilla Goldwicht",
          "location": "SCW ",
          "section": "D2",
          "start": "13:25",
          "subject": "HEBR",
          "title": "Intermediate Hebrew II"
       },
       {
          "capacity": 23,
          "code": "1106",
          "credits": 3,
          "department": "Hebrew",
          "display": {
             "dow": "M",
             "end": "04:25pm",
             "start": "03:10pm"
          },
          "dow": [
             1
          ],
          "end": "16:25",
          "id": "34262",
          "instructor": "Rivka Weiner",
          "location": "SCW 1019",
          "section": "E",
          "start": "15:10",
          "subject": "HEBR",
          "title": "Intermediate Hebrew II"
       },
       {
          "capacity": 23,
          "code": "1106",
          "credits": 3,
          "department": "Hebrew",
          "display": {
             "dow": "W",
             "end": "04:50pm",
             "start": "03:35pm"
          },
          "dow": [
             3
          ],
          "end": "16:50",
          "id": "34262",
          "instructor": "Rivka Weiner",
          "location": "TBA",
          "section": "E",
          "start": "15:35",
          "subject": "HEBR",
          "title": "Intermediate Hebrew II"
       },
       {
          "capacity": 23,
          "code": "1107",
          "credits": 3,
          "department": "Hebrew",
          "display": {
             "dow": "MW",
             "end": "10:15am",
             "start": "09:00am"
          },
          "dow": [
             1,
             3
          ],
          "end": "10:15",
          "id": "34288",
          "instructor": "Ilona Ben-Moshe",
          "location": "SCW 818",
          "section": "A",
          "start": "9:00",
          "subject": "HEBR",
          "title": "Intermediate Hebrew III"
       },
       {
          "capacity": 23,
          "code": "1107",
          "credits": 3,
          "department": "Hebrew",
          "display": {
             "dow": "MW",
             "end": "01:10pm",
             "start": "11:55am"
          },
          "dow": [
             1,
             3
          ],
          "end": "13:10",
          "id": "34266",
          "instructor": "Osnat Bishko",
          "location": "SCW ",
          "section": "C",
          "start": "11:55",
          "subject": "HEBR",
          "title": "Intermediate Hebrew III"
       },
       {
          "capacity": 23,
          "code": "1107",
          "credits": 3,
          "department": "Hebrew",
          "display": {
             "dow": "M",
             "end": "02:55pm",
             "start": "01:40pm"
          },
          "dow": [
             1
          ],
          "end": "14:55",
          "id": "34265",
          "instructor": "Osnat Bishko",
          "location": "SCW ",
          "section": "D2",
          "start": "13:40",
          "subject": "HEBR",
          "title": "Intermediate Hebrew III"
       },
       {
          "capacity": 23,
          "code": "1107",
          "credits": 3,
          "department": "Hebrew",
          "display": {
             "dow": "W",
             "end": "02:40pm",
             "start": "01:25pm"
          },
          "dow": [
             3
          ],
          "end": "14:40",
          "id": "34265",
          "instructor": "Osnat Bishko",
          "location": "TBA",
          "section": "D2",
          "start": "13:25",
          "subject": "HEBR",
          "title": "Intermediate Hebrew III"
       },
       {
          "capacity": 23,
          "code": "1108",
          "credits": 3,
          "department": "Hebrew",
          "display": {
             "dow": "MW",
             "end": "11:40am",
             "start": "10:25am"
          },
          "dow": [
             1,
             3
          ],
          "end": "11:40",
          "id": "34274",
          "instructor": "Zafrira Lidovsky Cohen",
          "location": "SCW 1019",
          "section": "B",
          "start": "10:25",
          "subject": "HEBR",
          "title": "Intermediate Hebrew IV"
       },
       {
          "capacity": 23,
          "code": "1108",
          "credits": 3,
          "department": "Hebrew",
          "display": {
             "dow": "MW",
             "end": "01:10pm",
             "start": "11:55am"
          },
          "dow": [
             1,
             3
          ],
          "end": "13:10",
          "id": "34370",
          "instructor": "Zafrira Lidovsky Cohen",
          "location": "SCW 919",
          "section": "C",
          "start": "11:55",
          "subject": "HEBR",
          "title": "Intermediate Hebrew IV"
       },
       {
          "capacity": 23,
          "code": "1205",
          "credits": 3,
          "department": "Hebrew",
          "display": {
             "dow": "MW",
             "end": "10:15am",
             "start": "09:00am"
          },
          "dow": [
             1,
             3
          ],
          "end": "10:15",
          "id": "34233",
          "instructor": "Hilla Goldwicht",
          "location": "SCW 919",
          "section": "A",
          "start": "9:00",
          "subject": "HEBR",
          "title": "Upper Intermediate Hebrew I"
       },
       {
          "capacity": 25,
          "code": "1206",
          "credits": 3,
          "department": "Hebrew",
          "display": {
             "dow": "MW",
             "end": "11:40am",
             "start": "10:25am"
          },
          "dow": [
             1,
             3
          ],
          "end": "11:40",
          "id": "34329",
          "instructor": "Hilla Goldwicht",
          "location": "SCW 815",
          "section": "B",
          "start": "10:25",
          "subject": "HEBR",
          "title": "Upper Intermediate Hebrew II"
       },
       {
          "capacity": 14,
          "code": "1233",
          "credits": 1,
          "department": "Hebrew",
          "display": {
             "dow": "W",
             "end": "03:30pm",
             "start": "02:45pm"
          },
          "dow": [
             3
          ],
          "end": "15:30",
          "id": "34248",
          "instructor": "Hilla Goldwicht",
          "location": "SCW 818",
          "section": "CLB",
          "start": "14:45",
          "subject": "HEBR",
          "title": "Advanced Hebrew Conversation"
       },
       {
          "capacity": 20,
          "code": "2669",
          "credits": 3,
          "department": "Hebrew",
          "display": {
             "dow": "M",
             "end": "02:55pm",
             "start": "01:40pm"
          },
          "dow": [
             1
          ],
          "end": "14:55",
          "id": "35509",
          "instructor": "Zafrira Lidovsky Cohen",
          "location": "TBA",
          "section": "D2",
          "start": "13:40",
          "subject": "HEBR",
          "title": "Hebrew Short Story of 20th Cen"
       },
       {
          "capacity": 20,
          "code": "2669",
          "credits": 3,
          "department": "Hebrew",
          "display": {
             "dow": "W",
             "end": "02:40pm",
             "start": "01:25pm"
          },
          "dow": [
             3
          ],
          "end": "14:40",
          "id": "35509",
          "instructor": "Zafrira Lidovsky Cohen",
          "location": "TBA",
          "section": "D2",
          "start": "13:25",
          "subject": "HEBR",
          "title": "Hebrew Short Story of 20th Cen"
       },
       {
          "capacity": 30,
          "code": "1401",
          "credits": 3,
          "department": "History",
          "display": {
             "dow": "MW",
             "end": "01:10pm",
             "start": "11:55am"
          },
          "dow": [
             1,
             3
          ],
          "end": "13:10",
          "id": "35196",
          "instructor": "TBA",
          "location": "TBA",
          "section": "C",
          "start": "11:55",
          "subject": "HIST",
          "title": "History of East Asia"
       },
       {
          "capacity": 30,
          "code": "2128",
          "credits": 3,
          "department": "History",
          "display": {
             "dow": "TR",
             "end": "11:45am",
             "start": "10:30am"
          },
          "dow": [
             2,
             4
          ],
          "end": "11:45",
          "id": "35567",
          "instructor": "Jeffrey Freedman",
          "location": "TBA",
          "section": "K",
          "start": "10:30",
          "subject": "HIST",
          "title": "Origins of Democratic Political Culture"
       },
       {
          "capacity": 30,
          "code": "2141",
          "credits": 3,
          "department": "History",
          "display": {
             "dow": "TR",
             "end": "01:15pm",
             "start": "12:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "13:15",
          "id": "35193",
          "instructor": "Joshua D. Zimmerman",
          "location": "TBA",
          "section": "L",
          "start": "12:00",
          "subject": "HIST",
          "title": "Holocaust"
       },
       {
          "capacity": 30,
          "code": "2165",
          "credits": 3,
          "department": "History",
          "display": {
             "dow": "MW",
             "end": "10:15am",
             "start": "09:00am"
          },
          "dow": [
             1,
             3
          ],
          "end": "10:15",
          "id": "35568",
          "instructor": "Mario Kessler",
          "location": "TBA",
          "section": "A",
          "start": "9:00",
          "subject": "HIST",
          "title": "Europe Since 1945"
       },
       {
          "capacity": 30,
          "code": "2207",
          "credits": 3,
          "department": "History",
          "display": {
             "dow": "MW",
             "end": "02:40pm",
             "start": "01:25pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "14:40",
          "id": "35566",
          "instructor": "Hadassa Kosak",
          "location": "TBA",
          "section": "D1",
          "start": "13:25",
          "subject": "HIST",
          "title": "New Deal & Great Depression"
       },
       {
          "capacity": 35,
          "code": "2520",
          "credits": 3,
          "department": "History",
          "display": {
             "dow": "TR",
             "end": "03:00pm",
             "start": "01:45pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "15:00",
          "id": "35190",
          "instructor": "Douglas Burgess",
          "location": "TBA",
          "section": "M",
          "start": "13:45",
          "subject": "HIST",
          "title": "Atlantic World"
       },
       {
          "capacity": 30,
          "code": "2913",
          "credits": 3,
          "department": "History",
          "display": {
             "dow": "MW",
             "end": "11:40am",
             "start": "10:25am"
          },
          "dow": [
             1,
             3
          ],
          "end": "11:40",
          "id": "35194",
          "instructor": "Hadassa Kosak",
          "location": "TBA",
          "section": "B",
          "start": "10:25",
          "subject": "HIST",
          "title": "Immigrant Nations: US & Israel"
       },
       {
          "capacity": 50,
          "code": "1001",
          "credits": 3,
          "department": "Information & Decision Science",
          "display": {
             "dow": "TR",
             "end": "01:15pm",
             "start": "12:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "13:15",
          "id": "34438",
          "instructor": "Avi Naiman",
          "location": "LEX215 LX420",
          "section": "L",
          "start": "12:00",
          "subject": "IDS",
          "title": "Business Algebra"
       },
       {
          "capacity": 22,
          "code": "1020",
          "credits": 3,
          "department": "Information & Decision Science",
          "display": {
             "dow": "MW",
             "end": "10:15am",
             "start": "09:00am"
          },
          "dow": [
             1,
             3
          ],
          "end": "10:15",
          "id": "34300",
          "instructor": "Kevin Brabazon",
          "location": "LEX215 LX312",
          "section": "A",
          "start": "9:00",
          "subject": "IDS",
          "title": "Intro to Information Systems"
       },
       {
          "capacity": 25,
          "code": "1020",
          "credits": 3,
          "department": "Information & Decision Science",
          "display": {
             "dow": "MW",
             "end": "02:40pm",
             "start": "01:25pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "14:40",
          "id": "35594",
          "instructor": "Kevin Brabazon",
          "location": "TBA",
          "section": "D1",
          "start": "13:25",
          "subject": "IDS",
          "title": "Intro to Information Systems"
       },
       {
          "capacity": 35,
          "code": "1131",
          "credits": 3,
          "department": "Information & Decision Science",
          "display": {
             "dow": "TR",
             "end": "01:15pm",
             "start": "12:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "13:15",
          "id": "34380",
          "instructor": "Vladimir Kovtun",
          "location": "LEX215 LX313",
          "section": "L",
          "start": "12:00",
          "subject": "IDS",
          "title": "Statistics for Business"
       },
       {
          "capacity": 30,
          "code": "1456",
          "credits": 3,
          "department": "Information & Decision Science",
          "display": {
             "dow": "TR",
             "end": "03:00pm",
             "start": "01:45pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "15:00",
          "id": "34331",
          "instructor": "Vladimir Kovtun",
          "location": "LEX215 LX210",
          "section": "M",
          "start": "13:45",
          "subject": "IDS",
          "title": "Quantitative Methods Managment"
       },
       {
          "capacity": 20,
          "code": "2030",
          "credits": 3,
          "department": "Information & Decision Science",
          "display": {
             "dow": "MW",
             "end": "01:10pm",
             "start": "11:55am"
          },
          "dow": [
             1,
             3
          ],
          "end": "13:10",
          "id": "34439",
          "instructor": "Yitzchak S. Rosenthal",
          "location": "SCW 315",
          "section": "C",
          "start": "11:55",
          "subject": "IDS",
          "title": "Bus. Analytics & Programming"
       },
       {
          "capacity": 20,
          "code": "2460",
          "credits": 3,
          "department": "Information & Decision Science",
          "display": {
             "dow": "MW",
             "end": "11:40am",
             "start": "10:25am"
          },
          "dow": [
             1,
             3
          ],
          "end": "11:40",
          "id": "35641",
          "instructor": "Yitzchak S. Rosenthal",
          "location": "TBA",
          "section": "B",
          "start": "10:25",
          "subject": "IDS",
          "title": "Data Management-Bus Analytics"
       },
       {
          "capacity": 15,
          "code": "3216",
          "credits": 1,
          "department": "Jewish Education",
          "display": {
             "dow": "T",
             "end": "11:00am",
             "start": "08:00am"
          },
          "dow": [
             2
          ],
          "end": "11:00",
          "id": "34408",
          "instructor": "Deena S. Rabinovich",
          "location": "OFF SITE",
          "section": "JK",
          "start": "8:00",
          "subject": "JEDU",
          "title": "Jewish Education Field Work"
       },
       {
          "capacity": 15,
          "code": "3216",
          "credits": 1,
          "department": "Jewish Education",
          "display": {
             "dow": "R",
             "end": "11:45am",
             "start": "10:30am"
          },
          "dow": [
             4
          ],
          "end": "11:45",
          "id": "34408",
          "instructor": "Deena S. Rabinovich",
          "location": "SCW 918",
          "section": "JK",
          "start": "10:30",
          "subject": "JEDU",
          "title": "Jewish Education Field Work"
       },
       {
          "capacity": 15,
          "code": "3218",
          "credits": 1,
          "department": "Jewish Education",
          "display": {
             "dow": "T",
             "end": "11:00am",
             "start": "08:00am"
          },
          "dow": [
             2
          ],
          "end": "11:00",
          "id": "34316",
          "instructor": "Deena S. Rabinovich",
          "location": "OFF SITE",
          "section": "JK",
          "start": "8:00",
          "subject": "JEDU",
          "title": "Jewish Educ Field Work/Seminar"
       },
       {
          "capacity": 15,
          "code": "3218",
          "credits": 1,
          "department": "Jewish Education",
          "display": {
             "dow": "R",
             "end": "10:15am",
             "start": "09:00am"
          },
          "dow": [
             4
          ],
          "end": "10:15",
          "id": "34316",
          "instructor": "Deena S. Rabinovich",
          "location": "SCW 918",
          "section": "JK",
          "start": "9:00",
          "subject": "JEDU",
          "title": "Jewish Educ Field Work/Seminar"
       },
       {
          "capacity": 32,
          "code": "1329H",
          "credits": 2,
          "department": "Jewish History",
          "display": {
             "dow": "T",
             "end": "04:55pm",
             "start": "03:15pm"
          },
          "dow": [
             2
          ],
          "end": "16:55",
          "id": "35501",
          "instructor": "Ephraim Kanarfogel",
          "location": "TBA",
          "section": "NPT",
          "start": "15:15",
          "subject": "JHIS",
          "title": "History of Halakhah"
       },
       {
          "capacity": 27,
          "code": "1415",
          "credits": 3,
          "department": "Jewish History",
          "display": {
             "dow": "M",
             "end": "04:25pm",
             "start": "03:10pm"
          },
          "dow": [
             1
          ],
          "end": "16:25",
          "id": "34278",
          "instructor": "Mordecai Paldiel",
          "location": "SCW 1015",
          "section": "E",
          "start": "15:10",
          "subject": "JHIS",
          "title": "History of Zionism"
       },
       {
          "capacity": 27,
          "code": "1415",
          "credits": 3,
          "department": "Jewish History",
          "display": {
             "dow": "W",
             "end": "04:50pm",
             "start": "03:35pm"
          },
          "dow": [
             3
          ],
          "end": "16:50",
          "id": "34278",
          "instructor": "Mordecai Paldiel",
          "location": "SCW 1015",
          "section": "E",
          "start": "15:35",
          "subject": "JHIS",
          "title": "History of Zionism"
       },
       {
          "capacity": 27,
          "code": "1486",
          "credits": 3,
          "department": "Jewish History",
          "display": {
             "dow": "M",
             "end": "05:55pm",
             "start": "04:40pm"
          },
          "dow": [
             1
          ],
          "end": "17:55",
          "id": "34260",
          "instructor": "Mordecai Paldiel",
          "location": "SCW 1015",
          "section": "F",
          "start": "16:40",
          "subject": "JHIS",
          "title": "Holocaust and Rescue"
       },
       {
          "capacity": 27,
          "code": "1486",
          "credits": 3,
          "department": "Jewish History",
          "display": {
             "dow": "W",
             "end": "06:15pm",
             "start": "05:00pm"
          },
          "dow": [
             3
          ],
          "end": "18:15",
          "id": "34260",
          "instructor": "Mordecai Paldiel",
          "location": "SCW 1015",
          "section": "F",
          "start": "17:00",
          "subject": "JHIS",
          "title": "Holocaust and Rescue"
       },
       {
          "capacity": 32,
          "code": "1577",
          "credits": 2,
          "department": "Jewish History",
          "display": {
             "dow": "W",
             "end": "01:23pm",
             "start": "11:43am"
          },
          "dow": [
             3
          ],
          "end": "13:23",
          "id": "34458",
          "instructor": "Jeffrey S. Gurock",
          "location": "SCW 102",
          "section": "CW",
          "start": "11:43",
          "subject": "JHIS",
          "title": "Jewish Religion in America"
       },
       {
          "capacity": 30,
          "code": "1807",
          "credits": 3,
          "department": "Jewish History",
          "display": {
             "dow": "MW",
             "end": "02:40pm",
             "start": "01:25pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "14:40",
          "id": "34445",
          "instructor": "Jill C. Katz",
          "location": "SCW 306",
          "section": "D1",
          "start": "13:25",
          "subject": "JHIS",
          "title": "History of Jerusalem"
       },
       {
          "capacity": 30,
          "code": "4932",
          "credits": 3,
          "department": "Jewish History",
          "display": {
             "dow": "TR",
             "end": "11:45am",
             "start": "10:30am"
          },
          "dow": [
             2,
             4
          ],
          "end": "11:45",
          "id": "35502",
          "instructor": "Ronnie Perelis",
          "location": "TBA",
          "section": "K",
          "start": "10:30",
          "subject": "JHIS",
          "title": "Tps:Wanderers,Exiles&Merchants"
       },
       {
          "capacity": 30,
          "code": "1204",
          "credits": 3,
          "department": "Jewish Philosophy",
          "display": {
             "dow": "M",
             "end": "05:55pm",
             "start": "04:40pm"
          },
          "dow": [
             1
          ],
          "end": "17:55",
          "id": "34200",
          "instructor": "David C. Shatz",
          "location": "LEX215 LX210",
          "section": "F",
          "start": "16:40",
          "subject": "JPHI",
          "title": "Jewish Ethics"
       },
       {
          "capacity": 30,
          "code": "1204",
          "credits": 3,
          "department": "Jewish Philosophy",
          "display": {
             "dow": "W",
             "end": "06:15pm",
             "start": "05:00pm"
          },
          "dow": [
             3
          ],
          "end": "18:15",
          "id": "34200",
          "instructor": "David C. Shatz",
          "location": "LEX215 LX210",
          "section": "F",
          "start": "17:00",
          "subject": "JPHI",
          "title": "Jewish Ethics"
       },
       {
          "capacity": 28,
          "code": "1647",
          "credits": 2,
          "department": "Jewish Philosophy",
          "display": {
             "dow": "R",
             "end": "03:14pm",
             "start": "01:34pm"
          },
          "dow": [
             4
          ],
          "end": "15:14",
          "id": "35529",
          "instructor": "Gamliel Shmalo",
          "location": "TBA",
          "section": "MR",
          "start": "13:34",
          "subject": "JPHI",
          "title": "Phil of R.Yehuda HaLevi"
       },
       {
          "capacity": 28,
          "code": "1814",
          "credits": 2,
          "department": "Jewish Philosophy",
          "display": {
             "dow": "R",
             "end": "01:30pm",
             "start": "11:50am"
          },
          "dow": [
             4
          ],
          "end": "13:30",
          "id": "35528",
          "instructor": "Gamliel Shmalo",
          "location": "TBA",
          "section": "LR",
          "start": "11:50",
          "subject": "JPHI",
          "title": "Mod Jewish Thought Rav Kook II"
       },
       {
          "capacity": 30,
          "code": "4932",
          "credits": 2,
          "department": "Jewish Philosophy",
          "display": {
             "dow": "T",
             "end": "04:55pm",
             "start": "03:15pm"
          },
          "dow": [
             2
          ],
          "end": "16:55",
          "id": "35530",
          "instructor": "Yosef Zvi Bronstein",
          "location": "TBA",
          "section": "NPT",
          "start": "15:15",
          "subject": "JPHI",
          "title": "Tps:Philo of Lubavitcher Rebbe"
       },
       {
          "capacity": 25,
          "code": "1001",
          "credits": 3,
          "department": "Judaic Studies",
          "display": {
             "dow": "TR",
             "end": "10:15am",
             "start": "09:00am"
          },
          "dow": [
             2,
             4
          ],
          "end": "10:15",
          "id": "34224",
          "instructor": "Lawrence Moshiach Hajioff",
          "location": "SCW 418",
          "section": "J",
          "start": "9:00",
          "subject": "JUDS",
          "title": "Intro to Judaism"
       },
       {
          "capacity": 33,
          "code": "1201",
          "credits": 3,
          "department": "Judaic Studies",
          "display": {
             "dow": "MW",
             "end": "01:10pm",
             "start": "11:55am"
          },
          "dow": [
             1,
             3
          ],
          "end": "13:10",
          "id": "34282",
          "instructor": "David A. Pahmer",
          "location": "SCW 101",
          "section": "C",
          "start": "11:55",
          "subject": "JUDS",
          "title": "Jewish Liturgy-Hilchot Tefilla"
       },
       {
          "capacity": 30,
          "code": "1203",
          "credits": 2,
          "department": "Judaic Studies",
          "display": {
             "dow": "T",
             "end": "03:10pm",
             "start": "01:30pm"
          },
          "dow": [
             2
          ],
          "end": "15:10",
          "id": "35515",
          "instructor": "Elchanan A. Adler",
          "location": "TBA",
          "section": "MT",
          "start": "13:30",
          "subject": "JUDS",
          "title": "Liturgy: Musaf of Shabbat"
       },
       {
          "capacity": 37,
          "code": "1350",
          "credits": 3,
          "department": "Judaic Studies",
          "display": {
             "dow": "TR",
             "end": "11:45am",
             "start": "10:30am"
          },
          "dow": [
             2,
             4
          ],
          "end": "11:45",
          "id": "34290",
          "instructor": "Lawrence Moshiach Hajioff",
          "location": "SCW 418",
          "section": "K",
          "start": "10:30",
          "subject": "JUDS",
          "title": "Introduction to Jewish Beliefs"
       },
       {
          "capacity": 31,
          "code": "1403",
          "credits": 3,
          "department": "Judaic Studies",
          "display": {
             "dow": "M",
             "end": "02:55pm",
             "start": "01:40pm"
          },
          "dow": [
             1
          ],
          "end": "14:55",
          "id": "34406",
          "instructor": "David A. Pahmer",
          "location": "SCW 101",
          "section": "D2",
          "start": "13:40",
          "subject": "JUDS",
          "title": "Basic Jewish Concepts"
       },
       {
          "capacity": 31,
          "code": "1403",
          "credits": 3,
          "department": "Judaic Studies",
          "display": {
             "dow": "W",
             "end": "02:40pm",
             "start": "01:25pm"
          },
          "dow": [
             3
          ],
          "end": "14:40",
          "id": "34406",
          "instructor": "David A. Pahmer",
          "location": "SCW 101",
          "section": "D2",
          "start": "13:25",
          "subject": "JUDS",
          "title": "Basic Jewish Concepts"
       },
       {
          "capacity": 30,
          "code": "1406",
          "credits": 3,
          "department": "Judaic Studies",
          "display": {
             "dow": "MW",
             "end": "11:40am",
             "start": "10:25am"
          },
          "dow": [
             1,
             3
          ],
          "end": "11:40",
          "id": "35532",
          "instructor": "Lawrence Moshiach Hajioff",
          "location": "TBA",
          "section": "B",
          "start": "10:25",
          "subject": "JUDS",
          "title": "Basic Jewish Concepts"
       },
       {
          "capacity": 30,
          "code": "1436",
          "credits": 4,
          "department": "Judaic Studies",
          "display": {
             "dow": "TR",
             "end": "03:00pm",
             "start": "01:20pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "15:00",
          "id": "35517",
          "instructor": "Daniel E. Wolff",
          "location": "TBA",
          "section": "M",
          "start": "13:20",
          "subject": "JUDS",
          "title": "Kashrut"
       },
       {
          "capacity": 32,
          "code": "1440",
          "credits": 3,
          "department": "Judaic Studies",
          "display": {
             "dow": "TR",
             "end": "01:15pm",
             "start": "12:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "13:15",
          "id": "34252",
          "instructor": "Mindy F. Eisenman",
          "location": "SCW 401",
          "section": "L",
          "start": "12:00",
          "subject": "JUDS",
          "title": "Jewish Laws & Cust: Family Law"
       },
       {
          "capacity": 33,
          "code": "1443",
          "credits": 3,
          "department": "Judaic Studies",
          "display": {
             "dow": "TR",
             "end": "11:45am",
             "start": "10:30am"
          },
          "dow": [
             2,
             4
          ],
          "end": "11:45",
          "id": "34231",
          "instructor": "Nechama Esther Price",
          "location": "SCW 601",
          "section": "K",
          "start": "10:30",
          "subject": "JUDS",
          "title": "Jewish Laws & Cust: Family Law"
       },
       {
          "capacity": 30,
          "code": "1443A",
          "credits": 2,
          "department": "Judaic Studies",
          "display": {
             "dow": "R",
             "end": "06:20pm",
             "start": "04:40pm"
          },
          "dow": [
             4
          ],
          "end": "18:20",
          "id": "34192",
          "instructor": "Meir Fulda",
          "location": "SCW 401",
          "section": "PR",
          "start": "16:40",
          "subject": "JUDS",
          "title": "Jewish Laws & Cust: Family Law"
       },
       {
          "capacity": 33,
          "code": "1449",
          "credits": 3,
          "department": "Judaic Studies",
          "display": {
             "dow": "M",
             "end": "04:25pm",
             "start": "03:10pm"
          },
          "dow": [
             1
          ],
          "end": "16:25",
          "id": "34187",
          "instructor": "Shlomo Hochberg",
          "location": "SCW 401",
          "section": "E",
          "start": "15:10",
          "subject": "JUDS",
          "title": "Laws & Customs:Marriage"
       },
       {
          "capacity": 33,
          "code": "1449",
          "credits": 3,
          "department": "Judaic Studies",
          "display": {
             "dow": "W",
             "end": "04:50pm",
             "start": "03:35pm"
          },
          "dow": [
             3
          ],
          "end": "16:50",
          "id": "34187",
          "instructor": "Shlomo Hochberg",
          "location": "SCW 401",
          "section": "E",
          "start": "15:35",
          "subject": "JUDS",
          "title": "Laws & Customs:Marriage"
       },
       {
          "capacity": 33,
          "code": "1450",
          "credits": 3,
          "department": "Judaic Studies",
          "display": {
             "dow": "TR",
             "end": "03:00pm",
             "start": "01:45pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "15:00",
          "id": "34280",
          "instructor": "Nechama Esther Price",
          "location": "SCW 601",
          "section": "M",
          "start": "13:45",
          "subject": "JUDS",
          "title": "Marriage in Halakhah I"
       },
       {
          "capacity": 33,
          "code": "1453",
          "credits": 3,
          "department": "Judaic Studies",
          "display": {
             "dow": "MW",
             "end": "11:40am",
             "start": "10:25am"
          },
          "dow": [
             1,
             3
          ],
          "end": "11:40",
          "id": "35519",
          "instructor": "Saul J. Berman",
          "location": "TBA",
          "section": "B",
          "start": "10:25",
          "subject": "JUDS",
          "title": "Shabbat: Survey"
       },
       {
          "capacity": 33,
          "code": "1455",
          "credits": 3,
          "department": "Judaic Studies",
          "display": {
             "dow": "TR",
             "end": "01:15pm",
             "start": "12:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "13:15",
          "id": "35523",
          "instructor": "Aaron Cohen",
          "location": "TBA",
          "section": "L",
          "start": "12:00",
          "subject": "JUDS",
          "title": "Shabbat Survey"
       },
       {
          "capacity": 35,
          "code": "1457",
          "credits": 3,
          "department": "Judaic Studies",
          "display": {
             "dow": "TR",
             "end": "04:30pm",
             "start": "03:15pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "16:30",
          "id": "35518",
          "instructor": "Daniel E. Wolff",
          "location": "TBA",
          "section": "N",
          "start": "15:15",
          "subject": "JUDS",
          "title": "The Sabbath"
       },
       {
          "capacity": 35,
          "code": "1465",
          "credits": 3,
          "department": "Judaic Studies",
          "display": {
             "dow": "TR",
             "end": "11:45am",
             "start": "10:30am"
          },
          "dow": [
             2,
             4
          ],
          "end": "11:45",
          "id": "34285",
          "instructor": "Aaron Cohen",
          "location": "SCW 101",
          "section": "K",
          "start": "10:30",
          "subject": "JUDS",
          "title": "The Festivals I: Survey"
       },
       {
          "capacity": 20,
          "code": "1486H",
          "credits": 2,
          "department": "Judaic Studies",
          "display": {
             "dow": "W",
             "end": "04:50pm",
             "start": "03:10pm"
          },
          "dow": [
             3
          ],
          "end": "16:50",
          "id": "35516",
          "instructor": "Moshe Y. Kahn",
          "location": "TBA",
          "section": "EW",
          "start": "15:10",
          "subject": "JUDS",
          "title": "Daily Life: Laws of Blessings"
       },
       {
          "capacity": 30,
          "code": "1488",
          "credits": 3,
          "department": "Judaic Studies",
          "display": {
             "dow": "TR",
             "end": "01:15pm",
             "start": "12:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "13:15",
          "id": "35522",
          "instructor": "Kenneth Auman",
          "location": "TBA",
          "section": "L",
          "start": "12:00",
          "subject": "JUDS",
          "title": "Daily Life: Birkat Hamazon"
       },
       {
          "capacity": 33,
          "code": "1508",
          "credits": 3,
          "department": "Judaic Studies",
          "display": {
             "dow": "MW",
             "end": "10:15am",
             "start": "09:00am"
          },
          "dow": [
             1,
             3
          ],
          "end": "10:15",
          "id": "35520",
          "instructor": "Gideon I. Shloush",
          "location": "TBA",
          "section": "A",
          "start": "9:00",
          "subject": "JUDS",
          "title": "Topics In Jewish Law"
       },
       {
          "capacity": 35,
          "code": "1512",
          "credits": 3,
          "department": "Judaic Studies",
          "display": {
             "dow": "TR",
             "end": "01:15pm",
             "start": "12:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "13:15",
          "id": "35526",
          "instructor": "Daniel E. Wolff",
          "location": "TBA",
          "section": "L",
          "start": "12:00",
          "subject": "JUDS",
          "title": "Tps: Development of Jewish Law"
       },
       {
          "capacity": 33,
          "code": "1574",
          "credits": 3,
          "department": "Judaic Studies",
          "display": {
             "dow": "M",
             "end": "02:55pm",
             "start": "01:40pm"
          },
          "dow": [
             1
          ],
          "end": "14:55",
          "id": "35521",
          "instructor": "Saul J. Berman",
          "location": "TBA",
          "section": "D2",
          "start": "13:40",
          "subject": "JUDS",
          "title": "The Individual in Society"
       },
       {
          "capacity": 33,
          "code": "1574",
          "credits": 3,
          "department": "Judaic Studies",
          "display": {
             "dow": "W",
             "end": "02:40pm",
             "start": "01:25pm"
          },
          "dow": [
             3
          ],
          "end": "14:40",
          "id": "35521",
          "instructor": "Saul J. Berman",
          "location": "TBA",
          "section": "D2",
          "start": "13:25",
          "subject": "JUDS",
          "title": "The Individual in Society"
       },
       {
          "capacity": 33,
          "code": "1582",
          "credits": 3,
          "department": "Judaic Studies",
          "display": {
             "dow": "MW",
             "end": "10:15am",
             "start": "09:00am"
          },
          "dow": [
             1,
             3
          ],
          "end": "10:15",
          "id": "34292",
          "instructor": "Saul J. Berman",
          "location": "SCW 102",
          "section": "A",
          "start": "9:00",
          "subject": "JUDS",
          "title": "Medical Ethics"
       },
       {
          "capacity": 20,
          "code": "1591H",
          "credits": 3,
          "department": "Judaic Studies",
          "display": {
             "dow": "TR",
             "end": "11:45am",
             "start": "10:30am"
          },
          "dow": [
             2,
             4
          ],
          "end": "11:45",
          "id": "35534",
          "instructor": "Kenneth Auman",
          "location": "TBA",
          "section": "K",
          "start": "10:30",
          "subject": "JUDS",
          "title": "Jewish Civil Law"
       },
       {
          "capacity": 45,
          "code": "1603",
          "credits": 2,
          "department": "Judaic Studies",
          "display": {
             "dow": "R",
             "end": "01:40pm",
             "start": "12:00pm"
          },
          "dow": [
             4
          ],
          "end": "13:40",
          "id": "35524",
          "instructor": "Jacob J. Schacter",
          "location": "TBA",
          "section": "LR",
          "start": "12:00",
          "subject": "JUDS",
          "title": "Modern Jewish Problems"
       },
       {
          "capacity": 25,
          "code": "1841",
          "credits": 3,
          "department": "Judaic Studies",
          "display": {
             "dow": "MW",
             "end": "11:40am",
             "start": "10:25am"
          },
          "dow": [
             1,
             3
          ],
          "end": "11:40",
          "id": "34238",
          "instructor": "David A. Pahmer",
          "location": "SCW 101",
          "section": "B",
          "start": "10:25",
          "subject": "JUDS",
          "title": "Intro to Talmud I"
       },
       {
          "capacity": 25,
          "code": "1843",
          "credits": 4,
          "department": "Judaic Studies",
          "display": {
             "dow": "MW",
             "end": "03:00pm",
             "start": "01:20pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "15:00",
          "id": "34174",
          "instructor": "Moshe Y. Kahn",
          "location": "SCW 406",
          "section": "D",
          "start": "13:20",
          "subject": "JUDS",
          "title": "Intermediate Talmud I"
       },
       {
          "capacity": 20,
          "code": "1845H",
          "credits": 5,
          "department": "Judaic Studies",
          "display": {
             "dow": "MW",
             "end": "10:15am",
             "start": "09:00am"
          },
          "dow": [
             1,
             3
          ],
          "end": "10:15",
          "id": "34230",
          "instructor": "Moshe Y. Kahn",
          "location": "SCW 606",
          "section": "AJ",
          "start": "9:00",
          "subject": "JUDS",
          "title": "Advanced Talmud"
       },
       {
          "capacity": 20,
          "code": "1845H",
          "credits": 5,
          "department": "Judaic Studies",
          "display": {
             "dow": "TR",
             "end": "10:20am",
             "start": "08:40am"
          },
          "dow": [
             2,
             4
          ],
          "end": "10:20",
          "id": "34230",
          "instructor": "Moshe Y. Kahn",
          "location": "SCW 606",
          "section": "AJ",
          "start": "8:40",
          "subject": "JUDS",
          "title": "Advanced Talmud"
       },
       {
          "capacity": 40,
          "code": "1852",
          "credits": 2,
          "department": "Judaic Studies",
          "display": {
             "dow": "W",
             "end": "08:00pm",
             "start": "06:20pm"
          },
          "dow": [
             3
          ],
          "end": "20:00",
          "id": "35525",
          "instructor": "Meir Goldwicht",
          "location": "TBA",
          "section": "GHW",
          "start": "18:20",
          "subject": "JUDS",
          "title": "Selected Rabbinic Literature"
       },
       {
          "capacity": 40,
          "code": "1854",
          "credits": 3,
          "department": "Judaic Studies",
          "display": {
             "dow": "TR",
             "end": "10:15am",
             "start": "09:00am"
          },
          "dow": [
             2,
             4
          ],
          "end": "10:15",
          "id": "34425",
          "instructor": "Aaron Cohen",
          "location": "SCW 101",
          "section": "J",
          "start": "9:00",
          "subject": "JUDS",
          "title": "Rab Lit:Hashkafa of Vilna Gaon"
       },
       {
          "capacity": 0,
          "code": "ELEC",
          "credits": 0,
          "department": "Judaic Studies",
          "display": {
             "dow": "TBA",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "34853",
          "instructor": "TBA",
          "location": "TBA",
          "section": "IP1",
          "start": "",
          "subject": "JUDS",
          "title": "Elective(s)"
       },
       {
          "capacity": 35,
          "code": "1020",
          "credits": 3,
          "department": "Management",
          "display": {
             "dow": "MW",
             "end": "02:40pm",
             "start": "01:25pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "14:40",
          "id": "34209",
          "instructor": "Judith Calvo-Ryba",
          "location": "LEX215 YAGODACOMM",
          "section": "D1",
          "start": "13:25",
          "subject": "MAN",
          "title": "Mangmnt in a Global Environmnt"
       },
       {
          "capacity": 30,
          "code": "2110",
          "credits": 3,
          "department": "Management",
          "display": {
             "dow": "MW",
             "end": "01:10pm",
             "start": "11:55am"
          },
          "dow": [
             1,
             3
          ],
          "end": "13:10",
          "id": "35595",
          "instructor": "Andrew M. Geller",
          "location": "TBA",
          "section": "C",
          "start": "11:55",
          "subject": "MAN",
          "title": "Organizational Behavior 35595  MAN 2110 - C"
       },
       {
          "capacity": 25,
          "code": "2370",
          "credits": 3,
          "department": "Management",
          "display": {
             "dow": "TR",
             "end": "01:15pm",
             "start": "12:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "13:15",
          "id": "34314",
          "instructor": "Steven M. Nissenfeld",
          "location": "LEX215 LX314",
          "section": "L",
          "start": "12:00",
          "subject": "MAN",
          "title": "Human Resources"
       },
       {
          "capacity": 18,
          "code": "2941",
          "credits": 3,
          "department": "Management",
          "display": {
             "dow": "TR",
             "end": "10:15am",
             "start": "09:00am"
          },
          "dow": [
             2,
             4
          ],
          "end": "10:15",
          "id": "34381",
          "instructor": "Robert Tufts",
          "location": "LEX215 ",
          "section": "J",
          "start": "9:00",
          "subject": "MAN",
          "title": "Sports Marketing Management"
       },
       {
          "capacity": 25,
          "code": "3780",
          "credits": 3,
          "department": "Management",
          "display": {
             "dow": "TR",
             "end": "11:45am",
             "start": "10:30am"
          },
          "dow": [
             2,
             4
          ],
          "end": "11:45",
          "id": "34420",
          "instructor": "Robert Tufts",
          "location": "LEX215 LX405",
          "section": "K",
          "start": "10:30",
          "subject": "MAN",
          "title": "Principles of Entrepreneurship"
       },
       {
          "capacity": 35,
          "code": "1001",
          "credits": 3,
          "department": "Marketing",
          "display": {
             "dow": "MW",
             "end": "10:15am",
             "start": "09:00am"
          },
          "dow": [
             1,
             3
          ],
          "end": "10:15",
          "id": "34332",
          "instructor": "Jesse Itzkowitz",
          "location": "LEX215 ",
          "section": "A",
          "start": "9:00",
          "subject": "MAR",
          "title": "Principles of Marketing"
       },
       {
          "capacity": 18,
          "code": "2941",
          "credits": 3,
          "department": "Marketing",
          "display": {
             "dow": "TR",
             "end": "10:15am",
             "start": "09:00am"
          },
          "dow": [
             2,
             4
          ],
          "end": "10:15",
          "id": "34384",
          "instructor": "Robert Tufts",
          "location": "LEX215 LX405",
          "section": "J",
          "start": "9:00",
          "subject": "MAR",
          "title": "Sports Marketing Management"
       },
       {
          "capacity": 9,
          "code": "3323",
          "credits": 3,
          "department": "Marketing",
          "display": {
             "dow": "T",
             "end": "08:30pm",
             "start": "06:00pm"
          },
          "dow": [
             2
          ],
          "end": "20:30",
          "id": "34431",
          "instructor": "Erik Mintz",
          "location": "LEX215 LX718",
          "section": "QRT",
          "start": "18:00",
          "subject": "MAR",
          "title": "Creative Advertising"
       },
       {
          "capacity": 25,
          "code": "3502",
          "credits": 3,
          "department": "Marketing",
          "display": {
             "dow": "TR",
             "end": "11:45am",
             "start": "10:30am"
          },
          "dow": [
             2,
             4
          ],
          "end": "11:45",
          "id": "34429",
          "instructor": "Johanna Goldstein",
          "location": "LEX215 LX209",
          "section": "K",
          "start": "10:30",
          "subject": "MAR",
          "title": "Creative & Innovative Prod Dev"
       },
       {
          "capacity": 30,
          "code": "3530",
          "credits": 3,
          "department": "Marketing",
          "display": {
             "dow": "R",
             "end": "04:15pm",
             "start": "01:45pm"
          },
          "dow": [
             4
          ],
          "end": "16:15",
          "id": "35642",
          "instructor": "TBA",
          "location": "TBA",
          "section": "MNR",
          "start": "13:45",
          "subject": "MAR",
          "title": "Fashion Accessories and Design"
       },
       {
          "capacity": 22,
          "code": "3720",
          "credits": 3,
          "department": "Marketing",
          "display": {
             "dow": "MW",
             "end": "11:40am",
             "start": "10:25am"
          },
          "dow": [
             1,
             3
          ],
          "end": "11:40",
          "id": "34428",
          "instructor": "Jesse Itzkowitz",
          "location": "LEX215 LX210",
          "section": "B",
          "start": "10:25",
          "subject": "MAR",
          "title": "Marketing Capstone"
       },
       {
          "capacity": 25,
          "code": "5931",
          "credits": 1,
          "department": "Mathematics",
          "display": {
             "dow": "W",
             "end": "06:30pm",
             "start": "05:00pm"
          },
          "dow": [
             3
          ],
          "end": "18:30",
          "id": "35893",
          "instructor": "Marian Gidea",
          "location": "TBA",
          "section": "F",
          "start": "17:00",
          "subject": "MAT",
          "title": "Graduate Seminar"
       },
       {
          "capacity": 30,
          "code": "1010",
          "credits": 3,
          "department": "Mathematics",
          "display": {
             "dow": "MW",
             "end": "01:10pm",
             "start": "11:55am"
          },
          "dow": [
             1,
             3
          ],
          "end": "13:10",
          "id": "34281",
          "instructor": "Margarita R. Levin",
          "location": "SCW 501",
          "section": "C",
          "start": "11:55",
          "subject": "MATH",
          "title": "Excursions in Mathematics"
       },
       {
          "capacity": 30,
          "code": "1412",
          "credits": 4,
          "department": "Mathematics",
          "display": {
             "dow": "TR",
             "end": "04:30pm",
             "start": "03:15pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "16:30",
          "id": "34242",
          "instructor": "Michael Dalezman",
          "location": "TBA",
          "section": "N",
          "start": "15:15",
          "subject": "MATH",
          "title": "Calculus I"
       },
       {
          "capacity": 15,
          "code": "1412T",
          "credits": 0,
          "department": "Mathematics",
          "display": {
             "dow": "T",
             "end": "12:50pm",
             "start": "12:00pm"
          },
          "dow": [
             2
          ],
          "end": "12:50",
          "id": "34399",
          "instructor": "Wai Ting Lam",
          "location": "LEX215 LX403",
          "section": "LT",
          "start": "12:00",
          "subject": "MATH",
          "title": "Calculus I Recitation"
       },
       {
          "capacity": 15,
          "code": "1412T",
          "credits": 0,
          "department": "Mathematics",
          "display": {
             "dow": "R",
             "end": "02:35pm",
             "start": "01:45pm"
          },
          "dow": [
             4
          ],
          "end": "14:35",
          "id": "34404",
          "instructor": "Wai Ting Lam",
          "location": "LEX215 ",
          "section": "MR",
          "start": "13:45",
          "subject": "MATH",
          "title": "Calculus I Recitation"
       },
       {
          "capacity": 15,
          "code": "1412T",
          "credits": 0,
          "department": "Mathematics",
          "display": {
             "dow": "T",
             "end": "02:35pm",
             "start": "01:45pm"
          },
          "dow": [
             2
          ],
          "end": "14:35",
          "id": "34400",
          "instructor": "Wai Ting Lam",
          "location": "LEX215 ",
          "section": "MT",
          "start": "13:45",
          "subject": "MATH",
          "title": "Calculus I Recitation"
       },
       {
          "capacity": 20,
          "code": "1413",
          "credits": 4,
          "department": "Mathematics",
          "display": {
             "dow": "TR",
             "end": "12:50pm",
             "start": "12:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "12:50",
          "id": "34177",
          "instructor": "Morton Lowengrub",
          "location": "SCW ",
          "section": "NL",
          "start": "12:00",
          "subject": "MATH",
          "title": "Calculus II"
       },
       {
          "capacity": 20,
          "code": "1413",
          "credits": 4,
          "department": "Mathematics",
          "display": {
             "dow": "TR",
             "end": "04:30pm",
             "start": "03:15pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "16:30",
          "id": "34177",
          "instructor": "Morton Lowengrub",
          "location": "SCW ",
          "section": "NL",
          "start": "15:15",
          "subject": "MATH",
          "title": "Calculus II"
       },
       {
          "capacity": 12,
          "code": "1504",
          "credits": 3,
          "department": "Mathematics",
          "display": {
             "dow": "TR",
             "end": "03:00pm",
             "start": "01:45pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "15:00",
          "id": "34306",
          "instructor": "Michael Dalezman",
          "location": "SCW 619",
          "section": "M",
          "start": "13:45",
          "subject": "MATH",
          "title": "Discrete Structures"
       },
       {
          "capacity": 10,
          "code": "1510",
          "credits": 4,
          "department": "Mathematics",
          "display": {
             "dow": "MW",
             "end": "10:15am",
             "start": "09:00am"
          },
          "dow": [
             1,
             3
          ],
          "end": "10:15",
          "id": "34368",
          "instructor": "Marian Gidea",
          "location": "LEX215 LX313",
          "section": "AKR",
          "start": "9:00",
          "subject": "MATH",
          "title": "Multivariable Calculus"
       },
       {
          "capacity": 10,
          "code": "1510",
          "credits": 4,
          "department": "Mathematics",
          "display": {
             "dow": "R",
             "end": "11:20am",
             "start": "10:30am"
          },
          "dow": [
             4
          ],
          "end": "11:20",
          "id": "34368",
          "instructor": "Esther Ben-Ari ",
          "location": "LEX215 LX313",
          "section": "AKR",
          "start": "10:30",
          "subject": "MATH",
          "title": "Multivariable Calculus"
       },
       {
          "capacity": 0,
          "code": "1523",
          "credits": 3,
          "department": "Mathematics",
          "display": {
             "dow": "",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "34497",
          "instructor": "Morton Lowengrub",
          "location": "LEX215 ",
          "section": "L",
          "start": "",
          "subject": "MATH",
          "title": "Intro to Analysis"
       },
       {
          "capacity": 10,
          "code": "2461",
          "credits": 3,
          "department": "Mathematics",
          "display": {
             "dow": "TR",
             "end": "05:55pm",
             "start": "04:40pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "17:55",
          "id": "35514",
          "instructor": "Michael Dalezman",
          "location": "TBA",
          "section": "P",
          "start": "16:40",
          "subject": "MATH",
          "title": "Probability Theory"
       },
       {
          "capacity": 30,
          "code": "1111",
          "credits": 3,
          "department": "Music",
          "display": {
             "dow": "MW",
             "end": "10:15am",
             "start": "09:00am"
          },
          "dow": [
             1,
             3
          ],
          "end": "10:15",
          "id": "34273",
          "instructor": "Marcia Young",
          "location": "SCW 407",
          "section": "A",
          "start": "9:00",
          "subject": "MUSI",
          "title": "Sense of Music"
       },
       {
          "capacity": 30,
          "code": "1111",
          "credits": 3,
          "department": "Music",
          "display": {
             "dow": "MW",
             "end": "01:10pm",
             "start": "11:55am"
          },
          "dow": [
             1,
             3
          ],
          "end": "13:10",
          "id": "34293",
          "instructor": "Marcia Young",
          "location": "SCW 407",
          "section": "C",
          "start": "11:55",
          "subject": "MUSI",
          "title": "Sense of Music"
       },
       {
          "capacity": 30,
          "code": "1111",
          "credits": 3,
          "department": "Music",
          "display": {
             "dow": "M",
             "end": "04:25pm",
             "start": "03:10pm"
          },
          "dow": [
             1
          ],
          "end": "16:25",
          "id": "34229",
          "instructor": "Stanley Dorn",
          "location": "SCW 407",
          "section": "E",
          "start": "15:10",
          "subject": "MUSI",
          "title": "Sense of Music"
       },
       {
          "capacity": 30,
          "code": "1111",
          "credits": 3,
          "department": "Music",
          "display": {
             "dow": "W",
             "end": "04:50pm",
             "start": "03:35pm"
          },
          "dow": [
             3
          ],
          "end": "16:50",
          "id": "34229",
          "instructor": "Stanley Dorn",
          "location": "SCW 407",
          "section": "E",
          "start": "15:35",
          "subject": "MUSI",
          "title": "Sense of Music"
       },
       {
          "capacity": 30,
          "code": "1111",
          "credits": 3,
          "department": "Music",
          "display": {
             "dow": "TR",
             "end": "10:15am",
             "start": "09:00am"
          },
          "dow": [
             2,
             4
          ],
          "end": "10:15",
          "id": "34426",
          "instructor": "David Glaser",
          "location": "SCW 407",
          "section": "J",
          "start": "9:00",
          "subject": "MUSI",
          "title": "Sense of Music"
       },
       {
          "capacity": 25,
          "code": "1350",
          "credits": 3,
          "department": "Music",
          "display": {
             "dow": "TR",
             "end": "11:45am",
             "start": "10:30am"
          },
          "dow": [
             2,
             4
          ],
          "end": "11:45",
          "id": "35552",
          "instructor": "David Glaser",
          "location": "TBA",
          "section": "K",
          "start": "10:30",
          "subject": "MUSI",
          "title": "Baroque & Classical Music"
       },
       {
          "capacity": 8,
          "code": "2111",
          "credits": 3,
          "department": "Music",
          "display": {
             "dow": "TR",
             "end": "01:15pm",
             "start": "12:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "13:15",
          "id": "34276",
          "instructor": "David Glaser",
          "location": "SCW 407",
          "section": "L",
          "start": "12:00",
          "subject": "MUSI",
          "title": "Diatonic Harmony I"
       },
       {
          "capacity": 8,
          "code": "2111L",
          "credits": 1,
          "department": "Music",
          "display": {
             "dow": "W",
             "end": "02:55pm",
             "start": "01:40pm"
          },
          "dow": [
             3
          ],
          "end": "14:55",
          "id": "34222",
          "instructor": "Stanley Dorn",
          "location": "SCW 407",
          "section": "DW",
          "start": "13:40",
          "subject": "MUSI",
          "title": "Elem Ear Train & Key"
       },
       {
          "capacity": 10,
          "code": "3303",
          "credits": 1,
          "department": "Music",
          "display": {
             "dow": "M",
             "end": "05:30pm",
             "start": "04:40pm"
          },
          "dow": [
             1
          ],
          "end": "17:30",
          "id": "35553",
          "instructor": "Marcia Young",
          "location": "TBA",
          "section": "F",
          "start": "16:40",
          "subject": "MUSI",
          "title": "Choral Ensemble"
       },
       {
          "capacity": 10,
          "code": "3303",
          "credits": 1,
          "department": "Music",
          "display": {
             "dow": "W",
             "end": "05:50pm",
             "start": "05:00pm"
          },
          "dow": [
             3
          ],
          "end": "17:50",
          "id": "35553",
          "instructor": "Marcia Young",
          "location": "TBA",
          "section": "F",
          "start": "17:00",
          "subject": "MUSI",
          "title": "Choral Ensemble"
       },
       {
          "capacity": 10,
          "code": "3461",
          "credits": 1,
          "department": "Music",
          "display": {
             "dow": "T",
             "end": "04:30pm",
             "start": "03:15pm"
          },
          "dow": [
             2
          ],
          "end": "16:30",
          "id": "35554",
          "instructor": "Marcia Young",
          "location": "TBA",
          "section": "NT",
          "start": "15:15",
          "subject": "MUSI",
          "title": "Chamber Ensemble"
       },
       {
          "capacity": 10,
          "code": "3462",
          "credits": 1,
          "department": "Music",
          "display": {
             "dow": "T",
             "end": "05:55pm",
             "start": "04:40pm"
          },
          "dow": [
             2
          ],
          "end": "17:55",
          "id": "35556",
          "instructor": "Marcia Young",
          "location": "TBA",
          "section": "PT",
          "start": "16:40",
          "subject": "MUSI",
          "title": "Chamber Ensemble"
       },
       {
          "capacity": 10,
          "code": "4112",
          "credits": 1,
          "department": "Music",
          "display": {
             "dow": "",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "35557",
          "instructor": "Marcia Young",
          "location": "TBA",
          "section": "TBA",
          "start": "",
          "subject": "MUSI",
          "title": "Applied Music"
       },
       {
          "capacity": 28,
          "code": "2170",
          "credits": 3,
          "department": "Philosophy",
          "display": {
             "dow": "MW",
             "end": "02:40pm",
             "start": "01:25pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "14:40",
          "id": "35531",
          "instructor": "David C. Shatz",
          "location": "TBA",
          "section": "D1",
          "start": "13:25",
          "subject": "PHIL",
          "title": "Ancient & Medieval Philosophy"
       },
       {
          "capacity": 10,
          "code": "2532",
          "credits": 3,
          "department": "Philosophy",
          "display": {
             "dow": "M",
             "end": "05:55pm",
             "start": "04:40pm"
          },
          "dow": [
             1
          ],
          "end": "17:55",
          "id": "35533",
          "instructor": "Herb Leventer",
          "location": "TBA",
          "section": "F",
          "start": "16:40",
          "subject": "PHIL",
          "title": "Philosophy of Art"
       },
       {
          "capacity": 10,
          "code": "2532",
          "credits": 3,
          "department": "Philosophy",
          "display": {
             "dow": "W",
             "end": "06:15pm",
             "start": "05:00pm"
          },
          "dow": [
             3
          ],
          "end": "18:15",
          "id": "35533",
          "instructor": "Herb Leventer",
          "location": "TBA",
          "section": "F",
          "start": "17:00",
          "subject": "PHIL",
          "title": "Philosophy of Art"
       },
       {
          "capacity": 10,
          "code": "3200",
          "credits": 3,
          "department": "Philosophy",
          "display": {
             "dow": "MW",
             "end": "01:10pm",
             "start": "11:55am"
          },
          "dow": [
             1,
             3
          ],
          "end": "13:10",
          "id": "34376",
          "instructor": "Jamie Aroosi",
          "location": "SCW ",
          "section": "C",
          "start": "11:55",
          "subject": "PHIL",
          "title": "Classical Political Philosophy"
       },
       {
          "capacity": 28,
          "code": "3402",
          "credits": 3,
          "department": "Philosophy",
          "display": {
             "dow": "M",
             "end": "04:25pm",
             "start": "03:10pm"
          },
          "dow": [
             1
          ],
          "end": "16:25",
          "id": "34377",
          "instructor": "David C. Shatz",
          "location": "LEX215 LX210",
          "section": "E",
          "start": "15:10",
          "subject": "PHIL",
          "title": "Philosophy of Law"
       },
       {
          "capacity": 28,
          "code": "3402",
          "credits": 3,
          "department": "Philosophy",
          "display": {
             "dow": "W",
             "end": "04:50pm",
             "start": "03:35pm"
          },
          "dow": [
             3
          ],
          "end": "16:50",
          "id": "34377",
          "instructor": "David C. Shatz",
          "location": "LEX215 LX210",
          "section": "E",
          "start": "15:35",
          "subject": "PHIL",
          "title": "Philosophy of Law"
       },
       {
          "capacity": 20,
          "code": "1324A",
          "credits": 1,
          "department": "Physical Education",
          "display": {
             "dow": "MTWRU",
             "end": "10:00pm",
             "start": "08:00pm"
          },
          "dow": [
             1,
             2,
             3,
             4,
             0
          ],
          "end": "22:00",
          "id": "34250",
          "instructor": "TBA",
          "location": "OFF SITE",
          "section": "HRU",
          "start": "20:00",
          "subject": "PEDU",
          "title": "Team Volleyball"
       },
       {
          "capacity": 15,
          "code": "1346",
          "credits": 1,
          "department": "Physical Education",
          "display": {
             "dow": "MTWRU",
             "end": "10:00pm",
             "start": "08:00pm"
          },
          "dow": [
             1,
             2,
             3,
             4,
             0
          ],
          "end": "22:00",
          "id": "34178",
          "instructor": "Naomi Kaszovitz",
          "location": "OFF SITE",
          "section": "HRU",
          "start": "20:00",
          "subject": "PEDU",
          "title": "Team Tennis"
       },
       {
          "capacity": 18,
          "code": "1424",
          "credits": 1,
          "department": "Physical Education",
          "display": {
             "dow": "MTWRU",
             "end": "10:00pm",
             "start": "08:00pm"
          },
          "dow": [
             1,
             2,
             3,
             4,
             0
          ],
          "end": "22:00",
          "id": "34179",
          "instructor": "Michael Alon",
          "location": "OFF SITE",
          "section": "HRU",
          "start": "20:00",
          "subject": "PEDU",
          "title": "Team Basketball"
       },
       {
          "capacity": 25,
          "code": "1511",
          "credits": 1,
          "department": "Physical Education",
          "display": {
             "dow": "MTWRU",
             "end": "10:00pm",
             "start": "08:00pm"
          },
          "dow": [
             1,
             2,
             3,
             4,
             0
          ],
          "end": "22:00",
          "id": "34237",
          "instructor": "Gabe Haber",
          "location": "OFF SITE",
          "section": "HRU",
          "start": "20:00",
          "subject": "PEDU",
          "title": "Team Soccer"
       },
       {
          "capacity": 16,
          "code": "1610",
          "credits": 0.5,
          "department": "Physical Education",
          "display": {
             "dow": "MWU",
             "end": "10:00pm",
             "start": "08:00pm"
          },
          "dow": [
             1,
             3,
             0
          ],
          "end": "22:00",
          "id": "34383",
          "instructor": "Steven Schucker",
          "location": "OFF SITE",
          "section": "HU",
          "start": "20:00",
          "subject": "PEDU",
          "title": "Team Softball"
       },
       {
          "capacity": 15,
          "code": "2316",
          "credits": 1,
          "department": "Physical Education",
          "display": {
             "dow": "",
             "end": "",
             "start": ""
          },
          "dow": [],
          "end": "",
          "id": "34259",
          "instructor": "Stephen D. Begley",
          "location": "OFF SITE",
          "section": "TBA",
          "start": "",
          "subject": "PEDU",
          "title": "Team Cross Country"
       },
       {
          "capacity": 20,
          "code": "2466",
          "credits": 1,
          "department": "Physical Education",
          "display": {
             "dow": "MTW",
             "end": "09:00pm",
             "start": "07:00pm"
          },
          "dow": [
             1,
             2,
             3
          ],
          "end": "21:00",
          "id": "34180",
          "instructor": "Judith Cummins",
          "location": "OFF SITE",
          "section": "HQT",
          "start": "19:00",
          "subject": "PEDU",
          "title": "Team Fencing"
       },
       {
          "capacity": 20,
          "code": "2466",
          "credits": 1,
          "department": "Physical Education",
          "display": {
             "dow": "F",
             "end": "01:00pm",
             "start": "11:00am"
          },
          "dow": [
             5
          ],
          "end": "13:00",
          "id": "34180",
          "instructor": "Judith Cummins",
          "location": "OFF SITE",
          "section": "HQT",
          "start": "11:00",
          "subject": "PEDU",
          "title": "Team Fencing"
       },
       {
          "capacity": 28,
          "code": "1031C",
          "credits": 4,
          "department": "Physics",
          "display": {
             "dow": "MW",
             "end": "11:40am",
             "start": "10:25am"
          },
          "dow": [
             1,
             3
          ],
          "end": "11:40",
          "id": "35507",
          "instructor": "Lea F. Santos",
          "location": "TBA",
          "section": "B",
          "start": "10:25",
          "subject": "PHYS",
          "title": "Introductory Physics"
       },
       {
          "capacity": 28,
          "code": "1031C",
          "credits": 4,
          "department": "Physics",
          "display": {
             "dow": "MW",
             "end": "01:10pm",
             "start": "11:55am"
          },
          "dow": [
             1,
             3
          ],
          "end": "13:10",
          "id": "34386",
          "instructor": "Lea F. Santos",
          "location": "SCW 518",
          "section": "C",
          "start": "11:55",
          "subject": "PHYS",
          "title": "Introductory Physics"
       },
       {
          "capacity": 54,
          "code": "1031T",
          "credits": 0,
          "department": "Physics",
          "display": {
             "dow": "M",
             "end": "06:50pm",
             "start": "06:00pm"
          },
          "dow": [
             1
          ],
          "end": "18:50",
          "id": "34560",
          "instructor": "Lea F. Santos",
          "location": "SCW 518",
          "section": "GM",
          "start": "18:00",
          "subject": "PHYS",
          "title": "Introductory Physics Rec"
       },
       {
          "capacity": 13,
          "code": "1031Y",
          "credits": 0,
          "department": "Physics",
          "display": {
             "dow": "W",
             "end": "04:10pm",
             "start": "01:25pm"
          },
          "dow": [
             3
          ],
          "end": "16:10",
          "id": "34387",
          "instructor": "Mark Edelman",
          "location": "SCW 507",
          "section": "DEW",
          "start": "13:25",
          "subject": "PHYS",
          "title": "Introductory Physics Lab"
       },
       {
          "capacity": 14,
          "code": "1031Y",
          "credits": 0,
          "department": "Physics",
          "display": {
             "dow": "W",
             "end": "07:45pm",
             "start": "05:00pm"
          },
          "dow": [
             3
          ],
          "end": "19:45",
          "id": "34388",
          "instructor": "Mark Edelman",
          "location": "SCW 507",
          "section": "FGW",
          "start": "17:00",
          "subject": "PHYS",
          "title": "Introductory Physics Lab"
       },
       {
          "capacity": 14,
          "code": "1031Y",
          "credits": 0,
          "department": "Physics",
          "display": {
             "dow": "T",
             "end": "11:45am",
             "start": "09:00am"
          },
          "dow": [
             2
          ],
          "end": "11:45",
          "id": "34389",
          "instructor": "Mark Edelman",
          "location": "SCW 507",
          "section": "JKT",
          "start": "9:00",
          "subject": "PHYS",
          "title": "Introductory Physics Lab"
       },
       {
          "capacity": 10,
          "code": "1031Y",
          "credits": 0,
          "department": "Physics",
          "display": {
             "dow": "T",
             "end": "07:25pm",
             "start": "04:40pm"
          },
          "dow": [
             2
          ],
          "end": "19:25",
          "id": "34390",
          "instructor": "Mark Edelman",
          "location": "SCW 507",
          "section": "PQT",
          "start": "16:40",
          "subject": "PHYS",
          "title": "Introductory Physics Lab"
       },
       {
          "capacity": 10,
          "code": "1041C",
          "credits": 4,
          "department": "Physics",
          "display": {
             "dow": "MW",
             "end": "11:40am",
             "start": "10:25am"
          },
          "dow": [
             1,
             3
          ],
          "end": "11:40",
          "id": "34201",
          "instructor": "Anatoly I. Frenkel",
          "location": "SCW 501",
          "section": "BDM",
          "start": "10:25",
          "subject": "PHYS",
          "title": "General Physics I"
       },
       {
          "capacity": 10,
          "code": "1041C",
          "credits": 4,
          "department": "Physics",
          "display": {
             "dow": "M",
             "end": "02:15pm",
             "start": "01:25pm"
          },
          "dow": [
             1
          ],
          "end": "14:15",
          "id": "34201",
          "instructor": "Anatoly I. Frenkel",
          "location": "TBA",
          "section": "BDM",
          "start": "13:25",
          "subject": "PHYS",
          "title": "General Physics I"
       },
       {
          "capacity": 3,
          "code": "1041Y",
          "credits": 0,
          "department": "Physics",
          "display": {
             "dow": "W",
             "end": "04:10pm",
             "start": "01:25pm"
          },
          "dow": [
             3
          ],
          "end": "16:10",
          "id": "34391",
          "instructor": "Mark Edelman",
          "location": "SCW 507",
          "section": "DEW",
          "start": "13:25",
          "subject": "PHYS",
          "title": "General Physics Lab"
       },
       {
          "capacity": 2,
          "code": "1041Y",
          "credits": 0,
          "department": "Physics",
          "display": {
             "dow": "W",
             "end": "07:45pm",
             "start": "05:00pm"
          },
          "dow": [
             3
          ],
          "end": "19:45",
          "id": "34392",
          "instructor": "Mark Edelman",
          "location": "SCW 507",
          "section": "FGW",
          "start": "17:00",
          "subject": "PHYS",
          "title": "General Physics Lab"
       },
       {
          "capacity": 2,
          "code": "1041Y",
          "credits": 0,
          "department": "Physics",
          "display": {
             "dow": "T",
             "end": "11:45am",
             "start": "09:00am"
          },
          "dow": [
             2
          ],
          "end": "11:45",
          "id": "34393",
          "instructor": "Mark Edelman",
          "location": "SCW 507",
          "section": "JKT",
          "start": "9:00",
          "subject": "PHYS",
          "title": "General Physics Lab"
       },
       {
          "capacity": 6,
          "code": "1041Y",
          "credits": 0,
          "department": "Physics",
          "display": {
             "dow": "T",
             "end": "07:25pm",
             "start": "04:40pm"
          },
          "dow": [
             2
          ],
          "end": "19:25",
          "id": "34394",
          "instructor": "Mark Edelman",
          "location": "SCW 507",
          "section": "PQT",
          "start": "16:40",
          "subject": "PHYS",
          "title": "General Physics Lab"
       },
       {
          "capacity": 8,
          "code": "4935",
          "credits": 1,
          "department": "Physics",
          "display": {
             "dow": "T",
             "end": "01:00pm",
             "start": "12:00pm"
          },
          "dow": [
             2
          ],
          "end": "13:00",
          "id": "34270",
          "instructor": "Mark Edelman",
          "location": "LEX215 LX506",
          "section": "LT",
          "start": "12:00",
          "subject": "PHYS",
          "title": "Topics:Physics Colloquium"
       },
       {
          "capacity": 30,
          "code": "1201",
          "credits": 3,
          "department": "Political Science",
          "display": {
             "dow": "M",
             "end": "04:25pm",
             "start": "03:10pm"
          },
          "dow": [
             1
          ],
          "end": "16:25",
          "id": "34240",
          "instructor": "Hill Krishnan",
          "location": "SCW 806",
          "section": "E",
          "start": "15:10",
          "subject": "POLI",
          "title": "Intro to Comparative Politics"
       },
       {
          "capacity": 30,
          "code": "1201",
          "credits": 3,
          "department": "Political Science",
          "display": {
             "dow": "W",
             "end": "04:50pm",
             "start": "03:35pm"
          },
          "dow": [
             3
          ],
          "end": "16:50",
          "id": "34240",
          "instructor": "Hill Krishnan",
          "location": "TBA",
          "section": "E",
          "start": "15:35",
          "subject": "POLI",
          "title": "Intro to Comparative Politics"
       },
       {
          "capacity": 20,
          "code": "1401",
          "credits": 3,
          "department": "Political Science",
          "display": {
             "dow": "MW",
             "end": "01:10pm",
             "start": "11:55am"
          },
          "dow": [
             1,
             3
          ],
          "end": "13:10",
          "id": "34396",
          "instructor": "Jamie Aroosi",
          "location": "SCW 518",
          "section": "C",
          "start": "11:55",
          "subject": "POLI",
          "title": "Great Political Thinkers"
       },
       {
          "capacity": 30,
          "code": "1501",
          "credits": 3,
          "department": "Political Science",
          "display": {
             "dow": "TR",
             "end": "10:15am",
             "start": "09:00am"
          },
          "dow": [
             2,
             4
          ],
          "end": "10:15",
          "id": "34249",
          "instructor": "Joseph Luders",
          "location": "SCW ",
          "section": "J",
          "start": "9:00",
          "subject": "POLI",
          "title": "Fundamentals of Pol Sci"
       },
       {
          "capacity": 30,
          "code": "2100",
          "credits": 3,
          "department": "Political Science",
          "display": {
             "dow": "TR",
             "end": "01:15pm",
             "start": "12:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "13:15",
          "id": "35613",
          "instructor": "Joseph Luders",
          "location": "TBA",
          "section": "L",
          "start": "12:00",
          "subject": "POLI",
          "title": "The American Presidency"
       },
       {
          "capacity": 30,
          "code": "2197",
          "credits": 3,
          "department": "Political Science",
          "display": {
             "dow": "M",
             "end": "08:30pm",
             "start": "06:00pm"
          },
          "dow": [
             1
          ],
          "end": "20:30",
          "id": "34395",
          "instructor": "Joel B. Strauss",
          "location": "SCW 806",
          "section": "GHM",
          "start": "18:00",
          "subject": "POLI",
          "title": "Tps:Essentials of US Legal Sys"
       },
       {
          "capacity": 30,
          "code": "2299",
          "credits": 3,
          "department": "Political Science",
          "display": {
             "dow": "MW",
             "end": "02:40pm",
             "start": "01:25pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "14:40",
          "id": "35562",
          "instructor": "Alper Yildiz",
          "location": "TBA",
          "section": "D1",
          "start": "13:25",
          "subject": "POLI",
          "title": "Politics and Culture"
       },
       {
          "capacity": 30,
          "code": "2394",
          "credits": 3,
          "department": "Political Science",
          "display": {
             "dow": "MW",
             "end": "11:40am",
             "start": "10:25am"
          },
          "dow": [
             1,
             3
          ],
          "end": "11:40",
          "id": "35563",
          "instructor": "Joanna Phua",
          "location": "TBA",
          "section": "B",
          "start": "10:25",
          "subject": "POLI",
          "title": "Topics: UN & International Org"
       },
       {
          "capacity": 30,
          "code": "2397",
          "credits": 3,
          "department": "Political Science",
          "display": {
             "dow": "MW",
             "end": "10:15am",
             "start": "09:00am"
          },
          "dow": [
             1,
             3
          ],
          "end": "10:15",
          "id": "35564",
          "instructor": "Joanna Phua",
          "location": "TBA",
          "section": "A",
          "start": "9:00",
          "subject": "POLI",
          "title": "Topics: International Conflict"
       },
       {
          "capacity": 20,
          "code": "2497H",
          "credits": 3,
          "department": "Political Science",
          "display": {
             "dow": "T",
             "end": "08:30pm",
             "start": "06:00pm"
          },
          "dow": [
             2
          ],
          "end": "20:30",
          "id": "35565",
          "instructor": "Matthew Holbreich",
          "location": "TBA",
          "section": "QRT",
          "start": "18:00",
          "subject": "POLI",
          "title": "Topics: Bible & Amer Democracy"
       },
       {
          "capacity": 30,
          "code": "1010",
          "credits": 3,
          "department": "Psychology",
          "display": {
             "dow": "TR",
             "end": "11:45am",
             "start": "10:30am"
          },
          "dow": [
             2,
             4
          ],
          "end": "11:45",
          "id": "34325",
          "instructor": "TBA",
          "location": "LEX215 LX403",
          "section": "K",
          "start": "10:30",
          "subject": "PSYC",
          "title": "Introductory Psychology"
       },
       {
          "capacity": 30,
          "code": "1010",
          "credits": 3,
          "department": "Psychology",
          "display": {
             "dow": "TR",
             "end": "01:15pm",
             "start": "12:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "13:15",
          "id": "34235",
          "instructor": "Shira Hochberg",
          "location": "LEX215 ",
          "section": "L",
          "start": "12:00",
          "subject": "PSYC",
          "title": "Introductory Psychology"
       },
       {
          "capacity": 30,
          "code": "1010",
          "credits": 3,
          "department": "Psychology",
          "display": {
             "dow": "TR",
             "end": "03:00pm",
             "start": "01:45pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "15:00",
          "id": "34339",
          "instructor": "Shira Hochberg",
          "location": "LEX215 ",
          "section": "M",
          "start": "13:45",
          "subject": "PSYC",
          "title": "Introductory Psychology"
       },
       {
          "capacity": 30,
          "code": "1100",
          "credits": 3,
          "department": "Psychology",
          "display": {
             "dow": "TR",
             "end": "03:00pm",
             "start": "01:45pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "15:00",
          "id": "34330",
          "instructor": "Aharon Hersh Fried",
          "location": "LEX215 LX208",
          "section": "M",
          "start": "13:45",
          "subject": "PSYC",
          "title": "Theories of Human Development"
       },
       {
          "capacity": 35,
          "code": "1107",
          "credits": 3,
          "department": "Psychology",
          "display": {
             "dow": "TR",
             "end": "04:30pm",
             "start": "03:15pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "16:30",
          "id": "34403",
          "instructor": "Aharon Hersh Fried",
          "location": "LEX215 LX208",
          "section": "N",
          "start": "15:15",
          "subject": "PSYC",
          "title": "Developmental Psyc: Life Span"
       },
       {
          "capacity": 57,
          "code": "2100C",
          "credits": 4,
          "department": "Psychology",
          "display": {
             "dow": "MW",
             "end": "11:40am",
             "start": "10:25am"
          },
          "dow": [
             1,
             3
          ],
          "end": "11:40",
          "id": "34181",
          "instructor": "Joshua H. Bacon",
          "location": "LEX215 LX314",
          "section": "B",
          "start": "10:25",
          "subject": "PSYC",
          "title": "Experimental Psychology"
       },
       {
          "capacity": 12,
          "code": "2100Y",
          "credits": 0,
          "department": "Psychology",
          "display": {
             "dow": "M",
             "end": "05:00pm",
             "start": "03:10pm"
          },
          "dow": [
             1
          ],
          "end": "17:00",
          "id": "34443",
          "instructor": "TBA",
          "location": "LEX215 LX414",
          "section": "EFM",
          "start": "15:10",
          "subject": "PSYC",
          "title": "Experimental Psychology Lab"
       },
       {
          "capacity": 9,
          "code": "2100Y",
          "credits": 0,
          "department": "Psychology",
          "display": {
             "dow": "W",
             "end": "04:50pm",
             "start": "03:00pm"
          },
          "dow": [
             3
          ],
          "end": "16:50",
          "id": "36420",
          "instructor": "TBA",
          "location": "TBA",
          "section": "EW",
          "start": "15:00",
          "subject": "PSYC",
          "title": "Experimental Psychology Lab"
       },
       {
          "capacity": 12,
          "code": "2100Y",
          "credits": 0,
          "department": "Psychology",
          "display": {
             "dow": "R",
             "end": "03:10pm",
             "start": "01:20pm"
          },
          "dow": [
             4
          ],
          "end": "15:10",
          "id": "34182",
          "instructor": "Jessica Hope Sloan",
          "location": "LEX215 LX414",
          "section": "MR",
          "start": "13:20",
          "subject": "PSYC",
          "title": "Experimental Psychology Lab"
       },
       {
          "capacity": 12,
          "code": "2100Y",
          "credits": 0,
          "department": "Psychology",
          "display": {
             "dow": "T",
             "end": "03:10pm",
             "start": "01:20pm"
          },
          "dow": [
             2
          ],
          "end": "15:10",
          "id": "36154",
          "instructor": "TBA",
          "location": "TBA",
          "section": "MT",
          "start": "13:20",
          "subject": "PSYC",
          "title": "Experimental Psychology Lab"
       },
       {
          "capacity": 12,
          "code": "2100Y",
          "credits": 0,
          "department": "Psychology",
          "display": {
             "dow": "T",
             "end": "05:20pm",
             "start": "03:30pm"
          },
          "dow": [
             2
          ],
          "end": "17:20",
          "id": "34183",
          "instructor": "TBA",
          "location": "LEX215 LX414",
          "section": "NPT",
          "start": "15:30",
          "subject": "PSYC",
          "title": "Experimental Psychology Lab"
       },
       {
          "capacity": 30,
          "code": "2140",
          "credits": 3,
          "department": "Psychology",
          "display": {
             "dow": "M",
             "end": "04:25pm",
             "start": "03:10pm"
          },
          "dow": [
             1
          ],
          "end": "16:25",
          "id": "34519",
          "instructor": "Rachel Ebner",
          "location": "LEX215 LX208",
          "section": "E",
          "start": "15:10",
          "subject": "PSYC",
          "title": "Learning"
       },
       {
          "capacity": 30,
          "code": "2140",
          "credits": 3,
          "department": "Psychology",
          "display": {
             "dow": "W",
             "end": "04:50pm",
             "start": "03:35pm"
          },
          "dow": [
             3
          ],
          "end": "16:50",
          "id": "34519",
          "instructor": "Rachel Ebner",
          "location": "LEX215 LX208",
          "section": "E",
          "start": "15:35",
          "subject": "PSYC",
          "title": "Learning"
       },
       {
          "capacity": 30,
          "code": "2150",
          "credits": 3,
          "department": "Psychology",
          "display": {
             "dow": "MW",
             "end": "10:15am",
             "start": "09:00am"
          },
          "dow": [
             1,
             3
          ],
          "end": "10:15",
          "id": "34188",
          "instructor": "Joshua H. Bacon",
          "location": "LEX215 LX314",
          "section": "A",
          "start": "9:00",
          "subject": "PSYC",
          "title": "Cognitive Psychology"
       },
       {
          "capacity": 30,
          "code": "2414",
          "credits": 3,
          "department": "Psychology",
          "display": {
             "dow": "MW",
             "end": "02:40pm",
             "start": "01:25pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "14:40",
          "id": "34189",
          "instructor": "Terry DiLorenzo",
          "location": "LEX215 ",
          "section": "D1",
          "start": "13:25",
          "subject": "PSYC",
          "title": "Abnormal Psychology"
       },
       {
          "capacity": 30,
          "code": "2430",
          "credits": 3,
          "department": "Psychology",
          "display": {
             "dow": "TR",
             "end": "11:45am",
             "start": "10:30am"
          },
          "dow": [
             2,
             4
          ],
          "end": "11:45",
          "id": "35736",
          "instructor": "Koby E. Frances",
          "location": "TBA",
          "section": "K",
          "start": "10:30",
          "subject": "PSYC",
          "title": "Intro to Clinical Psychology"
       },
       {
          "capacity": 26,
          "code": "3105",
          "credits": 3,
          "department": "Psychology",
          "display": {
             "dow": "MW",
             "end": "11:40am",
             "start": "10:25am"
          },
          "dow": [
             1,
             3
          ],
          "end": "11:40",
          "id": "34214",
          "instructor": "Terry DiLorenzo",
          "location": "LEX215 ",
          "section": "B",
          "start": "10:25",
          "subject": "PSYC",
          "title": "Social Psychology"
       },
       {
          "capacity": 10,
          "code": "3214H",
          "credits": 3,
          "department": "Psychology",
          "display": {
             "dow": "T",
             "end": "11:40am",
             "start": "09:40am"
          },
          "dow": [
             2
          ],
          "end": "11:40",
          "id": "34223",
          "instructor": "Terry DiLorenzo",
          "location": "LEX215 ",
          "section": "JKT",
          "start": "9:40",
          "subject": "PSYC",
          "title": "Research Seminar I"
       },
       {
          "capacity": 24,
          "code": "3610",
          "credits": 3,
          "department": "Psychology",
          "display": {
             "dow": "MW",
             "end": "01:10pm",
             "start": "11:55am"
          },
          "dow": [
             1,
             3
          ],
          "end": "13:10",
          "id": "34378",
          "instructor": "Terry DiLorenzo",
          "location": "LEX215 LX209",
          "section": "C",
          "start": "11:55",
          "subject": "PSYC",
          "title": "Public Health"
       },
       {
          "capacity": 45,
          "code": "3800",
          "credits": 3,
          "department": "Psychology",
          "display": {
             "dow": "TR",
             "end": "11:45am",
             "start": "10:30am"
          },
          "dow": [
             2,
             4
          ],
          "end": "11:45",
          "id": "34190",
          "instructor": "Marcel Isaac Perlman",
          "location": "LEX215 LX420",
          "section": "K",
          "start": "10:30",
          "subject": "PSYC",
          "title": "Personality"
       },
       {
          "capacity": 30,
          "code": "3804",
          "credits": 3,
          "department": "Psychology",
          "display": {
             "dow": "M",
             "end": "05:55pm",
             "start": "04:40pm"
          },
          "dow": [
             1
          ],
          "end": "17:55",
          "id": "34315",
          "instructor": "Amanda Mitchell",
          "location": "LEX215 LX209",
          "section": "F",
          "start": "16:40",
          "subject": "PSYC",
          "title": "Psychobiology"
       },
       {
          "capacity": 30,
          "code": "3804",
          "credits": 3,
          "department": "Psychology",
          "display": {
             "dow": "W",
             "end": "06:15pm",
             "start": "05:00pm"
          },
          "dow": [
             3
          ],
          "end": "18:15",
          "id": "34315",
          "instructor": "Amanda Mitchell",
          "location": "LEX215 LX209",
          "section": "F",
          "start": "17:00",
          "subject": "PSYC",
          "title": "Psychobiology"
       },
       {
          "capacity": 30,
          "code": "3845",
          "credits": 3,
          "department": "Psychology",
          "display": {
             "dow": "TR",
             "end": "01:15pm",
             "start": "12:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "13:15",
          "id": "34520",
          "instructor": "Aharon Hersh Fried",
          "location": "LEX215 LX208",
          "section": "L",
          "start": "12:00",
          "subject": "PSYC",
          "title": "Psychology & Religion"
       },
       {
          "capacity": 9,
          "code": "1236",
          "credits": 3,
          "department": "Public Health",
          "display": {
             "dow": "TR",
             "end": "01:15pm",
             "start": "12:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "13:15",
          "id": "35704",
          "instructor": "Daniel Kimmel",
          "location": "TBA",
          "section": "L",
          "start": "12:00",
          "subject": "PUB",
          "title": "Epidemiology"
       },
       {
          "capacity": 5,
          "code": "3221",
          "credits": 3,
          "department": "Public Health",
          "display": {
             "dow": "M",
             "end": "06:00pm",
             "start": "03:30pm"
          },
          "dow": [
             1
          ],
          "end": "18:00",
          "id": "35709",
          "instructor": "Raizy Weinreb",
          "location": "TBA",
          "section": "EFM",
          "start": "15:30",
          "subject": "PUB",
          "title": "Nutrition"
       },
       {
          "capacity": 6,
          "code": "3610",
          "credits": 3,
          "department": "Public Health",
          "display": {
             "dow": "MW",
             "end": "01:10pm",
             "start": "11:55am"
          },
          "dow": [
             1,
             3
          ],
          "end": "13:10",
          "id": "35708",
          "instructor": "Terry DiLorenzo",
          "location": "TBA",
          "section": "C",
          "start": "11:55",
          "subject": "PUB",
          "title": "Public Health"
       },
       {
          "capacity": 30,
          "code": "1050",
          "credits": 3,
          "department": "Science",
          "display": {
             "dow": "TR",
             "end": "10:15am",
             "start": "09:00am"
          },
          "dow": [
             2,
             4
          ],
          "end": "10:15",
          "id": "34323",
          "instructor": "Lora Danley",
          "location": "SCW 501",
          "section": "J",
          "start": "9:00",
          "subject": "SCIE",
          "title": "Science:Fundmntl & Application"
       },
       {
          "capacity": 30,
          "code": "1050",
          "credits": 3,
          "department": "Science",
          "display": {
             "dow": "TR",
             "end": "03:00pm",
             "start": "01:45pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "15:00",
          "id": "34367",
          "instructor": "Lora Danley",
          "location": "SCW 501",
          "section": "M",
          "start": "13:45",
          "subject": "SCIE",
          "title": "Science:Fundmntl & Application"
       },
       {
          "capacity": 37,
          "code": "1001",
          "credits": 3,
          "department": "Sociology",
          "display": {
             "dow": "MW",
             "end": "10:15am",
             "start": "09:00am"
          },
          "dow": [
             1,
             3
          ],
          "end": "10:15",
          "id": "34185",
          "instructor": "Sidney Langer",
          "location": "SCW 101",
          "section": "A",
          "start": "9:00",
          "subject": "SOCI",
          "title": "Introduction to Sociology"
       },
       {
          "capacity": 33,
          "code": "1001",
          "credits": 3,
          "department": "Sociology",
          "display": {
             "dow": "TR",
             "end": "01:15pm",
             "start": "12:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "13:15",
          "id": "34184",
          "instructor": "Roberta Farber",
          "location": "SCW 501",
          "section": "L",
          "start": "12:00",
          "subject": "SOCI",
          "title": "Introduction to Sociology"
       },
       {
          "capacity": 30,
          "code": "1158",
          "credits": 3,
          "department": "Sociology",
          "display": {
             "dow": "MW",
             "end": "11:40am",
             "start": "10:25am"
          },
          "dow": [
             1,
             3
          ],
          "end": "11:40",
          "id": "34186",
          "instructor": "Sidney Langer",
          "location": "SCW 401",
          "section": "B",
          "start": "10:25",
          "subject": "SOCI",
          "title": "Criminology"
       },
       {
          "capacity": 30,
          "code": "1205",
          "credits": 3,
          "department": "Sociology",
          "display": {
             "dow": "TR",
             "end": "10:15am",
             "start": "09:00am"
          },
          "dow": [
             2,
             4
          ],
          "end": "10:15",
          "id": "35510",
          "instructor": "Jill C. Katz",
          "location": "TBA",
          "section": "J",
          "start": "9:00",
          "subject": "SOCI",
          "title": "Introduction to Anthropology: The Human Adventure"
       },
       {
          "capacity": 6,
          "code": "1233",
          "credits": 3,
          "department": "Sociology",
          "display": {
             "dow": "MW",
             "end": "01:10pm",
             "start": "11:55am"
          },
          "dow": [
             1,
             3
          ],
          "end": "13:10",
          "id": "34379",
          "instructor": "Terry DiLorenzo",
          "location": "LEX215 LX209",
          "section": "C",
          "start": "11:55",
          "subject": "SOCI",
          "title": "Intro To Public Health"
       },
       {
          "capacity": 13,
          "code": "1236",
          "credits": 3,
          "department": "Sociology",
          "display": {
             "dow": "TR",
             "end": "01:15pm",
             "start": "12:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "13:15",
          "id": "35512",
          "instructor": "Daniel Kimmel",
          "location": "TBA",
          "section": "L",
          "start": "12:00",
          "subject": "SOCI",
          "title": "Epidemiology"
       },
       {
          "capacity": 20,
          "code": "1504",
          "credits": 3,
          "department": "Sociology",
          "display": {
             "dow": "TR",
             "end": "03:00pm",
             "start": "01:45pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "15:00",
          "id": "35511",
          "instructor": "Roberta Farber",
          "location": "TBA",
          "section": "M",
          "start": "13:45",
          "subject": "SOCI",
          "title": "Methods of Soc Research"
       },
       {
          "capacity": 4,
          "code": "4925",
          "credits": 3,
          "department": "Sociology",
          "display": {
             "dow": "MW",
             "end": "11:40am",
             "start": "10:25am"
          },
          "dow": [
             1,
             3
          ],
          "end": "11:40",
          "id": "34333",
          "instructor": "Terry DiLorenzo",
          "location": "LEX215 LX209",
          "section": "B",
          "start": "10:25",
          "subject": "SOCI",
          "title": "Topics: Social Psychology"
       },
       {
          "capacity": 25,
          "code": "1101",
          "credits": 3,
          "department": "Spanish",
          "display": {
             "dow": "MW",
             "end": "10:15am",
             "start": "09:00am"
          },
          "dow": [
             1,
             3
          ],
          "end": "10:15",
          "id": "35513",
          "instructor": "Marcelo Broitman",
          "location": "TBA",
          "section": "A",
          "start": "9:00",
          "subject": "SPAN",
          "title": "Elementary Spanish - 35513 - SPAN 1101 - A"
       },
       {
          "capacity": 23,
          "code": "1010",
          "credits": 3,
          "department": "Speech",
          "display": {
             "dow": "M",
             "end": "04:25pm",
             "start": "03:10pm"
          },
          "dow": [
             1
          ],
          "end": "16:25",
          "id": "34409",
          "instructor": "Robert Russell",
          "location": "SCW 501",
          "section": "E",
          "start": "15:10",
          "subject": "SPEE",
          "title": "Speech Communication"
       },
       {
          "capacity": 23,
          "code": "1010",
          "credits": 3,
          "department": "Speech",
          "display": {
             "dow": "W",
             "end": "04:50pm",
             "start": "03:35pm"
          },
          "dow": [
             3
          ],
          "end": "16:50",
          "id": "34409",
          "instructor": "Robert Russell",
          "location": "SCW 501",
          "section": "E",
          "start": "15:35",
          "subject": "SPEE",
          "title": "Speech Communication"
       },
       {
          "capacity": 23,
          "code": "1010",
          "credits": 3,
          "department": "Speech",
          "display": {
             "dow": "TR",
             "end": "01:15pm",
             "start": "12:00pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "13:15",
          "id": "36350",
          "instructor": "Robert Russell",
          "location": "TBA",
          "section": "L",
          "start": "12:00",
          "subject": "SPEE",
          "title": "Speech Communication"
       },
       {
          "capacity": 23,
          "code": "1010",
          "credits": 3,
          "department": "Speech",
          "display": {
             "dow": "TR",
             "end": "04:30pm",
             "start": "03:15pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "16:30",
          "id": "34271",
          "instructor": "Robert Russell",
          "location": "SCW 501",
          "section": "N",
          "start": "15:15",
          "subject": "SPEE",
          "title": "Speech Communication"
       },
       {
          "capacity": 23,
          "code": "1010",
          "credits": 3,
          "department": "Speech",
          "display": {
             "dow": "TR",
             "end": "05:55pm",
             "start": "04:40pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "17:55",
          "id": "34436",
          "instructor": "Robert Russell",
          "location": "SCW 501",
          "section": "P",
          "start": "16:40",
          "subject": "SPEE",
          "title": "Speech Communication"
       },
       {
          "capacity": 25,
          "code": "3001",
          "credits": 3,
          "department": "Speech Pathology and Audiology",
          "display": {
             "dow": "M",
             "end": "04:25pm",
             "start": "03:10pm"
          },
          "dow": [
             1
          ],
          "end": "16:25",
          "id": "34202",
          "instructor": "Neva Goldstein",
          "location": "LEX215 LX405",
          "section": "E",
          "start": "15:10",
          "subject": "SPAU",
          "title": "Development of Language"
       },
       {
          "capacity": 25,
          "code": "3001",
          "credits": 3,
          "department": "Speech Pathology and Audiology",
          "display": {
             "dow": "W",
             "end": "04:50pm",
             "start": "03:35pm"
          },
          "dow": [
             3
          ],
          "end": "16:50",
          "id": "34202",
          "instructor": "Neva Goldstein",
          "location": "LEX215 LX405",
          "section": "E",
          "start": "15:35",
          "subject": "SPAU",
          "title": "Development of Language"
       },
       {
          "capacity": 25,
          "code": "3012",
          "credits": 3,
          "department": "Speech Pathology and Audiology",
          "display": {
             "dow": "TR",
             "end": "03:00pm",
             "start": "01:45pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "15:00",
          "id": "34203",
          "instructor": "Joseph Danto",
          "location": "LEX215 LX405",
          "section": "M",
          "start": "13:45",
          "subject": "SPAU",
          "title": "Hearing Mechanism"
       },
       {
          "capacity": 25,
          "code": "3024",
          "credits": 3,
          "department": "Speech Pathology and Audiology",
          "display": {
             "dow": "M",
             "end": "05:55pm",
             "start": "04:40pm"
          },
          "dow": [
             1
          ],
          "end": "17:55",
          "id": "34255",
          "instructor": "Neva Goldstein",
          "location": "LEX215 LX405",
          "section": "F",
          "start": "16:40",
          "subject": "SPAU",
          "title": "Communication Disorders Adults"
       },
       {
          "capacity": 25,
          "code": "3024",
          "credits": 3,
          "department": "Speech Pathology and Audiology",
          "display": {
             "dow": "W",
             "end": "06:15pm",
             "start": "05:00pm"
          },
          "dow": [
             3
          ],
          "end": "18:15",
          "id": "34255",
          "instructor": "Neva Goldstein",
          "location": "LEX215 LX405",
          "section": "F",
          "start": "17:00",
          "subject": "SPAU",
          "title": "Communication Disorders Adults"
       },
       {
          "capacity": 25,
          "code": "3034",
          "credits": 3,
          "department": "Speech Pathology and Audiology",
          "display": {
             "dow": "TR",
             "end": "04:30pm",
             "start": "03:15pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "16:30",
          "id": "34204",
          "instructor": "Joseph Danto",
          "location": "LEX215 LX405",
          "section": "N",
          "start": "15:15",
          "subject": "SPAU",
          "title": "Audiology II"
       },
       {
          "capacity": 25,
          "code": "3112",
          "credits": 3,
          "department": "Speech Pathology and Audiology",
          "display": {
             "dow": "TR",
             "end": "06:00pm",
             "start": "04:45pm"
          },
          "dow": [
             2,
             4
          ],
          "end": "18:00",
          "id": "34205",
          "instructor": "Ashley Danielle Small",
          "location": "LEX215 LX405",
          "section": "P",
          "start": "16:45",
          "subject": "SPAU",
          "title": "Phonetics"
       },
       {
          "capacity": 13,
          "code": "3940",
          "credits": 2,
          "department": "Speech Pathology and Audiology",
          "display": {
             "dow": "W",
             "end": "02:25pm",
             "start": "01:25pm"
          },
          "dow": [
             3
          ],
          "end": "14:25",
          "id": "34369",
          "instructor": "Susan Wilson",
          "location": "LEX215 LX506",
          "section": "DW",
          "start": "13:25",
          "subject": "SPAU",
          "title": "Clinical Observation"
       },
       {
          "capacity": 32,
          "code": "1021",
          "credits": 3,
          "department": "Statistics",
          "display": {
             "dow": "MW",
             "end": "01:10pm",
             "start": "11:55am"
          },
          "dow": [
             1,
             3
          ],
          "end": "13:10",
          "id": "34206",
          "instructor": "George T. H. Fuller",
          "location": "LEX215 LX313",
          "section": "C",
          "start": "11:55",
          "subject": "STAT",
          "title": "Intro to Statistics"
       },
       {
          "capacity": 32,
          "code": "1021",
          "credits": 3,
          "department": "Statistics",
          "display": {
             "dow": "MW",
             "end": "02:40pm",
             "start": "01:25pm"
          },
          "dow": [
             1,
             3
          ],
          "end": "14:40",
          "id": "34313",
          "instructor": "George T. H. Fuller",
          "location": "LEX215 LX313",
          "section": "D1",
          "start": "13:25",
          "subject": "STAT",
          "title": "Intro to Statistics"
       },
       {
          "capacity": 32,
          "code": "1021",
          "credits": 3,
          "department": "Statistics",
          "display": {
             "dow": "M",
             "end": "06:30pm",
             "start": "05:15pm"
          },
          "dow": [
             1
          ],
          "end": "18:30",
          "id": "34334",
          "instructor": "Jeffrey Glenn Portnoy",
          "location": "LEX215 ",
          "section": "FP",
          "start": "17:15",
          "subject": "STAT",
          "title": "Introduction to Statistics"
       },
       {
          "capacity": 32,
          "code": "1021",
          "credits": 3,
          "department": "Statistics",
          "display": {
             "dow": "T",
             "end": "06:30pm",
             "start": "05:15pm"
          },
          "dow": [
             2
          ],
          "end": "18:30",
          "id": "34334",
          "instructor": "Jeffrey Glenn Portnoy",
          "location": "TBA",
          "section": "FP",
          "start": "17:15",
          "subject": "STAT",
          "title": "Introduction to Statistics"
       },
       {
          "capacity": 25,
          "code": "1021",
          "credits": 3,
          "department": "Statistics",
          "display": {
             "dow": "M",
             "end": "07:15pm",
             "start": "06:00pm"
          },
          "dow": [
             1
          ],
          "end": "19:15",
          "id": "36545",
          "instructor": "Caroline Sibel Altaras",
          "location": "TBA",
          "section": "G",
          "start": "18:00",
          "subject": "STAT",
          "title": "Intro to Statistics"
       },
       {
          "capacity": 25,
          "code": "1021",
          "credits": 3,
          "department": "Statistics",
          "display": {
             "dow": "W",
             "end": "07:35pm",
             "start": "06:20pm"
          },
          "dow": [
             3
          ],
          "end": "19:35",
          "id": "36545",
          "instructor": "Caroline Sibel Altaras",
          "location": "TBA",
          "section": "G",
          "start": "18:20",
          "subject": "STAT",
          "title": "Intro to Statistics"
       },
       {
          "capacity": 25,
          "code": "6124",
          "credits": 3,
          "department": "Tax",
          "display": {
             "dow": "TR",
             "end": "10:15am",
             "start": "09:00am"
          },
          "dow": [
             2,
             4
          ],
          "end": "10:15",
          "id": "34269",
          "instructor": "Leonard Schlangel",
          "location": "LEX215 LX210",
          "section": "J",
          "start": "9:00",
          "subject": "TAX",
          "title": "Federal Income Taxation I"
       }
    ];
  SternCoursesArray.forEach(function(element) {
    SternCourses.insert(element);
  });
}