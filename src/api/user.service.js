import { arQuery } from '@/core/ar-query/ar-query-lib'

export class UserService {
	#BASE_URL = '/users'

	getAll(searchTerm, onSuccess) {
		return arQuery({
			path: `${this.#BASE_URL}${
				searchTerm
					? `${new URLSearchParams({
							searchTerm,
						})}`
					: ''
			}`,
			onSuccess,
		})
	}
}
