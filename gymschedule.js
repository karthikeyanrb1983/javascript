
let video = [
    {
        name: 'Reduce Fat',
        video: 'video1',
        date: new Date(2020, 2, 13),

    },
    {
        name: 'Reduce Fat',
        video: 'vide4',
        date:  new Date(2020, 2, 13),


    },
    {
        name: 'Reduce ApDoomain',
        video: 'video2',
        date:  new Date(2020, 2, 13),


    },
    {
        name: 'Reduce thy',
        video: 'video3',
        date:  new Date(2020, 2, 13),


    }
]

let dateFilter = video.filter((item)=>{
    return  item.date == (date.getDay() + 1)
})

// let weakFilter = video.filter((item)=>{
//     let date = new Date();
    
//      if (item.date == date )
//      {
//          return item
//      }
// })

// obj.forEach(data => {
//     console.log(data.name);
//     data.series = data.series.filter((item) => {
//         item.date.getTime() >= fromDate.getTime() && item.date.getTime() <= toDate.getTime();
//     });
// });

console.log(dateFilter);