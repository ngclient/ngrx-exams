export class UsersModel implements IUsersModel {
    id: any | undefined;
    username: any | null;
    password: any | null;

    constructor(data?: IUsersModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }
}

export interface IUsersModel {
    id: any | undefined;
    username: any | null;
    password: any | null;
}