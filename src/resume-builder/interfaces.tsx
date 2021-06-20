export interface SideBarFieldsInterfaces {
    handleFieldTypes: (type: string, event: React.ChangeEvent<HTMLInputElement>) => void;
    handleAddItemModal: (from: string) => void;
    headings: any;
    itemsToAdd: any;
    hanldeItemsActions: (isAdding: boolean, from: string, index: number) => void;
}

export interface FieldToFillInterfaces {
    fromType: string;
    handleFieldTypes: (type: string, event: React.ChangeEvent<HTMLInputElement>) => void;
    handleAddItemModal: (from: string) => void;
    headings: any;
    itemsToAdd: any;
    hanldeItemsActions: (isAdding: boolean, from: string, index: number) => void;
}

export interface UserProfileInterfaces {
    fromType: string;
    handleFieldTypes: (type: string, event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface PreviewResumeInterfaces {
    templateProperties: any;
    userProfile: {
        resumeTitle: string,
        firstName: string,
        lastName: string,
        address: string,
        city: string,
        country: string,
        pinCode: number,
        phoneNumber: number,
        emailAddress: string,
    }
}

export interface AddItemModalInterfaces {
    show: boolean;
    onClose: () => void;
    fromType: string;
    hanldeItemsActions: (isAdding: boolean, from: string, index: number) => void;
}

export interface FormItemsListElementInterfaces {
    heading: string;
    itemsToAdd: any;
    hanldeItemsActions: (isAdding: boolean, from: string, index: number) => void;
}

export interface CreateItemProps {
    item: any,
    heading: string;
    hanldeItemsActions: (isAdding: boolean, from: string, index: number) => void;
}