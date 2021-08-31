import IList from "./IList";
import IListItem from "./IListItem";

export default interface IState {
    lists: IList[];
    items: IListItem[];
    activeListId: string | null;
    currency: string;
    drawer: boolean;
    itemForm: boolean;
    listForm: boolean;
}