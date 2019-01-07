import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})

export class PostListItemComponentComponent implements OnInit {

	@Input() title: string;
	@Input() content: string;
	loveIts = 0;
	@Input() date: Date;


	constructor() {}

	ngOnInit() {
	}

	getLoveScore() {
		return this.loveIts;
	}

	addLoveScore() {
		this.loveIts = this.loveIts + 1;
	}

	removeLoveScore() {
		this.loveIts = this.loveIts - 1;
	}

	getColor() {
		if (this.loveIts < 0) {
			return 'red'
		} else if (this.loveIts > 0){
			return 'green'
		} else {
			return 'black'
		}
	}

}
