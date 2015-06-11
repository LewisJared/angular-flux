/// <reference path="dispatcher.ts" />
// <reference path="constants.ts" />
import Dispatcher = require('./dispatcher');
import Constants = require('./constants');

export class Actions {
    /**
     * Create a new task
     * @param {string} text Task description
     */
    create(text: string) {
        Dispatcher.dispatch({
            actionType: Constants.TODO_CREATE,
            text: text
        });
    }

    /**
     * Update the text of a task
     * @param {Number} id   Task id
     * @param {string} text New description
     */
    updateText(id: Number, text: string) {
        Dispatcher.dispatch({
            actionType: Constants.TODO_UPDATE_TEXT,
            id: id,
            text: text
        });
    }

    /**
     * Set a tasks completeness
     * @param {Number}  id       Task id
     * @param {Boolean} complete If true, set task complete
     */
    setComplete(id: Number, complete: Boolean) {
        var action = complete ? Constants.TODO_COMPLETE : Constants.TODO_UNDO_COMPLETE;
        Dispatcher.dispatch({
            actionType: action,
            id: id
        });
    }

    /**
     * Deletes a task
     * @param {Number} id Task id
     */
    deleteTask(id: Number) {
        Dispatcher.dispatch({
            actionType: Constants.TODO_DESTROY,
            id: id
        })
    }

    /**
     * Delete all tasks that are complete
     */
    deleteCompletedTasks() {
        Dispatcher.dispatch({
            action: Constants.TODO_DESTROY_COMPLETED
        });
    }
}

