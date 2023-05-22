import Item from "../Item/item";
import { activeItem, clickEvent, undoManager } from "../sketch";
import refresh from "./refresh";
import UndoManager from 'undo-manager';

export default function handleJsonFile(file) {
    
    let uploadedItemsString = JSON.stringify(file.data);

    if (uploadedItemsString) {
        // Convert the JSON string back to an object
        let uploadedItems = JSON.parse(uploadedItemsString);

        Item.loadItems(uploadedItems);
        activeItem = uploadedItems[uploadedItems.length-1];
        undoManager = new UndoManager();
        refresh();
    }
}