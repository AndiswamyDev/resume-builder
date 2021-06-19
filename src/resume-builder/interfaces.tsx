export interface SideBarFieldsInterfaces {
    handleFieldTypes: (type: string, event: React.ChangeEvent<HTMLInputElement>) => void;
    handleAddDetails: (from: string) => void;
    headings: any;
}

export interface FieldToFillInterfaces {
    fromType: string;
    handleFieldTypes: (type: string, event: React.ChangeEvent<HTMLInputElement>) => void;
    handleAddDetails: (from: string) => void;
    headings: any
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
    fromType: string
}