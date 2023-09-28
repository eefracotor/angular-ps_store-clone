import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
	// @Input()
	nameGame:string =''
	// @Input()
	infoCard:string =''
	// @Input()
	photo:string =''
	private id:string | null = '0'

	constructor(
		private route:ActivatedRoute
	) { }
	ngOnInit(): void {
		this.route.paramMap.subscribe( value =>
			this.id = value.get("id")
		)
		this.getInfoGame(this.id)
	}

	getInfoGame(id:string | null) {
		const result = dataFake.filter(article => article.id == id)[0]
		this.nameGame = result.nameGame
		this.infoCard = result.description
		this.photo = result.potho
		// console.log(result.nameGame)
	}
}
