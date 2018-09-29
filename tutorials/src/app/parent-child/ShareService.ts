import { Component, OnInit, Injectable } from '@angular/core';

@Injectable()

export class ShareService {
    list: string[] = [];
    append(str: string){
        this.list.push(str);
    }
}
