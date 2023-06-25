import { Body, Controller, Get, Post, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { AdminService } from "./admin.service";
import { AdminSessionGuard } from "./session.gaurd";

@Controller("/admin")
export class AdminController {

    constructor(private adminservice: AdminService) { }


    //-----Add Movie-----//
    @Post("/addmovie")
    @UseGuards(AdminSessionGuard)
    addMovie(
        @Body('title') title: string,
        @Body('description') description: string,
        @Body('relesedate') relesedate: Date,
        @Body('duration') duration: number,
        @Body('rating') rating: number,
        @Body('createat') createat: Date,
        @Body('updateat') updateat: Date,
        @Body('actors') actorNames: string[],
        @Body('director') directorNames: string[],
    ): any {
        const movie = this.adminservice.addMovie(title, description, relesedate, duration, rating, createat, updateat, actorNames, directorNames);
        return { message: 'Movie registered successfully', data: movie };
    }


    //-----Add Tv - Serires-----//
    @Post("/addtv")
    @UseGuards(AdminSessionGuard)
    addTv(
        @Body('title') title: string,
        @Body('description') description: string,
        @Body('relesedate') relesedate: Date,
        @Body('season') season: number,
        @Body('rating') rating: number,
        @Body('createat') createat: Date,
        @Body('updateat') updateat: Date,
        @Body('actors') actorNames: string[],
        @Body('director') directorNames: string[],
    ): any {
        const tv = this.adminservice.addTv(title, description, relesedate, season, rating, createat, updateat, actorNames, directorNames);
        return { message: 'Tv-seires registered successfully', data: tv };
    }


    //-----Show All Movies with Actor and Director names-----//
    @Get("/showmovie")
    @UseGuards(AdminSessionGuard)
    async slowallMovie() {
        const movies = await this.adminservice.slowallMovie();
        return { data: movies };
    }


    //-----Show All Tv-series with Actor and Director names-----//
    @Get("/showtv")
    @UseGuards(AdminSessionGuard)
    async slowallTv() {
        const tv = await this.adminservice.slowallTv();
        return { data: tv };
    }
}