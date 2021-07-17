function upperCase(value){
    return value.toUpperCase();
}

const Data = [
    {
        "Basic Information": [
            {
                'Field': "NAME",
                'Description': "ENTER VENDOR NAME",
                'Function': upperCase,
            },
            {
                'Field': "PHONE",
                'Description': "ENTER VENDOR PHONE ",
                'Function': upperCase,                
            },
            {
                'Field': "EMAIL",
                'Description': "ENTER VENDOR EMAIL",
                'Function': upperCase,                                 
            },
            {
                'Field': "WHATSAPP",
                'Description': "ENTER VENDOR WHATSAPP",
                'Function': upperCase,                 
            },
        ]
    },
    {
        "Shop Information": [
            {
                'Field': "SHOP NAME",
                'Description': "ENTER SHOP NAME",
                'Function': upperCase,                 
            },
            {
                'Field': "SHOP ADDRESS",
                'Description': "ENTER SHOP ADDRESS",
                'Function': upperCase,                
            },
            {
                'Field': "SHOP ADDRESS",
                'Description': "ENTER SHOP ADDRESS",
                'Function': upperCase,                 
            },
            {
                'Field': "SHOP PHONE",
                'Description': "ENTER SHOP PHONE",
                'Function': upperCase, 
            }
        ]
    },

]

export default Data;