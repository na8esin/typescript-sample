class DTO {
    [key: string]: any
    name?: string;
}

function mergeDtoWithFirestoreRecord(dto: DTO, firestoreObject: any) {
    Object.keys(firestoreObject).map((key: string) => {
        // Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'DTO'.
        //No index signature with a parameter of type 'string' was found on type 'DTO'
        if (dto[key] === undefined) {
            dto[key] = firestoreObject[key];
        }
    });
}
export { };