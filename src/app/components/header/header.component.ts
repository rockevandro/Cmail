import { Component } from "@angular/core";
import { PageDataService } from 'src/app/services/page-data.service';

@Component({
    selector: 'cmail-header',
    templateUrl: './header.component.html',
    styleUrls: [
        './header.component.css',
        './header-search.css'
    ]
})
export class HeaderComponent {
    private _isMenuOpen = false;

    tituloDaPagina = 'CMail';

    constructor(private pageDataService: PageDataService) {
        this.pageDataService.titulo
            .subscribe(novoTitulo => this.tituloDaPagina = novoTitulo);
    }

    get isMenuOpen() {
        return this._isMenuOpen
    }

    toggleMenu() {
        this._isMenuOpen = !this.isMenuOpen
    }
}