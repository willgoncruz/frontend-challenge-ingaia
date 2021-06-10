import { action, makeAutoObservable } from 'mobx';

export default class SearchStore {
    page = 1
    info = {}
    term = "Morty"
    // characters = []

    constructor() {
        makeAutoObservable(this);
    }

    nextPage = action(() => {
        this.page = Math.min(this.info.pages, this.page + 1);
    })

    previousPage = action(() => {
        this.page = Math.max(0, this.page - 1);
    })

    updateStore = action((info) => {
        this.info = info;
    });
}