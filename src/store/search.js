import { action, makeAutoObservable } from 'mobx';

export default class SearchStore {
    page = 1
    term = ""

    constructor() {
        makeAutoObservable(this);
    }

    updatePage = action((page) => {
        this.page = page;
    })

    changeTerm = action((term) => {
        this.term = term;
    });
}