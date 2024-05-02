import { arQuery } from '@/core/ar-query/ar-query-lib'

export class StatisticService {
	#BASE_URL = '/statistics'

	main(onSuccess) {
		return arQuery({
			pathL: this.#BASE_URL,
			onSuccess,
		})
	}
}
