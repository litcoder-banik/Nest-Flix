import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdminEntity } from "./admin.entity";

@Module({
    imports: [TypeOrmModule.forFeature([
        AdminEntity,
    ])],
    
    controllers: [],
    providers: [],
})

export class AdminModule{}