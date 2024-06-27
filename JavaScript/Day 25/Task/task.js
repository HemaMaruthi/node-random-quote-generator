const school = {
    classes: [
      {
        className: "Math",
        students: [
          {
            name: "Mahesh",
            grades: [85, 92, 88],
          },
          {
            name: "Hema",
            grades: [78, 81, 85],
          },
          {
            name: "Suresh",
            grades: [90, 87, 91],
          },
        ],
      },
      {
        className: "Science",
        students: [
          {
            name: "Naresh",
            grades: [92, 85, 89],
          },
          {
            name: "Uma",
            grades: [88, 91, 92],
          },
          {
            name: "Priya",
            grades: [84, 78, 80],
          },
        ],
      },
    ],
  };

  let findName = school.classes.map((value)=>{
    console.log(value.className)
    return value.className
  })
  console.log(findName)



