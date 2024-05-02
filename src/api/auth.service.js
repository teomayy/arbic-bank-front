import { arQuery } from '@/core/ar-query/ar-query-lib'
import { NotificationService } from '@/core/services/notification.service'

export class AuthService {
	#BASE_URL = '/auth'

	constructor() {
		//store
		this.notificationService = new NotificationService()
	}

	main(type, body) {
		return arQuery({
			path: `${this.#BASE_URL}/${type}`,
			body,
			onSuccess: data => {
				//login store
				this.notificationService.show('success', 'You successfully logged in!')
			},
			method: 'POST',
		})
	}
}
