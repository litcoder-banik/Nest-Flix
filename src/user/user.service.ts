import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService{
    

    async getDashboard(): Promise<any>{
        return "This is Dashboard.";
    }
}