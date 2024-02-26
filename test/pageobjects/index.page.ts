import { $ } from '@wdio/globals';
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get title() {
        return $('#container-orderbrowser---master--masterHeaderTitle-inner');
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    public open() {
        return super.open('');
    }
}

export default new LoginPage();
