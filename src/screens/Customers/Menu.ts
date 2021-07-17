interface CustomerMenu {
    ScreenName: string,
    Description: string,
    Navigate: string
}

const Menu: CustomerMenu [] = [
    {
        ScreenName: "Add Customer",
        Description: "Add New Customer into database",
        Navigate: "Add_Customer"
    },
    {
        ScreenName: "Add Village",
        Description: "Add New Village into database",
        Navigate: "Add_Village"
    },
    {
        ScreenName: "View Customers",
        Description: "See All Customers from database",
        Navigate: "View_Customer"
    },
    {
        ScreenName: "View Villages",
        Description: "See All Villages from database",
        Navigate: "View_Villages"
    },
    {
        ScreenName: "Power Search",
        Description: "Search Customer with Extra Criteria",
        Navigate: "Power_Search"
    },
    {
        ScreenName: "Remove Customer",
        Description: "Remove Customer and relevant information from database",
        Navigate: "Remove_Customer"
    }
];

export { Menu };