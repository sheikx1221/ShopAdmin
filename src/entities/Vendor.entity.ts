export type Vendor = {
    id: string,
    VendorName: string,
    VendorPhone?: string,
    VendorEmail?: string,
    VendorWhatsapp?: string,
    ShopName?: string,
    Place: string,
    Address?: string,
    ShopPhone?: string,
    StartingBalance: number,
    VendorDay?: string,
    VendorTurn?: string,
    PageNumber: string
}

export function wrapInVendors(array: any[]): Vendor[] {
    return array;
}

export function wrapInVendor(item: any): Vendor {
    return item;
}