import { $ } from '@wdio/globals';
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class IndexPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get title() {
        return $('#container-orderbrowser---master--masterHeaderTitle-inner');
    }
    public get list() {
        return $('#container-orderbrowser---master--list-listUl');
    }
    public async items() {
        return await $$('#container-orderbrowser---master--list-listUl > li');
    }
    public get searchField() {
        return $('#container-orderbrowser---master--searchField-I');
    }
    public get searchSubmit() {
        return $('#container-orderbrowser---master--searchField-search');
    }
    public get listText() {
        return $('#container-orderbrowser---master--list-nodata-text');
    }
    public makeSearch(search: string) {
        this.searchField.waitForEnabled();
        this.searchField.click();
        this.searchField.setValue(search);
        this.searchSubmit.click();
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    public open() {
        return super.open('');
    }
}

export default new IndexPage();
