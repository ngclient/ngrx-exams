export class RolesModel implements IRolesModel {
    id: any | undefined;
    name: any | null;
    
    constructor(data?: IRolesModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }
}

export interface IRolesModel {
    id: any | undefined;
    name: any | null;
}