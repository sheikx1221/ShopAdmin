interface EmployeeMenu {
    ScreenName: string,
    Description: string,
    Navigate: string
}

const Menu: EmployeeMenu [] = [
    {
        ScreenName: "Add Employee",
        Description: "Add a new Employee in database",
        Navigate: "Add_Employee"
    },
    {
        ScreenName: "View Employees",
        Description: "View all Employees added in database",
        Navigate: "View_Employees"
    },
    {
        ScreenName: "Mark Attendance",
        Description: "Mark Attendance for day of Employees",
        Navigate: "Mark_Attendance"
    },
    {
        ScreenName: "View Attendance Summary",
        Description: "See Attendance Summary of an Employee",
        Navigate: "Attendance_Summary"
    },
    {
        ScreenName: "Remove Employee",
        Description: "Remove an Employee from database",
        Navigate: "Delete_Employee"
    }
]

export { Menu };