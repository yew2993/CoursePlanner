import { Courses } from '../../api/courses.js';
import { Calendars } from '../../api/calendars.js';

if (Courses.find().count() === 0) {
  CoursesArray = 
    [
      {
         "capacity": 40,
         "code": "1001",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:30",
         "subject": "ACC",
         "title": "Accounting Principles I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 40,
         "code": "1001",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:30",
         "subject": "ACC",
         "title": "Accounting Principles I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "1002",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "ACC",
         "title": "Accounting Principles II",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1101",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:30",
         "subject": "ACC",
         "title": "Intermediate Accounting I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "3201",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:25",
         "subject": "ACC",
         "title": "Advanced Accounting",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "3851",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:45",
         "subject": "ACC",
         "title": "Financial Statement Analysis",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "1050",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "ARTS",
         "title": "Introduction to Art",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "1050",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "11:55",
         "subject": "ARTS",
         "title": "Introduction to Art",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "1050H",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:30",
         "subject": "ARTS",
         "title": "Introduction to Art",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "1051",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:25",
         "subject": "ARTS",
         "title": "History of Art I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "1052",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "12:00",
         "subject": "ARTS",
         "title": "History of Art II",
         "university": "Yeshiva University"
      },
      {
         "capacity": 28,
         "code": "1350",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:25",
         "subject": "ARTS",
         "title": "Baroque Art",
         "university": "Yeshiva University"
      },
      {
         "capacity": 23,
         "code": "1432",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:45",
         "subject": "ARTS",
         "title": "Late-Nineteenth Century Art",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "1637H",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "9:30",
         "subject": "ARTS",
         "title": "NYC Architecture &Urban Design",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1750",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "16:40",
         "subject": "ARTS",
         "title": "Philosophy of Art",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1750",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "17:00",
         "subject": "ARTS",
         "title": "Philosophy of Art",
         "university": "Yeshiva University"
      },
      {
         "capacity": 23,
         "code": "1948",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:15",
         "subject": "ARTS",
         "title": "The Image of Jerusalem",
         "university": "Yeshiva University"
      },
      {
         "capacity": 12,
         "code": "2201",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "ARTS",
         "title": "Principles of Design",
         "university": "Yeshiva University"
      },
      {
         "capacity": 12,
         "code": "2301",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:45",
         "subject": "ARTS",
         "title": "Principles of Drawing",
         "university": "Yeshiva University"
      },
      {
         "capacity": 6,
         "code": "2301Y",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:15",
         "subject": "ARTS",
         "title": "Principles of Drawing Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 12,
         "code": "2511",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:25",
         "subject": "ARTS",
         "title": "Beginning Painting",
         "university": "Yeshiva University"
      },
      {
         "capacity": 6,
         "code": "2511Y",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "ARTS",
         "title": "Beginning Painting Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 6,
         "code": "2511Y",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "11:55",
         "subject": "ARTS",
         "title": "Beginning Painting Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 12,
         "code": "3009",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "ARTS",
         "title": "Intro Computer Design",
         "university": "Yeshiva University"
      },
      {
         "capacity": 12,
         "code": "3012",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:30",
         "subject": "ARTS",
         "title": "Digital Photography",
         "university": "Yeshiva University"
      },
      {
         "capacity": 14,
         "code": "3014",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:25",
         "subject": "ARTS",
         "title": "Typography",
         "university": "Yeshiva University"
      },
      {
         "capacity": 12,
         "code": "3967",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "17:00",
         "subject": "ARTS",
         "title": "Topics: Book Arts",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "4974",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "14:45",
         "subject": "ARTS",
         "title": "Pre-Senior Project",
         "university": "Yeshiva University"
      },
      {
         "capacity": 32,
         "code": "1082",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "12:00",
         "subject": "BIBL",
         "title": "Intro to Exegesis II",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "1083H",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "11:55",
         "subject": "BIBL",
         "title": "Topics in Exegesis: Sforno",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "1085",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "BIBL",
         "title": "Methods of Peshat: Biblical Stylistics, building blocks of perushim",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "1086",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:30",
         "subject": "BIBL",
         "title": "Tps in Exegesis: N. Leibowitz",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1088H",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:25",
         "subject": "BIBL",
         "title": "Biblical Exegetes II",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "1117",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:45",
         "subject": "BIBL",
         "title": "Weekly Portion",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "1160",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "12:00",
         "subject": "BIBL",
         "title": "Women in Bible & Rabbinic Lit",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1171",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:30",
         "subject": "BIBL",
         "title": "Personal Devlop in the Bible I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 32,
         "code": "1204",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "12:00",
         "subject": "BIBL",
         "title": "Book of Genesis",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "1214",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "BIBL",
         "title": "Topics in Genesis",
         "university": "Yeshiva University"
      },
      {
         "capacity": 32,
         "code": "1303",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "BIBL",
         "title": "Book of Exodus I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 32,
         "code": "1303",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:30",
         "subject": "BIBL",
         "title": "Book of Exodus I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "1305",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:30",
         "subject": "BIBL",
         "title": "Book of Exodus I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "1407",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "12:00",
         "subject": "BIBL",
         "title": "Book of Leviticus",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "1411",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:25",
         "subject": "BIBL",
         "title": "Topics in Leviticus",
         "university": "Yeshiva University"
      },
      {
         "capacity": 33,
         "code": "1512",
         "college": "Undergraduate Women",
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
         "location": "SCW 102",
         "section": "B",
         "semester": "Fall 2016",
         "start": "10:25",
         "subject": "BIBL",
         "title": "Topics in Numbers",
         "university": "Yeshiva University"
      },
      {
         "capacity": 33,
         "code": "1609",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:25",
         "subject": "BIBL",
         "title": "Book of Deuteronomy",
         "university": "Yeshiva University"
      },
      {
         "capacity": 33,
         "code": "2116",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:10",
         "subject": "BIBL",
         "title": "Book of Joshua",
         "university": "Yeshiva University"
      },
      {
         "capacity": 33,
         "code": "2116",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:35",
         "subject": "BIBL",
         "title": "Book of Joshua",
         "university": "Yeshiva University"
      },
      {
         "capacity": 32,
         "code": "2121",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:15",
         "subject": "BIBL",
         "title": "Judges",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "2149",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "16:40",
         "subject": "BIBL",
         "title": "Samuel I, Part II",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "2152",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "BIBL",
         "title": "Samuel I - Part I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "2156",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:45",
         "subject": "BIBL",
         "title": "Samuel I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "2506",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:30",
         "subject": "BIBL",
         "title": "Isaiah: Geulah and the Messianic Era. Use to fulfil JPHIL requirement.",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "2555",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "12:00",
         "subject": "BIBL",
         "title": "Jeremiah. Confronting the false prophets. U.INT. Use to fulfill JPHIL",
         "university": "Yeshiva University"
      },
      {
         "capacity": 33,
         "code": "2653",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:25",
         "subject": "BIBL",
         "title": "Later Prophets: Yonah",
         "university": "Yeshiva University"
      },
      {
         "capacity": 33,
         "code": "3208",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "11:55",
         "subject": "BIBL",
         "title": "Psalms II",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "3257",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:25",
         "subject": "BIBL",
         "title": "Proverbs",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "3710",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "BIBL",
         "title": "Esther",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "3807",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:10",
         "subject": "BIBL",
         "title": "Daniel",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "3807",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:35",
         "subject": "BIBL",
         "title": "Daniel",
         "university": "Yeshiva University"
      },
      {
         "capacity": 33,
         "code": "4002",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:25",
         "subject": "BIBL",
         "title": "Biblical Narrative",
         "university": "Yeshiva University"
      },
      {
         "capacity": 51,
         "code": "1005C",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:25",
         "subject": "BIOL",
         "title": "Human Biology",
         "university": "Yeshiva University"
      },
      {
         "capacity": 17,
         "code": "1005Y",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "8:40",
         "subject": "BIOL",
         "title": "Human Biology Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 17,
         "code": "1005Y",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:30",
         "subject": "BIOL",
         "title": "Human Biology Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 17,
         "code": "1005Y",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:10",
         "subject": "BIOL",
         "title": "Human Biology Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "1011C",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:25",
         "subject": "BIOL",
         "title": "Biology Principles",
         "university": "Yeshiva University"
      },
      {
         "capacity": 45,
         "code": "1011C",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:25",
         "subject": "BIOL",
         "title": "Biology Principles",
         "university": "Yeshiva University"
      },
      {
         "capacity": 18,
         "code": "1011H",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "12:00",
         "subject": "BIOL",
         "title": "Biology Principles",
         "university": "Yeshiva University"
      },
      {
         "capacity": 19,
         "code": "1011Y",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:30",
         "subject": "BIOL",
         "title": "Bio Principles Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 18,
         "code": "1011Y",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:35",
         "subject": "BIOL",
         "title": "Bio Principles Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 0,
         "code": "1011Y",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:30",
         "subject": "BIOL",
         "title": "Bio Principles Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 0,
         "code": "1011Y",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:35",
         "subject": "BIOL",
         "title": "Bio Principles Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 0,
         "code": "1011Y",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "9:30",
         "subject": "BIOL",
         "title": "Bio Principles Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 18,
         "code": "1011Y",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "9:30",
         "subject": "BIOL",
         "title": "Bio Principles Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 0,
         "code": "1011Y",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "9:15",
         "subject": "BIOL",
         "title": "Bio Principles Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 17,
         "code": "1011Y",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "9:15",
         "subject": "BIOL",
         "title": "Bio Principles Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "1011Y",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "12:30",
         "subject": "BIOL",
         "title": "Bio Principles Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "1011Y",
         "college": "Undergraduate Women",
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
         "instructor": "AUBREY M TAUER",
         "location": "SCW LB444",
         "section": "MNR",
         "semester": "Fall 2016",
         "start": "13:45",
         "subject": "BIOL",
         "title": "Bio Principles Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "1376",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "BIOL",
         "title": "Biochemistry Lecture",
         "university": "Yeshiva University"
      },
      {
         "capacity": 43,
         "code": "2730C",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "BIOL",
         "title": "Human Anatomy",
         "university": "Yeshiva University"
      },
      {
         "capacity": 12,
         "code": "2730Y",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:40",
         "subject": "BIOL",
         "title": "Human Anatomy Laboratory",
         "university": "Yeshiva University"
      },
      {
         "capacity": 19,
         "code": "2730Y",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "11:55",
         "subject": "BIOL",
         "title": "Human Anatomy Laboratory",
         "university": "Yeshiva University"
      },
      {
         "capacity": 12,
         "code": "2730Y",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:15",
         "subject": "BIOL",
         "title": "Human Anatomy Laboratory",
         "university": "Yeshiva University"
      },
      {
         "capacity": 13,
         "code": "3207C",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:30",
         "subject": "BIOL",
         "title": "Cell Biology",
         "university": "Yeshiva University"
      },
      {
         "capacity": 27,
         "code": "3207C",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "12:00",
         "subject": "BIOL",
         "title": "Cell Biology",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "3207Y",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:45",
         "subject": "BIOL",
         "title": "Cell Biology Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "3207Y",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:45",
         "subject": "BIOL",
         "title": "Cell Biology Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "3221",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:30",
         "subject": "BIOL",
         "title": "Nutrition",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "3230C",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "BIOL",
         "title": "Immunology",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "3230C",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "11:55",
         "subject": "BIOL",
         "title": "Immunology",
         "university": "Yeshiva University"
      },
      {
         "capacity": 40,
         "code": "3241",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "11:55",
         "subject": "BIOL",
         "title": "Pharmacology",
         "university": "Yeshiva University"
      },
      {
         "capacity": 40,
         "code": "3513C",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:25",
         "subject": "BIOL",
         "title": "Genetics",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "3513Y",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "BIOL",
         "title": "Genetics Laboratory",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "3513Y",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:25",
         "subject": "BIOL",
         "title": "Genetics Laboratory",
         "university": "Yeshiva University"
      },
      {
         "capacity": 59,
         "code": "3728C",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "BIOL",
         "title": "Human Physiology",
         "university": "Yeshiva University"
      },
      {
         "capacity": 19,
         "code": "3728Y",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:25",
         "subject": "BIOL",
         "title": "Human Physiology Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "3728Y",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:10",
         "subject": "BIOL",
         "title": "Human Physiology Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "3728Y",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:35",
         "subject": "BIOL",
         "title": "Human Physiology Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "3728Y",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "16:40",
         "subject": "BIOL",
         "title": "Human Physiology Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "3728Y",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "17:00",
         "subject": "BIOL",
         "title": "Human Physiology Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "3730H",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:15",
         "subject": "BIOL",
         "title": "Reproductive Biology",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "3830R",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:10",
         "subject": "BIOL",
         "title": "Neurobiology - 34491 - Biology 3830R - Section E",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "3830R",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:35",
         "subject": "BIOL",
         "title": "Neurobiology - 34491 - Biology 3830R - Section E",
         "university": "Yeshiva University"
      },
      {
         "capacity": 40,
         "code": "4023C",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:25",
         "subject": "BIOL",
         "title": "Microbiology",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "4023Y",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "BIOL",
         "title": "Microbiology Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "4023Y",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:30",
         "subject": "BIOL",
         "title": "Microbiology Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "4930",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "18:20",
         "subject": "BIOL",
         "title": "Topics: Kinesiology",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "4936",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "18:00",
         "subject": "BIOL",
         "title": "Topics: Oncology",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "1012",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:25",
         "subject": "BUS",
         "title": "Business Communication",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "1800H",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "18:00",
         "subject": "BLW",
         "title": "Business as Human Enterprise",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "2021",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:10",
         "subject": "BLW",
         "title": "Ethical & Legal Env Business",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "2021",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:35",
         "subject": "BLW",
         "title": "Ethical & Legal Env Business",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "2111",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:25",
         "subject": "BLW",
         "title": "Business Law I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 18,
         "code": "1010C",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:30",
         "subject": "CHEM",
         "title": "Essentials of General Chem",
         "university": "Yeshiva University"
      },
      {
         "capacity": 18,
         "code": "1010C",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "11:50",
         "subject": "CHEM",
         "title": "Essentials of General Chem",
         "university": "Yeshiva University"
      },
      {
         "capacity": 80,
         "code": "1045C",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "12:00",
         "subject": "CHEM",
         "title": "General Chemistry",
         "university": "Yeshiva University"
      },
      {
         "capacity": 23,
         "code": "1045H",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:30",
         "subject": "CHEM",
         "title": "General Chemistry",
         "university": "Yeshiva University"
      },
      {
         "capacity": 0,
         "code": "1045R",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "12:00",
         "subject": "CHEM",
         "title": "General Chemistry Lecture",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1045T",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "17:00",
         "subject": "CHEM",
         "title": "General Chem Recitation",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1045T",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "9:25",
         "subject": "CHEM",
         "title": "General Chem Recitation",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1045T",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:30",
         "subject": "CHEM",
         "title": "General Chem Recitation",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1045T",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "16:40",
         "subject": "CHEM",
         "title": "General Chem Recitation",
         "university": "Yeshiva University"
      },
      {
         "capacity": 16,
         "code": "1045Y",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:20",
         "subject": "CHEM",
         "title": "General Chemistry Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 16,
         "code": "1045Y",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:30",
         "subject": "CHEM",
         "title": "General Chemistry Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 0,
         "code": "1045Y",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "CHEM",
         "title": "General Chemistry Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 14,
         "code": "1045Y",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "CHEM",
         "title": "General Chemistry Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 0,
         "code": "1045Y",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "CHEM",
         "title": "General Chemistry Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "1045Y",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "CHEM",
         "title": "General Chemistry Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "1045Y",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:30",
         "subject": "CHEM",
         "title": "General Chemistry Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 14,
         "code": "1045Y",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:30",
         "subject": "CHEM",
         "title": "General Chemistry Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 0,
         "code": "1045Y",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:30",
         "subject": "CHEM",
         "title": "General Chemistry Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 0,
         "code": "1045Y",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:30",
         "subject": "CHEM",
         "title": "General Chemistry Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 64,
         "code": "1213C",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "CHEM",
         "title": "Organic Chemistry",
         "university": "Yeshiva University"
      },
      {
         "capacity": 16,
         "code": "1213Y",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:25",
         "subject": "CHEM",
         "title": "Organic Chemistry Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 16,
         "code": "1213Y",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "14:25",
         "subject": "CHEM",
         "title": "Organic Chemistry Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 16,
         "code": "1213Y",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "CHEM",
         "title": "Organic Chemistry Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 16,
         "code": "1213Y",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:00",
         "subject": "CHEM",
         "title": "Organic Chemistry Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 16,
         "code": "1213Y",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:30",
         "subject": "CHEM",
         "title": "Organic Chemistry Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 16,
         "code": "1213Y",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "14:30",
         "subject": "CHEM",
         "title": "Organic Chemistry Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 16,
         "code": "1213Y",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:45",
         "subject": "CHEM",
         "title": "Organic Chemistry Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 16,
         "code": "1213Y",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "14:45",
         "subject": "CHEM",
         "title": "Organic Chemistry Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "1376",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "CHEM",
         "title": "Biochemistry Lecture",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "1415H",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:45",
         "subject": "CHEM",
         "title": "Physical Chemistry I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 17,
         "code": "1300C",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:10",
         "subject": "COMP",
         "title": "Intro to Computer Science",
         "university": "Yeshiva University"
      },
      {
         "capacity": 17,
         "code": "1300C",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "16:35",
         "subject": "COMP",
         "title": "Intro to Computer Science",
         "university": "Yeshiva University"
      },
      {
         "capacity": 17,
         "code": "1300C",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:35",
         "subject": "COMP",
         "title": "Intro to Computer Science",
         "university": "Yeshiva University"
      },
      {
         "capacity": 17,
         "code": "1300C",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "17:00",
         "subject": "COMP",
         "title": "Intro to Computer Science",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "1300C",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:30",
         "subject": "COMP",
         "title": "Intro to Computer Science",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "1300C",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "12:00",
         "subject": "COMP",
         "title": "Intro to Computer Science",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "1504",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:45",
         "subject": "COMP",
         "title": "Discrete Structures",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "2115C",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:10",
         "subject": "COMP",
         "title": "Computer Systems",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "2115C",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "16:35",
         "subject": "COMP",
         "title": "Computer Systems",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "2115C",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:35",
         "subject": "COMP",
         "title": "Computer Systems",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "2115C",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "17:00",
         "subject": "COMP",
         "title": "Computer Systems",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "2314C",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "12:00",
         "subject": "COMP",
         "title": "Applied Linux Prog & Scripting",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "2314C",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:25",
         "subject": "COMP",
         "title": "Applied Linux Prog & Scripting",
         "university": "Yeshiva University"
      },
      {
         "capacity": 12,
         "code": "2545",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:45",
         "subject": "COMP",
         "title": "Algorithms",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "3780",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:25",
         "subject": "COMP",
         "title": "Web Programming & Development",
         "university": "Yeshiva University"
      },
      {
         "capacity": 40,
         "code": "1010",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:30",
         "subject": "ECON",
         "title": "Principles of Economics",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "1177",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "12:00",
         "subject": "ECON",
         "title": "Game Theory & Behavioral Econ",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "1221",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:25",
         "subject": "ECON",
         "title": "Money and Banking",
         "university": "Yeshiva University"
      },
      {
         "capacity": 0,
         "code": "1421",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "",
         "subject": "ECON",
         "title": "Econometrics",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "2133",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:20",
         "subject": "EDUC",
         "title": "Linguistic Tools & Literacy",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "2201",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "12:00",
         "subject": "EDUC",
         "title": "Classroom Mangmt & Instruction",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "2301",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "EDUC",
         "title": "Language and Literacy I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "2303",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:30",
         "subject": "EDUC",
         "title": "Teaching Social Studies",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "2930",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:45",
         "subject": "EDUC",
         "title": "Senior Seminar: Elem Edu",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "2935",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:15",
         "subject": "EDUC",
         "title": "Sr. Sem. in Early Childhood Ed",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "2940",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "8:00",
         "subject": "EDUC",
         "title": "Student Teaching: Elem Educ",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "2940",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "8:00",
         "subject": "EDUC",
         "title": "Student Teaching: Elem Educ",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "2940",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "8:00",
         "subject": "EDUC",
         "title": "Student Teaching: Elem Educ",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "2945",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "8:30",
         "subject": "EDUC",
         "title": "EC Student Teaching",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "2945",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "8:30",
         "subject": "EDUC",
         "title": "EC Student Teaching",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "2945",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "8:30",
         "subject": "EDUC",
         "title": "EC Student Teaching",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "1010",
         "college": "Undergraduate Women",
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
         "instructor": "Sierra Ladan Tavasolian",
         "location": "TBA",
         "section": "M",
         "semester": "Fall 2016",
         "start": "13:45",
         "subject": "ENGL",
         "title": "Essentials of Writing",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "1010",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:15",
         "subject": "ENGL",
         "title": "Essentials of Writing",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "1100",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:25",
         "subject": "ENGL",
         "title": "Composition and Rhetoric",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "1100",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "11:55",
         "subject": "ENGL",
         "title": "English 1100-C: Composition and Rhetoric",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "1100",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:25",
         "subject": "ENGL",
         "title": "English 1100-D1: Composition and Rhetoric",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "1100",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "ENGL",
         "title": "Composition and Rhetoric",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "1100",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:30",
         "subject": "ENGL",
         "title": "Composition and Rhetoric",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "1100",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "12:00",
         "subject": "ENGL",
         "title": "Composition and Rhetoric",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "1100",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:45",
         "subject": "ENGL",
         "title": "Composition and Rhetoric",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "1100",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:15",
         "subject": "ENGL",
         "title": "Composition and Rhetoric",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "1200H",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:25",
         "subject": "ENGL",
         "title": "Freshman Honors Seminar",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "1200H",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "11:55",
         "subject": "ENGL",
         "title": "Freshman Honors Seminar",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "1200H",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:25",
         "subject": "ENGL",
         "title": "Freshman Honors Seminar",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1500",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "12:00",
         "subject": "ENGL",
         "title": "Media Studies",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "1503",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "17:30",
         "subject": "ENGL",
         "title": "Columns & Editorials",
         "university": "Yeshiva University"
      },
      {
         "capacity": 9,
         "code": "1600",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "18:00",
         "subject": "ENGL",
         "title": "Advertising Copywriting",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1650",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "17:00",
         "subject": "ENGL",
         "title": "Public Relations",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "1725",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:15",
         "subject": "ENGL",
         "title": "Topics: Digital Communication",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "1802",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:25",
         "subject": "ENGL",
         "title": "Writing Creative Nonfiction",
         "university": "Yeshiva University"
      },
      {
         "capacity": 18,
         "code": "1812",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:30",
         "subject": "ENGL",
         "title": "Screenwriting",
         "university": "Yeshiva University"
      },
      {
         "capacity": 18,
         "code": "2000",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:10",
         "subject": "ENGL",
         "title": "Ways of Reading (formerly \"Gateway to Reading\")",
         "university": "Yeshiva University"
      },
      {
         "capacity": 18,
         "code": "2000",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:35",
         "subject": "ENGL",
         "title": "Ways of Reading (formerly \"Gateway to Reading\")",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "2004",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "11:55",
         "subject": "ENGL",
         "title": "Survey of British Lit II",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "2007",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:15",
         "subject": "ENGL",
         "title": "Survey of American Lit II",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "2580",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:45",
         "subject": "ENGL",
         "title": "American Jewish Literature",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "2750",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:10",
         "subject": "ENGL",
         "title": "The Graphic Novel",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "2750",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:35",
         "subject": "ENGL",
         "title": "The Graphic Novel",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "2880H",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "16:40",
         "subject": "ENGL",
         "title": "Parents and Children in American Literature",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "2880H",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "17:00",
         "subject": "ENGL",
         "title": "Parents and Children in American Literature",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "2921",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "ENGL",
         "title": "Topics: Shakespeare",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "2960",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:25",
         "subject": "ENGL",
         "title": "Representations of Holocaust",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "2971",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "11:55",
         "subject": "ENGL",
         "title": "Literature of the First World War",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "3921",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:45",
         "subject": "ENGL",
         "title": "Tps: Harlem Renaissance",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "1001",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "FIN",
         "title": "Principles of Finance",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "2505",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "12:00",
         "subject": "FIN",
         "title": "Investment Analysis",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "3851",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:45",
         "subject": "FIN",
         "title": "Financial Statement Analysis",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "1101",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "11:55",
         "subject": "HEBR",
         "title": "Elementary Hebrew I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "1101",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "16:40",
         "subject": "HEBR",
         "title": "Elementary Hebrew I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "1102",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:40",
         "subject": "HEBR",
         "title": "Elementary Hebrew II",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "1102",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "16:40",
         "subject": "HEBR",
         "title": "Elementary Hebrew II",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "1102",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:25",
         "subject": "HEBR",
         "title": "Elementary Hebrew II",
         "university": "Yeshiva University"
      },
      {
         "capacity": 16,
         "code": "1103",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "HEBR",
         "title": "Lower Intermediate Hebrew I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 16,
         "code": "1103",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "16:40",
         "subject": "HEBR",
         "title": "Lower Intermediate Hebrew I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 18,
         "code": "1103",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:25",
         "subject": "HEBR",
         "title": "Lower Intermediate Hebrew I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 18,
         "code": "1103",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "18:00",
         "subject": "HEBR",
         "title": "Lower Intermediate Hebrew I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 18,
         "code": "1103",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:40",
         "subject": "HEBR",
         "title": "Lower Intermediate Hebrew I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 18,
         "code": "1103",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "16:40",
         "subject": "HEBR",
         "title": "Lower Intermediate Hebrew I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 18,
         "code": "1103",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:25",
         "subject": "HEBR",
         "title": "Lower Intermediate Hebrew I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 21,
         "code": "1104",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:25",
         "subject": "HEBR",
         "title": "Lower Intermediate Hebrew II",
         "university": "Yeshiva University"
      },
      {
         "capacity": 21,
         "code": "1104",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "18:00",
         "subject": "HEBR",
         "title": "Lower Intermediate Hebrew II",
         "university": "Yeshiva University"
      },
      {
         "capacity": 21,
         "code": "1104",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "11:55",
         "subject": "HEBR",
         "title": "Lower Intermediate Hebrew II",
         "university": "Yeshiva University"
      },
      {
         "capacity": 21,
         "code": "1104",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "16:40",
         "subject": "HEBR",
         "title": "Lower Intermediate Hebrew II",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "1105",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "HEBR",
         "title": "Intermediate Hebrew I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "1105",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:25",
         "subject": "HEBR",
         "title": "Intermediate Hebrew I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "1105",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "11:55",
         "subject": "HEBR",
         "title": "Intermediate Hebrew I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 23,
         "code": "1106",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "11:55",
         "subject": "HEBR",
         "title": "Intermediate Hebrew II",
         "university": "Yeshiva University"
      },
      {
         "capacity": 23,
         "code": "1106",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:40",
         "subject": "HEBR",
         "title": "Intermediate Hebrew II",
         "university": "Yeshiva University"
      },
      {
         "capacity": 23,
         "code": "1106",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:25",
         "subject": "HEBR",
         "title": "Intermediate Hebrew II",
         "university": "Yeshiva University"
      },
      {
         "capacity": 23,
         "code": "1106",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:10",
         "subject": "HEBR",
         "title": "Intermediate Hebrew II",
         "university": "Yeshiva University"
      },
      {
         "capacity": 23,
         "code": "1106",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:35",
         "subject": "HEBR",
         "title": "Intermediate Hebrew II",
         "university": "Yeshiva University"
      },
      {
         "capacity": 23,
         "code": "1107",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "HEBR",
         "title": "Intermediate Hebrew III",
         "university": "Yeshiva University"
      },
      {
         "capacity": 23,
         "code": "1107",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "11:55",
         "subject": "HEBR",
         "title": "Intermediate Hebrew III",
         "university": "Yeshiva University"
      },
      {
         "capacity": 23,
         "code": "1107",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:40",
         "subject": "HEBR",
         "title": "Intermediate Hebrew III",
         "university": "Yeshiva University"
      },
      {
         "capacity": 23,
         "code": "1107",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:25",
         "subject": "HEBR",
         "title": "Intermediate Hebrew III",
         "university": "Yeshiva University"
      },
      {
         "capacity": 23,
         "code": "1108",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:25",
         "subject": "HEBR",
         "title": "Intermediate Hebrew IV",
         "university": "Yeshiva University"
      },
      {
         "capacity": 23,
         "code": "1108",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "11:55",
         "subject": "HEBR",
         "title": "Intermediate Hebrew IV",
         "university": "Yeshiva University"
      },
      {
         "capacity": 23,
         "code": "1205",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "HEBR",
         "title": "Upper Intermediate Hebrew I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1206",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:25",
         "subject": "HEBR",
         "title": "Upper Intermediate Hebrew II",
         "university": "Yeshiva University"
      },
      {
         "capacity": 14,
         "code": "1233",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "14:45",
         "subject": "HEBR",
         "title": "Advanced Hebrew Conversation",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "2669",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:40",
         "subject": "HEBR",
         "title": "Hebrew Short Story of 20th Cen",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "2669",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:25",
         "subject": "HEBR",
         "title": "Hebrew Short Story of 20th Cen",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "1401",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "11:55",
         "subject": "HIST",
         "title": "History of East Asia",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "2128",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:30",
         "subject": "HIST",
         "title": "Origins of Democratic Political Culture",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "2141",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "12:00",
         "subject": "HIST",
         "title": "Holocaust",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "2165",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "HIST",
         "title": "Europe Since 1945",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "2207",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:25",
         "subject": "HIST",
         "title": "New Deal & Great Depression",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "2520",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:45",
         "subject": "HIST",
         "title": "Atlantic World",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "2913",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:25",
         "subject": "HIST",
         "title": "Immigrant Nations: US & Israel",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "1001",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "12:00",
         "subject": "IDS",
         "title": "Business Algebra",
         "university": "Yeshiva University"
      },
      {
         "capacity": 22,
         "code": "1020",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "IDS",
         "title": "Intro to Information Systems",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1020",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:25",
         "subject": "IDS",
         "title": "Intro to Information Systems",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "1131",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "12:00",
         "subject": "IDS",
         "title": "Statistics for Business",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "1456",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:45",
         "subject": "IDS",
         "title": "Quantitative Methods Managment",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "2030",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "11:55",
         "subject": "IDS",
         "title": "Bus. Analytics & Programming",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "2460",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:25",
         "subject": "IDS",
         "title": "Data Management-Bus Analytics",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "3216",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "8:00",
         "subject": "JEDU",
         "title": "Jewish Education Field Work",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "3216",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:30",
         "subject": "JEDU",
         "title": "Jewish Education Field Work",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "3218",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "8:00",
         "subject": "JEDU",
         "title": "Jewish Educ Field Work/Seminar",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "3218",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "JEDU",
         "title": "Jewish Educ Field Work/Seminar",
         "university": "Yeshiva University"
      },
      {
         "capacity": 32,
         "code": "1329H",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:15",
         "subject": "JHIS",
         "title": "History of Halakhah",
         "university": "Yeshiva University"
      },
      {
         "capacity": 27,
         "code": "1415",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:10",
         "subject": "JHIS",
         "title": "History of Zionism",
         "university": "Yeshiva University"
      },
      {
         "capacity": 27,
         "code": "1415",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:35",
         "subject": "JHIS",
         "title": "History of Zionism",
         "university": "Yeshiva University"
      },
      {
         "capacity": 27,
         "code": "1486",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "16:40",
         "subject": "JHIS",
         "title": "Holocaust and Rescue",
         "university": "Yeshiva University"
      },
      {
         "capacity": 27,
         "code": "1486",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "17:00",
         "subject": "JHIS",
         "title": "Holocaust and Rescue",
         "university": "Yeshiva University"
      },
      {
         "capacity": 32,
         "code": "1577",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "11:43",
         "subject": "JHIS",
         "title": "Jewish Religion in America",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "1807",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:25",
         "subject": "JHIS",
         "title": "History of Jerusalem",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "4932",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:30",
         "subject": "JHIS",
         "title": "Tps:Wanderers,Exiles&Merchants",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "1204",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "16:40",
         "subject": "JPHI",
         "title": "Jewish Ethics",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "1204",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "17:00",
         "subject": "JPHI",
         "title": "Jewish Ethics",
         "university": "Yeshiva University"
      },
      {
         "capacity": 28,
         "code": "1647",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:34",
         "subject": "JPHI",
         "title": "Phil of R.Yehuda HaLevi",
         "university": "Yeshiva University"
      },
      {
         "capacity": 28,
         "code": "1814",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "11:50",
         "subject": "JPHI",
         "title": "For the Perplexed of the Generation",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "4932",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:15",
         "subject": "JPHI",
         "title": "Tps:Philo of Lubavitcher Rebbe",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1001",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "JUDS",
         "title": "Intro to Judaism",
         "university": "Yeshiva University"
      },
      {
         "capacity": 33,
         "code": "1201",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "11:55",
         "subject": "JUDS",
         "title": "Jewish Liturgy-Hilchot Tefilla",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "1203",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:30",
         "subject": "JUDS",
         "title": "Liturgy: Musaf of Shabbat",
         "university": "Yeshiva University"
      },
      {
         "capacity": 37,
         "code": "1350",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:30",
         "subject": "JUDS",
         "title": "Introduction to Jewish Beliefs",
         "university": "Yeshiva University"
      },
      {
         "capacity": 31,
         "code": "1403",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:40",
         "subject": "JUDS",
         "title": "Basic Jewish Concepts",
         "university": "Yeshiva University"
      },
      {
         "capacity": 31,
         "code": "1403",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:25",
         "subject": "JUDS",
         "title": "Basic Jewish Concepts",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "1406",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:25",
         "subject": "JUDS",
         "title": "Basic Jewish Concepts",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "1436",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:20",
         "subject": "JUDS",
         "title": "Kashrut",
         "university": "Yeshiva University"
      },
      {
         "capacity": 32,
         "code": "1440",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "12:00",
         "subject": "JUDS",
         "title": "Jewish Laws & Cust: Family Law",
         "university": "Yeshiva University"
      },
      {
         "capacity": 33,
         "code": "1443",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:30",
         "subject": "JUDS",
         "title": "Jewish Laws & Cust: Family Law",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "1443A",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "16:40",
         "subject": "JUDS",
         "title": "Jewish Laws & Cust: Family Law",
         "university": "Yeshiva University"
      },
      {
         "capacity": 33,
         "code": "1449",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:10",
         "subject": "JUDS",
         "title": "Laws & Customs:Marriage",
         "university": "Yeshiva University"
      },
      {
         "capacity": 33,
         "code": "1449",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:35",
         "subject": "JUDS",
         "title": "Laws & Customs:Marriage",
         "university": "Yeshiva University"
      },
      {
         "capacity": 33,
         "code": "1450",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:45",
         "subject": "JUDS",
         "title": "Marriage in Halakhah I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 33,
         "code": "1453",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:25",
         "subject": "JUDS",
         "title": "Shabbat: Survey",
         "university": "Yeshiva University"
      },
      {
         "capacity": 33,
         "code": "1455",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "12:00",
         "subject": "JUDS",
         "title": "Shabbat Survey",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "1457",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:15",
         "subject": "JUDS",
         "title": "The Sabbath",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "1465",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:30",
         "subject": "JUDS",
         "title": "The Festivals I: Survey",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "1486H",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:10",
         "subject": "JUDS",
         "title": "Daily Life: Laws of Blessings",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "1488",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "12:00",
         "subject": "JUDS",
         "title": "Daily Life: Birkat Hamazon",
         "university": "Yeshiva University"
      },
      {
         "capacity": 33,
         "code": "1508",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "JUDS",
         "title": "Topics In Jewish Law",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "1512",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "12:00",
         "subject": "JUDS",
         "title": "Tps: Development of Jewish Law",
         "university": "Yeshiva University"
      },
      {
         "capacity": 33,
         "code": "1574",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:40",
         "subject": "JUDS",
         "title": "The Individual in Society",
         "university": "Yeshiva University"
      },
      {
         "capacity": 33,
         "code": "1574",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:25",
         "subject": "JUDS",
         "title": "The Individual in Society",
         "university": "Yeshiva University"
      },
      {
         "capacity": 33,
         "code": "1582",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "JUDS",
         "title": "Medical Ethics",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "1591H",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:30",
         "subject": "JUDS",
         "title": "Jewish Civil Law",
         "university": "Yeshiva University"
      },
      {
         "capacity": 45,
         "code": "1603",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "12:00",
         "subject": "JUDS",
         "title": "Modern Jewish Problems",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1841",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:25",
         "subject": "JUDS",
         "title": "Intro to Talmud I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1843",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:20",
         "subject": "JUDS",
         "title": "Intermediate Talmud I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "1845H",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "JUDS",
         "title": "Advanced Talmud",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "1845H",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "8:40",
         "subject": "JUDS",
         "title": "Advanced Talmud",
         "university": "Yeshiva University"
      },
      {
         "capacity": 40,
         "code": "1852",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "18:20",
         "subject": "JUDS",
         "title": "Selected Rabbinic Literature",
         "university": "Yeshiva University"
      },
      {
         "capacity": 40,
         "code": "1854",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "JUDS",
         "title": "Rab Lit:Hashkafa of Vilna Gaon",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "1020",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:25",
         "subject": "MAN",
         "title": "Mangmnt in a Global Environmnt",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "2110",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "11:55",
         "subject": "MAN",
         "title": "Organizational Behavior 35595  MAN 2110 - C",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "2370",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "12:00",
         "subject": "MAN",
         "title": "Human Resources",
         "university": "Yeshiva University"
      },
      {
         "capacity": 18,
         "code": "2941",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "MAN",
         "title": "Sports Marketing Management",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "3780",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:30",
         "subject": "MAN",
         "title": "Principles of Entrepreneurship",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "1001",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "MAR",
         "title": "Principles of Marketing",
         "university": "Yeshiva University"
      },
      {
         "capacity": 18,
         "code": "2941",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "MAR",
         "title": "Sports Marketing Management",
         "university": "Yeshiva University"
      },
      {
         "capacity": 9,
         "code": "3323",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "18:00",
         "subject": "MAR",
         "title": "Creative Advertising",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "3502",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:30",
         "subject": "MAR",
         "title": "Creative & Innovative Prod Dev",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "3530",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:45",
         "subject": "MAR",
         "title": "Fashion Accessories and Design",
         "university": "Yeshiva University"
      },
      {
         "capacity": 22,
         "code": "3720",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:25",
         "subject": "MAR",
         "title": "Marketing Capstone",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "1010",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "11:55",
         "subject": "MATH",
         "title": "EXCURSIONS IN MATHEMATICS   34281  MATH 1010-C  ",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "1412",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:15",
         "subject": "MATH",
         "title": "Calculus I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "1412T",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "12:00",
         "subject": "MATH",
         "title": "Calculus I Recitation",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "1412T",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:45",
         "subject": "MATH",
         "title": "Calculus I Recitation",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "1412T",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:45",
         "subject": "MATH",
         "title": "Calculus I Recitation",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "1413",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "12:00",
         "subject": "MATH",
         "title": "Calculus II",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "1413",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:15",
         "subject": "MATH",
         "title": "Calculus II",
         "university": "Yeshiva University"
      },
      {
         "capacity": 12,
         "code": "1504",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:45",
         "subject": "MATH",
         "title": "Discrete Structures",
         "university": "Yeshiva University"
      },
      {
         "capacity": 10,
         "code": "1510",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "MATH",
         "title": "Multivariable Calculus",
         "university": "Yeshiva University"
      },
      {
         "capacity": 10,
         "code": "1510",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:30",
         "subject": "MATH",
         "title": "Multivariable Calculus",
         "university": "Yeshiva University"
      },
      {
         "capacity": 10,
         "code": "2461",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "16:40",
         "subject": "MATH",
         "title": "Probability Theory",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "1111",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "MUSI",
         "title": "Sense of Music",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "1111",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "11:55",
         "subject": "MUSI",
         "title": "Sense of Music",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "1111",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:10",
         "subject": "MUSI",
         "title": "Sense of Music",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "1111",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:35",
         "subject": "MUSI",
         "title": "Sense of Music",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "1111",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "MUSI",
         "title": "Sense of Music",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1350",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:30",
         "subject": "MUSI",
         "title": "Baroque & Classical Music",
         "university": "Yeshiva University"
      },
      {
         "capacity": 8,
         "code": "2111",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "12:00",
         "subject": "MUSI",
         "title": "Diatonic Harmony I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 8,
         "code": "2111L",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:40",
         "subject": "MUSI",
         "title": "Elem Ear Train & Key",
         "university": "Yeshiva University"
      },
      {
         "capacity": 10,
         "code": "3303",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "16:40",
         "subject": "MUSI",
         "title": "Choral Ensemble",
         "university": "Yeshiva University"
      },
      {
         "capacity": 10,
         "code": "3303",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "17:00",
         "subject": "MUSI",
         "title": "Choral Ensemble",
         "university": "Yeshiva University"
      },
      {
         "capacity": 10,
         "code": "3461",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:15",
         "subject": "MUSI",
         "title": "Chamber Ensemble",
         "university": "Yeshiva University"
      },
      {
         "capacity": 10,
         "code": "3462",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "16:40",
         "subject": "MUSI",
         "title": "Chamber Ensemble",
         "university": "Yeshiva University"
      },
      {
         "capacity": 28,
         "code": "2170",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:25",
         "subject": "PHIL",
         "title": "Ancient & Medieval Philosophy",
         "university": "Yeshiva University"
      },
      {
         "capacity": 10,
         "code": "2532",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "16:40",
         "subject": "PHIL",
         "title": "Philosophy of Art",
         "university": "Yeshiva University"
      },
      {
         "capacity": 10,
         "code": "2532",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "17:00",
         "subject": "PHIL",
         "title": "Philosophy of Art",
         "university": "Yeshiva University"
      },
      {
         "capacity": 10,
         "code": "3200",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "11:55",
         "subject": "PHIL",
         "title": "Classical Political Philosophy",
         "university": "Yeshiva University"
      },
      {
         "capacity": 28,
         "code": "3402",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:10",
         "subject": "PHIL",
         "title": "Philosophy of Law",
         "university": "Yeshiva University"
      },
      {
         "capacity": 28,
         "code": "3402",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:35",
         "subject": "PHIL",
         "title": "Philosophy of Law",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "1324A",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "20:00",
         "subject": "PEDU",
         "title": "Team Volleyball",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "1346",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "20:00",
         "subject": "PEDU",
         "title": "Team Tennis",
         "university": "Yeshiva University"
      },
      {
         "capacity": 18,
         "code": "1424",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "20:00",
         "subject": "PEDU",
         "title": "Team Basketball",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1511",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "20:00",
         "subject": "PEDU",
         "title": "Team Soccer",
         "university": "Yeshiva University"
      },
      {
         "capacity": 16,
         "code": "1610",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "20:00",
         "subject": "PEDU",
         "title": "Team Softball",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "2466",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "19:00",
         "subject": "PEDU",
         "title": "Team Fencing",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "2466",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "11:00",
         "subject": "PEDU",
         "title": "Team Fencing",
         "university": "Yeshiva University"
      },
      {
         "capacity": 28,
         "code": "1031C",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:25",
         "subject": "PHYS",
         "title": "Introductory Physics",
         "university": "Yeshiva University"
      },
      {
         "capacity": 28,
         "code": "1031C",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "11:55",
         "subject": "PHYS",
         "title": "Introductory Physics",
         "university": "Yeshiva University"
      },
      {
         "capacity": 54,
         "code": "1031T",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "18:00",
         "subject": "PHYS",
         "title": "Introductory Physics Rec",
         "university": "Yeshiva University"
      },
      {
         "capacity": 13,
         "code": "1031Y",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:25",
         "subject": "PHYS",
         "title": "Introductory Physics Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 14,
         "code": "1031Y",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "17:00",
         "subject": "PHYS",
         "title": "Introductory Physics Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 13,
         "code": "1031Y",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "PHYS",
         "title": "Introductory Physics Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 10,
         "code": "1031Y",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "16:40",
         "subject": "PHYS",
         "title": "Introductory Physics Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 10,
         "code": "1041C",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:25",
         "subject": "PHYS",
         "title": "General Physics I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 10,
         "code": "1041C",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:25",
         "subject": "PHYS",
         "title": "General Physics I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 3,
         "code": "1041Y",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:25",
         "subject": "PHYS",
         "title": "General Physics Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 2,
         "code": "1041Y",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "17:00",
         "subject": "PHYS",
         "title": "General Physics Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 3,
         "code": "1041Y",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "PHYS",
         "title": "General Physics Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 6,
         "code": "1041Y",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "16:40",
         "subject": "PHYS",
         "title": "General Physics Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 8,
         "code": "4935",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "12:00",
         "subject": "PHYS",
         "title": "Topics:Physics Colloquium",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "1201",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:10",
         "subject": "POLI",
         "title": "Intro to Comparative Politics",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "1201",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:35",
         "subject": "POLI",
         "title": "Intro to Comparative Politics",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "1401",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "11:55",
         "subject": "POLI",
         "title": "Great Political Thinkers",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "1501",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "POLI",
         "title": "Fundamentals of Pol Sci",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "2100",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "12:00",
         "subject": "POLI",
         "title": "The American Presidency",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "2197",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "18:00",
         "subject": "POLI",
         "title": "Tps:Essentials of US Legal Sys",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "2299",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:25",
         "subject": "POLI",
         "title": "Politics and Culture",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "2394",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:25",
         "subject": "POLI",
         "title": "Topics: UN & International Org",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "2397",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "POLI",
         "title": "Topics: International Conflict",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "2497H",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "18:00",
         "subject": "POLI",
         "title": "Topics: Bible & Amer Democracy",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "1010",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:30",
         "subject": "PSYC",
         "title": "Introductory Psychology",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "1010",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "12:00",
         "subject": "PSYC",
         "title": "Introductory Psychology",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "1010",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:45",
         "subject": "PSYC",
         "title": "Introductory Psychology",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "1100",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:45",
         "subject": "PSYC",
         "title": "Theories of Human Development",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "1107",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:15",
         "subject": "PSYC",
         "title": "Developmental Psyc: Life Span",
         "university": "Yeshiva University"
      },
      {
         "capacity": 57,
         "code": "2100C",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:25",
         "subject": "PSYC",
         "title": "Experimental Psychology",
         "university": "Yeshiva University"
      },
      {
         "capacity": 12,
         "code": "2100Y",
         "college": "Undergraduate Women",
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
         "instructor": "Joshua H. Bacon",
         "location": "LEX215 LX414",
         "section": "EFM",
         "semester": "Fall 2016",
         "start": "15:10",
         "subject": "PSYC",
         "title": "Experimental Psychology Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 9,
         "code": "2100Y",
         "college": "Undergraduate Women",
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
         "instructor": "Lisa Doreen Glukhovsky",
         "location": "TBA",
         "section": "EW",
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "PSYC",
         "title": "Experimental Psychology Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 12,
         "code": "2100Y",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:20",
         "subject": "PSYC",
         "title": "Experimental Psychology Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 12,
         "code": "2100Y",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:20",
         "subject": "PSYC",
         "title": "Experimental Psychology Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 12,
         "code": "2100Y",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:30",
         "subject": "PSYC",
         "title": "Experimental Psychology Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "2140",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:10",
         "subject": "PSYC",
         "title": "Learning",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "2140",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:35",
         "subject": "PSYC",
         "title": "Learning",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "2150",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "PSYC",
         "title": "Cognitive Psychology",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "2414",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:25",
         "subject": "PSYC",
         "title": "Abnormal Psychology",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "2430",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:30",
         "subject": "PSYC",
         "title": "Intro to Clinical Psychology",
         "university": "Yeshiva University"
      },
      {
         "capacity": 26,
         "code": "3105",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:25",
         "subject": "PSYC",
         "title": "Social Psychology",
         "university": "Yeshiva University"
      },
      {
         "capacity": 10,
         "code": "3214H",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "9:40",
         "subject": "PSYC",
         "title": "Research Seminar I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 24,
         "code": "3610",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "11:55",
         "subject": "PSYC",
         "title": "Public Health",
         "university": "Yeshiva University"
      },
      {
         "capacity": 45,
         "code": "3800",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:30",
         "subject": "PSYC",
         "title": "Personality",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "3804",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "16:40",
         "subject": "PSYC",
         "title": "Psychobioloy - 34315 - Psychology 3804 - F",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "3804",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "17:00",
         "subject": "PSYC",
         "title": "Psychobioloy - 34315 - Psychology 3804 - F",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "3845",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "12:00",
         "subject": "PSYC",
         "title": "Psychology & Religion",
         "university": "Yeshiva University"
      },
      {
         "capacity": 9,
         "code": "1236",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "12:00",
         "subject": "PUB",
         "title": "Epidemiology",
         "university": "Yeshiva University"
      },
      {
         "capacity": 5,
         "code": "3221",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:30",
         "subject": "PUB",
         "title": "Nutrition",
         "university": "Yeshiva University"
      },
      {
         "capacity": 6,
         "code": "3610",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "11:55",
         "subject": "PUB",
         "title": "Public Health",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "1050",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "SCIE",
         "title": "Science:Fundmntl & Application",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "1050",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:45",
         "subject": "SCIE",
         "title": "Science:Fundmntl & Application",
         "university": "Yeshiva University"
      },
      {
         "capacity": 37,
         "code": "1001",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "SOCI",
         "title": "Introduction to Sociology",
         "university": "Yeshiva University"
      },
      {
         "capacity": 33,
         "code": "1001",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "12:00",
         "subject": "SOCI",
         "title": "Introduction to Sociology",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "1158",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:25",
         "subject": "SOCI",
         "title": "Criminology",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "1205",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "SOCI",
         "title": "Introduction to Anthropology: The Human Adventure",
         "university": "Yeshiva University"
      },
      {
         "capacity": 6,
         "code": "1233",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "11:55",
         "subject": "SOCI",
         "title": "Intro To Public Health",
         "university": "Yeshiva University"
      },
      {
         "capacity": 13,
         "code": "1236",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "12:00",
         "subject": "SOCI",
         "title": "Epidemiology",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "1504",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:45",
         "subject": "SOCI",
         "title": "Methods of Soc Research",
         "university": "Yeshiva University"
      },
      {
         "capacity": 4,
         "code": "4925",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "10:25",
         "subject": "SOCI",
         "title": "Topics: Social Psychology",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1101",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "SPAN",
         "title": "Elementary Spanish - 35513 - SPAN 1101 - A",
         "university": "Yeshiva University"
      },
      {
         "capacity": 23,
         "code": "1010",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:10",
         "subject": "SPEE",
         "title": "Speech Communication",
         "university": "Yeshiva University"
      },
      {
         "capacity": 23,
         "code": "1010",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:35",
         "subject": "SPEE",
         "title": "Speech Communication",
         "university": "Yeshiva University"
      },
      {
         "capacity": 23,
         "code": "1010",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "12:00",
         "subject": "SPEE",
         "title": "Speech Communication",
         "university": "Yeshiva University"
      },
      {
         "capacity": 23,
         "code": "1010",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:15",
         "subject": "SPEE",
         "title": "Speech Communication",
         "university": "Yeshiva University"
      },
      {
         "capacity": 23,
         "code": "1010",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "16:40",
         "subject": "SPEE",
         "title": "Speech Communication",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "3001",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:10",
         "subject": "SPAU",
         "title": "Development of Language",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "3001",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:35",
         "subject": "SPAU",
         "title": "Development of Language",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "3012",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:45",
         "subject": "SPAU",
         "title": "Hearing Mechanism",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "3024",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "16:40",
         "subject": "SPAU",
         "title": "Communication Disorders Adults",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "3024",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "17:00",
         "subject": "SPAU",
         "title": "Communication Disorders Adults",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "3034",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "15:15",
         "subject": "SPAU",
         "title": "Audiology II",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "3112",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "16:45",
         "subject": "SPAU",
         "title": "Phonetics",
         "university": "Yeshiva University"
      },
      {
         "capacity": 13,
         "code": "3940",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:25",
         "subject": "SPAU",
         "title": "Clinical Observation",
         "university": "Yeshiva University"
      },
      {
         "capacity": 32,
         "code": "1021",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "11:55",
         "subject": "STAT",
         "title": "Intro to Statistics",
         "university": "Yeshiva University"
      },
      {
         "capacity": 32,
         "code": "1021",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "13:25",
         "subject": "STAT",
         "title": "Intro to Statistics",
         "university": "Yeshiva University"
      },
      {
         "capacity": 32,
         "code": "1021",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "17:15",
         "subject": "STAT",
         "title": "Introduction to Statistics",
         "university": "Yeshiva University"
      },
      {
         "capacity": 32,
         "code": "1021",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "17:15",
         "subject": "STAT",
         "title": "Introduction to Statistics",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1021",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "18:00",
         "subject": "STAT",
         "title": "Intro to Statistics",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1021",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "18:20",
         "subject": "STAT",
         "title": "Intro to Statistics",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "6124",
         "college": "Undergraduate Women",
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
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAX",
         "title": "Federal Income Taxation I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 6,
         "code": "1023H",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "10:00",
         "subject": "ART",
         "title": "Rembrandt and the Jews",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "1635H",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "ART",
         "title": "Evolution of the Skyscraper",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1831",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "ART",
         "title": "Architectural Design Process",
         "university": "Yeshiva University"
      },
      {
         "capacity": 16,
         "code": "2301",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "20:45",
         "subject": "ART",
         "title": "Principles of Drawing",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1000",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "13:05",
         "subject": "BIB",
         "title": "Bible:Text, Context, Tradition",
         "university": "Yeshiva University"
      },
      {
         "capacity": 32,
         "code": "1000",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "13:05",
         "subject": "BIB",
         "title": "Bible:Text, Context, Tradition",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1000",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "13:05",
         "subject": "BIB",
         "title": "Bible:Text, Context, Tradition",
         "university": "Yeshiva University"
      },
      {
         "capacity": 28,
         "code": "1000",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "13:05",
         "subject": "BIB",
         "title": "Bible:Text, Context, Tradition",
         "university": "Yeshiva University"
      },
      {
         "capacity": 32,
         "code": "1000",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "13:05",
         "subject": "BIB",
         "title": "Bible:Text, Context, Tradition",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1220",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "13:05",
         "subject": "BIB",
         "title": "Biblical Midrashim",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "2000H",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "13:05",
         "subject": "BIB",
         "title": "Genesis",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "2020H",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "BIB",
         "title": "Exodus",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "2700",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "13:05",
         "subject": "BIB",
         "title": "Psalms",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "2720",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "13:05",
         "subject": "BIB",
         "title": "Proverbs",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "2740",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "13:05",
         "subject": "BIB",
         "title": "Job",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "2800",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "13:05",
         "subject": "BIB",
         "title": "Daniel",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "2800",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "13:05",
         "subject": "BIB",
         "title": "Daniel",
         "university": "Yeshiva University"
      },
      {
         "capacity": 18,
         "code": "1011L",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "BIO",
         "title": "Principles Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 18,
         "code": "1011L",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "BIO",
         "title": "Principles Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 18,
         "code": "1011L",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "BIO",
         "title": "Principles Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 18,
         "code": "1011L",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "BIO",
         "title": "Principles Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 99,
         "code": "1011R",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "BIO",
         "title": "Principles Lectures",
         "university": "Yeshiva University"
      },
      {
         "capacity": 12,
         "code": "1376L",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "BIO",
         "title": "Biochemistry Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1376R",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "BIO",
         "title": "Biochemistry Lecture",
         "university": "Yeshiva University"
      },
      {
         "capacity": 12,
         "code": "3135C",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "BIO",
         "title": "CELL STRUCTURE AND FUNCTION",
         "university": "Yeshiva University"
      },
      {
         "capacity": 12,
         "code": "3135C",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "BIO",
         "title": "CELL STRUCTURE AND FUNCTION",
         "university": "Yeshiva University"
      },
      {
         "capacity": 16,
         "code": "3207C",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "BIO",
         "title": "Cell Biology",
         "university": "Yeshiva University"
      },
      {
         "capacity": 16,
         "code": "3207C",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "BIO",
         "title": "Cell Biology",
         "university": "Yeshiva University"
      },
      {
         "capacity": 18,
         "code": "3513C",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "BIO",
         "title": "Genetics",
         "university": "Yeshiva University"
      },
      {
         "capacity": 18,
         "code": "3513C",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "BIO",
         "title": "Genetics",
         "university": "Yeshiva University"
      },
      {
         "capacity": 12,
         "code": "3728C",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "17:00",
         "subject": "BIO",
         "title": "Human & Animal Physiology",
         "university": "Yeshiva University"
      },
      {
         "capacity": 12,
         "code": "3728C",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "BIO",
         "title": "Human & Animal Physiology",
         "university": "Yeshiva University"
      },
      {
         "capacity": 18,
         "code": "4023L",
         "college": "UM Yeshiva College",
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
         "instructor": "Toni M Schwarz",
         "location": "TBA",
         "section": "461",
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "BIO",
         "title": "Microbiology Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "4023R",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "BIO",
         "title": "Microbiology",
         "university": "Yeshiva University"
      },
      {
         "capacity": 0,
         "code": "4901",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "",
         "subject": "BIO",
         "title": "Research in Biology",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "4930",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "BIO",
         "title": "Topics: Psychopharmacology",
         "university": "Yeshiva University"
      },
      {
         "capacity": 18,
         "code": "4934H",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "BIO",
         "title": "Topics: Stem Cells",
         "university": "Yeshiva University"
      },
      {
         "capacity": 80,
         "code": "1045R",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "CHE",
         "title": "General Chemistry I Lec",
         "university": "Yeshiva University"
      },
      {
         "capacity": 80,
         "code": "1045R",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "17:50",
         "subject": "CHE",
         "title": "General Chemistry I Lec",
         "university": "Yeshiva University"
      },
      {
         "capacity": 12,
         "code": "1122H",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "CHE",
         "title": "Chemical Analysis",
         "university": "Yeshiva University"
      },
      {
         "capacity": 12,
         "code": "1122H",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "CHE",
         "title": "Chemical Analysis",
         "university": "Yeshiva University"
      },
      {
         "capacity": 48,
         "code": "1213R",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "CHE",
         "title": "Organic Chemistry I Lec",
         "university": "Yeshiva University"
      },
      {
         "capacity": 48,
         "code": "1213R",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "17:50",
         "subject": "CHE",
         "title": "Organic Chemistry I Lec",
         "university": "Yeshiva University"
      },
      {
         "capacity": 16,
         "code": "1215L",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "CHE",
         "title": "Organic Chemistry Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 16,
         "code": "1215L",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "CHE",
         "title": "Organic Chemistry Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 16,
         "code": "1215L",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "CHE",
         "title": "Organic Chemistry Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 6,
         "code": "1376L",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "CHE",
         "title": "Biochemistry Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "1376R",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "CHE",
         "title": "Biochemistry Lec",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "1415R",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "CHE",
         "title": "Physical Chemistry I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "1415R",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "18:50",
         "subject": "CHE",
         "title": "Physical Chemistry I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 0,
         "code": "4901",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "",
         "subject": "CHE",
         "title": "Research in Chemistry",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "1300C",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "COM",
         "title": "Introduction to Computer Science",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1300L",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "COM",
         "title": "Intro to Computer Science-Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1300L",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "COM",
         "title": "Intro to Computer Science-Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 24,
         "code": "1320C",
         "college": "UM Yeshiva College",
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
         "instructor": "Judah M. Diament",
         "location": "TBA",
         "section": "341",
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "COM",
         "title": "Data Structures",
         "university": "Yeshiva University"
      },
      {
         "capacity": 24,
         "code": "1320L",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "COM",
         "title": "Data Structures Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 12,
         "code": "1504C",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "COM",
         "title": "Discrete Structures",
         "university": "Yeshiva University"
      },
      {
         "capacity": 12,
         "code": "1504C",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "COM",
         "title": "Discrete Structures",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "1621",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "COM",
         "title": "Theory of Computation",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "3610",
         "college": "UM Yeshiva College",
         "credits": 3,
         "department": "Computer Science",
         "display": {
            "dow": "F",
            "end": "12:30pm",
            "start": "10:00am"
         },
         "dow": [
            5
         ],
         "end": "12:30",
         "id": "33922",
         "instructor": "Judah M. Diament",
         "location": "TBA",
         "section": "621",
         "semester": "Fall 2016",
         "start": "10:00",
         "subject": "COM",
         "title": "Intro to Operating Systems",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "3780",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "COM",
         "title": "Web Programming & Development",
         "university": "Yeshiva University"
      },
      {
         "capacity": 28,
         "code": "1002",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "COWC",
         "title": "COWC 1002: Diaspora Literature",
         "university": "Yeshiva University"
      },
      {
         "capacity": 28,
         "code": "1014",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "COWC",
         "title": "American Musical Cultures",
         "university": "Yeshiva University"
      },
      {
         "capacity": 28,
         "code": "1017",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "COWC",
         "title": "The Spanish Civil War 35645 COWC 1017 361",
         "university": "Yeshiva University"
      },
      {
         "capacity": 28,
         "code": "1020",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "COWC",
         "title": "Politics and Global Markets",
         "university": "Yeshiva University"
      },
      {
         "capacity": 28,
         "code": "1025",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "9:30",
         "subject": "COWC",
         "title": "Religion and Society",
         "university": "Yeshiva University"
      },
      {
         "capacity": 28,
         "code": "1003",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "CUOT",
         "title": "The Monstrous",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "1003H",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "CUOT",
         "title": "The Monstrous",
         "university": "Yeshiva University"
      },
      {
         "capacity": 28,
         "code": "1009",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "13:30",
         "subject": "CUOT",
         "title": "France and its Others",
         "university": "Yeshiva University"
      },
      {
         "capacity": 28,
         "code": "1021",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "CUOT",
         "title": "Origins of Democratic Political Culture",
         "university": "Yeshiva University"
      },
      {
         "capacity": 28,
         "code": "1026",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "9:30",
         "subject": "CUOT",
         "title": "The History of the Alphabet, from its Invention to the Rise of Arabic",
         "university": "Yeshiva University"
      },
      {
         "capacity": 108,
         "code": "1010",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "ECO",
         "title": "Principles of Economics",
         "university": "Yeshiva University"
      },
      {
         "capacity": 32,
         "code": "1177",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "ECO",
         "title": "Game Theory",
         "university": "Yeshiva University"
      },
      {
         "capacity": 32,
         "code": "1201",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "ECO",
         "title": "Intermediate Macroeconomics",
         "university": "Yeshiva University"
      },
      {
         "capacity": 18,
         "code": "1221H",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "ECO",
         "title": "Money and Banking",
         "university": "Yeshiva University"
      },
      {
         "capacity": 32,
         "code": "1421",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "ECO",
         "title": "Econometrics",
         "university": "Yeshiva University"
      },
      {
         "capacity": 32,
         "code": "1701",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "ECO",
         "title": "International Economics",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "0010",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "ENG",
         "title": "ESL: Intro to College",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "0011",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "ENG",
         "title": "Eng as Sec Lang I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "0012",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "ENG",
         "title": "Eng as Sec Lang II",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "0013",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "ENG",
         "title": "Eng as Sec Lang III",
         "university": "Yeshiva University"
      },
      {
         "capacity": 5,
         "code": "1002",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "ENG",
         "title": "Diaspora Literature",
         "university": "Yeshiva University"
      },
      {
         "capacity": 5,
         "code": "1003",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "ENG",
         "title": "Shakespeare and the Arts",
         "university": "Yeshiva University"
      },
      {
         "capacity": 5,
         "code": "1007",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "ENG",
         "title": "Fiction & Artistic Imagination",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "1409",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "ENG",
         "title": "Writing the Essay: From Personal Narrative to Personal Statements",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "2052",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "ENG",
         "title": "Realisms: Mimetic to Magical",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "2317",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "ENG",
         "title": "21st Century Chaucer: The Canterbury Tales",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "2963H",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "10:00",
         "subject": "ENG",
         "title": "Graphic Novels and Animation",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "3065",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "ENG",
         "title": "Gender and Literature",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "4001",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "20:15",
         "subject": "ENG",
         "title": "Senior Colloquium",
         "university": "Yeshiva University"
      },
      {
         "capacity": 18,
         "code": "1002",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "EXQM",
         "title": "Analysis of Environmntl Toxins",
         "university": "Yeshiva University"
      },
      {
         "capacity": 18,
         "code": "1002",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "EXQM",
         "title": "Analysis of Environmntl Toxins",
         "university": "Yeshiva University"
      },
      {
         "capacity": 13,
         "code": "1007",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "EXQM",
         "title": "Epidemiology",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "1020",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "13:30",
         "subject": "FYWR",
         "title": "First Year Writing",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "1020",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "FYWR",
         "title": "First Year Writing",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "1020",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "FYWR",
         "title": "First Year Writing",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "1020",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "FYWR",
         "title": "First Year Writing",
         "university": "Yeshiva University"
      },
      {
         "capacity": 16,
         "code": "1020",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "FYWR",
         "title": "First Year Writing:ESL",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "1020",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "FYWR",
         "title": "First Year Writing",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "1020",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "FYWR",
         "title": "First Year Writing",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "1020",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "FYWR",
         "title": "First Year Writing",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "1020",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "FYWR",
         "title": "First Year Writing",
         "university": "Yeshiva University"
      },
      {
         "capacity": 18,
         "code": "1101",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "FRE",
         "title": "Elementary French I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 18,
         "code": "1201",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "FRE",
         "title": "Intermediate French I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1004",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "12:01",
         "subject": "HEB",
         "title": "Elementary Biblical Hebrew II",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1004",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "12:20",
         "subject": "HEB",
         "title": "Elementary Biblical Hebrew II",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1004",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "14:00",
         "subject": "HEB",
         "title": "Elementary Biblical Hebrew II",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "1005",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "12:01",
         "subject": "HEB",
         "title": "Intermed. Biblical Hebrew I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "1005",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "12:20",
         "subject": "HEB",
         "title": "Intermed. Biblical Hebrew I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "1005",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "13:05",
         "subject": "HEB",
         "title": "Intermed. Biblical Hebrew I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "1005",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "13:10",
         "subject": "HEB",
         "title": "Intermed. Biblical Hebrew I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "1006",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "13:35",
         "subject": "HEB",
         "title": "Intermed. Biblical Hebrew II",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "1006",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "HEB",
         "title": "Intermed. Biblical Hebrew II",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "1006",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "17:50",
         "subject": "HEB",
         "title": "Intermed. Biblical Hebrew II",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1105",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "13:35",
         "subject": "HEB",
         "title": "intermediate Hebrew",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1105",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "HEB",
         "title": "intermediate Hebrew",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1105",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "12:20",
         "subject": "HEB",
         "title": "intermediate Hebrew",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "1106",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "HEB",
         "title": "intermediate 2",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "1106",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "12:01",
         "subject": "HEB",
         "title": "intermediate 2",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1205",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "HEB",
         "title": "Upper Intermediate Hebrew I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1206",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "13:30",
         "subject": "HEB",
         "title": "Upper Intermediate Hebrew II",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1206",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "HEB",
         "title": "Upper Intermediate Hebrew II - 34053 - HEB 1206 - 231",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1206",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "HEB",
         "title": "Upper Intermediate Hebrew II - 34017 - HEB 1206 - 241",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1206",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "HEB",
         "title": "Upper Intermediate Hebrew II - 35663 - HEB 1206 - 261",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1206",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "HEB",
         "title": "Upper Intermediate Hebrew II",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1306",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "HEB",
         "title": "Advanced Hebrew II - 34055 - HEB 1306 - 231",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1306",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "HEB",
         "title": "Advanced Hebrew II - 34034 - HEB 1306 - 331",
         "university": "Yeshiva University"
      },
      {
         "capacity": 18,
         "code": "1306H",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "HEB",
         "title": "Advanced Hebrew II - 35664 - HEB 1306H - 241",
         "university": "Yeshiva University"
      },
      {
         "capacity": 32,
         "code": "1105",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "HIS",
         "title": "His. of the Ancient Near East",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "2127H",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "10:00",
         "subject": "HIS",
         "title": "European Enlightenment",
         "university": "Yeshiva University"
      },
      {
         "capacity": 5,
         "code": "2128",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "HIS",
         "title": "Origins of Democratic Political Culture",
         "university": "Yeshiva University"
      },
      {
         "capacity": 32,
         "code": "2520",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "HIS",
         "title": "Atlantic World",
         "university": "Yeshiva University"
      },
      {
         "capacity": 32,
         "code": "2604",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "HIS",
         "title": "Piracy & the Nation State",
         "university": "Yeshiva University"
      },
      {
         "capacity": 40,
         "code": "1006",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "HBSI",
         "title": "Economics Efficiency & Justice",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "1007",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "HBSI",
         "title": "Psychology and Public Opinion",
         "university": "Yeshiva University"
      },
      {
         "capacity": 10,
         "code": "1007H",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "HBSI",
         "title": "Psychology and Public Opinion",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "1012",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "10:00",
         "subject": "HBSI",
         "title": "Courts and Social Change",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "1014",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "HBSI",
         "title": "American Public Policy",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "1016H",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "HBSI",
         "title": "Sociology of Race and Racism",
         "university": "Yeshiva University"
      },
      {
         "capacity": 28,
         "code": "1003",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "INTC",
         "title": "Shakespeare and the Arts",
         "university": "Yeshiva University"
      },
      {
         "capacity": 28,
         "code": "1007",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "INTC",
         "title": "Fiction & Artistic Imagination",
         "university": "Yeshiva University"
      },
      {
         "capacity": 28,
         "code": "1016",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "INTC",
         "title": "Culture of the Fin de Siecle",
         "university": "Yeshiva University"
      },
      {
         "capacity": 28,
         "code": "1018",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "INTC",
         "title": "Aesthetic Revolutions",
         "university": "Yeshiva University"
      },
      {
         "capacity": 28,
         "code": "1022",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "10:00",
         "subject": "INTC",
         "title": "Travel Narratives",
         "university": "Yeshiva University"
      },
      {
         "capacity": 12,
         "code": "1023H",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "10:00",
         "subject": "INTC",
         "title": "Rembrandt and the Jews",
         "university": "Yeshiva University"
      },
      {
         "capacity": 45,
         "code": "1200",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "JHI",
         "title": "Classical Jewish History",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "1300",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "JHI",
         "title": "Medieval Jewish History",
         "university": "Yeshiva University"
      },
      {
         "capacity": 18,
         "code": "1300H",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "JHI",
         "title": "Medieval Jewish History",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "1400",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "JHI",
         "title": "Modern Jewish History",
         "university": "Yeshiva University"
      },
      {
         "capacity": 40,
         "code": "1400",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "JHI",
         "title": "Modern Jewish History",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1410",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "JHI",
         "title": "Early Modern Intellectual JHI",
         "university": "Yeshiva University"
      },
      {
         "capacity": 18,
         "code": "2210H",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "JHI",
         "title": "Classical Intellectual JHI",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "1380",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "JPH",
         "title": "Early Kabbalah",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1160",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "17:50",
         "subject": "MAT",
         "title": "Precalculus",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1160",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "MAT",
         "title": "Precalculus",
         "university": "Yeshiva University"
      },
      {
         "capacity": 24,
         "code": "1401",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "MAT",
         "title": "Problem Seminar I - 34040 - MAT 1401 - 241",
         "university": "Yeshiva University"
      },
      {
         "capacity": 24,
         "code": "1401",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "17:50",
         "subject": "MAT",
         "title": "Problem Seminar I - 33883 - MAT 1401 - 251",
         "university": "Yeshiva University"
      },
      {
         "capacity": 24,
         "code": "1401",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "MAT",
         "title": "Problem Seminar I - 33884 - MAT 1401 - 361",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "1402",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "17:50",
         "subject": "MAT",
         "title": "Problem Seminar II - 33925 - MAT 1402 - 551",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "1403",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "17:50",
         "subject": "MAT",
         "title": "Problem Seminar III",
         "university": "Yeshiva University"
      },
      {
         "capacity": 72,
         "code": "1412",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "MAT",
         "title": "Calculus I - 33886 - MAT 1412 - 341",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "1413",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "MAT",
         "title": "Calculus II",
         "university": "Yeshiva University"
      },
      {
         "capacity": 6,
         "code": "1504C",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "MAT",
         "title": "Discrete Structures",
         "university": "Yeshiva University"
      },
      {
         "capacity": 6,
         "code": "1504C",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "MAT",
         "title": "Discrete Structures",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "1510",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "MAT",
         "title": "Multivariable Calculus",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "1520",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "MAT",
         "title": "Advanced Calculus I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "2105",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "MAT",
         "title": "Linear Algebra",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "2461",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "MAT",
         "title": "Probability Theory",
         "university": "Yeshiva University"
      },
      {
         "capacity": 6,
         "code": "1014",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "MUS",
         "title": "American Musical Cultures",
         "university": "Yeshiva University"
      },
      {
         "capacity": 6,
         "code": "1018",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "MUS",
         "title": "Aesthetic Revolutions",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "1350",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "MUS",
         "title": "Baroque & Classical Music",
         "university": "Yeshiva University"
      },
      {
         "capacity": 6,
         "code": "1829H",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "MUS",
         "title": "Music and the Brain",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "2111",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "MUS",
         "title": "Diatonic Harmony&Counterpoint",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "2111L",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "17:50",
         "subject": "MUS",
         "title": "Ear Training I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "2113",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "MUS",
         "title": "Chromatic Harmony & Counterpoint I Mus 2113",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "2113L",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "17:50",
         "subject": "MUS",
         "title": "Ear Training III - 35670 - MUS 2113L - 251",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "2120",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "MUS",
         "title": "Introduction to Composition",
         "university": "Yeshiva University"
      },
      {
         "capacity": 70,
         "code": "1010",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "NAWO",
         "title": "Frontiers of Science",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "1110",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "9:30",
         "subject": "NAWO",
         "title": "The Imagination of Nature",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "1100",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "PHI",
         "title": "Logic",
         "university": "Yeshiva University"
      },
      {
         "capacity": 18,
         "code": "2170H",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "PHI",
         "title": "Ancient & Medieval Philosophy",
         "university": "Yeshiva University"
      },
      {
         "capacity": 18,
         "code": "4930H",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "PHI",
         "title": "Topics: Judaism and Democracy",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "4931",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "PHI",
         "title": "Seminar: Paradoxes",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "4932",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "PHI",
         "title": "Seminar: Kant's First Critique",
         "university": "Yeshiva University"
      },
      {
         "capacity": 0,
         "code": "1120",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "",
         "subject": "PED",
         "title": "Team Golf",
         "university": "Yeshiva University"
      },
      {
         "capacity": 0,
         "code": "1326",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "",
         "subject": "PED",
         "title": "Team Volleyball",
         "university": "Yeshiva University"
      },
      {
         "capacity": 0,
         "code": "1346",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "",
         "subject": "PED",
         "title": "Team Tennis",
         "university": "Yeshiva University"
      },
      {
         "capacity": 0,
         "code": "1426",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "",
         "subject": "PED",
         "title": "Team Basketball",
         "university": "Yeshiva University"
      },
      {
         "capacity": 0,
         "code": "1511",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "",
         "subject": "PED",
         "title": "Team Soccer",
         "university": "Yeshiva University"
      },
      {
         "capacity": 0,
         "code": "1611",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "",
         "subject": "PED",
         "title": "Team Baseball",
         "university": "Yeshiva University"
      },
      {
         "capacity": 0,
         "code": "2316",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "",
         "subject": "PED",
         "title": "Team Cross-Country",
         "university": "Yeshiva University"
      },
      {
         "capacity": 0,
         "code": "2466",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "",
         "subject": "PED",
         "title": "Team Fencing",
         "university": "Yeshiva University"
      },
      {
         "capacity": 16,
         "code": "1031L",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "PHY",
         "title": "Intro Physics Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 16,
         "code": "1031L",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "13:05",
         "subject": "PHY",
         "title": "Intro Physics Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 16,
         "code": "1031L",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "PHY",
         "title": "Intro Physics Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 48,
         "code": "1031R",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "PHY",
         "title": "Intro Physics Lecture",
         "university": "Yeshiva University"
      },
      {
         "capacity": 24,
         "code": "1031T",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "17:50",
         "subject": "PHY",
         "title": "Intro Physics I - Recitation",
         "university": "Yeshiva University"
      },
      {
         "capacity": 24,
         "code": "1031T",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "17:50",
         "subject": "PHY",
         "title": "Intro Physics I - Recitation",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "1051R",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "PHY",
         "title": "Calculus Based Physics",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "1051T",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "17:50",
         "subject": "PHY",
         "title": "General Physics I-Recitation",
         "university": "Yeshiva University"
      },
      {
         "capacity": 10,
         "code": "1401",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "11:00",
         "subject": "PHY",
         "title": "PHY Solid State",
         "university": "Yeshiva University"
      },
      {
         "capacity": 10,
         "code": "1510H",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "PHY",
         "title": "Statistical Mechanics",
         "university": "Yeshiva University"
      },
      {
         "capacity": 10,
         "code": "1621",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "PHY",
         "title": "Intro to Quantum Mechanics",
         "university": "Yeshiva University"
      },
      {
         "capacity": 36,
         "code": "2051R",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "PHY",
         "title": "General Physics III",
         "university": "Yeshiva University"
      },
      {
         "capacity": 36,
         "code": "2051T",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "17:50",
         "subject": "PHY",
         "title": "General Physics III-Recitation",
         "university": "Yeshiva University"
      },
      {
         "capacity": 18,
         "code": "2061L",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "PHY",
         "title": "General Physics III Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 18,
         "code": "2061L",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "PHY",
         "title": "General Physics III Lab",
         "university": "Yeshiva University"
      },
      {
         "capacity": 0,
         "code": "4901",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "",
         "subject": "PHY",
         "title": "Research in Physics",
         "university": "Yeshiva University"
      },
      {
         "capacity": 0,
         "code": "4935",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "12:00",
         "subject": "PHY",
         "title": "Physics Colloquium",
         "university": "Yeshiva University"
      },
      {
         "capacity": 32,
         "code": "1101",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "POL",
         "title": "Intro to American Politics",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "1105",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "POL",
         "title": "Intro American Public Policy",
         "university": "Yeshiva University"
      },
      {
         "capacity": 18,
         "code": "1305H",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "POL",
         "title": "American Foreign Policy",
         "university": "Yeshiva University"
      },
      {
         "capacity": 32,
         "code": "1501",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "POL",
         "title": "Fundamentals of Political Science",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "2320",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "POL",
         "title": "Politics and Global Markets",
         "university": "Yeshiva University"
      },
      {
         "capacity": 32,
         "code": "2430",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "POL",
         "title": "American Political Thought",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "2505",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "POL",
         "title": "Writing Politics:Dir. Research",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "3115H",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "POL",
         "title": "Presidential Elections",
         "university": "Yeshiva University"
      },
      {
         "capacity": 7,
         "code": "3575",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "POL",
         "title": "Research Methods",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "1010",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "PSY",
         "title": "Introduction to Psychology",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "1010",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "PSY",
         "title": "Introduction to Psychology",
         "university": "Yeshiva University"
      },
      {
         "capacity": 32,
         "code": "1021",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "PSY",
         "title": "Statistics for Psychology",
         "university": "Yeshiva University"
      },
      {
         "capacity": 32,
         "code": "1110",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "PSY",
         "title": "Developmental I: Child",
         "university": "Yeshiva University"
      },
      {
         "capacity": 32,
         "code": "1130",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "PSY",
         "title": "Developmental 2: Adult",
         "university": "Yeshiva University"
      },
      {
         "capacity": 10,
         "code": "2100C",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "PSY",
         "title": "Experimental Psychology",
         "university": "Yeshiva University"
      },
      {
         "capacity": 10,
         "code": "2100C",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "18:00",
         "subject": "PSY",
         "title": "Experimental Psychology",
         "university": "Yeshiva University"
      },
      {
         "capacity": 32,
         "code": "2150",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "PSY",
         "title": "Cognitive Psychology",
         "university": "Yeshiva University"
      },
      {
         "capacity": 32,
         "code": "2414",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "PSY",
         "title": "Abnormal Psychology",
         "university": "Yeshiva University"
      },
      {
         "capacity": 32,
         "code": "3105",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "PSY",
         "title": "Social Psychology",
         "university": "Yeshiva University"
      },
      {
         "capacity": 5,
         "code": "3110",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "PSY",
         "title": "Psychology and Public Opinion",
         "university": "Yeshiva University"
      },
      {
         "capacity": 10,
         "code": "3110H",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "PSY",
         "title": "Psychology and Public Opinion",
         "university": "Yeshiva University"
      },
      {
         "capacity": 32,
         "code": "3435",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "PSY",
         "title": "Industrial & Organization Psyc",
         "university": "Yeshiva University"
      },
      {
         "capacity": 32,
         "code": "3440",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "PSY",
         "title": "Drugs & Behavior",
         "university": "Yeshiva University"
      },
      {
         "capacity": 32,
         "code": "3804",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "PSY",
         "title": "Psychobiology",
         "university": "Yeshiva University"
      },
      {
         "capacity": 10,
         "code": "3829H",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "PSY",
         "title": "Music and the Brain",
         "university": "Yeshiva University"
      },
      {
         "capacity": 0,
         "code": "4901",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "",
         "subject": "PSY",
         "title": "Research in Psychology",
         "university": "Yeshiva University"
      },
      {
         "capacity": 10,
         "code": "4930",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "PSY",
         "title": "Topics: Psychopharmacology",
         "university": "Yeshiva University"
      },
      {
         "capacity": 10,
         "code": "4933",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "PSY",
         "title": "Research Seminar",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1001",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "SOC",
         "title": "Introduction to Sociology",
         "university": "Yeshiva University"
      },
      {
         "capacity": 5,
         "code": "2105",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "9:30",
         "subject": "SOC",
         "title": "Religion and Society",
         "university": "Yeshiva University"
      },
      {
         "capacity": 5,
         "code": "2306H",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "SOC",
         "title": "Sociology of Race and Racism",
         "university": "Yeshiva University"
      },
      {
         "capacity": 5,
         "code": "2407",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "SOC",
         "title": "Epidemiology",
         "university": "Yeshiva University"
      },
      {
         "capacity": 5,
         "code": "2701",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "SOC",
         "title": "Social Psychology",
         "university": "Yeshiva University"
      },
      {
         "capacity": 18,
         "code": "3003",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "SOC",
         "title": "Social Research Methods",
         "university": "Yeshiva University"
      },
      {
         "capacity": 18,
         "code": "1101",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "SPA",
         "title": "Elementary Spanish I 33901 SPA 1101 231",
         "university": "Yeshiva University"
      },
      {
         "capacity": 18,
         "code": "1101",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "13:30",
         "subject": "SPA",
         "title": "Elementary Spanish I 33902 SPA 1101  311",
         "university": "Yeshiva University"
      },
      {
         "capacity": 18,
         "code": "1201",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "SPA",
         "title": "Intermediate Spanish I - 36557 - SPA 1201 - 241",
         "university": "Yeshiva University"
      },
      {
         "capacity": 18,
         "code": "1201",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "SPA",
         "title": "Intermediate Spanish I - 33903 - SPA 1201 - 331",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "1231",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "SPA",
         "title": "Advanced Spanish - 36038 - SPA 1231 - 241",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "1021",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "10:00",
         "subject": "STA",
         "title": "Intro to Statistics",
         "university": "Yeshiva University"
      },
      {
         "capacity": 18,
         "code": "2910",
         "college": "UM Yeshiva College",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "THEA",
         "title": "Art of the Actor",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "1001",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "13:30",
         "subject": "ACC",
         "title": "Accounting Principles I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 40,
         "code": "1001",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "ACC",
         "title": "Accounting Principles I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 40,
         "code": "1001",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "ACC",
         "title": "Accounting Principles I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 40,
         "code": "1001",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "ACC",
         "title": "Accounting Principles I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 0,
         "code": "1001",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "ACC",
         "title": "Accounting Principles I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "1002",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "ACC",
         "title": "Accounting Principles II",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "1101",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "ACC",
         "title": "Intermediate Accounting I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "1101",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "ACC",
         "title": "Intermediate Accounting I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1101",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "ACC",
         "title": "Intermediate Accounting I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 40,
         "code": "2403",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "ACC",
         "title": "Management Accounting",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "3201",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "ACC",
         "title": "Advanced Accounting",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "3201",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "ACC",
         "title": "Advanced Accounting",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "3851",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "ACC",
         "title": "Financial Statement Analysis",
         "university": "Yeshiva University"
      },
      {
         "capacity": 40,
         "code": "1800H",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "BLW",
         "title": "Business as Human Enterprise",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "2021",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "BLW",
         "title": "Ethical & Legal Env Business",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "2021",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "BLW",
         "title": "Ethical & Legal Env Business",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "2111",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "13:30",
         "subject": "BLW",
         "title": "Business Law I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 45,
         "code": "2111",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "BLW",
         "title": "Business Law I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "2500",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "13:05",
         "subject": "BLW",
         "title": "Business and Jewish Law",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "2500",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "13:05",
         "subject": "BLW",
         "title": "Business and Jewish Law",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "2500",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "13:05",
         "subject": "BLW",
         "title": "Business and Jewish Law",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "1001",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "FIN",
         "title": "Principles of Finance",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "1001",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "FIN",
         "title": "Principles of Finance",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1408",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "FIN",
         "title": "Corporate Finance",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1408",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "FIN",
         "title": "Corporate Finance",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "2505",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "FIN",
         "title": "Investment Analysis",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "3510",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "FIN",
         "title": "Options and Futures",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "3720",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "FIN",
         "title": "Fixed Income Securities",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "3851",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "FIN",
         "title": "Financial Statement Analysis",
         "university": "Yeshiva University"
      },
      {
         "capacity": 22,
         "code": "1012",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "13:30",
         "subject": "FYSM",
         "title": "Business Communication",
         "university": "Yeshiva University"
      },
      {
         "capacity": 22,
         "code": "1012",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "FYSM",
         "title": "Business Communication",
         "university": "Yeshiva University"
      },
      {
         "capacity": 22,
         "code": "1012",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "FYSM",
         "title": "Business Communication",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "1020",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "FYWR",
         "title": "First Year Writing",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "1020",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "FYWR",
         "title": "First Year Writing",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "1020",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "13:30",
         "subject": "FYWR",
         "title": "First Year Writing",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "1020",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "FYWR",
         "title": "First Year Writing",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "1020",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "FYWR",
         "title": "First Year Writing",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "1020",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "FYWR",
         "title": "First Year Writing",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "1001",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "IDS",
         "title": "Business Algebra",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "1001",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "IDS",
         "title": "Business Algebra",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "1020",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "13:30",
         "subject": "IDS",
         "title": "Intro to Information Systems",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "1020",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "IDS",
         "title": "Intro to Information Systems",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "1020",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "IDS",
         "title": "Intro to Information Systems",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "1020",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "IDS",
         "title": "Intro to Information Systems",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "1131",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "IDS",
         "title": "Statistics for Business",
         "university": "Yeshiva University"
      },
      {
         "capacity": 40,
         "code": "1131",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "IDS",
         "title": "Statistics for Business",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "1131",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "IDS",
         "title": "Statistics for Business",
         "university": "Yeshiva University"
      },
      {
         "capacity": 40,
         "code": "1456",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "13:30",
         "subject": "IDS",
         "title": "Quantitative Methods Managment",
         "university": "Yeshiva University"
      },
      {
         "capacity": 40,
         "code": "1456",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "IDS",
         "title": "Quantitative Methods Managment",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "2030",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "IDS",
         "title": "Bus. Analytics & Programming",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "2160",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "IDS",
         "title": "Decision Models",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "2460",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "IDS",
         "title": "Data Management-Bus Analytics",
         "university": "Yeshiva University"
      },
      {
         "capacity": 56,
         "code": "1001",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "JVCW",
         "title": "Jewish Engagements",
         "university": "Yeshiva University"
      },
      {
         "capacity": 56,
         "code": "1001",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "13:30",
         "subject": "JVCW",
         "title": "Jewish Engagements",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "1001",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "JVCW",
         "title": "Jewish Engagements",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "1001",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "13:30",
         "subject": "JVCW",
         "title": "Jewish Engagements",
         "university": "Yeshiva University"
      },
      {
         "capacity": 55,
         "code": "1002",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "13:05",
         "subject": "JVCW",
         "title": "Jewish Values in Contemp Wrld",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "1002",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "13:05",
         "subject": "JVCW",
         "title": "Jewish Values in Contemp Wrld",
         "university": "Yeshiva University"
      },
      {
         "capacity": 36,
         "code": "1020",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "MAN",
         "title": "Mangmnt in a Global Environmnt",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "1020",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "MAN",
         "title": "Mangmnt in a Global Environmnt",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "1020",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "MAN",
         "title": "Mangmnt in a Global Environmnt",
         "university": "Yeshiva University"
      },
      {
         "capacity": 40,
         "code": "2800H",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "18:30",
         "subject": "MAN",
         "title": "Entrepreneurial Leadership",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "2941",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "MAN",
         "title": "Sports Marketing Management",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "2945",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "MAN",
         "title": "Real Estate Management",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "3015",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "MAN",
         "title": "Management & Leadership",
         "university": "Yeshiva University"
      },
      {
         "capacity": 37,
         "code": "3780",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "MAN",
         "title": "Principles of Entrepreneurship",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "3788",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "MAN",
         "title": "Managing the Family Business",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "4002",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "MAN",
         "title": "Leadership in Non-Profit World",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "1001",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "13:30",
         "subject": "MAR",
         "title": "Mar 1001 Principles of Marketing",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "1001",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "MAR",
         "title": "Mar 1001 Principles of Marketing",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "1001",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "MAR",
         "title": "Mar 1001 Principles of Marketing",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "2501",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "MAR",
         "title": "Buyer Behavior",
         "university": "Yeshiva University"
      },
      {
         "capacity": 26,
         "code": "2621",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "MAR",
         "title": "Applied Research",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "2941",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "MAR",
         "title": "Sports Marketing Management",
         "university": "Yeshiva University"
      },
      {
         "capacity": 37,
         "code": "3318",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "MAR",
         "title": "Social Media Marketing",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "3320",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "MAR",
         "title": "Digital Media - Tuesdays - 6:45pm",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "3328",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "MAR",
         "title": "Managing Sales in Hi-Tech Co.",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "6124",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "16:30",
         "subject": "TAX",
         "title": "Federal Income Taxation I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "6124",
         "college": "UM Syms for Men",
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
         "semester": "Fall 2016",
         "start": "18:45",
         "subject": "TAX",
         "title": "Federal Income Taxation I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "5506",
         "college": "Syms Graduate Program",
         "credits": 3,
         "department": "Accounting",
         "display": {
            "dow": "M",
            "end": "08:00pm",
            "start": "05:45pm"
         },
         "dow": [
            1
         ],
         "end": "20:00",
         "id": "37533",
         "instructor": "Michael H. Cohen",
         "location": "LEX215 LX208",
         "section": "FHM",
         "semester": "Fall 2016",
         "start": "17:45",
         "subject": "ACC",
         "title": "Forensic Accounting",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "6140",
         "college": "Syms Graduate Program",
         "credits": 3,
         "department": "Accounting",
         "display": {
            "dow": "M",
            "end": "10:30pm",
            "start": "08:15pm"
         },
         "dow": [
            1
         ],
         "end": "22:30",
         "id": "37532",
         "instructor": "Michael H. Cohen",
         "location": "LEX215 LX208",
         "section": "HIM",
         "semester": "Fall 2016",
         "start": "20:15",
         "subject": "ACC",
         "title": "Governmtl & Not for Profit ACC",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "6275",
         "college": "Syms Graduate Program",
         "credits": 3,
         "department": "Accounting",
         "display": {
            "dow": "W",
            "end": "10:30pm",
            "start": "08:15pm"
         },
         "dow": [
            3
         ],
         "end": "22:30",
         "id": "37535",
         "instructor": "He Huang, Francine Mellors-Rothenstein ",
         "location": "LEX215 LX208",
         "section": "HIW",
         "semester": "Fall 2016",
         "start": "20:15",
         "subject": "ACC",
         "title": "Contemporary Topics in Acct.",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "6124",
         "college": "Syms Graduate Program",
         "credits": 3,
         "department": "Tax",
         "display": {
            "dow": "T",
            "end": "02:15pm",
            "start": "12:00pm"
         },
         "dow": [
            2
         ],
         "end": "14:15",
         "id": "37534",
         "instructor": "Leonard Fuld",
         "location": "BELFHL B430",
         "section": "LMT",
         "semester": "Fall 2016",
         "start": "12:00",
         "subject": "TAX",
         "title": "Federal Income Taxation I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 45,
         "code": "6165",
         "college": "Syms Graduate Program",
         "credits": 3,
         "department": "Tax",
         "display": {
            "dow": "W",
            "end": "08:00pm",
            "start": "05:45pm"
         },
         "dow": [
            3
         ],
         "end": "20:00",
         "id": "37536",
         "instructor": "David Wasserstrum",
         "location": "LEX215 LX208",
         "section": "FHW",
         "semester": "Fall 2016",
         "start": "17:45",
         "subject": "TAX",
         "title": "Tax Practice and Research",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1203",
         "college": "Stone Beit Midrash Program",
         "credits": 4,
         "department": "*Talmud",
         "display": {
            "dow": "MTWR",
            "end": "11:35am",
            "start": "10:20am"
         },
         "dow": [
            1,
            2,
            3,
            4
         ],
         "end": "11:35",
         "id": "35214",
         "instructor": "Aharon M. Ciment",
         "location": "FURST F214",
         "section": "BM1",
         "semester": "Fall 2016",
         "start": "10:20",
         "subject": "TAL",
         "title": "Advanced Talmud-Beit Midrash",
         "university": "Yeshiva University"
      },
      {
         "capacity": 27,
         "code": "1203",
         "college": "Stone Beit Midrash Program",
         "credits": 4,
         "department": "*Talmud",
         "display": {
            "dow": "MTWR",
            "end": "11:35am",
            "start": "10:20am"
         },
         "dow": [
            1,
            2,
            3,
            4
         ],
         "end": "11:35",
         "id": "35482",
         "instructor": "Steven J. Maybruch",
         "location": "TBA",
         "section": "BM2",
         "semester": "Fall 2016",
         "start": "10:20",
         "subject": "TAL",
         "title": "Advanced Talmud-Beit Midrash",
         "university": "Yeshiva University"
      },
      {
         "capacity": 29,
         "code": "1203",
         "college": "Stone Beit Midrash Program",
         "credits": 4,
         "department": "*Talmud",
         "display": {
            "dow": "MTWR",
            "end": "11:35am",
            "start": "10:20am"
         },
         "dow": [
            1,
            2,
            3,
            4
         ],
         "end": "11:35",
         "id": "35226",
         "instructor": "Jonathan Schachter",
         "location": "TBA",
         "section": "BM3",
         "semester": "Fall 2016",
         "start": "10:20",
         "subject": "TAL",
         "title": "Advanced Talmud-Beit Midrash",
         "university": "Yeshiva University"
      },
      {
         "capacity": 28,
         "code": "1203",
         "college": "Stone Beit Midrash Program",
         "credits": 4,
         "department": "*Talmud",
         "display": {
            "dow": "MTWR",
            "end": "11:35am",
            "start": "10:20am"
         },
         "dow": [
            1,
            2,
            3,
            4
         ],
         "end": "11:35",
         "id": "35232",
         "instructor": "Etan Schnall",
         "location": "TBA",
         "section": "BM4",
         "semester": "Fall 2016",
         "start": "10:20",
         "subject": "TAL",
         "title": "Advanced Talmud-Beit Midrash",
         "university": "Yeshiva University"
      },
      {
         "capacity": 27,
         "code": "1203",
         "college": "Stone Beit Midrash Program",
         "credits": 4,
         "department": "*Talmud",
         "display": {
            "dow": "MTWR",
            "end": "11:35am",
            "start": "10:20am"
         },
         "dow": [
            1,
            2,
            3,
            4
         ],
         "end": "11:35",
         "id": "35238",
         "instructor": "Eli Belizon",
         "location": "TBA",
         "section": "BM5",
         "semester": "Fall 2016",
         "start": "10:20",
         "subject": "TAL",
         "title": "Advanced Talmud-Beit Midrash",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1203",
         "college": "Stone Beit Midrash Program",
         "credits": 4,
         "department": "*Talmud",
         "display": {
            "dow": "MTWR",
            "end": "11:35am",
            "start": "10:20am"
         },
         "dow": [
            1,
            2,
            3,
            4
         ],
         "end": "11:35",
         "id": "35244",
         "instructor": "Daniel Rapp",
         "location": "TBA",
         "section": "BM6",
         "semester": "Fall 2016",
         "start": "10:20",
         "subject": "TAL",
         "title": "Advanced Talmud-Beit Midrash",
         "university": "Yeshiva University"
      },
      {
         "capacity": 27,
         "code": "1203",
         "college": "Stone Beit Midrash Program",
         "credits": 4,
         "department": "*Talmud",
         "display": {
            "dow": "MTWR",
            "end": "11:35am",
            "start": "10:20am"
         },
         "dow": [
            1,
            2,
            3,
            4
         ],
         "end": "11:35",
         "id": "35250",
         "instructor": "Matthew Eric Weinberg",
         "location": "TBA",
         "section": "BM7",
         "semester": "Fall 2016",
         "start": "10:20",
         "subject": "TAL",
         "title": "Advanced Talmud-Beit Midrash",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "1203",
         "college": "Stone Beit Midrash Program",
         "credits": 4,
         "department": "*Talmud",
         "display": {
            "dow": "MTWR",
            "end": "11:35am",
            "start": "10:20am"
         },
         "dow": [
            1,
            2,
            3,
            4
         ],
         "end": "11:35",
         "id": "35256",
         "instructor": "Etan Moshe Berman",
         "location": "TBA",
         "section": "BM8",
         "semester": "Fall 2016",
         "start": "10:20",
         "subject": "TAL",
         "title": "Advanced Talmud-Beit Midrash",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1203",
         "college": "Stone Beit Midrash Program",
         "credits": 4,
         "department": "*Talmud",
         "display": {
            "dow": "MTWR",
            "end": "11:35am",
            "start": "10:20am"
         },
         "dow": [
            1,
            2,
            3,
            4
         ],
         "end": "11:35",
         "id": "35262",
         "instructor": "Meir Goldwicht",
         "location": "TBA",
         "section": "BM9",
         "semester": "Fall 2016",
         "start": "10:20",
         "subject": "TAL",
         "title": "Advanced Talmud-Beit Midrash",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "3037",
         "college": "Stone Beit Midrash Program",
         "credits": 4,
         "department": "*Talmud",
         "display": {
            "dow": "MTWR",
            "end": "12:55pm",
            "start": "11:40am"
         },
         "dow": [
            1,
            2,
            3,
            4
         ],
         "end": "12:55",
         "id": "35215",
         "instructor": "Aharon M. Ciment",
         "location": "FURST F214",
         "section": "BM1",
         "semester": "Fall 2016",
         "start": "11:40",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 27,
         "code": "3037",
         "college": "Stone Beit Midrash Program",
         "credits": 4,
         "department": "*Talmud",
         "display": {
            "dow": "MWR",
            "end": "12:55pm",
            "start": "11:40am"
         },
         "dow": [
            1,
            3,
            4
         ],
         "end": "12:55",
         "id": "35483",
         "instructor": "Steven J. Maybruch",
         "location": "GLUECK G418",
         "section": "BM2",
         "semester": "Fall 2016",
         "start": "11:40",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 27,
         "code": "3037",
         "college": "Stone Beit Midrash Program",
         "credits": 4,
         "department": "*Talmud",
         "display": {
            "dow": "T",
            "end": "12:55pm",
            "start": "11:40am"
         },
         "dow": [
            2
         ],
         "end": "12:55",
         "id": "35483",
         "instructor": "Steven J. Maybruch",
         "location": "GLUECK G303",
         "section": "BM2",
         "semester": "Fall 2016",
         "start": "11:40",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 29,
         "code": "3037",
         "college": "Stone Beit Midrash Program",
         "credits": 4,
         "department": "*Talmud",
         "display": {
            "dow": "MTWR",
            "end": "12:55pm",
            "start": "11:40am"
         },
         "dow": [
            1,
            2,
            3,
            4
         ],
         "end": "12:55",
         "id": "35227",
         "instructor": "Jonathan Schachter",
         "location": "MUSS MU110",
         "section": "BM3",
         "semester": "Fall 2016",
         "start": "11:40",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 28,
         "code": "3037",
         "college": "Stone Beit Midrash Program",
         "credits": 4,
         "department": "*Talmud",
         "display": {
            "dow": "MTWR",
            "end": "12:55pm",
            "start": "11:40am"
         },
         "dow": [
            1,
            2,
            3,
            4
         ],
         "end": "12:55",
         "id": "35233",
         "instructor": "Etan Schnall",
         "location": "ZYSMAN Z102",
         "section": "BM4",
         "semester": "Fall 2016",
         "start": "11:40",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 27,
         "code": "3037",
         "college": "Stone Beit Midrash Program",
         "credits": 4,
         "department": "*Talmud",
         "display": {
            "dow": "MTW",
            "end": "12:55pm",
            "start": "11:40am"
         },
         "dow": [
            1,
            2,
            3
         ],
         "end": "12:55",
         "id": "35239",
         "instructor": "Eli Belizon",
         "location": "ZYSMAN Z101",
         "section": "BM5",
         "semester": "Fall 2016",
         "start": "11:40",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 27,
         "code": "3037",
         "college": "Stone Beit Midrash Program",
         "credits": 4,
         "department": "*Talmud",
         "display": {
            "dow": "R",
            "end": "12:55pm",
            "start": "11:40am"
         },
         "dow": [
            4
         ],
         "end": "12:55",
         "id": "35239",
         "instructor": "Eli Belizon",
         "location": "GLUECK G516",
         "section": "BM5",
         "semester": "Fall 2016",
         "start": "11:40",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "3037",
         "college": "Stone Beit Midrash Program",
         "credits": 4,
         "department": "*Talmud",
         "display": {
            "dow": "MTWR",
            "end": "12:55pm",
            "start": "11:40am"
         },
         "dow": [
            1,
            2,
            3,
            4
         ],
         "end": "12:55",
         "id": "35245",
         "instructor": "Daniel Rapp",
         "location": "FURST F216",
         "section": "BM6",
         "semester": "Fall 2016",
         "start": "11:40",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 27,
         "code": "3037",
         "college": "Stone Beit Midrash Program",
         "credits": 4,
         "department": "*Talmud",
         "display": {
            "dow": "MTW",
            "end": "12:55pm",
            "start": "11:40am"
         },
         "dow": [
            1,
            2,
            3
         ],
         "end": "12:55",
         "id": "35251",
         "instructor": "Matthew Eric Weinberg",
         "location": "ZYSMAN Z103",
         "section": "BM7",
         "semester": "Fall 2016",
         "start": "11:40",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 27,
         "code": "3037",
         "college": "Stone Beit Midrash Program",
         "credits": 4,
         "department": "*Talmud",
         "display": {
            "dow": "R",
            "end": "12:55pm",
            "start": "11:40am"
         },
         "dow": [
            4
         ],
         "end": "12:55",
         "id": "35251",
         "instructor": "Matthew Eric Weinberg",
         "location": "GLUECK G416",
         "section": "BM7",
         "semester": "Fall 2016",
         "start": "11:40",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "3037",
         "college": "Stone Beit Midrash Program",
         "credits": 4,
         "department": "*Talmud",
         "display": {
            "dow": "MTWR",
            "end": "12:55pm",
            "start": "11:40am"
         },
         "dow": [
            1,
            2,
            3,
            4
         ],
         "end": "12:55",
         "id": "35257",
         "instructor": "Etan Moshe Berman",
         "location": "ZYSMAN Z104",
         "section": "BM8",
         "semester": "Fall 2016",
         "start": "11:40",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "3037",
         "college": "Stone Beit Midrash Program",
         "credits": 4,
         "department": "*Talmud",
         "display": {
            "dow": "MTWR",
            "end": "12:55pm",
            "start": "11:40am"
         },
         "dow": [
            1,
            2,
            3,
            4
         ],
         "end": "12:55",
         "id": "35263",
         "instructor": "Meir Goldwicht",
         "location": "FURST F312",
         "section": "BM9",
         "semester": "Fall 2016",
         "start": "11:40",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1451",
         "college": "Stone Beit Midrash Program",
         "credits": 2,
         "department": "Halakhah",
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
         "id": "35212",
         "instructor": "Aharon M. Ciment",
         "location": "FURST F214",
         "section": "BM1",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "HAL",
         "title": "The Shabbat",
         "university": "Yeshiva University"
      },
      {
         "capacity": 27,
         "code": "1451",
         "college": "Stone Beit Midrash Program",
         "credits": 2,
         "department": "Halakhah",
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
         "id": "35480",
         "instructor": "Steven J. Maybruch",
         "location": "GLUECK G418",
         "section": "BM2",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "HAL",
         "title": "The Shabbat",
         "university": "Yeshiva University"
      },
      {
         "capacity": 29,
         "code": "1451",
         "college": "Stone Beit Midrash Program",
         "credits": 2,
         "department": "Halakhah",
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
         "id": "35224",
         "instructor": "Jonathan Schachter",
         "location": "MUSS MU110",
         "section": "BM3",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "HAL",
         "title": "The Shabbat",
         "university": "Yeshiva University"
      },
      {
         "capacity": 28,
         "code": "1451",
         "college": "Stone Beit Midrash Program",
         "credits": 2,
         "department": "Halakhah",
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
         "id": "35230",
         "instructor": "Etan Schnall",
         "location": "ZYSMAN Z102",
         "section": "BM4",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "HAL",
         "title": "The Shabbat",
         "university": "Yeshiva University"
      },
      {
         "capacity": 27,
         "code": "1451",
         "college": "Stone Beit Midrash Program",
         "credits": 2,
         "department": "Halakhah",
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
         "id": "35236",
         "instructor": "Eli Belizon",
         "location": "ZYSMAN Z101",
         "section": "BM5",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "HAL",
         "title": "The Shabbat",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1451",
         "college": "Stone Beit Midrash Program",
         "credits": 2,
         "department": "Halakhah",
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
         "id": "35242",
         "instructor": "Daniel Rapp",
         "location": "FURST F216",
         "section": "BM6",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "HAL",
         "title": "The Shabbat",
         "university": "Yeshiva University"
      },
      {
         "capacity": 27,
         "code": "1451",
         "college": "Stone Beit Midrash Program",
         "credits": 2,
         "department": "Halakhah",
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
         "id": "35248",
         "instructor": "Matthew Eric Weinberg",
         "location": "ZYSMAN Z103",
         "section": "BM7",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "HAL",
         "title": "The Shabbat",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "1451",
         "college": "Stone Beit Midrash Program",
         "credits": 2,
         "department": "Halakhah",
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
         "id": "35254",
         "instructor": "Etan Moshe Berman",
         "location": "ZYSMAN Z104",
         "section": "BM8",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "HAL",
         "title": "The Shabbat",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1451",
         "college": "Stone Beit Midrash Program",
         "credits": 2,
         "department": "Halakhah",
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
         "id": "35260",
         "instructor": "Meir Goldwicht",
         "location": "FURST F312",
         "section": "BM9",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "HAL",
         "title": "The Shabbat",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1234",
         "college": "Stone Beit Midrash Program",
         "credits": 2,
         "department": "Jewish Thought",
         "display": {
            "dow": "U",
            "end": "11:40am",
            "start": "10:00am"
         },
         "dow": [
            0
         ],
         "end": "11:40",
         "id": "35216",
         "instructor": "Aharon M. Ciment",
         "location": "FURST F214",
         "section": "BM1",
         "semester": "Fall 2016",
         "start": "10:00",
         "subject": "JTH",
         "title": "Hashkafa-Jewish Theolog&Ethics",
         "university": "Yeshiva University"
      },
      {
         "capacity": 27,
         "code": "1234",
         "college": "Stone Beit Midrash Program",
         "credits": 2,
         "department": "Jewish Thought",
         "display": {
            "dow": "U",
            "end": "11:40am",
            "start": "10:00am"
         },
         "dow": [
            0
         ],
         "end": "11:40",
         "id": "35484",
         "instructor": "Steven J. Maybruch",
         "location": "FURST F207",
         "section": "BM2",
         "semester": "Fall 2016",
         "start": "10:00",
         "subject": "JTH",
         "title": "Hashkafa-Jewish Theolog&Ethics",
         "university": "Yeshiva University"
      },
      {
         "capacity": 29,
         "code": "1234",
         "college": "Stone Beit Midrash Program",
         "credits": 2,
         "department": "Jewish Thought",
         "display": {
            "dow": "U",
            "end": "11:40am",
            "start": "10:00am"
         },
         "dow": [
            0
         ],
         "end": "11:40",
         "id": "35228",
         "instructor": "Jonathan Schachter",
         "location": "MUSS MU110",
         "section": "BM3",
         "semester": "Fall 2016",
         "start": "10:00",
         "subject": "JTH",
         "title": "Hashkafa-Jewish Theolog&Ethics",
         "university": "Yeshiva University"
      },
      {
         "capacity": 28,
         "code": "1234",
         "college": "Stone Beit Midrash Program",
         "credits": 2,
         "department": "Jewish Thought",
         "display": {
            "dow": "U",
            "end": "11:40am",
            "start": "10:00am"
         },
         "dow": [
            0
         ],
         "end": "11:40",
         "id": "35234",
         "instructor": "Etan Schnall",
         "location": "TBA",
         "section": "BM4",
         "semester": "Fall 2016",
         "start": "10:00",
         "subject": "JTH",
         "title": "Hashkafa-Jewish Theolog&Ethics",
         "university": "Yeshiva University"
      },
      {
         "capacity": 27,
         "code": "1234",
         "college": "Stone Beit Midrash Program",
         "credits": 2,
         "department": "Jewish Thought",
         "display": {
            "dow": "U",
            "end": "11:40am",
            "start": "10:00am"
         },
         "dow": [
            0
         ],
         "end": "11:40",
         "id": "35240",
         "instructor": "Eli Belizon",
         "location": "TBA",
         "section": "BM5",
         "semester": "Fall 2016",
         "start": "10:00",
         "subject": "JTH",
         "title": "Hashkafa-Jewish Theolog&Ethics",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1234",
         "college": "Stone Beit Midrash Program",
         "credits": 2,
         "department": "Jewish Thought",
         "display": {
            "dow": "U",
            "end": "11:40am",
            "start": "10:00am"
         },
         "dow": [
            0
         ],
         "end": "11:40",
         "id": "35246",
         "instructor": "Daniel Rapp",
         "location": "FURST F216",
         "section": "BM6",
         "semester": "Fall 2016",
         "start": "10:00",
         "subject": "JTH",
         "title": "Hashkafa-Jewish Theolog&Ethics",
         "university": "Yeshiva University"
      },
      {
         "capacity": 27,
         "code": "1234",
         "college": "Stone Beit Midrash Program",
         "credits": 2,
         "department": "Jewish Thought",
         "display": {
            "dow": "U",
            "end": "11:40am",
            "start": "10:00am"
         },
         "dow": [
            0
         ],
         "end": "11:40",
         "id": "35252",
         "instructor": "Matthew Eric Weinberg",
         "location": "TBA",
         "section": "BM7",
         "semester": "Fall 2016",
         "start": "10:00",
         "subject": "JTH",
         "title": "Hashkafa-Jewish Theolog&Ethics",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "1234",
         "college": "Stone Beit Midrash Program",
         "credits": 2,
         "department": "Jewish Thought",
         "display": {
            "dow": "U",
            "end": "11:40am",
            "start": "10:01am"
         },
         "dow": [
            0
         ],
         "end": "11:40",
         "id": "35258",
         "instructor": "Etan Moshe Berman",
         "location": "TBA",
         "section": "BM8",
         "semester": "Fall 2016",
         "start": "10:01",
         "subject": "JTH",
         "title": "Hashkafa-Jewish Theolog&Ethics",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1234",
         "college": "Stone Beit Midrash Program",
         "credits": 2,
         "department": "Jewish Thought",
         "display": {
            "dow": "U",
            "end": "11:40am",
            "start": "10:00am"
         },
         "dow": [
            0
         ],
         "end": "11:40",
         "id": "35264",
         "instructor": "Meir Goldwicht",
         "location": "FURST F312",
         "section": "BM9",
         "semester": "Fall 2016",
         "start": "10:00",
         "subject": "JTH",
         "title": "Hashkafa-Jewish Theolog&Ethics",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "2160",
         "college": "Stone Beit Midrash Program",
         "credits": 2,
         "department": "Tanakh",
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
         "id": "35213",
         "instructor": "Aharon M. Ciment",
         "location": "FURST F214",
         "section": "BM1",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAN",
         "title": "Melakhim I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 27,
         "code": "2160",
         "college": "Stone Beit Midrash Program",
         "credits": 2,
         "department": "Tanakh",
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
         "id": "35481",
         "instructor": "Steven J. Maybruch",
         "location": "GLUECK G418",
         "section": "BM2",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAN",
         "title": "Melakhim I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 29,
         "code": "2160",
         "college": "Stone Beit Midrash Program",
         "credits": 2,
         "department": "Tanakh",
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
         "id": "35225",
         "instructor": "Jonathan Schachter",
         "location": "MUSS MU110",
         "section": "BM3",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAN",
         "title": "Melakhim I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 28,
         "code": "2160",
         "college": "Stone Beit Midrash Program",
         "credits": 2,
         "department": "Tanakh",
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
         "id": "35231",
         "instructor": "Etan Schnall",
         "location": "ZYSMAN Z102",
         "section": "BM4",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAN",
         "title": "Melakhim I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 27,
         "code": "2160",
         "college": "Stone Beit Midrash Program",
         "credits": 2,
         "department": "Tanakh",
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
         "id": "35237",
         "instructor": "Eli Belizon",
         "location": "ZYSMAN Z101",
         "section": "BM5",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAN",
         "title": "Melakhim I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "2160",
         "college": "Stone Beit Midrash Program",
         "credits": 2,
         "department": "Tanakh",
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
         "id": "35243",
         "instructor": "Daniel Rapp",
         "location": "FURST F216",
         "section": "BM6",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAN",
         "title": "Melakhim I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 27,
         "code": "2160",
         "college": "Stone Beit Midrash Program",
         "credits": 2,
         "department": "Tanakh",
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
         "id": "35249",
         "instructor": "Matthew Eric Weinberg",
         "location": "ZYSMAN Z103",
         "section": "BM7",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAN",
         "title": "Melakhim I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "2160",
         "college": "Stone Beit Midrash Program",
         "credits": 2,
         "department": "Tanakh",
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
         "id": "35255",
         "instructor": "Etan Moshe Berman",
         "location": "ZYSMAN Z104",
         "section": "BM8",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAN",
         "title": "Melakhim I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "2160",
         "college": "Stone Beit Midrash Program",
         "credits": 2,
         "department": "Tanakh",
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
         "id": "35261",
         "instructor": "Meir Goldwicht",
         "location": "FURST F312",
         "section": "BM9",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAN",
         "title": "Melakhim I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 45,
         "code": "6121",
         "college": "Riets",
         "credits": 1,
         "department": "Halakhah",
         "display": {
            "dow": "MW",
            "end": "10:30am",
            "start": "09:00am"
         },
         "dow": [
            1,
            3
         ],
         "end": "10:30",
         "id": "36261",
         "instructor": "Bertram Simon",
         "location": "TBA",
         "section": "A",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "HAL",
         "title": "Laws of Niddah",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6145",
         "college": "Riets",
         "credits": 1,
         "department": "Halakhah",
         "display": {
            "dow": "R",
            "end": "02:40pm",
            "start": "01:01pm"
         },
         "dow": [
            4
         ],
         "end": "14:40",
         "id": "36298",
         "instructor": "Uri Orlian",
         "location": "GLUECK ",
         "section": "A",
         "semester": "Fall 2016",
         "start": "13:01",
         "subject": "HAL",
         "title": "Contemporary Jewish Law",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6151",
         "college": "Riets",
         "credits": 1,
         "department": "Halakhah",
         "display": {
            "dow": "M",
            "end": "01:00pm",
            "start": "12:00pm"
         },
         "dow": [
            1
         ],
         "end": "13:00",
         "id": "36504",
         "instructor": "J. David Bleich",
         "location": "TBA",
         "section": "A",
         "semester": "Fall 2016",
         "start": "12:00",
         "subject": "HAL",
         "title": "Jewish Law in Prof/Business",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6165",
         "college": "Riets",
         "credits": 1,
         "department": "Halakhah",
         "display": {
            "dow": "MWR",
            "end": "12:00pm",
            "start": "11:00am"
         },
         "dow": [
            1,
            3,
            4
         ],
         "end": "12:00",
         "id": "36503",
         "instructor": "Eliyahu Ben-Haim",
         "location": "TBA",
         "section": "A",
         "semester": "Fall 2016",
         "start": "11:00",
         "subject": "HAL",
         "title": "Sephardic Halakhah: Niddah",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "8001",
         "college": "Riets",
         "credits": 12,
         "department": "Halakhah",
         "display": {
            "dow": "R",
            "end": "02:30pm",
            "start": "01:30pm"
         },
         "dow": [
            4
         ],
         "end": "14:30",
         "id": "36231",
         "instructor": "Daniel N. Stein",
         "location": "GLUECK G517",
         "section": "A",
         "semester": "Fall 2016",
         "start": "13:30",
         "subject": "HAL",
         "title": "4th Yr Halakhah L'ma'aseh Prog",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6001",
         "college": "Riets",
         "credits": 1,
         "department": "Jewish Thought",
         "display": {
            "dow": "F",
            "end": "11:30am",
            "start": "10:30am"
         },
         "dow": [
            5
         ],
         "end": "11:30",
         "id": "36244",
         "instructor": "Nathaniel Wiederblank",
         "location": "GLUECK ",
         "section": "A",
         "semester": "Fall 2016",
         "start": "10:30",
         "subject": "JTH",
         "title": "Survey of Jewish Thought",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6011",
         "college": "Riets",
         "credits": 1,
         "department": "Jewish Thought",
         "display": {
            "dow": "M",
            "end": "04:50pm",
            "start": "03:00pm"
         },
         "dow": [
            1
         ],
         "end": "16:50",
         "id": "36505",
         "instructor": "J. Blau",
         "location": "FURST F301",
         "section": "A",
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "JTH",
         "title": "Jew's Role in World",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6134",
         "college": "Riets",
         "credits": 1,
         "department": "Jewish Thought",
         "display": {
            "dow": "W",
            "end": "04:50pm",
            "start": "03:00pm"
         },
         "dow": [
            3
         ],
         "end": "16:50",
         "id": "36516",
         "instructor": "David Horwitz",
         "location": "FURST F301",
         "section": "A",
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "JTH",
         "title": "Philosophical Parshah Themes",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6001",
         "college": "Riets",
         "credits": 1,
         "department": "Rabbinic Training",
         "display": {
            "dow": "F",
            "end": "10:15am",
            "start": "09:15am"
         },
         "dow": [
            5
         ],
         "end": "10:15",
         "id": "36232",
         "instructor": "TBA",
         "location": "GLUECK ",
         "section": "A",
         "semester": "Fall 2016",
         "start": "9:15",
         "subject": "RTP",
         "title": "First Year Survey",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "6111",
         "college": "Riets",
         "credits": 1,
         "department": "Rabbinic Training",
         "display": {
            "dow": "F",
            "end": "10:30am",
            "start": "09:15am"
         },
         "dow": [
            5
         ],
         "end": "10:30",
         "id": "36236",
         "instructor": "David Pelcovitz",
         "location": "GLUECK G516",
         "section": "A",
         "semester": "Fall 2016",
         "start": "9:15",
         "subject": "RTP",
         "title": "Pastoral Psych Foundations I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "6111",
         "college": "Riets",
         "credits": 1,
         "department": "Rabbinic Training",
         "display": {
            "dow": "F",
            "end": "10:30am",
            "start": "09:15am"
         },
         "dow": [
            5
         ],
         "end": "10:30",
         "id": "36237",
         "instructor": "Norman Blumenthal",
         "location": "GLUECK G518",
         "section": "B",
         "semester": "Fall 2016",
         "start": "9:15",
         "subject": "RTP",
         "title": "Pastoral Psych Foundations I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "6111H",
         "college": "Riets",
         "credits": 3,
         "department": "Rabbinic Training",
         "display": {
            "dow": "F",
            "end": "10:30am",
            "start": "09:15am"
         },
         "dow": [
            5
         ],
         "end": "10:30",
         "id": "36251",
         "instructor": "David Pelcovitz",
         "location": "GLUECK G516",
         "section": "A",
         "semester": "Fall 2016",
         "start": "9:15",
         "subject": "RTP",
         "title": "Pastoral Psych Foundations I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "6111H",
         "college": "Riets",
         "credits": 3,
         "department": "Rabbinic Training",
         "display": {
            "dow": "F",
            "end": "10:30am",
            "start": "09:15am"
         },
         "dow": [
            5
         ],
         "end": "10:30",
         "id": "36256",
         "instructor": "Norman Blumenthal",
         "location": "GLUECK G518",
         "section": "B",
         "semester": "Fall 2016",
         "start": "9:15",
         "subject": "RTP",
         "title": "Pastoral Psych Foundations I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "6117H",
         "college": "Riets",
         "credits": 3,
         "department": "Rabbinic Training",
         "display": {
            "dow": "F",
            "end": "12:40pm",
            "start": "11:00am"
         },
         "dow": [
            5
         ],
         "end": "12:40",
         "id": "36518",
         "instructor": "Adam Miller",
         "location": "GLUECK ",
         "section": "A",
         "semester": "Fall 2016",
         "start": "11:00",
         "subject": "RTP",
         "title": "Fundamentals of Counseling I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6121",
         "college": "Riets",
         "credits": 1,
         "department": "Rabbinic Training",
         "display": {
            "dow": "T",
            "end": "02:30pm",
            "start": "12:16pm"
         },
         "dow": [
            2
         ],
         "end": "14:30",
         "id": "36238",
         "instructor": "David Pelcovitz, Laurence E. Rothwachs ",
         "location": "FURST ",
         "section": "A",
         "semester": "Fall 2016",
         "start": "12:16",
         "subject": "RTP",
         "title": "Advanced Pastoral Counseling",
         "university": "Yeshiva University"
      },
      {
         "capacity": 10,
         "code": "6141",
         "college": "Riets",
         "credits": 1,
         "department": "Rabbinic Training",
         "display": {
            "dow": "F",
            "end": "10:45am",
            "start": "09:15am"
         },
         "dow": [
            5
         ],
         "end": "10:45",
         "id": "36240",
         "instructor": "Robert L. Gedaliah",
         "location": "GLUECK G418",
         "section": "A",
         "semester": "Fall 2016",
         "start": "9:15",
         "subject": "RTP",
         "title": "Public Speaking Seminar I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "6141",
         "college": "Riets",
         "credits": 1,
         "department": "Rabbinic Training",
         "display": {
            "dow": "F",
            "end": "12:30pm",
            "start": "11:00am"
         },
         "dow": [
            5
         ],
         "end": "12:30",
         "id": "36241",
         "instructor": "Robert L. Gedaliah",
         "location": "GLUECK G418",
         "section": "B",
         "semester": "Fall 2016",
         "start": "11:00",
         "subject": "RTP",
         "title": "Public Speaking Seminar I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 10,
         "code": "6141",
         "college": "Riets",
         "credits": 1,
         "department": "Rabbinic Training",
         "display": {
            "dow": "F",
            "end": "10:45am",
            "start": "09:15am"
         },
         "dow": [
            5
         ],
         "end": "10:45",
         "id": "36242",
         "instructor": "Brent Baer",
         "location": "GLUECK G416",
         "section": "C",
         "semester": "Fall 2016",
         "start": "9:15",
         "subject": "RTP",
         "title": "Public Speaking Seminar I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 40,
         "code": "6141H",
         "college": "Riets",
         "credits": 3,
         "department": "Rabbinic Training",
         "display": {
            "dow": "F",
            "end": "12:50pm",
            "start": "11:00am"
         },
         "dow": [
            5
         ],
         "end": "12:50",
         "id": "36252",
         "instructor": "Brent Baer",
         "location": "GLUECK G416",
         "section": "A",
         "semester": "Fall 2016",
         "start": "11:00",
         "subject": "RTP",
         "title": "Public Speaking Seminar I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6144",
         "college": "Riets",
         "credits": 1,
         "department": "Rabbinic Training",
         "display": {
            "dow": "W",
            "end": "01:15pm",
            "start": "12:15pm"
         },
         "dow": [
            3
         ],
         "end": "13:15",
         "id": "36235",
         "instructor": "Laurence E. Rothwachs",
         "location": "FURST ",
         "section": "A",
         "semester": "Fall 2016",
         "start": "12:15",
         "subject": "RTP",
         "title": "Senior Homiletics Workshop",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6151",
         "college": "Riets",
         "credits": 1,
         "department": "Rabbinic Training",
         "display": {
            "dow": "W",
            "end": "02:30pm",
            "start": "01:30pm"
         },
         "dow": [
            3
         ],
         "end": "14:30",
         "id": "36233",
         "instructor": "Marc E. Penner",
         "location": "FURST ",
         "section": "A",
         "semester": "Fall 2016",
         "start": "13:30",
         "subject": "RTP",
         "title": "Practical Rabbinics I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6153",
         "college": "Riets",
         "credits": 1,
         "department": "Rabbinic Training",
         "display": {
            "dow": "M",
            "end": "01:00pm",
            "start": "12:00pm"
         },
         "dow": [
            1
         ],
         "end": "13:00",
         "id": "36239",
         "instructor": "Kenneth Brander",
         "location": "FURST F425",
         "section": "A",
         "semester": "Fall 2016",
         "start": "12:00",
         "subject": "RTP",
         "title": "Successful Synagogues",
         "university": "Yeshiva University"
      },
      {
         "capacity": 40,
         "code": "6156",
         "college": "Riets",
         "credits": 1,
         "department": "Rabbinic Training",
         "display": {
            "dow": "F",
            "end": "12:30pm",
            "start": "11:00am"
         },
         "dow": [
            5
         ],
         "end": "12:30",
         "id": "36304",
         "instructor": "Laurence E. Rothwachs",
         "location": "GLUECK G516",
         "section": "A",
         "semester": "Fall 2016",
         "start": "11:00",
         "subject": "RTP",
         "title": "Contemp. Issues in Rabbinate",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "6157",
         "college": "Riets",
         "credits": 1,
         "department": "Rabbinic Training",
         "display": {
            "dow": "F",
            "end": "12:15pm",
            "start": "10:45am"
         },
         "dow": [
            5
         ],
         "end": "12:15",
         "id": "36517",
         "instructor": "TBA",
         "location": "TBA",
         "section": "A",
         "semester": "Fall 2016",
         "start": "10:45",
         "subject": "RTP",
         "title": "Life & Career of the Rabbi",
         "university": "Yeshiva University"
      },
      {
         "capacity": 40,
         "code": "6171H",
         "college": "Riets",
         "credits": 3,
         "department": "Rabbinic Training",
         "display": {
            "dow": "F",
            "end": "10:55am",
            "start": "09:15am"
         },
         "dow": [
            5
         ],
         "end": "10:55",
         "id": "36520",
         "instructor": "TBA",
         "location": "TBA",
         "section": "A",
         "semester": "Fall 2016",
         "start": "9:15",
         "subject": "RTP",
         "title": "Rabbinic Writing I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 40,
         "code": "6173H",
         "college": "Riets",
         "credits": 3,
         "department": "Rabbinic Training",
         "display": {
            "dow": "F",
            "end": "10:55am",
            "start": "09:15am"
         },
         "dow": [
            5
         ],
         "end": "10:55",
         "id": "36253",
         "instructor": "Leslie S. Newman, Mordechai H. Willig ",
         "location": "FURST F317",
         "section": "A",
         "semester": "Fall 2016",
         "start": "9:15",
         "subject": "RTP",
         "title": "Rabbinic Writing III",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "6255H",
         "college": "Riets",
         "credits": 3,
         "department": "Rabbinic Training",
         "display": {
            "dow": "W",
            "end": "01:30pm",
            "start": "12:30pm"
         },
         "dow": [
            3
         ],
         "end": "13:30",
         "id": "36534",
         "instructor": "Joshua Michael Joseph",
         "location": "TBA",
         "section": "A",
         "semester": "Fall 2016",
         "start": "12:30",
         "subject": "RTP",
         "title": "Leadership&Management Seminar",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "6003",
         "college": "Riets",
         "credits": 9,
         "department": "Talmud and Codes",
         "display": {
            "dow": "MT",
            "end": "12:00pm",
            "start": "09:00am"
         },
         "dow": [
            1,
            2
         ],
         "end": "12:00",
         "id": "36507",
         "instructor": "Moses D. Tendler",
         "location": "GLUECK BMIDRASH",
         "section": "CC",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Shabbat/4th Year Halak",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "6003",
         "college": "Riets",
         "credits": 9,
         "department": "Talmud and Codes",
         "display": {
            "dow": "MT",
            "end": "02:30pm",
            "start": "01:01pm"
         },
         "dow": [
            1,
            2
         ],
         "end": "14:30",
         "id": "36507",
         "instructor": "Moses D. Tendler",
         "location": "GLUECK G403",
         "section": "CC",
         "semester": "Fall 2016",
         "start": "13:01",
         "subject": "TAC",
         "title": "Talmud: Shabbat/4th Year Halak",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "6003",
         "college": "Riets",
         "credits": 9,
         "department": "Talmud and Codes",
         "display": {
            "dow": "R",
            "end": "10:45am",
            "start": "09:00am"
         },
         "dow": [
            4
         ],
         "end": "10:45",
         "id": "36507",
         "instructor": "Moses D. Tendler",
         "location": "GLUECK BMIDRASH",
         "section": "CC",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Shabbat/4th Year Halak",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "6003",
         "college": "Riets",
         "credits": 9,
         "department": "Talmud and Codes",
         "display": {
            "dow": "R",
            "end": "12:15pm",
            "start": "10:46am"
         },
         "dow": [
            4
         ],
         "end": "12:15",
         "id": "36507",
         "instructor": "Moses D. Tendler",
         "location": "GLUECK G403",
         "section": "CC",
         "semester": "Fall 2016",
         "start": "10:46",
         "subject": "TAC",
         "title": "Talmud: Shabbat/4th Year Halak",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "MWR",
            "end": "12:00pm",
            "start": "09:00am"
         },
         "dow": [
            1,
            3,
            4
         ],
         "end": "12:00",
         "id": "36342",
         "instructor": "Eliakim Koenigsberg",
         "location": "ZYSMAN Z111",
         "section": "A",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "MW",
            "end": "02:30pm",
            "start": "01:01pm"
         },
         "dow": [
            1,
            3
         ],
         "end": "14:30",
         "id": "36342",
         "instructor": "Eliakim Koenigsberg",
         "location": "GLUECK G418",
         "section": "A",
         "semester": "Fall 2016",
         "start": "13:01",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "T",
            "end": "10:45am",
            "start": "09:00am"
         },
         "dow": [
            2
         ],
         "end": "10:45",
         "id": "36342",
         "instructor": "Eliakim Koenigsberg",
         "location": "ZYSMAN Z111",
         "section": "A",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "T",
            "end": "12:15pm",
            "start": "10:46am"
         },
         "dow": [
            2
         ],
         "end": "12:15",
         "id": "36342",
         "instructor": "Eliakim Koenigsberg",
         "location": "GLUECK G418",
         "section": "A",
         "semester": "Fall 2016",
         "start": "10:46",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "U",
            "end": "11:30am",
            "start": "09:00am"
         },
         "dow": [
            0
         ],
         "end": "11:30",
         "id": "36342",
         "instructor": "Eliakim Koenigsberg",
         "location": "ZYSMAN Z111",
         "section": "A",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "U",
            "end": "01:00pm",
            "start": "11:31am"
         },
         "dow": [
            0
         ],
         "end": "13:00",
         "id": "36342",
         "instructor": "Eliakim Koenigsberg",
         "location": "GLUECK G418",
         "section": "A",
         "semester": "Fall 2016",
         "start": "11:31",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 9,
         "department": "Talmud and Codes",
         "display": {
            "dow": "MTW",
            "end": "12:00pm",
            "start": "09:00am"
         },
         "dow": [
            1,
            2,
            3
         ],
         "end": "12:00",
         "id": "36343",
         "instructor": "Aaron Kahn",
         "location": "ZYSMAN Z111",
         "section": "AA",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 9,
         "department": "Talmud and Codes",
         "display": {
            "dow": "MTW",
            "end": "02:30pm",
            "start": "01:01pm"
         },
         "dow": [
            1,
            2,
            3
         ],
         "end": "14:30",
         "id": "36343",
         "instructor": "Aaron Kahn",
         "location": "ZYSMAN Z101",
         "section": "AA",
         "semester": "Fall 2016",
         "start": "13:01",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 9,
         "department": "Talmud and Codes",
         "display": {
            "dow": "R",
            "end": "10:45am",
            "start": "09:00am"
         },
         "dow": [
            4
         ],
         "end": "10:45",
         "id": "36343",
         "instructor": "Aaron Kahn",
         "location": "ZYSMAN Z111",
         "section": "AA",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 9,
         "department": "Talmud and Codes",
         "display": {
            "dow": "R",
            "end": "12:15pm",
            "start": "10:46am"
         },
         "dow": [
            4
         ],
         "end": "12:15",
         "id": "36343",
         "instructor": "Aaron Kahn",
         "location": "ZYSMAN Z101",
         "section": "AA",
         "semester": "Fall 2016",
         "start": "10:46",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 9,
         "department": "Talmud and Codes",
         "display": {
            "dow": "U",
            "end": "11:30am",
            "start": "09:00am"
         },
         "dow": [
            0
         ],
         "end": "11:30",
         "id": "36343",
         "instructor": "Aaron Kahn",
         "location": "ZYSMAN Z101",
         "section": "AA",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 9,
         "department": "Talmud and Codes",
         "display": {
            "dow": "U",
            "end": "01:00pm",
            "start": "11:31am"
         },
         "dow": [
            0
         ],
         "end": "13:00",
         "id": "36343",
         "instructor": "Aaron Kahn",
         "location": "ZYSMAN Z101",
         "section": "AA",
         "semester": "Fall 2016",
         "start": "11:31",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "MWR",
            "end": "12:00pm",
            "start": "09:00am"
         },
         "dow": [
            1,
            3,
            4
         ],
         "end": "12:00",
         "id": "36344",
         "instructor": "Harvey B. Sobolofsky",
         "location": "ZYSMAN Z111",
         "section": "B",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "MWR",
            "end": "02:30pm",
            "start": "01:01pm"
         },
         "dow": [
            1,
            3,
            4
         ],
         "end": "14:30",
         "id": "36344",
         "instructor": "Harvey B. Sobolofsky",
         "location": "GLUECK G307",
         "section": "B",
         "semester": "Fall 2016",
         "start": "13:01",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "T",
            "end": "10:45am",
            "start": "09:00am"
         },
         "dow": [
            2
         ],
         "end": "10:45",
         "id": "36344",
         "instructor": "Harvey B. Sobolofsky",
         "location": "ZYSMAN Z111",
         "section": "B",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "T",
            "end": "12:15pm",
            "start": "10:46am"
         },
         "dow": [
            2
         ],
         "end": "12:15",
         "id": "36344",
         "instructor": "TBA",
         "location": "GLUECK G307",
         "section": "B",
         "semester": "Fall 2016",
         "start": "10:46",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "U",
            "end": "11:30am",
            "start": "09:00am"
         },
         "dow": [
            0
         ],
         "end": "11:30",
         "id": "36344",
         "instructor": "Harvey B. Sobolofsky",
         "location": "ZYSMAN Z111",
         "section": "B",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "U",
            "end": "01:00pm",
            "start": "11:31am"
         },
         "dow": [
            0
         ],
         "end": "13:00",
         "id": "36344",
         "instructor": "Harvey B. Sobolofsky",
         "location": "GLUECK G307",
         "section": "B",
         "semester": "Fall 2016",
         "start": "11:31",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 9,
         "department": "Talmud and Codes",
         "display": {
            "dow": "MTW",
            "end": "12:00pm",
            "start": "09:00am"
         },
         "dow": [
            1,
            2,
            3
         ],
         "end": "12:00",
         "id": "36345",
         "instructor": "Hershel Schachter",
         "location": "GLUECK BMIDRASH",
         "section": "BB",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 9,
         "department": "Talmud and Codes",
         "display": {
            "dow": "MTW",
            "end": "02:30pm",
            "start": "12:45pm"
         },
         "dow": [
            1,
            2,
            3
         ],
         "end": "14:30",
         "id": "36345",
         "instructor": "Hershel Schachter",
         "location": "GLUECK G517",
         "section": "BB",
         "semester": "Fall 2016",
         "start": "12:45",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 9,
         "department": "Talmud and Codes",
         "display": {
            "dow": "R",
            "end": "10:45am",
            "start": "09:00am"
         },
         "dow": [
            4
         ],
         "end": "10:45",
         "id": "36345",
         "instructor": "Hershel Schachter",
         "location": "GLUECK BMIDRASH",
         "section": "BB",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 9,
         "department": "Talmud and Codes",
         "display": {
            "dow": "R",
            "end": "12:15pm",
            "start": "10:46am"
         },
         "dow": [
            4
         ],
         "end": "12:15",
         "id": "36345",
         "instructor": "Hershel Schachter",
         "location": "GLUECK G517",
         "section": "BB",
         "semester": "Fall 2016",
         "start": "10:46",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 9,
         "department": "Talmud and Codes",
         "display": {
            "dow": "U",
            "end": "11:30am",
            "start": "09:00am"
         },
         "dow": [
            0
         ],
         "end": "11:30",
         "id": "36345",
         "instructor": "Hershel Schachter",
         "location": "GLUECK BMIDRASH",
         "section": "BB",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 9,
         "department": "Talmud and Codes",
         "display": {
            "dow": "U",
            "end": "01:00pm",
            "start": "11:31am"
         },
         "dow": [
            0
         ],
         "end": "13:00",
         "id": "36345",
         "instructor": "Hershel Schachter",
         "location": "GLUECK G517",
         "section": "BB",
         "semester": "Fall 2016",
         "start": "11:31",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "MTW",
            "end": "02:30pm",
            "start": "01:01pm"
         },
         "dow": [
            1,
            2,
            3
         ],
         "end": "14:30",
         "id": "36346",
         "instructor": "Elchanan A. Adler",
         "location": "GLUECK G419",
         "section": "C",
         "semester": "Fall 2016",
         "start": "13:01",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "MWR",
            "end": "12:00pm",
            "start": "09:00am"
         },
         "dow": [
            1,
            3,
            4
         ],
         "end": "12:00",
         "id": "36346",
         "instructor": "Elchanan A. Adler",
         "location": "GLUECK BMIDRASH",
         "section": "C",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "T",
            "end": "10:45am",
            "start": "09:00am"
         },
         "dow": [
            2
         ],
         "end": "10:45",
         "id": "36346",
         "instructor": "Elchanan A. Adler",
         "location": "GLUECK BMIDRASH",
         "section": "C",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "T",
            "end": "12:15pm",
            "start": "10:46am"
         },
         "dow": [
            2
         ],
         "end": "12:15",
         "id": "36346",
         "instructor": "Elchanan A. Adler",
         "location": "GLUECK G419",
         "section": "C",
         "semester": "Fall 2016",
         "start": "10:46",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "U",
            "end": "11:30am",
            "start": "09:00am"
         },
         "dow": [
            0
         ],
         "end": "11:30",
         "id": "36346",
         "instructor": "Elchanan A. Adler",
         "location": "GLUECK BMIDRASH",
         "section": "C",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "U",
            "end": "01:00pm",
            "start": "11:31am"
         },
         "dow": [
            0
         ],
         "end": "13:00",
         "id": "36346",
         "instructor": "Elchanan A. Adler",
         "location": "GLUECK G419",
         "section": "C",
         "semester": "Fall 2016",
         "start": "11:31",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "MTR",
            "end": "02:30pm",
            "start": "01:01pm"
         },
         "dow": [
            1,
            2,
            4
         ],
         "end": "14:30",
         "id": "36347",
         "instructor": "David M. Hirsch",
         "location": "GLUECK G518",
         "section": "E",
         "semester": "Fall 2016",
         "start": "13:01",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "MWR",
            "end": "12:00pm",
            "start": "09:00am"
         },
         "dow": [
            1,
            3,
            4
         ],
         "end": "12:00",
         "id": "36347",
         "instructor": "David M. Hirsch",
         "location": "GLUECK BMIDRASH",
         "section": "E",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "T",
            "end": "10:45am",
            "start": "09:00am"
         },
         "dow": [
            2
         ],
         "end": "10:45",
         "id": "36347",
         "instructor": "David M. Hirsch",
         "location": "GLUECK BMIDRASH",
         "section": "E",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "T",
            "end": "12:15pm",
            "start": "10:46am"
         },
         "dow": [
            2
         ],
         "end": "12:15",
         "id": "36347",
         "instructor": "David M. Hirsch",
         "location": "GLUECK G518",
         "section": "E",
         "semester": "Fall 2016",
         "start": "10:46",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "U",
            "end": "11:30am",
            "start": "09:00am"
         },
         "dow": [
            0
         ],
         "end": "11:30",
         "id": "36347",
         "instructor": "David M. Hirsch",
         "location": "GLUECK BMIDRASH",
         "section": "E",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "U",
            "end": "01:00pm",
            "start": "11:31am"
         },
         "dow": [
            0
         ],
         "end": "13:00",
         "id": "36347",
         "instructor": "David M. Hirsch",
         "location": "GLUECK G518",
         "section": "E",
         "semester": "Fall 2016",
         "start": "11:31",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 9,
         "department": "Talmud and Codes",
         "display": {
            "dow": "MWR",
            "end": "12:00pm",
            "start": "09:00am"
         },
         "dow": [
            1,
            3,
            4
         ],
         "end": "12:00",
         "id": "36348",
         "instructor": "Yitzchok M. Cohen",
         "location": "ZYSMAN Z111",
         "section": "F",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 9,
         "department": "Talmud and Codes",
         "display": {
            "dow": "MWR",
            "end": "02:30pm",
            "start": "01:01pm"
         },
         "dow": [
            1,
            3,
            4
         ],
         "end": "14:30",
         "id": "36348",
         "instructor": "Yitzchok M. Cohen",
         "location": "GLUECK G317",
         "section": "F",
         "semester": "Fall 2016",
         "start": "13:01",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 9,
         "department": "Talmud and Codes",
         "display": {
            "dow": "T",
            "end": "10:45am",
            "start": "09:00am"
         },
         "dow": [
            2
         ],
         "end": "10:45",
         "id": "36348",
         "instructor": "Yitzchok M. Cohen",
         "location": "ZYSMAN Z111",
         "section": "F",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 9,
         "department": "Talmud and Codes",
         "display": {
            "dow": "T",
            "end": "12:15pm",
            "start": "10:46am"
         },
         "dow": [
            2
         ],
         "end": "12:15",
         "id": "36348",
         "instructor": "Yitzchok M. Cohen",
         "location": "GLUECK G317",
         "section": "F",
         "semester": "Fall 2016",
         "start": "10:46",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 9,
         "department": "Talmud and Codes",
         "display": {
            "dow": "U",
            "end": "11:30am",
            "start": "09:00am"
         },
         "dow": [
            0
         ],
         "end": "11:30",
         "id": "36348",
         "instructor": "Yitzchok M. Cohen",
         "location": "ZYSMAN Z111",
         "section": "F",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 9,
         "department": "Talmud and Codes",
         "display": {
            "dow": "U",
            "end": "01:00pm",
            "start": "11:31am"
         },
         "dow": [
            0
         ],
         "end": "13:00",
         "id": "36348",
         "instructor": "Yitzchok M. Cohen",
         "location": "GLUECK G317",
         "section": "F",
         "semester": "Fall 2016",
         "start": "11:31",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "MWR",
            "end": "12:00pm",
            "start": "09:00am"
         },
         "dow": [
            1,
            3,
            4
         ],
         "end": "12:00",
         "id": "36352",
         "instructor": "Baruch Simon",
         "location": "MUSS MU113",
         "section": "I",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "MWR",
            "end": "02:30pm",
            "start": "01:01pm"
         },
         "dow": [
            1,
            3,
            4
         ],
         "end": "14:30",
         "id": "36352",
         "instructor": "Baruch Simon",
         "location": "MUSS MU113",
         "section": "I",
         "semester": "Fall 2016",
         "start": "13:01",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "T",
            "end": "10:45am",
            "start": "09:00am"
         },
         "dow": [
            2
         ],
         "end": "10:45",
         "id": "36352",
         "instructor": "Baruch Simon",
         "location": "MUSS MU113",
         "section": "I",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "T",
            "end": "12:15pm",
            "start": "10:46am"
         },
         "dow": [
            2
         ],
         "end": "12:15",
         "id": "36352",
         "instructor": "Baruch Simon",
         "location": "MUSS MU113",
         "section": "I",
         "semester": "Fall 2016",
         "start": "10:46",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "U",
            "end": "11:30am",
            "start": "09:00am"
         },
         "dow": [
            0
         ],
         "end": "11:30",
         "id": "36352",
         "instructor": "Baruch Simon",
         "location": "MUSS MU113",
         "section": "I",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "U",
            "end": "01:00pm",
            "start": "11:31am"
         },
         "dow": [
            0
         ],
         "end": "13:00",
         "id": "36352",
         "instructor": "Baruch Simon",
         "location": "MUSS MU113",
         "section": "I",
         "semester": "Fall 2016",
         "start": "11:31",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "MWR",
            "end": "12:00pm",
            "start": "09:00am"
         },
         "dow": [
            1,
            3,
            4
         ],
         "end": "12:00",
         "id": "36353",
         "instructor": "Eliyahu Ben-Haim",
         "location": "ZYSMAN Z111",
         "section": "J",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "MWR",
            "end": "02:30pm",
            "start": "01:01pm"
         },
         "dow": [
            1,
            3,
            4
         ],
         "end": "14:30",
         "id": "36353",
         "instructor": "Eliyahu Ben-Haim",
         "location": "MORG 101",
         "section": "J",
         "semester": "Fall 2016",
         "start": "13:01",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "T",
            "end": "10:45am",
            "start": "09:00am"
         },
         "dow": [
            2
         ],
         "end": "10:45",
         "id": "36353",
         "instructor": "Eliyahu Ben-Haim",
         "location": "ZYSMAN Z111",
         "section": "J",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "T",
            "end": "12:15pm",
            "start": "10:46am"
         },
         "dow": [
            2
         ],
         "end": "12:15",
         "id": "36353",
         "instructor": "Eliyahu Ben-Haim",
         "location": "MORG 101",
         "section": "J",
         "semester": "Fall 2016",
         "start": "10:46",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "U",
            "end": "11:30am",
            "start": "09:00am"
         },
         "dow": [
            0
         ],
         "end": "11:30",
         "id": "36353",
         "instructor": "Eliyahu Ben-Haim",
         "location": "ZYSMAN Z111",
         "section": "J",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "U",
            "end": "01:00pm",
            "start": "11:31am"
         },
         "dow": [
            0
         ],
         "end": "13:00",
         "id": "36353",
         "instructor": "Eliyahu Ben-Haim",
         "location": "MORG 101",
         "section": "J",
         "semester": "Fall 2016",
         "start": "11:31",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "MWR",
            "end": "12:00pm",
            "start": "09:00am"
         },
         "dow": [
            1,
            3,
            4
         ],
         "end": "12:00",
         "id": "36354",
         "instructor": "Yaakov Neuburger",
         "location": "GLUECK BMIDRASH",
         "section": "K",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "MWR",
            "end": "02:30pm",
            "start": "01:01pm"
         },
         "dow": [
            1,
            3,
            4
         ],
         "end": "14:30",
         "id": "36354",
         "instructor": "Yaakov Neuburger",
         "location": "GLUECK G516",
         "section": "K",
         "semester": "Fall 2016",
         "start": "13:01",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "T",
            "end": "10:45am",
            "start": "09:00am"
         },
         "dow": [
            2
         ],
         "end": "10:45",
         "id": "36354",
         "instructor": "Yaakov Neuburger",
         "location": "GLUECK BMIDRASH",
         "section": "K",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "T",
            "end": "12:15pm",
            "start": "10:46am"
         },
         "dow": [
            2
         ],
         "end": "12:15",
         "id": "36354",
         "instructor": "Yaakov Neuburger",
         "location": "GLUECK G516",
         "section": "K",
         "semester": "Fall 2016",
         "start": "10:46",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "U",
            "end": "11:30am",
            "start": "09:00am"
         },
         "dow": [
            0
         ],
         "end": "11:30",
         "id": "36354",
         "instructor": "Yaakov Neuburger",
         "location": "GLUECK BMIDRASH",
         "section": "K",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "U",
            "end": "01:00pm",
            "start": "11:31am"
         },
         "dow": [
            0
         ],
         "end": "13:00",
         "id": "36354",
         "instructor": "Yaakov Neuburger",
         "location": "GLUECK G516",
         "section": "K",
         "semester": "Fall 2016",
         "start": "11:31",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "MTW",
            "end": "12:00pm",
            "start": "09:00am"
         },
         "dow": [
            1,
            2,
            3
         ],
         "end": "12:00",
         "id": "36355",
         "instructor": "Mayer Eli Twersky",
         "location": "ZYSMAN Z111",
         "section": "L",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "MTW",
            "end": "02:30pm",
            "start": "01:01pm"
         },
         "dow": [
            1,
            2,
            3
         ],
         "end": "14:30",
         "id": "36355",
         "instructor": "Mayer Eli Twersky",
         "location": "ZYSMAN Z103",
         "section": "L",
         "semester": "Fall 2016",
         "start": "13:01",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "R",
            "end": "10:45am",
            "start": "09:00am"
         },
         "dow": [
            4
         ],
         "end": "10:45",
         "id": "36355",
         "instructor": "Mayer Eli Twersky",
         "location": "ZYSMAN Z111",
         "section": "L",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "R",
            "end": "12:15pm",
            "start": "10:46am"
         },
         "dow": [
            4
         ],
         "end": "12:15",
         "id": "36355",
         "instructor": "Mayer Eli Twersky",
         "location": "ZYSMAN Z103",
         "section": "L",
         "semester": "Fall 2016",
         "start": "10:46",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "U",
            "end": "11:30am",
            "start": "09:00am"
         },
         "dow": [
            0
         ],
         "end": "11:30",
         "id": "36355",
         "instructor": "Mayer Eli Twersky",
         "location": "ZYSMAN Z111",
         "section": "L",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "U",
            "end": "01:00pm",
            "start": "11:31am"
         },
         "dow": [
            0
         ],
         "end": "13:00",
         "id": "36355",
         "instructor": "Mayer Eli Twersky",
         "location": "ZYSMAN Z103",
         "section": "L",
         "semester": "Fall 2016",
         "start": "11:31",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "MWR",
            "end": "12:00pm",
            "start": "09:00am"
         },
         "dow": [
            1,
            3,
            4
         ],
         "end": "12:00",
         "id": "36384",
         "instructor": "Harold J. Reichman",
         "location": "ZYSMAN Z111",
         "section": "M",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "MWR",
            "end": "02:30pm",
            "start": "01:01pm"
         },
         "dow": [
            1,
            3,
            4
         ],
         "end": "14:30",
         "id": "36384",
         "instructor": "Harold J. Reichman",
         "location": "FURST F307",
         "section": "M",
         "semester": "Fall 2016",
         "start": "13:01",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "T",
            "end": "10:45am",
            "start": "09:00am"
         },
         "dow": [
            2
         ],
         "end": "10:45",
         "id": "36384",
         "instructor": "Harold J. Reichman",
         "location": "ZYSMAN Z111",
         "section": "M",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "T",
            "end": "12:15pm",
            "start": "10:46am"
         },
         "dow": [
            2
         ],
         "end": "12:15",
         "id": "36384",
         "instructor": "Harold J. Reichman",
         "location": "FURST F307",
         "section": "M",
         "semester": "Fall 2016",
         "start": "10:46",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "U",
            "end": "11:30am",
            "start": "09:00am"
         },
         "dow": [
            0
         ],
         "end": "11:30",
         "id": "36384",
         "instructor": "Harold J. Reichman",
         "location": "ZYSMAN Z111",
         "section": "M",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "U",
            "end": "01:00pm",
            "start": "11:31am"
         },
         "dow": [
            0
         ],
         "end": "13:00",
         "id": "36384",
         "instructor": "Harold J. Reichman",
         "location": "FURST F307",
         "section": "M",
         "semester": "Fall 2016",
         "start": "11:31",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "MTW",
            "end": "12:00pm",
            "start": "09:00am"
         },
         "dow": [
            1,
            2,
            3
         ],
         "end": "12:00",
         "id": "36390",
         "instructor": "Eliahu Baruch Shulman",
         "location": "GLUECK BMIDRASH",
         "section": "N",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "MTW",
            "end": "02:30pm",
            "start": "01:01pm"
         },
         "dow": [
            1,
            2,
            3
         ],
         "end": "14:30",
         "id": "36390",
         "instructor": "Eliahu Baruch Shulman",
         "location": "GLUECK G417",
         "section": "N",
         "semester": "Fall 2016",
         "start": "13:01",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "R",
            "end": "10:45am",
            "start": "09:00am"
         },
         "dow": [
            4
         ],
         "end": "10:45",
         "id": "36390",
         "instructor": "Eliahu Baruch Shulman",
         "location": "GLUECK BMIDRASH",
         "section": "N",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "R",
            "end": "12:15pm",
            "start": "10:46am"
         },
         "dow": [
            4
         ],
         "end": "12:15",
         "id": "36390",
         "instructor": "Eliahu Baruch Shulman",
         "location": "GLUECK G417",
         "section": "N",
         "semester": "Fall 2016",
         "start": "10:46",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "U",
            "end": "11:30am",
            "start": "09:00am"
         },
         "dow": [
            0
         ],
         "end": "11:30",
         "id": "36390",
         "instructor": "Eliahu Baruch Shulman",
         "location": "GLUECK BMIDRASH",
         "section": "N",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "U",
            "end": "01:00pm",
            "start": "11:31am"
         },
         "dow": [
            0
         ],
         "end": "13:00",
         "id": "36390",
         "instructor": "Eliahu Baruch Shulman",
         "location": "GLUECK G417",
         "section": "N",
         "semester": "Fall 2016",
         "start": "11:31",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "MTW",
            "end": "12:00pm",
            "start": "09:00am"
         },
         "dow": [
            1,
            2,
            3
         ],
         "end": "12:00",
         "id": "36391",
         "instructor": "Michael S. Rosensweig",
         "location": "GLUECK BMIDRASH",
         "section": "O",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "MTW",
            "end": "02:30pm",
            "start": "01:01pm"
         },
         "dow": [
            1,
            2,
            3
         ],
         "end": "14:30",
         "id": "36391",
         "instructor": "Michael S. Rosensweig",
         "location": "GLUECK G308",
         "section": "O",
         "semester": "Fall 2016",
         "start": "13:01",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "R",
            "end": "10:45am",
            "start": "09:00am"
         },
         "dow": [
            4
         ],
         "end": "10:45",
         "id": "36391",
         "instructor": "Michael S. Rosensweig",
         "location": "GLUECK BMIDRASH",
         "section": "O",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "R",
            "end": "12:15pm",
            "start": "10:46am"
         },
         "dow": [
            4
         ],
         "end": "12:15",
         "id": "36391",
         "instructor": "Michael S. Rosensweig",
         "location": "GLUECK G308",
         "section": "O",
         "semester": "Fall 2016",
         "start": "10:46",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "U",
            "end": "11:30am",
            "start": "09:00am"
         },
         "dow": [
            0
         ],
         "end": "11:30",
         "id": "36391",
         "instructor": "Michael S. Rosensweig",
         "location": "GLUECK BMIDRASH",
         "section": "O",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "U",
            "end": "01:00pm",
            "start": "11:31am"
         },
         "dow": [
            0
         ],
         "end": "13:00",
         "id": "36391",
         "instructor": "Michael S. Rosensweig",
         "location": "GLUECK G308",
         "section": "O",
         "semester": "Fall 2016",
         "start": "11:31",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "MTW",
            "end": "12:00pm",
            "start": "09:00am"
         },
         "dow": [
            1,
            2,
            3
         ],
         "end": "12:00",
         "id": "36392",
         "instructor": "Meir Goldwicht",
         "location": "ZYSMAN Z111",
         "section": "P",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "MTW",
            "end": "02:30pm",
            "start": "01:01pm"
         },
         "dow": [
            1,
            2,
            3
         ],
         "end": "14:30",
         "id": "36392",
         "instructor": "Meir Goldwicht",
         "location": "FURST F215",
         "section": "P",
         "semester": "Fall 2016",
         "start": "13:01",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "R",
            "end": "10:45am",
            "start": "09:00am"
         },
         "dow": [
            4
         ],
         "end": "10:45",
         "id": "36392",
         "instructor": "Meir Goldwicht",
         "location": "ZYSMAN Z111",
         "section": "P",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "R",
            "end": "12:15pm",
            "start": "10:46am"
         },
         "dow": [
            4
         ],
         "end": "12:15",
         "id": "36392",
         "instructor": "Meir Goldwicht",
         "location": "FURST F215",
         "section": "P",
         "semester": "Fall 2016",
         "start": "10:46",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "U",
            "end": "11:30am",
            "start": "09:00am"
         },
         "dow": [
            0
         ],
         "end": "11:30",
         "id": "36392",
         "instructor": "Meir Goldwicht",
         "location": "ZYSMAN Z111",
         "section": "P",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "U",
            "end": "01:00pm",
            "start": "11:31am"
         },
         "dow": [
            0
         ],
         "end": "13:00",
         "id": "36392",
         "instructor": "Meir Goldwicht",
         "location": "FURST F215",
         "section": "P",
         "semester": "Fall 2016",
         "start": "11:31",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "MTW",
            "end": "12:00pm",
            "start": "09:00am"
         },
         "dow": [
            1,
            2,
            3
         ],
         "end": "12:00",
         "id": "36393",
         "instructor": "Daniel N. Stein",
         "location": "GLUECK BMIDRASH",
         "section": "R",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "MTW",
            "end": "02:30pm",
            "start": "01:01pm"
         },
         "dow": [
            1,
            2,
            3
         ],
         "end": "14:30",
         "id": "36393",
         "instructor": "Daniel N. Stein",
         "location": "GLUECK G303",
         "section": "R",
         "semester": "Fall 2016",
         "start": "13:01",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "R",
            "end": "10:45am",
            "start": "09:00am"
         },
         "dow": [
            4
         ],
         "end": "10:45",
         "id": "36393",
         "instructor": "Daniel N. Stein",
         "location": "GLUECK BMIDRASH",
         "section": "R",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "R",
            "end": "12:15pm",
            "start": "10:46am"
         },
         "dow": [
            4
         ],
         "end": "12:15",
         "id": "36393",
         "instructor": "Daniel N. Stein",
         "location": "GLUECK G303",
         "section": "R",
         "semester": "Fall 2016",
         "start": "10:46",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "U",
            "end": "11:30am",
            "start": "09:00am"
         },
         "dow": [
            0
         ],
         "end": "11:30",
         "id": "36393",
         "instructor": "Daniel N. Stein",
         "location": "GLUECK BMIDRASH",
         "section": "R",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "U",
            "end": "01:00pm",
            "start": "11:31am"
         },
         "dow": [
            0
         ],
         "end": "13:00",
         "id": "36393",
         "instructor": "Daniel N. Stein",
         "location": "GLUECK G303",
         "section": "R",
         "semester": "Fall 2016",
         "start": "11:31",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "MWR",
            "end": "12:00pm",
            "start": "09:00am"
         },
         "dow": [
            1,
            3,
            4
         ],
         "end": "12:00",
         "id": "36394",
         "instructor": "Daniel Feldman",
         "location": "GLUECK BMIDRASH",
         "section": "S",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "MWR",
            "end": "02:30pm",
            "start": "01:01pm"
         },
         "dow": [
            1,
            3,
            4
         ],
         "end": "14:30",
         "id": "36394",
         "instructor": "Daniel Feldman",
         "location": "FURST F315",
         "section": "S",
         "semester": "Fall 2016",
         "start": "13:01",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "T",
            "end": "10:45am",
            "start": "09:00am"
         },
         "dow": [
            2
         ],
         "end": "10:45",
         "id": "36394",
         "instructor": "Daniel Feldman",
         "location": "GLUECK BMIDRASH",
         "section": "S",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "T",
            "end": "12:15pm",
            "start": "10:45am"
         },
         "dow": [
            2
         ],
         "end": "12:15",
         "id": "36394",
         "instructor": "Daniel Feldman",
         "location": "FURST F315",
         "section": "S",
         "semester": "Fall 2016",
         "start": "10:45",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "R",
            "end": "01:00pm",
            "start": "11:31am"
         },
         "dow": [
            4
         ],
         "end": "13:00",
         "id": "36394",
         "instructor": "Daniel Feldman",
         "location": "FURST F315",
         "section": "S",
         "semester": "Fall 2016",
         "start": "11:31",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "U",
            "end": "11:30am",
            "start": "09:00am"
         },
         "dow": [
            0
         ],
         "end": "11:30",
         "id": "36394",
         "instructor": "Daniel Feldman",
         "location": "GLUECK BMIDRASH",
         "section": "S",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "MWR",
            "end": "12:00pm",
            "start": "09:00am"
         },
         "dow": [
            1,
            3,
            4
         ],
         "end": "12:00",
         "id": "36395",
         "instructor": "Abraham Sarfaty",
         "location": "MUSS MU113",
         "section": "U",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "MWR",
            "end": "02:30pm",
            "start": "01:01pm"
         },
         "dow": [
            1,
            3,
            4
         ],
         "end": "14:30",
         "id": "36395",
         "instructor": "Abraham Sarfaty",
         "location": "MUSS MU109",
         "section": "U",
         "semester": "Fall 2016",
         "start": "13:01",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "T",
            "end": "10:45am",
            "start": "09:00am"
         },
         "dow": [
            2
         ],
         "end": "10:45",
         "id": "36395",
         "instructor": "Abraham Sarfaty",
         "location": "MUSS MU113",
         "section": "U",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "T",
            "end": "12:15pm",
            "start": "10:46am"
         },
         "dow": [
            2
         ],
         "end": "12:15",
         "id": "36395",
         "instructor": "Abraham Sarfaty",
         "location": "MUSS MU109",
         "section": "U",
         "semester": "Fall 2016",
         "start": "10:46",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "U",
            "end": "11:30am",
            "start": "09:00am"
         },
         "dow": [
            0
         ],
         "end": "11:30",
         "id": "36395",
         "instructor": "Abraham Sarfaty",
         "location": "MUSS MU113",
         "section": "U",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6037",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "U",
            "end": "01:00pm",
            "start": "11:31am"
         },
         "dow": [
            0
         ],
         "end": "13:00",
         "id": "36395",
         "instructor": "Abraham Sarfaty",
         "location": "MUSS MU109",
         "section": "U",
         "semester": "Fall 2016",
         "start": "11:31",
         "subject": "TAC",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6055",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "MWR",
            "end": "12:00pm",
            "start": "09:00am"
         },
         "dow": [
            1,
            3,
            4
         ],
         "end": "12:00",
         "id": "36506",
         "instructor": "David Horwitz",
         "location": "ZYSMAN Z111",
         "section": "G",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Menachot",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6055",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "MWR",
            "end": "02:30pm",
            "start": "01:01pm"
         },
         "dow": [
            1,
            3,
            4
         ],
         "end": "14:30",
         "id": "36506",
         "instructor": "David Horwitz",
         "location": "FURST F316",
         "section": "G",
         "semester": "Fall 2016",
         "start": "13:01",
         "subject": "TAC",
         "title": "Talmud: Menachot",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6055",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "T",
            "end": "10:45am",
            "start": "09:00am"
         },
         "dow": [
            2
         ],
         "end": "10:45",
         "id": "36506",
         "instructor": "David Horwitz",
         "location": "ZYSMAN Z111",
         "section": "G",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Menachot",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6055",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "T",
            "end": "12:15pm",
            "start": "10:46am"
         },
         "dow": [
            2
         ],
         "end": "12:15",
         "id": "36506",
         "instructor": "David Horwitz",
         "location": "FURST F316",
         "section": "G",
         "semester": "Fall 2016",
         "start": "10:46",
         "subject": "TAC",
         "title": "Talmud: Menachot",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6055",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "U",
            "end": "11:30am",
            "start": "09:00am"
         },
         "dow": [
            0
         ],
         "end": "11:30",
         "id": "36506",
         "instructor": "David Horwitz",
         "location": "ZYSMAN Z111",
         "section": "G",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Menachot",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6055",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "U",
            "end": "01:00pm",
            "start": "11:31am"
         },
         "dow": [
            0
         ],
         "end": "13:00",
         "id": "36506",
         "instructor": "David Horwitz",
         "location": "FURST F316",
         "section": "G",
         "semester": "Fall 2016",
         "start": "11:31",
         "subject": "TAC",
         "title": "Talmud: Menachot",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6101",
         "college": "Riets",
         "credits": 9,
         "department": "Talmud and Codes",
         "display": {
            "dow": "MTR",
            "end": "02:30pm",
            "start": "01:30pm"
         },
         "dow": [
            1,
            2,
            4
         ],
         "end": "14:30",
         "id": "36228",
         "instructor": "Michael Taubes",
         "location": "TBA",
         "section": "A",
         "semester": "Fall 2016",
         "start": "13:30",
         "subject": "TAC",
         "title": "Codes: Yoreh Deah",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6101",
         "college": "Riets",
         "credits": 9,
         "department": "Talmud and Codes",
         "display": {
            "dow": "WU",
            "end": "12:30pm",
            "start": "11:30am"
         },
         "dow": [
            3,
            0
         ],
         "end": "12:30",
         "id": "36228",
         "instructor": "Michael Taubes",
         "location": "TBA",
         "section": "A",
         "semester": "Fall 2016",
         "start": "11:30",
         "subject": "TAC",
         "title": "Codes: Yoreh Deah",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6103",
         "college": "Riets",
         "credits": 5,
         "department": "Talmud and Codes",
         "display": {
            "dow": "U",
            "end": "01:00pm",
            "start": "10:00am"
         },
         "dow": [
            0
         ],
         "end": "13:00",
         "id": "36229",
         "instructor": "Ozer Glickman",
         "location": "GLUECK G403",
         "section": "B",
         "semester": "Fall 2016",
         "start": "10:00",
         "subject": "TAC",
         "title": "Codes: Yoreh Deah Chaburah",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6103",
         "college": "Riets",
         "credits": 5,
         "department": "Talmud and Codes",
         "display": {
            "dow": "U",
            "end": "01:00pm",
            "start": "10:00am"
         },
         "dow": [
            0
         ],
         "end": "13:00",
         "id": "36230",
         "instructor": "Menachem Genack",
         "location": "TBA",
         "section": "C",
         "semester": "Fall 2016",
         "start": "10:00",
         "subject": "TAC",
         "title": "Codes: Yoreh Deah Chaburah",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6103",
         "college": "Riets",
         "credits": 5,
         "department": "Talmud and Codes",
         "display": {
            "dow": "MTWR",
            "end": "06:30pm",
            "start": "03:00pm"
         },
         "dow": [
            1,
            2,
            3,
            4
         ],
         "end": "18:30",
         "id": "36260",
         "instructor": "Nathaniel Wiederblank",
         "location": "GLUECK BMIDRASH",
         "section": "D",
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "TAC",
         "title": "Codes: Yoreh Deah Chaburah",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6103",
         "college": "Riets",
         "credits": 5,
         "department": "Talmud and Codes",
         "display": {
            "dow": "U",
            "end": "05:30pm",
            "start": "02:00pm"
         },
         "dow": [
            0
         ],
         "end": "17:30",
         "id": "36260",
         "instructor": "Nathaniel Wiederblank",
         "location": "GLUECK BMIDRASH",
         "section": "D",
         "semester": "Fall 2016",
         "start": "14:00",
         "subject": "TAC",
         "title": "Codes: Yoreh Deah Chaburah",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "6503",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "MTR",
            "end": "02:30pm",
            "start": "01:30pm"
         },
         "dow": [
            1,
            2,
            4
         ],
         "end": "14:30",
         "id": "36523",
         "instructor": "Ezra Y. Schwartz",
         "location": "TBA",
         "section": "V",
         "semester": "Fall 2016",
         "start": "13:30",
         "subject": "TAC",
         "title": "Talmud:Shabbat/Hilkhot Shabbat",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6557",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "MWR",
            "end": "12:00pm",
            "start": "09:00am"
         },
         "dow": [
            1,
            3,
            4
         ],
         "end": "12:00",
         "id": "36509",
         "instructor": "Jeremy Wieder",
         "location": "GLUECK BMIDRASH",
         "section": "D",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Hullin/Yoreh Deah",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6557",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "MWR",
            "end": "02:30pm",
            "start": "01:01pm"
         },
         "dow": [
            1,
            3,
            4
         ],
         "end": "14:30",
         "id": "36509",
         "instructor": "Jeremy Wieder",
         "location": "GLUECK G416",
         "section": "D",
         "semester": "Fall 2016",
         "start": "13:01",
         "subject": "TAC",
         "title": "Talmud: Hullin/Yoreh Deah",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6557",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "T",
            "end": "10:45am",
            "start": "09:00am"
         },
         "dow": [
            2
         ],
         "end": "10:45",
         "id": "36509",
         "instructor": "Jeremy Wieder",
         "location": "GLUECK BMIDRASH",
         "section": "D",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Hullin/Yoreh Deah",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6557",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "T",
            "end": "12:15pm",
            "start": "10:46am"
         },
         "dow": [
            2
         ],
         "end": "12:15",
         "id": "36509",
         "instructor": "Jeremy Wieder",
         "location": "GLUECK G416",
         "section": "D",
         "semester": "Fall 2016",
         "start": "10:46",
         "subject": "TAC",
         "title": "Talmud: Hullin/Yoreh Deah",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6557",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "U",
            "end": "11:30am",
            "start": "09:00am"
         },
         "dow": [
            0
         ],
         "end": "11:30",
         "id": "36509",
         "instructor": "Jeremy Wieder",
         "location": "GLUECK BMIDRASH",
         "section": "D",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Hullin/Yoreh Deah",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6557",
         "college": "Riets",
         "credits": 8,
         "department": "Talmud and Codes",
         "display": {
            "dow": "U",
            "end": "01:00pm",
            "start": "11:31am"
         },
         "dow": [
            0
         ],
         "end": "13:00",
         "id": "36509",
         "instructor": "Jeremy Wieder",
         "location": "GLUECK G416",
         "section": "D",
         "semester": "Fall 2016",
         "start": "11:31",
         "subject": "TAC",
         "title": "Talmud: Hullin/Yoreh Deah",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6571",
         "college": "Riets",
         "credits": 9,
         "department": "Talmud and Codes",
         "display": {
            "dow": "MTW",
            "end": "12:00pm",
            "start": "09:00am"
         },
         "dow": [
            1,
            2,
            3
         ],
         "end": "12:00",
         "id": "36508",
         "instructor": "Mordechai H. Willig",
         "location": "GLUECK BMIDRASH",
         "section": "DD",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Niddah/Hilkhot Niddah",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6571",
         "college": "Riets",
         "credits": 9,
         "department": "Talmud and Codes",
         "display": {
            "dow": "MTW",
            "end": "02:30pm",
            "start": "01:01pm"
         },
         "dow": [
            1,
            2,
            3
         ],
         "end": "14:30",
         "id": "36508",
         "instructor": "Mordechai H. Willig",
         "location": "GLUECK G519",
         "section": "DD",
         "semester": "Fall 2016",
         "start": "13:01",
         "subject": "TAC",
         "title": "Talmud: Niddah/Hilkhot Niddah",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6571",
         "college": "Riets",
         "credits": 9,
         "department": "Talmud and Codes",
         "display": {
            "dow": "R",
            "end": "10:45am",
            "start": "09:00am"
         },
         "dow": [
            4
         ],
         "end": "10:45",
         "id": "36508",
         "instructor": "Mordechai H. Willig",
         "location": "GLUECK BMIDRASH",
         "section": "DD",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Niddah/Hilkhot Niddah",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6571",
         "college": "Riets",
         "credits": 9,
         "department": "Talmud and Codes",
         "display": {
            "dow": "R",
            "end": "12:15pm",
            "start": "10:46am"
         },
         "dow": [
            4
         ],
         "end": "12:15",
         "id": "36508",
         "instructor": "Mordechai H. Willig",
         "location": "GLUECK G519",
         "section": "DD",
         "semester": "Fall 2016",
         "start": "10:46",
         "subject": "TAC",
         "title": "Talmud: Niddah/Hilkhot Niddah",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6571",
         "college": "Riets",
         "credits": 9,
         "department": "Talmud and Codes",
         "display": {
            "dow": "U",
            "end": "11:30am",
            "start": "09:00am"
         },
         "dow": [
            0
         ],
         "end": "11:30",
         "id": "36508",
         "instructor": "Mordechai H. Willig",
         "location": "GLUECK BMIDRASH",
         "section": "DD",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAC",
         "title": "Talmud: Niddah/Hilkhot Niddah",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "6571",
         "college": "Riets",
         "credits": 9,
         "department": "Talmud and Codes",
         "display": {
            "dow": "U",
            "end": "01:00pm",
            "start": "11:31am"
         },
         "dow": [
            0
         ],
         "end": "13:00",
         "id": "36508",
         "instructor": "Mordechai H. Willig",
         "location": "GLUECK G519",
         "section": "DD",
         "semester": "Fall 2016",
         "start": "11:31",
         "subject": "TAC",
         "title": "Talmud: Niddah/Hilkhot Niddah",
         "university": "Yeshiva University"
      },
      {
         "capacity": 120,
         "code": "7001",
         "college": "Riets",
         "credits": 5,
         "department": "Talmud and Codes",
         "display": {
            "dow": "MTWR",
            "end": "06:30pm",
            "start": "03:00pm"
         },
         "dow": [
            1,
            2,
            3,
            4
         ],
         "end": "18:30",
         "id": "36510",
         "instructor": "Hershel Schachter, Abraham Sarfaty ",
         "location": "GLUECK BMIDRASH",
         "section": "A",
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "TAC",
         "title": "Katz Kollel",
         "university": "Yeshiva University"
      },
      {
         "capacity": 120,
         "code": "7001",
         "college": "Riets",
         "credits": 5,
         "department": "Talmud and Codes",
         "display": {
            "dow": "U",
            "end": "05:30pm",
            "start": "02:00pm"
         },
         "dow": [
            0
         ],
         "end": "17:30",
         "id": "36510",
         "instructor": "Hershel Schachter, Abraham Sarfaty ",
         "location": "GLUECK BMIDRASH",
         "section": "A",
         "semester": "Fall 2016",
         "start": "14:00",
         "subject": "TAC",
         "title": "Katz Kollel",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "7001",
         "college": "Riets",
         "credits": 5,
         "department": "Talmud and Codes",
         "display": {
            "dow": "MTWR",
            "end": "06:30pm",
            "start": "03:00pm"
         },
         "dow": [
            1,
            2,
            3,
            4
         ],
         "end": "18:30",
         "id": "36543",
         "instructor": "Michoel Zylberman",
         "location": "TBA",
         "section": "B",
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "TAC",
         "title": "Katz Kollel/4th Year Halakhah",
         "university": "Yeshiva University"
      },
      {
         "capacity": 60,
         "code": "7001",
         "college": "Riets",
         "credits": 5,
         "department": "Talmud and Codes",
         "display": {
            "dow": "U",
            "end": "05:30pm",
            "start": "02:00pm"
         },
         "dow": [
            0
         ],
         "end": "17:30",
         "id": "36543",
         "instructor": "Michoel Zylberman",
         "location": "TBA",
         "section": "B",
         "semester": "Fall 2016",
         "start": "14:00",
         "subject": "TAC",
         "title": "Katz Kollel/4th Year Halakhah",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "7001",
         "college": "Riets",
         "credits": 5,
         "department": "Talmud and Codes",
         "display": {
            "dow": "MTWR",
            "end": "06:30pm",
            "start": "03:00pm"
         },
         "dow": [
            1,
            2,
            3,
            4
         ],
         "end": "18:30",
         "id": "36544",
         "instructor": "David M. Hirsch, Abraham Sarfaty ",
         "location": "TBA",
         "section": "C",
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "TAC",
         "title": "Katz Kollel-Self Study",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "7001",
         "college": "Riets",
         "credits": 5,
         "department": "Talmud and Codes",
         "display": {
            "dow": "U",
            "end": "05:30pm",
            "start": "02:00pm"
         },
         "dow": [
            0
         ],
         "end": "17:30",
         "id": "36544",
         "instructor": "David M. Hirsch, Abraham Sarfaty ",
         "location": "TBA",
         "section": "C",
         "semester": "Fall 2016",
         "start": "14:00",
         "subject": "TAC",
         "title": "Katz Kollel-Self Study",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "7501",
         "college": "Riets",
         "credits": 2,
         "department": "Talmud and Codes",
         "display": {
            "dow": "MTWU",
            "end": "10:00pm",
            "start": "08:00pm"
         },
         "dow": [
            1,
            2,
            3,
            0
         ],
         "end": "22:00",
         "id": "36512",
         "instructor": "David Horwitz",
         "location": "GLUECK G317",
         "section": "A",
         "semester": "Fall 2016",
         "start": "20:00",
         "subject": "TAC",
         "title": "Kupietzky Kodashim Kollel",
         "university": "Yeshiva University"
      },
      {
         "capacity": 10,
         "code": "8001",
         "college": "Riets",
         "credits": 12,
         "department": "Talmud and Codes",
         "display": {
            "dow": "T",
            "end": "04:59pm",
            "start": "03:00pm"
         },
         "dow": [
            2
         ],
         "end": "16:59",
         "id": "36513",
         "instructor": "Michael S. Rosensweig",
         "location": "GLUECK G308",
         "section": "A",
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "TAC",
         "title": "Machon Beren",
         "university": "Yeshiva University"
      },
      {
         "capacity": 10,
         "code": "8001",
         "college": "Riets",
         "credits": 12,
         "department": "Talmud and Codes",
         "display": {
            "dow": "R",
            "end": "04:59pm",
            "start": "01:30pm"
         },
         "dow": [
            4
         ],
         "end": "16:59",
         "id": "36513",
         "instructor": "Michael S. Rosensweig",
         "location": "GLUECK G308",
         "section": "A",
         "semester": "Fall 2016",
         "start": "13:30",
         "subject": "TAC",
         "title": "Machon Beren",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "8501",
         "college": "Riets",
         "credits": 12,
         "department": "Talmud and Codes",
         "display": {
            "dow": "T",
            "end": "04:59pm",
            "start": "03:00pm"
         },
         "dow": [
            2
         ],
         "end": "16:59",
         "id": "36514",
         "instructor": "Mordechai H. Willig",
         "location": "GLUECK G308",
         "section": "A",
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "TAC",
         "title": "Wexner Kollel Elyon",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "8501",
         "college": "Riets",
         "credits": 12,
         "department": "Talmud and Codes",
         "display": {
            "dow": "R",
            "end": "04:59pm",
            "start": "01:30pm"
         },
         "dow": [
            4
         ],
         "end": "16:59",
         "id": "36514",
         "instructor": "Mordechai H. Willig",
         "location": "GLUECK G308",
         "section": "A",
         "semester": "Fall 2016",
         "start": "13:30",
         "subject": "TAC",
         "title": "Wexner Kollel Elyon",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "9001",
         "college": "Riets",
         "credits": 12,
         "department": "Talmud and Codes",
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
         "id": "36515",
         "instructor": "J. David Bleich, Yona Reiss ",
         "location": "GLUECK G503",
         "section": "A",
         "semester": "Fall 2016",
         "start": "15:00",
         "subject": "TAC",
         "title": "Kollel L'Hora'ah",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4003",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "MTW",
            "end": "12:00pm",
            "start": "09:00am"
         },
         "dow": [
            1,
            2,
            3
         ],
         "end": "12:00",
         "id": "35487",
         "instructor": "Moses D. Tendler",
         "location": "GLUECK BMIDRASH",
         "section": "MC2",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Shabbat",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4003",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "MTW",
            "end": "02:30pm",
            "start": "01:01pm"
         },
         "dow": [
            1,
            2,
            3
         ],
         "end": "14:30",
         "id": "35487",
         "instructor": "Moses D. Tendler",
         "location": "GLUECK G403",
         "section": "MC2",
         "semester": "Fall 2016",
         "start": "13:01",
         "subject": "TAL",
         "title": "Advanced Talmud: Shabbat",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4003",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "R",
            "end": "10:45am",
            "start": "09:00am"
         },
         "dow": [
            4
         ],
         "end": "10:45",
         "id": "35487",
         "instructor": "Moses D. Tendler",
         "location": "GLUECK BMIDRASH",
         "section": "MC2",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Shabbat",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4003",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "R",
            "end": "12:15pm",
            "start": "10:46am"
         },
         "dow": [
            4
         ],
         "end": "12:15",
         "id": "35487",
         "instructor": "Moses D. Tendler",
         "location": "GLUECK G403",
         "section": "MC2",
         "semester": "Fall 2016",
         "start": "10:46",
         "subject": "TAL",
         "title": "Advanced Talmud: Shabbat",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "MWR",
            "end": "12:00pm",
            "start": "09:00am"
         },
         "dow": [
            1,
            3,
            4
         ],
         "end": "12:00",
         "id": "35183",
         "instructor": "Harvey B. Sobolofsky",
         "location": "ZYSMAN Z111",
         "section": "MA1",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "MWR",
            "end": "02:30pm",
            "start": "01:01pm"
         },
         "dow": [
            1,
            3,
            4
         ],
         "end": "14:30",
         "id": "35183",
         "instructor": "Harvey B. Sobolofsky",
         "location": "GLUECK G307",
         "section": "MA1",
         "semester": "Fall 2016",
         "start": "13:01",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "T",
            "end": "10:45am",
            "start": "09:00am"
         },
         "dow": [
            2
         ],
         "end": "10:45",
         "id": "35183",
         "instructor": "Harvey B. Sobolofsky",
         "location": "ZYSMAN Z111",
         "section": "MA1",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "T",
            "end": "12:15pm",
            "start": "10:46am"
         },
         "dow": [
            2
         ],
         "end": "12:15",
         "id": "35183",
         "instructor": "Harvey B. Sobolofsky",
         "location": "GLUECK G307",
         "section": "MA1",
         "semester": "Fall 2016",
         "start": "10:46",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "U",
            "end": "11:30am",
            "start": "09:00am"
         },
         "dow": [
            0
         ],
         "end": "11:30",
         "id": "35183",
         "instructor": "Harvey B. Sobolofsky",
         "location": "ZYSMAN Z111",
         "section": "MA1",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "U",
            "end": "01:00pm",
            "start": "11:31am"
         },
         "dow": [
            0
         ],
         "end": "13:00",
         "id": "35183",
         "instructor": "Harvey B. Sobolofsky",
         "location": "GLUECK G307",
         "section": "MA1",
         "semester": "Fall 2016",
         "start": "11:31",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "MWR",
            "end": "12:00pm",
            "start": "09:00am"
         },
         "dow": [
            1,
            3,
            4
         ],
         "end": "12:00",
         "id": "35185",
         "instructor": "Elchanan A. Adler",
         "location": "GLUECK BMIDRASH",
         "section": "MA3",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "MWR",
            "end": "02:30pm",
            "start": "01:01pm"
         },
         "dow": [
            1,
            3,
            4
         ],
         "end": "14:30",
         "id": "35185",
         "instructor": "Elchanan A. Adler",
         "location": "GLUECK G419",
         "section": "MA3",
         "semester": "Fall 2016",
         "start": "13:01",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "T",
            "end": "10:45am",
            "start": "09:00am"
         },
         "dow": [
            2
         ],
         "end": "10:45",
         "id": "35185",
         "instructor": "Elchanan A. Adler",
         "location": "GLUECK BMIDRASH",
         "section": "MA3",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "T",
            "end": "12:15pm",
            "start": "10:46am"
         },
         "dow": [
            2
         ],
         "end": "12:15",
         "id": "35185",
         "instructor": "Elchanan A. Adler",
         "location": "GLUECK G419",
         "section": "MA3",
         "semester": "Fall 2016",
         "start": "10:46",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "U",
            "end": "11:30am",
            "start": "09:00am"
         },
         "dow": [
            0
         ],
         "end": "11:30",
         "id": "35185",
         "instructor": "Elchanan A. Adler",
         "location": "GLUECK BMIDRASH",
         "section": "MA3",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "U",
            "end": "01:00pm",
            "start": "11:31am"
         },
         "dow": [
            0
         ],
         "end": "13:00",
         "id": "35185",
         "instructor": "Elchanan A. Adler",
         "location": "GLUECK G419",
         "section": "MA3",
         "semester": "Fall 2016",
         "start": "11:31",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "MWR",
            "end": "12:00pm",
            "start": "09:00am"
         },
         "dow": [
            1,
            3,
            4
         ],
         "end": "12:00",
         "id": "35188",
         "instructor": "David M. Hirsch",
         "location": "GLUECK BMIDRASH",
         "section": "MA4",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "MWR",
            "end": "02:30pm",
            "start": "01:01pm"
         },
         "dow": [
            1,
            3,
            4
         ],
         "end": "14:30",
         "id": "35188",
         "instructor": "David M. Hirsch",
         "location": "GLUECK G518",
         "section": "MA4",
         "semester": "Fall 2016",
         "start": "13:01",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "T",
            "end": "10:45am",
            "start": "09:00am"
         },
         "dow": [
            2
         ],
         "end": "10:45",
         "id": "35188",
         "instructor": "David M. Hirsch",
         "location": "GLUECK BMIDRASH",
         "section": "MA4",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "T",
            "end": "12:15pm",
            "start": "10:46am"
         },
         "dow": [
            2
         ],
         "end": "12:15",
         "id": "35188",
         "instructor": "David M. Hirsch",
         "location": "GLUECK G518",
         "section": "MA4",
         "semester": "Fall 2016",
         "start": "10:46",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "U",
            "end": "11:30am",
            "start": "09:00am"
         },
         "dow": [
            0
         ],
         "end": "11:30",
         "id": "35188",
         "instructor": "David M. Hirsch",
         "location": "GLUECK BMIDRASH",
         "section": "MA4",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "U",
            "end": "01:00pm",
            "start": "11:31am"
         },
         "dow": [
            0
         ],
         "end": "13:00",
         "id": "35188",
         "instructor": "David M. Hirsch",
         "location": "GLUECK G518",
         "section": "MA4",
         "semester": "Fall 2016",
         "start": "11:31",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "MWR",
            "end": "12:00pm",
            "start": "09:00am"
         },
         "dow": [
            1,
            3,
            4
         ],
         "end": "12:00",
         "id": "35184",
         "instructor": "Yitzchok M. Cohen",
         "location": "ZYSMAN Z111",
         "section": "MA5",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "MWR",
            "end": "02:30pm",
            "start": "01:01pm"
         },
         "dow": [
            1,
            3,
            4
         ],
         "end": "14:30",
         "id": "35184",
         "instructor": "Yitzchok M. Cohen",
         "location": "GLUECK G317",
         "section": "MA5",
         "semester": "Fall 2016",
         "start": "13:01",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "T",
            "end": "10:45am",
            "start": "09:00am"
         },
         "dow": [
            2
         ],
         "end": "10:45",
         "id": "35184",
         "instructor": "Yitzchok M. Cohen",
         "location": "ZYSMAN Z111",
         "section": "MA5",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "T",
            "end": "12:15pm",
            "start": "10:46am"
         },
         "dow": [
            2
         ],
         "end": "12:15",
         "id": "35184",
         "instructor": "Yitzchok M. Cohen",
         "location": "GLUECK G317",
         "section": "MA5",
         "semester": "Fall 2016",
         "start": "10:46",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "U",
            "end": "11:30am",
            "start": "09:00am"
         },
         "dow": [
            0
         ],
         "end": "11:30",
         "id": "35184",
         "instructor": "Yitzchok M. Cohen",
         "location": "ZYSMAN Z111",
         "section": "MA5",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "U",
            "end": "01:00pm",
            "start": "11:31am"
         },
         "dow": [
            0
         ],
         "end": "13:00",
         "id": "35184",
         "instructor": "Yitzchok M. Cohen",
         "location": "GLUECK G317",
         "section": "MA5",
         "semester": "Fall 2016",
         "start": "11:31",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "MWR",
            "end": "12:00pm",
            "start": "09:00am"
         },
         "dow": [
            1,
            3,
            4
         ],
         "end": "12:00",
         "id": "35191",
         "instructor": "Baruch Simon",
         "location": "MUSS MU113",
         "section": "MA8",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "MWR",
            "end": "02:30pm",
            "start": "01:01pm"
         },
         "dow": [
            1,
            3,
            4
         ],
         "end": "14:30",
         "id": "35191",
         "instructor": "Baruch Simon",
         "location": "MUSS MU113",
         "section": "MA8",
         "semester": "Fall 2016",
         "start": "13:01",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "T",
            "end": "10:45am",
            "start": "09:00am"
         },
         "dow": [
            2
         ],
         "end": "10:45",
         "id": "35191",
         "instructor": "Baruch Simon",
         "location": "MUSS MU113",
         "section": "MA8",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "T",
            "end": "12:15pm",
            "start": "10:46am"
         },
         "dow": [
            2
         ],
         "end": "12:15",
         "id": "35191",
         "instructor": "Baruch Simon",
         "location": "MUSS MU113",
         "section": "MA8",
         "semester": "Fall 2016",
         "start": "10:46",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "U",
            "end": "11:30am",
            "start": "09:00am"
         },
         "dow": [
            0
         ],
         "end": "11:30",
         "id": "35191",
         "instructor": "Baruch Simon",
         "location": "MUSS MU113",
         "section": "MA8",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "U",
            "end": "01:00pm",
            "start": "11:31am"
         },
         "dow": [
            0
         ],
         "end": "13:00",
         "id": "35191",
         "instructor": "Baruch Simon",
         "location": "MUSS MU113",
         "section": "MA8",
         "semester": "Fall 2016",
         "start": "11:31",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "MWR",
            "end": "12:00pm",
            "start": "09:00am"
         },
         "dow": [
            1,
            3,
            4
         ],
         "end": "12:00",
         "id": "35195",
         "instructor": "Daniel Feldman",
         "location": "GLUECK BMIDRASH",
         "section": "MA9",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "MWR",
            "end": "02:30pm",
            "start": "01:01pm"
         },
         "dow": [
            1,
            3,
            4
         ],
         "end": "14:30",
         "id": "35195",
         "instructor": "Daniel Feldman",
         "location": "FURST F315",
         "section": "MA9",
         "semester": "Fall 2016",
         "start": "13:01",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "T",
            "end": "10:45am",
            "start": "09:00am"
         },
         "dow": [
            2
         ],
         "end": "10:45",
         "id": "35195",
         "instructor": "Daniel Feldman",
         "location": "GLUECK BMIDRASH",
         "section": "MA9",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "T",
            "end": "12:15pm",
            "start": "10:46am"
         },
         "dow": [
            2
         ],
         "end": "12:15",
         "id": "35195",
         "instructor": "Daniel Feldman",
         "location": "FURST F315",
         "section": "MA9",
         "semester": "Fall 2016",
         "start": "10:46",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "U",
            "end": "11:30am",
            "start": "09:00am"
         },
         "dow": [
            0
         ],
         "end": "11:30",
         "id": "35195",
         "instructor": "Daniel Feldman",
         "location": "GLUECK BMIDRASH",
         "section": "MA9",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "U",
            "end": "01:00pm",
            "start": "11:31am"
         },
         "dow": [
            0
         ],
         "end": "13:00",
         "id": "35195",
         "instructor": "Daniel Feldman",
         "location": "FURST F315",
         "section": "MA9",
         "semester": "Fall 2016",
         "start": "11:31",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "MWR",
            "end": "12:00pm",
            "start": "09:00am"
         },
         "dow": [
            1,
            3,
            4
         ],
         "end": "12:00",
         "id": "35198",
         "instructor": "Eliyahu Ben-Haim",
         "location": "ZYSMAN Z111",
         "section": "MAA",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "MWR",
            "end": "02:30pm",
            "start": "01:01pm"
         },
         "dow": [
            1,
            3,
            4
         ],
         "end": "14:30",
         "id": "35198",
         "instructor": "Eliyahu Ben-Haim",
         "location": "MORG 101",
         "section": "MAA",
         "semester": "Fall 2016",
         "start": "13:01",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "T",
            "end": "10:45am",
            "start": "09:00am"
         },
         "dow": [
            2
         ],
         "end": "10:45",
         "id": "35198",
         "instructor": "Eliyahu Ben-Haim",
         "location": "ZYSMAN Z111",
         "section": "MAA",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "T",
            "end": "12:15pm",
            "start": "10:46am"
         },
         "dow": [
            2
         ],
         "end": "12:15",
         "id": "35198",
         "instructor": "Eliyahu Ben-Haim",
         "location": "MORG 101",
         "section": "MAA",
         "semester": "Fall 2016",
         "start": "10:46",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "U",
            "end": "11:30am",
            "start": "09:00am"
         },
         "dow": [
            0
         ],
         "end": "11:30",
         "id": "35198",
         "instructor": "Eliyahu Ben-Haim",
         "location": "ZYSMAN Z111",
         "section": "MAA",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "U",
            "end": "01:00pm",
            "start": "11:31am"
         },
         "dow": [
            0
         ],
         "end": "13:00",
         "id": "35198",
         "instructor": "Eliyahu Ben-Haim",
         "location": "MORG 101",
         "section": "MAA",
         "semester": "Fall 2016",
         "start": "11:31",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "MWR",
            "end": "12:00pm",
            "start": "09:00am"
         },
         "dow": [
            1,
            3,
            4
         ],
         "end": "12:00",
         "id": "35199",
         "instructor": "Yaakov Neuburger",
         "location": "GLUECK BMIDRASH",
         "section": "MAB",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "MWR",
            "end": "02:30pm",
            "start": "01:01pm"
         },
         "dow": [
            1,
            3,
            4
         ],
         "end": "14:30",
         "id": "35199",
         "instructor": "Yaakov Neuburger",
         "location": "GLUECK G516",
         "section": "MAB",
         "semester": "Fall 2016",
         "start": "13:01",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "T",
            "end": "10:45am",
            "start": "09:00am"
         },
         "dow": [
            2
         ],
         "end": "10:45",
         "id": "35199",
         "instructor": "Yaakov Neuburger",
         "location": "GLUECK BMIDRASH",
         "section": "MAB",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "T",
            "end": "12:15pm",
            "start": "10:46am"
         },
         "dow": [
            2
         ],
         "end": "12:15",
         "id": "35199",
         "instructor": "Yaakov Neuburger",
         "location": "GLUECK G516",
         "section": "MAB",
         "semester": "Fall 2016",
         "start": "10:46",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "U",
            "end": "11:30am",
            "start": "09:00am"
         },
         "dow": [
            0
         ],
         "end": "11:30",
         "id": "35199",
         "instructor": "Yaakov Neuburger",
         "location": "GLUECK BMIDRASH",
         "section": "MAB",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "U",
            "end": "01:00pm",
            "start": "11:31am"
         },
         "dow": [
            0
         ],
         "end": "13:00",
         "id": "35199",
         "instructor": "Yaakov Neuburger",
         "location": "GLUECK G516",
         "section": "MAB",
         "semester": "Fall 2016",
         "start": "11:31",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "MTW",
            "end": "12:00pm",
            "start": "09:00am"
         },
         "dow": [
            1,
            2,
            3
         ],
         "end": "12:00",
         "id": "35200",
         "instructor": "Mayer Eli Twersky",
         "location": "ZYSMAN Z111",
         "section": "MAC",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "MTW",
            "end": "02:30pm",
            "start": "01:01pm"
         },
         "dow": [
            1,
            2,
            3
         ],
         "end": "14:30",
         "id": "35200",
         "instructor": "Mayer Eli Twersky",
         "location": "ZYSMAN Z103",
         "section": "MAC",
         "semester": "Fall 2016",
         "start": "13:01",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "R",
            "end": "10:45am",
            "start": "09:00am"
         },
         "dow": [
            4
         ],
         "end": "10:45",
         "id": "35200",
         "instructor": "Mayer Eli Twersky",
         "location": "ZYSMAN Z111",
         "section": "MAC",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "R",
            "end": "12:15pm",
            "start": "10:46am"
         },
         "dow": [
            4
         ],
         "end": "12:15",
         "id": "35200",
         "instructor": "Mayer Eli Twersky",
         "location": "ZYSMAN Z103",
         "section": "MAC",
         "semester": "Fall 2016",
         "start": "10:46",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "U",
            "end": "11:30am",
            "start": "09:00am"
         },
         "dow": [
            0
         ],
         "end": "11:30",
         "id": "35200",
         "instructor": "Mayer Eli Twersky",
         "location": "ZYSMAN Z111",
         "section": "MAC",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "U",
            "end": "01:00pm",
            "start": "11:31am"
         },
         "dow": [
            0
         ],
         "end": "13:00",
         "id": "35200",
         "instructor": "Mayer Eli Twersky",
         "location": "ZYSMAN Z103",
         "section": "MAC",
         "semester": "Fall 2016",
         "start": "11:31",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "MWR",
            "end": "12:00pm",
            "start": "09:00am"
         },
         "dow": [
            1,
            3,
            4
         ],
         "end": "12:00",
         "id": "35201",
         "instructor": "Harold J. Reichman",
         "location": "ZYSMAN Z111",
         "section": "MAD",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "MWR",
            "end": "02:30pm",
            "start": "01:01pm"
         },
         "dow": [
            1,
            3,
            4
         ],
         "end": "14:30",
         "id": "35201",
         "instructor": "Harold J. Reichman",
         "location": "FURST F307",
         "section": "MAD",
         "semester": "Fall 2016",
         "start": "13:01",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "T",
            "end": "10:45am",
            "start": "09:00am"
         },
         "dow": [
            2
         ],
         "end": "10:45",
         "id": "35201",
         "instructor": "Harold J. Reichman",
         "location": "ZYSMAN Z111",
         "section": "MAD",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "T",
            "end": "12:15pm",
            "start": "10:46am"
         },
         "dow": [
            2
         ],
         "end": "12:15",
         "id": "35201",
         "instructor": "Harold J. Reichman",
         "location": "FURST F307",
         "section": "MAD",
         "semester": "Fall 2016",
         "start": "10:46",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "U",
            "end": "11:30am",
            "start": "09:00am"
         },
         "dow": [
            0
         ],
         "end": "11:30",
         "id": "35201",
         "instructor": "Harold J. Reichman",
         "location": "ZYSMAN Z111",
         "section": "MAD",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "U",
            "end": "01:00pm",
            "start": "11:31am"
         },
         "dow": [
            0
         ],
         "end": "13:00",
         "id": "35201",
         "instructor": "Harold J. Reichman",
         "location": "FURST F307",
         "section": "MAD",
         "semester": "Fall 2016",
         "start": "11:31",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "MWR",
            "end": "12:00pm",
            "start": "09:00am"
         },
         "dow": [
            1,
            3,
            4
         ],
         "end": "12:00",
         "id": "35202",
         "instructor": "Eliakim Koenigsberg",
         "location": "ZYSMAN Z111",
         "section": "MAO",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "MWR",
            "end": "02:30pm",
            "start": "01:01pm"
         },
         "dow": [
            1,
            3,
            4
         ],
         "end": "14:30",
         "id": "35202",
         "instructor": "Eliakim Koenigsberg",
         "location": "GLUECK G418",
         "section": "MAO",
         "semester": "Fall 2016",
         "start": "13:01",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "T",
            "end": "10:45am",
            "start": "09:00am"
         },
         "dow": [
            2
         ],
         "end": "10:45",
         "id": "35202",
         "instructor": "Eliakim Koenigsberg",
         "location": "ZYSMAN Z111",
         "section": "MAO",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "T",
            "end": "12:15pm",
            "start": "10:46am"
         },
         "dow": [
            2
         ],
         "end": "12:15",
         "id": "35202",
         "instructor": "Eliakim Koenigsberg",
         "location": "GLUECK G418",
         "section": "MAO",
         "semester": "Fall 2016",
         "start": "10:46",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "U",
            "end": "11:30am",
            "start": "09:00am"
         },
         "dow": [
            0
         ],
         "end": "11:30",
         "id": "35202",
         "instructor": "Eliakim Koenigsberg",
         "location": "ZYSMAN Z111",
         "section": "MAO",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "U",
            "end": "01:00pm",
            "start": "11:31am"
         },
         "dow": [
            0
         ],
         "end": "13:00",
         "id": "35202",
         "instructor": "Eliakim Koenigsberg",
         "location": "GLUECK G418",
         "section": "MAO",
         "semester": "Fall 2016",
         "start": "11:31",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 10,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "MWR",
            "end": "12:00pm",
            "start": "09:00am"
         },
         "dow": [
            1,
            3,
            4
         ],
         "end": "12:00",
         "id": "35211",
         "instructor": "Nathaniel Wiederblank",
         "location": "ZYSMAN Z111",
         "section": "MAP",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 10,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "MWR",
            "end": "02:30pm",
            "start": "01:01pm"
         },
         "dow": [
            1,
            3,
            4
         ],
         "end": "14:30",
         "id": "35211",
         "instructor": "Nathaniel Wiederblank",
         "location": "ZYSMAN Z104",
         "section": "MAP",
         "semester": "Fall 2016",
         "start": "13:01",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 10,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "T",
            "end": "10:45am",
            "start": "09:00am"
         },
         "dow": [
            2
         ],
         "end": "10:45",
         "id": "35211",
         "instructor": "Nathaniel Wiederblank",
         "location": "ZYSMAN Z111",
         "section": "MAP",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 10,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "T",
            "end": "12:15pm",
            "start": "10:46am"
         },
         "dow": [
            2
         ],
         "end": "12:15",
         "id": "35211",
         "instructor": "Nathaniel Wiederblank",
         "location": "GLUECK G417",
         "section": "MAP",
         "semester": "Fall 2016",
         "start": "10:46",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 10,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "U",
            "end": "11:30am",
            "start": "09:00am"
         },
         "dow": [
            0
         ],
         "end": "11:30",
         "id": "35211",
         "instructor": "Nathaniel Wiederblank",
         "location": "ZYSMAN Z111",
         "section": "MAP",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 10,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "U",
            "end": "01:00pm",
            "start": "11:31am"
         },
         "dow": [
            0
         ],
         "end": "13:00",
         "id": "35211",
         "instructor": "Nathaniel Wiederblank",
         "location": "ZYSMAN Z104",
         "section": "MAP",
         "semester": "Fall 2016",
         "start": "11:31",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 10,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "MWR",
            "end": "12:00pm",
            "start": "09:00am"
         },
         "dow": [
            1,
            3,
            4
         ],
         "end": "12:00",
         "id": "35203",
         "instructor": "Yehuda Willig",
         "location": "ZYSMAN Z111",
         "section": "MAS",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 10,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "MWR",
            "end": "02:30pm",
            "start": "01:01pm"
         },
         "dow": [
            1,
            3,
            4
         ],
         "end": "14:30",
         "id": "35203",
         "instructor": "Yehuda Willig",
         "location": "ZYSMAN Z102",
         "section": "MAS",
         "semester": "Fall 2016",
         "start": "13:01",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 10,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "T",
            "end": "10:45am",
            "start": "09:00am"
         },
         "dow": [
            2
         ],
         "end": "10:45",
         "id": "35203",
         "instructor": "Yehuda Willig",
         "location": "ZYSMAN Z111",
         "section": "MAS",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 10,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "T",
            "end": "12:15pm",
            "start": "10:46am"
         },
         "dow": [
            2
         ],
         "end": "12:15",
         "id": "35203",
         "instructor": "Yehuda Willig",
         "location": "GLUECK G519",
         "section": "MAS",
         "semester": "Fall 2016",
         "start": "10:46",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 10,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "U",
            "end": "11:30am",
            "start": "09:00am"
         },
         "dow": [
            0
         ],
         "end": "11:30",
         "id": "35203",
         "instructor": "Yehuda Willig",
         "location": "ZYSMAN Z111",
         "section": "MAS",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 10,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "U",
            "end": "01:00pm",
            "start": "11:31am"
         },
         "dow": [
            0
         ],
         "end": "13:00",
         "id": "35203",
         "instructor": "Yehuda Willig",
         "location": "ZYSMAN Z102",
         "section": "MAS",
         "semester": "Fall 2016",
         "start": "11:31",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "MTW",
            "end": "12:00pm",
            "start": "09:00am"
         },
         "dow": [
            1,
            2,
            3
         ],
         "end": "12:00",
         "id": "35204",
         "instructor": "Eliahu Baruch Shulman",
         "location": "GLUECK BMIDRASH",
         "section": "MB1",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "MTW",
            "end": "02:30pm",
            "start": "01:01pm"
         },
         "dow": [
            1,
            2,
            3
         ],
         "end": "14:30",
         "id": "35204",
         "instructor": "Eliahu Baruch Shulman",
         "location": "GLUECK G417",
         "section": "MB1",
         "semester": "Fall 2016",
         "start": "13:01",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "R",
            "end": "10:45am",
            "start": "09:00am"
         },
         "dow": [
            4
         ],
         "end": "10:45",
         "id": "35204",
         "instructor": "Eliahu Baruch Shulman",
         "location": "GLUECK BMIDRASH",
         "section": "MB1",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "R",
            "end": "12:15pm",
            "start": "10:46am"
         },
         "dow": [
            4
         ],
         "end": "12:15",
         "id": "35204",
         "instructor": "Eliahu Baruch Shulman",
         "location": "GLUECK G417",
         "section": "MB1",
         "semester": "Fall 2016",
         "start": "10:46",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "U",
            "end": "11:30am",
            "start": "09:00am"
         },
         "dow": [
            0
         ],
         "end": "11:30",
         "id": "35204",
         "instructor": "Eliahu Baruch Shulman",
         "location": "GLUECK BMIDRASH",
         "section": "MB1",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "U",
            "end": "01:00pm",
            "start": "11:31am"
         },
         "dow": [
            0
         ],
         "end": "13:00",
         "id": "35204",
         "instructor": "Eliahu Baruch Shulman",
         "location": "GLUECK G417",
         "section": "MB1",
         "semester": "Fall 2016",
         "start": "11:31",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 51,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "MTW",
            "end": "12:00pm",
            "start": "09:00am"
         },
         "dow": [
            1,
            2,
            3
         ],
         "end": "12:00",
         "id": "35205",
         "instructor": "Michael S. Rosensweig",
         "location": "GLUECK BMIDRASH",
         "section": "MB2",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 51,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "MTW",
            "end": "02:30pm",
            "start": "01:01pm"
         },
         "dow": [
            1,
            2,
            3
         ],
         "end": "14:30",
         "id": "35205",
         "instructor": "Michael S. Rosensweig",
         "location": "GLUECK G308",
         "section": "MB2",
         "semester": "Fall 2016",
         "start": "13:01",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 51,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "R",
            "end": "10:45am",
            "start": "09:00am"
         },
         "dow": [
            4
         ],
         "end": "10:45",
         "id": "35205",
         "instructor": "Michael S. Rosensweig",
         "location": "GLUECK BMIDRASH",
         "section": "MB2",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 51,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "R",
            "end": "12:15pm",
            "start": "10:46am"
         },
         "dow": [
            4
         ],
         "end": "12:15",
         "id": "35205",
         "instructor": "Michael S. Rosensweig",
         "location": "GLUECK G308",
         "section": "MB2",
         "semester": "Fall 2016",
         "start": "10:46",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 51,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "U",
            "end": "11:30am",
            "start": "09:00am"
         },
         "dow": [
            0
         ],
         "end": "11:30",
         "id": "35205",
         "instructor": "Michael S. Rosensweig",
         "location": "GLUECK BMIDRASH",
         "section": "MB2",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 51,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "U",
            "end": "01:00pm",
            "start": "11:31am"
         },
         "dow": [
            0
         ],
         "end": "13:00",
         "id": "35205",
         "instructor": "Michael S. Rosensweig",
         "location": "GLUECK G308",
         "section": "MB2",
         "semester": "Fall 2016",
         "start": "11:31",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "MTW",
            "end": "12:00pm",
            "start": "09:00am"
         },
         "dow": [
            1,
            2,
            3
         ],
         "end": "12:00",
         "id": "35206",
         "instructor": "Meir Goldwicht",
         "location": "ZYSMAN Z111",
         "section": "MB3",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "MTW",
            "end": "02:30pm",
            "start": "01:01pm"
         },
         "dow": [
            1,
            2,
            3
         ],
         "end": "14:30",
         "id": "35206",
         "instructor": "Meir Goldwicht",
         "location": "FURST F215",
         "section": "MB3",
         "semester": "Fall 2016",
         "start": "13:01",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "R",
            "end": "10:45am",
            "start": "09:00am"
         },
         "dow": [
            4
         ],
         "end": "10:45",
         "id": "35206",
         "instructor": "Meir Goldwicht",
         "location": "ZYSMAN Z111",
         "section": "MB3",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "R",
            "end": "12:15pm",
            "start": "10:46am"
         },
         "dow": [
            4
         ],
         "end": "12:15",
         "id": "35206",
         "instructor": "Meir Goldwicht",
         "location": "FURST F215",
         "section": "MB3",
         "semester": "Fall 2016",
         "start": "10:46",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "U",
            "end": "11:30am",
            "start": "09:00am"
         },
         "dow": [
            0
         ],
         "end": "11:30",
         "id": "35206",
         "instructor": "Meir Goldwicht",
         "location": "ZYSMAN Z111",
         "section": "MB3",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "U",
            "end": "01:00pm",
            "start": "11:31am"
         },
         "dow": [
            0
         ],
         "end": "13:00",
         "id": "35206",
         "instructor": "Meir Goldwicht",
         "location": "FURST F215",
         "section": "MB3",
         "semester": "Fall 2016",
         "start": "11:31",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "MTW",
            "end": "12:00pm",
            "start": "09:00am"
         },
         "dow": [
            1,
            2,
            3
         ],
         "end": "12:00",
         "id": "35207",
         "instructor": "Aaron Kahn",
         "location": "ZYSMAN Z111",
         "section": "MB5",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "MTW",
            "end": "02:30pm",
            "start": "01:01pm"
         },
         "dow": [
            1,
            2,
            3
         ],
         "end": "14:30",
         "id": "35207",
         "instructor": "Aaron Kahn",
         "location": "ZYSMAN Z101",
         "section": "MB5",
         "semester": "Fall 2016",
         "start": "13:01",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "R",
            "end": "10:45am",
            "start": "09:00am"
         },
         "dow": [
            4
         ],
         "end": "10:45",
         "id": "35207",
         "instructor": "Aaron Kahn",
         "location": "ZYSMAN Z111",
         "section": "MB5",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "R",
            "end": "12:15pm",
            "start": "10:46am"
         },
         "dow": [
            4
         ],
         "end": "12:15",
         "id": "35207",
         "instructor": "Aaron Kahn",
         "location": "ZYSMAN Z101",
         "section": "MB5",
         "semester": "Fall 2016",
         "start": "10:46",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "U",
            "end": "11:30am",
            "start": "09:00am"
         },
         "dow": [
            0
         ],
         "end": "11:30",
         "id": "35207",
         "instructor": "Aaron Kahn",
         "location": "ZYSMAN Z111",
         "section": "MB5",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "U",
            "end": "01:00pm",
            "start": "11:31am"
         },
         "dow": [
            0
         ],
         "end": "13:00",
         "id": "35207",
         "instructor": "Aaron Kahn",
         "location": "ZYSMAN Z101",
         "section": "MB5",
         "semester": "Fall 2016",
         "start": "11:31",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "MTW",
            "end": "12:00pm",
            "start": "09:00am"
         },
         "dow": [
            1,
            2,
            3
         ],
         "end": "12:00",
         "id": "35208",
         "instructor": "Hershel Schachter",
         "location": "GLUECK BMIDRASH",
         "section": "MB7",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "MTW",
            "end": "02:30pm",
            "start": "01:01pm"
         },
         "dow": [
            1,
            2,
            3
         ],
         "end": "14:30",
         "id": "35208",
         "instructor": "Hershel Schachter",
         "location": "GLUECK G517",
         "section": "MB7",
         "semester": "Fall 2016",
         "start": "13:01",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "R",
            "end": "10:45am",
            "start": "09:00am"
         },
         "dow": [
            4
         ],
         "end": "10:45",
         "id": "35208",
         "instructor": "Hershel Schachter",
         "location": "GLUECK BMIDRASH",
         "section": "MB7",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "R",
            "end": "12:15pm",
            "start": "10:46am"
         },
         "dow": [
            4
         ],
         "end": "12:15",
         "id": "35208",
         "instructor": "Hershel Schachter",
         "location": "GLUECK G517",
         "section": "MB7",
         "semester": "Fall 2016",
         "start": "10:46",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "U",
            "end": "11:30am",
            "start": "09:00am"
         },
         "dow": [
            0
         ],
         "end": "11:30",
         "id": "35208",
         "instructor": "Hershel Schachter",
         "location": "GLUECK BMIDRASH",
         "section": "MB7",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "U",
            "end": "01:00pm",
            "start": "11:31am"
         },
         "dow": [
            0
         ],
         "end": "13:00",
         "id": "35208",
         "instructor": "Hershel Schachter",
         "location": "GLUECK G517",
         "section": "MB7",
         "semester": "Fall 2016",
         "start": "11:31",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "MTW",
            "end": "12:00pm",
            "start": "09:00am"
         },
         "dow": [
            1,
            2,
            3
         ],
         "end": "12:00",
         "id": "35209",
         "instructor": "Daniel N. Stein",
         "location": "GLUECK BMIDRASH",
         "section": "MB9",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "MTW",
            "end": "02:30pm",
            "start": "01:01pm"
         },
         "dow": [
            1,
            2,
            3
         ],
         "end": "14:30",
         "id": "35209",
         "instructor": "Daniel N. Stein",
         "location": "GLUECK G303",
         "section": "MB9",
         "semester": "Fall 2016",
         "start": "13:01",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "R",
            "end": "10:45am",
            "start": "09:00am"
         },
         "dow": [
            4
         ],
         "end": "10:45",
         "id": "35209",
         "instructor": "Daniel N. Stein",
         "location": "GLUECK BMIDRASH",
         "section": "MB9",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "R",
            "end": "12:15pm",
            "start": "10:46am"
         },
         "dow": [
            4
         ],
         "end": "12:15",
         "id": "35209",
         "instructor": "Daniel N. Stein",
         "location": "GLUECK G303",
         "section": "MB9",
         "semester": "Fall 2016",
         "start": "10:46",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "U",
            "end": "11:30am",
            "start": "09:00am"
         },
         "dow": [
            0
         ],
         "end": "11:30",
         "id": "35209",
         "instructor": "Daniel N. Stein",
         "location": "GLUECK BMIDRASH",
         "section": "MB9",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "U",
            "end": "01:00pm",
            "start": "11:31am"
         },
         "dow": [
            0
         ],
         "end": "13:00",
         "id": "35209",
         "instructor": "Daniel N. Stein",
         "location": "GLUECK G303",
         "section": "MB9",
         "semester": "Fall 2016",
         "start": "11:31",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "MWR",
            "end": "12:00pm",
            "start": "09:00am"
         },
         "dow": [
            1,
            3,
            4
         ],
         "end": "12:00",
         "id": "35210",
         "instructor": "Abraham Sarfaty",
         "location": "MUSS MU113",
         "section": "MC3",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "MWR",
            "end": "02:30pm",
            "start": "01:01pm"
         },
         "dow": [
            1,
            3,
            4
         ],
         "end": "14:30",
         "id": "35210",
         "instructor": "Abraham Sarfaty",
         "location": "MUSS MU109",
         "section": "MC3",
         "semester": "Fall 2016",
         "start": "13:01",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "T",
            "end": "10:45am",
            "start": "09:00am"
         },
         "dow": [
            2
         ],
         "end": "10:45",
         "id": "35210",
         "instructor": "Abraham Sarfaty",
         "location": "MUSS MU113",
         "section": "MC3",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "T",
            "end": "12:15pm",
            "start": "10:46am"
         },
         "dow": [
            2
         ],
         "end": "12:15",
         "id": "35210",
         "instructor": "Abraham Sarfaty",
         "location": "MUSS MU109",
         "section": "MC3",
         "semester": "Fall 2016",
         "start": "10:46",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "U",
            "end": "11:30am",
            "start": "09:00am"
         },
         "dow": [
            0
         ],
         "end": "11:30",
         "id": "35210",
         "instructor": "Abraham Sarfaty",
         "location": "MUSS MU113",
         "section": "MC3",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "4037",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "U",
            "end": "01:00pm",
            "start": "11:31am"
         },
         "dow": [
            0
         ],
         "end": "13:00",
         "id": "35210",
         "instructor": "Abraham Sarfaty",
         "location": "MUSS MU109",
         "section": "MC3",
         "semester": "Fall 2016",
         "start": "11:31",
         "subject": "TAL",
         "title": "Advanced Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "4051",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "MWR",
            "end": "12:00pm",
            "start": "09:00am"
         },
         "dow": [
            1,
            3,
            4
         ],
         "end": "12:00",
         "id": "36031",
         "instructor": "David Horwitz",
         "location": "ZYSMAN Z111",
         "section": "MA6",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Avodah Zarah",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "4051",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "MWR",
            "end": "02:30pm",
            "start": "01:01pm"
         },
         "dow": [
            1,
            3,
            4
         ],
         "end": "14:30",
         "id": "36031",
         "instructor": "David Horwitz",
         "location": "FURST F316",
         "section": "MA6",
         "semester": "Fall 2016",
         "start": "13:01",
         "subject": "TAL",
         "title": "Advanced Talmud: Avodah Zarah",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "4051",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "T",
            "end": "10:45am",
            "start": "09:00am"
         },
         "dow": [
            2
         ],
         "end": "10:45",
         "id": "36031",
         "instructor": "David Horwitz",
         "location": "ZYSMAN Z111",
         "section": "MA6",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Avodah Zarah",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "4051",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "T",
            "end": "12:15pm",
            "start": "10:46am"
         },
         "dow": [
            2
         ],
         "end": "12:15",
         "id": "36031",
         "instructor": "David Horwitz",
         "location": "FURST F316",
         "section": "MA6",
         "semester": "Fall 2016",
         "start": "10:46",
         "subject": "TAL",
         "title": "Advanced Talmud: Avodah Zarah",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "4051",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "U",
            "end": "11:30am",
            "start": "09:00am"
         },
         "dow": [
            0
         ],
         "end": "11:30",
         "id": "36031",
         "instructor": "David Horwitz",
         "location": "ZYSMAN Z111",
         "section": "MA6",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Avodah Zarah",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "4051",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "U",
            "end": "01:00pm",
            "start": "11:31am"
         },
         "dow": [
            0
         ],
         "end": "13:00",
         "id": "36031",
         "instructor": "David Horwitz",
         "location": "FURST F316",
         "section": "MA6",
         "semester": "Fall 2016",
         "start": "11:31",
         "subject": "TAL",
         "title": "Advanced Talmud: Avodah Zarah",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4057",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "MWR",
            "end": "12:00pm",
            "start": "09:00am"
         },
         "dow": [
            1,
            3,
            4
         ],
         "end": "12:00",
         "id": "35488",
         "instructor": "Jeremy Wieder",
         "location": "GLUECK BMIDRASH",
         "section": "MA2",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Hullin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4057",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "MWR",
            "end": "02:30pm",
            "start": "01:01pm"
         },
         "dow": [
            1,
            3,
            4
         ],
         "end": "14:30",
         "id": "35488",
         "instructor": "Jeremy Wieder",
         "location": "GLUECK G416",
         "section": "MA2",
         "semester": "Fall 2016",
         "start": "13:01",
         "subject": "TAL",
         "title": "Advanced Talmud: Hullin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4057",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "T",
            "end": "10:45am",
            "start": "09:00am"
         },
         "dow": [
            2
         ],
         "end": "10:45",
         "id": "35488",
         "instructor": "Jeremy Wieder",
         "location": "GLUECK BMIDRASH",
         "section": "MA2",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Hullin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4057",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "T",
            "end": "12:15pm",
            "start": "10:46am"
         },
         "dow": [
            2
         ],
         "end": "12:15",
         "id": "35488",
         "instructor": "Jeremy Wieder",
         "location": "GLUECK G416",
         "section": "MA2",
         "semester": "Fall 2016",
         "start": "10:46",
         "subject": "TAL",
         "title": "Advanced Talmud: Hullin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4057",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "U",
            "end": "11:30am",
            "start": "09:00am"
         },
         "dow": [
            0
         ],
         "end": "11:30",
         "id": "35488",
         "instructor": "Jeremy Wieder",
         "location": "GLUECK BMIDRASH",
         "section": "MA2",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Hullin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4057",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "U",
            "end": "01:00pm",
            "start": "11:31am"
         },
         "dow": [
            0
         ],
         "end": "13:00",
         "id": "35488",
         "instructor": "Jeremy Wieder",
         "location": "GLUECK G416",
         "section": "MA2",
         "semester": "Fall 2016",
         "start": "11:31",
         "subject": "TAL",
         "title": "Advanced Talmud: Hullin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4071",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "MTW",
            "end": "12:00pm",
            "start": "09:00am"
         },
         "dow": [
            1,
            2,
            3
         ],
         "end": "12:00",
         "id": "35486",
         "instructor": "Mordechai H. Willig",
         "location": "GLUECK BMIDRASH",
         "section": "MB4",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Niddah",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4071",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "MTW",
            "end": "02:30pm",
            "start": "01:01pm"
         },
         "dow": [
            1,
            2,
            3
         ],
         "end": "14:30",
         "id": "35486",
         "instructor": "Mordechai H. Willig",
         "location": "GLUECK G519",
         "section": "MB4",
         "semester": "Fall 2016",
         "start": "13:01",
         "subject": "TAL",
         "title": "Advanced Talmud: Niddah",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4071",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "R",
            "end": "10:45am",
            "start": "09:00am"
         },
         "dow": [
            4
         ],
         "end": "10:45",
         "id": "35486",
         "instructor": "Mordechai H. Willig",
         "location": "GLUECK BMIDRASH",
         "section": "MB4",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Niddah",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4071",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "R",
            "end": "12:15pm",
            "start": "10:46am"
         },
         "dow": [
            4
         ],
         "end": "12:15",
         "id": "35486",
         "instructor": "Mordechai H. Willig",
         "location": "GLUECK G519",
         "section": "MB4",
         "semester": "Fall 2016",
         "start": "10:46",
         "subject": "TAL",
         "title": "Advanced Talmud: Niddah",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4071",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "U",
            "end": "11:30am",
            "start": "09:00am"
         },
         "dow": [
            0
         ],
         "end": "11:30",
         "id": "35486",
         "instructor": "Mordechai H. Willig",
         "location": "GLUECK BMIDRASH",
         "section": "MB4",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Advanced Talmud: Niddah",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "4071",
         "college": "Mazer Yeshiva Program",
         "credits": 16,
         "department": "*Talmud",
         "display": {
            "dow": "U",
            "end": "01:00pm",
            "start": "11:31am"
         },
         "dow": [
            0
         ],
         "end": "13:00",
         "id": "35486",
         "instructor": "Mordechai H. Willig",
         "location": "GLUECK G519",
         "section": "MB4",
         "semester": "Fall 2016",
         "start": "11:31",
         "subject": "TAL",
         "title": "Advanced Talmud: Niddah",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "1121",
         "college": "James Striar School",
         "credits": 2.5,
         "department": "*Talmud",
         "display": {
            "dow": "MT",
            "end": "11:55am",
            "start": "11:00am"
         },
         "dow": [
            1,
            2
         ],
         "end": "11:55",
         "id": "36047",
         "instructor": "Daniel Lerner",
         "location": "FURST F304",
         "section": "F31",
         "semester": "Fall 2016",
         "start": "11:00",
         "subject": "TAL",
         "title": "Selected Topics in Talmud I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "1121",
         "college": "James Striar School",
         "credits": 2.5,
         "department": "*Talmud",
         "display": {
            "dow": "WR",
            "end": "11:55am",
            "start": "11:00am"
         },
         "dow": [
            3,
            4
         ],
         "end": "11:55",
         "id": "36055",
         "instructor": "TBA",
         "location": "FURST F306",
         "section": "F32",
         "semester": "Fall 2016",
         "start": "11:00",
         "subject": "TAL",
         "title": "Selected Topics in Talmud I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "1470",
         "college": "James Striar School",
         "credits": 2.5,
         "department": "*Talmud",
         "display": {
            "dow": "WR",
            "end": "10:55am",
            "start": "10:00am"
         },
         "dow": [
            3,
            4
         ],
         "end": "10:55",
         "id": "36042",
         "instructor": "TBA",
         "location": "FURST F311",
         "section": "F22",
         "semester": "Fall 2016",
         "start": "10:00",
         "subject": "TAL",
         "title": "Mishnah Mastery",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "1519",
         "college": "James Striar School",
         "credits": 7.5,
         "department": "*Talmud",
         "display": {
            "dow": "MTWR",
            "end": "10:55am",
            "start": "10:00am"
         },
         "dow": [
            1,
            2,
            3,
            4
         ],
         "end": "10:55",
         "id": "36056",
         "instructor": "John Shippel",
         "location": "FURST F301",
         "section": "F26",
         "semester": "Fall 2016",
         "start": "10:00",
         "subject": "TAL",
         "title": "Talmud: Megillah",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "1519",
         "college": "James Striar School",
         "credits": 7.5,
         "department": "*Talmud",
         "display": {
            "dow": "TR",
            "end": "11:55am",
            "start": "11:00am"
         },
         "dow": [
            2,
            4
         ],
         "end": "11:55",
         "id": "36056",
         "instructor": "John Shippel",
         "location": "FURST F301",
         "section": "F26",
         "semester": "Fall 2016",
         "start": "11:00",
         "subject": "TAL",
         "title": "Talmud: Megillah",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "1537",
         "college": "James Striar School",
         "credits": 7.5,
         "department": "*Talmud",
         "display": {
            "dow": "MTWR",
            "end": "10:55am",
            "start": "10:00am"
         },
         "dow": [
            1,
            2,
            3,
            4
         ],
         "end": "10:55",
         "id": "36049",
         "instructor": "Uri Orlian",
         "location": "FURST F313",
         "section": "F25",
         "semester": "Fall 2016",
         "start": "10:00",
         "subject": "TAL",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "1537",
         "college": "James Striar School",
         "credits": 7.5,
         "department": "*Talmud",
         "display": {
            "dow": "MW",
            "end": "11:55am",
            "start": "11:00am"
         },
         "dow": [
            1,
            3
         ],
         "end": "11:55",
         "id": "36049",
         "instructor": "Uri Orlian",
         "location": "FURST F313",
         "section": "F25",
         "semester": "Fall 2016",
         "start": "11:00",
         "subject": "TAL",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "1435",
         "college": "James Striar School",
         "credits": 5,
         "department": "Halakhah",
         "display": {
            "dow": "MTWR",
            "end": "10:55am",
            "start": "10:00am"
         },
         "dow": [
            1,
            2,
            3,
            4
         ],
         "end": "10:55",
         "id": "36043",
         "instructor": "Mordechai Arnold Becher",
         "location": "FURST F310",
         "section": "F20",
         "semester": "Fall 2016",
         "start": "10:00",
         "subject": "HAL",
         "title": "Laws of Kashrut",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "1203",
         "college": "James Striar School",
         "credits": 5,
         "department": "Hebrew",
         "display": {
            "dow": "MTWR",
            "end": "10:55am",
            "start": "10:00am"
         },
         "dow": [
            1,
            2,
            3,
            4
         ],
         "end": "10:55",
         "id": "34679",
         "instructor": "Harvey Sober",
         "location": "FURST F305",
         "section": "F20",
         "semester": "Fall 2016",
         "start": "10:00",
         "subject": "HEB",
         "title": "Elementary Hebrew I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "1203",
         "college": "James Striar School",
         "credits": 2.5,
         "department": "Hebrew",
         "display": {
            "dow": "MT",
            "end": "11:55am",
            "start": "11:00am"
         },
         "dow": [
            1,
            2
         ],
         "end": "11:55",
         "id": "34675",
         "instructor": "Harvey Sober",
         "location": "FURST F306",
         "section": "F31",
         "semester": "Fall 2016",
         "start": "11:00",
         "subject": "HEB",
         "title": "Elementary Hebrew I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "1203",
         "college": "James Striar School",
         "credits": 2.5,
         "department": "Hebrew",
         "display": {
            "dow": "WR",
            "end": "11:55am",
            "start": "11:00am"
         },
         "dow": [
            3,
            4
         ],
         "end": "11:55",
         "id": "34676",
         "instructor": "Harvey Sober",
         "location": "FURST F304",
         "section": "F32",
         "semester": "Fall 2016",
         "start": "11:00",
         "subject": "HEB",
         "title": "Elementary Hebrew I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "0202",
         "college": "James Striar School",
         "credits": 2.5,
         "department": "Jewish History",
         "display": {
            "dow": "WR",
            "end": "12:55pm",
            "start": "12:00pm"
         },
         "dow": [
            3,
            4
         ],
         "end": "12:55",
         "id": "36041",
         "instructor": "Harvey Sober",
         "location": "FURST F304",
         "section": "F42",
         "semester": "Fall 2016",
         "start": "12:00",
         "subject": "JHI",
         "title": "Classical JHI: Arch of Genesis",
         "university": "Yeshiva University"
      },
      {
         "capacity": 99,
         "code": "1022",
         "college": "James Striar School",
         "credits": 5,
         "department": "Jewish Thought",
         "display": {
            "dow": "MTWR",
            "end": "09:55am",
            "start": "09:00am"
         },
         "dow": [
            1,
            2,
            3,
            4
         ],
         "end": "9:55",
         "id": "34685",
         "instructor": "John Shippel",
         "location": "FURST F301",
         "section": "F10",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "JTH",
         "title": "Prayer Seminar",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "1204",
         "college": "James Striar School",
         "credits": 5,
         "department": "Jewish Thought",
         "display": {
            "dow": "MTWR",
            "end": "11:55am",
            "start": "11:00am"
         },
         "dow": [
            1,
            2,
            3,
            4
         ],
         "end": "11:55",
         "id": "34673",
         "instructor": "Simcha Willig",
         "location": "FURST F311",
         "section": "F30",
         "semester": "Fall 2016",
         "start": "11:00",
         "subject": "JTH",
         "title": "Ethics",
         "university": "Yeshiva University"
      },
      {
         "capacity": 99,
         "code": "1350",
         "college": "James Striar School",
         "credits": 2.5,
         "department": "Jewish Thought",
         "display": {
            "dow": "WR",
            "end": "09:55am",
            "start": "09:00am"
         },
         "dow": [
            3,
            4
         ],
         "end": "9:55",
         "id": "36044",
         "instructor": "Harvey Sober",
         "location": "TBA",
         "section": "F12",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "JTH",
         "title": "Intro to Jewish Meditation",
         "university": "Yeshiva University"
      },
      {
         "capacity": 45,
         "code": "1818",
         "college": "James Striar School",
         "credits": 2.5,
         "department": "Jewish Thought",
         "display": {
            "dow": "MT",
            "end": "09:55am",
            "start": "09:00am"
         },
         "dow": [
            1,
            2
         ],
         "end": "9:55",
         "id": "35713",
         "instructor": "Daniel Lerner",
         "location": "FURST F304",
         "section": "F11",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "JTH",
         "title": "Prayer & The Siddur",
         "university": "Yeshiva University"
      },
      {
         "capacity": 40,
         "code": "1001",
         "college": "James Striar School",
         "credits": 2.5,
         "department": "Judaic Studies",
         "display": {
            "dow": "MT",
            "end": "12:55pm",
            "start": "12:00pm"
         },
         "dow": [
            1,
            2
         ],
         "end": "12:55",
         "id": "36046",
         "instructor": "Daniel Lerner",
         "location": "FURST F304",
         "section": "F41",
         "semester": "Fall 2016",
         "start": "12:00",
         "subject": "JUD",
         "title": "Jewish Engagements",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "1407",
         "college": "James Striar School",
         "credits": 2.5,
         "department": "Judaic Studies",
         "display": {
            "dow": "MT",
            "end": "10:55am",
            "start": "10:00am"
         },
         "dow": [
            1,
            2
         ],
         "end": "10:55",
         "id": "36045",
         "instructor": "Daniel Lerner",
         "location": "FURST F311",
         "section": "F21",
         "semester": "Fall 2016",
         "start": "10:00",
         "subject": "JUD",
         "title": "Understanding the Mitzvot",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "1001",
         "college": "James Striar School",
         "credits": 5,
         "department": "Tanakh",
         "display": {
            "dow": "MTWR",
            "end": "11:55am",
            "start": "11:00am"
         },
         "dow": [
            1,
            2,
            3,
            4
         ],
         "end": "11:55",
         "id": "34669",
         "instructor": "Benjamin Yudin",
         "location": "FURST F305",
         "section": "F30",
         "semester": "Fall 2016",
         "start": "11:00",
         "subject": "TAN",
         "title": "Understanding the Torah",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "1005",
         "college": "James Striar School",
         "credits": 5,
         "department": "Tanakh",
         "display": {
            "dow": "MTWR",
            "end": "10:55am",
            "start": "10:00am"
         },
         "dow": [
            1,
            2,
            3,
            4
         ],
         "end": "10:55",
         "id": "36052",
         "instructor": "Simcha Willig",
         "location": "TBA",
         "section": "F20",
         "semester": "Fall 2016",
         "start": "10:00",
         "subject": "TAN",
         "title": "Exploring the Bible",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "1051",
         "college": "James Striar School",
         "credits": 2.5,
         "department": "Tanakh",
         "display": {
            "dow": "MW",
            "end": "11:55am",
            "start": "11:00am"
         },
         "dow": [
            1,
            3
         ],
         "end": "11:55",
         "id": "36051",
         "instructor": "John Shippel",
         "location": "FURST F301",
         "section": "F31",
         "semester": "Fall 2016",
         "start": "11:00",
         "subject": "TAN",
         "title": "Parshat HaShavua",
         "university": "Yeshiva University"
      },
      {
         "capacity": 35,
         "code": "1051",
         "college": "James Striar School",
         "credits": 2.5,
         "department": "Tanakh",
         "display": {
            "dow": "TR",
            "end": "11:55am",
            "start": "11:00am"
         },
         "dow": [
            2,
            4
         ],
         "end": "11:55",
         "id": "34671",
         "instructor": "Uri Orlian",
         "location": "FURST F313",
         "section": "F32",
         "semester": "Fall 2016",
         "start": "11:00",
         "subject": "TAN",
         "title": "Parshat HaShavua",
         "university": "Yeshiva University"
      },
      {
         "capacity": 18,
         "code": "0001",
         "college": "James Striar School",
         "credits": 15,
         "department": "Unassigned",
         "display": {
            "dow": "TBA",
            "end": "",
            "start": ""
         },
         "dow": [],
         "end": "",
         "id": "34668",
         "instructor": "TBA",
         "location": "TBA",
         "section": "UNA",
         "semester": "Fall 2016",
         "start": "",
         "subject": "JSS",
         "title": "JSS/Mechina Unassigned",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1113",
         "college": "Isaac Breuer College",
         "credits": 5,
         "department": "*Talmud",
         "display": {
            "dow": "MTWR",
            "end": "10:55am",
            "start": "10:00am"
         },
         "dow": [
            1,
            2,
            3,
            4
         ],
         "end": "10:55",
         "id": "34616",
         "instructor": "Meir Fulda",
         "location": "FURST F504",
         "section": "IB2",
         "semester": "Fall 2016",
         "start": "10:00",
         "subject": "TAL",
         "title": "Intermediate Talmud V",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "1113",
         "college": "Isaac Breuer College",
         "credits": 5,
         "department": "*Talmud",
         "display": {
            "dow": "MTWR",
            "end": "11:55am",
            "start": "11:00am"
         },
         "dow": [
            1,
            2,
            3,
            4
         ],
         "end": "11:55",
         "id": "34617",
         "instructor": "Meir Fulda",
         "location": "FURST F504",
         "section": "IB3",
         "semester": "Fall 2016",
         "start": "11:00",
         "subject": "TAL",
         "title": "Intermediate Talmud V",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "2037",
         "college": "Isaac Breuer College",
         "credits": 5,
         "department": "*Talmud",
         "display": {
            "dow": "MTWR",
            "end": "09:55am",
            "start": "09:00am"
         },
         "dow": [
            1,
            2,
            3,
            4
         ],
         "end": "9:55",
         "id": "35719",
         "instructor": "Reuven Fink",
         "location": "FURST F211",
         "section": "IB1",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAL",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "2037",
         "college": "Isaac Breuer College",
         "credits": 5,
         "department": "*Talmud",
         "display": {
            "dow": "MTWR",
            "end": "10:55am",
            "start": "10:00am"
         },
         "dow": [
            1,
            2,
            3,
            4
         ],
         "end": "10:55",
         "id": "35720",
         "instructor": "Zvi D. Romm",
         "location": "FURST F210",
         "section": "IB2",
         "semester": "Fall 2016",
         "start": "10:00",
         "subject": "TAL",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "2037",
         "college": "Isaac Breuer College",
         "credits": 5,
         "department": "*Talmud",
         "display": {
            "dow": "MTWR",
            "end": "11:55am",
            "start": "11:00am"
         },
         "dow": [
            1,
            2,
            3,
            4
         ],
         "end": "11:55",
         "id": "35721",
         "instructor": "Meir Goldwicht",
         "location": "FURST F215",
         "section": "IB3",
         "semester": "Fall 2016",
         "start": "11:00",
         "subject": "TAL",
         "title": "Talmud: Kiddushin",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "2453",
         "college": "Isaac Breuer College",
         "credits": 2.5,
         "department": "*Talmud",
         "display": {
            "dow": "MW",
            "end": "09:55pm",
            "start": "09:00pm"
         },
         "dow": [
            1,
            3
         ],
         "end": "21:55",
         "id": "35999",
         "instructor": "TBA",
         "location": "MORG 101",
         "section": "I29",
         "semester": "Fall 2016",
         "start": "21:00",
         "subject": "TAL",
         "title": "Mishnah: Moed",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1000",
         "college": "Isaac Breuer College",
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
         "semester": "Fall 2016",
         "start": "11:00",
         "subject": "BIB",
         "title": "Bible:Text, Context, Tradition",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1310",
         "college": "Isaac Breuer College",
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
         "semester": "Fall 2016",
         "start": "11:00",
         "subject": "BIB",
         "title": "The aqeda “Binding of Isaac” and its interpretation",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "2560",
         "college": "Isaac Breuer College",
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
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "BIB",
         "title": "Amos and Hosea",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "2820",
         "college": "Isaac Breuer College",
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
         "semester": "Fall 2016",
         "start": "11:00",
         "subject": "BIB",
         "title": "Ezra-Nehemiah",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1435",
         "college": "Isaac Breuer College",
         "credits": 2.5,
         "department": "Halakhah",
         "display": {
            "dow": "TR",
            "end": "10:55am",
            "start": "10:00am"
         },
         "dow": [
            2,
            4
         ],
         "end": "10:55",
         "id": "35727",
         "instructor": "Allen M. Schwartz",
         "location": "FURST F204",
         "section": "IB5",
         "semester": "Fall 2016",
         "start": "10:00",
         "subject": "HAL",
         "title": "Laws of Kashrut",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1448",
         "college": "Isaac Breuer College",
         "credits": 5,
         "department": "Halakhah",
         "display": {
            "dow": "MTWR",
            "end": "11:55am",
            "start": "11:00am"
         },
         "dow": [
            1,
            2,
            3,
            4
         ],
         "end": "11:55",
         "id": "34633",
         "instructor": "Zev Reichman",
         "location": "FURST F207",
         "section": "IB3",
         "semester": "Fall 2016",
         "start": "11:00",
         "subject": "HAL",
         "title": "Family Law & Purity",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "1475",
         "college": "Isaac Breuer College",
         "credits": 2.5,
         "department": "Halakhah",
         "display": {
            "dow": "TR",
            "end": "12:55pm",
            "start": "12:00pm"
         },
         "dow": [
            2,
            4
         ],
         "end": "12:55",
         "id": "34645",
         "instructor": "Moshe M. Tessone",
         "location": "FURST F306",
         "section": "IB9",
         "semester": "Fall 2016",
         "start": "12:00",
         "subject": "HAL",
         "title": "Sephardic Laws- Festivals",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "1485",
         "college": "Isaac Breuer College",
         "credits": 5,
         "department": "Halakhah",
         "display": {
            "dow": "MTWR",
            "end": "11:55am",
            "start": "11:00am"
         },
         "dow": [
            1,
            2,
            3,
            4
         ],
         "end": "11:55",
         "id": "34623",
         "instructor": "Gabriel S. Danieli",
         "location": "FURST F217",
         "section": "IB3",
         "semester": "Fall 2016",
         "start": "11:00",
         "subject": "HAL",
         "title": "Halakhah - Daily Life",
         "university": "Yeshiva University"
      },
      {
         "capacity": 30,
         "code": "1200",
         "college": "Isaac Breuer College",
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
         "semester": "Fall 2016",
         "start": "11:00",
         "subject": "JHI",
         "title": "Classical Jewish History",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1320",
         "college": "Isaac Breuer College",
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
         "semester": "Fall 2016",
         "start": "11:00",
         "subject": "JHI",
         "title": "Jews and Medieval Islam",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1360H",
         "college": "Isaac Breuer College",
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
         "semester": "Fall 2016",
         "start": "12:00",
         "subject": "JPH",
         "title": "Maimonides",
         "university": "Yeshiva University"
      },
      {
         "capacity": 12,
         "code": "1207",
         "college": "Isaac Breuer College",
         "credits": 5,
         "department": "Jewish Thought",
         "display": {
            "dow": "MTWR",
            "end": "11:55am",
            "start": "11:00am"
         },
         "dow": [
            1,
            2,
            3,
            4
         ],
         "end": "11:55",
         "id": "35718",
         "instructor": "Benjamin Shlomo Rofeh",
         "location": "FURST F205",
         "section": "IB3",
         "semester": "Fall 2016",
         "start": "11:00",
         "subject": "JTH",
         "title": "Ethics and Mussar II",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "1351",
         "college": "Isaac Breuer College",
         "credits": 2.5,
         "department": "Jewish Thought",
         "display": {
            "dow": "MW",
            "end": "10:55am",
            "start": "10:00am"
         },
         "dow": [
            1,
            3
         ],
         "end": "10:55",
         "id": "34647",
         "instructor": "Leonard Moskowitz",
         "location": "FURST F314",
         "section": "IB2",
         "semester": "Fall 2016",
         "start": "10:00",
         "subject": "JTH",
         "title": "Jewish Meditation",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1420",
         "college": "Isaac Breuer College",
         "credits": 2.5,
         "department": "Jewish Thought",
         "display": {
            "dow": "W",
            "end": "09:55pm",
            "start": "08:00pm"
         },
         "dow": [
            3
         ],
         "end": "21:55",
         "id": "34652",
         "instructor": "Gabriel S. Danieli",
         "location": "GLUECK G303",
         "section": "I38",
         "semester": "Fall 2016",
         "start": "20:00",
         "subject": "JTH",
         "title": "Chassidut",
         "university": "Yeshiva University"
      },
      {
         "capacity": 23,
         "code": "1424H",
         "college": "Isaac Breuer College",
         "credits": 2.5,
         "department": "Jewish Thought",
         "display": {
            "dow": "MW",
            "end": "11:55am",
            "start": "11:00am"
         },
         "dow": [
            1,
            3
         ],
         "end": "11:55",
         "id": "35845",
         "instructor": "Yosef Zvi Bronstein",
         "location": "FURST F210",
         "section": "IB3",
         "semester": "Fall 2016",
         "start": "11:00",
         "subject": "JTH",
         "title": "Thought of Lubavitcher Rebbe",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1845",
         "college": "Isaac Breuer College",
         "credits": 5,
         "department": "Jewish Thought",
         "display": {
            "dow": "MTWR",
            "end": "10:55am",
            "start": "10:00am"
         },
         "dow": [
            1,
            2,
            3,
            4
         ],
         "end": "10:55",
         "id": "34630",
         "instructor": "Benjamin Blech",
         "location": "FURST F206",
         "section": "IB2",
         "semester": "Fall 2016",
         "start": "10:00",
         "subject": "JTH",
         "title": "Contemporary Topics in JTH",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "2005",
         "college": "Isaac Breuer College",
         "credits": 2.5,
         "department": "Jewish Thought",
         "display": {
            "dow": "TR",
            "end": "11:55am",
            "start": "11:00am"
         },
         "dow": [
            2,
            4
         ],
         "end": "11:55",
         "id": "34627",
         "instructor": "Benjamin Blech",
         "location": "FURST F206",
         "section": "IB6",
         "semester": "Fall 2016",
         "start": "11:00",
         "subject": "JTH",
         "title": "Fundamentals of Judaism",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "2030",
         "college": "Isaac Breuer College",
         "credits": 2.5,
         "department": "Jewish Thought",
         "display": {
            "dow": "MW",
            "end": "11:55am",
            "start": "11:00am"
         },
         "dow": [
            1,
            3
         ],
         "end": "11:55",
         "id": "34628",
         "instructor": "Benjamin Blech",
         "location": "FURST F206",
         "section": "IB3",
         "semester": "Fall 2016",
         "start": "11:00",
         "subject": "JTH",
         "title": "Prayer: What & Why",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "2460",
         "college": "Isaac Breuer College",
         "credits": 5,
         "department": "Jewish Thought",
         "display": {
            "dow": "MTWR",
            "end": "12:55pm",
            "start": "12:00pm"
         },
         "dow": [
            1,
            2,
            3,
            4
         ],
         "end": "12:55",
         "id": "35716",
         "instructor": "Mordechai Arnold Becher",
         "location": "FURST F305",
         "section": "IB8",
         "semester": "Fall 2016",
         "start": "12:00",
         "subject": "JTH",
         "title": "Philosophy of R. S. R. Hirsch",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1001",
         "college": "Isaac Breuer College",
         "credits": 2.5,
         "department": "Judaic Studies",
         "display": {
            "dow": "TR",
            "end": "11:55am",
            "start": "11:00am"
         },
         "dow": [
            2,
            4
         ],
         "end": "11:55",
         "id": "34649",
         "instructor": "Allen M. Schwartz",
         "location": "FURST F204",
         "section": "IB6",
         "semester": "Fall 2016",
         "start": "11:00",
         "subject": "JUD",
         "title": "Jewish Engagements",
         "university": "Yeshiva University"
      },
      {
         "capacity": 0,
         "code": "1588",
         "college": "Isaac Breuer College",
         "credits": 5,
         "department": "Judaic Studies",
         "display": {
            "dow": "MTWR",
            "end": "10:55am",
            "start": "10:00am"
         },
         "dow": [
            1,
            2,
            3,
            4
         ],
         "end": "10:55",
         "id": "36136",
         "instructor": "Gabriel S. Danieli",
         "location": "FURST F217",
         "section": "IB2",
         "semester": "Fall 2016",
         "start": "10:00",
         "subject": "JUD",
         "title": "Names Not Numbers: Holocaust",
         "university": "Yeshiva University"
      },
      {
         "capacity": 50,
         "code": "1700",
         "college": "Isaac Breuer College",
         "credits": 5,
         "department": "Judaic Studies",
         "display": {
            "dow": "MTWR",
            "end": "10:55am",
            "start": "10:00am"
         },
         "dow": [
            1,
            2,
            3,
            4
         ],
         "end": "10:55",
         "id": "35854",
         "instructor": "Benjamin Shlomo Rofeh",
         "location": "RUBIN SHUL",
         "section": "IB2",
         "semester": "Fall 2016",
         "start": "10:00",
         "subject": "JUD",
         "title": "Chaburah Seminar",
         "university": "Yeshiva University"
      },
      {
         "capacity": 75,
         "code": "1910",
         "college": "Isaac Breuer College",
         "credits": 2.5,
         "department": "Judaic Studies",
         "display": {
            "dow": "MTWR",
            "end": "09:55am",
            "start": "09:00am"
         },
         "dow": [
            1,
            2,
            3,
            4
         ],
         "end": "9:55",
         "id": "34632",
         "instructor": "Benjamin Shlomo Rofeh",
         "location": "RUBIN SHUL",
         "section": "IB1",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "JUD",
         "title": "Explanation of Prayer",
         "university": "Yeshiva University"
      },
      {
         "capacity": 75,
         "code": "1910",
         "college": "Isaac Breuer College",
         "credits": 2.5,
         "department": "Judaic Studies",
         "display": {
            "dow": "MTWR",
            "end": "08:55am",
            "start": "08:00am"
         },
         "dow": [
            1,
            2,
            3,
            4
         ],
         "end": "8:55",
         "id": "34618",
         "instructor": "TBA",
         "location": "MORG BSMT",
         "section": "IB7",
         "semester": "Fall 2016",
         "start": "8:00",
         "subject": "JUD",
         "title": "Explanation of Prayer",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "2581",
         "college": "Isaac Breuer College",
         "credits": 5,
         "department": "Judaic Studies",
         "display": {
            "dow": "MTWR",
            "end": "10:55am",
            "start": "10:00am"
         },
         "dow": [
            1,
            2,
            3,
            4
         ],
         "end": "10:55",
         "id": "34624",
         "instructor": "Reuven Fink",
         "location": "FURST F211",
         "section": "IB2",
         "semester": "Fall 2016",
         "start": "10:00",
         "subject": "JUD",
         "title": "Contemporary Jewish Issues",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "3001H",
         "college": "Isaac Breuer College",
         "credits": 2.5,
         "department": "Judaic Studies",
         "display": {
            "dow": "MW",
            "end": "10:55am",
            "start": "10:00am"
         },
         "dow": [
            1,
            3
         ],
         "end": "10:55",
         "id": "36000",
         "instructor": "Ozer Glickman",
         "location": "FURST F207",
         "section": "IB2",
         "semester": "Fall 2016",
         "start": "10:00",
         "subject": "JUD",
         "title": "Psak Halakhah: Talmud to Today",
         "university": "Yeshiva University"
      },
      {
         "capacity": 15,
         "code": "4910",
         "college": "Isaac Breuer College",
         "credits": 2.5,
         "department": "Judaic Studies",
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
         "id": "34619",
         "instructor": "TBA",
         "location": "GLUECK BMIDRASH",
         "section": "IB8",
         "semester": "Fall 2016",
         "start": "12:00",
         "subject": "JUD",
         "title": "Beit Midrash - Ind. Study",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "1055",
         "college": "Isaac Breuer College",
         "credits": 2.5,
         "department": "Tanakh",
         "display": {
            "dow": "MW",
            "end": "06:44pm",
            "start": "05:49pm"
         },
         "dow": [
            1,
            3
         ],
         "end": "18:44",
         "id": "34621",
         "instructor": "Akiva Koenigsberg",
         "location": "FURST F301",
         "section": "I25",
         "semester": "Fall 2016",
         "start": "17:49",
         "subject": "TAN",
         "title": "Rashi on the Parshah",
         "university": "Yeshiva University"
      },
      {
         "capacity": 24,
         "code": "1305",
         "college": "Isaac Breuer College",
         "credits": 5,
         "department": "Tanakh",
         "display": {
            "dow": "MTWR",
            "end": "09:55am",
            "start": "09:00am"
         },
         "dow": [
            1,
            2,
            3,
            4
         ],
         "end": "9:55",
         "id": "35728",
         "instructor": "Hayyim Jeffrey V. Angel",
         "location": "FURST F212",
         "section": "IB1",
         "semester": "Fall 2016",
         "start": "9:00",
         "subject": "TAN",
         "title": "Sugyot & Parshanut in Tanakh",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "2141",
         "college": "Isaac Breuer College",
         "credits": 2.5,
         "department": "Tanakh",
         "display": {
            "dow": "MW",
            "end": "10:55am",
            "start": "10:00am"
         },
         "dow": [
            1,
            3
         ],
         "end": "10:55",
         "id": "35729",
         "instructor": "Hayyim Jeffrey V. Angel",
         "location": "FURST F212",
         "section": "IB2",
         "semester": "Fall 2016",
         "start": "10:00",
         "subject": "TAN",
         "title": "Shmuel II",
         "university": "Yeshiva University"
      },
      {
         "capacity": 25,
         "code": "2540H",
         "college": "Isaac Breuer College",
         "credits": 2.5,
         "department": "Tanakh",
         "display": {
            "dow": "TR",
            "end": "10:55am",
            "start": "10:00am"
         },
         "dow": [
            2,
            4
         ],
         "end": "10:55",
         "id": "35853",
         "instructor": "Hayyim Jeffrey V. Angel",
         "location": "FURST F212",
         "section": "IB5",
         "semester": "Fall 2016",
         "start": "10:00",
         "subject": "TAN",
         "title": "Yechezkel",
         "university": "Yeshiva University"
      },
      {
         "capacity": 8,
         "code": "4011",
         "college": "Belz School of Jewish Music",
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
         "semester": "Fall 2016",
         "start": "17:48",
         "subject": "JMU",
         "title": "Voice Culture I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 8,
         "code": "4012",
         "college": "Belz School of Jewish Music",
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
         "semester": "Fall 2016",
         "start": "18:50",
         "subject": "JMU",
         "title": "Voice Culture II",
         "university": "Yeshiva University"
      },
      {
         "capacity": 8,
         "code": "4042",
         "college": "Belz School of Jewish Music",
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
         "semester": "Fall 2016",
         "start": "17:48",
         "subject": "JMU",
         "title": "Keyboard Work II",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "4111",
         "college": "Belz School of Jewish Music",
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
         "semester": "Fall 2016",
         "start": "17:48",
         "subject": "JMU",
         "title": "Cantillation I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "4311",
         "college": "Belz School of Jewish Music",
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
         "semester": "Fall 2016",
         "start": "17:48",
         "subject": "JMU",
         "title": "Friday Evening Service",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "4342",
         "college": "Belz School of Jewish Music",
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
         "semester": "Fall 2016",
         "start": "18:50",
         "subject": "JMU",
         "title": "Sabbath II",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "4411",
         "college": "Belz School of Jewish Music",
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
         "semester": "Fall 2016",
         "start": "18:50",
         "subject": "JMU",
         "title": "Ma'ariv 3 Reg/Yamim Noraim",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "4631",
         "college": "Belz School of Jewish Music",
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
         "semester": "Fall 2016",
         "start": "18:50",
         "subject": "JMU",
         "title": "Special Occasions",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "4671",
         "college": "Belz School of Jewish Music",
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
         "semester": "Fall 2016",
         "start": "16:45",
         "subject": "JMU",
         "title": "Sephardic Liturgical Music I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "4672",
         "college": "Belz School of Jewish Music",
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
         "semester": "Fall 2016",
         "start": "17:48",
         "subject": "JMU",
         "title": "Sephardic Liturgical Music II",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "4711",
         "college": "Belz School of Jewish Music",
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
         "semester": "Fall 2016",
         "start": "18:50",
         "subject": "JMU",
         "title": "Hebrew Calligraphy I",
         "university": "Yeshiva University"
      },
      {
         "capacity": 20,
         "code": "4714",
         "college": "Belz School of Jewish Music",
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
         "semester": "Fall 2016",
         "start": "17:48",
         "subject": "JMU",
         "title": "Hebrew Calligraphy IV",
         "university": "Yeshiva University"
      }      
    ]
  ;
  CoursesArray.forEach(function(element) {
    Courses.insert(element);
  });
}
