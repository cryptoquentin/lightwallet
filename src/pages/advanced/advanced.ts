import { Component } from '@angular/core';
import { IonicPage, NavController, Platform } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { AppGlobals } from '../../app/app.global';

@IonicPage()
@Component({
    selector: 'page-advanced',
    templateUrl: 'advanced.html',
})
export class AdvancedPage {

    network: string

    constructor(
        public nav: NavController,
        public translate: TranslateService,
        private globals: AppGlobals,
        public platform: Platform,
    ) {
        this.network = this.globals.network
    }

    ionViewDidEnter() {

    }

    BurnPage = () => this.nav.push("BurnPage")

    MultisignaturePage = () => this.nav.push("MultisignaturePage")

    PluginSettingsPage = e => this.nav.push("PluginSettingsPage")

    ExportMasterPublicKeyPage = e => this.nav.push("ExportXpubPage")

    DecodeTxPage = e => this.nav.push("DecodeTxPage")

    EthBridgePage = e => this.nav.push("EthBridgePage")

}
