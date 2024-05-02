import { arQuery } from '@/core/ar-query/ar-query-lib'

export class TransactionService {
	#BASE_URL = '/transations'

	getAll(onSuccess) {
		return arQuery({
			path:
				this.#BASE_URL +
				`?${new URLSearchParams({
					orderBy: 'desc',
				})}`,
			onSuccess,
		})
	}
}
