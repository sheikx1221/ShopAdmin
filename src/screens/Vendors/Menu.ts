interface VendorMenu {
    ScreenName: string,
    Description: string,
    Navigate: string
}

const Menus: VendorMenu[] = [
    {
        ScreenName: "Add Vendor",
        Description: "Add a new Vendor into database",
        Navigate: "Add_Vendor"
    },
    {
        ScreenName: "View Vendors",
        Description: "See all Vendors in a list",
        Navigate: "View_Vendors"
    },
    {
        ScreenName: "Add Transaction",
        Description: "Add A Vendor Transaction in database",
        Navigate: "Add_Transaction"
    },
    {
        ScreenName: "View Transactions",
        Description: "View Transactions of Vendors from database",
        Navigate: "View_Transaction"
    },
    {
        ScreenName: "View Calendar",
        Description: "View Calendar with payments information",
        Navigate: "View_Transaction"
    }
]

export { Menus }; 