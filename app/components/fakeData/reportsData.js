const data = {
    years:[
        {
            year:2020,
            total_kWh:4000,
            devices:[
                {name:'Hairdryer', total_kWh:300},
                {name:'Washing Machine', total_kWh:900},
                {name:'Dryer', total_kWh:800},
                {name:'Boiler', total_kWh:2000}
            ]
        },
        {
            year:2021,
            total_kWh:1000,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        }
    ],
    months:[
        {
            month:1,
            year:2020,
            total_kWh:4000,
            devices:[
                {name:'Hairdryer', total_kWh:300},
                {name:'Washing Machine', total_kWh:900},
                {name:'Dryer', total_kWh:800},
                {name:'Boiler', total_kWh:2000}
            ]
        },
        {
            month:2,
            year:2020,
            total_kWh:1000,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
        {
            month:3,
            year:2020,
            total_kWh:1000,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
        {
            month:4,
            year:2020,
            total_kWh:1000,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
        {
            month:5,
            year:2020,
            total_kWh:1000,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
        {
            month:6,
            year:2020,
            total_kWh:1000,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
        {
            month:7,
            year:2020,
            total_kWh:1000,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
        {
            month:8,
            year:2020,
            total_kWh:1000,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
        {
            month:9,
            year:2020,
            total_kWh:1000,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
        {
            month:10,
            year:2020,
            total_kWh:1000,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
        {
            month:11,
            year:2020,
            total_kWh:1000,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
        {
            month:12,
            year:2020,
            total_kWh:1000,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
    ],
    //Real data would assume that there's data for every day throughout the year, but will just repeat.(month 1) 
    days:[
        {
            day:1,
            month:1,
            year:2020,
            total_kWh:20,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
        {
            day:2,
            month:1,
            year:2020,
            total_kWh:30,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
        {
            day:3,
            month:1,
            year:2020,
            total_kWh:40,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
        {
            day:4,
            month:1,
            year:2020,
            total_kWh:10,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
        {
            day:5,
            month:1,
            year:2020,
            total_kWh:40,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
        {
            day:6,
            month:1,
            year:2020,
            total_kWh:45,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
        {
            day:7,
            month:1,
            year:2020,
            total_kWh:34,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
        {
            day:8,
            month:1,
            year:2020,
            total_kWh:13,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
        {
            day:9,
            month:1,
            year:2020,
            total_kWh:14,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
        {
            day:10,
            month:1,
            year:2020,
            total_kWh:54,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
        {
            day:11,
            month:1,
            year:2020,
            total_kWh:43,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
        {
            day:12,
            month:1,
            year:2020,
            total_kWh:22,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
        {
            day:13,
            month:1,
            year:2020,
            total_kWh:50,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
        {
            day:14,
            month:1,
            year:2020,
            total_kWh:35,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
        {
            day:15,
            month:1,
            year:2020,
            total_kWh:24,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
        {
            day:16,
            month:1,
            year:2020,
            total_kWh:28,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
        {
            day:17,
            month:1,
            year:2020,
            total_kWh:34,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
        {
            day:18,
            month:1,
            year:2020,
            total_kWh:26,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
        {
            day:19,
            month:1,
            year:2020,
            total_kWh:15,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
        {
            day:20,
            month:1,
            year:2020,
            total_kWh:20,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
        {
            day:21,
            month:1,
            year:2020,
            total_kWh:30,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
        {
            day:22,
            month:1,
            year:2020,
            total_kWh:40,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
        {
            day:23,
            month:1,
            year:2020,
            total_kWh:50,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
        {
            day:24,
            month:1,
            year:2020,
            total_kWh:40,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
        {
            day:25,
            month:1,
            year:2020,
            total_kWh:35,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
        {
            day:26,
            month:1,
            year:2020,
            total_kWh:20,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
        {
            day:27,
            month:1,
            year:2020,
            total_kWh:20,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
        {
            day:28,
            month:1,
            year:2020,
            total_kWh:20,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
        {
            day:29,
            month:1,
            year:2020,
            total_kWh:20,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
        {
            day:30,
            month:1,
            year:2020,
            total_kWh:20,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
        {
            day:31,
            month:1,
            year:2020,
            total_kWh:20,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        }
    ],
    //Same goes for hourly data, would be able to get historical but will supply default for one day (day 1).
    hours:[
        {
            hour:1,
            day:1,
            month:1,
            year:2020,
            total_kWh:20,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
        {
            hour:2,
            day:1,
            month:1,
            year:2020,
            total_kWh:30,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
        {
            hour:3,
            day:1,
            month:1,
            year:2020,
            total_kWh:40,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
        {
            hour:4,
            day:1,
            month:1,
            year:2020,
            total_kWh:10,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
        {
            hour:5,
            day:1,
            month:1,
            year:2020,
            total_kWh:40,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
        {
            hour:6,
            day:1,
            month:1,
            year:2020,
            total_kWh:45,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
        {
            hour:7,
            day:1,
            month:1,
            year:2020,
            total_kWh:34,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
        {
            hour:8,
            day:1,
            month:1,
            year:2020,
            total_kWh:13,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
        {
            hour:9,
            day:1,
            month:1,
            year:2020,
            total_kWh:14,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
        {
            hour:10,
            day:1,
            month:1,
            year:2020,
            total_kWh:54,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
        {
            hour:11,
            day:1,
            month:1,
            year:2020,
            total_kWh:43,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
        {
            hour:12,
            day:1,
            month:1,
            year:2020,
            total_kWh:22,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
        {
            hour:13,
            day:1,
            month:1,
            year:2020,
            total_kWh:50,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
        {
            hour:14,
            day:1,
            month:1,
            year:2020,
            total_kWh:35,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
        {
            hour:15,
            day:1,
            month:1,
            year:2020,
            total_kWh:24,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
        {
            hour:16,
            day:1,
            month:1,
            year:2020,
            total_kWh:28,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
        {
            hour:17,
            day:1,
            month:1,
            year:2020,
            total_kWh:34,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
        {
            hour:18,
            day:1,
            month:1,
            year:2020,
            total_kWh:26,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
        {
            hour:19,
            day:1,
            month:1,
            year:2020,
            total_kWh:15,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
        {
            hour:20,
            day:1,
            month:1,
            year:2020,
            total_kWh:20,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
        {
            hour:21,
            day:1,
            month:1,
            year:2020,
            total_kWh:30,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
        {
            hour:22,
            day:1,
            month:1,
            year:2020,
            total_kWh:40,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
        {
            hour:23,
            day:1,
            month:1,
            year:2020,
            total_kWh:50,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
        {
            hour:24,
            day:1,
            month:1,
            year:2020,
            total_kWh:40,
            devices:[
                {name:'Hairdryer', total_kWh:30},
                {name:'Washing Machine', total_kWh:90},
                {name:'Dryer', total_kWh:80},
                {name:'Boiler', total_kWh:200}
            ]
        },
        
    ]
}

module.exports = data;
