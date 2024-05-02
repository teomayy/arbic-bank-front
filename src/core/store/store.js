//Singleton pattern

import { USER_STORAGE_KEY } from '@/constants/auth.constants'
import { StorageService } from '../services/storage.service'

/**
 * Store class implements the Singleton pattern, providing a centeralized storage and state management solution.
 * It manages user login/logout and notifies observers of any changes in the state.
 */
export class Store {
	/**
	 * Create a new Store instance.
	 * @param {Object} initialState - The initial state for the store.
	 */
	constructor(initialState) {
		this.observers = []

		this.storageService = new StorageService()
		const savedUser = this.storageService.getItem(USER_STORAGE_KEY)

		const state = savedUser ? { user: savedUser } : initialState

		this.state = new Proxy(state, {
			set: (target, property, value) => {
				target[property] = value

				this.notify()
				return true
			},
		})
	}

	/**
	 * Get the singleton instance of the Store.
	 * @returns {Store}	The singleton instance of the Store.
	 */
	static getInstance() {
		if (!Store.instance) {
			Store.instance = new Store({ user: null })
		}
		return Store.instance
	}
}
